const ia="125dev",Lf={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rf={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zc=0,ra=1,Jc=2,Cf=3,Pf=0,sa=1,oa=2,wi=3,Hn=0,Qe=1,Si=2,aa=1,If=2,nn=0,Ti=1,ca=2,la=3,ua=4,$c=5,kn=100,Qc=101,Kc=102,ha=103,fa=104,el=200,tl=201,nl=202,il=203,da=204,pa=205,rl=206,sl=207,ol=208,al=209,cl=210,ll=0,ul=1,hl=2,vs=3,fl=4,dl=5,pl=6,ml=7,br=0,gl=1,yl=2,Vn=0,xl=1,vl=2,_l=3,ma=4,bl=5,_s=300,Mr=301,wr=302,bs=303,Ms=304,Ei=306,Sr=307,Ai=1e3,at=1001,Li=1002,Ke=1003,Tr=1004,Df=1004,Er=1005,Ff=1005,et=1006,ws=1007,Bf=1007,Wn=1008,Of=1008,Ri=1009,Ml=1010,wl=1011,Ar=1012,Sl=1013,Lr=1014,rn=1015,Rr=1016,Tl=1017,El=1018,Al=1019,Ci=1020,Ll=1021,sn=1022,wt=1023,Rl=1024,Cl=1025,Pl=wt,jn=1026,Pi=1027,Il=1028,Dl=1029,Fl=1030,Bl=1031,Ol=1032,Nl=1033,ga=33776,ya=33777,xa=33778,va=33779,_a=35840,ba=35841,Ma=35842,wa=35843,zl=36196,Sa=37492,Ta=37496,Gl=37808,Ul=37809,Hl=37810,kl=37811,Vl=37812,Wl=37813,jl=37814,ql=37815,Xl=37816,Yl=37817,Zl=37818,Jl=37819,$l=37820,Ql=37821,Kl=36492,eu=37840,tu=37841,nu=37842,iu=37843,ru=37844,su=37845,ou=37846,au=37847,cu=37848,lu=37849,uu=37850,hu=37851,fu=37852,du=37853,pu=2200,mu=2201,gu=2202,Ii=2300,Di=2301,Ss=2302,qn=2400,Xn=2401,Cr=2402,Ts=2500,Ea=2501,yu=0,xu=1,vu=2,dt=3e3,Fi=3001,Es=3007,As=3002,_u=3003,Aa=3004,La=3005,Ra=3006,bu=3200,Mu=3201,_n=0,wu=1,Nf=0,Ls=7680,zf=7681,Gf=7682,Uf=7683,Hf=34055,kf=34056,Vf=5386,Wf=512,jf=513,qf=514,Xf=515,Yf=516,Zf=517,Jf=518,Su=519,Pr=35044,Yn=35048,$f=35040,Qf=35045,Kf=35049,ed=35041,td=35046,nd=35050,id=35042,rd="100",Ca="300 es";function on(){}Object.assign(on.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});const it=[];for(let t=0;t<256;t++)it[t]=(t<16?"0":"")+t.toString(16);let Rs=1234567;const ye={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(it[t&255]+it[t>>8&255]+it[t>>16&255]+it[t>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[n&63|128]+it[n>>8&255]+"-"+it[n>>16&255]+it[n>>24&255]+it[i&255]+it[i>>8&255]+it[i>>16&255]+it[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},damp:function(t,e,n,i){return ye.lerp(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(ye.euclideanModulo(t,e*2)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(Rs=t%2147483647),Rs=Rs*16807%2147483647,(Rs-1)/2147483646},degToRad:function(t){return t*ye.DEG2RAD},radToDeg:function(t){return t*ye.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)==0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":t.set(a*h,c*u,c*f,a*l);break;case"YZY":t.set(c*f,a*h,c*u,a*l);break;case"ZXZ":t.set(c*u,c*f,a*h,a*l);break;case"XZX":t.set(a*h,c*p,c*d,a*l);break;case"YXY":t.set(c*d,a*h,c*p,a*l);break;case"ZYZ":t.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class k{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class St{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],y=r[0],x=r[3],g=r[6],m=r[1],_=r[4],b=r[7],T=r[2],v=r[5],A=r[8];return s[0]=o*y+a*m+c*T,s[3]=o*x+a*_+c*v,s[6]=o*g+a*b+c*A,s[1]=l*y+h*m+u*T,s[4]=l*x+h*_+u*v,s[7]=l*g+h*b+u*A,s[2]=f*y+d*m+p*T,s[5]=f*x+d*_+p*v,s[8]=f*g+d*b+p*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return n*o*h-n*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,p=n*u+i*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=u*y,e[1]=(r*l-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(h*n-r*c)*y,e[5]=(r*s-a*n)*y,e[6]=d*y,e[7]=(i*c-l*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],h=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*h,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*h,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}}let Bi;const Zn={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let sd=0;function Be(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=at,i=at,r=et,s=Wn,o=wt,a=Ri,c=1,l=dt){Object.defineProperty(this,"id",{value:sd++}),this.uuid=ye.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new k(0,0),this.repeat=new k(1,1),this.center=new k(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}Be.DEFAULT_IMAGE=void 0,Be.DEFAULT_MAPPING=_s,Be.prototype=Object.assign(Object.create(on.prototype),{constructor:Be,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=ye.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Pa(i[s].image)):r.push(Pa(i[s]))}else r=Pa(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==_s)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ai:t.x=t.x-Math.floor(t.x);break;case at:t.x=t.x<0?0:1;break;case Li:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ai:t.y=t.y-Math.floor(t.y);break;case at:t.y=t.y<0?0:1;break;case Li:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}}),Object.defineProperty(Be.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Pa(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Zn.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ne{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const o=.01,a=.1,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],y=c[2],x=c[6],g=c[10];if(Math.abs(h-f)<o&&Math.abs(u-y)<o&&Math.abs(p-x)<o){if(Math.abs(h+f)<a&&Math.abs(u+y)<a&&Math.abs(p+x)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;n=Math.PI;const _=(l+1)/2,b=(d+1)/2,T=(g+1)/2,v=(h+f)/4,A=(u+y)/4,I=(p+x)/4;return _>b&&_>T?_<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=v/i,s=A/i):b>T?b<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=v/r,s=I/r):T<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=I/s),this.set(i,r,s,n),this}let m=Math.sqrt((x-p)*(x-p)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(m)<.001&&(m=1),this.x=(x-p)/m,this.y=(u-y)/m,this.z=(f-h)/m,this.w=Math.acos((l+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}class bn extends on{constructor(e,n,i){super();Object.defineProperty(this,"isWebGLRenderTarget",{value:!0}),this.width=e,this.height=n,this.scissor=new Ne(0,0,e,n),this.scissorTest=!1,this.viewport=new Ne(0,0,e,n),i=i||{},this.texture=new Be(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=n,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:et,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setSize(e,n){(this.width!==e||this.height!==n)&&(this.width=e,this.height=n,this.texture.image.width=e,this.texture.image.height=n,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class od extends bn{constructor(e,n,i){super(e,n,i);Object.defineProperty(this,"isWebGLMultisampleRenderTarget",{value:!0}),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}class ct{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const f=s[o+0],d=s[o+1],p=s[o+2],y=s[o+3];if(u!==y||c!==f||l!==d||h!==p){let x=1-a;const g=c*f+l*d+h*p+u*y,m=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const T=Math.sqrt(_),v=Math.atan2(T,g*m);x=Math.sin(x*v)/T,a=Math.sin(a*v)/T}const b=a*m;if(c=c*x+f*b,l=l*x+d*b,h=h*x+p*b,u=u*x+y*b,x===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[n]=a*p+h*u+c*d-l*f,e[n+1]=c*p+h*f+l*u-a*d,e[n+2]=l*p+h*d+a*f-c*u,e[n+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),f=c(i/2),d=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],h=n[6],u=n[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){const i=1e-6;let r=e.dot(n)+1;return r<i?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-n)*h)/l,f=Math.sin(n*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class M{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,h=c*i+a*n-s*r,u=c*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=l*c+f*-s+h*-a-u*-o,this.y=h*c+f*-o+u*-s-l*-a,this.z=u*c+f*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ye.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const Ia=new M,Tu=new ct;class jt{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new M(Infinity,Infinity,Infinity),this.max=n!==void 0?n:new M(-Infinity,-Infinity,-Infinity)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],f=e[c+2];h<n&&(n=h),u<i&&(i=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),f=e.getZ(c);h<n&&(n=h),u<i&&(i=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ir.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new M),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new M),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox),Fa.applyMatrix4(e.matrixWorld),this.union(Fa));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new M),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ir),Ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Cs.subVectors(this.max,Dr),Oi.subVectors(e.a,Dr),Ni.subVectors(e.b,Dr),zi.subVectors(e.c,Dr),Mn.subVectors(Ni,Oi),wn.subVectors(zi,Ni),Jn.subVectors(Oi,zi);let n=[0,-Mn.z,Mn.y,0,-wn.z,wn.y,0,-Jn.z,Jn.y,Mn.z,0,-Mn.x,wn.z,0,-wn.x,Jn.z,0,-Jn.x,-Mn.y,Mn.x,0,-wn.y,wn.x,0,-Jn.y,Jn.x,0];return!Da(n,Oi,Ni,zi,Cs)||(n=[1,0,0,0,1,0,0,0,1],!Da(n,Oi,Ni,zi,Cs))?!1:(Ps.crossVectors(Mn,wn),n=[Ps.x,Ps.y,Ps.z],Da(n,Oi,Ni,zi,Cs))}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new M),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ir.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Ir).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Da(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$n.fromArray(t,s);const a=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),c=e.dot($n),l=n.dot($n),h=i.dot($n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const an=[new M,new M,new M,new M,new M,new M,new M,new M],Ir=new M,Fa=new jt,Oi=new M,Ni=new M,zi=new M,Mn=new M,wn=new M,Jn=new M,Dr=new M,Cs=new M,Ps=new M,$n=new M,ad=new jt;class cn{constructor(e,n){this.center=e!==void 0?e:new M,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ad.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new M),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new jt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const ln=new M,Ba=new M,Is=new M,Sn=new M,Oa=new M,Ds=new M,Na=new M;class Gi{constructor(e,n){this.origin=e!==void 0?e:new M,this.direction=n!==void 0?n:new M(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new M),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new M),n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ln.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ln.copy(this.direction).multiplyScalar(n).add(this.origin),ln.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ba.copy(e).add(n).multiplyScalar(.5),Is.copy(n).sub(e).normalize(),Sn.copy(this.origin).sub(Ba);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Is),a=Sn.dot(this.direction),c=-Sn.dot(Is),l=Sn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=s*h,u>=0)if(f>=-p)if(f<=p){const y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(Is).multiplyScalar(f).add(Ba),d}intersectSphere(e,n){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),r=ln.dot(ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,n,i,r,s){Oa.subVectors(n,e),Ds.subVectors(i,e),Na.crossVectors(Oa,Ds);let o=this.direction.dot(Na),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);const c=a*this.direction.dot(Ds.crossVectors(Sn,Ds));if(c<0)return null;const l=a*this.direction.dot(Oa.cross(Sn));if(l<0||c+l>o)return null;const h=-a*Sn.dot(Na);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class Te{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,h,u,f,d,p,y,x){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=y,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,d=o*u,p=a*h,y=a*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=d+p*l,n[5]=f-y*l,n[9]=-a*c,n[2]=y-f*l,n[6]=p+d*l,n[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,p=l*h,y=l*u;n[0]=f+y*a,n[4]=p*a-d,n[8]=o*l,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=d*a-p,n[6]=y+f*a,n[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,p=l*h,y=l*u;n[0]=f-y*a,n[4]=-o*u,n[8]=p+d*a,n[1]=d+p*a,n[5]=o*h,n[9]=y-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,p=a*h,y=a*u;n[0]=c*h,n[4]=p*l-d,n[8]=f*l+y,n[1]=c*u,n[5]=y*l+f,n[9]=d*l-p,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,y=a*l;n[0]=c*h,n[4]=y-f*u,n[8]=p*u+d,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-l*h,n[6]=d*u+p,n[10]=f-y*u}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,y=a*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=f*u+y,n[5]=o*h,n[9]=d*u-p,n[2]=p*u-d,n[6]=a*h,n[10]=y*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cd,e,ld)}lookAt(e,n,i){const r=this.elements;return Tt.subVectors(e,n),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),Tn.crossVectors(i,Tt),Tn.lengthSq()===0&&(Math.abs(i.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),Tn.crossVectors(i,Tt)),Tn.normalize(),Fs.crossVectors(Tt,Tn),r[0]=Tn.x,r[4]=Fs.x,r[8]=Tt.x,r[1]=Tn.y,r[5]=Fs.y,r[9]=Tt.y,r[2]=Tn.z,r[6]=Fs.z,r[10]=Tt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],y=i[6],x=i[10],g=i[14],m=i[3],_=i[7],b=i[11],T=i[15],v=r[0],A=r[4],I=r[8],L=r[12],P=r[1],F=r[5],O=r[9],B=r[13],C=r[2],D=r[6],z=r[10],W=r[14],Y=r[3],K=r[7],oe=r[11],se=r[15];return s[0]=o*v+a*P+c*C+l*Y,s[4]=o*A+a*F+c*D+l*K,s[8]=o*I+a*O+c*z+l*oe,s[12]=o*L+a*B+c*W+l*se,s[1]=h*v+u*P+f*C+d*Y,s[5]=h*A+u*F+f*D+d*K,s[9]=h*I+u*O+f*z+d*oe,s[13]=h*L+u*B+f*W+d*se,s[2]=p*v+y*P+x*C+g*Y,s[6]=p*A+y*F+x*D+g*K,s[10]=p*I+y*O+x*z+g*oe,s[14]=p*L+y*B+x*W+g*se,s[3]=m*v+_*P+b*C+T*Y,s[7]=m*A+_*F+b*D+T*K,s[11]=m*I+_*O+b*z+T*oe,s[15]=m*L+_*B+b*W+T*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],y=e[7],x=e[11],g=e[15];return p*(+s*c*u-r*l*u-s*a*f+i*l*f+r*a*d-i*c*d)+y*(+n*c*d-n*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+x*(+n*l*u-n*a*d-s*o*u+i*o*d+s*a*h-i*l*h)+g*(-r*a*h-n*c*u+n*a*f+r*o*u-i*o*f+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],y=e[13],x=e[14],g=e[15],m=u*x*l-y*f*l+y*c*d-a*x*d-u*c*g+a*f*g,_=p*f*l-h*x*l-p*c*d+o*x*d+h*c*g-o*f*g,b=h*y*l-p*u*l+p*a*d-o*y*d-h*a*g+o*u*g,T=p*u*c-h*y*c-p*a*f+o*y*f+h*a*x-o*u*x,v=n*m+i*_+r*b+s*T;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/v;return e[0]=m*A,e[1]=(y*f*s-u*x*s-y*r*d+i*x*d+u*r*g-i*f*g)*A,e[2]=(a*x*s-y*c*s+y*r*l-i*x*l-a*r*g+i*c*g)*A,e[3]=(u*c*s-a*f*s-u*r*l+i*f*l+a*r*d-i*c*d)*A,e[4]=_*A,e[5]=(h*x*s-p*f*s+p*r*d-n*x*d-h*r*g+n*f*g)*A,e[6]=(p*c*s-o*x*s-p*r*l+n*x*l+o*r*g-n*c*g)*A,e[7]=(o*f*s-h*c*s+h*r*l-n*f*l-o*r*d+n*c*d)*A,e[8]=b*A,e[9]=(p*u*s-h*y*s-p*i*d+n*y*d+h*i*g-n*u*g)*A,e[10]=(o*y*s-p*a*s+p*i*l-n*y*l-o*i*g+n*a*g)*A,e[11]=(h*a*s-o*u*s-h*i*l+n*u*l+o*i*d-n*a*d)*A,e[12]=T*A,e[13]=(h*y*r-p*u*r+p*i*f-n*y*f-h*i*x+n*u*x)*A,e[14]=(p*a*r-o*y*r-p*i*c+n*y*c+o*i*x-n*a*x)*A,e[15]=(o*u*r-h*a*r+h*i*c-n*u*c-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,p=s*u,y=o*h,x=o*u,g=a*u,m=c*l,_=c*h,b=c*u,T=i.x,v=i.y,A=i.z;return r[0]=(1-(y+g))*T,r[1]=(d+b)*T,r[2]=(p-_)*T,r[3]=0,r[4]=(d-b)*v,r[5]=(1-(f+g))*v,r[6]=(x+m)*v,r[7]=0,r[8]=(p+_)*A,r[9]=(x-m)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const o=Ui.set(r[4],r[5],r[6]).length(),a=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const l=1/s,h=1/o,u=1/a;return Ft.elements[0]*=l,Ft.elements[1]*=l,Ft.elements[2]*=l,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,n.setFromRotationMatrix(Ft),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(n-e),l=2*s/(i-r),h=(n+e)/(n-e),u=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,c=1/(n-e),l=1/(i-r),h=1/(o-s),u=(n+e)*c,f=(i+r)*l,d=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ui=new M,Ft=new Te,cd=new M(0,0,0),ld=new M(1,1,1),Tn=new M,Fs=new M,Tt=new M;class Hi{constructor(e=0,n=0,i=0,r=Hi.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){const r=ye.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new M(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Hi.DefaultOrder="XYZ",Hi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const Eu=new Te,Au=new ct;class Bs{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let ud=0;const Lu=new M,ki=new ct,un=new Te,Os=new M,Fr=new M,hd=new M,fd=new ct,Ru=new M(1,0,0),Cu=new M(0,1,0),Pu=new M(0,0,1),dd={type:"added"},Iu={type:"removed"};function ce(){Object.defineProperty(this,"id",{value:ud++}),this.uuid=ye.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DefaultUp.clone();const t=new M,e=new Hi,n=new ct,i=new M(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new St}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}ce.DefaultUp=new M(0,1,0),ce.DefaultMatrixAutoUpdate=!0,ce.prototype=Object.assign(Object.create(on.prototype),{constructor:ce,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this},rotateOnWorldAxis:function(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this},rotateX:function(t){return this.rotateOnAxis(Ru,t)},rotateY:function(t){return this.rotateOnAxis(Cu,t)},rotateZ:function(t){return this.rotateOnAxis(Pu,t)},translateOnAxis:function(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(Ru,t)},translateY:function(t){return this.translateOnAxis(Cu,t)},translateZ:function(t){return this.translateOnAxis(Pu,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(un.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Fr,Os,this.up):un.lookAt(Os,Fr,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(un),this.quaternion.premultiply(ki.invert()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(dd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu)),this},clear:function(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Iu)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new M),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new ct),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,hd),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new M),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,fd,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new M),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const h=a[c];r(t.shapes,h)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(t.animations,a))}}if(e){const o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),h=s(t.shapes),u=s(t.skeletons),f=s(t.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}});const za=new M,pd=new M,md=new St;class qt{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new M(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=za.subVectors(i,n).cross(pd.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new M),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new M);const i=e.delta(za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new M),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||md.getNormalMatrix(e),r=this.coplanarPoint(za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const Bt=new M,hn=new M,Ga=new M,fn=new M,Vi=new M,Wi=new M,Du=new M,Ua=new M,Ha=new M,ka=new M;class lt{constructor(e,n,i){this.a=e!==void 0?e:new M,this.b=n!==void 0?n:new M,this.c=i!==void 0?i:new M}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new M),r.subVectors(i,n),Bt.subVectors(e,n),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bt.subVectors(r,n),hn.subVectors(i,n),Ga.subVectors(e,n);const o=Bt.dot(Bt),a=Bt.dot(hn),c=Bt.dot(Ga),l=hn.dot(hn),h=hn.dot(Ga),u=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new M),u===0)return s.set(-2,-1,-1);const f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,fn),c.set(0,0),c.addScaledVector(s,fn.x),c.addScaledVector(o,fn.y),c.addScaledVector(a,fn.z),c}static isFrontFacing(e,n,i,r){return Bt.subVectors(i,n),hn.subVectors(e,n),Bt.cross(hn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Bt.cross(hn).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new M),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new qt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return lt.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return lt.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new M);const i=this.a,r=this.b,s=this.c;let o,a;Vi.subVectors(r,i),Wi.subVectors(s,i),Ua.subVectors(e,i);const c=Vi.dot(Ua),l=Wi.dot(Ua);if(c<=0&&l<=0)return n.copy(i);Ha.subVectors(e,r);const h=Vi.dot(Ha),u=Wi.dot(Ha);if(h>=0&&u<=h)return n.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(Vi,o);ka.subVectors(e,s);const d=Vi.dot(ka),p=Wi.dot(ka);if(p>=0&&d<=p)return n.copy(s);const y=d*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Wi,a);const x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return Du.subVectors(s,r),a=(u-h)/(u-h+(d-p)),n.copy(r).addScaledVector(Du,a);const g=1/(x+y+f);return o=y*g,a=f*g,n.copy(i).addScaledVector(Vi,o).addScaledVector(Wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Va(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Wa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ja(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}class ne{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=ye.euclideanModulo(e,1),n=ye.clamp(n,0,1),i=ye.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Va(s,r,e+1/3),this.g=Va(s,r,e),this.b=Va(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const n=Fu[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n=2){return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n=2){const i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const h=s-o;switch(c=l<=.5?h/(s+o):h/(2-s-o),s){case n:a=(i-r)/h+(i<r?6:0);break;case i:a=(r-n)/h+2;break;case r:a=(n-i)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Ot),Ot.h+=e,Ot.s+=n,Ot.l+=i,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ot),e.getHSL(Ns);const i=ye.lerp(Ot.h,Ns.h,n),r=ye.lerp(Ot.s,Ns.s,n),s=ye.lerp(Ot.l,Ns.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ne.NAMES=Fu,ne.prototype.r=1,ne.prototype.g=1,ne.prototype.b=1;class qa{constructor(e,n,i,r,s,o=0){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new M,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new ne,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}}let gd=0;function me(){Object.defineProperty(this,"id",{value:gd++}),this.uuid=ye.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Ti,this.side=Hn,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=da,this.blendDst=pa,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}me.prototype=Object.assign(Object.create(on.prototype),{constructor:me,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===aa;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==Hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(me.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function xt(t){me.call(this),this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}xt.prototype=Object.create(me.prototype),xt.prototype.constructor=xt,xt.prototype.isMeshBasicMaterial=!0,xt.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};const Ue=new M,zs=new k;function ge(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Pr,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(ge.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(ge.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ne),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new k),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new M),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ne),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},set:function(t,e=0){return this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Br(t,e,n){ge.call(this,new Int8Array(t),e,n)}Br.prototype=Object.create(ge.prototype),Br.prototype.constructor=Br;function Or(t,e,n){ge.call(this,new Uint8Array(t),e,n)}Or.prototype=Object.create(ge.prototype),Or.prototype.constructor=Or;function Nr(t,e,n){ge.call(this,new Uint8ClampedArray(t),e,n)}Nr.prototype=Object.create(ge.prototype),Nr.prototype.constructor=Nr;function zr(t,e,n){ge.call(this,new Int16Array(t),e,n)}zr.prototype=Object.create(ge.prototype),zr.prototype.constructor=zr;function Qn(t,e,n){ge.call(this,new Uint16Array(t),e,n)}Qn.prototype=Object.create(ge.prototype),Qn.prototype.constructor=Qn;function Gr(t,e,n){ge.call(this,new Int32Array(t),e,n)}Gr.prototype=Object.create(ge.prototype),Gr.prototype.constructor=Gr;function Kn(t,e,n){ge.call(this,new Uint32Array(t),e,n)}Kn.prototype=Object.create(ge.prototype),Kn.prototype.constructor=Kn;function Ur(t,e,n){ge.call(this,new Uint16Array(t),e,n)}Ur.prototype=Object.create(ge.prototype),Ur.prototype.constructor=Ur,Ur.prototype.isFloat16BufferAttribute=!0;function re(t,e,n){ge.call(this,new Float32Array(t),e,n)}re.prototype=Object.create(ge.prototype),re.prototype.constructor=re;function Hr(t,e,n){ge.call(this,new Float64Array(t),e,n)}Hr.prototype=Object.create(ge.prototype),Hr.prototype.constructor=Hr;function Bu(t){if(t.length===0)return-Infinity;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}const yd={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function kr(t,e){return new yd[t](e)}let xd=0;const Xt=new Te,Xa=new ce,ji=new M,Et=new jt,Vr=new jt,nt=new M;function fe(){Object.defineProperty(this,"id",{value:xd++}),this.uuid=ye.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}fe.prototype=Object.assign(Object.create(on.prototype),{constructor:fe,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(Bu(t)>65535?Kn:Qn)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return this.attributes[t]!==void 0},addGroup:function(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new St().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Xt.makeRotationX(t),this.applyMatrix4(Xt),this},rotateY:function(t){return Xt.makeRotationY(t),this.applyMatrix4(Xt),this},rotateZ:function(t){return Xt.makeRotationZ(t),this.applyMatrix4(Xt),this},translate:function(t,e,n){return Xt.makeTranslation(t,e,n),this.applyMatrix4(Xt),this},scale:function(t,e,n){return Xt.makeScale(t,e,n),this.applyMatrix4(Xt),this},lookAt:function(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this},setFromPoints:function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new jt);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-Infinity,-Infinity,-Infinity),new M(Infinity,Infinity,Infinity));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Et.setFromBufferAttribute(r),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,Infinity);return}if(t){const n=this.boundingSphere.center;if(Et.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(nt.addVectors(Et.min,Vr.min),Et.expandByPoint(nt),nt.addVectors(Et.max,Vr.max),Et.expandByPoint(nt)):(Et.expandByPoint(Vr.min),Et.expandByPoint(Vr.max))}Et.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)nt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(nt));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)nt.fromBufferAttribute(o,c),a&&(ji.fromBufferAttribute(t,c),nt.add(ji)),i=Math.max(i,n.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new ge(new Float32Array(4*o),4));const a=e.tangent.array,c=[],l=[];for(let L=0;L<o;L++)c[L]=new M,l[L]=new M;const h=new M,u=new M,f=new M,d=new k,p=new k,y=new k,x=new M,g=new M;function m(L,P,F){h.fromArray(i,L*3),u.fromArray(i,P*3),f.fromArray(i,F*3),d.fromArray(s,L*2),p.fromArray(s,P*2),y.fromArray(s,F*2),u.sub(h),f.sub(h),p.sub(d),y.sub(d);const O=1/(p.x*y.y-y.x*p.y);!isFinite(O)||(x.copy(u).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(O),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(O),c[L].add(x),c[P].add(x),c[F].add(x),l[L].add(g),l[P].add(g),l[F].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let L=0,P=_.length;L<P;++L){const F=_[L],O=F.start,B=F.count;for(let C=O,D=O+B;C<D;C+=3)m(n[C+0],n[C+1],n[C+2])}const b=new M,T=new M,v=new M,A=new M;function I(L){v.fromArray(r,L*3),A.copy(v);const P=c[L];b.copy(P),b.sub(v.multiplyScalar(v.dot(P))).normalize(),T.crossVectors(A,P);const O=T.dot(l[L])<0?-1:1;a[L*4]=b.x,a[L*4+1]=b.y,a[L*4+2]=b.z,a[L*4+3]=O}for(let L=0,P=_.length;L<P;++L){const F=_[L],O=F.start,B=F.count;for(let C=O,D=O+B;C<D;C+=3)I(n[C+0]),I(n[C+1]),I(n[C+2])}},computeVertexNormals:function(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new M,r=new M,s=new M,o=new M,a=new M,c=new M,l=new M,h=new M;if(t)for(let u=0,f=t.count;u<f;u+=3){const d=t.getX(u+0),p=t.getX(u+1),y=t.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,y),l.subVectors(s,r),h.subVectors(i,r),l.cross(h),o.fromBufferAttribute(n,d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),l.subVectors(s,r),h.subVectors(i,r),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const s=n[i].array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let h=0,u=c;h<l;h++,u++)s[u]=a[h]}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nt.fromBufferAttribute(t,e),nt.normalize(),t.setXYZ(e,nt.x,nt.y,nt.z)},toNonIndexed:function(){function t(o,a){const c=o.array,l=o.itemSize,h=o.normalized,u=new c.constructor(a.length*l);let f=0,d=0;for(let p=0,y=a.length;p<y;p++){f=a[p]*l;for(let x=0;x<l;x++)u[d++]=c[f++]}return new ge(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=t(a,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,h=c.length;l<h;l++){const u=c[l],f=t(u,n);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=f.toJSON(t.data);f.name!==""&&(d.name=f.name),l.push(d)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new fe().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],h=r[c];for(let u=0,f=h.length;u<f;u++)l.push(h[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,l=s.length;c<l;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const Ou=new Te,qi=new Gi,Ya=new cn,En=new M,An=new M,Ln=new M,Za=new M,Ja=new M,$a=new M,Gs=new M,Us=new M,Hs=new M,ks=new k,Vs=new k,Ws=new k,Qa=new M,js=new M;function ze(t=new fe,e=new xt){ce.call(this),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}ze.prototype=Object.assign(Object.create(ce.prototype),{constructor:ze,isMesh:!0,copy:function(t){return ce.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),t.ray.intersectsSphere(Ya)===!1)||(Ou.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Ou),n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,h=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,y=f.length;p<y;p++){const x=f[p],g=i[x.materialIndex],m=Math.max(x.start,d.start),_=Math.min(x.start+x.count,d.start+d.count);for(let b=m,T=_;b<T;b+=3){const v=o.getX(b),A=o.getX(b+1),I=o.getX(b+2);s=qs(this,g,t,qi,a,c,l,h,u,v,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let x=p,g=y;x<g;x+=3){const m=o.getX(x),_=o.getX(x+1),b=o.getX(x+2);s=qs(this,i,t,qi,a,c,l,h,u,m,_,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=f.length;p<y;p++){const x=f[p],g=i[x.materialIndex],m=Math.max(x.start,d.start),_=Math.min(x.start+x.count,d.start+d.count);for(let b=m,T=_;b<T;b+=3){const v=b,A=b+1,I=b+2;s=qs(this,g,t,qi,a,c,l,h,u,v,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let x=p,g=y;x<g;x+=3){const m=x,_=x+1,b=x+2;s=qs(this,i,t,qi,a,c,l,h,u,m,_,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function vd(t,e,n,i,r,s,o,a){let c;if(e.side===Qe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Si,a),c===null)return null;js.copy(a),js.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(js);return l<n.near||l>n.far?null:{distance:l,point:js.clone(),object:t}}function qs(t,e,n,i,r,s,o,a,c,l,h,u){En.fromBufferAttribute(r,l),An.fromBufferAttribute(r,h),Ln.fromBufferAttribute(r,u);const f=t.morphTargetInfluences;if(e.morphTargets&&s&&f){Gs.set(0,0,0),Us.set(0,0,0),Hs.set(0,0,0);for(let p=0,y=s.length;p<y;p++){const x=f[p],g=s[p];x!==0&&(Za.fromBufferAttribute(g,l),Ja.fromBufferAttribute(g,h),$a.fromBufferAttribute(g,u),o?(Gs.addScaledVector(Za,x),Us.addScaledVector(Ja,x),Hs.addScaledVector($a,x)):(Gs.addScaledVector(Za.sub(En),x),Us.addScaledVector(Ja.sub(An),x),Hs.addScaledVector($a.sub(Ln),x)))}En.add(Gs),An.add(Us),Ln.add(Hs)}t.isSkinnedMesh&&(t.boneTransform(l,En),t.boneTransform(h,An),t.boneTransform(u,Ln));const d=vd(t,e,n,i,En,An,Ln,Qa);if(d){a&&(ks.fromBufferAttribute(a,l),Vs.fromBufferAttribute(a,h),Ws.fromBufferAttribute(a,u),d.uv=lt.getUV(Qa,En,An,Ln,ks,Vs,Ws,new k)),c&&(ks.fromBufferAttribute(c,l),Vs.fromBufferAttribute(c,h),Ws.fromBufferAttribute(c,u),d.uv2=lt.getUV(Qa,En,An,Ln,ks,Vs,Ws,new k));const p=new qa(l,h,u);lt.getNormal(En,An,Ln,p.normal),d.face=p}return d}class ei extends fe{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function p(y,x,g,m,_,b,T,v,A,I,L){const P=b/A,F=T/I,O=b/2,B=T/2,C=v/2,D=A+1,z=I+1;let W=0,Y=0;const K=new M;for(let oe=0;oe<z;oe++){const se=oe*F-B;for(let we=0;we<D;we++){const Se=we*P-O;K[y]=Se*m,K[x]=se*_,K[g]=C,l.push(K.x,K.y,K.z),K[y]=0,K[x]=0,K[g]=v>0?1:-1,h.push(K.x,K.y,K.z),u.push(we/A),u.push(1-oe/I),W+=1}}for(let oe=0;oe<I;oe++)for(let se=0;se<A;se++){const we=f+se+D*oe,Se=f+se+D*(oe+1),Ge=f+(se+1)+D*(oe+1),H=f+(se+1)+D*oe;c.push(we,Se,H),c.push(Se,Ge,H),Y+=6}a.addGroup(d,Y,L),d+=Y,f+=W}}}function Xi(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ut(t){const e={};for(let n=0;n<t.length;n++){const i=Xi(t[n]);for(const r in i)e[r]=i[r]}return e}const Nu={clone:Xi,merge:ut};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function pt(t){me.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=_d,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}pt.prototype=Object.create(me.prototype),pt.prototype.constructor=pt,pt.prototype.isShaderMaterial=!0,pt.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this},pt.prototype.toJSON=function(t){const e=me.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function Yt(){ce.call(this),this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te}Yt.prototype=Object.assign(Object.create(ce.prototype),{constructor:Yt,isCamera:!0,copy:function(t,e){return ce.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new M),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){ce.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){ce.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Ze(t=50,e=1,n=.1,i=2e3){Yt.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ze.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Ze,isPerspectiveCamera:!0,copy:function(t,e){return Yt.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){const e=.5*this.getFilmHeight()/t;this.fov=ye.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const t=Math.tan(ye.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return ye.RAD2DEG*2*Math.atan(Math.tan(ye.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=this.near;let e=t*Math.tan(ye.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){const e=ce.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const Yi=90,Zi=1;function ti(t,e,n){if(ce.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ze(Yi,Zi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new M(1,0,0)),this.add(i);const r=new Ze(Yi,Zi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new M(-1,0,0)),this.add(r);const s=new Ze(Yi,Zi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new M(0,1,0)),this.add(s);const o=new Ze(Yi,Zi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new M(0,-1,0)),this.add(o);const a=new Ze(Yi,Zi,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new M(0,0,1)),this.add(a);const c=new Ze(Yi,Zi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,-1)),this.add(c),this.update=function(l,h){this.parent===null&&this.updateMatrixWorld();const u=l.xr.enabled,f=l.getRenderTarget();l.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(h,i),l.setRenderTarget(n,1),l.render(h,r),l.setRenderTarget(n,2),l.render(h,s),l.setRenderTarget(n,3),l.render(h,o),l.setRenderTarget(n,4),l.render(h,a),n.texture.generateMipmaps=d,l.setRenderTarget(n,5),l.render(h,c),l.setRenderTarget(f),l.xr.enabled=u}}ti.prototype=Object.create(ce.prototype),ti.prototype.constructor=ti;function Zt(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:Mr,o=o!==void 0?o:sn,Be.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}Zt.prototype=Object.create(Be.prototype),Zt.prototype.constructor=Zt,Zt.prototype.isCubeTexture=!0,Object.defineProperty(Zt.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});class Ka extends bn{constructor(e,n,i){Number.isInteger(n)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),n=i),super(e,e,n),Object.defineProperty(this,"isWebGLCubeRenderTarget",{value:!0}),n=n||{},this.texture=new Zt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.format=wt,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ei(5,5,5),s=new pt({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:nn});s.uniforms.tEquirect.value=n;const o=new ze(r,s),a=n.minFilter;return n.minFilter===Wn&&(n.minFilter=et),new ti(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function dn(t,e,n,i,r,s,o,a,c,l,h,u){Be.call(this,null,s,o,a,c,l,i,r,h,u),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:Ke,this.minFilter=l!==void 0?l:Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}dn.prototype=Object.create(Be.prototype),dn.prototype.constructor=dn,dn.prototype.isDataTexture=!0;const Ji=new cn,Xs=new M;class Wr{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new qt,n!==void 0?n:new qt,i!==void 0?i:new qt,r!==void 0?r:new qt,s!==void 0?s:new qt,o!==void 0?o:new qt]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],f=i[8],d=i[9],p=i[10],y=i[11],x=i[12],g=i[13],m=i[14],_=i[15];return n[0].setComponents(a-r,u-c,y-f,_-x).normalize(),n[1].setComponents(a+r,u+c,y+f,_+x).normalize(),n[2].setComponents(a+s,u+l,y+d,_+g).normalize(),n[3].setComponents(a-s,u-l,y-d,_-g).normalize(),n[4].setComponents(a-o,u-h,y-p,_-m).normalize(),n[5].setComponents(a+o,u+h,y+p,_+m).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xs.x=r.normal.x>0?e.max.x:e.min.x,Xs.y=r.normal.y>0?e.max.y:e.min.y,Xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}}function zu(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Md(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,h){const u=l.array,f=l.usage,d=t.createBuffer();t.bindBuffer(h,d),t.bufferData(h,u,f),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?n?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const f=h.array,d=h.updateRange;t.bindBuffer(u,l),d.count===-1?t.bufferSubData(u,0,f):(n?t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(t.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class jr extends fe{constructor(e=1,n=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,f=n/c,d=[],p=[],y=[],x=[];for(let g=0;g<h;g++){const m=g*f-o;for(let _=0;_<l;_++){const b=_*u-s;p.push(b,-m,0),y.push(0,0,1),x.push(_/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){const _=m+l*g,b=m+l*(g+1),T=m+1+l*(g+1),v=m+1+l*g;d.push(_,b,v),d.push(b,T,v)}this.setIndex(d),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(x,2))}}var wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Ed=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld="vec3 transformed = vec3( position );",Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Zd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,sp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,lp=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,mp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wp=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Ip=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Dp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,Fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,Bp=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,rm=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,sm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,om=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,am=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,um=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ym=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Im=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Fm=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hm=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const Re={alphamap_fragment:wd,alphamap_pars_fragment:Sd,alphatest_fragment:Td,aomap_fragment:Ed,aomap_pars_fragment:Ad,begin_vertex:Ld,beginnormal_vertex:Rd,bsdfs:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Bd,color_fragment:Od,color_pars_fragment:Nd,color_pars_vertex:zd,color_vertex:Gd,common:Ud,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Wd,emissivemap_fragment:jd,emissivemap_pars_fragment:qd,encodings_fragment:Xd,encodings_pars_fragment:Yd,envmap_fragment:Zd,envmap_common_pars_fragment:Jd,envmap_pars_fragment:$d,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:lp,envmap_vertex:Kd,fog_vertex:ep,fog_pars_vertex:tp,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:rp,lightmap_fragment:sp,lightmap_pars_fragment:op,lights_lambert_vertex:ap,lights_pars_begin:cp,lights_toon_fragment:up,lights_toon_pars_fragment:hp,lights_phong_fragment:fp,lights_phong_pars_fragment:dp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:yp,lights_fragment_end:xp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Mp,map_fragment:wp,map_pars_fragment:Sp,map_particle_fragment:Tp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Lp,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Ip,normal_fragment_maps:Dp,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Np,packing:zp,premultiplied_alpha_fragment:Gp,project_vertex:Up,dithering_fragment:Hp,dithering_pars_fragment:kp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:qp,shadowmap_vertex:Xp,shadowmask_pars_fragment:Yp,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:$p,skinnormal_vertex:Qp,specularmap_fragment:Kp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmissionmap_fragment:im,transmissionmap_pars_fragment:rm,uv_pars_fragment:sm,uv_pars_vertex:om,uv_vertex:am,uv2_pars_fragment:cm,uv2_pars_vertex:lm,uv2_vertex:um,worldpos_vertex:hm,background_frag:fm,background_vert:dm,cube_frag:pm,cube_vert:mm,depth_frag:gm,depth_vert:ym,distanceRGBA_frag:xm,distanceRGBA_vert:vm,equirect_frag:_m,equirect_vert:bm,linedashed_frag:Mm,linedashed_vert:wm,meshbasic_frag:Sm,meshbasic_vert:Tm,meshlambert_frag:Em,meshlambert_vert:Am,meshmatcap_frag:Lm,meshmatcap_vert:Rm,meshtoon_frag:Cm,meshtoon_vert:Pm,meshphong_frag:Im,meshphong_vert:Dm,meshphysical_frag:Fm,meshphysical_vert:Bm,normal_frag:Om,normal_vert:Nm,points_frag:zm,points_vert:Gm,shadow_frag:Um,shadow_vert:Hm,sprite_frag:km,sprite_vert:Vm},J={common:{diffuse:{value:new ne(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new St},uv2Transform:{value:new St},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new k(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new St}},sprite:{diffuse:{value:new ne(15658734)},opacity:{value:1},center:{value:new k(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new St}}},Nt={basic:{uniforms:ut([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ut([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.fog,J.lights,{emissive:{value:new ne(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ut([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ut([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ut([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new ne(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ut([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ut([J.points,J.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ut([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ut([J.common,J.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ut([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Re.normal_vert,fragmentShader:Re.normal_frag},sprite:{uniforms:ut([J.sprite,J.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:ut([J.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:ut([J.common,J.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:ut([J.lights,J.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Nt.physical={uniforms:ut([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new k(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ne(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Wm(t,e,n,i,r){const s=new ne(0);let o=0,a,c,l=null,h=0,u=null;function f(p,y,x,g){let m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=e.get(m));const _=t.xr,b=_.getSession&&_.getSession();b&&b.environmentBlendMode==="additive"&&(m=null),m===null?d(s,o):m&&m.isColor&&(d(m,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===Ei)?(c===void 0&&(c=new ze(new ei(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Xi(Nt.cube.uniforms),vertexShader:Nt.cube.vertexShader,fragmentShader:Nt.cube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),m.isWebGLCubeRenderTarget&&(m=m.texture),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||h!==m.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,l=m,h=m.version,u=t.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new ze(new jr(2,2),new pt({name:"BackgroundMaterial",uniforms:Xi(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||h!==m.version||u!==t.toneMapping)&&(a.material.needsUpdate=!0,l=m,h=m.version,u=t.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function d(p,y){n.buffers.color.setClear(p.r,p.g,p.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(p,y=1){s.set(p),o=y,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,d(s,o)},render:f}}function jm(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function h(B,C,D,z,W){let Y=!1;if(o){const K=p(z,D,C);l!==K&&(l=K,f(l.object)),Y=x(z,W),Y&&g(z,W)}else{const K=C.wireframe===!0;(l.geometry!==z.id||l.program!==D.id||l.wireframe!==K)&&(l.geometry=z.id,l.program=D.id,l.wireframe=K,Y=!0)}B.isInstancedMesh===!0&&(Y=!0),W!==null&&n.update(W,34963),Y&&(A(B,C,D,z),W!==null&&t.bindBuffer(34963,n.get(W).buffer))}function u(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function f(B){return i.isWebGL2?t.bindVertexArray(B):s.bindVertexArrayOES(B)}function d(B){return i.isWebGL2?t.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function p(B,C,D){const z=D.wireframe===!0;let W=a[B.id];W===void 0&&(W={},a[B.id]=W);let Y=W[C.id];Y===void 0&&(Y={},W[C.id]=Y);let K=Y[z];return K===void 0&&(K=y(u()),Y[z]=K),K}function y(B){const C=[],D=[],z=[];for(let W=0;W<r;W++)C[W]=0,D[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:z,object:B,attributes:{},index:null}}function x(B,C){const D=l.attributes,z=B.attributes;let W=0;for(const Y in z){const K=D[Y],oe=z[Y];if(K===void 0||K.attribute!==oe||K.data!==oe.data)return!0;W++}return l.attributesNum!==W||l.index!==C}function g(B,C){const D={},z=B.attributes;let W=0;for(const Y in z){const K=z[Y],oe={};oe.attribute=K,K.data&&(oe.data=K.data),D[Y]=oe,W++}l.attributes=D,l.attributesNum=W,l.index=C}function m(){const B=l.newAttributes;for(let C=0,D=B.length;C<D;C++)B[C]=0}function _(B){b(B,0)}function b(B,C){const D=l.newAttributes,z=l.enabledAttributes,W=l.attributeDivisors;D[B]=1,z[B]===0&&(t.enableVertexAttribArray(B),z[B]=1),W[B]!==C&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,C),W[B]=C)}function T(){const B=l.newAttributes,C=l.enabledAttributes;for(let D=0,z=C.length;D<z;D++)C[D]!==B[D]&&(t.disableVertexAttribArray(D),C[D]=0)}function v(B,C,D,z,W,Y){i.isWebGL2===!0&&(D===5124||D===5125)?t.vertexAttribIPointer(B,C,D,W,Y):t.vertexAttribPointer(B,C,D,z,W,Y)}function A(B,C,D,z){if(i.isWebGL2===!1&&(B.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const W=z.attributes,Y=D.getAttributes(),K=C.defaultAttributeValues;for(const oe in Y){const se=Y[oe];if(se>=0){const we=W[oe];if(we!==void 0){const Se=we.normalized,Ge=we.itemSize,H=n.get(we);if(H===void 0)continue;const ot=H.buffer,ve=H.type,Ie=H.bytesPerElement;if(we.isInterleavedBufferAttribute){const _e=we.data,Fe=_e.stride,Le=we.offset;_e&&_e.isInstancedInterleavedBuffer?(b(se,_e.meshPerAttribute),z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)):_(se),t.bindBuffer(34962,ot),v(se,Ge,ve,Se,Fe*Ie,Le*Ie)}else we.isInstancedBufferAttribute?(b(se,we.meshPerAttribute),z._maxInstanceCount===void 0&&(z._maxInstanceCount=we.meshPerAttribute*we.count)):_(se),t.bindBuffer(34962,ot),v(se,Ge,ve,Se,0,0)}else if(oe==="instanceMatrix"){const Se=n.get(B.instanceMatrix);if(Se===void 0)continue;const Ge=Se.buffer,H=Se.type;b(se+0,1),b(se+1,1),b(se+2,1),b(se+3,1),t.bindBuffer(34962,Ge),t.vertexAttribPointer(se+0,4,H,!1,64,0),t.vertexAttribPointer(se+1,4,H,!1,64,16),t.vertexAttribPointer(se+2,4,H,!1,64,32),t.vertexAttribPointer(se+3,4,H,!1,64,48)}else if(oe==="instanceColor"){const Se=n.get(B.instanceColor);if(Se===void 0)continue;const Ge=Se.buffer,H=Se.type;b(se,1),t.bindBuffer(34962,Ge),t.vertexAttribPointer(se,3,H,!1,12,0)}else if(K!==void 0){const Se=K[oe];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(se,Se);break;case 3:t.vertexAttrib3fv(se,Se);break;case 4:t.vertexAttrib4fv(se,Se);break;default:t.vertexAttrib1fv(se,Se)}}}}T()}function I(){F();for(const B in a){const C=a[B];for(const D in C){const z=C[D];for(const W in z)d(z[W].object),delete z[W];delete C[D]}delete a[B]}}function L(B){if(a[B.id]===void 0)return;const C=a[B.id];for(const D in C){const z=C[D];for(const W in z)d(z[W].object),delete z[W];delete C[D]}delete a[B.id]}function P(B){for(const C in a){const D=a[C];if(D[B.id]===void 0)continue;const z=D[B.id];for(const W in z)d(z[W].object),delete z[W];delete D[B.id]}}function F(){O(),l!==c&&(l=c,f(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:F,resetDefaultState:O,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:m,enableAttribute:_,disableUnusedAttributes:T}}function qm(t,e,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,h){t.drawArrays(s,l,h),n.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,d;if(r)f=t,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,h,u),n.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Xm(t,e,n){let i;function r(){if(i!==void 0)return i;const v=e.get("EXT_texture_filter_anisotropic");return v!==null?i=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(v){if(v==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,h=t.getParameter(34930),u=t.getParameter(35660),f=t.getParameter(3379),d=t.getParameter(34076),p=t.getParameter(34921),y=t.getParameter(36347),x=t.getParameter(36348),g=t.getParameter(36349),m=u>0,_=o||!!e.get("OES_texture_float"),b=m&&_,T=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:T}}function Ym(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qt,a=new St,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,d){const p=u.length!==0||f||i!==0||r;return r=f,n=h(u,d,0),i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,f,d){const p=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,g=t.get(u);if(!r||p===null||p.length===0||s&&!x)s?h(null):l();else{const m=s?0:i,_=m*4;let b=g.clippingState||null;c.value=b,b=h(p,f,_,d);for(let T=0;T!==_;++T)b[T]=n[T];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){const y=u!==null?u.length:0;let x=null;if(y!==0){if(x=c.value,p!==!0||x===null){const g=d+y*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(x===null||x.length<g)&&(x=new Float32Array(g));for(let _=0,b=d;_!==y;++_,b+=4)o.copy(u[_]).applyMatrix4(m,a),o.normal.toArray(x,b),x[b+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function Zm(t){let e=new WeakMap;function n(o,a){return a===bs?o.mapping=Mr:a===Ms&&(o.mapping=wr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bs||a===Ms)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=t.getRenderList(),h=t.getRenderTarget(),u=new Ka(c.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),t.setRenderTarget(h),t.setRenderList(l),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function Jm(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $m(t,e,n,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)e.update(f[p],34962);const d=u.morphAttributes;for(const p in d){const y=d[p];for(let x=0,g=y.length;x<g;x++)e.update(y[x],34962)}}function l(u){const f=[],d=u.index,p=u.attributes.position;let y=0;if(d!==null){const m=d.array;y=d.version;for(let _=0,b=m.length;_<b;_+=3){const T=m[_+0],v=m[_+1],A=m[_+2];f.push(T,v,v,A,A,T)}}else{const m=p.array;y=p.version;for(let _=0,b=m.length/3-1;_<b;_+=3){const T=_+0,v=_+1,A=_+2;f.push(T,v,v,A,A,T)}}const x=new(Bu(f)>65535?Kn:Qn)(f,1);x.version=y;const g=s.get(u);g&&e.remove(g),s.set(u,x)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Qm(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,d){t.drawElements(s,d,a,f*c),n.update(d,s,1)}function u(f,d,p){if(p===0)return;let y,x;if(r)y=t,x="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](s,d,a,f*c,p),n.update(d,s,p)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Km(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eg(t,e){return t[0]-e[0]}function tg(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ng(t){const e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,h=l===void 0?0:l.length;let u=e[o.id];if(u===void 0){u=[];for(let x=0;x<h;x++)u[x]=[x,0];e[o.id]=u}for(let x=0;x<h;x++){const g=u[x];g[0]=x,g[1]=l[x]}u.sort(tg);for(let x=0;x<8;x++)x<h&&u[x][1]?(i[x][0]=u[x][0],i[x][1]=u[x][1]):(i[x][0]=Number.MAX_SAFE_INTEGER,i[x][1]=0);i.sort(eg);const f=a.morphTargets&&o.morphAttributes.position,d=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const g=i[x],m=g[0],_=g[1];m!==Number.MAX_SAFE_INTEGER&&_?(f&&o.getAttribute("morphTarget"+x)!==f[m]&&o.setAttribute("morphTarget"+x,f[m]),d&&o.getAttribute("morphNormal"+x)!==d[m]&&o.setAttribute("morphNormal"+x,d[m]),n[x]=_,p+=_):(f&&o.hasAttribute("morphTarget"+x)===!0&&o.deleteAttribute("morphTarget"+x),d&&o.hasAttribute("morphNormal"+x)===!0&&o.deleteAttribute("morphNormal"+x),n[x]=0)}const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function ig(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);return r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}function $i(t=null,e=1,n=1,i=1){Be.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=at,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}$i.prototype=Object.create(Be.prototype),$i.prototype.constructor=$i,$i.prototype.isDataTexture2DArray=!0;function Qi(t=null,e=1,n=1,i=1){Be.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=at,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Qi.prototype=Object.create(Be.prototype),Qi.prototype.constructor=Qi,Qi.prototype.isDataTexture3D=!0;const Gu=new Be,rg=new $i,sg=new Qi,Uu=new Zt,Hu=[],ku=[],Vu=new Float32Array(16),Wu=new Float32Array(9),ju=new Float32Array(4);function Ki(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hu[r];if(s===void 0&&(s=new Float32Array(r),Hu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qu(t,e){let n=ku[e];n===void 0&&(n=new Int32Array(e),ku[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function og(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ag(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function cg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function lg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function ug(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Pt(n,i))return;ju.set(i),t.uniformMatrix2fv(this.addr,!1,ju),At(n,i)}}function hg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Pt(n,i))return;Wu.set(i),t.uniformMatrix3fv(this.addr,!1,Wu),At(n,i)}}function fg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Pt(n,i))return;Vu.set(i),t.uniformMatrix4fv(this.addr,!1,Vu),At(n,i)}}function dg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||Gu,r)}function pg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rg,r)}function mg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sg,r)}function gg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||Uu,r)}function yg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xg(t,e){const n=this.cache;Pt(n,e)||(t.uniform2iv(this.addr,e),At(n,e))}function vg(t,e){const n=this.cache;Pt(n,e)||(t.uniform3iv(this.addr,e),At(n,e))}function _g(t,e){const n=this.cache;Pt(n,e)||(t.uniform4iv(this.addr,e),At(n,e))}function bg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Mg(t){switch(t){case 5126:return og;case 35664:return ag;case 35665:return cg;case 35666:return lg;case 35674:return ug;case 35675:return hg;case 35676:return fg;case 5124:case 35670:return yg;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return pg}}function wg(t,e){t.uniform1fv(this.addr,e)}function Sg(t,e){t.uniform1iv(this.addr,e)}function Tg(t,e){t.uniform2iv(this.addr,e)}function Eg(t,e){t.uniform3iv(this.addr,e)}function Ag(t,e){t.uniform4iv(this.addr,e)}function Lg(t,e){const n=Ki(e,this.size,2);t.uniform2fv(this.addr,n)}function Rg(t,e){const n=Ki(e,this.size,3);t.uniform3fv(this.addr,n)}function Cg(t,e){const n=Ki(e,this.size,4);t.uniform4fv(this.addr,n)}function Pg(t,e){const n=Ki(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ig(t,e){const n=Ki(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Dg(t,e){const n=Ki(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Fg(t,e,n){const i=e.length,r=qu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||Gu,r[s])}function Bg(t,e,n){const i=e.length,r=qu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||Uu,r[s])}function Og(t){switch(t){case 5126:return wg;case 35664:return Lg;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Ig;case 35676:return Dg;case 5124:case 35670:return Sg;case 35667:case 35671:return Tg;case 35668:case 35672:return Eg;case 35669:case 35673:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35680:case 36300:case 36308:case 36293:return Bg}}function Ng(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Mg(e.type)}function Xu(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Og(e.type)}Xu.prototype.updateCache=function(t){const e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),At(e,t)};function Yu(t){this.id=t,this.seq=[],this.map={}}Yu.prototype.setValue=function(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(t,e[o.id],n)}};const ec=/(\w+)(\])?(\[|\.)?/g;function Zu(t,e){t.seq.push(e),t.map[e.id]=e}function zg(t,e,n){const i=t.name,r=i.length;for(ec.lastIndex=0;;){const s=ec.exec(i),o=ec.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Zu(n,l===void 0?new Ng(a,t,e):new Xu(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new Yu(a),Zu(n,u)),n=u}}}function Rn(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);zg(r,s,this)}}Rn.prototype.setValue=function(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)},Rn.prototype.setOptional=function(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)},Rn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}},Rn.seqWithValue=function(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n};function Ju(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Gg=0;function Ug(t){const e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function $u(t){switch(t){case dt:return["Linear","( value )"];case Fi:return["sRGB","( value )"];case As:return["RGBE","( value )"];case Aa:return["RGBM","( value, 7.0 )"];case La:return["RGBM","( value, 16.0 )"];case Ra:return["RGBD","( value, 256.0 )"];case Es:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case _u:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Qu(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Ug(s)}function qr(t,e){const n=$u(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Hg(t,e){const n=$u(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function kg(t,e){let n;switch(e){case xl:n="Linear";break;case vl:n="Reinhard";break;case _l:n="OptimizedCineon";break;case ma:n="ACESFilmic";break;case bl:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Vg(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function Wg(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jg(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r).name;n[o]=t.getAttribLocation(e,o)}return n}function Xr(t){return t!==""}function Ku(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(t){return t.replace(qg,Xg)}function Xg(t,e){const n=Re[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return tc(n)}const Yg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(t){return t.replace(Zg,nh).replace(Yg,Jg)}function Jg(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),nh(t,e,n,i)}function nh(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ih(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $g(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===sa?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===oa?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Qg(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Mr:case wr:e="ENVMAP_TYPE_CUBE";break;case Ei:case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wr:case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function ey(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case br:e="ENVMAP_BLENDING_MULTIPLY";break;case gl:e="ENVMAP_BLENDING_MIX";break;case yl:e="ENVMAP_BLENDING_ADD";break}return e}function ty(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=$g(n),l=Qg(n),h=Kg(n),u=ey(n),f=t.gammaFactor>0?t.gammaFactor:1,d=n.isWebGL2?"":Vg(n),p=Wg(s),y=r.createProgram();let x,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=[p].filter(Xr).join(`
`),x.length>0&&(x+=`
`),g=[d,p].filter(Xr).join(`
`),g.length>0&&(g+=`
`)):(x=[ih(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),g=[d,ih(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vn?"#define TONE_MAPPING":"",n.toneMapping!==Vn?Re.tonemapping_pars_fragment:"",n.toneMapping!==Vn?kg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Re.encodings_pars_fragment,n.map?qr("mapTexelToLinear",n.mapEncoding):"",n.matcap?qr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?qr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?qr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?qr("lightMapTexelToLinear",n.lightMapEncoding):"",Hg("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xr).join(`
`)),o=tc(o),o=Ku(o,n),o=eh(o,n),a=tc(a),a=Ku(a,n),a=eh(a,n),o=th(o),a=th(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===Ca?"":"out highp vec4 pc_fragColor;",n.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+x+o,b=m+g+a,T=Ju(r,35633,_),v=Ju(r,35632,b);if(r.attachShader(y,T),r.attachShader(y,v),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const L=r.getProgramInfoLog(y).trim(),P=r.getShaderInfoLog(T).trim(),F=r.getShaderInfoLog(v).trim();let O=!0,B=!0;if(r.getProgramParameter(y,35714)===!1){O=!1;const C=Qu(r,T,"vertex"),D=Qu(r,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",L,C,D)}else L!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",L):(P===""||F==="")&&(B=!1);B&&(this.diagnostics={runnable:O,programLog:L,vertexShader:{log:P,prefix:x},fragmentShader:{log:F,prefix:g}})}r.deleteShader(T),r.deleteShader(v);let A;this.getUniforms=function(){return A===void 0&&(A=new Rn(r,y)),A};let I;return this.getAttributes=function(){return I===void 0&&(I=jg(r,y)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=v,this}function ny(t,e,n,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,h=i.maxVertexUniforms,u=i.vertexTextures;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(v){const I=v.skeleton.bones;if(l)return 1024;{const P=Math.floor((h-20)/4),F=Math.min(P,I.length);return F<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+F+"."),0):F}}function x(v){let A;return v&&v.isTexture?A=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=v.texture.encoding):A=dt,A}function g(v,A,I,L,P){const F=L.fog,O=v.isMeshStandardMaterial?L.environment:null,B=e.get(v.envMap||O),C=d[v.type],D=P.isSkinnedMesh?y(P):0;v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let z,W;if(C){const oe=Nt[C];z=oe.vertexShader,W=oe.fragmentShader}else z=v.vertexShader,W=v.fragmentShader;const Y=t.getRenderTarget();return{isWebGL2:a,shaderID:C,shaderName:v.type,vertexShader:z,fragmentShader:W,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:P.isInstancedMesh===!0,instancingColor:P.isInstancedMesh===!0&&P.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Y!==null?x(Y.texture):t.outputEncoding,map:!!v.map,mapEncoding:x(v.map),matcap:!!v.matcap,matcapEncoding:x(v.matcap),envMap:!!B,envMapMode:B&&B.mapping,envMapEncoding:x(B),envMapCubeUV:!!B&&(B.mapping===Ei||B.mapping===Sr),lightMap:!!v.lightMap,lightMapEncoding:x(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:x(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===wu,tangentSpaceNormalMap:v.normalMapType===_n,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmissionMap:!!v.transmissionMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.transmissionMap)&&!!v.displacementMap,fog:!!F,useFog:v.fog,fogExp2:F&&F.isFogExp2,flatShading:v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:v.skinning&&D>0,maxBones:D,useVertexTexture:l,morphTargets:v.morphTargets,morphNormals:v.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:v.toneMapped?t.toneMapping:Vn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===Si,flipSided:v.side===Qe,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.fragmentShader),A.push(v.vertexShader)),v.defines!==void 0)for(const I in v.defines)A.push(I),A.push(v.defines[I]);if(v.isRawShaderMaterial===!1){for(let I=0;I<p.length;I++)A.push(v[p[I]]);A.push(t.outputEncoding),A.push(t.gammaFactor)}return A.push(v.customProgramCacheKey),A.join()}function _(v){const A=d[v.type];let I;if(A){const L=Nt[A];I=Nu.clone(L.uniforms)}else I=v.uniforms;return I}function b(v,A){let I;for(let L=0,P=o.length;L<P;L++){const F=o[L];if(F.cacheKey===A){I=F,++I.usedTimes;break}}return I===void 0&&(I=new ty(t,A,v,r),o.push(I)),I}function T(v){if(--v.usedTimes==0){const A=o.indexOf(v);o[A]=o[o.length-1],o.pop(),v.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:b,releaseProgram:T,programs:o}}function iy(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ry(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rh(t){const e=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(f,d,p,y,x,g){let m=e[n];const _=t.get(p);return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,program:_.program||s,groupOrder:y,renderOrder:f.renderOrder,z:x,group:g},e[n]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.program=_.program||s,m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=x,m.group=g),n++,m}function c(f,d,p,y,x,g){const m=a(f,d,p,y,x,g);(p.transparent===!0?r:i).push(m)}function l(f,d,p,y,x,g){const m=a(f,d,p,y,x,g);(p.transparent===!0?r:i).unshift(m)}function h(f,d){i.length>1&&i.sort(f||ry),r.length>1&&r.sort(d||sy)}function u(){for(let f=n,d=e.length;f<d;f++){const p=e[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:u,sort:h}}function oy(t){let e=new WeakMap;function n(r,s){const o=e.get(r);let a;return o===void 0?(a=new rh(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new rh(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function ay(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new M,color:new ne};break;case"SpotLight":n={position:new M,direction:new M,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new M,color:new ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new M,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":n={color:new ne,position:new M,halfWidth:new M,halfHeight:new M};break}return t[e.id]=n,n}}}function cy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ly=0;function uy(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function hy(t,e){const n=new ay,i=cy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new M);const s=new M,o=new Te,a=new Te;function c(h){let u=0,f=0,d=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,y=0,x=0,g=0,m=0,_=0,b=0,T=0;h.sort(uy);for(let A=0,I=h.length;A<I;A++){const L=h[A],P=L.color,F=L.intensity,O=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=P.r*F,f+=P.g*F,d+=P.b*F;else if(L.isLightProbe)for(let C=0;C<9;C++)r.probe[C].addScaledVector(L.sh.coefficients[C],F);else if(L.isDirectionalLight){const C=n.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const D=L.shadow,z=i.get(L);z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,r.directionalShadow[p]=z,r.directionalShadowMap[p]=B,r.directionalShadowMatrix[p]=L.shadow.matrix,_++}r.directional[p]=C,p++}else if(L.isSpotLight){const C=n.get(L);if(C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(P).multiplyScalar(F),C.distance=O,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,L.castShadow){const D=L.shadow,z=i.get(L);z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,r.spotShadow[x]=z,r.spotShadowMap[x]=B,r.spotShadowMatrix[x]=L.shadow.matrix,T++}r.spot[x]=C,x++}else if(L.isRectAreaLight){const C=n.get(L);C.color.copy(P).multiplyScalar(F),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=C,g++}else if(L.isPointLight){const C=n.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),C.distance=L.distance,C.decay=L.decay,L.castShadow){const D=L.shadow,z=i.get(L);z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,z.shadowCameraNear=D.camera.near,z.shadowCameraFar=D.camera.far,r.pointShadow[y]=z,r.pointShadowMap[y]=B,r.pointShadowMatrix[y]=L.shadow.matrix,b++}r.point[y]=C,y++}else if(L.isHemisphereLight){const C=n.get(L);C.skyColor.copy(L.color).multiplyScalar(F),C.groundColor.copy(L.groundColor).multiplyScalar(F),r.hemi[m]=C,m++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=d;const v=r.hash;(v.directionalLength!==p||v.pointLength!==y||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==_||v.numPointShadows!==b||v.numSpotShadows!==T)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=g,r.point.length=y,r.hemi.length=m,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=T,v.directionalLength=p,v.pointLength=y,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=_,v.numPointShadows=b,v.numSpotShadows=T,r.version=ly++)}function l(h,u){let f=0,d=0,p=0,y=0,x=0;const g=u.matrixWorldInverse;for(let m=0,_=h.length;m<_;m++){const b=h[m];if(b.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(b.isSpotLight){const T=r.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const T=r.rectArea[y];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const T=r.point[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const T=r.hemi[x];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),T.direction.normalize(),x++}}}return{setup:c,setupView:l,state:r}}function sh(t,e){const n=new hy(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(){n.setup(i)}function l(u){n.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fy(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new sh(t,e),n.set(s,[]),n.get(s).push(a)):o>=n.get(s).length?(a=new sh(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}function Cn(t){me.call(this),this.type="MeshDepthMaterial",this.depthPacking=bu,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}Cn.prototype=Object.create(me.prototype),Cn.prototype.constructor=Cn,Cn.prototype.isMeshDepthMaterial=!0,Cn.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function Pn(t){me.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}Pn.prototype=Object.create(me.prototype),Pn.prototype.constructor=Pn,Pn.prototype.isMeshDistanceMaterial=!0,Pn.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function oh(t,e,n){let i=new Wr;const r=new k,s=new k,o=new Ne,a=[],c=[],l={},h={0:Qe,1:Hn,2:Si},u=new pt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new k},radius:{value:4}},vertexShader:py,fragmentShader:dy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const d=new fe;d.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ze(d,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa,this.render=function(T,v,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||T.length===0)return;const I=t.getRenderTarget(),L=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(nn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let O=0,B=T.length;O<B;O++){const C=T[O],D=C.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const z=D.getFrameExtents();if(r.multiply(z),s.copy(D.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/z.x),r.x=s.x*z.x,D.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/z.y),r.y=s.y*z.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===wi){const Y={minFilter:et,magFilter:et,format:wt};D.map=new bn(r.x,r.y,Y),D.map.texture.name=C.name+".shadowMap",D.mapPass=new bn(r.x,r.y,Y),D.camera.updateProjectionMatrix()}if(D.map===null){const Y={minFilter:Ke,magFilter:Ke,format:wt};D.map=new bn(r.x,r.y,Y),D.map.texture.name=C.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const W=D.getViewportCount();for(let Y=0;Y<W;Y++){const K=D.getViewport(Y);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),F.viewport(o),D.updateMatrices(C,Y),i=D.getFrustum(),b(v,A,D.camera,C,this.type)}!D.isPointLightShadow&&this.type===wi&&x(D,A),D.needsUpdate=!1}y.needsUpdate=!1,t.setRenderTarget(I,L,P)};function x(T,v){const A=e.update(p);u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(v,null,A,u,p,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(v,null,A,f,p,null)}function g(T,v,A){const I=T<<0|v<<1|A<<2;let L=a[I];return L===void 0&&(L=new Cn({depthPacking:Mu,morphTargets:T,skinning:v}),a[I]=L),L}function m(T,v,A){const I=T<<0|v<<1|A<<2;let L=c[I];return L===void 0&&(L=new Pn({morphTargets:T,skinning:v}),c[I]=L),L}function _(T,v,A,I,L,P,F){let O=null,B=g,C=T.customDepthMaterial;if(I.isPointLight===!0&&(B=m,C=T.customDistanceMaterial),C===void 0){let D=!1;A.morphTargets===!0&&(D=v.morphAttributes&&v.morphAttributes.position&&v.morphAttributes.position.length>0);let z=!1;T.isSkinnedMesh===!0&&(A.skinning===!0?z=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",T));const W=T.isInstancedMesh===!0;O=B(D,z,W)}else O=C;if(t.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){const D=O.uuid,z=A.uuid;let W=l[D];W===void 0&&(W={},l[D]=W);let Y=W[z];Y===void 0&&(Y=O.clone(),W[z]=Y),O=Y}return O.visible=A.visible,O.wireframe=A.wireframe,F===wi?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:h[A.side],O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,I.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(I.matrixWorld),O.nearDistance=L,O.farDistance=P),O}function b(T,v,A,I,L){if(T.visible===!1)return;if(T.layers.test(v.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===wi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const O=e.update(T),B=T.material;if(Array.isArray(B)){const C=O.groups;for(let D=0,z=C.length;D<z;D++){const W=C[D],Y=B[W.materialIndex];if(Y&&Y.visible){const K=_(T,O,Y,I,A.near,A.far,L);t.renderBufferDirect(A,null,O,K,T,W)}}}else if(B.visible){const C=_(T,O,B,I,A.near,A.far,L);t.renderBufferDirect(A,null,O,C,T,null)}}const F=T.children;for(let O=0,B=F.length;O<B;O++)b(F[O],v,A,I,L)}}function my(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const X=new Ne;let te=null;const ue=new Ne(0,0,0,0);return{setMask:function($){te!==$&&!R&&(t.colorMask($,$,$,$),te=$)},setLocked:function($){R=$},setClear:function($,le,pe,be,ae){ae===!0&&($*=be,le*=be,pe*=be),X.set($,le,pe,be),ue.equals(X)===!1&&(t.clearColor($,le,pe,be),ue.copy(X))},reset:function(){R=!1,te=null,ue.set(-1,0,0,0)}}}function s(){let R=!1,X=null,te=null,ue=null;return{setTest:function($){$?oe(2929):se(2929)},setMask:function($){X!==$&&!R&&(t.depthMask($),X=$)},setFunc:function($){if(te!==$){if($)switch($){case ll:t.depthFunc(512);break;case ul:t.depthFunc(519);break;case hl:t.depthFunc(513);break;case vs:t.depthFunc(515);break;case fl:t.depthFunc(514);break;case dl:t.depthFunc(518);break;case pl:t.depthFunc(516);break;case ml:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);te=$}},setLocked:function($){R=$},setClear:function($){ue!==$&&(t.clearDepth($),ue=$)},reset:function(){R=!1,X=null,te=null,ue=null}}}function o(){let R=!1,X=null,te=null,ue=null,$=null,le=null,pe=null,be=null,ae=null;return{setTest:function(xe){R||(xe?oe(2960):se(2960))},setMask:function(xe){X!==xe&&!R&&(t.stencilMask(xe),X=xe)},setFunc:function(xe,je,gt){(te!==xe||ue!==je||$!==gt)&&(t.stencilFunc(xe,je,gt),te=xe,ue=je,$=gt)},setOp:function(xe,je,gt){(le!==xe||pe!==je||be!==gt)&&(t.stencilOp(xe,je,gt),le=xe,pe=je,be=gt)},setLocked:function(xe){R=xe},setClear:function(xe){ae!==xe&&(t.clearStencil(xe),ae=xe)},reset:function(){R=!1,X=null,te=null,ue=null,$=null,le=null,pe=null,be=null,ae=null}}}const a=new r,c=new s,l=new o;let h={},u=null,f=null,d=null,p=null,y=null,x=null,g=null,m=null,_=null,b=!1,T=null,v=null,A=null,I=null,L=null;const P=t.getParameter(35661);let F=!1,O=0;const B=t.getParameter(7938);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=O>=2);let C=null,D={};const z=new Ne,W=new Ne;function Y(R,X,te){const ue=new Uint8Array(4),$=t.createTexture();t.bindTexture(R,$),t.texParameteri(R,10241,9728),t.texParameteri(R,10240,9728);for(let le=0;le<te;le++)t.texImage2D(X+le,0,6408,1,1,0,6408,5121,ue);return $}const K={};K[3553]=Y(3553,3553,1),K[34067]=Y(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),oe(2929),c.setFunc(vs),ve(!1),Ie(ra),oe(2884),H(nn);function oe(R){h[R]!==!0&&(t.enable(R),h[R]=!0)}function se(R){h[R]!==!1&&(t.disable(R),h[R]=!1)}function we(R){return u!==R?(t.useProgram(R),u=R,!0):!1}const Se={[kn]:32774,[Qc]:32778,[Kc]:32779};if(i)Se[ha]=32775,Se[fa]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Se[ha]=R.MIN_EXT,Se[fa]=R.MAX_EXT)}const Ge={[el]:0,[tl]:1,[nl]:768,[da]:770,[cl]:776,[ol]:774,[rl]:772,[il]:769,[pa]:771,[al]:775,[sl]:773};function H(R,X,te,ue,$,le,pe,be){if(R===nn){f&&(se(3042),f=!1);return}if(f||(oe(3042),f=!0),R!==$c){if(R!==d||be!==b){if((p!==kn||g!==kn)&&(t.blendEquation(32774),p=kn,g=kn),be)switch(R){case Ti:t.blendFuncSeparate(1,771,1,771);break;case ca:t.blendFunc(1,1);break;case la:t.blendFuncSeparate(0,0,769,771);break;case ua:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ti:t.blendFuncSeparate(770,771,1,771);break;case ca:t.blendFunc(770,1);break;case la:t.blendFunc(0,769);break;case ua:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,x=null,m=null,_=null,d=R,b=be}return}$=$||X,le=le||te,pe=pe||ue,(X!==p||$!==g)&&(t.blendEquationSeparate(Se[X],Se[$]),p=X,g=$),(te!==y||ue!==x||le!==m||pe!==_)&&(t.blendFuncSeparate(Ge[te],Ge[ue],Ge[le],Ge[pe]),y=te,x=ue,m=le,_=pe),d=R,b=null}function ot(R,X){R.side===Si?se(2884):oe(2884);let te=R.side===Qe;X&&(te=!te),ve(te),R.blending===Ti&&R.transparent===!1?H(nn):H(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const ue=R.stencilWrite;l.setTest(ue),ue&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Fe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits)}function ve(R){T!==R&&(R?t.frontFace(2304):t.frontFace(2305),T=R)}function Ie(R){R!==Zc?(oe(2884),R!==v&&(R===ra?t.cullFace(1029):R===Jc?t.cullFace(1028):t.cullFace(1032))):se(2884),v=R}function _e(R){R!==A&&(F&&t.lineWidth(R),A=R)}function Fe(R,X,te){R?(oe(32823),(I!==X||L!==te)&&(t.polygonOffset(X,te),I=X,L=te)):se(32823)}function Le(R){R?oe(3089):se(3089)}function j(R){R===void 0&&(R=33984+P-1),C!==R&&(t.activeTexture(R),C=R)}function Z(R,X){C===null&&j();let te=D[C];te===void 0&&(te={type:void 0,texture:void 0},D[C]=te),(te.type!==R||te.texture!==X)&&(t.bindTexture(R,X||K[R]),te.type=R,te.texture=X)}function Q(){const R=D[C];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function E(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function w(R){z.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),z.copy(R))}function q(R){W.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),W.copy(R))}function V(){h={},C=null,D={},u=null,f=null,d=null,p=null,y=null,x=null,g=null,m=null,_=null,b=!1,T=null,v=null,A=null,I=null,L=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:oe,disable:se,useProgram:we,setBlending:H,setMaterial:ot,setFlipSided:ve,setCullFace:Ie,setLineWidth:_e,setPolygonOffset:Fe,setScissorTest:Le,activeTexture:j,bindTexture:Z,unbindTexture:Q,compressedTexImage2D:de,texImage2D:ie,texImage3D:E,scissor:w,viewport:q,reset:V}}function gy(t,e,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,f=new WeakMap;let d,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function y(E,w){return p?new OffscreenCanvas(E,w):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(E,w,q,V){let R=1;if((E.width>V||E.height>V)&&(R=V/Math.max(E.width,E.height)),R<1||w===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){const X=w?ye.floorPowerOfTwo:Math.floor,te=X(R*E.width),ue=X(R*E.height);d===void 0&&(d=y(te,ue));const $=q?y(te,ue):d;return $.width=te,$.height=ue,$.getContext("2d").drawImage(E,0,0,te,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+te+"x"+ue+")."),$}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return ye.isPowerOfTwo(E.width)&&ye.isPowerOfTwo(E.height)}function m(E){return a?!1:E.wrapS!==at||E.wrapT!==at||E.minFilter!==Ke&&E.minFilter!==et}function _(E,w){return E.generateMipmaps&&w&&E.minFilter!==Ke&&E.minFilter!==et}function b(E,w,q,V){t.generateMipmap(E);const R=i.get(w);R.__maxMipLevel=Math.log(Math.max(q,V))*Math.LOG2E}function T(E,w,q){if(a===!1)return w;if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=w;return w===6403&&(q===5126&&(V=33326),q===5131&&(V=33325),q===5121&&(V=33321)),w===6407&&(q===5126&&(V=34837),q===5131&&(V=34843),q===5121&&(V=32849)),w===6408&&(q===5126&&(V=34836),q===5131&&(V=34842),q===5121&&(V=32856)),(V===33325||V===33326||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function v(E){return E===Ke||E===Tr||E===Er?9728:9729}function A(E){const w=E.target;w.removeEventListener("dispose",A),L(w),w.isVideoTexture&&f.delete(w),o.memory.textures--}function I(E){const w=E.target;w.removeEventListener("dispose",I),P(w),o.memory.textures--}function L(E){const w=i.get(E);w.__webglInit!==void 0&&(t.deleteTexture(w.__webglTexture),i.remove(E))}function P(E){const w=i.get(E),q=i.get(E.texture);if(!!E){if(q.__webglTexture!==void 0&&t.deleteTexture(q.__webglTexture),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++)t.deleteFramebuffer(w.__webglFramebuffer[V]),w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[V]);else t.deleteFramebuffer(w.__webglFramebuffer),w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer&&t.deleteRenderbuffer(w.__webglColorRenderbuffer),w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer);i.remove(E.texture),i.remove(E)}}let F=0;function O(){F=0}function B(){const E=F;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),F+=1,E}function C(E,w){const q=i.get(E);if(E.isVideoTexture&&j(E),E.version>0&&q.__version!==E.version){const V=E.image;if(V===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(q,E,w);return}}n.activeTexture(33984+w),n.bindTexture(3553,q.__webglTexture)}function D(E,w){const q=i.get(E);if(E.version>0&&q.__version!==E.version){we(q,E,w);return}n.activeTexture(33984+w),n.bindTexture(35866,q.__webglTexture)}function z(E,w){const q=i.get(E);if(E.version>0&&q.__version!==E.version){we(q,E,w);return}n.activeTexture(33984+w),n.bindTexture(32879,q.__webglTexture)}function W(E,w){const q=i.get(E);if(E.version>0&&q.__version!==E.version){Se(q,E,w);return}n.activeTexture(33984+w),n.bindTexture(34067,q.__webglTexture)}const Y={[Ai]:10497,[at]:33071,[Li]:33648},K={[Ke]:9728,[Tr]:9984,[Er]:9986,[et]:9729,[ws]:9985,[Wn]:9987};function oe(E,w,q){q?(t.texParameteri(E,10242,Y[w.wrapS]),t.texParameteri(E,10243,Y[w.wrapT]),(E===32879||E===35866)&&t.texParameteri(E,32882,Y[w.wrapR]),t.texParameteri(E,10240,K[w.magFilter]),t.texParameteri(E,10241,K[w.minFilter])):(t.texParameteri(E,10242,33071),t.texParameteri(E,10243,33071),(E===32879||E===35866)&&t.texParameteri(E,32882,33071),(w.wrapS!==at||w.wrapT!==at)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(E,10240,v(w.magFilter)),t.texParameteri(E,10241,v(w.minFilter)),w.minFilter!==Ke&&w.minFilter!==et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const V=e.get("EXT_texture_filter_anisotropic");if(V){if(w.type===rn&&e.get("OES_texture_float_linear")===null||w.type===Rr&&(a||e.get("OES_texture_half_float_linear"))===null)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function se(E,w){E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",A),E.__webglTexture=t.createTexture(),o.memory.textures++)}function we(E,w,q){let V=3553;w.isDataTexture2DArray&&(V=35866),w.isDataTexture3D&&(V=32879),se(E,w),n.activeTexture(33984+q),n.bindTexture(V,E.__webglTexture),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment);const R=m(w)&&g(w.image)===!1,X=x(w.image,R,!1,h),te=g(X)||a,ue=s.convert(w.format);let $=s.convert(w.type),le=T(w.internalFormat,ue,$);oe(V,w,te);let pe;const be=w.mipmaps;if(w.isDepthTexture)le=6402,a?w.type===rn?le=36012:w.type===Lr?le=33190:w.type===Ci?le=35056:le=33189:w.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===jn&&le===6402&&w.type!==Ar&&w.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ar,$=s.convert(w.type)),w.format===Pi&&le===6402&&(le=34041,w.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ci,$=s.convert(w.type))),n.texImage2D(3553,0,le,X.width,X.height,0,ue,$,null);else if(w.isDataTexture)if(be.length>0&&te){for(let ae=0,xe=be.length;ae<xe;ae++)pe=be[ae],n.texImage2D(3553,ae,le,pe.width,pe.height,0,ue,$,pe.data);w.generateMipmaps=!1,E.__maxMipLevel=be.length-1}else n.texImage2D(3553,0,le,X.width,X.height,0,ue,$,X.data),E.__maxMipLevel=0;else if(w.isCompressedTexture){for(let ae=0,xe=be.length;ae<xe;ae++)pe=be[ae],w.format!==wt&&w.format!==sn?ue!==null?n.compressedTexImage2D(3553,ae,le,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,ae,le,pe.width,pe.height,0,ue,$,pe.data);E.__maxMipLevel=be.length-1}else if(w.isDataTexture2DArray)n.texImage3D(35866,0,le,X.width,X.height,X.depth,0,ue,$,X.data),E.__maxMipLevel=0;else if(w.isDataTexture3D)n.texImage3D(32879,0,le,X.width,X.height,X.depth,0,ue,$,X.data),E.__maxMipLevel=0;else if(be.length>0&&te){for(let ae=0,xe=be.length;ae<xe;ae++)pe=be[ae],n.texImage2D(3553,ae,le,ue,$,pe);w.generateMipmaps=!1,E.__maxMipLevel=be.length-1}else n.texImage2D(3553,0,le,ue,$,X),E.__maxMipLevel=0;_(w,te)&&b(V,w,X.width,X.height),E.__version=w.version,w.onUpdate&&w.onUpdate(w)}function Se(E,w,q){if(w.image.length!==6)return;se(E,w),n.activeTexture(33984+q),n.bindTexture(34067,E.__webglTexture),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment);const V=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),R=w.image[0]&&w.image[0].isDataTexture,X=[];for(let ae=0;ae<6;ae++)!V&&!R?X[ae]=x(w.image[ae],!1,!0,l):X[ae]=R?w.image[ae].image:w.image[ae];const te=X[0],ue=g(te)||a,$=s.convert(w.format),le=s.convert(w.type),pe=T(w.internalFormat,$,le);oe(34067,w,ue);let be;if(V){for(let ae=0;ae<6;ae++){be=X[ae].mipmaps;for(let xe=0;xe<be.length;xe++){const je=be[xe];w.format!==wt&&w.format!==sn?$!==null?n.compressedTexImage2D(34069+ae,xe,pe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+ae,xe,pe,je.width,je.height,0,$,le,je.data)}}E.__maxMipLevel=be.length-1}else{be=w.mipmaps;for(let ae=0;ae<6;ae++)if(R){n.texImage2D(34069+ae,0,pe,X[ae].width,X[ae].height,0,$,le,X[ae].data);for(let xe=0;xe<be.length;xe++){const gt=be[xe].image[ae].image;n.texImage2D(34069+ae,xe+1,pe,gt.width,gt.height,0,$,le,gt.data)}}else{n.texImage2D(34069+ae,0,pe,$,le,X[ae]);for(let xe=0;xe<be.length;xe++){const je=be[xe];n.texImage2D(34069+ae,xe+1,pe,$,le,je.image[ae])}}E.__maxMipLevel=be.length}_(w,ue)&&b(34067,w,te.width,te.height),E.__version=w.version,w.onUpdate&&w.onUpdate(w)}function Ge(E,w,q,V){const R=s.convert(w.texture.format),X=s.convert(w.texture.type),te=T(w.texture.internalFormat,R,X);n.texImage2D(V,0,te,w.width,w.height,0,R,X,null),t.bindFramebuffer(36160,E),t.framebufferTexture2D(36160,q,V,i.get(w.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function H(E,w,q){if(t.bindRenderbuffer(36161,E),w.depthBuffer&&!w.stencilBuffer){let V=33189;if(q){const R=w.depthTexture;R&&R.isDepthTexture&&(R.type===rn?V=36012:R.type===Lr&&(V=33190));const X=Le(w);t.renderbufferStorageMultisample(36161,X,V,w.width,w.height)}else t.renderbufferStorage(36161,V,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,E)}else if(w.depthBuffer&&w.stencilBuffer){if(q){const V=Le(w);t.renderbufferStorageMultisample(36161,V,35056,w.width,w.height)}else t.renderbufferStorage(36161,34041,w.width,w.height);t.framebufferRenderbuffer(36160,33306,36161,E)}else{const V=s.convert(w.texture.format),R=s.convert(w.texture.type),X=T(w.texture.internalFormat,V,R);if(q){const te=Le(w);t.renderbufferStorageMultisample(36161,te,X,w.width,w.height)}else t.renderbufferStorage(36161,X,w.width,w.height)}t.bindRenderbuffer(36161,null)}function ot(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),C(w.depthTexture,0);const V=i.get(w.depthTexture).__webglTexture;if(w.depthTexture.format===jn)t.framebufferTexture2D(36160,36096,3553,V,0);else if(w.depthTexture.format===Pi)t.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function ve(E){const w=i.get(E),q=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ot(w.__webglFramebuffer,E)}else if(q){w.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,w.__webglFramebuffer[V]),w.__webglDepthbuffer[V]=t.createRenderbuffer(),H(w.__webglDepthbuffer[V],E,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),H(w.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Ie(E){const w=i.get(E),q=i.get(E.texture);E.addEventListener("dispose",I),q.__webglTexture=t.createTexture(),o.memory.textures++;const V=E.isWebGLCubeRenderTarget===!0,R=E.isWebGLMultisampleRenderTarget===!0,X=g(E)||a;if(a&&E.texture.format===sn&&(E.texture.type===rn||E.texture.type===Rr)&&(E.texture.format=wt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),V){w.__webglFramebuffer=[];for(let te=0;te<6;te++)w.__webglFramebuffer[te]=t.createFramebuffer()}else if(w.__webglFramebuffer=t.createFramebuffer(),R)if(a){w.__webglMultisampledFramebuffer=t.createFramebuffer(),w.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,w.__webglColorRenderbuffer);const te=s.convert(E.texture.format),ue=s.convert(E.texture.type),$=T(E.texture.internalFormat,te,ue),le=Le(E);t.renderbufferStorageMultisample(36161,le,$,E.width,E.height),t.bindFramebuffer(36160,w.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,w.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),E.depthBuffer&&(w.__webglDepthRenderbuffer=t.createRenderbuffer(),H(w.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(V){n.bindTexture(34067,q.__webglTexture),oe(34067,E.texture,X);for(let te=0;te<6;te++)Ge(w.__webglFramebuffer[te],E,36064,34069+te);_(E.texture,X)&&b(34067,E.texture,E.width,E.height),n.bindTexture(34067,null)}else n.bindTexture(3553,q.__webglTexture),oe(3553,E.texture,X),Ge(w.__webglFramebuffer,E,36064,3553),_(E.texture,X)&&b(3553,E.texture,E.width,E.height),n.bindTexture(3553,null);E.depthBuffer&&ve(E)}function _e(E){const w=E.texture,q=g(E)||a;if(_(w,q)){const V=E.isWebGLCubeRenderTarget?34067:3553,R=i.get(w).__webglTexture;n.bindTexture(V,R),b(V,w,E.width,E.height),n.bindTexture(V,null)}}function Fe(E){if(E.isWebGLMultisampleRenderTarget)if(a){const w=i.get(E);t.bindFramebuffer(36008,w.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,w.__webglFramebuffer);const q=E.width,V=E.height;let R=16384;E.depthBuffer&&(R|=256),E.stencilBuffer&&(R|=1024),t.blitFramebuffer(0,0,q,V,0,0,q,V,R,9728),t.bindFramebuffer(36160,w.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Le(E){return a&&E.isWebGLMultisampleRenderTarget?Math.min(u,E.samples):0}function j(E){const w=o.render.frame;f.get(E)!==w&&(f.set(E,w),E.update())}let Z=!1,Q=!1;function de(E,w){E&&E.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),E=E.texture),C(E,w)}function ie(E,w){E&&E.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),E=E.texture),W(E,w)}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=C,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=W,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Fe,this.safeSetTexture2D=de,this.safeSetTextureCube=ie}function ah(t,e,n){const i=n.isWebGL2;function r(s){let o;if(s===Ri)return 5121;if(s===Tl)return 32819;if(s===El)return 32820;if(s===Al)return 33635;if(s===Ml)return 5120;if(s===wl)return 5122;if(s===Ar)return 5123;if(s===Sl)return 5124;if(s===Lr)return 5125;if(s===rn)return 5126;if(s===Rr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ll)return 6406;if(s===sn)return 6407;if(s===wt)return 6408;if(s===Rl)return 6409;if(s===Cl)return 6410;if(s===jn)return 6402;if(s===Pi)return 34041;if(s===Il)return 6403;if(s===Dl)return 36244;if(s===Fl)return 33319;if(s===Bl)return 33320;if(s===Ol)return 36248;if(s===Nl)return 36249;if(s===ga||s===ya||s===xa||s===va)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ga)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ya)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_a||s===ba||s===Ma||s===wa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===_a)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ba)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ma)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Sa||s===Ta)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Sa)return o.COMPRESSED_RGB8_ETC2;if(s===Ta)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Gl||s===Ul||s===Hl||s===kl||s===Vl||s===Wl||s===jl||s===ql||s===Xl||s===Yl||s===Zl||s===Jl||s===$l||s===Ql||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou||s===au||s===cu||s===lu||s===uu||s===hu||s===fu||s===du)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Kl)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Ci)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Ys(t=[]){Ze.call(this),this.cameras=t}Ys.prototype=Object.assign(Object.create(Ze.prototype),{constructor:Ys,isArrayCamera:!0});function pn(){ce.call(this),this.type="Group"}pn.prototype=Object.assign(Object.create(ce.prototype),{constructor:pn,isGroup:!0});function Yr(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Yr.prototype,{constructor:Yr,getHandSpace:function(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(c&&t.hand){s=!0;for(const p of t.hand.values()){const y=e.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const g=new pn;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[p.jointName]=g,c.add(g)}const x=c.joints[p.jointName];y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=y.radius),x.visible=y!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=l.position.distanceTo(h.position),f=.02,d=.005;c.inputState.pinching&&u>f+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function ch(t,e){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,h=new Ze;h.layers.enable(1),h.viewport=new Ne;const u=new Ze;u.layers.enable(2),u.viewport=new Ne;const f=[h,u],d=new Ys;d.layers.enable(1),d.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let F=c[P];return F===void 0&&(F=new Yr,c[P]=F),F.getTargetRaySpace()},this.getControllerGrip=function(P){let F=c[P];return F===void 0&&(F=new Yr,c[P]=F),F.getGripSpace()},this.getHand=function(P){let F=c[P];return F===void 0&&(F=new Yr,c[P]=F),F.getHandSpace()};function x(P){const F=l.get(P.inputSource);F&&F.dispatchEvent({type:P.type,data:P.inputSource})}function g(){l.forEach(function(P,F){P.disconnect(F)}),l.clear(),p=null,y=null,t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),L.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){i.addEventListener("select",x),i.addEventListener("selectstart",x),i.addEventListener("selectend",x),i.addEventListener("squeeze",x),i.addEventListener("squeezestart",x),i.addEventListener("squeezeend",x),i.addEventListener("end",g),i.addEventListener("inputsourceschange",m);const F=e.getContextAttributes();F.xrCompatible!==!0&&await e.makeXRCompatible();const O={antialias:F.antialias,alpha:F.alpha,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:r},B=new XRWebGLLayer(i,e,O);i.updateRenderState({baseLayer:B}),s=await i.requestReferenceSpace(o),L.setContext(i),L.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function m(P){const F=i.inputSources;for(let O=0;O<c.length;O++)l.set(F[O],c[O]);for(let O=0;O<P.removed.length;O++){const B=P.removed[O],C=l.get(B);C&&(C.dispatchEvent({type:"disconnected",data:B}),l.delete(B))}for(let O=0;O<P.added.length;O++){const B=P.added[O],C=l.get(B);C&&C.dispatchEvent({type:"connected",data:B})}}const _=new M,b=new M;function T(P,F,O){_.setFromMatrixPosition(F.matrixWorld),b.setFromMatrixPosition(O.matrixWorld);const B=_.distanceTo(b),C=F.projectionMatrix.elements,D=O.projectionMatrix.elements,z=C[14]/(C[10]-1),W=C[14]/(C[10]+1),Y=(C[9]+1)/C[5],K=(C[9]-1)/C[5],oe=(C[8]-1)/C[0],se=(D[8]+1)/D[0],we=z*oe,Se=z*se,Ge=B/(-oe+se),H=Ge*-oe;F.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(H),P.translateZ(Ge),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const ot=z+Ge,ve=W+Ge,Ie=we-H,_e=Se+(B-H),Fe=Y*W/ve*ot,Le=K*W/ve*ot;P.projectionMatrix.makePerspective(Ie,_e,Fe,Le,ot,ve)}function v(P,F){F===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(F.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.getCamera=function(P){d.near=u.near=h.near=P.near,d.far=u.far=h.far=P.far,(p!==d.near||y!==d.far)&&(i.updateRenderState({depthNear:d.near,depthFar:d.far}),p=d.near,y=d.far);const F=P.parent,O=d.cameras;v(d,F);for(let C=0;C<O.length;C++)v(O[C],F);P.matrixWorld.copy(d.matrixWorld),P.matrix.copy(d.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);const B=P.children;for(let C=0,D=B.length;C<D;C++)B[C].updateMatrixWorld(!0);return O.length===2?T(d,h,u):d.projectionMatrix.copy(h.projectionMatrix),d};let A=null;function I(P,F){if(a=F.getViewerPose(s),a!==null){const B=a.views,C=i.renderState.baseLayer;t.setFramebuffer(C.framebuffer);let D=!1;B.length!==d.cameras.length&&(d.cameras.length=0,D=!0);for(let z=0;z<B.length;z++){const W=B[z],Y=C.getViewport(W),K=f[z];K.matrix.fromArray(W.transform.matrix),K.projectionMatrix.fromArray(W.projectionMatrix),K.viewport.set(Y.x,Y.y,Y.width,Y.height),z===0&&d.matrix.copy(K.matrix),D===!0&&d.cameras.push(K)}}const O=i.inputSources;for(let B=0;B<c.length;B++){const C=c[B],D=O[B];C.update(D,F,s)}A&&A(P,F)}const L=new zu;L.setAnimationLoop(I),this.setAnimationLoop=function(P){A=P},this.dispose=function(){}}Object.assign(ch.prototype,on.prototype);function yy(t){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,b){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),h(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?f(g,m):u(g,m)):m.isMeshMatcapMaterial?(i(g,m),d(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),y(g,m)):m.isMeshNormalMaterial?(i(g,m),x(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,_,b):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const _=t.get(m).envMap;if(_){g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const v=t.get(_).__maxMipLevel;v!==void 0&&(g.maxMipLevel.value=v)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(b=m.clearcoatRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix));let T;m.aoMap?T=m.aoMap:m.lightMap&&(T=m.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uv2Transform.value.copy(T.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m){u(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Qe&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function d(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function y(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function x(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function xy(){const t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return t.style.display="block",t}function er(t){t=t||{};const e=t.canvas!==void 0?t.canvas:xy(),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",h=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let u=null,f=null;const d=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=dt,this.physicallyCorrectLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const p=this;let y=!1,x=null,g=0,m=0,_=null,b=null,T=-1,v=null;const A=new Ne,I=new Ne;let L=null,P=e.width,F=e.height,O=1,B=null,C=null;const D=new Ne(0,0,P,F),z=new Ne(0,0,P,F);let W=!1;const Y=new Wr;let K=!1,oe=!1;const se=new Te,we=new M,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return _===null?O:1}let H=n;function ot(S,G){for(let N=0;N<S.length;N++){const U=S[N],ee=e.getContext(U,G);if(ee!==null)return ee}return null}try{const S={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",je,!1),e.addEventListener("webglcontextrestored",gt,!1),H===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),H=ot(G,S),H===null)throw ot(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,Ie,_e,Fe,Le,j,Z,Q,de,ie,E,w,q,V,R,X,te,ue,$,le,pe;function be(){ve=new Jm(H),Ie=new Xm(H,ve,t),ve.init(Ie),le=new ah(H,ve,Ie),_e=new my(H,ve,Ie),_e.scissor(I.copy(z).multiplyScalar(O).floor()),_e.viewport(A.copy(D).multiplyScalar(O).floor()),Fe=new Km(H),Le=new iy,j=new gy(H,ve,_e,Le,Ie,le,Fe),Z=new Zm(p),Q=new Md(H,Ie),pe=new jm(H,ve,Q,Ie),de=new $m(H,Q,Fe,pe),ie=new ig(H,de,Q,Fe),te=new ng(H),R=new Ym(Le),E=new ny(p,Z,ve,Ie,pe,R),w=new yy(Le),q=new oy(Le),V=new fy(ve,Ie),X=new Wm(p,Z,_e,ie,a),ue=new qm(H,ve,Fe,Ie),$=new Qm(H,ve,Fe,Ie),Fe.programs=E.programs,p.capabilities=Ie,p.extensions=ve,p.properties=Le,p.renderLists=q,p.state=_e,p.info=Fe}be();const ae=new ch(p,H);this.xr=ae;const xe=new oh(p,ie,Ie.maxTextureSize);this.shadowMap=xe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(P,F,!1))},this.getSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),S=new k),S.set(P,F)},this.setSize=function(S,G,N){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=S,F=G,e.width=Math.floor(S*O),e.height=Math.floor(G*O),N!==!1&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),S=new k),S.set(P*O,F*O).floor()},this.setDrawingBufferSize=function(S,G,N){P=S,F=G,O=N,e.width=Math.floor(S*N),e.height=Math.floor(G*N),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),S=new Ne),S.copy(A)},this.getViewport=function(S){return S.copy(D)},this.setViewport=function(S,G,N,U){S.isVector4?D.set(S.x,S.y,S.z,S.w):D.set(S,G,N,U),_e.viewport(A.copy(D).multiplyScalar(O).floor())},this.getScissor=function(S){return S.copy(z)},this.setScissor=function(S,G,N,U){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,G,N,U),_e.scissor(I.copy(z).multiplyScalar(O).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(S){_e.setScissorTest(W=S)},this.setOpaqueSort=function(S){B=S},this.setTransparentSort=function(S){C=S},this.getClearColor=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),S=new ne),S.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(S,G,N){let U=0;(S===void 0||S)&&(U|=16384),(G===void 0||G)&&(U|=256),(N===void 0||N)&&(U|=1024),H.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",je,!1),e.removeEventListener("webglcontextrestored",gt,!1),q.dispose(),V.dispose(),Le.dispose(),Z.dispose(),ie.dispose(),pe.dispose(),ae.dispose(),xr.stop()};function je(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1,be()}function Vc(S){const G=S.target;G.removeEventListener("dispose",Vc),wf(G)}function wf(S){Wc(S),Le.remove(S)}function Wc(S){const G=Le.get(S).program;G!==void 0&&E.releaseProgram(G)}function Sf(S,G){S.render(function(N){p.renderBufferImmediate(N,G)})}this.renderBufferImmediate=function(S,G){pe.initAttributes();const N=Le.get(S);S.hasPositions&&!N.position&&(N.position=H.createBuffer()),S.hasNormals&&!N.normal&&(N.normal=H.createBuffer()),S.hasUvs&&!N.uv&&(N.uv=H.createBuffer()),S.hasColors&&!N.color&&(N.color=H.createBuffer());const U=G.getAttributes();S.hasPositions&&(H.bindBuffer(34962,N.position),H.bufferData(34962,S.positionArray,35048),pe.enableAttribute(U.position),H.vertexAttribPointer(U.position,3,5126,!1,0,0)),S.hasNormals&&(H.bindBuffer(34962,N.normal),H.bufferData(34962,S.normalArray,35048),pe.enableAttribute(U.normal),H.vertexAttribPointer(U.normal,3,5126,!1,0,0)),S.hasUvs&&(H.bindBuffer(34962,N.uv),H.bufferData(34962,S.uvArray,35048),pe.enableAttribute(U.uv),H.vertexAttribPointer(U.uv,2,5126,!1,0,0)),S.hasColors&&(H.bindBuffer(34962,N.color),H.bufferData(34962,S.colorArray,35048),pe.enableAttribute(U.color),H.vertexAttribPointer(U.color,3,5126,!1,0,0)),pe.disableUnusedAttributes(),H.drawArrays(4,0,S.count),S.count=0},this.renderBufferDirect=function(S,G,N,U,ee,Ce){G===null&&(G=Se);const Ee=ee.isMesh&&ee.matrixWorld.determinant()<0,Pe=Yc(S,G,U,ee);_e.setMaterial(U,Ee);let Ae=N.index;const $e=N.attributes.position;if(Ae===null){if($e===void 0||$e.count===0)return}else if(Ae.count===0)return;let Ye=1;U.wireframe===!0&&(Ae=de.getWireframeAttribute(N),Ye=2),(U.morphTargets||U.morphNormals)&&te.update(ee,N,U,Pe),pe.setup(ee,U,Pe,N,Ae);let Me,Oe=ue;Ae!==null&&(Me=Q.get(Ae),Oe=$,Oe.setIndex(Me));const tn=Ae!==null?Ae.count:$e.count,We=N.drawRange.start*Ye,Un=N.drawRange.count*Ye,tt=Ce!==null?Ce.start*Ye:0,na=Ce!==null?Ce.count*Ye:Infinity,yt=Math.max(We,tt),vr=Math.min(tn,We+Un,tt+na)-1,Mi=Math.max(0,vr-yt+1);if(Mi!==0){if(ee.isMesh)U.wireframe===!0?(_e.setLineWidth(U.wireframeLinewidth*Ge()),Oe.setMode(1)):Oe.setMode(4);else if(ee.isLine){let _r=U.linewidth;_r===void 0&&(_r=1),_e.setLineWidth(_r*Ge()),ee.isLineSegments?Oe.setMode(1):ee.isLineLoop?Oe.setMode(2):Oe.setMode(3)}else ee.isPoints?Oe.setMode(0):ee.isSprite&&Oe.setMode(4);if(ee.isInstancedMesh)Oe.renderInstances(yt,Mi,ee.count);else if(N.isInstancedBufferGeometry){const _r=Math.min(N.instanceCount,N._maxInstanceCount);Oe.renderInstances(yt,Mi,_r)}else Oe.render(yt,Mi)}},this.compile=function(S,G){f=V.get(S),f.init(),S.traverseVisible(function(U){U.isLight&&U.layers.test(G.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const N=new WeakMap;S.traverse(function(U){const ee=U.material;if(ee)if(Array.isArray(ee))for(let Ce=0;Ce<ee.length;Ce++){const Ee=ee[Ce];N.has(Ee)===!1&&(en(Ee,S,U),N.set(Ee))}else N.has(ee)===!1&&(en(ee,S,U),N.set(ee))})};let ta=null;function Tf(S){ae.isPresenting||ta&&ta(S)}const xr=new zu;xr.setAnimationLoop(Tf),typeof window!="undefined"&&xr.setContext(window),this.setAnimationLoop=function(S){ta=S,ae.setAnimationLoop(S),S===null?xr.stop():xr.start()},this.render=function(S,G){let N,U;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),U=arguments[3]),G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;pe.resetDefaultState(),T=-1,v=null,S.autoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(G=ae.getCamera(G)),S.isScene===!0&&S.onBeforeRender(p,S,G,N||_),f=V.get(S,d.length),f.init(),d.push(f),se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y.setFromProjectionMatrix(se),oe=this.localClippingEnabled,K=R.init(this.clippingPlanes,oe,G),u=q.get(S,G),u.init(),jc(S,G,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(B,C),K===!0&&R.beginShadows();const ee=f.state.shadowsArray;xe.render(ee,S,G),f.setupLights(),f.setupLightsView(G),K===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),X.render(u,S,G,U);const Ce=u.opaque,Ee=u.transparent;Ce.length>0&&qc(Ce,S,G),Ee.length>0&&qc(Ee,S,G),S.isScene===!0&&S.onAfterRender(p,S,G),_!==null&&(j.updateRenderTargetMipmap(_),j.updateMultisampleRenderTarget(_)),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1),d.pop(),d.length>0?f=d[d.length-1]:f=null,u=null};function jc(S,G,N,U){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)N=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){U&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se);const Ee=ie.update(S),Pe=S.material;Pe.visible&&u.push(S,Ee,Pe,N,we.z,null)}}else if(S.isImmediateRenderObject)U&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se),u.push(S,null,S.material,N,we.z,null);else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Fe.render.frame&&(S.skeleton.update(),S.skeleton.frame=Fe.render.frame),!S.frustumCulled||Y.intersectsObject(S))){U&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se);const Ee=ie.update(S),Pe=S.material;if(Array.isArray(Pe)){const Ae=Ee.groups;for(let $e=0,Ye=Ae.length;$e<Ye;$e++){const Me=Ae[$e],Oe=Pe[Me.materialIndex];Oe&&Oe.visible&&u.push(S,Ee,Oe,N,we.z,Me)}}else Pe.visible&&u.push(S,Ee,Pe,N,we.z,null)}}const Ce=S.children;for(let Ee=0,Pe=Ce.length;Ee<Pe;Ee++)jc(Ce[Ee],G,N,U)}function qc(S,G,N){const U=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,Ce=S.length;ee<Ce;ee++){const Ee=S[ee],Pe=Ee.object,Ae=Ee.geometry,$e=U===null?Ee.material:U,Ye=Ee.group;if(N.isArrayCamera){const Me=N.cameras;for(let Oe=0,tn=Me.length;Oe<tn;Oe++){const We=Me[Oe];Pe.layers.test(We.layers)&&(_e.viewport(A.copy(We.viewport)),f.setupLightsView(We),Xc(Pe,G,We,Ae,$e,Ye))}}else Xc(Pe,G,N,Ae,$e,Ye)}}function Xc(S,G,N,U,ee,Ce){if(S.onBeforeRender(p,G,N,U,ee,Ce),S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),S.isImmediateRenderObject){const Ee=Yc(N,G,ee,S);_e.setMaterial(ee),pe.reset(),Sf(S,Ee)}else p.renderBufferDirect(N,G,U,ee,S,Ce);S.onAfterRender(p,G,N,U,ee,Ce)}function en(S,G,N){G.isScene!==!0&&(G=Se);const U=Le.get(S),ee=f.state.lights,Ce=f.state.shadowsArray,Ee=ee.state.version,Pe=E.getParameters(S,ee.state,Ce,G,N),Ae=E.getProgramCacheKey(Pe);let $e=U.program,Ye=!0;if(U.environment=S.isMeshStandardMaterial?G.environment:null,U.fog=G.fog,U.envMap=Z.get(S.envMap||U.environment),$e===void 0)S.addEventListener("dispose",Vc);else if($e.cacheKey!==Ae)Wc(S);else if(U.lightsStateVersion!==Ee)Ye=!1;else{if(Pe.shaderID!==void 0)return;Ye=!1}Ye&&(Pe.uniforms=E.getUniforms(S),S.onBeforeCompile(Pe,p),$e=E.acquireProgram(Pe,Ae),U.program=$e,U.uniforms=Pe.uniforms,U.outputEncoding=Pe.outputEncoding);const Me=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(U.numClippingPlanes=R.numPlanes,U.numIntersection=R.numIntersection,Me.clippingPlanes=R.uniform),U.needsLights=Af(S),U.lightsStateVersion=Ee,U.needsLights&&(Me.ambientLightColor.value=ee.state.ambient,Me.lightProbe.value=ee.state.probe,Me.directionalLights.value=ee.state.directional,Me.directionalLightShadows.value=ee.state.directionalShadow,Me.spotLights.value=ee.state.spot,Me.spotLightShadows.value=ee.state.spotShadow,Me.rectAreaLights.value=ee.state.rectArea,Me.ltc_1.value=ee.state.rectAreaLTC1,Me.ltc_2.value=ee.state.rectAreaLTC2,Me.pointLights.value=ee.state.point,Me.pointLightShadows.value=ee.state.pointShadow,Me.hemisphereLights.value=ee.state.hemi,Me.directionalShadowMap.value=ee.state.directionalShadowMap,Me.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Me.spotShadowMap.value=ee.state.spotShadowMap,Me.spotShadowMatrix.value=ee.state.spotShadowMatrix,Me.pointShadowMap.value=ee.state.pointShadowMap,Me.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Oe=U.program.getUniforms(),tn=Rn.seqWithValue(Oe.seq,Me);U.uniformsList=tn}function Yc(S,G,N,U){G.isScene!==!0&&(G=Se),j.resetTextureUnits();const ee=G.fog,Ce=N.isMeshStandardMaterial?G.environment:null,Ee=_===null?p.outputEncoding:_.texture.encoding,Pe=Z.get(N.envMap||Ce),Ae=Le.get(N),$e=f.state.lights;if(K===!0&&(oe===!0||S!==v)){const tt=S===v&&N.id===T;R.setState(N,S,tt)}N.version===Ae.__version?(N.fog&&Ae.fog!==ee||Ae.environment!==Ce||Ae.needsLights&&Ae.lightsStateVersion!==$e.state.version||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==R.numPlanes||Ae.numIntersection!==R.numIntersection)||Ae.outputEncoding!==Ee||Ae.envMap!==Pe)&&en(N,G,U):(en(N,G,U),Ae.__version=N.version);let Ye=!1,Me=!1,Oe=!1;const tn=Ae.program,We=tn.getUniforms(),Un=Ae.uniforms;if(_e.useProgram(tn.program)&&(Ye=!0,Me=!0,Oe=!0),N.id!==T&&(T=N.id,Me=!0),Ye||v!==S){if(We.setValue(H,"projectionMatrix",S.projectionMatrix),Ie.logarithmicDepthBuffer&&We.setValue(H,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),v!==S&&(v=S,Me=!0,Oe=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const tt=We.map.cameraPosition;tt!==void 0&&tt.setValue(H,we.setFromMatrixPosition(S.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&We.setValue(H,"isOrthographic",S.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&We.setValue(H,"viewMatrix",S.matrixWorldInverse)}if(N.skinning){We.setOptional(H,U,"bindMatrix"),We.setOptional(H,U,"bindMatrixInverse");const tt=U.skeleton;if(tt){const na=tt.bones;if(Ie.floatVertexTextures){if(tt.boneTexture===null){let yt=Math.sqrt(na.length*4);yt=ye.ceilPowerOfTwo(yt),yt=Math.max(yt,4);const vr=new Float32Array(yt*yt*4);vr.set(tt.boneMatrices);const Mi=new dn(vr,yt,yt,wt,rn);tt.boneMatrices=vr,tt.boneTexture=Mi,tt.boneTextureSize=yt}We.setValue(H,"boneTexture",tt.boneTexture,j),We.setValue(H,"boneTextureSize",tt.boneTextureSize)}else We.setOptional(H,tt,"boneMatrices")}}return(Me||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,We.setValue(H,"receiveShadow",U.receiveShadow)),Me&&(We.setValue(H,"toneMappingExposure",p.toneMappingExposure),Ae.needsLights&&Ef(Un,Oe),ee&&N.fog&&w.refreshFogUniforms(Un,ee),w.refreshMaterialUniforms(Un,N,O,F),Rn.upload(H,Ae.uniformsList,Un,j)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Rn.upload(H,Ae.uniformsList,Un,j),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&We.setValue(H,"center",U.center),We.setValue(H,"modelViewMatrix",U.modelViewMatrix),We.setValue(H,"normalMatrix",U.normalMatrix),We.setValue(H,"modelMatrix",U.matrixWorld),tn}function Ef(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function Af(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.setFramebuffer=function(S){x!==S&&_===null&&H.bindFramebuffer(36160,S),x=S},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderList=function(){return u},this.setRenderList=function(S){u=S},this.getRenderTarget=function(){return _},this.setRenderTarget=function(S,G=0,N=0){_=S,g=G,m=N,S&&Le.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S);let U=x,ee=!1;if(S){const Ce=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(U=Ce[G],ee=!0):S.isWebGLMultisampleRenderTarget?U=Le.get(S).__webglMultisampledFramebuffer:U=Ce,A.copy(S.viewport),I.copy(S.scissor),L=S.scissorTest}else A.copy(D).multiplyScalar(O).floor(),I.copy(z).multiplyScalar(O).floor(),L=W;if(b!==U&&(H.bindFramebuffer(36160,U),b=U),_e.viewport(A),_e.scissor(I),_e.setScissorTest(L),ee){const Ce=Le.get(S.texture);H.framebufferTexture2D(36160,36064,34069+G,Ce.__webglTexture,N)}},this.readRenderTargetPixels=function(S,G,N,U,ee,Ce,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){let Ae=!1;Pe!==b&&(H.bindFramebuffer(36160,Pe),Ae=!0);try{const $e=S.texture,Ye=$e.format,Me=$e.type;if(Ye!==wt&&le.convert(Ye)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Me===Rr&&(ve.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Me!==Ri&&le.convert(Me)!==H.getParameter(35738)&&!(Me===rn&&(Ie.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?G>=0&&G<=S.width-U&&N>=0&&N<=S.height-ee&&H.readPixels(G,N,U,ee,le.convert(Ye),le.convert(Me),Ce):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Ae&&H.bindFramebuffer(36160,b)}}},this.copyFramebufferToTexture=function(S,G,N=0){const U=Math.pow(2,-N),ee=Math.floor(G.image.width*U),Ce=Math.floor(G.image.height*U),Ee=le.convert(G.format);j.setTexture2D(G,0),H.copyTexImage2D(3553,N,Ee,S.x,S.y,ee,Ce,0),_e.unbindTexture()},this.copyTextureToTexture=function(S,G,N,U=0){const ee=G.image.width,Ce=G.image.height,Ee=le.convert(N.format),Pe=le.convert(N.type);j.setTexture2D(N,0),H.pixelStorei(37440,N.flipY),H.pixelStorei(37441,N.premultiplyAlpha),H.pixelStorei(3317,N.unpackAlignment),G.isDataTexture?H.texSubImage2D(3553,U,S.x,S.y,ee,Ce,Ee,Pe,G.image.data):G.isCompressedTexture?H.compressedTexSubImage2D(3553,U,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,Ee,G.mipmaps[0].data):H.texSubImage2D(3553,U,S.x,S.y,Ee,Pe,G.image),U===0&&N.generateMipmaps&&H.generateMipmap(3553),_e.unbindTexture()},this.initTexture=function(S){j.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){_e.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Zs(t){er.call(this,t)}Zs.prototype=Object.assign(Object.create(er.prototype),{constructor:Zs,isWebGL1Renderer:!0});class Js{constructor(e,n){Object.defineProperty(this,"isFogExp2",{value:!0}),this.name="",this.color=new ne(e),this.density=n!==void 0?n:25e-5}clone(){return new Js(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class $s{constructor(e,n,i){Object.defineProperty(this,"isFog",{value:!0}),this.name="",this.color=new ne(e),this.near=n!==void 0?n:1,this.far=i!==void 0?i:1e3}clone(){return new $s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Qs extends ce{constructor(){super();Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}function vt(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ye.generateUUID()}Object.defineProperty(vt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(vt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e=0){return this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ye.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new vt(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ye.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const ni=new M;function mn(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(mn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}}),Object.assign(mn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)ni.x=this.getX(e),ni.y=this.getY(e),ni.z=this.getZ(e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function In(t){me.call(this),this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}In.prototype=Object.create(me.prototype),In.prototype.constructor=In,In.prototype.isSpriteMaterial=!0,In.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};let tr;const Zr=new M,nr=new M,ir=new M,rr=new k,Jr=new k,lh=new Te,Ks=new M,$r=new M,eo=new M,uh=new k,nc=new k,hh=new k;function Qr(t){if(ce.call(this),this.type="Sprite",tr===void 0){tr=new fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vt(e,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new mn(n,3,0,!1)),tr.setAttribute("uv",new mn(n,2,3,!1))}this.geometry=tr,this.material=t!==void 0?t:new In,this.center=new k(.5,.5)}Qr.prototype=Object.assign(Object.create(ce.prototype),{constructor:Qr,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;to(Ks.set(-.5,-.5,0),ir,s,nr,i,r),to($r.set(.5,-.5,0),ir,s,nr,i,r),to(eo.set(.5,.5,0),ir,s,nr,i,r),uh.set(0,0),nc.set(1,0),hh.set(1,1);let o=t.ray.intersectTriangle(Ks,$r,eo,!1,Zr);if(o===null&&(to($r.set(-.5,.5,0),ir,s,nr,i,r),nc.set(0,1),o=t.ray.intersectTriangle(Ks,eo,$r,!1,Zr),o===null))return;const a=t.ray.origin.distanceTo(Zr);a<t.near||a>t.far||e.push({distance:a,point:Zr.clone(),uv:lt.getUV(Zr,Ks,$r,eo,uh,nc,hh,new k),face:null,object:this})},copy:function(t){return ce.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function to(t,e,n,i,r,s){rr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Jr.x=s*rr.x-r*rr.y,Jr.y=r*rr.x+s*rr.y):Jr.copy(rr),t.copy(e),t.x+=Jr.x,t.y+=Jr.y,t.applyMatrix4(lh)}const no=new M,fh=new M;function Kr(){ce.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Kr.prototype=Object.assign(Object.create(ce.prototype),{constructor:Kr,isLOD:!0,copy:function(t){ce.prototype.copy.call(this,t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e=0){e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){no.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(no);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){const e=this.levels;if(e.length>1){no.setFromMatrixPosition(t.matrixWorld),fh.setFromMatrixPosition(this.matrixWorld);const n=no.distanceTo(fh)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){const e=ce.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});const dh=new M,ph=new Ne,mh=new Ne,vy=new M,gh=new Te;function sr(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),ze.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Te,this.bindMatrixInverse=new Te}sr.prototype=Object.assign(Object.create(ze.prototype),{constructor:sr,isSkinnedMesh:!0,copy:function(t){return ze.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const t=new Ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==Infinity?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){ze.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(t,e){const n=this.skeleton,i=this.geometry;ph.fromBufferAttribute(i.attributes.skinIndex,t),mh.fromBufferAttribute(i.attributes.skinWeight,t),dh.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=mh.getComponent(r);if(s!==0){const o=ph.getComponent(r);gh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(vy.copy(dh).applyMatrix4(gh),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function or(){ce.call(this),this.type="Bone"}or.prototype=Object.assign(Object.create(ce.prototype),{constructor:or,isBone:!0});const yh=new Te,_y=new Te;function ar(t=[],e=[]){this.uuid=ye.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(ar.prototype,{init:function(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Te)}},calculateInverses:function(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const o=t[r]?t[r].matrixWorld:_y;yh.multiplyMatrices(o,e[r]),yh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new ar(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new or),this.bones.push(s),this.boneInverses.push(new Te().fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const s=e[i];t.bones.push(s.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}});const xh=new Te,vh=new Te,io=[],es=new ze;function ro(t,e,n){ze.call(this,t,e),this.instanceMatrix=new ge(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}ro.prototype=Object.assign(Object.create(ze.prototype),{constructor:ro,isInstancedMesh:!0,copy:function(t){return ze.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){const n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,xh),vh.multiplyMatrices(n,xh),es.matrixWorld=vh,es.raycast(t,io);for(let s=0,o=io.length;s<o;s++){const a=io[s];a.instanceId=r,a.object=this,e.push(a)}io.length=0}},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new ge(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function ke(t){me.call(this),this.type="LineBasicMaterial",this.color=new ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}ke.prototype=Object.create(me.prototype),ke.prototype.constructor=ke,ke.prototype.isLineBasicMaterial=!0,ke.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};const _h=new M,bh=new M,Mh=new Te,ic=new Gi,so=new cn;function Lt(t=new fe,e=new ke){ce.call(this),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}Lt.prototype=Object.assign(Object.create(ce.prototype),{constructor:Lt,isLine:!0,copy:function(t){return ce.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)_h.fromBufferAttribute(e,i-1),bh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_h.distanceTo(bh);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;Mh.copy(i).invert(),ic.copy(t.ray).applyMatrix4(Mh);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new M,c=new M,l=new M,h=new M,u=this.isLineSegments?2:1;if(n.isBufferGeometry){const f=n.index,p=n.attributes.position;if(f!==null){const y=f.array;for(let x=0,g=y.length-1;x<g;x+=u){const m=y[x],_=y[x+1];if(a.fromBufferAttribute(p,m),c.fromBufferAttribute(p,_),ic.distanceSqToSegment(a,c,h,l)>o)continue;h.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(h);T<t.near||T>t.far||e.push({distance:T,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else for(let y=0,x=p.count-1;y<x;y+=u){if(a.fromBufferAttribute(p,y),c.fromBufferAttribute(p,y+1),ic.distanceSqToSegment(a,c,h,l)>o)continue;h.applyMatrix4(this.matrixWorld);const m=t.ray.origin.distanceTo(h);m<t.near||m>t.far||e.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const wh=new M,Sh=new M;function ht(t,e){Lt.call(this,t,e),this.type="LineSegments"}ht.prototype=Object.assign(Object.create(Lt.prototype),{constructor:ht,isLineSegments:!0,computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)wh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wh.distanceTo(Sh);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});function ts(t,e){Lt.call(this,t,e),this.type="LineLoop"}ts.prototype=Object.assign(Object.create(Lt.prototype),{constructor:ts,isLineLoop:!0});function It(t){me.call(this),this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}It.prototype=Object.create(me.prototype),It.prototype.constructor=It,It.prototype.isPointsMaterial=!0,It.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};const Th=new Te,rc=new Gi,oo=new cn,ao=new M;function ii(t=new fe,e=new It){ce.call(this),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}ii.prototype=Object.assign(Object.create(ce.prototype),{constructor:ii,isPoints:!0,copy:function(t){return ce.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(i),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;Th.copy(i).invert(),rc.copy(t.ray).applyMatrix4(Th);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const h=a.array;for(let u=0,f=h.length;u<f;u++){const d=h[u];ao.fromBufferAttribute(l,d),Eh(ao,d,o,i,t,e,this)}}else for(let h=0,u=l.count;h<u;h++)ao.fromBufferAttribute(l,h),Eh(ao,h,o,i,t,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Eh(t,e,n,i,r,s,o){const a=rc.distanceSqToPoint(t);if(a<n){const c=new M;rc.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function sc(t,e,n,i,r,s,o,a,c){Be.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:sn,this.minFilter=s!==void 0?s:et,this.magFilter=r!==void 0?r:et,this.generateMipmaps=!1;const l=this;function h(){l.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}sc.prototype=Object.assign(Object.create(Be.prototype),{constructor:sc,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function cr(t,e,n,i,r,s,o,a,c,l,h,u){Be.call(this,null,s,o,a,c,l,i,r,h,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}cr.prototype=Object.create(Be.prototype),cr.prototype.constructor=cr,cr.prototype.isCompressedTexture=!0;function lr(t,e,n,i,r,s,o,a,c){Be.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}lr.prototype=Object.create(Be.prototype),lr.prototype.constructor=lr,lr.prototype.isCanvasTexture=!0;function ns(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:jn,l!==jn&&l!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===jn&&(n=Ar),n===void 0&&l===Pi&&(n=Ci),Be.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=a!==void 0?a:Ke,this.flipY=!1,this.generateMipmaps=!1}ns.prototype=Object.create(Be.prototype),ns.prototype.constructor=ns,ns.prototype.isDepthTexture=!0;class co extends fe{constructor(e=1,n=8,i=0,r=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],c=[],l=new M,h=new k;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=n;u++,f+=3){const d=i+u/n*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=n;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(c,2))}}class ur extends fe{constructor(e=1,n=1,i=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let p=0;const y=[],x=i/2;let g=0;m(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function m(){const b=new M,T=new M;let v=0;const A=(n-e)/i;for(let I=0;I<=s;I++){const L=[],P=I/s,F=P*(n-e)+e;for(let O=0;O<=r;O++){const B=O/r,C=B*c+a,D=Math.sin(C),z=Math.cos(C);T.x=F*D,T.y=-P*i+x,T.z=F*z,u.push(T.x,T.y,T.z),b.set(D,A,z).normalize(),f.push(b.x,b.y,b.z),d.push(B,1-P),L.push(p++)}y.push(L)}for(let I=0;I<r;I++)for(let L=0;L<s;L++){const P=y[L][I],F=y[L+1][I],O=y[L+1][I+1],B=y[L][I+1];h.push(P,F,B),h.push(F,O,B),v+=6}l.addGroup(g,v,0),g+=v}function _(b){const T=p,v=new k,A=new M;let I=0;const L=b===!0?e:n,P=b===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,x*P,0),f.push(0,P,0),d.push(.5,.5),p++;const F=p;for(let O=0;O<=r;O++){const C=O/r*c+a,D=Math.cos(C),z=Math.sin(C);A.x=L*z,A.y=x*P,A.z=L*D,u.push(A.x,A.y,A.z),f.push(0,P,0),v.x=D*.5+.5,v.y=z*.5*P+.5,d.push(v.x,v.y),p++}for(let O=0;O<r;O++){const B=T+O,C=F+O;b===!0?h.push(C,C+1,B):h.push(C+1,C,B),I+=3}l.addGroup(g,I,b===!0?1:2),g+=I}}}class lo extends ur{constructor(e=1,n=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a);this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}}class Dn extends fe{constructor(e,n,i=1,r=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),l(i),h(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new M,b=new M,T=new M;for(let v=0;v<n.length;v+=3)d(n[v+0],_),d(n[v+1],b),d(n[v+2],T),c(_,b,T,m)}function c(m,_,b,T){const v=T+1,A=[];for(let I=0;I<=v;I++){A[I]=[];const L=m.clone().lerp(b,I/v),P=_.clone().lerp(b,I/v),F=v-I;for(let O=0;O<=F;O++)O===0&&I===v?A[I][O]=L:A[I][O]=L.clone().lerp(P,O/F)}for(let I=0;I<v;I++)for(let L=0;L<2*(v-I)-1;L++){const P=Math.floor(L/2);L%2==0?(f(A[I][P+1]),f(A[I+1][P]),f(A[I][P])):(f(A[I][P+1]),f(A[I+1][P+1]),f(A[I+1][P]))}}function l(m){const _=new M;for(let b=0;b<s.length;b+=3)_.x=s[b+0],_.y=s[b+1],_.z=s[b+2],_.normalize().multiplyScalar(m),s[b+0]=_.x,s[b+1]=_.y,s[b+2]=_.z}function h(){const m=new M;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const b=x(m)/2/Math.PI+.5,T=g(m)/Math.PI+.5;o.push(b,1-T)}p(),u()}function u(){for(let m=0;m<o.length;m+=6){const _=o[m+0],b=o[m+2],T=o[m+4],v=Math.max(_,b,T),A=Math.min(_,b,T);v>.9&&A<.1&&(_<.2&&(o[m+0]+=1),b<.2&&(o[m+2]+=1),T<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function d(m,_){const b=m*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function p(){const m=new M,_=new M,b=new M,T=new M,v=new k,A=new k,I=new k;for(let L=0,P=0;L<s.length;L+=9,P+=6){m.set(s[L+0],s[L+1],s[L+2]),_.set(s[L+3],s[L+4],s[L+5]),b.set(s[L+6],s[L+7],s[L+8]),v.set(o[P+0],o[P+1]),A.set(o[P+2],o[P+3]),I.set(o[P+4],o[P+5]),T.copy(m).add(_).add(b).divideScalar(3);const F=x(T);y(v,P+0,m,F),y(A,P+2,_,F),y(I,P+4,b,F)}}function y(m,_,b,T){T<0&&m.x===1&&(o[_]=m.x-1),b.x===0&&b.z===0&&(o[_]=T/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function g(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}}class uo extends Dn{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}}const ho=new M,fo=new M,oc=new M,po=new lt;class ac extends fe{constructor(e,n){super();if(this.type="EdgesGeometry",this.parameters={thresholdAngle:n},n=n!==void 0?n:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const r=Math.pow(10,4),s=Math.cos(ye.DEG2RAD*n),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:y,b:x,c:g}=po;if(y.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),po.getNormal(oc),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let m=0;m<3;m++){const _=(m+1)%3,b=u[m],T=u[_],v=po[h[m]],A=po[h[_]],I=`${b}_${T}`,L=`${T}_${b}`;L in f&&f[L]?(oc.dot(f[L].normal)<=s&&(d.push(v.x,v.y,v.z),d.push(A.x,A.y,A.z)),f[L]=null):I in f||(f[I]={index0:l[m],index1:l[_],normal:oc.clone()})}}for(const p in f)if(f[p]){const{index0:y,index1:x}=f[p];ho.fromBufferAttribute(a,y),fo.fromBufferAttribute(a,x),d.push(ho.x,ho.y,ho.z),d.push(fo.x,fo.y,fo.z)}this.setAttribute("position",new re(d,3))}}const by={triangulate:function(t,e,n){n=n||2;const i=e&&e.length,r=i?e[0]*n:t.length;let s=Ah(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,f,d;if(i&&(s=Ey(t,e,s,n)),t.length>80*n){a=l=t[0],c=h=t[1];for(let p=n;p<r;p+=n)u=t[p],f=t[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?1/d:0}return is(s,o,n,a,c,d),o}};function Ah(t,e,n,i,r){let s,o;if(r===Ny(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Ch(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Ch(s,t[s],t[s+1],o);return o&&mo(o,o.next)&&(ss(o),o=o.next),o}function Fn(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(mo(n,n.next)||qe(n.prev,n,n.next)===0)){if(ss(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function is(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Py(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?wy(t,i,r,s):My(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),ss(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=Sy(Fn(t),e,n),is(t,e,n,i,r,s,2)):o===2&&Ty(t,e,n,i,r,s):is(Fn(t),e,n,i,r,s,1);break}}}function My(t){const e=t.prev,n=t,i=t.next;if(qe(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(hr(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&qe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function wy(t,e,n,i){const r=t.prev,s=t,o=t.next;if(qe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=cc(a,c,e,n,i),f=cc(l,h,e,n,i);let d=t.prevZ,p=t.nextZ;for(;d&&d.z>=u&&p&&p.z<=f;){if(d!==t.prev&&d!==t.next&&hr(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&qe(d.prev,d,d.next)>=0||(d=d.prevZ,p!==t.prev&&p!==t.next&&hr(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&qe(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=u;){if(d!==t.prev&&d!==t.next&&hr(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&qe(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=f;){if(p!==t.prev&&p!==t.next&&hr(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&qe(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Sy(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!mo(r,s)&&Lh(r,i,i.next,s)&&rs(r,s)&&rs(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),ss(i),ss(i.next),i=t=s),i=i.next}while(i!==t);return Fn(i)}function Ty(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fy(o,a)){let c=Rh(o,a);o=Fn(o,o.next),c=Fn(c,c.next),is(o,e,n,i,r,s),is(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function Ey(t,e,n,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=Ah(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Dy(l));for(r.sort(Ay),s=0;s<r.length;s++)Ly(r[s],n),n=Fn(n,n.next);return n}function Ay(t,e){return t.x-e.x}function Ly(t,e){if(e=Ry(t,e),e){const n=Rh(e,t);Fn(e,e.next),Fn(n,n.next)}}function Ry(t,e){let n=e;const i=t.x,r=t.y;let s=-Infinity,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s){if(s=f,f===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let h=Infinity,u;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&hr(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(u=Math.abs(r-n.y)/(i-n.x),rs(n,t)&&(u<h||u===h&&(n.x>o.x||n.x===o.x&&Cy(o,n)))&&(o=n,h=u)),n=n.next;while(n!==a);return o}function Cy(t,e){return qe(t.prev,t,e.prev)<0&&qe(e.next,t,t.next)<0}function Py(t,e,n,i){let r=t;do r.z===null&&(r.z=cc(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Iy(r)}function Iy(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function cc(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Dy(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function hr(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function Fy(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!By(t,e)&&(rs(t,e)&&rs(e,t)&&Oy(t,e)&&(qe(t.prev,t,e.prev)||qe(t,e.prev,e))||mo(t,e)&&qe(t.prev,t,t.next)>0&&qe(e.prev,e,e.next)>0)}function qe(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function mo(t,e){return t.x===e.x&&t.y===e.y}function Lh(t,e,n,i){const r=yo(qe(t,e,n)),s=yo(qe(t,e,i)),o=yo(qe(n,i,t)),a=yo(qe(n,i,e));return!!(r!==s&&o!==a||r===0&&go(t,n,e)||s===0&&go(t,i,e)||o===0&&go(n,t,i)||a===0&&go(n,e,i))}function go(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function yo(t){return t>0?1:t<0?-1:0}function By(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Lh(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function rs(t,e){return qe(t.prev,t,t.next)<0?qe(t,e,t.next)>=0&&qe(t,t.prev,e)>=0:qe(t,e,t.prev)<0||qe(t,t.next,e)<0}function Oy(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Rh(t,e){const n=new lc(t.i,t.x,t.y),i=new lc(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ch(t,e,n,i){const r=new lc(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ss(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function lc(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ny(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}const gn={area:function(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return gn.area(t)<0},triangulateShape:function(t,e){const n=[],i=[],r=[];Ph(t),Ih(n,t);let s=t.length;e.forEach(Ph);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Ih(n,e[a]);const o=by.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Ph(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ih(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class ri extends fe{constructor(e,n){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new re(r,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function o(a){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1;let u=n.depth!==void 0?n.depth:100,f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:6,p=n.bevelSize!==void 0?n.bevelSize:d-2,y=n.bevelOffset!==void 0?n.bevelOffset:0,x=n.bevelSegments!==void 0?n.bevelSegments:3;const g=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:zy;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=n.amount);let _,b=!1,T,v,A,I;g&&(_=g.getSpacedPoints(h),b=!0,f=!1,T=g.computeFrenetFrames(h,!1),v=new M,A=new M,I=new M),f||(x=0,d=0,p=0,y=0);const L=a.extractPoints(l);let P=L.shape;const F=L.holes;if(!gn.isClockWise(P)){P=P.reverse();for(let j=0,Z=F.length;j<Z;j++){const Q=F[j];gn.isClockWise(Q)&&(F[j]=Q.reverse())}}const B=gn.triangulateShape(P,F),C=P;for(let j=0,Z=F.length;j<Z;j++){const Q=F[j];P=P.concat(Q)}function D(j,Z,Q){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(Q).add(j)}const z=P.length,W=B.length;function Y(j,Z,Q){let de,ie,E;const w=j.x-Z.x,q=j.y-Z.y,V=Q.x-j.x,R=Q.y-j.y,X=w*w+q*q,te=w*R-q*V;if(Math.abs(te)>Number.EPSILON){const ue=Math.sqrt(X),$=Math.sqrt(V*V+R*R),le=Z.x-q/ue,pe=Z.y+w/ue,be=Q.x-R/$,ae=Q.y+V/$,xe=((be-le)*R-(ae-pe)*V)/(w*R-q*V);de=le+w*xe-j.x,ie=pe+q*xe-j.y;const je=de*de+ie*ie;if(je<=2)return new k(de,ie);E=Math.sqrt(je/2)}else{let ue=!1;w>Number.EPSILON?V>Number.EPSILON&&(ue=!0):w<-Number.EPSILON?V<-Number.EPSILON&&(ue=!0):Math.sign(q)===Math.sign(R)&&(ue=!0),ue?(de=-q,ie=w,E=Math.sqrt(X)):(de=w,ie=q,E=Math.sqrt(X/2))}return new k(de/E,ie/E)}const K=[];for(let j=0,Z=C.length,Q=Z-1,de=j+1;j<Z;j++,Q++,de++)Q===Z&&(Q=0),de===Z&&(de=0),K[j]=Y(C[j],C[Q],C[de]);const oe=[];let se,we=K.concat();for(let j=0,Z=F.length;j<Z;j++){const Q=F[j];se=[];for(let de=0,ie=Q.length,E=ie-1,w=de+1;de<ie;de++,E++,w++)E===ie&&(E=0),w===ie&&(w=0),se[de]=Y(Q[de],Q[E],Q[w]);oe.push(se),we=we.concat(se)}for(let j=0;j<x;j++){const Z=j/x,Q=d*Math.cos(Z*Math.PI/2),de=p*Math.sin(Z*Math.PI/2)+y;for(let ie=0,E=C.length;ie<E;ie++){const w=D(C[ie],K[ie],de);ve(w.x,w.y,-Q)}for(let ie=0,E=F.length;ie<E;ie++){const w=F[ie];se=oe[ie];for(let q=0,V=w.length;q<V;q++){const R=D(w[q],se[q],de);ve(R.x,R.y,-Q)}}}const Se=p+y;for(let j=0;j<z;j++){const Z=f?D(P[j],we[j],Se):P[j];b?(A.copy(T.normals[0]).multiplyScalar(Z.x),v.copy(T.binormals[0]).multiplyScalar(Z.y),I.copy(_[0]).add(A).add(v),ve(I.x,I.y,I.z)):ve(Z.x,Z.y,0)}for(let j=1;j<=h;j++)for(let Z=0;Z<z;Z++){const Q=f?D(P[Z],we[Z],Se):P[Z];b?(A.copy(T.normals[j]).multiplyScalar(Q.x),v.copy(T.binormals[j]).multiplyScalar(Q.y),I.copy(_[j]).add(A).add(v),ve(I.x,I.y,I.z)):ve(Q.x,Q.y,u/h*j)}for(let j=x-1;j>=0;j--){const Z=j/x,Q=d*Math.cos(Z*Math.PI/2),de=p*Math.sin(Z*Math.PI/2)+y;for(let ie=0,E=C.length;ie<E;ie++){const w=D(C[ie],K[ie],de);ve(w.x,w.y,u+Q)}for(let ie=0,E=F.length;ie<E;ie++){const w=F[ie];se=oe[ie];for(let q=0,V=w.length;q<V;q++){const R=D(w[q],se[q],de);b?ve(R.x,R.y+_[h-1].y,_[h-1].x+Q):ve(R.x,R.y,u+Q)}}}Ge(),H();function Ge(){const j=r.length/3;if(f){let Z=0,Q=z*Z;for(let de=0;de<W;de++){const ie=B[de];Ie(ie[2]+Q,ie[1]+Q,ie[0]+Q)}Z=h+x*2,Q=z*Z;for(let de=0;de<W;de++){const ie=B[de];Ie(ie[0]+Q,ie[1]+Q,ie[2]+Q)}}else{for(let Z=0;Z<W;Z++){const Q=B[Z];Ie(Q[2],Q[1],Q[0])}for(let Z=0;Z<W;Z++){const Q=B[Z];Ie(Q[0]+z*h,Q[1]+z*h,Q[2]+z*h)}}i.addGroup(j,r.length/3-j,0)}function H(){const j=r.length/3;let Z=0;ot(C,Z),Z+=C.length;for(let Q=0,de=F.length;Q<de;Q++){const ie=F[Q];ot(ie,Z),Z+=ie.length}i.addGroup(j,r.length/3-j,1)}function ot(j,Z){let Q=j.length;for(;--Q>=0;){const de=Q;let ie=Q-1;ie<0&&(ie=j.length-1);for(let E=0,w=h+x*2;E<w;E++){const q=z*E,V=z*(E+1),R=Z+de+q,X=Z+ie+q,te=Z+ie+V,ue=Z+de+V;_e(R,X,te,ue)}}}function ve(j,Z,Q){c.push(j),c.push(Z),c.push(Q)}function Ie(j,Z,Q){Fe(j),Fe(Z),Fe(Q);const de=r.length/3,ie=m.generateTopUV(i,r,de-3,de-2,de-1);Le(ie[0]),Le(ie[1]),Le(ie[2])}function _e(j,Z,Q,de){Fe(j),Fe(Z),Fe(de),Fe(Z),Fe(Q),Fe(de);const ie=r.length/3,E=m.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);Le(E[0]),Le(E[1]),Le(E[3]),Le(E[1]),Le(E[2]),Le(E[3])}function Fe(j){r.push(c[j*3+0]),r.push(c[j*3+1]),r.push(c[j*3+2])}function Le(j){s.push(j.x),s.push(j.y)}}}toJSON(){const e=fe.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return Gy(n,i,e)}}const zy={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],h=e[r*3+1];return[new k(s,o),new k(a,c),new k(l,h)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[r*3],d=e[r*3+1],p=e[r*3+2],y=e[s*3],x=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<.01?[new k(o,1-c),new k(l,1-u),new k(f,1-p),new k(y,1-g)]:[new k(a,1-c),new k(h,1-u),new k(d,1-p),new k(x,1-g)]}};function Gy(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class xo extends Dn{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n);this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}}class vo extends fe{constructor(e,n=12,i=0,r=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=ye.clamp(r,0,Math.PI*2);const s=[],o=[],a=[],c=1/n,l=new M,h=new k;for(let u=0;u<=n;u++){const f=i+u*c*r,d=Math.sin(f),p=Math.cos(f);for(let y=0;y<=e.length-1;y++)l.x=e[y].x*d,l.y=e[y].y,l.z=e[y].x*p,o.push(l.x,l.y,l.z),h.x=u/n,h.y=y/(e.length-1),a.push(h.x,h.y)}for(let u=0;u<n;u++)for(let f=0;f<e.length-1;f++){const d=f+u*e.length,p=d,y=d+e.length,x=d+e.length+1,g=d+1;s.push(p,y,g),s.push(y,x,g)}if(this.setIndex(s),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.computeVertexNormals(),r===Math.PI*2){const u=this.attributes.normal.array,f=new M,d=new M,p=new M,y=n*e.length*3;for(let x=0,g=0;x<e.length;x++,g+=3)f.x=u[g+0],f.y=u[g+1],f.z=u[g+2],d.x=u[y+g+0],d.y=u[y+g+1],d.z=u[y+g+2],p.addVectors(f,d).normalize(),u[g+0]=u[y+g+0]=p.x,u[g+1]=u[y+g+1]=p.y,u[g+2]=u[y+g+2]=p.z}}}class os extends Dn{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n);this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}}function si(t,e,n){fe.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new M,l=new M,h=new M,u=new M,f=new M;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const d=e+1;for(let p=0;p<=n;p++){const y=p/n;for(let x=0;x<=e;x++){const g=x/e;t(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,y,h),u.subVectors(l,h)):(t(g+a,y,h),u.subVectors(h,l)),y-a>=0?(t(g,y-a,h),f.subVectors(l,h)):(t(g,y+a,h),f.subVectors(h,l)),c.crossVectors(u,f).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=p*d+y,g=p*d+y+1,m=(p+1)*d+y+1,_=(p+1)*d+y;i.push(x,g,_),i.push(g,m,_)}this.setIndex(i),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(s,3)),this.setAttribute("uv",new re(o,2))}si.prototype=Object.create(fe.prototype),si.prototype.constructor=si;class _o extends fe{constructor(e=.5,n=1,i=8,r=1,s=0,o=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],h=[];let u=e;const f=(n-e)/r,d=new M,p=new k;for(let y=0;y<=r;y++){for(let x=0;x<=i;x++){const g=s+x/i*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/n+1)/2,p.y=(d.y/n+1)/2,h.push(p.x,p.y)}u+=f}for(let y=0;y<r;y++){const x=y*(i+1);for(let g=0;g<i;g++){const m=g+x,_=m,b=m+i+1,T=m+i+2,v=m+1;a.push(_,b,v),a.push(b,T,v)}}this.setIndex(a),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}}class as extends fe{constructor(e,n=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(s,3)),this.setAttribute("uv",new re(o,2));function l(h){const u=r.length/3,f=h.extractPoints(n);let d=f.shape;const p=f.holes;gn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,g=p.length;x<g;x++){const m=p[x];gn.isClockWise(m)===!0&&(p[x]=m.reverse())}const y=gn.triangulateShape(d,p);for(let x=0,g=p.length;x<g;x++){const m=p[x];d=d.concat(m)}for(let x=0,g=d.length;x<g;x++){const m=d[x];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let x=0,g=y.length;x<g;x++){const m=y[x],_=m[0]+u,b=m[1]+u,T=m[2]+u;i.push(_,b,T),c+=3}}}toJSON(){const e=fe.prototype.toJSON.call(this),n=this.parameters.shapes;return Uy(n,e)}}function Uy(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class cs extends fe{constructor(e=1,n=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new M,f=new M,d=[],p=[],y=[],x=[];for(let g=0;g<=i;g++){const m=[],_=g/i;let b=0;g==0&&o==0?b=.5/n:g==i&&c==Math.PI&&(b=-.5/n);for(let T=0;T<=n;T++){const v=T/n;u.x=-e*Math.cos(r+v*s)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(r+v*s)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),x.push(v+b,1-_),m.push(l++)}h.push(m)}for(let g=0;g<i;g++)for(let m=0;m<n;m++){const _=h[g][m+1],b=h[g][m],T=h[g+1][m],v=h[g+1][m+1];(g!==0||o>0)&&d.push(_,b,v),(g!==i-1||c<Math.PI)&&d.push(b,T,v)}this.setIndex(d),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(x,2))}}class bo extends Dn{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n);this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}}class Mo extends ri{constructor(e,n={}){const i=n.font;if(!(i&&i.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new fe;const r=i.generateShapes(e,n.size);n.depth=n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n),this.type="TextGeometry"}}class wo extends fe{constructor(e=1,n=.4,i=8,r=6,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new M,u=new M,f=new M;for(let d=0;d<=i;d++)for(let p=0;p<=r;p++){const y=p/r*s,x=d/i*Math.PI*2;u.x=(e+n*Math.cos(x))*Math.cos(y),u.y=(e+n*Math.cos(x))*Math.sin(y),u.z=n*Math.sin(x),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=r;p++){const y=(r+1)*d+p-1,x=(r+1)*(d-1)+p-1,g=(r+1)*(d-1)+p,m=(r+1)*d+p;o.push(y,x,m),o.push(x,g,m)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}}class So extends fe{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super();this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],c=[],l=[],h=[],u=new M,f=new M,d=new M,p=new M,y=new M,x=new M,g=new M;for(let _=0;_<=i;++_){const b=_/i*s*Math.PI*2;m(b,s,o,e,d),m(b+.01,s,o,e,p),x.subVectors(p,d),g.addVectors(p,d),y.crossVectors(x,g),g.crossVectors(y,x),y.normalize(),g.normalize();for(let T=0;T<=r;++T){const v=T/r*Math.PI*2,A=-n*Math.cos(v),I=n*Math.sin(v);u.x=d.x+(A*g.x+I*y.x),u.y=d.y+(A*g.y+I*y.y),u.z=d.z+(A*g.z+I*y.z),c.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),h.push(_/i),h.push(T/r)}}for(let _=1;_<=i;_++)for(let b=1;b<=r;b++){const T=(r+1)*(_-1)+(b-1),v=(r+1)*_+(b-1),A=(r+1)*_+b,I=(r+1)*(_-1)+b;a.push(T,v,I),a.push(v,A,I)}this.setIndex(a),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2));function m(_,b,T,v,A){const I=Math.cos(_),L=Math.sin(_),P=T/b*_,F=Math.cos(P);A.x=v*(2+F)*.5*I,A.y=v*(2+F)*L*.5,A.z=v*Math.sin(P)*.5}}}class To extends fe{constructor(e,n=64,i=1,r=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new M,c=new M,l=new k;let h=new M;const u=[],f=[],d=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function y(){for(let _=0;_<n;_++)x(_);x(s===!1?n:0),m(),g()}function x(_){h=e.getPointAt(_/n,h);const b=o.normals[_],T=o.binormals[_];for(let v=0;v<=r;v++){const A=v/r*Math.PI*2,I=Math.sin(A),L=-Math.cos(A);c.x=L*b.x+I*T.x,c.y=L*b.y+I*T.y,c.z=L*b.z+I*T.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=n;_++)for(let b=1;b<=r;b++){const T=(r+1)*(_-1)+(b-1),v=(r+1)*_+(b-1),A=(r+1)*_+b,I=(r+1)*(_-1)+b;p.push(T,v,I),p.push(v,A,I)}}function m(){for(let _=0;_<=n;_++)for(let b=0;b<=r;b++)l.x=_/n,l.y=b/r,d.push(l.x,l.y)}}toJSON(){const e=fe.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}class uc extends fe{constructor(e){super();if(this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const n=[],i=[0,0],r={},s=new M;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],f=u.start,d=u.count;for(let p=f,y=f+d;p<y;p+=3)for(let x=0;x<3;x++){const g=a.getX(p+x),m=a.getX(p+(x+1)%3);i[0]=Math.min(g,m),i[1]=Math.max(g,m);const _=i[0]+","+i[1];r[_]===void 0&&(r[_]={index1:i[0],index2:i[1]})}}for(const l in r){const h=r[l];s.fromBufferAttribute(o,h.index1),n.push(s.x,s.y,s.z),s.fromBufferAttribute(o,h.index2),n.push(s.x,s.y,s.z)}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l;s.fromBufferAttribute(o,h),n.push(s.x,s.y,s.z);const u=3*a+(l+1)%3;s.fromBufferAttribute(o,u),n.push(s.x,s.y,s.z)}}this.setAttribute("position",new re(n,3))}}var mt=Object.freeze({__proto__:null,BoxGeometry:ei,BoxBufferGeometry:ei,CircleGeometry:co,CircleBufferGeometry:co,ConeGeometry:lo,ConeBufferGeometry:lo,CylinderGeometry:ur,CylinderBufferGeometry:ur,DodecahedronGeometry:uo,DodecahedronBufferGeometry:uo,EdgesGeometry:ac,ExtrudeGeometry:ri,ExtrudeBufferGeometry:ri,IcosahedronGeometry:xo,IcosahedronBufferGeometry:xo,LatheGeometry:vo,LatheBufferGeometry:vo,OctahedronGeometry:os,OctahedronBufferGeometry:os,ParametricGeometry:si,ParametricBufferGeometry:si,PlaneGeometry:jr,PlaneBufferGeometry:jr,PolyhedronGeometry:Dn,PolyhedronBufferGeometry:Dn,RingGeometry:_o,RingBufferGeometry:_o,ShapeGeometry:as,ShapeBufferGeometry:as,SphereGeometry:cs,SphereBufferGeometry:cs,TetrahedronGeometry:bo,TetrahedronBufferGeometry:bo,TextGeometry:Mo,TextBufferGeometry:Mo,TorusGeometry:wo,TorusBufferGeometry:wo,TorusKnotGeometry:So,TorusKnotBufferGeometry:So,TubeGeometry:To,TubeBufferGeometry:To,WireframeGeometry:uc});function oi(t){me.call(this),this.type="ShadowMaterial",this.color=new ne(0),this.transparent=!0,this.setValues(t)}oi.prototype=Object.create(me.prototype),oi.prototype.constructor=oi,oi.prototype.isShadowMaterial=!0,oi.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.color.copy(t.color),this};function yn(t){pt.call(this,t),this.type="RawShaderMaterial"}yn.prototype=Object.create(pt.prototype),yn.prototype.constructor=yn,yn.prototype.isRawShaderMaterial=!0;function zt(t){me.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}zt.prototype=Object.create(me.prototype),zt.prototype.constructor=zt,zt.prototype.isMeshStandardMaterial=!0,zt.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function xn(t){zt.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new k(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=ye.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}xn.prototype=Object.create(zt.prototype),xn.prototype.constructor=xn,xn.prototype.isMeshPhysicalMaterial=!0,xn.prototype.copy=function(t){return zt.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new ne).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function Bn(t){me.call(this),this.type="MeshPhongMaterial",this.color=new ne(16777215),this.specular=new ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Bn.prototype=Object.create(me.prototype),Bn.prototype.constructor=Bn,Bn.prototype.isMeshPhongMaterial=!0,Bn.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ai(t){me.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ai.prototype=Object.create(me.prototype),ai.prototype.constructor=ai,ai.prototype.isMeshToonMaterial=!0,ai.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ci(t){me.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ci.prototype=Object.create(me.prototype),ci.prototype.constructor=ci,ci.prototype.isMeshNormalMaterial=!0,ci.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function li(t){me.call(this),this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}li.prototype=Object.create(me.prototype),li.prototype.constructor=li,li.prototype.isMeshLambertMaterial=!0,li.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ui(t){me.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ui.prototype=Object.create(me.prototype),ui.prototype.constructor=ui,ui.prototype.isMeshMatcapMaterial=!0,ui.prototype.copy=function(t){return me.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function hi(t){ke.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}hi.prototype=Object.create(ke.prototype),hi.prototype.constructor=hi,hi.prototype.isLineDashedMaterial=!0,hi.prototype.copy=function(t){return ke.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Hy=Object.freeze({__proto__:null,ShadowMaterial:oi,SpriteMaterial:In,RawShaderMaterial:yn,ShaderMaterial:pt,PointsMaterial:It,MeshPhysicalMaterial:xn,MeshStandardMaterial:zt,MeshPhongMaterial:Bn,MeshToonMaterial:ai,MeshNormalMaterial:ci,MeshLambertMaterial:li,MeshDepthMaterial:Cn,MeshDistanceMaterial:Pn,MeshBasicMaterial:xt,MeshMatcapMaterial:ui,LineDashedMaterial:hi,LineBasicMaterial:ke,Material:me});const Ve={arraySlice:function(t,e,n){return Ve.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r=30){const s=t.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],h=l.getValueSize(),u=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*r;if(!(p<n||p>=i)){u.push(l.times[d]);for(let y=0;y<h;++y)f.push(l.values[d*h+y])}}u.length!==0&&(l.times=Ve.convertArray(u,l.times.constructor),l.values=Ve.convertArray(f,l.values.constructor),o.push(l))}s.tracks=o;let a=Infinity;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);const r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=a.times.length-1;let y;if(s<=a.times[0]){const g=h,m=u-h;y=Ve.arraySlice(a.values,g,m)}else if(s>=a.times[p]){const g=p*u+h,m=g+u-h;y=Ve.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=h,_=u-h;g.evaluate(s),y=Ve.arraySlice(g.resultBuffer,m,_)}c==="quaternion"&&new ct().fromArray(y).normalize().conjugate().toArray(y);const x=l.times.length;for(let g=0;g<x;++g){const m=g*d+f;if(c==="quaternion")ct.multiplyQuaternionsFlat(l.values,m,y,0,l.values,m);else{const _=d-f*2;for(let b=0;b<_;++b)l.values[m+b]-=y[b]}}}return t.blendMode=Ea,t}};function _t(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(_t.prototype,{evaluate:function(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(_t.prototype,{beforeStart_:_t.prototype.copySampleValue_,afterEnd_:_t.prototype.copySampleValue_});function Eo(t,e,n,i){_t.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Eo.prototype=Object.assign(Object.create(_t.prototype),{constructor:Eo,DefaultSettings_:{endingStart:qn,endingEnd:qn},intervalChanged_:function(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Xn:r=t,o=2*e-n;break;case Cr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Xn:s=t,a=2*n-e;break;case Cr:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}const c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,d=(n-e)/(i-e),p=d*d,y=p*d,x=-u*y+2*u*p-u*d,g=(1+u)*y+(-1.5-2*u)*p+(-.5+u)*d+1,m=(-1-f)*y+(1.5+f)*p+.5*d,_=f*y-f*p;for(let b=0;b!==o;++b)r[b]=x*s[l+b]+g*s[c+b]+m*s[a+b]+_*s[h+b];return r}});function ls(t,e,n,i){_t.call(this,t,e,n,i)}ls.prototype=Object.assign(Object.create(_t.prototype),{constructor:ls,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),h=1-l;for(let u=0;u!==o;++u)r[u]=s[c+u]*h+s[a+u]*l;return r}});function Ao(t,e,n,i){_t.call(this,t,e,n,i)}Ao.prototype=Object.assign(Object.create(_t.prototype),{constructor:Ao,interpolate_:function(t){return this.copySampleValue_(t-1)}});function rt(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ve.convertArray(e,this.TimeBufferType),this.values=Ve.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(rt,{toJSON:function(t){const e=t.constructor;let n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:Ve.convertArray(t.times,Array),values:Ve.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}}),Object.assign(rt.prototype,{constructor:rt,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Di,InterpolantFactoryMethodDiscrete:function(t){return new Ao(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new ls(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new Eo(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case Ii:e=this.InterpolantFactoryMethodDiscrete;break;case Di:e=this.InterpolantFactoryMethodLinear;break;case Ss:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ii;case this.InterpolantFactoryMethodLinear:return Di;case this.InterpolantFactoryMethodSmooth:return Ss}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=Ve.arraySlice(n,r,s),this.values=Ve.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&Ve.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){const t=Ve.arraySlice(this.times),e=Ve.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ss,r=t.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==t[0]))if(i)a=!0;else{const h=o*n,u=h-n,f=h+n;for(let d=0;d!==n;++d){const p=e[h+d];if(p!==e[u+d]||p!==e[f+d]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];const h=o*n,u=s*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=Ve.arraySlice(t,0,s),this.values=Ve.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){const t=Ve.arraySlice(this.times,0),e=Ve.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function Lo(t,e,n){rt.call(this,t,e,n)}Lo.prototype=Object.assign(Object.create(rt.prototype),{constructor:Lo,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Ii,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ro(t,e,n,i){rt.call(this,t,e,n,i)}Ro.prototype=Object.assign(Object.create(rt.prototype),{constructor:Ro,ValueTypeName:"color"});function fi(t,e,n,i){rt.call(this,t,e,n,i)}fi.prototype=Object.assign(Object.create(rt.prototype),{constructor:fi,ValueTypeName:"number"});function Co(t,e,n,i){_t.call(this,t,e,n,i)}Co.prototype=Object.assign(Object.create(_t.prototype),{constructor:Co,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e);let c=t*o;for(let l=c+o;c!==l;c+=4)ct.slerpFlat(r,0,s,c-o,s,c,a);return r}});function fr(t,e,n,i){rt.call(this,t,e,n,i)}fr.prototype=Object.assign(Object.create(rt.prototype),{constructor:fr,ValueTypeName:"quaternion",DefaultInterpolation:Di,InterpolantFactoryMethodLinear:function(t){return new Co(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function Po(t,e,n,i){rt.call(this,t,e,n,i)}Po.prototype=Object.assign(Object.create(rt.prototype),{constructor:Po,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Ii,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function di(t,e,n,i){rt.call(this,t,e,n,i)}di.prototype=Object.assign(Object.create(rt.prototype),{constructor:di,ValueTypeName:"vector"});function bt(t,e=-1,n,i=Ts){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ye.generateUUID(),this.duration<0&&this.resetDuration()}function ky(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return di;case"color":return Ro;case"quaternion":return fr;case"bool":case"boolean":return Lo;case"string":return Po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Vy(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ky(t.type);if(t.times===void 0){const n=[],i=[];Ve.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(bt,{parse:function(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,o=n.length;s!==o;++s)e.push(Vy(n[s]).scale(i));const r=new bt(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r},toJSON:function(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(rt.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){const r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=Ve.getKeyframeOrder(a);a=Ve.sortedArray(a,1,l),c=Ve.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new fi(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new bt(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.name.match(r);if(l&&l.length>1){const h=l[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const s=[];for(const o in i)s.push(bt.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,d,p){if(f.length!==0){const y=[],x=[];Ve.flattenJSON(f,y,x,d),y.length!==0&&p.push(new h(u,y,x))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode;let a=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let d;for(d=0;d<u.length;d++)if(u[d].morphTargets)for(let p=0;p<u[d].morphTargets.length;p++)f[u[d].morphTargets[p]]=-1;for(const p in f){const y=[],x=[];for(let g=0;g!==u[d].morphTargets.length;++g){const m=u[d];y.push(m.time),x.push(m.morphTarget===p?1:0)}i.push(new fi(".morphTargetInfluence["+p+"]",y,x))}a=f.length*(s||1)}else{const f=".bones["+e[h].name+"]";n(di,f+".position",u,"pos",i),n(fr,f+".quaternion",u,"rot",i),n(di,f+".scale",u,"scl",i)}}return i.length===0?null:new bt(r,a,i,o)}}),Object.assign(bt.prototype,{resetDuration:function(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new bt(this.name,this.duration,t,this.blendMode)},toJSON:function(){return bt.toJSON(this)}});const pi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function hc(t,e,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){const h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],d=c[h+1];if(f.global&&(f.lastIndex=0),f.test(l))return d}return null}}const Dh=new hc;function De(t){this.manager=t!==void 0?t:Dh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(De.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});const Gt={};function Rt(t){De.call(this,t)}Rt.prototype=Object.assign(Object.create(De.prototype),{constructor:Rt,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=pi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Gt[t]!==void 0){Gt[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o);let c;if(a){const l=a[1],h=!!a[2];let u=a[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let f;const d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":const p=new Uint8Array(u.length);for(let x=0;x<u.length;x++)p[x]=u.charCodeAt(x);d==="blob"?f=new Blob([p.buffer],{type:l}):f=p.buffer;break;case"document":f=new DOMParser().parseFromString(u,l);break;case"json":f=JSON.parse(u);break;default:f=u;break}setTimeout(function(){e&&e(f),r.manager.itemEnd(t)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Gt[t]=[],Gt[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){const h=this.response,u=Gt[t];if(delete Gt[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),pi.add(t,h);for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(h)}r.manager.itemEnd(t)}else{for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){const h=Gt[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onProgress&&d.onProgress(l)}},!1),c.addEventListener("error",function(l){const h=Gt[t];delete Gt[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){const h=Gt[t];delete Gt[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function fc(t){De.call(this,t)}fc.prototype=Object.assign(Object.create(De.prototype),{constructor:fc,load:function(t,e,n,i){const r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=[];for(let n=0;n<t.length;n++){const i=bt.parse(t[n]);e.push(i)}return e}});function dc(t){De.call(this,t)}dc.prototype=Object.assign(Object.create(De.prototype),{constructor:dc,load:function(t,e,n,i){const r=this,s=[],o=new cr,a=new Rt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(h){a.load(t[h],function(u){const f=r.parse(u,!0);s[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=et),o.image=s,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let h=0,u=t.length;h<u;++h)l(h);else a.load(t,function(h){const u=r.parse(h,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let d=0;d<f;d++){s[d]={mipmaps:[]};for(let p=0;p<u.mipmapCount;p++)s[d].mipmaps.push(u.mipmaps[d*u.mipmapCount+p]),s[d].format=u.format,s[d].width=u.width,s[d].height=u.height}o.image=s}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=et),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function dr(t){De.call(this,t)}dr.prototype=Object.assign(Object.create(De.prototype),{constructor:dr,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=pi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),pi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}});function Io(t){De.call(this,t)}Io.prototype=Object.assign(Object.create(De.prototype),{constructor:Io,load:function(t,e,n,i){const r=new Zt,s=new dr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function Do(t){De.call(this,t)}Do.prototype=Object.assign(Object.create(De.prototype),{constructor:Do,load:function(t,e,n,i){const r=this,s=new dn,o=new Rt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){const c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:at,s.wrapT=c.wrapT!==void 0?c.wrapT:at,s.magFilter=c.magFilter!==void 0?c.magFilter:et,s.minFilter=c.minFilter!==void 0?c.minFilter:et,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Wn),c.mipmapCount===1&&(s.minFilter=et),s.needsUpdate=!0,e&&e(s,c))},n,i),s}});function us(t){De.call(this,t)}us.prototype=Object.assign(Object.create(De.prototype),{constructor:us,load:function(t,e,n,i){const r=new Be,s=new dr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;const a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?sn:wt,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function he(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(he.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){const t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],u=n[i+1]-l,f=(s-l)/u;return(i+f)/(r-1)},getTangent:function(t,e){const n=1e-4;let i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new k:new M);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){const n=new M,i=[],r=[],s=[],o=new M,a=new Te;for(let f=0;f<=t;f++){const d=f/t;i[f]=this.getTangentAt(d,new M),i[f].normalize()}r[0]=new M,s[0]=new M;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const d=Math.acos(ye.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,d))}s[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ye.clamp(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let d=1;d<=t;d++)r[d].applyMatrix4(a.makeRotationAxis(i[d],f*d)),s[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function Ct(t,e,n,i,r,s,o,a){he.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Ct.prototype=Object.create(he.prototype),Ct.prototype.constructor=Ct,Ct.prototype.isEllipseCurve=!0,Ct.prototype.getPoint=function(t,e){const n=e||new k,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,f=c-this.aY;a=u*l-f*h+this.aX,c=u*h+f*l+this.aY}return n.set(a,c)},Ct.prototype.copy=function(t){return he.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},Ct.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},Ct.prototype.fromJSON=function(t){return he.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function pr(t,e,n,i,r,s){Ct.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}pr.prototype=Object.create(Ct.prototype),pr.prototype.constructor=pr,pr.prototype.isArcCurve=!0;function pc(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Fo=new M,mc=new pc,gc=new pc,yc=new pc;function ft(t=[],e=!1,n="centripetal",i=.5){he.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}ft.prototype=Object.create(he.prototype),ft.prototype.constructor=ft,ft.prototype.isCatmullRomCurve3=!0,ft.prototype.getPoint=function(t,e=new M){const n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Fo.subVectors(i[0],i[1]).add(i[0]),c=Fo);const h=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Fo.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(l),f);p<1e-4&&(p=1),d<1e-4&&(d=p),y<1e-4&&(y=p),mc.initNonuniformCatmullRom(c.x,h.x,u.x,l.x,d,p,y),gc.initNonuniformCatmullRom(c.y,h.y,u.y,l.y,d,p,y),yc.initNonuniformCatmullRom(c.z,h.z,u.z,l.z,d,p,y)}else this.curveType==="catmullrom"&&(mc.initCatmullRom(c.x,h.x,u.x,l.x,this.tension),gc.initCatmullRom(c.y,h.y,u.y,l.y,this.tension),yc.initCatmullRom(c.z,h.z,u.z,l.z,this.tension));return n.set(mc.calc(a),gc.calc(a),yc.calc(a)),n},ft.prototype.copy=function(t){he.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},ft.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},ft.prototype.fromJSON=function(t){he.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new M().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function Fh(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function Wy(t,e){const n=1-t;return n*n*e}function jy(t,e){return 2*(1-t)*t*e}function qy(t,e){return t*t*e}function hs(t,e,n,i){return Wy(t,e)+jy(t,n)+qy(t,i)}function Xy(t,e){const n=1-t;return n*n*n*e}function Yy(t,e){const n=1-t;return 3*n*n*t*e}function Zy(t,e){return 3*(1-t)*t*t*e}function Jy(t,e){return t*t*t*e}function fs(t,e,n,i,r){return Xy(t,e)+Yy(t,n)+Zy(t,i)+Jy(t,r)}function Ut(t=new k,e=new k,n=new k,i=new k){he.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Ut.prototype=Object.create(he.prototype),Ut.prototype.constructor=Ut,Ut.prototype.isCubicBezierCurve=!0,Ut.prototype.getPoint=function(t,e=new k){const n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(fs(t,i.x,r.x,s.x,o.x),fs(t,i.y,r.y,s.y,o.y)),n},Ut.prototype.copy=function(t){return he.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},Ut.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},Ut.prototype.fromJSON=function(t){return he.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function Jt(t=new M,e=new M,n=new M,i=new M){he.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Jt.prototype=Object.create(he.prototype),Jt.prototype.constructor=Jt,Jt.prototype.isCubicBezierCurve3=!0,Jt.prototype.getPoint=function(t,e=new M){const n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(fs(t,i.x,r.x,s.x,o.x),fs(t,i.y,r.y,s.y,o.y),fs(t,i.z,r.z,s.z,o.z)),n},Jt.prototype.copy=function(t){return he.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},Jt.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},Jt.prototype.fromJSON=function(t){return he.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function Mt(t=new k,e=new k){he.call(this),this.type="LineCurve",this.v1=t,this.v2=e}Mt.prototype=Object.create(he.prototype),Mt.prototype.constructor=Mt,Mt.prototype.isLineCurve=!0,Mt.prototype.getPoint=function(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},Mt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},Mt.prototype.getTangent=function(t,e){const n=e||new k;return n.copy(this.v2).sub(this.v1).normalize(),n},Mt.prototype.copy=function(t){return he.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Mt.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Mt.prototype.fromJSON=function(t){return he.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Ht(t=new M,e=new M){he.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}Ht.prototype=Object.create(he.prototype),Ht.prototype.constructor=Ht,Ht.prototype.isLineCurve3=!0,Ht.prototype.getPoint=function(t,e=new M){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},Ht.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},Ht.prototype.copy=function(t){return he.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Ht.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Ht.prototype.fromJSON=function(t){return he.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function kt(t=new k,e=new k,n=new k){he.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}kt.prototype=Object.create(he.prototype),kt.prototype.constructor=kt,kt.prototype.isQuadraticBezierCurve=!0,kt.prototype.getPoint=function(t,e=new k){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(hs(t,i.x,r.x,s.x),hs(t,i.y,r.y,s.y)),n},kt.prototype.copy=function(t){return he.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},kt.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},kt.prototype.fromJSON=function(t){return he.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function $t(t=new M,e=new M,n=new M){he.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}$t.prototype=Object.create(he.prototype),$t.prototype.constructor=$t,$t.prototype.isQuadraticBezierCurve3=!0,$t.prototype.getPoint=function(t,e=new M){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(hs(t,i.x,r.x,s.x),hs(t,i.y,r.y,s.y),hs(t,i.z,r.z,s.z)),n},$t.prototype.copy=function(t){return he.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},$t.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},$t.prototype.fromJSON=function(t){return he.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Vt(t=[]){he.call(this),this.type="SplineCurve",this.points=t}Vt.prototype=Object.create(he.prototype),Vt.prototype.constructor=Vt,Vt.prototype.isSplineCurve=!0,Vt.prototype.getPoint=function(t,e=new k){const n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(Fh(o,a.x,c.x,l.x,h.x),Fh(o,a.y,c.y,l.y,h.y)),n},Vt.prototype.copy=function(t){he.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this},Vt.prototype.toJSON=function(){const t=he.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t},Vt.prototype.fromJSON=function(t){he.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new k().fromArray(i))}return this};var xc=Object.freeze({__proto__:null,ArcCurve:pr,CatmullRomCurve3:ft,CubicBezierCurve:Ut,CubicBezierCurve3:Jt,EllipseCurve:Ct,LineCurve:Mt,LineCurve3:Ht,QuadraticBezierCurve:kt,QuadraticBezierCurve3:$t,SplineCurve:Vt});function On(){he.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}On.prototype=Object.assign(Object.create(he.prototype),{constructor:On,add:function(t){this.curves.push(t)},closePath:function(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Mt(e,t))},getPoint:function(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){he.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){const t=he.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){he.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new xc[i.type]().fromJSON(i))}return this}});function Wt(t){On.call(this),this.type="Path",this.currentPoint=new k,t&&this.setFromPoints(t)}Wt.prototype=Object.assign(Object.create(On.prototype),{constructor:Wt,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){const n=new Mt(this.currentPoint.clone(),new k(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){const r=new kt(this.currentPoint.clone(),new k(t,e),new k(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){const o=new Ut(this.currentPoint.clone(),new k(t,e),new k(n,i),new k(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){const e=[this.currentPoint.clone()].concat(t),n=new Vt(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){const c=new Ct(t,e,n,i,r,s,o,a);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return On.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){const t=On.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return On.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function Nn(t){Wt.call(this,t),this.uuid=ye.generateUUID(),this.type="Shape",this.holes=[]}Nn.prototype=Object.assign(Object.create(Wt.prototype),{constructor:Nn,getPointsHoles:function(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){Wt.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){const t=Wt.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){Wt.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Wt().fromJSON(i))}return this}});function He(t,e=1){ce.call(this),this.type="Light",this.color=new ne(t),this.intensity=e}He.prototype=Object.assign(Object.create(ce.prototype),{constructor:He,isLight:!0,copy:function(t){return ce.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){const e=ce.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function Bo(t,e,n){He.call(this,t,n),this.type="HemisphereLight",this.position.copy(ce.DefaultUp),this.updateMatrix(),this.groundColor=new ne(e)}Bo.prototype=Object.assign(Object.create(He.prototype),{constructor:Bo,isHemisphereLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function vn(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new k(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new k(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}Object.assign(vn.prototype,{_projScreenMatrix:new Te,_lightPositionWorld:new M,_lookTarget:new M,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){const e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function vc(){vn.call(this,new Ze(50,1,.5,500)),this.focus=1}vc.prototype=Object.assign(Object.create(vn.prototype),{constructor:vc,isSpotLightShadow:!0,updateMatrices:function(t){const e=this.camera,n=ye.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),vn.prototype.updateMatrices.call(this,t)}});function ds(t,e,n,i,r,s){He.call(this,t,e),this.type="SpotLight",this.position.copy(ce.DefaultUp),this.updateMatrix(),this.target=new ce,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new vc}ds.prototype=Object.assign(Object.create(He.prototype),{constructor:ds,isSpotLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function _c(){vn.call(this,new Ze(90,1,.5,500)),this._frameExtents=new k(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}_c.prototype=Object.assign(Object.create(vn.prototype),{constructor:_c,isPointLightShadow:!0,updateMatrices:function(t,e=0){const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function ps(t,e,n,i){He.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new _c}ps.prototype=Object.assign(Object.create(He.prototype),{constructor:ps,isPointLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function mi(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){Yt.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}mi.prototype=Object.assign(Object.create(Yt.prototype),{constructor:mi,isOrthographicCamera:!0,copy:function(t,e){return Yt.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){const e=ce.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function bc(){vn.call(this,new mi(-5,5,5,-5,.5,500))}bc.prototype=Object.assign(Object.create(vn.prototype),{constructor:bc,isDirectionalLightShadow:!0,updateMatrices:function(t){vn.prototype.updateMatrices.call(this,t)}});function ms(t,e){He.call(this,t,e),this.type="DirectionalLight",this.position.copy(ce.DefaultUp),this.updateMatrix(),this.target=new ce,this.shadow=new bc}ms.prototype=Object.assign(Object.create(He.prototype),{constructor:ms,isDirectionalLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function Oo(t,e){He.call(this,t,e),this.type="AmbientLight"}Oo.prototype=Object.assign(Object.create(He.prototype),{constructor:Oo,isAmbientLight:!0});function No(t,e,n,i){He.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}No.prototype=Object.assign(Object.create(He.prototype),{constructor:No,isRectAreaLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){const e=He.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});class Bh{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new M)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function Dt(t,e){He.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new Bh}Dt.prototype=Object.assign(Object.create(He.prototype),{constructor:Dt,isLightProbe:!0,copy:function(t){return He.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){const e=He.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function zo(t){De.call(this,t),this.textures={}}zo.prototype=Object.assign(Object.create(De.prototype),{constructor:zo,load:function(t,e,n,i){const r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=new Hy[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new ne().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ne().setHex(s.value);break;case"v2":i.uniforms[r].value=new k().fromArray(s.value);break;case"v3":i.uniforms[r].value=new M().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Ne().fromArray(s.value);break;case"m3":i.uniforms[r].value=new St().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Te().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new k().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new k().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});const Go={decodeText:function(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(n){return e}},extractUrlBase:function(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function gs(){fe.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}gs.prototype=Object.assign(Object.create(fe.prototype),{constructor:gs,isInstancedBufferGeometry:!0,copy:function(t){return fe.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t=fe.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function Uo(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),ge.call(this,t,e,n),this.meshPerAttribute=i||1}Uo.prototype=Object.assign(Object.create(ge.prototype),{constructor:Uo,isInstancedBufferAttribute:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){const t=ge.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function Ho(t){De.call(this,t)}Ho.prototype=Object.assign(Object.create(De.prototype),{constructor:Ho,load:function(t,e,n,i){const r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e={},n={};function i(f,d){if(e[d]!==void 0)return e[d];const y=f.interleavedBuffers[d],x=r(f,y.buffer),g=kr(y.type,x),m=new vt(g,y.stride);return m.uuid=y.uuid,e[d]=m,m}function r(f,d){if(n[d]!==void 0)return n[d];const y=f.arrayBuffers[d],x=new Uint32Array(y).buffer;return n[d]=x,x}const s=t.isInstancedBufferGeometry?new gs:new fe,o=t.data.index;if(o!==void 0){const f=kr(o.type,o.array);s.setIndex(new ge(f,1))}const a=t.data.attributes;for(const f in a){const d=a[f];let p;if(d.isInterleavedBufferAttribute){const y=i(t.data,d.data);p=new mn(y,d.itemSize,d.offset,d.normalized)}else{const y=kr(d.type,d.array),x=d.isInstancedBufferAttribute?Uo:ge;p=new x(y,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),s.setAttribute(f,p)}const c=t.data.morphAttributes;if(c)for(const f in c){const d=c[f],p=[];for(let y=0,x=d.length;y<x;y++){const g=d[y];let m;if(g.isInterleavedBufferAttribute){const _=i(t.data,g.data);m=new mn(_,g.itemSize,g.offset,g.normalized)}else{const _=kr(g.type,g.array);m=new ge(_,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[f]=p}t.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let f=0,d=h.length;f!==d;++f){const p=h[f];s.addGroup(p.start,p.count,p.materialIndex)}const u=t.data.boundingSphere;if(u!==void 0){const f=new M;u.center!==void 0&&f.fromArray(u.center),s.boundingSphere=new cn(f,u.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});class $y extends De{constructor(e){super(e)}load(e,n,i,r){const s=this,o=this.path===""?Go.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Rt(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){r!==void 0&&r(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,n)},i,r)}parse(e,n){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){n!==void 0&&n(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,i),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),n!==void 0){let u=!1;for(const f in o)if(o[f]instanceof HTMLImageElement){u=!0;break}u===!1&&n(l)}return l}parseShapes(e){const n={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new Nn().fromJSON(e[i]);n[s.uuid]=s}return n}parseSkeletons(e,n){const i={},r={};if(n.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new ar().fromJSON(e[s],r);i[a.uuid]=a}return i}parseGeometries(e,n){const i={};let r;if(e!==void 0){const s=new Ho;for(let o=0,a=e.length;o<a;o++){let c;const l=e[o];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":c=new mt[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":c=new mt[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":c=new mt[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":c=new mt[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":c=new mt[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":c=new mt[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":c=new mt[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":c=new mt[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":c=new mt[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":c=new mt[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"TubeGeometry":case"TubeBufferGeometry":c=new mt[l.type](new xc[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed);break;case"LatheGeometry":case"LatheBufferGeometry":c=new mt[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":c=new mt[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":r=[];for(let u=0,f=l.shapes.length;u<f;u++){const d=n[l.shapes[u]];r.push(d)}c=new mt[l.type](r,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":r=[];for(let u=0,f=l.shapes.length;u<f;u++){const d=n[l.shapes[u]];r.push(d)}const h=l.options.extrudePath;h!==void 0&&(l.options.extrudePath=new xc[h.type]().fromJSON(h)),c=new mt[l.type](r,l.options);break;case"BufferGeometry":case"InstancedBufferGeometry":c=s.parse(l);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}c.uuid=l.uuid,l.name!==void 0&&(c.name=l.name),c.isBufferGeometry===!0&&l.userData!==void 0&&(c.userData=l.userData),i[l.uuid]=c}}return i}parseMaterials(e,n){const i={},r={};if(e!==void 0){const s=new zo;s.setTextures(n);for(let o=0,a=e.length;o<a;o++){const c=e[o];if(c.type==="MultiMaterial"){const l=[];for(let h=0;h<c.materials.length;h++){const u=c.materials[h];i[u.uuid]===void 0&&(i[u.uuid]=s.parse(u)),l.push(i[u.uuid])}r[c.uuid]=l}else i[c.uuid]===void 0&&(i[c.uuid]=s.parse(c)),r[c.uuid]=i[c.uuid]}}return r}parseAnimations(e){const n={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],s=bt.parse(r);n[s.uuid]=s}return n}parseImages(e,n){const i=this,r={};let s;function o(c){return i.manager.itemStart(c),s.load(c,function(){i.manager.itemEnd(c)},void 0,function(){i.manager.itemError(c),i.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l;return o(h)}else return c.data?{data:kr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new hc(n);s=new dr(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],f=u.url;if(Array.isArray(f)){r[u.uuid]=[];for(let d=0,p=f.length;d<p;d++){const y=f[d],x=a(y);x!==null&&(x instanceof HTMLImageElement?r[u.uuid].push(x):r[u.uuid].push(new dn(x.data,x.width,x.height)))}}else{const d=a(u.url);d!==null&&(r[u.uuid]=d)}}}return r}parseTextures(e,n){function i(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),n[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c;const l=n[a.image];Array.isArray(l)?(c=new Zt(l),l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new dn(l.data,l.width,l.height):c=new Be(l),l&&(c.needsUpdate=!0)),c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,Qy)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],Oh),c.wrapT=i(a.wrap[1],Oh)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,Nh)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,Nh)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),r[a.uuid]=c}return r}parseObject(e,n,i,r){let s;function o(h){return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),n[h]}function a(h){if(h!==void 0){if(Array.isArray(h)){const u=[];for(let f=0,d=h.length;f<d;f++){const p=h[f];i[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),u.push(i[p])}return u}return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),i[h]}}let c,l;switch(e.type){case"Scene":s=new Qs,e.background!==void 0&&Number.isInteger(e.background)&&(s.background=new ne(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new $s(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new Js(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":s=new Ze(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new mi(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new Oo(e.color,e.intensity);break;case"DirectionalLight":s=new ms(e.color,e.intensity);break;case"PointLight":s=new ps(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new No(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new ds(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new Bo(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new Dt().fromJSON(e);break;case"SkinnedMesh":c=o(e.geometry),l=a(e.material),s=new sr(c,l),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":c=o(e.geometry),l=a(e.material),s=new ze(c,l);break;case"InstancedMesh":c=o(e.geometry),l=a(e.material);const h=e.count,u=e.instanceMatrix;s=new ro(c,l,h),s.instanceMatrix=new ge(new Float32Array(u.array),16);break;case"LOD":s=new Kr;break;case"Line":s=new Lt(o(e.geometry),a(e.material));break;case"LineLoop":s=new ts(o(e.geometry),a(e.material));break;case"LineSegments":s=new ht(o(e.geometry),a(e.material));break;case"PointCloud":case"Points":s=new ii(o(e.geometry),a(e.material));break;case"Sprite":s=new Qr(a(e.material));break;case"Group":s=new pn;break;case"Bone":s=new or;break;default:s=new ce}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let u=0;u<h.length;u++)s.add(this.parseObject(h[u],n,i,r))}if(e.animations!==void 0){const h=e.animations;for(let u=0;u<h.length;u++){const f=h[u];s.animations.push(r[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const h=e.levels;for(let u=0;u<h.length;u++){const f=h[u],d=s.getObjectByProperty("uuid",f.object);d!==void 0&&s.addLevel(d,f.distance)}}return s}bindSkeletons(e,n){Object.keys(n).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=n[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const Qy={UVMapping:_s,CubeReflectionMapping:Mr,CubeRefractionMapping:wr,EquirectangularReflectionMapping:bs,EquirectangularRefractionMapping:Ms,CubeUVReflectionMapping:Ei,CubeUVRefractionMapping:Sr},Oh={RepeatWrapping:Ai,ClampToEdgeWrapping:at,MirroredRepeatWrapping:Li},Nh={NearestFilter:Ke,NearestMipmapNearestFilter:Tr,NearestMipmapLinearFilter:Er,LinearFilter:et,LinearMipmapNearestFilter:ws,LinearMipmapLinearFilter:Wn};function ko(t){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),De.call(this,t),this.options={premultiplyAlpha:"none"}}ko.prototype=Object.assign(Object.create(De.prototype),{constructor:ko,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=pi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){pi.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function Mc(){this.type="ShapePath",this.color=new ne,this.subPaths=[],this.currentPath=null}Object.assign(Mc.prototype,{moveTo:function(t,e){return this.currentPath=new Wt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){const m=[];for(let _=0,b=g.length;_<b;_++){const T=g[_],v=new Nn;v.curves=T.curves,m.push(v)}return m}function i(g,m){const _=m.length;let b=!1;for(let T=_-1,v=0;v<_;T=v++){let A=m[T],I=m[v],L=I.x-A.x,P=I.y-A.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(A=m[v],L=-L,I=m[T],P=-P),g.y<A.y||g.y>I.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const F=P*(g.x-A.x)-L*(g.y-A.y);if(F===0)return!0;if(F<0)continue;b=!b}}else{if(g.y!==A.y)continue;if(I.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=I.x)return!0}}return b}const r=gn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Nn,c.curves=a.curves,l.push(c),l;let h=!r(s[0].getPoints());h=t?!h:h;const u=[],f=[];let d=[],p=0,y;f[p]=void 0,d[p]=[];for(let g=0,m=s.length;g<m;g++)a=s[g],y=a.getPoints(),o=r(y),o=t?!o:o,o?(!h&&f[p]&&p++,f[p]={s:new Nn,p:y},f[p].s.curves=a.curves,h&&p++,d[p]=[]):d[p].push({h:a,p:y[0]});if(!f[0])return n(s);if(f.length>1){let g=!1;const m=[];for(let _=0,b=f.length;_<b;_++)u[_]=[];for(let _=0,b=f.length;_<b;_++){const T=d[_];for(let v=0;v<T.length;v++){const A=T[v];let I=!0;for(let L=0;L<f.length;L++)i(A.p,f[L].p)&&(_!==L&&m.push({froms:_,tos:L,hole:v}),I?(I=!1,u[L].push(A)):g=!0);I&&u[_].push(A)}}m.length>0&&(g||(d=u))}let x;for(let g=0,m=f.length;g<m;g++){c=f[g].s,l.push(c),x=d[g];for(let _=0,b=x.length;_<b;_++)c.holes.push(x[_].h)}return l}});class zh{constructor(e){Object.defineProperty(this,"isFont",{value:!0}),this.type="Font",this.data=e}generateShapes(e,n=100){const i=[],r=Ky(e,n,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}}function Ky(t,e,n){const i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const h=i[l];if(h===`
`)a=0,c-=s;else{const u=ex(h,r,a,c,n);a+=u.offsetX,o.push(u.path)}}return o}function ex(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new Mc;let a,c,l,h,u,f,d,p;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,g=y.length;x<g;)switch(y[x++]){case"m":a=y[x++]*e+n,c=y[x++]*e+i,o.moveTo(a,c);break;case"l":a=y[x++]*e+n,c=y[x++]*e+i,o.lineTo(a,c);break;case"q":l=y[x++]*e+n,h=y[x++]*e+i,u=y[x++]*e+n,f=y[x++]*e+i,o.quadraticCurveTo(u,f,l,h);break;case"b":l=y[x++]*e+n,h=y[x++]*e+i,u=y[x++]*e+n,f=y[x++]*e+i,d=y[x++]*e+n,p=y[x++]*e+i,o.bezierCurveTo(u,f,d,p,l,h);break}}return{offsetX:s.ha*e,path:o}}function wc(t){De.call(this,t)}wc.prototype=Object.assign(Object.create(De.prototype),{constructor:wc,load:function(t,e,n,i){const r=this,s=new Rt(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new zh(t)}});let Vo;const Sc={getContext:function(){return Vo===void 0&&(Vo=new(window.AudioContext||window.webkitAudioContext)),Vo},setContext:function(t){Vo=t}};function Wo(t){De.call(this,t)}Wo.prototype=Object.assign(Object.create(De.prototype),{constructor:Wo,load:function(t,e,n,i){const r=this,s=new Rt(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{const a=o.slice(0);Sc.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function Tc(t,e,n){Dt.call(this,void 0,n);const i=new ne().set(t),r=new ne().set(e),s=new M(i.r,i.g,i.b),o=new M(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Tc.prototype=Object.assign(Object.create(Dt.prototype),{constructor:Tc,isHemisphereLightProbe:!0,copy:function(t){return Dt.prototype.copy.call(this,t),this},toJSON:function(t){return Dt.prototype.toJSON.call(this,t)}});function Ec(t,e){Dt.call(this,void 0,e);const n=new ne().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Ec.prototype=Object.assign(Object.create(Dt.prototype),{constructor:Ec,isAmbientLightProbe:!0,copy:function(t){return Dt.prototype.copy.call(this,t),this},toJSON:function(t){return Dt.prototype.toJSON.call(this,t)}});const Gh=new Te,Uh=new Te;function Hh(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ze,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ze,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Hh.prototype,{update:function(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;const i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(ye.DEG2RAD*e.fov*.5)/e.zoom;let a,c;Uh.elements[12]=-r,Gh.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Uh),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Gh)}});class Ac{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=kh();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function kh(){return(typeof performance=="undefined"?Date:performance).now()}const gi=new M,Vh=new ct,tx=new M,yi=new M;class nx extends ce{constructor(){super();this.type="AudioListener",this.context=Sc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ac}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(gi,Vh,tx),yi.set(0,0,-1).applyQuaternion(Vh),n.positionX){const r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(gi.x,r),n.positionY.linearRampToValueAtTime(gi.y,r),n.positionZ.linearRampToValueAtTime(gi.z,r),n.forwardX.linearRampToValueAtTime(yi.x,r),n.forwardY.linearRampToValueAtTime(yi.y,r),n.forwardZ.linearRampToValueAtTime(yi.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(gi.x,gi.y,gi.z),n.setOrientation(yi.x,yi.y,yi.z,i.x,i.y,i.z)}}class Lc extends ce{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const xi=new M,Wh=new ct,ix=new M,vi=new M;class rx extends Lc{constructor(e){super(e);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,n,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=n,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(xi,Wh,ix),vi.set(0,0,1).applyQuaternion(Wh);const n=this.panner;if(n.positionX){const i=this.context.currentTime+this.listener.timeDelta;n.positionX.linearRampToValueAtTime(xi.x,i),n.positionY.linearRampToValueAtTime(xi.y,i),n.positionZ.linearRampToValueAtTime(xi.z,i),n.orientationX.linearRampToValueAtTime(vi.x,i),n.orientationY.linearRampToValueAtTime(vi.y,i),n.orientationZ.linearRampToValueAtTime(vi.z,i)}else n.setPosition(xi.x,xi.y,xi.z),n.setOrientation(vi.x,vi.y,vi.z)}}class jh{constructor(e,n=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=n,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const n=this.getFrequencyData();for(let i=0;i<n.length;i++)e+=n[i];return e/n.length}}function Rc(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Rc.prototype,{accumulate:function(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;const o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){ct.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){const s=this._workIndex*r;ct.multiplyQuaternionsFlat(t,s,t,e,t,n),ct.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){const o=e+s;t[o]=t[o]+t[n+s]*i}}});const Cc="\\[\\]\\.:\\/",sx=new RegExp("["+Cc+"]","g"),Pc="[^"+Cc+"]",ox="[^"+Cc.replace("\\.","")+"]",ax=/((?:WC+[\/:])*)/.source.replace("WC",Pc),cx=/(WCOD+)?/.source.replace("WCOD",ox),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pc),ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pc),hx=new RegExp("^"+ax+cx+lx+ux+"$"),fx=["material","materials","bones"];function qh(t,e,n){const i=n||st.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(qh.prototype,{getValue:function(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function st(t,e,n){this.path=e,this.parsedPath=n||st.parseTrackName(e),this.node=st.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(st,{Composite:qh,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new st.Composite(t,e,n):new st(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(sx,"")},parseTrackName:function(t){const e=hx.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);fx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}}),Object.assign(st.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=st.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const s=t[i];if(s===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),Object.assign(st.prototype,{_getValue_unbound:st.prototype.getValue,_setValue_unbound:st.prototype.setValue});function Xh(){this.uuid=ye.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(Xh.prototype,{isAnimationObjectGroup:!0,add:function(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=t.length,c=this.nCachedObjects_;for(let l=0,h=arguments.length;l!==h;++l){const u=arguments[l],f=u.uuid;let d=e[f];if(d===void 0){d=a++,e[f]=d,t.push(u);for(let p=0,y=s;p!==y;++p)r[p].push(new st(u,n[p],i[p]))}else if(d<c){o=t[d];const p=--c,y=t[p];e[y.uuid]=d,t[d]=y,e[f]=p,t[p]=u;for(let x=0,g=s;x!==g;++x){const m=r[x],_=m[p];let b=m[d];m[d]=_,b===void 0&&(b=new st(u,n[x],i[x])),m[p]=b}}else t[d]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){const h=r++,u=t[h];e[u.uuid]=l,t[l]=u,e[c]=h,t[h]=a;for(let f=0,d=i;f!==d;++f){const p=n[f],y=p[h],x=p[l];p[l]=y,p[h]=x}}}this.nCachedObjects_=r},uncache:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,h=e[l];if(h!==void 0)if(delete e[l],h<r){const u=--r,f=t[u],d=--s,p=t[d];e[f.uuid]=h,t[h]=f,e[p.uuid]=u,t[u]=p,t.pop();for(let y=0,x=i;y!==x;++y){const g=n[y],m=g[u],_=g[d];g[h]=m,g[u]=_,g.pop()}}else{const u=--s,f=t[u];u>0&&(e[f.uuid]=h),t[h]=f,t.pop();for(let d=0,p=i;d!==p;++d){const y=n[d];y[h]=y[u],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,h=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(h);for(let u=l,f=a.length;u!==f;++u){const d=a[u];h[u]=new st(d,t,e)}return h},unsubscribe_:function(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class dx{constructor(e,n,i=null,r=n.blendMode){this._mixer=e,this._clip=n,this._localRoot=i,this.blendMode=r;const s=n.tracks,o=s.length,a=new Array(o),c={endingStart:qn,endingEnd:qn};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);const o=this._updateTime(n),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ea:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ts:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(n*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n))}return this._effectiveTimeScale=n,n}_updateTime(e){const n=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===gu;if(e===0)return s===-1?r:o&&(s&1)==1?n-r:r;if(i===pu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return n-r}return r}_setEndings(e,n,i){const r=this._interpolantSettings;i?(r.endingStart=Xn,r.endingEnd=Xn):(e?r.endingStart=this.zeroSlopeAtStart?Xn:qn:r.endingStart=Cr,n?r.endingEnd=this.zeroSlopeAtEnd?Xn:qn:r.endingEnd=Cr)}_scheduleFading(e,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}}function Ic(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Ic.prototype=Object.assign(Object.create(on.prototype),{constructor:Ic,_bindAction:function(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let h=0;h!==r;++h){const u=i[h],f=u.name;let d=l[f];if(d!==void 0)s[h]=d;else{if(d=s[h],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,a,f));continue}const p=e&&e._propertyBindings[h].binding.parsedPath;d=new Rc(st.create(n,f,p),u.ValueTypeName,u.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,a,f),s[h]=d}o[h].resultBuffer=d.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete h[u],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}},_lendAction:function(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new ls(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){const i=e||this._root,r=i.uuid;let s=typeof t=="string"?bt.findByName(i,t):t;const o=s!==null?s.uuid:t,a=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Ts),a!==void 0){const h=a.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new dx(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?bt.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=l,e[l]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){const e=t.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});class jo{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new jo(this.value.clone===void 0?this.value:this.value.clone())}}function Dc(t,e,n){vt.call(this,t,e),this.meshPerAttribute=n||1}Dc.prototype=Object.assign(Object.create(vt.prototype),{constructor:Dc,isInstancedInterleavedBuffer:!0,copy:function(t){return vt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){const e=vt.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){const e=vt.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Fc(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Fc.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(Fc.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function qo(t,e,n,i){this.ray=new Gi(t,e),this.near=n||0,this.far=i||Infinity,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Yh(t,e){return t.distance-e.distance}function Bc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Bc(r[s],e,n,!0)}}Object.assign(qo.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(t,e,n){const i=n||[];return Bc(t,this,i,e),i.sort(Yh),i},intersectObjects:function(t,e,n){const i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)Bc(t[r],this,i,e);return i.sort(Yh),i}});class px{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ye.clamp(n/this.radius,-1,1))),this}}class mx{constructor(e,n,i){return this.radius=e!==void 0?e:1,this.theta=n!==void 0?n:0,this.y=i!==void 0?i:0,this}set(e,n,i){return this.radius=e,this.theta=n,this.y=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=n,this}}const Zh=new k;class Jh{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new k(Infinity,Infinity),this.max=n!==void 0?n:new k(-Infinity,-Infinity)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zh.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new k),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new k),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new k),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new k),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zh.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $h=new M,Xo=new M;class Qh{constructor(e,n){this.start=e!==void 0?e:new M,this.end=n!==void 0?n:new M}set(e,n){return this.start.copy(e),this.end.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new M),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new M),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new M),this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){$h.subVectors(e,this.start),Xo.subVectors(this.end,this.start);const i=Xo.dot(Xo);let s=Xo.dot($h)/i;return n&&(s=ye.clamp(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new M),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}}function ys(t){ce.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}ys.prototype=Object.create(ce.prototype),ys.prototype.constructor=ys,ys.prototype.isImmediateRenderObject=!0;const Kh=new M;class gx extends ce{constructor(e,n){super();this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new fe,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;r.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new re(r,3));const s=new ke({fog:!1,toneMapped:!1});this.cone=new ht(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,n=e*Math.tan(this.light.angle);this.cone.scale.set(n,n,e),Kh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Kh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const zn=new M,Yo=new Te,Oc=new Te;class ef extends ht{constructor(e){const n=tf(e),i=new fe,r=[],s=[],o=new ne(0,0,1),a=new ne(0,1,0);for(let l=0;l<n.length;l++){const h=n[l];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new re(r,3)),i.setAttribute("color",new re(s,3));const c=new ke({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const n=this.bones,i=this.geometry,r=i.getAttribute("position");Oc.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){const a=n[s];a.parent&&a.parent.isBone&&(Yo.multiplyMatrices(Oc,a.matrixWorld),zn.setFromMatrixPosition(Yo),r.setXYZ(o,zn.x,zn.y,zn.z),Yo.multiplyMatrices(Oc,a.parent.matrixWorld),zn.setFromMatrixPosition(Yo),r.setXYZ(o+1,zn.x,zn.y,zn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function tf(t){const e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,tf(t.children[n]));return e}class yx extends ze{constructor(e,n,i){const r=new cs(n,4,2),s=new xt({wireframe:!0,fog:!1,toneMapped:!1});super(r,s);this.light=e,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const xx=new M,nf=new ne,rf=new ne;class vx extends ce{constructor(e,n,i){super();this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;const r=new os(n);r.rotateY(Math.PI*.5),this.material=new xt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new ge(o,3)),this.add(new ze(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const n=e.geometry.getAttribute("color");nf.copy(this.light.color),rf.copy(this.light.groundColor);for(let i=0,r=n.count;i<r;i++){const s=i<r/2?nf:rf;n.setXYZ(i,s.r,s.g,s.b)}n.needsUpdate=!0}e.lookAt(xx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class sf extends ht{constructor(e=10,n=10,i=4473924,r=8947848){i=new ne(i),r=new ne(r);const s=n/2,o=e/n,a=e/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=n;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const y=f===s?i:r;y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3}const h=new fe;h.setAttribute("position",new re(c,3)),h.setAttribute("color",new re(l,3));const u=new ke({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}class _x extends ht{constructor(e=10,n=16,i=8,r=64,s=4473924,o=8947848){s=new ne(s),o=new ne(o);const a=[],c=[];for(let u=0;u<=n;u++){const f=u/n*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,p);const y=u&1?s:o;c.push(y.r,y.g,y.b),c.push(y.r,y.g,y.b)}for(let u=0;u<=i;u++){const f=u&1?s:o,d=e-e/i*u;for(let p=0;p<r;p++){let y=p/r*(Math.PI*2),x=Math.sin(y)*d,g=Math.cos(y)*d;a.push(x,0,g),c.push(f.r,f.g,f.b),y=(p+1)/r*(Math.PI*2),x=Math.sin(y)*d,g=Math.cos(y)*d,a.push(x,0,g),c.push(f.r,f.g,f.b)}}const l=new fe;l.setAttribute("position",new re(a,3)),l.setAttribute("color",new re(c,3));const h=new ke({vertexColors:!0,toneMapped:!1});super(l,h);this.type="PolarGridHelper"}}const of=new M,Zo=new M,af=new M;class bx extends ce{constructor(e,n,i){super();this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,n===void 0&&(n=1);let r=new fe;r.setAttribute("position",new re([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new ke({fog:!1,toneMapped:!1});this.lightPlane=new Lt(r,s),this.add(this.lightPlane),r=new fe,r.setAttribute("position",new re([0,0,0,0,0,1],3)),this.targetLine=new Lt(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){of.setFromMatrixPosition(this.light.matrixWorld),Zo.setFromMatrixPosition(this.light.target.matrixWorld),af.subVectors(Zo,of),this.lightPlane.lookAt(Zo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Zo),this.targetLine.scale.z=af.length()}}const Jo=new M,Xe=new Yt;class Mx extends ht{constructor(e){const n=new fe,i=new ke({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={},a=new ne(16755200),c=new ne(16711680),l=new ne(43775),h=new ne(16777215),u=new ne(3355443);f("n1","n2",a),f("n2","n4",a),f("n4","n3",a),f("n3","n1",a),f("f1","f2",a),f("f2","f4",a),f("f4","f3",a),f("f3","f1",a),f("n1","f1",a),f("n2","f2",a),f("n3","f3",a),f("n4","f4",a),f("p","n1",c),f("p","n2",c),f("p","n3",c),f("p","n4",c),f("u1","u2",l),f("u2","u3",l),f("u3","u1",l),f("c","t",h),f("p","c",u),f("cn1","cn2",u),f("cn3","cn4",u),f("cf1","cf2",u),f("cf3","cf4",u);function f(p,y,x){d(p,x),d(y,x)}function d(p,y){r.push(0,0,0),s.push(y.r,y.g,y.b),o[p]===void 0&&(o[p]=[]),o[p].push(r.length/3-1)}n.setAttribute("position",new re(r,3)),n.setAttribute("color",new re(s,3)),super(n,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){const e=this.geometry,n=this.pointMap,i=1,r=1;Xe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Je("c",n,e,Xe,0,0,-1),Je("t",n,e,Xe,0,0,1),Je("n1",n,e,Xe,-i,-r,-1),Je("n2",n,e,Xe,i,-r,-1),Je("n3",n,e,Xe,-i,r,-1),Je("n4",n,e,Xe,i,r,-1),Je("f1",n,e,Xe,-i,-r,1),Je("f2",n,e,Xe,i,-r,1),Je("f3",n,e,Xe,-i,r,1),Je("f4",n,e,Xe,i,r,1),Je("u1",n,e,Xe,i*.7,r*1.1,-1),Je("u2",n,e,Xe,-i*.7,r*1.1,-1),Je("u3",n,e,Xe,0,r*2,-1),Je("cf1",n,e,Xe,-i,0,1),Je("cf2",n,e,Xe,i,0,1),Je("cf3",n,e,Xe,0,-r,1),Je("cf4",n,e,Xe,0,r,1),Je("cn1",n,e,Xe,-i,0,-1),Je("cn2",n,e,Xe,i,0,-1),Je("cn3",n,e,Xe,0,-r,-1),Je("cn4",n,e,Xe,0,r,-1),e.getAttribute("position").needsUpdate=!0}}function Je(t,e,n,i,r,s,o){Jo.set(r,s,o).unproject(i);const a=e[t];if(a!==void 0){const c=n.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],Jo.x,Jo.y,Jo.z)}}const $o=new jt;class cf extends ht{constructor(e,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new fe;s.setIndex(new ge(i,1)),s.setAttribute("position",new ge(r,3)),super(s,new ke({color:n,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&$o.setFromObject(this.object),$o.isEmpty())return;const n=$o.min,i=$o.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=n.x,s[4]=i.y,s[5]=i.z,s[6]=n.x,s[7]=n.y,s[8]=i.z,s[9]=i.x,s[10]=n.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=n.z,s[15]=n.x,s[16]=i.y,s[17]=n.z,s[18]=n.x,s[19]=n.y,s[20]=n.z,s[21]=i.x,s[22]=n.y,s[23]=n.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return ht.prototype.copy.call(this,e),this.object=e.object,this}}class wx extends ht{constructor(e,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new fe;s.setIndex(new ge(i,1)),s.setAttribute("position",new re(r,3)),super(s,new ke({color:n,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const n=this.box;n.isEmpty()||(n.getCenter(this.position),n.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class Sx extends Lt{constructor(e,n=1,i=16776960){const r=i,s=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new fe;o.setAttribute("position",new re(s,3)),o.computeBoundingSphere(),super(o,new ke({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=n;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],c=new fe;c.setAttribute("position",new re(a,3)),c.computeBoundingSphere(),this.add(new ze(c,new xt({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let n=-this.plane.constant;Math.abs(n)<1e-8&&(n=1e-8),this.scale.set(.5*this.size,.5*this.size,n),this.children[0].material.side=n<0?Qe:Hn,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const lf=new M;let Qo,Nc;class Tx extends ce{constructor(e,n,i,r,s,o){super();this.type="ArrowHelper",e===void 0&&(e=new M(0,0,1)),n===void 0&&(n=new M(0,0,0)),i===void 0&&(i=1),r===void 0&&(r=16776960),s===void 0&&(s=.2*i),o===void 0&&(o=.2*s),Qo===void 0&&(Qo=new fe,Qo.setAttribute("position",new re([0,0,0,0,1,0],3)),Nc=new ur(0,.5,1,5,1),Nc.translate(0,-.5,0)),this.position.copy(n),this.line=new Lt(Qo,new ke({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ze(Nc,new xt({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{lf.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(lf,n)}}setLength(e,n,i){n===void 0&&(n=.2*e),i===void 0&&(i=.2*n),this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class uf extends ht{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new fe;r.setAttribute("position",new re(n,3)),r.setAttribute("color",new re(i,3));const s=new ke({vertexColors:!0,toneMapped:!1});super(r,s);this.type="AxesHelper"}}const hf=new Float32Array(1),Ex=new Int32Array(hf.buffer),Ax={toHalfFloat:function(t){hf[0]=t;const e=Ex[0];let n=e>>16&32768,i=e>>12&2047;const r=e>>23&255;return r<103?n:r>142?(n|=31744,n|=(r==255?0:1)&&e&8388607,n):r<113?(i|=2048,n|=(i>>114-r)+(i>>113-r&1),n):(n|=r-112<<10|i>>1,n+=i&1,n)}},mr=4,Gn=8,Qt=Math.pow(2,Gn),ff=[.125,.215,.35,.446,.526,.582],df=Gn-mr+1+ff.length,gr=20,Kt={[dt]:0,[Fi]:1,[As]:2,[Aa]:3,[La]:4,[Ra]:5,[Es]:6},_i=new xt({side:Qe,depthWrite:!1,depthTest:!1}),Lx=new ze(new ei,_i),zc=new mi,{_lodPlanes:xs,_sizeLods:pf,_sigmas:Ko}=Px(),mf=new ne;let Gc=null;const bi=(1+Math.sqrt(5))/2,yr=1/bi,gf=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,bi,yr),new M(0,bi,-yr),new M(yr,0,bi),new M(-yr,0,bi),new M(bi,yr,0),new M(-bi,yr,0)];function yf(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return t.multiplyScalar(Math.pow(2,-n)),(n+128)/255}class Rx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Ix(gr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gc=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=_f(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=vf(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<xs.length;e++)xs[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Gc),e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e){Gc=this._renderer.getRenderTarget();const n=this._allocateTargets(e);return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(e){const n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ri,format:Pl,encoding:Cx(e)?e.encoding:As,depthBuffer:!1},i=xf(n);return i.depthBuffer=!e,this._pingPongRenderTarget=xf(n),i}_compileMaterial(e){const n=new ze(xs[0],e);this._renderer.compile(n,zc)}_sceneToCubeUV(e,n,i,r){const s=90,o=1,a=new Ze(s,o,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.outputEncoding,d=h.toneMapping;h.getClearColor(mf),h.toneMapping=Vn,h.outputEncoding=dt,h.autoClear=!1;let p=!1;const y=e.background;if(y){if(y.isColor){_i.color.copy(y).convertSRGBToLinear(),e.background=null;const x=yf(_i.color);_i.opacity=x,p=!0}}else{_i.color.copy(mf).convertSRGBToLinear();const x=yf(_i.color);_i.opacity=x,p=!0}for(let x=0;x<6;x++){const g=x%3;g==0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):g==1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x])),ea(r,g*Qt,x>2?Qt:0,Qt,Qt),h.setRenderTarget(r),p&&h.render(Lx,a),h.render(e,a)}h.toneMapping=d,h.outputEncoding=f,h.autoClear=u}_textureToCubeUV(e,n){const i=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=_f()):this._equirectShader==null&&(this._equirectShader=vf());const r=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new ze(xs[0],r),o=r.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=Kt[e.encoding],o.outputEncoding.value=Kt[n.texture.encoding],ea(n,0,0,3*Qt,2*Qt),i.setRenderTarget(n),i.render(s,zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<df;r++){const s=Math.sqrt(Ko[r]*Ko[r]-Ko[r-1]*Ko[r-1]),o=gf[(r-1)%gf.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ze(xs[r],l),f=l.uniforms,d=pf[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gr-1),y=s/p,x=isFinite(s)?1+Math.floor(h*y):gr;x>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gr}`);const g=[];let m=0;for(let v=0;v<gr;++v){const A=v/y,I=Math.exp(-A*A/2);g.push(I),v==0?m+=I:v<x&&(m+=2*I)}for(let v=0;v<g.length;v++)g[v]=g[v]/m;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a),f.dTheta.value=p,f.mipInt.value=Gn-i,f.inputEncoding.value=Kt[e.texture.encoding],f.outputEncoding.value=Kt[e.texture.encoding];const _=pf[r],b=3*Math.max(0,Qt-2*_),T=(r===0?0:2*Qt)+2*_*(r>Gn-mr?r-Gn+mr:0);ea(n,b,T,3*_,2*_),c.setRenderTarget(n),c.render(u,zc)}}function Cx(t){return t===void 0||t.type!==Ri?!1:t.encoding===dt||t.encoding===Fi||t.encoding===Es}function Px(){const t=[],e=[],n=[];let i=Gn;for(let r=0;r<df;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>Gn-mr?o=ff[r-Gn+mr-1]:r==0&&(o=0),n.push(o);const a=1/(s-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,p=2,y=1,x=new Float32Array(d*f*u),g=new Float32Array(p*f*u),m=new Float32Array(y*f*u);for(let b=0;b<u;b++){const T=b%3*2/3-1,v=b>2?0:-1,A=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];x.set(A,d*f*b),g.set(h,p*f*b);const I=[b,b,b,b,b,b];m.set(I,y*f*b)}const _=new fe;_.setAttribute("position",new ge(x,d)),_.setAttribute("uv",new ge(g,p)),_.setAttribute("faceIndex",new ge(m,y)),t.push(_),i>mr&&i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}}function xf(t){const e=new bn(3*Qt,3*Qt,t);return e.texture.mapping=Ei,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ea(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ix(t){const e=new Float32Array(t),n=new M(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:Kt[dt]},outputEncoding:{value:Kt[dt]}},vertexShader:Uc(),fragmentShader:`

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

			${Hc()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function vf(){const t=new k(1,1);return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:t},inputEncoding:{value:Kt[dt]},outputEncoding:{value:Kt[dt]}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Hc()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function _f(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Kt[dt]},outputEncoding:{value:Kt[dt]}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Hc()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function Hc(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Dx(t,e,n,i,r,s,o){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new qa(t,e,n,r,s,o)}const Fx=0,Bx=1,Ox=0,Nx=1,zx=2;function Gx(t){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),t}function Ux(t=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),t.isMultiMaterial=!0,t.materials=t,t.clone=function(){return t.slice()},t}function Hx(t,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new ii(t,e)}function kx(t){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Qr(t)}function Vx(t,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new ii(t,e)}function Wx(t){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new It(t)}function jx(t){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new It(t)}function qx(t){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new It(t)}function Xx(t,e,n){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new M(t,e,n)}function Yx(t,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new ge(t,e).setUsage(Yn)}function Zx(t,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new Br(t,e)}function Jx(t,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new Or(t,e)}function $x(t,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new Nr(t,e)}function Qx(t,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new zr(t,e)}function Kx(t,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new Qn(t,e)}function ev(t,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new Gr(t,e)}function tv(t,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Kn(t,e)}function nv(t,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new re(t,e)}function iv(t,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new Hr(t,e)}he.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(he.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Object.assign(Wt.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function bf(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ft.call(this,t),this.type="catmullrom",this.closed=!0}bf.prototype=Object.create(ft.prototype);function Mf(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ft.call(this,t),this.type="catmullrom"}Mf.prototype=Object.create(ft.prototype);function kc(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),ft.call(this,t),this.type="catmullrom"}kc.prototype=Object.create(ft.prototype),Object.assign(kc.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});function rv(t){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new uf(t)}function sv(t,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new cf(t,e)}function ov(t,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new ht(new ac(t.geometry),new ke({color:e!==void 0?e:16777215}))}sf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},ef.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function av(t,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new ht(new uc(t.geometry),new ke({color:e!==void 0?e:16777215}))}Object.assign(De.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Go.extractUrlBase(t)}}),De.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function cv(t){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Rt(t)}function lv(t){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Do(t)}Object.assign(Jh.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(jt.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(cn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),Wr.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)},Qh.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)},Object.assign(ye,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),ye.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),ye.ceilPowerOfTwo(t)}}),Object.assign(St.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}}),Object.assign(Te.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}}),qt.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)},Object.assign(ct.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}}),Object.assign(Gi.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}}),Object.assign(lt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}}),Object.assign(lt,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),lt.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),lt.getNormal(t,e,n,i)}}),Object.assign(Nn.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ri(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new as(this,t)}}),Object.assign(k.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(M.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Ne.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(ce.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(ce.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.assign(ze.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}),Object.defineProperties(ze.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),yu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Object.defineProperties(Kr.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(ar.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),sr.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(he.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}}),Ze.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(He.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}}),Object.defineProperties(ge.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Yn},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Yn)}}}),Object.assign(ge.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Yn:Pr),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(fe.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new ge(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(fe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(gs.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}}),Object.defineProperties(qo.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}}),Object.defineProperties(vt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Yn},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}}),Object.assign(vt.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Yn:Pr),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(ri.prototype,{getArrays:function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")}}),Object.assign(Qs.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}}),Object.defineProperties(jo.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(me.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ne}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===aa}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}}),Object.defineProperties(Bn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(xn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}}),Object.defineProperties(pt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}}),Object.assign(er.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(er.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?Fi:dt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(oh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function uv(t,e,n){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new Ka(t,n)}Object.defineProperties(bn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}}),Object.defineProperties(Lc.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Wo().load(t,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}}),jh.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},ti.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)},ti.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)};const hv={merge:function(t,e,n){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");let i;e.isMesh&&(e.matrixAutoUpdate&&e.updateMatrix(),i=e.matrix,e=e.geometry),t.merge(e,i,n)},center:function(t){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),t.center()}};Zn.crossOrigin=void 0,Zn.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new us;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},Zn.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Io;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},Zn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Zn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function fv(){console.error("THREE.CanvasRenderer has been removed")}function dv(){console.error("THREE.JSONLoader has been removed.")}const pv={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function mv(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);var gv=Object.freeze({__proto__:null,ACESFilmicToneMapping:ma,AddEquation:kn,AddOperation:yl,AdditiveAnimationBlendMode:Ea,AdditiveBlending:ca,AlphaFormat:Ll,AlwaysDepth:ul,AlwaysStencilFunc:Su,AmbientLight:Oo,AmbientLightProbe:Ec,AnimationClip:bt,AnimationLoader:fc,AnimationMixer:Ic,AnimationObjectGroup:Xh,AnimationUtils:Ve,ArcCurve:pr,ArrayCamera:Ys,ArrowHelper:Tx,Audio:Lc,AudioAnalyser:jh,AudioContext:Sc,AudioListener:nx,AudioLoader:Wo,AxesHelper:uf,AxisHelper:rv,BackSide:Qe,BasicDepthPacking:bu,BasicShadowMap:Pf,BinaryTextureLoader:lv,Bone:or,BooleanKeyframeTrack:Lo,BoundingBoxHelper:sv,Box2:Jh,Box3:jt,Box3Helper:wx,BoxBufferGeometry:ei,BoxGeometry:ei,BoxHelper:cf,BufferAttribute:ge,BufferGeometry:fe,BufferGeometryLoader:Ho,ByteType:Ml,Cache:pi,Camera:Yt,CameraHelper:Mx,CanvasRenderer:fv,CanvasTexture:lr,CatmullRomCurve3:ft,CineonToneMapping:_l,CircleBufferGeometry:co,CircleGeometry:co,ClampToEdgeWrapping:at,Clock:Ac,ClosedSplineCurve3:bf,Color:ne,ColorKeyframeTrack:Ro,CompressedTexture:cr,CompressedTextureLoader:dc,ConeBufferGeometry:lo,ConeGeometry:lo,CubeCamera:ti,CubeReflectionMapping:Mr,CubeRefractionMapping:wr,CubeTexture:Zt,CubeTextureLoader:Io,CubeUVReflectionMapping:Ei,CubeUVRefractionMapping:Sr,CubicBezierCurve:Ut,CubicBezierCurve3:Jt,CubicInterpolant:Eo,CullFaceBack:ra,CullFaceFront:Jc,CullFaceFrontBack:Cf,CullFaceNone:Zc,Curve:he,CurvePath:On,CustomBlending:$c,CustomToneMapping:bl,CylinderBufferGeometry:ur,CylinderGeometry:ur,Cylindrical:mx,DataTexture:dn,DataTexture2DArray:$i,DataTexture3D:Qi,DataTextureLoader:Do,DataUtils:Ax,DecrementStencilOp:Uf,DecrementWrapStencilOp:kf,DefaultLoadingManager:Dh,DepthFormat:jn,DepthStencilFormat:Pi,DepthTexture:ns,DirectionalLight:ms,DirectionalLightHelper:bx,DiscreteInterpolant:Ao,DodecahedronBufferGeometry:uo,DodecahedronGeometry:uo,DoubleSide:Si,DstAlphaFactor:rl,DstColorFactor:ol,DynamicBufferAttribute:Yx,DynamicCopyUsage:nd,DynamicDrawUsage:Yn,DynamicReadUsage:Kf,EdgesGeometry:ac,EdgesHelper:ov,EllipseCurve:Ct,EqualDepth:fl,EqualStencilFunc:qf,EquirectangularReflectionMapping:bs,EquirectangularRefractionMapping:Ms,Euler:Hi,EventDispatcher:on,ExtrudeBufferGeometry:ri,ExtrudeGeometry:ri,Face3:qa,Face4:Dx,FaceColors:Nx,FileLoader:Rt,FlatShading:aa,Float16BufferAttribute:Ur,Float32Attribute:nv,Float32BufferAttribute:re,Float64Attribute:iv,Float64BufferAttribute:Hr,FloatType:rn,Fog:$s,FogExp2:Js,Font:zh,FontLoader:wc,FrontSide:Hn,Frustum:Wr,GLBufferAttribute:Fc,GLSL1:rd,GLSL3:Ca,GammaEncoding:Es,GeometryUtils:hv,GreaterDepth:pl,GreaterEqualDepth:dl,GreaterEqualStencilFunc:Jf,GreaterStencilFunc:Yf,GridHelper:sf,Group:pn,HalfFloatType:Rr,HemisphereLight:Bo,HemisphereLightHelper:vx,HemisphereLightProbe:Tc,IcosahedronBufferGeometry:xo,IcosahedronGeometry:xo,ImageBitmapLoader:ko,ImageLoader:dr,ImageUtils:Zn,ImmediateRenderObject:ys,IncrementStencilOp:Gf,IncrementWrapStencilOp:Hf,InstancedBufferAttribute:Uo,InstancedBufferGeometry:gs,InstancedInterleavedBuffer:Dc,InstancedMesh:ro,Int16Attribute:Qx,Int16BufferAttribute:zr,Int32Attribute:ev,Int32BufferAttribute:Gr,Int8Attribute:Zx,Int8BufferAttribute:Br,IntType:Sl,InterleavedBuffer:vt,InterleavedBufferAttribute:mn,Interpolant:_t,InterpolateDiscrete:Ii,InterpolateLinear:Di,InterpolateSmooth:Ss,InvertStencilOp:Vf,JSONLoader:dv,KeepStencilOp:Ls,KeyframeTrack:rt,LOD:Kr,LatheBufferGeometry:vo,LatheGeometry:vo,Layers:Bs,LensFlare:mv,LessDepth:hl,LessEqualDepth:vs,LessEqualStencilFunc:Xf,LessStencilFunc:jf,Light:He,LightProbe:Dt,Line:Lt,Line3:Qh,LineBasicMaterial:ke,LineCurve:Mt,LineCurve3:Ht,LineDashedMaterial:hi,LineLoop:ts,LinePieces:Bx,LineSegments:ht,LineStrip:Fx,LinearEncoding:dt,LinearFilter:et,LinearInterpolant:ls,LinearMipMapLinearFilter:Of,LinearMipMapNearestFilter:Bf,LinearMipmapLinearFilter:Wn,LinearMipmapNearestFilter:ws,LinearToneMapping:xl,Loader:De,LoaderUtils:Go,LoadingManager:hc,LogLuvEncoding:_u,LoopOnce:pu,LoopPingPong:gu,LoopRepeat:mu,LuminanceAlphaFormat:Cl,LuminanceFormat:Rl,MOUSE:Lf,Material:me,MaterialLoader:zo,Math:ye,MathUtils:ye,Matrix3:St,Matrix4:Te,MaxEquation:fa,Mesh:ze,MeshBasicMaterial:xt,MeshDepthMaterial:Cn,MeshDistanceMaterial:Pn,MeshFaceMaterial:Gx,MeshLambertMaterial:li,MeshMatcapMaterial:ui,MeshNormalMaterial:ci,MeshPhongMaterial:Bn,MeshPhysicalMaterial:xn,MeshStandardMaterial:zt,MeshToonMaterial:ai,MinEquation:ha,MirroredRepeatWrapping:Li,MixOperation:gl,MultiMaterial:Ux,MultiplyBlending:ua,MultiplyOperation:br,NearestFilter:Ke,NearestMipMapLinearFilter:Ff,NearestMipMapNearestFilter:Df,NearestMipmapLinearFilter:Er,NearestMipmapNearestFilter:Tr,NeverDepth:ll,NeverStencilFunc:Wf,NoBlending:nn,NoColors:Ox,NoToneMapping:Vn,NormalAnimationBlendMode:Ts,NormalBlending:Ti,NotEqualDepth:ml,NotEqualStencilFunc:Zf,NumberKeyframeTrack:fi,Object3D:ce,ObjectLoader:$y,ObjectSpaceNormalMap:wu,OctahedronBufferGeometry:os,OctahedronGeometry:os,OneFactor:tl,OneMinusDstAlphaFactor:sl,OneMinusDstColorFactor:al,OneMinusSrcAlphaFactor:pa,OneMinusSrcColorFactor:il,OrthographicCamera:mi,PCFShadowMap:sa,PCFSoftShadowMap:oa,PMREMGenerator:Rx,ParametricBufferGeometry:si,ParametricGeometry:si,Particle:kx,ParticleBasicMaterial:jx,ParticleSystem:Vx,ParticleSystemMaterial:qx,Path:Wt,PerspectiveCamera:Ze,Plane:qt,PlaneBufferGeometry:jr,PlaneGeometry:jr,PlaneHelper:Sx,PointCloud:Hx,PointCloudMaterial:Wx,PointLight:ps,PointLightHelper:yx,Points:ii,PointsMaterial:It,PolarGridHelper:_x,PolyhedronBufferGeometry:Dn,PolyhedronGeometry:Dn,PositionalAudio:rx,PropertyBinding:st,PropertyMixer:Rc,QuadraticBezierCurve:kt,QuadraticBezierCurve3:$t,Quaternion:ct,QuaternionKeyframeTrack:fr,QuaternionLinearInterpolant:Co,REVISION:ia,RGBADepthPacking:Mu,RGBAFormat:wt,RGBAIntegerFormat:Nl,RGBA_ASTC_10x10_Format:Jl,RGBA_ASTC_10x5_Format:Xl,RGBA_ASTC_10x6_Format:Yl,RGBA_ASTC_10x8_Format:Zl,RGBA_ASTC_12x10_Format:$l,RGBA_ASTC_12x12_Format:Ql,RGBA_ASTC_4x4_Format:Gl,RGBA_ASTC_5x4_Format:Ul,RGBA_ASTC_5x5_Format:Hl,RGBA_ASTC_6x5_Format:kl,RGBA_ASTC_6x6_Format:Vl,RGBA_ASTC_8x5_Format:Wl,RGBA_ASTC_8x6_Format:jl,RGBA_ASTC_8x8_Format:ql,RGBA_BPTC_Format:Kl,RGBA_ETC2_EAC_Format:Ta,RGBA_PVRTC_2BPPV1_Format:wa,RGBA_PVRTC_4BPPV1_Format:Ma,RGBA_S3TC_DXT1_Format:ya,RGBA_S3TC_DXT3_Format:xa,RGBA_S3TC_DXT5_Format:va,RGBDEncoding:Ra,RGBEEncoding:As,RGBEFormat:Pl,RGBFormat:sn,RGBIntegerFormat:Ol,RGBM16Encoding:La,RGBM7Encoding:Aa,RGB_ETC1_Format:zl,RGB_ETC2_Format:Sa,RGB_PVRTC_2BPPV1_Format:ba,RGB_PVRTC_4BPPV1_Format:_a,RGB_S3TC_DXT1_Format:ga,RGFormat:Fl,RGIntegerFormat:Bl,RawShaderMaterial:yn,Ray:Gi,Raycaster:qo,RectAreaLight:No,RedFormat:Il,RedIntegerFormat:Dl,ReinhardToneMapping:vl,RepeatWrapping:Ai,ReplaceStencilOp:zf,ReverseSubtractEquation:Kc,RingBufferGeometry:_o,RingGeometry:_o,SRGB8_ALPHA8_ASTC_10x10_Format:hu,SRGB8_ALPHA8_ASTC_10x5_Format:cu,SRGB8_ALPHA8_ASTC_10x6_Format:lu,SRGB8_ALPHA8_ASTC_10x8_Format:uu,SRGB8_ALPHA8_ASTC_12x10_Format:fu,SRGB8_ALPHA8_ASTC_12x12_Format:du,SRGB8_ALPHA8_ASTC_4x4_Format:eu,SRGB8_ALPHA8_ASTC_5x4_Format:tu,SRGB8_ALPHA8_ASTC_5x5_Format:nu,SRGB8_ALPHA8_ASTC_6x5_Format:iu,SRGB8_ALPHA8_ASTC_6x6_Format:ru,SRGB8_ALPHA8_ASTC_8x5_Format:su,SRGB8_ALPHA8_ASTC_8x6_Format:ou,SRGB8_ALPHA8_ASTC_8x8_Format:au,Scene:Qs,SceneUtils:pv,ShaderChunk:Re,ShaderLib:Nt,ShaderMaterial:pt,ShadowMaterial:oi,Shape:Nn,ShapeBufferGeometry:as,ShapeGeometry:as,ShapePath:Mc,ShapeUtils:gn,ShortType:wl,Skeleton:ar,SkeletonHelper:ef,SkinnedMesh:sr,SmoothShading:If,Sphere:cn,SphereBufferGeometry:cs,SphereGeometry:cs,Spherical:px,SphericalHarmonics3:Bh,Spline:kc,SplineCurve:Vt,SplineCurve3:Mf,SpotLight:ds,SpotLightHelper:gx,Sprite:Qr,SpriteMaterial:In,SrcAlphaFactor:da,SrcAlphaSaturateFactor:cl,SrcColorFactor:nl,StaticCopyUsage:td,StaticDrawUsage:Pr,StaticReadUsage:Qf,StereoCamera:Hh,StreamCopyUsage:id,StreamDrawUsage:$f,StreamReadUsage:ed,StringKeyframeTrack:Po,SubtractEquation:Qc,SubtractiveBlending:la,TOUCH:Rf,TangentSpaceNormalMap:_n,TetrahedronBufferGeometry:bo,TetrahedronGeometry:bo,TextBufferGeometry:Mo,TextGeometry:Mo,Texture:Be,TextureLoader:us,TorusBufferGeometry:wo,TorusGeometry:wo,TorusKnotBufferGeometry:So,TorusKnotGeometry:So,Triangle:lt,TriangleFanDrawMode:vu,TriangleStripDrawMode:xu,TrianglesDrawMode:yu,TubeBufferGeometry:To,TubeGeometry:To,UVMapping:_s,Uint16Attribute:Kx,Uint16BufferAttribute:Qn,Uint32Attribute:tv,Uint32BufferAttribute:Kn,Uint8Attribute:Jx,Uint8BufferAttribute:Or,Uint8ClampedAttribute:$x,Uint8ClampedBufferAttribute:Nr,Uniform:jo,UniformsLib:J,UniformsUtils:Nu,UnsignedByteType:Ri,UnsignedInt248Type:Ci,UnsignedIntType:Lr,UnsignedShort4444Type:Tl,UnsignedShort5551Type:El,UnsignedShort565Type:Al,UnsignedShortType:Ar,VSMShadowMap:wi,Vector2:k,Vector3:M,Vector4:Ne,VectorKeyframeTrack:di,Vertex:Xx,VertexColors:zx,VideoTexture:sc,WebGL1Renderer:Zs,WebGLCubeRenderTarget:Ka,WebGLMultisampleRenderTarget:od,WebGLRenderTarget:bn,WebGLRenderTargetCube:uv,WebGLRenderer:er,WebGLUtils:ah,WireframeGeometry:uc,WireframeHelper:av,WrapAroundEnding:Cr,XHRLoader:cv,ZeroCurvatureEnding:qn,ZeroFactor:el,ZeroSlopeEnding:Xn,ZeroStencilOp:Nf,sRGBEncoding:Fi});export{xn as $,ma as A,ge as B,ne as C,Si as D,ii as E,Rt as F,pn as G,ye as H,ko as I,Di as J,bt as K,Bs as L,xt as M,or as N,mi as O,Ze as P,ce as Q,qo as R,Qs as S,gv as T,Te as U,k as V,Zs as W,ar as X,ds as Y,ps as Z,ms as _,er as a,_t as a0,Ke as a1,Tr as a2,ws as a3,Er as a4,at as a5,Li as a6,Ii as a7,Hn as a8,mn as a9,lr as aa,vu as ab,xu as ac,di as ad,fr as ae,fi as af,jt as ag,cn as ah,Be as b,Ac as c,M as d,oa as e,De as f,Go as g,zt as h,_n as i,us as j,vt as k,sn as l,et as m,Wn as n,Ai as o,It as p,me as q,ke as r,Fi as s,st as t,fe as u,sr as v,ze as w,ht as x,Lt as y,ts as z};
