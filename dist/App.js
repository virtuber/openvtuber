import r from"../_snowpack/pkg/react.js";import m from"./components/MainView.js";import"./App.css.proxy.js";import n from"./protobufs/VrmStateMessage.js";import{useVrmStore as p}from"./utils/store.js";var i=()=>{var s=p(e=>e.updateVrmState),t=new WebSocket("ws://localhost:42069");return t.binaryType="arraybuffer",t.addEventListener("message",e=>{var o=new Uint8Array(e.data),a=n.VrmStateMessage.decode(o);console.log(a),s(a)}),r.createElement(r.Fragment,null,r.createElement(m,null))};export default i;
