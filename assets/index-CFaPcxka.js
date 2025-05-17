var gf=Object.defineProperty;var vf=(n,t,e)=>t in n?gf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var fe=(n,t,e)=>vf(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="176",rs={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_f=0,Tu=1,xf=2,ud=1,bf=2,Ci=3,rr=0,Ln=1,Ai=2,er=0,ss=1,Cu=2,Au=3,Pu=4,yf=5,br=100,wf=101,Sf=102,Ef=103,Mf=104,Tf=200,Cf=201,Af=202,Pf=203,Ll=204,Il=205,Rf=206,Df=207,Lf=208,If=209,Uf=210,Nf=211,Of=212,Ff=213,kf=214,Ul=0,Nl=1,Ol=2,cs=3,Fl=4,kl=5,Bl=6,Vl=7,hd=0,Bf=1,Vf=2,nr=0,zf=1,Hf=2,Gf=3,Wf=4,jf=5,Xf=6,qf=7,dd=300,us=301,hs=302,zl=303,Hl=304,ba=306,Gl=1e3,Sr=1001,Wl=1002,ti=1003,Yf=1004,So=1005,ai=1006,Wa=1007,Er=1008,ui=1009,pd=1010,fd=1011,js=1012,Pc=1013,Tr=1014,Pi=1015,eo=1016,Rc=1017,Dc=1018,Xs=1020,md=35902,gd=1021,vd=1022,Qn=1023,qs=1026,Ys=1027,_d=1028,Lc=1029,xd=1030,Ic=1031,Uc=1033,Zo=33776,Jo=33777,Qo=33778,ta=33779,jl=35840,Xl=35841,ql=35842,Yl=35843,$l=36196,Kl=37492,Zl=37496,Jl=37808,Ql=37809,tc=37810,ec=37811,nc=37812,ic=37813,rc=37814,sc=37815,oc=37816,ac=37817,lc=37818,cc=37819,uc=37820,hc=37821,ea=36492,dc=36494,pc=36495,bd=36283,fc=36284,mc=36285,gc=36286,$f=3200,Kf=3201,yd=0,Zf=1,Qi="",jn="srgb",ds="srgb-linear",la="linear",Ve="srgb",Vr=7680,Ru=519,Jf=512,Qf=513,tm=514,wd=515,em=516,nm=517,im=518,rm=519,Du=35044,Lu="300 es",Ri=2e3,ca=2001;class Lr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,ua=180/Math.PI;function no(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[e&63|128]+vn[e>>8&255]+"-"+vn[e>>16&255]+vn[e>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function ye(n,t,e){return Math.max(t,Math.min(e,n))}function sm(n,t){return(n%t+t)%t}function ja(n,t,e){return(1-e)*n+e*t}function Ls(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function An(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const om={DEG2RAD:na};class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*r+t.x,this.y=o*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,i,r,o,l,c,d,f){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,c,d,f)}set(t,e,i,r,o,l,c,d,f){const g=this.elements;return g[0]=t,g[1]=r,g[2]=c,g[3]=e,g[4]=o,g[5]=d,g[6]=i,g[7]=l,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,o=this.elements,l=i[0],c=i[3],d=i[6],f=i[1],g=i[4],v=i[7],_=i[2],w=i[5],E=i[8],T=r[0],y=r[3],m=r[6],O=r[1],U=r[4],R=r[7],W=r[2],z=r[5],u=r[8];return o[0]=l*T+c*O+d*W,o[3]=l*y+c*U+d*z,o[6]=l*m+c*R+d*u,o[1]=f*T+g*O+v*W,o[4]=f*y+g*U+v*z,o[7]=f*m+g*R+v*u,o[2]=_*T+w*O+E*W,o[5]=_*y+w*U+E*z,o[8]=_*m+w*R+E*u,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8];return e*l*g-e*c*f-i*o*g+i*c*d+r*o*f-r*l*d}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8],v=g*l-c*f,_=c*d-g*o,w=f*o-l*d,E=e*v+i*_+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(r*f-g*i)*T,t[2]=(c*i-r*l)*T,t[3]=_*T,t[4]=(g*e-r*d)*T,t[5]=(r*o-c*e)*T,t[6]=w*T,t[7]=(i*d-f*e)*T,t[8]=(l*e-i*o)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,l,c){const d=Math.cos(o),f=Math.sin(o);return this.set(i*d,i*f,-i*(d*l+f*c)+l+t,-r*f,r*d,-r*(-f*l+d*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new ue;function Sd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function am(){const n=ha("canvas");return n.style.display="block",n}const Iu={};function ia(n){n in Iu||(Iu[n]=!0,console.warn(n))}function lm(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function cm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function um(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Uu=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hm(){const n={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ve&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ve&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?la:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ds]:{primaries:t,whitePoint:i,transfer:la,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:i,transfer:Ve,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),n}const Le=hm();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zr;class dm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zr===void 0&&(zr=ha("canvas")),zr.width=t.width,zr.height=t.height;const r=zr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=zr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Li(o[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pm=0;class Nc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=no(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?o.push(qa(r[l].image)):o.push(qa(r[l]))}else o=qa(r);i.url=o}return e||(t.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fm=0;class In extends Lr{constructor(t=In.DEFAULT_IMAGE,e=In.DEFAULT_MAPPING,i=Sr,r=Sr,o=ai,l=Er,c=Qn,d=ui,f=In.DEFAULT_ANISOTROPY,g=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=no(),this.name="",this.source=new Nc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gl:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case Wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gl:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case Wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=dd;In.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,e=0,i=0,r=1){He.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o;const d=t.elements,f=d[0],g=d[4],v=d[8],_=d[1],w=d[5],E=d[9],T=d[2],y=d[6],m=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(f+w+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(f+1)/2,R=(w+1)/2,W=(m+1)/2,z=(g+_)/4,u=(v+T)/4,q=(E+y)/4;return U>R&&U>W?U<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(U),r=z/i,o=u/i):R>W?R<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(R),i=z/r,o=q/r):W<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(W),i=u/o,r=q/o),this.set(i,r,o,e),this}let O=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(v-T)/O,this.z=(_-g)/O,this.w=Math.acos((f+w+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mm extends Lr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth?i.depth:1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);const r={width:t,height:e,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const o=new In(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Nc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends mm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ed extends In{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gm extends In{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,l,c){let d=i[r+0],f=i[r+1],g=i[r+2],v=i[r+3];const _=o[l+0],w=o[l+1],E=o[l+2],T=o[l+3];if(c===0){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(c===1){t[e+0]=_,t[e+1]=w,t[e+2]=E,t[e+3]=T;return}if(v!==T||d!==_||f!==w||g!==E){let y=1-c;const m=d*_+f*w+g*E+v*T,O=m>=0?1:-1,U=1-m*m;if(U>Number.EPSILON){const W=Math.sqrt(U),z=Math.atan2(W,m*O);y=Math.sin(y*z)/W,c=Math.sin(c*z)/W}const R=c*O;if(d=d*y+_*R,f=f*y+w*R,g=g*y+E*R,v=v*y+T*R,y===1-c){const W=1/Math.sqrt(d*d+f*f+g*g+v*v);d*=W,f*=W,g*=W,v*=W}}t[e]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,r,o,l){const c=i[r],d=i[r+1],f=i[r+2],g=i[r+3],v=o[l],_=o[l+1],w=o[l+2],E=o[l+3];return t[e]=c*E+g*v+d*w-f*_,t[e+1]=d*E+g*_+f*v-c*w,t[e+2]=f*E+g*w+c*_-d*v,t[e+3]=g*E-c*v-d*_-f*w,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,o=t._z,l=t._order,c=Math.cos,d=Math.sin,f=c(i/2),g=c(r/2),v=c(o/2),_=d(i/2),w=d(r/2),E=d(o/2);switch(l){case"XYZ":this._x=_*g*v+f*w*E,this._y=f*w*v-_*g*E,this._z=f*g*E+_*w*v,this._w=f*g*v-_*w*E;break;case"YXZ":this._x=_*g*v+f*w*E,this._y=f*w*v-_*g*E,this._z=f*g*E-_*w*v,this._w=f*g*v+_*w*E;break;case"ZXY":this._x=_*g*v-f*w*E,this._y=f*w*v+_*g*E,this._z=f*g*E+_*w*v,this._w=f*g*v-_*w*E;break;case"ZYX":this._x=_*g*v-f*w*E,this._y=f*w*v+_*g*E,this._z=f*g*E-_*w*v,this._w=f*g*v+_*w*E;break;case"YZX":this._x=_*g*v+f*w*E,this._y=f*w*v+_*g*E,this._z=f*g*E-_*w*v,this._w=f*g*v-_*w*E;break;case"XZY":this._x=_*g*v-f*w*E,this._y=f*w*v-_*g*E,this._z=f*g*E+_*w*v,this._w=f*g*v+_*w*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],o=e[8],l=e[1],c=e[5],d=e[9],f=e[2],g=e[6],v=e[10],_=i+c+v;if(_>0){const w=.5/Math.sqrt(_+1);this._w=.25/w,this._x=(g-d)*w,this._y=(o-f)*w,this._z=(l-r)*w}else if(i>c&&i>v){const w=2*Math.sqrt(1+i-c-v);this._w=(g-d)/w,this._x=.25*w,this._y=(r+l)/w,this._z=(o+f)/w}else if(c>v){const w=2*Math.sqrt(1+c-i-v);this._w=(o-f)/w,this._x=(r+l)/w,this._y=.25*w,this._z=(d+g)/w}else{const w=2*Math.sqrt(1+v-i-c);this._w=(l-r)/w,this._x=(o+f)/w,this._y=(d+g)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,o=t._z,l=t._w,c=e._x,d=e._y,f=e._z,g=e._w;return this._x=i*g+l*c+r*f-o*d,this._y=r*g+l*d+o*c-i*f,this._z=o*g+l*f+i*d-r*c,this._w=l*g-i*c-r*d-o*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,o=this._z,l=this._w;let c=l*t._w+i*t._x+r*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const d=1-c*c;if(d<=Number.EPSILON){const w=1-e;return this._w=w*l+e*this._w,this._x=w*i+e*this._x,this._y=w*r+e*this._y,this._z=w*o+e*this._z,this.normalize(),this}const f=Math.sqrt(d),g=Math.atan2(f,c),v=Math.sin((1-e)*g)/f,_=Math.sin(e*g)/f;return this._w=l*v+this._w*_,this._x=i*v+this._x*_,this._y=r*v+this._y*_,this._z=o*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,o=t.x,l=t.y,c=t.z,d=t.w,f=2*(l*r-c*i),g=2*(c*e-o*r),v=2*(o*i-l*e);return this.x=e+d*f+l*v-c*g,this.y=i+d*g+c*f-o*v,this.z=r+d*v+o*g-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,o=t.z,l=e.x,c=e.y,d=e.z;return this.x=r*d-o*c,this.y=o*l-i*d,this.z=i*c-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new V,Ou=new sr;class Ar{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,$n):$n.fromBufferAttribute(o,l),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Mo.subVectors(this.max,Is),Hr.subVectors(t.a,Is),Gr.subVectors(t.b,Is),Wr.subVectors(t.c,Is),Gi.subVectors(Gr,Hr),Wi.subVectors(Wr,Gr),dr.subVectors(Hr,Wr);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-dr.z,dr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,dr.z,0,-dr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-dr.y,dr.x,0];return!$a(e,Hr,Gr,Wr,Mo)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Hr,Gr,Wr,Mo))?!1:(To.crossVectors(Gi,Wi),e=[To.x,To.y,To.z],$a(e,Hr,Gr,Wr,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new V,new V,new V,new V,new V,new V,new V,new V],$n=new V,Eo=new Ar,Hr=new V,Gr=new V,Wr=new V,Gi=new V,Wi=new V,dr=new V,Is=new V,Mo=new V,To=new V,pr=new V;function $a(n,t,e,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){pr.fromArray(n,o);const c=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),d=t.dot(pr),f=e.dot(pr),g=i.dot(pr);if(Math.max(-Math.max(d,f,g),Math.min(d,f,g))>c)return!1}return!0}const vm=new Ar,Us=new V,Ka=new V;let ya=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):vm.setFromPoints(t).getCenter(i);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Ka)),this.expandByPoint(Us.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const wi=new V,Za=new V,Co=new V,ji=new V,Ja=new V,Ao=new V,Qa=new V;class wa{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Za.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(Za);const o=t.distanceTo(e)*.5,l=-this.direction.dot(Co),c=ji.dot(this.direction),d=-ji.dot(Co),f=ji.lengthSq(),g=Math.abs(1-l*l);let v,_,w,E;if(g>0)if(v=l*d-c,_=l*c-d,E=o*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,w=v*(v+l*_+2*c)+_*(l*v+_+2*d)+f}else _=o,v=Math.max(0,-(l*_+c)),w=-v*v+_*(_+2*d)+f;else _=-o,v=Math.max(0,-(l*_+c)),w=-v*v+_*(_+2*d)+f;else _<=-E?(v=Math.max(0,-(-l*o+c)),_=v>0?-o:Math.min(Math.max(-o,-d),o),w=-v*v+_*(_+2*d)+f):_<=E?(v=0,_=Math.min(Math.max(-o,-d),o),w=_*(_+2*d)+f):(v=Math.max(0,-(l*o+c)),_=v>0?o:Math.min(Math.max(-o,-d),o),w=-v*v+_*(_+2*d)+f);else _=l>0?-o:o,v=Math.max(0,-(l*_+c)),w=-v*v+_*(_+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(Za).addScaledVector(Co,_),w}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,o=t.radius*t.radius;if(r>o)return null;const l=Math.sqrt(o-r),c=i-l,d=i+l;return d<0?null:c<0?this.at(d,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,l,c,d;const f=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return f>=0?(i=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(i=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),g>=0?(o=(t.min.y-_.y)*g,l=(t.max.y-_.y)*g):(o=(t.max.y-_.y)*g,l=(t.min.y-_.y)*g),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),v>=0?(c=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(c=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),i>d||c>r)||((c>i||i!==i)&&(i=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,r,o){Ja.subVectors(e,t),Ao.subVectors(i,t),Qa.crossVectors(Ja,Ao);let l=this.direction.dot(Qa),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;ji.subVectors(this.origin,t);const d=c*this.direction.dot(Ao.crossVectors(ji,Ao));if(d<0)return null;const f=c*this.direction.dot(Ja.cross(ji));if(f<0||d+f>l)return null;const g=-c*ji.dot(Qa);return g<0?null:this.at(g/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,e,i,r,o,l,c,d,f,g,v,_,w,E,T,y){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,c,d,f,g,v,_,w,E,T,y)}set(t,e,i,r,o,l,c,d,f,g,v,_,w,E,T,y){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=o,m[5]=l,m[9]=c,m[13]=d,m[2]=f,m[6]=g,m[10]=v,m[14]=_,m[3]=w,m[7]=E,m[11]=T,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/jr.setFromMatrixColumn(t,0).length(),o=1/jr.setFromMatrixColumn(t,1).length(),l=1/jr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,o=t.z,l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),f=Math.sin(r),g=Math.cos(o),v=Math.sin(o);if(t.order==="XYZ"){const _=l*g,w=l*v,E=c*g,T=c*v;e[0]=d*g,e[4]=-d*v,e[8]=f,e[1]=w+E*f,e[5]=_-T*f,e[9]=-c*d,e[2]=T-_*f,e[6]=E+w*f,e[10]=l*d}else if(t.order==="YXZ"){const _=d*g,w=d*v,E=f*g,T=f*v;e[0]=_+T*c,e[4]=E*c-w,e[8]=l*f,e[1]=l*v,e[5]=l*g,e[9]=-c,e[2]=w*c-E,e[6]=T+_*c,e[10]=l*d}else if(t.order==="ZXY"){const _=d*g,w=d*v,E=f*g,T=f*v;e[0]=_-T*c,e[4]=-l*v,e[8]=E+w*c,e[1]=w+E*c,e[5]=l*g,e[9]=T-_*c,e[2]=-l*f,e[6]=c,e[10]=l*d}else if(t.order==="ZYX"){const _=l*g,w=l*v,E=c*g,T=c*v;e[0]=d*g,e[4]=E*f-w,e[8]=_*f+T,e[1]=d*v,e[5]=T*f+_,e[9]=w*f-E,e[2]=-f,e[6]=c*d,e[10]=l*d}else if(t.order==="YZX"){const _=l*d,w=l*f,E=c*d,T=c*f;e[0]=d*g,e[4]=T-_*v,e[8]=E*v+w,e[1]=v,e[5]=l*g,e[9]=-c*g,e[2]=-f*g,e[6]=w*v+E,e[10]=_-T*v}else if(t.order==="XZY"){const _=l*d,w=l*f,E=c*d,T=c*f;e[0]=d*g,e[4]=-v,e[8]=f*g,e[1]=_*v+T,e[5]=l*g,e[9]=w*v-E,e[2]=E*v-w,e[6]=c*g,e[10]=T*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_m,t,xm)}lookAt(t,e,i){const r=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Xi.crossVectors(i,Nn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Xi.crossVectors(i,Nn)),Xi.normalize(),Po.crossVectors(Nn,Xi),r[0]=Xi.x,r[4]=Po.x,r[8]=Nn.x,r[1]=Xi.y,r[5]=Po.y,r[9]=Nn.y,r[2]=Xi.z,r[6]=Po.z,r[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,o=this.elements,l=i[0],c=i[4],d=i[8],f=i[12],g=i[1],v=i[5],_=i[9],w=i[13],E=i[2],T=i[6],y=i[10],m=i[14],O=i[3],U=i[7],R=i[11],W=i[15],z=r[0],u=r[4],q=r[8],P=r[12],A=r[1],k=r[5],st=r[9],Y=r[13],dt=r[2],ut=r[6],lt=r[10],ft=r[14],ot=r[3],St=r[7],Et=r[11],Ot=r[15];return o[0]=l*z+c*A+d*dt+f*ot,o[4]=l*u+c*k+d*ut+f*St,o[8]=l*q+c*st+d*lt+f*Et,o[12]=l*P+c*Y+d*ft+f*Ot,o[1]=g*z+v*A+_*dt+w*ot,o[5]=g*u+v*k+_*ut+w*St,o[9]=g*q+v*st+_*lt+w*Et,o[13]=g*P+v*Y+_*ft+w*Ot,o[2]=E*z+T*A+y*dt+m*ot,o[6]=E*u+T*k+y*ut+m*St,o[10]=E*q+T*st+y*lt+m*Et,o[14]=E*P+T*Y+y*ft+m*Ot,o[3]=O*z+U*A+R*dt+W*ot,o[7]=O*u+U*k+R*ut+W*St,o[11]=O*q+U*st+R*lt+W*Et,o[15]=O*P+U*Y+R*ft+W*Ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],l=t[1],c=t[5],d=t[9],f=t[13],g=t[2],v=t[6],_=t[10],w=t[14],E=t[3],T=t[7],y=t[11],m=t[15];return E*(+o*d*v-r*f*v-o*c*_+i*f*_+r*c*w-i*d*w)+T*(+e*d*w-e*f*_+o*l*_-r*l*w+r*f*g-o*d*g)+y*(+e*f*v-e*c*w-o*l*v+i*l*w+o*c*g-i*f*g)+m*(-r*c*g-e*d*v+e*c*_+r*l*v-i*l*_+i*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8],v=t[9],_=t[10],w=t[11],E=t[12],T=t[13],y=t[14],m=t[15],O=v*y*f-T*_*f+T*d*w-c*y*w-v*d*m+c*_*m,U=E*_*f-g*y*f-E*d*w+l*y*w+g*d*m-l*_*m,R=g*T*f-E*v*f+E*c*w-l*T*w-g*c*m+l*v*m,W=E*v*d-g*T*d-E*c*_+l*T*_+g*c*y-l*v*y,z=e*O+i*U+r*R+o*W;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const u=1/z;return t[0]=O*u,t[1]=(T*_*o-v*y*o-T*r*w+i*y*w+v*r*m-i*_*m)*u,t[2]=(c*y*o-T*d*o+T*r*f-i*y*f-c*r*m+i*d*m)*u,t[3]=(v*d*o-c*_*o-v*r*f+i*_*f+c*r*w-i*d*w)*u,t[4]=U*u,t[5]=(g*y*o-E*_*o+E*r*w-e*y*w-g*r*m+e*_*m)*u,t[6]=(E*d*o-l*y*o-E*r*f+e*y*f+l*r*m-e*d*m)*u,t[7]=(l*_*o-g*d*o+g*r*f-e*_*f-l*r*w+e*d*w)*u,t[8]=R*u,t[9]=(E*v*o-g*T*o-E*i*w+e*T*w+g*i*m-e*v*m)*u,t[10]=(l*T*o-E*c*o+E*i*f-e*T*f-l*i*m+e*c*m)*u,t[11]=(g*c*o-l*v*o-g*i*f+e*v*f+l*i*w-e*c*w)*u,t[12]=W*u,t[13]=(g*T*r-E*v*r+E*i*_-e*T*_-g*i*y+e*v*y)*u,t[14]=(E*c*r-l*T*r-E*i*d+e*T*d+l*i*y-e*c*y)*u,t[15]=(l*v*r-g*c*r+g*i*d-e*v*d-l*i*_+e*c*_)*u,this}scale(t){const e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),o=1-i,l=t.x,c=t.y,d=t.z,f=o*l,g=o*c;return this.set(f*l+i,f*c-r*d,f*d+r*c,0,f*c+r*d,g*c+i,g*d-r*l,0,f*d-r*c,g*d+r*l,o*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,l){return this.set(1,i,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,o=e._x,l=e._y,c=e._z,d=e._w,f=o+o,g=l+l,v=c+c,_=o*f,w=o*g,E=o*v,T=l*g,y=l*v,m=c*v,O=d*f,U=d*g,R=d*v,W=i.x,z=i.y,u=i.z;return r[0]=(1-(T+m))*W,r[1]=(w+R)*W,r[2]=(E-U)*W,r[3]=0,r[4]=(w-R)*z,r[5]=(1-(_+m))*z,r[6]=(y+O)*z,r[7]=0,r[8]=(E+U)*u,r[9]=(y-O)*u,r[10]=(1-(_+T))*u,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let o=jr.set(r[0],r[1],r[2]).length();const l=jr.set(r[4],r[5],r[6]).length(),c=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Kn.copy(this);const f=1/o,g=1/l,v=1/c;return Kn.elements[0]*=f,Kn.elements[1]*=f,Kn.elements[2]*=f,Kn.elements[4]*=g,Kn.elements[5]*=g,Kn.elements[6]*=g,Kn.elements[8]*=v,Kn.elements[9]*=v,Kn.elements[10]*=v,e.setFromRotationMatrix(Kn),i.x=o,i.y=l,i.z=c,this}makePerspective(t,e,i,r,o,l,c=Ri){const d=this.elements,f=2*o/(e-t),g=2*o/(i-r),v=(e+t)/(e-t),_=(i+r)/(i-r);let w,E;if(c===Ri)w=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(c===ca)w=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,o,l,c=Ri){const d=this.elements,f=1/(e-t),g=1/(i-r),v=1/(l-o),_=(e+t)*f,w=(i+r)*g;let E,T;if(c===Ri)E=(l+o)*v,T=-2*v;else if(c===ca)E=o*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-w,d[2]=0,d[6]=0,d[10]=T,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const jr=new V,Kn=new qe,_m=new V(0,0,0),xm=new V(1,1,1),Xi=new V,Po=new V,Nn=new V,Fu=new qe,ku=new sr;class hi{constructor(t=0,e=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,o=r[0],l=r[4],c=r[8],d=r[1],f=r[5],g=r[9],v=r[2],_=r[6],w=r[10];switch(e){case"XYZ":this._y=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,w),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,w),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,w),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,w),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(c,w));break;case"XZY":this._z=Math.asin(-ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-g,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ku.setFromEuler(this),this.setFromQuaternion(ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bm=0;const Bu=new V,Xr=new sr,Si=new qe,Ro=new V,Ns=new V,ym=new V,wm=new sr,Vu=new V(1,0,0),zu=new V(0,1,0),Hu=new V(0,0,1),Gu={type:"added"},Sm={type:"removed"},qr={type:"childadded",child:null},tl={type:"childremoved",child:null};class fn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new V,e=new hi,i=new sr,r=new V(1,1,1);function o(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new ue}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ro.copy(t):Ro.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ns,Ro,this.up):Si.lookAt(Ro,Ns,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(Si),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gu),qr.child=t,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sm),tl.child=t,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gu),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,ym),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,g=d.length;f<g;f++){const v=d[f];o(t.shapes,v)}else o(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(o(t.materials,this.material[d]));r.material=c}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(o(t.animations,d))}}if(e){const c=l(t.geometries),d=l(t.materials),f=l(t.textures),g=l(t.images),v=l(t.shapes),_=l(t.skeletons),w=l(t.animations),E=l(t.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),w.length>0&&(i.animations=w),E.length>0&&(i.nodes=E)}return i.object=r,i;function l(c){const d=[];for(const f in c){const g=c[f];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new V(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new V,Ei=new V,el=new V,Mi=new V,Yr=new V,$r=new V,Wu=new V,nl=new V,il=new V,rl=new V,sl=new He,ol=new He,al=new He;class Jn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Zn.subVectors(t,e),r.cross(Zn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){Zn.subVectors(r,e),Ei.subVectors(i,e),el.subVectors(t,e);const l=Zn.dot(Zn),c=Zn.dot(Ei),d=Zn.dot(el),f=Ei.dot(Ei),g=Ei.dot(el),v=l*f-c*c;if(v===0)return o.set(0,0,0),null;const _=1/v,w=(f*d-c*g)*_,E=(l*g-c*d)*_;return o.set(1-w-E,E,w)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,i,r,o,l,c,d){return this.getBarycoord(t,e,i,r,Mi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Mi.x),d.addScaledVector(l,Mi.y),d.addScaledVector(c,Mi.z),d)}static getInterpolatedAttribute(t,e,i,r,o,l){return sl.setScalar(0),ol.setScalar(0),al.setScalar(0),sl.fromBufferAttribute(t,e),ol.fromBufferAttribute(t,i),al.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(sl,o.x),l.addScaledVector(ol,o.y),l.addScaledVector(al,o.z),l}static isFrontFacing(t,e,i,r){return Zn.subVectors(i,e),Ei.subVectors(t,e),Zn.cross(Ei).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Zn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Jn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return Jn.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return Jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,o=this.c;let l,c;Yr.subVectors(r,i),$r.subVectors(o,i),nl.subVectors(t,i);const d=Yr.dot(nl),f=$r.dot(nl);if(d<=0&&f<=0)return e.copy(i);il.subVectors(t,r);const g=Yr.dot(il),v=$r.dot(il);if(g>=0&&v<=g)return e.copy(r);const _=d*v-g*f;if(_<=0&&d>=0&&g<=0)return l=d/(d-g),e.copy(i).addScaledVector(Yr,l);rl.subVectors(t,o);const w=Yr.dot(rl),E=$r.dot(rl);if(E>=0&&w<=E)return e.copy(o);const T=w*f-d*E;if(T<=0&&f>=0&&E<=0)return c=f/(f-E),e.copy(i).addScaledVector($r,c);const y=g*E-w*v;if(y<=0&&v-g>=0&&w-E>=0)return Wu.subVectors(o,r),c=(v-g)/(v-g+(w-E)),e.copy(r).addScaledVector(Wu,c);const m=1/(y+T+_);return l=T*m,c=_*m,e.copy(i).addScaledVector(Yr,l).addScaledVector($r,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function ll(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class we{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Le.workingColorSpace){if(t=sm(t,1),e=ye(e,0,1),i=ye(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=ll(l,o,t+1/3),this.g=ll(l,o,t),this.b=ll(l,o,t-1/3)}return Le.toWorkingColorSpace(this,r),this}setStyle(t,e=jn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jn){const i=Md[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return Le.fromWorkingColorSpace(_n.copy(this),t),Math.round(ye(_n.r*255,0,255))*65536+Math.round(ye(_n.g*255,0,255))*256+Math.round(ye(_n.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(_n.copy(this),e);const i=_n.r,r=_n.g,o=_n.b,l=Math.max(i,r,o),c=Math.min(i,r,o);let d,f;const g=(c+l)/2;if(c===l)d=0,f=0;else{const v=l-c;switch(f=g<=.5?v/(l+c):v/(2-l-c),l){case i:d=(r-o)/v+(r<o?6:0);break;case r:d=(o-i)/v+2;break;case o:d=(i-r)/v+4;break}d/=6}return t.h=d,t.s=f,t.l=g,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=jn){Le.fromWorkingColorSpace(_n.copy(this),t);const e=_n.r,i=_n.g,r=_n.b;return t!==jn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Do);const i=ja(qi.h,Do.h,e),r=ja(qi.s,Do.s,e),o=ja(qi.l,Do.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new we;we.NAMES=Md;let Em=0;class ms extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=no(),this.name="",this.type="Material",this.blending=ss,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ll&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}if(e){const o=r(t.textures),l=r(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fc extends ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new V,Lo=new ce;let Mm=0;class ci{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Du,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=An(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),i=An(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),i=An(i,this.array),r=An(r,this.array),o=An(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Du&&(t.usage=this.usage),t}}class Td extends ci{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Cd extends ci{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fn extends ci{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Tm=0;const Gn=new qe,cl=new fn,Kr=new V,On=new Ar,Os=new Ar,pn=new V;class fi extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?Cd:Td)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ue().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return cl.lookAt(t),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,o=t.length;r<o;r++){const l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Fn(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const o=e[i];On.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){const c=e[o];Os.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(On.min,Os.min),On.expandByPoint(pn),pn.addVectors(On.max,Os.max),On.expandByPoint(pn)):(On.expandByPoint(Os.min),On.expandByPoint(Os.max))}On.getCenter(i);let r=0;for(let o=0,l=t.count;o<l;o++)pn.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(pn));if(e)for(let o=0,l=e.length;o<l;o++){const c=e[o],d=this.morphTargetsRelative;for(let f=0,g=c.count;f<g;f++)pn.fromBufferAttribute(c,f),d&&(Kr.fromBufferAttribute(t,f),pn.add(Kr)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),c=[],d=[];for(let q=0;q<i.count;q++)c[q]=new V,d[q]=new V;const f=new V,g=new V,v=new V,_=new ce,w=new ce,E=new ce,T=new V,y=new V;function m(q,P,A){f.fromBufferAttribute(i,q),g.fromBufferAttribute(i,P),v.fromBufferAttribute(i,A),_.fromBufferAttribute(o,q),w.fromBufferAttribute(o,P),E.fromBufferAttribute(o,A),g.sub(f),v.sub(f),w.sub(_),E.sub(_);const k=1/(w.x*E.y-E.x*w.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-w.y).multiplyScalar(k),y.copy(v).multiplyScalar(w.x).addScaledVector(g,-E.x).multiplyScalar(k),c[q].add(T),c[P].add(T),c[A].add(T),d[q].add(y),d[P].add(y),d[A].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let q=0,P=O.length;q<P;++q){const A=O[q],k=A.start,st=A.count;for(let Y=k,dt=k+st;Y<dt;Y+=3)m(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const U=new V,R=new V,W=new V,z=new V;function u(q){W.fromBufferAttribute(r,q),z.copy(W);const P=c[q];U.copy(P),U.sub(W.multiplyScalar(W.dot(P))).normalize(),R.crossVectors(z,P);const k=R.dot(d[q])<0?-1:1;l.setXYZW(q,U.x,U.y,U.z,k)}for(let q=0,P=O.length;q<P;++q){const A=O[q],k=A.start,st=A.count;for(let Y=k,dt=k+st;Y<dt;Y+=3)u(t.getX(Y+0)),u(t.getX(Y+1)),u(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,w=i.count;_<w;_++)i.setXYZ(_,0,0,0);const r=new V,o=new V,l=new V,c=new V,d=new V,f=new V,g=new V,v=new V;if(t)for(let _=0,w=t.count;_<w;_+=3){const E=t.getX(_+0),T=t.getX(_+1),y=t.getX(_+2);r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,T),l.fromBufferAttribute(e,y),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),c.add(g),d.add(g),f.add(g),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(T,d.x,d.y,d.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let _=0,w=e.count;_<w;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),g.subVectors(l,o),v.subVectors(r,o),g.cross(v),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(c,d){const f=c.array,g=c.itemSize,v=c.normalized,_=new f.constructor(d.length*g);let w=0,E=0;for(let T=0,y=d.length;T<y;T++){c.isInterleavedBufferAttribute?w=d[T]*c.data.stride+c.offset:w=d[T]*g;for(let m=0;m<g;m++)_[E++]=f[w++]}return new ci(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fi,i=this.index.array,r=this.attributes;for(const c in r){const d=r[c],f=t(d,i);e.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const d=[],f=o[c];for(let g=0,v=f.length;g<v;g++){const _=f[g],w=t(_,i);d.push(w)}e.morphAttributes[c]=d}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const f=i[d];t.data.attributes[d]=f.toJSON(t.data)}const r={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],g=[];for(let v=0,_=f.length;v<_;v++){const w=f[v];g.push(w.toJSON(t.data))}g.length>0&&(r[d]=g,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const f in r){const g=r[f];this.setAttribute(f,g.clone(e))}const o=t.morphAttributes;for(const f in o){const g=[],v=o[f];for(let _=0,w=v.length;_<w;_++)g.push(v[_].clone(e));this.morphAttributes[f]=g}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,g=l.length;f<g;f++){const v=l[f];this.addGroup(v.start,v.count,v.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ju=new qe,fr=new wa,Io=new ya,Xu=new V,Uo=new V,No=new V,Oo=new V,ul=new V,Fo=new V,qu=new V,ko=new V;class wn extends fn{constructor(t=new fi,e=new Fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(o&&c){Fo.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const g=c[d],v=o[d];g!==0&&(ul.fromBufferAttribute(v,t),l?Fo.addScaledVector(ul,g):Fo.addScaledVector(ul.sub(e),g))}e.add(Fo)}return e}raycast(t,e){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(o),fr.copy(t.ray).recast(t.near),!(Io.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Io,Xu)===null||fr.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(ju.copy(o).invert(),fr.copy(t.ray).applyMatrix4(ju),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,i){let r;const o=this.geometry,l=this.material,c=o.index,d=o.attributes.position,f=o.attributes.uv,g=o.attributes.uv1,v=o.attributes.normal,_=o.groups,w=o.drawRange;if(c!==null)if(Array.isArray(l))for(let E=0,T=_.length;E<T;E++){const y=_[E],m=l[y.materialIndex],O=Math.max(y.start,w.start),U=Math.min(c.count,Math.min(y.start+y.count,w.start+w.count));for(let R=O,W=U;R<W;R+=3){const z=c.getX(R),u=c.getX(R+1),q=c.getX(R+2);r=Bo(this,m,t,i,f,g,v,z,u,q),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const E=Math.max(0,w.start),T=Math.min(c.count,w.start+w.count);for(let y=E,m=T;y<m;y+=3){const O=c.getX(y),U=c.getX(y+1),R=c.getX(y+2);r=Bo(this,l,t,i,f,g,v,O,U,R),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let E=0,T=_.length;E<T;E++){const y=_[E],m=l[y.materialIndex],O=Math.max(y.start,w.start),U=Math.min(d.count,Math.min(y.start+y.count,w.start+w.count));for(let R=O,W=U;R<W;R+=3){const z=R,u=R+1,q=R+2;r=Bo(this,m,t,i,f,g,v,z,u,q),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const E=Math.max(0,w.start),T=Math.min(d.count,w.start+w.count);for(let y=E,m=T;y<m;y+=3){const O=y,U=y+1,R=y+2;r=Bo(this,l,t,i,f,g,v,O,U,R),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}}function Cm(n,t,e,i,r,o,l,c){let d;if(t.side===Ln?d=i.intersectTriangle(l,o,r,!0,c):d=i.intersectTriangle(r,o,l,t.side===rr,c),d===null)return null;ko.copy(c),ko.applyMatrix4(n.matrixWorld);const f=e.ray.origin.distanceTo(ko);return f<e.near||f>e.far?null:{distance:f,point:ko.clone(),object:n}}function Bo(n,t,e,i,r,o,l,c,d,f){n.getVertexPosition(c,Uo),n.getVertexPosition(d,No),n.getVertexPosition(f,Oo);const g=Cm(n,t,e,i,Uo,No,Oo,qu);if(g){const v=new V;Jn.getBarycoord(qu,Uo,No,Oo,v),r&&(g.uv=Jn.getInterpolatedAttribute(r,c,d,f,v,new ce)),o&&(g.uv1=Jn.getInterpolatedAttribute(o,c,d,f,v,new ce)),l&&(g.normal=Jn.getInterpolatedAttribute(l,c,d,f,v,new V),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const _={a:c,b:d,c:f,normal:new V,materialIndex:0};Jn.getNormal(Uo,No,Oo,_.normal),g.face=_,g.barycoord=v}return g}class gs extends fi{constructor(t=1,e=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const c=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const d=[],f=[],g=[],v=[];let _=0,w=0;E("z","y","x",-1,-1,i,e,t,l,o,0),E("z","y","x",1,-1,i,e,-t,l,o,1),E("x","z","y",1,1,t,i,e,r,l,2),E("x","z","y",1,-1,t,i,-e,r,l,3),E("x","y","z",1,-1,t,e,i,r,o,4),E("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(d),this.setAttribute("position",new Fn(f,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(v,2));function E(T,y,m,O,U,R,W,z,u,q,P){const A=R/u,k=W/q,st=R/2,Y=W/2,dt=z/2,ut=u+1,lt=q+1;let ft=0,ot=0;const St=new V;for(let Et=0;Et<lt;Et++){const Ot=Et*k-Y;for(let Kt=0;Kt<ut;Kt++){const le=Kt*A-st;St[T]=le*O,St[y]=Ot*U,St[m]=dt,f.push(St.x,St.y,St.z),St[T]=0,St[y]=0,St[m]=z>0?1:-1,g.push(St.x,St.y,St.z),v.push(Kt/u),v.push(1-Et/q),ft+=1}}for(let Et=0;Et<q;Et++)for(let Ot=0;Ot<u;Ot++){const Kt=_+Ot+ut*Et,le=_+Ot+ut*(Et+1),mt=_+(Ot+1)+ut*(Et+1),bt=_+(Ot+1)+ut*Et;d.push(Kt,le,bt),d.push(le,mt,bt),ot+=6}c.addGroup(w,ot,P),w+=ot,_+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function yn(n){const t={};for(let e=0;e<n.length;e++){const i=ps(n[e]);for(const r in i)t[r]=i[r]}return t}function Am(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ad(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Pm={clone:ps,merge:yn};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Pd extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new V,Yu=new ce,$u=new ce;class Rn extends Pd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Yu,$u),e.subVectors($u,Yu)}setViewOffset(t,e,i,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;o+=l.offsetX*r/d,e-=l.offsetY*i/f,r*=l.width/d,i*=l.height/f}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zr=-90,Jr=1;class Lm extends fn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Zr,Jr,t,e);r.layers=this.layers,this.add(r);const o=new Rn(Zr,Jr,t,e);o.layers=this.layers,this.add(o);const l=new Rn(Zr,Jr,t,e);l.layers=this.layers,this.add(l);const c=new Rn(Zr,Jr,t,e);c.layers=this.layers,this.add(c);const d=new Rn(Zr,Jr,t,e);d.layers=this.layers,this.add(d);const f=new Rn(Zr,Jr,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,o,l,c,d]=e;for(const f of e)this.remove(f);if(t===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,d,f,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,o),t.setRenderTarget(i,1,r),t.render(e,l),t.setRenderTarget(i,2,r),t.render(e,c),t.setRenderTarget(i,3,r),t.render(e,d),t.setRenderTarget(i,4,r),t.render(e,f),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,r),t.render(e,g),t.setRenderTarget(v,_,w),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Rd extends In{constructor(t=[],e=us,i,r,o,l,c,d,f,g){super(t,e,i,r,o,l,c,d,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Im extends Cr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Rd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gs(5,5,5),o=new or({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:er});o.uniforms.tEquirect.value=e;const l=new wn(r,o),c=e.minFilter;return e.minFilter===Er&&(e.minFilter=ai),new Lm(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(o)}}class Vo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Um={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,l=null;const c=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const T of t.hand.values()){const y=e.getJointPose(T,i),m=this._getHandJoint(f,T);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const g=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],_=g.position.distanceTo(v.position),w=.02,E=.005;f.inputState.pinching&&_>w+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=w-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Vo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Nm extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const dl=new V,Om=new V,Fm=new ue;class Ji{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=dl.subVectors(i,e).cross(Om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Fm.getNormalMatrix(t),r=this.coplanarPoint(dl).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new ya,zo=new V;class kc{constructor(t=new Ji,e=new Ji,i=new Ji,r=new Ji,o=new Ji,l=new Ji){this.planes=[t,e,i,r,o,l]}set(t,e,i,r,o,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(r),c[4].copy(o),c[5].copy(l),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ri){const i=this.planes,r=t.elements,o=r[0],l=r[1],c=r[2],d=r[3],f=r[4],g=r[5],v=r[6],_=r[7],w=r[8],E=r[9],T=r[10],y=r[11],m=r[12],O=r[13],U=r[14],R=r[15];if(i[0].setComponents(d-o,_-f,y-w,R-m).normalize(),i[1].setComponents(d+o,_+f,y+w,R+m).normalize(),i[2].setComponents(d+l,_+g,y+E,R+O).normalize(),i[3].setComponents(d-l,_-g,y-E,R-O).normalize(),i[4].setComponents(d-c,_-v,y-T,R-U).normalize(),e===Ri)i[5].setComponents(d+c,_+v,y+T,R+U).normalize();else if(e===ca)i[5].setComponents(c,v,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(zo.x=r.normal.x>0?t.max.x:t.min.x,zo.y=r.normal.y>0?t.max.y:t.min.y,zo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dd extends ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const da=new V,pa=new V,Ku=new qe,Fs=new wa,Ho=new ya,pl=new V,Zu=new V;class km extends fn{constructor(t=new fi,e=new Dd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,o=e.count;r<o;r++)da.fromBufferAttribute(e,r-1),pa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=da.distanceTo(pa);t.setAttribute("lineDistance",new Fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=o,t.ray.intersectsSphere(Ho)===!1)return;Ku.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(Ku);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){const w=Math.max(0,l.start),E=Math.min(g.count,l.start+l.count);for(let T=w,y=E-1;T<y;T+=f){const m=g.getX(T),O=g.getX(T+1),U=Go(this,t,Fs,d,m,O,T);U&&e.push(U)}if(this.isLineLoop){const T=g.getX(E-1),y=g.getX(w),m=Go(this,t,Fs,d,T,y,E-1);m&&e.push(m)}}else{const w=Math.max(0,l.start),E=Math.min(_.count,l.start+l.count);for(let T=w,y=E-1;T<y;T+=f){const m=Go(this,t,Fs,d,T,T+1,T);m&&e.push(m)}if(this.isLineLoop){const T=Go(this,t,Fs,d,E-1,w,E-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Go(n,t,e,i,r,o,l){const c=n.geometry.attributes.position;if(da.fromBufferAttribute(c,r),pa.fromBufferAttribute(c,o),e.distanceSqToSegment(da,pa,pl,Zu)>i)return;pl.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(pl);if(!(f<t.near||f>t.far))return{distance:f,point:Zu.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}const Ju=new V,Qu=new V;class Bm extends km{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,o=e.count;r<o;r+=2)Ju.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ju.distanceTo(Qu);t.setAttribute("lineDistance",new Fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ld extends In{constructor(t,e,i=Tr,r,o,l,c=ti,d=ti,f,g=qs){if(g!==qs&&g!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,o,l,c,d,g,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class io extends fi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const o=t/2,l=e/2,c=Math.floor(i),d=Math.floor(r),f=c+1,g=d+1,v=t/c,_=e/d,w=[],E=[],T=[],y=[];for(let m=0;m<g;m++){const O=m*_-l;for(let U=0;U<f;U++){const R=U*v-o;E.push(R,-O,0),T.push(0,0,1),y.push(U/c),y.push(1-m/d)}}for(let m=0;m<d;m++)for(let O=0;O<c;O++){const U=O+f*m,R=O+f*(m+1),W=O+1+f*(m+1),z=O+1+f*m;w.push(U,R,z),w.push(R,W,z)}this.setIndex(w),this.setAttribute("position",new Fn(E,3)),this.setAttribute("normal",new Fn(T,3)),this.setAttribute("uv",new Fn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sa extends fi{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(l+c,Math.PI);let f=0;const g=[],v=new V,_=new V,w=[],E=[],T=[],y=[];for(let m=0;m<=i;m++){const O=[],U=m/i;let R=0;m===0&&l===0?R=.5/e:m===i&&d===Math.PI&&(R=-.5/e);for(let W=0;W<=e;W++){const z=W/e;v.x=-t*Math.cos(r+z*o)*Math.sin(l+U*c),v.y=t*Math.cos(l+U*c),v.z=t*Math.sin(r+z*o)*Math.sin(l+U*c),E.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),y.push(z+R,1-U),O.push(f++)}g.push(O)}for(let m=0;m<i;m++)for(let O=0;O<e;O++){const U=g[m][O+1],R=g[m][O],W=g[m+1][O],z=g[m+1][O+1];(m!==0||l>0)&&w.push(U,R,z),(m!==i-1||d<Math.PI)&&w.push(R,W,z)}this.setIndex(w),this.setAttribute("position",new Fn(E,3)),this.setAttribute("normal",new Fn(T,3)),this.setAttribute("uv",new Fn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fa extends ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vm extends ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zm extends ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Id extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const fl=new qe,th=new V,eh=new V;class Ud{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;th.setFromMatrixPosition(t.matrixWorld),e.position.copy(th),eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eh),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hm extends Ud{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ua*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(i!==e.fov||r!==e.aspect||o!==e.far)&&(e.fov=i,e.aspect=r,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Wo extends Id{constructor(t,e,i=0,r=Math.PI/3,o=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new Hm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const nh=new qe,ks=new V,ml=new V;class Gm extends Ud{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),i.position.copy(ks),ml.copy(i.position),ml.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ml),i.updateMatrixWorld(),r.makeTranslation(-ks.x,-ks.y,-ks.z),nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh)}}class ih extends Id{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Gm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wm extends Pd{constructor(t=-1,e=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-t,l=i+t,c=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,c-=g*this.view.offsetY,d=c-g*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jm extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Nd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rh(){return performance.now()}const sh=new qe;class Xm{constructor(t,e,i=0,r=1/0){this.ray=new wa(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(t,e=!0,i=[]){return vc(t,this,i,e),i.sort(oh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,o=t.length;r<o;r++)vc(t[r],this,i,e);return i.sort(oh),i}}function oh(n,t){return n.distance-t.distance}function vc(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const o=n.children;for(let l=0,c=o.length;l<c;l++)vc(o[l],t,e,!0)}}class ah{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lh=new V;class gl extends fn{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const i=new fi,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,d=32;l<d;l++,c++){const f=l/d*Math.PI*2,g=c/d*Math.PI*2;r.push(Math.cos(f),Math.sin(f),1,Math.cos(g),Math.sin(g),1)}i.setAttribute("position",new Fn(r,3));const o=new Dd({fog:!1,toneMapped:!1});this.cone=new Bm(i,o),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),lh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(lh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class qm extends wn{constructor(t,e,i){const r=new Sa(e,4,2),o=new Fc({wireframe:!0,fog:!1,toneMapped:!1});super(r,o),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class Ym extends Lr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ch(n,t,e,i){const r=$m(i);switch(e){case gd:return n*t;case _d:return n*t/r.components*r.byteLength;case Lc:return n*t/r.components*r.byteLength;case xd:return n*t*2/r.components*r.byteLength;case Ic:return n*t*2/r.components*r.byteLength;case vd:return n*t*3/r.components*r.byteLength;case Qn:return n*t*4/r.components*r.byteLength;case Uc:return n*t*4/r.components*r.byteLength;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:case Yl:return Math.max(n,16)*Math.max(t,8)/4;case jl:case ql:return Math.max(n,8)*Math.max(t,8)/2;case $l:case Kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case lc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ea:case dc:case pc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bd:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case mc:case gc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(n){switch(n){case ui:case pd:return{byteLength:1,components:1};case js:case fd:case eo:return{byteLength:2,components:1};case Rc:case Dc:return{byteLength:2,components:4};case Tr:case Pc:case Pi:return{byteLength:4,components:1};case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Od(){let n=null,t=!1,e=null,i=null;function r(o,l){e(o,l),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Km(n){const t=new WeakMap;function e(c,d){const f=c.array,g=c.usage,v=f.byteLength,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,f,g),c.onUploadCallback();let w;if(f instanceof Float32Array)w=n.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?w=n.HALF_FLOAT:w=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)w=n.SHORT;else if(f instanceof Uint32Array)w=n.UNSIGNED_INT;else if(f instanceof Int32Array)w=n.INT;else if(f instanceof Int8Array)w=n.BYTE;else if(f instanceof Uint8Array)w=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)w=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:w,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:v}}function i(c,d,f){const g=d.array,v=d.updateRanges;if(n.bindBuffer(f,c),v.length===0)n.bufferSubData(f,0,g);else{v.sort((w,E)=>w.start-E.start);let _=0;for(let w=1;w<v.length;w++){const E=v[_],T=v[w];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let w=0,E=v.length;w<E;w++){const T=v[w];n.bufferSubData(f,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=t.get(c);d&&(n.deleteBuffer(d.buffer),t.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=t.get(c);(!g||g.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,c,d),f.version=c.version}}return{get:r,remove:o,update:l}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jm=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
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
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,hg=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bg=`#define PI 3.141592653589793
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
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kg=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
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
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
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
#endif`,$g=`struct PhysicalMaterial {
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
}`,Kg=`
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ov=`#if defined( USE_POINTS_UV )
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
#endif`,av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
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
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xv=`#ifdef USE_NORMALMAP
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
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nv=`float getShadowMask() {
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
}`,Ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zv=`uniform sampler2D t2D;
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
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
}`,i_=`#if DEPTH_PACKING == 3200
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
}`,r_=`#define DISTANCE
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
}`,s_=`#define DISTANCE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
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
}`,c_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,d_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
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
}`,f_=`#define MATCAP
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
}`,m_=`#define MATCAP
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
}`,g_=`#define NORMAL
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
}`,v_=`#define NORMAL
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
}`,__=`#define PHONG
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
}`,x_=`#define PHONG
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
}`,b_=`#define STANDARD
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
}`,y_=`#define STANDARD
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
}`,w_=`#define TOON
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
}`,S_=`#define TOON
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
}`,E_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,C_=`uniform vec3 color;
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
}`,A_=`uniform float rotation;
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
}`,P_=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Zm,alphahash_pars_fragment:Jm,alphamap_fragment:Qm,alphamap_pars_fragment:tg,alphatest_fragment:eg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:rg,batching_pars_vertex:sg,batching_vertex:og,begin_vertex:ag,beginnormal_vertex:lg,bsdfs:cg,iridescence_fragment:ug,bumpmap_pars_fragment:hg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:vg,color_pars_vertex:_g,color_vertex:xg,common:bg,cube_uv_reflection_fragment:yg,defaultnormal_vertex:wg,displacementmap_pars_vertex:Sg,displacementmap_vertex:Eg,emissivemap_fragment:Mg,emissivemap_pars_fragment:Tg,colorspace_fragment:Cg,colorspace_pars_fragment:Ag,envmap_fragment:Pg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Dg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Gg,envmap_vertex:Ig,fog_vertex:Ug,fog_pars_vertex:Ng,fog_fragment:Og,fog_pars_fragment:Fg,gradientmap_pars_fragment:kg,lightmap_pars_fragment:Bg,lights_lambert_fragment:Vg,lights_lambert_pars_fragment:zg,lights_pars_begin:Hg,lights_toon_fragment:Wg,lights_toon_pars_fragment:jg,lights_phong_fragment:Xg,lights_phong_pars_fragment:qg,lights_physical_fragment:Yg,lights_physical_pars_fragment:$g,lights_fragment_begin:Kg,lights_fragment_maps:Zg,lights_fragment_end:Jg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:tv,logdepthbuf_pars_vertex:ev,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:rv,map_particle_fragment:sv,map_particle_pars_fragment:ov,metalnessmap_fragment:av,metalnessmap_pars_fragment:lv,morphinstance_vertex:cv,morphcolor_vertex:uv,morphnormal_vertex:hv,morphtarget_pars_vertex:dv,morphtarget_vertex:pv,normal_fragment_begin:fv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:vv,normal_vertex:_v,normalmap_pars_fragment:xv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:wv,iridescence_pars_fragment:Sv,opaque_fragment:Ev,packing:Mv,premultiplied_alpha_fragment:Tv,project_vertex:Cv,dithering_fragment:Av,dithering_pars_fragment:Pv,roughnessmap_fragment:Rv,roughnessmap_pars_fragment:Dv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Iv,shadowmap_vertex:Uv,shadowmask_pars_fragment:Nv,skinbase_vertex:Ov,skinning_pars_vertex:Fv,skinning_vertex:kv,skinnormal_vertex:Bv,specularmap_fragment:Vv,specularmap_pars_fragment:zv,tonemapping_fragment:Hv,tonemapping_pars_fragment:Gv,transmission_fragment:Wv,transmission_pars_fragment:jv,uv_pars_fragment:Xv,uv_pars_vertex:qv,uv_vertex:Yv,worldpos_vertex:$v,background_vert:Kv,background_frag:Zv,backgroundCube_vert:Jv,backgroundCube_frag:Qv,cube_vert:t_,cube_frag:e_,depth_vert:n_,depth_frag:i_,distanceRGBA_vert:r_,distanceRGBA_frag:s_,equirect_vert:o_,equirect_frag:a_,linedashed_vert:l_,linedashed_frag:c_,meshbasic_vert:u_,meshbasic_frag:h_,meshlambert_vert:d_,meshlambert_frag:p_,meshmatcap_vert:f_,meshmatcap_frag:m_,meshnormal_vert:g_,meshnormal_frag:v_,meshphong_vert:__,meshphong_frag:x_,meshphysical_vert:b_,meshphysical_frag:y_,meshtoon_vert:w_,meshtoon_frag:S_,points_vert:E_,points_frag:M_,shadow_vert:T_,shadow_frag:C_,sprite_vert:A_,sprite_frag:P_},Tt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},oi={basic:{uniforms:yn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:yn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new we(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:yn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:yn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:yn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new we(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:yn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:yn([Tt.points,Tt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:yn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:yn([Tt.common,Tt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:yn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:yn([Tt.sprite,Tt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:yn([Tt.common,Tt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:yn([Tt.lights,Tt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};oi.physical={uniforms:yn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const jo={r:0,b:0,g:0},gr=new hi,R_=new qe;function D_(n,t,e,i,r,o,l){const c=new we(0);let d=o===!0?0:1,f,g,v=null,_=0,w=null;function E(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?e:t).get(R)),R}function T(U){let R=!1;const W=E(U);W===null?m(c,d):W&&W.isColor&&(m(W,1),R=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(U,R){const W=E(R);W&&(W.isCubeTexture||W.mapping===ba)?(g===void 0&&(g=new wn(new gs(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:ps(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,u,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),gr.copy(R.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=W,g.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(R_.makeRotationFromEuler(gr)),g.material.toneMapped=Le.getTransfer(W.colorSpace)!==Ve,(v!==W||_!==W.version||w!==n.toneMapping)&&(g.material.needsUpdate=!0,v=W,_=W.version,w=n.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):W&&W.isTexture&&(f===void 0&&(f=new wn(new io(2,2),new or({name:"BackgroundMaterial",uniforms:ps(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=W,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=Le.getTransfer(W.colorSpace)!==Ve,W.matrixAutoUpdate===!0&&W.updateMatrix(),f.material.uniforms.uvTransform.value.copy(W.matrix),(v!==W||_!==W.version||w!==n.toneMapping)&&(f.material.needsUpdate=!0,v=W,_=W.version,w=n.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function m(U,R){U.getRGB(jo,Ad(n)),i.buffers.color.setClear(jo.r,jo.g,jo.b,R,l)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(U,R=1){c.set(U),d=R,m(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,m(c,d)},render:T,addToRenderList:y,dispose:O}}function L_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=_(null);let o=r,l=!1;function c(A,k,st,Y,dt){let ut=!1;const lt=v(Y,st,k);o!==lt&&(o=lt,f(o.object)),ut=w(A,Y,st,dt),ut&&E(A,Y,st,dt),dt!==null&&t.update(dt,n.ELEMENT_ARRAY_BUFFER),(ut||l)&&(l=!1,R(A,k,st,Y),dt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function d(){return n.createVertexArray()}function f(A){return n.bindVertexArray(A)}function g(A){return n.deleteVertexArray(A)}function v(A,k,st){const Y=st.wireframe===!0;let dt=i[A.id];dt===void 0&&(dt={},i[A.id]=dt);let ut=dt[k.id];ut===void 0&&(ut={},dt[k.id]=ut);let lt=ut[Y];return lt===void 0&&(lt=_(d()),ut[Y]=lt),lt}function _(A){const k=[],st=[],Y=[];for(let dt=0;dt<e;dt++)k[dt]=0,st[dt]=0,Y[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:st,attributeDivisors:Y,object:A,attributes:{},index:null}}function w(A,k,st,Y){const dt=o.attributes,ut=k.attributes;let lt=0;const ft=st.getAttributes();for(const ot in ft)if(ft[ot].location>=0){const Et=dt[ot];let Ot=ut[ot];if(Ot===void 0&&(ot==="instanceMatrix"&&A.instanceMatrix&&(Ot=A.instanceMatrix),ot==="instanceColor"&&A.instanceColor&&(Ot=A.instanceColor)),Et===void 0||Et.attribute!==Ot||Ot&&Et.data!==Ot.data)return!0;lt++}return o.attributesNum!==lt||o.index!==Y}function E(A,k,st,Y){const dt={},ut=k.attributes;let lt=0;const ft=st.getAttributes();for(const ot in ft)if(ft[ot].location>=0){let Et=ut[ot];Et===void 0&&(ot==="instanceMatrix"&&A.instanceMatrix&&(Et=A.instanceMatrix),ot==="instanceColor"&&A.instanceColor&&(Et=A.instanceColor));const Ot={};Ot.attribute=Et,Et&&Et.data&&(Ot.data=Et.data),dt[ot]=Ot,lt++}o.attributes=dt,o.attributesNum=lt,o.index=Y}function T(){const A=o.newAttributes;for(let k=0,st=A.length;k<st;k++)A[k]=0}function y(A){m(A,0)}function m(A,k){const st=o.newAttributes,Y=o.enabledAttributes,dt=o.attributeDivisors;st[A]=1,Y[A]===0&&(n.enableVertexAttribArray(A),Y[A]=1),dt[A]!==k&&(n.vertexAttribDivisor(A,k),dt[A]=k)}function O(){const A=o.newAttributes,k=o.enabledAttributes;for(let st=0,Y=k.length;st<Y;st++)k[st]!==A[st]&&(n.disableVertexAttribArray(st),k[st]=0)}function U(A,k,st,Y,dt,ut,lt){lt===!0?n.vertexAttribIPointer(A,k,st,dt,ut):n.vertexAttribPointer(A,k,st,Y,dt,ut)}function R(A,k,st,Y){T();const dt=Y.attributes,ut=st.getAttributes(),lt=k.defaultAttributeValues;for(const ft in ut){const ot=ut[ft];if(ot.location>=0){let St=dt[ft];if(St===void 0&&(ft==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),ft==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const Et=St.normalized,Ot=St.itemSize,Kt=t.get(St);if(Kt===void 0)continue;const le=Kt.buffer,mt=Kt.type,bt=Kt.bytesPerElement,Rt=mt===n.INT||mt===n.UNSIGNED_INT||St.gpuType===Pc;if(St.isInterleavedBufferAttribute){const yt=St.data,Xt=yt.stride,ge=St.offset;if(yt.isInstancedInterleavedBuffer){for(let nt=0;nt<ot.locationSize;nt++)m(ot.location+nt,yt.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let nt=0;nt<ot.locationSize;nt++)y(ot.location+nt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let nt=0;nt<ot.locationSize;nt++)U(ot.location+nt,Ot/ot.locationSize,mt,Et,Xt*bt,(ge+Ot/ot.locationSize*nt)*bt,Rt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<ot.locationSize;yt++)m(ot.location+yt,St.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<ot.locationSize;yt++)y(ot.location+yt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let yt=0;yt<ot.locationSize;yt++)U(ot.location+yt,Ot/ot.locationSize,mt,Et,Ot*bt,Ot/ot.locationSize*yt*bt,Rt)}}else if(lt!==void 0){const Et=lt[ft];if(Et!==void 0)switch(Et.length){case 2:n.vertexAttrib2fv(ot.location,Et);break;case 3:n.vertexAttrib3fv(ot.location,Et);break;case 4:n.vertexAttrib4fv(ot.location,Et);break;default:n.vertexAttrib1fv(ot.location,Et)}}}}O()}function W(){q();for(const A in i){const k=i[A];for(const st in k){const Y=k[st];for(const dt in Y)g(Y[dt].object),delete Y[dt];delete k[st]}delete i[A]}}function z(A){if(i[A.id]===void 0)return;const k=i[A.id];for(const st in k){const Y=k[st];for(const dt in Y)g(Y[dt].object),delete Y[dt];delete k[st]}delete i[A.id]}function u(A){for(const k in i){const st=i[k];if(st[A.id]===void 0)continue;const Y=st[A.id];for(const dt in Y)g(Y[dt].object),delete Y[dt];delete st[A.id]}}function q(){P(),l=!0,o!==r&&(o=r,f(o.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:q,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:z,releaseStatesOfProgram:u,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function I_(n,t,e){let i;function r(f){i=f}function o(f,g){n.drawArrays(i,f,g),e.update(g,i,1)}function l(f,g,v){v!==0&&(n.drawArraysInstanced(i,f,g,v),e.update(g,i,v))}function c(f,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,g,0,v);let w=0;for(let E=0;E<v;E++)w+=g[E];e.update(w,i,1)}function d(f,g,v,_){if(v===0)return;const w=t.get("WEBGL_multi_draw");if(w===null)for(let E=0;E<f.length;E++)l(f[E],g[E],_[E]);else{w.multiDrawArraysInstancedWEBGL(i,f,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];e.update(E,i,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function U_(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const u=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(u){return!(u!==Qn&&i.convert(u)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(u){const q=u===eo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(u!==ui&&i.convert(u)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==Pi&&!q)}function d(u){if(u==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const v=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),w=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),O=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),W=E>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:w,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:W,maxSamples:z}}function N_(n){const t=this;let e=null,i=0,r=!1,o=!1;const l=new Ji,c=new ue,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const w=v.length!==0||_||i!==0||r;return r=_,i=v.length,w},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,_){e=g(v,_,0)},this.setState=function(v,_,w){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,m=n.get(v);if(!r||E===null||E.length===0||o&&!y)o?g(null):f();else{const O=o?0:i,U=O*4;let R=m.clippingState||null;d.value=R,R=g(E,_,U,w);for(let W=0;W!==U;++W)R[W]=e[W];m.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(v,_,w,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=d.value,E!==!0||y===null){const m=w+T*4,O=_.matrixWorldInverse;c.getNormalMatrix(O),(y===null||y.length<m)&&(y=new Float32Array(m));for(let U=0,R=w;U!==T;++U,R+=4)l.copy(v[U]).applyMatrix4(O,c),l.normal.toArray(y,R),y[R+3]=l.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function O_(n){let t=new WeakMap;function e(l,c){return c===zl?l.mapping=us:c===Hl&&(l.mapping=hs),l}function i(l){if(l&&l.isTexture){const c=l.mapping;if(c===zl||c===Hl)if(t.has(l)){const d=t.get(l).texture;return e(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const f=new Im(d.height);return f.fromEquirectangularTexture(n,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const is=4,uh=[.125,.215,.35,.446,.526,.582],yr=20,vl=new Wm,hh=new we;let _l=null,xl=0,bl=0,yl=!1;const xr=(1+Math.sqrt(5))/2,Qr=1/xr,dh=[new V(-xr,Qr,0),new V(xr,Qr,0),new V(-Qr,0,xr),new V(Qr,0,xr),new V(0,xr,-Qr),new V(0,xr,Qr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],F_=new V;class ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,o={}){const{size:l=256,position:c=F_}=o;_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,r,d,c),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,xl,bl),this._renderer.xr.enabled=yl,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:eo,format:Qn,colorSpace:ds,depthBuffer:!1},r=fh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(o)),this._blurMaterial=B_(o,t,e)}return r}_compileMaterial(t){const e=new wn(this._lodPlanes[0],t);this._renderer.compile(e,vl)}_sceneToCubeUV(t,e,i,r,o){const d=new Rn(90,1,e,i),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,w=v.toneMapping;v.getClearColor(hh),v.toneMapping=nr,v.autoClear=!1;const E=new Fc({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),T=new wn(new gs,E);let y=!1;const m=t.background;m?m.isColor&&(E.color.copy(m),t.background=null,y=!0):(E.color.copy(hh),y=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(d.up.set(0,f[O],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+g[O],o.y,o.z)):U===1?(d.up.set(0,0,f[O]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+g[O],o.z)):(d.up.set(0,f[O],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+g[O]));const R=this._cubeSize;Xo(r,U*R,O>2?R:0,R,R),v.setRenderTarget(r),y&&v.render(T,d),v.render(t,d)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=w,v.autoClear=_,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===us||t.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new wn(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;const d=this._cubeSize;Xo(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(l,vl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=dh[(r-o-1)%dh.length];this._blur(t,o-1,o,l,c)}e.autoClear=i}_blur(t,e,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,r,"latitudinal",o),this._halfBlur(l,t,i,i,r,"longitudinal",o)}_halfBlur(t,e,i,r,o,l,c){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new wn(this._lodPlanes[r],f),_=f.uniforms,w=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*w):2*Math.PI/(2*yr-1),T=o/E,y=isFinite(o)?1+Math.floor(g*T):yr;y>yr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yr}`);const m=[];let O=0;for(let u=0;u<yr;++u){const q=u/T,P=Math.exp(-q*q/2);m.push(P),u===0?O+=P:u<y&&(O+=2*P)}for(let u=0;u<m.length;u++)m[u]=m[u]/O;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=m,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-i;const R=this._sizeLods[r],W=3*R*(r>U-is?r-U+is:0),z=4*(this._cubeSize-R);Xo(e,W,z,3*R,2*R),d.setRenderTarget(e),d.render(v,vl)}}function k_(n){const t=[],e=[],i=[];let r=n;const o=n-is+1+uh.length;for(let l=0;l<o;l++){const c=Math.pow(2,r);e.push(c);let d=1/c;l>n-is?d=uh[l-n+is-1]:l===0&&(d=0),i.push(d);const f=1/(c-2),g=-f,v=1+f,_=[g,g,v,g,v,v,g,g,v,v,g,v],w=6,E=6,T=3,y=2,m=1,O=new Float32Array(T*E*w),U=new Float32Array(y*E*w),R=new Float32Array(m*E*w);for(let z=0;z<w;z++){const u=z%3*2/3-1,q=z>2?0:-1,P=[u,q,0,u+2/3,q,0,u+2/3,q+1,0,u,q,0,u+2/3,q+1,0,u,q+1,0];O.set(P,T*E*z),U.set(_,y*E*z);const A=[z,z,z,z,z,z];R.set(A,m*E*z)}const W=new fi;W.setAttribute("position",new ci(O,T)),W.setAttribute("uv",new ci(U,y)),W.setAttribute("faceIndex",new ci(R,m)),t.push(W),r>is&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fh(n,t,e){const i=new Cr(n,t,e);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function B_(n,t,e){const i=new Float32Array(yr),r=new V(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function mh(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function gh(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function V_(n){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){const d=c.mapping,f=d===zl||d===Hl,g=d===us||d===hs;if(f||g){let v=t.get(c);const _=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return e===null&&(e=new ph(n)),v=f?e.fromEquirectangular(c,v):e.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,t.set(c,v),v.texture;if(v!==void 0)return v.texture;{const w=c.image;return f&&w&&w.height>0||g&&w&&r(w)?(e===null&&(e=new ph(n)),v=f?e.fromEquirectangular(c):e.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,t.set(c,v),c.addEventListener("dispose",o),v.texture):null}}}return c}function r(c){let d=0;const f=6;for(let g=0;g<f;g++)c[g]!==void 0&&d++;return d===f}function o(c){const d=c.target;d.removeEventListener("dispose",o);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function z_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ia("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H_(n,t,e,i){const r={},o=new WeakMap;function l(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",l),delete r[_.id];const w=o.get(_);w&&(t.remove(w),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(v,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function d(v){const _=v.attributes;for(const w in _)t.update(_[w],n.ARRAY_BUFFER)}function f(v){const _=[],w=v.index,E=v.attributes.position;let T=0;if(w!==null){const O=w.array;T=w.version;for(let U=0,R=O.length;U<R;U+=3){const W=O[U+0],z=O[U+1],u=O[U+2];_.push(W,z,z,u,u,W)}}else if(E!==void 0){const O=E.array;T=E.version;for(let U=0,R=O.length/3-1;U<R;U+=3){const W=U+0,z=U+1,u=U+2;_.push(W,z,z,u,u,W)}}else return;const y=new(Sd(_)?Cd:Td)(_,1);y.version=T;const m=o.get(v);m&&t.remove(m),o.set(v,y)}function g(v){const _=o.get(v);if(_){const w=v.index;w!==null&&_.version<w.version&&f(v)}else f(v);return o.get(v)}return{get:c,update:d,getWireframeAttribute:g}}function G_(n,t,e){let i;function r(_){i=_}let o,l;function c(_){o=_.type,l=_.bytesPerElement}function d(_,w){n.drawElements(i,w,o,_*l),e.update(w,i,1)}function f(_,w,E){E!==0&&(n.drawElementsInstanced(i,w,o,_*l,E),e.update(w,i,E))}function g(_,w,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,w,0,o,_,0,E);let y=0;for(let m=0;m<E;m++)y+=w[m];e.update(y,i,1)}function v(_,w,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<_.length;m++)f(_[m]/l,w[m],T[m]);else{y.multiDrawElementsInstancedWEBGL(i,w,0,o,_,0,T,0,E);let m=0;for(let O=0;O<E;O++)m+=w[O]*T[O];e.update(m,i,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function W_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,c){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=c*(o/3);break;case n.LINES:e.lines+=c*(o/2);break;case n.LINE_STRIP:e.lines+=c*(o-1);break;case n.LINE_LOOP:e.lines+=c*o;break;case n.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function j_(n,t,e){const i=new WeakMap,r=new He;function o(l,c,d){const f=l.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let _=i.get(c);if(_===void 0||_.count!==v){let A=function(){q.dispose(),i.delete(c),c.removeEventListener("dispose",A)};var w=A;_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let W=c.attributes.position.count*R,z=1;W>t.maxTextureSize&&(z=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const u=new Float32Array(W*z*4*v),q=new Ed(u,W,z,v);q.type=Pi,q.needsUpdate=!0;const P=R*4;for(let k=0;k<v;k++){const st=m[k],Y=O[k],dt=U[k],ut=W*z*4*k;for(let lt=0;lt<st.count;lt++){const ft=lt*P;E===!0&&(r.fromBufferAttribute(st,lt),u[ut+ft+0]=r.x,u[ut+ft+1]=r.y,u[ut+ft+2]=r.z,u[ut+ft+3]=0),T===!0&&(r.fromBufferAttribute(Y,lt),u[ut+ft+4]=r.x,u[ut+ft+5]=r.y,u[ut+ft+6]=r.z,u[ut+ft+7]=0),y===!0&&(r.fromBufferAttribute(dt,lt),u[ut+ft+8]=r.x,u[ut+ft+9]=r.y,u[ut+ft+10]=r.z,u[ut+ft+11]=dt.itemSize===4?r.w:1)}}_={count:v,texture:q,size:new ce(W,z)},i.set(c,_),c.addEventListener("dispose",A)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let E=0;for(let y=0;y<f.length;y++)E+=f[y];const T=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",f)}d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:o}}function X_(n,t,e,i){let r=new WeakMap;function o(d){const f=i.render.frame,g=d.geometry,v=t.get(d,g);if(r.get(v)!==f&&(t.update(v),r.set(v,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==f&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return v}function l(){r=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:l}}const Fd=new In,vh=new Ld(1,1),kd=new Ed,Bd=new gm,Vd=new Rd,_h=[],xh=[],bh=new Float32Array(16),yh=new Float32Array(9),wh=new Float32Array(4);function vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let o=_h[r];if(o===void 0&&(o=new Float32Array(r),_h[r]=o),t!==0){i.toArray(o,0);for(let l=1,c=0;l!==t;++l)c+=e,n[l].toArray(o,c)}return o}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function un(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ea(n,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function q_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),un(e,t)}}function $_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),un(e,t)}}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),un(e,t)}}function Z_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;wh.set(i),n.uniformMatrix2fv(this.addr,!1,wh),un(e,i)}}function J_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;yh.set(i),n.uniformMatrix3fv(this.addr,!1,yh),un(e,i)}}function Q_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;bh.set(i),n.uniformMatrix4fv(this.addr,!1,bh),un(e,i)}}function t0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),un(e,t)}}function n0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),un(e,t)}}function i0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),un(e,t)}}function r0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function s0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),un(e,t)}}function o0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),un(e,t)}}function a0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),un(e,t)}}function l0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(vh.compareFunction=wd,o=vh):o=Fd,e.setTexture2D(t||o,r)}function c0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Bd,r)}function u0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Vd,r)}function h0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||kd,r)}function d0(n){switch(n){case 5126:return q_;case 35664:return Y_;case 35665:return $_;case 35666:return K_;case 35674:return Z_;case 35675:return J_;case 35676:return Q_;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return r0;case 36294:return s0;case 36295:return o0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return h0}}function p0(n,t){n.uniform1fv(this.addr,t)}function f0(n,t){const e=vs(t,this.size,2);n.uniform2fv(this.addr,e)}function m0(n,t){const e=vs(t,this.size,3);n.uniform3fv(this.addr,e)}function g0(n,t){const e=vs(t,this.size,4);n.uniform4fv(this.addr,e)}function v0(n,t){const e=vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function _0(n,t){const e=vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function x0(n,t){const e=vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function b0(n,t){n.uniform1iv(this.addr,t)}function y0(n,t){n.uniform2iv(this.addr,t)}function w0(n,t){n.uniform3iv(this.addr,t)}function S0(n,t){n.uniform4iv(this.addr,t)}function E0(n,t){n.uniform1uiv(this.addr,t)}function M0(n,t){n.uniform2uiv(this.addr,t)}function T0(n,t){n.uniform3uiv(this.addr,t)}function C0(n,t){n.uniform4uiv(this.addr,t)}function A0(n,t,e){const i=this.cache,r=t.length,o=Ea(e,r);cn(i,o)||(n.uniform1iv(this.addr,o),un(i,o));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||Fd,o[l])}function P0(n,t,e){const i=this.cache,r=t.length,o=Ea(e,r);cn(i,o)||(n.uniform1iv(this.addr,o),un(i,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||Bd,o[l])}function R0(n,t,e){const i=this.cache,r=t.length,o=Ea(e,r);cn(i,o)||(n.uniform1iv(this.addr,o),un(i,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||Vd,o[l])}function D0(n,t,e){const i=this.cache,r=t.length,o=Ea(e,r);cn(i,o)||(n.uniform1iv(this.addr,o),un(i,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||kd,o[l])}function L0(n){switch(n){case 5126:return p0;case 35664:return f0;case 35665:return m0;case 35666:return g0;case 35674:return v0;case 35675:return _0;case 35676:return x0;case 5124:case 35670:return b0;case 35667:case 35671:return y0;case 35668:case 35672:return w0;case 35669:case 35673:return S0;case 5125:return E0;case 36294:return M0;case 36295:return T0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return D0}}class I0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}}class U0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L0(e.type)}}class N0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const c=r[o];c.setValue(t,e[c.id],i)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function Sh(n,t){n.seq.push(t),n.map[t.id]=t}function O0(n,t,e){const i=n.name,r=i.length;for(wl.lastIndex=0;;){const o=wl.exec(i),l=wl.lastIndex;let c=o[1];const d=o[2]==="]",f=o[3];if(d&&(c=c|0),f===void 0||f==="["&&l+2===r){Sh(e,f===void 0?new I0(c,n,t):new U0(c,n,t));break}else{let v=e.map[c];v===void 0&&(v=new N0(c),Sh(e,v)),e=v}}}class ra{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);O0(o,l,this)}}setValue(t,e,i,r){const o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,l=e.length;o!==l;++o){const c=e[o],d=i[c.id];d.needsUpdate!==!1&&c.setValue(t,d.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,o=t.length;r!==o;++r){const l=t[r];l.id in e&&i.push(l)}return i}}function Eh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const F0=37297;let k0=0;function B0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){const c=l+1;i.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return i.join(`
`)}const Mh=new ue;function V0(n){Le._getMatrix(Mh,Le.workingColorSpace,n);const t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(n)){case la:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Th(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+B0(n.getShaderSource(t),l)}else return r}function z0(n,t){const e=V0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function H0(n,t){let e;switch(t){case zf:e="Linear";break;case Hf:e="Reinhard";break;case Gf:e="Cineon";break;case Wf:e="ACESFilmic";break;case Xf:e="AgX";break;case qf:e="Neutral";break;case jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qo=new V;function G0(){Le.getLuminanceCoefficients(qo);const n=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function j0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function X0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(t,r),l=o.name;let c=1;o.type===n.FLOAT_MAT2&&(c=2),o.type===n.FLOAT_MAT3&&(c=3),o.type===n.FLOAT_MAT4&&(c=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:c}}return e}function Ws(n){return n!==""}function Ch(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ah(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(n){return n.replace(q0,$0)}const Y0=new Map;function $0(n,t){let e=de[t];if(e===void 0){const i=Y0.get(t);if(i!==void 0)e=de[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _c(e)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(n){return n.replace(K0,Z0)}function Z0(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Rh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function J0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===bf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function Q0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case hs:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function ex(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hd:t="ENVMAP_BLENDING_MULTIPLY";break;case Bf:t="ENVMAP_BLENDING_MIX";break;case Vf:t="ENVMAP_BLENDING_ADD";break}return t}function nx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ix(n,t,e,i){const r=n.getContext(),o=e.defines;let l=e.vertexShader,c=e.fragmentShader;const d=J0(e),f=Q0(e),g=tx(e),v=ex(e),_=nx(e),w=W0(e),E=j0(o),T=r.createProgram();let y,m,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Ws).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Ws).join(`
`),m.length>0&&(m+=`
`)):(y=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),m=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nr?"#define TONE_MAPPING":"",e.toneMapping!==nr?de.tonemapping_pars_fragment:"",e.toneMapping!==nr?H0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),l=_c(l),l=Ch(l,e),l=Ah(l,e),c=_c(c),c=Ch(c,e),c=Ah(c,e),l=Ph(l),c=Ph(c),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[w,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const U=O+y+l,R=O+m+c,W=Eh(r,r.VERTEX_SHADER,U),z=Eh(r,r.FRAGMENT_SHADER,R);r.attachShader(T,W),r.attachShader(T,z),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function u(k){if(n.debug.checkShaderErrors){const st=r.getProgramInfoLog(T).trim(),Y=r.getShaderInfoLog(W).trim(),dt=r.getShaderInfoLog(z).trim();let ut=!0,lt=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(ut=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,W,z);else{const ft=Th(r,W,"vertex"),ot=Th(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+st+`
`+ft+`
`+ot)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(Y===""||dt==="")&&(lt=!1);lt&&(k.diagnostics={runnable:ut,programLog:st,vertexShader:{log:Y,prefix:y},fragmentShader:{log:dt,prefix:m}})}r.deleteShader(W),r.deleteShader(z),q=new ra(r,T),P=X0(r,T)}let q;this.getUniforms=function(){return q===void 0&&u(this),q};let P;this.getAttributes=function(){return P===void 0&&u(this),P};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(T,F0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k0++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=z,this}let rx=0;class sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ox(t),e.set(t,i)),i}}class ox{constructor(t){this.id=rx++,this.code=t,this.usedTimes=0}}function ax(n,t,e,i,r,o,l){const c=new Oc,d=new sx,f=new Set,g=[],v=r.logarithmicDepthBuffer,_=r.vertexTextures;let w=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return f.add(P),P===0?"uv":`uv${P}`}function y(P,A,k,st,Y){const dt=st.fog,ut=Y.geometry,lt=P.isMeshStandardMaterial?st.environment:null,ft=(P.isMeshStandardMaterial?e:t).get(P.envMap||lt),ot=ft&&ft.mapping===ba?ft.image.height:null,St=E[P.type];P.precision!==null&&(w=r.getMaxPrecision(P.precision),w!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",w,"instead."));const Et=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ot=Et!==void 0?Et.length:0;let Kt=0;ut.morphAttributes.position!==void 0&&(Kt=1),ut.morphAttributes.normal!==void 0&&(Kt=2),ut.morphAttributes.color!==void 0&&(Kt=3);let le,mt,bt,Rt;if(St){const Ue=oi[St];le=Ue.vertexShader,mt=Ue.fragmentShader}else le=P.vertexShader,mt=P.fragmentShader,d.update(P),bt=d.getVertexShaderID(P),Rt=d.getFragmentShaderID(P);const yt=n.getRenderTarget(),Xt=n.state.buffers.depth.getReversed(),ge=Y.isInstancedMesh===!0,nt=Y.isBatchedMesh===!0,Be=!!P.map,Se=!!P.matcap,ne=!!ft,F=!!P.aoMap,Xe=!!P.lightMap,ae=!!P.bumpMap,re=!!P.normalMap,Ft=!!P.displacementMap,Oe=!!P.emissiveMap,Ht=!!P.metalnessMap,L=!!P.roughnessMap,M=P.anisotropy>0,$=P.clearcoat>0,pt=P.dispersion>0,K=P.iridescence>0,at=P.sheen>0,zt=P.transmission>0,At=M&&!!P.anisotropyMap,Zt=$&&!!P.clearcoatMap,Jt=$&&!!P.clearcoatNormalMap,_t=$&&!!P.clearcoatRoughnessMap,Nt=K&&!!P.iridescenceMap,Gt=K&&!!P.iridescenceThicknessMap,Yt=at&&!!P.sheenColorMap,Ut=at&&!!P.sheenRoughnessMap,Ee=!!P.specularMap,se=!!P.specularColorMap,Fe=!!P.specularIntensityMap,G=zt&&!!P.transmissionMap,Pt=zt&&!!P.thicknessMap,rt=!!P.gradientMap,gt=!!P.alphaMap,Dt=P.alphaTest>0,Ct=!!P.alphaHash,qt=!!P.extensions;let ve=nr;P.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ve=n.toneMapping);const tn={shaderID:St,shaderType:P.type,shaderName:P.name,vertexShader:le,fragmentShader:mt,defines:P.defines,customVertexShaderID:bt,customFragmentShaderID:Rt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:w,batching:nt,batchingColor:nt&&Y._colorsTexture!==null,instancing:ge,instancingColor:ge&&Y.instanceColor!==null,instancingMorph:ge&&Y.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:yt===null?n.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:ds,alphaToCoverage:!!P.alphaToCoverage,map:Be,matcap:Se,envMap:ne,envMapMode:ne&&ft.mapping,envMapCubeUVHeight:ot,aoMap:F,lightMap:Xe,bumpMap:ae,normalMap:re,displacementMap:_&&Ft,emissiveMap:Oe,normalMapObjectSpace:re&&P.normalMapType===Zf,normalMapTangentSpace:re&&P.normalMapType===yd,metalnessMap:Ht,roughnessMap:L,anisotropy:M,anisotropyMap:At,clearcoat:$,clearcoatMap:Zt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:_t,dispersion:pt,iridescence:K,iridescenceMap:Nt,iridescenceThicknessMap:Gt,sheen:at,sheenColorMap:Yt,sheenRoughnessMap:Ut,specularMap:Ee,specularColorMap:se,specularIntensityMap:Fe,transmission:zt,transmissionMap:G,thicknessMap:Pt,gradientMap:rt,opaque:P.transparent===!1&&P.blending===ss&&P.alphaToCoverage===!1,alphaMap:gt,alphaTest:Dt,alphaHash:Ct,combine:P.combine,mapUv:Be&&T(P.map.channel),aoMapUv:F&&T(P.aoMap.channel),lightMapUv:Xe&&T(P.lightMap.channel),bumpMapUv:ae&&T(P.bumpMap.channel),normalMapUv:re&&T(P.normalMap.channel),displacementMapUv:Ft&&T(P.displacementMap.channel),emissiveMapUv:Oe&&T(P.emissiveMap.channel),metalnessMapUv:Ht&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:At&&T(P.anisotropyMap.channel),clearcoatMapUv:Zt&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&T(P.sheenRoughnessMap.channel),specularMapUv:Ee&&T(P.specularMap.channel),specularColorMapUv:se&&T(P.specularColorMap.channel),specularIntensityMapUv:Fe&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Pt&&T(P.thicknessMap.channel),alphaMapUv:gt&&T(P.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(re||M),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ut.attributes.uv&&(Be||gt),fog:!!dt,useFog:P.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Xt,skinning:Y.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Kt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:Be&&P.map.isVideoTexture===!0&&Le.getTransfer(P.map.colorSpace)===Ve,decodeVideoTextureEmissive:Oe&&P.emissiveMap.isVideoTexture===!0&&Le.getTransfer(P.emissiveMap.colorSpace)===Ve,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ai,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:qt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&P.extensions.multiDraw===!0||nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function m(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)A.push(k),A.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(O(A,P),U(A,P),A.push(n.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function O(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function U(P,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const A=E[P.type];let k;if(A){const st=oi[A];k=Pm.clone(st.uniforms)}else k=P.uniforms;return k}function W(P,A){let k;for(let st=0,Y=g.length;st<Y;st++){const dt=g[st];if(dt.cacheKey===A){k=dt,++k.usedTimes;break}}return k===void 0&&(k=new ix(n,A,P,o),g.push(k)),k}function z(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function u(P){d.remove(P)}function q(){d.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:W,releaseProgram:z,releaseShaderCache:u,programs:g,dispose:q}}function lx(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let c=n.get(l);return c===void 0&&(c={},n.set(l,c)),c}function i(l){n.delete(l)}function r(l,c,d){n.get(l)[c]=d}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function cx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Dh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lh(){const n=[];let t=0;const e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function l(v,_,w,E,T,y){let m=n[t];return m===void 0?(m={id:v.id,object:v,geometry:_,material:w,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},n[t]=m):(m.id=v.id,m.object=v,m.geometry=_,m.material=w,m.groupOrder=E,m.renderOrder=v.renderOrder,m.z=T,m.group=y),t++,m}function c(v,_,w,E,T,y){const m=l(v,_,w,E,T,y);w.transmission>0?i.push(m):w.transparent===!0?r.push(m):e.push(m)}function d(v,_,w,E,T,y){const m=l(v,_,w,E,T,y);w.transmission>0?i.unshift(m):w.transparent===!0?r.unshift(m):e.unshift(m)}function f(v,_){e.length>1&&e.sort(v||cx),i.length>1&&i.sort(_||Dh),r.length>1&&r.sort(_||Dh)}function g(){for(let v=t,_=n.length;v<_;v++){const w=n[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:c,unshift:d,finish:g,sort:f}}function ux(){let n=new WeakMap;function t(i,r){const o=n.get(i);let l;return o===void 0?(l=new Lh,n.set(i,[l])):r>=o.length?(l=new Lh,o.push(l)):l=o[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function hx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new we};break;case"SpotLight":e={position:new V,direction:new V,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new we,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new we,groundColor:new we};break;case"RectAreaLight":e={color:new we,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function dx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let px=0;function fx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mx(n){const t=new hx,e=dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new V);const r=new V,o=new qe,l=new qe;function c(f){let g=0,v=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let w=0,E=0,T=0,y=0,m=0,O=0,U=0,R=0,W=0,z=0,u=0;f.sort(fx);for(let P=0,A=f.length;P<A;P++){const k=f[P],st=k.color,Y=k.intensity,dt=k.distance,ut=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=st.r*Y,v+=st.g*Y,_+=st.b*Y;else if(k.isLightProbe){for(let lt=0;lt<9;lt++)i.probe[lt].addScaledVector(k.sh.coefficients[lt],Y);u++}else if(k.isDirectionalLight){const lt=t.get(k);if(lt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ft=k.shadow,ot=e.get(k);ot.shadowIntensity=ft.intensity,ot.shadowBias=ft.bias,ot.shadowNormalBias=ft.normalBias,ot.shadowRadius=ft.radius,ot.shadowMapSize=ft.mapSize,i.directionalShadow[w]=ot,i.directionalShadowMap[w]=ut,i.directionalShadowMatrix[w]=k.shadow.matrix,O++}i.directional[w]=lt,w++}else if(k.isSpotLight){const lt=t.get(k);lt.position.setFromMatrixPosition(k.matrixWorld),lt.color.copy(st).multiplyScalar(Y),lt.distance=dt,lt.coneCos=Math.cos(k.angle),lt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),lt.decay=k.decay,i.spot[T]=lt;const ft=k.shadow;if(k.map&&(i.spotLightMap[W]=k.map,W++,ft.updateMatrices(k),k.castShadow&&z++),i.spotLightMatrix[T]=ft.matrix,k.castShadow){const ot=e.get(k);ot.shadowIntensity=ft.intensity,ot.shadowBias=ft.bias,ot.shadowNormalBias=ft.normalBias,ot.shadowRadius=ft.radius,ot.shadowMapSize=ft.mapSize,i.spotShadow[T]=ot,i.spotShadowMap[T]=ut,R++}T++}else if(k.isRectAreaLight){const lt=t.get(k);lt.color.copy(st).multiplyScalar(Y),lt.halfWidth.set(k.width*.5,0,0),lt.halfHeight.set(0,k.height*.5,0),i.rectArea[y]=lt,y++}else if(k.isPointLight){const lt=t.get(k);if(lt.color.copy(k.color).multiplyScalar(k.intensity),lt.distance=k.distance,lt.decay=k.decay,k.castShadow){const ft=k.shadow,ot=e.get(k);ot.shadowIntensity=ft.intensity,ot.shadowBias=ft.bias,ot.shadowNormalBias=ft.normalBias,ot.shadowRadius=ft.radius,ot.shadowMapSize=ft.mapSize,ot.shadowCameraNear=ft.camera.near,ot.shadowCameraFar=ft.camera.far,i.pointShadow[E]=ot,i.pointShadowMap[E]=ut,i.pointShadowMatrix[E]=k.shadow.matrix,U++}i.point[E]=lt,E++}else if(k.isHemisphereLight){const lt=t.get(k);lt.skyColor.copy(k.color).multiplyScalar(Y),lt.groundColor.copy(k.groundColor).multiplyScalar(Y),i.hemi[m]=lt,m++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=_;const q=i.hash;(q.directionalLength!==w||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==y||q.hemiLength!==m||q.numDirectionalShadows!==O||q.numPointShadows!==U||q.numSpotShadows!==R||q.numSpotMaps!==W||q.numLightProbes!==u)&&(i.directional.length=w,i.spot.length=T,i.rectArea.length=y,i.point.length=E,i.hemi.length=m,i.directionalShadow.length=O,i.directionalShadowMap.length=O,i.pointShadow.length=U,i.pointShadowMap.length=U,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=O,i.pointShadowMatrix.length=U,i.spotLightMatrix.length=R+W-z,i.spotLightMap.length=W,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=u,q.directionalLength=w,q.pointLength=E,q.spotLength=T,q.rectAreaLength=y,q.hemiLength=m,q.numDirectionalShadows=O,q.numPointShadows=U,q.numSpotShadows=R,q.numSpotMaps=W,q.numLightProbes=u,i.version=px++)}function d(f,g){let v=0,_=0,w=0,E=0,T=0;const y=g.matrixWorldInverse;for(let m=0,O=f.length;m<O;m++){const U=f[m];if(U.isDirectionalLight){const R=i.directional[v];R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),v++}else if(U.isSpotLight){const R=i.spot[w];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),w++}else if(U.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),l.identity(),o.copy(U.matrixWorld),o.premultiply(y),l.extractRotation(o),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),E++}else if(U.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),_++}else if(U.isHemisphereLight){const R=i.hemi[T];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:c,setupView:d,state:i}}function Ih(n){const t=new mx(n),e=[],i=[];function r(g){f.camera=g,e.length=0,i.length=0}function o(g){e.push(g)}function l(g){i.push(g)}function c(){t.setup(e)}function d(g){t.setupView(e,g)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:l}}function gx(n){let t=new WeakMap;function e(r,o=0){const l=t.get(r);let c;return l===void 0?(c=new Ih(n),t.set(r,[c])):o>=l.length?(c=new Ih(n),l.push(c)):c=l[o],c}function i(){t=new WeakMap}return{get:e,dispose:i}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_x=`uniform sampler2D shadow_pass;
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
}`;function xx(n,t,e){let i=new kc;const r=new ce,o=new ce,l=new He,c=new Vm({depthPacking:Kf}),d=new zm,f={},g=e.maxTextureSize,v={[rr]:Ln,[Ln]:rr,[Ai]:Ai},_=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:vx,fragmentShader:_x}),w=_.clone();w.defines.HORIZONTAL_PASS=1;const E=new fi;E.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new wn(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let m=this.type;this.render=function(z,u,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const P=n.getRenderTarget(),A=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),st=n.state;st.setBlending(er),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const Y=m!==Ci&&this.type===Ci,dt=m===Ci&&this.type!==Ci;for(let ut=0,lt=z.length;ut<lt;ut++){const ft=z[ut],ot=ft.shadow;if(ot===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;r.copy(ot.mapSize);const St=ot.getFrameExtents();if(r.multiply(St),o.copy(ot.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/St.x),r.x=o.x*St.x,ot.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/St.y),r.y=o.y*St.y,ot.mapSize.y=o.y)),ot.map===null||Y===!0||dt===!0){const Ot=this.type!==Ci?{minFilter:ti,magFilter:ti}:{};ot.map!==null&&ot.map.dispose(),ot.map=new Cr(r.x,r.y,Ot),ot.map.texture.name=ft.name+".shadowMap",ot.camera.updateProjectionMatrix()}n.setRenderTarget(ot.map),n.clear();const Et=ot.getViewportCount();for(let Ot=0;Ot<Et;Ot++){const Kt=ot.getViewport(Ot);l.set(o.x*Kt.x,o.y*Kt.y,o.x*Kt.z,o.y*Kt.w),st.viewport(l),ot.updateMatrices(ft,Ot),i=ot.getFrustum(),R(u,q,ot.camera,ft,this.type)}ot.isPointLightShadow!==!0&&this.type===Ci&&O(ot,q),ot.needsUpdate=!1}m=this.type,y.needsUpdate=!1,n.setRenderTarget(P,A,k)};function O(z,u){const q=t.update(T);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,w.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,w.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Cr(r.x,r.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(u,null,q,_,T,null),w.uniforms.shadow_pass.value=z.mapPass.texture,w.uniforms.resolution.value=z.mapSize,w.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(u,null,q,w,T,null)}function U(z,u,q,P){let A=null;const k=q.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)A=k;else if(A=q.isPointLight===!0?d:c,n.localClippingEnabled&&u.clipShadows===!0&&Array.isArray(u.clippingPlanes)&&u.clippingPlanes.length!==0||u.displacementMap&&u.displacementScale!==0||u.alphaMap&&u.alphaTest>0||u.map&&u.alphaTest>0||u.alphaToCoverage===!0){const st=A.uuid,Y=u.uuid;let dt=f[st];dt===void 0&&(dt={},f[st]=dt);let ut=dt[Y];ut===void 0&&(ut=A.clone(),dt[Y]=ut,u.addEventListener("dispose",W)),A=ut}if(A.visible=u.visible,A.wireframe=u.wireframe,P===Ci?A.side=u.shadowSide!==null?u.shadowSide:u.side:A.side=u.shadowSide!==null?u.shadowSide:v[u.side],A.alphaMap=u.alphaMap,A.alphaTest=u.alphaToCoverage===!0?.5:u.alphaTest,A.map=u.map,A.clipShadows=u.clipShadows,A.clippingPlanes=u.clippingPlanes,A.clipIntersection=u.clipIntersection,A.displacementMap=u.displacementMap,A.displacementScale=u.displacementScale,A.displacementBias=u.displacementBias,A.wireframeLinewidth=u.wireframeLinewidth,A.linewidth=u.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=n.properties.get(A);st.light=q}return A}function R(z,u,q,P,A){if(z.visible===!1)return;if(z.layers.test(u.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Ci)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,z.matrixWorld);const Y=t.update(z),dt=z.material;if(Array.isArray(dt)){const ut=Y.groups;for(let lt=0,ft=ut.length;lt<ft;lt++){const ot=ut[lt],St=dt[ot.materialIndex];if(St&&St.visible){const Et=U(z,St,P,A);z.onBeforeShadow(n,z,u,q,Y,Et,ot),n.renderBufferDirect(q,null,Y,Et,z,ot),z.onAfterShadow(n,z,u,q,Y,Et,ot)}}}else if(dt.visible){const ut=U(z,dt,P,A);z.onBeforeShadow(n,z,u,q,Y,ut,null),n.renderBufferDirect(q,null,Y,ut,z,null),z.onAfterShadow(n,z,u,q,Y,ut,null)}}const st=z.children;for(let Y=0,dt=st.length;Y<dt;Y++)R(st[Y],u,q,P,A)}function W(z){z.target.removeEventListener("dispose",W);for(const q in f){const P=f[q],A=z.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const bx={[Ul]:Nl,[Ol]:Bl,[Fl]:Vl,[cs]:kl,[Nl]:Ul,[Bl]:Ol,[Vl]:Fl,[kl]:cs};function yx(n,t){function e(){let G=!1;const Pt=new He;let rt=null;const gt=new He(0,0,0,0);return{setMask:function(Dt){rt!==Dt&&!G&&(n.colorMask(Dt,Dt,Dt,Dt),rt=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,Ct,qt,ve,tn){tn===!0&&(Dt*=ve,Ct*=ve,qt*=ve),Pt.set(Dt,Ct,qt,ve),gt.equals(Pt)===!1&&(n.clearColor(Dt,Ct,qt,ve),gt.copy(Pt))},reset:function(){G=!1,rt=null,gt.set(-1,0,0,0)}}}function i(){let G=!1,Pt=!1,rt=null,gt=null,Dt=null;return{setReversed:function(Ct){if(Pt!==Ct){const qt=t.get("EXT_clip_control");Ct?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Pt=Ct;const ve=Dt;Dt=null,this.setClear(ve)}},getReversed:function(){return Pt},setTest:function(Ct){Ct?yt(n.DEPTH_TEST):Xt(n.DEPTH_TEST)},setMask:function(Ct){rt!==Ct&&!G&&(n.depthMask(Ct),rt=Ct)},setFunc:function(Ct){if(Pt&&(Ct=bx[Ct]),gt!==Ct){switch(Ct){case Ul:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Ol:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Fl:n.depthFunc(n.EQUAL);break;case kl:n.depthFunc(n.GEQUAL);break;case Bl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=Ct}},setLocked:function(Ct){G=Ct},setClear:function(Ct){Dt!==Ct&&(Pt&&(Ct=1-Ct),n.clearDepth(Ct),Dt=Ct)},reset:function(){G=!1,rt=null,gt=null,Dt=null,Pt=!1}}}function r(){let G=!1,Pt=null,rt=null,gt=null,Dt=null,Ct=null,qt=null,ve=null,tn=null;return{setTest:function(Ue){G||(Ue?yt(n.STENCIL_TEST):Xt(n.STENCIL_TEST))},setMask:function(Ue){Pt!==Ue&&!G&&(n.stencilMask(Ue),Pt=Ue)},setFunc:function(Ue,Mn,Vn){(rt!==Ue||gt!==Mn||Dt!==Vn)&&(n.stencilFunc(Ue,Mn,Vn),rt=Ue,gt=Mn,Dt=Vn)},setOp:function(Ue,Mn,Vn){(Ct!==Ue||qt!==Mn||ve!==Vn)&&(n.stencilOp(Ue,Mn,Vn),Ct=Ue,qt=Mn,ve=Vn)},setLocked:function(Ue){G=Ue},setClear:function(Ue){tn!==Ue&&(n.clearStencil(Ue),tn=Ue)},reset:function(){G=!1,Pt=null,rt=null,gt=null,Dt=null,Ct=null,qt=null,ve=null,tn=null}}}const o=new e,l=new i,c=new r,d=new WeakMap,f=new WeakMap;let g={},v={},_=new WeakMap,w=[],E=null,T=!1,y=null,m=null,O=null,U=null,R=null,W=null,z=null,u=new we(0,0,0),q=0,P=!1,A=null,k=null,st=null,Y=null,dt=null;const ut=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,ft=0;const ot=n.getParameter(n.VERSION);ot.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(ot)[1]),lt=ft>=1):ot.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),lt=ft>=2);let St=null,Et={};const Ot=n.getParameter(n.SCISSOR_BOX),Kt=n.getParameter(n.VIEWPORT),le=new He().fromArray(Ot),mt=new He().fromArray(Kt);function bt(G,Pt,rt,gt){const Dt=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(G,Ct),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<rt;qt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Pt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Pt+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return Ct}const Rt={};Rt[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Rt[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Rt[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),yt(n.DEPTH_TEST),l.setFunc(cs),ae(!1),re(Tu),yt(n.CULL_FACE),F(er);function yt(G){g[G]!==!0&&(n.enable(G),g[G]=!0)}function Xt(G){g[G]!==!1&&(n.disable(G),g[G]=!1)}function ge(G,Pt){return v[G]!==Pt?(n.bindFramebuffer(G,Pt),v[G]=Pt,G===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Pt),G===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Pt),!0):!1}function nt(G,Pt){let rt=w,gt=!1;if(G){rt=_.get(Pt),rt===void 0&&(rt=[],_.set(Pt,rt));const Dt=G.textures;if(rt.length!==Dt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,qt=Dt.length;Ct<qt;Ct++)rt[Ct]=n.COLOR_ATTACHMENT0+Ct;rt.length=Dt.length,gt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,gt=!0);gt&&n.drawBuffers(rt)}function Be(G){return E!==G?(n.useProgram(G),E=G,!0):!1}const Se={[br]:n.FUNC_ADD,[wf]:n.FUNC_SUBTRACT,[Sf]:n.FUNC_REVERSE_SUBTRACT};Se[Ef]=n.MIN,Se[Mf]=n.MAX;const ne={[Tf]:n.ZERO,[Cf]:n.ONE,[Af]:n.SRC_COLOR,[Ll]:n.SRC_ALPHA,[Uf]:n.SRC_ALPHA_SATURATE,[Lf]:n.DST_COLOR,[Rf]:n.DST_ALPHA,[Pf]:n.ONE_MINUS_SRC_COLOR,[Il]:n.ONE_MINUS_SRC_ALPHA,[If]:n.ONE_MINUS_DST_COLOR,[Df]:n.ONE_MINUS_DST_ALPHA,[Nf]:n.CONSTANT_COLOR,[Of]:n.ONE_MINUS_CONSTANT_COLOR,[Ff]:n.CONSTANT_ALPHA,[kf]:n.ONE_MINUS_CONSTANT_ALPHA};function F(G,Pt,rt,gt,Dt,Ct,qt,ve,tn,Ue){if(G===er){T===!0&&(Xt(n.BLEND),T=!1);return}if(T===!1&&(yt(n.BLEND),T=!0),G!==yf){if(G!==y||Ue!==P){if((m!==br||R!==br)&&(n.blendEquation(n.FUNC_ADD),m=br,R=br),Ue)switch(G){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cu:n.blendFunc(n.ONE,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,U=null,W=null,z=null,u.set(0,0,0),q=0,y=G,P=Ue}return}Dt=Dt||Pt,Ct=Ct||rt,qt=qt||gt,(Pt!==m||Dt!==R)&&(n.blendEquationSeparate(Se[Pt],Se[Dt]),m=Pt,R=Dt),(rt!==O||gt!==U||Ct!==W||qt!==z)&&(n.blendFuncSeparate(ne[rt],ne[gt],ne[Ct],ne[qt]),O=rt,U=gt,W=Ct,z=qt),(ve.equals(u)===!1||tn!==q)&&(n.blendColor(ve.r,ve.g,ve.b,tn),u.copy(ve),q=tn),y=G,P=!1}function Xe(G,Pt){G.side===Ai?Xt(n.CULL_FACE):yt(n.CULL_FACE);let rt=G.side===Ln;Pt&&(rt=!rt),ae(rt),G.blending===ss&&G.transparent===!1?F(er):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);const gt=G.stencilWrite;c.setTest(gt),gt&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Oe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):Xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(G){A!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),A=G)}function re(G){G!==_f?(yt(n.CULL_FACE),G!==k&&(G===Tu?n.cullFace(n.BACK):G===xf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xt(n.CULL_FACE),k=G}function Ft(G){G!==st&&(lt&&n.lineWidth(G),st=G)}function Oe(G,Pt,rt){G?(yt(n.POLYGON_OFFSET_FILL),(Y!==Pt||dt!==rt)&&(n.polygonOffset(Pt,rt),Y=Pt,dt=rt)):Xt(n.POLYGON_OFFSET_FILL)}function Ht(G){G?yt(n.SCISSOR_TEST):Xt(n.SCISSOR_TEST)}function L(G){G===void 0&&(G=n.TEXTURE0+ut-1),St!==G&&(n.activeTexture(G),St=G)}function M(G,Pt,rt){rt===void 0&&(St===null?rt=n.TEXTURE0+ut-1:rt=St);let gt=Et[rt];gt===void 0&&(gt={type:void 0,texture:void 0},Et[rt]=gt),(gt.type!==G||gt.texture!==Pt)&&(St!==rt&&(n.activeTexture(rt),St=rt),n.bindTexture(G,Pt||Rt[G]),gt.type=G,gt.texture=Pt)}function $(){const G=Et[St];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pt(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Zt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Jt(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Gt(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(G){le.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),le.copy(G))}function Ut(G){mt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),mt.copy(G))}function Ee(G,Pt){let rt=f.get(Pt);rt===void 0&&(rt=new WeakMap,f.set(Pt,rt));let gt=rt.get(G);gt===void 0&&(gt=n.getUniformBlockIndex(Pt,G.name),rt.set(G,gt))}function se(G,Pt){const gt=f.get(Pt).get(G);d.get(Pt)!==gt&&(n.uniformBlockBinding(Pt,gt,G.__bindingPointIndex),d.set(Pt,gt))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},St=null,Et={},v={},_=new WeakMap,w=[],E=null,T=!1,y=null,m=null,O=null,U=null,R=null,W=null,z=null,u=new we(0,0,0),q=0,P=!1,A=null,k=null,st=null,Y=null,dt=null,le.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:yt,disable:Xt,bindFramebuffer:ge,drawBuffers:nt,useProgram:Be,setBlending:F,setMaterial:Xe,setFlipSided:ae,setCullFace:re,setLineWidth:Ft,setPolygonOffset:Oe,setScissorTest:Ht,activeTexture:L,bindTexture:M,unbindTexture:$,compressedTexImage2D:pt,compressedTexImage3D:K,texImage2D:Nt,texImage3D:Gt,updateUBOMapping:Ee,uniformBlockBinding:se,texStorage2D:Jt,texStorage3D:_t,texSubImage2D:at,texSubImage3D:zt,compressedTexSubImage2D:At,compressedTexSubImage3D:Zt,scissor:Yt,viewport:Ut,reset:Fe}}function wx(n,t,e,i,r,o,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ce,g=new WeakMap;let v;const _=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,M){return w?new OffscreenCanvas(L,M):ha("canvas")}function T(L,M,$){let pt=1;const K=Ht(L);if((K.width>$||K.height>$)&&(pt=$/Math.max(K.width,K.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const at=Math.floor(pt*K.width),zt=Math.floor(pt*K.height);v===void 0&&(v=E(at,zt));const At=M?E(at,zt):v;return At.width=at,At.height=zt,At.getContext("2d").drawImage(L,0,0,at,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+zt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function y(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function U(L,M,$,pt,K=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=M;if(M===n.RED&&($===n.FLOAT&&(at=n.R32F),$===n.HALF_FLOAT&&(at=n.R16F),$===n.UNSIGNED_BYTE&&(at=n.R8)),M===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(at=n.R8UI),$===n.UNSIGNED_SHORT&&(at=n.R16UI),$===n.UNSIGNED_INT&&(at=n.R32UI),$===n.BYTE&&(at=n.R8I),$===n.SHORT&&(at=n.R16I),$===n.INT&&(at=n.R32I)),M===n.RG&&($===n.FLOAT&&(at=n.RG32F),$===n.HALF_FLOAT&&(at=n.RG16F),$===n.UNSIGNED_BYTE&&(at=n.RG8)),M===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(at=n.RG8UI),$===n.UNSIGNED_SHORT&&(at=n.RG16UI),$===n.UNSIGNED_INT&&(at=n.RG32UI),$===n.BYTE&&(at=n.RG8I),$===n.SHORT&&(at=n.RG16I),$===n.INT&&(at=n.RG32I)),M===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(at=n.RGB8UI),$===n.UNSIGNED_SHORT&&(at=n.RGB16UI),$===n.UNSIGNED_INT&&(at=n.RGB32UI),$===n.BYTE&&(at=n.RGB8I),$===n.SHORT&&(at=n.RGB16I),$===n.INT&&(at=n.RGB32I)),M===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(at=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(at=n.RGBA16UI),$===n.UNSIGNED_INT&&(at=n.RGBA32UI),$===n.BYTE&&(at=n.RGBA8I),$===n.SHORT&&(at=n.RGBA16I),$===n.INT&&(at=n.RGBA32I)),M===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(at=n.RGB9_E5),M===n.RGBA){const zt=K?la:Le.getTransfer(pt);$===n.FLOAT&&(at=n.RGBA32F),$===n.HALF_FLOAT&&(at=n.RGBA16F),$===n.UNSIGNED_BYTE&&(at=zt===Ve?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(at=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(at=n.RGB5_A1)}return(at===n.R16F||at===n.R32F||at===n.RG16F||at===n.RG32F||at===n.RGBA16F||at===n.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function R(L,M){let $;return L?M===null||M===Tr||M===Xs?$=n.DEPTH24_STENCIL8:M===Pi?$=n.DEPTH32F_STENCIL8:M===js&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Tr||M===Xs?$=n.DEPTH_COMPONENT24:M===Pi?$=n.DEPTH_COMPONENT32F:M===js&&($=n.DEPTH_COMPONENT16),$}function W(L,M){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ti&&L.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function z(L){const M=L.target;M.removeEventListener("dispose",z),q(M),M.isVideoTexture&&g.delete(M)}function u(L){const M=L.target;M.removeEventListener("dispose",u),A(M)}function q(L){const M=i.get(L);if(M.__webglInit===void 0)return;const $=L.source,pt=_.get($);if(pt){const K=pt[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(L),Object.keys(pt).length===0&&_.delete($)}i.remove(L)}function P(L){const M=i.get(L);n.deleteTexture(M.__webglTexture);const $=L.source,pt=_.get($);delete pt[M.__cacheKey],l.memory.textures--}function A(L){const M=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(M.__webglFramebuffer[pt]))for(let K=0;K<M.__webglFramebuffer[pt].length;K++)n.deleteFramebuffer(M.__webglFramebuffer[pt][K]);else n.deleteFramebuffer(M.__webglFramebuffer[pt]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[pt])}else{if(Array.isArray(M.__webglFramebuffer))for(let pt=0;pt<M.__webglFramebuffer.length;pt++)n.deleteFramebuffer(M.__webglFramebuffer[pt]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pt=0;pt<M.__webglColorRenderbuffer.length;pt++)M.__webglColorRenderbuffer[pt]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[pt]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=L.textures;for(let pt=0,K=$.length;pt<K;pt++){const at=i.get($[pt]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),l.memory.textures--),i.remove($[pt])}i.remove(L)}let k=0;function st(){k=0}function Y(){const L=k;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),k+=1,L}function dt(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ut(L,M){const $=i.get(L);if(L.isVideoTexture&&Ft(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt($,L,M);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+M)}function lt(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){mt($,L,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+M)}function ft(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){mt($,L,M);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+M)}function ot(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){bt($,L,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+M)}const St={[Gl]:n.REPEAT,[Sr]:n.CLAMP_TO_EDGE,[Wl]:n.MIRRORED_REPEAT},Et={[ti]:n.NEAREST,[Yf]:n.NEAREST_MIPMAP_NEAREST,[So]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[Er]:n.LINEAR_MIPMAP_LINEAR},Ot={[Jf]:n.NEVER,[rm]:n.ALWAYS,[Qf]:n.LESS,[wd]:n.LEQUAL,[tm]:n.EQUAL,[im]:n.GEQUAL,[em]:n.GREATER,[nm]:n.NOTEQUAL};function Kt(L,M){if(M.type===Pi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ai||M.magFilter===Wa||M.magFilter===So||M.magFilter===Er||M.minFilter===ai||M.minFilter===Wa||M.minFilter===So||M.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,St[M.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,St[M.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,St[M.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Et[M.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ti||M.minFilter!==So&&M.minFilter!==Er||M.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(L,M){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",z));const pt=M.source;let K=_.get(pt);K===void 0&&(K={},_.set(pt,K));const at=dt(M);if(at!==L.__cacheKey){K[at]===void 0&&(K[at]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,$=!0),K[at].usedTimes++;const zt=K[L.__cacheKey];zt!==void 0&&(K[L.__cacheKey].usedTimes--,zt.usedTimes===0&&P(M)),L.__cacheKey=at,L.__webglTexture=K[at].texture}return $}function mt(L,M,$){let pt=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pt=n.TEXTURE_3D);const K=le(L,M),at=M.source;e.bindTexture(pt,L.__webglTexture,n.TEXTURE0+$);const zt=i.get(at);if(at.version!==zt.__version||K===!0){e.activeTexture(n.TEXTURE0+$);const At=Le.getPrimaries(Le.workingColorSpace),Zt=M.colorSpace===Qi?null:Le.getPrimaries(M.colorSpace),Jt=M.colorSpace===Qi||At===Zt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let _t=T(M.image,!1,r.maxTextureSize);_t=Oe(M,_t);const Nt=o.convert(M.format,M.colorSpace),Gt=o.convert(M.type);let Yt=U(M.internalFormat,Nt,Gt,M.colorSpace,M.isVideoTexture);Kt(pt,M);let Ut;const Ee=M.mipmaps,se=M.isVideoTexture!==!0,Fe=zt.__version===void 0||K===!0,G=at.dataReady,Pt=W(M,_t);if(M.isDepthTexture)Yt=R(M.format===Ys,M.type),Fe&&(se?e.texStorage2D(n.TEXTURE_2D,1,Yt,_t.width,_t.height):e.texImage2D(n.TEXTURE_2D,0,Yt,_t.width,_t.height,0,Nt,Gt,null));else if(M.isDataTexture)if(Ee.length>0){se&&Fe&&e.texStorage2D(n.TEXTURE_2D,Pt,Yt,Ee[0].width,Ee[0].height);for(let rt=0,gt=Ee.length;rt<gt;rt++)Ut=Ee[rt],se?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Ut.width,Ut.height,Nt,Gt,Ut.data):e.texImage2D(n.TEXTURE_2D,rt,Yt,Ut.width,Ut.height,0,Nt,Gt,Ut.data);M.generateMipmaps=!1}else se?(Fe&&e.texStorage2D(n.TEXTURE_2D,Pt,Yt,_t.width,_t.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t.width,_t.height,Nt,Gt,_t.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,_t.width,_t.height,0,Nt,Gt,_t.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){se&&Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Yt,Ee[0].width,Ee[0].height,_t.depth);for(let rt=0,gt=Ee.length;rt<gt;rt++)if(Ut=Ee[rt],M.format!==Qn)if(Nt!==null)if(se){if(G)if(M.layerUpdates.size>0){const Dt=ch(Ut.width,Ut.height,M.format,M.type);for(const Ct of M.layerUpdates){const qt=Ut.data.subarray(Ct*Dt/Ut.data.BYTES_PER_ELEMENT,(Ct+1)*Dt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,Ct,Ut.width,Ut.height,1,Nt,qt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Ut.width,Ut.height,_t.depth,Nt,Ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Yt,Ut.width,Ut.height,_t.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Ut.width,Ut.height,_t.depth,Nt,Gt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Yt,Ut.width,Ut.height,_t.depth,0,Nt,Gt,Ut.data)}else{se&&Fe&&e.texStorage2D(n.TEXTURE_2D,Pt,Yt,Ee[0].width,Ee[0].height);for(let rt=0,gt=Ee.length;rt<gt;rt++)Ut=Ee[rt],M.format!==Qn?Nt!==null?se?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,Ut.width,Ut.height,Nt,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Yt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Ut.width,Ut.height,Nt,Gt,Ut.data):e.texImage2D(n.TEXTURE_2D,rt,Yt,Ut.width,Ut.height,0,Nt,Gt,Ut.data)}else if(M.isDataArrayTexture)if(se){if(Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Yt,_t.width,_t.height,_t.depth),G)if(M.layerUpdates.size>0){const rt=ch(_t.width,_t.height,M.format,M.type);for(const gt of M.layerUpdates){const Dt=_t.data.subarray(gt*rt/_t.data.BYTES_PER_ELEMENT,(gt+1)*rt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,_t.width,_t.height,1,Nt,Gt,Dt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Nt,Gt,_t.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,_t.width,_t.height,_t.depth,0,Nt,Gt,_t.data);else if(M.isData3DTexture)se?(Fe&&e.texStorage3D(n.TEXTURE_3D,Pt,Yt,_t.width,_t.height,_t.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Nt,Gt,_t.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,_t.width,_t.height,_t.depth,0,Nt,Gt,_t.data);else if(M.isFramebufferTexture){if(Fe)if(se)e.texStorage2D(n.TEXTURE_2D,Pt,Yt,_t.width,_t.height);else{let rt=_t.width,gt=_t.height;for(let Dt=0;Dt<Pt;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,Yt,rt,gt,0,Nt,Gt,null),rt>>=1,gt>>=1}}else if(Ee.length>0){if(se&&Fe){const rt=Ht(Ee[0]);e.texStorage2D(n.TEXTURE_2D,Pt,Yt,rt.width,rt.height)}for(let rt=0,gt=Ee.length;rt<gt;rt++)Ut=Ee[rt],se?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Nt,Gt,Ut):e.texImage2D(n.TEXTURE_2D,rt,Yt,Nt,Gt,Ut);M.generateMipmaps=!1}else if(se){if(Fe){const rt=Ht(_t);e.texStorage2D(n.TEXTURE_2D,Pt,Yt,rt.width,rt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Nt,Gt,_t)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Nt,Gt,_t);y(M)&&m(pt),zt.__version=at.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function bt(L,M,$){if(M.image.length!==6)return;const pt=le(L,M),K=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);const at=i.get(K);if(K.version!==at.__version||pt===!0){e.activeTexture(n.TEXTURE0+$);const zt=Le.getPrimaries(Le.workingColorSpace),At=M.colorSpace===Qi?null:Le.getPrimaries(M.colorSpace),Zt=M.colorSpace===Qi||zt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,_t=M.image[0]&&M.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!Jt&&!_t?Nt[gt]=T(M.image[gt],!0,r.maxCubemapSize):Nt[gt]=_t?M.image[gt].image:M.image[gt],Nt[gt]=Oe(M,Nt[gt]);const Gt=Nt[0],Yt=o.convert(M.format,M.colorSpace),Ut=o.convert(M.type),Ee=U(M.internalFormat,Yt,Ut,M.colorSpace),se=M.isVideoTexture!==!0,Fe=at.__version===void 0||pt===!0,G=K.dataReady;let Pt=W(M,Gt);Kt(n.TEXTURE_CUBE_MAP,M);let rt;if(Jt){se&&Fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Ee,Gt.width,Gt.height);for(let gt=0;gt<6;gt++){rt=Nt[gt].mipmaps;for(let Dt=0;Dt<rt.length;Dt++){const Ct=rt[Dt];M.format!==Qn?Yt!==null?se?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,0,0,Ct.width,Ct.height,Yt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,Ee,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,0,0,Ct.width,Ct.height,Yt,Ut,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,Ee,Ct.width,Ct.height,0,Yt,Ut,Ct.data)}}}else{if(rt=M.mipmaps,se&&Fe){rt.length>0&&Pt++;const gt=Ht(Nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Ee,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(_t){se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,Yt,Ut,Nt[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ee,Nt[gt].width,Nt[gt].height,0,Yt,Ut,Nt[gt].data);for(let Dt=0;Dt<rt.length;Dt++){const qt=rt[Dt].image[gt].image;se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,0,0,qt.width,qt.height,Yt,Ut,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,Ee,qt.width,qt.height,0,Yt,Ut,qt.data)}}else{se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Yt,Ut,Nt[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ee,Yt,Ut,Nt[gt]);for(let Dt=0;Dt<rt.length;Dt++){const Ct=rt[Dt];se?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,0,0,Yt,Ut,Ct.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,Ee,Yt,Ut,Ct.image[gt])}}}y(M)&&m(n.TEXTURE_CUBE_MAP),at.__version=K.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Rt(L,M,$,pt,K,at){const zt=o.convert($.format,$.colorSpace),At=o.convert($.type),Zt=U($.internalFormat,zt,At,$.colorSpace),Jt=i.get(M),_t=i.get($);if(_t.__renderTarget=M,!Jt.__hasExternalTextures){const Nt=Math.max(1,M.width>>at),Gt=Math.max(1,M.height>>at);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,at,Zt,Nt,Gt,M.depth,0,zt,At,null):e.texImage2D(K,at,Zt,Nt,Gt,0,zt,At,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),re(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,K,_t.__webglTexture,0,ae(M)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,K,_t.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(L,M,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),M.depthBuffer){const pt=M.depthTexture,K=pt&&pt.isDepthTexture?pt.type:null,at=R(M.stencilBuffer,K),zt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=ae(M);re(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,at,M.width,M.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,at,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,at,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,zt,n.RENDERBUFFER,L)}else{const pt=M.textures;for(let K=0;K<pt.length;K++){const at=pt[K],zt=o.convert(at.format,at.colorSpace),At=o.convert(at.type),Zt=U(at.internalFormat,zt,At,at.colorSpace),Jt=ae(M);$&&re(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,Zt,M.width,M.height):re(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt,Zt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Zt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xt(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=i.get(M.depthTexture);pt.__renderTarget=M,(!pt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ut(M.depthTexture,0);const K=pt.__webglTexture,at=ae(M);if(M.depthTexture.format===qs)re(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(M.depthTexture.format===Ys)re(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ge(L){const M=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pt){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pt.removeEventListener("dispose",K)};pt.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=pt}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?Xt(M.__webglFramebuffer[0],L):Xt(M.__webglFramebuffer,L)}else if($){M.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[pt]),M.__webglDepthbuffer[pt]===void 0)M.__webglDepthbuffer[pt]=n.createRenderbuffer(),yt(M.__webglDepthbuffer[pt],L,!1);else{const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[pt];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,at)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),yt(M.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(L,M,$){const pt=i.get(L);M!==void 0&&Rt(pt.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&ge(L)}function Be(L){const M=L.texture,$=i.get(L),pt=i.get(M);L.addEventListener("dispose",u);const K=L.textures,at=L.isWebGLCubeRenderTarget===!0,zt=K.length>1;if(zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=M.version,l.memory.textures++),at){$.__webglFramebuffer=[];for(let At=0;At<6;At++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[At]=[];for(let Zt=0;Zt<M.mipmaps.length;Zt++)$.__webglFramebuffer[At][Zt]=n.createFramebuffer()}else $.__webglFramebuffer[At]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let At=0;At<M.mipmaps.length;At++)$.__webglFramebuffer[At]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(zt)for(let At=0,Zt=K.length;At<Zt;At++){const Jt=i.get(K[At]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),l.memory.textures++)}if(L.samples>0&&re(L)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let At=0;At<K.length;At++){const Zt=K[At];$.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[At]);const Jt=o.convert(Zt.format,Zt.colorSpace),_t=o.convert(Zt.type),Nt=U(Zt.internalFormat,Jt,_t,Zt.colorSpace,L.isXRRenderTarget===!0),Gt=ae(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,Nt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,$.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),yt($.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,M);for(let At=0;At<6;At++)if(M.mipmaps&&M.mipmaps.length>0)for(let Zt=0;Zt<M.mipmaps.length;Zt++)Rt($.__webglFramebuffer[At][Zt],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Zt);else Rt($.__webglFramebuffer[At],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(M)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let At=0,Zt=K.length;At<Zt;At++){const Jt=K[At],_t=i.get(Jt);e.bindTexture(n.TEXTURE_2D,_t.__webglTexture),Kt(n.TEXTURE_2D,Jt),Rt($.__webglFramebuffer,L,Jt,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,0),y(Jt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let At=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,pt.__webglTexture),Kt(At,M),M.mipmaps&&M.mipmaps.length>0)for(let Zt=0;Zt<M.mipmaps.length;Zt++)Rt($.__webglFramebuffer[Zt],L,M,n.COLOR_ATTACHMENT0,At,Zt);else Rt($.__webglFramebuffer,L,M,n.COLOR_ATTACHMENT0,At,0);y(M)&&m(At),e.unbindTexture()}L.depthBuffer&&ge(L)}function Se(L){const M=L.textures;for(let $=0,pt=M.length;$<pt;$++){const K=M[$];if(y(K)){const at=O(L),zt=i.get(K).__webglTexture;e.bindTexture(at,zt),m(at),e.unbindTexture()}}}const ne=[],F=[];function Xe(L){if(L.samples>0){if(re(L)===!1){const M=L.textures,$=L.width,pt=L.height;let K=n.COLOR_BUFFER_BIT;const at=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,zt=i.get(L),At=M.length>1;if(At)for(let Jt=0;Jt<M.length;Jt++)e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Jt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Jt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Zt=L.texture.mipmaps;Zt&&Zt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Jt=0;Jt<M.length;Jt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),At){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Jt]);const _t=i.get(M[Jt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_t,0)}n.blitFramebuffer(0,0,$,pt,0,0,$,pt,K,n.NEAREST),d===!0&&(ne.length=0,F.length=0,ne.push(n.COLOR_ATTACHMENT0+Jt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ne.push(at),F.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let Jt=0;Jt<M.length;Jt++){e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Jt,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Jt]);const _t=i.get(M[Jt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Jt,n.TEXTURE_2D,_t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const M=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ae(L){return Math.min(r.maxSamples,L.samples)}function re(L){const M=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ft(L){const M=l.render.frame;g.get(L)!==M&&(g.set(L,M),L.update())}function Oe(L,M){const $=L.colorSpace,pt=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==ds&&$!==Qi&&(Le.getTransfer($)===Ve?(pt!==Qn||K!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function Ht(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(f.width=L.naturalWidth||L.width,f.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(f.width=L.displayWidth,f.height=L.displayHeight):(f.width=L.width,f.height=L.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=st,this.setTexture2D=ut,this.setTexture2DArray=lt,this.setTexture3D=ft,this.setTextureCube=ot,this.rebindTextures=nt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=re}function Sx(n,t){function e(i,r=Qi){let o;const l=Le.getTransfer(r);if(i===ui)return n.UNSIGNED_BYTE;if(i===Rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pd)return n.BYTE;if(i===fd)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===Pc)return n.INT;if(i===Tr)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===eo)return n.HALF_FLOAT;if(i===gd)return n.ALPHA;if(i===vd)return n.RGB;if(i===Qn)return n.RGBA;if(i===qs)return n.DEPTH_COMPONENT;if(i===Ys)return n.DEPTH_STENCIL;if(i===_d)return n.RED;if(i===Lc)return n.RED_INTEGER;if(i===xd)return n.RG;if(i===Ic)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===Zo||i===Jo||i===Qo||i===ta)if(l===Ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Xl||i===ql||i===Yl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ql)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===Kl||i===Zl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===$l||i===Kl)return l===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Zl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Jl)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ql)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ec)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ic)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ac)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return l===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===dc||i===pc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ea)return l===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bd||i===fc||i===mc||i===gc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===ea)return o.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new In,o=t.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new or({vertexShader:Ex,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wn(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cx extends Lr{constructor(t,e){super();const i=this;let r=null,o=1,l=null,c="local-floor",d=1,f=null,g=null,v=null,_=null,w=null,E=null;const T=new Tx,y=e.getContextAttributes();let m=null,O=null;const U=[],R=[],W=new ce;let z=null;const u=new Rn;u.viewport=new He;const q=new Rn;q.viewport=new He;const P=[u,q],A=new jm;let k=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(mt){let bt=U[mt];return bt===void 0&&(bt=new hl,U[mt]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(mt){let bt=U[mt];return bt===void 0&&(bt=new hl,U[mt]=bt),bt.getGripSpace()},this.getHand=function(mt){let bt=U[mt];return bt===void 0&&(bt=new hl,U[mt]=bt),bt.getHandSpace()};function Y(mt){const bt=R.indexOf(mt.inputSource);if(bt===-1)return;const Rt=U[bt];Rt!==void 0&&(Rt.update(mt.inputSource,mt.frame,f||l),Rt.dispatchEvent({type:mt.type,data:mt.inputSource}))}function dt(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",dt),r.removeEventListener("inputsourceschange",ut);for(let mt=0;mt<U.length;mt++){const bt=R[mt];bt!==null&&(R[mt]=null,U[mt].disconnect(bt))}k=null,st=null,T.reset(),t.setRenderTarget(m),w=null,_=null,v=null,r=null,O=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(W.width,W.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(mt){o=mt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(mt){c=mt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(mt){f=mt},this.getBaseLayer=function(){return _!==null?_:w},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(mt){if(r=mt,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",dt),r.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,yt=null,Xt=null;y.depth&&(Xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=y.stencil?Ys:qs,yt=y.stencil?Xs:Tr);const ge={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:o};v=new XRWebGLBinding(r,e),_=v.createProjectionLayer(ge),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new Cr(_.textureWidth,_.textureHeight,{format:Qn,type:ui,depthTexture:new Ld(_.textureWidth,_.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};w=new XRWebGLLayer(r,e,Rt),r.updateRenderState({baseLayer:w}),t.setPixelRatio(1),t.setSize(w.framebufferWidth,w.framebufferHeight,!1),O=new Cr(w.framebufferWidth,w.framebufferHeight,{format:Qn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await r.requestReferenceSpace(c),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ut(mt){for(let bt=0;bt<mt.removed.length;bt++){const Rt=mt.removed[bt],yt=R.indexOf(Rt);yt>=0&&(R[yt]=null,U[yt].disconnect(Rt))}for(let bt=0;bt<mt.added.length;bt++){const Rt=mt.added[bt];let yt=R.indexOf(Rt);if(yt===-1){for(let ge=0;ge<U.length;ge++)if(ge>=R.length){R.push(Rt),yt=ge;break}else if(R[ge]===null){R[ge]=Rt,yt=ge;break}if(yt===-1)break}const Xt=U[yt];Xt&&Xt.connect(Rt)}}const lt=new V,ft=new V;function ot(mt,bt,Rt){lt.setFromMatrixPosition(bt.matrixWorld),ft.setFromMatrixPosition(Rt.matrixWorld);const yt=lt.distanceTo(ft),Xt=bt.projectionMatrix.elements,ge=Rt.projectionMatrix.elements,nt=Xt[14]/(Xt[10]-1),Be=Xt[14]/(Xt[10]+1),Se=(Xt[9]+1)/Xt[5],ne=(Xt[9]-1)/Xt[5],F=(Xt[8]-1)/Xt[0],Xe=(ge[8]+1)/ge[0],ae=nt*F,re=nt*Xe,Ft=yt/(-F+Xe),Oe=Ft*-F;if(bt.matrixWorld.decompose(mt.position,mt.quaternion,mt.scale),mt.translateX(Oe),mt.translateZ(Ft),mt.matrixWorld.compose(mt.position,mt.quaternion,mt.scale),mt.matrixWorldInverse.copy(mt.matrixWorld).invert(),Xt[10]===-1)mt.projectionMatrix.copy(bt.projectionMatrix),mt.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{const Ht=nt+Ft,L=Be+Ft,M=ae-Oe,$=re+(yt-Oe),pt=Se*Be/L*Ht,K=ne*Be/L*Ht;mt.projectionMatrix.makePerspective(M,$,pt,K,Ht,L),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert()}}function St(mt,bt){bt===null?mt.matrixWorld.copy(mt.matrix):mt.matrixWorld.multiplyMatrices(bt.matrixWorld,mt.matrix),mt.matrixWorldInverse.copy(mt.matrixWorld).invert()}this.updateCamera=function(mt){if(r===null)return;let bt=mt.near,Rt=mt.far;T.texture!==null&&(T.depthNear>0&&(bt=T.depthNear),T.depthFar>0&&(Rt=T.depthFar)),A.near=q.near=u.near=bt,A.far=q.far=u.far=Rt,(k!==A.near||st!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,st=A.far),u.layers.mask=mt.layers.mask|2,q.layers.mask=mt.layers.mask|4,A.layers.mask=u.layers.mask|q.layers.mask;const yt=mt.parent,Xt=A.cameras;St(A,yt);for(let ge=0;ge<Xt.length;ge++)St(Xt[ge],yt);Xt.length===2?ot(A,u,q):A.projectionMatrix.copy(u.projectionMatrix),Et(mt,A,yt)};function Et(mt,bt,Rt){Rt===null?mt.matrix.copy(bt.matrixWorld):(mt.matrix.copy(Rt.matrixWorld),mt.matrix.invert(),mt.matrix.multiply(bt.matrixWorld)),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.updateMatrixWorld(!0),mt.projectionMatrix.copy(bt.projectionMatrix),mt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),mt.isPerspectiveCamera&&(mt.fov=ua*2*Math.atan(1/mt.projectionMatrix.elements[5]),mt.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&w===null))return d},this.setFoveation=function(mt){d=mt,_!==null&&(_.fixedFoveation=mt),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=mt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let Ot=null;function Kt(mt,bt){if(g=bt.getViewerPose(f||l),E=bt,g!==null){const Rt=g.views;w!==null&&(t.setRenderTargetFramebuffer(O,w.framebuffer),t.setRenderTarget(O));let yt=!1;Rt.length!==A.cameras.length&&(A.cameras.length=0,yt=!0);for(let nt=0;nt<Rt.length;nt++){const Be=Rt[nt];let Se=null;if(w!==null)Se=w.getViewport(Be);else{const F=v.getViewSubImage(_,Be);Se=F.viewport,nt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let ne=P[nt];ne===void 0&&(ne=new Rn,ne.layers.enable(nt),ne.viewport=new He,P[nt]=ne),ne.matrix.fromArray(Be.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Be.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Se.x,Se.y,Se.width,Se.height),nt===0&&(A.matrix.copy(ne.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),yt===!0&&A.cameras.push(ne)}const Xt=r.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){const nt=v.getDepthInformation(Rt[0]);nt&&nt.isValid&&nt.texture&&T.init(t,nt,r.renderState)}}for(let Rt=0;Rt<U.length;Rt++){const yt=R[Rt],Xt=U[Rt];yt!==null&&Xt!==void 0&&Xt.update(yt,bt,f||l)}Ot&&Ot(mt,bt),bt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:bt}),E=null}const le=new Od;le.setAnimationLoop(Kt),this.setAnimationLoop=function(mt){Ot=mt},this.dispose=function(){}}}const vr=new hi,Ax=new qe;function Px(n,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function i(y,m){m.color.getRGB(y.fogColor.value,Ad(n)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function r(y,m,O,U,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(y,m):m.isMeshToonMaterial?(o(y,m),v(y,m)):m.isMeshPhongMaterial?(o(y,m),g(y,m)):m.isMeshStandardMaterial?(o(y,m),_(y,m),m.isMeshPhysicalMaterial&&w(y,m,R)):m.isMeshMatcapMaterial?(o(y,m),E(y,m)):m.isMeshDepthMaterial?o(y,m):m.isMeshDistanceMaterial?(o(y,m),T(y,m)):m.isMeshNormalMaterial?o(y,m):m.isLineBasicMaterial?(l(y,m),m.isLineDashedMaterial&&c(y,m)):m.isPointsMaterial?d(y,m,O,U):m.isSpriteMaterial?f(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Ln&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Ln&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const O=t.get(m),U=O.envMap,R=O.envMapRotation;U&&(y.envMap.value=U,vr.copy(R),vr.x*=-1,vr.y*=-1,vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),y.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(vr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function l(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function c(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function d(y,m,O,U){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*O,y.scale.value=U*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function g(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function v(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function _(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function w(y,m,O){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,m){m.matcap&&(y.matcap.value=m.matcap)}function T(y,m){const O=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rx(n,t,e,i){let r={},o={},l=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(O,U){const R=U.program;i.uniformBlockBinding(O,R)}function f(O,U){let R=r[O.id];R===void 0&&(E(O),R=g(O),r[O.id]=R,O.addEventListener("dispose",y));const W=U.program;i.updateUBOMapping(O,W);const z=t.render.frame;o[O.id]!==z&&(_(O),o[O.id]=z)}function g(O){const U=v();O.__bindingPointIndex=U;const R=n.createBuffer(),W=O.__size,z=O.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,W,z),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,U,R),R}function v(){for(let O=0;O<c;O++)if(l.indexOf(O)===-1)return l.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const U=r[O.id],R=O.uniforms,W=O.__cache;n.bindBuffer(n.UNIFORM_BUFFER,U);for(let z=0,u=R.length;z<u;z++){const q=Array.isArray(R[z])?R[z]:[R[z]];for(let P=0,A=q.length;P<A;P++){const k=q[P];if(w(k,z,P,W)===!0){const st=k.__offset,Y=Array.isArray(k.value)?k.value:[k.value];let dt=0;for(let ut=0;ut<Y.length;ut++){const lt=Y[ut],ft=T(lt);typeof lt=="number"||typeof lt=="boolean"?(k.__data[0]=lt,n.bufferSubData(n.UNIFORM_BUFFER,st+dt,k.__data)):lt.isMatrix3?(k.__data[0]=lt.elements[0],k.__data[1]=lt.elements[1],k.__data[2]=lt.elements[2],k.__data[3]=0,k.__data[4]=lt.elements[3],k.__data[5]=lt.elements[4],k.__data[6]=lt.elements[5],k.__data[7]=0,k.__data[8]=lt.elements[6],k.__data[9]=lt.elements[7],k.__data[10]=lt.elements[8],k.__data[11]=0):(lt.toArray(k.__data,dt),dt+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,st,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function w(O,U,R,W){const z=O.value,u=U+"_"+R;if(W[u]===void 0)return typeof z=="number"||typeof z=="boolean"?W[u]=z:W[u]=z.clone(),!0;{const q=W[u];if(typeof z=="number"||typeof z=="boolean"){if(q!==z)return W[u]=z,!0}else if(q.equals(z)===!1)return q.copy(z),!0}return!1}function E(O){const U=O.uniforms;let R=0;const W=16;for(let u=0,q=U.length;u<q;u++){const P=Array.isArray(U[u])?U[u]:[U[u]];for(let A=0,k=P.length;A<k;A++){const st=P[A],Y=Array.isArray(st.value)?st.value:[st.value];for(let dt=0,ut=Y.length;dt<ut;dt++){const lt=Y[dt],ft=T(lt),ot=R%W,St=ot%ft.boundary,Et=ot+St;R+=St,Et!==0&&W-Et<ft.storage&&(R+=W-Et),st.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=ft.storage}}}const z=R%W;return z>0&&(R+=W-z),O.__size=R,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const R=l.indexOf(U.__bindingPointIndex);l.splice(R,1),n.deleteBuffer(r[U.id]),delete r[U.id],delete o[U.id]}function m(){for(const O in r)n.deleteBuffer(r[O]);l=[],r={},o={}}return{bind:d,update:f,dispose:m}}class Dx{constructor(t={}){const{canvas:e=am(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=l;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,m=null;const O=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let W=!1;this._outputColorSpace=jn;let z=0,u=0,q=null,P=-1,A=null;const k=new He,st=new He;let Y=null;const dt=new we(0);let ut=0,lt=e.width,ft=e.height,ot=1,St=null,Et=null;const Ot=new He(0,0,lt,ft),Kt=new He(0,0,lt,ft);let le=!1;const mt=new kc;let bt=!1,Rt=!1;const yt=new qe,Xt=new qe,ge=new V,nt=new He,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function ne(){return q===null?ot:1}let F=i;function Xe(C,j){return e.getContext(C,j)}try{const C={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ac}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),F===null){const j="webgl2";if(F=Xe(j,C),F===null)throw Xe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,re,Ft,Oe,Ht,L,M,$,pt,K,at,zt,At,Zt,Jt,_t,Nt,Gt,Yt,Ut,Ee,se,Fe,G;function Pt(){ae=new z_(F),ae.init(),se=new Sx(F,ae),re=new U_(F,ae,t,se),Ft=new yx(F,ae),re.reverseDepthBuffer&&_&&Ft.buffers.depth.setReversed(!0),Oe=new W_(F),Ht=new lx,L=new wx(F,ae,Ft,Ht,re,se,Oe),M=new O_(R),$=new V_(R),pt=new Km(F),Fe=new L_(F,pt),K=new H_(F,pt,Oe,Fe),at=new X_(F,K,pt,Oe),Yt=new j_(F,re,L),_t=new N_(Ht),zt=new ax(R,M,$,ae,re,Fe,_t),At=new Px(R,Ht),Zt=new ux,Jt=new gx(ae),Gt=new D_(R,M,$,Ft,at,w,d),Nt=new xx(R,at,re),G=new Rx(F,Oe,re,Ft),Ut=new I_(F,ae,Oe),Ee=new G_(F,ae,Oe),Oe.programs=zt.programs,R.capabilities=re,R.extensions=ae,R.properties=Ht,R.renderLists=Zt,R.shadowMap=Nt,R.state=Ft,R.info=Oe}Pt();const rt=new Cx(R,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(C){C!==void 0&&(ot=C,this.setSize(lt,ft,!1))},this.getSize=function(C){return C.set(lt,ft)},this.setSize=function(C,j,Q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=C,ft=j,e.width=Math.floor(C*ot),e.height=Math.floor(j*ot),Q===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(lt*ot,ft*ot).floor()},this.setDrawingBufferSize=function(C,j,Q){lt=C,ft=j,ot=Q,e.width=Math.floor(C*Q),e.height=Math.floor(j*Q),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(Ot)},this.setViewport=function(C,j,Q,tt){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,j,Q,tt),Ft.viewport(k.copy(Ot).multiplyScalar(ot).round())},this.getScissor=function(C){return C.copy(Kt)},this.setScissor=function(C,j,Q,tt){C.isVector4?Kt.set(C.x,C.y,C.z,C.w):Kt.set(C,j,Q,tt),Ft.scissor(st.copy(Kt).multiplyScalar(ot).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){Ft.setScissorTest(le=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){Et=C},this.getClearColor=function(C){return C.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,Q=!0){let tt=0;if(C){let X=!1;if(q!==null){const xt=q.texture.format;X=xt===Uc||xt===Ic||xt===Lc}if(X){const xt=q.texture.type,Mt=xt===ui||xt===Tr||xt===js||xt===Xs||xt===Rc||xt===Dc,kt=Gt.getClearColor(),Bt=Gt.getClearAlpha(),ee=kt.r,Qt=kt.g,jt=kt.b;Mt?(E[0]=ee,E[1]=Qt,E[2]=jt,E[3]=Bt,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=ee,T[1]=Qt,T[2]=jt,T[3]=Bt,F.clearBufferiv(F.COLOR,0,T))}else tt|=F.COLOR_BUFFER_BIT}j&&(tt|=F.DEPTH_BUFFER_BIT),Q&&(tt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Gt.dispose(),Zt.dispose(),Jt.dispose(),Ht.dispose(),M.dispose(),$.dispose(),at.dispose(),Fe.dispose(),G.dispose(),zt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",mi),rt.removeEventListener("sessionend",gi),qn.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const C=Oe.autoReset,j=Nt.enabled,Q=Nt.autoUpdate,tt=Nt.needsUpdate,X=Nt.type;Pt(),Oe.autoReset=C,Nt.enabled=j,Nt.autoUpdate=Q,Nt.needsUpdate=tt,Nt.type=X}function Ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qt(C){const j=C.target;j.removeEventListener("dispose",qt),ve(j)}function ve(C){tn(C),Ht.remove(C)}function tn(C){const j=Ht.get(C).programs;j!==void 0&&(j.forEach(function(Q){zt.releaseProgram(Q)}),C.isShaderMaterial&&zt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,Q,tt,X,xt){j===null&&(j=Be);const Mt=X.isMesh&&X.matrixWorld.determinant()<0,kt=Pa(C,j,Q,tt,X);Ft.setMaterial(tt,Mt);let Bt=Q.index,ee=1;if(tt.wireframe===!0){if(Bt=K.getWireframeAttribute(Q),Bt===void 0)return;ee=2}const Qt=Q.drawRange,jt=Q.attributes.position;let Me=Qt.start*ee,Ce=(Qt.start+Qt.count)*ee;xt!==null&&(Me=Math.max(Me,xt.start*ee),Ce=Math.min(Ce,(xt.start+xt.count)*ee)),Bt!==null?(Me=Math.max(Me,0),Ce=Math.min(Ce,Bt.count)):jt!=null&&(Me=Math.max(Me,0),Ce=Math.min(Ce,jt.count));const Ke=Ce-Me;if(Ke<0||Ke===1/0)return;Fe.setup(X,tt,kt,Q,Bt);let _e,pe=Ut;if(Bt!==null&&(_e=pt.get(Bt),pe=Ee,pe.setIndex(_e)),X.isMesh)tt.wireframe===!0?(Ft.setLineWidth(tt.wireframeLinewidth*ne()),pe.setMode(F.LINES)):pe.setMode(F.TRIANGLES);else if(X.isLine){let Wt=tt.linewidth;Wt===void 0&&(Wt=1),Ft.setLineWidth(Wt*ne()),X.isLineSegments?pe.setMode(F.LINES):X.isLineLoop?pe.setMode(F.LINE_LOOP):pe.setMode(F.LINE_STRIP)}else X.isPoints?pe.setMode(F.POINTS):X.isSprite&&pe.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ia("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))pe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Wt=X._multiDrawStarts,sn=X._multiDrawCounts,De=X._multiDrawCount,xn=Bt?pt.get(Bt).bytesPerElement:1,vi=Ht.get(tt).currentProgram.getUniforms();for(let hn=0;hn<De;hn++)vi.setValue(F,"_gl_DrawID",hn),pe.render(Wt[hn]/xn,sn[hn])}else if(X.isInstancedMesh)pe.renderInstances(Me,Ke,X.count);else if(Q.isInstancedBufferGeometry){const Wt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,sn=Math.min(Q.instanceCount,Wt);pe.renderInstances(Me,Ke,sn)}else pe.render(Me,Ke)};function Ue(C,j,Q){C.transparent===!0&&C.side===Ai&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,Or(C,j,Q),C.side=rr,C.needsUpdate=!0,Or(C,j,Q),C.side=Ai):Or(C,j,Q)}this.compile=function(C,j,Q=null){Q===null&&(Q=C),m=Jt.get(Q),m.init(j),U.push(m),Q.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),C!==Q&&C.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const tt=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let Mt=0;Mt<xt.length;Mt++){const kt=xt[Mt];Ue(kt,Q,X),tt.add(kt)}else Ue(xt,Q,X),tt.add(xt)}),m=U.pop(),tt},this.compileAsync=function(C,j,Q=null){const tt=this.compile(C,j,Q);return new Promise(X=>{function xt(){if(tt.forEach(function(Mt){Ht.get(Mt).currentProgram.isReady()&&tt.delete(Mt)}),tt.size===0){X(C);return}setTimeout(xt,10)}ae.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Mn=null;function Vn(C){Mn&&Mn(C)}function mi(){qn.stop()}function gi(){qn.start()}const qn=new Od;qn.setAnimationLoop(Vn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){Mn=C,rt.setAnimationLoop(C),C===null?qn.stop():qn.start()},rt.addEventListener("sessionstart",mi),rt.addEventListener("sessionend",gi),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(j),j=rt.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,q),m=Jt.get(C,U.length),m.init(j),U.push(m),Xt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),mt.setFromProjectionMatrix(Xt),Rt=this.localClippingEnabled,bt=_t.init(this.clippingPlanes,Rt),y=Zt.get(C,O.length),y.init(),O.push(y),rt.enabled===!0&&rt.isPresenting===!0){const xt=R.xr.getDepthSensingMesh();xt!==null&&Fi(xt,j,-1/0,R.sortObjects)}Fi(C,j,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(St,Et),Se=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Se&&Gt.addToRenderList(y,C),this.info.render.frame++,bt===!0&&_t.beginShadows();const Q=m.state.shadowsArray;Nt.render(Q,C,j),bt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=y.opaque,X=y.transmissive;if(m.setupLights(),j.isArrayCamera){const xt=j.cameras;if(X.length>0)for(let Mt=0,kt=xt.length;Mt<kt;Mt++){const Bt=xt[Mt];go(tt,X,C,Bt)}Se&&Gt.render(C);for(let Mt=0,kt=xt.length;Mt<kt;Mt++){const Bt=xt[Mt];mo(y,C,Bt,Bt.viewport)}}else X.length>0&&go(tt,X,C,j),Se&&Gt.render(C),mo(y,C,j);q!==null&&u===0&&(L.updateMultisampleRenderTarget(q),L.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(R,C,j),Fe.resetDefaultState(),P=-1,A=null,U.pop(),U.length>0?(m=U[U.length-1],bt===!0&&_t.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Fi(C,j,Q,tt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||mt.intersectsSprite(C)){tt&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Xt);const Mt=at.update(C),kt=C.material;kt.visible&&y.push(C,Mt,kt,Q,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||mt.intersectsObject(C))){const Mt=at.update(C),kt=C.material;if(tt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),nt.copy(Mt.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(Xt)),Array.isArray(kt)){const Bt=Mt.groups;for(let ee=0,Qt=Bt.length;ee<Qt;ee++){const jt=Bt[ee],Me=kt[jt.materialIndex];Me&&Me.visible&&y.push(C,Mt,Me,Q,nt.z,jt)}}else kt.visible&&y.push(C,Mt,kt,Q,nt.z,null)}}const xt=C.children;for(let Mt=0,kt=xt.length;Mt<kt;Mt++)Fi(xt[Mt],j,Q,tt)}function mo(C,j,Q,tt){const X=C.opaque,xt=C.transmissive,Mt=C.transparent;m.setupLightsView(Q),bt===!0&&_t.setGlobalState(R.clippingPlanes,Q),tt&&Ft.viewport(k.copy(tt)),X.length>0&&Nr(X,j,Q),xt.length>0&&Nr(xt,j,Q),Mt.length>0&&Nr(Mt,j,Q),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function go(C,j,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[tt.id]===void 0&&(m.state.transmissionRenderTarget[tt.id]=new Cr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?eo:ui,minFilter:Er,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const xt=m.state.transmissionRenderTarget[tt.id],Mt=tt.viewport||k;xt.setSize(Mt.z*R.transmissionResolutionScale,Mt.w*R.transmissionResolutionScale);const kt=R.getRenderTarget();R.setRenderTarget(xt),R.getClearColor(dt),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),Se&&Gt.render(Q);const Bt=R.toneMapping;R.toneMapping=nr;const ee=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),m.setupLightsView(tt),bt===!0&&_t.setGlobalState(R.clippingPlanes,tt),Nr(C,Q,tt),L.updateMultisampleRenderTarget(xt),L.updateRenderTargetMipmap(xt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let jt=0,Me=j.length;jt<Me;jt++){const Ce=j[jt],Ke=Ce.object,_e=Ce.geometry,pe=Ce.material,Wt=Ce.group;if(pe.side===Ai&&Ke.layers.test(tt.layers)){const sn=pe.side;pe.side=Ln,pe.needsUpdate=!0,ws(Ke,Q,tt,_e,pe,Wt),pe.side=sn,pe.needsUpdate=!0,Qt=!0}}Qt===!0&&(L.updateMultisampleRenderTarget(xt),L.updateRenderTargetMipmap(xt))}R.setRenderTarget(kt),R.setClearColor(dt,ut),ee!==void 0&&(tt.viewport=ee),R.toneMapping=Bt}function Nr(C,j,Q){const tt=j.isScene===!0?j.overrideMaterial:null;for(let X=0,xt=C.length;X<xt;X++){const Mt=C[X],kt=Mt.object,Bt=Mt.geometry,ee=Mt.group;let Qt=Mt.material;Qt.allowOverride===!0&&tt!==null&&(Qt=tt),kt.layers.test(Q.layers)&&ws(kt,j,Q,Bt,Qt,ee)}}function ws(C,j,Q,tt,X,xt){C.onBeforeRender(R,j,Q,tt,X,xt),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(R,j,Q,tt,C,xt),X.transparent===!0&&X.side===Ai&&X.forceSinglePass===!1?(X.side=Ln,X.needsUpdate=!0,R.renderBufferDirect(Q,j,tt,X,C,xt),X.side=rr,X.needsUpdate=!0,R.renderBufferDirect(Q,j,tt,X,C,xt),X.side=Ai):R.renderBufferDirect(Q,j,tt,X,C,xt),C.onAfterRender(R,j,Q,tt,X,xt)}function Or(C,j,Q){j.isScene!==!0&&(j=Be);const tt=Ht.get(C),X=m.state.lights,xt=m.state.shadowsArray,Mt=X.state.version,kt=zt.getParameters(C,X.state,xt,j,Q),Bt=zt.getProgramCacheKey(kt);let ee=tt.programs;tt.environment=C.isMeshStandardMaterial?j.environment:null,tt.fog=j.fog,tt.envMap=(C.isMeshStandardMaterial?$:M).get(C.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",qt),ee=new Map,tt.programs=ee);let Qt=ee.get(Bt);if(Qt!==void 0){if(tt.currentProgram===Qt&&tt.lightsStateVersion===Mt)return Ss(C,kt),Qt}else kt.uniforms=zt.getUniforms(C),C.onBeforeCompile(kt,R),Qt=zt.acquireProgram(kt,Bt),ee.set(Bt,Qt),tt.uniforms=kt.uniforms;const jt=tt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(jt.clippingPlanes=_t.uniform),Ss(C,kt),tt.needsLights=_o(C),tt.lightsStateVersion=Mt,tt.needsLights&&(jt.ambientLightColor.value=X.state.ambient,jt.lightProbe.value=X.state.probe,jt.directionalLights.value=X.state.directional,jt.directionalLightShadows.value=X.state.directionalShadow,jt.spotLights.value=X.state.spot,jt.spotLightShadows.value=X.state.spotShadow,jt.rectAreaLights.value=X.state.rectArea,jt.ltc_1.value=X.state.rectAreaLTC1,jt.ltc_2.value=X.state.rectAreaLTC2,jt.pointLights.value=X.state.point,jt.pointLightShadows.value=X.state.pointShadow,jt.hemisphereLights.value=X.state.hemi,jt.directionalShadowMap.value=X.state.directionalShadowMap,jt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,jt.spotShadowMap.value=X.state.spotShadowMap,jt.spotLightMatrix.value=X.state.spotLightMatrix,jt.spotLightMap.value=X.state.spotLightMap,jt.pointShadowMap.value=X.state.pointShadowMap,jt.pointShadowMatrix.value=X.state.pointShadowMatrix),tt.currentProgram=Qt,tt.uniformsList=null,Qt}function vo(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=ra.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Ss(C,j){const Q=Ht.get(C);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function Pa(C,j,Q,tt,X){j.isScene!==!0&&(j=Be),L.resetTextureUnits();const xt=j.fog,Mt=tt.isMeshStandardMaterial?j.environment:null,kt=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ds,Bt=(tt.isMeshStandardMaterial?$:M).get(tt.envMap||Mt),ee=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),jt=!!Q.morphAttributes.position,Me=!!Q.morphAttributes.normal,Ce=!!Q.morphAttributes.color;let Ke=nr;tt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ke=R.toneMapping);const _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,pe=_e!==void 0?_e.length:0,Wt=Ht.get(tt),sn=m.state.lights;if(bt===!0&&(Rt===!0||C!==A)){const dn=C===A&&tt.id===P;_t.setState(tt,C,dn)}let De=!1;tt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==sn.state.version||Wt.outputColorSpace!==kt||X.isBatchedMesh&&Wt.batching===!1||!X.isBatchedMesh&&Wt.batching===!0||X.isBatchedMesh&&Wt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Wt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Wt.instancing===!1||!X.isInstancedMesh&&Wt.instancing===!0||X.isSkinnedMesh&&Wt.skinning===!1||!X.isSkinnedMesh&&Wt.skinning===!0||X.isInstancedMesh&&Wt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Wt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Wt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Wt.instancingMorph===!1&&X.morphTexture!==null||Wt.envMap!==Bt||tt.fog===!0&&Wt.fog!==xt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==_t.numPlanes||Wt.numIntersection!==_t.numIntersection)||Wt.vertexAlphas!==ee||Wt.vertexTangents!==Qt||Wt.morphTargets!==jt||Wt.morphNormals!==Me||Wt.morphColors!==Ce||Wt.toneMapping!==Ke||Wt.morphTargetsCount!==pe)&&(De=!0):(De=!0,Wt.__version=tt.version);let xn=Wt.currentProgram;De===!0&&(xn=Or(tt,j,X));let vi=!1,hn=!1,Bi=!1;const Ge=xn.getUniforms(),Tn=Wt.uniforms;if(Ft.useProgram(xn.program)&&(vi=!0,hn=!0,Bi=!0),tt.id!==P&&(P=tt.id,hn=!0),vi||A!==C){Ft.buffers.depth.getReversed()?(yt.copy(C.projectionMatrix),cm(yt),um(yt),Ge.setValue(F,"projectionMatrix",yt)):Ge.setValue(F,"projectionMatrix",C.projectionMatrix),Ge.setValue(F,"viewMatrix",C.matrixWorldInverse);const en=Ge.map.cameraPosition;en!==void 0&&en.setValue(F,ge.setFromMatrixPosition(C.matrixWorld)),re.logarithmicDepthBuffer&&Ge.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ge.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,hn=!0,Bi=!0)}if(X.isSkinnedMesh){Ge.setOptional(F,X,"bindMatrix"),Ge.setOptional(F,X,"bindMatrixInverse");const dn=X.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ge.setValue(F,"boneTexture",dn.boneTexture,L))}X.isBatchedMesh&&(Ge.setOptional(F,X,"batchingTexture"),Ge.setValue(F,"batchingTexture",X._matricesTexture,L),Ge.setOptional(F,X,"batchingIdTexture"),Ge.setValue(F,"batchingIdTexture",X._indirectTexture,L),Ge.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Ge.setValue(F,"batchingColorTexture",X._colorsTexture,L));const Ye=Q.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&Yt.update(X,Q,xn),(hn||Wt.receiveShadow!==X.receiveShadow)&&(Wt.receiveShadow=X.receiveShadow,Ge.setValue(F,"receiveShadow",X.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Tn.envMap.value=Bt,Tn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&j.environment!==null&&(Tn.envMapIntensity.value=j.environmentIntensity),hn&&(Ge.setValue(F,"toneMappingExposure",R.toneMappingExposure),Wt.needsLights&&ki(Tn,Bi),xt&&tt.fog===!0&&At.refreshFogUniforms(Tn,xt),At.refreshMaterialUniforms(Tn,tt,ot,ft,m.state.transmissionRenderTarget[C.id]),ra.upload(F,vo(Wt),Tn,L)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ra.upload(F,vo(Wt),Tn,L),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ge.setValue(F,"center",X.center),Ge.setValue(F,"modelViewMatrix",X.modelViewMatrix),Ge.setValue(F,"normalMatrix",X.normalMatrix),Ge.setValue(F,"modelMatrix",X.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const dn=tt.uniformsGroups;for(let en=0,Ts=dn.length;en<Ts;en++){const _i=dn[en];G.update(_i,xn),G.bind(_i,xn)}}return xn}function ki(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function _o(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,j,Q){const tt=Ht.get(C);tt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Ht.get(C.texture).__webglTexture=j,Ht.get(C.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:Q,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const Q=Ht.get(C);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0};const Es=F.createFramebuffer();this.setRenderTarget=function(C,j=0,Q=0){q=C,z=j,u=Q;let tt=!0,X=null,xt=!1,Mt=!1;if(C){const Bt=Ht.get(C);if(Bt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(F.FRAMEBUFFER,null),tt=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Bt.__hasExternalTextures)L.rebindTextures(C,Ht.get(C.texture).__webglTexture,Ht.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const jt=C.depthTexture;if(Bt.__boundDepthTexture!==jt){if(jt!==null&&Ht.has(jt)&&(C.width!==jt.image.width||C.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Mt=!0);const Qt=Ht.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[j])?X=Qt[j][Q]:X=Qt[j],xt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?X=Ht.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?X=Qt[Q]:X=Qt,k.copy(C.viewport),st.copy(C.scissor),Y=C.scissorTest}else k.copy(Ot).multiplyScalar(ot).floor(),st.copy(Kt).multiplyScalar(ot).floor(),Y=le;if(Q!==0&&(X=Es),Ft.bindFramebuffer(F.FRAMEBUFFER,X)&&tt&&Ft.drawBuffers(C,X),Ft.viewport(k),Ft.scissor(st),Ft.setScissorTest(Y),xt){const Bt=Ht.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,Q)}else if(Mt){const Bt=Ht.get(C.texture),ee=j;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,Q,ee)}else if(C!==null&&Q!==0){const Bt=Ht.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,Q)}P=-1},this.readRenderTargetPixels=function(C,j,Q,tt,X,xt,Mt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Mt!==void 0&&(kt=kt[Mt]),kt){Ft.bindFramebuffer(F.FRAMEBUFFER,kt);try{const Bt=C.texture,ee=Bt.format,Qt=Bt.type;if(!re.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-tt&&Q>=0&&Q<=C.height-X&&F.readPixels(j,Q,tt,X,se.convert(ee),se.convert(Qt),xt)}finally{const Bt=q!==null?Ht.get(q).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(C,j,Q,tt,X,xt,Mt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Mt!==void 0&&(kt=kt[Mt]),kt)if(j>=0&&j<=C.width-tt&&Q>=0&&Q<=C.height-X){Ft.bindFramebuffer(F.FRAMEBUFFER,kt);const Bt=C.texture,ee=Bt.format,Qt=Bt.type;if(!re.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.bufferData(F.PIXEL_PACK_BUFFER,xt.byteLength,F.STREAM_READ),F.readPixels(j,Q,tt,X,se.convert(ee),se.convert(Qt),0);const Me=q!==null?Ht.get(q).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,Me);const Ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lm(F,Ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xt),F.deleteBuffer(jt),F.deleteSync(Ce),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,Q=0){const tt=Math.pow(2,-Q),X=Math.floor(C.image.width*tt),xt=Math.floor(C.image.height*tt),Mt=j!==null?j.x:0,kt=j!==null?j.y:0;L.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Mt,kt,X,xt),Ft.unbindTexture()};const Ms=F.createFramebuffer(),Fr=F.createFramebuffer();this.copyTextureToTexture=function(C,j,Q=null,tt=null,X=0,xt=null){xt===null&&(X!==0?(ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=X,X=0):xt=0);let Mt,kt,Bt,ee,Qt,jt,Me,Ce,Ke;const _e=C.isCompressedTexture?C.mipmaps[xt]:C.image;if(Q!==null)Mt=Q.max.x-Q.min.x,kt=Q.max.y-Q.min.y,Bt=Q.isBox3?Q.max.z-Q.min.z:1,ee=Q.min.x,Qt=Q.min.y,jt=Q.isBox3?Q.min.z:0;else{const Ye=Math.pow(2,-X);Mt=Math.floor(_e.width*Ye),kt=Math.floor(_e.height*Ye),C.isDataArrayTexture?Bt=_e.depth:C.isData3DTexture?Bt=Math.floor(_e.depth*Ye):Bt=1,ee=0,Qt=0,jt=0}tt!==null?(Me=tt.x,Ce=tt.y,Ke=tt.z):(Me=0,Ce=0,Ke=0);const pe=se.convert(j.format),Wt=se.convert(j.type);let sn;j.isData3DTexture?(L.setTexture3D(j,0),sn=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),sn=F.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),sn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const De=F.getParameter(F.UNPACK_ROW_LENGTH),xn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=F.getParameter(F.UNPACK_SKIP_PIXELS),hn=F.getParameter(F.UNPACK_SKIP_ROWS),Bi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,_e.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ee),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jt);const Ge=C.isDataArrayTexture||C.isData3DTexture,Tn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Ye=Ht.get(C),dn=Ht.get(j),en=Ht.get(Ye.__renderTarget),Ts=Ht.get(dn.__renderTarget);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,en.__webglFramebuffer),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let _i=0;_i<Bt;_i++)Ge&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(C).__webglTexture,X,jt+_i),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(j).__webglTexture,xt,Ke+_i)),F.blitFramebuffer(ee,Qt,Mt,kt,Me,Ce,Mt,kt,F.DEPTH_BUFFER_BIT,F.NEAREST);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||Ht.has(C)){const Ye=Ht.get(C),dn=Ht.get(j);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,Ms),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fr);for(let en=0;en<Bt;en++)Ge?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,X,jt+en):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,X),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,xt,Ke+en):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,xt),X!==0?F.blitFramebuffer(ee,Qt,Mt,kt,Me,Ce,Mt,kt,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(sn,xt,Me,Ce,Ke+en,ee,Qt,Mt,kt):F.copyTexSubImage2D(sn,xt,Me,Ce,ee,Qt,Mt,kt);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(sn,xt,Me,Ce,Ke,Mt,kt,Bt,pe,Wt,_e.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(sn,xt,Me,Ce,Ke,Mt,kt,Bt,pe,_e.data):F.texSubImage3D(sn,xt,Me,Ce,Ke,Mt,kt,Bt,pe,Wt,_e):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xt,Me,Ce,Mt,kt,pe,Wt,_e.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xt,Me,Ce,_e.width,_e.height,pe,_e.data):F.texSubImage2D(F.TEXTURE_2D,xt,Me,Ce,Mt,kt,pe,Wt,_e);F.pixelStorei(F.UNPACK_ROW_LENGTH,De),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),F.pixelStorei(F.UNPACK_SKIP_ROWS,hn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bi),xt===0&&j.generateMipmaps&&F.generateMipmap(sn),Ft.unbindTexture()},this.copyTextureToTexture3D=function(C,j,Q=null,tt=null,X=0){return ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,Q,tt,X)},this.initRenderTarget=function(C){Ht.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ft.unbindTexture()},this.resetState=function(){z=0,u=0,q=null,Ft.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}const Uh={type:"change"},Vc={type:"start"},zd={type:"end"},Yo=new wa,Nh=new Ji,Lx=Math.cos(70*om.DEG2RAD),an=new V,Pn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sl=1e-6;class Ix extends Ym{constructor(t,e=null){super(t,e),this.state=ze.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new sr,this._lastTargetPosition=new V,this._quat=new sr().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ah,this._sphericalDelta=new ah,this._scale=1,this._panOffset=new V,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new V,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nx.bind(this),this._onPointerDown=Ux.bind(this),this._onPointerUp=Ox.bind(this),this._onContextMenu=Gx.bind(this),this._onMouseWheel=Bx.bind(this),this._onKeyDown=Vx.bind(this),this._onTouchStart=zx.bind(this),this._onTouchMove=Hx.bind(this),this._onMouseDown=Fx.bind(this),this._onMouseMove=kx.bind(this),this._interceptControlDown=Wx.bind(this),this._interceptControlUp=jx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uh),this.update(),this.state=ze.NONE}update(t=null){const e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),r<-Math.PI?r+=Pn:r>Math.PI&&(r-=Pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=an.length();l=this._clampDistance(c*this._scale);const d=c-l;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;const f=new V(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),l=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<Lx?this.object.lookAt(this.target):(Nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(Nh,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sl||this._lastTargetPosition.distanceToSquared(this.target)>Sl?(this.dispatchEvent(Uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;an.copy(r).sub(this.target);let o=an.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,l=i.width,c=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ce,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ux(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Nx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ox(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=ze.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Fx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ze.DOLLY;break;case rs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ze.ROTATE}break;case rs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Vc)}function kx(n){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Bx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(n.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zd))}function Vx(n){this.enabled!==!1&&this._handleKeyDown(n)}function zx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ze.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ze.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Vc)}function Hx(n){switch(this._trackPointer(n),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ze.NONE}}function Gx(n){this.enabled!==!1&&n.preventDefault()}function Wx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Hd extends Rn{constructor(e,i,r,o,l){super(e,i,r,o);fe(this,"controls");this.controls=new Ix(this,l)}update(){this.controls.update()}}class Xx extends Hd{constructor(e,i,r,o,l){super(e,i,r,o,l);fe(this,"target");fe(this,"lastTargetPos")}setTarget(e,i){this.target=e,this.position.copy(e.position).add(i)}update(){if(super.update(),!!this.target){if(this.lastTargetPos){const e=this.target.position,i=this.lastTargetPos.sub(e);this.position.add(i)}this.lastTargetPos=this.target.position}}}class Gd{constructor(){fe(this,"children",[])}add(t){this.children.push(t)}update(t){for(const e of this.children)e.update(t)}}class zc extends Gd{constructor(e){super();fe(this,"triggers",[]);fe(this,"mesh");this.mesh=e}addDependency(e,i){this.triggers.push([e,i])}update(e){super.update(e);for(const[i,r]of this.triggers)i()&&r()}}function qx(n,t){n.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1);const e=new Ar().setFromObject(n),i=new Ar().setFromObject(t);return e.intersectsBox(i)}const wr=new V(0,1,0),Oh=.8,Bs=2,Yx=.3,$x=.75,$o=new Xm;class xc extends zc{constructor(e,i,r){const o=new gs(Oh,Bs,Yx);o.translate(0,Bs/2,-.3/2);super(new wn(o,i));fe(this,"toppling",!1);fe(this,"fallen",!1);fe(this,"fallenMat");fe(this,"fwdAxis");fe(this,"toppleAxis");fe(this,"collideNodes",[]);this.mesh.userData.domino=this,this.mesh.castShadow=!0,this.mesh.translateOnAxis(wr,-2/2),this.fallenMat=r,this.fwdAxis=e.clone().normalize();const l=new V(0,0,1),c=new sr().setFromUnitVectors(l,this.fwdAxis);this.mesh.quaternion.premultiply(c),this.toppleAxis=new V().crossVectors(wr,this.fwdAxis).normalize()}setPosition(e,i,r){this.mesh.position.set(e,i,r),this.mesh.translateOnAxis(wr,-2/2)}updateAxes(e){this.fwdAxis=e.clone().normalize(),this.mesh.rotateY(new V(0,0,1).angleTo(e)),this.toppleAxis=new V().crossVectors(wr,this.fwdAxis).normalize()}addCollidable(e){this.collideNodes.push(e)}rayOrigin(e){const i=this.mesh.position.clone(),r=this.toppleAxis.clone().normalize().multiplyScalar(Oh/2);return e===0?i.add(r):i.sub(r)}get rayDirection(){return new V(0,Bs,0).applyQuaternion(this.mesh.quaternion).normalize()}topple(){this.toppling=!0;let e=0;const i=new V().crossVectors(wr,this.fwdAxis).normalize(),r=50;let o=0;this.addDependency(()=>!this.fallen,()=>{this.update=l=>{if(this.fallen)return;const c=$x*l;$o.set(this.rayOrigin(0),this.rayDirection);const d=$o.intersectObjects(this.collideNodes.map(_=>_.mesh),!1);$o.set(this.rayOrigin(1),this.rayDirection);const f=$o.intersectObjects(this.collideNodes.map(_=>_.mesh),!1);if(e>=Math.PI/2||o>=r){this.fallen=!0,this.mesh.material=this.fallenMat;return}const g=d.find(_=>_.distance<=Bs+.01),v=f.find(_=>_.distance<=Bs+.01);if(g||v){g&&g.object instanceof wn&&g.object.userData.domino&&!g.object.userData.domino.toppling&&g.object.userData.domino.topple(),v&&v.object instanceof wn&&v.object.userData.domino&&!v.object.userData.domino.toppling&&v.object.userData.domino.topple(),o++;return}o=0,e+=c,this.mesh.rotateOnWorldAxis(i,c)}})}}const Fh=1,Kx=1.5;class Zx extends zc{constructor(e,i){super(new wn(new Sa(Fh),i));fe(this,"collided",!1);fe(this,"fwdAxis");fe(this,"collideNodes",[]);this.mesh.castShadow=!0,this.fwdAxis=e.clone().normalize()}addCollidable(e){this.collideNodes.push(e)}roll(){const e=new V().crossVectors(wr,this.fwdAxis).normalize();this.addDependency(()=>!this.collided,()=>{this.update=i=>{if(this.collided)return;for(const l of this.collideNodes)l instanceof xc&&qx(this.mesh,l.mesh)&&(console.info("sphere collided with domino"),this.collided=!0,l.topple());const r=Kx*i;this.mesh.rotateOnAxis(e,r);const o=this.fwdAxis.clone().multiplyScalar(r*Fh);this.mesh.position.add(o)}})}}function Jx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sa={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Qx=sa.exports,kh;function tb(){return kh||(kh=1,function(n){(function(t,e){n.exports=t.document?e(t,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return e(i)}})(typeof window<"u"?window:Qx,function(t,e){var i=[],r=Object.getPrototypeOf,o=i.slice,l=i.flat?function(s){return i.flat.call(s)}:function(s){return i.concat.apply([],s)},c=i.push,d=i.indexOf,f={},g=f.toString,v=f.hasOwnProperty,_=v.toString,w=_.call(Object),E={},T=function(a){return typeof a=="function"&&typeof a.nodeType!="number"&&typeof a.item!="function"},y=function(a){return a!=null&&a===a.window},m=t.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function U(s,a,h){h=h||m;var p,x,b=h.createElement("script");if(b.text=s,a)for(p in O)x=a[p]||a.getAttribute&&a.getAttribute(p),x&&b.setAttribute(p,x);h.head.appendChild(b).parentNode.removeChild(b)}function R(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?f[g.call(s)]||"object":typeof s}var W="3.7.1",z=/HTML$/i,u=function(s,a){return new u.fn.init(s,a)};u.fn=u.prototype={jquery:W,constructor:u,length:0,toArray:function(){return o.call(this)},get:function(s){return s==null?o.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var a=u.merge(this.constructor(),s);return a.prevObject=this,a},each:function(s){return u.each(this,s)},map:function(s){return this.pushStack(u.map(this,function(a,h){return s.call(a,h,a)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(s,a){return(a+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(s,a){return a%2}))},eq:function(s){var a=this.length,h=+s+(s<0?a:0);return this.pushStack(h>=0&&h<a?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:i.sort,splice:i.splice},u.extend=u.fn.extend=function(){var s,a,h,p,x,b,S=arguments[0]||{},N=1,I=arguments.length,H=!1;for(typeof S=="boolean"&&(H=S,S=arguments[N]||{},N++),typeof S!="object"&&!T(S)&&(S={}),N===I&&(S=this,N--);N<I;N++)if((s=arguments[N])!=null)for(a in s)p=s[a],!(a==="__proto__"||S===p)&&(H&&p&&(u.isPlainObject(p)||(x=Array.isArray(p)))?(h=S[a],x&&!Array.isArray(h)?b=[]:!x&&!u.isPlainObject(h)?b={}:b=h,x=!1,S[a]=u.extend(H,b,p)):p!==void 0&&(S[a]=p));return S},u.extend({expando:"jQuery"+(W+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var a,h;return!s||g.call(s)!=="[object Object]"?!1:(a=r(s),a?(h=v.call(a,"constructor")&&a.constructor,typeof h=="function"&&_.call(h)===w):!0)},isEmptyObject:function(s){var a;for(a in s)return!1;return!0},globalEval:function(s,a,h){U(s,{nonce:a&&a.nonce},h)},each:function(s,a){var h,p=0;if(q(s))for(h=s.length;p<h&&a.call(s[p],p,s[p])!==!1;p++);else for(p in s)if(a.call(s[p],p,s[p])===!1)break;return s},text:function(s){var a,h="",p=0,x=s.nodeType;if(!x)for(;a=s[p++];)h+=u.text(a);return x===1||x===11?s.textContent:x===9?s.documentElement.textContent:x===3||x===4?s.nodeValue:h},makeArray:function(s,a){var h=a||[];return s!=null&&(q(Object(s))?u.merge(h,typeof s=="string"?[s]:s):c.call(h,s)),h},inArray:function(s,a,h){return a==null?-1:d.call(a,s,h)},isXMLDoc:function(s){var a=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!z.test(a||h&&h.nodeName||"HTML")},merge:function(s,a){for(var h=+a.length,p=0,x=s.length;p<h;p++)s[x++]=a[p];return s.length=x,s},grep:function(s,a,h){for(var p,x=[],b=0,S=s.length,N=!h;b<S;b++)p=!a(s[b],b),p!==N&&x.push(s[b]);return x},map:function(s,a,h){var p,x,b=0,S=[];if(q(s))for(p=s.length;b<p;b++)x=a(s[b],b,h),x!=null&&S.push(x);else for(b in s)x=a(s[b],b,h),x!=null&&S.push(x);return l(S)},guid:1,support:E}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=i[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,a){f["[object "+a+"]"]=a.toLowerCase()});function q(s){var a=!!s&&"length"in s&&s.length,h=R(s);return T(s)||y(s)?!1:h==="array"||a===0||typeof a=="number"&&a>0&&a-1 in s}function P(s,a){return s.nodeName&&s.nodeName.toLowerCase()===a.toLowerCase()}var A=i.pop,k=i.sort,st=i.splice,Y="[\\x20\\t\\r\\n\\f]",dt=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");u.contains=function(s,a){var h=a&&a.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var ut=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function lt(s,a){return a?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}u.escapeSelector=function(s){return(s+"").replace(ut,lt)};var ft=m,ot=c;(function(){var s,a,h,p,x,b=ot,S,N,I,H,it,ht=u.expando,J=0,vt=0,ie=xo(),Ae=xo(),he=xo(),mn=xo(),on=function(D,B){return D===B&&(x=!0),0},ei="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ni="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Te="\\["+Y+"*("+ni+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ni+"))|)"+Y+"*\\]",ur=":("+ni+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Te+")*)|.*)\\)|)",Pe=new RegExp(Y+"+","g"),Je=new RegExp("^"+Y+"*,"+Y+"*"),Ps=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),Fa=new RegExp(Y+"|>"),ii=new RegExp(ur),Rs=new RegExp("^"+ni+"$"),ri={ID:new RegExp("^#("+ni+")"),CLASS:new RegExp("^\\.("+ni+")"),TAG:new RegExp("^("+ni+"|[*])"),ATTR:new RegExp("^"+Te),PSEUDO:new RegExp("^"+ur),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+ei+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},Vi=/^(?:input|select|textarea|button)$/i,zi=/^h\d$/i,zn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ka=/[+~]/,xi=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),bi=function(D,B){var Z="0x"+D.slice(1)-65536;return B||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},cf=function(){Hi()},uf=yo(function(D){return D.disabled===!0&&P(D,"fieldset")},{dir:"parentNode",next:"legend"});function hf(){try{return S.activeElement}catch{}}try{b.apply(i=o.call(ft.childNodes),ft.childNodes),i[ft.childNodes.length].nodeType}catch{b={apply:function(B,Z){ot.apply(B,o.call(Z))},call:function(B){ot.apply(B,o.call(arguments,1))}}}function ke(D,B,Z,et){var ct,wt,Lt,Vt,It,xe,te,oe=B&&B.ownerDocument,be=B?B.nodeType:9;if(Z=Z||[],typeof D!="string"||!D||be!==1&&be!==9&&be!==11)return Z;if(!et&&(Hi(B),B=B||S,I)){if(be!==11&&(It=zn.exec(D)))if(ct=It[1]){if(be===9)if(Lt=B.getElementById(ct)){if(Lt.id===ct)return b.call(Z,Lt),Z}else return Z;else if(oe&&(Lt=oe.getElementById(ct))&&ke.contains(B,Lt)&&Lt.id===ct)return b.call(Z,Lt),Z}else{if(It[2])return b.apply(Z,B.getElementsByTagName(D)),Z;if((ct=It[3])&&B.getElementsByClassName)return b.apply(Z,B.getElementsByClassName(ct)),Z}if(!mn[D+" "]&&(!H||!H.test(D))){if(te=D,oe=B,be===1&&(Fa.test(D)||Ps.test(D))){for(oe=ka.test(D)&&Ba(B.parentNode)||B,(oe!=B||!E.scope)&&((Vt=B.getAttribute("id"))?Vt=u.escapeSelector(Vt):B.setAttribute("id",Vt=ht)),xe=Ds(D),wt=xe.length;wt--;)xe[wt]=(Vt?"#"+Vt:":scope")+" "+bo(xe[wt]);te=xe.join(",")}try{return b.apply(Z,oe.querySelectorAll(te)),Z}catch{mn(D,!0)}finally{Vt===ht&&B.removeAttribute("id")}}}return Mu(D.replace(dt,"$1"),B,Z,et)}function xo(){var D=[];function B(Z,et){return D.push(Z+" ")>a.cacheLength&&delete B[D.shift()],B[Z+" "]=et}return B}function Yn(D){return D[ht]=!0,D}function kr(D){var B=S.createElement("fieldset");try{return!!D(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function df(D){return function(B){return P(B,"input")&&B.type===D}}function pf(D){return function(B){return(P(B,"input")||P(B,"button"))&&B.type===D}}function Su(D){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===D:B.disabled===D:B.isDisabled===D||B.isDisabled!==!D&&uf(B)===D:B.disabled===D:"label"in B?B.disabled===D:!1}}function hr(D){return Yn(function(B){return B=+B,Yn(function(Z,et){for(var ct,wt=D([],Z.length,B),Lt=wt.length;Lt--;)Z[ct=wt[Lt]]&&(Z[ct]=!(et[ct]=Z[ct]))})})}function Ba(D){return D&&typeof D.getElementsByTagName<"u"&&D}function Hi(D){var B,Z=D?D.ownerDocument||D:ft;return Z==S||Z.nodeType!==9||!Z.documentElement||(S=Z,N=S.documentElement,I=!u.isXMLDoc(S),it=N.matches||N.webkitMatchesSelector||N.msMatchesSelector,N.msMatchesSelector&&ft!=S&&(B=S.defaultView)&&B.top!==B&&B.addEventListener("unload",cf),E.getById=kr(function(et){return N.appendChild(et).id=u.expando,!S.getElementsByName||!S.getElementsByName(u.expando).length}),E.disconnectedMatch=kr(function(et){return it.call(et,"*")}),E.scope=kr(function(){return S.querySelectorAll(":scope")}),E.cssHas=kr(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(a.filter.ID=function(et){var ct=et.replace(xi,bi);return function(wt){return wt.getAttribute("id")===ct}},a.find.ID=function(et,ct){if(typeof ct.getElementById<"u"&&I){var wt=ct.getElementById(et);return wt?[wt]:[]}}):(a.filter.ID=function(et){var ct=et.replace(xi,bi);return function(wt){var Lt=typeof wt.getAttributeNode<"u"&&wt.getAttributeNode("id");return Lt&&Lt.value===ct}},a.find.ID=function(et,ct){if(typeof ct.getElementById<"u"&&I){var wt,Lt,Vt,It=ct.getElementById(et);if(It){if(wt=It.getAttributeNode("id"),wt&&wt.value===et)return[It];for(Vt=ct.getElementsByName(et),Lt=0;It=Vt[Lt++];)if(wt=It.getAttributeNode("id"),wt&&wt.value===et)return[It]}return[]}}),a.find.TAG=function(et,ct){return typeof ct.getElementsByTagName<"u"?ct.getElementsByTagName(et):ct.querySelectorAll(et)},a.find.CLASS=function(et,ct){if(typeof ct.getElementsByClassName<"u"&&I)return ct.getElementsByClassName(et)},H=[],kr(function(et){var ct;N.appendChild(et).innerHTML="<a id='"+ht+"' href='' disabled='disabled'></a><select id='"+ht+"-\r\\' disabled='disabled'><option selected=''></option></select>",et.querySelectorAll("[selected]").length||H.push("\\["+Y+"*(?:value|"+ei+")"),et.querySelectorAll("[id~="+ht+"-]").length||H.push("~="),et.querySelectorAll("a#"+ht+"+*").length||H.push(".#.+[+~]"),et.querySelectorAll(":checked").length||H.push(":checked"),ct=S.createElement("input"),ct.setAttribute("type","hidden"),et.appendChild(ct).setAttribute("name","D"),N.appendChild(et).disabled=!0,et.querySelectorAll(":disabled").length!==2&&H.push(":enabled",":disabled"),ct=S.createElement("input"),ct.setAttribute("name",""),et.appendChild(ct),et.querySelectorAll("[name='']").length||H.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),E.cssHas||H.push(":has"),H=H.length&&new RegExp(H.join("|")),on=function(et,ct){if(et===ct)return x=!0,0;var wt=!et.compareDocumentPosition-!ct.compareDocumentPosition;return wt||(wt=(et.ownerDocument||et)==(ct.ownerDocument||ct)?et.compareDocumentPosition(ct):1,wt&1||!E.sortDetached&&ct.compareDocumentPosition(et)===wt?et===S||et.ownerDocument==ft&&ke.contains(ft,et)?-1:ct===S||ct.ownerDocument==ft&&ke.contains(ft,ct)?1:p?d.call(p,et)-d.call(p,ct):0:wt&4?-1:1)}),S}ke.matches=function(D,B){return ke(D,null,null,B)},ke.matchesSelector=function(D,B){if(Hi(D),I&&!mn[B+" "]&&(!H||!H.test(B)))try{var Z=it.call(D,B);if(Z||E.disconnectedMatch||D.document&&D.document.nodeType!==11)return Z}catch{mn(B,!0)}return ke(B,S,null,[D]).length>0},ke.contains=function(D,B){return(D.ownerDocument||D)!=S&&Hi(D),u.contains(D,B)},ke.attr=function(D,B){(D.ownerDocument||D)!=S&&Hi(D);var Z=a.attrHandle[B.toLowerCase()],et=Z&&v.call(a.attrHandle,B.toLowerCase())?Z(D,B,!I):void 0;return et!==void 0?et:D.getAttribute(B)},ke.error=function(D){throw new Error("Syntax error, unrecognized expression: "+D)},u.uniqueSort=function(D){var B,Z=[],et=0,ct=0;if(x=!E.sortStable,p=!E.sortStable&&o.call(D,0),k.call(D,on),x){for(;B=D[ct++];)B===D[ct]&&(et=Z.push(ct));for(;et--;)st.call(D,Z[et],1)}return p=null,D},u.fn.uniqueSort=function(){return this.pushStack(u.uniqueSort(o.apply(this)))},a=u.expr={cacheLength:50,createPseudo:Yn,match:ri,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(D){return D[1]=D[1].replace(xi,bi),D[3]=(D[3]||D[4]||D[5]||"").replace(xi,bi),D[2]==="~="&&(D[3]=" "+D[3]+" "),D.slice(0,4)},CHILD:function(D){return D[1]=D[1].toLowerCase(),D[1].slice(0,3)==="nth"?(D[3]||ke.error(D[0]),D[4]=+(D[4]?D[5]+(D[6]||1):2*(D[3]==="even"||D[3]==="odd")),D[5]=+(D[7]+D[8]||D[3]==="odd")):D[3]&&ke.error(D[0]),D},PSEUDO:function(D){var B,Z=!D[6]&&D[2];return ri.CHILD.test(D[0])?null:(D[3]?D[2]=D[4]||D[5]||"":Z&&ii.test(Z)&&(B=Ds(Z,!0))&&(B=Z.indexOf(")",Z.length-B)-Z.length)&&(D[0]=D[0].slice(0,B),D[2]=Z.slice(0,B)),D.slice(0,3))}},filter:{TAG:function(D){var B=D.replace(xi,bi).toLowerCase();return D==="*"?function(){return!0}:function(Z){return P(Z,B)}},CLASS:function(D){var B=ie[D+" "];return B||(B=new RegExp("(^|"+Y+")"+D+"("+Y+"|$)"))&&ie(D,function(Z){return B.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute<"u"&&Z.getAttribute("class")||"")})},ATTR:function(D,B,Z){return function(et){var ct=ke.attr(et,D);return ct==null?B==="!=":B?(ct+="",B==="="?ct===Z:B==="!="?ct!==Z:B==="^="?Z&&ct.indexOf(Z)===0:B==="*="?Z&&ct.indexOf(Z)>-1:B==="$="?Z&&ct.slice(-Z.length)===Z:B==="~="?(" "+ct.replace(Pe," ")+" ").indexOf(Z)>-1:B==="|="?ct===Z||ct.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(D,B,Z,et,ct){var wt=D.slice(0,3)!=="nth",Lt=D.slice(-4)!=="last",Vt=B==="of-type";return et===1&&ct===0?function(It){return!!It.parentNode}:function(It,xe,te){var oe,be,$t,We,Cn,gn=wt!==Lt?"nextSibling":"previousSibling",Hn=It.parentNode,si=Vt&&It.nodeName.toLowerCase(),Br=!te&&!Vt,bn=!1;if(Hn){if(wt){for(;gn;){for($t=It;$t=$t[gn];)if(Vt?P($t,si):$t.nodeType===1)return!1;Cn=gn=D==="only"&&!Cn&&"nextSibling"}return!0}if(Cn=[Lt?Hn.firstChild:Hn.lastChild],Lt&&Br){for(be=Hn[ht]||(Hn[ht]={}),oe=be[D]||[],We=oe[0]===J&&oe[1],bn=We&&oe[2],$t=We&&Hn.childNodes[We];$t=++We&&$t&&$t[gn]||(bn=We=0)||Cn.pop();)if($t.nodeType===1&&++bn&&$t===It){be[D]=[J,We,bn];break}}else if(Br&&(be=It[ht]||(It[ht]={}),oe=be[D]||[],We=oe[0]===J&&oe[1],bn=We),bn===!1)for(;($t=++We&&$t&&$t[gn]||(bn=We=0)||Cn.pop())&&!((Vt?P($t,si):$t.nodeType===1)&&++bn&&(Br&&(be=$t[ht]||($t[ht]={}),be[D]=[J,bn]),$t===It)););return bn-=ct,bn===et||bn%et===0&&bn/et>=0}}},PSEUDO:function(D,B){var Z,et=a.pseudos[D]||a.setFilters[D.toLowerCase()]||ke.error("unsupported pseudo: "+D);return et[ht]?et(B):et.length>1?(Z=[D,D,"",B],a.setFilters.hasOwnProperty(D.toLowerCase())?Yn(function(ct,wt){for(var Lt,Vt=et(ct,B),It=Vt.length;It--;)Lt=d.call(ct,Vt[It]),ct[Lt]=!(wt[Lt]=Vt[It])}):function(ct){return et(ct,0,Z)}):et}},pseudos:{not:Yn(function(D){var B=[],Z=[],et=Ga(D.replace(dt,"$1"));return et[ht]?Yn(function(ct,wt,Lt,Vt){for(var It,xe=et(ct,null,Vt,[]),te=ct.length;te--;)(It=xe[te])&&(ct[te]=!(wt[te]=It))}):function(ct,wt,Lt){return B[0]=ct,et(B,null,Lt,Z),B[0]=null,!Z.pop()}}),has:Yn(function(D){return function(B){return ke(D,B).length>0}}),contains:Yn(function(D){return D=D.replace(xi,bi),function(B){return(B.textContent||u.text(B)).indexOf(D)>-1}}),lang:Yn(function(D){return Rs.test(D||"")||ke.error("unsupported lang: "+D),D=D.replace(xi,bi).toLowerCase(),function(B){var Z;do if(Z=I?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return Z=Z.toLowerCase(),Z===D||Z.indexOf(D+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(D){var B=t.location&&t.location.hash;return B&&B.slice(1)===D.id},root:function(D){return D===N},focus:function(D){return D===hf()&&S.hasFocus()&&!!(D.type||D.href||~D.tabIndex)},enabled:Su(!1),disabled:Su(!0),checked:function(D){return P(D,"input")&&!!D.checked||P(D,"option")&&!!D.selected},selected:function(D){return D.parentNode&&D.parentNode.selectedIndex,D.selected===!0},empty:function(D){for(D=D.firstChild;D;D=D.nextSibling)if(D.nodeType<6)return!1;return!0},parent:function(D){return!a.pseudos.empty(D)},header:function(D){return zi.test(D.nodeName)},input:function(D){return Vi.test(D.nodeName)},button:function(D){return P(D,"input")&&D.type==="button"||P(D,"button")},text:function(D){var B;return P(D,"input")&&D.type==="text"&&((B=D.getAttribute("type"))==null||B.toLowerCase()==="text")},first:hr(function(){return[0]}),last:hr(function(D,B){return[B-1]}),eq:hr(function(D,B,Z){return[Z<0?Z+B:Z]}),even:hr(function(D,B){for(var Z=0;Z<B;Z+=2)D.push(Z);return D}),odd:hr(function(D,B){for(var Z=1;Z<B;Z+=2)D.push(Z);return D}),lt:hr(function(D,B,Z){var et;for(Z<0?et=Z+B:Z>B?et=B:et=Z;--et>=0;)D.push(et);return D}),gt:hr(function(D,B,Z){for(var et=Z<0?Z+B:Z;++et<B;)D.push(et);return D})}},a.pseudos.nth=a.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})a.pseudos[s]=df(s);for(s in{submit:!0,reset:!0})a.pseudos[s]=pf(s);function Eu(){}Eu.prototype=a.filters=a.pseudos,a.setFilters=new Eu;function Ds(D,B){var Z,et,ct,wt,Lt,Vt,It,xe=Ae[D+" "];if(xe)return B?0:xe.slice(0);for(Lt=D,Vt=[],It=a.preFilter;Lt;){(!Z||(et=Je.exec(Lt)))&&(et&&(Lt=Lt.slice(et[0].length)||Lt),Vt.push(ct=[])),Z=!1,(et=Ps.exec(Lt))&&(Z=et.shift(),ct.push({value:Z,type:et[0].replace(dt," ")}),Lt=Lt.slice(Z.length));for(wt in a.filter)(et=ri[wt].exec(Lt))&&(!It[wt]||(et=It[wt](et)))&&(Z=et.shift(),ct.push({value:Z,type:wt,matches:et}),Lt=Lt.slice(Z.length));if(!Z)break}return B?Lt.length:Lt?ke.error(D):Ae(D,Vt).slice(0)}function bo(D){for(var B=0,Z=D.length,et="";B<Z;B++)et+=D[B].value;return et}function yo(D,B,Z){var et=B.dir,ct=B.next,wt=ct||et,Lt=Z&&wt==="parentNode",Vt=vt++;return B.first?function(It,xe,te){for(;It=It[et];)if(It.nodeType===1||Lt)return D(It,xe,te);return!1}:function(It,xe,te){var oe,be,$t=[J,Vt];if(te){for(;It=It[et];)if((It.nodeType===1||Lt)&&D(It,xe,te))return!0}else for(;It=It[et];)if(It.nodeType===1||Lt)if(be=It[ht]||(It[ht]={}),ct&&P(It,ct))It=It[et]||It;else{if((oe=be[wt])&&oe[0]===J&&oe[1]===Vt)return $t[2]=oe[2];if(be[wt]=$t,$t[2]=D(It,xe,te))return!0}return!1}}function Va(D){return D.length>1?function(B,Z,et){for(var ct=D.length;ct--;)if(!D[ct](B,Z,et))return!1;return!0}:D[0]}function ff(D,B,Z){for(var et=0,ct=B.length;et<ct;et++)ke(D,B[et],Z);return Z}function wo(D,B,Z,et,ct){for(var wt,Lt=[],Vt=0,It=D.length,xe=B!=null;Vt<It;Vt++)(wt=D[Vt])&&(!Z||Z(wt,et,ct))&&(Lt.push(wt),xe&&B.push(Vt));return Lt}function za(D,B,Z,et,ct,wt){return et&&!et[ht]&&(et=za(et)),ct&&!ct[ht]&&(ct=za(ct,wt)),Yn(function(Lt,Vt,It,xe){var te,oe,be,$t,We=[],Cn=[],gn=Vt.length,Hn=Lt||ff(B||"*",It.nodeType?[It]:It,[]),si=D&&(Lt||!B)?wo(Hn,We,D,It,xe):Hn;if(Z?($t=ct||(Lt?D:gn||et)?[]:Vt,Z(si,$t,It,xe)):$t=si,et)for(te=wo($t,Cn),et(te,[],It,xe),oe=te.length;oe--;)(be=te[oe])&&($t[Cn[oe]]=!(si[Cn[oe]]=be));if(Lt){if(ct||D){if(ct){for(te=[],oe=$t.length;oe--;)(be=$t[oe])&&te.push(si[oe]=be);ct(null,$t=[],te,xe)}for(oe=$t.length;oe--;)(be=$t[oe])&&(te=ct?d.call(Lt,be):We[oe])>-1&&(Lt[te]=!(Vt[te]=be))}}else $t=wo($t===Vt?$t.splice(gn,$t.length):$t),ct?ct(null,Vt,$t,xe):b.apply(Vt,$t)})}function Ha(D){for(var B,Z,et,ct=D.length,wt=a.relative[D[0].type],Lt=wt||a.relative[" "],Vt=wt?1:0,It=yo(function(oe){return oe===B},Lt,!0),xe=yo(function(oe){return d.call(B,oe)>-1},Lt,!0),te=[function(oe,be,$t){var We=!wt&&($t||be!=h)||((B=be).nodeType?It(oe,be,$t):xe(oe,be,$t));return B=null,We}];Vt<ct;Vt++)if(Z=a.relative[D[Vt].type])te=[yo(Va(te),Z)];else{if(Z=a.filter[D[Vt].type].apply(null,D[Vt].matches),Z[ht]){for(et=++Vt;et<ct&&!a.relative[D[et].type];et++);return za(Vt>1&&Va(te),Vt>1&&bo(D.slice(0,Vt-1).concat({value:D[Vt-2].type===" "?"*":""})).replace(dt,"$1"),Z,Vt<et&&Ha(D.slice(Vt,et)),et<ct&&Ha(D=D.slice(et)),et<ct&&bo(D))}te.push(Z)}return Va(te)}function mf(D,B){var Z=B.length>0,et=D.length>0,ct=function(wt,Lt,Vt,It,xe){var te,oe,be,$t=0,We="0",Cn=wt&&[],gn=[],Hn=h,si=wt||et&&a.find.TAG("*",xe),Br=J+=Hn==null?1:Math.random()||.1,bn=si.length;for(xe&&(h=Lt==S||Lt||xe);We!==bn&&(te=si[We])!=null;We++){if(et&&te){for(oe=0,!Lt&&te.ownerDocument!=S&&(Hi(te),Vt=!I);be=D[oe++];)if(be(te,Lt||S,Vt)){b.call(It,te);break}xe&&(J=Br)}Z&&((te=!be&&te)&&$t--,wt&&Cn.push(te))}if($t+=We,Z&&We!==$t){for(oe=0;be=B[oe++];)be(Cn,gn,Lt,Vt);if(wt){if($t>0)for(;We--;)Cn[We]||gn[We]||(gn[We]=A.call(It));gn=wo(gn)}b.apply(It,gn),xe&&!wt&&gn.length>0&&$t+B.length>1&&u.uniqueSort(It)}return xe&&(J=Br,h=Hn),Cn};return Z?Yn(ct):ct}function Ga(D,B){var Z,et=[],ct=[],wt=he[D+" "];if(!wt){for(B||(B=Ds(D)),Z=B.length;Z--;)wt=Ha(B[Z]),wt[ht]?et.push(wt):ct.push(wt);wt=he(D,mf(ct,et)),wt.selector=D}return wt}function Mu(D,B,Z,et){var ct,wt,Lt,Vt,It,xe=typeof D=="function"&&D,te=!et&&Ds(D=xe.selector||D);if(Z=Z||[],te.length===1){if(wt=te[0]=te[0].slice(0),wt.length>2&&(Lt=wt[0]).type==="ID"&&B.nodeType===9&&I&&a.relative[wt[1].type]){if(B=(a.find.ID(Lt.matches[0].replace(xi,bi),B)||[])[0],B)xe&&(B=B.parentNode);else return Z;D=D.slice(wt.shift().value.length)}for(ct=ri.needsContext.test(D)?0:wt.length;ct--&&(Lt=wt[ct],!a.relative[Vt=Lt.type]);)if((It=a.find[Vt])&&(et=It(Lt.matches[0].replace(xi,bi),ka.test(wt[0].type)&&Ba(B.parentNode)||B))){if(wt.splice(ct,1),D=et.length&&bo(wt),!D)return b.apply(Z,et),Z;break}}return(xe||Ga(D,te))(et,B,!I,Z,!B||ka.test(D)&&Ba(B.parentNode)||B),Z}E.sortStable=ht.split("").sort(on).join("")===ht,Hi(),E.sortDetached=kr(function(D){return D.compareDocumentPosition(S.createElement("fieldset"))&1}),u.find=ke,u.expr[":"]=u.expr.pseudos,u.unique=u.uniqueSort,ke.compile=Ga,ke.select=Mu,ke.setDocument=Hi,ke.tokenize=Ds,ke.escape=u.escapeSelector,ke.getText=u.text,ke.isXML=u.isXMLDoc,ke.selectors=u.expr,ke.support=u.support,ke.uniqueSort=u.uniqueSort})();var St=function(s,a,h){for(var p=[],x=h!==void 0;(s=s[a])&&s.nodeType!==9;)if(s.nodeType===1){if(x&&u(s).is(h))break;p.push(s)}return p},Et=function(s,a){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==a&&h.push(s);return h},Ot=u.expr.match.needsContext,Kt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function le(s,a,h){return T(a)?u.grep(s,function(p,x){return!!a.call(p,x,p)!==h}):a.nodeType?u.grep(s,function(p){return p===a!==h}):typeof a!="string"?u.grep(s,function(p){return d.call(a,p)>-1!==h}):u.filter(a,s,h)}u.filter=function(s,a,h){var p=a[0];return h&&(s=":not("+s+")"),a.length===1&&p.nodeType===1?u.find.matchesSelector(p,s)?[p]:[]:u.find.matches(s,u.grep(a,function(x){return x.nodeType===1}))},u.fn.extend({find:function(s){var a,h,p=this.length,x=this;if(typeof s!="string")return this.pushStack(u(s).filter(function(){for(a=0;a<p;a++)if(u.contains(x[a],this))return!0}));for(h=this.pushStack([]),a=0;a<p;a++)u.find(s,x[a],h);return p>1?u.uniqueSort(h):h},filter:function(s){return this.pushStack(le(this,s||[],!1))},not:function(s){return this.pushStack(le(this,s||[],!0))},is:function(s){return!!le(this,typeof s=="string"&&Ot.test(s)?u(s):s||[],!1).length}});var mt,bt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Rt=u.fn.init=function(s,a,h){var p,x;if(!s)return this;if(h=h||mt,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?p=[null,s,null]:p=bt.exec(s),p&&(p[1]||!a))if(p[1]){if(a=a instanceof u?a[0]:a,u.merge(this,u.parseHTML(p[1],a&&a.nodeType?a.ownerDocument||a:m,!0)),Kt.test(p[1])&&u.isPlainObject(a))for(p in a)T(this[p])?this[p](a[p]):this.attr(p,a[p]);return this}else return x=m.getElementById(p[2]),x&&(this[0]=x,this.length=1),this;else return!a||a.jquery?(a||h).find(s):this.constructor(a).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(T(s))return h.ready!==void 0?h.ready(s):s(u)}return u.makeArray(s,this)};Rt.prototype=u.fn,mt=u(m);var yt=/^(?:parents|prev(?:Until|All))/,Xt={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(s){var a=u(s,this),h=a.length;return this.filter(function(){for(var p=0;p<h;p++)if(u.contains(this,a[p]))return!0})},closest:function(s,a){var h,p=0,x=this.length,b=[],S=typeof s!="string"&&u(s);if(!Ot.test(s)){for(;p<x;p++)for(h=this[p];h&&h!==a;h=h.parentNode)if(h.nodeType<11&&(S?S.index(h)>-1:h.nodeType===1&&u.find.matchesSelector(h,s))){b.push(h);break}}return this.pushStack(b.length>1?u.uniqueSort(b):b)},index:function(s){return s?typeof s=="string"?d.call(u(s),this[0]):d.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,a){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(s,a))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function ge(s,a){for(;(s=s[a])&&s.nodeType!==1;);return s}u.each({parent:function(s){var a=s.parentNode;return a&&a.nodeType!==11?a:null},parents:function(s){return St(s,"parentNode")},parentsUntil:function(s,a,h){return St(s,"parentNode",h)},next:function(s){return ge(s,"nextSibling")},prev:function(s){return ge(s,"previousSibling")},nextAll:function(s){return St(s,"nextSibling")},prevAll:function(s){return St(s,"previousSibling")},nextUntil:function(s,a,h){return St(s,"nextSibling",h)},prevUntil:function(s,a,h){return St(s,"previousSibling",h)},siblings:function(s){return Et((s.parentNode||{}).firstChild,s)},children:function(s){return Et(s.firstChild)},contents:function(s){return s.contentDocument!=null&&r(s.contentDocument)?s.contentDocument:(P(s,"template")&&(s=s.content||s),u.merge([],s.childNodes))}},function(s,a){u.fn[s]=function(h,p){var x=u.map(this,a,h);return s.slice(-5)!=="Until"&&(p=h),p&&typeof p=="string"&&(x=u.filter(p,x)),this.length>1&&(Xt[s]||u.uniqueSort(x),yt.test(s)&&x.reverse()),this.pushStack(x)}});var nt=/[^\x20\t\r\n\f]+/g;function Be(s){var a={};return u.each(s.match(nt)||[],function(h,p){a[p]=!0}),a}u.Callbacks=function(s){s=typeof s=="string"?Be(s):u.extend({},s);var a,h,p,x,b=[],S=[],N=-1,I=function(){for(x=x||s.once,p=a=!0;S.length;N=-1)for(h=S.shift();++N<b.length;)b[N].apply(h[0],h[1])===!1&&s.stopOnFalse&&(N=b.length,h=!1);s.memory||(h=!1),a=!1,x&&(h?b=[]:b="")},H={add:function(){return b&&(h&&!a&&(N=b.length-1,S.push(h)),function it(ht){u.each(ht,function(J,vt){T(vt)?(!s.unique||!H.has(vt))&&b.push(vt):vt&&vt.length&&R(vt)!=="string"&&it(vt)})}(arguments),h&&!a&&I()),this},remove:function(){return u.each(arguments,function(it,ht){for(var J;(J=u.inArray(ht,b,J))>-1;)b.splice(J,1),J<=N&&N--}),this},has:function(it){return it?u.inArray(it,b)>-1:b.length>0},empty:function(){return b&&(b=[]),this},disable:function(){return x=S=[],b=h="",this},disabled:function(){return!b},lock:function(){return x=S=[],!h&&!a&&(b=h=""),this},locked:function(){return!!x},fireWith:function(it,ht){return x||(ht=ht||[],ht=[it,ht.slice?ht.slice():ht],S.push(ht),a||I()),this},fire:function(){return H.fireWith(this,arguments),this},fired:function(){return!!p}};return H};function Se(s){return s}function ne(s){throw s}function F(s,a,h,p){var x;try{s&&T(x=s.promise)?x.call(s).done(a).fail(h):s&&T(x=s.then)?x.call(s,a,h):a.apply(void 0,[s].slice(p))}catch(b){h.apply(void 0,[b])}}u.extend({Deferred:function(s){var a=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],h="pending",p={state:function(){return h},always:function(){return x.done(arguments).fail(arguments),this},catch:function(b){return p.then(null,b)},pipe:function(){var b=arguments;return u.Deferred(function(S){u.each(a,function(N,I){var H=T(b[I[4]])&&b[I[4]];x[I[1]](function(){var it=H&&H.apply(this,arguments);it&&T(it.promise)?it.promise().progress(S.notify).done(S.resolve).fail(S.reject):S[I[0]+"With"](this,H?[it]:arguments)})}),b=null}).promise()},then:function(b,S,N){var I=0;function H(it,ht,J,vt){return function(){var ie=this,Ae=arguments,he=function(){var on,ei;if(!(it<I)){if(on=J.apply(ie,Ae),on===ht.promise())throw new TypeError("Thenable self-resolution");ei=on&&(typeof on=="object"||typeof on=="function")&&on.then,T(ei)?vt?ei.call(on,H(I,ht,Se,vt),H(I,ht,ne,vt)):(I++,ei.call(on,H(I,ht,Se,vt),H(I,ht,ne,vt),H(I,ht,Se,ht.notifyWith))):(J!==Se&&(ie=void 0,Ae=[on]),(vt||ht.resolveWith)(ie,Ae))}},mn=vt?he:function(){try{he()}catch(on){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(on,mn.error),it+1>=I&&(J!==ne&&(ie=void 0,Ae=[on]),ht.rejectWith(ie,Ae))}};it?mn():(u.Deferred.getErrorHook?mn.error=u.Deferred.getErrorHook():u.Deferred.getStackHook&&(mn.error=u.Deferred.getStackHook()),t.setTimeout(mn))}}return u.Deferred(function(it){a[0][3].add(H(0,it,T(N)?N:Se,it.notifyWith)),a[1][3].add(H(0,it,T(b)?b:Se)),a[2][3].add(H(0,it,T(S)?S:ne))}).promise()},promise:function(b){return b!=null?u.extend(b,p):p}},x={};return u.each(a,function(b,S){var N=S[2],I=S[5];p[S[1]]=N.add,I&&N.add(function(){h=I},a[3-b][2].disable,a[3-b][3].disable,a[0][2].lock,a[0][3].lock),N.add(S[3].fire),x[S[0]]=function(){return x[S[0]+"With"](this===x?void 0:this,arguments),this},x[S[0]+"With"]=N.fireWith}),p.promise(x),s&&s.call(x,x),x},when:function(s){var a=arguments.length,h=a,p=Array(h),x=o.call(arguments),b=u.Deferred(),S=function(N){return function(I){p[N]=this,x[N]=arguments.length>1?o.call(arguments):I,--a||b.resolveWith(p,x)}};if(a<=1&&(F(s,b.done(S(h)).resolve,b.reject,!a),b.state()==="pending"||T(x[h]&&x[h].then)))return b.then();for(;h--;)F(x[h],S(h),b.reject);return b.promise()}});var Xe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(s,a){t.console&&t.console.warn&&s&&Xe.test(s.name)&&t.console.warn("jQuery.Deferred exception: "+s.message,s.stack,a)},u.readyException=function(s){t.setTimeout(function(){throw s})};var ae=u.Deferred();u.fn.ready=function(s){return ae.then(s).catch(function(a){u.readyException(a)}),this},u.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(s!==!0&&--u.readyWait>0)&&ae.resolveWith(m,[u]))}}),u.ready.then=ae.then;function re(){m.removeEventListener("DOMContentLoaded",re),t.removeEventListener("load",re),u.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?t.setTimeout(u.ready):(m.addEventListener("DOMContentLoaded",re),t.addEventListener("load",re));var Ft=function(s,a,h,p,x,b,S){var N=0,I=s.length,H=h==null;if(R(h)==="object"){x=!0;for(N in h)Ft(s,a,N,h[N],!0,b,S)}else if(p!==void 0&&(x=!0,T(p)||(S=!0),H&&(S?(a.call(s,p),a=null):(H=a,a=function(it,ht,J){return H.call(u(it),J)})),a))for(;N<I;N++)a(s[N],h,S?p:p.call(s[N],N,a(s[N],h)));return x?s:H?a.call(s):I?a(s[0],h):b},Oe=/^-ms-/,Ht=/-([a-z])/g;function L(s,a){return a.toUpperCase()}function M(s){return s.replace(Oe,"ms-").replace(Ht,L)}var $=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function pt(){this.expando=u.expando+pt.uid++}pt.uid=1,pt.prototype={cache:function(s){var a=s[this.expando];return a||(a={},$(s)&&(s.nodeType?s[this.expando]=a:Object.defineProperty(s,this.expando,{value:a,configurable:!0}))),a},set:function(s,a,h){var p,x=this.cache(s);if(typeof a=="string")x[M(a)]=h;else for(p in a)x[M(p)]=a[p];return x},get:function(s,a){return a===void 0?this.cache(s):s[this.expando]&&s[this.expando][M(a)]},access:function(s,a,h){return a===void 0||a&&typeof a=="string"&&h===void 0?this.get(s,a):(this.set(s,a,h),h!==void 0?h:a)},remove:function(s,a){var h,p=s[this.expando];if(p!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(M):(a=M(a),a=a in p?[a]:a.match(nt)||[]),h=a.length;h--;)delete p[a[h]];(a===void 0||u.isEmptyObject(p))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var a=s[this.expando];return a!==void 0&&!u.isEmptyObject(a)}};var K=new pt,at=new pt,zt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,At=/[A-Z]/g;function Zt(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:zt.test(s)?JSON.parse(s):s}function Jt(s,a,h){var p;if(h===void 0&&s.nodeType===1)if(p="data-"+a.replace(At,"-$&").toLowerCase(),h=s.getAttribute(p),typeof h=="string"){try{h=Zt(h)}catch{}at.set(s,a,h)}else h=void 0;return h}u.extend({hasData:function(s){return at.hasData(s)||K.hasData(s)},data:function(s,a,h){return at.access(s,a,h)},removeData:function(s,a){at.remove(s,a)},_data:function(s,a,h){return K.access(s,a,h)},_removeData:function(s,a){K.remove(s,a)}}),u.fn.extend({data:function(s,a){var h,p,x,b=this[0],S=b&&b.attributes;if(s===void 0){if(this.length&&(x=at.get(b),b.nodeType===1&&!K.get(b,"hasDataAttrs"))){for(h=S.length;h--;)S[h]&&(p=S[h].name,p.indexOf("data-")===0&&(p=M(p.slice(5)),Jt(b,p,x[p])));K.set(b,"hasDataAttrs",!0)}return x}return typeof s=="object"?this.each(function(){at.set(this,s)}):Ft(this,function(N){var I;if(b&&N===void 0)return I=at.get(b,s),I!==void 0||(I=Jt(b,s),I!==void 0)?I:void 0;this.each(function(){at.set(this,s,N)})},null,a,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){at.remove(this,s)})}}),u.extend({queue:function(s,a,h){var p;if(s)return a=(a||"fx")+"queue",p=K.get(s,a),h&&(!p||Array.isArray(h)?p=K.access(s,a,u.makeArray(h)):p.push(h)),p||[]},dequeue:function(s,a){a=a||"fx";var h=u.queue(s,a),p=h.length,x=h.shift(),b=u._queueHooks(s,a),S=function(){u.dequeue(s,a)};x==="inprogress"&&(x=h.shift(),p--),x&&(a==="fx"&&h.unshift("inprogress"),delete b.stop,x.call(s,S,b)),!p&&b&&b.empty.fire()},_queueHooks:function(s,a){var h=a+"queueHooks";return K.get(s,h)||K.access(s,h,{empty:u.Callbacks("once memory").add(function(){K.remove(s,[a+"queue",h])})})}}),u.fn.extend({queue:function(s,a){var h=2;return typeof s!="string"&&(a=s,s="fx",h--),arguments.length<h?u.queue(this[0],s):a===void 0?this:this.each(function(){var p=u.queue(this,s,a);u._queueHooks(this,s),s==="fx"&&p[0]!=="inprogress"&&u.dequeue(this,s)})},dequeue:function(s){return this.each(function(){u.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,a){var h,p=1,x=u.Deferred(),b=this,S=this.length,N=function(){--p||x.resolveWith(b,[b])};for(typeof s!="string"&&(a=s,s=void 0),s=s||"fx";S--;)h=K.get(b[S],s+"queueHooks"),h&&h.empty&&(p++,h.empty.add(N));return N(),x.promise(a)}});var _t=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Nt=new RegExp("^(?:([+-])=|)("+_t+")([a-z%]*)$","i"),Gt=["Top","Right","Bottom","Left"],Yt=m.documentElement,Ut=function(s){return u.contains(s.ownerDocument,s)},Ee={composed:!0};Yt.getRootNode&&(Ut=function(s){return u.contains(s.ownerDocument,s)||s.getRootNode(Ee)===s.ownerDocument});var se=function(s,a){return s=a||s,s.style.display==="none"||s.style.display===""&&Ut(s)&&u.css(s,"display")==="none"};function Fe(s,a,h,p){var x,b,S=20,N=p?function(){return p.cur()}:function(){return u.css(s,a,"")},I=N(),H=h&&h[3]||(u.cssNumber[a]?"":"px"),it=s.nodeType&&(u.cssNumber[a]||H!=="px"&&+I)&&Nt.exec(u.css(s,a));if(it&&it[3]!==H){for(I=I/2,H=H||it[3],it=+I||1;S--;)u.style(s,a,it+H),(1-b)*(1-(b=N()/I||.5))<=0&&(S=0),it=it/b;it=it*2,u.style(s,a,it+H),h=h||[]}return h&&(it=+it||+I||0,x=h[1]?it+(h[1]+1)*h[2]:+h[2],p&&(p.unit=H,p.start=it,p.end=x)),x}var G={};function Pt(s){var a,h=s.ownerDocument,p=s.nodeName,x=G[p];return x||(a=h.body.appendChild(h.createElement(p)),x=u.css(a,"display"),a.parentNode.removeChild(a),x==="none"&&(x="block"),G[p]=x,x)}function rt(s,a){for(var h,p,x=[],b=0,S=s.length;b<S;b++)p=s[b],p.style&&(h=p.style.display,a?(h==="none"&&(x[b]=K.get(p,"display")||null,x[b]||(p.style.display="")),p.style.display===""&&se(p)&&(x[b]=Pt(p))):h!=="none"&&(x[b]="none",K.set(p,"display",h)));for(b=0;b<S;b++)x[b]!=null&&(s[b].style.display=x[b]);return s}u.fn.extend({show:function(){return rt(this,!0)},hide:function(){return rt(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){se(this)?u(this).show():u(this).hide()})}});var gt=/^(?:checkbox|radio)$/i,Dt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ct=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=m.createDocumentFragment(),a=s.appendChild(m.createElement("div")),h=m.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),a.appendChild(h),E.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,a.innerHTML="<option></option>",E.option=!!a.lastChild})();var qt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qt.tbody=qt.tfoot=qt.colgroup=qt.caption=qt.thead,qt.th=qt.td,E.option||(qt.optgroup=qt.option=[1,"<select multiple='multiple'>","</select>"]);function ve(s,a){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(a||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(a||"*"):h=[],a===void 0||a&&P(s,a)?u.merge([s],h):h}function tn(s,a){for(var h=0,p=s.length;h<p;h++)K.set(s[h],"globalEval",!a||K.get(a[h],"globalEval"))}var Ue=/<|&#?\w+;/;function Mn(s,a,h,p,x){for(var b,S,N,I,H,it,ht=a.createDocumentFragment(),J=[],vt=0,ie=s.length;vt<ie;vt++)if(b=s[vt],b||b===0)if(R(b)==="object")u.merge(J,b.nodeType?[b]:b);else if(!Ue.test(b))J.push(a.createTextNode(b));else{for(S=S||ht.appendChild(a.createElement("div")),N=(Dt.exec(b)||["",""])[1].toLowerCase(),I=qt[N]||qt._default,S.innerHTML=I[1]+u.htmlPrefilter(b)+I[2],it=I[0];it--;)S=S.lastChild;u.merge(J,S.childNodes),S=ht.firstChild,S.textContent=""}for(ht.textContent="",vt=0;b=J[vt++];){if(p&&u.inArray(b,p)>-1){x&&x.push(b);continue}if(H=Ut(b),S=ve(ht.appendChild(b),"script"),H&&tn(S),h)for(it=0;b=S[it++];)Ct.test(b.type||"")&&h.push(b)}return ht}var Vn=/^([^.]*)(?:\.(.+)|)/;function mi(){return!0}function gi(){return!1}function qn(s,a,h,p,x,b){var S,N;if(typeof a=="object"){typeof h!="string"&&(p=p||h,h=void 0);for(N in a)qn(s,N,h,p,a[N],b);return s}if(p==null&&x==null?(x=h,p=h=void 0):x==null&&(typeof h=="string"?(x=p,p=void 0):(x=p,p=h,h=void 0)),x===!1)x=gi;else if(!x)return s;return b===1&&(S=x,x=function(I){return u().off(I),S.apply(this,arguments)},x.guid=S.guid||(S.guid=u.guid++)),s.each(function(){u.event.add(this,a,x,p,h)})}u.event={global:{},add:function(s,a,h,p,x){var b,S,N,I,H,it,ht,J,vt,ie,Ae,he=K.get(s);if($(s))for(h.handler&&(b=h,h=b.handler,x=b.selector),x&&u.find.matchesSelector(Yt,x),h.guid||(h.guid=u.guid++),(I=he.events)||(I=he.events=Object.create(null)),(S=he.handle)||(S=he.handle=function(mn){return typeof u<"u"&&u.event.triggered!==mn.type?u.event.dispatch.apply(s,arguments):void 0}),a=(a||"").match(nt)||[""],H=a.length;H--;)N=Vn.exec(a[H])||[],vt=Ae=N[1],ie=(N[2]||"").split(".").sort(),vt&&(ht=u.event.special[vt]||{},vt=(x?ht.delegateType:ht.bindType)||vt,ht=u.event.special[vt]||{},it=u.extend({type:vt,origType:Ae,data:p,handler:h,guid:h.guid,selector:x,needsContext:x&&u.expr.match.needsContext.test(x),namespace:ie.join(".")},b),(J=I[vt])||(J=I[vt]=[],J.delegateCount=0,(!ht.setup||ht.setup.call(s,p,ie,S)===!1)&&s.addEventListener&&s.addEventListener(vt,S)),ht.add&&(ht.add.call(s,it),it.handler.guid||(it.handler.guid=h.guid)),x?J.splice(J.delegateCount++,0,it):J.push(it),u.event.global[vt]=!0)},remove:function(s,a,h,p,x){var b,S,N,I,H,it,ht,J,vt,ie,Ae,he=K.hasData(s)&&K.get(s);if(!(!he||!(I=he.events))){for(a=(a||"").match(nt)||[""],H=a.length;H--;){if(N=Vn.exec(a[H])||[],vt=Ae=N[1],ie=(N[2]||"").split(".").sort(),!vt){for(vt in I)u.event.remove(s,vt+a[H],h,p,!0);continue}for(ht=u.event.special[vt]||{},vt=(p?ht.delegateType:ht.bindType)||vt,J=I[vt]||[],N=N[2]&&new RegExp("(^|\\.)"+ie.join("\\.(?:.*\\.|)")+"(\\.|$)"),S=b=J.length;b--;)it=J[b],(x||Ae===it.origType)&&(!h||h.guid===it.guid)&&(!N||N.test(it.namespace))&&(!p||p===it.selector||p==="**"&&it.selector)&&(J.splice(b,1),it.selector&&J.delegateCount--,ht.remove&&ht.remove.call(s,it));S&&!J.length&&((!ht.teardown||ht.teardown.call(s,ie,he.handle)===!1)&&u.removeEvent(s,vt,he.handle),delete I[vt])}u.isEmptyObject(I)&&K.remove(s,"handle events")}},dispatch:function(s){var a,h,p,x,b,S,N=new Array(arguments.length),I=u.event.fix(s),H=(K.get(this,"events")||Object.create(null))[I.type]||[],it=u.event.special[I.type]||{};for(N[0]=I,a=1;a<arguments.length;a++)N[a]=arguments[a];if(I.delegateTarget=this,!(it.preDispatch&&it.preDispatch.call(this,I)===!1)){for(S=u.event.handlers.call(this,I,H),a=0;(x=S[a++])&&!I.isPropagationStopped();)for(I.currentTarget=x.elem,h=0;(b=x.handlers[h++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||b.namespace===!1||I.rnamespace.test(b.namespace))&&(I.handleObj=b,I.data=b.data,p=((u.event.special[b.origType]||{}).handle||b.handler).apply(x.elem,N),p!==void 0&&(I.result=p)===!1&&(I.preventDefault(),I.stopPropagation()));return it.postDispatch&&it.postDispatch.call(this,I),I.result}},handlers:function(s,a){var h,p,x,b,S,N=[],I=a.delegateCount,H=s.target;if(I&&H.nodeType&&!(s.type==="click"&&s.button>=1)){for(;H!==this;H=H.parentNode||this)if(H.nodeType===1&&!(s.type==="click"&&H.disabled===!0)){for(b=[],S={},h=0;h<I;h++)p=a[h],x=p.selector+" ",S[x]===void 0&&(S[x]=p.needsContext?u(x,this).index(H)>-1:u.find(x,this,null,[H]).length),S[x]&&b.push(p);b.length&&N.push({elem:H,handlers:b})}}return H=this,I<a.length&&N.push({elem:H,handlers:a.slice(I)}),N},addProp:function(s,a){Object.defineProperty(u.Event.prototype,s,{enumerable:!0,configurable:!0,get:T(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[u.expando]?s:new u.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var a=this||s;return gt.test(a.type)&&a.click&&P(a,"input")&&Fi(a,"click",!0),!1},trigger:function(s){var a=this||s;return gt.test(a.type)&&a.click&&P(a,"input")&&Fi(a,"click"),!0},_default:function(s){var a=s.target;return gt.test(a.type)&&a.click&&P(a,"input")&&K.get(a,"click")||P(a,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Fi(s,a,h){if(!h){K.get(s,a)===void 0&&u.event.add(s,a,mi);return}K.set(s,a,!1),u.event.add(s,a,{namespace:!1,handler:function(p){var x,b=K.get(this,a);if(p.isTrigger&1&&this[a]){if(b)(u.event.special[a]||{}).delegateType&&p.stopPropagation();else if(b=o.call(arguments),K.set(this,a,b),this[a](),x=K.get(this,a),K.set(this,a,!1),b!==x)return p.stopImmediatePropagation(),p.preventDefault(),x}else b&&(K.set(this,a,u.event.trigger(b[0],b.slice(1),this)),p.stopPropagation(),p.isImmediatePropagationStopped=mi)}})}u.removeEvent=function(s,a,h){s.removeEventListener&&s.removeEventListener(a,h)},u.Event=function(s,a){if(!(this instanceof u.Event))return new u.Event(s,a);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?mi:gi,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,a&&u.extend(this,a),this.timeStamp=s&&s.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:gi,isPropagationStopped:gi,isImmediatePropagationStopped:gi,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=mi,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=mi,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=mi,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(s,a){function h(p){if(m.documentMode){var x=K.get(this,"handle"),b=u.event.fix(p);b.type=p.type==="focusin"?"focus":"blur",b.isSimulated=!0,x(p),b.target===b.currentTarget&&x(b)}else u.event.simulate(a,p.target,u.event.fix(p))}u.event.special[s]={setup:function(){var p;if(Fi(this,s,!0),m.documentMode)p=K.get(this,a),p||this.addEventListener(a,h),K.set(this,a,(p||0)+1);else return!1},trigger:function(){return Fi(this,s),!0},teardown:function(){var p;if(m.documentMode)p=K.get(this,a)-1,p?K.set(this,a,p):(this.removeEventListener(a,h),K.remove(this,a));else return!1},_default:function(p){return K.get(p.target,s)},delegateType:a},u.event.special[a]={setup:function(){var p=this.ownerDocument||this.document||this,x=m.documentMode?this:p,b=K.get(x,a);b||(m.documentMode?this.addEventListener(a,h):p.addEventListener(s,h,!0)),K.set(x,a,(b||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,x=m.documentMode?this:p,b=K.get(x,a)-1;b?K.set(x,a,b):(m.documentMode?this.removeEventListener(a,h):p.removeEventListener(s,h,!0),K.remove(x,a))}}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,a){u.event.special[s]={delegateType:a,bindType:a,handle:function(h){var p,x=this,b=h.relatedTarget,S=h.handleObj;return(!b||b!==x&&!u.contains(x,b))&&(h.type=S.origType,p=S.handler.apply(this,arguments),h.type=a),p}}}),u.fn.extend({on:function(s,a,h,p){return qn(this,s,a,h,p)},one:function(s,a,h,p){return qn(this,s,a,h,p,1)},off:function(s,a,h){var p,x;if(s&&s.preventDefault&&s.handleObj)return p=s.handleObj,u(s.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof s=="object"){for(x in s)this.off(x,a,s[x]);return this}return(a===!1||typeof a=="function")&&(h=a,a=void 0),h===!1&&(h=gi),this.each(function(){u.event.remove(this,s,h,a)})}});var mo=/<script|<style|<link/i,go=/checked\s*(?:[^=]|=\s*.checked.)/i,Nr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ws(s,a){return P(s,"table")&&P(a.nodeType!==11?a:a.firstChild,"tr")&&u(s).children("tbody")[0]||s}function Or(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function vo(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Ss(s,a){var h,p,x,b,S,N,I;if(a.nodeType===1){if(K.hasData(s)&&(b=K.get(s),I=b.events,I)){K.remove(a,"handle events");for(x in I)for(h=0,p=I[x].length;h<p;h++)u.event.add(a,x,I[x][h])}at.hasData(s)&&(S=at.access(s),N=u.extend({},S),at.set(a,N))}}function Pa(s,a){var h=a.nodeName.toLowerCase();h==="input"&&gt.test(s.type)?a.checked=s.checked:(h==="input"||h==="textarea")&&(a.defaultValue=s.defaultValue)}function ki(s,a,h,p){a=l(a);var x,b,S,N,I,H,it=0,ht=s.length,J=ht-1,vt=a[0],ie=T(vt);if(ie||ht>1&&typeof vt=="string"&&!E.checkClone&&go.test(vt))return s.each(function(Ae){var he=s.eq(Ae);ie&&(a[0]=vt.call(this,Ae,he.html())),ki(he,a,h,p)});if(ht&&(x=Mn(a,s[0].ownerDocument,!1,s,p),b=x.firstChild,x.childNodes.length===1&&(x=b),b||p)){for(S=u.map(ve(x,"script"),Or),N=S.length;it<ht;it++)I=x,it!==J&&(I=u.clone(I,!0,!0),N&&u.merge(S,ve(I,"script"))),h.call(s[it],I,it);if(N)for(H=S[S.length-1].ownerDocument,u.map(S,vo),it=0;it<N;it++)I=S[it],Ct.test(I.type||"")&&!K.access(I,"globalEval")&&u.contains(H,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?u._evalUrl&&!I.noModule&&u._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},H):U(I.textContent.replace(Nr,""),I,H))}return s}function _o(s,a,h){for(var p,x=a?u.filter(a,s):s,b=0;(p=x[b])!=null;b++)!h&&p.nodeType===1&&u.cleanData(ve(p)),p.parentNode&&(h&&Ut(p)&&tn(ve(p,"script")),p.parentNode.removeChild(p));return s}u.extend({htmlPrefilter:function(s){return s},clone:function(s,a,h){var p,x,b,S,N=s.cloneNode(!0),I=Ut(s);if(!E.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!u.isXMLDoc(s))for(S=ve(N),b=ve(s),p=0,x=b.length;p<x;p++)Pa(b[p],S[p]);if(a)if(h)for(b=b||ve(s),S=S||ve(N),p=0,x=b.length;p<x;p++)Ss(b[p],S[p]);else Ss(s,N);return S=ve(N,"script"),S.length>0&&tn(S,!I&&ve(s,"script")),N},cleanData:function(s){for(var a,h,p,x=u.event.special,b=0;(h=s[b])!==void 0;b++)if($(h)){if(a=h[K.expando]){if(a.events)for(p in a.events)x[p]?u.event.remove(h,p):u.removeEvent(h,p,a.handle);h[K.expando]=void 0}h[at.expando]&&(h[at.expando]=void 0)}}}),u.fn.extend({detach:function(s){return _o(this,s,!0)},remove:function(s){return _o(this,s)},text:function(s){return Ft(this,function(a){return a===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,s,arguments.length)},append:function(){return ki(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=ws(this,s);a.appendChild(s)}})},prepend:function(){return ki(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=ws(this,s);a.insertBefore(s,a.firstChild)}})},before:function(){return ki(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return ki(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,a=0;(s=this[a])!=null;a++)s.nodeType===1&&(u.cleanData(ve(s,!1)),s.textContent="");return this},clone:function(s,a){return s=s??!1,a=a??s,this.map(function(){return u.clone(this,s,a)})},html:function(s){return Ft(this,function(a){var h=this[0]||{},p=0,x=this.length;if(a===void 0&&h.nodeType===1)return h.innerHTML;if(typeof a=="string"&&!mo.test(a)&&!qt[(Dt.exec(a)||["",""])[1].toLowerCase()]){a=u.htmlPrefilter(a);try{for(;p<x;p++)h=this[p]||{},h.nodeType===1&&(u.cleanData(ve(h,!1)),h.innerHTML=a);h=0}catch{}}h&&this.empty().append(a)},null,s,arguments.length)},replaceWith:function(){var s=[];return ki(this,arguments,function(a){var h=this.parentNode;u.inArray(this,s)<0&&(u.cleanData(ve(this)),h&&h.replaceChild(a,this))},s)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,a){u.fn[s]=function(h){for(var p,x=[],b=u(h),S=b.length-1,N=0;N<=S;N++)p=N===S?this:this.clone(!0),u(b[N])[a](p),c.apply(x,p.get());return this.pushStack(x)}});var Es=new RegExp("^("+_t+")(?!px)[a-z%]+$","i"),Ms=/^--/,Fr=function(s){var a=s.ownerDocument.defaultView;return(!a||!a.opener)&&(a=t),a.getComputedStyle(s)},C=function(s,a,h){var p,x,b={};for(x in a)b[x]=s.style[x],s.style[x]=a[x];p=h.call(s);for(x in a)s.style[x]=b[x];return p},j=new RegExp(Gt.join("|"),"i");(function(){function s(){if(H){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",H.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Yt.appendChild(I).appendChild(H);var it=t.getComputedStyle(H);h=it.top!=="1%",N=a(it.marginLeft)===12,H.style.right="60%",b=a(it.right)===36,p=a(it.width)===36,H.style.position="absolute",x=a(H.offsetWidth/3)===12,Yt.removeChild(I),H=null}}function a(it){return Math.round(parseFloat(it))}var h,p,x,b,S,N,I=m.createElement("div"),H=m.createElement("div");H.style&&(H.style.backgroundClip="content-box",H.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=H.style.backgroundClip==="content-box",u.extend(E,{boxSizingReliable:function(){return s(),p},pixelBoxStyles:function(){return s(),b},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),N},scrollboxSize:function(){return s(),x},reliableTrDimensions:function(){var it,ht,J,vt;return S==null&&(it=m.createElement("table"),ht=m.createElement("tr"),J=m.createElement("div"),it.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ht.style.cssText="box-sizing:content-box;border:1px solid",ht.style.height="1px",J.style.height="9px",J.style.display="block",Yt.appendChild(it).appendChild(ht).appendChild(J),vt=t.getComputedStyle(ht),S=parseInt(vt.height,10)+parseInt(vt.borderTopWidth,10)+parseInt(vt.borderBottomWidth,10)===ht.offsetHeight,Yt.removeChild(it)),S}}))})();function Q(s,a,h){var p,x,b,S,N=Ms.test(a),I=s.style;return h=h||Fr(s),h&&(S=h.getPropertyValue(a)||h[a],N&&S&&(S=S.replace(dt,"$1")||void 0),S===""&&!Ut(s)&&(S=u.style(s,a)),!E.pixelBoxStyles()&&Es.test(S)&&j.test(a)&&(p=I.width,x=I.minWidth,b=I.maxWidth,I.minWidth=I.maxWidth=I.width=S,S=h.width,I.width=p,I.minWidth=x,I.maxWidth=b)),S!==void 0?S+"":S}function tt(s,a){return{get:function(){if(s()){delete this.get;return}return(this.get=a).apply(this,arguments)}}}var X=["Webkit","Moz","ms"],xt=m.createElement("div").style,Mt={};function kt(s){for(var a=s[0].toUpperCase()+s.slice(1),h=X.length;h--;)if(s=X[h]+a,s in xt)return s}function Bt(s){var a=u.cssProps[s]||Mt[s];return a||(s in xt?s:Mt[s]=kt(s)||s)}var ee=/^(none|table(?!-c[ea]).+)/,Qt={position:"absolute",visibility:"hidden",display:"block"},jt={letterSpacing:"0",fontWeight:"400"};function Me(s,a,h){var p=Nt.exec(a);return p?Math.max(0,p[2]-(h||0))+(p[3]||"px"):a}function Ce(s,a,h,p,x,b){var S=a==="width"?1:0,N=0,I=0,H=0;if(h===(p?"border":"content"))return 0;for(;S<4;S+=2)h==="margin"&&(H+=u.css(s,h+Gt[S],!0,x)),p?(h==="content"&&(I-=u.css(s,"padding"+Gt[S],!0,x)),h!=="margin"&&(I-=u.css(s,"border"+Gt[S]+"Width",!0,x))):(I+=u.css(s,"padding"+Gt[S],!0,x),h!=="padding"?I+=u.css(s,"border"+Gt[S]+"Width",!0,x):N+=u.css(s,"border"+Gt[S]+"Width",!0,x));return!p&&b>=0&&(I+=Math.max(0,Math.ceil(s["offset"+a[0].toUpperCase()+a.slice(1)]-b-I-N-.5))||0),I+H}function Ke(s,a,h){var p=Fr(s),x=!E.boxSizingReliable()||h,b=x&&u.css(s,"boxSizing",!1,p)==="border-box",S=b,N=Q(s,a,p),I="offset"+a[0].toUpperCase()+a.slice(1);if(Es.test(N)){if(!h)return N;N="auto"}return(!E.boxSizingReliable()&&b||!E.reliableTrDimensions()&&P(s,"tr")||N==="auto"||!parseFloat(N)&&u.css(s,"display",!1,p)==="inline")&&s.getClientRects().length&&(b=u.css(s,"boxSizing",!1,p)==="border-box",S=I in s,S&&(N=s[I])),N=parseFloat(N)||0,N+Ce(s,a,h||(b?"border":"content"),S,p,N)+"px"}u.extend({cssHooks:{opacity:{get:function(s,a){if(a){var h=Q(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,a,h,p){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var x,b,S,N=M(a),I=Ms.test(a),H=s.style;if(I||(a=Bt(N)),S=u.cssHooks[a]||u.cssHooks[N],h!==void 0){if(b=typeof h,b==="string"&&(x=Nt.exec(h))&&x[1]&&(h=Fe(s,a,x),b="number"),h==null||h!==h)return;b==="number"&&!I&&(h+=x&&x[3]||(u.cssNumber[N]?"":"px")),!E.clearCloneStyle&&h===""&&a.indexOf("background")===0&&(H[a]="inherit"),(!S||!("set"in S)||(h=S.set(s,h,p))!==void 0)&&(I?H.setProperty(a,h):H[a]=h)}else return S&&"get"in S&&(x=S.get(s,!1,p))!==void 0?x:H[a]}},css:function(s,a,h,p){var x,b,S,N=M(a),I=Ms.test(a);return I||(a=Bt(N)),S=u.cssHooks[a]||u.cssHooks[N],S&&"get"in S&&(x=S.get(s,!0,h)),x===void 0&&(x=Q(s,a,p)),x==="normal"&&a in jt&&(x=jt[a]),h===""||h?(b=parseFloat(x),h===!0||isFinite(b)?b||0:x):x}}),u.each(["height","width"],function(s,a){u.cssHooks[a]={get:function(h,p,x){if(p)return ee.test(u.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?C(h,Qt,function(){return Ke(h,a,x)}):Ke(h,a,x)},set:function(h,p,x){var b,S=Fr(h),N=!E.scrollboxSize()&&S.position==="absolute",I=N||x,H=I&&u.css(h,"boxSizing",!1,S)==="border-box",it=x?Ce(h,a,x,H,S):0;return H&&N&&(it-=Math.ceil(h["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(S[a])-Ce(h,a,"border",!1,S)-.5)),it&&(b=Nt.exec(p))&&(b[3]||"px")!=="px"&&(h.style[a]=p,p=u.css(h,a)),Me(h,p,it)}}}),u.cssHooks.marginLeft=tt(E.reliableMarginLeft,function(s,a){if(a)return(parseFloat(Q(s,"marginLeft"))||s.getBoundingClientRect().left-C(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(s,a){u.cssHooks[s+a]={expand:function(h){for(var p=0,x={},b=typeof h=="string"?h.split(" "):[h];p<4;p++)x[s+Gt[p]+a]=b[p]||b[p-2]||b[0];return x}},s!=="margin"&&(u.cssHooks[s+a].set=Me)}),u.fn.extend({css:function(s,a){return Ft(this,function(h,p,x){var b,S,N={},I=0;if(Array.isArray(p)){for(b=Fr(h),S=p.length;I<S;I++)N[p[I]]=u.css(h,p[I],!1,b);return N}return x!==void 0?u.style(h,p,x):u.css(h,p)},s,a,arguments.length>1)}});function _e(s,a,h,p,x){return new _e.prototype.init(s,a,h,p,x)}u.Tween=_e,_e.prototype={constructor:_e,init:function(s,a,h,p,x,b){this.elem=s,this.prop=h,this.easing=x||u.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=p,this.unit=b||(u.cssNumber[h]?"":"px")},cur:function(){var s=_e.propHooks[this.prop];return s&&s.get?s.get(this):_e.propHooks._default.get(this)},run:function(s){var a,h=_e.propHooks[this.prop];return this.options.duration?this.pos=a=u.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=a=s,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):_e.propHooks._default.set(this),this}},_e.prototype.init.prototype=_e.prototype,_e.propHooks={_default:{get:function(s){var a;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(a=u.css(s.elem,s.prop,""),!a||a==="auto"?0:a)},set:function(s){u.fx.step[s.prop]?u.fx.step[s.prop](s):s.elem.nodeType===1&&(u.cssHooks[s.prop]||s.elem.style[Bt(s.prop)]!=null)?u.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},_e.propHooks.scrollTop=_e.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},u.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},u.fx=_e.prototype.init,u.fx.step={};var pe,Wt,sn=/^(?:toggle|show|hide)$/,De=/queueHooks$/;function xn(){Wt&&(m.hidden===!1&&t.requestAnimationFrame?t.requestAnimationFrame(xn):t.setTimeout(xn,u.fx.interval),u.fx.tick())}function vi(){return t.setTimeout(function(){pe=void 0}),pe=Date.now()}function hn(s,a){var h,p=0,x={height:s};for(a=a?1:0;p<4;p+=2-a)h=Gt[p],x["margin"+h]=x["padding"+h]=s;return a&&(x.opacity=x.width=s),x}function Bi(s,a,h){for(var p,x=(Ye.tweeners[a]||[]).concat(Ye.tweeners["*"]),b=0,S=x.length;b<S;b++)if(p=x[b].call(h,a,s))return p}function Ge(s,a,h){var p,x,b,S,N,I,H,it,ht="width"in a||"height"in a,J=this,vt={},ie=s.style,Ae=s.nodeType&&se(s),he=K.get(s,"fxshow");h.queue||(S=u._queueHooks(s,"fx"),S.unqueued==null&&(S.unqueued=0,N=S.empty.fire,S.empty.fire=function(){S.unqueued||N()}),S.unqueued++,J.always(function(){J.always(function(){S.unqueued--,u.queue(s,"fx").length||S.empty.fire()})}));for(p in a)if(x=a[p],sn.test(x)){if(delete a[p],b=b||x==="toggle",x===(Ae?"hide":"show"))if(x==="show"&&he&&he[p]!==void 0)Ae=!0;else continue;vt[p]=he&&he[p]||u.style(s,p)}if(I=!u.isEmptyObject(a),!(!I&&u.isEmptyObject(vt))){ht&&s.nodeType===1&&(h.overflow=[ie.overflow,ie.overflowX,ie.overflowY],H=he&&he.display,H==null&&(H=K.get(s,"display")),it=u.css(s,"display"),it==="none"&&(H?it=H:(rt([s],!0),H=s.style.display||H,it=u.css(s,"display"),rt([s]))),(it==="inline"||it==="inline-block"&&H!=null)&&u.css(s,"float")==="none"&&(I||(J.done(function(){ie.display=H}),H==null&&(it=ie.display,H=it==="none"?"":it)),ie.display="inline-block")),h.overflow&&(ie.overflow="hidden",J.always(function(){ie.overflow=h.overflow[0],ie.overflowX=h.overflow[1],ie.overflowY=h.overflow[2]})),I=!1;for(p in vt)I||(he?"hidden"in he&&(Ae=he.hidden):he=K.access(s,"fxshow",{display:H}),b&&(he.hidden=!Ae),Ae&&rt([s],!0),J.done(function(){Ae||rt([s]),K.remove(s,"fxshow");for(p in vt)u.style(s,p,vt[p])})),I=Bi(Ae?he[p]:0,p,J),p in he||(he[p]=I.start,Ae&&(I.end=I.start,I.start=0))}}function Tn(s,a){var h,p,x,b,S;for(h in s)if(p=M(h),x=a[p],b=s[h],Array.isArray(b)&&(x=b[1],b=s[h]=b[0]),h!==p&&(s[p]=b,delete s[h]),S=u.cssHooks[p],S&&"expand"in S){b=S.expand(b),delete s[p];for(h in b)h in s||(s[h]=b[h],a[h]=x)}else a[p]=x}function Ye(s,a,h){var p,x,b=0,S=Ye.prefilters.length,N=u.Deferred().always(function(){delete I.elem}),I=function(){if(x)return!1;for(var ht=pe||vi(),J=Math.max(0,H.startTime+H.duration-ht),vt=J/H.duration||0,ie=1-vt,Ae=0,he=H.tweens.length;Ae<he;Ae++)H.tweens[Ae].run(ie);return N.notifyWith(s,[H,ie,J]),ie<1&&he?J:(he||N.notifyWith(s,[H,1,0]),N.resolveWith(s,[H]),!1)},H=N.promise({elem:s,props:u.extend({},a),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},h),originalProperties:a,originalOptions:h,startTime:pe||vi(),duration:h.duration,tweens:[],createTween:function(ht,J){var vt=u.Tween(s,H.opts,ht,J,H.opts.specialEasing[ht]||H.opts.easing);return H.tweens.push(vt),vt},stop:function(ht){var J=0,vt=ht?H.tweens.length:0;if(x)return this;for(x=!0;J<vt;J++)H.tweens[J].run(1);return ht?(N.notifyWith(s,[H,1,0]),N.resolveWith(s,[H,ht])):N.rejectWith(s,[H,ht]),this}}),it=H.props;for(Tn(it,H.opts.specialEasing);b<S;b++)if(p=Ye.prefilters[b].call(H,s,it,H.opts),p)return T(p.stop)&&(u._queueHooks(H.elem,H.opts.queue).stop=p.stop.bind(p)),p;return u.map(it,Bi,H),T(H.opts.start)&&H.opts.start.call(s,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),u.fx.timer(u.extend(I,{elem:s,anim:H,queue:H.opts.queue})),H}u.Animation=u.extend(Ye,{tweeners:{"*":[function(s,a){var h=this.createTween(s,a);return Fe(h.elem,s,Nt.exec(a),h),h}]},tweener:function(s,a){T(s)?(a=s,s=["*"]):s=s.match(nt);for(var h,p=0,x=s.length;p<x;p++)h=s[p],Ye.tweeners[h]=Ye.tweeners[h]||[],Ye.tweeners[h].unshift(a)},prefilters:[Ge],prefilter:function(s,a){a?Ye.prefilters.unshift(s):Ye.prefilters.push(s)}}),u.speed=function(s,a,h){var p=s&&typeof s=="object"?u.extend({},s):{complete:h||!h&&a||T(s)&&s,duration:s,easing:h&&a||a&&!T(a)&&a};return u.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in u.fx.speeds?p.duration=u.fx.speeds[p.duration]:p.duration=u.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){T(p.old)&&p.old.call(this),p.queue&&u.dequeue(this,p.queue)},p},u.fn.extend({fadeTo:function(s,a,h,p){return this.filter(se).css("opacity",0).show().end().animate({opacity:a},s,h,p)},animate:function(s,a,h,p){var x=u.isEmptyObject(s),b=u.speed(a,h,p),S=function(){var N=Ye(this,u.extend({},s),b);(x||K.get(this,"finish"))&&N.stop(!0)};return S.finish=S,x||b.queue===!1?this.each(S):this.queue(b.queue,S)},stop:function(s,a,h){var p=function(x){var b=x.stop;delete x.stop,b(h)};return typeof s!="string"&&(h=a,a=s,s=void 0),a&&this.queue(s||"fx",[]),this.each(function(){var x=!0,b=s!=null&&s+"queueHooks",S=u.timers,N=K.get(this);if(b)N[b]&&N[b].stop&&p(N[b]);else for(b in N)N[b]&&N[b].stop&&De.test(b)&&p(N[b]);for(b=S.length;b--;)S[b].elem===this&&(s==null||S[b].queue===s)&&(S[b].anim.stop(h),x=!1,S.splice(b,1));(x||!h)&&u.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var a,h=K.get(this),p=h[s+"queue"],x=h[s+"queueHooks"],b=u.timers,S=p?p.length:0;for(h.finish=!0,u.queue(this,s,[]),x&&x.stop&&x.stop.call(this,!0),a=b.length;a--;)b[a].elem===this&&b[a].queue===s&&(b[a].anim.stop(!0),b.splice(a,1));for(a=0;a<S;a++)p[a]&&p[a].finish&&p[a].finish.call(this);delete h.finish})}}),u.each(["toggle","show","hide"],function(s,a){var h=u.fn[a];u.fn[a]=function(p,x,b){return p==null||typeof p=="boolean"?h.apply(this,arguments):this.animate(hn(a,!0),p,x,b)}}),u.each({slideDown:hn("show"),slideUp:hn("hide"),slideToggle:hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,a){u.fn[s]=function(h,p,x){return this.animate(a,h,p,x)}}),u.timers=[],u.fx.tick=function(){var s,a=0,h=u.timers;for(pe=Date.now();a<h.length;a++)s=h[a],!s()&&h[a]===s&&h.splice(a--,1);h.length||u.fx.stop(),pe=void 0},u.fx.timer=function(s){u.timers.push(s),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Wt||(Wt=!0,xn())},u.fx.stop=function(){Wt=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(s,a){return s=u.fx&&u.fx.speeds[s]||s,a=a||"fx",this.queue(a,function(h,p){var x=t.setTimeout(h,s);p.stop=function(){t.clearTimeout(x)}})},function(){var s=m.createElement("input"),a=m.createElement("select"),h=a.appendChild(m.createElement("option"));s.type="checkbox",E.checkOn=s.value!=="",E.optSelected=h.selected,s=m.createElement("input"),s.value="t",s.type="radio",E.radioValue=s.value==="t"}();var dn,en=u.expr.attrHandle;u.fn.extend({attr:function(s,a){return Ft(this,u.attr,s,a,arguments.length>1)},removeAttr:function(s){return this.each(function(){u.removeAttr(this,s)})}}),u.extend({attr:function(s,a,h){var p,x,b=s.nodeType;if(!(b===3||b===8||b===2)){if(typeof s.getAttribute>"u")return u.prop(s,a,h);if((b!==1||!u.isXMLDoc(s))&&(x=u.attrHooks[a.toLowerCase()]||(u.expr.match.bool.test(a)?dn:void 0)),h!==void 0){if(h===null){u.removeAttr(s,a);return}return x&&"set"in x&&(p=x.set(s,h,a))!==void 0?p:(s.setAttribute(a,h+""),h)}return x&&"get"in x&&(p=x.get(s,a))!==null?p:(p=u.find.attr(s,a),p??void 0)}},attrHooks:{type:{set:function(s,a){if(!E.radioValue&&a==="radio"&&P(s,"input")){var h=s.value;return s.setAttribute("type",a),h&&(s.value=h),a}}}},removeAttr:function(s,a){var h,p=0,x=a&&a.match(nt);if(x&&s.nodeType===1)for(;h=x[p++];)s.removeAttribute(h)}}),dn={set:function(s,a,h){return a===!1?u.removeAttr(s,h):s.setAttribute(h,h),h}},u.each(u.expr.match.bool.source.match(/\w+/g),function(s,a){var h=en[a]||u.find.attr;en[a]=function(p,x,b){var S,N,I=x.toLowerCase();return b||(N=en[I],en[I]=S,S=h(p,x,b)!=null?I:null,en[I]=N),S}});var Ts=/^(?:input|select|textarea|button)$/i,_i=/^(?:a|area)$/i;u.fn.extend({prop:function(s,a){return Ft(this,u.prop,s,a,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[u.propFix[s]||s]})}}),u.extend({prop:function(s,a,h){var p,x,b=s.nodeType;if(!(b===3||b===8||b===2))return(b!==1||!u.isXMLDoc(s))&&(a=u.propFix[a]||a,x=u.propHooks[a]),h!==void 0?x&&"set"in x&&(p=x.set(s,h,a))!==void 0?p:s[a]=h:x&&"get"in x&&(p=x.get(s,a))!==null?p:s[a]},propHooks:{tabIndex:{get:function(s){var a=u.find.attr(s,"tabindex");return a?parseInt(a,10):Ts.test(s.nodeName)||_i.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(u.propHooks.selected={get:function(s){var a=s.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(s){var a=s.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function lr(s){var a=s.match(nt)||[];return a.join(" ")}function cr(s){return s.getAttribute&&s.getAttribute("class")||""}function Ra(s){return Array.isArray(s)?s:typeof s=="string"?s.match(nt)||[]:[]}u.fn.extend({addClass:function(s){var a,h,p,x,b,S;return T(s)?this.each(function(N){u(this).addClass(s.call(this,N,cr(this)))}):(a=Ra(s),a.length?this.each(function(){if(p=cr(this),h=this.nodeType===1&&" "+lr(p)+" ",h){for(b=0;b<a.length;b++)x=a[b],h.indexOf(" "+x+" ")<0&&(h+=x+" ");S=lr(h),p!==S&&this.setAttribute("class",S)}}):this)},removeClass:function(s){var a,h,p,x,b,S;return T(s)?this.each(function(N){u(this).removeClass(s.call(this,N,cr(this)))}):arguments.length?(a=Ra(s),a.length?this.each(function(){if(p=cr(this),h=this.nodeType===1&&" "+lr(p)+" ",h){for(b=0;b<a.length;b++)for(x=a[b];h.indexOf(" "+x+" ")>-1;)h=h.replace(" "+x+" "," ");S=lr(h),p!==S&&this.setAttribute("class",S)}}):this):this.attr("class","")},toggleClass:function(s,a){var h,p,x,b,S=typeof s,N=S==="string"||Array.isArray(s);return T(s)?this.each(function(I){u(this).toggleClass(s.call(this,I,cr(this),a),a)}):typeof a=="boolean"&&N?a?this.addClass(s):this.removeClass(s):(h=Ra(s),this.each(function(){if(N)for(b=u(this),x=0;x<h.length;x++)p=h[x],b.hasClass(p)?b.removeClass(p):b.addClass(p);else(s===void 0||S==="boolean")&&(p=cr(this),p&&K.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||s===!1?"":K.get(this,"__className__")||""))}))},hasClass:function(s){var a,h,p=0;for(a=" "+s+" ";h=this[p++];)if(h.nodeType===1&&(" "+lr(cr(h))+" ").indexOf(a)>-1)return!0;return!1}});var jp=/\r/g;u.fn.extend({val:function(s){var a,h,p,x=this[0];return arguments.length?(p=T(s),this.each(function(b){var S;this.nodeType===1&&(p?S=s.call(this,b,u(this).val()):S=s,S==null?S="":typeof S=="number"?S+="":Array.isArray(S)&&(S=u.map(S,function(N){return N==null?"":N+""})),a=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,S,"value")===void 0)&&(this.value=S))})):x?(a=u.valHooks[x.type]||u.valHooks[x.nodeName.toLowerCase()],a&&"get"in a&&(h=a.get(x,"value"))!==void 0?h:(h=x.value,typeof h=="string"?h.replace(jp,""):h??"")):void 0}}),u.extend({valHooks:{option:{get:function(s){var a=u.find.attr(s,"value");return a??lr(u.text(s))}},select:{get:function(s){var a,h,p,x=s.options,b=s.selectedIndex,S=s.type==="select-one",N=S?null:[],I=S?b+1:x.length;for(b<0?p=I:p=S?b:0;p<I;p++)if(h=x[p],(h.selected||p===b)&&!h.disabled&&(!h.parentNode.disabled||!P(h.parentNode,"optgroup"))){if(a=u(h).val(),S)return a;N.push(a)}return N},set:function(s,a){for(var h,p,x=s.options,b=u.makeArray(a),S=x.length;S--;)p=x[S],(p.selected=u.inArray(u.valHooks.option.get(p),b)>-1)&&(h=!0);return h||(s.selectedIndex=-1),b}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(s,a){if(Array.isArray(a))return s.checked=u.inArray(u(s).val(),a)>-1}},E.checkOn||(u.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Cs=t.location,fu={guid:Date.now()},Da=/\?/;u.parseXML=function(s){var a,h;if(!s||typeof s!="string")return null;try{a=new t.DOMParser().parseFromString(s,"text/xml")}catch{}return h=a&&a.getElementsByTagName("parsererror")[0],(!a||h)&&u.error("Invalid XML: "+(h?u.map(h.childNodes,function(p){return p.textContent}).join(`
`):s)),a};var mu=/^(?:focusinfocus|focusoutblur)$/,gu=function(s){s.stopPropagation()};u.extend(u.event,{trigger:function(s,a,h,p){var x,b,S,N,I,H,it,ht,J=[h||m],vt=v.call(s,"type")?s.type:s,ie=v.call(s,"namespace")?s.namespace.split("."):[];if(b=ht=S=h=h||m,!(h.nodeType===3||h.nodeType===8)&&!mu.test(vt+u.event.triggered)&&(vt.indexOf(".")>-1&&(ie=vt.split("."),vt=ie.shift(),ie.sort()),I=vt.indexOf(":")<0&&"on"+vt,s=s[u.expando]?s:new u.Event(vt,typeof s=="object"&&s),s.isTrigger=p?2:3,s.namespace=ie.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ie.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),a=a==null?[s]:u.makeArray(a,[s]),it=u.event.special[vt]||{},!(!p&&it.trigger&&it.trigger.apply(h,a)===!1))){if(!p&&!it.noBubble&&!y(h)){for(N=it.delegateType||vt,mu.test(N+vt)||(b=b.parentNode);b;b=b.parentNode)J.push(b),S=b;S===(h.ownerDocument||m)&&J.push(S.defaultView||S.parentWindow||t)}for(x=0;(b=J[x++])&&!s.isPropagationStopped();)ht=b,s.type=x>1?N:it.bindType||vt,H=(K.get(b,"events")||Object.create(null))[s.type]&&K.get(b,"handle"),H&&H.apply(b,a),H=I&&b[I],H&&H.apply&&$(b)&&(s.result=H.apply(b,a),s.result===!1&&s.preventDefault());return s.type=vt,!p&&!s.isDefaultPrevented()&&(!it._default||it._default.apply(J.pop(),a)===!1)&&$(h)&&I&&T(h[vt])&&!y(h)&&(S=h[I],S&&(h[I]=null),u.event.triggered=vt,s.isPropagationStopped()&&ht.addEventListener(vt,gu),h[vt](),s.isPropagationStopped()&&ht.removeEventListener(vt,gu),u.event.triggered=void 0,S&&(h[I]=S)),s.result}},simulate:function(s,a,h){var p=u.extend(new u.Event,h,{type:s,isSimulated:!0});u.event.trigger(p,null,a)}}),u.fn.extend({trigger:function(s,a){return this.each(function(){u.event.trigger(s,a,this)})},triggerHandler:function(s,a){var h=this[0];if(h)return u.event.trigger(s,a,h,!0)}});var Xp=/\[\]$/,vu=/\r?\n/g,qp=/^(?:submit|button|image|reset|file)$/i,Yp=/^(?:input|select|textarea|keygen)/i;function La(s,a,h,p){var x;if(Array.isArray(a))u.each(a,function(b,S){h||Xp.test(s)?p(s,S):La(s+"["+(typeof S=="object"&&S!=null?b:"")+"]",S,h,p)});else if(!h&&R(a)==="object")for(x in a)La(s+"["+x+"]",a[x],h,p);else p(s,a)}u.param=function(s,a){var h,p=[],x=function(b,S){var N=T(S)?S():S;p[p.length]=encodeURIComponent(b)+"="+encodeURIComponent(N??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!u.isPlainObject(s))u.each(s,function(){x(this.name,this.value)});else for(h in s)La(h,s[h],a,x);return p.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=u.prop(this,"elements");return s?u.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!u(this).is(":disabled")&&Yp.test(this.nodeName)&&!qp.test(s)&&(this.checked||!gt.test(s))}).map(function(s,a){var h=u(this).val();return h==null?null:Array.isArray(h)?u.map(h,function(p){return{name:a.name,value:p.replace(vu,`\r
`)}}):{name:a.name,value:h.replace(vu,`\r
`)}}).get()}});var $p=/%20/g,Kp=/#.*$/,Zp=/([?&])_=[^&]*/,Jp=/^(.*?):[ \t]*([^\r\n]*)$/mg,Qp=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,tf=/^(?:GET|HEAD)$/,ef=/^\/\//,_u={},Ia={},xu="*/".concat("*"),Ua=m.createElement("a");Ua.href=Cs.href;function bu(s){return function(a,h){typeof a!="string"&&(h=a,a="*");var p,x=0,b=a.toLowerCase().match(nt)||[];if(T(h))for(;p=b[x++];)p[0]==="+"?(p=p.slice(1)||"*",(s[p]=s[p]||[]).unshift(h)):(s[p]=s[p]||[]).push(h)}}function yu(s,a,h,p){var x={},b=s===Ia;function S(N){var I;return x[N]=!0,u.each(s[N]||[],function(H,it){var ht=it(a,h,p);if(typeof ht=="string"&&!b&&!x[ht])return a.dataTypes.unshift(ht),S(ht),!1;if(b)return!(I=ht)}),I}return S(a.dataTypes[0])||!x["*"]&&S("*")}function Na(s,a){var h,p,x=u.ajaxSettings.flatOptions||{};for(h in a)a[h]!==void 0&&((x[h]?s:p||(p={}))[h]=a[h]);return p&&u.extend(!0,s,p),s}function nf(s,a,h){for(var p,x,b,S,N=s.contents,I=s.dataTypes;I[0]==="*";)I.shift(),p===void 0&&(p=s.mimeType||a.getResponseHeader("Content-Type"));if(p){for(x in N)if(N[x]&&N[x].test(p)){I.unshift(x);break}}if(I[0]in h)b=I[0];else{for(x in h){if(!I[0]||s.converters[x+" "+I[0]]){b=x;break}S||(S=x)}b=b||S}if(b)return b!==I[0]&&I.unshift(b),h[b]}function rf(s,a,h,p){var x,b,S,N,I,H={},it=s.dataTypes.slice();if(it[1])for(S in s.converters)H[S.toLowerCase()]=s.converters[S];for(b=it.shift();b;)if(s.responseFields[b]&&(h[s.responseFields[b]]=a),!I&&p&&s.dataFilter&&(a=s.dataFilter(a,s.dataType)),I=b,b=it.shift(),b){if(b==="*")b=I;else if(I!=="*"&&I!==b){if(S=H[I+" "+b]||H["* "+b],!S){for(x in H)if(N=x.split(" "),N[1]===b&&(S=H[I+" "+N[0]]||H["* "+N[0]],S)){S===!0?S=H[x]:H[x]!==!0&&(b=N[0],it.unshift(N[1]));break}}if(S!==!0)if(S&&s.throws)a=S(a);else try{a=S(a)}catch(ht){return{state:"parsererror",error:S?ht:"No conversion from "+I+" to "+b}}}}return{state:"success",data:a}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Cs.href,type:"GET",isLocal:Qp.test(Cs.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":xu,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,a){return a?Na(Na(s,u.ajaxSettings),a):Na(u.ajaxSettings,s)},ajaxPrefilter:bu(_u),ajaxTransport:bu(Ia),ajax:function(s,a){typeof s=="object"&&(a=s,s=void 0),a=a||{};var h,p,x,b,S,N,I,H,it,ht,J=u.ajaxSetup({},a),vt=J.context||J,ie=J.context&&(vt.nodeType||vt.jquery)?u(vt):u.event,Ae=u.Deferred(),he=u.Callbacks("once memory"),mn=J.statusCode||{},on={},ei={},ni="canceled",Te={readyState:0,getResponseHeader:function(Pe){var Je;if(I){if(!b)for(b={};Je=Jp.exec(x);)b[Je[1].toLowerCase()+" "]=(b[Je[1].toLowerCase()+" "]||[]).concat(Je[2]);Je=b[Pe.toLowerCase()+" "]}return Je==null?null:Je.join(", ")},getAllResponseHeaders:function(){return I?x:null},setRequestHeader:function(Pe,Je){return I==null&&(Pe=ei[Pe.toLowerCase()]=ei[Pe.toLowerCase()]||Pe,on[Pe]=Je),this},overrideMimeType:function(Pe){return I==null&&(J.mimeType=Pe),this},statusCode:function(Pe){var Je;if(Pe)if(I)Te.always(Pe[Te.status]);else for(Je in Pe)mn[Je]=[mn[Je],Pe[Je]];return this},abort:function(Pe){var Je=Pe||ni;return h&&h.abort(Je),ur(0,Je),this}};if(Ae.promise(Te),J.url=((s||J.url||Cs.href)+"").replace(ef,Cs.protocol+"//"),J.type=a.method||a.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(nt)||[""],J.crossDomain==null){N=m.createElement("a");try{N.href=J.url,N.href=N.href,J.crossDomain=Ua.protocol+"//"+Ua.host!=N.protocol+"//"+N.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=u.param(J.data,J.traditional)),yu(_u,J,a,Te),I)return Te;H=u.event&&J.global,H&&u.active++===0&&u.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!tf.test(J.type),p=J.url.replace(Kp,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace($p,"+")):(ht=J.url.slice(p.length),J.data&&(J.processData||typeof J.data=="string")&&(p+=(Da.test(p)?"&":"?")+J.data,delete J.data),J.cache===!1&&(p=p.replace(Zp,"$1"),ht=(Da.test(p)?"&":"?")+"_="+fu.guid+++ht),J.url=p+ht),J.ifModified&&(u.lastModified[p]&&Te.setRequestHeader("If-Modified-Since",u.lastModified[p]),u.etag[p]&&Te.setRequestHeader("If-None-Match",u.etag[p])),(J.data&&J.hasContent&&J.contentType!==!1||a.contentType)&&Te.setRequestHeader("Content-Type",J.contentType),Te.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+xu+"; q=0.01":""):J.accepts["*"]);for(it in J.headers)Te.setRequestHeader(it,J.headers[it]);if(J.beforeSend&&(J.beforeSend.call(vt,Te,J)===!1||I))return Te.abort();if(ni="abort",he.add(J.complete),Te.done(J.success),Te.fail(J.error),h=yu(Ia,J,a,Te),!h)ur(-1,"No Transport");else{if(Te.readyState=1,H&&ie.trigger("ajaxSend",[Te,J]),I)return Te;J.async&&J.timeout>0&&(S=t.setTimeout(function(){Te.abort("timeout")},J.timeout));try{I=!1,h.send(on,ur)}catch(Pe){if(I)throw Pe;ur(-1,Pe)}}function ur(Pe,Je,Ps,Fa){var ii,Rs,ri,Vi,zi,zn=Je;I||(I=!0,S&&t.clearTimeout(S),h=void 0,x=Fa||"",Te.readyState=Pe>0?4:0,ii=Pe>=200&&Pe<300||Pe===304,Ps&&(Vi=nf(J,Te,Ps)),!ii&&u.inArray("script",J.dataTypes)>-1&&u.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),Vi=rf(J,Vi,Te,ii),ii?(J.ifModified&&(zi=Te.getResponseHeader("Last-Modified"),zi&&(u.lastModified[p]=zi),zi=Te.getResponseHeader("etag"),zi&&(u.etag[p]=zi)),Pe===204||J.type==="HEAD"?zn="nocontent":Pe===304?zn="notmodified":(zn=Vi.state,Rs=Vi.data,ri=Vi.error,ii=!ri)):(ri=zn,(Pe||!zn)&&(zn="error",Pe<0&&(Pe=0))),Te.status=Pe,Te.statusText=(Je||zn)+"",ii?Ae.resolveWith(vt,[Rs,zn,Te]):Ae.rejectWith(vt,[Te,zn,ri]),Te.statusCode(mn),mn=void 0,H&&ie.trigger(ii?"ajaxSuccess":"ajaxError",[Te,J,ii?Rs:ri]),he.fireWith(vt,[Te,zn]),H&&(ie.trigger("ajaxComplete",[Te,J]),--u.active||u.event.trigger("ajaxStop")))}return Te},getJSON:function(s,a,h){return u.get(s,a,h,"json")},getScript:function(s,a){return u.get(s,void 0,a,"script")}}),u.each(["get","post"],function(s,a){u[a]=function(h,p,x,b){return T(p)&&(b=b||x,x=p,p=void 0),u.ajax(u.extend({url:h,type:a,dataType:b,data:p,success:x},u.isPlainObject(h)&&h))}}),u.ajaxPrefilter(function(s){var a;for(a in s.headers)a.toLowerCase()==="content-type"&&(s.contentType=s.headers[a]||"")}),u._evalUrl=function(s,a,h){return u.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){u.globalEval(p,a,h)}})},u.fn.extend({wrapAll:function(s){var a;return this[0]&&(T(s)&&(s=s.call(this[0])),a=u(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return T(s)?this.each(function(a){u(this).wrapInner(s.call(this,a))}):this.each(function(){var a=u(this),h=a.contents();h.length?h.wrapAll(s):a.append(s)})},wrap:function(s){var a=T(s);return this.each(function(h){u(this).wrapAll(a?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(s){return!u.expr.pseudos.visible(s)},u.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch{}};var sf={0:200,1223:204},As=u.ajaxSettings.xhr();E.cors=!!As&&"withCredentials"in As,E.ajax=As=!!As,u.ajaxTransport(function(s){var a,h;if(E.cors||As&&!s.crossDomain)return{send:function(p,x){var b,S=s.xhr();if(S.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(b in s.xhrFields)S[b]=s.xhrFields[b];s.mimeType&&S.overrideMimeType&&S.overrideMimeType(s.mimeType),!s.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(b in p)S.setRequestHeader(b,p[b]);a=function(N){return function(){a&&(a=h=S.onload=S.onerror=S.onabort=S.ontimeout=S.onreadystatechange=null,N==="abort"?S.abort():N==="error"?typeof S.status!="number"?x(0,"error"):x(S.status,S.statusText):x(sf[S.status]||S.status,S.statusText,(S.responseType||"text")!=="text"||typeof S.responseText!="string"?{binary:S.response}:{text:S.responseText},S.getAllResponseHeaders()))}},S.onload=a(),h=S.onerror=S.ontimeout=a("error"),S.onabort!==void 0?S.onabort=h:S.onreadystatechange=function(){S.readyState===4&&t.setTimeout(function(){a&&h()})},a=a("abort");try{S.send(s.hasContent&&s.data||null)}catch(N){if(a)throw N}},abort:function(){a&&a()}}}),u.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return u.globalEval(s),s}}}),u.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),u.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var a,h;return{send:function(p,x){a=u("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(b){a.remove(),h=null,b&&x(b.type==="error"?404:200,b.type)}),m.head.appendChild(a[0])},abort:function(){h&&h()}}}});var wu=[],Oa=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=wu.pop()||u.expando+"_"+fu.guid++;return this[s]=!0,s}}),u.ajaxPrefilter("json jsonp",function(s,a,h){var p,x,b,S=s.jsonp!==!1&&(Oa.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Oa.test(s.data)&&"data");if(S||s.dataTypes[0]==="jsonp")return p=s.jsonpCallback=T(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,S?s[S]=s[S].replace(Oa,"$1"+p):s.jsonp!==!1&&(s.url+=(Da.test(s.url)?"&":"?")+s.jsonp+"="+p),s.converters["script json"]=function(){return b||u.error(p+" was not called"),b[0]},s.dataTypes[0]="json",x=t[p],t[p]=function(){b=arguments},h.always(function(){x===void 0?u(t).removeProp(p):t[p]=x,s[p]&&(s.jsonpCallback=a.jsonpCallback,wu.push(p)),b&&T(x)&&x(b[0]),b=x=void 0}),"script"}),E.createHTMLDocument=function(){var s=m.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),u.parseHTML=function(s,a,h){if(typeof s!="string")return[];typeof a=="boolean"&&(h=a,a=!1);var p,x,b;return a||(E.createHTMLDocument?(a=m.implementation.createHTMLDocument(""),p=a.createElement("base"),p.href=m.location.href,a.head.appendChild(p)):a=m),x=Kt.exec(s),b=!h&&[],x?[a.createElement(x[1])]:(x=Mn([s],a,b),b&&b.length&&u(b).remove(),u.merge([],x.childNodes))},u.fn.load=function(s,a,h){var p,x,b,S=this,N=s.indexOf(" ");return N>-1&&(p=lr(s.slice(N)),s=s.slice(0,N)),T(a)?(h=a,a=void 0):a&&typeof a=="object"&&(x="POST"),S.length>0&&u.ajax({url:s,type:x||"GET",dataType:"html",data:a}).done(function(I){b=arguments,S.html(p?u("<div>").append(u.parseHTML(I)).find(p):I)}).always(h&&function(I,H){S.each(function(){h.apply(this,b||[I.responseText,H,I])})}),this},u.expr.pseudos.animated=function(s){return u.grep(u.timers,function(a){return s===a.elem}).length},u.offset={setOffset:function(s,a,h){var p,x,b,S,N,I,H,it=u.css(s,"position"),ht=u(s),J={};it==="static"&&(s.style.position="relative"),N=ht.offset(),b=u.css(s,"top"),I=u.css(s,"left"),H=(it==="absolute"||it==="fixed")&&(b+I).indexOf("auto")>-1,H?(p=ht.position(),S=p.top,x=p.left):(S=parseFloat(b)||0,x=parseFloat(I)||0),T(a)&&(a=a.call(s,h,u.extend({},N))),a.top!=null&&(J.top=a.top-N.top+S),a.left!=null&&(J.left=a.left-N.left+x),"using"in a?a.using.call(s,J):ht.css(J)}},u.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(x){u.offset.setOffset(this,s,x)});var a,h,p=this[0];if(p)return p.getClientRects().length?(a=p.getBoundingClientRect(),h=p.ownerDocument.defaultView,{top:a.top+h.pageYOffset,left:a.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,a,h,p=this[0],x={top:0,left:0};if(u.css(p,"position")==="fixed")a=p.getBoundingClientRect();else{for(a=this.offset(),h=p.ownerDocument,s=p.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&u.css(s,"position")==="static";)s=s.parentNode;s&&s!==p&&s.nodeType===1&&(x=u(s).offset(),x.top+=u.css(s,"borderTopWidth",!0),x.left+=u.css(s,"borderLeftWidth",!0))}return{top:a.top-x.top-u.css(p,"marginTop",!0),left:a.left-x.left-u.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&u.css(s,"position")==="static";)s=s.offsetParent;return s||Yt})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,a){var h=a==="pageYOffset";u.fn[s]=function(p){return Ft(this,function(x,b,S){var N;if(y(x)?N=x:x.nodeType===9&&(N=x.defaultView),S===void 0)return N?N[a]:x[b];N?N.scrollTo(h?N.pageXOffset:S,h?S:N.pageYOffset):x[b]=S},s,p,arguments.length)}}),u.each(["top","left"],function(s,a){u.cssHooks[a]=tt(E.pixelPosition,function(h,p){if(p)return p=Q(h,a),Es.test(p)?u(h).position()[a]+"px":p})}),u.each({Height:"height",Width:"width"},function(s,a){u.each({padding:"inner"+s,content:a,"":"outer"+s},function(h,p){u.fn[p]=function(x,b){var S=arguments.length&&(h||typeof x!="boolean"),N=h||(x===!0||b===!0?"margin":"border");return Ft(this,function(I,H,it){var ht;return y(I)?p.indexOf("outer")===0?I["inner"+s]:I.document.documentElement["client"+s]:I.nodeType===9?(ht=I.documentElement,Math.max(I.body["scroll"+s],ht["scroll"+s],I.body["offset"+s],ht["offset"+s],ht["client"+s])):it===void 0?u.css(I,H,N):u.style(I,H,it,N)},a,S?x:void 0,S)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,a){u.fn[a]=function(h){return this.on(a,h)}}),u.fn.extend({bind:function(s,a,h){return this.on(s,null,a,h)},unbind:function(s,a){return this.off(s,null,a)},delegate:function(s,a,h,p){return this.on(a,s,h,p)},undelegate:function(s,a,h){return arguments.length===1?this.off(s,"**"):this.off(a,s||"**",h)},hover:function(s,a){return this.on("mouseenter",s).on("mouseleave",a||s)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,a){u.fn[a]=function(h,p){return arguments.length>0?this.on(a,null,h,p):this.trigger(a)}});var of=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(s,a){var h,p,x;if(typeof a=="string"&&(h=s[a],a=s,s=h),!!T(s))return p=o.call(arguments,2),x=function(){return s.apply(a||this,p.concat(o.call(arguments)))},x.guid=s.guid=s.guid||u.guid++,x},u.holdReady=function(s){s?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=P,u.isFunction=T,u.isWindow=y,u.camelCase=M,u.type=R,u.now=Date.now,u.isNumeric=function(s){var a=u.type(s);return(a==="number"||a==="string")&&!isNaN(s-parseFloat(s))},u.trim=function(s){return s==null?"":(s+"").replace(of,"$1")};var af=t.jQuery,lf=t.$;return u.noConflict=function(s){return t.$===u&&(t.$=lf),s&&t.jQuery===u&&(t.jQuery=af),u},typeof e>"u"&&(t.jQuery=t.$=u),u})}(sa)),sa.exports}var eb=tb();const bc=Jx(eb);function nb(n,t,e,i){const r=[],l=new fa({color:1401481}),c=new fa({color:733506});function d(nt){n.add(nt.mesh),t.add(nt),r.push(nt)}function f(nt,Be,Se){const ne=[],F=Be.clone().normalize();for(let Xe=0;Xe<Se;Xe++){const ae=nt.clone().add(F.clone().multiplyScalar(Xe*1)),re=new xc(F,l,c);re.setPosition(ae.x,0,ae.z),ne.push(re),Xe-1>=0&&ne[Xe-1].addCollidable(re)}return ne}function g(nt,Be,Se=3,ne=6,F=!0){const Xe=[],ae=Be.clone().normalize(),re=F?-1:1,Ft=new V().crossVectors(wr,ae).normalize().multiplyScalar(re),Oe=nt.clone().add(Ft.clone().multiplyScalar(Se)),Ht=Math.PI/2/(ne-1);for(let L=0;L<ne;++L){const M=L*Ht,$=Oe.clone().add(Ft.clone().multiplyScalar(-1*Se*Math.cos(M))).add(Be.clone().multiplyScalar(Se*Math.sin(M))),pt=Ft.clone().multiplyScalar(Math.sin(M)).add(ae.clone().multiplyScalar(Math.cos(M))).normalize(),K=new xc(pt,l,c);K.setPosition($.x,0,$.z),Xe.push(K),L>0&&Xe[L-1].addCollidable(Xe[L])}return Xe}const v=f(e,i,10);v.map(nt=>d(nt));const _=g(v[v.length-1].mesh.position.clone().add(i.clone().normalize().multiplyScalar(1)).add(new V(0,0,.5)),i);v[v.length-1].addCollidable(_[0]),_.map(nt=>d(nt));const w=g(v[v.length-1].mesh.position.clone().add(i.clone().normalize().multiplyScalar(1)).add(new V(0,0,-.5)),i,3,6,!1);v[v.length-1].addCollidable(w[0]),w.map(nt=>d(nt));const E=f(_[_.length-1].mesh.position.clone().add(_[_.length-1].fwdAxis.clone().multiplyScalar(1)),_[_.length-1].fwdAxis,10);_[_.length-1].addCollidable(E[0]),E.map(nt=>d(nt));const T=f(w[w.length-1].mesh.position.clone().add(w[w.length-1].fwdAxis.clone().multiplyScalar(1)),w[w.length-1].fwdAxis,10);w[w.length-1].addCollidable(T[0]),T.map(nt=>d(nt));const y=g(E[E.length-1].mesh.position.clone().add(E[E.length-1].fwdAxis.clone().multiplyScalar(1)),E[E.length-1].fwdAxis);E[E.length-1].addCollidable(y[0]),y.map(nt=>d(nt));const m=g(T[T.length-1].mesh.position.clone().add(T[T.length-1].fwdAxis.clone().multiplyScalar(1)),T[T.length-1].fwdAxis,3,6,!1);T[T.length-1].addCollidable(m[0]),m.map(nt=>d(nt));const O=f(y[y.length-1].mesh.position.clone().add(y[y.length-1].fwdAxis.clone().multiplyScalar(1)),y[y.length-1].fwdAxis,20);y[y.length-1].addCollidable(O[0]),O.map(nt=>d(nt));const U=f(m[m.length-1].mesh.position.clone().add(m[m.length-1].fwdAxis.clone().multiplyScalar(1)),m[m.length-1].fwdAxis,20);m[m.length-1].addCollidable(U[0]),U.map(nt=>d(nt));const R=g(O[O.length-1].mesh.position.clone().add(O[O.length-1].fwdAxis.clone().multiplyScalar(1)),O[O.length-1].fwdAxis);O[O.length-1].addCollidable(R[0]),R.map(nt=>d(nt));const W=g(U[U.length-1].mesh.position.clone().add(U[U.length-1].fwdAxis.clone().multiplyScalar(1)),U[U.length-1].fwdAxis,3,6,!1);U[U.length-1].addCollidable(W[0]),W.map(nt=>d(nt));const z=f(R[R.length-1].mesh.position.clone().add(R[R.length-1].fwdAxis.clone().multiplyScalar(1)),R[R.length-1].fwdAxis,3);R[R.length-1].addCollidable(z[0]),z.map(nt=>d(nt));const u=f(W[W.length-1].mesh.position.clone().add(W[W.length-1].fwdAxis.clone().multiplyScalar(1)),W[W.length-1].fwdAxis,3);W[W.length-1].addCollidable(u[0]),u.map(nt=>d(nt));const q=g(z[z.length-1].mesh.position.clone().add(z[z.length-1].fwdAxis.clone().multiplyScalar(1)),z[z.length-1].fwdAxis);z[z.length-1].addCollidable(q[0]),q.map(nt=>d(nt));const P=g(u[u.length-1].mesh.position.clone().add(u[u.length-1].fwdAxis.clone().multiplyScalar(1)),u[u.length-1].fwdAxis,3,6,!1);u[u.length-1].addCollidable(P[0]),P.map(nt=>d(nt));const A=f(q[q.length-1].mesh.position.clone().add(q[q.length-1].fwdAxis.clone().multiplyScalar(1)),q[q.length-1].fwdAxis,5);q[q.length-1].addCollidable(A[0]),A.map(nt=>d(nt));const k=f(P[P.length-1].mesh.position.clone().add(P[P.length-1].fwdAxis.clone().multiplyScalar(1)),P[P.length-1].fwdAxis,5);P[P.length-1].addCollidable(k[0]),k.map(nt=>d(nt));const st=g(A[A.length-1].mesh.position.clone().add(A[A.length-1].fwdAxis.clone().multiplyScalar(1)).add(new V(0,0,.5)),A[A.length-1].fwdAxis,2,4);A[A.length-1].addCollidable(st[0]),st.map(nt=>d(nt));const Y=g(A[A.length-1].mesh.position.clone().add(A[A.length-1].fwdAxis.clone().multiplyScalar(1)).add(new V(0,0,-.5)),A[A.length-1].fwdAxis,1,3,!1);A[A.length-1].addCollidable(Y[0]),Y.map(nt=>d(nt));const dt=g(k[k.length-1].mesh.position.clone().add(k[k.length-1].fwdAxis.clone().multiplyScalar(1)).add(new V(0,0,.5)),k[k.length-1].fwdAxis,1,3);k[k.length-1].addCollidable(dt[0]),dt.map(nt=>d(nt));const ut=g(k[k.length-1].mesh.position.clone().add(k[k.length-1].fwdAxis.clone().multiplyScalar(1)).add(new V(0,0,-.5)),k[k.length-1].fwdAxis,2,4,!1);k[k.length-1].addCollidable(ut[0]),ut.map(nt=>d(nt));const lt=g(dt[dt.length-1].mesh.position.clone().add(dt[dt.length-1].fwdAxis.clone().multiplyScalar(1)),dt[dt.length-1].fwdAxis,1,3);dt[dt.length-1].addCollidable(lt[0]),lt.map(nt=>d(nt));const ft=g(Y[Y.length-1].mesh.position.clone().add(Y[Y.length-1].fwdAxis.clone().multiplyScalar(1)),Y[Y.length-1].fwdAxis,1,3,!1);Y[Y.length-1].addCollidable(ft[0]),ft.map(nt=>d(nt));const ot=f(lt[lt.length-1].mesh.position.clone().add(lt[lt.length-1].fwdAxis.clone().multiplyScalar(1)),lt[lt.length-1].fwdAxis,10);lt[lt.length-1].addCollidable(ot[0]),ot.map(nt=>d(nt));const St=f(ft[ft.length-1].mesh.position.clone().add(ft[ft.length-1].fwdAxis.clone().multiplyScalar(1)),ft[ft.length-1].fwdAxis,10);ft[ft.length-1].addCollidable(St[0]),St.map(nt=>d(nt));const Et=g(ut[ut.length-1].mesh.position.clone().add(ut[ut.length-1].fwdAxis.clone().multiplyScalar(1)).add(new V(.5,0,0)),ut[ut.length-1].fwdAxis,2,4);ut[ut.length-1].addCollidable(Et[0]),Et.map(nt=>d(nt));const Ot=g(ut[ut.length-1].mesh.position.clone().add(ut[ut.length-1].fwdAxis.clone().multiplyScalar(1)).add(new V(-.5,0,0)),ut[ut.length-1].fwdAxis,2,4,!1);ut[ut.length-1].addCollidable(Ot[0]),Ot.map(nt=>d(nt));const Kt=g(st[st.length-1].mesh.position.clone().add(st[st.length-1].fwdAxis.clone().multiplyScalar(1)).add(new V(-.5,0,0)),st[st.length-1].fwdAxis,2,4);st[st.length-1].addCollidable(Kt[0]),Kt.map(nt=>d(nt));const le=g(st[st.length-1].mesh.position.clone().add(st[st.length-1].fwdAxis.clone().multiplyScalar(1)).add(new V(.5,0,0)),st[st.length-1].fwdAxis,2,4,!1);st[st.length-1].addCollidable(le[0]),le.map(nt=>d(nt));const mt=f(Ot[Ot.length-1].mesh.position.clone().add(Ot[Ot.length-1].fwdAxis.clone().multiplyScalar(1)),Ot[Ot.length-1].fwdAxis,5);Ot[Ot.length-1].addCollidable(mt[0]),mt.map(nt=>d(nt));const bt=f(Kt[Kt.length-1].mesh.position.clone().add(Kt[Kt.length-1].fwdAxis.clone().multiplyScalar(1)),Kt[Kt.length-1].fwdAxis,5);Kt[Kt.length-1].addCollidable(bt[0]),bt.map(nt=>d(nt));const Rt=f(Et[Et.length-1].mesh.position.clone().add(Et[Et.length-1].fwdAxis.clone().multiplyScalar(1)),Et[Et.length-1].fwdAxis,5);Et[Et.length-1].addCollidable(Rt[0]),Rt.map(nt=>d(nt));const yt=f(le[le.length-1].mesh.position.clone().add(le[le.length-1].fwdAxis.clone().multiplyScalar(1)),le[le.length-1].fwdAxis,5);le[le.length-1].addCollidable(yt[0]),yt.map(nt=>d(nt));const Xt=g(Rt[Rt.length-1].mesh.position.clone().add(Rt[Rt.length-1].fwdAxis.clone().multiplyScalar(1)),Rt[Rt.length-1].fwdAxis,5,8);Rt[Rt.length-1].addCollidable(Xt[0]),Xt.map(nt=>d(nt));const ge=g(yt[yt.length-1].mesh.position.clone().add(yt[yt.length-1].fwdAxis.clone().multiplyScalar(1)),yt[yt.length-1].fwdAxis,5,8,!1);return yt[yt.length-1].addCollidable(ge[0]),ge.map(nt=>d(nt)),r}class ib{constructor(t){fe(this,"scene");fe(this,"lights");fe(this,"helpers");fe(this,"pointLight",new ih);fe(this,"spotLight",new Wo);fe(this,"trackingSpotlight",new Wo);fe(this,"trackingSpotlightHelper",new gl(this.trackingSpotlight));fe(this,"currentMovingObject",null);fe(this,"targetPosition",new V);fe(this,"currentTargetPosition",new V);fe(this,"transitionSpeed",1);fe(this,"clock");this.scene=t,this.lights=[],this.helpers=[],this.clock=new Nd,this.setupLighting()}setupLighting(){this.pointLight=new ih(new we(16777215),500,50),this.pointLight.position.set(0,25,0),this.pointLight.castShadow=!0,this.pointLight.shadow.mapSize.width=1024,this.pointLight.shadow.mapSize.height=1024,this.lights.push(this.pointLight),this.scene.add(this.pointLight);const t=new qm(this.pointLight,1);t.visible=!1,this.scene.add(t),this.helpers.push(t),this.spotLight=new Wo(new we(16776960),100),this.spotLight.position.set(0,15,-10),this.spotLight.target.position.set(0,0,0),this.spotLight.angle=Math.PI/8,this.spotLight.penumbra=.2,this.spotLight.decay=1.5,this.spotLight.distance=50,this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.width=1024,this.spotLight.shadow.mapSize.height=1024,this.lights.push(this.spotLight),this.scene.add(this.spotLight),this.scene.add(this.spotLight.target);const e=new gl(this.spotLight);e.visible=!1,this.scene.add(e),this.helpers.push(e),this.trackingSpotlight=new Wo(new we(43775),50),this.trackingSpotlight.visible=!0,this.trackingSpotlight.position.set(15,15,5),this.trackingSpotlight.angle=Math.PI/25,this.trackingSpotlight.penumbra=.05,this.trackingSpotlight.decay=1,this.trackingSpotlight.distance=40,this.trackingSpotlight.castShadow=!0,this.trackingSpotlight.shadow.mapSize.width=1024,this.trackingSpotlight.shadow.mapSize.height=1024,this.trackingSpotlight.target.position.set(0,0,0),this.targetPosition.copy(this.trackingSpotlight.target.position),this.currentTargetPosition.copy(this.trackingSpotlight.target.position),this.scene.add(this.trackingSpotlight),this.scene.add(this.trackingSpotlight.target),this.lights.push(this.trackingSpotlight),this.trackingSpotlightHelper=new gl(this.trackingSpotlight),this.trackingSpotlightHelper.visible=!1,this.scene.add(this.trackingSpotlightHelper),this.helpers.push(this.trackingSpotlightHelper)}togglePointLight(){this.pointLight.visible=!this.pointLight.visible}toggleSpotLight(){this.spotLight.visible=!this.spotLight.visible}toggleTrackingSpotlight(){this.trackingSpotlight.visible=!this.trackingSpotlight.visible}toggleHelpers(){this.helpers.forEach(t=>{t.visible=!t.visible})}setTrackingObject(t){this.currentMovingObject=t,t&&this.targetPosition.copy(t.position)}updateTrackingSpotlight(){const t=this.clock.getDelta();this.currentMovingObject&&this.targetPosition.copy(this.currentMovingObject.position);const e=Math.min(1,this.transitionSpeed*t);this.currentTargetPosition.lerp(this.targetPosition,e),this.trackingSpotlight.target.position.copy(this.currentTargetPosition),this.trackingSpotlightHelper&&this.trackingSpotlightHelper.update()}}/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function je(n){return n==null}function Hc(n){return n!==null&&typeof n=="object"}function yc(n){return n!==null&&typeof n=="object"}function rb(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Pr(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,r)=>{const o=n[r],l=t[r];return yc(o)&&yc(l)?Object.assign(Object.assign({},i),{[r]:Pr(o,l)}):Object.assign(Object.assign({},i),{[r]:r in t?l:o})},{})}function Gc(n){return Hc(n)?"target"in n:!1}const sb={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Qe{static alreadyDisposed(){return new Qe({type:"alreadydisposed"})}static notBindable(){return new Qe({type:"notbindable"})}static notCompatible(t,e){return new Qe({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new Qe({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new Qe({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=sb[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class ma{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!ma.isBindable(i))throw Qe.notBindable();if(!(t in i))throw Qe.propertyNotFound(t);i[t]=e}}class rn{constructor(){this.observers_={}}on(t,e,i){var r;let o=this.observers_[t];return o||(o=this.observers_[t]=[]),o.push({handler:e,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(e)})}}class ob{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(r,o)=>r===o,this.emitter=new rn,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,o=this.rawValue_;this.equals_(o,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:o,rawValue:r,sender:this}))}}class ab{constructor(t){this.emitter=new rn,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class lb{constructor(t){this.emitter=new rn,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function $e(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new ab(n):new ob(n,t)}function cb(n){return[new lb(n),(t,e)=>{n.setRawValue(t,e)}]}class me{constructor(t){this.emitter=new rn,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:$e(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new me(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class ro{constructor(t){this.values=me.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class ub{constructor(t){this.values=me.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let r=t;return je(i)||(r=Math.max(r,i)),je(e)||(r=Math.min(r,e)),r}}class hb{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class db{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const pb={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class fb{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=pb[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const mb={"+":n=>n,"-":n=>-n,"~":n=>~n};class gb{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=mb[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Wc(n){return(t,e)=>{for(let i=0;i<n.length;i++){const r=n[i](t,e);if(r!=="")return r}return""}}function $s(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function vb(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function Ks(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function _b(n,t){const e=Ks(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=Ks(n,t);return r===""?"":i+r}function jc(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=_b(n,t);return i===""?"":e+i}function Wd(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=vb(n,t);return t+=i.length,i===""?"":i+Ks(n,t)}function xb(n,t){const e=Wd(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const r=Ks(n,t);return t+=r.length,e+i+r+jc(n,t)}function bb(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=Ks(n,t);return t+=i.length,i===""?"":e+i+jc(n,t)}function yb(n,t){const e=Wd(n,t);return t+=e.length,e===""?"":e+jc(n,t)}const wb=Wc([xb,bb,yb]);function Sb(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Eb(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=Sb(n,t);return i===""?"":e+i}function Mb(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Tb(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=Mb(n,t);return i===""?"":e+i}function Cb(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Ab(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=Cb(n,t);return i===""?"":e+i}const Pb=Wc([Eb,Tb,Ab]),Rb=Wc([Pb,wb]);function Db(n,t){const e=Rb(n,t);return t+=e.length,e===""?null:{evaluable:new db(e),cursor:t}}function Lb(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=Xd(n,t);if(!i)return null;t=i.cursor,t+=$s(n,t).length;const r=n.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function Ib(n,t){var e;return(e=Db(n,t))!==null&&e!==void 0?e:Lb(n,t)}function jd(n,t){const e=Ib(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=jd(n,t);return r?(t=r.cursor,{cursor:t,evaluable:new gb(i,r.evaluable)}):null}function Ub(n,t,e){e+=$s(t,e).length;const i=n.filter(r=>t.startsWith(r,e))[0];return i?(e+=i.length,e+=$s(t,e).length,{cursor:e,operator:i}):null}function Nb(n,t){return(e,i)=>{const r=n(e,i);if(!r)return null;i=r.cursor;let o=r.evaluable;for(;;){const l=Ub(t,e,i);if(!l)break;i=l.cursor;const c=n(e,i);if(!c)return null;i=c.cursor,o=new fb(l.operator,o,c.evaluable)}return o?{cursor:i,evaluable:o}:null}}const Ob=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>Nb(n,t),jd);function Xd(n,t){return t+=$s(n,t).length,Ob(n,t)}function Fb(n){const t=Xd(n,0);return!t||t.cursor+$s(n,t.cursor).length!==n.length?null:t.evaluable}function Ui(n){var t;const e=Fb(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function qd(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=Ui(n);if(!je(t))return t}return 0}function kb(n){return String(n)}function Un(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function Ne(n,t,e,i,r){const o=(n-t)/(e-t);return i+o*(r-i)}function Bh(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ln(n,t,e){return Math.min(Math.max(n,t),e)}function Yd(n,t){return(n%t+t)%t}function Bb(n,t){return je(n.step)?Math.max(Bh(t),2):Bh(n.step)}function $d(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function Kd(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function Zd(n,t){return je(n.step)?null:new hb(n.step,t)}function Jd(n){return!je(n.max)&&!je(n.min)?new ro({max:n.max,min:n.min}):!je(n.max)||!je(n.min)?new ub({max:n.max,min:n.min}):null}function Qd(n,t){var e,i,r;return{formatter:(e=n.format)!==null&&e!==void 0?e:Un(Bb(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:$d(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:Kd(n,t)}}function tp(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Xc(n){return{constraint:n.constraint,textProps:me.fromObject(Qd(n.params,n.initialValue))}}class Ir{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class Ma{constructor(t){this.target=t}}class so extends Ma{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class Vb extends Ma{constructor(t,e){super(t),this.expanded=e}}class zb extends Ma{constructor(t,e){super(t),this.index=e}}class Hb extends Ma{constructor(t,e){super(t),this.native=e}}class Zs extends Ir{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new rn,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new so(this,e.binding.target.read(),t.options.last))}}class Gb{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new rn}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function Wb(n){if(!("binding"in n))return!1;const t=n.binding;return Gc(t)&&"read"in t&&"write"in t}function jb(n,t){const i=Object.keys(t).reduce((r,o)=>{if(r===void 0)return;const l=t[o],c=l(n[o]);return c.succeeded?Object.assign(Object.assign({},r),{[o]:c.value}):void 0},{});return i}function Xb(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function qb(n){return n===null?!1:typeof n=="object"}function Ti(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function Vh(n){return{custom:t=>Ti(t)(n),boolean:Ti(t=>typeof t=="boolean"?t:void 0)(n),number:Ti(t=>typeof t=="number"?t:void 0)(n),string:Ti(t=>typeof t=="string"?t:void 0)(n),function:Ti(t=>typeof t=="function"?t:void 0)(n),constant:t=>Ti(e=>e===t?t:void 0)(n),raw:Ti(t=>t)(n),object:t=>Ti(e=>{if(qb(e))return jb(e,t)})(n),array:t=>Ti(e=>{if(Array.isArray(e))return Xb(e,t)})(n)}}const wc={optional:Vh(!0),required:Vh(!1)};function Ze(n,t){const e=t(wc),i=wc.required.object(e)(n);return i.succeeded?i.value:void 0}function kn(n,t,e,i){if(t&&!t(n))return!1;const r=Ze(n,e);return r?i(r):!1}function Bn(n,t){var e;return Pr((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function Mr(n){return"value"in n}function ep(n){if(!Hc(n)||!("binding"in n))return!1;const t=n.binding;return Gc(t)}const li="http://www.w3.org/2000/svg";function ga(n){n.offsetHeight}function Yb(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function qc(n){return n.ontouchstart!==void 0}function $b(){return globalThis}function Kb(){return $b().document}function Zb(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const Jb={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Ta(n,t){const e=n.createElementNS(li,"svg");return e.innerHTML=Jb[t],e}function np(n,t,e){n.insertBefore(t,n.children[e])}function Yc(n){n.parentElement&&n.parentElement.removeChild(n)}function ip(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function Qb(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function rp(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function Ii(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function di(n,t,e){Ii(n.value(t),e)}const ty="tp";function Re(n){return(e,i)=>[ty,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const Vs=Re("lbl");function ey(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(r=>n.createTextNode(r)).forEach((r,o)=>{o>0&&e.appendChild(n.createElement("br")),e.appendChild(r)}),e}class sp{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Vs()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Vs("l")),di(e.props,"label",o=>{je(o)?this.element.classList.add(Vs(void 0,"nol")):(this.element.classList.remove(Vs(void 0,"nol")),Qb(i),i.appendChild(ey(t,o)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(Vs("v")),this.element.appendChild(r),this.valueElement=r}}class op{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new sp(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return kn(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return Bn(null,{label:this.props.get("label")})}}function ny(){return["veryfirst","first","last","verylast"]}const zh=Re(""),Hh={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Ca{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{ny().forEach(i=>{e.classList.remove(zh(void 0,Hh[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(zh(void 0,Hh[i]))})}),this.viewProps.handleDispose(()=>{Yc(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return kn(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return Bn(null,Object.assign({},this.viewProps.exportState()))}}class Rr extends Ca{constructor(t,e){if(e.value!==e.valueController.value)throw Qe.shouldNeverHappen();const i=e.valueController.viewProps,r=new op(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new sp(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return kn(t,e=>{var i,r,o;return super.importState(e)&&this.labelController.importProps(e)&&((o=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&o!==void 0?o:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return Bn(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function Gh(n){const t=Object.assign({},n);return delete t.value,t}class ap extends Rr{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return kn(t,e=>super.importState(Gh(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return Bn(()=>Gh(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function iy(n){return Mr(n)&&ep(n.value)}class ry extends ap{importState(t){return kn(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function sy(n){return Mr(n)&&Wb(n.value)}function lp(n,t){for(;n.length<t;)n.push(void 0)}function oy(n){const t=[];return lp(t,n),t}function ay(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function ly(n,t){const e=[...ay(n),t];return e.length>n.length?e.splice(0,e.length-n.length):lp(e,n.length),e}class cy{constructor(t){this.emitter=new rn,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=$e(oy(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=ly(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function uy(n){if(!("binding"in n))return!1;const t=n.binding;return Gc(t)&&"read"in t&&!("write"in t)}class hy extends ap{exportState(){return Bn(()=>super.exportState(),{binding:{readonly:!0}})}}function dy(n){return Mr(n)&&uy(n.value)}class py extends Ir{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,o=>{i(new Hb(this,o.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function fy(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function _s(n,t){return e=>{fy(n,t,e)}}function $c(n,t){Ii(n,e=>{t.textContent=e??""})}const El=Re("btn");class my{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(El()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(El("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(El("t")),$c(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class gy{constructor(t,e){this.emitter=new rn,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new my(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return kn(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return Bn(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class Wh extends Ca{constructor(t,e){const i=new gy(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new op(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return kn(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return Bn(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class cp{constructor(t){const[e,i]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const xs=new cp("2.0.5");function En(n){return Object.assign({core:xs},n)}const vy=En({id:"button",type:"blade",accept(n){const t=Ze(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new Wh(n.document,{blade:n.blade,buttonProps:me.fromObject({title:n.params.title}),labelProps:me.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof Wh?new py(n.controller):null}});function _y(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function xy(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function by(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function yy(n){return Hc(n)?"refresh"in n&&typeof n.refresh=="function":!1}function wy(n,t){if(!ma.isBindable(n))throw Qe.notBindable();return new ma(n,t)}class Sy{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new rn,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const r=i??{},o=this.controller_.element.ownerDocument,l=this.pool_.createBinding(o,wy(t,e),r),c=this.pool_.createBindingApi(l);return this.add(c,r.index)}addFolder(t){return xy(this,t)}addButton(t){return _y(this,t)}addTab(t){return by(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{yy(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),r=ep(e.value)?e.value.binding:null;this.emitter_.emit("change",new so(i,r?r.target.read():e.value.rawValue,t.options.last))}}class Kc extends Ir{constructor(t,e){super(t),this.rackApi_=new Sy(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class Zc extends Ca{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return kn(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,r)=>i.importState(e.children[r])))}exportState(){return Bn(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function Sc(n){return"rackController"in n}class Ey{constructor(t){this.emitter=new rn,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw Qe.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(o=>{this.cache_.add(o)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function My(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(Mr(i)&&i.value===t)return i}return null}function Ty(n){return Sc(n)?n.rackController.rack.bcSet_:null}class Cy{constructor(t){var e,i;this.emitter=new rn,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Ey(Ty),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),Mr(i))i.value.emitter.on("change",this.onChildValueChange_);else if(Sc(i)){const r=i.rackController.rack;if(r){const o=r.emitter;o.on("layout",this.onRackLayout_),o.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(Mr(i))i.value.emitter.off("change",this.onChildValueChange_);else if(Sc(i)){const r=i.rackController.rack;if(r){const o=r.emitter;o.off("layout",this.onRackLayout_),o.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const o=[];r===e&&(o.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&o.push("veryfirst")),r===i&&(o.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&o.push("verylast")),r.blade.set("positions",o)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=My(this.find(Mr),t.sender);if(!e)throw Qe.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Jc{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new Cy({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&np(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Yc(t.bladeController.view.element)}}function bs(){return new me({positions:$e([],{equals:rb})})}class oo extends me{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=me.createCore(e);return new oo(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!je(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};di(this,"expanded",i),di(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ay(n,t){let e=0;return Yb(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),ga(t),e=t.clientHeight,n.set("temporaryExpanded",null),ga(t)}),e}function jh(n,t){t.style.height=n.styleHeight}function Qc(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),je(n.get("expandedHeight"))){const e=Ay(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),ga(t)}),n.emitter.on("change",()=>{jh(n,t)}),jh(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class up extends Kc{constructor(t,e){super(t,e),this.emitter_=new rn,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new Vb(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const hp=Re("cnt");class Py{constructor(t,e){var i;this.className_=Re((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),hp()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),di(this.foldable_,"completed",_s(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),di(e.props,"title",f=>{je(f)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const o=t.createElement("div");o.classList.add(this.className_("i")),this.element.appendChild(o);const l=t.createElement("div");l.classList.add(this.className_("t")),$c(e.props.value("title"),l),this.buttonElement.appendChild(l),this.titleElement=l;const c=t.createElement("div");c.classList.add(this.className_("m")),this.buttonElement.appendChild(c);const d=t.createElement("div");d.classList.add(this.className_("c")),this.element.appendChild(d),this.containerElement=d}}class Ec extends Zc{constructor(t,e){var i;const r=oo.create((i=e.expanded)!==null&&i!==void 0?i:!0),o=new Py(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Jc({blade:e.blade,element:o.containerElement,root:e.root,viewProps:e.viewProps}),view:o})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,Qc(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return kn(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return Bn(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Ry=En({id:"folder",type:"blade",accept(n){const t=Ze(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new Ec(n.document,{blade:n.blade,expanded:n.params.expanded,props:me.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Ec?new up(n.controller,n.pool):null}}),Dy=Re("");function Xh(n,t){return _s(n,Dy(void 0,t))}class Oi extends me{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=cb($e(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,r;const o=t??{};return new Oi(me.createCore({disabled:(e=o.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=o.hidden)!==null&&i!==void 0?i:!1,parent:(r=o.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){Ii(this.globalDisabled_,Xh(t,"disabled")),di(this,"hidden",Xh(t,"hidden"))}bindDisabled(t){Ii(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){Ii(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const qh=Re("tbp");class Ly{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(qh()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(qh("c")),this.element.appendChild(i),this.containerElement=i}}const zs=Re("tbi");class Iy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(zs()),e.viewProps.bindClassModifiers(this.element),di(e.props,"selected",o=>{o?this.element.classList.add(zs(void 0,"sel")):this.element.classList.remove(zs(void 0,"sel"))});const i=t.createElement("button");i.classList.add(zs("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(zs("t")),$c(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class Uy{constructor(t,e){this.emitter=new rn,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Iy(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Mc extends Zc{constructor(t,e){const i=new Ly(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Jc({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Uy(t,{props:e.itemProps,viewProps:Oi.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,di(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return kn(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return Bn(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class Ny extends Kc{constructor(t,e){super(t,e),this.emitter_=new rn,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new Mc(e,{blade:bs(),itemProps:me.fromObject({selected:!1,title:t.title}),props:me.fromObject({selected:!1}),viewProps:Oi.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new zb(this,t.rawValue))}}class Oy extends Kc{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const Yh=-1;class Fy{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=$e(!0),this.selectedIndex=$e(Yh),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Yh,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const Hs=Re("tab");class ky{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Hs(),hp()),e.viewProps.bindClassModifiers(this.element),Ii(e.empty,_s(this.element,Hs(void 0,"nop")));const i=t.createElement("div");i.classList.add(Hs("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(Hs("i")),this.element.appendChild(r);const o=t.createElement("div");o.classList.add(Hs("c")),this.element.appendChild(o),this.contentsElement=o}}class $h extends Zc{constructor(t,e){const i=new Fy,r=new ky(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new Jc({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const o=this.rackController.rack;o.emitter.on("add",this.onRackAdd_),o.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;np(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;Yc(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const dp=En({id:"tab",type:"blade",accept(n){const t=Ze(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new $h(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new Mc(n.document,{blade:bs(),itemProps:me.fromObject({selected:!1,title:e.title}),props:me.fromObject({selected:!1}),viewProps:Oi.create()});t.add(i)}),t},api(n){return n.controller instanceof $h?new Ny(n.controller,n.pool):n.controller instanceof Mc?new Oy(n.controller,n.pool):null}});function By(n,t){const e=n.accept(t.params);if(!e)return null;const i=Ze(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:bs(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:Oi.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class tu extends Zs{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class Vy{constructor(){this.disabled=!1,this.emitter=new rn}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class zy{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new rn,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ao{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function va(n,t){if(n instanceof t)return n;if(n instanceof ao){const e=n.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(e)return e}return null}class lo{constructor(t){this.values=me.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function co(n){var t;const e=wc;if(Array.isArray(n))return(t=Ze({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function eu(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function nu(n){return je(n)?null:new lo(eu(n))}const Ml=Re("lst");class Hy{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Ml()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(Ml("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(Ml("m")),r.appendChild(Ta(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,di(this.props_,"options",o=>{ip(this.selectElement),o.forEach(l=>{const c=t.createElement("option");c.textContent=l.text,this.selectElement.appendChild(c)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class ar{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Hy(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return kn(t,null,e=>({options:e.required.custom(co)}),e=>(this.props.set("options",eu(e.options)),!0))}exportProps(){return Bn(null,{options:this.props.get("options")})}}const Kh=Re("pop");class Gy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Kh()),e.viewProps.bindClassModifiers(this.element),Ii(e.shows,_s(this.element,Kh(void 0,"v")))}}class pp{constructor(t,e){this.shows=$e(!1),this.viewProps=e.viewProps,this.view=new Gy(t,{shows:this.shows,viewProps:this.viewProps})}}const Zh=Re("txt");class Wy{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Zh()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(Zh("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class Js{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Wy(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);je(r)||(this.value.rawValue=r),this.view.refresh()}}function jy(n){return String(n)}function fp(n){return n==="false"?!1:!!n}function Jh(n){return jy(n)}function Xy(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const qy=Un(0);function _a(n){return qy(n)+"%"}function mp(n){return String(n)}function Tc(n){return n}function ys({primary:n,secondary:t,forward:e,backward:i}){let r=!1;function o(l){r||(r=!0,l(),r=!1)}n.emitter.on("change",l=>{o(()=>{t.setRawValue(e(n.rawValue,t.rawValue),l.options)})}),t.emitter.on("change",l=>{o(()=>{n.setRawValue(i(n.rawValue,t.rawValue),l.options)}),o(()=>{t.setRawValue(e(n.rawValue,t.rawValue),l.options)})}),o(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function Dn(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function Qs(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Ni(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function Yy(n){return n==="ArrowUp"||n==="ArrowDown"}function gp(n){return Yy(n)||n==="ArrowLeft"||n==="ArrowRight"}function Tl(n,t){var e,i;const r=t.ownerDocument.defaultView,o=t.getBoundingClientRect();return{x:n.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+o.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+o.top)}}class Ur{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new rn,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Tl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Tl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Tl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const Wn=Re("txt");class $y{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Wn(),Wn(void 0,"num")),e.arrayPosition&&this.element.classList.add(Wn(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(Wn("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Wn()),this.inputElement.classList.add(Wn("i"));const r=t.createElement("div");r.classList.add(Wn("k")),this.element.appendChild(r),this.knobElement=r;const o=t.createElementNS(li,"svg");o.classList.add(Wn("g")),this.knobElement.appendChild(o);const l=t.createElementNS(li,"path");l.classList.add(Wn("gb")),o.appendChild(l),this.guideBodyElem_=l;const c=t.createElementNS(li,"path");c.classList.add(Wn("gh")),o.appendChild(c),this.guideHeadElem_=c;const d=t.createElement("div");d.classList.add(Re("tt")()),this.knobElement.appendChild(d),this.tooltipElem_=d,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(Wn(void 0,"drg"));return}this.element.classList.add(Wn(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),r=ln(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const o=this.props_.get("formatter");this.tooltipElem_.textContent=o(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class uo{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=$e(null),this.view=new $y(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Ur(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),o=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let l=t;return r!==void 0&&(l=Math.max(l,r)),o!==void 0&&(l=Math.min(l,o)),l}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);je(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=Dn(this.props.get("keyScale"),Qs(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Dn(this.props.get("keyScale"),Qs(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Cl=Re("sld");class Ky{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Cl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Cl("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(Cl("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=ln(Ne(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class Zy{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new Ky(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ur(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Ne(ln(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Dn(this.props.get("keyScale"),Ni(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Dn(this.props.get("keyScale"),Ni(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Al=Re("sldtxt");class Jy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Al());const i=t.createElement("div");i.classList.add(Al("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Al("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class xa{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new Zy(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new uo(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new Jy(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return kn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return Bn(null,{max:t.get("max"),min:t.get("min")})}}function vp(n){return{sliderProps:new me({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new me({formatter:$e(n.formatter),keyScale:n.keyScale,pointerScale:$e(n.pointerScale)})}}const Qy={containerUnitSize:"cnt-usz"};function _p(n){return`--${Qy[n]}`}function to(n){return tp(n)}function tr(n){if(yc(n))return Ze(n,to)}function Di(n,t){if(!n)return;const e=[],i=Zd(n,t);i&&e.push(i);const r=Jd(n);return r&&e.push(r),new ao(e)}function tw(n){return n?n.major===xs.major:!1}function xp(n){if(n==="inline"||n==="popup")return n}function ho(n,t){n.write(t)}const Ko=Re("ckb");class ew{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ko()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(Ko("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(Ko("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const o=t.createElement("div");o.classList.add(Ko("w")),this.labelElement.appendChild(o);const l=Ta(t,"check");o.appendChild(l),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class nw{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new ew(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function iw(n){const t=[],e=nu(n.options);return e&&t.push(e),new ao(t)}const rw=En({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=Ze(t,i=>({options:i.optional.custom(co),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>fp,constraint:n=>iw(n.params),writer:n=>ho},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&va(i,lo);return r?new ar(t,{props:new me({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new nw(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof ar?new tu(n.controller):null}}),_r=Re("col");class sw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(_r()),e.foldable.bindExpandedClass(this.element,_r(void 0,"expanded")),di(e.foldable,"completed",_s(this.element,_r(void 0,"cpl")));const i=t.createElement("div");i.classList.add(_r("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(_r("s")),i.appendChild(r),this.swatchElement=r;const o=t.createElement("div");if(o.classList.add(_r("t")),i.appendChild(o),this.textElement=o,e.pickerLayout==="inline"){const l=t.createElement("div");l.classList.add(_r("p")),this.element.appendChild(l),this.pickerElement=l}else this.pickerElement=null}}function ow(n,t,e){const i=ln(n/255,0,1),r=ln(t/255,0,1),o=ln(e/255,0,1),l=Math.max(i,r,o),c=Math.min(i,r,o),d=l-c;let f=0,g=0;const v=(c+l)/2;return d!==0&&(g=d/(1-Math.abs(l+c-1)),i===l?f=(r-o)/d:r===l?f=2+(o-i)/d:f=4+(i-r)/d,f=f/6+(f<0?1:0)),[f*360,g*100,v*100]}function aw(n,t,e){const i=(n%360+360)%360,r=ln(t/100,0,1),o=ln(e/100,0,1),l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(i/60%2-1)),d=o-l/2;let f,g,v;return i>=0&&i<60?[f,g,v]=[l,c,0]:i>=60&&i<120?[f,g,v]=[c,l,0]:i>=120&&i<180?[f,g,v]=[0,l,c]:i>=180&&i<240?[f,g,v]=[0,c,l]:i>=240&&i<300?[f,g,v]=[c,0,l]:[f,g,v]=[l,0,c],[(f+d)*255,(g+d)*255,(v+d)*255]}function lw(n,t,e){const i=ln(n/255,0,1),r=ln(t/255,0,1),o=ln(e/255,0,1),l=Math.max(i,r,o),c=Math.min(i,r,o),d=l-c;let f;d===0?f=0:l===i?f=60*(((r-o)/d%6+6)%6):l===r?f=60*((o-i)/d+2):f=60*((i-r)/d+4);const g=l===0?0:d/l,v=l;return[f,g*100,v*100]}function bp(n,t,e){const i=Yd(n,360),r=ln(t/100,0,1),o=ln(e/100,0,1),l=o*r,c=l*(1-Math.abs(i/60%2-1)),d=o-l;let f,g,v;return i>=0&&i<60?[f,g,v]=[l,c,0]:i>=60&&i<120?[f,g,v]=[c,l,0]:i>=120&&i<180?[f,g,v]=[0,l,c]:i>=180&&i<240?[f,g,v]=[0,c,l]:i>=240&&i<300?[f,g,v]=[c,0,l]:[f,g,v]=[l,0,c],[(f+d)*255,(g+d)*255,(v+d)*255]}function cw(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function uw(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function pi(n){return[n[0],n[1],n[2]]}function Aa(n,t){return[n[0],n[1],n[2],t]}const hw={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:cw,rgb:aw},hsv:{hsl:uw,hsv:(n,t,e)=>[n,t,e],rgb:bp},rgb:{hsl:ow,hsv:lw,rgb:(n,t,e)=>[n,t,e]}};function fs(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function dw(n,t){return n===t?t:Yd(n,t)}function yp(n,t,e){var i;const r=fs(t,e);return[t==="rgb"?ln(n[0],0,r[0]):dw(n[0],r[0]),ln(n[1],0,r[1]),ln(n[2],0,r[2]),ln((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function Qh(n,t,e,i){const r=fs(t,e),o=fs(t,i);return n.map((l,c)=>l/r[c]*o[c])}function wp(n,t,e){const i=Qh(n,t.mode,t.type,"int"),r=hw[t.mode][e.mode](...i);return Qh(r,e.mode,"int",e.type)}class Ie{static black(){return new Ie([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=yp(t,e,this.type)}getComponents(t){return Aa(wp(pi(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const $i=Re("colp");class pw{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add($i()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add($i("hsv"));const r=t.createElement("div");r.classList.add($i("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const o=t.createElement("div");o.classList.add($i("h")),this.hPaletteView_=e.hPaletteView,o.appendChild(this.hPaletteView_.element),i.appendChild(o),this.element.appendChild(i);const l=t.createElement("div");if(l.classList.add($i("rgb")),this.textsView_=e.textsView,l.appendChild(this.textsView_.element),this.element.appendChild(l),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const c=t.createElement("div");c.classList.add($i("a"));const d=t.createElement("div");d.classList.add($i("ap")),d.appendChild(this.alphaViews_.palette.element),c.appendChild(d);const f=t.createElement("div");f.classList.add($i("at")),f.appendChild(this.alphaViews_.text.element),c.appendChild(f),this.element.appendChild(c)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function fw(n){return n==="int"?"int":n==="float"?"float":void 0}function iu(n){return Ze(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(fw)}),expanded:t.optional.boolean,picker:t.optional.custom(xp),readonly:t.optional.constant(!1)}))}function Dr(n){return n?.1:1}function Sp(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class ru{constructor(t,e){this.type="float",this.mode=e,this.comps_=yp(t,e,this.type)}getComponents(t){return Aa(wp(pi(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const mw={int:(n,t)=>new Ie(n,t),float:(n,t)=>new ru(n,t)};function su(n,t,e){return mw[e](n,t)}function gw(n){return n.type==="float"}function vw(n){return n.type==="int"}function _w(n){const t=n.getComponents(),e=fs(n.mode,"int");return new Ie([Math.round(Ne(t[0],0,1,0,e[0])),Math.round(Ne(t[1],0,1,0,e[1])),Math.round(Ne(t[2],0,1,0,e[2])),t[3]],n.mode)}function xw(n){const t=n.getComponents(),e=fs(n.mode,"int");return new ru([Ne(t[0],0,e[0],0,1),Ne(t[1],0,e[1],0,1),Ne(t[2],0,e[2],0,1),t[3]],n.mode)}function Sn(n,t){if(n.type===t)return n;if(vw(n)&&t==="float")return xw(n);if(gw(n)&&t==="int")return _w(n);throw Qe.shouldNeverHappen()}function bw(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function Xn(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const yw={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ep(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return yw[i](e)}function Mp(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Xn(t[1],255),Xn(t[2],255),Xn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function ww(n){const t=Mp(n);return t?new Ie(t,"rgb"):null}function Tp(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Xn(t[1],255),Xn(t[2],255),Xn(t[3],255),Xn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Sw(n){const t=Tp(n);return t?new Ie(t,"rgb"):null}function Cp(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Ep(t[1]),Xn(t[2],100),Xn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Ew(n){const t=Cp(n);return t?new Ie(t,"hsl"):null}function Ap(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Ep(t[1]),Xn(t[2],100),Xn(t[3],100),Xn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Mw(n){const t=Ap(n);return t?new Ie(t,"hsl"):null}function Pp(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function Tw(n){const t=Pp(n);return t?new Ie(t,"rgb"):null}function Rp(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Ne(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Ne(parseInt(e[4],16),0,255,0,1)]:null}function Cw(n){const t=Rp(n);return t?new Ie(t,"rgb"):null}function Dp(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Aw(n){return t=>{const e=Dp(t);return e?su(e,"rgb",n):null}}function Lp(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Pw(n){return t=>{const e=Lp(t);return e?su(e,"rgb",n):null}}const Rw=[{parser:Pp,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Rp,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Mp,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Tp,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Cp,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Ap,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Dp,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Lp,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Dw(n){return Rw.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function Lw(n,t="int"){const e=Dw(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function po(n){const t=[Tw,Cw,ww,Sw,Ew,Mw];t.push(Aw("int"),Pw("int"));const e=Xy(t);return i=>{const r=e(i);return r?Sn(r,n):null}}function Iw(n){const t=po("int");if(typeof n!="string")return Ie.black();const e=t(n);return e??Ie.black()}function Ip(n){const t=ln(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function ou(n,t="#"){const e=pi(n.getComponents("rgb")).map(Ip).join("");return`${t}${e}`}function au(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(Ip).join("");return`${t}${i}`}function Up(n){const t=Un(0),e=Sn(n,"int");return`rgb(${pi(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function oa(n){const t=Un(2),e=Un(0);return`rgba(${Sn(n,"int").getComponents("rgb").map((o,l)=>(l===3?t:e)(o)).join(", ")})`}function Uw(n){const t=[Un(0),_a,_a],e=Sn(n,"int");return`hsl(${pi(e.getComponents("hsl")).map((r,o)=>t[o](r)).join(", ")})`}function Nw(n){const t=[Un(0),_a,_a,Un(2)];return`hsla(${Sn(n,"int").getComponents("hsl").map((r,o)=>t[o](r)).join(", ")})`}function Np(n,t){const e=Un(t==="float"?2:0),i=["r","g","b"],r=Sn(n,t);return`{${pi(r.getComponents("rgb")).map((l,c)=>`${i[c]}: ${e(l)}`).join(", ")}}`}function Ow(n){return t=>Np(t,n)}function Op(n,t){const e=Un(2),i=Un(t==="float"?2:0),r=["r","g","b","a"];return`{${Sn(n,t).getComponents("rgb").map((c,d)=>{const f=d===3?e:i;return`${r[d]}: ${f(c)}`}).join(", ")}}`}function Fw(n){return t=>Op(t,n)}const kw=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ou},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:au},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:Up},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:oa},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Uw},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Nw},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:Ow(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Fw(t)}],[])];function Fp(n){return kw.reduce((t,e)=>t||(bw(e.format,n)?e.stringifier:null),null)}const Gs=Re("apl");class Bw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Gs()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Gs("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Gs("c")),i.appendChild(r),this.colorElem_=r;const o=t.createElement("div");o.classList.add(Gs("m")),this.element.appendChild(o),this.markerElem_=o;const l=t.createElement("div");l.classList.add(Gs("p")),this.markerElem_.appendChild(l),this.previewElem_=l,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new Ie([e[0],e[1],e[2],0],"rgb"),r=new Ie([e[0],e[1],e[2],255],"rgb"),o=["to right",oa(i),oa(r)];this.colorElem_.style.background=`linear-gradient(${o.join(",")})`,this.previewElem_.style.backgroundColor=oa(t);const l=Ne(e[3],0,1,0,100);this.markerElem_.style.left=`${l}%`}onValueChange_(){this.update_()}}class Vw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Bw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ur(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[o,l,c]=r.getComponents("hsv");this.value.setRawValue(new Ie([o,l,c,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Dn(Dr(!0),Ni(t));if(e===0)return;const i=this.value.rawValue,[r,o,l,c]=i.getComponents("hsv");this.value.setRawValue(new Ie([r,o,l,c+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Dn(Dr(!0),Ni(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ts=Re("coltxt");function zw(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,r)=>{const o=n.createElement("option");return o.textContent=r.text,o.value=r.value,i.appendChild(o),i},n.createDocumentFragment())),t}class Hw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ts()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(ts("m")),this.modeElem_=zw(t),this.modeElem_.classList.add(ts("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(ts("mm")),r.appendChild(Ta(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const o=t.createElement("div");o.classList.add(ts("w")),this.element.appendChild(o),this.inputsElem_=o,this.inputViews_=e.inputViews,this.applyInputViews_(),Ii(e.mode,l=>{this.modeElem_.value=l})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){ip(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(ts("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function Gw(n){return Un(n==="float"?2:0)}function Ww(n,t,e){const i=fs(n,t)[e];return new ro({min:0,max:i})}function jw(n,t,e){return new uo(n,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:me.fromObject({formatter:Gw(t.colorType),keyScale:Dr(!1),pointerScale:t.colorType==="float"?.01:1}),value:$e(0,{constraint:Ww(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function Xw(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:Ui,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=jw(n,e,i);return ys({primary:t.value,secondary:r.value,forward(o){return Sn(o,t.colorType).getComponents(t.colorMode)[i]},backward(o,l){const c=t.colorMode,f=Sn(o,t.colorType).getComponents(c);f[i]=l;const g=su(Aa(pi(f),f[3]),c,t.colorType);return Sn(g,"int")}}),r})}function qw(n,t){const e=new Js(n,{parser:po("int"),props:me.fromObject({formatter:ou}),value:$e(Ie.black()),viewProps:t.viewProps});return ys({primary:t.value,secondary:e.value,forward:i=>new Ie(pi(i.getComponents()),i.mode),backward:(i,r)=>new Ie(Aa(pi(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function Yw(n){return n!=="hex"}class $w{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=$e(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Hw(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return Yw(e)?Xw(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):qw(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const Pl=Re("hpl");class Kw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Pl()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Pl("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Pl("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=Up(new Ie([e,100,100],"hsv"));const i=Ne(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class Zw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Kw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ur(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Ne(ln(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,o,l,c]=r.getComponents("hsv");this.value.setRawValue(new Ie([i,o,l,c],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Dn(Dr(!1),Ni(t));if(e===0)return;const i=this.value.rawValue,[r,o,l,c]=i.getComponents("hsv");this.value.setRawValue(new Ie([r+e,o,l,c],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Dn(Dr(!1),Ni(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Rl=Re("svp"),td=64;class Jw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Rl()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=td,i.width=td,i.classList.add(Rl("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(Rl("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=Zb(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,o=this.canvasElement.height,l=t.getImageData(0,0,r,o),c=l.data;for(let g=0;g<o;g++)for(let v=0;v<r;v++){const _=Ne(v,0,r,0,100),w=Ne(g,0,o,100,0),E=bp(i[0],_,w),T=(g*r+v)*4;c[T]=E[0],c[T+1]=E[1],c[T+2]=E[2],c[T+3]=255}t.putImageData(l,0,0);const d=Ne(i[1],0,100,0,100);this.markerElem_.style.left=`${d}%`;const f=Ne(i[2],0,100,100,0);this.markerElem_.style.top=`${f}%`}onValueChange_(){this.update_()}}class Qw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Jw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ur(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Ne(t.point.x,0,t.bounds.width,0,100),r=Ne(t.point.y,0,t.bounds.height,100,0),[o,,,l]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ie([o,i,r,l],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){gp(t.key)&&t.preventDefault();const[e,i,r,o]=this.value.rawValue.getComponents("hsv"),l=Dr(!1),c=Dn(l,Ni(t)),d=Dn(l,Qs(t));c===0&&d===0||this.value.setRawValue(new Ie([e,i+c,r+d,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Dr(!1),i=Dn(e,Ni(t)),r=Dn(e,Qs(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class tS{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Zw(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Qw(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Vw(t,{value:this.value,viewProps:this.viewProps}),text:new uo(t,{parser:Ui,props:me.fromObject({pointerScale:.01,keyScale:.1,formatter:Un(2)}),value:$e(0,{constraint:new ro({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&ys({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const o=i.getComponents();return o[3]=r,new Ie(o,i.mode)}}),this.textsC_=new $w(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new pw(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Dl=Re("colsw");class eS{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Dl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Dl("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(Dl("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=au(t)}onValueChange_(){this.update_()}}class nS{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new eS(t,{value:this.value,viewProps:this.viewProps})}}class lu{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=oo.create(e.expanded),this.swatchC_=new nS(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new Js(t,{parser:e.parser,props:me.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new sw(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new pp(t,{viewProps:this.viewProps}):null;const r=new tS(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(o=>{o.addEventListener("blur",this.onPopupChildBlur_),o.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),ys({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:o=>o,backward:(o,l)=>l})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qc(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=rp(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!qc(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function iS(n){return pi(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function rS(n){return n.getComponents("rgb").reduce((t,e,i)=>{const r=Math.floor(i===3?e*255:e)&255;return t<<8|r},0)>>>0}function sS(n){return new Ie([n>>16&255,n>>8&255,n&255],"rgb")}function oS(n){return new Ie([n>>24&255,n>>16&255,n>>8&255,Ne(n&255,0,255,0,1)],"rgb")}function aS(n){return typeof n!="number"?Ie.black():sS(n)}function lS(n){return typeof n!="number"?Ie.black():oS(n)}function aa(n,t){return typeof n!="object"||je(n)?!1:t in n&&typeof n[t]=="number"}function kp(n){return aa(n,"r")&&aa(n,"g")&&aa(n,"b")}function Bp(n){return kp(n)&&aa(n,"a")}function Vp(n){return kp(n)}function cu(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==i[r])return!1;return!0}function ed(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function cS(n){const t=Fp(n);return t?(e,i)=>{ho(e,t(i))}:null}function uS(n){const t=n?rS:iS;return(e,i)=>{ho(e,t(i))}}function hS(n,t,e){const r=Sn(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function dS(n,t,e){const r=Sn(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function pS(n,t){return(e,i)=>{n?hS(e,i,t):dS(e,i,t)}}function fS(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function mS(n){return n?t=>au(t,"0x"):t=>ou(t,"0x")}function gS(n){return"color"in n||n.view==="color"}const vS=En({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!gS(t))return null;const e=iu(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:fS(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?lS:aS,equals:cu,writer:n=>uS(n.params.supportsAlpha)},controller:n=>{var t,e;return new lu(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:mS(n.params.supportsAlpha),parser:po("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function _S(n,t){if(!Vp(n))return Sn(Ie.black(),t);if(t==="int"){const e=ed(n);return new Ie(e,"rgb")}if(t==="float"){const e=ed(n);return new ru(e,"rgb")}return Sn(Ie.black(),"int")}function xS(n){return Bp(n)}function bS(n){return t=>{const e=_S(t,n);return Sn(e,"int")}}function yS(n,t){return e=>n?Op(e,t):Np(e,t)}const wS=En({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!Vp(n))return null;const i=iu(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=Sp(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>bS(n.params.colorType),equals:cu,writer:n=>pS(xS(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=Bp(n.initialValue);return new lu(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:yS(i,n.params.colorType),parser:po("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),SS=En({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=Lw(n,Sp(t));if(!e)return null;const i=Fp(e);if(!i)return null;const r=iu(t);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:e,stringifier:i})}:null},binding:{reader:()=>Iw,equals:cu,writer:n=>{const t=cS(n.params.format);if(!t)throw Qe.notBindable();return t}},controller:n=>{var t,e;return new lu(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:po("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class uu{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,r)=>{var o,l;return(l=(o=this.components[r])===null||o===void 0?void 0:o.constrain(i))!==null&&l!==void 0?l:i});return this.asm_.fromComponents(e)}}const nd=Re("pndtxt");class ES{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(nd()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(nd("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function MS(n,t,e){return new uo(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:$e(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class hu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,r)=>MS(t,e,r)),this.acs_.forEach((i,r)=>{ys({primary:this.value,secondary:i.value,forward:o=>e.assembly.toComponents(o)[r],backward:(o,l)=>{const c=e.assembly.toComponents(o);return c[r]=l,e.assembly.fromComponents(c)}})}),this.view=new ES(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class TS extends Zs{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function CS(n,t){const e=[],i=Zd(n,t);i&&e.push(i);const r=Jd(n);r&&e.push(r);const o=nu(n.options);return o&&e.push(o),new ao(e)}const AS=En({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=Ze(t,i=>Object.assign(Object.assign({},tp(i)),{options:i.optional.custom(co),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>qd,constraint:n=>CS(n.params,n.initialValue),writer:n=>ho},controller:n=>{const t=n.value,e=n.constraint,i=e&&va(e,lo);if(i)return new ar(n.document,{props:new me({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const r=Qd(n.params,t.rawValue),o=e&&va(e,ro);return o?new xa(n.document,Object.assign(Object.assign({},vp(Object.assign(Object.assign({},r),{keyScale:$e(r.keyScale),max:o.values.value("max"),min:o.values.value("min")}))),{parser:Ui,value:t,viewProps:n.viewProps})):new uo(n.document,{parser:Ui,props:me.fromObject(r),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof xa?new TS(n.controller):n.controller.valueController instanceof ar?new tu(n.controller):null}});class ir{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const zp={toComponents:n=>n.getComponents(),fromComponents:n=>new ir(...n)},es=Re("p2d");class PS{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(es()),e.viewProps.bindClassModifiers(this.element),Ii(e.expanded,_s(this.element,es(void 0,"expanded")));const i=t.createElement("div");i.classList.add(es("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(es("b")),r.appendChild(Ta(t,"p2dpad")),e.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const o=t.createElement("div");if(o.classList.add(es("t")),i.appendChild(o),this.textElement=o,e.pickerLayout==="inline"){const l=t.createElement("div");l.classList.add(es("p")),this.element.appendChild(l),this.pickerElement=l}else this.pickerElement=null}}const Ki=Re("p2dp");class RS{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(Ki()),e.layout==="popup"&&this.element.classList.add(Ki(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ki("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(li,"svg");r.classList.add(Ki("g")),this.padElement.appendChild(r),this.svgElem_=r;const o=t.createElementNS(li,"line");o.classList.add(Ki("ax")),o.setAttributeNS(null,"x1","0"),o.setAttributeNS(null,"y1","50%"),o.setAttributeNS(null,"x2","100%"),o.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(o);const l=t.createElementNS(li,"line");l.classList.add(Ki("ax")),l.setAttributeNS(null,"x1","50%"),l.setAttributeNS(null,"y1","0"),l.setAttributeNS(null,"x2","50%"),l.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(l);const c=t.createElementNS(li,"line");c.classList.add(Ki("l")),c.setAttributeNS(null,"x1","50%"),c.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(c),this.lineElem_=c;const d=t.createElement("div");d.classList.add(Ki("m")),this.padElement.appendChild(d),this.markerElem_=d,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=Ne(t,-i,+i,0,100),o=Ne(e,-i,+i,0,100),l=this.props_.get("invertsY")?100-o:o;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${l}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${l}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function id(n,t,e){return[Dn(t[0],Ni(n)),Dn(t[1],Qs(n))*(e?1:-1)]}class DS{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new RS(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ur(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),r=Ne(t.point.x,0,t.bounds.width,-i,+i),o=Ne(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new ir(r,o),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){gp(t.key)&&t.preventDefault();const[e,i]=id(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new ir(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=id(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class LS{constructor(t,e){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=oo.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new pp(t,{viewProps:this.viewProps}):null;const o=new DS(t,{layout:e.pickerLayout,props:new me({invertsY:$e(e.invertsY),max:$e(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});o.view.allFocusableElements.forEach(l=>{l.addEventListener("blur",this.onPopupChildBlur_),l.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=o,this.textC_=new hu(t,{assembly:zp,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new PS(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),ys({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:l=>l,backward:(l,c)=>c})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qc(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=rp(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!qc(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function IS(n){return ir.isObject(n)?new ir(n.x,n.y):new ir}function US(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function NS(n,t){return new uu({assembly:zp,components:[Di(Object.assign(Object.assign({},n),n.x),t.x),Di(Object.assign(Object.assign({},n),n.y),t.y)]})}function rd(n,t){var e,i;if(!je(n.min)||!je(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=$d(n);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function OS(n,t){var e,i;const r=rd(Pr(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),o=rd(Pr(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,o)}function FS(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const kS=En({id:"input-point2d",type:"input",accept:(n,t)=>{if(!ir.isObject(n))return null;const e=Ze(t,i=>Object.assign(Object.assign({},to(i)),{expanded:i.optional.boolean,picker:i.optional.custom(xp),readonly:i.optional.constant(!1),x:i.optional.custom(tr),y:i.optional.object(Object.assign(Object.assign({},to(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>IS,constraint:n=>NS(n.params,n.initialValue),equals:ir.equals,writer:()=>US},controller:n=>{var t,e;const i=n.document,r=n.value,o=n.constraint,l=[n.params.x,n.params.y];return new LS(i,{axes:r.rawValue.getComponents().map((c,d)=>{var f;return Xc({constraint:o.components[d],initialValue:c,params:Pr(n.params,(f=l[d])!==null&&f!==void 0?f:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:FS(n.params),max:OS(n.params,r.rawValue),parser:Ui,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:n.viewProps})}});class as{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y,r=t.z;return!(typeof e!="number"||typeof i!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Hp={toComponents:n=>n.getComponents(),fromComponents:n=>new as(...n)};function BS(n){return as.isObject(n)?new as(n.x,n.y,n.z):new as}function VS(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function zS(n,t){return new uu({assembly:Hp,components:[Di(Object.assign(Object.assign({},n),n.x),t.x),Di(Object.assign(Object.assign({},n),n.y),t.y),Di(Object.assign(Object.assign({},n),n.z),t.z)]})}const HS=En({id:"input-point3d",type:"input",accept:(n,t)=>{if(!as.isObject(n))return null;const e=Ze(t,i=>Object.assign(Object.assign({},to(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(tr),y:i.optional.custom(tr),z:i.optional.custom(tr)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>BS,constraint:n=>zS(n.params,n.initialValue),equals:as.equals,writer:n=>VS},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new hu(n.document,{assembly:Hp,axes:t.rawValue.getComponents().map((r,o)=>{var l;return Xc({constraint:e.components[o],initialValue:r,params:Pr(n.params,(l=i[o])!==null&&l!==void 0?l:{})})}),parser:Ui,value:t,viewProps:n.viewProps})}});class ls{constructor(t=0,e=0,i=0,r=0){this.x=t,this.y=e,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y,r=t.z,o=t.w;return!(typeof e!="number"||typeof i!="number"||typeof r!="number"||typeof o!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Gp={toComponents:n=>n.getComponents(),fromComponents:n=>new ls(...n)};function GS(n){return ls.isObject(n)?new ls(n.x,n.y,n.z,n.w):new ls}function WS(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function jS(n,t){return new uu({assembly:Gp,components:[Di(Object.assign(Object.assign({},n),n.x),t.x),Di(Object.assign(Object.assign({},n),n.y),t.y),Di(Object.assign(Object.assign({},n),n.z),t.z),Di(Object.assign(Object.assign({},n),n.w),t.w)]})}const XS=En({id:"input-point4d",type:"input",accept:(n,t)=>{if(!ls.isObject(n))return null;const e=Ze(t,i=>Object.assign(Object.assign({},to(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(tr),x:i.optional.custom(tr),y:i.optional.custom(tr),z:i.optional.custom(tr)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>GS,constraint:n=>jS(n.params,n.initialValue),equals:ls.equals,writer:n=>WS},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new hu(n.document,{assembly:Gp,axes:t.rawValue.getComponents().map((r,o)=>{var l;return Xc({constraint:e.components[o],initialValue:r,params:Pr(n.params,(l=i[o])!==null&&l!==void 0?l:{})})}),parser:Ui,value:t,viewProps:n.viewProps})}});function qS(n){const t=[],e=nu(n.options);return e&&t.push(e),new ao(t)}const YS=En({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=Ze(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(co)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>mp,constraint:n=>qS(n.params),writer:n=>ho},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&va(i,lo);return r?new ar(t,{props:new me({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new Js(t,{parser:o=>o,props:me.fromObject({formatter:Tc}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof ar?new tu(n.controller):null}}),fo={monitor:{defaultInterval:200,defaultRows:3}},sd=Re("mll");class $S{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(sd()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(sd("i")),i.style.height=`calc(var(${_p("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class du{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new $S(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const od=Re("sgl");class KS{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(od()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(od("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class pu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new KS(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const ZS=En({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=Ze(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>fp},controller:n=>{var t;return n.value.rawValue.length===1?new pu(n.document,{formatter:Jh,value:n.value,viewProps:n.viewProps}):new du(n.document,{formatter:Jh,rows:(t=n.params.rows)!==null&&t!==void 0?t:fo.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class JS extends Zs{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const Zi=Re("grl");class QS{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Zi()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(li,"svg");i.classList.add(Zi("g")),i.style.height=`calc(var(${_p("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(li,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const o=t.createElement("div");o.classList.add(Zi("t"),Re("tt")()),this.element.appendChild(o),this.tooltipElem_=o,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),o=this.props_.get("max"),l=[];this.value.rawValue.forEach((v,_)=>{if(v===void 0)return;const w=Ne(_,0,i,0,t),E=Ne(v,r,o,e,0);l.push([w,E].join(","))}),this.lineElem_.setAttributeNS(null,"points",l.join(" "));const c=this.tooltipElem_,d=this.value.rawValue[this.cursor_.rawValue];if(d===void 0){c.classList.remove(Zi("t","a"));return}const f=Ne(this.cursor_.rawValue,0,i,0,t),g=Ne(d,r,o,e,0);c.style.left=`${f}px`,c.style.top=`${g}px`,c.textContent=`${this.formatter_(d)}`,c.classList.contains(Zi("t","a"))||(c.classList.add(Zi("t","a"),Zi("t","in")),ga(c),c.classList.remove(Zi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Wp{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=$e(-1),this.view=new QS(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!qc(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new Ur(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return kn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return Bn(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(Ne(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ne(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Cc(n){return je(n.format)?Un(2):n.format}function tE(n){var t;return n.value.rawValue.length===1?new pu(n.document,{formatter:Cc(n.params),value:n.value,viewProps:n.viewProps}):new du(n.document,{formatter:Cc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:fo.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function eE(n){var t,e,i;return new Wp(n.document,{formatter:Cc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:fo.monitor.defaultRows,props:me.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function ad(n){return n.view==="graph"}const nE=En({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=Ze(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>ad(n)?64:1,reader:n=>qd},controller:n=>ad(n.params)?eE(n):tE(n),api:n=>n.controller.valueController instanceof Wp?new JS(n.controller):null}),iE=En({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=Ze(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>mp},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new du(n.document,{formatter:Tc,rows:(t=n.params.rows)!==null&&t!==void 0?t:fo.monitor.defaultRows,value:e,viewProps:n.viewProps}):new pu(n.document,{formatter:Tc,value:e,viewProps:n.viewProps})}});class rE{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class sE{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function oE(n,t){var e;const i=n.accept(t.target.read(),t.params);if(je(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},o=Ze(t.params,v=>({disabled:v.optional.boolean,hidden:v.optional.boolean,label:v.optional.string,tag:v.optional.string})),l=n.binding.reader(r),c=n.binding.constraint?n.binding.constraint(r):void 0,d=new sE({reader:l,target:t.target,writer:n.binding.writer(r)}),f=new Gb($e(l(i.initialValue),{constraint:c,equals:n.binding.equals}),d),g=n.controller({constraint:c,document:t.document,initialValue:i.initialValue,params:i.params,value:f,viewProps:Oi.create({disabled:o==null?void 0:o.disabled,hidden:o==null?void 0:o.hidden})});return new ry(t.document,{blade:bs(),props:me.fromObject({label:"label"in t.params?(e=o==null?void 0:o.label)!==null&&e!==void 0?e:null:t.target.key}),tag:o==null?void 0:o.tag,value:f,valueController:g})}class aE{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function lE(n,t){return t===0?new Vy:new zy(n,t??fo.monitor.defaultInterval)}function cE(n,t){var e,i,r;const o=n.accept(t.target.read(),t.params);if(je(o))return null;const l={target:t.target,initialValue:o.initialValue,params:o.params},c=Ze(t.params,_=>({bufferSize:_.optional.number,disabled:_.optional.boolean,hidden:_.optional.boolean,interval:_.optional.number,label:_.optional.string})),d=n.binding.reader(l),f=(i=(e=c==null?void 0:c.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(o.params))!==null&&i!==void 0?i:1,g=new cy({binding:new aE({reader:d,target:t.target}),bufferSize:f,ticker:lE(t.document,c==null?void 0:c.interval)}),v=n.controller({document:t.document,params:o.params,value:g,viewProps:Oi.create({disabled:c==null?void 0:c.disabled,hidden:c==null?void 0:c.hidden})});return v.viewProps.bindDisabled(g.ticker),v.viewProps.handleDispose(()=>{g.ticker.dispose()}),new hy(t.document,{blade:bs(),props:me.fromObject({label:"label"in t.params?(r=c==null?void 0:c.label)!==null&&r!==void 0?r:null:t.target.key}),value:g,valueController:v})}class uE{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!tw(e.core))throw Qe.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((r,o)=>r??oE(o,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((r,o)=>r??cE(o,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const r=e.read();if(je(r))throw new Qe({context:{key:e.key},type:"nomatchingcontroller"});const o=this.createInput_(t,e,i);if(o)return o;const l=this.createMonitor_(t,e,i);if(l)return l;throw new Qe({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((r,o)=>r??By(o,{document:t,params:e}),null);if(!i)throw new Qe({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,r)=>{var o,l;return i||((l=(o=r.api)===null||o===void 0?void 0:o.call(r,{controller:t}))!==null&&l!==void 0?l:null)},null);return this.apiCache_.add(t,e??new Zs(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,r)=>{var o,l;return i||((l=(o=r.api)===null||o===void 0?void 0:o.call(r,{controller:t}))!==null&&l!==void 0?l:null)},null);return this.apiCache_.add(t,e??new Zs(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(sy(t))return this.createInputBindingApi_(t);if(dy(t))return this.createMonitorBindingApi_(t);throw Qe.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(iy(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!e)throw Qe.shouldNeverHappen();return this.apiCache_.add(t,e)}}const hE=new rE;function dE(){const n=new uE(hE);return[kS,HS,XS,YS,AS,SS,wS,vS,rw,ZS,iE,nE,vy,Ry,dp].forEach(t=>{n.register("core",t)}),n}class pE extends Ir{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new so(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class fE extends Ir{}class mE extends Ir{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new so(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class gE extends Ir{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new so(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const vE=function(){return{id:"list",type:"blade",core:xs,accept(n){const t=Ze(n,e=>({options:e.required.custom(co),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new lo(eu(n.params.options)),e=$e(n.params.value,{constraint:t}),i=new ar(n.document,{props:new me({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Rr(n.document,{blade:n.blade,props:me.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Rr)||!(n.controller.valueController instanceof ar)?null:new pE(n.controller)}}}();class _E extends up{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class xE extends Ec{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const ld=Re("spr");class bE{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ld()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(ld("r")),this.element.appendChild(i)}}class cd extends Ca{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new bE(t,{viewProps:e.viewProps})}))}}const yE={id:"separator",type:"blade",core:xs,accept(n){const t=Ze(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new cd(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof cd?new fE(n.controller):null}},wE={id:"slider",type:"blade",core:xs,accept(n){const t=Ze(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,r=new ro({max:n.params.max,min:n.params.min}),o=$e(i,{constraint:r}),l=new xa(n.document,Object.assign(Object.assign({},vp({formatter:(e=n.params.format)!==null&&e!==void 0?e:kb,keyScale:$e(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:Kd(n.params,i)})),{parser:Ui,value:o,viewProps:n.viewProps}));return new Rr(n.document,{blade:n.blade,props:me.fromObject({label:n.params.label}),value:o,valueController:l})},api(n){return!(n.controller instanceof Rr)||!(n.controller.valueController instanceof xa)?null:new mE(n.controller)}},SE=function(){return{id:"text",type:"blade",core:xs,accept(n){const t=Ze(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=$e(n.params.value),i=new Js(n.document,{parser:n.params.parse,props:me.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:n.viewProps});return new Rr(n.document,{blade:n.blade,props:me.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Rr)||!(n.controller.valueController instanceof Js)?null:new gE(n.controller)}}}();function EE(n){const t=n.createElement("div");return t.classList.add(Re("dfw")()),n.body&&n.body.appendChild(t),t}function ME(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class TE extends _E{constructor(t){var e,i;const r=t??{},o=(e=r.document)!==null&&e!==void 0?e:Kb(),l=dE(),c=new xE(o,{expanded:r.expanded,blade:bs(),props:me.fromObject({title:r.title}),viewProps:Oi.create()});super(c,l),this.pool_=l,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:EE(o),this.containerElem_.appendChild(this.element),this.doc_=o,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Qe.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw Qe.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&ME(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[vE,yE,wE,dp,SE]})}}new cp("4.0.5");function CE(n){const t=new TE({title:"controls",container:bc("#controls")[0]}),e=t.addButton({title:"start"});e.on("click",d=>{var f;(f=n.sphere)==null||f.roll(),e.disabled=!0});const i={"point light":!0,"spot light":!0,"tracking light":!0,helpers:!1};t.addBinding(i,"point light").on("change",d=>{n.lightingManager.togglePointLight()}),t.addBinding(i,"spot light").on("change",d=>{n.lightingManager.toggleSpotLight()}),t.addBinding(i,"tracking light").on("change",d=>{n.lightingManager.toggleTrackingSpotlight()}),t.addBinding(i,"helpers").on("change",d=>{n.lightingManager.toggleHelpers()})}class AE{constructor(){fe(this,"canvas");fe(this,"scene");fe(this,"renderer");fe(this,"activeCamera");fe(this,"topCamera");fe(this,"followCamera");fe(this,"clock");fe(this,"sceneGraph");fe(this,"lightingManager");fe(this,"activeDomino",null);fe(this,"sphere",null);this.canvas=bc("#main-canvas")[0],this.scene=new Nm,this.renderer=new Dx({antialias:!0,canvas:this.canvas}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.shadowMap.enabled=!0,this.topCamera=new Hd(75,this.aspect,.1,5e4,this.canvas),this.followCamera=new Xx(75,this.aspect,.1,5e4,this.canvas),this.activeCamera=this.topCamera,bc(this.canvas).on("resize",()=>{this.activeCamera.aspect=this.aspect,this.activeCamera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight)}),this.clock=new Nd,this.sceneGraph=new Gd,this.lightingManager=new ib(this.scene),CE(this),this.populateScene(),this.animate()}get aspect(){return this.canvas.clientWidth/this.canvas.clientHeight}add(t){this.scene.add(t.mesh),this.sceneGraph.add(t)}animate(){this.renderer.render(this.scene,this.activeCamera),this.activeCamera.update(),this.updateActiveObject(),this.sceneGraph.update(this.clock.getDelta()),requestAnimationFrame(()=>this.animate())}updateActiveObject(){if(this.sphere&&!this.sphere.collided)this.lightingManager.setTrackingObject(this.sphere.mesh);else{const t=this.sceneGraph.children.filter(e=>e instanceof zc&&e.mesh.userData.domino&&e.mesh.userData.domino.toppling&&!e.mesh.userData.domino.fallen);t.length>0?this.lightingManager.setTrackingObject(t[t.length-1].mesh):this.lightingManager.setTrackingObject(null)}this.lightingManager.updateTrackingSpotlight()}populateScene(){const t=new wn(new io(50,50),new fa({color:new we(11513775)}));t.rotation.x=-Math.PI/2,t.position.y=-1,t.receiveShadow=!0,this.scene.add(t),this.activeCamera.position.set(0,5,5);const e=new V(1,0,0),i=new Zx(e,new fa({color:new we(16711680)}));i.mesh.position.set(-5,0,0),this.add(i),this.sphere=i,this.lightingManager.setTrackingObject(i.mesh);const r=nb(this.scene,this.sceneGraph,new V(1,0,0),e);i.addCollidable(r[0])}}new AE;
