var xf=Object.defineProperty;var bf=(n,t,e)=>t in n?xf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Kt=(n,t,e)=>bf(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="176",as={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yf=0,Du=1,wf=2,gd=1,Mf=2,Ri=3,ar=0,Un=1,Xe=2,rr=0,ls=1,Lu=2,Iu=3,Uu=4,Sf=5,Mr=100,Ef=101,Tf=102,Cf=103,Af=104,Pf=200,Rf=201,Df=202,Lf=203,kl=204,Bl=205,If=206,Uf=207,Nf=208,Of=209,Ff=210,kf=211,Bf=212,Vf=213,zf=214,Vl=0,zl=1,Hl=2,ds=3,Gl=4,Wl=5,jl=6,Xl=7,Sa=0,Hf=1,Gf=2,sr=0,Wf=1,jf=2,Xf=3,qf=4,Yf=5,$f=6,Kf=7,vd=300,ps=301,fs=302,ql=303,Yl=304,Ea=306,qs=1e3,Tr=1001,$l=1002,ni=1003,Zf=1004,Co=1005,hi=1006,Ka=1007,Cr=1008,fi=1009,_d=1010,xd=1011,Ys=1012,Ic=1013,Pr=1014,Di=1015,so=1016,Uc=1017,Nc=1018,$s=1020,bd=35902,yd=1021,wd=1022,ei=1023,Ks=1026,Zs=1027,Md=1028,Oc=1029,Sd=1030,Fc=1031,kc=1033,ea=33776,na=33777,ia=33778,ra=33779,Kl=35840,Zl=35841,Jl=35842,Ql=35843,tc=36196,ec=37492,nc=37496,ic=37808,rc=37809,sc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,hc=37816,dc=37817,pc=37818,fc=37819,mc=37820,gc=37821,sa=36492,vc=36494,_c=36495,Ed=36283,xc=36284,bc=36285,yc=36286,Jf=3200,Qf=3201,Ta=0,tm=1,nr="",Xn="srgb",ms="srgb-linear",pa="linear",Be="srgb",Gr=7680,Nu=519,em=512,nm=513,im=514,Td=515,rm=516,sm=517,om=518,am=519,Ou=35044,Fu="300 es",Li=2e3,fa=2001;class Nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oa=Math.PI/180,ma=180/Math.PI;function oo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Me(n,t,e){return Math.max(t,Math.min(e,n))}function lm(n,t){return(n%t+t)%t}function Za(n,t,e){return(1-e)*n+e*t}function Us(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const cm={DEG2RAD:oa};class he{constructor(t=0,e=0){he.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,l=this.y-t.y;return this.x=s*i-l*r+t.x,this.y=s*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,i,r,s,l,c,d,f){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,l,c,d,f)}set(t,e,i,r,s,l,c,d,f){const g=this.elements;return g[0]=t,g[1]=r,g[2]=c,g[3]=e,g[4]=s,g[5]=d,g[6]=i,g[7]=l,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,l=i[0],c=i[3],d=i[6],f=i[1],g=i[4],v=i[7],x=i[2],w=i[5],M=i[8],T=r[0],y=r[3],m=r[6],O=r[1],U=r[4],R=r[7],W=r[2],z=r[5],u=r[8];return s[0]=l*T+c*O+d*W,s[3]=l*y+c*U+d*z,s[6]=l*m+c*R+d*u,s[1]=f*T+g*O+v*W,s[4]=f*y+g*U+v*z,s[7]=f*m+g*R+v*u,s[2]=x*T+w*O+M*W,s[5]=x*y+w*U+M*z,s[8]=x*m+w*R+M*u,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8];return e*l*g-e*c*f-i*s*g+i*c*d+r*s*f-r*l*d}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8],v=g*l-c*f,x=c*d-g*s,w=f*s-l*d,M=e*v+i*x+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(r*f-g*i)*T,t[2]=(c*i-r*l)*T,t[3]=x*T,t[4]=(g*e-r*d)*T,t[5]=(r*s-c*e)*T,t[6]=w*T,t[7]=(i*d-f*e)*T,t[8]=(l*e-i*s)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,l,c){const d=Math.cos(s),f=Math.sin(s);return this.set(i*d,i*f,-i*(d*l+f*c)+l+t,-r*f,r*d,-r*(-f*l+d*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new fe;function Cd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function um(){const n=Js("canvas");return n.style.display="block",n}const ku={};function aa(n){n in ku||(ku[n]=!0,console.warn(n))}function hm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function dm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bu=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fm(){const n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(r,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===Be&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Be&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nr?pa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,l){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:pa,toXYZ:Bu,fromXYZ:Vu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:t,whitePoint:i,transfer:Be,toXYZ:Bu,fromXYZ:Vu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}const Ie=fm();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wr;class mm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wr===void 0&&(Wr=Js("canvas")),Wr.width=t.width,Wr.height=t.height;const r=Wr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Wr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=Ui(s[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ui(e[i]/255)*255):e[i]=Ui(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gm=0;class Bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?s.push(Qa(r[l].image)):s.push(Qa(r[l]))}else s=Qa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vm=0;class Sn extends Nr{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,i=Tr,r=Tr,s=hi,l=Cr,c=ei,d=fi,f=Sn.DEFAULT_ANISOTROPY,g=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=oo(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qs:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qs:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=vd;Sn.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,e=0,i=0,r=1){ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*s,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*s,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*s,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const d=t.elements,f=d[0],g=d[4],v=d[8],x=d[1],w=d[5],M=d[9],T=d[2],y=d[6],m=d[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(f+w+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(f+1)/2,R=(w+1)/2,W=(m+1)/2,z=(g+x)/4,u=(v+T)/4,q=(M+y)/4;return U>R&&U>W?U<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(U),r=z/i,s=u/i):R>W?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=z/r,s=q/r):W<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(W),i=u/s,r=q/s),this.set(i,r,s,e),this}let O=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-M)/O,this.y=(v-T)/O,this.z=(x-g)/O,this.w=Math.acos((f+w+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _m extends Nr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth?i.depth:1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);const r={width:t,height:e,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let c=0;c<l;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Bc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends _m{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ad extends Sn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xm extends Sn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,l,c){let d=i[r+0],f=i[r+1],g=i[r+2],v=i[r+3];const x=s[l+0],w=s[l+1],M=s[l+2],T=s[l+3];if(c===0){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(c===1){t[e+0]=x,t[e+1]=w,t[e+2]=M,t[e+3]=T;return}if(v!==T||d!==x||f!==w||g!==M){let y=1-c;const m=d*x+f*w+g*M+v*T,O=m>=0?1:-1,U=1-m*m;if(U>Number.EPSILON){const W=Math.sqrt(U),z=Math.atan2(W,m*O);y=Math.sin(y*z)/W,c=Math.sin(c*z)/W}const R=c*O;if(d=d*y+x*R,f=f*y+w*R,g=g*y+M*R,v=v*y+T*R,y===1-c){const W=1/Math.sqrt(d*d+f*f+g*g+v*v);d*=W,f*=W,g*=W,v*=W}}t[e]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,r,s,l){const c=i[r],d=i[r+1],f=i[r+2],g=i[r+3],v=s[l],x=s[l+1],w=s[l+2],M=s[l+3];return t[e]=c*M+g*v+d*w-f*x,t[e+1]=d*M+g*x+f*v-c*w,t[e+2]=f*M+g*w+c*x-d*v,t[e+3]=g*M-c*v-d*x-f*w,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,l=t._order,c=Math.cos,d=Math.sin,f=c(i/2),g=c(r/2),v=c(s/2),x=d(i/2),w=d(r/2),M=d(s/2);switch(l){case"XYZ":this._x=x*g*v+f*w*M,this._y=f*w*v-x*g*M,this._z=f*g*M+x*w*v,this._w=f*g*v-x*w*M;break;case"YXZ":this._x=x*g*v+f*w*M,this._y=f*w*v-x*g*M,this._z=f*g*M-x*w*v,this._w=f*g*v+x*w*M;break;case"ZXY":this._x=x*g*v-f*w*M,this._y=f*w*v+x*g*M,this._z=f*g*M+x*w*v,this._w=f*g*v-x*w*M;break;case"ZYX":this._x=x*g*v-f*w*M,this._y=f*w*v+x*g*M,this._z=f*g*M-x*w*v,this._w=f*g*v+x*w*M;break;case"YZX":this._x=x*g*v+f*w*M,this._y=f*w*v+x*g*M,this._z=f*g*M-x*w*v,this._w=f*g*v-x*w*M;break;case"XZY":this._x=x*g*v-f*w*M,this._y=f*w*v-x*g*M,this._z=f*g*M+x*w*v,this._w=f*g*v+x*w*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],l=e[1],c=e[5],d=e[9],f=e[2],g=e[6],v=e[10],x=i+c+v;if(x>0){const w=.5/Math.sqrt(x+1);this._w=.25/w,this._x=(g-d)*w,this._y=(s-f)*w,this._z=(l-r)*w}else if(i>c&&i>v){const w=2*Math.sqrt(1+i-c-v);this._w=(g-d)/w,this._x=.25*w,this._y=(r+l)/w,this._z=(s+f)/w}else if(c>v){const w=2*Math.sqrt(1+c-i-v);this._w=(s-f)/w,this._x=(r+l)/w,this._y=.25*w,this._z=(d+g)/w}else{const w=2*Math.sqrt(1+v-i-c);this._w=(l-r)/w,this._x=(s+f)/w,this._y=(d+g)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,l=t._w,c=e._x,d=e._y,f=e._z,g=e._w;return this._x=i*g+l*c+r*f-s*d,this._y=r*g+l*d+s*c-i*f,this._z=s*g+l*f+i*d-r*c,this._w=l*g-i*c-r*d-s*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,l=this._w;let c=l*t._w+i*t._x+r*t._y+s*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=i,this._y=r,this._z=s,this;const d=1-c*c;if(d<=Number.EPSILON){const w=1-e;return this._w=w*l+e*this._w,this._x=w*i+e*this._x,this._y=w*r+e*this._y,this._z=w*s+e*this._z,this.normalize(),this}const f=Math.sqrt(d),g=Math.atan2(f,c),v=Math.sin((1-e)*g)/f,x=Math.sin(e*g)/f;return this._w=l*v+this._w*x,this._x=i*v+this._x*x,this._y=r*v+this._y*x,this._z=s*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,l=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*l,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*l,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*l,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,l=t.y,c=t.z,d=t.w,f=2*(l*r-c*i),g=2*(c*e-s*r),v=2*(s*i-l*e);return this.x=e+d*f+l*v-c*g,this.y=i+d*g+c*f-s*v,this.z=r+d*v+s*g-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,l=e.x,c=e.y,d=e.z;return this.x=r*d-s*c,this.y=s*l-i*d,this.z=i*c-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new B,zu=new lr;class Dr{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=s.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,Zn):Zn.fromBufferAttribute(s,l),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(t.matrixWorld),this.union(Ao)}const r=t.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Po.subVectors(this.max,Ns),jr.subVectors(t.a,Ns),Xr.subVectors(t.b,Ns),qr.subVectors(t.c,Ns),Xi.subVectors(Xr,jr),qi.subVectors(qr,Xr),mr.subVectors(jr,qr);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-mr.z,mr.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,mr.z,0,-mr.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-mr.y,mr.x,0];return!el(e,jr,Xr,qr,Po)||(e=[1,0,0,0,1,0,0,0,1],!el(e,jr,Xr,qr,Po))?!1:(Ro.crossVectors(Xi,qi),e=[Ro.x,Ro.y,Ro.z],el(e,jr,Xr,qr,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Si=[new B,new B,new B,new B,new B,new B,new B,new B],Zn=new B,Ao=new Dr,jr=new B,Xr=new B,qr=new B,Xi=new B,qi=new B,mr=new B,Ns=new B,Po=new B,Ro=new B,gr=new B;function el(n,t,e,i,r){for(let s=0,l=n.length-3;s<=l;s+=3){gr.fromArray(n,s);const c=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),d=t.dot(gr),f=e.dot(gr),g=i.dot(gr);if(Math.max(-Math.max(d,f,g),Math.min(d,f,g))>c)return!1}return!0}const bm=new Dr,Os=new B,nl=new B;let Ca=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):bm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,l=t.length;s<l;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(nl)),this.expandByPoint(Os.copy(t.center).sub(nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Ei=new B,il=new B,Do=new B,Yi=new B,rl=new B,Lo=new B,sl=new B;class Aa{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){il.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),Yi.copy(this.origin).sub(il);const s=t.distanceTo(e)*.5,l=-this.direction.dot(Do),c=Yi.dot(this.direction),d=-Yi.dot(Do),f=Yi.lengthSq(),g=Math.abs(1-l*l);let v,x,w,M;if(g>0)if(v=l*d-c,x=l*c-d,M=s*g,v>=0)if(x>=-M)if(x<=M){const T=1/g;v*=T,x*=T,w=v*(v+l*x+2*c)+x*(l*v+x+2*d)+f}else x=s,v=Math.max(0,-(l*x+c)),w=-v*v+x*(x+2*d)+f;else x=-s,v=Math.max(0,-(l*x+c)),w=-v*v+x*(x+2*d)+f;else x<=-M?(v=Math.max(0,-(-l*s+c)),x=v>0?-s:Math.min(Math.max(-s,-d),s),w=-v*v+x*(x+2*d)+f):x<=M?(v=0,x=Math.min(Math.max(-s,-d),s),w=x*(x+2*d)+f):(v=Math.max(0,-(l*s+c)),x=v>0?s:Math.min(Math.max(-s,-d),s),w=-v*v+x*(x+2*d)+f);else x=l>0?-s:s,v=Math.max(0,-(l*x+c)),w=-v*v+x*(x+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(il).addScaledVector(Do,x),w}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=t.radius*t.radius;if(r>s)return null;const l=Math.sqrt(s-r),c=i-l,d=i+l;return d<0?null:c<0?this.at(d,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,l,c,d;const f=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return f>=0?(i=(t.min.x-x.x)*f,r=(t.max.x-x.x)*f):(i=(t.max.x-x.x)*f,r=(t.min.x-x.x)*f),g>=0?(s=(t.min.y-x.y)*g,l=(t.max.y-x.y)*g):(s=(t.max.y-x.y)*g,l=(t.min.y-x.y)*g),i>l||s>r||((s>i||isNaN(i))&&(i=s),(l<r||isNaN(r))&&(r=l),v>=0?(c=(t.min.z-x.z)*v,d=(t.max.z-x.z)*v):(c=(t.max.z-x.z)*v,d=(t.min.z-x.z)*v),i>d||c>r)||((c>i||i!==i)&&(i=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,i,r,s){rl.subVectors(e,t),Lo.subVectors(i,t),sl.crossVectors(rl,Lo);let l=this.direction.dot(sl),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Yi.subVectors(this.origin,t);const d=c*this.direction.dot(Lo.crossVectors(Yi,Lo));if(d<0)return null;const f=c*this.direction.dot(rl.cross(Yi));if(f<0||d+f>l)return null;const g=-c*Yi.dot(sl);return g<0?null:this.at(g/l,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,e,i,r,s,l,c,d,f,g,v,x,w,M,T,y){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,l,c,d,f,g,v,x,w,M,T,y)}set(t,e,i,r,s,l,c,d,f,g,v,x,w,M,T,y){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=l,m[9]=c,m[13]=d,m[2]=f,m[6]=g,m[10]=v,m[14]=x,m[3]=w,m[7]=M,m[11]=T,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Yr.setFromMatrixColumn(t,0).length(),s=1/Yr.setFromMatrixColumn(t,1).length(),l=1/Yr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),f=Math.sin(r),g=Math.cos(s),v=Math.sin(s);if(t.order==="XYZ"){const x=l*g,w=l*v,M=c*g,T=c*v;e[0]=d*g,e[4]=-d*v,e[8]=f,e[1]=w+M*f,e[5]=x-T*f,e[9]=-c*d,e[2]=T-x*f,e[6]=M+w*f,e[10]=l*d}else if(t.order==="YXZ"){const x=d*g,w=d*v,M=f*g,T=f*v;e[0]=x+T*c,e[4]=M*c-w,e[8]=l*f,e[1]=l*v,e[5]=l*g,e[9]=-c,e[2]=w*c-M,e[6]=T+x*c,e[10]=l*d}else if(t.order==="ZXY"){const x=d*g,w=d*v,M=f*g,T=f*v;e[0]=x-T*c,e[4]=-l*v,e[8]=M+w*c,e[1]=w+M*c,e[5]=l*g,e[9]=T-x*c,e[2]=-l*f,e[6]=c,e[10]=l*d}else if(t.order==="ZYX"){const x=l*g,w=l*v,M=c*g,T=c*v;e[0]=d*g,e[4]=M*f-w,e[8]=x*f+T,e[1]=d*v,e[5]=T*f+x,e[9]=w*f-M,e[2]=-f,e[6]=c*d,e[10]=l*d}else if(t.order==="YZX"){const x=l*d,w=l*f,M=c*d,T=c*f;e[0]=d*g,e[4]=T-x*v,e[8]=M*v+w,e[1]=v,e[5]=l*g,e[9]=-c*g,e[2]=-f*g,e[6]=w*v+M,e[10]=x-T*v}else if(t.order==="XZY"){const x=l*d,w=l*f,M=c*d,T=c*f;e[0]=d*g,e[4]=-v,e[8]=f*g,e[1]=x*v+T,e[5]=l*g,e[9]=w*v-M,e[2]=M*v-w,e[6]=c*g,e[10]=T*v+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ym,t,wm)}lookAt(t,e,i){const r=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),$i.crossVectors(i,On),$i.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),$i.crossVectors(i,On)),$i.normalize(),Io.crossVectors(On,$i),r[0]=$i.x,r[4]=Io.x,r[8]=On.x,r[1]=$i.y,r[5]=Io.y,r[9]=On.y,r[2]=$i.z,r[6]=Io.z,r[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,l=i[0],c=i[4],d=i[8],f=i[12],g=i[1],v=i[5],x=i[9],w=i[13],M=i[2],T=i[6],y=i[10],m=i[14],O=i[3],U=i[7],R=i[11],W=i[15],z=r[0],u=r[4],q=r[8],P=r[12],A=r[1],V=r[5],lt=r[9],Y=r[13],dt=r[2],mt=r[6],ot=r[10],at=r[14],tt=r[3],bt=r[7],St=r[11],Tt=r[15];return s[0]=l*z+c*A+d*dt+f*tt,s[4]=l*u+c*V+d*mt+f*bt,s[8]=l*q+c*lt+d*ot+f*St,s[12]=l*P+c*Y+d*at+f*Tt,s[1]=g*z+v*A+x*dt+w*tt,s[5]=g*u+v*V+x*mt+w*bt,s[9]=g*q+v*lt+x*ot+w*St,s[13]=g*P+v*Y+x*at+w*Tt,s[2]=M*z+T*A+y*dt+m*tt,s[6]=M*u+T*V+y*mt+m*bt,s[10]=M*q+T*lt+y*ot+m*St,s[14]=M*P+T*Y+y*at+m*Tt,s[3]=O*z+U*A+R*dt+W*tt,s[7]=O*u+U*V+R*mt+W*bt,s[11]=O*q+U*lt+R*ot+W*St,s[15]=O*P+U*Y+R*at+W*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],l=t[1],c=t[5],d=t[9],f=t[13],g=t[2],v=t[6],x=t[10],w=t[14],M=t[3],T=t[7],y=t[11],m=t[15];return M*(+s*d*v-r*f*v-s*c*x+i*f*x+r*c*w-i*d*w)+T*(+e*d*w-e*f*x+s*l*x-r*l*w+r*f*g-s*d*g)+y*(+e*f*v-e*c*w-s*l*v+i*l*w+s*c*g-i*f*g)+m*(-r*c*g-e*d*v+e*c*x+r*l*v-i*l*x+i*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8],v=t[9],x=t[10],w=t[11],M=t[12],T=t[13],y=t[14],m=t[15],O=v*y*f-T*x*f+T*d*w-c*y*w-v*d*m+c*x*m,U=M*x*f-g*y*f-M*d*w+l*y*w+g*d*m-l*x*m,R=g*T*f-M*v*f+M*c*w-l*T*w-g*c*m+l*v*m,W=M*v*d-g*T*d-M*c*x+l*T*x+g*c*y-l*v*y,z=e*O+i*U+r*R+s*W;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const u=1/z;return t[0]=O*u,t[1]=(T*x*s-v*y*s-T*r*w+i*y*w+v*r*m-i*x*m)*u,t[2]=(c*y*s-T*d*s+T*r*f-i*y*f-c*r*m+i*d*m)*u,t[3]=(v*d*s-c*x*s-v*r*f+i*x*f+c*r*w-i*d*w)*u,t[4]=U*u,t[5]=(g*y*s-M*x*s+M*r*w-e*y*w-g*r*m+e*x*m)*u,t[6]=(M*d*s-l*y*s-M*r*f+e*y*f+l*r*m-e*d*m)*u,t[7]=(l*x*s-g*d*s+g*r*f-e*x*f-l*r*w+e*d*w)*u,t[8]=R*u,t[9]=(M*v*s-g*T*s-M*i*w+e*T*w+g*i*m-e*v*m)*u,t[10]=(l*T*s-M*c*s+M*i*f-e*T*f-l*i*m+e*c*m)*u,t[11]=(g*c*s-l*v*s-g*i*f+e*v*f+l*i*w-e*c*w)*u,t[12]=W*u,t[13]=(g*T*r-M*v*r+M*i*x-e*T*x-g*i*y+e*v*y)*u,t[14]=(M*c*r-l*T*r-M*i*d+e*T*d+l*i*y-e*c*y)*u,t[15]=(l*v*r-g*c*r+g*i*d-e*v*d-l*i*x+e*c*x)*u,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,l=t.x,c=t.y,d=t.z,f=s*l,g=s*c;return this.set(f*l+i,f*c-r*d,f*d+r*c,0,f*c+r*d,g*c+i,g*d-r*l,0,f*d-r*c,g*d+r*l,s*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,l){return this.set(1,i,s,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,l=e._y,c=e._z,d=e._w,f=s+s,g=l+l,v=c+c,x=s*f,w=s*g,M=s*v,T=l*g,y=l*v,m=c*v,O=d*f,U=d*g,R=d*v,W=i.x,z=i.y,u=i.z;return r[0]=(1-(T+m))*W,r[1]=(w+R)*W,r[2]=(M-U)*W,r[3]=0,r[4]=(w-R)*z,r[5]=(1-(x+m))*z,r[6]=(y+O)*z,r[7]=0,r[8]=(M+U)*u,r[9]=(y-O)*u,r[10]=(1-(x+T))*u,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const l=Yr.set(r[4],r[5],r[6]).length(),c=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Jn.copy(this);const f=1/s,g=1/l,v=1/c;return Jn.elements[0]*=f,Jn.elements[1]*=f,Jn.elements[2]*=f,Jn.elements[4]*=g,Jn.elements[5]*=g,Jn.elements[6]*=g,Jn.elements[8]*=v,Jn.elements[9]*=v,Jn.elements[10]*=v,e.setFromRotationMatrix(Jn),i.x=s,i.y=l,i.z=c,this}makePerspective(t,e,i,r,s,l,c=Li){const d=this.elements,f=2*s/(e-t),g=2*s/(i-r),v=(e+t)/(e-t),x=(i+r)/(i-r);let w,M;if(c===Li)w=-(l+s)/(l-s),M=-2*l*s/(l-s);else if(c===fa)w=-l/(l-s),M=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,s,l,c=Li){const d=this.elements,f=1/(e-t),g=1/(i-r),v=1/(l-s),x=(e+t)*f,w=(i+r)*g;let M,T;if(c===Li)M=(l+s)*v,T=-2*v;else if(c===fa)M=s*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-w,d[2]=0,d[6]=0,d[10]=T,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Yr=new B,Jn=new qe,ym=new B(0,0,0),wm=new B(1,1,1),$i=new B,Io=new B,On=new B,Hu=new qe,Gu=new lr;class Yn{constructor(t=0,e=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],l=r[4],c=r[8],d=r[1],f=r[5],g=r[9],v=r[2],x=r[6],w=r[10];switch(e){case"XYZ":this._y=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,w),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(x,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,w),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,w),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,w),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(c,w));break;case"XZY":this._z=Math.asin(-Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(x,f),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-g,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mm=0;const Wu=new B,$r=new lr,Ti=new qe,Uo=new B,Fs=new B,Sm=new B,Em=new lr,ju=new B(1,0,0),Xu=new B(0,1,0),qu=new B(0,0,1),Yu={type:"added"},Tm={type:"removed"},Kr={type:"childadded",child:null},ol={type:"childremoved",child:null};class fn extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new B,e=new Yn,i=new lr,r=new B(1,1,1);function s(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new fe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Xu,t)}rotateZ(t){return this.rotateOnAxis(qu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Xu,t)}translateZ(t){return this.translateOnAxis(qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Uo.copy(t):Uo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Fs,Uo,this.up):Ti.lookAt(Uo,Fs,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Ti),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yu),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tm),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yu),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,g=d.length;f<g;f++){const v=d[f];s(t.shapes,v)}else s(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(s(t.materials,this.material[d]));r.material=c}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(s(t.animations,d))}}if(e){const c=l(t.geometries),d=l(t.materials),f=l(t.textures),g=l(t.images),v=l(t.shapes),x=l(t.skeletons),w=l(t.animations),M=l(t.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),x.length>0&&(i.skeletons=x),w.length>0&&(i.animations=w),M.length>0&&(i.nodes=M)}return i.object=r,i;function l(c){const d=[];for(const f in c){const g=c[f];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new B(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new B,Ci=new B,al=new B,Ai=new B,Zr=new B,Jr=new B,$u=new B,ll=new B,cl=new B,ul=new B,hl=new ze,dl=new ze,pl=new ze;class ti{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Qn.subVectors(t,e),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Qn.subVectors(r,e),Ci.subVectors(i,e),al.subVectors(t,e);const l=Qn.dot(Qn),c=Qn.dot(Ci),d=Qn.dot(al),f=Ci.dot(Ci),g=Ci.dot(al),v=l*f-c*c;if(v===0)return s.set(0,0,0),null;const x=1/v,w=(f*d-c*g)*x,M=(l*g-c*d)*x;return s.set(1-w-M,M,w)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,i,r,s,l,c,d){return this.getBarycoord(t,e,i,r,Ai)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(s,Ai.x),d.addScaledVector(l,Ai.y),d.addScaledVector(c,Ai.z),d)}static getInterpolatedAttribute(t,e,i,r,s,l){return hl.setScalar(0),dl.setScalar(0),pl.setScalar(0),hl.fromBufferAttribute(t,e),dl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(hl,s.x),l.addScaledVector(dl,s.y),l.addScaledVector(pl,s.z),l}static isFrontFacing(t,e,i,r){return Qn.subVectors(i,e),Ci.subVectors(t,e),Qn.cross(Ci).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Qn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ti.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let l,c;Zr.subVectors(r,i),Jr.subVectors(s,i),ll.subVectors(t,i);const d=Zr.dot(ll),f=Jr.dot(ll);if(d<=0&&f<=0)return e.copy(i);cl.subVectors(t,r);const g=Zr.dot(cl),v=Jr.dot(cl);if(g>=0&&v<=g)return e.copy(r);const x=d*v-g*f;if(x<=0&&d>=0&&g<=0)return l=d/(d-g),e.copy(i).addScaledVector(Zr,l);ul.subVectors(t,s);const w=Zr.dot(ul),M=Jr.dot(ul);if(M>=0&&w<=M)return e.copy(s);const T=w*f-d*M;if(T<=0&&f>=0&&M<=0)return c=f/(f-M),e.copy(i).addScaledVector(Jr,c);const y=g*M-w*v;if(y<=0&&v-g>=0&&w-M>=0)return $u.subVectors(s,r),c=(v-g)/(v-g+(w-M)),e.copy(r).addScaledVector($u,c);const m=1/(y+T+x);return l=T*m,c=x*m,e.copy(i).addScaledVector(Zr,l).addScaledVector(Jr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},No={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class se{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ie.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Ie.workingColorSpace){if(t=lm(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,l=2*i-s;this.r=fl(l,s,t+1/3),this.g=fl(l,s,t),this.b=fl(l,s,t-1/3)}return Ie.toWorkingColorSpace(this,r),this}setStyle(t,e=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xn){const i=Pd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return Ie.fromWorkingColorSpace(bn.copy(this),t),Math.round(Me(bn.r*255,0,255))*65536+Math.round(Me(bn.g*255,0,255))*256+Math.round(Me(bn.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(bn.copy(this),e);const i=bn.r,r=bn.g,s=bn.b,l=Math.max(i,r,s),c=Math.min(i,r,s);let d,f;const g=(c+l)/2;if(c===l)d=0,f=0;else{const v=l-c;switch(f=g<=.5?v/(l+c):v/(2-l-c),l){case i:d=(r-s)/v+(r<s?6:0);break;case r:d=(s-i)/v+2;break;case s:d=(i-r)/v+4;break}d/=6}return t.h=d,t.s=f,t.l=g,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Xn){Ie.fromWorkingColorSpace(bn.copy(this),t);const e=bn.r,i=bn.g,r=bn.b;return t!==Xn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(No);const i=Za(Ki.h,No.h,e),r=Za(Ki.s,No.s,e),s=Za(Ki.l,No.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new se;se.NAMES=Pd;let Cm=0;class ki extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=ls,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Bl,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}if(e){const s=r(t.textures),l=r(t.images);s.length>0&&(i.textures=s),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zc extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new B,Oo=new he;let Am=0;class pi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Am++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ou,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ou&&(t.usage=this.usage),t}}class Rd extends pi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dd extends pi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class kn extends pi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Pm=0;const Wn=new qe,ml=new fn,Qr=new B,Fn=new Dr,ks=new Dr,pn=new B;class vi extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cd(t)?Dd:Rd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new fe().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new kn(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let s=0,l=e.length;s<l;s++){const c=e[s];ks.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(Fn.min,ks.min),Fn.expandByPoint(pn),pn.addVectors(Fn.max,ks.max),Fn.expandByPoint(pn)):(Fn.expandByPoint(ks.min),Fn.expandByPoint(ks.max))}Fn.getCenter(i);let r=0;for(let s=0,l=t.count;s<l;s++)pn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(pn));if(e)for(let s=0,l=e.length;s<l;s++){const c=e[s],d=this.morphTargetsRelative;for(let f=0,g=c.count;f<g;f++)pn.fromBufferAttribute(c,f),d&&(Qr.fromBufferAttribute(t,f),pn.add(Qr)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),c=[],d=[];for(let q=0;q<i.count;q++)c[q]=new B,d[q]=new B;const f=new B,g=new B,v=new B,x=new he,w=new he,M=new he,T=new B,y=new B;function m(q,P,A){f.fromBufferAttribute(i,q),g.fromBufferAttribute(i,P),v.fromBufferAttribute(i,A),x.fromBufferAttribute(s,q),w.fromBufferAttribute(s,P),M.fromBufferAttribute(s,A),g.sub(f),v.sub(f),w.sub(x),M.sub(x);const V=1/(w.x*M.y-M.x*w.y);isFinite(V)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-w.y).multiplyScalar(V),y.copy(v).multiplyScalar(w.x).addScaledVector(g,-M.x).multiplyScalar(V),c[q].add(T),c[P].add(T),c[A].add(T),d[q].add(y),d[P].add(y),d[A].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let q=0,P=O.length;q<P;++q){const A=O[q],V=A.start,lt=A.count;for(let Y=V,dt=V+lt;Y<dt;Y+=3)m(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const U=new B,R=new B,W=new B,z=new B;function u(q){W.fromBufferAttribute(r,q),z.copy(W);const P=c[q];U.copy(P),U.sub(W.multiplyScalar(W.dot(P))).normalize(),R.crossVectors(z,P);const V=R.dot(d[q])<0?-1:1;l.setXYZW(q,U.x,U.y,U.z,V)}for(let q=0,P=O.length;q<P;++q){const A=O[q],V=A.start,lt=A.count;for(let Y=V,dt=V+lt;Y<dt;Y+=3)u(t.getX(Y+0)),u(t.getX(Y+1)),u(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let x=0,w=i.count;x<w;x++)i.setXYZ(x,0,0,0);const r=new B,s=new B,l=new B,c=new B,d=new B,f=new B,g=new B,v=new B;if(t)for(let x=0,w=t.count;x<w;x+=3){const M=t.getX(x+0),T=t.getX(x+1),y=t.getX(x+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,T),l.fromBufferAttribute(e,y),g.subVectors(l,s),v.subVectors(r,s),g.cross(v),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),c.add(g),d.add(g),f.add(g),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(T,d.x,d.y,d.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let x=0,w=e.count;x<w;x+=3)r.fromBufferAttribute(e,x+0),s.fromBufferAttribute(e,x+1),l.fromBufferAttribute(e,x+2),g.subVectors(l,s),v.subVectors(r,s),g.cross(v),i.setXYZ(x+0,g.x,g.y,g.z),i.setXYZ(x+1,g.x,g.y,g.z),i.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(c,d){const f=c.array,g=c.itemSize,v=c.normalized,x=new f.constructor(d.length*g);let w=0,M=0;for(let T=0,y=d.length;T<y;T++){c.isInterleavedBufferAttribute?w=d[T]*c.data.stride+c.offset:w=d[T]*g;for(let m=0;m<g;m++)x[M++]=f[w++]}return new pi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vi,i=this.index.array,r=this.attributes;for(const c in r){const d=r[c],f=t(d,i);e.setAttribute(c,f)}const s=this.morphAttributes;for(const c in s){const d=[],f=s[c];for(let g=0,v=f.length;g<v;g++){const x=f[g],w=t(x,i);d.push(w)}e.morphAttributes[c]=d}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const f=i[d];t.data.attributes[d]=f.toJSON(t.data)}const r={};let s=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],g=[];for(let v=0,x=f.length;v<x;v++){const w=f[v];g.push(w.toJSON(t.data))}g.length>0&&(r[d]=g,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const f in r){const g=r[f];this.setAttribute(f,g.clone(e))}const s=t.morphAttributes;for(const f in s){const g=[],v=s[f];for(let x=0,w=v.length;x<w;x++)g.push(v[x].clone(e));this.morphAttributes[f]=g}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,g=l.length;f<g;f++){const v=l[f];this.addGroup(v.start,v.count,v.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new qe,vr=new Aa,Fo=new Ca,Zu=new B,ko=new B,Bo=new B,Vo=new B,gl=new B,zo=new B,Ju=new B,Ho=new B;class vn extends fn{constructor(t=new vi,e=new zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(s&&c){zo.set(0,0,0);for(let d=0,f=s.length;d<f;d++){const g=c[d],v=s[d];g!==0&&(gl.fromBufferAttribute(v,t),l?zo.addScaledVector(gl,g):zo.addScaledVector(gl.sub(e),g))}e.add(zo)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),vr.copy(t.ray).recast(t.near),!(Fo.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Fo,Zu)===null||vr.origin.distanceToSquared(Zu)>(t.far-t.near)**2))&&(Ku.copy(s).invert(),vr.copy(t.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,l=this.material,c=s.index,d=s.attributes.position,f=s.attributes.uv,g=s.attributes.uv1,v=s.attributes.normal,x=s.groups,w=s.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,T=x.length;M<T;M++){const y=x[M],m=l[y.materialIndex],O=Math.max(y.start,w.start),U=Math.min(c.count,Math.min(y.start+y.count,w.start+w.count));for(let R=O,W=U;R<W;R+=3){const z=c.getX(R),u=c.getX(R+1),q=c.getX(R+2);r=Go(this,m,t,i,f,g,v,z,u,q),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const M=Math.max(0,w.start),T=Math.min(c.count,w.start+w.count);for(let y=M,m=T;y<m;y+=3){const O=c.getX(y),U=c.getX(y+1),R=c.getX(y+2);r=Go(this,l,t,i,f,g,v,O,U,R),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let M=0,T=x.length;M<T;M++){const y=x[M],m=l[y.materialIndex],O=Math.max(y.start,w.start),U=Math.min(d.count,Math.min(y.start+y.count,w.start+w.count));for(let R=O,W=U;R<W;R+=3){const z=R,u=R+1,q=R+2;r=Go(this,m,t,i,f,g,v,z,u,q),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const M=Math.max(0,w.start),T=Math.min(d.count,w.start+w.count);for(let y=M,m=T;y<m;y+=3){const O=y,U=y+1,R=y+2;r=Go(this,l,t,i,f,g,v,O,U,R),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}}function Rm(n,t,e,i,r,s,l,c){let d;if(t.side===Un?d=i.intersectTriangle(l,s,r,!0,c):d=i.intersectTriangle(r,s,l,t.side===ar,c),d===null)return null;Ho.copy(c),Ho.applyMatrix4(n.matrixWorld);const f=e.ray.origin.distanceTo(Ho);return f<e.near||f>e.far?null:{distance:f,point:Ho.clone(),object:n}}function Go(n,t,e,i,r,s,l,c,d,f){n.getVertexPosition(c,ko),n.getVertexPosition(d,Bo),n.getVertexPosition(f,Vo);const g=Rm(n,t,e,i,ko,Bo,Vo,Ju);if(g){const v=new B;ti.getBarycoord(Ju,ko,Bo,Vo,v),r&&(g.uv=ti.getInterpolatedAttribute(r,c,d,f,v,new he)),s&&(g.uv1=ti.getInterpolatedAttribute(s,c,d,f,v,new he)),l&&(g.normal=ti.getInterpolatedAttribute(l,c,d,f,v,new B),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const x={a:c,b:d,c:f,normal:new B,materialIndex:0};ti.getNormal(ko,Bo,Vo,x.normal),g.face=x,g.barycoord=v}return g}class _s extends vi{constructor(t=1,e=1,i=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:l};const c=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const d=[],f=[],g=[],v=[];let x=0,w=0;M("z","y","x",-1,-1,i,e,t,l,s,0),M("z","y","x",1,-1,i,e,-t,l,s,1),M("x","z","y",1,1,t,i,e,r,l,2),M("x","z","y",1,-1,t,i,-e,r,l,3),M("x","y","z",1,-1,t,e,i,r,s,4),M("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(d),this.setAttribute("position",new kn(f,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(v,2));function M(T,y,m,O,U,R,W,z,u,q,P){const A=R/u,V=W/q,lt=R/2,Y=W/2,dt=z/2,mt=u+1,ot=q+1;let at=0,tt=0;const bt=new B;for(let St=0;St<ot;St++){const Tt=St*V-Y;for(let te=0;te<mt;te++){const de=te*A-lt;bt[T]=de*O,bt[y]=Tt*U,bt[m]=dt,f.push(bt.x,bt.y,bt.z),bt[T]=0,bt[y]=0,bt[m]=z>0?1:-1,g.push(bt.x,bt.y,bt.z),v.push(te/u),v.push(1-St/q),at+=1}}for(let St=0;St<q;St++)for(let Tt=0;Tt<u;Tt++){const te=x+Tt+mt*St,de=x+Tt+mt*(St+1),pt=x+(Tt+1)+mt*(St+1),yt=x+(Tt+1)+mt*St;d.push(te,de,yt),d.push(de,pt,yt),tt+=6}c.addGroup(w,tt,P),w+=tt,x+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Mn(n){const t={};for(let e=0;e<n.length;e++){const i=gs(n[e]);for(const r in i)t[r]=i[r]}return t}function Dm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ld(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const Lm={clone:gs,merge:Mn};var Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Id extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new B,Qu=new he,th=new he;class Ln extends Id{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,th),e.subVectors(th,Qu)}setViewOffset(t,e,i,r,s,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oa*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;s+=l.offsetX*r/d,e-=l.offsetY*i/f,r*=l.width/d,i*=l.height/f}const c=this.filmOffset;c!==0&&(s+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class Nm extends fn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(ts,es,t,e);r.layers=this.layers,this.add(r);const s=new Ln(ts,es,t,e);s.layers=this.layers,this.add(s);const l=new Ln(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new Ln(ts,es,t,e);c.layers=this.layers,this.add(c);const d=new Ln(ts,es,t,e);d.layers=this.layers,this.add(d);const f=new Ln(ts,es,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,l,c,d]=e;for(const f of e)this.remove(f);if(t===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,l,c,d,f,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,l),t.setRenderTarget(i,2,r),t.render(e,c),t.setRenderTarget(i,3,r),t.render(e,d),t.setRenderTarget(i,4,r),t.render(e,f),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,r),t.render(e,g),t.setRenderTarget(v,x,w),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Ud extends Sn{constructor(t=[],e=ps,i,r,s,l,c,d,f,g){super(t,e,i,r,s,l,c,d,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Om extends Rr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ud(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _s(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:rr});s.uniforms.tEquirect.value=e;const l=new vn(r,s),c=e.minFilter;return e.minFilter===Cr&&(e.minFilter=hi),new Nm(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(s)}}class Wo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fm={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,l=null;const c=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const T of t.hand.values()){const y=e.getJointPose(T,i),m=this._getHandJoint(f,T);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const g=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],x=g.position.distanceTo(v.position),w=.02,M=.005;f.inputState.pinching&&x>w+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&x<=w-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Fm)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=s!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Wo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class km extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const _l=new B,Bm=new B,Vm=new fe;class er{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=_l.subVectors(i,e).cross(Bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(_l),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Vm.getNormalMatrix(t),r=this.coplanarPoint(_l).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Ca,jo=new B;class Hc{constructor(t=new er,e=new er,i=new er,r=new er,s=new er,l=new er){this.planes=[t,e,i,r,s,l]}set(t,e,i,r,s,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(l),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Li){const i=this.planes,r=t.elements,s=r[0],l=r[1],c=r[2],d=r[3],f=r[4],g=r[5],v=r[6],x=r[7],w=r[8],M=r[9],T=r[10],y=r[11],m=r[12],O=r[13],U=r[14],R=r[15];if(i[0].setComponents(d-s,x-f,y-w,R-m).normalize(),i[1].setComponents(d+s,x+f,y+w,R+m).normalize(),i[2].setComponents(d+l,x+g,y+M,R+O).normalize(),i[3].setComponents(d-l,x-g,y-M,R-O).normalize(),i[4].setComponents(d-c,x-v,y-T,R-U).normalize(),e===Li)i[5].setComponents(d+c,x+v,y+T,R+U).normalize();else if(e===fa)i[5].setComponents(c,v,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(jo.x=r.normal.x>0?t.max.x:t.min.x,jo.y=r.normal.y>0?t.max.y:t.min.y,jo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nd extends ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new B,va=new B,eh=new qe,Bs=new Aa,Xo=new Ca,xl=new B,nh=new B;class zm extends fn{constructor(t=new vi,e=new Nd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)ga.fromBufferAttribute(e,r-1),va.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ga.distanceTo(va);t.setAttribute("lineDistance",new kn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(r),Xo.radius+=s,t.ray.intersectsSphere(Xo)===!1)return;eh.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(eh);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=this.isLineSegments?2:1,g=i.index,x=i.attributes.position;if(g!==null){const w=Math.max(0,l.start),M=Math.min(g.count,l.start+l.count);for(let T=w,y=M-1;T<y;T+=f){const m=g.getX(T),O=g.getX(T+1),U=qo(this,t,Bs,d,m,O,T);U&&e.push(U)}if(this.isLineLoop){const T=g.getX(M-1),y=g.getX(w),m=qo(this,t,Bs,d,T,y,M-1);m&&e.push(m)}}else{const w=Math.max(0,l.start),M=Math.min(x.count,l.start+l.count);for(let T=w,y=M-1;T<y;T+=f){const m=qo(this,t,Bs,d,T,T+1,T);m&&e.push(m)}if(this.isLineLoop){const T=qo(this,t,Bs,d,M-1,w,M-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function qo(n,t,e,i,r,s,l){const c=n.geometry.attributes.position;if(ga.fromBufferAttribute(c,r),va.fromBufferAttribute(c,s),e.distanceSqToSegment(ga,va,xl,nh)>i)return;xl.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(xl);if(!(f<t.near||f>t.far))return{distance:f,point:nh.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}const ih=new B,rh=new B;class Hm extends zm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)ih.fromBufferAttribute(e,r),rh.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ih.distanceTo(rh);t.setAttribute("lineDistance",new kn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Od extends Sn{constructor(t,e,i=Pr,r,s,l,c=ni,d=ni,f,g=Ks){if(g!==Ks&&g!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,l,c,d,g,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ao extends vi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,l=e/2,c=Math.floor(i),d=Math.floor(r),f=c+1,g=d+1,v=t/c,x=e/d,w=[],M=[],T=[],y=[];for(let m=0;m<g;m++){const O=m*x-l;for(let U=0;U<f;U++){const R=U*v-s;M.push(R,-O,0),T.push(0,0,1),y.push(U/c),y.push(1-m/d)}}for(let m=0;m<d;m++)for(let O=0;O<c;O++){const U=O+f*m,R=O+f*(m+1),W=O+1+f*(m+1),z=O+1+f*m;w.push(U,R,z),w.push(R,W,z)}this.setIndex(w),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(T,3)),this.setAttribute("uv",new kn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pa extends vi{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(l+c,Math.PI);let f=0;const g=[],v=new B,x=new B,w=[],M=[],T=[],y=[];for(let m=0;m<=i;m++){const O=[],U=m/i;let R=0;m===0&&l===0?R=.5/e:m===i&&d===Math.PI&&(R=-.5/e);for(let W=0;W<=e;W++){const z=W/e;v.x=-t*Math.cos(r+z*s)*Math.sin(l+U*c),v.y=t*Math.cos(l+U*c),v.z=t*Math.sin(r+z*s)*Math.sin(l+U*c),M.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(z+R,1-U),O.push(f++)}g.push(O)}for(let m=0;m<i;m++)for(let O=0;O<e;O++){const U=g[m][O+1],R=g[m][O],W=g[m+1][O],z=g[m+1][O+1];(m!==0||l>0)&&w.push(U,R,z),(m!==i-1||d<Math.PI)&&w.push(R,W,z)}this.setIndex(w),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(T,3)),this.setAttribute("uv",new kn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gm extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class li extends ki{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ci extends ki{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wm extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jm extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Xm{constructor(t,e,i){const r=this;let s=!1,l=0,c=0,d;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(g){c++,s===!1&&r.onStart!==void 0&&r.onStart(g,l,c),s=!0},this.itemEnd=function(g){l++,r.onProgress!==void 0&&r.onProgress(g,l,c),l===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,v){return f.push(g,v),this},this.removeHandler=function(g){const v=f.indexOf(g);return v!==-1&&f.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=f.length;v<x;v+=2){const w=f[v],M=f[v+1];if(w.global&&(w.lastIndex=0),w.test(g))return M}return null}}}const qm=new Xm;class Gc{constructor(t){this.manager=t!==void 0?t:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ym extends Gc{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,l=sh.get(t);if(l!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(l),s.manager.itemEnd(t)},0),l;const c=Js("img");function d(){g(),sh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function f(v){g(),r&&r(v),s.manager.itemError(t),s.manager.itemEnd(t)}function g(){c.removeEventListener("load",d,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(t),c.src=t,c}}class $m extends Gc{constructor(t){super(t)}load(t,e,i,r){const s=new Sn,l=new Ym(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(c){s.image=c,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Fd extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const bl=new qe,oh=new B,ah=new B;class kd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ah),e.updateMatrixWorld(),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Km extends kd{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ma*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yo extends Fd{constructor(t,e,i=0,r=Math.PI/3,s=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=r,this.penumbra=s,this.decay=l,this.map=null,this.shadow=new Km}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const lh=new qe,Vs=new B,yl=new B;class Zm extends kd{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vs),yl.copy(i.position),yl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(yl),i.updateMatrixWorld(),r.makeTranslation(-Vs.x,-Vs.y,-Vs.z),lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class ch extends Fd{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Zm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jm extends Id{constructor(t=-1,e=1,i=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,l=i+t,c=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,l=s+f*this.view.width,c-=g*this.view.offsetY,d=c-g*this.view.height}this.projectionMatrix.makeOrthographic(s,l,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qm extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Wc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=uh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function uh(){return performance.now()}const hh=new qe;class tg{constructor(t,e,i=0,r=1/0){this.ray=new Aa(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(t,e=!0,i=[]){return wc(t,this,i,e),i.sort(dh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)wc(t[r],this,i,e);return i.sort(dh),i}}function dh(n,t){return n.distance-t.distance}function wc(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let l=0,c=s.length;l<c;l++)wc(s[l],t,e,!0)}}class ph{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const fh=new B;class wl extends fn{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const i=new vi,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,d=32;l<d;l++,c++){const f=l/d*Math.PI*2,g=c/d*Math.PI*2;r.push(Math.cos(f),Math.sin(f),1,Math.cos(g),Math.sin(g),1)}i.setAttribute("position",new kn(r,3));const s=new Nd({fog:!1,toneMapped:!1});this.cone=new Hm(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),fh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(fh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class eg extends vn{constructor(t,e,i){const r=new Pa(e,4,2),s=new zc({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class ng extends Nr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function mh(n,t,e,i){const r=ig(i);switch(e){case yd:return n*t;case Md:return n*t/r.components*r.byteLength;case Oc:return n*t/r.components*r.byteLength;case Sd:return n*t*2/r.components*r.byteLength;case Fc:return n*t*2/r.components*r.byteLength;case wd:return n*t*3/r.components*r.byteLength;case ei:return n*t*4/r.components*r.byteLength;case kc:return n*t*4/r.components*r.byteLength;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ia:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:case Ql:return Math.max(n,16)*Math.max(t,8)/4;case Kl:case Jl:return Math.max(n,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sa:case vc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ed:case xc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case bc:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ig(n){switch(n){case fi:case _d:return{byteLength:1,components:1};case Ys:case xd:case so:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case Pr:case Ic:case Di:return{byteLength:4,components:1};case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bd(){let n=null,t=!1,e=null,i=null;function r(s,l){e(s,l),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function rg(n){const t=new WeakMap;function e(c,d){const f=c.array,g=c.usage,v=f.byteLength,x=n.createBuffer();n.bindBuffer(d,x),n.bufferData(d,f,g),c.onUploadCallback();let w;if(f instanceof Float32Array)w=n.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?w=n.HALF_FLOAT:w=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)w=n.SHORT;else if(f instanceof Uint32Array)w=n.UNSIGNED_INT;else if(f instanceof Int32Array)w=n.INT;else if(f instanceof Int8Array)w=n.BYTE;else if(f instanceof Uint8Array)w=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)w=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:w,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:v}}function i(c,d,f){const g=d.array,v=d.updateRanges;if(n.bindBuffer(f,c),v.length===0)n.bufferSubData(f,0,g);else{v.sort((w,M)=>w.start-M.start);let x=0;for(let w=1;w<v.length;w++){const M=v[x],T=v[w];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,v[x]=T)}v.length=x+1;for(let w=0,M=v.length;w<M;w++){const T=v[w];n.bufferSubData(f,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=t.get(c);d&&(n.deleteBuffer(d.buffer),t.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=t.get(c);(!g||g.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,c,d),f.version=c.version}}return{get:r,remove:s,update:l}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
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
#endif`,ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_g=`#ifdef USE_IRIDESCENCE
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
#endif`,xg=`#ifdef USE_BUMPMAP
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ag=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nv=`PhysicalMaterial material;
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
#endif`,iv=`struct PhysicalMaterial {
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
}`,rv=`
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
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
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,av=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fv=`#if defined( USE_POINTS_UV )
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
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`#ifdef USE_MORPHTARGETS
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
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cv=`#ifdef USE_NORMALMAP
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
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gv=`float getShadowMask() {
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
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
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
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
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
#endif`,Qv=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
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
}`,h_=`#if DEPTH_PACKING == 3200
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
}`,d_=`#define DISTANCE
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
}`,p_=`#define DISTANCE
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`uniform float scale;
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
}`,v_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,x_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,w_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,S_=`#define NORMAL
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
}`,E_=`#define NORMAL
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
}`,T_=`#define PHONG
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
}`,C_=`#define PHONG
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
}`,A_=`#define STANDARD
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
}`,P_=`#define STANDARD
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
}`,R_=`#define TOON
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
}`,D_=`#define TOON
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
}`,L_=`uniform float size;
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
}`,I_=`uniform vec3 diffuse;
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
}`,U_=`#include <common>
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
}`,N_=`uniform vec3 color;
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
}`,O_=`uniform float rotation;
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
}`,F_=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:sg,alphahash_pars_fragment:og,alphamap_fragment:ag,alphamap_pars_fragment:lg,alphatest_fragment:cg,alphatest_pars_fragment:ug,aomap_fragment:hg,aomap_pars_fragment:dg,batching_pars_vertex:pg,batching_vertex:fg,begin_vertex:mg,beginnormal_vertex:gg,bsdfs:vg,iridescence_fragment:_g,bumpmap_pars_fragment:xg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Mg,color_fragment:Sg,color_pars_fragment:Eg,color_pars_vertex:Tg,color_vertex:Cg,common:Ag,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Lg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Ug,colorspace_fragment:Ng,colorspace_pars_fragment:Og,envmap_fragment:Fg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Bg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:Zg,envmap_vertex:zg,fog_vertex:Hg,fog_pars_vertex:Gg,fog_fragment:Wg,fog_pars_fragment:jg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:qg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:$g,lights_pars_begin:Kg,lights_toon_fragment:Jg,lights_toon_pars_fragment:Qg,lights_phong_fragment:tv,lights_phong_pars_fragment:ev,lights_physical_fragment:nv,lights_physical_pars_fragment:iv,lights_fragment_begin:rv,lights_fragment_maps:sv,lights_fragment_end:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:lv,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:uv,map_fragment:hv,map_pars_fragment:dv,map_particle_fragment:pv,map_particle_pars_fragment:fv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:vv,morphcolor_vertex:_v,morphnormal_vertex:xv,morphtarget_pars_vertex:bv,morphtarget_vertex:yv,normal_fragment_begin:wv,normal_fragment_maps:Mv,normal_pars_fragment:Sv,normal_pars_vertex:Ev,normal_vertex:Tv,normalmap_pars_fragment:Cv,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Pv,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Dv,opaque_fragment:Lv,packing:Iv,premultiplied_alpha_fragment:Uv,project_vertex:Nv,dithering_fragment:Ov,dithering_pars_fragment:Fv,roughnessmap_fragment:kv,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:zv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Gv,skinbase_vertex:Wv,skinning_pars_vertex:jv,skinning_vertex:Xv,skinnormal_vertex:qv,specularmap_fragment:Yv,specularmap_pars_fragment:$v,tonemapping_fragment:Kv,tonemapping_pars_fragment:Zv,transmission_fragment:Jv,transmission_pars_fragment:Qv,uv_pars_fragment:t_,uv_pars_vertex:e_,uv_vertex:n_,worldpos_vertex:i_,background_vert:r_,background_frag:s_,backgroundCube_vert:o_,backgroundCube_frag:a_,cube_vert:l_,cube_frag:c_,depth_vert:u_,depth_frag:h_,distanceRGBA_vert:d_,distanceRGBA_frag:p_,equirect_vert:f_,equirect_frag:m_,linedashed_vert:g_,linedashed_frag:v_,meshbasic_vert:__,meshbasic_frag:x_,meshlambert_vert:b_,meshlambert_frag:y_,meshmatcap_vert:w_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:E_,meshphong_vert:T_,meshphong_frag:C_,meshphysical_vert:A_,meshphysical_frag:P_,meshtoon_vert:R_,meshtoon_frag:D_,points_vert:L_,points_frag:I_,shadow_vert:U_,shadow_frag:N_,sprite_vert:O_,sprite_frag:F_},At={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ui={basic:{uniforms:Mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new se(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Mn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Mn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new se(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Mn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Mn([At.points,At.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Mn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Mn([At.common,At.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Mn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Mn([At.sprite,At.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Mn([At.common,At.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Mn([At.lights,At.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ui.physical={uniforms:Mn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const $o={r:0,b:0,g:0},xr=new Yn,k_=new qe;function B_(n,t,e,i,r,s,l){const c=new se(0);let d=s===!0?0:1,f,g,v=null,x=0,w=null;function M(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?e:t).get(R)),R}function T(U){let R=!1;const W=M(U);W===null?m(c,d):W&&W.isColor&&(m(W,1),R=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(U,R){const W=M(R);W&&(W.isCubeTexture||W.mapping===Ea)?(g===void 0&&(g=new vn(new _s(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:gs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,u,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),xr.copy(R.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=W,g.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(k_.makeRotationFromEuler(xr)),g.material.toneMapped=Ie.getTransfer(W.colorSpace)!==Be,(v!==W||x!==W.version||w!==n.toneMapping)&&(g.material.needsUpdate=!0,v=W,x=W.version,w=n.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):W&&W.isTexture&&(f===void 0&&(f=new vn(new ao(2,2),new cr({name:"BackgroundMaterial",uniforms:gs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=W,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=Ie.getTransfer(W.colorSpace)!==Be,W.matrixAutoUpdate===!0&&W.updateMatrix(),f.material.uniforms.uvTransform.value.copy(W.matrix),(v!==W||x!==W.version||w!==n.toneMapping)&&(f.material.needsUpdate=!0,v=W,x=W.version,w=n.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function m(U,R){U.getRGB($o,Ld(n)),i.buffers.color.setClear($o.r,$o.g,$o.b,R,l)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(U,R=1){c.set(U),d=R,m(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,m(c,d)},render:T,addToRenderList:y,dispose:O}}function V_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=x(null);let s=r,l=!1;function c(A,V,lt,Y,dt){let mt=!1;const ot=v(Y,lt,V);s!==ot&&(s=ot,f(s.object)),mt=w(A,Y,lt,dt),mt&&M(A,Y,lt,dt),dt!==null&&t.update(dt,n.ELEMENT_ARRAY_BUFFER),(mt||l)&&(l=!1,R(A,V,lt,Y),dt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function d(){return n.createVertexArray()}function f(A){return n.bindVertexArray(A)}function g(A){return n.deleteVertexArray(A)}function v(A,V,lt){const Y=lt.wireframe===!0;let dt=i[A.id];dt===void 0&&(dt={},i[A.id]=dt);let mt=dt[V.id];mt===void 0&&(mt={},dt[V.id]=mt);let ot=mt[Y];return ot===void 0&&(ot=x(d()),mt[Y]=ot),ot}function x(A){const V=[],lt=[],Y=[];for(let dt=0;dt<e;dt++)V[dt]=0,lt[dt]=0,Y[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:Y,object:A,attributes:{},index:null}}function w(A,V,lt,Y){const dt=s.attributes,mt=V.attributes;let ot=0;const at=lt.getAttributes();for(const tt in at)if(at[tt].location>=0){const St=dt[tt];let Tt=mt[tt];if(Tt===void 0&&(tt==="instanceMatrix"&&A.instanceMatrix&&(Tt=A.instanceMatrix),tt==="instanceColor"&&A.instanceColor&&(Tt=A.instanceColor)),St===void 0||St.attribute!==Tt||Tt&&St.data!==Tt.data)return!0;ot++}return s.attributesNum!==ot||s.index!==Y}function M(A,V,lt,Y){const dt={},mt=V.attributes;let ot=0;const at=lt.getAttributes();for(const tt in at)if(at[tt].location>=0){let St=mt[tt];St===void 0&&(tt==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),tt==="instanceColor"&&A.instanceColor&&(St=A.instanceColor));const Tt={};Tt.attribute=St,St&&St.data&&(Tt.data=St.data),dt[tt]=Tt,ot++}s.attributes=dt,s.attributesNum=ot,s.index=Y}function T(){const A=s.newAttributes;for(let V=0,lt=A.length;V<lt;V++)A[V]=0}function y(A){m(A,0)}function m(A,V){const lt=s.newAttributes,Y=s.enabledAttributes,dt=s.attributeDivisors;lt[A]=1,Y[A]===0&&(n.enableVertexAttribArray(A),Y[A]=1),dt[A]!==V&&(n.vertexAttribDivisor(A,V),dt[A]=V)}function O(){const A=s.newAttributes,V=s.enabledAttributes;for(let lt=0,Y=V.length;lt<Y;lt++)V[lt]!==A[lt]&&(n.disableVertexAttribArray(lt),V[lt]=0)}function U(A,V,lt,Y,dt,mt,ot){ot===!0?n.vertexAttribIPointer(A,V,lt,dt,mt):n.vertexAttribPointer(A,V,lt,Y,dt,mt)}function R(A,V,lt,Y){T();const dt=Y.attributes,mt=lt.getAttributes(),ot=V.defaultAttributeValues;for(const at in mt){const tt=mt[at];if(tt.location>=0){let bt=dt[at];if(bt===void 0&&(at==="instanceMatrix"&&A.instanceMatrix&&(bt=A.instanceMatrix),at==="instanceColor"&&A.instanceColor&&(bt=A.instanceColor)),bt!==void 0){const St=bt.normalized,Tt=bt.itemSize,te=t.get(bt);if(te===void 0)continue;const de=te.buffer,pt=te.type,yt=te.bytesPerElement,Dt=pt===n.INT||pt===n.UNSIGNED_INT||bt.gpuType===Ic;if(bt.isInterleavedBufferAttribute){const wt=bt.data,zt=wt.stride,ae=bt.offset;if(wt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<tt.locationSize;Gt++)m(tt.location+Gt,wt.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Gt=0;Gt<tt.locationSize;Gt++)y(tt.location+Gt);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Gt=0;Gt<tt.locationSize;Gt++)U(tt.location+Gt,Tt/tt.locationSize,pt,St,zt*yt,(ae+Tt/tt.locationSize*Gt)*yt,Dt)}else{if(bt.isInstancedBufferAttribute){for(let wt=0;wt<tt.locationSize;wt++)m(tt.location+wt,bt.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let wt=0;wt<tt.locationSize;wt++)y(tt.location+wt);n.bindBuffer(n.ARRAY_BUFFER,de);for(let wt=0;wt<tt.locationSize;wt++)U(tt.location+wt,Tt/tt.locationSize,pt,St,Tt*yt,Tt/tt.locationSize*wt*yt,Dt)}}else if(ot!==void 0){const St=ot[at];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(tt.location,St);break;case 3:n.vertexAttrib3fv(tt.location,St);break;case 4:n.vertexAttrib4fv(tt.location,St);break;default:n.vertexAttrib1fv(tt.location,St)}}}}O()}function W(){q();for(const A in i){const V=i[A];for(const lt in V){const Y=V[lt];for(const dt in Y)g(Y[dt].object),delete Y[dt];delete V[lt]}delete i[A]}}function z(A){if(i[A.id]===void 0)return;const V=i[A.id];for(const lt in V){const Y=V[lt];for(const dt in Y)g(Y[dt].object),delete Y[dt];delete V[lt]}delete i[A.id]}function u(A){for(const V in i){const lt=i[V];if(lt[A.id]===void 0)continue;const Y=lt[A.id];for(const dt in Y)g(Y[dt].object),delete Y[dt];delete lt[A.id]}}function q(){P(),l=!0,s!==r&&(s=r,f(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:q,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:z,releaseStatesOfProgram:u,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function z_(n,t,e){let i;function r(f){i=f}function s(f,g){n.drawArrays(i,f,g),e.update(g,i,1)}function l(f,g,v){v!==0&&(n.drawArraysInstanced(i,f,g,v),e.update(g,i,v))}function c(f,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,g,0,v);let w=0;for(let M=0;M<v;M++)w+=g[M];e.update(w,i,1)}function d(f,g,v,x){if(v===0)return;const w=t.get("WEBGL_multi_draw");if(w===null)for(let M=0;M<f.length;M++)l(f[M],g[M],x[M]);else{w.multiDrawArraysInstancedWEBGL(i,f,0,g,0,x,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*x[T];e.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function H_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const u=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(u){return!(u!==ei&&i.convert(u)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(u){const q=u===so&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(u!==fi&&i.convert(u)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==Di&&!q)}function d(u){if(u==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const v=e.logarithmicDepthBuffer===!0,x=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),w=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),O=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),W=M>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:w,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:W,maxSamples:z}}function G_(n){const t=this;let e=null,i=0,r=!1,s=!1;const l=new er,c=new fe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const w=v.length!==0||x||i!==0||r;return r=x,i=v.length,w},this.beginShadows=function(){s=!0,g(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,x){e=g(v,x,0)},this.setState=function(v,x,w){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,m=n.get(v);if(!r||M===null||M.length===0||s&&!y)s?g(null):f();else{const O=s?0:i,U=O*4;let R=m.clippingState||null;d.value=R,R=g(M,x,U,w);for(let W=0;W!==U;++W)R[W]=e[W];m.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(v,x,w,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=d.value,M!==!0||y===null){const m=w+T*4,O=x.matrixWorldInverse;c.getNormalMatrix(O),(y===null||y.length<m)&&(y=new Float32Array(m));for(let U=0,R=w;U!==T;++U,R+=4)l.copy(v[U]).applyMatrix4(O,c),l.normal.toArray(y,R),y[R+3]=l.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function W_(n){let t=new WeakMap;function e(l,c){return c===ql?l.mapping=ps:c===Yl&&(l.mapping=fs),l}function i(l){if(l&&l.isTexture){const c=l.mapping;if(c===ql||c===Yl)if(t.has(l)){const d=t.get(l).texture;return e(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const f=new Om(d.height);return f.fromEquirectangularTexture(n,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const os=4,gh=[.125,.215,.35,.446,.526,.582],Sr=20,Ml=new Jm,vh=new se;let Sl=null,El=0,Tl=0,Cl=!1;const wr=(1+Math.sqrt(5))/2,ns=1/wr,_h=[new B(-wr,ns,0),new B(wr,ns,0),new B(-ns,0,wr),new B(ns,0,wr),new B(0,wr,-ns),new B(0,wr,ns),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],j_=new B;class xh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:l=256,position:c=j_}=s;Sl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,r,d,c),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,El,Tl),this._renderer.xr.enabled=Cl,t.scissorTest=!1,Ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:so,format:ei,colorSpace:ms,depthBuffer:!1},r=bh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X_(s)),this._blurMaterial=q_(s,t,e)}return r}_compileMaterial(t){const e=new vn(this._lodPlanes[0],t);this._renderer.compile(e,Ml)}_sceneToCubeUV(t,e,i,r,s){const d=new Ln(90,1,e,i),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,w=v.toneMapping;v.getClearColor(vh),v.toneMapping=sr,v.autoClear=!1;const M=new zc({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),T=new vn(new _s,M);let y=!1;const m=t.background;m?m.isColor&&(M.color.copy(m),t.background=null,y=!0):(M.color.copy(vh),y=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(d.up.set(0,f[O],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x+g[O],s.y,s.z)):U===1?(d.up.set(0,0,f[O]),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y+g[O],s.z)):(d.up.set(0,f[O],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y,s.z+g[O]));const R=this._cubeSize;Ko(r,U*R,O>2?R:0,R,R),v.setRenderTarget(r),y&&v.render(T,d),v.render(t,d)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=w,v.autoClear=x,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ps||t.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const s=r?this._cubemapMaterial:this._equirectMaterial,l=new vn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=t;const d=this._cubeSize;Ko(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(l,Ml)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=_h[(r-s-1)%_h.length];this._blur(t,s-1,s,l,c)}e.autoClear=i}_blur(t,e,i,r,s){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,r,"latitudinal",s),this._halfBlur(l,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,l,c){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new vn(this._lodPlanes[r],f),x=f.uniforms,w=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*w):2*Math.PI/(2*Sr-1),T=s/M,y=isFinite(s)?1+Math.floor(g*T):Sr;y>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Sr}`);const m=[];let O=0;for(let u=0;u<Sr;++u){const q=u/T,P=Math.exp(-q*q/2);m.push(P),u===0?O+=P:u<y&&(O+=2*P)}for(let u=0;u<m.length;u++)m[u]=m[u]/O;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=m,x.latitudinal.value=l==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:U}=this;x.dTheta.value=M,x.mipInt.value=U-i;const R=this._sizeLods[r],W=3*R*(r>U-os?r-U+os:0),z=4*(this._cubeSize-R);Ko(e,W,z,3*R,2*R),d.setRenderTarget(e),d.render(v,Ml)}}function X_(n){const t=[],e=[],i=[];let r=n;const s=n-os+1+gh.length;for(let l=0;l<s;l++){const c=Math.pow(2,r);e.push(c);let d=1/c;l>n-os?d=gh[l-n+os-1]:l===0&&(d=0),i.push(d);const f=1/(c-2),g=-f,v=1+f,x=[g,g,v,g,v,v,g,g,v,v,g,v],w=6,M=6,T=3,y=2,m=1,O=new Float32Array(T*M*w),U=new Float32Array(y*M*w),R=new Float32Array(m*M*w);for(let z=0;z<w;z++){const u=z%3*2/3-1,q=z>2?0:-1,P=[u,q,0,u+2/3,q,0,u+2/3,q+1,0,u,q,0,u+2/3,q+1,0,u,q+1,0];O.set(P,T*M*z),U.set(x,y*M*z);const A=[z,z,z,z,z,z];R.set(A,m*M*z)}const W=new vi;W.setAttribute("position",new pi(O,T)),W.setAttribute("uv",new pi(U,y)),W.setAttribute("faceIndex",new pi(R,m)),t.push(W),r>os&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bh(n,t,e){const i=new Rr(n,t,e);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ko(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function q_(n,t,e){const i=new Float32Array(Sr),r=new B(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jc(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function yh(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function wh(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function Y_(n){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){const d=c.mapping,f=d===ql||d===Yl,g=d===ps||d===fs;if(f||g){let v=t.get(c);const x=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return e===null&&(e=new xh(n)),v=f?e.fromEquirectangular(c,v):e.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,t.set(c,v),v.texture;if(v!==void 0)return v.texture;{const w=c.image;return f&&w&&w.height>0||g&&w&&r(w)?(e===null&&(e=new xh(n)),v=f?e.fromEquirectangular(c):e.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,t.set(c,v),c.addEventListener("dispose",s),v.texture):null}}}return c}function r(c){let d=0;const f=6;for(let g=0;g<f;g++)c[g]!==void 0&&d++;return d===f}function s(c){const d=c.target;d.removeEventListener("dispose",s);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function $_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&aa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function K_(n,t,e,i){const r={},s=new WeakMap;function l(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const M in x.attributes)t.remove(x.attributes[M]);x.removeEventListener("dispose",l),delete r[x.id];const w=s.get(x);w&&(t.remove(w),s.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(v,x){return r[x.id]===!0||(x.addEventListener("dispose",l),r[x.id]=!0,e.memory.geometries++),x}function d(v){const x=v.attributes;for(const w in x)t.update(x[w],n.ARRAY_BUFFER)}function f(v){const x=[],w=v.index,M=v.attributes.position;let T=0;if(w!==null){const O=w.array;T=w.version;for(let U=0,R=O.length;U<R;U+=3){const W=O[U+0],z=O[U+1],u=O[U+2];x.push(W,z,z,u,u,W)}}else if(M!==void 0){const O=M.array;T=M.version;for(let U=0,R=O.length/3-1;U<R;U+=3){const W=U+0,z=U+1,u=U+2;x.push(W,z,z,u,u,W)}}else return;const y=new(Cd(x)?Dd:Rd)(x,1);y.version=T;const m=s.get(v);m&&t.remove(m),s.set(v,y)}function g(v){const x=s.get(v);if(x){const w=v.index;w!==null&&x.version<w.version&&f(v)}else f(v);return s.get(v)}return{get:c,update:d,getWireframeAttribute:g}}function Z_(n,t,e){let i;function r(x){i=x}let s,l;function c(x){s=x.type,l=x.bytesPerElement}function d(x,w){n.drawElements(i,w,s,x*l),e.update(w,i,1)}function f(x,w,M){M!==0&&(n.drawElementsInstanced(i,w,s,x*l,M),e.update(w,i,M))}function g(x,w,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,w,0,s,x,0,M);let y=0;for(let m=0;m<M;m++)y+=w[m];e.update(y,i,1)}function v(x,w,M,T){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<x.length;m++)f(x[m]/l,w[m],T[m]);else{y.multiDrawElementsInstancedWEBGL(i,w,0,s,x,0,T,0,M);let m=0;for(let O=0;O<M;O++)m+=w[O]*T[O];e.update(m,i,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function J_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,l,c){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=c*(s/3);break;case n.LINES:e.lines+=c*(s/2);break;case n.LINE_STRIP:e.lines+=c*(s-1);break;case n.LINE_LOOP:e.lines+=c*s;break;case n.POINTS:e.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Q_(n,t,e){const i=new WeakMap,r=new ze;function s(l,c,d){const f=l.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let x=i.get(c);if(x===void 0||x.count!==v){let A=function(){q.dispose(),i.delete(c),c.removeEventListener("dispose",A)};var w=A;x!==void 0&&x.texture.dispose();const M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let W=c.attributes.position.count*R,z=1;W>t.maxTextureSize&&(z=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const u=new Float32Array(W*z*4*v),q=new Ad(u,W,z,v);q.type=Di,q.needsUpdate=!0;const P=R*4;for(let V=0;V<v;V++){const lt=m[V],Y=O[V],dt=U[V],mt=W*z*4*V;for(let ot=0;ot<lt.count;ot++){const at=ot*P;M===!0&&(r.fromBufferAttribute(lt,ot),u[mt+at+0]=r.x,u[mt+at+1]=r.y,u[mt+at+2]=r.z,u[mt+at+3]=0),T===!0&&(r.fromBufferAttribute(Y,ot),u[mt+at+4]=r.x,u[mt+at+5]=r.y,u[mt+at+6]=r.z,u[mt+at+7]=0),y===!0&&(r.fromBufferAttribute(dt,ot),u[mt+at+8]=r.x,u[mt+at+9]=r.y,u[mt+at+10]=r.z,u[mt+at+11]=dt.itemSize===4?r.w:1)}}x={count:v,texture:q,size:new he(W,z)},i.set(c,x),c.addEventListener("dispose",A)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let M=0;for(let y=0;y<f.length;y++)M+=f[y];const T=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",f)}d.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}return{update:s}}function t0(n,t,e,i){let r=new WeakMap;function s(d){const f=i.render.frame,g=d.geometry,v=t.get(d,g);if(r.get(v)!==f&&(t.update(v),r.set(v,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==f&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){const x=d.skeleton;r.get(x)!==f&&(x.update(),r.set(x,f))}return v}function l(){r=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:s,dispose:l}}const Vd=new Sn,Mh=new Od(1,1),zd=new Ad,Hd=new xm,Gd=new Ud,Sh=[],Eh=[],Th=new Float32Array(16),Ch=new Float32Array(9),Ah=new Float32Array(4);function xs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Sh[r];if(s===void 0&&(s=new Float32Array(r),Sh[r]=s),t!==0){i.toArray(s,0);for(let l=1,c=0;l!==t;++l)c+=e,n[l].toArray(s,c)}return s}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function un(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ra(n,t){let e=Eh[t];e===void 0&&(e=new Int32Array(t),Eh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function e0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function n0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),un(e,t)}}function i0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),un(e,t)}}function r0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),un(e,t)}}function s0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),un(e,i)}}function o0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Ch.set(i),n.uniformMatrix3fv(this.addr,!1,Ch),un(e,i)}}function a0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Th.set(i),n.uniformMatrix4fv(this.addr,!1,Th),un(e,i)}}function l0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function c0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),un(e,t)}}function u0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),un(e,t)}}function h0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),un(e,t)}}function d0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function p0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),un(e,t)}}function f0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),un(e,t)}}function m0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),un(e,t)}}function g0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mh.compareFunction=Td,s=Mh):s=Vd,e.setTexture2D(t||s,r)}function v0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Hd,r)}function _0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Gd,r)}function x0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||zd,r)}function b0(n){switch(n){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return r0;case 35674:return s0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return u0;case 35669:case 35673:return h0;case 5125:return d0;case 36294:return p0;case 36295:return f0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(n,t){n.uniform1fv(this.addr,t)}function w0(n,t){const e=xs(t,this.size,2);n.uniform2fv(this.addr,e)}function M0(n,t){const e=xs(t,this.size,3);n.uniform3fv(this.addr,e)}function S0(n,t){const e=xs(t,this.size,4);n.uniform4fv(this.addr,e)}function E0(n,t){const e=xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function T0(n,t){const e=xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function C0(n,t){const e=xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function A0(n,t){n.uniform1iv(this.addr,t)}function P0(n,t){n.uniform2iv(this.addr,t)}function R0(n,t){n.uniform3iv(this.addr,t)}function D0(n,t){n.uniform4iv(this.addr,t)}function L0(n,t){n.uniform1uiv(this.addr,t)}function I0(n,t){n.uniform2uiv(this.addr,t)}function U0(n,t){n.uniform3uiv(this.addr,t)}function N0(n,t){n.uniform4uiv(this.addr,t)}function O0(n,t,e){const i=this.cache,r=t.length,s=Ra(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||Vd,s[l])}function F0(n,t,e){const i=this.cache,r=t.length,s=Ra(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||Hd,s[l])}function k0(n,t,e){const i=this.cache,r=t.length,s=Ra(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||Gd,s[l])}function B0(n,t,e){const i=this.cache,r=t.length,s=Ra(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||zd,s[l])}function V0(n){switch(n){case 5126:return y0;case 35664:return w0;case 35665:return M0;case 35666:return S0;case 35674:return E0;case 35675:return T0;case 35676:return C0;case 5124:case 35670:return A0;case 35667:case 35671:return P0;case 35668:case 35672:return R0;case 35669:case 35673:return D0;case 5125:return L0;case 36294:return I0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return B0}}class z0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=b0(e.type)}}class H0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V0(e.type)}}class G0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const c=r[s];c.setValue(t,e[c.id],i)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function Ph(n,t){n.seq.push(t),n.map[t.id]=t}function W0(n,t,e){const i=n.name,r=i.length;for(Al.lastIndex=0;;){const s=Al.exec(i),l=Al.lastIndex;let c=s[1];const d=s[2]==="]",f=s[3];if(d&&(c=c|0),f===void 0||f==="["&&l+2===r){Ph(e,f===void 0?new z0(c,n,t):new H0(c,n,t));break}else{let v=e.map[c];v===void 0&&(v=new G0(c),Ph(e,v)),e=v}}}class la{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),l=t.getUniformLocation(e,s.name);W0(s,l,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,l=e.length;s!==l;++s){const c=e[s],d=i[c.id];d.needsUpdate!==!1&&c.setValue(t,d.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const l=t[r];l.id in e&&i.push(l)}return i}}function Rh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const j0=37297;let X0=0;function q0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let l=r;l<s;l++){const c=l+1;i.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return i.join(`
`)}const Dh=new fe;function Y0(n){Ie._getMatrix(Dh,Ie.workingColorSpace,n);const t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(n)){case pa:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Lh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+q0(n.getShaderSource(t),l)}else return r}function $0(n,t){const e=Y0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K0(n,t){let e;switch(t){case Wf:e="Linear";break;case jf:e="Reinhard";break;case Xf:e="Cineon";break;case qf:e="ACESFilmic";break;case $f:e="AgX";break;case Kf:e="Neutral";break;case Yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zo=new B;function Z0(){Ie.getLuminanceCoefficients(Zo);const n=Zo.x.toFixed(4),t=Zo.y.toFixed(4),e=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Q0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),l=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),e[l]={type:s.type,location:n.getAttribLocation(t,l),locationSize:c}}return e}function Xs(n){return n!==""}function Ih(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(n){return n.replace(ex,ix)}const nx=new Map;function ix(n,t){let e=ge[t];if(e===void 0){const i=nx.get(t);if(i!==void 0)e=ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(rx,sx)}function sx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ox(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function ax(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case fs:t="ENVMAP_TYPE_CUBE";break;case Ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function cx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sa:t="ENVMAP_BLENDING_MULTIPLY";break;case Hf:t="ENVMAP_BLENDING_MIX";break;case Gf:t="ENVMAP_BLENDING_ADD";break}return t}function ux(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hx(n,t,e,i){const r=n.getContext(),s=e.defines;let l=e.vertexShader,c=e.fragmentShader;const d=ox(e),f=ax(e),g=lx(e),v=cx(e),x=ux(e),w=J0(e),M=Q0(s),T=r.createProgram();let y,m,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Xs).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(y=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sr?"#define TONE_MAPPING":"",e.toneMapping!==sr?ge.tonemapping_pars_fragment:"",e.toneMapping!==sr?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),Z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),l=Mc(l),l=Ih(l,e),l=Uh(l,e),c=Mc(c),c=Ih(c,e),c=Uh(c,e),l=Nh(l),c=Nh(c),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[w,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const U=O+y+l,R=O+m+c,W=Rh(r,r.VERTEX_SHADER,U),z=Rh(r,r.FRAGMENT_SHADER,R);r.attachShader(T,W),r.attachShader(T,z),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function u(V){if(n.debug.checkShaderErrors){const lt=r.getProgramInfoLog(T).trim(),Y=r.getShaderInfoLog(W).trim(),dt=r.getShaderInfoLog(z).trim();let mt=!0,ot=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,W,z);else{const at=Lh(r,W,"vertex"),tt=Lh(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+at+`
`+tt)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(Y===""||dt==="")&&(ot=!1);ot&&(V.diagnostics={runnable:mt,programLog:lt,vertexShader:{log:Y,prefix:y},fragmentShader:{log:dt,prefix:m}})}r.deleteShader(W),r.deleteShader(z),q=new la(r,T),P=tx(r,T)}let q;this.getUniforms=function(){return q===void 0&&u(this),q};let P;this.getAttributes=function(){return P===void 0&&u(this),P};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(T,j0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X0++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=z,this}let dx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fx(t),e.set(t,i)),i}}class fx{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}}function mx(n,t,e,i,r,s,l){const c=new Vc,d=new px,f=new Set,g=[],v=r.logarithmicDepthBuffer,x=r.vertexTextures;let w=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return f.add(P),P===0?"uv":`uv${P}`}function y(P,A,V,lt,Y){const dt=lt.fog,mt=Y.geometry,ot=P.isMeshStandardMaterial?lt.environment:null,at=(P.isMeshStandardMaterial?e:t).get(P.envMap||ot),tt=at&&at.mapping===Ea?at.image.height:null,bt=M[P.type];P.precision!==null&&(w=r.getMaxPrecision(P.precision),w!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",w,"instead."));const St=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Tt=St!==void 0?St.length:0;let te=0;mt.morphAttributes.position!==void 0&&(te=1),mt.morphAttributes.normal!==void 0&&(te=2),mt.morphAttributes.color!==void 0&&(te=3);let de,pt,yt,Dt;if(bt){const Ne=ui[bt];de=Ne.vertexShader,pt=Ne.fragmentShader}else de=P.vertexShader,pt=P.fragmentShader,d.update(P),yt=d.getVertexShaderID(P),Dt=d.getFragmentShaderID(P);const wt=n.getRenderTarget(),zt=n.state.buffers.depth.getReversed(),ae=Y.isInstancedMesh===!0,Gt=Y.isBatchedMesh===!0,He=!!P.map,pe=!!P.matcap,ee=!!at,F=!!P.aoMap,mn=!!P.lightMap,ft=!!P.bumpMap,ue=!!P.normalMap,Ot=!!P.displacementMap,Ce=!!P.emissiveMap,Ht=!!P.metalnessMap,D=!!P.roughnessMap,E=P.anisotropy>0,$=P.clearcoat>0,ut=P.dispersion>0,K=P.iridescence>0,st=P.sheen>0,Vt=P.transmission>0,Et=E&&!!P.anisotropyMap,Yt=$&&!!P.clearcoatMap,Jt=$&&!!P.clearcoatNormalMap,vt=$&&!!P.clearcoatRoughnessMap,Ft=K&&!!P.iridescenceMap,jt=K&&!!P.iridescenceThicknessMap,Zt=st&&!!P.sheenColorMap,Nt=st&&!!P.sheenRoughnessMap,Se=!!P.specularMap,le=!!P.specularColorMap,Fe=!!P.specularIntensityMap,G=Vt&&!!P.transmissionMap,Rt=Vt&&!!P.thicknessMap,rt=!!P.gradientMap,gt=!!P.alphaMap,Lt=P.alphaTest>0,Pt=!!P.alphaHash,$t=!!P.extensions;let xe=sr;P.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(xe=n.toneMapping);const tn={shaderID:bt,shaderType:P.type,shaderName:P.name,vertexShader:de,fragmentShader:pt,defines:P.defines,customVertexShaderID:yt,customFragmentShaderID:Dt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:w,batching:Gt,batchingColor:Gt&&Y._colorsTexture!==null,instancing:ae,instancingColor:ae&&Y.instanceColor!==null,instancingMorph:ae&&Y.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:wt===null?n.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ms,alphaToCoverage:!!P.alphaToCoverage,map:He,matcap:pe,envMap:ee,envMapMode:ee&&at.mapping,envMapCubeUVHeight:tt,aoMap:F,lightMap:mn,bumpMap:ft,normalMap:ue,displacementMap:x&&Ot,emissiveMap:Ce,normalMapObjectSpace:ue&&P.normalMapType===tm,normalMapTangentSpace:ue&&P.normalMapType===Ta,metalnessMap:Ht,roughnessMap:D,anisotropy:E,anisotropyMap:Et,clearcoat:$,clearcoatMap:Yt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:vt,dispersion:ut,iridescence:K,iridescenceMap:Ft,iridescenceThicknessMap:jt,sheen:st,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:Se,specularColorMap:le,specularIntensityMap:Fe,transmission:Vt,transmissionMap:G,thicknessMap:Rt,gradientMap:rt,opaque:P.transparent===!1&&P.blending===ls&&P.alphaToCoverage===!1,alphaMap:gt,alphaTest:Lt,alphaHash:Pt,combine:P.combine,mapUv:He&&T(P.map.channel),aoMapUv:F&&T(P.aoMap.channel),lightMapUv:mn&&T(P.lightMap.channel),bumpMapUv:ft&&T(P.bumpMap.channel),normalMapUv:ue&&T(P.normalMap.channel),displacementMapUv:Ot&&T(P.displacementMap.channel),emissiveMapUv:Ce&&T(P.emissiveMap.channel),metalnessMapUv:Ht&&T(P.metalnessMap.channel),roughnessMapUv:D&&T(P.roughnessMap.channel),anisotropyMapUv:Et&&T(P.anisotropyMap.channel),clearcoatMapUv:Yt&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(P.sheenRoughnessMap.channel),specularMapUv:Se&&T(P.specularMap.channel),specularColorMapUv:le&&T(P.specularColorMap.channel),specularIntensityMapUv:Fe&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Rt&&T(P.thicknessMap.channel),alphaMapUv:gt&&T(P.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(ue||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!mt.attributes.uv&&(He||gt),fog:!!dt,useFog:P.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:zt,skinning:Y.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:He&&P.map.isVideoTexture===!0&&Ie.getTransfer(P.map.colorSpace)===Be,decodeVideoTextureEmissive:Ce&&P.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(P.emissiveMap.colorSpace)===Be,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Xe,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:$t&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&P.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function m(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)A.push(V),A.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(O(A,P),U(A,P),A.push(n.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function O(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function U(P,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const A=M[P.type];let V;if(A){const lt=ui[A];V=Lm.clone(lt.uniforms)}else V=P.uniforms;return V}function W(P,A){let V;for(let lt=0,Y=g.length;lt<Y;lt++){const dt=g[lt];if(dt.cacheKey===A){V=dt,++V.usedTimes;break}}return V===void 0&&(V=new hx(n,A,P,s),g.push(V)),V}function z(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function u(P){d.remove(P)}function q(){d.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:W,releaseProgram:z,releaseShaderCache:u,programs:g,dispose:q}}function gx(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let c=n.get(l);return c===void 0&&(c={},n.set(l,c)),c}function i(l){n.delete(l)}function r(l,c,d){n.get(l)[c]=d}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function vx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Fh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function l(v,x,w,M,T,y){let m=n[t];return m===void 0?(m={id:v.id,object:v,geometry:x,material:w,groupOrder:M,renderOrder:v.renderOrder,z:T,group:y},n[t]=m):(m.id=v.id,m.object=v,m.geometry=x,m.material=w,m.groupOrder=M,m.renderOrder=v.renderOrder,m.z=T,m.group=y),t++,m}function c(v,x,w,M,T,y){const m=l(v,x,w,M,T,y);w.transmission>0?i.push(m):w.transparent===!0?r.push(m):e.push(m)}function d(v,x,w,M,T,y){const m=l(v,x,w,M,T,y);w.transmission>0?i.unshift(m):w.transparent===!0?r.unshift(m):e.unshift(m)}function f(v,x){e.length>1&&e.sort(v||vx),i.length>1&&i.sort(x||Fh),r.length>1&&r.sort(x||Fh)}function g(){for(let v=t,x=n.length;v<x;v++){const w=n[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:d,finish:g,sort:f}}function _x(){let n=new WeakMap;function t(i,r){const s=n.get(i);let l;return s===void 0?(l=new kh,n.set(i,[l])):r>=s.length?(l=new kh,s.push(l)):l=s[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function xx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new se};break;case"SpotLight":e={position:new B,direction:new B,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function bx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let yx=0;function wx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Mx(n){const t=new xx,e=bx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new B);const r=new B,s=new qe,l=new qe;function c(f){let g=0,v=0,x=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let w=0,M=0,T=0,y=0,m=0,O=0,U=0,R=0,W=0,z=0,u=0;f.sort(wx);for(let P=0,A=f.length;P<A;P++){const V=f[P],lt=V.color,Y=V.intensity,dt=V.distance,mt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=lt.r*Y,v+=lt.g*Y,x+=lt.b*Y;else if(V.isLightProbe){for(let ot=0;ot<9;ot++)i.probe[ot].addScaledVector(V.sh.coefficients[ot],Y);u++}else if(V.isDirectionalLight){const ot=t.get(V);if(ot.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const at=V.shadow,tt=e.get(V);tt.shadowIntensity=at.intensity,tt.shadowBias=at.bias,tt.shadowNormalBias=at.normalBias,tt.shadowRadius=at.radius,tt.shadowMapSize=at.mapSize,i.directionalShadow[w]=tt,i.directionalShadowMap[w]=mt,i.directionalShadowMatrix[w]=V.shadow.matrix,O++}i.directional[w]=ot,w++}else if(V.isSpotLight){const ot=t.get(V);ot.position.setFromMatrixPosition(V.matrixWorld),ot.color.copy(lt).multiplyScalar(Y),ot.distance=dt,ot.coneCos=Math.cos(V.angle),ot.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ot.decay=V.decay,i.spot[T]=ot;const at=V.shadow;if(V.map&&(i.spotLightMap[W]=V.map,W++,at.updateMatrices(V),V.castShadow&&z++),i.spotLightMatrix[T]=at.matrix,V.castShadow){const tt=e.get(V);tt.shadowIntensity=at.intensity,tt.shadowBias=at.bias,tt.shadowNormalBias=at.normalBias,tt.shadowRadius=at.radius,tt.shadowMapSize=at.mapSize,i.spotShadow[T]=tt,i.spotShadowMap[T]=mt,R++}T++}else if(V.isRectAreaLight){const ot=t.get(V);ot.color.copy(lt).multiplyScalar(Y),ot.halfWidth.set(V.width*.5,0,0),ot.halfHeight.set(0,V.height*.5,0),i.rectArea[y]=ot,y++}else if(V.isPointLight){const ot=t.get(V);if(ot.color.copy(V.color).multiplyScalar(V.intensity),ot.distance=V.distance,ot.decay=V.decay,V.castShadow){const at=V.shadow,tt=e.get(V);tt.shadowIntensity=at.intensity,tt.shadowBias=at.bias,tt.shadowNormalBias=at.normalBias,tt.shadowRadius=at.radius,tt.shadowMapSize=at.mapSize,tt.shadowCameraNear=at.camera.near,tt.shadowCameraFar=at.camera.far,i.pointShadow[M]=tt,i.pointShadowMap[M]=mt,i.pointShadowMatrix[M]=V.shadow.matrix,U++}i.point[M]=ot,M++}else if(V.isHemisphereLight){const ot=t.get(V);ot.skyColor.copy(V.color).multiplyScalar(Y),ot.groundColor.copy(V.groundColor).multiplyScalar(Y),i.hemi[m]=ot,m++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=x;const q=i.hash;(q.directionalLength!==w||q.pointLength!==M||q.spotLength!==T||q.rectAreaLength!==y||q.hemiLength!==m||q.numDirectionalShadows!==O||q.numPointShadows!==U||q.numSpotShadows!==R||q.numSpotMaps!==W||q.numLightProbes!==u)&&(i.directional.length=w,i.spot.length=T,i.rectArea.length=y,i.point.length=M,i.hemi.length=m,i.directionalShadow.length=O,i.directionalShadowMap.length=O,i.pointShadow.length=U,i.pointShadowMap.length=U,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=O,i.pointShadowMatrix.length=U,i.spotLightMatrix.length=R+W-z,i.spotLightMap.length=W,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=u,q.directionalLength=w,q.pointLength=M,q.spotLength=T,q.rectAreaLength=y,q.hemiLength=m,q.numDirectionalShadows=O,q.numPointShadows=U,q.numSpotShadows=R,q.numSpotMaps=W,q.numLightProbes=u,i.version=yx++)}function d(f,g){let v=0,x=0,w=0,M=0,T=0;const y=g.matrixWorldInverse;for(let m=0,O=f.length;m<O;m++){const U=f[m];if(U.isDirectionalLight){const R=i.directional[v];R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),v++}else if(U.isSpotLight){const R=i.spot[w];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),w++}else if(U.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),l.identity(),s.copy(U.matrixWorld),s.premultiply(y),l.extractRotation(s),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),M++}else if(U.isPointLight){const R=i.point[x];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const R=i.hemi[T];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:c,setupView:d,state:i}}function Bh(n){const t=new Mx(n),e=[],i=[];function r(g){f.camera=g,e.length=0,i.length=0}function s(g){e.push(g)}function l(g){i.push(g)}function c(){t.setup(e)}function d(g){t.setupView(e,g)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:l}}function Sx(n){let t=new WeakMap;function e(r,s=0){const l=t.get(r);let c;return l===void 0?(c=new Bh(n),t.set(r,[c])):s>=l.length?(c=new Bh(n),l.push(c)):c=l[s],c}function i(){t=new WeakMap}return{get:e,dispose:i}}const Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
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
}`;function Cx(n,t,e){let i=new Hc;const r=new he,s=new he,l=new ze,c=new Wm({depthPacking:Qf}),d=new jm,f={},g=e.maxTextureSize,v={[ar]:Un,[Un]:ar,[Xe]:Xe},x=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Ex,fragmentShader:Tx}),w=x.clone();w.defines.HORIZONTAL_PASS=1;const M=new vi;M.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new vn(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let m=this.type;this.render=function(z,u,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const P=n.getRenderTarget(),A=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),lt=n.state;lt.setBlending(rr),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const Y=m!==Ri&&this.type===Ri,dt=m===Ri&&this.type!==Ri;for(let mt=0,ot=z.length;mt<ot;mt++){const at=z[mt],tt=at.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;r.copy(tt.mapSize);const bt=tt.getFrameExtents();if(r.multiply(bt),s.copy(tt.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(s.x=Math.floor(g/bt.x),r.x=s.x*bt.x,tt.mapSize.x=s.x),r.y>g&&(s.y=Math.floor(g/bt.y),r.y=s.y*bt.y,tt.mapSize.y=s.y)),tt.map===null||Y===!0||dt===!0){const Tt=this.type!==Ri?{minFilter:ni,magFilter:ni}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Rr(r.x,r.y,Tt),tt.map.texture.name=at.name+".shadowMap",tt.camera.updateProjectionMatrix()}n.setRenderTarget(tt.map),n.clear();const St=tt.getViewportCount();for(let Tt=0;Tt<St;Tt++){const te=tt.getViewport(Tt);l.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),lt.viewport(l),tt.updateMatrices(at,Tt),i=tt.getFrustum(),R(u,q,tt.camera,at,this.type)}tt.isPointLightShadow!==!0&&this.type===Ri&&O(tt,q),tt.needsUpdate=!1}m=this.type,y.needsUpdate=!1,n.setRenderTarget(P,A,V)};function O(z,u){const q=t.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,w.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,w.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Rr(r.x,r.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(u,null,q,x,T,null),w.uniforms.shadow_pass.value=z.mapPass.texture,w.uniforms.resolution.value=z.mapSize,w.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(u,null,q,w,T,null)}function U(z,u,q,P){let A=null;const V=q.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)A=V;else if(A=q.isPointLight===!0?d:c,n.localClippingEnabled&&u.clipShadows===!0&&Array.isArray(u.clippingPlanes)&&u.clippingPlanes.length!==0||u.displacementMap&&u.displacementScale!==0||u.alphaMap&&u.alphaTest>0||u.map&&u.alphaTest>0||u.alphaToCoverage===!0){const lt=A.uuid,Y=u.uuid;let dt=f[lt];dt===void 0&&(dt={},f[lt]=dt);let mt=dt[Y];mt===void 0&&(mt=A.clone(),dt[Y]=mt,u.addEventListener("dispose",W)),A=mt}if(A.visible=u.visible,A.wireframe=u.wireframe,P===Ri?A.side=u.shadowSide!==null?u.shadowSide:u.side:A.side=u.shadowSide!==null?u.shadowSide:v[u.side],A.alphaMap=u.alphaMap,A.alphaTest=u.alphaToCoverage===!0?.5:u.alphaTest,A.map=u.map,A.clipShadows=u.clipShadows,A.clippingPlanes=u.clippingPlanes,A.clipIntersection=u.clipIntersection,A.displacementMap=u.displacementMap,A.displacementScale=u.displacementScale,A.displacementBias=u.displacementBias,A.wireframeLinewidth=u.wireframeLinewidth,A.linewidth=u.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const lt=n.properties.get(A);lt.light=q}return A}function R(z,u,q,P,A){if(z.visible===!1)return;if(z.layers.test(u.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Ri)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,z.matrixWorld);const Y=t.update(z),dt=z.material;if(Array.isArray(dt)){const mt=Y.groups;for(let ot=0,at=mt.length;ot<at;ot++){const tt=mt[ot],bt=dt[tt.materialIndex];if(bt&&bt.visible){const St=U(z,bt,P,A);z.onBeforeShadow(n,z,u,q,Y,St,tt),n.renderBufferDirect(q,null,Y,St,z,tt),z.onAfterShadow(n,z,u,q,Y,St,tt)}}}else if(dt.visible){const mt=U(z,dt,P,A);z.onBeforeShadow(n,z,u,q,Y,mt,null),n.renderBufferDirect(q,null,Y,mt,z,null),z.onAfterShadow(n,z,u,q,Y,mt,null)}}const lt=z.children;for(let Y=0,dt=lt.length;Y<dt;Y++)R(lt[Y],u,q,P,A)}function W(z){z.target.removeEventListener("dispose",W);for(const q in f){const P=f[q],A=z.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const Ax={[Vl]:zl,[Hl]:jl,[Gl]:Xl,[ds]:Wl,[zl]:Vl,[jl]:Hl,[Xl]:Gl,[Wl]:ds};function Px(n,t){function e(){let G=!1;const Rt=new ze;let rt=null;const gt=new ze(0,0,0,0);return{setMask:function(Lt){rt!==Lt&&!G&&(n.colorMask(Lt,Lt,Lt,Lt),rt=Lt)},setLocked:function(Lt){G=Lt},setClear:function(Lt,Pt,$t,xe,tn){tn===!0&&(Lt*=xe,Pt*=xe,$t*=xe),Rt.set(Lt,Pt,$t,xe),gt.equals(Rt)===!1&&(n.clearColor(Lt,Pt,$t,xe),gt.copy(Rt))},reset:function(){G=!1,rt=null,gt.set(-1,0,0,0)}}}function i(){let G=!1,Rt=!1,rt=null,gt=null,Lt=null;return{setReversed:function(Pt){if(Rt!==Pt){const $t=t.get("EXT_clip_control");Pt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Rt=Pt;const xe=Lt;Lt=null,this.setClear(xe)}},getReversed:function(){return Rt},setTest:function(Pt){Pt?wt(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(Pt){rt!==Pt&&!G&&(n.depthMask(Pt),rt=Pt)},setFunc:function(Pt){if(Rt&&(Pt=Ax[Pt]),gt!==Pt){switch(Pt){case Vl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case Gl:n.depthFunc(n.EQUAL);break;case Wl:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=Pt}},setLocked:function(Pt){G=Pt},setClear:function(Pt){Lt!==Pt&&(Rt&&(Pt=1-Pt),n.clearDepth(Pt),Lt=Pt)},reset:function(){G=!1,rt=null,gt=null,Lt=null,Rt=!1}}}function r(){let G=!1,Rt=null,rt=null,gt=null,Lt=null,Pt=null,$t=null,xe=null,tn=null;return{setTest:function(Ne){G||(Ne?wt(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(Ne){Rt!==Ne&&!G&&(n.stencilMask(Ne),Rt=Ne)},setFunc:function(Ne,Cn,zn){(rt!==Ne||gt!==Cn||Lt!==zn)&&(n.stencilFunc(Ne,Cn,zn),rt=Ne,gt=Cn,Lt=zn)},setOp:function(Ne,Cn,zn){(Pt!==Ne||$t!==Cn||xe!==zn)&&(n.stencilOp(Ne,Cn,zn),Pt=Ne,$t=Cn,xe=zn)},setLocked:function(Ne){G=Ne},setClear:function(Ne){tn!==Ne&&(n.clearStencil(Ne),tn=Ne)},reset:function(){G=!1,Rt=null,rt=null,gt=null,Lt=null,Pt=null,$t=null,xe=null,tn=null}}}const s=new e,l=new i,c=new r,d=new WeakMap,f=new WeakMap;let g={},v={},x=new WeakMap,w=[],M=null,T=!1,y=null,m=null,O=null,U=null,R=null,W=null,z=null,u=new se(0,0,0),q=0,P=!1,A=null,V=null,lt=null,Y=null,dt=null;const mt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,at=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(tt)[1]),ot=at>=1):tt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),ot=at>=2);let bt=null,St={};const Tt=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),de=new ze().fromArray(Tt),pt=new ze().fromArray(te);function yt(G,Rt,rt,gt){const Lt=new Uint8Array(4),Pt=n.createTexture();n.bindTexture(G,Pt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<rt;$t++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(Rt+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return Pt}const Dt={};Dt[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),wt(n.DEPTH_TEST),l.setFunc(ds),ft(!1),ue(Du),wt(n.CULL_FACE),F(rr);function wt(G){g[G]!==!0&&(n.enable(G),g[G]=!0)}function zt(G){g[G]!==!1&&(n.disable(G),g[G]=!1)}function ae(G,Rt){return v[G]!==Rt?(n.bindFramebuffer(G,Rt),v[G]=Rt,G===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Rt),G===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Gt(G,Rt){let rt=w,gt=!1;if(G){rt=x.get(Rt),rt===void 0&&(rt=[],x.set(Rt,rt));const Lt=G.textures;if(rt.length!==Lt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let Pt=0,$t=Lt.length;Pt<$t;Pt++)rt[Pt]=n.COLOR_ATTACHMENT0+Pt;rt.length=Lt.length,gt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,gt=!0);gt&&n.drawBuffers(rt)}function He(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const pe={[Mr]:n.FUNC_ADD,[Ef]:n.FUNC_SUBTRACT,[Tf]:n.FUNC_REVERSE_SUBTRACT};pe[Cf]=n.MIN,pe[Af]=n.MAX;const ee={[Pf]:n.ZERO,[Rf]:n.ONE,[Df]:n.SRC_COLOR,[kl]:n.SRC_ALPHA,[Ff]:n.SRC_ALPHA_SATURATE,[Nf]:n.DST_COLOR,[If]:n.DST_ALPHA,[Lf]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[Of]:n.ONE_MINUS_DST_COLOR,[Uf]:n.ONE_MINUS_DST_ALPHA,[kf]:n.CONSTANT_COLOR,[Bf]:n.ONE_MINUS_CONSTANT_COLOR,[Vf]:n.CONSTANT_ALPHA,[zf]:n.ONE_MINUS_CONSTANT_ALPHA};function F(G,Rt,rt,gt,Lt,Pt,$t,xe,tn,Ne){if(G===rr){T===!0&&(zt(n.BLEND),T=!1);return}if(T===!1&&(wt(n.BLEND),T=!0),G!==Sf){if(G!==y||Ne!==P){if((m!==Mr||R!==Mr)&&(n.blendEquation(n.FUNC_ADD),m=Mr,R=Mr),Ne)switch(G){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lu:n.blendFunc(n.ONE,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,U=null,W=null,z=null,u.set(0,0,0),q=0,y=G,P=Ne}return}Lt=Lt||Rt,Pt=Pt||rt,$t=$t||gt,(Rt!==m||Lt!==R)&&(n.blendEquationSeparate(pe[Rt],pe[Lt]),m=Rt,R=Lt),(rt!==O||gt!==U||Pt!==W||$t!==z)&&(n.blendFuncSeparate(ee[rt],ee[gt],ee[Pt],ee[$t]),O=rt,U=gt,W=Pt,z=$t),(xe.equals(u)===!1||tn!==q)&&(n.blendColor(xe.r,xe.g,xe.b,tn),u.copy(xe),q=tn),y=G,P=!1}function mn(G,Rt){G.side===Xe?zt(n.CULL_FACE):wt(n.CULL_FACE);let rt=G.side===Un;Rt&&(rt=!rt),ft(rt),G.blending===ls&&G.transparent===!1?F(rr):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),s.setMask(G.colorWrite);const gt=G.stencilWrite;c.setTest(gt),gt&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?wt(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(G){A!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),A=G)}function ue(G){G!==yf?(wt(n.CULL_FACE),G!==V&&(G===Du?n.cullFace(n.BACK):G===wf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),V=G}function Ot(G){G!==lt&&(ot&&n.lineWidth(G),lt=G)}function Ce(G,Rt,rt){G?(wt(n.POLYGON_OFFSET_FILL),(Y!==Rt||dt!==rt)&&(n.polygonOffset(Rt,rt),Y=Rt,dt=rt)):zt(n.POLYGON_OFFSET_FILL)}function Ht(G){G?wt(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function D(G){G===void 0&&(G=n.TEXTURE0+mt-1),bt!==G&&(n.activeTexture(G),bt=G)}function E(G,Rt,rt){rt===void 0&&(bt===null?rt=n.TEXTURE0+mt-1:rt=bt);let gt=St[rt];gt===void 0&&(gt={type:void 0,texture:void 0},St[rt]=gt),(gt.type!==G||gt.texture!==Rt)&&(bt!==rt&&(n.activeTexture(rt),bt=rt),n.bindTexture(G,Rt||Dt[G]),gt.type=G,gt.texture=Rt)}function $(){const G=St[bt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ut(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Jt(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Zt(G){de.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),de.copy(G))}function Nt(G){pt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),pt.copy(G))}function Se(G,Rt){let rt=f.get(Rt);rt===void 0&&(rt=new WeakMap,f.set(Rt,rt));let gt=rt.get(G);gt===void 0&&(gt=n.getUniformBlockIndex(Rt,G.name),rt.set(G,gt))}function le(G,Rt){const gt=f.get(Rt).get(G);d.get(Rt)!==gt&&(n.uniformBlockBinding(Rt,gt,G.__bindingPointIndex),d.set(Rt,gt))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},bt=null,St={},v={},x=new WeakMap,w=[],M=null,T=!1,y=null,m=null,O=null,U=null,R=null,W=null,z=null,u=new se(0,0,0),q=0,P=!1,A=null,V=null,lt=null,Y=null,dt=null,de.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:wt,disable:zt,bindFramebuffer:ae,drawBuffers:Gt,useProgram:He,setBlending:F,setMaterial:mn,setFlipSided:ft,setCullFace:ue,setLineWidth:Ot,setPolygonOffset:Ce,setScissorTest:Ht,activeTexture:D,bindTexture:E,unbindTexture:$,compressedTexImage2D:ut,compressedTexImage3D:K,texImage2D:Ft,texImage3D:jt,updateUBOMapping:Se,uniformBlockBinding:le,texStorage2D:Jt,texStorage3D:vt,texSubImage2D:st,texSubImage3D:Vt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Yt,scissor:Zt,viewport:Nt,reset:Fe}}function Rx(n,t,e,i,r,s,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new he,g=new WeakMap;let v;const x=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,E){return w?new OffscreenCanvas(D,E):Js("canvas")}function T(D,E,$){let ut=1;const K=Ht(D);if((K.width>$||K.height>$)&&(ut=$/Math.max(K.width,K.height)),ut<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const st=Math.floor(ut*K.width),Vt=Math.floor(ut*K.height);v===void 0&&(v=M(st,Vt));const Et=E?M(st,Vt):v;return Et.width=st,Et.height=Vt,Et.getContext("2d").drawImage(D,0,0,st,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+st+"x"+Vt+")."),Et}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function y(D){return D.generateMipmaps}function m(D){n.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function U(D,E,$,ut,K=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let st=E;if(E===n.RED&&($===n.FLOAT&&(st=n.R32F),$===n.HALF_FLOAT&&(st=n.R16F),$===n.UNSIGNED_BYTE&&(st=n.R8)),E===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(st=n.R8UI),$===n.UNSIGNED_SHORT&&(st=n.R16UI),$===n.UNSIGNED_INT&&(st=n.R32UI),$===n.BYTE&&(st=n.R8I),$===n.SHORT&&(st=n.R16I),$===n.INT&&(st=n.R32I)),E===n.RG&&($===n.FLOAT&&(st=n.RG32F),$===n.HALF_FLOAT&&(st=n.RG16F),$===n.UNSIGNED_BYTE&&(st=n.RG8)),E===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(st=n.RG8UI),$===n.UNSIGNED_SHORT&&(st=n.RG16UI),$===n.UNSIGNED_INT&&(st=n.RG32UI),$===n.BYTE&&(st=n.RG8I),$===n.SHORT&&(st=n.RG16I),$===n.INT&&(st=n.RG32I)),E===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(st=n.RGB8UI),$===n.UNSIGNED_SHORT&&(st=n.RGB16UI),$===n.UNSIGNED_INT&&(st=n.RGB32UI),$===n.BYTE&&(st=n.RGB8I),$===n.SHORT&&(st=n.RGB16I),$===n.INT&&(st=n.RGB32I)),E===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(st=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(st=n.RGBA16UI),$===n.UNSIGNED_INT&&(st=n.RGBA32UI),$===n.BYTE&&(st=n.RGBA8I),$===n.SHORT&&(st=n.RGBA16I),$===n.INT&&(st=n.RGBA32I)),E===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(st=n.RGB9_E5),E===n.RGBA){const Vt=K?pa:Ie.getTransfer(ut);$===n.FLOAT&&(st=n.RGBA32F),$===n.HALF_FLOAT&&(st=n.RGBA16F),$===n.UNSIGNED_BYTE&&(st=Vt===Be?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)}return(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function R(D,E){let $;return D?E===null||E===Pr||E===$s?$=n.DEPTH24_STENCIL8:E===Di?$=n.DEPTH32F_STENCIL8:E===Ys&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pr||E===$s?$=n.DEPTH_COMPONENT24:E===Di?$=n.DEPTH_COMPONENT32F:E===Ys&&($=n.DEPTH_COMPONENT16),$}function W(D,E){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ni&&D.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function z(D){const E=D.target;E.removeEventListener("dispose",z),q(E),E.isVideoTexture&&g.delete(E)}function u(D){const E=D.target;E.removeEventListener("dispose",u),A(E)}function q(D){const E=i.get(D);if(E.__webglInit===void 0)return;const $=D.source,ut=x.get($);if(ut){const K=ut[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(D),Object.keys(ut).length===0&&x.delete($)}i.remove(D)}function P(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const $=D.source,ut=x.get($);delete ut[E.__cacheKey],l.memory.textures--}function A(D){const E=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let K=0;K<E.__webglFramebuffer[ut].length;K++)n.deleteFramebuffer(E.__webglFramebuffer[ut][K]);else n.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)n.deleteFramebuffer(E.__webglFramebuffer[ut]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=D.textures;for(let ut=0,K=$.length;ut<K;ut++){const st=i.get($[ut]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),l.memory.textures--),i.remove($[ut])}i.remove(D)}let V=0;function lt(){V=0}function Y(){const D=V;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),V+=1,D}function dt(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function mt(D,E){const $=i.get(D);if(D.isVideoTexture&&Ot(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const ut=D.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt($,D,E);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+E)}function ot(D,E){const $=i.get(D);if(D.version>0&&$.__version!==D.version){pt($,D,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+E)}function at(D,E){const $=i.get(D);if(D.version>0&&$.__version!==D.version){pt($,D,E);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+E)}function tt(D,E){const $=i.get(D);if(D.version>0&&$.__version!==D.version){yt($,D,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+E)}const bt={[qs]:n.REPEAT,[Tr]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},St={[ni]:n.NEAREST,[Zf]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[hi]:n.LINEAR,[Ka]:n.LINEAR_MIPMAP_NEAREST,[Cr]:n.LINEAR_MIPMAP_LINEAR},Tt={[em]:n.NEVER,[am]:n.ALWAYS,[nm]:n.LESS,[Td]:n.LEQUAL,[im]:n.EQUAL,[om]:n.GEQUAL,[rm]:n.GREATER,[sm]:n.NOTEQUAL};function te(D,E){if(E.type===Di&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===hi||E.magFilter===Ka||E.magFilter===Co||E.magFilter===Cr||E.minFilter===hi||E.minFilter===Ka||E.minFilter===Co||E.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,bt[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,bt[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,bt[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,St[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ni||E.minFilter!==Co&&E.minFilter!==Cr||E.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function de(D,E){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",z));const ut=E.source;let K=x.get(ut);K===void 0&&(K={},x.set(ut,K));const st=dt(E);if(st!==D.__cacheKey){K[st]===void 0&&(K[st]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,$=!0),K[st].usedTimes++;const Vt=K[D.__cacheKey];Vt!==void 0&&(K[D.__cacheKey].usedTimes--,Vt.usedTimes===0&&P(E)),D.__cacheKey=st,D.__webglTexture=K[st].texture}return $}function pt(D,E,$){let ut=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=n.TEXTURE_3D);const K=de(D,E),st=E.source;e.bindTexture(ut,D.__webglTexture,n.TEXTURE0+$);const Vt=i.get(st);if(st.version!==Vt.__version||K===!0){e.activeTexture(n.TEXTURE0+$);const Et=Ie.getPrimaries(Ie.workingColorSpace),Yt=E.colorSpace===nr?null:Ie.getPrimaries(E.colorSpace),Jt=E.colorSpace===nr||Et===Yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let vt=T(E.image,!1,r.maxTextureSize);vt=Ce(E,vt);const Ft=s.convert(E.format,E.colorSpace),jt=s.convert(E.type);let Zt=U(E.internalFormat,Ft,jt,E.colorSpace,E.isVideoTexture);te(ut,E);let Nt;const Se=E.mipmaps,le=E.isVideoTexture!==!0,Fe=Vt.__version===void 0||K===!0,G=st.dataReady,Rt=W(E,vt);if(E.isDepthTexture)Zt=R(E.format===Zs,E.type),Fe&&(le?e.texStorage2D(n.TEXTURE_2D,1,Zt,vt.width,vt.height):e.texImage2D(n.TEXTURE_2D,0,Zt,vt.width,vt.height,0,Ft,jt,null));else if(E.isDataTexture)if(Se.length>0){le&&Fe&&e.texStorage2D(n.TEXTURE_2D,Rt,Zt,Se[0].width,Se[0].height);for(let rt=0,gt=Se.length;rt<gt;rt++)Nt=Se[rt],le?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Nt.width,Nt.height,Ft,jt,Nt.data):e.texImage2D(n.TEXTURE_2D,rt,Zt,Nt.width,Nt.height,0,Ft,jt,Nt.data);E.generateMipmaps=!1}else le?(Fe&&e.texStorage2D(n.TEXTURE_2D,Rt,Zt,vt.width,vt.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt.width,vt.height,Ft,jt,vt.data)):e.texImage2D(n.TEXTURE_2D,0,Zt,vt.width,vt.height,0,Ft,jt,vt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){le&&Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Zt,Se[0].width,Se[0].height,vt.depth);for(let rt=0,gt=Se.length;rt<gt;rt++)if(Nt=Se[rt],E.format!==ei)if(Ft!==null)if(le){if(G)if(E.layerUpdates.size>0){const Lt=mh(Nt.width,Nt.height,E.format,E.type);for(const Pt of E.layerUpdates){const $t=Nt.data.subarray(Pt*Lt/Nt.data.BYTES_PER_ELEMENT,(Pt+1)*Lt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,Pt,Nt.width,Nt.height,1,Ft,$t)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Nt.width,Nt.height,vt.depth,Ft,Nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Zt,Nt.width,Nt.height,vt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Nt.width,Nt.height,vt.depth,Ft,jt,Nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Zt,Nt.width,Nt.height,vt.depth,0,Ft,jt,Nt.data)}else{le&&Fe&&e.texStorage2D(n.TEXTURE_2D,Rt,Zt,Se[0].width,Se[0].height);for(let rt=0,gt=Se.length;rt<gt;rt++)Nt=Se[rt],E.format!==ei?Ft!==null?le?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,Nt.width,Nt.height,Ft,Nt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Nt.width,Nt.height,Ft,jt,Nt.data):e.texImage2D(n.TEXTURE_2D,rt,Zt,Nt.width,Nt.height,0,Ft,jt,Nt.data)}else if(E.isDataArrayTexture)if(le){if(Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Zt,vt.width,vt.height,vt.depth),G)if(E.layerUpdates.size>0){const rt=mh(vt.width,vt.height,E.format,E.type);for(const gt of E.layerUpdates){const Lt=vt.data.subarray(gt*rt/vt.data.BYTES_PER_ELEMENT,(gt+1)*rt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,vt.width,vt.height,1,Ft,jt,Lt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ft,jt,vt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Zt,vt.width,vt.height,vt.depth,0,Ft,jt,vt.data);else if(E.isData3DTexture)le?(Fe&&e.texStorage3D(n.TEXTURE_3D,Rt,Zt,vt.width,vt.height,vt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ft,jt,vt.data)):e.texImage3D(n.TEXTURE_3D,0,Zt,vt.width,vt.height,vt.depth,0,Ft,jt,vt.data);else if(E.isFramebufferTexture){if(Fe)if(le)e.texStorage2D(n.TEXTURE_2D,Rt,Zt,vt.width,vt.height);else{let rt=vt.width,gt=vt.height;for(let Lt=0;Lt<Rt;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,Zt,rt,gt,0,Ft,jt,null),rt>>=1,gt>>=1}}else if(Se.length>0){if(le&&Fe){const rt=Ht(Se[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Zt,rt.width,rt.height)}for(let rt=0,gt=Se.length;rt<gt;rt++)Nt=Se[rt],le?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Ft,jt,Nt):e.texImage2D(n.TEXTURE_2D,rt,Zt,Ft,jt,Nt);E.generateMipmaps=!1}else if(le){if(Fe){const rt=Ht(vt);e.texStorage2D(n.TEXTURE_2D,Rt,Zt,rt.width,rt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ft,jt,vt)}else e.texImage2D(n.TEXTURE_2D,0,Zt,Ft,jt,vt);y(E)&&m(ut),Vt.__version=st.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function yt(D,E,$){if(E.image.length!==6)return;const ut=de(D,E),K=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const st=i.get(K);if(K.version!==st.__version||ut===!0){e.activeTexture(n.TEXTURE0+$);const Vt=Ie.getPrimaries(Ie.workingColorSpace),Et=E.colorSpace===nr?null:Ie.getPrimaries(E.colorSpace),Yt=E.colorSpace===nr||Vt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Jt=E.isCompressedTexture||E.image[0].isCompressedTexture,vt=E.image[0]&&E.image[0].isDataTexture,Ft=[];for(let gt=0;gt<6;gt++)!Jt&&!vt?Ft[gt]=T(E.image[gt],!0,r.maxCubemapSize):Ft[gt]=vt?E.image[gt].image:E.image[gt],Ft[gt]=Ce(E,Ft[gt]);const jt=Ft[0],Zt=s.convert(E.format,E.colorSpace),Nt=s.convert(E.type),Se=U(E.internalFormat,Zt,Nt,E.colorSpace),le=E.isVideoTexture!==!0,Fe=st.__version===void 0||ut===!0,G=K.dataReady;let Rt=W(E,jt);te(n.TEXTURE_CUBE_MAP,E);let rt;if(Jt){le&&Fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Se,jt.width,jt.height);for(let gt=0;gt<6;gt++){rt=Ft[gt].mipmaps;for(let Lt=0;Lt<rt.length;Lt++){const Pt=rt[Lt];E.format!==ei?Zt!==null?le?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,0,0,Pt.width,Pt.height,Zt,Pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,Se,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,0,0,Pt.width,Pt.height,Zt,Nt,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,Se,Pt.width,Pt.height,0,Zt,Nt,Pt.data)}}}else{if(rt=E.mipmaps,le&&Fe){rt.length>0&&Rt++;const gt=Ht(Ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(vt){le?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ft[gt].width,Ft[gt].height,Zt,Nt,Ft[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Se,Ft[gt].width,Ft[gt].height,0,Zt,Nt,Ft[gt].data);for(let Lt=0;Lt<rt.length;Lt++){const $t=rt[Lt].image[gt].image;le?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,0,0,$t.width,$t.height,Zt,Nt,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,Se,$t.width,$t.height,0,Zt,Nt,$t.data)}}else{le?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Zt,Nt,Ft[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Se,Zt,Nt,Ft[gt]);for(let Lt=0;Lt<rt.length;Lt++){const Pt=rt[Lt];le?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,0,0,Zt,Nt,Pt.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,Se,Zt,Nt,Pt.image[gt])}}}y(E)&&m(n.TEXTURE_CUBE_MAP),st.__version=K.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Dt(D,E,$,ut,K,st){const Vt=s.convert($.format,$.colorSpace),Et=s.convert($.type),Yt=U($.internalFormat,Vt,Et,$.colorSpace),Jt=i.get(E),vt=i.get($);if(vt.__renderTarget=E,!Jt.__hasExternalTextures){const Ft=Math.max(1,E.width>>st),jt=Math.max(1,E.height>>st);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,st,Yt,Ft,jt,E.depth,0,Vt,Et,null):e.texImage2D(K,st,Yt,Ft,jt,0,Vt,Et,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),ue(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,K,vt.__webglTexture,0,ft(E)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,K,vt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(D,E,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const ut=E.depthTexture,K=ut&&ut.isDepthTexture?ut.type:null,st=R(E.stencilBuffer,K),Vt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=ft(E);ue(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,st,E.width,E.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,st,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,st,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Vt,n.RENDERBUFFER,D)}else{const ut=E.textures;for(let K=0;K<ut.length;K++){const st=ut[K],Vt=s.convert(st.format,st.colorSpace),Et=s.convert(st.type),Yt=U(st.internalFormat,Vt,Et,st.colorSpace),Jt=ft(E);$&&ue(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,Yt,E.width,E.height):ue(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt,Yt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Yt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=i.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt(E.depthTexture,0);const K=ut.__webglTexture,st=ft(E);if(E.depthTexture.format===Ks)ue(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(E.depthTexture.format===Zs)ue(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ae(D){const E=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ut=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",K)};ut.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=ut}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ut=D.texture.mipmaps;ut&&ut.length>0?zt(E.__webglFramebuffer[0],D):zt(E.__webglFramebuffer,D)}else if($){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=n.createRenderbuffer(),wt(E.__webglDepthbuffer[ut],D,!1);else{const K=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,st)}}else{const ut=D.texture.mipmaps;if(ut&&ut.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),wt(E.__webglDepthbuffer,D,!1);else{const K=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(D,E,$){const ut=i.get(D);E!==void 0&&Dt(ut.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&ae(D)}function He(D){const E=D.texture,$=i.get(D),ut=i.get(E);D.addEventListener("dispose",u);const K=D.textures,st=D.isWebGLCubeRenderTarget===!0,Vt=K.length>1;if(Vt||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=E.version,l.memory.textures++),st){$.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Et]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)$.__webglFramebuffer[Et][Yt]=n.createFramebuffer()}else $.__webglFramebuffer[Et]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Et=0;Et<E.mipmaps.length;Et++)$.__webglFramebuffer[Et]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Vt)for(let Et=0,Yt=K.length;Et<Yt;Et++){const Jt=i.get(K[Et]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),l.memory.textures++)}if(D.samples>0&&ue(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Et=0;Et<K.length;Et++){const Yt=K[Et];$.__webglColorRenderbuffer[Et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Et]);const Jt=s.convert(Yt.format,Yt.colorSpace),vt=s.convert(Yt.type),Ft=U(Yt.internalFormat,Jt,vt,Yt.colorSpace,D.isXRRenderTarget===!0),jt=ft(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,Ft,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,$.__webglColorRenderbuffer[Et])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),wt($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),te(n.TEXTURE_CUBE_MAP,E);for(let Et=0;Et<6;Et++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Dt($.__webglFramebuffer[Et][Yt],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt);else Dt($.__webglFramebuffer[Et],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);y(E)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let Et=0,Yt=K.length;Et<Yt;Et++){const Jt=K[Et],vt=i.get(Jt);e.bindTexture(n.TEXTURE_2D,vt.__webglTexture),te(n.TEXTURE_2D,Jt),Dt($.__webglFramebuffer,D,Jt,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,0),y(Jt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let Et=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,ut.__webglTexture),te(Et,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Dt($.__webglFramebuffer[Yt],D,E,n.COLOR_ATTACHMENT0,Et,Yt);else Dt($.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,Et,0);y(E)&&m(Et),e.unbindTexture()}D.depthBuffer&&ae(D)}function pe(D){const E=D.textures;for(let $=0,ut=E.length;$<ut;$++){const K=E[$];if(y(K)){const st=O(D),Vt=i.get(K).__webglTexture;e.bindTexture(st,Vt),m(st),e.unbindTexture()}}}const ee=[],F=[];function mn(D){if(D.samples>0){if(ue(D)===!1){const E=D.textures,$=D.width,ut=D.height;let K=n.COLOR_BUFFER_BIT;const st=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Vt=i.get(D),Et=E.length>1;if(Et)for(let Jt=0;Jt<E.length;Jt++)e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Jt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Jt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Yt=D.texture.mipmaps;Yt&&Yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Jt=0;Jt<E.length;Jt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),Et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Vt.__webglColorRenderbuffer[Jt]);const vt=i.get(E[Jt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,vt,0)}n.blitFramebuffer(0,0,$,ut,0,0,$,ut,K,n.NEAREST),d===!0&&(ee.length=0,F.length=0,ee.push(n.COLOR_ATTACHMENT0+Jt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ee.push(st),F.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Et)for(let Jt=0;Jt<E.length;Jt++){e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Jt,n.RENDERBUFFER,Vt.__webglColorRenderbuffer[Jt]);const vt=i.get(E[Jt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Jt,n.TEXTURE_2D,vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ft(D){return Math.min(r.maxSamples,D.samples)}function ue(D){const E=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ot(D){const E=l.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function Ce(D,E){const $=D.colorSpace,ut=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==ms&&$!==nr&&(Ie.getTransfer($)===Be?(ut!==ei||K!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Ht(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(f.width=D.naturalWidth||D.width,f.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(f.width=D.displayWidth,f.height=D.displayHeight):(f.width=D.width,f.height=D.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=lt,this.setTexture2D=mt,this.setTexture2DArray=ot,this.setTexture3D=at,this.setTextureCube=tt,this.rebindTextures=Gt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ue}function Dx(n,t){function e(i,r=nr){let s;const l=Ie.getTransfer(r);if(i===fi)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.BYTE;if(i===xd)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===Ic)return n.INT;if(i===Pr)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===so)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===wd)return n.RGB;if(i===ei)return n.RGBA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===Md)return n.RED;if(i===Oc)return n.RED_INTEGER;if(i===Sd)return n.RG;if(i===Fc)return n.RG_INTEGER;if(i===kc)return n.RGBA_INTEGER;if(i===ea||i===na||i===ia||i===ra)if(l===Be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Zl||i===Jl||i===Ql)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===ec||i===nc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tc||i===ec)return l===Be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===pc||i===fc||i===mc||i===gc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ic)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===vc||i===_c)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===sa)return l===Be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ed||i===xc||i===bc||i===yc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===sa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
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

}`;class Ux{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Sn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new cr({vertexShader:Lx,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vn(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nx extends Nr{constructor(t,e){super();const i=this;let r=null,s=1,l=null,c="local-floor",d=1,f=null,g=null,v=null,x=null,w=null,M=null;const T=new Ux,y=e.getContextAttributes();let m=null,O=null;const U=[],R=[],W=new he;let z=null;const u=new Ln;u.viewport=new ze;const q=new Ln;q.viewport=new ze;const P=[u,q],A=new Qm;let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let yt=U[pt];return yt===void 0&&(yt=new vl,U[pt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(pt){let yt=U[pt];return yt===void 0&&(yt=new vl,U[pt]=yt),yt.getGripSpace()},this.getHand=function(pt){let yt=U[pt];return yt===void 0&&(yt=new vl,U[pt]=yt),yt.getHandSpace()};function Y(pt){const yt=R.indexOf(pt.inputSource);if(yt===-1)return;const Dt=U[yt];Dt!==void 0&&(Dt.update(pt.inputSource,pt.frame,f||l),Dt.dispatchEvent({type:pt.type,data:pt.inputSource}))}function dt(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",dt),r.removeEventListener("inputsourceschange",mt);for(let pt=0;pt<U.length;pt++){const yt=R[pt];yt!==null&&(R[pt]=null,U[pt].disconnect(yt))}V=null,lt=null,T.reset(),t.setRenderTarget(m),w=null,x=null,v=null,r=null,O=null,de.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(W.width,W.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){s=pt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){c=pt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(pt){f=pt},this.getBaseLayer=function(){return x!==null?x:w},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(pt){if(r=pt,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",dt),r.addEventListener("inputsourceschange",mt),y.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,wt=null,zt=null;y.depth&&(zt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=y.stencil?Zs:Ks,wt=y.stencil?$s:Pr);const ae={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:s};v=new XRWebGLBinding(r,e),x=v.createProjectionLayer(ae),r.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Rr(x.textureWidth,x.textureHeight,{format:ei,type:fi,depthTexture:new Od(x.textureWidth,x.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};w=new XRWebGLLayer(r,e,Dt),r.updateRenderState({baseLayer:w}),t.setPixelRatio(1),t.setSize(w.framebufferWidth,w.framebufferHeight,!1),O=new Rr(w.framebufferWidth,w.framebufferHeight,{format:ei,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await r.requestReferenceSpace(c),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function mt(pt){for(let yt=0;yt<pt.removed.length;yt++){const Dt=pt.removed[yt],wt=R.indexOf(Dt);wt>=0&&(R[wt]=null,U[wt].disconnect(Dt))}for(let yt=0;yt<pt.added.length;yt++){const Dt=pt.added[yt];let wt=R.indexOf(Dt);if(wt===-1){for(let ae=0;ae<U.length;ae++)if(ae>=R.length){R.push(Dt),wt=ae;break}else if(R[ae]===null){R[ae]=Dt,wt=ae;break}if(wt===-1)break}const zt=U[wt];zt&&zt.connect(Dt)}}const ot=new B,at=new B;function tt(pt,yt,Dt){ot.setFromMatrixPosition(yt.matrixWorld),at.setFromMatrixPosition(Dt.matrixWorld);const wt=ot.distanceTo(at),zt=yt.projectionMatrix.elements,ae=Dt.projectionMatrix.elements,Gt=zt[14]/(zt[10]-1),He=zt[14]/(zt[10]+1),pe=(zt[9]+1)/zt[5],ee=(zt[9]-1)/zt[5],F=(zt[8]-1)/zt[0],mn=(ae[8]+1)/ae[0],ft=Gt*F,ue=Gt*mn,Ot=wt/(-F+mn),Ce=Ot*-F;if(yt.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(Ce),pt.translateZ(Ot),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),zt[10]===-1)pt.projectionMatrix.copy(yt.projectionMatrix),pt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const Ht=Gt+Ot,D=He+Ot,E=ft-Ce,$=ue+(wt-Ce),ut=pe*He/D*Ht,K=ee*He/D*Ht;pt.projectionMatrix.makePerspective(E,$,ut,K,Ht,D),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function bt(pt,yt){yt===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(yt.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(r===null)return;let yt=pt.near,Dt=pt.far;T.texture!==null&&(T.depthNear>0&&(yt=T.depthNear),T.depthFar>0&&(Dt=T.depthFar)),A.near=q.near=u.near=yt,A.far=q.far=u.far=Dt,(V!==A.near||lt!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),V=A.near,lt=A.far),u.layers.mask=pt.layers.mask|2,q.layers.mask=pt.layers.mask|4,A.layers.mask=u.layers.mask|q.layers.mask;const wt=pt.parent,zt=A.cameras;bt(A,wt);for(let ae=0;ae<zt.length;ae++)bt(zt[ae],wt);zt.length===2?tt(A,u,q):A.projectionMatrix.copy(u.projectionMatrix),St(pt,A,wt)};function St(pt,yt,Dt){Dt===null?pt.matrix.copy(yt.matrixWorld):(pt.matrix.copy(Dt.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(yt.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(yt.projectionMatrix),pt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=ma*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&w===null))return d},this.setFoveation=function(pt){d=pt,x!==null&&(x.fixedFoveation=pt),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=pt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let Tt=null;function te(pt,yt){if(g=yt.getViewerPose(f||l),M=yt,g!==null){const Dt=g.views;w!==null&&(t.setRenderTargetFramebuffer(O,w.framebuffer),t.setRenderTarget(O));let wt=!1;Dt.length!==A.cameras.length&&(A.cameras.length=0,wt=!0);for(let Gt=0;Gt<Dt.length;Gt++){const He=Dt[Gt];let pe=null;if(w!==null)pe=w.getViewport(He);else{const F=v.getViewSubImage(x,He);pe=F.viewport,Gt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let ee=P[Gt];ee===void 0&&(ee=new Ln,ee.layers.enable(Gt),ee.viewport=new ze,P[Gt]=ee),ee.matrix.fromArray(He.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(He.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(pe.x,pe.y,pe.width,pe.height),Gt===0&&(A.matrix.copy(ee.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),wt===!0&&A.cameras.push(ee)}const zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){const Gt=v.getDepthInformation(Dt[0]);Gt&&Gt.isValid&&Gt.texture&&T.init(t,Gt,r.renderState)}}for(let Dt=0;Dt<U.length;Dt++){const wt=R[Dt],zt=U[Dt];wt!==null&&zt!==void 0&&zt.update(wt,yt,f||l)}Tt&&Tt(pt,yt),yt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:yt}),M=null}const de=new Bd;de.setAnimationLoop(te),this.setAnimationLoop=function(pt){Tt=pt},this.dispose=function(){}}}const br=new Yn,Ox=new qe;function Fx(n,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function i(y,m){m.color.getRGB(y.fogColor.value,Ld(n)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function r(y,m,O,U,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(y,m):m.isMeshToonMaterial?(s(y,m),v(y,m)):m.isMeshPhongMaterial?(s(y,m),g(y,m)):m.isMeshStandardMaterial?(s(y,m),x(y,m),m.isMeshPhysicalMaterial&&w(y,m,R)):m.isMeshMatcapMaterial?(s(y,m),M(y,m)):m.isMeshDepthMaterial?s(y,m):m.isMeshDistanceMaterial?(s(y,m),T(y,m)):m.isMeshNormalMaterial?s(y,m):m.isLineBasicMaterial?(l(y,m),m.isLineDashedMaterial&&c(y,m)):m.isPointsMaterial?d(y,m,O,U):m.isSpriteMaterial?f(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Un&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Un&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const O=t.get(m),U=O.envMap,R=O.envMapRotation;U&&(y.envMap.value=U,br.copy(R),br.x*=-1,br.y*=-1,br.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),y.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(br)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function l(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function c(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function d(y,m,O,U){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*O,y.scale.value=U*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function g(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function v(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function x(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function w(y,m,O){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,m){m.matcap&&(y.matcap.value=m.matcap)}function T(y,m){const O=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kx(n,t,e,i){let r={},s={},l=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(O,U){const R=U.program;i.uniformBlockBinding(O,R)}function f(O,U){let R=r[O.id];R===void 0&&(M(O),R=g(O),r[O.id]=R,O.addEventListener("dispose",y));const W=U.program;i.updateUBOMapping(O,W);const z=t.render.frame;s[O.id]!==z&&(x(O),s[O.id]=z)}function g(O){const U=v();O.__bindingPointIndex=U;const R=n.createBuffer(),W=O.__size,z=O.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,W,z),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,U,R),R}function v(){for(let O=0;O<c;O++)if(l.indexOf(O)===-1)return l.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const U=r[O.id],R=O.uniforms,W=O.__cache;n.bindBuffer(n.UNIFORM_BUFFER,U);for(let z=0,u=R.length;z<u;z++){const q=Array.isArray(R[z])?R[z]:[R[z]];for(let P=0,A=q.length;P<A;P++){const V=q[P];if(w(V,z,P,W)===!0){const lt=V.__offset,Y=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let mt=0;mt<Y.length;mt++){const ot=Y[mt],at=T(ot);typeof ot=="number"||typeof ot=="boolean"?(V.__data[0]=ot,n.bufferSubData(n.UNIFORM_BUFFER,lt+dt,V.__data)):ot.isMatrix3?(V.__data[0]=ot.elements[0],V.__data[1]=ot.elements[1],V.__data[2]=ot.elements[2],V.__data[3]=0,V.__data[4]=ot.elements[3],V.__data[5]=ot.elements[4],V.__data[6]=ot.elements[5],V.__data[7]=0,V.__data[8]=ot.elements[6],V.__data[9]=ot.elements[7],V.__data[10]=ot.elements[8],V.__data[11]=0):(ot.toArray(V.__data,dt),dt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,lt,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function w(O,U,R,W){const z=O.value,u=U+"_"+R;if(W[u]===void 0)return typeof z=="number"||typeof z=="boolean"?W[u]=z:W[u]=z.clone(),!0;{const q=W[u];if(typeof z=="number"||typeof z=="boolean"){if(q!==z)return W[u]=z,!0}else if(q.equals(z)===!1)return q.copy(z),!0}return!1}function M(O){const U=O.uniforms;let R=0;const W=16;for(let u=0,q=U.length;u<q;u++){const P=Array.isArray(U[u])?U[u]:[U[u]];for(let A=0,V=P.length;A<V;A++){const lt=P[A],Y=Array.isArray(lt.value)?lt.value:[lt.value];for(let dt=0,mt=Y.length;dt<mt;dt++){const ot=Y[dt],at=T(ot),tt=R%W,bt=tt%at.boundary,St=tt+bt;R+=bt,St!==0&&W-St<at.storage&&(R+=W-St),lt.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=R,R+=at.storage}}}const z=R%W;return z>0&&(R+=W-z),O.__size=R,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const R=l.indexOf(U.__bindingPointIndex);l.splice(R,1),n.deleteBuffer(r[U.id]),delete r[U.id],delete s[U.id]}function m(){for(const O in r)n.deleteBuffer(r[O]);l=[],r={},s={}}return{bind:d,update:f,dispose:m}}class Bx{constructor(t={}){const{canvas:e=um(),context:i=null,depth:r=!0,stencil:s=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=l;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,m=null;const O=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let W=!1;this._outputColorSpace=Xn;let z=0,u=0,q=null,P=-1,A=null;const V=new ze,lt=new ze;let Y=null;const dt=new se(0);let mt=0,ot=e.width,at=e.height,tt=1,bt=null,St=null;const Tt=new ze(0,0,ot,at),te=new ze(0,0,ot,at);let de=!1;const pt=new Hc;let yt=!1,Dt=!1;const wt=new qe,zt=new qe,ae=new B,Gt=new ze,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function ee(){return q===null?tt:1}let F=i;function mn(C,j){return e.getContext(C,j)}try{const C={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),F===null){const j="webgl2";if(F=mn(j,C),F===null)throw mn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ft,ue,Ot,Ce,Ht,D,E,$,ut,K,st,Vt,Et,Yt,Jt,vt,Ft,jt,Zt,Nt,Se,le,Fe,G;function Rt(){ft=new $_(F),ft.init(),le=new Dx(F,ft),ue=new H_(F,ft,t,le),Ot=new Px(F,ft),ue.reverseDepthBuffer&&x&&Ot.buffers.depth.setReversed(!0),Ce=new J_(F),Ht=new gx,D=new Rx(F,ft,Ot,Ht,ue,le,Ce),E=new W_(R),$=new Y_(R),ut=new rg(F),Fe=new V_(F,ut),K=new K_(F,ut,Ce,Fe),st=new t0(F,K,ut,Ce),Zt=new Q_(F,ue,D),vt=new G_(Ht),Vt=new mx(R,E,$,ft,ue,Fe,vt),Et=new Fx(R,Ht),Yt=new _x,Jt=new Sx(ft),jt=new B_(R,E,$,Ot,st,w,d),Ft=new Cx(R,st,ue),G=new kx(F,Ce,ue,Ot),Nt=new z_(F,ft,Ce),Se=new Z_(F,ft,Ce),Ce.programs=Vt.programs,R.capabilities=ue,R.extensions=ft,R.properties=Ht,R.renderLists=Yt,R.shadowMap=Ft,R.state=Ot,R.info=Ce}Rt();const rt=new Nx(R,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(C){C!==void 0&&(tt=C,this.setSize(ot,at,!1))},this.getSize=function(C){return C.set(ot,at)},this.setSize=function(C,j,Q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=C,at=j,e.width=Math.floor(C*tt),e.height=Math.floor(j*tt),Q===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(ot*tt,at*tt).floor()},this.setDrawingBufferSize=function(C,j,Q){ot=C,at=j,tt=Q,e.width=Math.floor(C*Q),e.height=Math.floor(j*Q),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(Tt)},this.setViewport=function(C,j,Q,et){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,j,Q,et),Ot.viewport(V.copy(Tt).multiplyScalar(tt).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,j,Q,et){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,j,Q,et),Ot.scissor(lt.copy(te).multiplyScalar(tt).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(C){Ot.setScissorTest(de=C)},this.setOpaqueSort=function(C){bt=C},this.setTransparentSort=function(C){St=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,Q=!0){let et=0;if(C){let X=!1;if(q!==null){const xt=q.texture.format;X=xt===kc||xt===Fc||xt===Oc}if(X){const xt=q.texture.type,Ct=xt===fi||xt===Pr||xt===Ys||xt===$s||xt===Uc||xt===Nc,kt=jt.getClearColor(),Bt=jt.getClearAlpha(),re=kt.r,ne=kt.g,qt=kt.b;Ct?(M[0]=re,M[1]=ne,M[2]=qt,M[3]=Bt,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=re,T[1]=ne,T[2]=qt,T[3]=Bt,F.clearBufferiv(F.COLOR,0,T))}else et|=F.COLOR_BUFFER_BIT}j&&(et|=F.DEPTH_BUFFER_BIT),Q&&(et|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),jt.dispose(),Yt.dispose(),Jt.dispose(),Ht.dispose(),E.dispose(),$.dispose(),st.dispose(),Fe.dispose(),G.dispose(),Vt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",_i),rt.removeEventListener("sessionend",xi),$n.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const C=Ce.autoReset,j=Ft.enabled,Q=Ft.autoUpdate,et=Ft.needsUpdate,X=Ft.type;Rt(),Ce.autoReset=C,Ft.enabled=j,Ft.autoUpdate=Q,Ft.needsUpdate=et,Ft.type=X}function Pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $t(C){const j=C.target;j.removeEventListener("dispose",$t),xe(j)}function xe(C){tn(C),Ht.remove(C)}function tn(C){const j=Ht.get(C).programs;j!==void 0&&(j.forEach(function(Q){Vt.releaseProgram(Q)}),C.isShaderMaterial&&Vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,Q,et,X,xt){j===null&&(j=He);const Ct=X.isMesh&&X.matrixWorld.determinant()<0,kt=Na(C,j,Q,et,X);Ot.setMaterial(et,Ct);let Bt=Q.index,re=1;if(et.wireframe===!0){if(Bt=K.getWireframeAttribute(Q),Bt===void 0)return;re=2}const ne=Q.drawRange,qt=Q.attributes.position;let Ee=ne.start*re,Ae=(ne.start+ne.count)*re;xt!==null&&(Ee=Math.max(Ee,xt.start*re),Ae=Math.min(Ae,(xt.start+xt.count)*re)),Bt!==null?(Ee=Math.max(Ee,0),Ae=Math.min(Ae,Bt.count)):qt!=null&&(Ee=Math.max(Ee,0),Ae=Math.min(Ae,qt.count));const Ke=Ae-Ee;if(Ke<0||Ke===1/0)return;Fe.setup(X,et,kt,Q,Bt);let be,ve=Nt;if(Bt!==null&&(be=ut.get(Bt),ve=Se,ve.setIndex(be)),X.isMesh)et.wireframe===!0?(Ot.setLineWidth(et.wireframeLinewidth*ee()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(X.isLine){let Xt=et.linewidth;Xt===void 0&&(Xt=1),Ot.setLineWidth(Xt*ee()),X.isLineSegments?ve.setMode(F.LINES):X.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else X.isPoints?ve.setMode(F.POINTS):X.isSprite&&ve.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)aa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))ve.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xt=X._multiDrawStarts,sn=X._multiDrawCounts,Le=X._multiDrawCount,yn=Bt?ut.get(Bt).bytesPerElement:1,bi=Ht.get(et).currentProgram.getUniforms();for(let hn=0;hn<Le;hn++)bi.setValue(F,"_gl_DrawID",hn),ve.render(Xt[hn]/yn,sn[hn])}else if(X.isInstancedMesh)ve.renderInstances(Ee,Ke,X.count);else if(Q.isInstancedBufferGeometry){const Xt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,sn=Math.min(Q.instanceCount,Xt);ve.renderInstances(Ee,Ke,sn)}else ve.render(Ee,Ke)};function Ne(C,j,Q){C.transparent===!0&&C.side===Xe&&C.forceSinglePass===!1?(C.side=Un,C.needsUpdate=!0,Br(C,j,Q),C.side=ar,C.needsUpdate=!0,Br(C,j,Q),C.side=Xe):Br(C,j,Q)}this.compile=function(C,j,Q=null){Q===null&&(Q=C),m=Jt.get(Q),m.init(j),U.push(m),Q.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),C!==Q&&C.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const et=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){const kt=xt[Ct];Ne(kt,Q,X),et.add(kt)}else Ne(xt,Q,X),et.add(xt)}),m=U.pop(),et},this.compileAsync=function(C,j,Q=null){const et=this.compile(C,j,Q);return new Promise(X=>{function xt(){if(et.forEach(function(Ct){Ht.get(Ct).currentProgram.isReady()&&et.delete(Ct)}),et.size===0){X(C);return}setTimeout(xt,10)}ft.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Cn=null;function zn(C){Cn&&Cn(C)}function _i(){$n.stop()}function xi(){$n.start()}const $n=new Bd;$n.setAnimationLoop(zn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(C){Cn=C,rt.setAnimationLoop(C),C===null?$n.stop():$n.start()},rt.addEventListener("sessionstart",_i),rt.addEventListener("sessionend",xi),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(j),j=rt.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,q),m=Jt.get(C,U.length),m.init(j),U.push(m),zt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),pt.setFromProjectionMatrix(zt),Dt=this.localClippingEnabled,yt=vt.init(this.clippingPlanes,Dt),y=Yt.get(C,O.length),y.init(),O.push(y),rt.enabled===!0&&rt.isPresenting===!0){const xt=R.xr.getDepthSensingMesh();xt!==null&&Vi(xt,j,-1/0,R.sortObjects)}Vi(C,j,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(bt,St),pe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,pe&&jt.addToRenderList(y,C),this.info.render.frame++,yt===!0&&vt.beginShadows();const Q=m.state.shadowsArray;Ft.render(Q,C,j),yt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=y.opaque,X=y.transmissive;if(m.setupLights(),j.isArrayCamera){const xt=j.cameras;if(X.length>0)for(let Ct=0,kt=xt.length;Ct<kt;Ct++){const Bt=xt[Ct];bo(et,X,C,Bt)}pe&&jt.render(C);for(let Ct=0,kt=xt.length;Ct<kt;Ct++){const Bt=xt[Ct];xo(y,C,Bt,Bt.viewport)}}else X.length>0&&bo(et,X,C,j),pe&&jt.render(C),xo(y,C,j);q!==null&&u===0&&(D.updateMultisampleRenderTarget(q),D.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(R,C,j),Fe.resetDefaultState(),P=-1,A=null,U.pop(),U.length>0?(m=U[U.length-1],yt===!0&&vt.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Vi(C,j,Q,et){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||pt.intersectsSprite(C)){et&&Gt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(zt);const Ct=st.update(C),kt=C.material;kt.visible&&y.push(C,Ct,kt,Q,Gt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||pt.intersectsObject(C))){const Ct=st.update(C),kt=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Gt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Gt.copy(Ct.boundingSphere.center)),Gt.applyMatrix4(C.matrixWorld).applyMatrix4(zt)),Array.isArray(kt)){const Bt=Ct.groups;for(let re=0,ne=Bt.length;re<ne;re++){const qt=Bt[re],Ee=kt[qt.materialIndex];Ee&&Ee.visible&&y.push(C,Ct,Ee,Q,Gt.z,qt)}}else kt.visible&&y.push(C,Ct,kt,Q,Gt.z,null)}}const xt=C.children;for(let Ct=0,kt=xt.length;Ct<kt;Ct++)Vi(xt[Ct],j,Q,et)}function xo(C,j,Q,et){const X=C.opaque,xt=C.transmissive,Ct=C.transparent;m.setupLightsView(Q),yt===!0&&vt.setGlobalState(R.clippingPlanes,Q),et&&Ot.viewport(V.copy(et)),X.length>0&&kr(X,j,Q),xt.length>0&&kr(xt,j,Q),Ct.length>0&&kr(Ct,j,Q),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function bo(C,j,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[et.id]===void 0&&(m.state.transmissionRenderTarget[et.id]=new Rr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?so:fi,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const xt=m.state.transmissionRenderTarget[et.id],Ct=et.viewport||V;xt.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);const kt=R.getRenderTarget();R.setRenderTarget(xt),R.getClearColor(dt),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),pe&&jt.render(Q);const Bt=R.toneMapping;R.toneMapping=sr;const re=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),m.setupLightsView(et),yt===!0&&vt.setGlobalState(R.clippingPlanes,et),kr(C,Q,et),D.updateMultisampleRenderTarget(xt),D.updateRenderTargetMipmap(xt),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let qt=0,Ee=j.length;qt<Ee;qt++){const Ae=j[qt],Ke=Ae.object,be=Ae.geometry,ve=Ae.material,Xt=Ae.group;if(ve.side===Xe&&Ke.layers.test(et.layers)){const sn=ve.side;ve.side=Un,ve.needsUpdate=!0,Ss(Ke,Q,et,be,ve,Xt),ve.side=sn,ve.needsUpdate=!0,ne=!0}}ne===!0&&(D.updateMultisampleRenderTarget(xt),D.updateRenderTargetMipmap(xt))}R.setRenderTarget(kt),R.setClearColor(dt,mt),re!==void 0&&(et.viewport=re),R.toneMapping=Bt}function kr(C,j,Q){const et=j.isScene===!0?j.overrideMaterial:null;for(let X=0,xt=C.length;X<xt;X++){const Ct=C[X],kt=Ct.object,Bt=Ct.geometry,re=Ct.group;let ne=Ct.material;ne.allowOverride===!0&&et!==null&&(ne=et),kt.layers.test(Q.layers)&&Ss(kt,j,Q,Bt,ne,re)}}function Ss(C,j,Q,et,X,xt){C.onBeforeRender(R,j,Q,et,X,xt),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(R,j,Q,et,C,xt),X.transparent===!0&&X.side===Xe&&X.forceSinglePass===!1?(X.side=Un,X.needsUpdate=!0,R.renderBufferDirect(Q,j,et,X,C,xt),X.side=ar,X.needsUpdate=!0,R.renderBufferDirect(Q,j,et,X,C,xt),X.side=Xe):R.renderBufferDirect(Q,j,et,X,C,xt),C.onAfterRender(R,j,Q,et,X,xt)}function Br(C,j,Q){j.isScene!==!0&&(j=He);const et=Ht.get(C),X=m.state.lights,xt=m.state.shadowsArray,Ct=X.state.version,kt=Vt.getParameters(C,X.state,xt,j,Q),Bt=Vt.getProgramCacheKey(kt);let re=et.programs;et.environment=C.isMeshStandardMaterial?j.environment:null,et.fog=j.fog,et.envMap=(C.isMeshStandardMaterial?$:E).get(C.envMap||et.environment),et.envMapRotation=et.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,re===void 0&&(C.addEventListener("dispose",$t),re=new Map,et.programs=re);let ne=re.get(Bt);if(ne!==void 0){if(et.currentProgram===ne&&et.lightsStateVersion===Ct)return Es(C,kt),ne}else kt.uniforms=Vt.getUniforms(C),C.onBeforeCompile(kt,R),ne=Vt.acquireProgram(kt,Bt),re.set(Bt,ne),et.uniforms=kt.uniforms;const qt=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=vt.uniform),Es(C,kt),et.needsLights=wo(C),et.lightsStateVersion=Ct,et.needsLights&&(qt.ambientLightColor.value=X.state.ambient,qt.lightProbe.value=X.state.probe,qt.directionalLights.value=X.state.directional,qt.directionalLightShadows.value=X.state.directionalShadow,qt.spotLights.value=X.state.spot,qt.spotLightShadows.value=X.state.spotShadow,qt.rectAreaLights.value=X.state.rectArea,qt.ltc_1.value=X.state.rectAreaLTC1,qt.ltc_2.value=X.state.rectAreaLTC2,qt.pointLights.value=X.state.point,qt.pointLightShadows.value=X.state.pointShadow,qt.hemisphereLights.value=X.state.hemi,qt.directionalShadowMap.value=X.state.directionalShadowMap,qt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qt.spotShadowMap.value=X.state.spotShadowMap,qt.spotLightMatrix.value=X.state.spotLightMatrix,qt.spotLightMap.value=X.state.spotLightMap,qt.pointShadowMap.value=X.state.pointShadowMap,qt.pointShadowMatrix.value=X.state.pointShadowMatrix),et.currentProgram=ne,et.uniformsList=null,ne}function yo(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=la.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Es(C,j){const Q=Ht.get(C);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function Na(C,j,Q,et,X){j.isScene!==!0&&(j=He),D.resetTextureUnits();const xt=j.fog,Ct=et.isMeshStandardMaterial?j.environment:null,kt=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ms,Bt=(et.isMeshStandardMaterial?$:E).get(et.envMap||Ct),re=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ne=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),qt=!!Q.morphAttributes.position,Ee=!!Q.morphAttributes.normal,Ae=!!Q.morphAttributes.color;let Ke=sr;et.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ke=R.toneMapping);const be=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ve=be!==void 0?be.length:0,Xt=Ht.get(et),sn=m.state.lights;if(yt===!0&&(Dt===!0||C!==A)){const dn=C===A&&et.id===P;vt.setState(et,C,dn)}let Le=!1;et.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==sn.state.version||Xt.outputColorSpace!==kt||X.isBatchedMesh&&Xt.batching===!1||!X.isBatchedMesh&&Xt.batching===!0||X.isBatchedMesh&&Xt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xt.instancing===!1||!X.isInstancedMesh&&Xt.instancing===!0||X.isSkinnedMesh&&Xt.skinning===!1||!X.isSkinnedMesh&&Xt.skinning===!0||X.isInstancedMesh&&Xt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xt.instancingMorph===!1&&X.morphTexture!==null||Xt.envMap!==Bt||et.fog===!0&&Xt.fog!==xt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==vt.numPlanes||Xt.numIntersection!==vt.numIntersection)||Xt.vertexAlphas!==re||Xt.vertexTangents!==ne||Xt.morphTargets!==qt||Xt.morphNormals!==Ee||Xt.morphColors!==Ae||Xt.toneMapping!==Ke||Xt.morphTargetsCount!==ve)&&(Le=!0):(Le=!0,Xt.__version=et.version);let yn=Xt.currentProgram;Le===!0&&(yn=Br(et,j,X));let bi=!1,hn=!1,Hi=!1;const Ge=yn.getUniforms(),An=Xt.uniforms;if(Ot.useProgram(yn.program)&&(bi=!0,hn=!0,Hi=!0),et.id!==P&&(P=et.id,hn=!0),bi||A!==C){Ot.buffers.depth.getReversed()?(wt.copy(C.projectionMatrix),dm(wt),pm(wt),Ge.setValue(F,"projectionMatrix",wt)):Ge.setValue(F,"projectionMatrix",C.projectionMatrix),Ge.setValue(F,"viewMatrix",C.matrixWorldInverse);const en=Ge.map.cameraPosition;en!==void 0&&en.setValue(F,ae.setFromMatrixPosition(C.matrixWorld)),ue.logarithmicDepthBuffer&&Ge.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ge.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,hn=!0,Hi=!0)}if(X.isSkinnedMesh){Ge.setOptional(F,X,"bindMatrix"),Ge.setOptional(F,X,"bindMatrixInverse");const dn=X.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ge.setValue(F,"boneTexture",dn.boneTexture,D))}X.isBatchedMesh&&(Ge.setOptional(F,X,"batchingTexture"),Ge.setValue(F,"batchingTexture",X._matricesTexture,D),Ge.setOptional(F,X,"batchingIdTexture"),Ge.setValue(F,"batchingIdTexture",X._indirectTexture,D),Ge.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Ge.setValue(F,"batchingColorTexture",X._colorsTexture,D));const Ye=Q.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&Zt.update(X,Q,yn),(hn||Xt.receiveShadow!==X.receiveShadow)&&(Xt.receiveShadow=X.receiveShadow,Ge.setValue(F,"receiveShadow",X.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(An.envMap.value=Bt,An.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&j.environment!==null&&(An.envMapIntensity.value=j.environmentIntensity),hn&&(Ge.setValue(F,"toneMappingExposure",R.toneMappingExposure),Xt.needsLights&&zi(An,Hi),xt&&et.fog===!0&&Et.refreshFogUniforms(An,xt),Et.refreshMaterialUniforms(An,et,tt,at,m.state.transmissionRenderTarget[C.id]),la.upload(F,yo(Xt),An,D)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(la.upload(F,yo(Xt),An,D),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ge.setValue(F,"center",X.center),Ge.setValue(F,"modelViewMatrix",X.modelViewMatrix),Ge.setValue(F,"normalMatrix",X.normalMatrix),Ge.setValue(F,"modelMatrix",X.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const dn=et.uniformsGroups;for(let en=0,As=dn.length;en<As;en++){const yi=dn[en];G.update(yi,yn),G.bind(yi,yn)}}return yn}function zi(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function wo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,j,Q){const et=Ht.get(C);et.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),Ht.get(C.texture).__webglTexture=j,Ht.get(C.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:Q,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const Q=Ht.get(C);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0};const Ts=F.createFramebuffer();this.setRenderTarget=function(C,j=0,Q=0){q=C,z=j,u=Q;let et=!0,X=null,xt=!1,Ct=!1;if(C){const Bt=Ht.get(C);if(Bt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(F.FRAMEBUFFER,null),et=!1;else if(Bt.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Bt.__hasExternalTextures)D.rebindTextures(C,Ht.get(C.texture).__webglTexture,Ht.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qt=C.depthTexture;if(Bt.__boundDepthTexture!==qt){if(qt!==null&&Ht.has(qt)&&(C.width!==qt.image.width||C.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const re=C.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ct=!0);const ne=Ht.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[j])?X=ne[j][Q]:X=ne[j],xt=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?X=Ht.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?X=ne[Q]:X=ne,V.copy(C.viewport),lt.copy(C.scissor),Y=C.scissorTest}else V.copy(Tt).multiplyScalar(tt).floor(),lt.copy(te).multiplyScalar(tt).floor(),Y=de;if(Q!==0&&(X=Ts),Ot.bindFramebuffer(F.FRAMEBUFFER,X)&&et&&Ot.drawBuffers(C,X),Ot.viewport(V),Ot.scissor(lt),Ot.setScissorTest(Y),xt){const Bt=Ht.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,Q)}else if(Ct){const Bt=Ht.get(C.texture),re=j;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,Q,re)}else if(C!==null&&Q!==0){const Bt=Ht.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,Q)}P=-1},this.readRenderTargetPixels=function(C,j,Q,et,X,xt,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(kt=kt[Ct]),kt){Ot.bindFramebuffer(F.FRAMEBUFFER,kt);try{const Bt=C.texture,re=Bt.format,ne=Bt.type;if(!ue.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-et&&Q>=0&&Q<=C.height-X&&F.readPixels(j,Q,et,X,le.convert(re),le.convert(ne),xt)}finally{const Bt=q!==null?Ht.get(q).__webglFramebuffer:null;Ot.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(C,j,Q,et,X,xt,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(kt=kt[Ct]),kt)if(j>=0&&j<=C.width-et&&Q>=0&&Q<=C.height-X){Ot.bindFramebuffer(F.FRAMEBUFFER,kt);const Bt=C.texture,re=Bt.format,ne=Bt.type;if(!ue.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.bufferData(F.PIXEL_PACK_BUFFER,xt.byteLength,F.STREAM_READ),F.readPixels(j,Q,et,X,le.convert(re),le.convert(ne),0);const Ee=q!==null?Ht.get(q).__webglFramebuffer:null;Ot.bindFramebuffer(F.FRAMEBUFFER,Ee);const Ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hm(F,Ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xt),F.deleteBuffer(qt),F.deleteSync(Ae),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,Q=0){const et=Math.pow(2,-Q),X=Math.floor(C.image.width*et),xt=Math.floor(C.image.height*et),Ct=j!==null?j.x:0,kt=j!==null?j.y:0;D.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Ct,kt,X,xt),Ot.unbindTexture()};const Cs=F.createFramebuffer(),Vr=F.createFramebuffer();this.copyTextureToTexture=function(C,j,Q=null,et=null,X=0,xt=null){xt===null&&(X!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=X,X=0):xt=0);let Ct,kt,Bt,re,ne,qt,Ee,Ae,Ke;const be=C.isCompressedTexture?C.mipmaps[xt]:C.image;if(Q!==null)Ct=Q.max.x-Q.min.x,kt=Q.max.y-Q.min.y,Bt=Q.isBox3?Q.max.z-Q.min.z:1,re=Q.min.x,ne=Q.min.y,qt=Q.isBox3?Q.min.z:0;else{const Ye=Math.pow(2,-X);Ct=Math.floor(be.width*Ye),kt=Math.floor(be.height*Ye),C.isDataArrayTexture?Bt=be.depth:C.isData3DTexture?Bt=Math.floor(be.depth*Ye):Bt=1,re=0,ne=0,qt=0}et!==null?(Ee=et.x,Ae=et.y,Ke=et.z):(Ee=0,Ae=0,Ke=0);const ve=le.convert(j.format),Xt=le.convert(j.type);let sn;j.isData3DTexture?(D.setTexture3D(j,0),sn=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),sn=F.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),sn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const Le=F.getParameter(F.UNPACK_ROW_LENGTH),yn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bi=F.getParameter(F.UNPACK_SKIP_PIXELS),hn=F.getParameter(F.UNPACK_SKIP_ROWS),Hi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,re),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const Ge=C.isDataArrayTexture||C.isData3DTexture,An=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Ye=Ht.get(C),dn=Ht.get(j),en=Ht.get(Ye.__renderTarget),As=Ht.get(dn.__renderTarget);Ot.bindFramebuffer(F.READ_FRAMEBUFFER,en.__webglFramebuffer),Ot.bindFramebuffer(F.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let yi=0;yi<Bt;yi++)Ge&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(C).__webglTexture,X,qt+yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(j).__webglTexture,xt,Ke+yi)),F.blitFramebuffer(re,ne,Ct,kt,Ee,Ae,Ct,kt,F.DEPTH_BUFFER_BIT,F.NEAREST);Ot.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||Ht.has(C)){const Ye=Ht.get(C),dn=Ht.get(j);Ot.bindFramebuffer(F.READ_FRAMEBUFFER,Cs),Ot.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vr);for(let en=0;en<Bt;en++)Ge?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,X,qt+en):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,X),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,xt,Ke+en):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,xt),X!==0?F.blitFramebuffer(re,ne,Ct,kt,Ee,Ae,Ct,kt,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(sn,xt,Ee,Ae,Ke+en,re,ne,Ct,kt):F.copyTexSubImage2D(sn,xt,Ee,Ae,re,ne,Ct,kt);Ot.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(sn,xt,Ee,Ae,Ke,Ct,kt,Bt,ve,Xt,be.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(sn,xt,Ee,Ae,Ke,Ct,kt,Bt,ve,be.data):F.texSubImage3D(sn,xt,Ee,Ae,Ke,Ct,kt,Bt,ve,Xt,be):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xt,Ee,Ae,Ct,kt,ve,Xt,be.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xt,Ee,Ae,be.width,be.height,ve,be.data):F.texSubImage2D(F.TEXTURE_2D,xt,Ee,Ae,Ct,kt,ve,Xt,be);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bi),F.pixelStorei(F.UNPACK_SKIP_ROWS,hn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Hi),xt===0&&j.generateMipmaps&&F.generateMipmap(sn),Ot.unbindTexture()},this.copyTextureToTexture3D=function(C,j,Q=null,et=null,X=0){return aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,Q,et,X)},this.initRenderTarget=function(C){Ht.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),Ot.unbindTexture()},this.resetState=function(){z=0,u=0,q=null,Ot.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}}const Vh={type:"change"},Xc={type:"start"},Wd={type:"end"},Jo=new Aa,zh=new er,Vx=Math.cos(70*cm.DEG2RAD),an=new B,Dn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pl=1e-6;class zx extends ng{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new lr,this._lastTargetPosition=new B,this._quat=new lr().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ph,this._sphericalDelta=new ph,this._scale=1,this._panOffset=new B,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new B,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gx.bind(this),this._onPointerDown=Hx.bind(this),this._onPointerUp=Wx.bind(this),this._onContextMenu=Zx.bind(this),this._onMouseWheel=qx.bind(this),this._onKeyDown=Yx.bind(this),this._onTouchStart=$x.bind(this),this._onTouchMove=Kx.bind(this),this._onMouseDown=jx.bind(this),this._onMouseMove=Xx.bind(this),this._interceptControlDown=Jx.bind(this),this._interceptControlUp=Qx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vh),this.update(),this.state=Ve.NONE}update(t=null){const e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),r<-Math.PI?r+=Dn:r>Math.PI&&(r-=Dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=l!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=an.length();l=this._clampDistance(c*this._scale);const d=c-l;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),s=!!d}else if(this.object.isOrthographicCamera){const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=d!==this.object.zoom;const f=new B(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),l=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Jo.origin.copy(this.object.position),Jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jo.direction))<Vx?this.object.lookAt(this.target):(zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jo.intersectPlane(zh,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Pl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pl||this._lastTargetPosition.distanceToSquared(this.target)>Pl?(this.dispatchEvent(Vh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;an.copy(r).sub(this.target);let s=an.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,l=i.width,c=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new he,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Gx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Wx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wd),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function jx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ve.DOLLY;break;case as.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}break;case as.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Xc)}function Xx(n){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function qx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(n.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Wd))}function Yx(n){this.enabled!==!1&&this._handleKeyDown(n)}function $x(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ve.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ve.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Xc)}function Kx(n){switch(this._trackPointer(n),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ve.NONE}}function Zx(n){this.enabled!==!1&&n.preventDefault()}function Jx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class jd extends Ln{constructor(e,i,r,s,l){super(e,i,r,s);Kt(this,"controls");this.controls=new zx(this,l)}update(){this.controls.update()}}class tb extends jd{constructor(e,i,r,s,l){super(e,i,r,s,l);Kt(this,"target");Kt(this,"offset",new B(0,2,5));Kt(this,"rotationAngle",0);Kt(this,"targetPosition",new B);Kt(this,"currentTargetPosition",new B);Kt(this,"targetOffset",new B);Kt(this,"currentOffset",new B(0,2,5));Kt(this,"transitionSpeed",2);Kt(this,"clock");this.clock=new Wc,this.targetPosition.copy(this.position),this.currentTargetPosition.copy(this.position)}setTarget(e){this.target=e,e&&this.targetPosition.copy(e.position),this.calculateTargetOffset()}rotateHorizontal(e){this.rotationAngle+=e,this.calculateTargetOffset()}calculateTargetOffset(){this.targetOffset.set(Math.sin(this.rotationAngle)*this.offset.z,this.offset.y,Math.cos(this.rotationAngle)*this.offset.z)}updatePosition(){if(!this.target)return;const e=this.clock.getDelta();this.targetPosition.copy(this.target.position);const i=Math.min(1,this.transitionSpeed*e);this.currentOffset.lerp(this.targetOffset,i),this.currentTargetPosition.lerp(this.targetPosition,i),this.position.copy(this.currentTargetPosition).add(this.currentOffset),this.lookAt(this.currentTargetPosition)}update(){this.target&&this.updatePosition()}setTransitionSpeed(e){this.transitionSpeed=Math.max(.1,e)}}class Xd{constructor(){Kt(this,"children",[])}add(t){this.children.push(t)}update(t){for(const e of this.children)e.update(t)}}class _a extends Xd{constructor(e){super();Kt(this,"triggers",[]);Kt(this,"mesh");this.mesh=e}addDependency(e,i){this.triggers.push([e,i])}update(e){super.update(e);for(const[i,r]of this.triggers)i()&&r()}}function eb(n,t){n.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1);const e=new Dr().setFromObject(n),i=new Dr().setFromObject(t);return e.intersectsBox(i)}const Er=new B(0,1,0),Hh=.8,zs=2,nb=.3,ib=.75,Qo=new tg;class Sc extends _a{constructor(e,i,r){const s=new _s(Hh,zs,nb);s.translate(0,zs/2,-.3/2);super(new vn(s,i));Kt(this,"toppling",!1);Kt(this,"fallen",!1);Kt(this,"standingMat");Kt(this,"fallenMat");Kt(this,"fwdAxis");Kt(this,"toppleAxis");Kt(this,"collideNodes",[]);this.mesh.userData.domino=this,this.mesh.castShadow=!0,this.mesh.translateOnAxis(Er,-2/2),this.standingMat=i,this.fallenMat=r,this.fwdAxis=e.clone().normalize();const l=new B(0,0,1),c=new lr().setFromUnitVectors(l,this.fwdAxis);this.mesh.quaternion.premultiply(c),this.toppleAxis=new B().crossVectors(Er,this.fwdAxis).normalize()}setPosition(e,i,r){this.mesh.position.set(e,i,r),this.mesh.translateOnAxis(Er,-2/2)}updateAxes(e){this.fwdAxis=e.clone().normalize(),this.mesh.rotateY(new B(0,0,1).angleTo(e)),this.toppleAxis=new B().crossVectors(Er,this.fwdAxis).normalize()}addCollidable(e){this.collideNodes.push(e)}rayOrigin(e){const i=this.mesh.position.clone(),r=this.toppleAxis.clone().normalize().multiplyScalar(Hh/2);return e===0?i.add(r):i.sub(r)}get rayDirection(){return new B(0,zs,0).applyQuaternion(this.mesh.quaternion).normalize()}topple(){this.toppling=!0;let e=0;const i=new B().crossVectors(Er,this.fwdAxis).normalize(),r=50;let s=0;this.addDependency(()=>!this.fallen,()=>{this.update=l=>{if(this.fallen)return;const c=ib*l;Qo.set(this.rayOrigin(0),this.rayDirection);const d=Qo.intersectObjects(this.collideNodes.map(x=>x.mesh),!1);Qo.set(this.rayOrigin(1),this.rayDirection);const f=Qo.intersectObjects(this.collideNodes.map(x=>x.mesh),!1);if(e>=Math.PI/2||s>=r){this.fallen=!0,this.mesh.material=this.fallenMat;return}const g=d.find(x=>x.distance<=zs+.01),v=f.find(x=>x.distance<=zs+.01);if(g||v){g&&g.object instanceof vn&&g.object.userData.domino&&!g.object.userData.domino.toppling&&g.object.userData.domino.topple(),v&&v.object instanceof vn&&v.object.userData.domino&&!v.object.userData.domino.toppling&&v.object.userData.domino.topple(),s++;return}s=0,e+=c,this.mesh.rotateOnWorldAxis(i,c)}})}}const Gh=1,rb=1.5;class sb extends _a{constructor(e,i){super(new vn(new Pa(Gh),i));Kt(this,"collided",!1);Kt(this,"fwdAxis");Kt(this,"collideNodes",[]);this.mesh.castShadow=!0,this.fwdAxis=e.clone().normalize()}addCollidable(e){this.collideNodes.push(e)}roll(){const e=new B().crossVectors(Er,this.fwdAxis).normalize();this.addDependency(()=>!this.collided,()=>{this.update=i=>{if(this.collided)return;for(const l of this.collideNodes)l instanceof Sc&&eb(this.mesh,l.mesh)&&(console.info("sphere collided with domino"),this.collided=!0,l.topple());const r=rb*i;this.mesh.rotateOnAxis(e,r);const s=this.fwdAxis.clone().multiplyScalar(r*Gh);this.mesh.position.add(s)}})}}function ob(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ca={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var ab=ca.exports,Wh;function lb(){return Wh||(Wh=1,function(n){(function(t,e){n.exports=t.document?e(t,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return e(i)}})(typeof window<"u"?window:ab,function(t,e){var i=[],r=Object.getPrototypeOf,s=i.slice,l=i.flat?function(o){return i.flat.call(o)}:function(o){return i.concat.apply([],o)},c=i.push,d=i.indexOf,f={},g=f.toString,v=f.hasOwnProperty,x=v.toString,w=x.call(Object),M={},T=function(a){return typeof a=="function"&&typeof a.nodeType!="number"&&typeof a.item!="function"},y=function(a){return a!=null&&a===a.window},m=t.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function U(o,a,h){h=h||m;var p,_,b=h.createElement("script");if(b.text=o,a)for(p in O)_=a[p]||a.getAttribute&&a.getAttribute(p),_&&b.setAttribute(p,_);h.head.appendChild(b).parentNode.removeChild(b)}function R(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?f[g.call(o)]||"object":typeof o}var W="3.7.1",z=/HTML$/i,u=function(o,a){return new u.fn.init(o,a)};u.fn=u.prototype={jquery:W,constructor:u,length:0,toArray:function(){return s.call(this)},get:function(o){return o==null?s.call(this):o<0?this[o+this.length]:this[o]},pushStack:function(o){var a=u.merge(this.constructor(),o);return a.prevObject=this,a},each:function(o){return u.each(this,o)},map:function(o){return this.pushStack(u.map(this,function(a,h){return o.call(a,h,a)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(o,a){return(a+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(o,a){return a%2}))},eq:function(o){var a=this.length,h=+o+(o<0?a:0);return this.pushStack(h>=0&&h<a?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:i.sort,splice:i.splice},u.extend=u.fn.extend=function(){var o,a,h,p,_,b,S=arguments[0]||{},N=1,I=arguments.length,H=!1;for(typeof S=="boolean"&&(H=S,S=arguments[N]||{},N++),typeof S!="object"&&!T(S)&&(S={}),N===I&&(S=this,N--);N<I;N++)if((o=arguments[N])!=null)for(a in o)p=o[a],!(a==="__proto__"||S===p)&&(H&&p&&(u.isPlainObject(p)||(_=Array.isArray(p)))?(h=S[a],_&&!Array.isArray(h)?b=[]:!_&&!u.isPlainObject(h)?b={}:b=h,_=!1,S[a]=u.extend(H,b,p)):p!==void 0&&(S[a]=p));return S},u.extend({expando:"jQuery"+(W+Math.random()).replace(/\D/g,""),isReady:!0,error:function(o){throw new Error(o)},noop:function(){},isPlainObject:function(o){var a,h;return!o||g.call(o)!=="[object Object]"?!1:(a=r(o),a?(h=v.call(a,"constructor")&&a.constructor,typeof h=="function"&&x.call(h)===w):!0)},isEmptyObject:function(o){var a;for(a in o)return!1;return!0},globalEval:function(o,a,h){U(o,{nonce:a&&a.nonce},h)},each:function(o,a){var h,p=0;if(q(o))for(h=o.length;p<h&&a.call(o[p],p,o[p])!==!1;p++);else for(p in o)if(a.call(o[p],p,o[p])===!1)break;return o},text:function(o){var a,h="",p=0,_=o.nodeType;if(!_)for(;a=o[p++];)h+=u.text(a);return _===1||_===11?o.textContent:_===9?o.documentElement.textContent:_===3||_===4?o.nodeValue:h},makeArray:function(o,a){var h=a||[];return o!=null&&(q(Object(o))?u.merge(h,typeof o=="string"?[o]:o):c.call(h,o)),h},inArray:function(o,a,h){return a==null?-1:d.call(a,o,h)},isXMLDoc:function(o){var a=o&&o.namespaceURI,h=o&&(o.ownerDocument||o).documentElement;return!z.test(a||h&&h.nodeName||"HTML")},merge:function(o,a){for(var h=+a.length,p=0,_=o.length;p<h;p++)o[_++]=a[p];return o.length=_,o},grep:function(o,a,h){for(var p,_=[],b=0,S=o.length,N=!h;b<S;b++)p=!a(o[b],b),p!==N&&_.push(o[b]);return _},map:function(o,a,h){var p,_,b=0,S=[];if(q(o))for(p=o.length;b<p;b++)_=a(o[b],b,h),_!=null&&S.push(_);else for(b in o)_=a(o[b],b,h),_!=null&&S.push(_);return l(S)},guid:1,support:M}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=i[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(o,a){f["[object "+a+"]"]=a.toLowerCase()});function q(o){var a=!!o&&"length"in o&&o.length,h=R(o);return T(o)||y(o)?!1:h==="array"||a===0||typeof a=="number"&&a>0&&a-1 in o}function P(o,a){return o.nodeName&&o.nodeName.toLowerCase()===a.toLowerCase()}var A=i.pop,V=i.sort,lt=i.splice,Y="[\\x20\\t\\r\\n\\f]",dt=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");u.contains=function(o,a){var h=a&&a.parentNode;return o===h||!!(h&&h.nodeType===1&&(o.contains?o.contains(h):o.compareDocumentPosition&&o.compareDocumentPosition(h)&16))};var mt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ot(o,a){return a?o==="\0"?"�":o.slice(0,-1)+"\\"+o.charCodeAt(o.length-1).toString(16)+" ":"\\"+o}u.escapeSelector=function(o){return(o+"").replace(mt,ot)};var at=m,tt=c;(function(){var o,a,h,p,_,b=tt,S,N,I,H,it,ht=u.expando,J=0,_t=0,oe=Mo(),Pe=Mo(),me=Mo(),gn=Mo(),on=function(L,k){return L===k&&(_=!0),0},ii="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ri="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Te="\\["+Y+"*("+ri+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ri+"))|)"+Y+"*\\]",pr=":("+ri+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Te+")*)|.*)\\)|)",Re=new RegExp(Y+"+","g"),Je=new RegExp("^"+Y+"*,"+Y+"*"),Ds=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),Ga=new RegExp(Y+"|>"),si=new RegExp(pr),Ls=new RegExp("^"+ri+"$"),oi={ID:new RegExp("^#("+ri+")"),CLASS:new RegExp("^\\.("+ri+")"),TAG:new RegExp("^("+ri+"|[*])"),ATTR:new RegExp("^"+Te),PSEUDO:new RegExp("^"+pr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+ii+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},Gi=/^(?:input|select|textarea|button)$/i,Wi=/^h\d$/i,Hn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Wa=/[+~]/,wi=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),Mi=function(L,k){var Z="0x"+L.slice(1)-65536;return k||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},df=function(){ji()},pf=Eo(function(L){return L.disabled===!0&&P(L,"fieldset")},{dir:"parentNode",next:"legend"});function ff(){try{return S.activeElement}catch{}}try{b.apply(i=s.call(at.childNodes),at.childNodes),i[at.childNodes.length].nodeType}catch{b={apply:function(k,Z){tt.apply(k,s.call(Z))},call:function(k){tt.apply(k,s.call(arguments,1))}}}function ke(L,k,Z,nt){var ct,Mt,It,Wt,Ut,ye,ie,ce=k&&k.ownerDocument,we=k?k.nodeType:9;if(Z=Z||[],typeof L!="string"||!L||we!==1&&we!==9&&we!==11)return Z;if(!nt&&(ji(k),k=k||S,I)){if(we!==11&&(Ut=Hn.exec(L)))if(ct=Ut[1]){if(we===9)if(It=k.getElementById(ct)){if(It.id===ct)return b.call(Z,It),Z}else return Z;else if(ce&&(It=ce.getElementById(ct))&&ke.contains(k,It)&&It.id===ct)return b.call(Z,It),Z}else{if(Ut[2])return b.apply(Z,k.getElementsByTagName(L)),Z;if((ct=Ut[3])&&k.getElementsByClassName)return b.apply(Z,k.getElementsByClassName(ct)),Z}if(!gn[L+" "]&&(!H||!H.test(L))){if(ie=L,ce=k,we===1&&(Ga.test(L)||Ds.test(L))){for(ce=Wa.test(L)&&ja(k.parentNode)||k,(ce!=k||!M.scope)&&((Wt=k.getAttribute("id"))?Wt=u.escapeSelector(Wt):k.setAttribute("id",Wt=ht)),ye=Is(L),Mt=ye.length;Mt--;)ye[Mt]=(Wt?"#"+Wt:":scope")+" "+So(ye[Mt]);ie=ye.join(",")}try{return b.apply(Z,ce.querySelectorAll(ie)),Z}catch{gn(L,!0)}finally{Wt===ht&&k.removeAttribute("id")}}}return Ru(L.replace(dt,"$1"),k,Z,nt)}function Mo(){var L=[];function k(Z,nt){return L.push(Z+" ")>a.cacheLength&&delete k[L.shift()],k[Z+" "]=nt}return k}function Kn(L){return L[ht]=!0,L}function zr(L){var k=S.createElement("fieldset");try{return!!L(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function mf(L){return function(k){return P(k,"input")&&k.type===L}}function gf(L){return function(k){return(P(k,"input")||P(k,"button"))&&k.type===L}}function Au(L){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===L:k.disabled===L:k.isDisabled===L||k.isDisabled!==!L&&pf(k)===L:k.disabled===L:"label"in k?k.disabled===L:!1}}function fr(L){return Kn(function(k){return k=+k,Kn(function(Z,nt){for(var ct,Mt=L([],Z.length,k),It=Mt.length;It--;)Z[ct=Mt[It]]&&(Z[ct]=!(nt[ct]=Z[ct]))})})}function ja(L){return L&&typeof L.getElementsByTagName<"u"&&L}function ji(L){var k,Z=L?L.ownerDocument||L:at;return Z==S||Z.nodeType!==9||!Z.documentElement||(S=Z,N=S.documentElement,I=!u.isXMLDoc(S),it=N.matches||N.webkitMatchesSelector||N.msMatchesSelector,N.msMatchesSelector&&at!=S&&(k=S.defaultView)&&k.top!==k&&k.addEventListener("unload",df),M.getById=zr(function(nt){return N.appendChild(nt).id=u.expando,!S.getElementsByName||!S.getElementsByName(u.expando).length}),M.disconnectedMatch=zr(function(nt){return it.call(nt,"*")}),M.scope=zr(function(){return S.querySelectorAll(":scope")}),M.cssHas=zr(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(a.filter.ID=function(nt){var ct=nt.replace(wi,Mi);return function(Mt){return Mt.getAttribute("id")===ct}},a.find.ID=function(nt,ct){if(typeof ct.getElementById<"u"&&I){var Mt=ct.getElementById(nt);return Mt?[Mt]:[]}}):(a.filter.ID=function(nt){var ct=nt.replace(wi,Mi);return function(Mt){var It=typeof Mt.getAttributeNode<"u"&&Mt.getAttributeNode("id");return It&&It.value===ct}},a.find.ID=function(nt,ct){if(typeof ct.getElementById<"u"&&I){var Mt,It,Wt,Ut=ct.getElementById(nt);if(Ut){if(Mt=Ut.getAttributeNode("id"),Mt&&Mt.value===nt)return[Ut];for(Wt=ct.getElementsByName(nt),It=0;Ut=Wt[It++];)if(Mt=Ut.getAttributeNode("id"),Mt&&Mt.value===nt)return[Ut]}return[]}}),a.find.TAG=function(nt,ct){return typeof ct.getElementsByTagName<"u"?ct.getElementsByTagName(nt):ct.querySelectorAll(nt)},a.find.CLASS=function(nt,ct){if(typeof ct.getElementsByClassName<"u"&&I)return ct.getElementsByClassName(nt)},H=[],zr(function(nt){var ct;N.appendChild(nt).innerHTML="<a id='"+ht+"' href='' disabled='disabled'></a><select id='"+ht+"-\r\\' disabled='disabled'><option selected=''></option></select>",nt.querySelectorAll("[selected]").length||H.push("\\["+Y+"*(?:value|"+ii+")"),nt.querySelectorAll("[id~="+ht+"-]").length||H.push("~="),nt.querySelectorAll("a#"+ht+"+*").length||H.push(".#.+[+~]"),nt.querySelectorAll(":checked").length||H.push(":checked"),ct=S.createElement("input"),ct.setAttribute("type","hidden"),nt.appendChild(ct).setAttribute("name","D"),N.appendChild(nt).disabled=!0,nt.querySelectorAll(":disabled").length!==2&&H.push(":enabled",":disabled"),ct=S.createElement("input"),ct.setAttribute("name",""),nt.appendChild(ct),nt.querySelectorAll("[name='']").length||H.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),M.cssHas||H.push(":has"),H=H.length&&new RegExp(H.join("|")),on=function(nt,ct){if(nt===ct)return _=!0,0;var Mt=!nt.compareDocumentPosition-!ct.compareDocumentPosition;return Mt||(Mt=(nt.ownerDocument||nt)==(ct.ownerDocument||ct)?nt.compareDocumentPosition(ct):1,Mt&1||!M.sortDetached&&ct.compareDocumentPosition(nt)===Mt?nt===S||nt.ownerDocument==at&&ke.contains(at,nt)?-1:ct===S||ct.ownerDocument==at&&ke.contains(at,ct)?1:p?d.call(p,nt)-d.call(p,ct):0:Mt&4?-1:1)}),S}ke.matches=function(L,k){return ke(L,null,null,k)},ke.matchesSelector=function(L,k){if(ji(L),I&&!gn[k+" "]&&(!H||!H.test(k)))try{var Z=it.call(L,k);if(Z||M.disconnectedMatch||L.document&&L.document.nodeType!==11)return Z}catch{gn(k,!0)}return ke(k,S,null,[L]).length>0},ke.contains=function(L,k){return(L.ownerDocument||L)!=S&&ji(L),u.contains(L,k)},ke.attr=function(L,k){(L.ownerDocument||L)!=S&&ji(L);var Z=a.attrHandle[k.toLowerCase()],nt=Z&&v.call(a.attrHandle,k.toLowerCase())?Z(L,k,!I):void 0;return nt!==void 0?nt:L.getAttribute(k)},ke.error=function(L){throw new Error("Syntax error, unrecognized expression: "+L)},u.uniqueSort=function(L){var k,Z=[],nt=0,ct=0;if(_=!M.sortStable,p=!M.sortStable&&s.call(L,0),V.call(L,on),_){for(;k=L[ct++];)k===L[ct]&&(nt=Z.push(ct));for(;nt--;)lt.call(L,Z[nt],1)}return p=null,L},u.fn.uniqueSort=function(){return this.pushStack(u.uniqueSort(s.apply(this)))},a=u.expr={cacheLength:50,createPseudo:Kn,match:oi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(L){return L[1]=L[1].replace(wi,Mi),L[3]=(L[3]||L[4]||L[5]||"").replace(wi,Mi),L[2]==="~="&&(L[3]=" "+L[3]+" "),L.slice(0,4)},CHILD:function(L){return L[1]=L[1].toLowerCase(),L[1].slice(0,3)==="nth"?(L[3]||ke.error(L[0]),L[4]=+(L[4]?L[5]+(L[6]||1):2*(L[3]==="even"||L[3]==="odd")),L[5]=+(L[7]+L[8]||L[3]==="odd")):L[3]&&ke.error(L[0]),L},PSEUDO:function(L){var k,Z=!L[6]&&L[2];return oi.CHILD.test(L[0])?null:(L[3]?L[2]=L[4]||L[5]||"":Z&&si.test(Z)&&(k=Is(Z,!0))&&(k=Z.indexOf(")",Z.length-k)-Z.length)&&(L[0]=L[0].slice(0,k),L[2]=Z.slice(0,k)),L.slice(0,3))}},filter:{TAG:function(L){var k=L.replace(wi,Mi).toLowerCase();return L==="*"?function(){return!0}:function(Z){return P(Z,k)}},CLASS:function(L){var k=oe[L+" "];return k||(k=new RegExp("(^|"+Y+")"+L+"("+Y+"|$)"))&&oe(L,function(Z){return k.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute<"u"&&Z.getAttribute("class")||"")})},ATTR:function(L,k,Z){return function(nt){var ct=ke.attr(nt,L);return ct==null?k==="!=":k?(ct+="",k==="="?ct===Z:k==="!="?ct!==Z:k==="^="?Z&&ct.indexOf(Z)===0:k==="*="?Z&&ct.indexOf(Z)>-1:k==="$="?Z&&ct.slice(-Z.length)===Z:k==="~="?(" "+ct.replace(Re," ")+" ").indexOf(Z)>-1:k==="|="?ct===Z||ct.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(L,k,Z,nt,ct){var Mt=L.slice(0,3)!=="nth",It=L.slice(-4)!=="last",Wt=k==="of-type";return nt===1&&ct===0?function(Ut){return!!Ut.parentNode}:function(Ut,ye,ie){var ce,we,Qt,We,Pn,_n=Mt!==It?"nextSibling":"previousSibling",Gn=Ut.parentNode,ai=Wt&&Ut.nodeName.toLowerCase(),Hr=!ie&&!Wt,wn=!1;if(Gn){if(Mt){for(;_n;){for(Qt=Ut;Qt=Qt[_n];)if(Wt?P(Qt,ai):Qt.nodeType===1)return!1;Pn=_n=L==="only"&&!Pn&&"nextSibling"}return!0}if(Pn=[It?Gn.firstChild:Gn.lastChild],It&&Hr){for(we=Gn[ht]||(Gn[ht]={}),ce=we[L]||[],We=ce[0]===J&&ce[1],wn=We&&ce[2],Qt=We&&Gn.childNodes[We];Qt=++We&&Qt&&Qt[_n]||(wn=We=0)||Pn.pop();)if(Qt.nodeType===1&&++wn&&Qt===Ut){we[L]=[J,We,wn];break}}else if(Hr&&(we=Ut[ht]||(Ut[ht]={}),ce=we[L]||[],We=ce[0]===J&&ce[1],wn=We),wn===!1)for(;(Qt=++We&&Qt&&Qt[_n]||(wn=We=0)||Pn.pop())&&!((Wt?P(Qt,ai):Qt.nodeType===1)&&++wn&&(Hr&&(we=Qt[ht]||(Qt[ht]={}),we[L]=[J,wn]),Qt===Ut)););return wn-=ct,wn===nt||wn%nt===0&&wn/nt>=0}}},PSEUDO:function(L,k){var Z,nt=a.pseudos[L]||a.setFilters[L.toLowerCase()]||ke.error("unsupported pseudo: "+L);return nt[ht]?nt(k):nt.length>1?(Z=[L,L,"",k],a.setFilters.hasOwnProperty(L.toLowerCase())?Kn(function(ct,Mt){for(var It,Wt=nt(ct,k),Ut=Wt.length;Ut--;)It=d.call(ct,Wt[Ut]),ct[It]=!(Mt[It]=Wt[Ut])}):function(ct){return nt(ct,0,Z)}):nt}},pseudos:{not:Kn(function(L){var k=[],Z=[],nt=$a(L.replace(dt,"$1"));return nt[ht]?Kn(function(ct,Mt,It,Wt){for(var Ut,ye=nt(ct,null,Wt,[]),ie=ct.length;ie--;)(Ut=ye[ie])&&(ct[ie]=!(Mt[ie]=Ut))}):function(ct,Mt,It){return k[0]=ct,nt(k,null,It,Z),k[0]=null,!Z.pop()}}),has:Kn(function(L){return function(k){return ke(L,k).length>0}}),contains:Kn(function(L){return L=L.replace(wi,Mi),function(k){return(k.textContent||u.text(k)).indexOf(L)>-1}}),lang:Kn(function(L){return Ls.test(L||"")||ke.error("unsupported lang: "+L),L=L.replace(wi,Mi).toLowerCase(),function(k){var Z;do if(Z=I?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return Z=Z.toLowerCase(),Z===L||Z.indexOf(L+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(L){var k=t.location&&t.location.hash;return k&&k.slice(1)===L.id},root:function(L){return L===N},focus:function(L){return L===ff()&&S.hasFocus()&&!!(L.type||L.href||~L.tabIndex)},enabled:Au(!1),disabled:Au(!0),checked:function(L){return P(L,"input")&&!!L.checked||P(L,"option")&&!!L.selected},selected:function(L){return L.parentNode&&L.parentNode.selectedIndex,L.selected===!0},empty:function(L){for(L=L.firstChild;L;L=L.nextSibling)if(L.nodeType<6)return!1;return!0},parent:function(L){return!a.pseudos.empty(L)},header:function(L){return Wi.test(L.nodeName)},input:function(L){return Gi.test(L.nodeName)},button:function(L){return P(L,"input")&&L.type==="button"||P(L,"button")},text:function(L){var k;return P(L,"input")&&L.type==="text"&&((k=L.getAttribute("type"))==null||k.toLowerCase()==="text")},first:fr(function(){return[0]}),last:fr(function(L,k){return[k-1]}),eq:fr(function(L,k,Z){return[Z<0?Z+k:Z]}),even:fr(function(L,k){for(var Z=0;Z<k;Z+=2)L.push(Z);return L}),odd:fr(function(L,k){for(var Z=1;Z<k;Z+=2)L.push(Z);return L}),lt:fr(function(L,k,Z){var nt;for(Z<0?nt=Z+k:Z>k?nt=k:nt=Z;--nt>=0;)L.push(nt);return L}),gt:fr(function(L,k,Z){for(var nt=Z<0?Z+k:Z;++nt<k;)L.push(nt);return L})}},a.pseudos.nth=a.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})a.pseudos[o]=mf(o);for(o in{submit:!0,reset:!0})a.pseudos[o]=gf(o);function Pu(){}Pu.prototype=a.filters=a.pseudos,a.setFilters=new Pu;function Is(L,k){var Z,nt,ct,Mt,It,Wt,Ut,ye=Pe[L+" "];if(ye)return k?0:ye.slice(0);for(It=L,Wt=[],Ut=a.preFilter;It;){(!Z||(nt=Je.exec(It)))&&(nt&&(It=It.slice(nt[0].length)||It),Wt.push(ct=[])),Z=!1,(nt=Ds.exec(It))&&(Z=nt.shift(),ct.push({value:Z,type:nt[0].replace(dt," ")}),It=It.slice(Z.length));for(Mt in a.filter)(nt=oi[Mt].exec(It))&&(!Ut[Mt]||(nt=Ut[Mt](nt)))&&(Z=nt.shift(),ct.push({value:Z,type:Mt,matches:nt}),It=It.slice(Z.length));if(!Z)break}return k?It.length:It?ke.error(L):Pe(L,Wt).slice(0)}function So(L){for(var k=0,Z=L.length,nt="";k<Z;k++)nt+=L[k].value;return nt}function Eo(L,k,Z){var nt=k.dir,ct=k.next,Mt=ct||nt,It=Z&&Mt==="parentNode",Wt=_t++;return k.first?function(Ut,ye,ie){for(;Ut=Ut[nt];)if(Ut.nodeType===1||It)return L(Ut,ye,ie);return!1}:function(Ut,ye,ie){var ce,we,Qt=[J,Wt];if(ie){for(;Ut=Ut[nt];)if((Ut.nodeType===1||It)&&L(Ut,ye,ie))return!0}else for(;Ut=Ut[nt];)if(Ut.nodeType===1||It)if(we=Ut[ht]||(Ut[ht]={}),ct&&P(Ut,ct))Ut=Ut[nt]||Ut;else{if((ce=we[Mt])&&ce[0]===J&&ce[1]===Wt)return Qt[2]=ce[2];if(we[Mt]=Qt,Qt[2]=L(Ut,ye,ie))return!0}return!1}}function Xa(L){return L.length>1?function(k,Z,nt){for(var ct=L.length;ct--;)if(!L[ct](k,Z,nt))return!1;return!0}:L[0]}function vf(L,k,Z){for(var nt=0,ct=k.length;nt<ct;nt++)ke(L,k[nt],Z);return Z}function To(L,k,Z,nt,ct){for(var Mt,It=[],Wt=0,Ut=L.length,ye=k!=null;Wt<Ut;Wt++)(Mt=L[Wt])&&(!Z||Z(Mt,nt,ct))&&(It.push(Mt),ye&&k.push(Wt));return It}function qa(L,k,Z,nt,ct,Mt){return nt&&!nt[ht]&&(nt=qa(nt)),ct&&!ct[ht]&&(ct=qa(ct,Mt)),Kn(function(It,Wt,Ut,ye){var ie,ce,we,Qt,We=[],Pn=[],_n=Wt.length,Gn=It||vf(k||"*",Ut.nodeType?[Ut]:Ut,[]),ai=L&&(It||!k)?To(Gn,We,L,Ut,ye):Gn;if(Z?(Qt=ct||(It?L:_n||nt)?[]:Wt,Z(ai,Qt,Ut,ye)):Qt=ai,nt)for(ie=To(Qt,Pn),nt(ie,[],Ut,ye),ce=ie.length;ce--;)(we=ie[ce])&&(Qt[Pn[ce]]=!(ai[Pn[ce]]=we));if(It){if(ct||L){if(ct){for(ie=[],ce=Qt.length;ce--;)(we=Qt[ce])&&ie.push(ai[ce]=we);ct(null,Qt=[],ie,ye)}for(ce=Qt.length;ce--;)(we=Qt[ce])&&(ie=ct?d.call(It,we):We[ce])>-1&&(It[ie]=!(Wt[ie]=we))}}else Qt=To(Qt===Wt?Qt.splice(_n,Qt.length):Qt),ct?ct(null,Wt,Qt,ye):b.apply(Wt,Qt)})}function Ya(L){for(var k,Z,nt,ct=L.length,Mt=a.relative[L[0].type],It=Mt||a.relative[" "],Wt=Mt?1:0,Ut=Eo(function(ce){return ce===k},It,!0),ye=Eo(function(ce){return d.call(k,ce)>-1},It,!0),ie=[function(ce,we,Qt){var We=!Mt&&(Qt||we!=h)||((k=we).nodeType?Ut(ce,we,Qt):ye(ce,we,Qt));return k=null,We}];Wt<ct;Wt++)if(Z=a.relative[L[Wt].type])ie=[Eo(Xa(ie),Z)];else{if(Z=a.filter[L[Wt].type].apply(null,L[Wt].matches),Z[ht]){for(nt=++Wt;nt<ct&&!a.relative[L[nt].type];nt++);return qa(Wt>1&&Xa(ie),Wt>1&&So(L.slice(0,Wt-1).concat({value:L[Wt-2].type===" "?"*":""})).replace(dt,"$1"),Z,Wt<nt&&Ya(L.slice(Wt,nt)),nt<ct&&Ya(L=L.slice(nt)),nt<ct&&So(L))}ie.push(Z)}return Xa(ie)}function _f(L,k){var Z=k.length>0,nt=L.length>0,ct=function(Mt,It,Wt,Ut,ye){var ie,ce,we,Qt=0,We="0",Pn=Mt&&[],_n=[],Gn=h,ai=Mt||nt&&a.find.TAG("*",ye),Hr=J+=Gn==null?1:Math.random()||.1,wn=ai.length;for(ye&&(h=It==S||It||ye);We!==wn&&(ie=ai[We])!=null;We++){if(nt&&ie){for(ce=0,!It&&ie.ownerDocument!=S&&(ji(ie),Wt=!I);we=L[ce++];)if(we(ie,It||S,Wt)){b.call(Ut,ie);break}ye&&(J=Hr)}Z&&((ie=!we&&ie)&&Qt--,Mt&&Pn.push(ie))}if(Qt+=We,Z&&We!==Qt){for(ce=0;we=k[ce++];)we(Pn,_n,It,Wt);if(Mt){if(Qt>0)for(;We--;)Pn[We]||_n[We]||(_n[We]=A.call(Ut));_n=To(_n)}b.apply(Ut,_n),ye&&!Mt&&_n.length>0&&Qt+k.length>1&&u.uniqueSort(Ut)}return ye&&(J=Hr,h=Gn),Pn};return Z?Kn(ct):ct}function $a(L,k){var Z,nt=[],ct=[],Mt=me[L+" "];if(!Mt){for(k||(k=Is(L)),Z=k.length;Z--;)Mt=Ya(k[Z]),Mt[ht]?nt.push(Mt):ct.push(Mt);Mt=me(L,_f(ct,nt)),Mt.selector=L}return Mt}function Ru(L,k,Z,nt){var ct,Mt,It,Wt,Ut,ye=typeof L=="function"&&L,ie=!nt&&Is(L=ye.selector||L);if(Z=Z||[],ie.length===1){if(Mt=ie[0]=ie[0].slice(0),Mt.length>2&&(It=Mt[0]).type==="ID"&&k.nodeType===9&&I&&a.relative[Mt[1].type]){if(k=(a.find.ID(It.matches[0].replace(wi,Mi),k)||[])[0],k)ye&&(k=k.parentNode);else return Z;L=L.slice(Mt.shift().value.length)}for(ct=oi.needsContext.test(L)?0:Mt.length;ct--&&(It=Mt[ct],!a.relative[Wt=It.type]);)if((Ut=a.find[Wt])&&(nt=Ut(It.matches[0].replace(wi,Mi),Wa.test(Mt[0].type)&&ja(k.parentNode)||k))){if(Mt.splice(ct,1),L=nt.length&&So(Mt),!L)return b.apply(Z,nt),Z;break}}return(ye||$a(L,ie))(nt,k,!I,Z,!k||Wa.test(L)&&ja(k.parentNode)||k),Z}M.sortStable=ht.split("").sort(on).join("")===ht,ji(),M.sortDetached=zr(function(L){return L.compareDocumentPosition(S.createElement("fieldset"))&1}),u.find=ke,u.expr[":"]=u.expr.pseudos,u.unique=u.uniqueSort,ke.compile=$a,ke.select=Ru,ke.setDocument=ji,ke.tokenize=Is,ke.escape=u.escapeSelector,ke.getText=u.text,ke.isXML=u.isXMLDoc,ke.selectors=u.expr,ke.support=u.support,ke.uniqueSort=u.uniqueSort})();var bt=function(o,a,h){for(var p=[],_=h!==void 0;(o=o[a])&&o.nodeType!==9;)if(o.nodeType===1){if(_&&u(o).is(h))break;p.push(o)}return p},St=function(o,a){for(var h=[];o;o=o.nextSibling)o.nodeType===1&&o!==a&&h.push(o);return h},Tt=u.expr.match.needsContext,te=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function de(o,a,h){return T(a)?u.grep(o,function(p,_){return!!a.call(p,_,p)!==h}):a.nodeType?u.grep(o,function(p){return p===a!==h}):typeof a!="string"?u.grep(o,function(p){return d.call(a,p)>-1!==h}):u.filter(a,o,h)}u.filter=function(o,a,h){var p=a[0];return h&&(o=":not("+o+")"),a.length===1&&p.nodeType===1?u.find.matchesSelector(p,o)?[p]:[]:u.find.matches(o,u.grep(a,function(_){return _.nodeType===1}))},u.fn.extend({find:function(o){var a,h,p=this.length,_=this;if(typeof o!="string")return this.pushStack(u(o).filter(function(){for(a=0;a<p;a++)if(u.contains(_[a],this))return!0}));for(h=this.pushStack([]),a=0;a<p;a++)u.find(o,_[a],h);return p>1?u.uniqueSort(h):h},filter:function(o){return this.pushStack(de(this,o||[],!1))},not:function(o){return this.pushStack(de(this,o||[],!0))},is:function(o){return!!de(this,typeof o=="string"&&Tt.test(o)?u(o):o||[],!1).length}});var pt,yt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Dt=u.fn.init=function(o,a,h){var p,_;if(!o)return this;if(h=h||pt,typeof o=="string")if(o[0]==="<"&&o[o.length-1]===">"&&o.length>=3?p=[null,o,null]:p=yt.exec(o),p&&(p[1]||!a))if(p[1]){if(a=a instanceof u?a[0]:a,u.merge(this,u.parseHTML(p[1],a&&a.nodeType?a.ownerDocument||a:m,!0)),te.test(p[1])&&u.isPlainObject(a))for(p in a)T(this[p])?this[p](a[p]):this.attr(p,a[p]);return this}else return _=m.getElementById(p[2]),_&&(this[0]=_,this.length=1),this;else return!a||a.jquery?(a||h).find(o):this.constructor(a).find(o);else{if(o.nodeType)return this[0]=o,this.length=1,this;if(T(o))return h.ready!==void 0?h.ready(o):o(u)}return u.makeArray(o,this)};Dt.prototype=u.fn,pt=u(m);var wt=/^(?:parents|prev(?:Until|All))/,zt={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(o){var a=u(o,this),h=a.length;return this.filter(function(){for(var p=0;p<h;p++)if(u.contains(this,a[p]))return!0})},closest:function(o,a){var h,p=0,_=this.length,b=[],S=typeof o!="string"&&u(o);if(!Tt.test(o)){for(;p<_;p++)for(h=this[p];h&&h!==a;h=h.parentNode)if(h.nodeType<11&&(S?S.index(h)>-1:h.nodeType===1&&u.find.matchesSelector(h,o))){b.push(h);break}}return this.pushStack(b.length>1?u.uniqueSort(b):b)},index:function(o){return o?typeof o=="string"?d.call(u(o),this[0]):d.call(this,o.jquery?o[0]:o):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(o,a){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(o,a))))},addBack:function(o){return this.add(o==null?this.prevObject:this.prevObject.filter(o))}});function ae(o,a){for(;(o=o[a])&&o.nodeType!==1;);return o}u.each({parent:function(o){var a=o.parentNode;return a&&a.nodeType!==11?a:null},parents:function(o){return bt(o,"parentNode")},parentsUntil:function(o,a,h){return bt(o,"parentNode",h)},next:function(o){return ae(o,"nextSibling")},prev:function(o){return ae(o,"previousSibling")},nextAll:function(o){return bt(o,"nextSibling")},prevAll:function(o){return bt(o,"previousSibling")},nextUntil:function(o,a,h){return bt(o,"nextSibling",h)},prevUntil:function(o,a,h){return bt(o,"previousSibling",h)},siblings:function(o){return St((o.parentNode||{}).firstChild,o)},children:function(o){return St(o.firstChild)},contents:function(o){return o.contentDocument!=null&&r(o.contentDocument)?o.contentDocument:(P(o,"template")&&(o=o.content||o),u.merge([],o.childNodes))}},function(o,a){u.fn[o]=function(h,p){var _=u.map(this,a,h);return o.slice(-5)!=="Until"&&(p=h),p&&typeof p=="string"&&(_=u.filter(p,_)),this.length>1&&(zt[o]||u.uniqueSort(_),wt.test(o)&&_.reverse()),this.pushStack(_)}});var Gt=/[^\x20\t\r\n\f]+/g;function He(o){var a={};return u.each(o.match(Gt)||[],function(h,p){a[p]=!0}),a}u.Callbacks=function(o){o=typeof o=="string"?He(o):u.extend({},o);var a,h,p,_,b=[],S=[],N=-1,I=function(){for(_=_||o.once,p=a=!0;S.length;N=-1)for(h=S.shift();++N<b.length;)b[N].apply(h[0],h[1])===!1&&o.stopOnFalse&&(N=b.length,h=!1);o.memory||(h=!1),a=!1,_&&(h?b=[]:b="")},H={add:function(){return b&&(h&&!a&&(N=b.length-1,S.push(h)),function it(ht){u.each(ht,function(J,_t){T(_t)?(!o.unique||!H.has(_t))&&b.push(_t):_t&&_t.length&&R(_t)!=="string"&&it(_t)})}(arguments),h&&!a&&I()),this},remove:function(){return u.each(arguments,function(it,ht){for(var J;(J=u.inArray(ht,b,J))>-1;)b.splice(J,1),J<=N&&N--}),this},has:function(it){return it?u.inArray(it,b)>-1:b.length>0},empty:function(){return b&&(b=[]),this},disable:function(){return _=S=[],b=h="",this},disabled:function(){return!b},lock:function(){return _=S=[],!h&&!a&&(b=h=""),this},locked:function(){return!!_},fireWith:function(it,ht){return _||(ht=ht||[],ht=[it,ht.slice?ht.slice():ht],S.push(ht),a||I()),this},fire:function(){return H.fireWith(this,arguments),this},fired:function(){return!!p}};return H};function pe(o){return o}function ee(o){throw o}function F(o,a,h,p){var _;try{o&&T(_=o.promise)?_.call(o).done(a).fail(h):o&&T(_=o.then)?_.call(o,a,h):a.apply(void 0,[o].slice(p))}catch(b){h.apply(void 0,[b])}}u.extend({Deferred:function(o){var a=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],h="pending",p={state:function(){return h},always:function(){return _.done(arguments).fail(arguments),this},catch:function(b){return p.then(null,b)},pipe:function(){var b=arguments;return u.Deferred(function(S){u.each(a,function(N,I){var H=T(b[I[4]])&&b[I[4]];_[I[1]](function(){var it=H&&H.apply(this,arguments);it&&T(it.promise)?it.promise().progress(S.notify).done(S.resolve).fail(S.reject):S[I[0]+"With"](this,H?[it]:arguments)})}),b=null}).promise()},then:function(b,S,N){var I=0;function H(it,ht,J,_t){return function(){var oe=this,Pe=arguments,me=function(){var on,ii;if(!(it<I)){if(on=J.apply(oe,Pe),on===ht.promise())throw new TypeError("Thenable self-resolution");ii=on&&(typeof on=="object"||typeof on=="function")&&on.then,T(ii)?_t?ii.call(on,H(I,ht,pe,_t),H(I,ht,ee,_t)):(I++,ii.call(on,H(I,ht,pe,_t),H(I,ht,ee,_t),H(I,ht,pe,ht.notifyWith))):(J!==pe&&(oe=void 0,Pe=[on]),(_t||ht.resolveWith)(oe,Pe))}},gn=_t?me:function(){try{me()}catch(on){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(on,gn.error),it+1>=I&&(J!==ee&&(oe=void 0,Pe=[on]),ht.rejectWith(oe,Pe))}};it?gn():(u.Deferred.getErrorHook?gn.error=u.Deferred.getErrorHook():u.Deferred.getStackHook&&(gn.error=u.Deferred.getStackHook()),t.setTimeout(gn))}}return u.Deferred(function(it){a[0][3].add(H(0,it,T(N)?N:pe,it.notifyWith)),a[1][3].add(H(0,it,T(b)?b:pe)),a[2][3].add(H(0,it,T(S)?S:ee))}).promise()},promise:function(b){return b!=null?u.extend(b,p):p}},_={};return u.each(a,function(b,S){var N=S[2],I=S[5];p[S[1]]=N.add,I&&N.add(function(){h=I},a[3-b][2].disable,a[3-b][3].disable,a[0][2].lock,a[0][3].lock),N.add(S[3].fire),_[S[0]]=function(){return _[S[0]+"With"](this===_?void 0:this,arguments),this},_[S[0]+"With"]=N.fireWith}),p.promise(_),o&&o.call(_,_),_},when:function(o){var a=arguments.length,h=a,p=Array(h),_=s.call(arguments),b=u.Deferred(),S=function(N){return function(I){p[N]=this,_[N]=arguments.length>1?s.call(arguments):I,--a||b.resolveWith(p,_)}};if(a<=1&&(F(o,b.done(S(h)).resolve,b.reject,!a),b.state()==="pending"||T(_[h]&&_[h].then)))return b.then();for(;h--;)F(_[h],S(h),b.reject);return b.promise()}});var mn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(o,a){t.console&&t.console.warn&&o&&mn.test(o.name)&&t.console.warn("jQuery.Deferred exception: "+o.message,o.stack,a)},u.readyException=function(o){t.setTimeout(function(){throw o})};var ft=u.Deferred();u.fn.ready=function(o){return ft.then(o).catch(function(a){u.readyException(a)}),this},u.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(o!==!0&&--u.readyWait>0)&&ft.resolveWith(m,[u]))}}),u.ready.then=ft.then;function ue(){m.removeEventListener("DOMContentLoaded",ue),t.removeEventListener("load",ue),u.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?t.setTimeout(u.ready):(m.addEventListener("DOMContentLoaded",ue),t.addEventListener("load",ue));var Ot=function(o,a,h,p,_,b,S){var N=0,I=o.length,H=h==null;if(R(h)==="object"){_=!0;for(N in h)Ot(o,a,N,h[N],!0,b,S)}else if(p!==void 0&&(_=!0,T(p)||(S=!0),H&&(S?(a.call(o,p),a=null):(H=a,a=function(it,ht,J){return H.call(u(it),J)})),a))for(;N<I;N++)a(o[N],h,S?p:p.call(o[N],N,a(o[N],h)));return _?o:H?a.call(o):I?a(o[0],h):b},Ce=/^-ms-/,Ht=/-([a-z])/g;function D(o,a){return a.toUpperCase()}function E(o){return o.replace(Ce,"ms-").replace(Ht,D)}var $=function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType};function ut(){this.expando=u.expando+ut.uid++}ut.uid=1,ut.prototype={cache:function(o){var a=o[this.expando];return a||(a={},$(o)&&(o.nodeType?o[this.expando]=a:Object.defineProperty(o,this.expando,{value:a,configurable:!0}))),a},set:function(o,a,h){var p,_=this.cache(o);if(typeof a=="string")_[E(a)]=h;else for(p in a)_[E(p)]=a[p];return _},get:function(o,a){return a===void 0?this.cache(o):o[this.expando]&&o[this.expando][E(a)]},access:function(o,a,h){return a===void 0||a&&typeof a=="string"&&h===void 0?this.get(o,a):(this.set(o,a,h),h!==void 0?h:a)},remove:function(o,a){var h,p=o[this.expando];if(p!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(E):(a=E(a),a=a in p?[a]:a.match(Gt)||[]),h=a.length;h--;)delete p[a[h]];(a===void 0||u.isEmptyObject(p))&&(o.nodeType?o[this.expando]=void 0:delete o[this.expando])}},hasData:function(o){var a=o[this.expando];return a!==void 0&&!u.isEmptyObject(a)}};var K=new ut,st=new ut,Vt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Et=/[A-Z]/g;function Yt(o){return o==="true"?!0:o==="false"?!1:o==="null"?null:o===+o+""?+o:Vt.test(o)?JSON.parse(o):o}function Jt(o,a,h){var p;if(h===void 0&&o.nodeType===1)if(p="data-"+a.replace(Et,"-$&").toLowerCase(),h=o.getAttribute(p),typeof h=="string"){try{h=Yt(h)}catch{}st.set(o,a,h)}else h=void 0;return h}u.extend({hasData:function(o){return st.hasData(o)||K.hasData(o)},data:function(o,a,h){return st.access(o,a,h)},removeData:function(o,a){st.remove(o,a)},_data:function(o,a,h){return K.access(o,a,h)},_removeData:function(o,a){K.remove(o,a)}}),u.fn.extend({data:function(o,a){var h,p,_,b=this[0],S=b&&b.attributes;if(o===void 0){if(this.length&&(_=st.get(b),b.nodeType===1&&!K.get(b,"hasDataAttrs"))){for(h=S.length;h--;)S[h]&&(p=S[h].name,p.indexOf("data-")===0&&(p=E(p.slice(5)),Jt(b,p,_[p])));K.set(b,"hasDataAttrs",!0)}return _}return typeof o=="object"?this.each(function(){st.set(this,o)}):Ot(this,function(N){var I;if(b&&N===void 0)return I=st.get(b,o),I!==void 0||(I=Jt(b,o),I!==void 0)?I:void 0;this.each(function(){st.set(this,o,N)})},null,a,arguments.length>1,null,!0)},removeData:function(o){return this.each(function(){st.remove(this,o)})}}),u.extend({queue:function(o,a,h){var p;if(o)return a=(a||"fx")+"queue",p=K.get(o,a),h&&(!p||Array.isArray(h)?p=K.access(o,a,u.makeArray(h)):p.push(h)),p||[]},dequeue:function(o,a){a=a||"fx";var h=u.queue(o,a),p=h.length,_=h.shift(),b=u._queueHooks(o,a),S=function(){u.dequeue(o,a)};_==="inprogress"&&(_=h.shift(),p--),_&&(a==="fx"&&h.unshift("inprogress"),delete b.stop,_.call(o,S,b)),!p&&b&&b.empty.fire()},_queueHooks:function(o,a){var h=a+"queueHooks";return K.get(o,h)||K.access(o,h,{empty:u.Callbacks("once memory").add(function(){K.remove(o,[a+"queue",h])})})}}),u.fn.extend({queue:function(o,a){var h=2;return typeof o!="string"&&(a=o,o="fx",h--),arguments.length<h?u.queue(this[0],o):a===void 0?this:this.each(function(){var p=u.queue(this,o,a);u._queueHooks(this,o),o==="fx"&&p[0]!=="inprogress"&&u.dequeue(this,o)})},dequeue:function(o){return this.each(function(){u.dequeue(this,o)})},clearQueue:function(o){return this.queue(o||"fx",[])},promise:function(o,a){var h,p=1,_=u.Deferred(),b=this,S=this.length,N=function(){--p||_.resolveWith(b,[b])};for(typeof o!="string"&&(a=o,o=void 0),o=o||"fx";S--;)h=K.get(b[S],o+"queueHooks"),h&&h.empty&&(p++,h.empty.add(N));return N(),_.promise(a)}});var vt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ft=new RegExp("^(?:([+-])=|)("+vt+")([a-z%]*)$","i"),jt=["Top","Right","Bottom","Left"],Zt=m.documentElement,Nt=function(o){return u.contains(o.ownerDocument,o)},Se={composed:!0};Zt.getRootNode&&(Nt=function(o){return u.contains(o.ownerDocument,o)||o.getRootNode(Se)===o.ownerDocument});var le=function(o,a){return o=a||o,o.style.display==="none"||o.style.display===""&&Nt(o)&&u.css(o,"display")==="none"};function Fe(o,a,h,p){var _,b,S=20,N=p?function(){return p.cur()}:function(){return u.css(o,a,"")},I=N(),H=h&&h[3]||(u.cssNumber[a]?"":"px"),it=o.nodeType&&(u.cssNumber[a]||H!=="px"&&+I)&&Ft.exec(u.css(o,a));if(it&&it[3]!==H){for(I=I/2,H=H||it[3],it=+I||1;S--;)u.style(o,a,it+H),(1-b)*(1-(b=N()/I||.5))<=0&&(S=0),it=it/b;it=it*2,u.style(o,a,it+H),h=h||[]}return h&&(it=+it||+I||0,_=h[1]?it+(h[1]+1)*h[2]:+h[2],p&&(p.unit=H,p.start=it,p.end=_)),_}var G={};function Rt(o){var a,h=o.ownerDocument,p=o.nodeName,_=G[p];return _||(a=h.body.appendChild(h.createElement(p)),_=u.css(a,"display"),a.parentNode.removeChild(a),_==="none"&&(_="block"),G[p]=_,_)}function rt(o,a){for(var h,p,_=[],b=0,S=o.length;b<S;b++)p=o[b],p.style&&(h=p.style.display,a?(h==="none"&&(_[b]=K.get(p,"display")||null,_[b]||(p.style.display="")),p.style.display===""&&le(p)&&(_[b]=Rt(p))):h!=="none"&&(_[b]="none",K.set(p,"display",h)));for(b=0;b<S;b++)_[b]!=null&&(o[b].style.display=_[b]);return o}u.fn.extend({show:function(){return rt(this,!0)},hide:function(){return rt(this)},toggle:function(o){return typeof o=="boolean"?o?this.show():this.hide():this.each(function(){le(this)?u(this).show():u(this).hide()})}});var gt=/^(?:checkbox|radio)$/i,Lt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Pt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var o=m.createDocumentFragment(),a=o.appendChild(m.createElement("div")),h=m.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),a.appendChild(h),M.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,a.innerHTML="<option></option>",M.option=!!a.lastChild})();var $t={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$t.tbody=$t.tfoot=$t.colgroup=$t.caption=$t.thead,$t.th=$t.td,M.option||($t.optgroup=$t.option=[1,"<select multiple='multiple'>","</select>"]);function xe(o,a){var h;return typeof o.getElementsByTagName<"u"?h=o.getElementsByTagName(a||"*"):typeof o.querySelectorAll<"u"?h=o.querySelectorAll(a||"*"):h=[],a===void 0||a&&P(o,a)?u.merge([o],h):h}function tn(o,a){for(var h=0,p=o.length;h<p;h++)K.set(o[h],"globalEval",!a||K.get(a[h],"globalEval"))}var Ne=/<|&#?\w+;/;function Cn(o,a,h,p,_){for(var b,S,N,I,H,it,ht=a.createDocumentFragment(),J=[],_t=0,oe=o.length;_t<oe;_t++)if(b=o[_t],b||b===0)if(R(b)==="object")u.merge(J,b.nodeType?[b]:b);else if(!Ne.test(b))J.push(a.createTextNode(b));else{for(S=S||ht.appendChild(a.createElement("div")),N=(Lt.exec(b)||["",""])[1].toLowerCase(),I=$t[N]||$t._default,S.innerHTML=I[1]+u.htmlPrefilter(b)+I[2],it=I[0];it--;)S=S.lastChild;u.merge(J,S.childNodes),S=ht.firstChild,S.textContent=""}for(ht.textContent="",_t=0;b=J[_t++];){if(p&&u.inArray(b,p)>-1){_&&_.push(b);continue}if(H=Nt(b),S=xe(ht.appendChild(b),"script"),H&&tn(S),h)for(it=0;b=S[it++];)Pt.test(b.type||"")&&h.push(b)}return ht}var zn=/^([^.]*)(?:\.(.+)|)/;function _i(){return!0}function xi(){return!1}function $n(o,a,h,p,_,b){var S,N;if(typeof a=="object"){typeof h!="string"&&(p=p||h,h=void 0);for(N in a)$n(o,N,h,p,a[N],b);return o}if(p==null&&_==null?(_=h,p=h=void 0):_==null&&(typeof h=="string"?(_=p,p=void 0):(_=p,p=h,h=void 0)),_===!1)_=xi;else if(!_)return o;return b===1&&(S=_,_=function(I){return u().off(I),S.apply(this,arguments)},_.guid=S.guid||(S.guid=u.guid++)),o.each(function(){u.event.add(this,a,_,p,h)})}u.event={global:{},add:function(o,a,h,p,_){var b,S,N,I,H,it,ht,J,_t,oe,Pe,me=K.get(o);if($(o))for(h.handler&&(b=h,h=b.handler,_=b.selector),_&&u.find.matchesSelector(Zt,_),h.guid||(h.guid=u.guid++),(I=me.events)||(I=me.events=Object.create(null)),(S=me.handle)||(S=me.handle=function(gn){return typeof u<"u"&&u.event.triggered!==gn.type?u.event.dispatch.apply(o,arguments):void 0}),a=(a||"").match(Gt)||[""],H=a.length;H--;)N=zn.exec(a[H])||[],_t=Pe=N[1],oe=(N[2]||"").split(".").sort(),_t&&(ht=u.event.special[_t]||{},_t=(_?ht.delegateType:ht.bindType)||_t,ht=u.event.special[_t]||{},it=u.extend({type:_t,origType:Pe,data:p,handler:h,guid:h.guid,selector:_,needsContext:_&&u.expr.match.needsContext.test(_),namespace:oe.join(".")},b),(J=I[_t])||(J=I[_t]=[],J.delegateCount=0,(!ht.setup||ht.setup.call(o,p,oe,S)===!1)&&o.addEventListener&&o.addEventListener(_t,S)),ht.add&&(ht.add.call(o,it),it.handler.guid||(it.handler.guid=h.guid)),_?J.splice(J.delegateCount++,0,it):J.push(it),u.event.global[_t]=!0)},remove:function(o,a,h,p,_){var b,S,N,I,H,it,ht,J,_t,oe,Pe,me=K.hasData(o)&&K.get(o);if(!(!me||!(I=me.events))){for(a=(a||"").match(Gt)||[""],H=a.length;H--;){if(N=zn.exec(a[H])||[],_t=Pe=N[1],oe=(N[2]||"").split(".").sort(),!_t){for(_t in I)u.event.remove(o,_t+a[H],h,p,!0);continue}for(ht=u.event.special[_t]||{},_t=(p?ht.delegateType:ht.bindType)||_t,J=I[_t]||[],N=N[2]&&new RegExp("(^|\\.)"+oe.join("\\.(?:.*\\.|)")+"(\\.|$)"),S=b=J.length;b--;)it=J[b],(_||Pe===it.origType)&&(!h||h.guid===it.guid)&&(!N||N.test(it.namespace))&&(!p||p===it.selector||p==="**"&&it.selector)&&(J.splice(b,1),it.selector&&J.delegateCount--,ht.remove&&ht.remove.call(o,it));S&&!J.length&&((!ht.teardown||ht.teardown.call(o,oe,me.handle)===!1)&&u.removeEvent(o,_t,me.handle),delete I[_t])}u.isEmptyObject(I)&&K.remove(o,"handle events")}},dispatch:function(o){var a,h,p,_,b,S,N=new Array(arguments.length),I=u.event.fix(o),H=(K.get(this,"events")||Object.create(null))[I.type]||[],it=u.event.special[I.type]||{};for(N[0]=I,a=1;a<arguments.length;a++)N[a]=arguments[a];if(I.delegateTarget=this,!(it.preDispatch&&it.preDispatch.call(this,I)===!1)){for(S=u.event.handlers.call(this,I,H),a=0;(_=S[a++])&&!I.isPropagationStopped();)for(I.currentTarget=_.elem,h=0;(b=_.handlers[h++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||b.namespace===!1||I.rnamespace.test(b.namespace))&&(I.handleObj=b,I.data=b.data,p=((u.event.special[b.origType]||{}).handle||b.handler).apply(_.elem,N),p!==void 0&&(I.result=p)===!1&&(I.preventDefault(),I.stopPropagation()));return it.postDispatch&&it.postDispatch.call(this,I),I.result}},handlers:function(o,a){var h,p,_,b,S,N=[],I=a.delegateCount,H=o.target;if(I&&H.nodeType&&!(o.type==="click"&&o.button>=1)){for(;H!==this;H=H.parentNode||this)if(H.nodeType===1&&!(o.type==="click"&&H.disabled===!0)){for(b=[],S={},h=0;h<I;h++)p=a[h],_=p.selector+" ",S[_]===void 0&&(S[_]=p.needsContext?u(_,this).index(H)>-1:u.find(_,this,null,[H]).length),S[_]&&b.push(p);b.length&&N.push({elem:H,handlers:b})}}return H=this,I<a.length&&N.push({elem:H,handlers:a.slice(I)}),N},addProp:function(o,a){Object.defineProperty(u.Event.prototype,o,{enumerable:!0,configurable:!0,get:T(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[o]},set:function(h){Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(o){return o[u.expando]?o:new u.Event(o)},special:{load:{noBubble:!0},click:{setup:function(o){var a=this||o;return gt.test(a.type)&&a.click&&P(a,"input")&&Vi(a,"click",!0),!1},trigger:function(o){var a=this||o;return gt.test(a.type)&&a.click&&P(a,"input")&&Vi(a,"click"),!0},_default:function(o){var a=o.target;return gt.test(a.type)&&a.click&&P(a,"input")&&K.get(a,"click")||P(a,"a")}},beforeunload:{postDispatch:function(o){o.result!==void 0&&o.originalEvent&&(o.originalEvent.returnValue=o.result)}}}};function Vi(o,a,h){if(!h){K.get(o,a)===void 0&&u.event.add(o,a,_i);return}K.set(o,a,!1),u.event.add(o,a,{namespace:!1,handler:function(p){var _,b=K.get(this,a);if(p.isTrigger&1&&this[a]){if(b)(u.event.special[a]||{}).delegateType&&p.stopPropagation();else if(b=s.call(arguments),K.set(this,a,b),this[a](),_=K.get(this,a),K.set(this,a,!1),b!==_)return p.stopImmediatePropagation(),p.preventDefault(),_}else b&&(K.set(this,a,u.event.trigger(b[0],b.slice(1),this)),p.stopPropagation(),p.isImmediatePropagationStopped=_i)}})}u.removeEvent=function(o,a,h){o.removeEventListener&&o.removeEventListener(a,h)},u.Event=function(o,a){if(!(this instanceof u.Event))return new u.Event(o,a);o&&o.type?(this.originalEvent=o,this.type=o.type,this.isDefaultPrevented=o.defaultPrevented||o.defaultPrevented===void 0&&o.returnValue===!1?_i:xi,this.target=o.target&&o.target.nodeType===3?o.target.parentNode:o.target,this.currentTarget=o.currentTarget,this.relatedTarget=o.relatedTarget):this.type=o,a&&u.extend(this,a),this.timeStamp=o&&o.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:xi,isPropagationStopped:xi,isImmediatePropagationStopped:xi,isSimulated:!1,preventDefault:function(){var o=this.originalEvent;this.isDefaultPrevented=_i,o&&!this.isSimulated&&o.preventDefault()},stopPropagation:function(){var o=this.originalEvent;this.isPropagationStopped=_i,o&&!this.isSimulated&&o.stopPropagation()},stopImmediatePropagation:function(){var o=this.originalEvent;this.isImmediatePropagationStopped=_i,o&&!this.isSimulated&&o.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(o,a){function h(p){if(m.documentMode){var _=K.get(this,"handle"),b=u.event.fix(p);b.type=p.type==="focusin"?"focus":"blur",b.isSimulated=!0,_(p),b.target===b.currentTarget&&_(b)}else u.event.simulate(a,p.target,u.event.fix(p))}u.event.special[o]={setup:function(){var p;if(Vi(this,o,!0),m.documentMode)p=K.get(this,a),p||this.addEventListener(a,h),K.set(this,a,(p||0)+1);else return!1},trigger:function(){return Vi(this,o),!0},teardown:function(){var p;if(m.documentMode)p=K.get(this,a)-1,p?K.set(this,a,p):(this.removeEventListener(a,h),K.remove(this,a));else return!1},_default:function(p){return K.get(p.target,o)},delegateType:a},u.event.special[a]={setup:function(){var p=this.ownerDocument||this.document||this,_=m.documentMode?this:p,b=K.get(_,a);b||(m.documentMode?this.addEventListener(a,h):p.addEventListener(o,h,!0)),K.set(_,a,(b||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,_=m.documentMode?this:p,b=K.get(_,a)-1;b?K.set(_,a,b):(m.documentMode?this.removeEventListener(a,h):p.removeEventListener(o,h,!0),K.remove(_,a))}}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(o,a){u.event.special[o]={delegateType:a,bindType:a,handle:function(h){var p,_=this,b=h.relatedTarget,S=h.handleObj;return(!b||b!==_&&!u.contains(_,b))&&(h.type=S.origType,p=S.handler.apply(this,arguments),h.type=a),p}}}),u.fn.extend({on:function(o,a,h,p){return $n(this,o,a,h,p)},one:function(o,a,h,p){return $n(this,o,a,h,p,1)},off:function(o,a,h){var p,_;if(o&&o.preventDefault&&o.handleObj)return p=o.handleObj,u(o.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof o=="object"){for(_ in o)this.off(_,a,o[_]);return this}return(a===!1||typeof a=="function")&&(h=a,a=void 0),h===!1&&(h=xi),this.each(function(){u.event.remove(this,o,h,a)})}});var xo=/<script|<style|<link/i,bo=/checked\s*(?:[^=]|=\s*.checked.)/i,kr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Ss(o,a){return P(o,"table")&&P(a.nodeType!==11?a:a.firstChild,"tr")&&u(o).children("tbody")[0]||o}function Br(o){return o.type=(o.getAttribute("type")!==null)+"/"+o.type,o}function yo(o){return(o.type||"").slice(0,5)==="true/"?o.type=o.type.slice(5):o.removeAttribute("type"),o}function Es(o,a){var h,p,_,b,S,N,I;if(a.nodeType===1){if(K.hasData(o)&&(b=K.get(o),I=b.events,I)){K.remove(a,"handle events");for(_ in I)for(h=0,p=I[_].length;h<p;h++)u.event.add(a,_,I[_][h])}st.hasData(o)&&(S=st.access(o),N=u.extend({},S),st.set(a,N))}}function Na(o,a){var h=a.nodeName.toLowerCase();h==="input"&&gt.test(o.type)?a.checked=o.checked:(h==="input"||h==="textarea")&&(a.defaultValue=o.defaultValue)}function zi(o,a,h,p){a=l(a);var _,b,S,N,I,H,it=0,ht=o.length,J=ht-1,_t=a[0],oe=T(_t);if(oe||ht>1&&typeof _t=="string"&&!M.checkClone&&bo.test(_t))return o.each(function(Pe){var me=o.eq(Pe);oe&&(a[0]=_t.call(this,Pe,me.html())),zi(me,a,h,p)});if(ht&&(_=Cn(a,o[0].ownerDocument,!1,o,p),b=_.firstChild,_.childNodes.length===1&&(_=b),b||p)){for(S=u.map(xe(_,"script"),Br),N=S.length;it<ht;it++)I=_,it!==J&&(I=u.clone(I,!0,!0),N&&u.merge(S,xe(I,"script"))),h.call(o[it],I,it);if(N)for(H=S[S.length-1].ownerDocument,u.map(S,yo),it=0;it<N;it++)I=S[it],Pt.test(I.type||"")&&!K.access(I,"globalEval")&&u.contains(H,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?u._evalUrl&&!I.noModule&&u._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},H):U(I.textContent.replace(kr,""),I,H))}return o}function wo(o,a,h){for(var p,_=a?u.filter(a,o):o,b=0;(p=_[b])!=null;b++)!h&&p.nodeType===1&&u.cleanData(xe(p)),p.parentNode&&(h&&Nt(p)&&tn(xe(p,"script")),p.parentNode.removeChild(p));return o}u.extend({htmlPrefilter:function(o){return o},clone:function(o,a,h){var p,_,b,S,N=o.cloneNode(!0),I=Nt(o);if(!M.noCloneChecked&&(o.nodeType===1||o.nodeType===11)&&!u.isXMLDoc(o))for(S=xe(N),b=xe(o),p=0,_=b.length;p<_;p++)Na(b[p],S[p]);if(a)if(h)for(b=b||xe(o),S=S||xe(N),p=0,_=b.length;p<_;p++)Es(b[p],S[p]);else Es(o,N);return S=xe(N,"script"),S.length>0&&tn(S,!I&&xe(o,"script")),N},cleanData:function(o){for(var a,h,p,_=u.event.special,b=0;(h=o[b])!==void 0;b++)if($(h)){if(a=h[K.expando]){if(a.events)for(p in a.events)_[p]?u.event.remove(h,p):u.removeEvent(h,p,a.handle);h[K.expando]=void 0}h[st.expando]&&(h[st.expando]=void 0)}}}),u.fn.extend({detach:function(o){return wo(this,o,!0)},remove:function(o){return wo(this,o)},text:function(o){return Ot(this,function(a){return a===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,o,arguments.length)},append:function(){return zi(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=Ss(this,o);a.appendChild(o)}})},prepend:function(){return zi(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=Ss(this,o);a.insertBefore(o,a.firstChild)}})},before:function(){return zi(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this)})},after:function(){return zi(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling)})},empty:function(){for(var o,a=0;(o=this[a])!=null;a++)o.nodeType===1&&(u.cleanData(xe(o,!1)),o.textContent="");return this},clone:function(o,a){return o=o??!1,a=a??o,this.map(function(){return u.clone(this,o,a)})},html:function(o){return Ot(this,function(a){var h=this[0]||{},p=0,_=this.length;if(a===void 0&&h.nodeType===1)return h.innerHTML;if(typeof a=="string"&&!xo.test(a)&&!$t[(Lt.exec(a)||["",""])[1].toLowerCase()]){a=u.htmlPrefilter(a);try{for(;p<_;p++)h=this[p]||{},h.nodeType===1&&(u.cleanData(xe(h,!1)),h.innerHTML=a);h=0}catch{}}h&&this.empty().append(a)},null,o,arguments.length)},replaceWith:function(){var o=[];return zi(this,arguments,function(a){var h=this.parentNode;u.inArray(this,o)<0&&(u.cleanData(xe(this)),h&&h.replaceChild(a,this))},o)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,a){u.fn[o]=function(h){for(var p,_=[],b=u(h),S=b.length-1,N=0;N<=S;N++)p=N===S?this:this.clone(!0),u(b[N])[a](p),c.apply(_,p.get());return this.pushStack(_)}});var Ts=new RegExp("^("+vt+")(?!px)[a-z%]+$","i"),Cs=/^--/,Vr=function(o){var a=o.ownerDocument.defaultView;return(!a||!a.opener)&&(a=t),a.getComputedStyle(o)},C=function(o,a,h){var p,_,b={};for(_ in a)b[_]=o.style[_],o.style[_]=a[_];p=h.call(o);for(_ in a)o.style[_]=b[_];return p},j=new RegExp(jt.join("|"),"i");(function(){function o(){if(H){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",H.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Zt.appendChild(I).appendChild(H);var it=t.getComputedStyle(H);h=it.top!=="1%",N=a(it.marginLeft)===12,H.style.right="60%",b=a(it.right)===36,p=a(it.width)===36,H.style.position="absolute",_=a(H.offsetWidth/3)===12,Zt.removeChild(I),H=null}}function a(it){return Math.round(parseFloat(it))}var h,p,_,b,S,N,I=m.createElement("div"),H=m.createElement("div");H.style&&(H.style.backgroundClip="content-box",H.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=H.style.backgroundClip==="content-box",u.extend(M,{boxSizingReliable:function(){return o(),p},pixelBoxStyles:function(){return o(),b},pixelPosition:function(){return o(),h},reliableMarginLeft:function(){return o(),N},scrollboxSize:function(){return o(),_},reliableTrDimensions:function(){var it,ht,J,_t;return S==null&&(it=m.createElement("table"),ht=m.createElement("tr"),J=m.createElement("div"),it.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ht.style.cssText="box-sizing:content-box;border:1px solid",ht.style.height="1px",J.style.height="9px",J.style.display="block",Zt.appendChild(it).appendChild(ht).appendChild(J),_t=t.getComputedStyle(ht),S=parseInt(_t.height,10)+parseInt(_t.borderTopWidth,10)+parseInt(_t.borderBottomWidth,10)===ht.offsetHeight,Zt.removeChild(it)),S}}))})();function Q(o,a,h){var p,_,b,S,N=Cs.test(a),I=o.style;return h=h||Vr(o),h&&(S=h.getPropertyValue(a)||h[a],N&&S&&(S=S.replace(dt,"$1")||void 0),S===""&&!Nt(o)&&(S=u.style(o,a)),!M.pixelBoxStyles()&&Ts.test(S)&&j.test(a)&&(p=I.width,_=I.minWidth,b=I.maxWidth,I.minWidth=I.maxWidth=I.width=S,S=h.width,I.width=p,I.minWidth=_,I.maxWidth=b)),S!==void 0?S+"":S}function et(o,a){return{get:function(){if(o()){delete this.get;return}return(this.get=a).apply(this,arguments)}}}var X=["Webkit","Moz","ms"],xt=m.createElement("div").style,Ct={};function kt(o){for(var a=o[0].toUpperCase()+o.slice(1),h=X.length;h--;)if(o=X[h]+a,o in xt)return o}function Bt(o){var a=u.cssProps[o]||Ct[o];return a||(o in xt?o:Ct[o]=kt(o)||o)}var re=/^(none|table(?!-c[ea]).+)/,ne={position:"absolute",visibility:"hidden",display:"block"},qt={letterSpacing:"0",fontWeight:"400"};function Ee(o,a,h){var p=Ft.exec(a);return p?Math.max(0,p[2]-(h||0))+(p[3]||"px"):a}function Ae(o,a,h,p,_,b){var S=a==="width"?1:0,N=0,I=0,H=0;if(h===(p?"border":"content"))return 0;for(;S<4;S+=2)h==="margin"&&(H+=u.css(o,h+jt[S],!0,_)),p?(h==="content"&&(I-=u.css(o,"padding"+jt[S],!0,_)),h!=="margin"&&(I-=u.css(o,"border"+jt[S]+"Width",!0,_))):(I+=u.css(o,"padding"+jt[S],!0,_),h!=="padding"?I+=u.css(o,"border"+jt[S]+"Width",!0,_):N+=u.css(o,"border"+jt[S]+"Width",!0,_));return!p&&b>=0&&(I+=Math.max(0,Math.ceil(o["offset"+a[0].toUpperCase()+a.slice(1)]-b-I-N-.5))||0),I+H}function Ke(o,a,h){var p=Vr(o),_=!M.boxSizingReliable()||h,b=_&&u.css(o,"boxSizing",!1,p)==="border-box",S=b,N=Q(o,a,p),I="offset"+a[0].toUpperCase()+a.slice(1);if(Ts.test(N)){if(!h)return N;N="auto"}return(!M.boxSizingReliable()&&b||!M.reliableTrDimensions()&&P(o,"tr")||N==="auto"||!parseFloat(N)&&u.css(o,"display",!1,p)==="inline")&&o.getClientRects().length&&(b=u.css(o,"boxSizing",!1,p)==="border-box",S=I in o,S&&(N=o[I])),N=parseFloat(N)||0,N+Ae(o,a,h||(b?"border":"content"),S,p,N)+"px"}u.extend({cssHooks:{opacity:{get:function(o,a){if(a){var h=Q(o,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(o,a,h,p){if(!(!o||o.nodeType===3||o.nodeType===8||!o.style)){var _,b,S,N=E(a),I=Cs.test(a),H=o.style;if(I||(a=Bt(N)),S=u.cssHooks[a]||u.cssHooks[N],h!==void 0){if(b=typeof h,b==="string"&&(_=Ft.exec(h))&&_[1]&&(h=Fe(o,a,_),b="number"),h==null||h!==h)return;b==="number"&&!I&&(h+=_&&_[3]||(u.cssNumber[N]?"":"px")),!M.clearCloneStyle&&h===""&&a.indexOf("background")===0&&(H[a]="inherit"),(!S||!("set"in S)||(h=S.set(o,h,p))!==void 0)&&(I?H.setProperty(a,h):H[a]=h)}else return S&&"get"in S&&(_=S.get(o,!1,p))!==void 0?_:H[a]}},css:function(o,a,h,p){var _,b,S,N=E(a),I=Cs.test(a);return I||(a=Bt(N)),S=u.cssHooks[a]||u.cssHooks[N],S&&"get"in S&&(_=S.get(o,!0,h)),_===void 0&&(_=Q(o,a,p)),_==="normal"&&a in qt&&(_=qt[a]),h===""||h?(b=parseFloat(_),h===!0||isFinite(b)?b||0:_):_}}),u.each(["height","width"],function(o,a){u.cssHooks[a]={get:function(h,p,_){if(p)return re.test(u.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?C(h,ne,function(){return Ke(h,a,_)}):Ke(h,a,_)},set:function(h,p,_){var b,S=Vr(h),N=!M.scrollboxSize()&&S.position==="absolute",I=N||_,H=I&&u.css(h,"boxSizing",!1,S)==="border-box",it=_?Ae(h,a,_,H,S):0;return H&&N&&(it-=Math.ceil(h["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(S[a])-Ae(h,a,"border",!1,S)-.5)),it&&(b=Ft.exec(p))&&(b[3]||"px")!=="px"&&(h.style[a]=p,p=u.css(h,a)),Ee(h,p,it)}}}),u.cssHooks.marginLeft=et(M.reliableMarginLeft,function(o,a){if(a)return(parseFloat(Q(o,"marginLeft"))||o.getBoundingClientRect().left-C(o,{marginLeft:0},function(){return o.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(o,a){u.cssHooks[o+a]={expand:function(h){for(var p=0,_={},b=typeof h=="string"?h.split(" "):[h];p<4;p++)_[o+jt[p]+a]=b[p]||b[p-2]||b[0];return _}},o!=="margin"&&(u.cssHooks[o+a].set=Ee)}),u.fn.extend({css:function(o,a){return Ot(this,function(h,p,_){var b,S,N={},I=0;if(Array.isArray(p)){for(b=Vr(h),S=p.length;I<S;I++)N[p[I]]=u.css(h,p[I],!1,b);return N}return _!==void 0?u.style(h,p,_):u.css(h,p)},o,a,arguments.length>1)}});function be(o,a,h,p,_){return new be.prototype.init(o,a,h,p,_)}u.Tween=be,be.prototype={constructor:be,init:function(o,a,h,p,_,b){this.elem=o,this.prop=h,this.easing=_||u.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=p,this.unit=b||(u.cssNumber[h]?"":"px")},cur:function(){var o=be.propHooks[this.prop];return o&&o.get?o.get(this):be.propHooks._default.get(this)},run:function(o){var a,h=be.propHooks[this.prop];return this.options.duration?this.pos=a=u.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=a=o,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):be.propHooks._default.set(this),this}},be.prototype.init.prototype=be.prototype,be.propHooks={_default:{get:function(o){var a;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(a=u.css(o.elem,o.prop,""),!a||a==="auto"?0:a)},set:function(o){u.fx.step[o.prop]?u.fx.step[o.prop](o):o.elem.nodeType===1&&(u.cssHooks[o.prop]||o.elem.style[Bt(o.prop)]!=null)?u.style(o.elem,o.prop,o.now+o.unit):o.elem[o.prop]=o.now}}},be.propHooks.scrollTop=be.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},u.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},u.fx=be.prototype.init,u.fx.step={};var ve,Xt,sn=/^(?:toggle|show|hide)$/,Le=/queueHooks$/;function yn(){Xt&&(m.hidden===!1&&t.requestAnimationFrame?t.requestAnimationFrame(yn):t.setTimeout(yn,u.fx.interval),u.fx.tick())}function bi(){return t.setTimeout(function(){ve=void 0}),ve=Date.now()}function hn(o,a){var h,p=0,_={height:o};for(a=a?1:0;p<4;p+=2-a)h=jt[p],_["margin"+h]=_["padding"+h]=o;return a&&(_.opacity=_.width=o),_}function Hi(o,a,h){for(var p,_=(Ye.tweeners[a]||[]).concat(Ye.tweeners["*"]),b=0,S=_.length;b<S;b++)if(p=_[b].call(h,a,o))return p}function Ge(o,a,h){var p,_,b,S,N,I,H,it,ht="width"in a||"height"in a,J=this,_t={},oe=o.style,Pe=o.nodeType&&le(o),me=K.get(o,"fxshow");h.queue||(S=u._queueHooks(o,"fx"),S.unqueued==null&&(S.unqueued=0,N=S.empty.fire,S.empty.fire=function(){S.unqueued||N()}),S.unqueued++,J.always(function(){J.always(function(){S.unqueued--,u.queue(o,"fx").length||S.empty.fire()})}));for(p in a)if(_=a[p],sn.test(_)){if(delete a[p],b=b||_==="toggle",_===(Pe?"hide":"show"))if(_==="show"&&me&&me[p]!==void 0)Pe=!0;else continue;_t[p]=me&&me[p]||u.style(o,p)}if(I=!u.isEmptyObject(a),!(!I&&u.isEmptyObject(_t))){ht&&o.nodeType===1&&(h.overflow=[oe.overflow,oe.overflowX,oe.overflowY],H=me&&me.display,H==null&&(H=K.get(o,"display")),it=u.css(o,"display"),it==="none"&&(H?it=H:(rt([o],!0),H=o.style.display||H,it=u.css(o,"display"),rt([o]))),(it==="inline"||it==="inline-block"&&H!=null)&&u.css(o,"float")==="none"&&(I||(J.done(function(){oe.display=H}),H==null&&(it=oe.display,H=it==="none"?"":it)),oe.display="inline-block")),h.overflow&&(oe.overflow="hidden",J.always(function(){oe.overflow=h.overflow[0],oe.overflowX=h.overflow[1],oe.overflowY=h.overflow[2]})),I=!1;for(p in _t)I||(me?"hidden"in me&&(Pe=me.hidden):me=K.access(o,"fxshow",{display:H}),b&&(me.hidden=!Pe),Pe&&rt([o],!0),J.done(function(){Pe||rt([o]),K.remove(o,"fxshow");for(p in _t)u.style(o,p,_t[p])})),I=Hi(Pe?me[p]:0,p,J),p in me||(me[p]=I.start,Pe&&(I.end=I.start,I.start=0))}}function An(o,a){var h,p,_,b,S;for(h in o)if(p=E(h),_=a[p],b=o[h],Array.isArray(b)&&(_=b[1],b=o[h]=b[0]),h!==p&&(o[p]=b,delete o[h]),S=u.cssHooks[p],S&&"expand"in S){b=S.expand(b),delete o[p];for(h in b)h in o||(o[h]=b[h],a[h]=_)}else a[p]=_}function Ye(o,a,h){var p,_,b=0,S=Ye.prefilters.length,N=u.Deferred().always(function(){delete I.elem}),I=function(){if(_)return!1;for(var ht=ve||bi(),J=Math.max(0,H.startTime+H.duration-ht),_t=J/H.duration||0,oe=1-_t,Pe=0,me=H.tweens.length;Pe<me;Pe++)H.tweens[Pe].run(oe);return N.notifyWith(o,[H,oe,J]),oe<1&&me?J:(me||N.notifyWith(o,[H,1,0]),N.resolveWith(o,[H]),!1)},H=N.promise({elem:o,props:u.extend({},a),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},h),originalProperties:a,originalOptions:h,startTime:ve||bi(),duration:h.duration,tweens:[],createTween:function(ht,J){var _t=u.Tween(o,H.opts,ht,J,H.opts.specialEasing[ht]||H.opts.easing);return H.tweens.push(_t),_t},stop:function(ht){var J=0,_t=ht?H.tweens.length:0;if(_)return this;for(_=!0;J<_t;J++)H.tweens[J].run(1);return ht?(N.notifyWith(o,[H,1,0]),N.resolveWith(o,[H,ht])):N.rejectWith(o,[H,ht]),this}}),it=H.props;for(An(it,H.opts.specialEasing);b<S;b++)if(p=Ye.prefilters[b].call(H,o,it,H.opts),p)return T(p.stop)&&(u._queueHooks(H.elem,H.opts.queue).stop=p.stop.bind(p)),p;return u.map(it,Hi,H),T(H.opts.start)&&H.opts.start.call(o,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),u.fx.timer(u.extend(I,{elem:o,anim:H,queue:H.opts.queue})),H}u.Animation=u.extend(Ye,{tweeners:{"*":[function(o,a){var h=this.createTween(o,a);return Fe(h.elem,o,Ft.exec(a),h),h}]},tweener:function(o,a){T(o)?(a=o,o=["*"]):o=o.match(Gt);for(var h,p=0,_=o.length;p<_;p++)h=o[p],Ye.tweeners[h]=Ye.tweeners[h]||[],Ye.tweeners[h].unshift(a)},prefilters:[Ge],prefilter:function(o,a){a?Ye.prefilters.unshift(o):Ye.prefilters.push(o)}}),u.speed=function(o,a,h){var p=o&&typeof o=="object"?u.extend({},o):{complete:h||!h&&a||T(o)&&o,duration:o,easing:h&&a||a&&!T(a)&&a};return u.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in u.fx.speeds?p.duration=u.fx.speeds[p.duration]:p.duration=u.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){T(p.old)&&p.old.call(this),p.queue&&u.dequeue(this,p.queue)},p},u.fn.extend({fadeTo:function(o,a,h,p){return this.filter(le).css("opacity",0).show().end().animate({opacity:a},o,h,p)},animate:function(o,a,h,p){var _=u.isEmptyObject(o),b=u.speed(a,h,p),S=function(){var N=Ye(this,u.extend({},o),b);(_||K.get(this,"finish"))&&N.stop(!0)};return S.finish=S,_||b.queue===!1?this.each(S):this.queue(b.queue,S)},stop:function(o,a,h){var p=function(_){var b=_.stop;delete _.stop,b(h)};return typeof o!="string"&&(h=a,a=o,o=void 0),a&&this.queue(o||"fx",[]),this.each(function(){var _=!0,b=o!=null&&o+"queueHooks",S=u.timers,N=K.get(this);if(b)N[b]&&N[b].stop&&p(N[b]);else for(b in N)N[b]&&N[b].stop&&Le.test(b)&&p(N[b]);for(b=S.length;b--;)S[b].elem===this&&(o==null||S[b].queue===o)&&(S[b].anim.stop(h),_=!1,S.splice(b,1));(_||!h)&&u.dequeue(this,o)})},finish:function(o){return o!==!1&&(o=o||"fx"),this.each(function(){var a,h=K.get(this),p=h[o+"queue"],_=h[o+"queueHooks"],b=u.timers,S=p?p.length:0;for(h.finish=!0,u.queue(this,o,[]),_&&_.stop&&_.stop.call(this,!0),a=b.length;a--;)b[a].elem===this&&b[a].queue===o&&(b[a].anim.stop(!0),b.splice(a,1));for(a=0;a<S;a++)p[a]&&p[a].finish&&p[a].finish.call(this);delete h.finish})}}),u.each(["toggle","show","hide"],function(o,a){var h=u.fn[a];u.fn[a]=function(p,_,b){return p==null||typeof p=="boolean"?h.apply(this,arguments):this.animate(hn(a,!0),p,_,b)}}),u.each({slideDown:hn("show"),slideUp:hn("hide"),slideToggle:hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(o,a){u.fn[o]=function(h,p,_){return this.animate(a,h,p,_)}}),u.timers=[],u.fx.tick=function(){var o,a=0,h=u.timers;for(ve=Date.now();a<h.length;a++)o=h[a],!o()&&h[a]===o&&h.splice(a--,1);h.length||u.fx.stop(),ve=void 0},u.fx.timer=function(o){u.timers.push(o),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Xt||(Xt=!0,yn())},u.fx.stop=function(){Xt=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(o,a){return o=u.fx&&u.fx.speeds[o]||o,a=a||"fx",this.queue(a,function(h,p){var _=t.setTimeout(h,o);p.stop=function(){t.clearTimeout(_)}})},function(){var o=m.createElement("input"),a=m.createElement("select"),h=a.appendChild(m.createElement("option"));o.type="checkbox",M.checkOn=o.value!=="",M.optSelected=h.selected,o=m.createElement("input"),o.value="t",o.type="radio",M.radioValue=o.value==="t"}();var dn,en=u.expr.attrHandle;u.fn.extend({attr:function(o,a){return Ot(this,u.attr,o,a,arguments.length>1)},removeAttr:function(o){return this.each(function(){u.removeAttr(this,o)})}}),u.extend({attr:function(o,a,h){var p,_,b=o.nodeType;if(!(b===3||b===8||b===2)){if(typeof o.getAttribute>"u")return u.prop(o,a,h);if((b!==1||!u.isXMLDoc(o))&&(_=u.attrHooks[a.toLowerCase()]||(u.expr.match.bool.test(a)?dn:void 0)),h!==void 0){if(h===null){u.removeAttr(o,a);return}return _&&"set"in _&&(p=_.set(o,h,a))!==void 0?p:(o.setAttribute(a,h+""),h)}return _&&"get"in _&&(p=_.get(o,a))!==null?p:(p=u.find.attr(o,a),p??void 0)}},attrHooks:{type:{set:function(o,a){if(!M.radioValue&&a==="radio"&&P(o,"input")){var h=o.value;return o.setAttribute("type",a),h&&(o.value=h),a}}}},removeAttr:function(o,a){var h,p=0,_=a&&a.match(Gt);if(_&&o.nodeType===1)for(;h=_[p++];)o.removeAttribute(h)}}),dn={set:function(o,a,h){return a===!1?u.removeAttr(o,h):o.setAttribute(h,h),h}},u.each(u.expr.match.bool.source.match(/\w+/g),function(o,a){var h=en[a]||u.find.attr;en[a]=function(p,_,b){var S,N,I=_.toLowerCase();return b||(N=en[I],en[I]=S,S=h(p,_,b)!=null?I:null,en[I]=N),S}});var As=/^(?:input|select|textarea|button)$/i,yi=/^(?:a|area)$/i;u.fn.extend({prop:function(o,a){return Ot(this,u.prop,o,a,arguments.length>1)},removeProp:function(o){return this.each(function(){delete this[u.propFix[o]||o]})}}),u.extend({prop:function(o,a,h){var p,_,b=o.nodeType;if(!(b===3||b===8||b===2))return(b!==1||!u.isXMLDoc(o))&&(a=u.propFix[a]||a,_=u.propHooks[a]),h!==void 0?_&&"set"in _&&(p=_.set(o,h,a))!==void 0?p:o[a]=h:_&&"get"in _&&(p=_.get(o,a))!==null?p:o[a]},propHooks:{tabIndex:{get:function(o){var a=u.find.attr(o,"tabindex");return a?parseInt(a,10):As.test(o.nodeName)||yi.test(o.nodeName)&&o.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(u.propHooks.selected={get:function(o){var a=o.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(o){var a=o.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function hr(o){var a=o.match(Gt)||[];return a.join(" ")}function dr(o){return o.getAttribute&&o.getAttribute("class")||""}function Oa(o){return Array.isArray(o)?o:typeof o=="string"?o.match(Gt)||[]:[]}u.fn.extend({addClass:function(o){var a,h,p,_,b,S;return T(o)?this.each(function(N){u(this).addClass(o.call(this,N,dr(this)))}):(a=Oa(o),a.length?this.each(function(){if(p=dr(this),h=this.nodeType===1&&" "+hr(p)+" ",h){for(b=0;b<a.length;b++)_=a[b],h.indexOf(" "+_+" ")<0&&(h+=_+" ");S=hr(h),p!==S&&this.setAttribute("class",S)}}):this)},removeClass:function(o){var a,h,p,_,b,S;return T(o)?this.each(function(N){u(this).removeClass(o.call(this,N,dr(this)))}):arguments.length?(a=Oa(o),a.length?this.each(function(){if(p=dr(this),h=this.nodeType===1&&" "+hr(p)+" ",h){for(b=0;b<a.length;b++)for(_=a[b];h.indexOf(" "+_+" ")>-1;)h=h.replace(" "+_+" "," ");S=hr(h),p!==S&&this.setAttribute("class",S)}}):this):this.attr("class","")},toggleClass:function(o,a){var h,p,_,b,S=typeof o,N=S==="string"||Array.isArray(o);return T(o)?this.each(function(I){u(this).toggleClass(o.call(this,I,dr(this),a),a)}):typeof a=="boolean"&&N?a?this.addClass(o):this.removeClass(o):(h=Oa(o),this.each(function(){if(N)for(b=u(this),_=0;_<h.length;_++)p=h[_],b.hasClass(p)?b.removeClass(p):b.addClass(p);else(o===void 0||S==="boolean")&&(p=dr(this),p&&K.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||o===!1?"":K.get(this,"__className__")||""))}))},hasClass:function(o){var a,h,p=0;for(a=" "+o+" ";h=this[p++];)if(h.nodeType===1&&(" "+hr(dr(h))+" ").indexOf(a)>-1)return!0;return!1}});var Yp=/\r/g;u.fn.extend({val:function(o){var a,h,p,_=this[0];return arguments.length?(p=T(o),this.each(function(b){var S;this.nodeType===1&&(p?S=o.call(this,b,u(this).val()):S=o,S==null?S="":typeof S=="number"?S+="":Array.isArray(S)&&(S=u.map(S,function(N){return N==null?"":N+""})),a=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,S,"value")===void 0)&&(this.value=S))})):_?(a=u.valHooks[_.type]||u.valHooks[_.nodeName.toLowerCase()],a&&"get"in a&&(h=a.get(_,"value"))!==void 0?h:(h=_.value,typeof h=="string"?h.replace(Yp,""):h??"")):void 0}}),u.extend({valHooks:{option:{get:function(o){var a=u.find.attr(o,"value");return a??hr(u.text(o))}},select:{get:function(o){var a,h,p,_=o.options,b=o.selectedIndex,S=o.type==="select-one",N=S?null:[],I=S?b+1:_.length;for(b<0?p=I:p=S?b:0;p<I;p++)if(h=_[p],(h.selected||p===b)&&!h.disabled&&(!h.parentNode.disabled||!P(h.parentNode,"optgroup"))){if(a=u(h).val(),S)return a;N.push(a)}return N},set:function(o,a){for(var h,p,_=o.options,b=u.makeArray(a),S=_.length;S--;)p=_[S],(p.selected=u.inArray(u.valHooks.option.get(p),b)>-1)&&(h=!0);return h||(o.selectedIndex=-1),b}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(o,a){if(Array.isArray(a))return o.checked=u.inArray(u(o).val(),a)>-1}},M.checkOn||(u.valHooks[this].get=function(o){return o.getAttribute("value")===null?"on":o.value})});var Ps=t.location,xu={guid:Date.now()},Fa=/\?/;u.parseXML=function(o){var a,h;if(!o||typeof o!="string")return null;try{a=new t.DOMParser().parseFromString(o,"text/xml")}catch{}return h=a&&a.getElementsByTagName("parsererror")[0],(!a||h)&&u.error("Invalid XML: "+(h?u.map(h.childNodes,function(p){return p.textContent}).join(`
`):o)),a};var bu=/^(?:focusinfocus|focusoutblur)$/,yu=function(o){o.stopPropagation()};u.extend(u.event,{trigger:function(o,a,h,p){var _,b,S,N,I,H,it,ht,J=[h||m],_t=v.call(o,"type")?o.type:o,oe=v.call(o,"namespace")?o.namespace.split("."):[];if(b=ht=S=h=h||m,!(h.nodeType===3||h.nodeType===8)&&!bu.test(_t+u.event.triggered)&&(_t.indexOf(".")>-1&&(oe=_t.split("."),_t=oe.shift(),oe.sort()),I=_t.indexOf(":")<0&&"on"+_t,o=o[u.expando]?o:new u.Event(_t,typeof o=="object"&&o),o.isTrigger=p?2:3,o.namespace=oe.join("."),o.rnamespace=o.namespace?new RegExp("(^|\\.)"+oe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,o.result=void 0,o.target||(o.target=h),a=a==null?[o]:u.makeArray(a,[o]),it=u.event.special[_t]||{},!(!p&&it.trigger&&it.trigger.apply(h,a)===!1))){if(!p&&!it.noBubble&&!y(h)){for(N=it.delegateType||_t,bu.test(N+_t)||(b=b.parentNode);b;b=b.parentNode)J.push(b),S=b;S===(h.ownerDocument||m)&&J.push(S.defaultView||S.parentWindow||t)}for(_=0;(b=J[_++])&&!o.isPropagationStopped();)ht=b,o.type=_>1?N:it.bindType||_t,H=(K.get(b,"events")||Object.create(null))[o.type]&&K.get(b,"handle"),H&&H.apply(b,a),H=I&&b[I],H&&H.apply&&$(b)&&(o.result=H.apply(b,a),o.result===!1&&o.preventDefault());return o.type=_t,!p&&!o.isDefaultPrevented()&&(!it._default||it._default.apply(J.pop(),a)===!1)&&$(h)&&I&&T(h[_t])&&!y(h)&&(S=h[I],S&&(h[I]=null),u.event.triggered=_t,o.isPropagationStopped()&&ht.addEventListener(_t,yu),h[_t](),o.isPropagationStopped()&&ht.removeEventListener(_t,yu),u.event.triggered=void 0,S&&(h[I]=S)),o.result}},simulate:function(o,a,h){var p=u.extend(new u.Event,h,{type:o,isSimulated:!0});u.event.trigger(p,null,a)}}),u.fn.extend({trigger:function(o,a){return this.each(function(){u.event.trigger(o,a,this)})},triggerHandler:function(o,a){var h=this[0];if(h)return u.event.trigger(o,a,h,!0)}});var $p=/\[\]$/,wu=/\r?\n/g,Kp=/^(?:submit|button|image|reset|file)$/i,Zp=/^(?:input|select|textarea|keygen)/i;function ka(o,a,h,p){var _;if(Array.isArray(a))u.each(a,function(b,S){h||$p.test(o)?p(o,S):ka(o+"["+(typeof S=="object"&&S!=null?b:"")+"]",S,h,p)});else if(!h&&R(a)==="object")for(_ in a)ka(o+"["+_+"]",a[_],h,p);else p(o,a)}u.param=function(o,a){var h,p=[],_=function(b,S){var N=T(S)?S():S;p[p.length]=encodeURIComponent(b)+"="+encodeURIComponent(N??"")};if(o==null)return"";if(Array.isArray(o)||o.jquery&&!u.isPlainObject(o))u.each(o,function(){_(this.name,this.value)});else for(h in o)ka(h,o[h],a,_);return p.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var o=u.prop(this,"elements");return o?u.makeArray(o):this}).filter(function(){var o=this.type;return this.name&&!u(this).is(":disabled")&&Zp.test(this.nodeName)&&!Kp.test(o)&&(this.checked||!gt.test(o))}).map(function(o,a){var h=u(this).val();return h==null?null:Array.isArray(h)?u.map(h,function(p){return{name:a.name,value:p.replace(wu,`\r
`)}}):{name:a.name,value:h.replace(wu,`\r
`)}}).get()}});var Jp=/%20/g,Qp=/#.*$/,tf=/([?&])_=[^&]*/,ef=/^(.*?):[ \t]*([^\r\n]*)$/mg,nf=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rf=/^(?:GET|HEAD)$/,sf=/^\/\//,Mu={},Ba={},Su="*/".concat("*"),Va=m.createElement("a");Va.href=Ps.href;function Eu(o){return function(a,h){typeof a!="string"&&(h=a,a="*");var p,_=0,b=a.toLowerCase().match(Gt)||[];if(T(h))for(;p=b[_++];)p[0]==="+"?(p=p.slice(1)||"*",(o[p]=o[p]||[]).unshift(h)):(o[p]=o[p]||[]).push(h)}}function Tu(o,a,h,p){var _={},b=o===Ba;function S(N){var I;return _[N]=!0,u.each(o[N]||[],function(H,it){var ht=it(a,h,p);if(typeof ht=="string"&&!b&&!_[ht])return a.dataTypes.unshift(ht),S(ht),!1;if(b)return!(I=ht)}),I}return S(a.dataTypes[0])||!_["*"]&&S("*")}function za(o,a){var h,p,_=u.ajaxSettings.flatOptions||{};for(h in a)a[h]!==void 0&&((_[h]?o:p||(p={}))[h]=a[h]);return p&&u.extend(!0,o,p),o}function of(o,a,h){for(var p,_,b,S,N=o.contents,I=o.dataTypes;I[0]==="*";)I.shift(),p===void 0&&(p=o.mimeType||a.getResponseHeader("Content-Type"));if(p){for(_ in N)if(N[_]&&N[_].test(p)){I.unshift(_);break}}if(I[0]in h)b=I[0];else{for(_ in h){if(!I[0]||o.converters[_+" "+I[0]]){b=_;break}S||(S=_)}b=b||S}if(b)return b!==I[0]&&I.unshift(b),h[b]}function af(o,a,h,p){var _,b,S,N,I,H={},it=o.dataTypes.slice();if(it[1])for(S in o.converters)H[S.toLowerCase()]=o.converters[S];for(b=it.shift();b;)if(o.responseFields[b]&&(h[o.responseFields[b]]=a),!I&&p&&o.dataFilter&&(a=o.dataFilter(a,o.dataType)),I=b,b=it.shift(),b){if(b==="*")b=I;else if(I!=="*"&&I!==b){if(S=H[I+" "+b]||H["* "+b],!S){for(_ in H)if(N=_.split(" "),N[1]===b&&(S=H[I+" "+N[0]]||H["* "+N[0]],S)){S===!0?S=H[_]:H[_]!==!0&&(b=N[0],it.unshift(N[1]));break}}if(S!==!0)if(S&&o.throws)a=S(a);else try{a=S(a)}catch(ht){return{state:"parsererror",error:S?ht:"No conversion from "+I+" to "+b}}}}return{state:"success",data:a}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ps.href,type:"GET",isLocal:nf.test(Ps.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Su,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(o,a){return a?za(za(o,u.ajaxSettings),a):za(u.ajaxSettings,o)},ajaxPrefilter:Eu(Mu),ajaxTransport:Eu(Ba),ajax:function(o,a){typeof o=="object"&&(a=o,o=void 0),a=a||{};var h,p,_,b,S,N,I,H,it,ht,J=u.ajaxSetup({},a),_t=J.context||J,oe=J.context&&(_t.nodeType||_t.jquery)?u(_t):u.event,Pe=u.Deferred(),me=u.Callbacks("once memory"),gn=J.statusCode||{},on={},ii={},ri="canceled",Te={readyState:0,getResponseHeader:function(Re){var Je;if(I){if(!b)for(b={};Je=ef.exec(_);)b[Je[1].toLowerCase()+" "]=(b[Je[1].toLowerCase()+" "]||[]).concat(Je[2]);Je=b[Re.toLowerCase()+" "]}return Je==null?null:Je.join(", ")},getAllResponseHeaders:function(){return I?_:null},setRequestHeader:function(Re,Je){return I==null&&(Re=ii[Re.toLowerCase()]=ii[Re.toLowerCase()]||Re,on[Re]=Je),this},overrideMimeType:function(Re){return I==null&&(J.mimeType=Re),this},statusCode:function(Re){var Je;if(Re)if(I)Te.always(Re[Te.status]);else for(Je in Re)gn[Je]=[gn[Je],Re[Je]];return this},abort:function(Re){var Je=Re||ri;return h&&h.abort(Je),pr(0,Je),this}};if(Pe.promise(Te),J.url=((o||J.url||Ps.href)+"").replace(sf,Ps.protocol+"//"),J.type=a.method||a.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(Gt)||[""],J.crossDomain==null){N=m.createElement("a");try{N.href=J.url,N.href=N.href,J.crossDomain=Va.protocol+"//"+Va.host!=N.protocol+"//"+N.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=u.param(J.data,J.traditional)),Tu(Mu,J,a,Te),I)return Te;H=u.event&&J.global,H&&u.active++===0&&u.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!rf.test(J.type),p=J.url.replace(Qp,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(Jp,"+")):(ht=J.url.slice(p.length),J.data&&(J.processData||typeof J.data=="string")&&(p+=(Fa.test(p)?"&":"?")+J.data,delete J.data),J.cache===!1&&(p=p.replace(tf,"$1"),ht=(Fa.test(p)?"&":"?")+"_="+xu.guid+++ht),J.url=p+ht),J.ifModified&&(u.lastModified[p]&&Te.setRequestHeader("If-Modified-Since",u.lastModified[p]),u.etag[p]&&Te.setRequestHeader("If-None-Match",u.etag[p])),(J.data&&J.hasContent&&J.contentType!==!1||a.contentType)&&Te.setRequestHeader("Content-Type",J.contentType),Te.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+Su+"; q=0.01":""):J.accepts["*"]);for(it in J.headers)Te.setRequestHeader(it,J.headers[it]);if(J.beforeSend&&(J.beforeSend.call(_t,Te,J)===!1||I))return Te.abort();if(ri="abort",me.add(J.complete),Te.done(J.success),Te.fail(J.error),h=Tu(Ba,J,a,Te),!h)pr(-1,"No Transport");else{if(Te.readyState=1,H&&oe.trigger("ajaxSend",[Te,J]),I)return Te;J.async&&J.timeout>0&&(S=t.setTimeout(function(){Te.abort("timeout")},J.timeout));try{I=!1,h.send(on,pr)}catch(Re){if(I)throw Re;pr(-1,Re)}}function pr(Re,Je,Ds,Ga){var si,Ls,oi,Gi,Wi,Hn=Je;I||(I=!0,S&&t.clearTimeout(S),h=void 0,_=Ga||"",Te.readyState=Re>0?4:0,si=Re>=200&&Re<300||Re===304,Ds&&(Gi=of(J,Te,Ds)),!si&&u.inArray("script",J.dataTypes)>-1&&u.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),Gi=af(J,Gi,Te,si),si?(J.ifModified&&(Wi=Te.getResponseHeader("Last-Modified"),Wi&&(u.lastModified[p]=Wi),Wi=Te.getResponseHeader("etag"),Wi&&(u.etag[p]=Wi)),Re===204||J.type==="HEAD"?Hn="nocontent":Re===304?Hn="notmodified":(Hn=Gi.state,Ls=Gi.data,oi=Gi.error,si=!oi)):(oi=Hn,(Re||!Hn)&&(Hn="error",Re<0&&(Re=0))),Te.status=Re,Te.statusText=(Je||Hn)+"",si?Pe.resolveWith(_t,[Ls,Hn,Te]):Pe.rejectWith(_t,[Te,Hn,oi]),Te.statusCode(gn),gn=void 0,H&&oe.trigger(si?"ajaxSuccess":"ajaxError",[Te,J,si?Ls:oi]),me.fireWith(_t,[Te,Hn]),H&&(oe.trigger("ajaxComplete",[Te,J]),--u.active||u.event.trigger("ajaxStop")))}return Te},getJSON:function(o,a,h){return u.get(o,a,h,"json")},getScript:function(o,a){return u.get(o,void 0,a,"script")}}),u.each(["get","post"],function(o,a){u[a]=function(h,p,_,b){return T(p)&&(b=b||_,_=p,p=void 0),u.ajax(u.extend({url:h,type:a,dataType:b,data:p,success:_},u.isPlainObject(h)&&h))}}),u.ajaxPrefilter(function(o){var a;for(a in o.headers)a.toLowerCase()==="content-type"&&(o.contentType=o.headers[a]||"")}),u._evalUrl=function(o,a,h){return u.ajax({url:o,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){u.globalEval(p,a,h)}})},u.fn.extend({wrapAll:function(o){var a;return this[0]&&(T(o)&&(o=o.call(this[0])),a=u(o,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(o){return T(o)?this.each(function(a){u(this).wrapInner(o.call(this,a))}):this.each(function(){var a=u(this),h=a.contents();h.length?h.wrapAll(o):a.append(o)})},wrap:function(o){var a=T(o);return this.each(function(h){u(this).wrapAll(a?o.call(this,h):o)})},unwrap:function(o){return this.parent(o).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(o){return!u.expr.pseudos.visible(o)},u.expr.pseudos.visible=function(o){return!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch{}};var lf={0:200,1223:204},Rs=u.ajaxSettings.xhr();M.cors=!!Rs&&"withCredentials"in Rs,M.ajax=Rs=!!Rs,u.ajaxTransport(function(o){var a,h;if(M.cors||Rs&&!o.crossDomain)return{send:function(p,_){var b,S=o.xhr();if(S.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(b in o.xhrFields)S[b]=o.xhrFields[b];o.mimeType&&S.overrideMimeType&&S.overrideMimeType(o.mimeType),!o.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(b in p)S.setRequestHeader(b,p[b]);a=function(N){return function(){a&&(a=h=S.onload=S.onerror=S.onabort=S.ontimeout=S.onreadystatechange=null,N==="abort"?S.abort():N==="error"?typeof S.status!="number"?_(0,"error"):_(S.status,S.statusText):_(lf[S.status]||S.status,S.statusText,(S.responseType||"text")!=="text"||typeof S.responseText!="string"?{binary:S.response}:{text:S.responseText},S.getAllResponseHeaders()))}},S.onload=a(),h=S.onerror=S.ontimeout=a("error"),S.onabort!==void 0?S.onabort=h:S.onreadystatechange=function(){S.readyState===4&&t.setTimeout(function(){a&&h()})},a=a("abort");try{S.send(o.hasContent&&o.data||null)}catch(N){if(a)throw N}},abort:function(){a&&a()}}}),u.ajaxPrefilter(function(o){o.crossDomain&&(o.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(o){return u.globalEval(o),o}}}),u.ajaxPrefilter("script",function(o){o.cache===void 0&&(o.cache=!1),o.crossDomain&&(o.type="GET")}),u.ajaxTransport("script",function(o){if(o.crossDomain||o.scriptAttrs){var a,h;return{send:function(p,_){a=u("<script>").attr(o.scriptAttrs||{}).prop({charset:o.scriptCharset,src:o.url}).on("load error",h=function(b){a.remove(),h=null,b&&_(b.type==="error"?404:200,b.type)}),m.head.appendChild(a[0])},abort:function(){h&&h()}}}});var Cu=[],Ha=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=Cu.pop()||u.expando+"_"+xu.guid++;return this[o]=!0,o}}),u.ajaxPrefilter("json jsonp",function(o,a,h){var p,_,b,S=o.jsonp!==!1&&(Ha.test(o.url)?"url":typeof o.data=="string"&&(o.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ha.test(o.data)&&"data");if(S||o.dataTypes[0]==="jsonp")return p=o.jsonpCallback=T(o.jsonpCallback)?o.jsonpCallback():o.jsonpCallback,S?o[S]=o[S].replace(Ha,"$1"+p):o.jsonp!==!1&&(o.url+=(Fa.test(o.url)?"&":"?")+o.jsonp+"="+p),o.converters["script json"]=function(){return b||u.error(p+" was not called"),b[0]},o.dataTypes[0]="json",_=t[p],t[p]=function(){b=arguments},h.always(function(){_===void 0?u(t).removeProp(p):t[p]=_,o[p]&&(o.jsonpCallback=a.jsonpCallback,Cu.push(p)),b&&T(_)&&_(b[0]),b=_=void 0}),"script"}),M.createHTMLDocument=function(){var o=m.implementation.createHTMLDocument("").body;return o.innerHTML="<form></form><form></form>",o.childNodes.length===2}(),u.parseHTML=function(o,a,h){if(typeof o!="string")return[];typeof a=="boolean"&&(h=a,a=!1);var p,_,b;return a||(M.createHTMLDocument?(a=m.implementation.createHTMLDocument(""),p=a.createElement("base"),p.href=m.location.href,a.head.appendChild(p)):a=m),_=te.exec(o),b=!h&&[],_?[a.createElement(_[1])]:(_=Cn([o],a,b),b&&b.length&&u(b).remove(),u.merge([],_.childNodes))},u.fn.load=function(o,a,h){var p,_,b,S=this,N=o.indexOf(" ");return N>-1&&(p=hr(o.slice(N)),o=o.slice(0,N)),T(a)?(h=a,a=void 0):a&&typeof a=="object"&&(_="POST"),S.length>0&&u.ajax({url:o,type:_||"GET",dataType:"html",data:a}).done(function(I){b=arguments,S.html(p?u("<div>").append(u.parseHTML(I)).find(p):I)}).always(h&&function(I,H){S.each(function(){h.apply(this,b||[I.responseText,H,I])})}),this},u.expr.pseudos.animated=function(o){return u.grep(u.timers,function(a){return o===a.elem}).length},u.offset={setOffset:function(o,a,h){var p,_,b,S,N,I,H,it=u.css(o,"position"),ht=u(o),J={};it==="static"&&(o.style.position="relative"),N=ht.offset(),b=u.css(o,"top"),I=u.css(o,"left"),H=(it==="absolute"||it==="fixed")&&(b+I).indexOf("auto")>-1,H?(p=ht.position(),S=p.top,_=p.left):(S=parseFloat(b)||0,_=parseFloat(I)||0),T(a)&&(a=a.call(o,h,u.extend({},N))),a.top!=null&&(J.top=a.top-N.top+S),a.left!=null&&(J.left=a.left-N.left+_),"using"in a?a.using.call(o,J):ht.css(J)}},u.fn.extend({offset:function(o){if(arguments.length)return o===void 0?this:this.each(function(_){u.offset.setOffset(this,o,_)});var a,h,p=this[0];if(p)return p.getClientRects().length?(a=p.getBoundingClientRect(),h=p.ownerDocument.defaultView,{top:a.top+h.pageYOffset,left:a.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var o,a,h,p=this[0],_={top:0,left:0};if(u.css(p,"position")==="fixed")a=p.getBoundingClientRect();else{for(a=this.offset(),h=p.ownerDocument,o=p.offsetParent||h.documentElement;o&&(o===h.body||o===h.documentElement)&&u.css(o,"position")==="static";)o=o.parentNode;o&&o!==p&&o.nodeType===1&&(_=u(o).offset(),_.top+=u.css(o,"borderTopWidth",!0),_.left+=u.css(o,"borderLeftWidth",!0))}return{top:a.top-_.top-u.css(p,"marginTop",!0),left:a.left-_.left-u.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var o=this.offsetParent;o&&u.css(o,"position")==="static";)o=o.offsetParent;return o||Zt})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,a){var h=a==="pageYOffset";u.fn[o]=function(p){return Ot(this,function(_,b,S){var N;if(y(_)?N=_:_.nodeType===9&&(N=_.defaultView),S===void 0)return N?N[a]:_[b];N?N.scrollTo(h?N.pageXOffset:S,h?S:N.pageYOffset):_[b]=S},o,p,arguments.length)}}),u.each(["top","left"],function(o,a){u.cssHooks[a]=et(M.pixelPosition,function(h,p){if(p)return p=Q(h,a),Ts.test(p)?u(h).position()[a]+"px":p})}),u.each({Height:"height",Width:"width"},function(o,a){u.each({padding:"inner"+o,content:a,"":"outer"+o},function(h,p){u.fn[p]=function(_,b){var S=arguments.length&&(h||typeof _!="boolean"),N=h||(_===!0||b===!0?"margin":"border");return Ot(this,function(I,H,it){var ht;return y(I)?p.indexOf("outer")===0?I["inner"+o]:I.document.documentElement["client"+o]:I.nodeType===9?(ht=I.documentElement,Math.max(I.body["scroll"+o],ht["scroll"+o],I.body["offset"+o],ht["offset"+o],ht["client"+o])):it===void 0?u.css(I,H,N):u.style(I,H,it,N)},a,S?_:void 0,S)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(o,a){u.fn[a]=function(h){return this.on(a,h)}}),u.fn.extend({bind:function(o,a,h){return this.on(o,null,a,h)},unbind:function(o,a){return this.off(o,null,a)},delegate:function(o,a,h,p){return this.on(a,o,h,p)},undelegate:function(o,a,h){return arguments.length===1?this.off(o,"**"):this.off(a,o||"**",h)},hover:function(o,a){return this.on("mouseenter",o).on("mouseleave",a||o)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,a){u.fn[a]=function(h,p){return arguments.length>0?this.on(a,null,h,p):this.trigger(a)}});var cf=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(o,a){var h,p,_;if(typeof a=="string"&&(h=o[a],a=o,o=h),!!T(o))return p=s.call(arguments,2),_=function(){return o.apply(a||this,p.concat(s.call(arguments)))},_.guid=o.guid=o.guid||u.guid++,_},u.holdReady=function(o){o?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=P,u.isFunction=T,u.isWindow=y,u.camelCase=E,u.type=R,u.now=Date.now,u.isNumeric=function(o){var a=u.type(o);return(a==="number"||a==="string")&&!isNaN(o-parseFloat(o))},u.trim=function(o){return o==null?"":(o+"").replace(cf,"$1")};var uf=t.jQuery,hf=t.$;return u.noConflict=function(o){return t.$===u&&(t.$=hf),o&&t.jQuery===u&&(t.jQuery=uf),u},typeof e>"u"&&(t.jQuery=t.$=u),u})}(ca)),ca.exports}var cb=lb();const ua=ob(cb);function ub(n,t,e,i,r,s,l,c){const d=[];let g,v;const x=new se(1401481),w=new se(733506);l&&c?s==="gouraud"?(g=new ci({map:c,side:Xe}),v=new ci({map:c,color:w,side:Xe})):(g=new li({map:c,shininess:30,side:Xe}),v=new li({map:c,color:w,shininess:30,side:Xe})):s==="gouraud"?(g=new ci({color:x,side:Xe}),v=new ci({color:w,side:Xe})):(g=new li({color:x,shininess:30,side:Xe}),v=new li({color:w,shininess:30,side:Xe}));function M(ft){n.add(ft.mesh),t.add(ft),d.push(ft),r&&ft.mesh instanceof vn&&r.push(ft.mesh)}function T(ft,ue,Ot){const Ce=[],Ht=ue.clone().normalize();for(let D=0;D<Ot;D++){const E=ft.clone().add(Ht.clone().multiplyScalar(D*1)),$=new Sc(Ht,g,v);$.setPosition(E.x,0,E.z),Ce.push($),D-1>=0&&Ce[D-1].addCollidable($)}return Ce}function y(ft,ue,Ot=3,Ce=6,Ht=!0){const D=[],E=ue.clone().normalize(),$=Ht?-1:1,ut=new B().crossVectors(Er,E).normalize().multiplyScalar($),K=ft.clone().add(ut.clone().multiplyScalar(Ot)),st=Math.PI/2/(Ce-1);for(let Vt=0;Vt<Ce;++Vt){const Et=Vt*st,Yt=K.clone().add(ut.clone().multiplyScalar(-1*Ot*Math.cos(Et))).add(ue.clone().multiplyScalar(Ot*Math.sin(Et))),Jt=ut.clone().multiplyScalar(Math.sin(Et)).add(E.clone().multiplyScalar(Math.cos(Et))).normalize(),vt=new Sc(Jt,g,v);vt.setPosition(Yt.x,0,Yt.z),D.push(vt),Vt>0&&D[Vt-1].addCollidable(D[Vt])}return D}const m=T(e,i,10);m.map(ft=>M(ft));const O=y(m[m.length-1].mesh.position.clone().add(i.clone().normalize().multiplyScalar(1)).add(new B(0,0,.5)),i);m[m.length-1].addCollidable(O[0]),O.map(ft=>M(ft));const U=y(m[m.length-1].mesh.position.clone().add(i.clone().normalize().multiplyScalar(1)).add(new B(0,0,-.5)),i,3,6,!1);m[m.length-1].addCollidable(U[0]),U.map(ft=>M(ft));const R=T(O[O.length-1].mesh.position.clone().add(O[O.length-1].fwdAxis.clone().multiplyScalar(1)),O[O.length-1].fwdAxis,10);O[O.length-1].addCollidable(R[0]),R.map(ft=>M(ft));const W=T(U[U.length-1].mesh.position.clone().add(U[U.length-1].fwdAxis.clone().multiplyScalar(1)),U[U.length-1].fwdAxis,10);U[U.length-1].addCollidable(W[0]),W.map(ft=>M(ft));const z=y(R[R.length-1].mesh.position.clone().add(R[R.length-1].fwdAxis.clone().multiplyScalar(1)),R[R.length-1].fwdAxis);R[R.length-1].addCollidable(z[0]),z.map(ft=>M(ft));const u=y(W[W.length-1].mesh.position.clone().add(W[W.length-1].fwdAxis.clone().multiplyScalar(1)),W[W.length-1].fwdAxis,3,6,!1);W[W.length-1].addCollidable(u[0]),u.map(ft=>M(ft));const q=T(z[z.length-1].mesh.position.clone().add(z[z.length-1].fwdAxis.clone().multiplyScalar(1)),z[z.length-1].fwdAxis,20);z[z.length-1].addCollidable(q[0]),q.map(ft=>M(ft));const P=T(u[u.length-1].mesh.position.clone().add(u[u.length-1].fwdAxis.clone().multiplyScalar(1)),u[u.length-1].fwdAxis,20);u[u.length-1].addCollidable(P[0]),P.map(ft=>M(ft));const A=y(q[q.length-1].mesh.position.clone().add(q[q.length-1].fwdAxis.clone().multiplyScalar(1)),q[q.length-1].fwdAxis);q[q.length-1].addCollidable(A[0]),A.map(ft=>M(ft));const V=y(P[P.length-1].mesh.position.clone().add(P[P.length-1].fwdAxis.clone().multiplyScalar(1)),P[P.length-1].fwdAxis,3,6,!1);P[P.length-1].addCollidable(V[0]),V.map(ft=>M(ft));const lt=T(A[A.length-1].mesh.position.clone().add(A[A.length-1].fwdAxis.clone().multiplyScalar(1)),A[A.length-1].fwdAxis,3);A[A.length-1].addCollidable(lt[0]),lt.map(ft=>M(ft));const Y=T(V[V.length-1].mesh.position.clone().add(V[V.length-1].fwdAxis.clone().multiplyScalar(1)),V[V.length-1].fwdAxis,3);V[V.length-1].addCollidable(Y[0]),Y.map(ft=>M(ft));const dt=y(lt[lt.length-1].mesh.position.clone().add(lt[lt.length-1].fwdAxis.clone().multiplyScalar(1)),lt[lt.length-1].fwdAxis);lt[lt.length-1].addCollidable(dt[0]),dt.map(ft=>M(ft));const mt=y(Y[Y.length-1].mesh.position.clone().add(Y[Y.length-1].fwdAxis.clone().multiplyScalar(1)),Y[Y.length-1].fwdAxis,3,6,!1);Y[Y.length-1].addCollidable(mt[0]),mt.map(ft=>M(ft));const ot=T(dt[dt.length-1].mesh.position.clone().add(dt[dt.length-1].fwdAxis.clone().multiplyScalar(1)),dt[dt.length-1].fwdAxis,5);dt[dt.length-1].addCollidable(ot[0]),ot.map(ft=>M(ft));const at=T(mt[mt.length-1].mesh.position.clone().add(mt[mt.length-1].fwdAxis.clone().multiplyScalar(1)),mt[mt.length-1].fwdAxis,5);mt[mt.length-1].addCollidable(at[0]),at.map(ft=>M(ft));const tt=y(ot[ot.length-1].mesh.position.clone().add(ot[ot.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(0,0,.5)),ot[ot.length-1].fwdAxis,2,4);ot[ot.length-1].addCollidable(tt[0]),tt.map(ft=>M(ft));const bt=y(ot[ot.length-1].mesh.position.clone().add(ot[ot.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(0,0,-.5)),ot[ot.length-1].fwdAxis,1,3,!1);ot[ot.length-1].addCollidable(bt[0]),bt.map(ft=>M(ft));const St=y(at[at.length-1].mesh.position.clone().add(at[at.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(0,0,.5)),at[at.length-1].fwdAxis,1,3);at[at.length-1].addCollidable(St[0]),St.map(ft=>M(ft));const Tt=y(at[at.length-1].mesh.position.clone().add(at[at.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(0,0,-.5)),at[at.length-1].fwdAxis,2,4,!1);at[at.length-1].addCollidable(Tt[0]),Tt.map(ft=>M(ft));const te=y(St[St.length-1].mesh.position.clone().add(St[St.length-1].fwdAxis.clone().multiplyScalar(1)),St[St.length-1].fwdAxis,1,3);St[St.length-1].addCollidable(te[0]),te.map(ft=>M(ft));const de=y(bt[bt.length-1].mesh.position.clone().add(bt[bt.length-1].fwdAxis.clone().multiplyScalar(1)),bt[bt.length-1].fwdAxis,1,3,!1);bt[bt.length-1].addCollidable(de[0]),de.map(ft=>M(ft));const pt=T(te[te.length-1].mesh.position.clone().add(te[te.length-1].fwdAxis.clone().multiplyScalar(1)),te[te.length-1].fwdAxis,10);te[te.length-1].addCollidable(pt[0]),pt.map(ft=>M(ft));const yt=T(de[de.length-1].mesh.position.clone().add(de[de.length-1].fwdAxis.clone().multiplyScalar(1)),de[de.length-1].fwdAxis,10);de[de.length-1].addCollidable(yt[0]),yt.map(ft=>M(ft));const Dt=y(Tt[Tt.length-1].mesh.position.clone().add(Tt[Tt.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(.5,0,0)),Tt[Tt.length-1].fwdAxis,2,4);Tt[Tt.length-1].addCollidable(Dt[0]),Dt.map(ft=>M(ft));const wt=y(Tt[Tt.length-1].mesh.position.clone().add(Tt[Tt.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(-.5,0,0)),Tt[Tt.length-1].fwdAxis,2,4,!1);Tt[Tt.length-1].addCollidable(wt[0]),wt.map(ft=>M(ft));const zt=y(tt[tt.length-1].mesh.position.clone().add(tt[tt.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(-.5,0,0)),tt[tt.length-1].fwdAxis,2,4);tt[tt.length-1].addCollidable(zt[0]),zt.map(ft=>M(ft));const ae=y(tt[tt.length-1].mesh.position.clone().add(tt[tt.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(.5,0,0)),tt[tt.length-1].fwdAxis,2,4,!1);tt[tt.length-1].addCollidable(ae[0]),ae.map(ft=>M(ft));const Gt=T(wt[wt.length-1].mesh.position.clone().add(wt[wt.length-1].fwdAxis.clone().multiplyScalar(1)),wt[wt.length-1].fwdAxis,5);wt[wt.length-1].addCollidable(Gt[0]),Gt.map(ft=>M(ft));const He=T(zt[zt.length-1].mesh.position.clone().add(zt[zt.length-1].fwdAxis.clone().multiplyScalar(1)),zt[zt.length-1].fwdAxis,5);zt[zt.length-1].addCollidable(He[0]),He.map(ft=>M(ft));const pe=T(Dt[Dt.length-1].mesh.position.clone().add(Dt[Dt.length-1].fwdAxis.clone().multiplyScalar(1)),Dt[Dt.length-1].fwdAxis,5);Dt[Dt.length-1].addCollidable(pe[0]),pe.map(ft=>M(ft));const ee=T(ae[ae.length-1].mesh.position.clone().add(ae[ae.length-1].fwdAxis.clone().multiplyScalar(1)),ae[ae.length-1].fwdAxis,5);ae[ae.length-1].addCollidable(ee[0]),ee.map(ft=>M(ft));const F=y(pe[pe.length-1].mesh.position.clone().add(pe[pe.length-1].fwdAxis.clone().multiplyScalar(1)),pe[pe.length-1].fwdAxis,5,8);pe[pe.length-1].addCollidable(F[0]),F.map(ft=>M(ft));const mn=y(ee[ee.length-1].mesh.position.clone().add(ee[ee.length-1].fwdAxis.clone().multiplyScalar(1)),ee[ee.length-1].fwdAxis,5,8,!1);return ee[ee.length-1].addCollidable(mn[0]),mn.map(ft=>M(ft)),d}class hb{constructor(t){Kt(this,"scene");Kt(this,"lights");Kt(this,"helpers");Kt(this,"pointLight",new ch);Kt(this,"spotLight",new Yo);Kt(this,"trackingSpotlight",new Yo);Kt(this,"trackingSpotlightHelper",new wl(this.trackingSpotlight));Kt(this,"currentMovingObject",null);Kt(this,"targetPosition",new B);Kt(this,"currentTargetPosition",new B);Kt(this,"transitionSpeed",1);Kt(this,"clock");this.scene=t,this.lights=[],this.helpers=[],this.clock=new Wc,this.setupLighting()}setupLighting(){this.pointLight=new ch(new se(16777215),500,50),this.pointLight.position.set(0,25,0),this.pointLight.castShadow=!0,this.pointLight.shadow.mapSize.width=1024,this.pointLight.shadow.mapSize.height=1024,this.lights.push(this.pointLight),this.scene.add(this.pointLight);const t=new eg(this.pointLight,1);t.visible=!1,this.scene.add(t),this.helpers.push(t),this.spotLight=new Yo(new se(16776960),100),this.spotLight.position.set(0,15,-10),this.spotLight.target.position.set(0,0,0),this.spotLight.angle=Math.PI/8,this.spotLight.penumbra=.2,this.spotLight.decay=1.5,this.spotLight.distance=50,this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.width=1024,this.spotLight.shadow.mapSize.height=1024,this.lights.push(this.spotLight),this.scene.add(this.spotLight),this.scene.add(this.spotLight.target);const e=new wl(this.spotLight);e.visible=!1,this.scene.add(e),this.helpers.push(e),this.trackingSpotlight=new Yo(new se(43775),50),this.trackingSpotlight.visible=!0,this.trackingSpotlight.position.set(15,15,5),this.trackingSpotlight.angle=Math.PI/25,this.trackingSpotlight.penumbra=.05,this.trackingSpotlight.decay=1,this.trackingSpotlight.distance=40,this.trackingSpotlight.castShadow=!0,this.trackingSpotlight.shadow.mapSize.width=1024,this.trackingSpotlight.shadow.mapSize.height=1024,this.trackingSpotlight.target.position.set(0,0,0),this.targetPosition.copy(this.trackingSpotlight.target.position),this.currentTargetPosition.copy(this.trackingSpotlight.target.position),this.scene.add(this.trackingSpotlight),this.scene.add(this.trackingSpotlight.target),this.lights.push(this.trackingSpotlight),this.trackingSpotlightHelper=new wl(this.trackingSpotlight),this.trackingSpotlightHelper.visible=!1,this.scene.add(this.trackingSpotlightHelper),this.helpers.push(this.trackingSpotlightHelper)}togglePointLight(){this.pointLight.visible=!this.pointLight.visible}toggleSpotLight(){this.spotLight.visible=!this.spotLight.visible}toggleTrackingSpotlight(){this.trackingSpotlight.visible=!this.trackingSpotlight.visible}toggleHelpers(){this.helpers.forEach(t=>{t.visible=!t.visible})}setTrackingObject(t){this.currentMovingObject=t,t&&this.targetPosition.copy(t.position)}updateTrackingSpotlight(){const t=this.clock.getDelta();this.currentMovingObject&&this.targetPosition.copy(this.currentMovingObject.position);const e=Math.min(1,this.transitionSpeed*t);this.currentTargetPosition.lerp(this.targetPosition,e),this.trackingSpotlight.target.position.copy(this.currentTargetPosition),this.trackingSpotlightHelper&&this.trackingSpotlightHelper.update()}}/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function je(n){return n==null}function qc(n){return n!==null&&typeof n=="object"}function Ec(n){return n!==null&&typeof n=="object"}function db(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Lr(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,r)=>{const s=n[r],l=t[r];return Ec(s)&&Ec(l)?Object.assign(Object.assign({},i),{[r]:Lr(s,l)}):Object.assign(Object.assign({},i),{[r]:r in t?l:s})},{})}function Yc(n){return qc(n)?"target"in n:!1}const pb={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Qe{static alreadyDisposed(){return new Qe({type:"alreadydisposed"})}static notBindable(){return new Qe({type:"notbindable"})}static notCompatible(t,e){return new Qe({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new Qe({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new Qe({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=pb[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class xa{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!xa.isBindable(i))throw Qe.notBindable();if(!(t in i))throw Qe.propertyNotFound(t);i[t]=e}}class rn{constructor(){this.observers_={}}on(t,e,i){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(e)})}}class fb{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new rn,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class mb{constructor(t){this.emitter=new rn,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class gb{constructor(t){this.emitter=new rn,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function $e(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new mb(n):new fb(n,t)}function vb(n){return[new gb(n),(t,e)=>{n.setRawValue(t,e)}]}class _e{constructor(t){this.emitter=new rn,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:$e(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new _e(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class lo{constructor(t){this.values=_e.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class _b{constructor(t){this.values=_e.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let r=t;return je(i)||(r=Math.max(r,i)),je(e)||(r=Math.min(r,e)),r}}class xb{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class bb{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const yb={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class wb{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=yb[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Mb={"+":n=>n,"-":n=>-n,"~":n=>~n};class Sb{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=Mb[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function $c(n){return(t,e)=>{for(let i=0;i<n.length;i++){const r=n[i](t,e);if(r!=="")return r}return""}}function Qs(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Eb(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function to(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Tb(n,t){const e=to(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=to(n,t);return r===""?"":i+r}function Kc(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=Tb(n,t);return i===""?"":e+i}function qd(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=Eb(n,t);return t+=i.length,i===""?"":i+to(n,t)}function Cb(n,t){const e=qd(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const r=to(n,t);return t+=r.length,e+i+r+Kc(n,t)}function Ab(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=to(n,t);return t+=i.length,i===""?"":e+i+Kc(n,t)}function Pb(n,t){const e=qd(n,t);return t+=e.length,e===""?"":e+Kc(n,t)}const Rb=$c([Cb,Ab,Pb]);function Db(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Lb(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=Db(n,t);return i===""?"":e+i}function Ib(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Ub(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=Ib(n,t);return i===""?"":e+i}function Nb(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Ob(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=Nb(n,t);return i===""?"":e+i}const Fb=$c([Lb,Ub,Ob]),kb=$c([Fb,Rb]);function Bb(n,t){const e=kb(n,t);return t+=e.length,e===""?null:{evaluable:new bb(e),cursor:t}}function Vb(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=$d(n,t);if(!i)return null;t=i.cursor,t+=Qs(n,t).length;const r=n.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function zb(n,t){var e;return(e=Bb(n,t))!==null&&e!==void 0?e:Vb(n,t)}function Yd(n,t){const e=zb(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=Yd(n,t);return r?(t=r.cursor,{cursor:t,evaluable:new Sb(i,r.evaluable)}):null}function Hb(n,t,e){e+=Qs(t,e).length;const i=n.filter(r=>t.startsWith(r,e))[0];return i?(e+=i.length,e+=Qs(t,e).length,{cursor:e,operator:i}):null}function Gb(n,t){return(e,i)=>{const r=n(e,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const l=Hb(t,e,i);if(!l)break;i=l.cursor;const c=n(e,i);if(!c)return null;i=c.cursor,s=new wb(l.operator,s,c.evaluable)}return s?{cursor:i,evaluable:s}:null}}const Wb=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>Gb(n,t),Yd);function $d(n,t){return t+=Qs(n,t).length,Wb(n,t)}function jb(n){const t=$d(n,0);return!t||t.cursor+Qs(n,t.cursor).length!==n.length?null:t.evaluable}function Oi(n){var t;const e=jb(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function Kd(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=Oi(n);if(!je(t))return t}return 0}function Xb(n){return String(n)}function Nn(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function Oe(n,t,e,i,r){const s=(n-t)/(e-t);return i+s*(r-i)}function jh(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ln(n,t,e){return Math.min(Math.max(n,t),e)}function Zd(n,t){return(n%t+t)%t}function qb(n,t){return je(n.step)?Math.max(jh(t),2):jh(n.step)}function Jd(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function Qd(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function tp(n,t){return je(n.step)?null:new xb(n.step,t)}function ep(n){return!je(n.max)&&!je(n.min)?new lo({max:n.max,min:n.min}):!je(n.max)||!je(n.min)?new _b({max:n.max,min:n.min}):null}function np(n,t){var e,i,r;return{formatter:(e=n.format)!==null&&e!==void 0?e:Nn(qb(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:Jd(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:Qd(n,t)}}function ip(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Zc(n){return{constraint:n.constraint,textProps:_e.fromObject(np(n.params,n.initialValue))}}class Or{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class Da{constructor(t){this.target=t}}class co extends Da{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class Yb extends Da{constructor(t,e){super(t),this.expanded=e}}class $b extends Da{constructor(t,e){super(t),this.index=e}}class Kb extends Da{constructor(t,e){super(t),this.native=e}}class eo extends Or{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new rn,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new co(this,e.binding.target.read(),t.options.last))}}class Zb{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new rn}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function Jb(n){if(!("binding"in n))return!1;const t=n.binding;return Yc(t)&&"read"in t&&"write"in t}function Qb(n,t){const i=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const l=t[s],c=l(n[s]);return c.succeeded?Object.assign(Object.assign({},r),{[s]:c.value}):void 0},{});return i}function ty(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function ey(n){return n===null?!1:typeof n=="object"}function Pi(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function Xh(n){return{custom:t=>Pi(t)(n),boolean:Pi(t=>typeof t=="boolean"?t:void 0)(n),number:Pi(t=>typeof t=="number"?t:void 0)(n),string:Pi(t=>typeof t=="string"?t:void 0)(n),function:Pi(t=>typeof t=="function"?t:void 0)(n),constant:t=>Pi(e=>e===t?t:void 0)(n),raw:Pi(t=>t)(n),object:t=>Pi(e=>{if(ey(e))return Qb(e,t)})(n),array:t=>Pi(e=>{if(Array.isArray(e))return ty(e,t)})(n)}}const Tc={optional:Xh(!0),required:Xh(!1)};function Ze(n,t){const e=t(Tc),i=Tc.required.object(e)(n);return i.succeeded?i.value:void 0}function Bn(n,t,e,i){if(t&&!t(n))return!1;const r=Ze(n,e);return r?i(r):!1}function Vn(n,t){var e;return Lr((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function Ar(n){return"value"in n}function rp(n){if(!qc(n)||!("binding"in n))return!1;const t=n.binding;return Yc(t)}const di="http://www.w3.org/2000/svg";function ba(n){n.offsetHeight}function ny(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function Jc(n){return n.ontouchstart!==void 0}function iy(){return globalThis}function ry(){return iy().document}function sy(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const oy={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function La(n,t){const e=n.createElementNS(di,"svg");return e.innerHTML=oy[t],e}function sp(n,t,e){n.insertBefore(t,n.children[e])}function Qc(n){n.parentElement&&n.parentElement.removeChild(n)}function op(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ay(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function ap(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function Ni(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function mi(n,t,e){Ni(n.value(t),e)}const ly="tp";function De(n){return(e,i)=>[ly,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const Hs=De("lbl");function cy(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(r=>n.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(n.createElement("br")),e.appendChild(r)}),e}class lp{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Hs()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Hs("l")),mi(e.props,"label",s=>{je(s)?this.element.classList.add(Hs(void 0,"nol")):(this.element.classList.remove(Hs(void 0,"nol")),ay(i),i.appendChild(cy(t,s)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(Hs("v")),this.element.appendChild(r),this.valueElement=r}}class cp{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new lp(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return Bn(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return Vn(null,{label:this.props.get("label")})}}function uy(){return["veryfirst","first","last","verylast"]}const qh=De(""),Yh={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Ia{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{uy().forEach(i=>{e.classList.remove(qh(void 0,Yh[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(qh(void 0,Yh[i]))})}),this.viewProps.handleDispose(()=>{Qc(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return Bn(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return Vn(null,Object.assign({},this.viewProps.exportState()))}}class Ir extends Ia{constructor(t,e){if(e.value!==e.valueController.value)throw Qe.shouldNeverHappen();const i=e.valueController.viewProps,r=new cp(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new lp(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return Bn(t,e=>{var i,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return Vn(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function $h(n){const t=Object.assign({},n);return delete t.value,t}class up extends Ir{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return Bn(t,e=>super.importState($h(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return Vn(()=>$h(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function hy(n){return Ar(n)&&rp(n.value)}class dy extends up{importState(t){return Bn(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function py(n){return Ar(n)&&Jb(n.value)}function hp(n,t){for(;n.length<t;)n.push(void 0)}function fy(n){const t=[];return hp(t,n),t}function my(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function gy(n,t){const e=[...my(n),t];return e.length>n.length?e.splice(0,e.length-n.length):hp(e,n.length),e}class vy{constructor(t){this.emitter=new rn,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=$e(fy(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=gy(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function _y(n){if(!("binding"in n))return!1;const t=n.binding;return Yc(t)&&"read"in t&&!("write"in t)}class xy extends up{exportState(){return Vn(()=>super.exportState(),{binding:{readonly:!0}})}}function by(n){return Ar(n)&&_y(n.value)}class yy extends Or{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{i(new Kb(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function wy(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function bs(n,t){return e=>{wy(n,t,e)}}function tu(n,t){Ni(n,e=>{t.textContent=e??""})}const Rl=De("btn");class My{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Rl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(Rl("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Rl("t")),tu(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class Sy{constructor(t,e){this.emitter=new rn,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new My(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return Bn(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return Vn(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class Kh extends Ia{constructor(t,e){const i=new Sy(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new cp(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return Bn(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return Vn(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class dp{constructor(t){const[e,i]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const ys=new dp("2.0.5");function Tn(n){return Object.assign({core:ys},n)}const Ey=Tn({id:"button",type:"blade",accept(n){const t=Ze(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new Kh(n.document,{blade:n.blade,buttonProps:_e.fromObject({title:n.params.title}),labelProps:_e.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof Kh?new yy(n.controller):null}});function Ty(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function Cy(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function Ay(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function Py(n){return qc(n)?"refresh"in n&&typeof n.refresh=="function":!1}function Ry(n,t){if(!xa.isBindable(n))throw Qe.notBindable();return new xa(n,t)}class Dy{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new rn,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const r=i??{},s=this.controller_.element.ownerDocument,l=this.pool_.createBinding(s,Ry(t,e),r),c=this.pool_.createBindingApi(l);return this.add(c,r.index)}addFolder(t){return Cy(this,t)}addButton(t){return Ty(this,t)}addTab(t){return Ay(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{Py(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),r=rp(e.value)?e.value.binding:null;this.emitter_.emit("change",new co(i,r?r.target.read():e.value.rawValue,t.options.last))}}class eu extends Or{constructor(t,e){super(t),this.rackApi_=new Dy(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class nu extends Ia{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return Bn(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,r)=>i.importState(e.children[r])))}exportState(){return Vn(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function Cc(n){return"rackController"in n}class Ly{constructor(t){this.emitter=new rn,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw Qe.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function Iy(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(Ar(i)&&i.value===t)return i}return null}function Uy(n){return Cc(n)?n.rackController.rack.bcSet_:null}class Ny{constructor(t){var e,i;this.emitter=new rn,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Ly(Uy),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),Ar(i))i.value.emitter.on("change",this.onChildValueChange_);else if(Cc(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(Ar(i))i.value.emitter.off("change",this.onChildValueChange_);else if(Cc(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=Iy(this.find(Ar),t.sender);if(!e)throw Qe.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class iu{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new Ny({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&sp(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Qc(t.bladeController.view.element)}}function ws(){return new _e({positions:$e([],{equals:db})})}class uo extends _e{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=_e.createCore(e);return new uo(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!je(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};mi(this,"expanded",i),mi(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Oy(n,t){let e=0;return ny(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),ba(t),e=t.clientHeight,n.set("temporaryExpanded",null),ba(t)}),e}function Zh(n,t){t.style.height=n.styleHeight}function ru(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),je(n.get("expandedHeight"))){const e=Oy(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),ba(t)}),n.emitter.on("change",()=>{Zh(n,t)}),Zh(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class pp extends eu{constructor(t,e){super(t,e),this.emitter_=new rn,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new Yb(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const fp=De("cnt");class Fy{constructor(t,e){var i;this.className_=De((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),fp()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),mi(this.foldable_,"completed",bs(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),mi(e.props,"title",f=>{je(f)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(this.className_("t")),tu(e.props.value("title"),l),this.buttonElement.appendChild(l),this.titleElement=l;const c=t.createElement("div");c.classList.add(this.className_("m")),this.buttonElement.appendChild(c);const d=t.createElement("div");d.classList.add(this.className_("c")),this.element.appendChild(d),this.containerElement=d}}class Ac extends nu{constructor(t,e){var i;const r=uo.create((i=e.expanded)!==null&&i!==void 0?i:!0),s=new Fy(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new iu({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,ru(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return Bn(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return Vn(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ky=Tn({id:"folder",type:"blade",accept(n){const t=Ze(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new Ac(n.document,{blade:n.blade,expanded:n.params.expanded,props:_e.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Ac?new pp(n.controller,n.pool):null}}),By=De("");function Jh(n,t){return bs(n,By(void 0,t))}class Bi extends _e{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=vb($e(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,r;const s=t??{};return new Bi(_e.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){Ni(this.globalDisabled_,Jh(t,"disabled")),mi(this,"hidden",Jh(t,"hidden"))}bindDisabled(t){Ni(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){Ni(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const Qh=De("tbp");class Vy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Qh()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Qh("c")),this.element.appendChild(i),this.containerElement=i}}const Gs=De("tbi");class zy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Gs()),e.viewProps.bindClassModifiers(this.element),mi(e.props,"selected",s=>{s?this.element.classList.add(Gs(void 0,"sel")):this.element.classList.remove(Gs(void 0,"sel"))});const i=t.createElement("button");i.classList.add(Gs("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Gs("t")),tu(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class Hy{constructor(t,e){this.emitter=new rn,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new zy(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Pc extends nu{constructor(t,e){const i=new Vy(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new iu({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Hy(t,{props:e.itemProps,viewProps:Bi.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,mi(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return Bn(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return Vn(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class Gy extends eu{constructor(t,e){super(t,e),this.emitter_=new rn,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new Pc(e,{blade:ws(),itemProps:_e.fromObject({selected:!1,title:t.title}),props:_e.fromObject({selected:!1}),viewProps:Bi.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new $b(this,t.rawValue))}}class Wy extends eu{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const td=-1;class jy{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=$e(!0),this.selectedIndex=$e(td),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=td,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const Ws=De("tab");class Xy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ws(),fp()),e.viewProps.bindClassModifiers(this.element),Ni(e.empty,bs(this.element,Ws(void 0,"nop")));const i=t.createElement("div");i.classList.add(Ws("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(Ws("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(Ws("c")),this.element.appendChild(s),this.contentsElement=s}}class ed extends nu{constructor(t,e){const i=new jy,r=new Xy(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new iu({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;sp(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;Qc(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const mp=Tn({id:"tab",type:"blade",accept(n){const t=Ze(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new ed(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new Pc(n.document,{blade:ws(),itemProps:_e.fromObject({selected:!1,title:e.title}),props:_e.fromObject({selected:!1}),viewProps:Bi.create()});t.add(i)}),t},api(n){return n.controller instanceof ed?new Gy(n.controller,n.pool):n.controller instanceof Pc?new Wy(n.controller,n.pool):null}});function qy(n,t){const e=n.accept(t.params);if(!e)return null;const i=Ze(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:ws(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:Bi.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class su extends eo{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class Yy{constructor(){this.disabled=!1,this.emitter=new rn}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class $y{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new rn,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ho{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function ya(n,t){if(n instanceof t)return n;if(n instanceof ho){const e=n.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(e)return e}return null}class po{constructor(t){this.values=_e.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function fo(n){var t;const e=Tc;if(Array.isArray(n))return(t=Ze({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function ou(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function au(n){return je(n)?null:new po(ou(n))}const Dl=De("lst");class Ky{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Dl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(Dl("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(Dl("m")),r.appendChild(La(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,mi(this.props_,"options",s=>{op(this.selectElement),s.forEach(l=>{const c=t.createElement("option");c.textContent=l.text,this.selectElement.appendChild(c)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class ur{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Ky(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return Bn(t,null,e=>({options:e.required.custom(fo)}),e=>(this.props.set("options",ou(e.options)),!0))}exportProps(){return Vn(null,{options:this.props.get("options")})}}const nd=De("pop");class Zy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(nd()),e.viewProps.bindClassModifiers(this.element),Ni(e.shows,bs(this.element,nd(void 0,"v")))}}class gp{constructor(t,e){this.shows=$e(!1),this.viewProps=e.viewProps,this.view=new Zy(t,{shows:this.shows,viewProps:this.viewProps})}}const id=De("txt");class Jy{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(id()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(id("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class no{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Jy(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);je(r)||(this.value.rawValue=r),this.view.refresh()}}function Qy(n){return String(n)}function vp(n){return n==="false"?!1:!!n}function rd(n){return Qy(n)}function tw(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const ew=Nn(0);function wa(n){return ew(n)+"%"}function _p(n){return String(n)}function Rc(n){return n}function Ms({primary:n,secondary:t,forward:e,backward:i}){let r=!1;function s(l){r||(r=!0,l(),r=!1)}n.emitter.on("change",l=>{s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),l.options)})}),t.emitter.on("change",l=>{s(()=>{n.setRawValue(i(n.rawValue,t.rawValue),l.options)}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),l.options)})}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function In(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function io(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Fi(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function nw(n){return n==="ArrowUp"||n==="ArrowDown"}function xp(n){return nw(n)||n==="ArrowLeft"||n==="ArrowRight"}function Ll(n,t){var e,i;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:n.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class Fr{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new rn,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Ll(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Ll(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Ll(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const jn=De("txt");class iw{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(jn(),jn(void 0,"num")),e.arrayPosition&&this.element.classList.add(jn(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(jn("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(jn()),this.inputElement.classList.add(jn("i"));const r=t.createElement("div");r.classList.add(jn("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(di,"svg");s.classList.add(jn("g")),this.knobElement.appendChild(s);const l=t.createElementNS(di,"path");l.classList.add(jn("gb")),s.appendChild(l),this.guideBodyElem_=l;const c=t.createElementNS(di,"path");c.classList.add(jn("gh")),s.appendChild(c),this.guideHeadElem_=c;const d=t.createElement("div");d.classList.add(De("tt")()),this.knobElement.appendChild(d),this.tooltipElem_=d,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(jn(void 0,"drg"));return}this.element.classList.add(jn(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),r=ln(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class mo{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=$e(null),this.view=new iw(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Fr(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let l=t;return r!==void 0&&(l=Math.max(l,r)),s!==void 0&&(l=Math.min(l,s)),l}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);je(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=In(this.props.get("keyScale"),io(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){In(this.props.get("keyScale"),io(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Il=De("sld");class rw{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Il()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Il("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(Il("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=ln(Oe(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class sw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new rw(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Oe(ln(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=In(this.props.get("keyScale"),Fi(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){In(this.props.get("keyScale"),Fi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ul=De("sldtxt");class ow{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ul());const i=t.createElement("div");i.classList.add(Ul("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Ul("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Ma{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new sw(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new mo(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new ow(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return Bn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return Vn(null,{max:t.get("max"),min:t.get("min")})}}function bp(n){return{sliderProps:new _e({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new _e({formatter:$e(n.formatter),keyScale:n.keyScale,pointerScale:$e(n.pointerScale)})}}const aw={containerUnitSize:"cnt-usz"};function yp(n){return`--${aw[n]}`}function ro(n){return ip(n)}function ir(n){if(Ec(n))return Ze(n,ro)}function Ii(n,t){if(!n)return;const e=[],i=tp(n,t);i&&e.push(i);const r=ep(n);return r&&e.push(r),new ho(e)}function lw(n){return n?n.major===ys.major:!1}function wp(n){if(n==="inline"||n==="popup")return n}function go(n,t){n.write(t)}const ta=De("ckb");class cw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(ta()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(ta("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(ta("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(ta("w")),this.labelElement.appendChild(s);const l=La(t,"check");s.appendChild(l),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class uw{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new cw(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function hw(n){const t=[],e=au(n.options);return e&&t.push(e),new ho(t)}const dw=Tn({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=Ze(t,i=>({options:i.optional.custom(fo),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>vp,constraint:n=>hw(n.params),writer:n=>go},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&ya(i,po);return r?new ur(t,{props:new _e({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new uw(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof ur?new su(n.controller):null}}),yr=De("col");class pw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(yr()),e.foldable.bindExpandedClass(this.element,yr(void 0,"expanded")),mi(e.foldable,"completed",bs(this.element,yr(void 0,"cpl")));const i=t.createElement("div");i.classList.add(yr("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(yr("s")),i.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(yr("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const l=t.createElement("div");l.classList.add(yr("p")),this.element.appendChild(l),this.pickerElement=l}else this.pickerElement=null}}function fw(n,t,e){const i=ln(n/255,0,1),r=ln(t/255,0,1),s=ln(e/255,0,1),l=Math.max(i,r,s),c=Math.min(i,r,s),d=l-c;let f=0,g=0;const v=(c+l)/2;return d!==0&&(g=d/(1-Math.abs(l+c-1)),i===l?f=(r-s)/d:r===l?f=2+(s-i)/d:f=4+(i-r)/d,f=f/6+(f<0?1:0)),[f*360,g*100,v*100]}function mw(n,t,e){const i=(n%360+360)%360,r=ln(t/100,0,1),s=ln(e/100,0,1),l=(1-Math.abs(2*s-1))*r,c=l*(1-Math.abs(i/60%2-1)),d=s-l/2;let f,g,v;return i>=0&&i<60?[f,g,v]=[l,c,0]:i>=60&&i<120?[f,g,v]=[c,l,0]:i>=120&&i<180?[f,g,v]=[0,l,c]:i>=180&&i<240?[f,g,v]=[0,c,l]:i>=240&&i<300?[f,g,v]=[c,0,l]:[f,g,v]=[l,0,c],[(f+d)*255,(g+d)*255,(v+d)*255]}function gw(n,t,e){const i=ln(n/255,0,1),r=ln(t/255,0,1),s=ln(e/255,0,1),l=Math.max(i,r,s),c=Math.min(i,r,s),d=l-c;let f;d===0?f=0:l===i?f=60*(((r-s)/d%6+6)%6):l===r?f=60*((s-i)/d+2):f=60*((i-r)/d+4);const g=l===0?0:d/l,v=l;return[f,g*100,v*100]}function Mp(n,t,e){const i=Zd(n,360),r=ln(t/100,0,1),s=ln(e/100,0,1),l=s*r,c=l*(1-Math.abs(i/60%2-1)),d=s-l;let f,g,v;return i>=0&&i<60?[f,g,v]=[l,c,0]:i>=60&&i<120?[f,g,v]=[c,l,0]:i>=120&&i<180?[f,g,v]=[0,l,c]:i>=180&&i<240?[f,g,v]=[0,c,l]:i>=240&&i<300?[f,g,v]=[c,0,l]:[f,g,v]=[l,0,c],[(f+d)*255,(g+d)*255,(v+d)*255]}function vw(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function _w(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function gi(n){return[n[0],n[1],n[2]]}function Ua(n,t){return[n[0],n[1],n[2],t]}const xw={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:vw,rgb:mw},hsv:{hsl:_w,hsv:(n,t,e)=>[n,t,e],rgb:Mp},rgb:{hsl:fw,hsv:gw,rgb:(n,t,e)=>[n,t,e]}};function vs(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function bw(n,t){return n===t?t:Zd(n,t)}function Sp(n,t,e){var i;const r=vs(t,e);return[t==="rgb"?ln(n[0],0,r[0]):bw(n[0],r[0]),ln(n[1],0,r[1]),ln(n[2],0,r[2]),ln((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function sd(n,t,e,i){const r=vs(t,e),s=vs(t,i);return n.map((l,c)=>l/r[c]*s[c])}function Ep(n,t,e){const i=sd(n,t.mode,t.type,"int"),r=xw[t.mode][e.mode](...i);return sd(r,e.mode,"int",e.type)}class Ue{static black(){return new Ue([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=Sp(t,e,this.type)}getComponents(t){return Ua(Ep(gi(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ji=De("colp");class yw{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Ji()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ji("hsv"));const r=t.createElement("div");r.classList.add(Ji("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=t.createElement("div");s.classList.add(Ji("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const l=t.createElement("div");if(l.classList.add(Ji("rgb")),this.textsView_=e.textsView,l.appendChild(this.textsView_.element),this.element.appendChild(l),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const c=t.createElement("div");c.classList.add(Ji("a"));const d=t.createElement("div");d.classList.add(Ji("ap")),d.appendChild(this.alphaViews_.palette.element),c.appendChild(d);const f=t.createElement("div");f.classList.add(Ji("at")),f.appendChild(this.alphaViews_.text.element),c.appendChild(f),this.element.appendChild(c)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function ww(n){return n==="int"?"int":n==="float"?"float":void 0}function lu(n){return Ze(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(ww)}),expanded:t.optional.boolean,picker:t.optional.custom(wp),readonly:t.optional.constant(!1)}))}function Ur(n){return n?.1:1}function Tp(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class cu{constructor(t,e){this.type="float",this.mode=e,this.comps_=Sp(t,e,this.type)}getComponents(t){return Ua(Ep(gi(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Mw={int:(n,t)=>new Ue(n,t),float:(n,t)=>new cu(n,t)};function uu(n,t,e){return Mw[e](n,t)}function Sw(n){return n.type==="float"}function Ew(n){return n.type==="int"}function Tw(n){const t=n.getComponents(),e=vs(n.mode,"int");return new Ue([Math.round(Oe(t[0],0,1,0,e[0])),Math.round(Oe(t[1],0,1,0,e[1])),Math.round(Oe(t[2],0,1,0,e[2])),t[3]],n.mode)}function Cw(n){const t=n.getComponents(),e=vs(n.mode,"int");return new cu([Oe(t[0],0,e[0],0,1),Oe(t[1],0,e[1],0,1),Oe(t[2],0,e[2],0,1),t[3]],n.mode)}function En(n,t){if(n.type===t)return n;if(Ew(n)&&t==="float")return Cw(n);if(Sw(n)&&t==="int")return Tw(n);throw Qe.shouldNeverHappen()}function Aw(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function qn(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const Pw={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Cp(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return Pw[i](e)}function Ap(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[qn(t[1],255),qn(t[2],255),qn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Rw(n){const t=Ap(n);return t?new Ue(t,"rgb"):null}function Pp(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[qn(t[1],255),qn(t[2],255),qn(t[3],255),qn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Dw(n){const t=Pp(n);return t?new Ue(t,"rgb"):null}function Rp(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Cp(t[1]),qn(t[2],100),qn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Lw(n){const t=Rp(n);return t?new Ue(t,"hsl"):null}function Dp(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Cp(t[1]),qn(t[2],100),qn(t[3],100),qn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Iw(n){const t=Dp(n);return t?new Ue(t,"hsl"):null}function Lp(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function Uw(n){const t=Lp(n);return t?new Ue(t,"rgb"):null}function Ip(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Oe(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Oe(parseInt(e[4],16),0,255,0,1)]:null}function Nw(n){const t=Ip(n);return t?new Ue(t,"rgb"):null}function Up(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Ow(n){return t=>{const e=Up(t);return e?uu(e,"rgb",n):null}}function Np(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Fw(n){return t=>{const e=Np(t);return e?uu(e,"rgb",n):null}}const kw=[{parser:Lp,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Ip,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Ap,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Pp,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Rp,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Dp,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Up,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Np,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Bw(n){return kw.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function Vw(n,t="int"){const e=Bw(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function vo(n){const t=[Uw,Nw,Rw,Dw,Lw,Iw];t.push(Ow("int"),Fw("int"));const e=tw(t);return i=>{const r=e(i);return r?En(r,n):null}}function zw(n){const t=vo("int");if(typeof n!="string")return Ue.black();const e=t(n);return e??Ue.black()}function Op(n){const t=ln(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function hu(n,t="#"){const e=gi(n.getComponents("rgb")).map(Op).join("");return`${t}${e}`}function du(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(Op).join("");return`${t}${i}`}function Fp(n){const t=Nn(0),e=En(n,"int");return`rgb(${gi(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function ha(n){const t=Nn(2),e=Nn(0);return`rgba(${En(n,"int").getComponents("rgb").map((s,l)=>(l===3?t:e)(s)).join(", ")})`}function Hw(n){const t=[Nn(0),wa,wa],e=En(n,"int");return`hsl(${gi(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function Gw(n){const t=[Nn(0),wa,wa,Nn(2)];return`hsla(${En(n,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function kp(n,t){const e=Nn(t==="float"?2:0),i=["r","g","b"],r=En(n,t);return`{${gi(r.getComponents("rgb")).map((l,c)=>`${i[c]}: ${e(l)}`).join(", ")}}`}function Ww(n){return t=>kp(t,n)}function Bp(n,t){const e=Nn(2),i=Nn(t==="float"?2:0),r=["r","g","b","a"];return`{${En(n,t).getComponents("rgb").map((c,d)=>{const f=d===3?e:i;return`${r[d]}: ${f(c)}`}).join(", ")}}`}function jw(n){return t=>Bp(t,n)}const Xw=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:hu},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:du},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:Fp},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:ha},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Hw},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Gw},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:Ww(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:jw(t)}],[])];function Vp(n){return Xw.reduce((t,e)=>t||(Aw(e.format,n)?e.stringifier:null),null)}const js=De("apl");class qw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(js()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(js("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(js("c")),i.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(js("m")),this.element.appendChild(s),this.markerElem_=s;const l=t.createElement("div");l.classList.add(js("p")),this.markerElem_.appendChild(l),this.previewElem_=l,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new Ue([e[0],e[1],e[2],0],"rgb"),r=new Ue([e[0],e[1],e[2],255],"rgb"),s=["to right",ha(i),ha(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=ha(t);const l=Oe(e[3],0,1,0,100);this.markerElem_.style.left=`${l}%`}onValueChange_(){this.update_()}}class Yw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new qw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[s,l,c]=r.getComponents("hsv");this.value.setRawValue(new Ue([s,l,c,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=In(Ur(!0),Fi(t));if(e===0)return;const i=this.value.rawValue,[r,s,l,c]=i.getComponents("hsv");this.value.setRawValue(new Ue([r,s,l,c+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){In(Ur(!0),Fi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const is=De("coltxt");function $w(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,r)=>{const s=n.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},n.createDocumentFragment())),t}class Kw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(is()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(is("m")),this.modeElem_=$w(t),this.modeElem_.classList.add(is("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(is("mm")),r.appendChild(La(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(is("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),Ni(e.mode,l=>{this.modeElem_.value=l})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){op(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(is("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function Zw(n){return Nn(n==="float"?2:0)}function Jw(n,t,e){const i=vs(n,t)[e];return new lo({min:0,max:i})}function Qw(n,t,e){return new mo(n,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:_e.fromObject({formatter:Zw(t.colorType),keyScale:Ur(!1),pointerScale:t.colorType==="float"?.01:1}),value:$e(0,{constraint:Jw(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function tM(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:Oi,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=Qw(n,e,i);return Ms({primary:t.value,secondary:r.value,forward(s){return En(s,t.colorType).getComponents(t.colorMode)[i]},backward(s,l){const c=t.colorMode,f=En(s,t.colorType).getComponents(c);f[i]=l;const g=uu(Ua(gi(f),f[3]),c,t.colorType);return En(g,"int")}}),r})}function eM(n,t){const e=new no(n,{parser:vo("int"),props:_e.fromObject({formatter:hu}),value:$e(Ue.black()),viewProps:t.viewProps});return Ms({primary:t.value,secondary:e.value,forward:i=>new Ue(gi(i.getComponents()),i.mode),backward:(i,r)=>new Ue(Ua(gi(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function nM(n){return n!=="hex"}class iM{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=$e(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Kw(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return nM(e)?tM(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):eM(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const Nl=De("hpl");class rM{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Nl()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Nl("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Nl("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=Fp(new Ue([e,100,100],"hsv"));const i=Oe(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class sM{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new rM(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Oe(ln(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,l,c]=r.getComponents("hsv");this.value.setRawValue(new Ue([i,s,l,c],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=In(Ur(!1),Fi(t));if(e===0)return;const i=this.value.rawValue,[r,s,l,c]=i.getComponents("hsv");this.value.setRawValue(new Ue([r+e,s,l,c],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){In(Ur(!1),Fi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ol=De("svp"),od=64;class oM{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Ol()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=od,i.width=od,i.classList.add(Ol("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(Ol("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=sy(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,l=t.getImageData(0,0,r,s),c=l.data;for(let g=0;g<s;g++)for(let v=0;v<r;v++){const x=Oe(v,0,r,0,100),w=Oe(g,0,s,100,0),M=Mp(i[0],x,w),T=(g*r+v)*4;c[T]=M[0],c[T+1]=M[1],c[T+2]=M[2],c[T+3]=255}t.putImageData(l,0,0);const d=Oe(i[1],0,100,0,100);this.markerElem_.style.left=`${d}%`;const f=Oe(i[2],0,100,100,0);this.markerElem_.style.top=`${f}%`}onValueChange_(){this.update_()}}class aM{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new oM(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Oe(t.point.x,0,t.bounds.width,0,100),r=Oe(t.point.y,0,t.bounds.height,100,0),[s,,,l]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ue([s,i,r,l],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){xp(t.key)&&t.preventDefault();const[e,i,r,s]=this.value.rawValue.getComponents("hsv"),l=Ur(!1),c=In(l,Fi(t)),d=In(l,io(t));c===0&&d===0||this.value.setRawValue(new Ue([e,i+c,r+d,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Ur(!1),i=In(e,Fi(t)),r=In(e,io(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class lM{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new sM(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new aM(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Yw(t,{value:this.value,viewProps:this.viewProps}),text:new mo(t,{parser:Oi,props:_e.fromObject({pointerScale:.01,keyScale:.1,formatter:Nn(2)}),value:$e(0,{constraint:new lo({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Ms({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new Ue(s,i.mode)}}),this.textsC_=new iM(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new yw(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Fl=De("colsw");class cM{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Fl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Fl("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(Fl("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=du(t)}onValueChange_(){this.update_()}}class uM{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new cM(t,{value:this.value,viewProps:this.viewProps})}}class pu{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=uo.create(e.expanded),this.swatchC_=new uM(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new no(t,{parser:e.parser,props:_e.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new pw(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new gp(t,{viewProps:this.viewProps}):null;const r=new lM(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),Ms({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,l)=>l})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),ru(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=ap(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!Jc(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function hM(n){return gi(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function dM(n){return n.getComponents("rgb").reduce((t,e,i)=>{const r=Math.floor(i===3?e*255:e)&255;return t<<8|r},0)>>>0}function pM(n){return new Ue([n>>16&255,n>>8&255,n&255],"rgb")}function fM(n){return new Ue([n>>24&255,n>>16&255,n>>8&255,Oe(n&255,0,255,0,1)],"rgb")}function mM(n){return typeof n!="number"?Ue.black():pM(n)}function gM(n){return typeof n!="number"?Ue.black():fM(n)}function da(n,t){return typeof n!="object"||je(n)?!1:t in n&&typeof n[t]=="number"}function zp(n){return da(n,"r")&&da(n,"g")&&da(n,"b")}function Hp(n){return zp(n)&&da(n,"a")}function Gp(n){return zp(n)}function fu(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==i[r])return!1;return!0}function ad(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function vM(n){const t=Vp(n);return t?(e,i)=>{go(e,t(i))}:null}function _M(n){const t=n?dM:hM;return(e,i)=>{go(e,t(i))}}function xM(n,t,e){const r=En(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function bM(n,t,e){const r=En(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function yM(n,t){return(e,i)=>{n?xM(e,i,t):bM(e,i,t)}}function wM(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function MM(n){return n?t=>du(t,"0x"):t=>hu(t,"0x")}function SM(n){return"color"in n||n.view==="color"}const EM=Tn({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!SM(t))return null;const e=lu(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:wM(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?gM:mM,equals:fu,writer:n=>_M(n.params.supportsAlpha)},controller:n=>{var t,e;return new pu(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:MM(n.params.supportsAlpha),parser:vo("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function TM(n,t){if(!Gp(n))return En(Ue.black(),t);if(t==="int"){const e=ad(n);return new Ue(e,"rgb")}if(t==="float"){const e=ad(n);return new cu(e,"rgb")}return En(Ue.black(),"int")}function CM(n){return Hp(n)}function AM(n){return t=>{const e=TM(t,n);return En(e,"int")}}function PM(n,t){return e=>n?Bp(e,t):kp(e,t)}const RM=Tn({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!Gp(n))return null;const i=lu(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=Tp(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>AM(n.params.colorType),equals:fu,writer:n=>yM(CM(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=Hp(n.initialValue);return new pu(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:PM(i,n.params.colorType),parser:vo("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),DM=Tn({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=Vw(n,Tp(t));if(!e)return null;const i=Vp(e);if(!i)return null;const r=lu(t);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:e,stringifier:i})}:null},binding:{reader:()=>zw,equals:fu,writer:n=>{const t=vM(n.params.format);if(!t)throw Qe.notBindable();return t}},controller:n=>{var t,e;return new pu(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:vo("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class mu{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,r)=>{var s,l;return(l=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&l!==void 0?l:i});return this.asm_.fromComponents(e)}}const ld=De("pndtxt");class LM{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(ld()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(ld("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function IM(n,t,e){return new mo(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:$e(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class gu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,r)=>IM(t,e,r)),this.acs_.forEach((i,r)=>{Ms({primary:this.value,secondary:i.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,l)=>{const c=e.assembly.toComponents(s);return c[r]=l,e.assembly.fromComponents(c)}})}),this.view=new LM(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class UM extends eo{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function NM(n,t){const e=[],i=tp(n,t);i&&e.push(i);const r=ep(n);r&&e.push(r);const s=au(n.options);return s&&e.push(s),new ho(e)}const OM=Tn({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=Ze(t,i=>Object.assign(Object.assign({},ip(i)),{options:i.optional.custom(fo),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Kd,constraint:n=>NM(n.params,n.initialValue),writer:n=>go},controller:n=>{const t=n.value,e=n.constraint,i=e&&ya(e,po);if(i)return new ur(n.document,{props:new _e({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const r=np(n.params,t.rawValue),s=e&&ya(e,lo);return s?new Ma(n.document,Object.assign(Object.assign({},bp(Object.assign(Object.assign({},r),{keyScale:$e(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:Oi,value:t,viewProps:n.viewProps})):new mo(n.document,{parser:Oi,props:_e.fromObject(r),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof Ma?new UM(n.controller):n.controller.valueController instanceof ur?new su(n.controller):null}});class or{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const Wp={toComponents:n=>n.getComponents(),fromComponents:n=>new or(...n)},rs=De("p2d");class FM{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(rs()),e.viewProps.bindClassModifiers(this.element),Ni(e.expanded,bs(this.element,rs(void 0,"expanded")));const i=t.createElement("div");i.classList.add(rs("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(rs("b")),r.appendChild(La(t,"p2dpad")),e.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(rs("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const l=t.createElement("div");l.classList.add(rs("p")),this.element.appendChild(l),this.pickerElement=l}else this.pickerElement=null}}const Qi=De("p2dp");class kM{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(Qi()),e.layout==="popup"&&this.element.classList.add(Qi(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Qi("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(di,"svg");r.classList.add(Qi("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(di,"line");s.classList.add(Qi("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const l=t.createElementNS(di,"line");l.classList.add(Qi("ax")),l.setAttributeNS(null,"x1","50%"),l.setAttributeNS(null,"y1","0"),l.setAttributeNS(null,"x2","50%"),l.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(l);const c=t.createElementNS(di,"line");c.classList.add(Qi("l")),c.setAttributeNS(null,"x1","50%"),c.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(c),this.lineElem_=c;const d=t.createElement("div");d.classList.add(Qi("m")),this.padElement.appendChild(d),this.markerElem_=d,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=Oe(t,-i,+i,0,100),s=Oe(e,-i,+i,0,100),l=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${l}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${l}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function cd(n,t,e){return[In(t[0],Fi(n)),In(t[1],io(n))*(e?1:-1)]}class BM{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new kM(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),r=Oe(t.point.x,0,t.bounds.width,-i,+i),s=Oe(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new or(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){xp(t.key)&&t.preventDefault();const[e,i]=cd(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new or(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=cd(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class VM{constructor(t,e){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=uo.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new gp(t,{viewProps:this.viewProps}):null;const s=new BM(t,{layout:e.pickerLayout,props:new _e({invertsY:$e(e.invertsY),max:$e(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(l=>{l.addEventListener("blur",this.onPopupChildBlur_),l.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new gu(t,{assembly:Wp,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new FM(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Ms({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:l=>l,backward:(l,c)=>c})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),ru(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=ap(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!Jc(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function zM(n){return or.isObject(n)?new or(n.x,n.y):new or}function HM(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function GM(n,t){return new mu({assembly:Wp,components:[Ii(Object.assign(Object.assign({},n),n.x),t.x),Ii(Object.assign(Object.assign({},n),n.y),t.y)]})}function ud(n,t){var e,i;if(!je(n.min)||!je(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=Jd(n);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function WM(n,t){var e,i;const r=ud(Lr(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),s=ud(Lr(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,s)}function jM(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const XM=Tn({id:"input-point2d",type:"input",accept:(n,t)=>{if(!or.isObject(n))return null;const e=Ze(t,i=>Object.assign(Object.assign({},ro(i)),{expanded:i.optional.boolean,picker:i.optional.custom(wp),readonly:i.optional.constant(!1),x:i.optional.custom(ir),y:i.optional.object(Object.assign(Object.assign({},ro(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>zM,constraint:n=>GM(n.params,n.initialValue),equals:or.equals,writer:()=>HM},controller:n=>{var t,e;const i=n.document,r=n.value,s=n.constraint,l=[n.params.x,n.params.y];return new VM(i,{axes:r.rawValue.getComponents().map((c,d)=>{var f;return Zc({constraint:s.components[d],initialValue:c,params:Lr(n.params,(f=l[d])!==null&&f!==void 0?f:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:jM(n.params),max:WM(n.params,r.rawValue),parser:Oi,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:n.viewProps})}});class us{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y,r=t.z;return!(typeof e!="number"||typeof i!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const jp={toComponents:n=>n.getComponents(),fromComponents:n=>new us(...n)};function qM(n){return us.isObject(n)?new us(n.x,n.y,n.z):new us}function YM(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function $M(n,t){return new mu({assembly:jp,components:[Ii(Object.assign(Object.assign({},n),n.x),t.x),Ii(Object.assign(Object.assign({},n),n.y),t.y),Ii(Object.assign(Object.assign({},n),n.z),t.z)]})}const KM=Tn({id:"input-point3d",type:"input",accept:(n,t)=>{if(!us.isObject(n))return null;const e=Ze(t,i=>Object.assign(Object.assign({},ro(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(ir),y:i.optional.custom(ir),z:i.optional.custom(ir)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>qM,constraint:n=>$M(n.params,n.initialValue),equals:us.equals,writer:n=>YM},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new gu(n.document,{assembly:jp,axes:t.rawValue.getComponents().map((r,s)=>{var l;return Zc({constraint:e.components[s],initialValue:r,params:Lr(n.params,(l=i[s])!==null&&l!==void 0?l:{})})}),parser:Oi,value:t,viewProps:n.viewProps})}});class hs{constructor(t=0,e=0,i=0,r=0){this.x=t,this.y=e,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Xp={toComponents:n=>n.getComponents(),fromComponents:n=>new hs(...n)};function ZM(n){return hs.isObject(n)?new hs(n.x,n.y,n.z,n.w):new hs}function JM(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function QM(n,t){return new mu({assembly:Xp,components:[Ii(Object.assign(Object.assign({},n),n.x),t.x),Ii(Object.assign(Object.assign({},n),n.y),t.y),Ii(Object.assign(Object.assign({},n),n.z),t.z),Ii(Object.assign(Object.assign({},n),n.w),t.w)]})}const tS=Tn({id:"input-point4d",type:"input",accept:(n,t)=>{if(!hs.isObject(n))return null;const e=Ze(t,i=>Object.assign(Object.assign({},ro(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(ir),x:i.optional.custom(ir),y:i.optional.custom(ir),z:i.optional.custom(ir)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>ZM,constraint:n=>QM(n.params,n.initialValue),equals:hs.equals,writer:n=>JM},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new gu(n.document,{assembly:Xp,axes:t.rawValue.getComponents().map((r,s)=>{var l;return Zc({constraint:e.components[s],initialValue:r,params:Lr(n.params,(l=i[s])!==null&&l!==void 0?l:{})})}),parser:Oi,value:t,viewProps:n.viewProps})}});function eS(n){const t=[],e=au(n.options);return e&&t.push(e),new ho(t)}const nS=Tn({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=Ze(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(fo)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>_p,constraint:n=>eS(n.params),writer:n=>go},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&ya(i,po);return r?new ur(t,{props:new _e({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new no(t,{parser:s=>s,props:_e.fromObject({formatter:Rc}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof ur?new su(n.controller):null}}),_o={monitor:{defaultInterval:200,defaultRows:3}},hd=De("mll");class iS{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(hd()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(hd("i")),i.style.height=`calc(var(${yp("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class vu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new iS(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const dd=De("sgl");class rS{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(dd()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(dd("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class _u{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new rS(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const sS=Tn({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=Ze(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>vp},controller:n=>{var t;return n.value.rawValue.length===1?new _u(n.document,{formatter:rd,value:n.value,viewProps:n.viewProps}):new vu(n.document,{formatter:rd,rows:(t=n.params.rows)!==null&&t!==void 0?t:_o.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class oS extends eo{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const tr=De("grl");class aS{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(tr()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(di,"svg");i.classList.add(tr("g")),i.style.height=`calc(var(${yp("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(di,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(tr("t"),De("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),l=[];this.value.rawValue.forEach((v,x)=>{if(v===void 0)return;const w=Oe(x,0,i,0,t),M=Oe(v,r,s,e,0);l.push([w,M].join(","))}),this.lineElem_.setAttributeNS(null,"points",l.join(" "));const c=this.tooltipElem_,d=this.value.rawValue[this.cursor_.rawValue];if(d===void 0){c.classList.remove(tr("t","a"));return}const f=Oe(this.cursor_.rawValue,0,i,0,t),g=Oe(d,r,s,e,0);c.style.left=`${f}px`,c.style.top=`${g}px`,c.textContent=`${this.formatter_(d)}`,c.classList.contains(tr("t","a"))||(c.classList.add(tr("t","a"),tr("t","in")),ba(c),c.classList.remove(tr("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class qp{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=$e(-1),this.view=new aS(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!Jc(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new Fr(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return Bn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return Vn(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(Oe(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Oe(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Dc(n){return je(n.format)?Nn(2):n.format}function lS(n){var t;return n.value.rawValue.length===1?new _u(n.document,{formatter:Dc(n.params),value:n.value,viewProps:n.viewProps}):new vu(n.document,{formatter:Dc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:_o.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function cS(n){var t,e,i;return new qp(n.document,{formatter:Dc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:_o.monitor.defaultRows,props:_e.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function pd(n){return n.view==="graph"}const uS=Tn({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=Ze(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>pd(n)?64:1,reader:n=>Kd},controller:n=>pd(n.params)?cS(n):lS(n),api:n=>n.controller.valueController instanceof qp?new oS(n.controller):null}),hS=Tn({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=Ze(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>_p},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new vu(n.document,{formatter:Rc,rows:(t=n.params.rows)!==null&&t!==void 0?t:_o.monitor.defaultRows,value:e,viewProps:n.viewProps}):new _u(n.document,{formatter:Rc,value:e,viewProps:n.viewProps})}});class dS{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class pS{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function fS(n,t){var e;const i=n.accept(t.target.read(),t.params);if(je(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},s=Ze(t.params,v=>({disabled:v.optional.boolean,hidden:v.optional.boolean,label:v.optional.string,tag:v.optional.string})),l=n.binding.reader(r),c=n.binding.constraint?n.binding.constraint(r):void 0,d=new pS({reader:l,target:t.target,writer:n.binding.writer(r)}),f=new Zb($e(l(i.initialValue),{constraint:c,equals:n.binding.equals}),d),g=n.controller({constraint:c,document:t.document,initialValue:i.initialValue,params:i.params,value:f,viewProps:Bi.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new dy(t.document,{blade:ws(),props:_e.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:f,valueController:g})}class mS{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function gS(n,t){return t===0?new Yy:new $y(n,t??_o.monitor.defaultInterval)}function vS(n,t){var e,i,r;const s=n.accept(t.target.read(),t.params);if(je(s))return null;const l={target:t.target,initialValue:s.initialValue,params:s.params},c=Ze(t.params,x=>({bufferSize:x.optional.number,disabled:x.optional.boolean,hidden:x.optional.boolean,interval:x.optional.number,label:x.optional.string})),d=n.binding.reader(l),f=(i=(e=c==null?void 0:c.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,g=new vy({binding:new mS({reader:d,target:t.target}),bufferSize:f,ticker:gS(t.document,c==null?void 0:c.interval)}),v=n.controller({document:t.document,params:s.params,value:g,viewProps:Bi.create({disabled:c==null?void 0:c.disabled,hidden:c==null?void 0:c.hidden})});return v.viewProps.bindDisabled(g.ticker),v.viewProps.handleDispose(()=>{g.ticker.dispose()}),new xy(t.document,{blade:ws(),props:_e.fromObject({label:"label"in t.params?(r=c==null?void 0:c.label)!==null&&r!==void 0?r:null:t.target.key}),value:g,valueController:v})}class _S{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!lw(e.core))throw Qe.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??fS(s,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??vS(s,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const r=e.read();if(je(r))throw new Qe({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,i);if(s)return s;const l=this.createMonitor_(t,e,i);if(l)return l;throw new Qe({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((r,s)=>r??qy(s,{document:t,params:e}),null);if(!i)throw new Qe({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,r)=>{var s,l;return i||((l=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&l!==void 0?l:null)},null);return this.apiCache_.add(t,e??new eo(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,r)=>{var s,l;return i||((l=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&l!==void 0?l:null)},null);return this.apiCache_.add(t,e??new eo(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(py(t))return this.createInputBindingApi_(t);if(by(t))return this.createMonitorBindingApi_(t);throw Qe.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(hy(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!e)throw Qe.shouldNeverHappen();return this.apiCache_.add(t,e)}}const xS=new dS;function bS(){const n=new _S(xS);return[XM,KM,tS,nS,OM,DM,RM,EM,dw,sS,hS,uS,Ey,ky,mp].forEach(t=>{n.register("core",t)}),n}class yS extends Or{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new co(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class wS extends Or{}class MS extends Or{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new co(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class SS extends Or{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new co(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const ES=function(){return{id:"list",type:"blade",core:ys,accept(n){const t=Ze(n,e=>({options:e.required.custom(fo),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new po(ou(n.params.options)),e=$e(n.params.value,{constraint:t}),i=new ur(n.document,{props:new _e({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Ir(n.document,{blade:n.blade,props:_e.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Ir)||!(n.controller.valueController instanceof ur)?null:new yS(n.controller)}}}();class TS extends pp{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class CS extends Ac{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const fd=De("spr");class AS{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(fd()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(fd("r")),this.element.appendChild(i)}}class md extends Ia{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new AS(t,{viewProps:e.viewProps})}))}}const PS={id:"separator",type:"blade",core:ys,accept(n){const t=Ze(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new md(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof md?new wS(n.controller):null}},RS={id:"slider",type:"blade",core:ys,accept(n){const t=Ze(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,r=new lo({max:n.params.max,min:n.params.min}),s=$e(i,{constraint:r}),l=new Ma(n.document,Object.assign(Object.assign({},bp({formatter:(e=n.params.format)!==null&&e!==void 0?e:Xb,keyScale:$e(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:Qd(n.params,i)})),{parser:Oi,value:s,viewProps:n.viewProps}));return new Ir(n.document,{blade:n.blade,props:_e.fromObject({label:n.params.label}),value:s,valueController:l})},api(n){return!(n.controller instanceof Ir)||!(n.controller.valueController instanceof Ma)?null:new MS(n.controller)}},DS=function(){return{id:"text",type:"blade",core:ys,accept(n){const t=Ze(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=$e(n.params.value),i=new no(n.document,{parser:n.params.parse,props:_e.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:n.viewProps});return new Ir(n.document,{blade:n.blade,props:_e.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Ir)||!(n.controller.valueController instanceof no)?null:new SS(n.controller)}}}();function LS(n){const t=n.createElement("div");return t.classList.add(De("dfw")()),n.body&&n.body.appendChild(t),t}function IS(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class US extends TS{constructor(t){var e,i;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:ry(),l=bS(),c=new CS(s,{expanded:r.expanded,blade:ws(),props:_e.fromObject({title:r.title}),viewProps:Bi.create()});super(c,l),this.pool_=l,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:LS(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Qe.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw Qe.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&IS(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[ES,PS,RS,mp,DS]})}}new dp("4.0.5");function NS(n){const t=new US({title:"controls",container:ua("#controls")[0]}),e=t.addButton({title:"start"});e.on("click",g=>{var v;(v=n.sphere)==null||v.roll(),e.disabled=!0});const i={"point light":!0,"spot light":!0,"tracking light":!0,helpers:!1,shading:"phong",texture:!1};t.addBinding(i,"point light").on("change",g=>{n.lightingManager.togglePointLight()}),t.addBinding(i,"spot light").on("change",g=>{n.lightingManager.toggleSpotLight()}),t.addBinding(i,"tracking light").on("change",g=>{n.lightingManager.toggleTrackingSpotlight()}),t.addBinding(i,"helpers").on("change",g=>{n.lightingManager.toggleHelpers()}),t.addBinding(i,"shading",{options:{Gouraud:"gouraud",Phong:"phong"}}).on("change",g=>{n.toggleShadingModel(g.value)}),t.addBinding(i,"texture").on("change",g=>{n.toggleTexture()})}class OS{constructor(){Kt(this,"canvas");Kt(this,"scene");Kt(this,"renderer");Kt(this,"activeCamera");Kt(this,"topCamera");Kt(this,"followCamera");Kt(this,"clock");Kt(this,"sceneGraph");Kt(this,"lightingManager");Kt(this,"activeDomino",null);Kt(this,"sphere",null);Kt(this,"isFollowCameraActive",!1);Kt(this,"gouraudMaterial");Kt(this,"phongMaterial");Kt(this,"currentShadingModel","phong");Kt(this,"useTexture",!1);Kt(this,"woodTexture");Kt(this,"materialObjects",[]);this.canvas=ua("#main-canvas")[0],this.scene=new km,this.renderer=new Bx({antialias:!0,canvas:this.canvas}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.shadowMap.enabled=!0,this.topCamera=new jd(75,this.aspect,.1,5e4,this.canvas),this.followCamera=new tb(75,this.aspect,.1,5e4,this.canvas),this.activeCamera=this.topCamera,ua(this.canvas).on("resize",()=>{this.activeCamera.aspect=this.aspect,this.activeCamera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight)}),this.clock=new Wc,this.sceneGraph=new Xd,this.lightingManager=new hb(this.scene);const t=new $m;this.woodTexture=t.load("src/assets/textures/wood.jpg"),this.woodTexture.wrapS=qs,this.woodTexture.wrapT=qs;const e=new se(16711680);this.gouraudMaterial=new ci({color:e}),this.phongMaterial=new li({color:e,shininess:100}),this.setupKeyBindings(),NS(this),this.populateScene(),this.animate()}get aspect(){return this.canvas.clientWidth/this.canvas.clientHeight}add(t){this.scene.add(t.mesh),this.sceneGraph.add(t),t.mesh instanceof vn&&this.materialObjects.push(t.mesh)}animate(){this.renderer.render(this.scene,this.activeCamera),this.activeCamera.update(),this.updateActiveObject(),this.sceneGraph.update(this.clock.getDelta()),requestAnimationFrame(()=>this.animate())}updateActiveObject(){if(this.sphere&&!this.sphere.collided)this.lightingManager.setTrackingObject(this.sphere.mesh),this.isFollowCameraActive&&this.followCamera.setTarget(this.sphere.mesh);else{const t=this.sceneGraph.children.filter(e=>e instanceof _a&&e.mesh.userData.domino&&e.mesh.userData.domino.toppling&&!e.mesh.userData.domino.fallen);if(t.length>0){const e=t[t.length-1];this.lightingManager.setTrackingObject(e.mesh),this.isFollowCameraActive&&this.followCamera.setTarget(e.mesh)}else this.lightingManager.setTrackingObject(null)}this.lightingManager.updateTrackingSpotlight()}setupKeyBindings(){ua(document).on("keydown",t=>{t.key==="c"&&this.toggleCamera(),t.key==="t"&&this.toggleTexture(),this.isFollowCameraActive&&((t.key==="a"||t.key==="ArrowLeft")&&this.followCamera.rotateHorizontal(.1),(t.key==="d"||t.key==="ArrowRight")&&this.followCamera.rotateHorizontal(-.1))})}toggleCamera(){if(this.isFollowCameraActive=!this.isFollowCameraActive,this.isFollowCameraActive)if(this.activeCamera=this.followCamera,this.sphere&&!this.sphere.collided)this.followCamera.setTarget(this.sphere.mesh);else{const t=this.sceneGraph.children.filter(e=>e instanceof _a&&e.mesh.userData.domino&&e.mesh.userData.domino.toppling&&!e.mesh.userData.domino.fallen);if(t.length>0){const e=t[t.length-1];this.followCamera.setTarget(e.mesh)}else this.sphere&&this.followCamera.setTarget(this.sphere.mesh)}else this.activeCamera=this.topCamera}toggleTexture(){this.useTexture=!this.useTexture;for(const t of this.materialObjects)if(t.userData.domino){const e=t.userData.domino;this.updateDominoMaterial(e)}}updateDominoMaterial(t){const e=new se(1401481),i=new se(e).multiplyScalar(.6);this.useTexture?this.currentShadingModel==="gouraud"?(t.standingMat=new ci({map:this.woodTexture,side:Xe}),t.fallenMat=new ci({map:this.woodTexture,side:Xe,color:i})):(t.standingMat=new li({map:this.woodTexture,side:Xe,shininess:30}),t.fallenMat=new li({map:this.woodTexture,side:Xe,color:i,shininess:30})):this.currentShadingModel==="gouraud"?(t.standingMat=new ci({color:e,side:Xe}),t.fallenMat=new ci({color:i,side:Xe})):(t.standingMat=new li({color:e,side:Xe,shininess:30}),t.fallenMat=new li({color:i,side:Xe,shininess:30})),t.fallen?t.mesh.material=t.fallenMat:t.mesh.material=t.standingMat}toggleShadingModel(t){this.currentShadingModel=t;for(const e of this.materialObjects)if(e.material instanceof ki){const i=e.material,r=i.hasOwnProperty("color")?i.color:new se(16777215);let s;if(e.userData.domino){const l=e.userData.domino;this.updateDominoMaterial(l);continue}t==="gouraud"?s=new ci({color:r,side:i.side}):s=new li({color:r,shininess:100,side:i.side});for(const l in i.userData)s.userData[l]=i.userData[l];e.material=s}if(this.sphere){const e=this.currentShadingModel==="phong"?this.phongMaterial:this.gouraudMaterial;this.sphere.mesh.material=e}}populateScene(){const t=new vn(new ao(50,50),new Gm({color:new se(11513775)}));t.rotation.x=-Math.PI/2,t.position.y=-1,t.receiveShadow=!0,this.scene.add(t),this.materialObjects.push(t),this.activeCamera.position.set(0,5,5);const e=new B(1,0,0),i=this.currentShadingModel==="phong"?this.phongMaterial:this.gouraudMaterial,r=new sb(e,i);r.mesh.position.set(-5,0,0),this.add(r),this.sphere=r,this.lightingManager.setTrackingObject(r.mesh),this.followCamera.setTarget(r.mesh);const s=ub(this.scene,this.sceneGraph,new B(1,0,0),e,this.materialObjects,this.currentShadingModel,this.useTexture,this.woodTexture);r.addCollidable(s[0])}}new OS;
