import{u as e,r as t,G as a,t as o,V as n,c as l,a as r,b as u,i,d as s,e as c,C as p,m as h,f as m}from"./vendor.ec9ee3af.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const r=new URL(e,o);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const u=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(u),onerror(){l(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[r]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/openvtuber/assets/");const V={aValue:0,angryValue:0,blinkLeftValue:0,blinkRightValue:0,eValue:0,funValue:0,headRotationX:0,headRotationY:0,headRotationZ:0,iValue:0,jawRotationX:0,jawRotationY:0,joyValue:0,lookAtX:0,lookAtY:0,lookAtZ:0,neckRotationX:0,neckRotationY:0,neutralValue:0,oValue:0,sorrowValue:0,upperChestX:0,upperChestY:0,upperChestZ:0,uValue:0},d=l((e=>({vrmState:V,updateVrmState:t=>e({vrmState:t})}))),b=({vrm:e})=>(r(((t,a)=>{const l=d.getState().vrmState;((e,t,a)=>{if(e.humanoid){const a=e.humanoid.getBoneNode(o.VRMSchema.HumanoidBoneName.Chest),n=e.humanoid.getBoneNode(o.VRMSchema.HumanoidBoneName.UpperChest),l=e.humanoid.getBoneNode(o.VRMSchema.HumanoidBoneName.LeftShoulder),r=e.humanoid.getBoneNode(o.VRMSchema.HumanoidBoneName.RightShoulder),u=e.humanoid.getBoneNode(o.VRMSchema.HumanoidBoneName.Neck),i=e.humanoid.getBoneNode(o.VRMSchema.HumanoidBoneName.Head),s=e.humanoid.getBoneNode(o.VRMSchema.HumanoidBoneName.Jaw);i&&(i.rotation.x=t.headRotationX,i.rotation.y=t.headRotationY,i.rotation.z=t.headRotationZ),s&&(s.rotation.x=t.jawRotationX,s.rotation.y=t.jawRotationY),u&&(u.rotation.x=t.neckRotationX,u.rotation.y=t.neckRotationY),l&&(l.rotation.y=0,l.rotation.x=0,l.rotation.z=0),r&&(r.rotation.y=0,r.rotation.x=0,r.rotation.z=0),a&&(a.rotation.x=0,a.rotation.y=0),n&&(n.rotation.x=t.upperChestX,n.rotation.y=t.upperChestY,n.rotation.z=t.upperChestZ)}e.blendShapeProxy&&(e.blendShapeProxy.setValue("blink_l",t.blinkLeftValue),e.blendShapeProxy.setValue("blink_r",t.blinkRightValue),e.blendShapeProxy.setValue("a",t.aValue),e.blendShapeProxy.setValue("e",t.eValue),e.blendShapeProxy.setValue("i",t.iValue),e.blendShapeProxy.setValue("o",t.oValue),e.blendShapeProxy.setValue("u",t.uValue),e.blendShapeProxy.setValue("angry",t.angryValue),e.blendShapeProxy.setValue("fun",t.funValue),e.blendShapeProxy.setValue("joy",t.joyValue),e.blendShapeProxy.setValue("neutral",t.neutralValue),e.blendShapeProxy.setValue("sorrow",t.sorrowValue)),e.lookAt&&e.lookAt.lookAt(new n(t.lookAtX,t.lookAtY,t.lookAtZ)),e.update(a)})(e,l,a)})),t.createElement("primitive",{object:e.scene})),y=({count:e=5e3})=>{const a=t.useMemo((()=>{const t=[];for(let a=0;a<e;a++)t.push((50+1e3*Math.random())*(Math.round(Math.random())?-1:1)),t.push((50+1e3*Math.random())*(Math.round(Math.random())?-1:1)),t.push((50+1e3*Math.random())*(Math.round(Math.random())?-1:1));return new Float32Array(t)}),[e]);return t.createElement("points",null,t.createElement("bufferGeometry",{attach:"geometry"},t.createElement("bufferAttribute",{attachObject:["attributes","position"],count:a.length/3,array:a,itemSize:3})),t.createElement("pointsMaterial",{attach:"material",size:2,sizeAttenuation:!0,color:"white",transparent:!0,opacity:.8,fog:!1}))},k=t.forwardRef(((n,l)=>{const{aspect:i,setDefaultCamera:s}=e(),{vrm:c,loadVrm:p}=(()=>{const{camera:n}=e(),{current:l}=t.useRef(new a),[r,u]=t.useState();return t.useEffect((()=>{r&&r.lookAt&&(r.lookAt.target=n)}),[n,r]),{vrm:r,loadVrm:e=>{l.load(e,(async e=>{const t=await o.VRM.from(e);t.scene.rotation.y=Math.PI,u(t)}),(e=>console.log("Loading model...",e.loaded/e.total*100,"%")),(e=>console.error(e)))}}})();t.useImperativeHandle(l,(()=>({handleFileChange:e=>{const t=e.target;if(t.files&&t.files.length){const e=URL.createObjectURL(t.files[0]);p(e)}}})));const h=u();return t.useLayoutEffect((()=>{s(h.current)}),[h,s]),r((()=>h.current.updateMatrixWorld())),t.createElement(t.Fragment,null,t.createElement("perspectiveCamera",{ref:h,aspect:i,focus:10,fov:50,position:[0,1.25,1],onUpdate:e=>e.updateProjectionMatrix()}),t.createElement("ambientLight",{intensity:.75}),t.createElement("pointLight",{intensity:.25,position:[100,100,10]}),t.createElement(y,null),t.createElement(t.Suspense,{fallback:null},c&&c.scene&&t.createElement(b,{vrm:c})))}));k.displayName="VrmViewer";const f=({type:e,accept:a,onChange:o,className:n})=>t.createElement(t.Fragment,null,t.createElement("input",{className:n,type:e,accept:a,onChange:o}));const R=({vrmRef:e})=>t.createElement("div",{className:"navbar"},t.createElement("div",null),t.createElement(f,{className:"navbar__upload",type:"file",accept:".vrm",onChange:t=>{var a;null==(a=e.current)||a.handleFileChange(t)}}));const w={en:{translation:{rightbar:{background:"Background",design:"Design",settings:"Settings"}}}};i.use(s).init({lng:"en",resources:w});const g=({tab:e,setTab:a})=>{const o="rightbar__switch__text-selected",{t:n}=c();return t.createElement("div",{className:"rightbar__switch"},t.createElement("div",{className:`rightbar__switch__text ${"Design"===e?o:""}`,onClick:()=>a("Design")},n("rightbar.design")),t.createElement("div",{className:`rightbar__switch__text ${"Settings"===e?o:""}`,onClick:()=>a("Settings")},n("rightbar.settings")))},j=()=>t.createElement(t.Fragment,null,t.createElement("svg",{className:"svg",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M8 10c1.105 0 2-.895 2-2 0-1.105-.895-2-2-2-1.104 0-2 .895-2 2 0 1.105.896 2 2 2z",fillRule:"nonzero",fillOpacity:"1",fill:"#000",stroke:"none"}),t.createElement("path",{d:"M8 4c2.878 0 5.378 1.621 6.635 4-1.257 2.379-3.757 4-6.635 4-2.878 0-5.377-1.621-6.635-4C2.623 5.621 5.122 4 8 4zm0 7c-2.3 0-4.322-1.194-5.478-3C3.678 6.194 5.7 5 8 5c2.3 0 4.322 1.194 5.479 3C12.322 9.806 10.3 11 8 11z",fillRule:"evenodd",fillOpacity:"1",fill:"#000",stroke:"none"})));const O=()=>t.createElement("div",{className:"background-picker"},t.createElement("div",{className:"background-picker__left-container"},t.createElement("div",{className:"background-picker__box-container"},t.createElement("div",{className:"background-picker__box"},t.createElement("div",{className:"background-picker__checkered-background"}))),t.createElement("input",{className:"background-picker__text-input",spellCheck:"false",autoComplete:"off"}),t.createElement("label",null,t.createElement("input",{className:"background-picker__alpha-input",spellCheck:"false",autoComplete:"off"}))),t.createElement("div",{className:"background-picker__icon-container"},t.createElement("span",{className:"background-picker__svg-container"},t.createElement(j,null))));const X=({name:e,children:a})=>t.createElement("div",{className:"rightbar-section"},t.createElement("div",{className:"rightbar-section__title"},e),a);const Y=({label:e,type:a})=>{const[o,n]=t.useState(""),[l,r]=t.useState(""),[u,i]=t.useState(!1),s=t.useRef(null),c=e=>{"number"===a&&0===e.button&&i(!0)},p=e=>{"number"===a&&0===e.button&&u&&i(!1)},h=e=>{if("number"===a&&u){const t=1,a=e.movementX,u=Math.round(a*t);r((parseInt(l)+u).toString()),n((parseInt(o)+u).toString())}};return t.useEffect((()=>{const e=s.current;return null==e||e.addEventListener("mousedown",c),window.addEventListener("mouseup",p),window.addEventListener("mousemove",h),()=>{null==e||e.removeEventListener("mousedown",c),window.removeEventListener("mouseup",p),window.removeEventListener("mousemove",h)}})),t.createElement("label",{className:"rightbar-kv-field "+("number"===a?"rightbar-kv-field--number":""),ref:s},t.createElement("span",{className:"rightbar-kv-field__key"},e),t.createElement("input",{className:"rightbar-kv-field__value",spellCheck:"false",autoComplete:"new-password",value:l,onChange:e=>{r(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(n(l),document.activeElement.blur()),"Escape"===e.key&&(r(o),document.activeElement.blur())},onBlur:()=>{n(l)},type:a}))};const P=({children:e})=>t.createElement("div",{className:"right-bar-grid-container"},e),C=()=>{const[e,a]=t.useState("Design"),{t:o}=c();return t.createElement("div",{className:"rightbar"},t.createElement(g,{tab:e,setTab:a}),"Design"===e&&t.createElement(X,{name:o("rightbar.background")},t.createElement(O,null),t.createElement(P,null,t.createElement(Y,{type:"number",label:"X"}),t.createElement(Y,{type:"number",label:"Y"}))))};const v=()=>{const e=t.useRef(null);return t.createElement("div",{className:"mainview"},t.createElement(R,{vrmRef:e}),t.createElement("div",{className:"mainview__content"},t.createElement(p,{className:"mainview__canvas"},t.createElement(k,{ref:e})),t.createElement(C,null)))};var E=h.Reader,S=h.Writer;h.util;var A=h.roots.default||(h.roots.default={});A.VrmStateMessage=function(){function e(e){if(e)for(var t=Object.keys(e),a=0;a<t.length;++a)null!=e[t[a]]&&(this[t[a]]=e[t[a]])}return e.prototype.aValue=0,e.prototype.angryValue=0,e.prototype.blinkLeftValue=0,e.prototype.blinkRightValue=0,e.prototype.eValue=0,e.prototype.funValue=0,e.prototype.headRotationX=0,e.prototype.headRotationY=0,e.prototype.headRotationZ=0,e.prototype.iValue=0,e.prototype.jawRotationX=0,e.prototype.jawRotationY=0,e.prototype.joyValue=0,e.prototype.lookAtX=0,e.prototype.lookAtY=0,e.prototype.lookAtZ=0,e.prototype.neckRotationX=0,e.prototype.neckRotationY=0,e.prototype.neutralValue=0,e.prototype.oValue=0,e.prototype.sorrowValue=0,e.prototype.upperChestX=0,e.prototype.upperChestY=0,e.prototype.upperChestZ=0,e.prototype.uValue=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=S.create()),null!=e.aValue&&Object.hasOwnProperty.call(e,"aValue")&&t.uint32(13).float(e.aValue),null!=e.angryValue&&Object.hasOwnProperty.call(e,"angryValue")&&t.uint32(21).float(e.angryValue),null!=e.blinkLeftValue&&Object.hasOwnProperty.call(e,"blinkLeftValue")&&t.uint32(29).float(e.blinkLeftValue),null!=e.blinkRightValue&&Object.hasOwnProperty.call(e,"blinkRightValue")&&t.uint32(37).float(e.blinkRightValue),null!=e.eValue&&Object.hasOwnProperty.call(e,"eValue")&&t.uint32(45).float(e.eValue),null!=e.funValue&&Object.hasOwnProperty.call(e,"funValue")&&t.uint32(53).float(e.funValue),null!=e.headRotationX&&Object.hasOwnProperty.call(e,"headRotationX")&&t.uint32(61).float(e.headRotationX),null!=e.headRotationY&&Object.hasOwnProperty.call(e,"headRotationY")&&t.uint32(69).float(e.headRotationY),null!=e.headRotationZ&&Object.hasOwnProperty.call(e,"headRotationZ")&&t.uint32(77).float(e.headRotationZ),null!=e.iValue&&Object.hasOwnProperty.call(e,"iValue")&&t.uint32(85).float(e.iValue),null!=e.jawRotationX&&Object.hasOwnProperty.call(e,"jawRotationX")&&t.uint32(93).float(e.jawRotationX),null!=e.jawRotationY&&Object.hasOwnProperty.call(e,"jawRotationY")&&t.uint32(101).float(e.jawRotationY),null!=e.joyValue&&Object.hasOwnProperty.call(e,"joyValue")&&t.uint32(109).float(e.joyValue),null!=e.lookAtX&&Object.hasOwnProperty.call(e,"lookAtX")&&t.uint32(117).float(e.lookAtX),null!=e.lookAtY&&Object.hasOwnProperty.call(e,"lookAtY")&&t.uint32(125).float(e.lookAtY),null!=e.lookAtZ&&Object.hasOwnProperty.call(e,"lookAtZ")&&t.uint32(133).float(e.lookAtZ),null!=e.neckRotationX&&Object.hasOwnProperty.call(e,"neckRotationX")&&t.uint32(141).float(e.neckRotationX),null!=e.neckRotationY&&Object.hasOwnProperty.call(e,"neckRotationY")&&t.uint32(149).float(e.neckRotationY),null!=e.neutralValue&&Object.hasOwnProperty.call(e,"neutralValue")&&t.uint32(157).float(e.neutralValue),null!=e.oValue&&Object.hasOwnProperty.call(e,"oValue")&&t.uint32(165).float(e.oValue),null!=e.sorrowValue&&Object.hasOwnProperty.call(e,"sorrowValue")&&t.uint32(173).float(e.sorrowValue),null!=e.upperChestX&&Object.hasOwnProperty.call(e,"upperChestX")&&t.uint32(181).float(e.upperChestX),null!=e.upperChestY&&Object.hasOwnProperty.call(e,"upperChestY")&&t.uint32(189).float(e.upperChestY),null!=e.upperChestZ&&Object.hasOwnProperty.call(e,"upperChestZ")&&t.uint32(197).float(e.upperChestZ),null!=e.uValue&&Object.hasOwnProperty.call(e,"uValue")&&t.uint32(205).float(e.uValue),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof E||(e=E.create(e));for(var a=void 0===t?e.len:e.pos+t,o=new A.VrmStateMessage;e.pos<a;){var n=e.uint32();switch(n>>>3){case 1:o.aValue=e.float();break;case 2:o.angryValue=e.float();break;case 3:o.blinkLeftValue=e.float();break;case 4:o.blinkRightValue=e.float();break;case 5:o.eValue=e.float();break;case 6:o.funValue=e.float();break;case 7:o.headRotationX=e.float();break;case 8:o.headRotationY=e.float();break;case 9:o.headRotationZ=e.float();break;case 10:o.iValue=e.float();break;case 11:o.jawRotationX=e.float();break;case 12:o.jawRotationY=e.float();break;case 13:o.joyValue=e.float();break;case 14:o.lookAtX=e.float();break;case 15:o.lookAtY=e.float();break;case 16:o.lookAtZ=e.float();break;case 17:o.neckRotationX=e.float();break;case 18:o.neckRotationY=e.float();break;case 19:o.neutralValue=e.float();break;case 20:o.oValue=e.float();break;case 21:o.sorrowValue=e.float();break;case 22:o.upperChestX=e.float();break;case 23:o.upperChestY=e.float();break;case 24:o.upperChestZ=e.float();break;case 25:o.uValue=e.float();break;default:e.skipType(7&n)}}return o},e.decodeDelimited=function(e){return e instanceof E||(e=new E(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.aValue&&e.hasOwnProperty("aValue")&&"number"!=typeof e.aValue?"aValue: number expected":null!=e.angryValue&&e.hasOwnProperty("angryValue")&&"number"!=typeof e.angryValue?"angryValue: number expected":null!=e.blinkLeftValue&&e.hasOwnProperty("blinkLeftValue")&&"number"!=typeof e.blinkLeftValue?"blinkLeftValue: number expected":null!=e.blinkRightValue&&e.hasOwnProperty("blinkRightValue")&&"number"!=typeof e.blinkRightValue?"blinkRightValue: number expected":null!=e.eValue&&e.hasOwnProperty("eValue")&&"number"!=typeof e.eValue?"eValue: number expected":null!=e.funValue&&e.hasOwnProperty("funValue")&&"number"!=typeof e.funValue?"funValue: number expected":null!=e.headRotationX&&e.hasOwnProperty("headRotationX")&&"number"!=typeof e.headRotationX?"headRotationX: number expected":null!=e.headRotationY&&e.hasOwnProperty("headRotationY")&&"number"!=typeof e.headRotationY?"headRotationY: number expected":null!=e.headRotationZ&&e.hasOwnProperty("headRotationZ")&&"number"!=typeof e.headRotationZ?"headRotationZ: number expected":null!=e.iValue&&e.hasOwnProperty("iValue")&&"number"!=typeof e.iValue?"iValue: number expected":null!=e.jawRotationX&&e.hasOwnProperty("jawRotationX")&&"number"!=typeof e.jawRotationX?"jawRotationX: number expected":null!=e.jawRotationY&&e.hasOwnProperty("jawRotationY")&&"number"!=typeof e.jawRotationY?"jawRotationY: number expected":null!=e.joyValue&&e.hasOwnProperty("joyValue")&&"number"!=typeof e.joyValue?"joyValue: number expected":null!=e.lookAtX&&e.hasOwnProperty("lookAtX")&&"number"!=typeof e.lookAtX?"lookAtX: number expected":null!=e.lookAtY&&e.hasOwnProperty("lookAtY")&&"number"!=typeof e.lookAtY?"lookAtY: number expected":null!=e.lookAtZ&&e.hasOwnProperty("lookAtZ")&&"number"!=typeof e.lookAtZ?"lookAtZ: number expected":null!=e.neckRotationX&&e.hasOwnProperty("neckRotationX")&&"number"!=typeof e.neckRotationX?"neckRotationX: number expected":null!=e.neckRotationY&&e.hasOwnProperty("neckRotationY")&&"number"!=typeof e.neckRotationY?"neckRotationY: number expected":null!=e.neutralValue&&e.hasOwnProperty("neutralValue")&&"number"!=typeof e.neutralValue?"neutralValue: number expected":null!=e.oValue&&e.hasOwnProperty("oValue")&&"number"!=typeof e.oValue?"oValue: number expected":null!=e.sorrowValue&&e.hasOwnProperty("sorrowValue")&&"number"!=typeof e.sorrowValue?"sorrowValue: number expected":null!=e.upperChestX&&e.hasOwnProperty("upperChestX")&&"number"!=typeof e.upperChestX?"upperChestX: number expected":null!=e.upperChestY&&e.hasOwnProperty("upperChestY")&&"number"!=typeof e.upperChestY?"upperChestY: number expected":null!=e.upperChestZ&&e.hasOwnProperty("upperChestZ")&&"number"!=typeof e.upperChestZ?"upperChestZ: number expected":null!=e.uValue&&e.hasOwnProperty("uValue")&&"number"!=typeof e.uValue?"uValue: number expected":null},e.fromObject=function(e){if(e instanceof A.VrmStateMessage)return e;var t=new A.VrmStateMessage;return null!=e.aValue&&(t.aValue=Number(e.aValue)),null!=e.angryValue&&(t.angryValue=Number(e.angryValue)),null!=e.blinkLeftValue&&(t.blinkLeftValue=Number(e.blinkLeftValue)),null!=e.blinkRightValue&&(t.blinkRightValue=Number(e.blinkRightValue)),null!=e.eValue&&(t.eValue=Number(e.eValue)),null!=e.funValue&&(t.funValue=Number(e.funValue)),null!=e.headRotationX&&(t.headRotationX=Number(e.headRotationX)),null!=e.headRotationY&&(t.headRotationY=Number(e.headRotationY)),null!=e.headRotationZ&&(t.headRotationZ=Number(e.headRotationZ)),null!=e.iValue&&(t.iValue=Number(e.iValue)),null!=e.jawRotationX&&(t.jawRotationX=Number(e.jawRotationX)),null!=e.jawRotationY&&(t.jawRotationY=Number(e.jawRotationY)),null!=e.joyValue&&(t.joyValue=Number(e.joyValue)),null!=e.lookAtX&&(t.lookAtX=Number(e.lookAtX)),null!=e.lookAtY&&(t.lookAtY=Number(e.lookAtY)),null!=e.lookAtZ&&(t.lookAtZ=Number(e.lookAtZ)),null!=e.neckRotationX&&(t.neckRotationX=Number(e.neckRotationX)),null!=e.neckRotationY&&(t.neckRotationY=Number(e.neckRotationY)),null!=e.neutralValue&&(t.neutralValue=Number(e.neutralValue)),null!=e.oValue&&(t.oValue=Number(e.oValue)),null!=e.sorrowValue&&(t.sorrowValue=Number(e.sorrowValue)),null!=e.upperChestX&&(t.upperChestX=Number(e.upperChestX)),null!=e.upperChestY&&(t.upperChestY=Number(e.upperChestY)),null!=e.upperChestZ&&(t.upperChestZ=Number(e.upperChestZ)),null!=e.uValue&&(t.uValue=Number(e.uValue)),t},e.toObject=function(e,t){t||(t={});var a={};return t.defaults&&(a.aValue=0,a.angryValue=0,a.blinkLeftValue=0,a.blinkRightValue=0,a.eValue=0,a.funValue=0,a.headRotationX=0,a.headRotationY=0,a.headRotationZ=0,a.iValue=0,a.jawRotationX=0,a.jawRotationY=0,a.joyValue=0,a.lookAtX=0,a.lookAtY=0,a.lookAtZ=0,a.neckRotationX=0,a.neckRotationY=0,a.neutralValue=0,a.oValue=0,a.sorrowValue=0,a.upperChestX=0,a.upperChestY=0,a.upperChestZ=0,a.uValue=0),null!=e.aValue&&e.hasOwnProperty("aValue")&&(a.aValue=t.json&&!isFinite(e.aValue)?String(e.aValue):e.aValue),null!=e.angryValue&&e.hasOwnProperty("angryValue")&&(a.angryValue=t.json&&!isFinite(e.angryValue)?String(e.angryValue):e.angryValue),null!=e.blinkLeftValue&&e.hasOwnProperty("blinkLeftValue")&&(a.blinkLeftValue=t.json&&!isFinite(e.blinkLeftValue)?String(e.blinkLeftValue):e.blinkLeftValue),null!=e.blinkRightValue&&e.hasOwnProperty("blinkRightValue")&&(a.blinkRightValue=t.json&&!isFinite(e.blinkRightValue)?String(e.blinkRightValue):e.blinkRightValue),null!=e.eValue&&e.hasOwnProperty("eValue")&&(a.eValue=t.json&&!isFinite(e.eValue)?String(e.eValue):e.eValue),null!=e.funValue&&e.hasOwnProperty("funValue")&&(a.funValue=t.json&&!isFinite(e.funValue)?String(e.funValue):e.funValue),null!=e.headRotationX&&e.hasOwnProperty("headRotationX")&&(a.headRotationX=t.json&&!isFinite(e.headRotationX)?String(e.headRotationX):e.headRotationX),null!=e.headRotationY&&e.hasOwnProperty("headRotationY")&&(a.headRotationY=t.json&&!isFinite(e.headRotationY)?String(e.headRotationY):e.headRotationY),null!=e.headRotationZ&&e.hasOwnProperty("headRotationZ")&&(a.headRotationZ=t.json&&!isFinite(e.headRotationZ)?String(e.headRotationZ):e.headRotationZ),null!=e.iValue&&e.hasOwnProperty("iValue")&&(a.iValue=t.json&&!isFinite(e.iValue)?String(e.iValue):e.iValue),null!=e.jawRotationX&&e.hasOwnProperty("jawRotationX")&&(a.jawRotationX=t.json&&!isFinite(e.jawRotationX)?String(e.jawRotationX):e.jawRotationX),null!=e.jawRotationY&&e.hasOwnProperty("jawRotationY")&&(a.jawRotationY=t.json&&!isFinite(e.jawRotationY)?String(e.jawRotationY):e.jawRotationY),null!=e.joyValue&&e.hasOwnProperty("joyValue")&&(a.joyValue=t.json&&!isFinite(e.joyValue)?String(e.joyValue):e.joyValue),null!=e.lookAtX&&e.hasOwnProperty("lookAtX")&&(a.lookAtX=t.json&&!isFinite(e.lookAtX)?String(e.lookAtX):e.lookAtX),null!=e.lookAtY&&e.hasOwnProperty("lookAtY")&&(a.lookAtY=t.json&&!isFinite(e.lookAtY)?String(e.lookAtY):e.lookAtY),null!=e.lookAtZ&&e.hasOwnProperty("lookAtZ")&&(a.lookAtZ=t.json&&!isFinite(e.lookAtZ)?String(e.lookAtZ):e.lookAtZ),null!=e.neckRotationX&&e.hasOwnProperty("neckRotationX")&&(a.neckRotationX=t.json&&!isFinite(e.neckRotationX)?String(e.neckRotationX):e.neckRotationX),null!=e.neckRotationY&&e.hasOwnProperty("neckRotationY")&&(a.neckRotationY=t.json&&!isFinite(e.neckRotationY)?String(e.neckRotationY):e.neckRotationY),null!=e.neutralValue&&e.hasOwnProperty("neutralValue")&&(a.neutralValue=t.json&&!isFinite(e.neutralValue)?String(e.neutralValue):e.neutralValue),null!=e.oValue&&e.hasOwnProperty("oValue")&&(a.oValue=t.json&&!isFinite(e.oValue)?String(e.oValue):e.oValue),null!=e.sorrowValue&&e.hasOwnProperty("sorrowValue")&&(a.sorrowValue=t.json&&!isFinite(e.sorrowValue)?String(e.sorrowValue):e.sorrowValue),null!=e.upperChestX&&e.hasOwnProperty("upperChestX")&&(a.upperChestX=t.json&&!isFinite(e.upperChestX)?String(e.upperChestX):e.upperChestX),null!=e.upperChestY&&e.hasOwnProperty("upperChestY")&&(a.upperChestY=t.json&&!isFinite(e.upperChestY)?String(e.upperChestY):e.upperChestY),null!=e.upperChestZ&&e.hasOwnProperty("upperChestZ")&&(a.upperChestZ=t.json&&!isFinite(e.upperChestZ)?String(e.upperChestZ):e.upperChestZ),null!=e.uValue&&e.hasOwnProperty("uValue")&&(a.uValue=t.json&&!isFinite(e.uValue)?String(e.uValue):e.uValue),a},e.prototype.toJSON=function(){return this.constructor.toObject(this,h.util.toJSONOptions)},e}();const N=()=>{const e=d((e=>e.updateVrmState)),a=new WebSocket("ws://localhost:42069");return a.binaryType="arraybuffer",a.addEventListener("message",(t=>{const a=new Uint8Array(t.data),o=A.VrmStateMessage.decode(a);console.log(o),e(o)})),t.createElement(t.Fragment,null,t.createElement(v,null))};m.render(t.createElement(t.StrictMode,null,t.createElement(N,null)),document.getElementById("root"));
