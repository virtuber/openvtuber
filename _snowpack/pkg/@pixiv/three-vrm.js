import{g as k,c as j,a as G}from"../common/_commonjsHelpers-8c19dec8.js";import{T as F}from"../common/three.module-f0b950b5.js";var H=j(function(B,z){/*! (c) 2019-2020 pixiv Inc. - https://github.com/pixiv/three-vrm/blob/master/LICENSE */(function(C,x){B.exports=x(F)})(G,function(C){return function(x){var s={};function v(h){if(s[h])return s[h].exports;var c=s[h]={i:h,l:!1,exports:{}};return x[h].call(c.exports,c,c.exports,v),c.l=!0,c.exports}return v.m=x,v.c=s,v.d=function(h,c,f){v.o(h,c)||Object.defineProperty(h,c,{enumerable:!0,get:f})},v.r=function(h){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},v.t=function(h,c){if(1&c&&(h=v(h)),8&c||4&c&&typeof h=="object"&&h&&h.__esModule)return h;var f=Object.create(null);if(v.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:h}),2&c&&typeof h!="string")for(var _ in h)v.d(f,_,function(p){return h[p]}.bind(null,_));return f},v.n=function(h){var c=h&&h.__esModule?function(){return h.default}:function(){return h};return v.d(c,"a",c),c},v.o=function(h,c){return Object.prototype.hasOwnProperty.call(h,c)},v.p="",v(v.s=32)}([function(x,s){x.exports=C},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(36),s),c(v(37),s),c(v(38),s)},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.getWorldQuaternionLite=s.getWorldScaleLite=s.getWorldPositionLite=s.linstep=s.saturate=void 0;var h=v(0);s.saturate=function(p){return Math.max(Math.min(p,1),0)},s.linstep=function(p,m,M){return p<=m?0:p>=M?1:(p-m)/(M-m)};var c=new h.Vector3,f=new h.Vector3,_=new h.Quaternion;s.getWorldPositionLite=function(p,m){return p.matrixWorld.decompose(m,_,f),m},s.getWorldScaleLite=function(p,m){return p.matrixWorld.decompose(c,_,m),m},s.getWorldQuaternionLite=function(p,m){return p.matrixWorld.decompose(c,m,f),m}},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMLookAtHead=void 0;var h=v(0),c=v(2),f=v(19),_=Object.freeze(new h.Vector3(0,0,-1)),p=new h.Vector3,m=new h.Vector3,M=new h.Vector3,l=new h.Quaternion,o=function(){function n(r,e){this.autoUpdate=!0,this._euler=new h.Euler(0,0,0,n.EULER_ORDER),this.firstPerson=r,this.applyer=e}return n.prototype.getLookAtWorldDirection=function(r){var e=c.getWorldQuaternionLite(this.firstPerson.firstPersonBone,l);return r.copy(_).applyEuler(this._euler).applyQuaternion(e)},n.prototype.lookAt=function(r){this._calcEuler(this._euler,r),this.applyer&&this.applyer.lookAt(this._euler)},n.prototype.update=function(r){this.target&&this.autoUpdate&&(this.lookAt(this.target.getWorldPosition(p)),this.applyer&&this.applyer.lookAt(this._euler))},n.prototype._calcEuler=function(r,e){var t=this.firstPerson.getFirstPersonWorldPosition(m),a=M.copy(e).sub(t).normalize();return a.applyQuaternion(f.quatInvertCompat(c.getWorldQuaternionLite(this.firstPerson.firstPersonBone,l))),r.x=Math.atan2(a.y,Math.sqrt(a.x*a.x+a.z*a.z)),r.y=Math.atan2(-a.x,-a.z),r},n.EULER_ORDER="YXZ",n}();s.VRMLookAtHead=o},function(x,s,v){var h,c=this&&this.__extends||(h=function(o,n){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])})(o,n)},function(o,n){function r(){this.constructor=o}h(o,n),o.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}),f=this&&this.__awaiter||function(o,n,r,e){return new(r||(r=Promise))(function(t,a){function d(g){try{u(e.next(g))}catch(y){a(y)}}function i(g){try{u(e.throw(g))}catch(y){a(y)}}function u(g){var y;g.done?t(g.value):(y=g.value,y instanceof r?y:new r(function(b){b(y)})).then(d,i)}u((e=e.apply(o,n||[])).next())})},_=this&&this.__generator||function(o,n){var r,e,t,a,d={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(u){return function(g){return function(y){if(r)throw new TypeError("Generator is already executing.");for(;d;)try{if(r=1,e&&(t=2&y[0]?e.return:y[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,y[1])).done)return t;switch(e=0,t&&(y=[2&y[0],t.value]),y[0]){case 0:case 1:t=y;break;case 4:return d.label++,{value:y[1],done:!1};case 5:d.label++,e=y[1],y=[0];continue;case 7:y=d.ops.pop(),d.trys.pop();continue;default:if(t=d.trys,!((t=t.length>0&&t[t.length-1])||y[0]!==6&&y[0]!==2)){d=0;continue}if(y[0]===3&&(!t||y[1]>t[0]&&y[1]<t[3])){d.label=y[1];break}if(y[0]===6&&d.label<t[1]){d.label=t[1],t=y;break}if(t&&d.label<t[2]){d.label=t[2],d.ops.push(y);break}t[2]&&d.ops.pop(),d.trys.pop();continue}y=n.call(o,d)}catch(b){y=[6,b],e=0}finally{r=t=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}([u,g])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMDebug=s.VRM_GIZMO_RENDER_ORDER=void 0;var p=v(0),m=v(5),M=v(53);s.VRM_GIZMO_RENDER_ORDER=1e4;var l=function(o){function n(r,e){e===void 0&&(e={});var t=o.call(this,r)||this;return e.disableBoxHelper||t.scene.add(new p.BoxHelper(t.scene)),e.disableSkeletonHelper||t.scene.add(new p.SkeletonHelper(t.scene)),t}return c(n,o),n.from=function(r,e,t){return e===void 0&&(e={}),t===void 0&&(t={}),f(this,void 0,Promise,function(){return _(this,function(a){switch(a.label){case 0:return[4,new M.VRMImporterDebug(e).import(r,t)];case 1:return[2,a.sent()]}})})},n.prototype.update=function(r){o.prototype.update.call(this,r)},n}(m.VRM);s.VRMDebug=l},function(x,s,v){var h=this&&this.__awaiter||function(m,M,l,o){return new(l||(l=Promise))(function(n,r){function e(d){try{a(o.next(d))}catch(i){r(i)}}function t(d){try{a(o.throw(d))}catch(i){r(i)}}function a(d){var i;d.done?n(d.value):(i=d.value,i instanceof l?i:new l(function(u){u(i)})).then(e,t)}a((o=o.apply(m,M||[])).next())})},c=this&&this.__generator||function(m,M){var l,o,n,r,e={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:t(0),throw:t(1),return:t(2)},typeof Symbol=="function"&&(r[Symbol.iterator]=function(){return this}),r;function t(a){return function(d){return function(i){if(l)throw new TypeError("Generator is already executing.");for(;e;)try{if(l=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,o=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!((n=n.length>0&&n[n.length-1])||i[0]!==6&&i[0]!==2)){e=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){e.label=i[1];break}if(i[0]===6&&e.label<n[1]){e.label=n[1],n=i;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(i);break}n[2]&&e.ops.pop(),e.trys.pop();continue}i=M.call(m,e)}catch(u){i=[6,u],o=0}finally{l=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([a,d])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRM=void 0;var f=v(34),_=v(6),p=function(){function m(M){this.scene=M.scene,this.humanoid=M.humanoid,this.blendShapeProxy=M.blendShapeProxy,this.firstPerson=M.firstPerson,this.lookAt=M.lookAt,this.materials=M.materials,this.springBoneManager=M.springBoneManager,this.meta=M.meta}return m.from=function(M,l){return l===void 0&&(l={}),h(this,void 0,Promise,function(){return c(this,function(o){switch(o.label){case 0:return[4,new _.VRMImporter(l).import(M)];case 1:return[2,o.sent()]}})})},m.prototype.update=function(M){this.lookAt&&this.lookAt.update(M),this.blendShapeProxy&&this.blendShapeProxy.update(),this.springBoneManager&&this.springBoneManager.lateUpdate(M),this.materials&&this.materials.forEach(function(l){l.updateVRMMaterials&&l.updateVRMMaterials(M)})},m.prototype.dispose=function(){var M,l,o=this.scene;o&&f.deepDispose(o),(l=(M=this.meta)===null||M===void 0?void 0:M.texture)===null||l===void 0||l.dispose()},m}();s.VRM=p},function(x,s,v){var h=this&&this.__awaiter||function(e,t,a,d){return new(a||(a=Promise))(function(i,u){function g(S){try{b(d.next(S))}catch(T){u(T)}}function y(S){try{b(d.throw(S))}catch(T){u(T)}}function b(S){var T;S.done?i(S.value):(T=S.value,T instanceof a?T:new a(function(E){E(T)})).then(g,y)}b((d=d.apply(e,t||[])).next())})},c=this&&this.__generator||function(e,t){var a,d,i,u,g={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function y(b){return function(S){return function(T){if(a)throw new TypeError("Generator is already executing.");for(;g;)try{if(a=1,d&&(i=2&T[0]?d.return:T[0]?d.throw||((i=d.return)&&i.call(d),0):d.next)&&!(i=i.call(d,T[1])).done)return i;switch(d=0,i&&(T=[2&T[0],i.value]),T[0]){case 0:case 1:i=T;break;case 4:return g.label++,{value:T[1],done:!1};case 5:g.label++,d=T[1],T=[0];continue;case 7:T=g.ops.pop(),g.trys.pop();continue;default:if(i=g.trys,!((i=i.length>0&&i[i.length-1])||T[0]!==6&&T[0]!==2)){g=0;continue}if(T[0]===3&&(!i||T[1]>i[0]&&T[1]<i[3])){g.label=T[1];break}if(T[0]===6&&g.label<i[1]){g.label=i[1],i=T;break}if(i&&g.label<i[2]){g.label=i[2],g.ops.push(T);break}i[2]&&g.ops.pop(),g.trys.pop();continue}T=t.call(e,g)}catch(E){T=[6,E],d=0}finally{a=i=0}if(5&T[0])throw T[1];return{value:T[0]?T[1]:void 0,done:!0}}([b,S])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMImporter=void 0;var f=v(11),_=v(14),p=v(16),m=v(7),M=v(23),l=v(26),o=v(9),n=v(5),r=function(){function e(t){t===void 0&&(t={}),this._metaImporter=t.metaImporter||new l.VRMMetaImporter,this._blendShapeImporter=t.blendShapeImporter||new f.VRMBlendShapeImporter,this._lookAtImporter=t.lookAtImporter||new m.VRMLookAtImporter,this._humanoidImporter=t.humanoidImporter||new p.VRMHumanoidImporter,this._firstPersonImporter=t.firstPersonImporter||new _.VRMFirstPersonImporter,this._materialImporter=t.materialImporter||new M.VRMMaterialImporter,this._springBoneImporter=t.springBoneImporter||new o.VRMSpringBoneImporter}return e.prototype.import=function(t){return h(this,void 0,Promise,function(){var a,d,i,u,g,y,b,S,T,E;return c(this,function(R){switch(R.label){case 0:if(t.parser.json.extensions===void 0||t.parser.json.extensions.VRM===void 0)throw new Error("Could not find VRM extension on the GLTF");return(a=t.scene).updateMatrixWorld(!1),a.traverse(function(P){P.isMesh&&(P.frustumCulled=!1)}),[4,this._metaImporter.import(t)];case 1:return d=R.sent()||void 0,[4,this._materialImporter.convertGLTFMaterials(t)];case 2:return i=R.sent()||void 0,[4,this._humanoidImporter.import(t)];case 3:return(u=R.sent()||void 0)?[4,this._firstPersonImporter.import(t,u)]:[3,5];case 4:return y=R.sent()||void 0,[3,6];case 5:y=void 0,R.label=6;case 6:return g=y,[4,this._blendShapeImporter.import(t)];case 7:return b=R.sent()||void 0,g&&b&&u?[4,this._lookAtImporter.import(t,g,b,u)]:[3,9];case 8:return T=R.sent()||void 0,[3,10];case 9:T=void 0,R.label=10;case 10:return S=T,[4,this._springBoneImporter.import(t)];case 11:return E=R.sent()||void 0,[2,new n.VRM({scene:t.scene,meta:d,materials:i,humanoid:u,firstPerson:g,blendShapeProxy:b,lookAt:S,springBoneManager:E})]}})})},e}();s.VRMImporter=r},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMLookAtImporter=void 0;var h=v(1),c=v(20),f=v(21),_=v(22),p=v(3),m=Math.PI/180,M=function(){function l(){}return l.prototype.import=function(o,n,r,e){var t,a=(t=o.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!a)return null;var d=a.firstPerson;if(!d)return null;var i=this._importApplyer(d,r,e);return new p.VRMLookAtHead(n,i||void 0)},l.prototype._importApplyer=function(o,n,r){var e=o.lookAtHorizontalInner,t=o.lookAtHorizontalOuter,a=o.lookAtVerticalDown,d=o.lookAtVerticalUp;switch(o.lookAtTypeName){case h.VRMSchema.FirstPersonLookAtTypeName.Bone:return e===void 0||t===void 0||a===void 0||d===void 0?null:new _.VRMLookAtBoneApplyer(r,this._importCurveMapperBone(e),this._importCurveMapperBone(t),this._importCurveMapperBone(a),this._importCurveMapperBone(d));case h.VRMSchema.FirstPersonLookAtTypeName.BlendShape:return t===void 0||a===void 0||d===void 0?null:new f.VRMLookAtBlendShapeApplyer(n,this._importCurveMapperBlendShape(t),this._importCurveMapperBlendShape(a),this._importCurveMapperBlendShape(d));default:return null}},l.prototype._importCurveMapperBone=function(o){return new c.VRMCurveMapper(typeof o.xRange=="number"?m*o.xRange:void 0,typeof o.yRange=="number"?m*o.yRange:void 0,o.curve)},l.prototype._importCurveMapperBlendShape=function(o){return new c.VRMCurveMapper(typeof o.xRange=="number"?m*o.xRange:void 0,o.yRange,o.curve)},l}();s.VRMLookAtImporter=M},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMLookAtApplyer=void 0;var h=function(){};s.VRMLookAtApplyer=h},function(x,s,v){var h=this&&this.__awaiter||function(o,n,r,e){return new(r||(r=Promise))(function(t,a){function d(g){try{u(e.next(g))}catch(y){a(y)}}function i(g){try{u(e.throw(g))}catch(y){a(y)}}function u(g){var y;g.done?t(g.value):(y=g.value,y instanceof r?y:new r(function(b){b(y)})).then(d,i)}u((e=e.apply(o,n||[])).next())})},c=this&&this.__generator||function(o,n){var r,e,t,a,d={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(u){return function(g){return function(y){if(r)throw new TypeError("Generator is already executing.");for(;d;)try{if(r=1,e&&(t=2&y[0]?e.return:y[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,y[1])).done)return t;switch(e=0,t&&(y=[2&y[0],t.value]),y[0]){case 0:case 1:t=y;break;case 4:return d.label++,{value:y[1],done:!1};case 5:d.label++,e=y[1],y=[0];continue;case 7:y=d.ops.pop(),d.trys.pop();continue;default:if(t=d.trys,!((t=t.length>0&&t[t.length-1])||y[0]!==6&&y[0]!==2)){d=0;continue}if(y[0]===3&&(!t||y[1]>t[0]&&y[1]<t[3])){d.label=y[1];break}if(y[0]===6&&d.label<t[1]){d.label=t[1],t=y;break}if(t&&d.label<t[2]){d.label=t[2],d.ops.push(y);break}t[2]&&d.ops.pop(),d.trys.pop();continue}y=n.call(o,d)}catch(b){y=[6,b],e=0}finally{r=t=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}([u,g])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMSpringBoneImporter=void 0;var f=v(0),_=v(27),p=v(29),m=new f.Vector3,M=new f.MeshBasicMaterial({visible:!1}),l=function(){function o(){}return o.prototype.import=function(n){var r;return h(this,void 0,Promise,function(){var e,t,a,d;return c(this,function(i){switch(i.label){case 0:return(e=(r=n.parser.json.extensions)===null||r===void 0?void 0:r.VRM)&&(t=e.secondaryAnimation)?[4,this._importColliderMeshGroups(n,t)]:[2,null];case 1:return a=i.sent(),[4,this._importSpringBoneGroupList(n,t,a)];case 2:return d=i.sent(),[2,new p.VRMSpringBoneManager(a,d)]}})})},o.prototype._createSpringBone=function(n,r){return r===void 0&&(r={}),new _.VRMSpringBone(n,r)},o.prototype._importSpringBoneGroupList=function(n,r,e){return h(this,void 0,Promise,function(){var t,a,d=this;return c(this,function(i){switch(i.label){case 0:return t=r.boneGroups||[],a=[],[4,Promise.all(t.map(function(u){return h(d,void 0,void 0,function(){var g,y,b,S,T,E,R,P=this;return c(this,function(w){switch(w.label){case 0:return u.stiffiness===void 0||u.gravityDir===void 0||u.gravityDir.x===void 0||u.gravityDir.y===void 0||u.gravityDir.z===void 0||u.gravityPower===void 0||u.dragForce===void 0||u.hitRadius===void 0||u.colliderGroups===void 0||u.bones===void 0||u.center===void 0?[2]:(g=u.stiffiness,y=new f.Vector3(u.gravityDir.x,u.gravityDir.y,-u.gravityDir.z),b=u.gravityPower,S=u.dragForce,T=u.hitRadius,E=[],u.colliderGroups.forEach(function(O){E.push.apply(E,e[O].colliders)}),R=[],[4,Promise.all(u.bones.map(function(O){return h(P,void 0,void 0,function(){var L,A,U,V=this;return c(this,function(D){switch(D.label){case 0:return[4,n.parser.getDependency("node",O)];case 1:return L=D.sent(),u.center===-1?[3,3]:[4,n.parser.getDependency("node",u.center)];case 2:return U=D.sent(),[3,4];case 3:U=null,D.label=4;case 4:return A=U,L?(L.traverse(function(I){var N=V._createSpringBone(I,{radius:T,stiffnessForce:g,gravityDir:y,gravityPower:b,dragForce:S,colliders:E,center:A});R.push(N)}),[2]):[2]}})})}))]);case 1:return w.sent(),a.push(R),[2]}})})}))];case 1:return i.sent(),[2,a]}})})},o.prototype._importColliderMeshGroups=function(n,r){return h(this,void 0,Promise,function(){var e,t,a=this;return c(this,function(d){return(e=r.colliderGroups)===void 0?[2,[]]:(t=[],e.forEach(function(i){return h(a,void 0,void 0,function(){var u,g,y,b=this;return c(this,function(S){switch(S.label){case 0:return i.node===void 0||i.colliders===void 0?[2]:[4,n.parser.getDependency("node",i.node)];case 1:return u=S.sent(),g=[],i.colliders.forEach(function(T){if(T.offset!==void 0&&T.offset.x!==void 0&&T.offset.y!==void 0&&T.offset.z!==void 0&&T.radius!==void 0){var E=m.set(T.offset.x,T.offset.y,-T.offset.z),R=b._createColliderMesh(T.radius,E);u.add(R),g.push(R)}}),y={node:i.node,colliders:g},t.push(y),[2]}})})}),[2,t])})})},o.prototype._createColliderMesh=function(n,r){var e=new f.Mesh(new f.SphereBufferGeometry(n,8,4),M);return e.position.copy(r),e.name="vrmColliderSphere",e.geometry.computeBoundingSphere(),e},o}();s.VRMSpringBoneImporter=l},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(27),s),c(v(57),s),c(v(9),s),c(v(29),s),c(v(58),s)},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(12),s),c(v(35),s),c(v(13),s)},function(x,s,v){var h,c=this&&this.__extends||(h=function(n,r){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(n,r)},function(n,r){function e(){this.constructor=n}h(n,r),n.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)});Object.defineProperty(s,"__esModule",{value:!0}),s.VRMBlendShapeGroup=void 0;var f,_=v(0);(function(n){n[n.NUMBER=0]="NUMBER",n[n.VECTOR2=1]="VECTOR2",n[n.VECTOR3=2]="VECTOR3",n[n.VECTOR4=3]="VECTOR4",n[n.COLOR=4]="COLOR"})(f||(f={}));var p=new _.Vector2,m=new _.Vector3,M=new _.Vector4,l=new _.Color,o=function(n){function r(e){var t=n.call(this)||this;return t.weight=0,t.isBinary=!1,t._binds=[],t._materialValues=[],t.name="BlendShapeController_"+e,t.type="BlendShapeController",t.visible=!1,t}return c(r,n),r.prototype.addBind=function(e){var t=e.weight/100;this._binds.push({meshes:e.meshes,morphTargetIndex:e.morphTargetIndex,weight:t})},r.prototype.addMaterialValue=function(e){var t,a,d,i,u=e.material,g=e.propertyName,y=u[g];y&&((y=e.defaultValue||y).isVector2?(t=f.VECTOR2,a=y.clone(),i=(d=new _.Vector2().fromArray(e.targetValue)).clone().sub(a)):y.isVector3?(t=f.VECTOR3,a=y.clone(),i=(d=new _.Vector3().fromArray(e.targetValue)).clone().sub(a)):y.isVector4?(t=f.VECTOR4,a=y.clone(),i=(d=new _.Vector4().fromArray([e.targetValue[2],e.targetValue[3],e.targetValue[0],e.targetValue[1]])).clone().sub(a)):y.isColor?(t=f.COLOR,a=y.clone(),i=(d=new _.Color().fromArray(e.targetValue)).clone().sub(a)):(t=f.NUMBER,a=y,i=(d=e.targetValue[0])-a),this._materialValues.push({material:u,propertyName:g,defaultValue:a,targetValue:d,deltaValue:i,type:t}))},r.prototype.applyWeight=function(){var e=this.isBinary?this.weight<.5?0:1:this.weight;this._binds.forEach(function(t){t.meshes.forEach(function(a){a.morphTargetInfluences&&(a.morphTargetInfluences[t.morphTargetIndex]+=e*t.weight)})}),this._materialValues.forEach(function(t){if(t.material[t.propertyName]!==void 0){if(t.type===f.NUMBER){var a=t.deltaValue;t.material[t.propertyName]+=a*e}else t.type===f.VECTOR2?(a=t.deltaValue,t.material[t.propertyName].add(p.copy(a).multiplyScalar(e))):t.type===f.VECTOR3?(a=t.deltaValue,t.material[t.propertyName].add(m.copy(a).multiplyScalar(e))):t.type===f.VECTOR4?(a=t.deltaValue,t.material[t.propertyName].add(M.copy(a).multiplyScalar(e))):t.type===f.COLOR&&(a=t.deltaValue,t.material[t.propertyName].add(l.copy(a).multiplyScalar(e)));typeof t.material.shouldApplyUniforms=="boolean"&&(t.material.shouldApplyUniforms=!0)}})},r.prototype.clearAppliedWeight=function(){this._binds.forEach(function(e){e.meshes.forEach(function(t){t.morphTargetInfluences&&(t.morphTargetInfluences[e.morphTargetIndex]=0)})}),this._materialValues.forEach(function(e){if(e.material[e.propertyName]!==void 0){if(e.type===f.NUMBER){var t=e.defaultValue;e.material[e.propertyName]=t}else(e.type===f.VECTOR2||e.type===f.VECTOR3||e.type===f.VECTOR4||e.type===f.COLOR)&&(t=e.defaultValue,e.material[e.propertyName].copy(t));typeof e.material.shouldApplyUniforms=="boolean"&&(e.material.shouldApplyUniforms=!0)}})},r}(_.Object3D);s.VRMBlendShapeGroup=o},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMBlendShapeProxy=void 0;var h=v(2),c=function(){function f(){this._blendShapeGroups={},this._blendShapePresetMap={},this._unknownGroupNames=[]}return Object.defineProperty(f.prototype,"expressions",{get:function(){return Object.keys(this._blendShapeGroups)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"blendShapePresetMap",{get:function(){return this._blendShapePresetMap},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"unknownGroupNames",{get:function(){return this._unknownGroupNames},enumerable:!1,configurable:!0}),f.prototype.getBlendShapeGroup=function(_){var p=this._blendShapePresetMap[_],m=p?this._blendShapeGroups[p]:this._blendShapeGroups[_];if(m)return m;console.warn("no blend shape found by "+_)},f.prototype.registerBlendShapeGroup=function(_,p,m){this._blendShapeGroups[_]=m,p?this._blendShapePresetMap[p]=_:this._unknownGroupNames.push(_)},f.prototype.getValue=function(_){var p,m=this.getBlendShapeGroup(_);return(p=m==null?void 0:m.weight)!==null&&p!==void 0?p:null},f.prototype.setValue=function(_,p){var m=this.getBlendShapeGroup(_);m&&(m.weight=h.saturate(p))},f.prototype.getBlendShapeTrackName=function(_){var p=this.getBlendShapeGroup(_);return p?p.name+".weight":null},f.prototype.update=function(){var _=this;Object.keys(this._blendShapeGroups).forEach(function(p){_._blendShapeGroups[p].clearAppliedWeight()}),Object.keys(this._blendShapeGroups).forEach(function(p){_._blendShapeGroups[p].applyWeight()})},f}();s.VRMBlendShapeProxy=c},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(15),s),c(v(40),s)},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMFirstPerson=s.VRMRendererFirstPersonFlags=void 0;var h,c=v(0),f=v(2),_=Object.freeze(new c.Vector3(0,0,-1)),p=new c.Quaternion;(function(l){l[l.Auto=0]="Auto",l[l.Both=1]="Both",l[l.ThirdPersonOnly=2]="ThirdPersonOnly",l[l.FirstPersonOnly=3]="FirstPersonOnly"})(h||(h={}));var m=function(){function l(o,n){this.firstPersonFlag=l._parseFirstPersonFlag(o),this.mesh=n}return l._parseFirstPersonFlag=function(o){switch(o){case"Both":return h.Both;case"ThirdPersonOnly":return h.ThirdPersonOnly;case"FirstPersonOnly":return h.FirstPersonOnly;default:return h.Auto}},l}();s.VRMRendererFirstPersonFlags=m;var M=function(){function l(o,n,r){this._meshAnnotations=[],this._firstPersonOnlyLayer=l._DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=l._DEFAULT_THIRDPERSON_ONLY_LAYER,this._initialized=!1,this._firstPersonBone=o,this._firstPersonBoneOffset=n,this._meshAnnotations=r}return Object.defineProperty(l.prototype,"firstPersonBone",{get:function(){return this._firstPersonBone},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"meshAnnotations",{get:function(){return this._meshAnnotations},enumerable:!1,configurable:!0}),l.prototype.getFirstPersonWorldDirection=function(o){return o.copy(_).applyQuaternion(f.getWorldQuaternionLite(this._firstPersonBone,p))},Object.defineProperty(l.prototype,"firstPersonOnlyLayer",{get:function(){return this._firstPersonOnlyLayer},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"thirdPersonOnlyLayer",{get:function(){return this._thirdPersonOnlyLayer},enumerable:!1,configurable:!0}),l.prototype.getFirstPersonBoneOffset=function(o){return o.copy(this._firstPersonBoneOffset)},l.prototype.getFirstPersonWorldPosition=function(o){var n=this._firstPersonBoneOffset,r=new c.Vector4(n.x,n.y,n.z,1);return r.applyMatrix4(this._firstPersonBone.matrixWorld),o.set(r.x,r.y,r.z)},l.prototype.setup=function(o){var n=this,r=o===void 0?{}:o,e=r.firstPersonOnlyLayer,t=e===void 0?l._DEFAULT_FIRSTPERSON_ONLY_LAYER:e,a=r.thirdPersonOnlyLayer,d=a===void 0?l._DEFAULT_THIRDPERSON_ONLY_LAYER:a;this._initialized||(this._initialized=!0,this._firstPersonOnlyLayer=t,this._thirdPersonOnlyLayer=d,this._meshAnnotations.forEach(function(i){i.firstPersonFlag===h.FirstPersonOnly?(i.mesh.layers.set(n._firstPersonOnlyLayer),i.mesh.traverse(function(u){return u.layers.set(n._firstPersonOnlyLayer)})):i.firstPersonFlag===h.ThirdPersonOnly?(i.mesh.layers.set(n._thirdPersonOnlyLayer),i.mesh.traverse(function(u){return u.layers.set(n._thirdPersonOnlyLayer)})):i.firstPersonFlag===h.Auto&&n._createHeadlessModel(i.mesh)}))},l.prototype._excludeTriangles=function(o,n,r,e){var t=0;if(n!=null&&n.length>0)for(var a=0;a<o.length;a+=3){var d=o[a],i=o[a+1],u=o[a+2],g=n[d],y=r[d];if(!(g[0]>0&&e.includes(y[0]))&&!(g[1]>0&&e.includes(y[1])||g[2]>0&&e.includes(y[2])||g[3]>0&&e.includes(y[3]))){var b=n[i],S=r[i];if(!(b[0]>0&&e.includes(S[0])||b[1]>0&&e.includes(S[1])||b[2]>0&&e.includes(S[2])||b[3]>0&&e.includes(S[3]))){var T=n[u],E=r[u];T[0]>0&&e.includes(E[0])||T[1]>0&&e.includes(E[1])||T[2]>0&&e.includes(E[2])||T[3]>0&&e.includes(E[3])||(o[t++]=d,o[t++]=i,o[t++]=u)}}}return t},l.prototype._createErasedMesh=function(o,n){var r=new c.SkinnedMesh(o.geometry.clone(),o.material);r.name=o.name+"(erase)",r.frustumCulled=o.frustumCulled,r.layers.set(this._firstPersonOnlyLayer);for(var e=r.geometry,t=e.getAttribute("skinIndex").array,a=[],d=0;d<t.length;d+=4)a.push([t[d],t[d+1],t[d+2],t[d+3]]);var i=e.getAttribute("skinWeight").array,u=[];for(d=0;d<i.length;d+=4)u.push([i[d],i[d+1],i[d+2],i[d+3]]);var g=e.getIndex();if(!g)throw new Error("The geometry doesn't have an index buffer");var y=Array.from(g.array),b=this._excludeTriangles(y,u,a,n),S=[];for(d=0;d<b;d++)S[d]=y[d];return e.setIndex(S),o.onBeforeRender&&(r.onBeforeRender=o.onBeforeRender),r.bind(new c.Skeleton(o.skeleton.bones,o.skeleton.boneInverses),new c.Matrix4),r},l.prototype._createHeadlessModelForSkinnedMesh=function(o,n){var r=this,e=[];if(n.skeleton.bones.forEach(function(a,d){r._isEraseTarget(a)&&e.push(d)}),!e.length)return n.layers.enable(this._thirdPersonOnlyLayer),void n.layers.enable(this._firstPersonOnlyLayer);n.layers.set(this._thirdPersonOnlyLayer);var t=this._createErasedMesh(n,e);o.add(t)},l.prototype._createHeadlessModel=function(o){var n=this;if(o.type==="Group")if(o.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(o))o.traverse(function(t){return t.layers.set(n._thirdPersonOnlyLayer)});else{var r=new c.Group;r.name="_headless_"+o.name,r.layers.set(this._firstPersonOnlyLayer),o.parent.add(r),o.children.filter(function(t){return t.type==="SkinnedMesh"}).forEach(function(t){var a=t;n._createHeadlessModelForSkinnedMesh(r,a)})}else if(o.type==="SkinnedMesh"){var e=o;this._createHeadlessModelForSkinnedMesh(o.parent,e)}else this._isEraseTarget(o)&&(o.layers.set(this._thirdPersonOnlyLayer),o.traverse(function(t){return t.layers.set(n._thirdPersonOnlyLayer)}))},l.prototype._isEraseTarget=function(o){return o.name===this._firstPersonBone.name||!!o.parent&&this._isEraseTarget(o.parent)},l._DEFAULT_FIRSTPERSON_ONLY_LAYER=9,l._DEFAULT_THIRDPERSON_ONLY_LAYER=10,l}();s.VRMFirstPerson=M},function(x,s,v){var h=this&&this.__awaiter||function(M,l,o,n){return new(o||(o=Promise))(function(r,e){function t(i){try{d(n.next(i))}catch(u){e(u)}}function a(i){try{d(n.throw(i))}catch(u){e(u)}}function d(i){var u;i.done?r(i.value):(u=i.value,u instanceof o?u:new o(function(g){g(u)})).then(t,a)}d((n=n.apply(M,l||[])).next())})},c=this&&this.__generator||function(M,l){var o,n,r,e,t={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return e={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(e[Symbol.iterator]=function(){return this}),e;function a(d){return function(i){return function(u){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,n&&(r=2&u[0]?n.return:u[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,u[1])).done)return r;switch(n=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,n=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!((r=r.length>0&&r[r.length-1])||u[0]!==6&&u[0]!==2)){t=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){t.label=u[1];break}if(u[0]===6&&t.label<r[1]){t.label=r[1],r=u;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(u);break}r[2]&&t.ops.pop(),t.trys.pop();continue}u=l.call(M,t)}catch(g){u=[6,g],n=0}finally{o=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([d,i])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMHumanoidImporter=void 0;var f=v(0),_=v(17),p=v(18),m=function(){function M(){}return M.prototype.import=function(l){var o;return h(this,void 0,Promise,function(){var n,r,e,t,a=this;return c(this,function(d){switch(d.label){case 0:return(n=(o=l.parser.json.extensions)===null||o===void 0?void 0:o.VRM)&&(r=n.humanoid)?(e=[],r.humanBones?[4,Promise.all(r.humanBones.map(function(i){return h(a,void 0,void 0,function(){var u;return c(this,function(g){switch(g.label){case 0:return i.bone&&i.node!=null?[4,l.parser.getDependency("node",i.node)]:[2];case 1:return u=g.sent(),e.push({name:i.bone,bone:new _.VRMHumanBone(u,{axisLength:i.axisLength,center:i.center&&new f.Vector3(i.center.x,i.center.y,i.center.z),max:i.max&&new f.Vector3(i.max.x,i.max.y,i.max.z),min:i.min&&new f.Vector3(i.min.x,i.min.y,i.min.z),useDefaultValues:i.useDefaultValues})}),[2]}})})}))]:[3,2]):[2,null];case 1:d.sent(),d.label=2;case 2:return t={armStretch:r.armStretch,legStretch:r.legStretch,upperArmTwist:r.upperArmTwist,lowerArmTwist:r.lowerArmTwist,upperLegTwist:r.upperLegTwist,lowerLegTwist:r.lowerLegTwist,feetSpacing:r.feetSpacing,hasTranslationDoF:r.hasTranslationDoF},[2,new p.VRMHumanoid(e,t)]}})})},M}();s.VRMHumanoidImporter=m},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMHumanBone=void 0;var h=function(c,f){this.node=c,this.humanLimit=f};s.VRMHumanBone=h},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMHumanoid=void 0;var h=v(0),c=v(1),f=v(19),_=new h.Vector3,p=new h.Quaternion,m=function(){function M(l,o){this.restPose={},this.humanBones=this._createHumanBones(l),this.humanDescription=o,this.restPose=this.getPose()}return M.prototype.getPose=function(){var l=this,o={};return Object.keys(this.humanBones).forEach(function(n){var r=l.getBoneNode(n);if(r&&!o[n]){_.set(0,0,0),p.identity();var e=l.restPose[n];(e==null?void 0:e.position)&&_.fromArray(e.position).negate(),(e==null?void 0:e.rotation)&&f.quatInvertCompat(p.fromArray(e.rotation)),_.add(r.position),p.premultiply(r.quaternion),o[n]={position:_.toArray(),rotation:p.toArray()}}},{}),o},M.prototype.setPose=function(l){var o=this;Object.keys(l).forEach(function(n){var r=l[n],e=o.getBoneNode(n);if(e){var t=o.restPose[n];t&&(r.position&&(e.position.fromArray(r.position),t.position&&e.position.add(_.fromArray(t.position))),r.rotation&&(e.quaternion.fromArray(r.rotation),t.rotation&&e.quaternion.multiply(p.fromArray(t.rotation))))}})},M.prototype.resetPose=function(){this.setPose({})},M.prototype.getBone=function(l){return this.humanBones[l][0]||void 0},M.prototype.getBones=function(l){return this.humanBones[l]},M.prototype.getBoneNode=function(l){var o,n;return(n=(o=this.humanBones[l][0])===null||o===void 0?void 0:o.node)!==null&&n!==void 0?n:null},M.prototype.getBoneNodes=function(l){return this.humanBones[l].map(function(o){return o.node})},M.prototype._createHumanBones=function(l){var o=Object.values(c.VRMSchema.HumanoidBoneName).reduce(function(n,r){return n[r]=[],n},{});return l.forEach(function(n){o[n.name].push(n.bone)}),o},M}();s.VRMHumanoid=m},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.quatInvertCompat=void 0,s.quatInvertCompat=function(h){return h.invert?h.invert():h.inverse(),h}},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMCurveMapper=void 0;var h=function(){function c(f,_,p){this.curve=[0,0,0,1,1,1,1,0],this.curveXRangeDegree=90,this.curveYRangeDegree=10,f!==void 0&&(this.curveXRangeDegree=f),_!==void 0&&(this.curveYRangeDegree=_),p!==void 0&&(this.curve=p)}return c.prototype.map=function(f){var _=Math.min(Math.max(f,0),this.curveXRangeDegree)/this.curveXRangeDegree;return this.curveYRangeDegree*function(p,m){if(p.length<8)throw new Error("evaluateCurve: Invalid curve detected! (Array length must be 8 at least)");if(p.length%4!=0)throw new Error("evaluateCurve: Invalid curve detected! (Array length must be multiples of 4");var M;for(M=0;;M++){if(p.length<=4*M)return p[4*M-3];if(m<=p[4*M])break}var l=M-1;if(l<0)return p[4*l+5];var o=p[4*l],n=(m-o)/(p[4*M]-o);return function(r,e,t,a,d){var i=d*d*d,u=d*d;return r+(e-r)*(-2*i+3*u)+t*(i-2*u+d)+a*(i-u)}(p[4*l+1],p[4*M+1],p[4*l+3],p[4*M+2],n)}(this.curve,_)},c}();s.VRMCurveMapper=h},function(x,s,v){var h,c=this&&this.__extends||(h=function(p,m){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(M,l){M.__proto__=l}||function(M,l){for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(M[o]=l[o])})(p,m)},function(p,m){function M(){this.constructor=p}h(p,m),p.prototype=m===null?Object.create(m):(M.prototype=m.prototype,new M)});Object.defineProperty(s,"__esModule",{value:!0}),s.VRMLookAtBlendShapeApplyer=void 0;var f=v(1),_=function(p){function m(M,l,o,n){var r=p.call(this)||this;return r.type=f.VRMSchema.FirstPersonLookAtTypeName.BlendShape,r._curveHorizontal=l,r._curveVerticalDown=o,r._curveVerticalUp=n,r._blendShapeProxy=M,r}return c(m,p),m.prototype.name=function(){return f.VRMSchema.FirstPersonLookAtTypeName.BlendShape},m.prototype.lookAt=function(M){var l=M.x,o=M.y;l<0?(this._blendShapeProxy.setValue(f.VRMSchema.BlendShapePresetName.Lookup,0),this._blendShapeProxy.setValue(f.VRMSchema.BlendShapePresetName.Lookdown,this._curveVerticalDown.map(-l))):(this._blendShapeProxy.setValue(f.VRMSchema.BlendShapePresetName.Lookdown,0),this._blendShapeProxy.setValue(f.VRMSchema.BlendShapePresetName.Lookup,this._curveVerticalUp.map(l))),o<0?(this._blendShapeProxy.setValue(f.VRMSchema.BlendShapePresetName.Lookleft,0),this._blendShapeProxy.setValue(f.VRMSchema.BlendShapePresetName.Lookright,this._curveHorizontal.map(-o))):(this._blendShapeProxy.setValue(f.VRMSchema.BlendShapePresetName.Lookright,0),this._blendShapeProxy.setValue(f.VRMSchema.BlendShapePresetName.Lookleft,this._curveHorizontal.map(o)))},m}(v(8).VRMLookAtApplyer);s.VRMLookAtBlendShapeApplyer=_},function(x,s,v){var h,c=this&&this.__extends||(h=function(o,n){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])})(o,n)},function(o,n){function r(){this.constructor=o}h(o,n),o.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)});Object.defineProperty(s,"__esModule",{value:!0}),s.VRMLookAtBoneApplyer=void 0;var f=v(0),_=v(1),p=v(8),m=v(3),M=new f.Euler(0,0,0,m.VRMLookAtHead.EULER_ORDER),l=function(o){function n(r,e,t,a,d){var i=o.call(this)||this;return i.type=_.VRMSchema.FirstPersonLookAtTypeName.Bone,i._curveHorizontalInner=e,i._curveHorizontalOuter=t,i._curveVerticalDown=a,i._curveVerticalUp=d,i._leftEye=r.getBoneNode(_.VRMSchema.HumanoidBoneName.LeftEye),i._rightEye=r.getBoneNode(_.VRMSchema.HumanoidBoneName.RightEye),i}return c(n,o),n.prototype.lookAt=function(r){var e=r.x,t=r.y;this._leftEye&&(M.x=e<0?-this._curveVerticalDown.map(-e):this._curveVerticalUp.map(e),M.y=t<0?-this._curveHorizontalInner.map(-t):this._curveHorizontalOuter.map(t),this._leftEye.quaternion.setFromEuler(M)),this._rightEye&&(M.x=e<0?-this._curveVerticalDown.map(-e):this._curveVerticalUp.map(e),M.y=t<0?-this._curveHorizontalOuter.map(-t):this._curveHorizontalInner.map(t),this._rightEye.quaternion.setFromEuler(M))},n}(p.VRMLookAtApplyer);s.VRMLookAtBoneApplyer=l},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(24),s),c(v(44),s),c(v(25),s)},function(x,s,v){var h,c=this&&this.__extends||(h=function(a,d){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,u){i.__proto__=u}||function(i,u){for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(i[g]=u[g])})(a,d)},function(a,d){function i(){this.constructor=a}h(a,d),a.prototype=d===null?Object.create(d):(i.prototype=d.prototype,new i)});Object.defineProperty(s,"__esModule",{value:!0}),s.MToonMaterial=s.MToonMaterialRenderMode=s.MToonMaterialOutlineWidthMode=s.MToonMaterialOutlineColorMode=s.MToonMaterialDebugMode=s.MToonMaterialCullMode=void 0;var f,_,p,m,M,l=v(0),o=v(41),n=v(42),r=v(43),e=2*Math.PI;(function(a){a[a.Off=0]="Off",a[a.Front=1]="Front",a[a.Back=2]="Back"})(f=s.MToonMaterialCullMode||(s.MToonMaterialCullMode={})),function(a){a[a.None=0]="None",a[a.Normal=1]="Normal",a[a.LitShadeRate=2]="LitShadeRate",a[a.UV=3]="UV"}(_=s.MToonMaterialDebugMode||(s.MToonMaterialDebugMode={})),function(a){a[a.FixedColor=0]="FixedColor",a[a.MixedLighting=1]="MixedLighting"}(p=s.MToonMaterialOutlineColorMode||(s.MToonMaterialOutlineColorMode={})),function(a){a[a.None=0]="None",a[a.WorldCoordinates=1]="WorldCoordinates",a[a.ScreenCoordinates=2]="ScreenCoordinates"}(m=s.MToonMaterialOutlineWidthMode||(s.MToonMaterialOutlineWidthMode={})),function(a){a[a.Opaque=0]="Opaque",a[a.Cutout=1]="Cutout",a[a.Transparent=2]="Transparent",a[a.TransparentWithZWrite=3]="TransparentWithZWrite"}(M=s.MToonMaterialRenderMode||(s.MToonMaterialRenderMode={}));var t=function(a){function d(i){i===void 0&&(i={});var u=a.call(this)||this;return u.isMToonMaterial=!0,u.cutoff=.5,u.color=new l.Vector4(1,1,1,1),u.shadeColor=new l.Vector4(.97,.81,.86,1),u.map=null,u.mainTex_ST=new l.Vector4(0,0,1,1),u.shadeTexture=null,u.normalMap=null,u.normalMapType=l.TangentSpaceNormalMap,u.normalScale=new l.Vector2(1,1),u.receiveShadowRate=1,u.receiveShadowTexture=null,u.shadingGradeRate=1,u.shadingGradeTexture=null,u.shadeShift=0,u.shadeToony=.9,u.lightColorAttenuation=0,u.indirectLightIntensity=.1,u.rimTexture=null,u.rimColor=new l.Vector4(0,0,0,1),u.rimLightingMix=0,u.rimFresnelPower=1,u.rimLift=0,u.sphereAdd=null,u.emissionColor=new l.Vector4(0,0,0,1),u.emissiveMap=null,u.outlineWidthTexture=null,u.outlineWidth=.5,u.outlineScaledMaxDistance=1,u.outlineColor=new l.Vector4(0,0,0,1),u.outlineLightingMix=1,u.uvAnimMaskTexture=null,u.uvAnimScrollX=0,u.uvAnimScrollY=0,u.uvAnimRotation=0,u.shouldApplyUniforms=!0,u._debugMode=_.None,u._blendMode=M.Opaque,u._outlineWidthMode=m.None,u._outlineColorMode=p.FixedColor,u._cullMode=f.Back,u._outlineCullMode=f.Front,u._isOutline=!1,u._uvAnimOffsetX=0,u._uvAnimOffsetY=0,u._uvAnimPhase=0,u.encoding=i.encoding||l.LinearEncoding,u.encoding!==l.LinearEncoding&&u.encoding!==l.sRGBEncoding&&console.warn("The specified color encoding does not work properly with MToonMaterial. You might want to use THREE.sRGBEncoding instead."),["mToonVersion","shadeTexture_ST","bumpMap_ST","receiveShadowTexture_ST","shadingGradeTexture_ST","rimTexture_ST","sphereAdd_ST","emissionMap_ST","outlineWidthTexture_ST","uvAnimMaskTexture_ST","srcBlend","dstBlend"].forEach(function(g){i[g]!==void 0&&delete i[g]}),i.fog=!0,i.lights=!0,i.clipping=!0,i.skinning=i.skinning||!1,i.morphTargets=i.morphTargets||!1,i.morphNormals=i.morphNormals||!1,i.uniforms=l.UniformsUtils.merge([l.UniformsLib.common,l.UniformsLib.normalmap,l.UniformsLib.emissivemap,l.UniformsLib.fog,l.UniformsLib.lights,{cutoff:{value:.5},color:{value:new l.Color(1,1,1)},colorAlpha:{value:1},shadeColor:{value:new l.Color(.97,.81,.86)},mainTex_ST:{value:new l.Vector4(0,0,1,1)},shadeTexture:{value:null},receiveShadowRate:{value:1},receiveShadowTexture:{value:null},shadingGradeRate:{value:1},shadingGradeTexture:{value:null},shadeShift:{value:0},shadeToony:{value:.9},lightColorAttenuation:{value:0},indirectLightIntensity:{value:.1},rimTexture:{value:null},rimColor:{value:new l.Color(0,0,0)},rimLightingMix:{value:0},rimFresnelPower:{value:1},rimLift:{value:0},sphereAdd:{value:null},emissionColor:{value:new l.Color(0,0,0)},outlineWidthTexture:{value:null},outlineWidth:{value:.5},outlineScaledMaxDistance:{value:1},outlineColor:{value:new l.Color(0,0,0)},outlineLightingMix:{value:1},uvAnimMaskTexture:{value:null},uvAnimOffsetX:{value:0},uvAnimOffsetY:{value:0},uvAnimTheta:{value:0}}]),u.setValues(i),u._updateShaderCode(),u._applyUniforms(),u}return c(d,a),Object.defineProperty(d.prototype,"mainTex",{get:function(){return this.map},set:function(i){this.map=i},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"bumpMap",{get:function(){return this.normalMap},set:function(i){this.normalMap=i},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"bumpScale",{get:function(){return this.normalScale.x},set:function(i){this.normalScale.set(i,i)},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"emissionMap",{get:function(){return this.emissiveMap},set:function(i){this.emissiveMap=i},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"blendMode",{get:function(){return this._blendMode},set:function(i){this._blendMode=i,this.depthWrite=this._blendMode!==M.Transparent,this.transparent=this._blendMode===M.Transparent||this._blendMode===M.TransparentWithZWrite,this._updateShaderCode()},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"debugMode",{get:function(){return this._debugMode},set:function(i){this._debugMode=i,this._updateShaderCode()},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"outlineWidthMode",{get:function(){return this._outlineWidthMode},set:function(i){this._outlineWidthMode=i,this._updateShaderCode()},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"outlineColorMode",{get:function(){return this._outlineColorMode},set:function(i){this._outlineColorMode=i,this._updateShaderCode()},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"cullMode",{get:function(){return this._cullMode},set:function(i){this._cullMode=i,this._updateCullFace()},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"outlineCullMode",{get:function(){return this._outlineCullMode},set:function(i){this._outlineCullMode=i,this._updateCullFace()},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"zWrite",{get:function(){return this.depthWrite?1:0},set:function(i){this.depthWrite=.5<=i},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"isOutline",{get:function(){return this._isOutline},set:function(i){this._isOutline=i,this._updateShaderCode(),this._updateCullFace()},enumerable:!1,configurable:!0}),d.prototype.updateVRMMaterials=function(i){this._uvAnimOffsetX=this._uvAnimOffsetX+i*this.uvAnimScrollX,this._uvAnimOffsetY=this._uvAnimOffsetY-i*this.uvAnimScrollY,this._uvAnimPhase=this._uvAnimPhase+i*this.uvAnimRotation,this._applyUniforms()},d.prototype.copy=function(i){return a.prototype.copy.call(this,i),this.cutoff=i.cutoff,this.color.copy(i.color),this.shadeColor.copy(i.shadeColor),this.map=i.map,this.mainTex_ST.copy(i.mainTex_ST),this.shadeTexture=i.shadeTexture,this.normalMap=i.normalMap,this.normalMapType=i.normalMapType,this.normalScale.copy(this.normalScale),this.receiveShadowRate=i.receiveShadowRate,this.receiveShadowTexture=i.receiveShadowTexture,this.shadingGradeRate=i.shadingGradeRate,this.shadingGradeTexture=i.shadingGradeTexture,this.shadeShift=i.shadeShift,this.shadeToony=i.shadeToony,this.lightColorAttenuation=i.lightColorAttenuation,this.indirectLightIntensity=i.indirectLightIntensity,this.rimTexture=i.rimTexture,this.rimColor.copy(i.rimColor),this.rimLightingMix=i.rimLightingMix,this.rimFresnelPower=i.rimFresnelPower,this.rimLift=i.rimLift,this.sphereAdd=i.sphereAdd,this.emissionColor.copy(i.emissionColor),this.emissiveMap=i.emissiveMap,this.outlineWidthTexture=i.outlineWidthTexture,this.outlineWidth=i.outlineWidth,this.outlineScaledMaxDistance=i.outlineScaledMaxDistance,this.outlineColor.copy(i.outlineColor),this.outlineLightingMix=i.outlineLightingMix,this.uvAnimMaskTexture=i.uvAnimMaskTexture,this.uvAnimScrollX=i.uvAnimScrollX,this.uvAnimScrollY=i.uvAnimScrollY,this.uvAnimRotation=i.uvAnimRotation,this.debugMode=i.debugMode,this.blendMode=i.blendMode,this.outlineWidthMode=i.outlineWidthMode,this.outlineColorMode=i.outlineColorMode,this.cullMode=i.cullMode,this.outlineCullMode=i.outlineCullMode,this.isOutline=i.isOutline,this},d.prototype._applyUniforms=function(){this.uniforms.uvAnimOffsetX.value=this._uvAnimOffsetX,this.uniforms.uvAnimOffsetY.value=this._uvAnimOffsetY,this.uniforms.uvAnimTheta.value=e*this._uvAnimPhase,this.shouldApplyUniforms&&(this.shouldApplyUniforms=!1,this.uniforms.cutoff.value=this.cutoff,this.uniforms.color.value.setRGB(this.color.x,this.color.y,this.color.z),this.uniforms.colorAlpha.value=this.color.w,this.uniforms.shadeColor.value.setRGB(this.shadeColor.x,this.shadeColor.y,this.shadeColor.z),this.uniforms.map.value=this.map,this.uniforms.mainTex_ST.value.copy(this.mainTex_ST),this.uniforms.shadeTexture.value=this.shadeTexture,this.uniforms.normalMap.value=this.normalMap,this.uniforms.normalScale.value.copy(this.normalScale),this.uniforms.receiveShadowRate.value=this.receiveShadowRate,this.uniforms.receiveShadowTexture.value=this.receiveShadowTexture,this.uniforms.shadingGradeRate.value=this.shadingGradeRate,this.uniforms.shadingGradeTexture.value=this.shadingGradeTexture,this.uniforms.shadeShift.value=this.shadeShift,this.uniforms.shadeToony.value=this.shadeToony,this.uniforms.lightColorAttenuation.value=this.lightColorAttenuation,this.uniforms.indirectLightIntensity.value=this.indirectLightIntensity,this.uniforms.rimTexture.value=this.rimTexture,this.uniforms.rimColor.value.setRGB(this.rimColor.x,this.rimColor.y,this.rimColor.z),this.uniforms.rimLightingMix.value=this.rimLightingMix,this.uniforms.rimFresnelPower.value=this.rimFresnelPower,this.uniforms.rimLift.value=this.rimLift,this.uniforms.sphereAdd.value=this.sphereAdd,this.uniforms.emissionColor.value.setRGB(this.emissionColor.x,this.emissionColor.y,this.emissionColor.z),this.uniforms.emissiveMap.value=this.emissiveMap,this.uniforms.outlineWidthTexture.value=this.outlineWidthTexture,this.uniforms.outlineWidth.value=this.outlineWidth,this.uniforms.outlineScaledMaxDistance.value=this.outlineScaledMaxDistance,this.uniforms.outlineColor.value.setRGB(this.outlineColor.x,this.outlineColor.y,this.outlineColor.z),this.uniforms.outlineLightingMix.value=this.outlineLightingMix,this.uniforms.uvAnimMaskTexture.value=this.uvAnimMaskTexture,this.encoding===l.sRGBEncoding&&(this.uniforms.color.value.convertSRGBToLinear(),this.uniforms.shadeColor.value.convertSRGBToLinear(),this.uniforms.rimColor.value.convertSRGBToLinear(),this.uniforms.emissionColor.value.convertSRGBToLinear(),this.uniforms.outlineColor.value.convertSRGBToLinear()),this._updateCullFace())},d.prototype._updateShaderCode=function(){this.defines={OUTLINE:this._isOutline,BLENDMODE_OPAQUE:this._blendMode===M.Opaque,BLENDMODE_CUTOUT:this._blendMode===M.Cutout,BLENDMODE_TRANSPARENT:this._blendMode===M.Transparent||this._blendMode===M.TransparentWithZWrite,USE_SHADETEXTURE:this.shadeTexture!==null,USE_RECEIVESHADOWTEXTURE:this.receiveShadowTexture!==null,USE_SHADINGGRADETEXTURE:this.shadingGradeTexture!==null,USE_RIMTEXTURE:this.rimTexture!==null,USE_SPHEREADD:this.sphereAdd!==null,USE_OUTLINEWIDTHTEXTURE:this.outlineWidthTexture!==null,USE_UVANIMMASKTEXTURE:this.uvAnimMaskTexture!==null,DEBUG_NORMAL:this._debugMode===_.Normal,DEBUG_LITSHADERATE:this._debugMode===_.LitShadeRate,DEBUG_UV:this._debugMode===_.UV,OUTLINE_WIDTH_WORLD:this._outlineWidthMode===m.WorldCoordinates,OUTLINE_WIDTH_SCREEN:this._outlineWidthMode===m.ScreenCoordinates,OUTLINE_COLOR_FIXED:this._outlineColorMode===p.FixedColor,OUTLINE_COLOR_MIXED:this._outlineColorMode===p.MixedLighting};var i=(this.shadeTexture!==null?o.getTexelDecodingFunction("shadeTextureTexelToLinear",this.shadeTexture.encoding)+`
`:"")+(this.sphereAdd!==null?o.getTexelDecodingFunction("sphereAddTexelToLinear",this.sphereAdd.encoding)+`
`:"")+(this.rimTexture!==null?o.getTexelDecodingFunction("rimTextureTexelToLinear",this.rimTexture.encoding)+`
`:"");this.vertexShader=n.default,this.fragmentShader=i+r.default,this.needsUpdate=!0},d.prototype._updateCullFace=function(){this.isOutline?this.outlineCullMode===f.Off?this.side=l.DoubleSide:this.outlineCullMode===f.Front?this.side=l.BackSide:this.outlineCullMode===f.Back&&(this.side=l.FrontSide):this.cullMode===f.Off?this.side=l.DoubleSide:this.cullMode===f.Front?this.side=l.BackSide:this.cullMode===f.Back&&(this.side=l.FrontSide)},d}(l.ShaderMaterial);s.MToonMaterial=t},function(x,s,v){var h,c=this&&this.__extends||(h=function(l,o){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])})(l,o)},function(l,o){function n(){this.constructor=l}h(l,o),l.prototype=o===null?Object.create(o):(n.prototype=o.prototype,new n)});Object.defineProperty(s,"__esModule",{value:!0}),s.VRMUnlitMaterial=s.VRMUnlitMaterialRenderType=void 0;var f,_=v(0),p=v(45),m=v(46);(function(l){l[l.Opaque=0]="Opaque",l[l.Cutout=1]="Cutout",l[l.Transparent=2]="Transparent",l[l.TransparentWithZWrite=3]="TransparentWithZWrite"})(f=s.VRMUnlitMaterialRenderType||(s.VRMUnlitMaterialRenderType={}));var M=function(l){function o(n){var r=l.call(this)||this;return r.isVRMUnlitMaterial=!0,r.cutoff=.5,r.map=null,r.mainTex_ST=new _.Vector4(0,0,1,1),r._renderType=f.Opaque,r.shouldApplyUniforms=!0,n===void 0&&(n={}),n.fog=!0,n.clipping=!0,n.skinning=n.skinning||!1,n.morphTargets=n.morphTargets||!1,n.morphNormals=n.morphNormals||!1,n.uniforms=_.UniformsUtils.merge([_.UniformsLib.common,_.UniformsLib.fog,{cutoff:{value:.5},mainTex_ST:{value:new _.Vector4(0,0,1,1)}}]),r.setValues(n),r._updateShaderCode(),r._applyUniforms(),r}return c(o,l),Object.defineProperty(o.prototype,"mainTex",{get:function(){return this.map},set:function(n){this.map=n},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"renderType",{get:function(){return this._renderType},set:function(n){this._renderType=n,this.depthWrite=this._renderType!==f.Transparent,this.transparent=this._renderType===f.Transparent||this._renderType===f.TransparentWithZWrite,this._updateShaderCode()},enumerable:!1,configurable:!0}),o.prototype.updateVRMMaterials=function(n){this._applyUniforms()},o.prototype.copy=function(n){return l.prototype.copy.call(this,n),this.cutoff=n.cutoff,this.map=n.map,this.mainTex_ST.copy(n.mainTex_ST),this.renderType=n.renderType,this},o.prototype._applyUniforms=function(){this.shouldApplyUniforms&&(this.shouldApplyUniforms=!1,this.uniforms.cutoff.value=this.cutoff,this.uniforms.map.value=this.map,this.uniforms.mainTex_ST.value.copy(this.mainTex_ST))},o.prototype._updateShaderCode=function(){this.defines={RENDERTYPE_OPAQUE:this._renderType===f.Opaque,RENDERTYPE_CUTOUT:this._renderType===f.Cutout,RENDERTYPE_TRANSPARENT:this._renderType===f.Transparent||this._renderType===f.TransparentWithZWrite},this.vertexShader=p.default,this.fragmentShader=m.default,this.needsUpdate=!0},o}(_.ShaderMaterial);s.VRMUnlitMaterial=M},function(x,s,v){var h=this&&this.__awaiter||function(_,p,m,M){return new(m||(m=Promise))(function(l,o){function n(t){try{e(M.next(t))}catch(a){o(a)}}function r(t){try{e(M.throw(t))}catch(a){o(a)}}function e(t){var a;t.done?l(t.value):(a=t.value,a instanceof m?a:new m(function(d){d(a)})).then(n,r)}e((M=M.apply(_,p||[])).next())})},c=this&&this.__generator||function(_,p){var m,M,l,o,n={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function r(e){return function(t){return function(a){if(m)throw new TypeError("Generator is already executing.");for(;n;)try{if(m=1,M&&(l=2&a[0]?M.return:a[0]?M.throw||((l=M.return)&&l.call(M),0):M.next)&&!(l=l.call(M,a[1])).done)return l;switch(M=0,l&&(a=[2&a[0],l.value]),a[0]){case 0:case 1:l=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,M=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(l=n.trys,!((l=l.length>0&&l[l.length-1])||a[0]!==6&&a[0]!==2)){n=0;continue}if(a[0]===3&&(!l||a[1]>l[0]&&a[1]<l[3])){n.label=a[1];break}if(a[0]===6&&n.label<l[1]){n.label=l[1],l=a;break}if(l&&n.label<l[2]){n.label=l[2],n.ops.push(a);break}l[2]&&n.ops.pop(),n.trys.pop();continue}a=p.call(_,n)}catch(d){a=[6,d],M=0}finally{m=l=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([e,t])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMMetaImporter=void 0;var f=function(){function _(p){var m;this.ignoreTexture=(m=p==null?void 0:p.ignoreTexture)!==null&&m!==void 0&&m}return _.prototype.import=function(p){var m;return h(this,void 0,Promise,function(){var M,l,o;return c(this,function(n){switch(n.label){case 0:return(M=(m=p.parser.json.extensions)===null||m===void 0?void 0:m.VRM)&&(l=M.meta)?this.ignoreTexture||l.texture==null||l.texture===-1?[3,2]:[4,p.parser.getDependency("texture",l.texture)]:[2,null];case 1:o=n.sent(),n.label=2;case 2:return[2,{allowedUserName:l.allowedUserName,author:l.author,commercialUssageName:l.commercialUssageName,contactInformation:l.contactInformation,licenseName:l.licenseName,otherLicenseUrl:l.otherLicenseUrl,otherPermissionUrl:l.otherPermissionUrl,reference:l.reference,sexualUssageName:l.sexualUssageName,texture:o!=null?o:void 0,title:l.title,version:l.version,violentUssageName:l.violentUssageName}]}})})},_}();s.VRMMetaImporter=f},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMSpringBone=void 0;var h=v(0),c=v(28),f=v(2),_=v(47),p=Object.freeze(new h.Matrix4),m=Object.freeze(new h.Quaternion),M=new h.Vector3,l=new h.Vector3,o=new h.Vector3,n=new h.Quaternion,r=new h.Matrix4,e=new h.Matrix4,t=function(){function a(d,i){var u,g,y,b,S,T;if(i===void 0&&(i={}),this._currentTail=new h.Vector3,this._prevTail=new h.Vector3,this._nextTail=new h.Vector3,this._boneAxis=new h.Vector3,this._centerSpacePosition=new h.Vector3,this._center=null,this._parentWorldRotation=new h.Quaternion,this._initialLocalMatrix=new h.Matrix4,this._initialLocalRotation=new h.Quaternion,this._initialLocalChildPosition=new h.Vector3,this.bone=d,this.bone.matrixAutoUpdate=!1,this.radius=(u=i.radius)!==null&&u!==void 0?u:.02,this.stiffnessForce=(g=i.stiffnessForce)!==null&&g!==void 0?g:1,this.gravityDir=i.gravityDir?new h.Vector3().copy(i.gravityDir):new h.Vector3().set(0,-1,0),this.gravityPower=(y=i.gravityPower)!==null&&y!==void 0?y:0,this.dragForce=(b=i.dragForce)!==null&&b!==void 0?b:.4,this.colliders=(S=i.colliders)!==null&&S!==void 0?S:[],this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld),this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.bone.children.length===0)this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);else{var E=this.bone.children[0];this._initialLocalChildPosition.copy(E.position)}this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)),this._prevTail.copy(this._currentTail),this._nextTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize(),this._centerSpaceBoneLength=M.copy(this._initialLocalChildPosition).applyMatrix4(this.bone.matrixWorld).sub(this._centerSpacePosition).length(),this.center=(T=i.center)!==null&&T!==void 0?T:null}return Object.defineProperty(a.prototype,"center",{get:function(){return this._center},set:function(d){var i;this._getMatrixCenterToWorld(r),this._currentTail.applyMatrix4(r),this._prevTail.applyMatrix4(r),this._nextTail.applyMatrix4(r),((i=this._center)===null||i===void 0?void 0:i.userData.inverseCacheProxy)&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=d,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new _.Matrix4InverseCache(this._center.matrixWorld))),this._getMatrixWorldToCenter(r),this._currentTail.applyMatrix4(r),this._prevTail.applyMatrix4(r),this._nextTail.applyMatrix4(r),r.multiply(this.bone.matrixWorld),this._centerSpacePosition.setFromMatrixPosition(r),this._centerSpaceBoneLength=M.copy(this._initialLocalChildPosition).applyMatrix4(r).sub(this._centerSpacePosition).length()},enumerable:!1,configurable:!0}),a.prototype.reset=function(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(),this.bone.matrix),this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld),this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)),this._prevTail.copy(this._currentTail),this._nextTail.copy(this._currentTail)},a.prototype.update=function(d){if(!(d<=0)){this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(),this.bone.matrix),this.bone.parent?f.getWorldQuaternionLite(this.bone.parent,this._parentWorldRotation):this._parentWorldRotation.copy(m),this._getMatrixWorldToCenter(r),r.multiply(this.bone.matrixWorld),this._centerSpacePosition.setFromMatrixPosition(r),this._getMatrixWorldToCenter(e),e.multiply(this._getParentMatrixWorld());var i=this.stiffnessForce*d,u=l.copy(this.gravityDir).multiplyScalar(this.gravityPower*d);this._nextTail.copy(this._currentTail).add(M.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1-this.dragForce)).add(M.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(e).sub(this._centerSpacePosition).normalize().multiplyScalar(i)).add(u),this._nextTail.sub(this._centerSpacePosition).normalize().multiplyScalar(this._centerSpaceBoneLength).add(this._centerSpacePosition),this._collision(this._nextTail),this._prevTail.copy(this._currentTail),this._currentTail.copy(this._nextTail);var g=c.mat4InvertCompat(r.copy(e.multiply(this._initialLocalMatrix))),y=n.setFromUnitVectors(this._boneAxis,M.copy(this._nextTail).applyMatrix4(g).normalize());this.bone.quaternion.copy(this._initialLocalRotation).multiply(y),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(),this.bone.matrix)}},a.prototype._collision=function(d){var i=this;this.colliders.forEach(function(u){i._getMatrixWorldToCenter(r),r.multiply(u.matrixWorld);var g=M.setFromMatrixPosition(r),y=u.geometry.boundingSphere.radius,b=i.radius+y;if(d.distanceToSquared(g)<=b*b){var S=l.subVectors(d,g).normalize(),T=o.addVectors(g,S.multiplyScalar(b));d.copy(T.sub(i._centerSpacePosition).normalize().multiplyScalar(i._centerSpaceBoneLength).add(i._centerSpacePosition))}})},a.prototype._getMatrixCenterToWorld=function(d){return this._center?d.copy(this._center.matrixWorld):d.identity(),d},a.prototype._getMatrixWorldToCenter=function(d){return this._center?d.copy(this._center.userData.inverseCacheProxy.inverse):d.identity(),d},a.prototype._getParentMatrixWorld=function(){return this.bone.parent?this.bone.parent.matrixWorld:p},a}();s.VRMSpringBone=t},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.mat4InvertCompat=void 0;var h=new(v(0)).Matrix4;s.mat4InvertCompat=function(c){return c.invert?c.invert():c.getInverse(h.copy(c)),c}},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMSpringBoneManager=void 0;var h=function(){function c(f,_){this.colliderGroups=[],this.springBoneGroupList=[],this.colliderGroups=f,this.springBoneGroupList=_}return c.prototype.setCenter=function(f){this.springBoneGroupList.forEach(function(_){_.forEach(function(p){p.center=f})})},c.prototype.lateUpdate=function(f){this.springBoneGroupList.forEach(function(_){_.forEach(function(p){p.update(f)})})},c.prototype.reset=function(){this.springBoneGroupList.forEach(function(f){f.forEach(function(_){_.reset()})})},c}();s.VRMSpringBoneManager=h},function(x,s,v){var h,c=this&&this.__extends||(h=function(o,n){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])})(o,n)},function(o,n){function r(){this.constructor=o}h(o,n),o.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}),f=this&&this.__awaiter||function(o,n,r,e){return new(r||(r=Promise))(function(t,a){function d(g){try{u(e.next(g))}catch(y){a(y)}}function i(g){try{u(e.throw(g))}catch(y){a(y)}}function u(g){var y;g.done?t(g.value):(y=g.value,y instanceof r?y:new r(function(b){b(y)})).then(d,i)}u((e=e.apply(o,n||[])).next())})},_=this&&this.__generator||function(o,n){var r,e,t,a,d={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(u){return function(g){return function(y){if(r)throw new TypeError("Generator is already executing.");for(;d;)try{if(r=1,e&&(t=2&y[0]?e.return:y[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,y[1])).done)return t;switch(e=0,t&&(y=[2&y[0],t.value]),y[0]){case 0:case 1:t=y;break;case 4:return d.label++,{value:y[1],done:!1};case 5:d.label++,e=y[1],y=[0];continue;case 7:y=d.ops.pop(),d.trys.pop();continue;default:if(t=d.trys,!((t=t.length>0&&t[t.length-1])||y[0]!==6&&y[0]!==2)){d=0;continue}if(y[0]===3&&(!t||y[1]>t[0]&&y[1]<t[3])){d.label=y[1];break}if(y[0]===6&&d.label<t[1]){d.label=t[1],t=y;break}if(t&&d.label<t[2]){d.label=t[2],d.ops.push(y);break}t[2]&&d.ops.pop(),d.trys.pop();continue}y=n.call(o,d)}catch(b){y=[6,b],e=0}finally{r=t=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}([u,g])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMSpringBoneImporterDebug=void 0;var p=v(9),m=v(56),M=v(31),l=function(o){function n(){return o!==null&&o.apply(this,arguments)||this}return c(n,o),n.prototype.import=function(r){var e;return f(this,void 0,Promise,function(){var t,a,d,i;return _(this,function(u){switch(u.label){case 0:return(t=(e=r.parser.json.extensions)===null||e===void 0?void 0:e.VRM)&&(a=t.secondaryAnimation)?[4,this._importColliderMeshGroups(r,a)]:[2,null];case 1:return d=u.sent(),[4,this._importSpringBoneGroupList(r,a,d)];case 2:return i=u.sent(),[2,new m.VRMSpringBoneManagerDebug(d,i)]}})})},n.prototype._createSpringBone=function(r,e){return new M.VRMSpringBoneDebug(r,e)},n}(p.VRMSpringBoneImporter);s.VRMSpringBoneImporterDebug=l},function(x,s,v){var h,c=this&&this.__extends||(h=function(l,o){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])})(l,o)},function(l,o){function n(){this.constructor=l}h(l,o),l.prototype=o===null?Object.create(o):(n.prototype=o.prototype,new n)});Object.defineProperty(s,"__esModule",{value:!0}),s.VRMSpringBoneDebug=void 0;var f=v(0),_=v(10),p=v(4),m=new f.Vector3,M=function(l){function o(n,r){return l.call(this,n,r)||this}return c(o,l),o.prototype.getGizmo=function(){if(this._gizmo)return this._gizmo;var n=m.copy(this._nextTail).sub(this._centerSpacePosition),r=n.length();return this._gizmo=new f.ArrowHelper(n.normalize(),this._centerSpacePosition,r,16776960,this.radius,this.radius),this._gizmo.line.renderOrder=p.VRM_GIZMO_RENDER_ORDER,this._gizmo.cone.renderOrder=p.VRM_GIZMO_RENDER_ORDER,this._gizmo.line.material.depthTest=!1,this._gizmo.line.material.transparent=!0,this._gizmo.cone.material.depthTest=!1,this._gizmo.cone.material.transparent=!0,this._gizmo},o.prototype.update=function(n){l.prototype.update.call(this,n),this._updateGizmo()},o.prototype._updateGizmo=function(){if(this._gizmo){var n=m.copy(this._currentTail).sub(this._centerSpacePosition),r=n.length();this._gizmo.setDirection(n.normalize()),this._gizmo.setLength(r,this.radius,this.radius),this._gizmo.position.copy(this._centerSpacePosition)}},o}(_.VRMSpringBone);s.VRMSpringBoneDebug=M},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(33),s)},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(5),s),c(v(6),s),c(v(48),s),c(v(11),s),c(v(51),s),c(v(14),s),c(v(59),s),c(v(63),s),c(v(10),s),c(v(1),s),c(v(23),s),c(v(64),s)},function(x,s,v){function h(f){Object.keys(f).forEach(function(_){var p=f[_];(p==null?void 0:p.isTexture)&&p.dispose()}),f.dispose()}function c(f){var _=f.geometry;_&&_.dispose();var p=f.material;p&&(Array.isArray(p)?p.forEach(function(m){return h(m)}):p&&h(p))}Object.defineProperty(s,"__esModule",{value:!0}),s.deepDispose=void 0,s.deepDispose=function(f){f.traverse(c)}},function(x,s,v){var h=this&&this.__awaiter||function(l,o,n,r){return new(n||(n=Promise))(function(e,t){function a(u){try{i(r.next(u))}catch(g){t(g)}}function d(u){try{i(r.throw(u))}catch(g){t(g)}}function i(u){var g;u.done?e(u.value):(g=u.value,g instanceof n?g:new n(function(y){y(g)})).then(a,d)}i((r=r.apply(l,o||[])).next())})},c=this&&this.__generator||function(l,o){var n,r,e,t,a={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return t={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(t[Symbol.iterator]=function(){return this}),t;function d(i){return function(u){return function(g){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(e=2&g[0]?r.return:g[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,g[1])).done)return e;switch(r=0,e&&(g=[2&g[0],e.value]),g[0]){case 0:case 1:e=g;break;case 4:return a.label++,{value:g[1],done:!1};case 5:a.label++,r=g[1],g=[0];continue;case 7:g=a.ops.pop(),a.trys.pop();continue;default:if(e=a.trys,!((e=e.length>0&&e[e.length-1])||g[0]!==6&&g[0]!==2)){a=0;continue}if(g[0]===3&&(!e||g[1]>e[0]&&g[1]<e[3])){a.label=g[1];break}if(g[0]===6&&a.label<e[1]){a.label=e[1],e=g;break}if(e&&a.label<e[2]){a.label=e[2],a.ops.push(g);break}e[2]&&a.ops.pop(),a.trys.pop();continue}g=o.call(l,a)}catch(y){g=[6,y],r=0}finally{n=e=0}if(5&g[0])throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMBlendShapeImporter=void 0;var f=v(1),_=v(39),p=v(12),m=v(13),M=function(){function l(){}return l.prototype.import=function(o){var n;return h(this,void 0,Promise,function(){var r,e,t,a,d,i=this;return c(this,function(u){switch(u.label){case 0:return(r=(n=o.parser.json.extensions)===null||n===void 0?void 0:n.VRM)&&(e=r.blendShapeMaster)?(t=new m.VRMBlendShapeProxy,(a=e.blendShapeGroups)?(d={},[4,Promise.all(a.map(function(g){return h(i,void 0,void 0,function(){var y,b,S,T,E=this;return c(this,function(R){return(y=g.name)===void 0?(console.warn("VRMBlendShapeImporter: One of blendShapeGroups has no name"),[2]):(g.presetName&&g.presetName!==f.VRMSchema.BlendShapePresetName.Unknown&&!d[g.presetName]&&(b=g.presetName,d[g.presetName]=y),S=new p.VRMBlendShapeGroup(y),o.scene.add(S),S.isBinary=g.isBinary||!1,g.binds&&g.binds.forEach(function(P){return h(E,void 0,void 0,function(){var w,O,L;return c(this,function(A){switch(A.label){case 0:return P.mesh===void 0||P.index===void 0?[2]:[4,o.parser.getDependency("mesh",P.mesh)];case 1:return w=A.sent(),O=w.type==="Group"?w.children:[w],L=P.index,O.every(function(U){return Array.isArray(U.morphTargetInfluences)&&L<U.morphTargetInfluences.length})?(S.addBind({meshes:O,morphTargetIndex:L,weight:P.weight||100}),[2]):(console.warn("VRMBlendShapeImporter: "+g.name+" attempts to index "+L+"th morph but not found."),[2])}})})}),(T=g.materialValues)&&T.forEach(function(P){if(P.materialName!==void 0&&P.propertyName!==void 0&&P.targetValue!==void 0){var w=[];o.scene.traverse(function(O){if(O.material){var L=O.material;Array.isArray(L)?w.push.apply(w,L.filter(function(A){return A.name===P.materialName&&w.indexOf(A)===-1})):L.name===P.materialName&&w.indexOf(L)===-1&&w.push(L)}}),w.forEach(function(O){S.addMaterialValue({material:O,propertyName:_.renameMaterialProperty(P.propertyName),targetValue:P.targetValue})})}}),t.registerBlendShapeGroup(y,b,S),[2])})})}))]):[2,t]):[2,null];case 1:return u.sent(),[2,t]}})})},l}();s.VRMBlendShapeImporter=M},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMSchema=void 0,function(h){(function(c){c.A="a",c.Angry="angry",c.Blink="blink",c.BlinkL="blink_l",c.BlinkR="blink_r",c.E="e",c.Fun="fun",c.I="i",c.Joy="joy",c.Lookdown="lookdown",c.Lookleft="lookleft",c.Lookright="lookright",c.Lookup="lookup",c.Neutral="neutral",c.O="o",c.Sorrow="sorrow",c.U="u",c.Unknown="unknown"})(h.BlendShapePresetName||(h.BlendShapePresetName={})),function(c){c.BlendShape="BlendShape",c.Bone="Bone"}(h.FirstPersonLookAtTypeName||(h.FirstPersonLookAtTypeName={})),function(c){c.Chest="chest",c.Head="head",c.Hips="hips",c.Jaw="jaw",c.LeftEye="leftEye",c.LeftFoot="leftFoot",c.LeftHand="leftHand",c.LeftIndexDistal="leftIndexDistal",c.LeftIndexIntermediate="leftIndexIntermediate",c.LeftIndexProximal="leftIndexProximal",c.LeftLittleDistal="leftLittleDistal",c.LeftLittleIntermediate="leftLittleIntermediate",c.LeftLittleProximal="leftLittleProximal",c.LeftLowerArm="leftLowerArm",c.LeftLowerLeg="leftLowerLeg",c.LeftMiddleDistal="leftMiddleDistal",c.LeftMiddleIntermediate="leftMiddleIntermediate",c.LeftMiddleProximal="leftMiddleProximal",c.LeftRingDistal="leftRingDistal",c.LeftRingIntermediate="leftRingIntermediate",c.LeftRingProximal="leftRingProximal",c.LeftShoulder="leftShoulder",c.LeftThumbDistal="leftThumbDistal",c.LeftThumbIntermediate="leftThumbIntermediate",c.LeftThumbProximal="leftThumbProximal",c.LeftToes="leftToes",c.LeftUpperArm="leftUpperArm",c.LeftUpperLeg="leftUpperLeg",c.Neck="neck",c.RightEye="rightEye",c.RightFoot="rightFoot",c.RightHand="rightHand",c.RightIndexDistal="rightIndexDistal",c.RightIndexIntermediate="rightIndexIntermediate",c.RightIndexProximal="rightIndexProximal",c.RightLittleDistal="rightLittleDistal",c.RightLittleIntermediate="rightLittleIntermediate",c.RightLittleProximal="rightLittleProximal",c.RightLowerArm="rightLowerArm",c.RightLowerLeg="rightLowerLeg",c.RightMiddleDistal="rightMiddleDistal",c.RightMiddleIntermediate="rightMiddleIntermediate",c.RightMiddleProximal="rightMiddleProximal",c.RightRingDistal="rightRingDistal",c.RightRingIntermediate="rightRingIntermediate",c.RightRingProximal="rightRingProximal",c.RightShoulder="rightShoulder",c.RightThumbDistal="rightThumbDistal",c.RightThumbIntermediate="rightThumbIntermediate",c.RightThumbProximal="rightThumbProximal",c.RightToes="rightToes",c.RightUpperArm="rightUpperArm",c.RightUpperLeg="rightUpperLeg",c.Spine="spine",c.UpperChest="upperChest"}(h.HumanoidBoneName||(h.HumanoidBoneName={})),function(c){c.Everyone="Everyone",c.ExplicitlyLicensedPerson="ExplicitlyLicensedPerson",c.OnlyAuthor="OnlyAuthor"}(h.MetaAllowedUserName||(h.MetaAllowedUserName={})),function(c){c.Allow="Allow",c.Disallow="Disallow"}(h.MetaUssageName||(h.MetaUssageName={})),function(c){c.Cc0="CC0",c.CcBy="CC_BY",c.CcByNc="CC_BY_NC",c.CcByNcNd="CC_BY_NC_ND",c.CcByNcSa="CC_BY_NC_SA",c.CcByNd="CC_BY_ND",c.CcBySa="CC_BY_SA",c.Other="Other",c.RedistributionProhibited="Redistribution_Prohibited"}(h.MetaLicenseName||(h.MetaLicenseName={}))}(s.VRMSchema||(s.VRMSchema={}))},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.renameMaterialProperty=void 0,s.renameMaterialProperty=function(h){return h[0]!=="_"?(console.warn('renameMaterialProperty: Given property name "'+h+'" might be invalid'),h):(h=h.substring(1),/[A-Z]/.test(h[0])?h[0].toLowerCase()+h.substring(1):(console.warn('renameMaterialProperty: Given property name "'+h+'" might be invalid'),h))}},function(x,s,v){var h=this&&this.__awaiter||function(M,l,o,n){return new(o||(o=Promise))(function(r,e){function t(i){try{d(n.next(i))}catch(u){e(u)}}function a(i){try{d(n.throw(i))}catch(u){e(u)}}function d(i){var u;i.done?r(i.value):(u=i.value,u instanceof o?u:new o(function(g){g(u)})).then(t,a)}d((n=n.apply(M,l||[])).next())})},c=this&&this.__generator||function(M,l){var o,n,r,e,t={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return e={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(e[Symbol.iterator]=function(){return this}),e;function a(d){return function(i){return function(u){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,n&&(r=2&u[0]?n.return:u[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,u[1])).done)return r;switch(n=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,n=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!((r=r.length>0&&r[r.length-1])||u[0]!==6&&u[0]!==2)){t=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){t.label=u[1];break}if(u[0]===6&&t.label<r[1]){t.label=r[1],r=u;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(u);break}r[2]&&t.ops.pop(),t.trys.pop();continue}u=l.call(M,t)}catch(g){u=[6,g],n=0}finally{o=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([d,i])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMFirstPersonImporter=void 0;var f=v(0),_=v(1),p=v(15),m=function(){function M(){}return M.prototype.import=function(l,o){var n;return h(this,void 0,Promise,function(){var r,e,t,a,d,i;return c(this,function(u){switch(u.label){case 0:return(r=(n=l.parser.json.extensions)===null||n===void 0?void 0:n.VRM)&&(e=r.firstPerson)?(t=e.firstPersonBone)!==void 0&&t!==-1?[3,1]:(a=o.getBoneNode(_.VRMSchema.HumanoidBoneName.Head),[3,3]):[2,null];case 1:return[4,l.parser.getDependency("node",t)];case 2:a=u.sent(),u.label=3;case 3:return a?(d=e.firstPersonBoneOffset?new f.Vector3(e.firstPersonBoneOffset.x,e.firstPersonBoneOffset.y,-e.firstPersonBoneOffset.z):new f.Vector3(0,.06,0),i=[],[4,l.parser.getDependencies("mesh")]):(console.warn("VRMFirstPersonImporter: Could not find firstPersonBone of the VRM"),[2,null]);case 4:return u.sent().forEach(function(g,y){var b=e.meshAnnotations?e.meshAnnotations.find(function(S){return S.mesh===y}):void 0;i.push(new p.VRMRendererFirstPersonFlags(b==null?void 0:b.firstPersonFlag,g))}),[2,new p.VRMFirstPerson(a,d,i)]}})})},M}();s.VRMFirstPersonImporter=m},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.getTexelDecodingFunction=s.getEncodingComponents=void 0;var h=v(0);s.getEncodingComponents=function(c){switch(c){case h.LinearEncoding:return["Linear","( value )"];case h.sRGBEncoding:return["sRGB","( value )"];case h.RGBEEncoding:return["RGBE","( value )"];case h.RGBM7Encoding:return["RGBM","( value, 7.0 )"];case h.RGBM16Encoding:return["RGBM","( value, 16.0 )"];case h.RGBDEncoding:return["RGBD","( value, 256.0 )"];case h.GammaEncoding:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+c)}},s.getTexelDecodingFunction=function(c,f){var _=s.getEncodingComponents(f);return"vec4 "+c+"( vec4 value ) { return "+_[0]+"ToLinear"+_[1]+"; }"}},function(x,s,v){v.r(s),s.default=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )
  varying vec2 vUv;
  uniform vec4 mainTex_ST;
#endif

#include <uv2_pars_vertex>
// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHTEXTURE
  uniform sampler2D outlineWidthTexture;
#endif

uniform float outlineWidth;
uniform float outlineScaledMaxDistance;

void main() {

  // #include <uv_vertex>
  #if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )
    vUv = vec2( mainTex_ST.p * uv.x + mainTex_ST.s, mainTex_ST.q * uv.y + mainTex_ST.t );
  #endif

  #include <uv2_vertex>
  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  float outlineTex = 1.0;

  #ifdef OUTLINE
    #ifdef USE_OUTLINEWIDTHTEXTURE
      outlineTex = texture2D( outlineWidthTexture, vUv ).r;
    #endif

    #ifdef OUTLINE_WIDTH_WORLD
      float worldNormalLength = length( transformedNormal );
      vec3 outlineOffset = 0.01 * outlineWidth * outlineTex * worldNormalLength * objectNormal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      vec3 clipNormal = ( projectionMatrix * modelViewMatrix * vec4( objectNormal, 0.0 ) ).xyz;
      vec2 projectedNormal = normalize( clipNormal.xy );
      projectedNormal *= min( gl_Position.w, outlineScaledMaxDistance );
      projectedNormal.x *= projectionMatrix[ 0 ].x / projectionMatrix[ 1 ].y;
      gl_Position.xy += 0.01 * outlineWidth * outlineTex * projectedNormal.xy;
    #endif

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`},function(x,s,v){v.r(s),s.default=`// #define PHONG

#ifdef BLENDMODE_CUTOUT
  uniform float cutoff;
#endif

uniform vec3 color;
uniform float colorAlpha;
uniform vec3 shadeColor;
#ifdef USE_SHADETEXTURE
  uniform sampler2D shadeTexture;
#endif

uniform float receiveShadowRate;
#ifdef USE_RECEIVESHADOWTEXTURE
  uniform sampler2D receiveShadowTexture;
#endif

uniform float shadingGradeRate;
#ifdef USE_SHADINGGRADETEXTURE
  uniform sampler2D shadingGradeTexture;
#endif

uniform float shadeShift;
uniform float shadeToony;
uniform float lightColorAttenuation;
uniform float indirectLightIntensity;

#ifdef USE_RIMTEXTURE
  uniform sampler2D rimTexture;
#endif
uniform vec3 rimColor;
uniform float rimLightingMix;
uniform float rimFresnelPower;
uniform float rimLift;

#ifdef USE_SPHEREADD
  uniform sampler2D sphereAdd;
#endif

uniform vec3 emissionColor;

uniform vec3 outlineColor;
uniform float outlineLightingMix;

#ifdef USE_UVANIMMASKTEXTURE
  uniform sampler2D uvAnimMaskTexture;
#endif

uniform float uvAnimOffsetX;
uniform float uvAnimOffsetY;
uniform float uvAnimTheta;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )
  varying vec2 vUv;
#endif

#include <uv2_pars_fragment>
#include <map_pars_fragment>
// #include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
// #include <envmap_pars_fragment>
// #include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

  uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && defined ( TANGENTSPACE_NORMALMAP )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

    // Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

    vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
    vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );

    float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

    vec3 S = ( q0 * st1.t - q1 * st0.t ) * scale;
    vec3 T = ( - q0 * st1.s + q1 * st0.s ) * scale;

    // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
    // TODO: Is this still required? Or shall I make a PR about it?

    if ( length( S ) == 0.0 || length( T ) == 0.0 ) {
      return surf_norm;
    }

    S = normalize( S );
    T = normalize( T );
    vec3 N = normalize( surf_norm );

    #ifdef DOUBLE_SIDED

      // Workaround for Adreno GPUs gl_FrontFacing bug. See #15850 and #10331

      bool frontFacing = dot( cross( S, T ), N ) > 0.0;

      mapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );

    #else

      mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

    #endif

    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * mapN );

  }

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == lighting stuff ===========================================================
float getLightIntensity(
  const in IncidentLight directLight,
  const in GeometricContext geometry,
  const in float shadow,
  const in float shadingGrade
) {
  float lightIntensity = dot( geometry.normal, directLight.direction );
  lightIntensity = 0.5 + 0.5 * lightIntensity;
  lightIntensity = lightIntensity * shadow;
  lightIntensity = lightIntensity * shadingGrade;
  lightIntensity = lightIntensity * 2.0 - 1.0;
  return shadeToony == 1.0
    ? step( shadeShift, lightIntensity )
    : smoothstep( shadeShift, shadeShift + ( 1.0 - shadeToony ), lightIntensity );
}

vec3 getLighting( const in vec3 lightColor ) {
  vec3 lighting = lightColor;
  lighting = mix(
    lighting,
    vec3( max( 0.001, max( lighting.x, max( lighting.y, lighting.z ) ) ) ),
    lightColorAttenuation
  );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    lighting *= PI;
  #endif

  return lighting;
}

vec3 getDiffuse(
  const in vec3 lit,
  const in vec3 shade,
  const in float lightIntensity,
  const in vec3 lighting
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Diffuse_Lambert( lightIntensity * lighting ) );
  #endif

  return lighting * BRDF_Diffuse_Lambert( mix( shade, lit, lightIntensity ) );
}

vec3 calcDirectDiffuse(
  const in vec2 uv,
  const in vec3 lit,
  const in vec3 shade,
  in GeometricContext geometry,
  inout ReflectedLight reflectedLight
) {
  IncidentLight directLight;
  vec3 lightingSum = vec3( 0.0 );

  float shadingGrade = 1.0;
  #ifdef USE_SHADINGGRADETEXTURE
    shadingGrade = 1.0 - shadingGradeRate * ( 1.0 - texture2D( shadingGradeTexture, uv ).r );
  #endif

  float receiveShadow = receiveShadowRate;
  #ifdef USE_RECEIVESHADOWTEXTURE
    receiveShadow *= texture2D( receiveShadowTexture, uv ).a;
  #endif

  #if ( NUM_POINT_LIGHTS > 0 )
    PointLight pointLight;

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
      pointLight = pointLights[ i ];
      getPointDirectLightIrradiance( pointLight, geometry, directLight );

      float atten = 1.0;
      #ifdef USE_SHADOWMAP
        atten = all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
      #endif

      float shadow = 1.0 - receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );
      float lightIntensity = getLightIntensity( directLight, geometry, shadow, shadingGrade );
      vec3 lighting = getLighting( directLight.color );
      reflectedLight.directDiffuse += getDiffuse( lit, shade, lightIntensity, lighting );
      lightingSum += lighting;
    }
    #pragma unroll_loop_end
  #endif

  #if ( NUM_SPOT_LIGHTS > 0 )
    SpotLight spotLight;

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
      spotLight = spotLights[ i ];
      getSpotDirectLightIrradiance( spotLight, geometry, directLight );

      float atten = 1.0;
      #ifdef USE_SHADOWMAP
        atten = all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      float shadow = 1.0 - receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );
      float lightIntensity = getLightIntensity( directLight, geometry, shadow, shadingGrade );
      vec3 lighting = getLighting( directLight.color );
      reflectedLight.directDiffuse += getDiffuse( lit, shade, lightIntensity, lighting );
      lightingSum += lighting;
    }
    #pragma unroll_loop_end
  #endif

  #if ( NUM_DIR_LIGHTS > 0 )
    DirectionalLight directionalLight;

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
      directionalLight = directionalLights[ i ];
      getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );

      float atten = 1.0;
      #ifdef USE_SHADOWMAP
        atten = all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif

      float shadow = 1.0 - receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );
      float lightIntensity = getLightIntensity( directLight, geometry, shadow, shadingGrade );
      vec3 lighting = getLighting( directLight.color );
      reflectedLight.directDiffuse += getDiffuse( lit, shade, lightIntensity, lighting );
      lightingSum += lighting;
    }
    #pragma unroll_loop_end
  #endif

  return lightingSum;
}

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMMASKTEXTURE
      uvAnimMask = texture2D( uvAnimMaskTexture, uv ).x;
    #endif

    uv = uv + vec2( uvAnimOffsetX, uvAnimOffsetY ) * uvAnimMask;
    float uvRotCos = cos( uvAnimTheta * uvAnimMask );
    float uvRotSin = sin( uvAnimTheta * uvAnimMask );
    uv = mat2( uvRotCos, uvRotSin, -uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( color, colorAlpha );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissionColor;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    diffuseColor *= mapTexelToLinear( texture2D( map, uv ) );
  #endif

  #include <color_fragment>
  // #include <alphamap_fragment>

  // -- MToon: alpha -----------------------------------------------------------
  // #include <alphatest_fragment>
  #ifdef BLENDMODE_CUTOUT
    if ( diffuseColor.a <= cutoff ) { discard; }
    diffuseColor.a = 1.0;
  #endif

  #ifdef BLENDMODE_OPAQUE
    diffuseColor.a = 1.0;
  #endif

  #if defined( OUTLINE ) && defined( OUTLINE_COLOR_FIXED ) // omitting DebugMode
    gl_FragColor = vec4( outlineColor, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // #include <specularmap_fragment>
  #include <normal_fragment_begin>

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  #ifdef OBJECTSPACE_NORMALMAP

    normal = texture2D( normalMap, uv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

    #endif

    normal = normalize( normalMatrix * normal );

  #elif defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, uv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    #ifdef USE_TANGENT

      normal = normalize( vTBN * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    totalEmissiveRadiance *= emissiveMapTexelToLinear( texture2D( emissiveMap, uv ) ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  // #include <lights_fragment_begin>
  vec3 lit = diffuseColor.rgb;
  vec3 shade = shadeColor;
  #ifdef USE_SHADETEXTURE
    shade *= shadeTextureTexelToLinear( texture2D( shadeTexture, uv ) ).rgb;
  #endif

  GeometricContext geometry;

  geometry.position = - vViewPosition;
  geometry.normal = normal;
  geometry.viewDir = normalize( vViewPosition );

  vec3 lighting = calcDirectDiffuse( uv, diffuseColor.rgb, shade, geometry, reflectedLight );

  vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
  #if ( NUM_HEMI_LIGHTS > 0 )
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
      irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
    }
    #pragma unroll_loop_end
  #endif

  // #include <lights_fragment_maps>
  #ifdef USE_LIGHTMAP
    vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).rgb * lightMapIntensity;
    #ifndef PHYSICALLY_CORRECT_LIGHTS
      lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage
    #endif
    irradiance += lightMapIrradiance;
  #endif

  // #include <lights_fragment_end>
  reflectedLight.indirectDiffuse += indirectLightIntensity * irradiance * BRDF_Diffuse_Lambert( lit );

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #if defined( OUTLINE ) && defined( OUTLINE_COLOR_MIXED )
    gl_FragColor = vec4(
      outlineColor.rgb * mix( vec3( 1.0 ), col, outlineLightingMix ),
      diffuseColor.a
    );
    postCorrection();
    return;
  #endif

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: parametric rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );
  vec3 rimMix = mix(vec3(1.0), lighting + indirectLightIntensity * irradiance, rimLightingMix);
  vec3 rim = rimColor * pow( saturate( 1.0 - dot( viewDir, normal ) + rimLift ), rimFresnelPower );
  #ifdef USE_RIMTEXTURE
    rim *= rimTextureTexelToLinear( texture2D( rimTexture, uv ) ).rgb;
  #endif
  col += rim;

  // -- MToon: additive matcap -------------------------------------------------
  #ifdef USE_SPHEREADD
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      vec3 matcap = sphereAddTexelToLinear( texture2D( sphereAdd, sphereUv ) ).xyz;
      col += matcap;
    }
  #endif

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}`},function(x,s,v){var h=this&&this.__awaiter||function(l,o,n,r){return new(n||(n=Promise))(function(e,t){function a(u){try{i(r.next(u))}catch(g){t(g)}}function d(u){try{i(r.throw(u))}catch(g){t(g)}}function i(u){var g;u.done?e(u.value):(g=u.value,g instanceof n?g:new n(function(y){y(g)})).then(a,d)}i((r=r.apply(l,o||[])).next())})},c=this&&this.__generator||function(l,o){var n,r,e,t,a={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return t={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(t[Symbol.iterator]=function(){return this}),t;function d(i){return function(u){return function(g){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(e=2&g[0]?r.return:g[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,g[1])).done)return e;switch(r=0,e&&(g=[2&g[0],e.value]),g[0]){case 0:case 1:e=g;break;case 4:return a.label++,{value:g[1],done:!1};case 5:a.label++,r=g[1],g=[0];continue;case 7:g=a.ops.pop(),a.trys.pop();continue;default:if(e=a.trys,!((e=e.length>0&&e[e.length-1])||g[0]!==6&&g[0]!==2)){a=0;continue}if(g[0]===3&&(!e||g[1]>e[0]&&g[1]<e[3])){a.label=g[1];break}if(g[0]===6&&a.label<e[1]){a.label=e[1],e=g;break}if(e&&a.label<e[2]){a.label=e[2],a.ops.push(g);break}e[2]&&a.ops.pop(),a.trys.pop();continue}g=o.call(l,a)}catch(y){g=[6,y],r=0}finally{n=e=0}if(5&g[0])throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}([i,u])}}},f=this&&this.__spreadArrays||function(){for(var l=0,o=0,n=arguments.length;o<n;o++)l+=arguments[o].length;var r=Array(l),e=0;for(o=0;o<n;o++)for(var t=arguments[o],a=0,d=t.length;a<d;a++,e++)r[e]=t[a];return r};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMMaterialImporter=void 0;var _=v(0),p=v(24),m=v(25),M=function(){function l(o){o===void 0&&(o={}),this._encoding=o.encoding||_.LinearEncoding,this._encoding!==_.LinearEncoding&&this._encoding!==_.sRGBEncoding&&console.warn("The specified color encoding might not work properly with VRMMaterialImporter. You might want to use THREE.sRGBEncoding instead."),this._requestEnvMap=o.requestEnvMap}return l.prototype.convertGLTFMaterials=function(o){var n;return h(this,void 0,Promise,function(){var r,e,t,a,d,i=this;return c(this,function(u){switch(u.label){case 0:return(r=(n=o.parser.json.extensions)===null||n===void 0?void 0:n.VRM)&&(e=r.materialProperties)?[4,o.parser.getDependencies("mesh")]:[2,null];case 1:return t=u.sent(),a={},d=[],[4,Promise.all(t.map(function(g,y){return h(i,void 0,void 0,function(){var b,S,T=this;return c(this,function(E){switch(E.label){case 0:return b=o.parser.json.meshes[y],S=g.type==="Group"?g.children:[g],[4,Promise.all(S.map(function(R,P){return h(T,void 0,void 0,function(){var w,O,L,A,U,V;return c(this,function(D){switch(D.label){case 0:return(w=b.primitives[P])?(O=R.geometry,L=O.index?O.index.count:O.attributes.position.count/3,Array.isArray(R.material)||(R.material=[R.material],O.addGroup(0,L,0)),A=w.material,(U=e[A])||(console.warn("VRMMaterialImporter: There are no material definition for material #"+A+" on VRM extension."),U={shader:"VRM_USE_GLTFSHADER"}),a[A]?(V=a[A],[3,3]):[3,1]):[2];case 1:return[4,this.createVRMMaterials(R.material[0],U,o)];case 2:V=D.sent(),a[A]=V,d.push(V.surface),V.outline&&d.push(V.outline),D.label=3;case 3:return R.material[0]=V.surface,this._requestEnvMap&&V.surface.isMeshStandardMaterial&&this._requestEnvMap().then(function(I){V.surface.envMap=I,V.surface.needsUpdate=!0}),R.renderOrder=U.renderQueue||2e3,V.outline&&(R.material[1]=V.outline,O.addGroup(0,L,1)),[2]}})})}))];case 1:return E.sent(),[2]}})})}))];case 2:return u.sent(),[2,d]}})})},l.prototype.createVRMMaterials=function(o,n,r){return h(this,void 0,Promise,function(){var e,t,a,d,i=this;return c(this,function(u){switch(u.label){case 0:return n.shader!=="VRM/MToon"?[3,2]:[4,this._extractMaterialProperties(o,n,r)];case 1:return a=u.sent(),["srcBlend","dstBlend","isFirstSetup"].forEach(function(g){a[g]!==void 0&&delete a[g]}),["mainTex","shadeTexture","emissionMap","sphereAdd","rimTexture"].forEach(function(g){a[g]!==void 0&&(a[g].encoding=i._encoding)}),a.encoding=this._encoding,e=new p.MToonMaterial(a),a.outlineWidthMode!==p.MToonMaterialOutlineWidthMode.None&&(a.isOutline=!0,t=new p.MToonMaterial(a)),[3,11];case 2:return n.shader!=="VRM/UnlitTexture"?[3,4]:[4,this._extractMaterialProperties(o,n,r)];case 3:return(d=u.sent()).renderType=m.VRMUnlitMaterialRenderType.Opaque,e=new m.VRMUnlitMaterial(d),[3,11];case 4:return n.shader!=="VRM/UnlitCutout"?[3,6]:[4,this._extractMaterialProperties(o,n,r)];case 5:return(d=u.sent()).renderType=m.VRMUnlitMaterialRenderType.Cutout,e=new m.VRMUnlitMaterial(d),[3,11];case 6:return n.shader!=="VRM/UnlitTransparent"?[3,8]:[4,this._extractMaterialProperties(o,n,r)];case 7:return(d=u.sent()).renderType=m.VRMUnlitMaterialRenderType.Transparent,e=new m.VRMUnlitMaterial(d),[3,11];case 8:return n.shader!=="VRM/UnlitTransparentZWrite"?[3,10]:[4,this._extractMaterialProperties(o,n,r)];case 9:return(d=u.sent()).renderType=m.VRMUnlitMaterialRenderType.TransparentWithZWrite,e=new m.VRMUnlitMaterial(d),[3,11];case 10:n.shader!=="VRM_USE_GLTFSHADER"&&console.warn('Unknown shader detected: "'+n.shader+'"'),e=this._convertGLTFMaterial(o.clone()),u.label=11;case 11:return e.name=o.name,e.userData=JSON.parse(JSON.stringify(o.userData)),e.userData.vrmMaterialProperties=n,t&&(t.name=o.name+" (Outline)",t.userData=JSON.parse(JSON.stringify(o.userData)),t.userData.vrmMaterialProperties=n),[2,{surface:e,outline:t}]}})})},l.prototype._renameMaterialProperty=function(o){return o[0]!=="_"?(console.warn('VRMMaterials: Given property name "'+o+'" might be invalid'),o):(o=o.substring(1),/[A-Z]/.test(o[0])?o[0].toLowerCase()+o.substring(1):(console.warn('VRMMaterials: Given property name "'+o+'" might be invalid'),o))},l.prototype._convertGLTFMaterial=function(o){var n;return o.isMeshStandardMaterial&&((n=o).map&&(n.map.encoding=this._encoding),n.emissiveMap&&(n.emissiveMap.encoding=this._encoding),this._encoding===_.LinearEncoding&&(n.color.convertLinearToSRGB(),n.emissive.convertLinearToSRGB())),o.isMeshBasicMaterial&&((n=o).map&&(n.map.encoding=this._encoding),this._encoding===_.LinearEncoding&&n.color.convertLinearToSRGB()),o},l.prototype._extractMaterialProperties=function(o,n,r){var e=[],t={};if(n.textureProperties)for(var a=function(w){var O=d._renameMaterialProperty(w),L=n.textureProperties[w];e.push(r.parser.getDependency("texture",L).then(function(A){t[O]=A}))},d=this,i=0,u=Object.keys(n.textureProperties);i<u.length;i++)a(b=u[i]);if(n.floatProperties)for(var g=0,y=Object.keys(n.floatProperties);g<y.length;g++){var b=y[g],S=this._renameMaterialProperty(b);t[S]=n.floatProperties[b]}if(n.vectorProperties)for(var T=function(w){var O,L=E._renameMaterialProperty(w);["_MainTex","_ShadeTexture","_BumpMap","_ReceiveShadowTexture","_ShadingGradeTexture","_RimTexture","_SphereAdd","_EmissionMap","_OutlineWidthTexture","_UvAnimMaskTexture"].some(function(A){return w===A})&&(L+="_ST"),t[L]=new((O=_.Vector4).bind.apply(O,f([void 0],n.vectorProperties[w])))},E=this,R=0,P=Object.keys(n.vectorProperties);R<P.length;R++)T(b=P[R]);return n.keywordMap._ALPHATEST_ON&&t.blendMode===p.MToonMaterialRenderMode.Opaque&&(t.blendMode=p.MToonMaterialRenderMode.Cutout),t.skinning=o.skinning||!1,t.morphTargets=o.morphTargets||!1,t.morphNormals=o.morphNormals||!1,Promise.all(e).then(function(){return t})},l}();s.VRMMaterialImporter=M},function(x,s,v){v.r(s),s.default=`#include <common>

// #include <uv_pars_vertex>
#ifdef USE_MAP
  varying vec2 vUv;
  uniform vec4 mainTex_ST;
#endif

#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

  // #include <uv_vertex>
  #ifdef USE_MAP
    vUv = vec2( mainTex_ST.p * uv.x + mainTex_ST.s, mainTex_ST.q * uv.y + mainTex_ST.t );
  #endif

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

}`},function(x,s,v){v.r(s),s.default=`#ifdef RENDERTYPE_CUTOUT
  uniform float cutoff;
#endif

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
// #include <alphamap_pars_fragment>
// #include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
// #include <envmap_pars_fragment>
#include <fog_pars_fragment>
// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4( 1.0 );

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    diffuseColor *= mapTexelToLinear( texture2D( map, vUv ) );
  #endif

  #include <color_fragment>
  // #include <alphamap_fragment>

  // MToon: alpha
  // #include <alphatest_fragment>
  #ifdef RENDERTYPE_CUTOUT
    if ( diffuseColor.a <= cutoff ) { discard; }
    diffuseColor.a = 1.0;
  #endif

  #ifdef RENDERTYPE_OPAQUE
    diffuseColor.a = 1.0;
  #endif

  // #include <specularmap_fragment>

  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

  // accumulation (baked indirect lighting only)
  #ifdef USE_LIGHTMAP
    reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
  #else
    reflectedLight.indirectDiffuse += vec3( 1.0 );
  #endif

  // modulation
  // #include <aomap_fragment>

  reflectedLight.indirectDiffuse *= diffuseColor.rgb;
  vec3 outgoingLight = reflectedLight.indirectDiffuse;

  // #include <envmap_fragment>

  gl_FragColor = vec4( outgoingLight, diffuseColor.a );

  #include <premultiplied_alpha_fragment>
  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
}`},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.Matrix4InverseCache=void 0;var h=v(0),c=v(28),f=function(){function _(p){var m=this;this._inverseCache=new h.Matrix4,this._shouldUpdateInverse=!0,this.matrix=p;var M={set:function(l,o,n){return m._shouldUpdateInverse=!0,l[o]=n,!0}};this._originalElements=p.elements,p.elements=new Proxy(p.elements,M)}return Object.defineProperty(_.prototype,"inverse",{get:function(){return this._shouldUpdateInverse&&(c.mat4InvertCompat(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache},enumerable:!1,configurable:!0}),_.prototype.revert=function(){this.matrix.elements=this._originalElements},_}();s.Matrix4InverseCache=f},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMUtils=void 0;var h=v(49),c=v(50),f=function(){function _(){}return _.extractThumbnailBlob=h.extractThumbnailBlob,_.removeUnnecessaryJoints=c.removeUnnecessaryJoints,_}();s.VRMUtils=f},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.extractThumbnailBlob=void 0;var h=v(0),c=new h.Vector2,f=new h.OrthographicCamera(-1,1,-1,1,-1,1),_=new h.Mesh(new h.PlaneBufferGeometry(2,2),new h.MeshBasicMaterial({color:16777215,side:h.DoubleSide})),p=new h.Scene;p.add(_),s.extractThumbnailBlob=function(m,M,l){var o;l===void 0&&(l=512);var n=(o=M.meta)===null||o===void 0?void 0:o.texture;if(!n)throw new Error("extractThumbnailBlob: This VRM does not have a thumbnail");var r=m.getContext().canvas;m.getSize(c);var e=c.x,t=c.y;return m.setSize(l,l,!1),_.material.map=n,m.render(p,f),_.material.map=null,r instanceof OffscreenCanvas?r.convertToBlob().finally(function(){m.setSize(e,t,!1)}):new Promise(function(a,d){r.toBlob(function(i){m.setSize(e,t,!1),i==null?d("extractThumbnailBlob: Failed to create a blob"):a(i)})})}},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.removeUnnecessaryJoints=void 0;var h=v(0);s.removeUnnecessaryJoints=function(c){var f=new Map;c.traverse(function(_){if(_.type==="SkinnedMesh"){var p=_,m=p.geometry.getAttribute("skinIndex"),M=f.get(m);if(!M){for(var l=[],o=[],n={},r=m.array,e=0;e<r.length;e++){var t=r[e];n[t]===void 0&&(n[t]=l.length,l.push(p.skeleton.bones[t]),o.push(p.skeleton.boneInverses[t])),r[e]=n[t]}m.copyArray(r),m.needsUpdate=!0,M=new h.Skeleton(l,o),f.set(m,M)}p.bind(M,new h.Matrix4)}})}},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(52),s),c(v(4),s),c(v(31),s),c(v(30),s)},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){var h,c=this&&this.__extends||(h=function(n,r){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(n,r)},function(n,r){function e(){this.constructor=n}h(n,r),n.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}),f=this&&this.__awaiter||function(n,r,e,t){return new(e||(e=Promise))(function(a,d){function i(y){try{g(t.next(y))}catch(b){d(b)}}function u(y){try{g(t.throw(y))}catch(b){d(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof e?b:new e(function(S){S(b)})).then(i,u)}g((t=t.apply(n,r||[])).next())})},_=this&&this.__generator||function(n,r){var e,t,a,d,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return d={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function u(g){return function(y){return function(b){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(a=2&b[0]?t.return:b[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,b[1])).done)return a;switch(t=0,a&&(b=[2&b[0],a.value]),b[0]){case 0:case 1:a=b;break;case 4:return i.label++,{value:b[1],done:!1};case 5:i.label++,t=b[1],b=[0];continue;case 7:b=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!((a=a.length>0&&a[a.length-1])||b[0]!==6&&b[0]!==2)){i=0;continue}if(b[0]===3&&(!a||b[1]>a[0]&&b[1]<a[3])){i.label=b[1];break}if(b[0]===6&&i.label<a[1]){i.label=a[1],a=b;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(b);break}a[2]&&i.ops.pop(),i.trys.pop();continue}b=r.call(n,i)}catch(S){b=[6,S],t=0}finally{e=a=0}if(5&b[0])throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}([g,y])}}};Object.defineProperty(s,"__esModule",{value:!0}),s.VRMImporterDebug=void 0;var p=v(6),m=v(4),M=v(54),l=v(30),o=function(n){function r(e){return e===void 0&&(e={}),e.lookAtImporter=e.lookAtImporter||new M.VRMLookAtImporterDebug,e.springBoneImporter=e.springBoneImporter||new l.VRMSpringBoneImporterDebug,n.call(this,e)||this}return c(r,n),r.prototype.import=function(e,t){return t===void 0&&(t={}),f(this,void 0,Promise,function(){var a,d,i,u,g,y,b,S,T,E;return _(this,function(R){switch(R.label){case 0:if(e.parser.json.extensions===void 0||e.parser.json.extensions.VRM===void 0)throw new Error("Could not find VRM extension on the GLTF");return(a=e.scene).updateMatrixWorld(!1),a.traverse(function(P){P.isMesh&&(P.frustumCulled=!1)}),[4,this._metaImporter.import(e)];case 1:return d=R.sent()||void 0,[4,this._materialImporter.convertGLTFMaterials(e)];case 2:return i=R.sent()||void 0,[4,this._humanoidImporter.import(e)];case 3:return(u=R.sent()||void 0)?[4,this._firstPersonImporter.import(e,u)]:[3,5];case 4:return y=R.sent()||void 0,[3,6];case 5:y=void 0,R.label=6;case 6:return g=y,[4,this._blendShapeImporter.import(e)];case 7:return b=R.sent()||void 0,g&&b&&u?[4,this._lookAtImporter.import(e,g,b,u)]:[3,9];case 8:return T=R.sent()||void 0,[3,10];case 9:T=void 0,R.label=10;case 10:return(S=T).setupHelper&&S.setupHelper(a,t),[4,this._springBoneImporter.import(e)];case 11:return(E=R.sent()||void 0).setupHelper&&E.setupHelper(a,t),[2,new m.VRMDebug({scene:e.scene,meta:d,materials:i,humanoid:u,firstPerson:g,blendShapeProxy:b,lookAt:S,springBoneManager:E},t)]}})})},r}(p.VRMImporter);s.VRMImporterDebug=o},function(x,s,v){var h,c=this&&this.__extends||(h=function(m,M){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,o){l.__proto__=o}||function(l,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(l[n]=o[n])})(m,M)},function(m,M){function l(){this.constructor=m}h(m,M),m.prototype=M===null?Object.create(M):(l.prototype=M.prototype,new l)});Object.defineProperty(s,"__esModule",{value:!0}),s.VRMLookAtImporterDebug=void 0;var f=v(7),_=v(55),p=function(m){function M(){return m!==null&&m.apply(this,arguments)||this}return c(M,m),M.prototype.import=function(l,o,n,r){var e,t=(e=l.parser.json.extensions)===null||e===void 0?void 0:e.VRM;if(!t)return null;var a=t.firstPerson;if(!a)return null;var d=this._importApplyer(a,n,r);return new _.VRMLookAtHeadDebug(o,d||void 0)},M}(f.VRMLookAtImporter);s.VRMLookAtImporterDebug=p},function(x,s,v){var h,c=this&&this.__extends||(h=function(M,l){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])})(M,l)},function(M,l){function o(){this.constructor=M}h(M,l),M.prototype=l===null?Object.create(l):(o.prototype=l.prototype,new o)});Object.defineProperty(s,"__esModule",{value:!0}),s.VRMLookAtHeadDebug=void 0;var f=v(0),_=v(3),p=new f.Vector3,m=function(M){function l(){return M!==null&&M.apply(this,arguments)||this}return c(l,M),l.prototype.setupHelper=function(o,n){n.disableFaceDirectionHelper||(this._faceDirectionHelper=new f.ArrowHelper(new f.Vector3(0,0,-1),new f.Vector3(0,0,0),.5,16711935),o.add(this._faceDirectionHelper))},l.prototype.update=function(o){M.prototype.update.call(this,o),this._faceDirectionHelper&&(this.firstPerson.getFirstPersonWorldPosition(this._faceDirectionHelper.position),this._faceDirectionHelper.setDirection(this.getLookAtWorldDirection(p)))},l}(_.VRMLookAtHead);s.VRMLookAtHeadDebug=m},function(x,s,v){var h,c=this&&this.__extends||(h=function(l,o){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])})(l,o)},function(l,o){function n(){this.constructor=l}h(l,o),l.prototype=o===null?Object.create(o):(n.prototype=o.prototype,new n)});Object.defineProperty(s,"__esModule",{value:!0}),s.VRMSpringBoneManagerDebug=void 0;var f=v(0),_=v(10),p=v(4),m=new f.MeshBasicMaterial({color:16711935,wireframe:!0,transparent:!0,depthTest:!1}),M=function(l){function o(){return l!==null&&l.apply(this,arguments)||this}return c(o,l),o.prototype.setupHelper=function(n,r){r.disableSpringBoneHelper||(this.springBoneGroupList.forEach(function(e){e.forEach(function(t){if(t.getGizmo){var a=t.getGizmo();n.add(a)}})}),this.colliderGroups.forEach(function(e){e.colliders.forEach(function(t){t.material=m,t.renderOrder=p.VRM_GIZMO_RENDER_ORDER})}))},o}(_.VRMSpringBoneManager);s.VRMSpringBoneManagerDebug=M},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(17),s),c(v(60),s),c(v(61),s),c(v(62),s),c(v(18),s),c(v(16),s)},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){var h=this&&this.__createBinding||(Object.create?function(f,_,p,m){m===void 0&&(m=p),Object.defineProperty(f,m,{enumerable:!0,get:function(){return _[p]}})}:function(f,_,p,m){m===void 0&&(m=p),f[m]=_[p]}),c=this&&this.__exportStar||function(f,_){for(var p in f)p==="default"||Object.prototype.hasOwnProperty.call(_,p)||h(_,f,p)};Object.defineProperty(s,"__esModule",{value:!0}),c(v(20),s),c(v(8),s),c(v(21),s),c(v(22),s),c(v(3),s),c(v(7),s)},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0}),s.VRMMetaImporterOptions=s.VRMMetaImporter=s.VRMMeta=void 0;var h=v(65);Object.defineProperty(s,"VRMMeta",{enumerable:!0,get:function(){return h.VRMMeta}});var c=v(26);Object.defineProperty(s,"VRMMetaImporter",{enumerable:!0,get:function(){return c.VRMMetaImporter}});var f=v(66);Object.defineProperty(s,"VRMMetaImporterOptions",{enumerable:!0,get:function(){return f.VRMMetaImporterOptions}})},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})},function(x,s,v){Object.defineProperty(s,"__esModule",{value:!0})}])})}),W=k(H);export default W;
