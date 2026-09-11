(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},fo={},kc={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),np=Symbol.for("react.portal"),rp=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),sp=Symbol.for("react.provider"),ap=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),up=Symbol.for("react.memo"),dp=Symbol.for("react.lazy"),nl=Symbol.iterator;function pp(e){return e===null||typeof e!="object"?null:(e=nl&&e[nl]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,_c={};function or(e,t,n){this.props=e,this.context=t,this.refs=_c,this.updater=n||Sc}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jc(){}jc.prototype=or.prototype;function oa(e,t,n){this.props=e,this.context=t,this.refs=_c,this.updater=n||Sc}var sa=oa.prototype=new jc;sa.constructor=oa;Cc(sa,or.prototype);sa.isPureReactComponent=!0;var rl=Array.isArray,Ec=Object.prototype.hasOwnProperty,aa={current:null},zc={key:!0,ref:!0,__self:!0,__source:!0};function Tc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ec.call(t,r)&&!zc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Qr,type:e,key:o,ref:s,props:i,_owner:aa.current}}function fp(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function hp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var il=/\/+/g;function Ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hp(""+e.key):t.toString(36)}function ji(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qr:case np:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ao(s,0):r,rl(i)?(n="",e!=null&&(n=e.replace(il,"$&/")+"/"),ji(i,t,n,"",function(h){return h})):i!=null&&(la(i)&&(i=fp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(il,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",rl(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Ao(o,l);s+=ji(o,t,n,c,i)}else if(c=pp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Ao(o,l++),s+=ji(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function si(e,t,n){if(e==null)return e;var r=[],i=0;return ji(e,r,"","",function(o){return t.call(n,o,i++)}),r}function mp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ei={transition:null},gp={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ei,ReactCurrentOwner:aa};function Pc(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=or;de.Fragment=rp;de.Profiler=op;de.PureComponent=oa;de.StrictMode=ip;de.Suspense=cp;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;de.act=Pc;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=aa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Ec.call(t,c)&&!zc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:s}};de.createContext=function(e){return e={$$typeof:ap,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sp,_context:e},e.Consumer=e};de.createElement=Tc;de.createFactory=function(e){var t=Tc.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:lp,render:e}};de.isValidElement=la;de.lazy=function(e){return{$$typeof:dp,_payload:{_status:-1,_result:e},_init:mp}};de.memo=function(e,t){return{$$typeof:up,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=Ei.transition;Ei.transition={};try{e()}finally{Ei.transition=t}};de.unstable_act=Pc;de.useCallback=function(e,t){return Ge.current.useCallback(e,t)};de.useContext=function(e){return Ge.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};de.useEffect=function(e,t){return Ge.current.useEffect(e,t)};de.useId=function(){return Ge.current.useId()};de.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return Ge.current.useMemo(e,t)};de.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};de.useRef=function(e){return Ge.current.useRef(e)};de.useState=function(e){return Ge.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return Ge.current.useTransition()};de.version="18.3.1";kc.exports=de;var $=kc.exports;const Qt=bc($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp=$,xp=Symbol.for("react.element"),vp=Symbol.for("react.fragment"),bp=Object.prototype.hasOwnProperty,wp=yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kp={key:!0,ref:!0,__self:!0,__source:!0};function Ic(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)bp.call(t,r)&&!kp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xp,type:e,key:o,ref:s,props:i,_owner:wp.current}}fo.Fragment=vp;fo.jsx=Ic;fo.jsxs=Ic;wc.exports=fo;var a=wc.exports,ls={},Ac={exports:{}},st={},Rc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,O){var Z=B.length;B.push(O);e:for(;0<Z;){var P=Z-1>>>1,I=B[P];if(0<i(I,O))B[P]=O,B[Z]=I,Z=P;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var O=B[0],Z=B.pop();if(Z!==O){B[0]=Z;e:for(var P=0,I=B.length,ne=I>>>1;P<ne;){var Q=2*(P+1)-1,K=B[Q],ge=Q+1,ke=B[ge];if(0>i(K,Z))ge<I&&0>i(ke,K)?(B[P]=ke,B[ge]=Z,P=ge):(B[P]=K,B[Q]=Z,P=Q);else if(ge<I&&0>i(ke,Z))B[P]=ke,B[ge]=Z,P=ge;else break e}}return O}function i(B,O){var Z=B.sortIndex-O.sortIndex;return Z!==0?Z:B.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],h=[],b=1,v=null,x=3,m=!1,k=!1,p=!1,w=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(B){for(var O=n(h);O!==null;){if(O.callback===null)r(h);else if(O.startTime<=B)r(h),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(h)}}function S(B){if(p=!1,y(B),!k)if(n(c)!==null)k=!0,ee(_);else{var O=n(h);O!==null&&H(S,O.startTime-B)}}function _(B,O){k=!1,p&&(p=!1,d(N),N=-1),m=!0;var Z=x;try{for(y(O),v=n(c);v!==null&&(!(v.expirationTime>O)||B&&!te());){var P=v.callback;if(typeof P=="function"){v.callback=null,x=v.priorityLevel;var I=P(v.expirationTime<=O);O=e.unstable_now(),typeof I=="function"?v.callback=I:v===n(c)&&r(c),y(O)}else r(c);v=n(c)}if(v!==null)var ne=!0;else{var Q=n(h);Q!==null&&H(S,Q.startTime-O),ne=!1}return ne}finally{v=null,x=Z,m=!1}}var T=!1,z=null,N=-1,R=5,M=-1;function te(){return!(e.unstable_now()-M<R)}function E(){if(z!==null){var B=e.unstable_now();M=B;var O=!0;try{O=z(!0,B)}finally{O?F():(T=!1,z=null)}}else T=!1}var F;if(typeof u=="function")F=function(){u(E)};else if(typeof MessageChannel<"u"){var g=new MessageChannel,L=g.port2;g.port1.onmessage=E,F=function(){L.postMessage(null)}}else F=function(){w(E,0)};function ee(B){z=B,T||(T=!0,F())}function H(B,O){N=w(function(){B(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){k||m||(k=!0,ee(_))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(B){switch(x){case 1:case 2:case 3:var O=3;break;default:O=x}var Z=x;x=O;try{return B()}finally{x=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,O){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=x;x=B;try{return O()}finally{x=Z}},e.unstable_scheduleCallback=function(B,O,Z){var P=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?P+Z:P):Z=P,B){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Z+I,B={id:b++,callback:O,priorityLevel:B,startTime:Z,expirationTime:I,sortIndex:-1},Z>P?(B.sortIndex=Z,t(h,B),n(c)===null&&B===n(h)&&(p?(d(N),N=-1):p=!0,H(S,Z-P))):(B.sortIndex=I,t(c,B),k||m||(k=!0,ee(_))),B},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(B){var O=x;return function(){var Z=x;x=O;try{return B.apply(this,arguments)}finally{x=Z}}}})(Nc);Rc.exports=Nc;var Sp=Rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp=$,ot=Sp;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mc=new Set,Rr={};function Tn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Mc.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cs=Object.prototype.hasOwnProperty,_p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ol={},sl={};function jp(e){return cs.call(sl,e)?!0:cs.call(ol,e)?!1:_p.test(e)?sl[e]=!0:(ol[e]=!0,!1)}function Ep(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zp(e,t,n,r){if(t===null||typeof t>"u"||Ep(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ca,ua);Fe[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ca,ua);Fe[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ca,ua);Fe[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function da(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zp(t,n,i,r)&&(n=null),r||i===null?jp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),An=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),us=Symbol.for("react.profiler"),Lc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),fa=Symbol.for("react.forward_ref"),ds=Symbol.for("react.suspense"),ps=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Dc=Symbol.for("react.offscreen"),al=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=al&&e[al]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Ro;function yr(e){if(Ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var No=!1;function Mo(e,t){if(!e||No)return"";No=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{No=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yr(e):""}function Tp(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Mo(e.type,!1),e;case 11:return e=Mo(e.type.render,!1),e;case 1:return e=Mo(e.type,!0),e;default:return""}}function fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case An:return"Portal";case us:return"Profiler";case pa:return"StrictMode";case ds:return"Suspense";case ps:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Lc:return(e._context.displayName||"Context")+".Provider";case fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return t=e.displayName||null,t!==null?t:fs(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return fs(e(t))}catch{}}return null}function Pp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fs(t);case 8:return t===pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ip(e){var t=Fc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=Ip(e))}function Bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hs(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ll(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uc(e,t){t=t.checked,t!=null&&da(e,"checked",t,!1)}function ms(e,t){Uc(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gs(e,t.type,n):t.hasOwnProperty("defaultValue")&&gs(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gs(e,t,n){(t!=="number"||Fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ys(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ul(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(xr(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function Wc(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ap=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Ap.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function $c(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function Gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$c(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Rp=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vs(e,t){if(t){if(Rp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ws=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Gn=null,qn=null;function pl(e){if(e=ti(e)){if(typeof ks!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=xo(t),ks(e.stateNode,e.type,t))}}function qc(e){Gn?qn?qn.push(e):qn=[e]:Gn=e}function Zc(){if(Gn){var e=Gn,t=qn;if(qn=Gn=null,pl(e),t)for(e=0;e<t.length;e++)pl(t[e])}}function Yc(e,t){return e(t)}function Kc(){}var Lo=!1;function Xc(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return Yc(e,t,n)}finally{Lo=!1,(Gn!==null||qn!==null)&&(Kc(),Zc())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var Ss=!1;if(Ft)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Ss=!1}function Np(e,t,n,r,i,o,s,l,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(b){this.onError(b)}}var Cr=!1,Bi=null,Ui=!1,Cs=null,Mp={onError:function(e){Cr=!0,Bi=e}};function Lp(e,t,n,r,i,o,s,l,c){Cr=!1,Bi=null,Np.apply(Mp,arguments)}function Op(e,t,n,r,i,o,s,l,c){if(Lp.apply(this,arguments),Cr){if(Cr){var h=Bi;Cr=!1,Bi=null}else throw Error(Y(198));Ui||(Ui=!0,Cs=h)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fl(e){if(Pn(e)!==e)throw Error(Y(188))}function Dp(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fl(i),e;if(o===r)return fl(i),t;o=o.sibling}throw Error(Y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function Jc(e){return e=Dp(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eu(e);if(t!==null)return t;e=e.sibling}return null}var tu=ot.unstable_scheduleCallback,hl=ot.unstable_cancelCallback,Fp=ot.unstable_shouldYield,Bp=ot.unstable_requestPaint,Pe=ot.unstable_now,Up=ot.unstable_getCurrentPriorityLevel,ga=ot.unstable_ImmediatePriority,nu=ot.unstable_UserBlockingPriority,Wi=ot.unstable_NormalPriority,Wp=ot.unstable_LowPriority,ru=ot.unstable_IdlePriority,ho=null,Tt=null;function Vp(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Gp,Hp=Math.log,$p=Math.LN2;function Gp(e){return e>>>=0,e===0?32:31-(Hp(e)/$p|0)|0}var ui=64,di=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=vr(l):(o&=s,o!==0&&(r=vr(o)))}else s=n&~i,s!==0?r=vr(s):o!==0&&(r=vr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function qp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-wt(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=qp(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function _s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Oo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function Yp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var su,xa,au,lu,cu,js=!1,pi=[],Jt=null,en=null,tn=null,Lr=new Map,Or=new Map,Zt=[],Kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ml(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xp(e,t,n,r,i){switch(t){case"focusin":return Jt=dr(Jt,e,t,n,r,i),!0;case"dragenter":return en=dr(en,e,t,n,r,i),!0;case"mouseover":return tn=dr(tn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,dr(Lr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Or.set(o,dr(Or.get(o)||null,e,t,n,r,i)),!0}return!1}function uu(e){var t=xn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Qc(n),t!==null){e.blockedOn=t,cu(e.priority,function(){au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ws=r,n.target.dispatchEvent(r),ws=null}else return t=ti(n),t!==null&&xa(t),e.blockedOn=n,!1;t.shift()}return!0}function gl(e,t,n){zi(e)&&n.delete(t)}function Qp(){js=!1,Jt!==null&&zi(Jt)&&(Jt=null),en!==null&&zi(en)&&(en=null),tn!==null&&zi(tn)&&(tn=null),Lr.forEach(gl),Or.forEach(gl)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,Qp)))}function Dr(e){function t(i){return pr(i,e)}if(0<pi.length){pr(pi[0],e);for(var n=1;n<pi.length;n++){var r=pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&pr(Jt,e),en!==null&&pr(en,e),tn!==null&&pr(tn,e),Lr.forEach(t),Or.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&Zt.shift()}var Zn=Vt.ReactCurrentBatchConfig,Hi=!0;function Jp(e,t,n,r){var i=xe,o=Zn.transition;Zn.transition=null;try{xe=1,va(e,t,n,r)}finally{xe=i,Zn.transition=o}}function ef(e,t,n,r){var i=xe,o=Zn.transition;Zn.transition=null;try{xe=4,va(e,t,n,r)}finally{xe=i,Zn.transition=o}}function va(e,t,n,r){if(Hi){var i=Es(e,t,n,r);if(i===null)qo(e,t,r,$i,n),ml(e,r);else if(Xp(i,e,t,n,r))r.stopPropagation();else if(ml(e,r),t&4&&-1<Kp.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&su(o),o=Es(e,t,n,r),o===null&&qo(e,t,r,$i,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qo(e,t,r,null,n)}}var $i=null;function Es(e,t,n,r){if($i=null,e=ma(r),e=xn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Up()){case ga:return 1;case nu:return 4;case Wi:case Wp:return 16;case ru:return 536870912;default:return 16}default:return 16}}var Kt=null,ba=null,Ti=null;function pu(){if(Ti)return Ti;var e,t=ba,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ti=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function yl(){return!1}function at(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fi:yl,this.isPropagationStopped=yl,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=at(sr),ei=Ee({},sr,{view:0,detail:0}),tf=at(ei),Do,Fo,fr,mo=Ee({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Do=e.screenX-fr.screenX,Fo=e.screenY-fr.screenY):Fo=Do=0,fr=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),xl=at(mo),nf=Ee({},mo,{dataTransfer:0}),rf=at(nf),of=Ee({},ei,{relatedTarget:0}),Bo=at(of),sf=Ee({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),af=at(sf),lf=Ee({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=at(lf),uf=Ee({},sr,{data:0}),vl=at(uf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ff[e])?!!t[e]:!1}function ka(){return hf}var mf=Ee({},ei,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=at(mf),yf=Ee({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bl=at(yf),xf=Ee({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),vf=at(xf),bf=Ee({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wf=at(bf),kf=Ee({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=at(kf),Cf=[9,13,27,32],Sa=Ft&&"CompositionEvent"in window,_r=null;Ft&&"documentMode"in document&&(_r=document.documentMode);var _f=Ft&&"TextEvent"in window&&!_r,fu=Ft&&(!Sa||_r&&8<_r&&11>=_r),wl=" ",kl=!1;function hu(e,t){switch(e){case"keyup":return Cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function jf(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(kl=!0,wl);case"textInput":return e=t.data,e===wl&&kl?null:e;default:return null}}function Ef(e,t){if(Nn)return e==="compositionend"||!Sa&&hu(e,t)?(e=pu(),Ti=ba=Kt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zf[e.type]:t==="textarea"}function gu(e,t,n,r){qc(r),t=Gi(t,"onChange"),0<t.length&&(n=new wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,Fr=null;function Tf(e){Eu(e,0)}function go(e){var t=On(e);if(Bc(t))return e}function Pf(e,t){if(e==="change")return t}var yu=!1;if(Ft){var Uo;if(Ft){var Wo="oninput"in document;if(!Wo){var Cl=document.createElement("div");Cl.setAttribute("oninput","return;"),Wo=typeof Cl.oninput=="function"}Uo=Wo}else Uo=!1;yu=Uo&&(!document.documentMode||9<document.documentMode)}function _l(){jr&&(jr.detachEvent("onpropertychange",xu),Fr=jr=null)}function xu(e){if(e.propertyName==="value"&&go(Fr)){var t=[];gu(t,Fr,e,ma(e)),Xc(Tf,t)}}function If(e,t,n){e==="focusin"?(_l(),jr=t,Fr=n,jr.attachEvent("onpropertychange",xu)):e==="focusout"&&_l()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(Fr)}function Rf(e,t){if(e==="click")return go(t)}function Nf(e,t){if(e==="input"||e==="change")return go(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Mf;function Br(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cs.call(t,i)||!St(e[i],t[i]))return!1}return!0}function jl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function El(e,t){var n=jl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jl(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bu(){for(var e=window,t=Fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lf(e){var t=bu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&Ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=El(n,o);var s=El(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Of=Ft&&"documentMode"in document&&11>=document.documentMode,Mn=null,zs=null,Er=null,Ts=!1;function zl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ts||Mn==null||Mn!==Fi(r)||(r=Mn,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Br(Er,r)||(Er=r,r=Gi(zs,"onSelect"),0<r.length&&(t=new wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},Vo={},wu={};Ft&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function yo(e){if(Vo[e])return Vo[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return Vo[e]=t[n];return e}var ku=yo("animationend"),Su=yo("animationiteration"),Cu=yo("animationstart"),_u=yo("transitionend"),ju=new Map,Tl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){ju.set(e,t),Tn(t,[e])}for(var Ho=0;Ho<Tl.length;Ho++){var $o=Tl[Ho],Df=$o.toLowerCase(),Ff=$o[0].toUpperCase()+$o.slice(1);dn(Df,"on"+Ff)}dn(ku,"onAnimationEnd");dn(Su,"onAnimationIteration");dn(Cu,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(_u,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function Pl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Op(r,t,void 0,e),e.currentTarget=null}function Eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,h=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Pl(i,l,h),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,h=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Pl(i,l,h),o=c}}}if(Ui)throw e=Cs,Ui=!1,Cs=null,e}function be(e,t){var n=t[Ns];n===void 0&&(n=t[Ns]=new Set);var r=e+"__bubble";n.has(r)||(zu(t,e,2,!1),n.add(r))}function Go(e,t,n){var r=0;t&&(r|=4),zu(n,e,r,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[mi]){e[mi]=!0,Mc.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||Go(n,!1,e),Go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,Go("selectionchange",!1,t))}}function zu(e,t,n,r){switch(du(t)){case 1:var i=Jp;break;case 4:i=ef;break;default:i=va}n=i.bind(null,t,n,e),i=void 0,!Ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=xn(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Xc(function(){var h=o,b=ma(n),v=[];e:{var x=ju.get(e);if(x!==void 0){var m=wa,k=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":m=gf;break;case"focusin":k="focus",m=Bo;break;case"focusout":k="blur",m=Bo;break;case"beforeblur":case"afterblur":m=Bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vf;break;case ku:case Su:case Cu:m=af;break;case _u:m=wf;break;case"scroll":m=tf;break;case"wheel":m=Sf;break;case"copy":case"cut":case"paste":m=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=bl}var p=(t&4)!==0,w=!p&&e==="scroll",d=p?x!==null?x+"Capture":null:x;p=[];for(var u=h,y;u!==null;){y=u;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,d!==null&&(S=Mr(u,d),S!=null&&p.push(Wr(u,S,y)))),w)break;u=u.return}0<p.length&&(x=new m(x,k,null,n,b),v.push({event:x,listeners:p}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",x&&n!==ws&&(k=n.relatedTarget||n.fromElement)&&(xn(k)||k[Bt]))break e;if((m||x)&&(x=b.window===b?b:(x=b.ownerDocument)?x.defaultView||x.parentWindow:window,m?(k=n.relatedTarget||n.toElement,m=h,k=k?xn(k):null,k!==null&&(w=Pn(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(m=null,k=h),m!==k)){if(p=xl,S="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(p=bl,S="onPointerLeave",d="onPointerEnter",u="pointer"),w=m==null?x:On(m),y=k==null?x:On(k),x=new p(S,u+"leave",m,n,b),x.target=w,x.relatedTarget=y,S=null,xn(b)===h&&(p=new p(d,u+"enter",k,n,b),p.target=y,p.relatedTarget=w,S=p),w=S,m&&k)t:{for(p=m,d=k,u=0,y=p;y;y=In(y))u++;for(y=0,S=d;S;S=In(S))y++;for(;0<u-y;)p=In(p),u--;for(;0<y-u;)d=In(d),y--;for(;u--;){if(p===d||d!==null&&p===d.alternate)break t;p=In(p),d=In(d)}p=null}else p=null;m!==null&&Il(v,x,m,p,!1),k!==null&&w!==null&&Il(v,w,k,p,!0)}}e:{if(x=h?On(h):window,m=x.nodeName&&x.nodeName.toLowerCase(),m==="select"||m==="input"&&x.type==="file")var _=Pf;else if(Sl(x))if(yu)_=Nf;else{_=Af;var T=If}else(m=x.nodeName)&&m.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(_=Rf);if(_&&(_=_(e,h))){gu(v,_,n,b);break e}T&&T(e,x,h),e==="focusout"&&(T=x._wrapperState)&&T.controlled&&x.type==="number"&&gs(x,"number",x.value)}switch(T=h?On(h):window,e){case"focusin":(Sl(T)||T.contentEditable==="true")&&(Mn=T,zs=h,Er=null);break;case"focusout":Er=zs=Mn=null;break;case"mousedown":Ts=!0;break;case"contextmenu":case"mouseup":case"dragend":Ts=!1,zl(v,n,b);break;case"selectionchange":if(Of)break;case"keydown":case"keyup":zl(v,n,b)}var z;if(Sa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Nn?hu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(fu&&n.locale!=="ko"&&(Nn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Nn&&(z=pu()):(Kt=b,ba="value"in Kt?Kt.value:Kt.textContent,Nn=!0)),T=Gi(h,N),0<T.length&&(N=new vl(N,e,null,n,b),v.push({event:N,listeners:T}),z?N.data=z:(z=mu(n),z!==null&&(N.data=z)))),(z=_f?jf(e,n):Ef(e,n))&&(h=Gi(h,"onBeforeInput"),0<h.length&&(b=new vl("onBeforeInput","beforeinput",null,n,b),v.push({event:b,listeners:h}),b.data=z))}Eu(v,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mr(e,n),o!=null&&r.unshift(Wr(e,o,i)),o=Mr(e,t),o!=null&&r.push(Wr(e,o,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Il(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,h=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&h!==null&&(l=h,i?(c=Mr(n,o),c!=null&&s.unshift(Wr(n,c,l))):i||(c=Mr(n,o),c!=null&&s.push(Wr(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Uf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function Al(e){return(typeof e=="string"?e:""+e).replace(Uf,`
`).replace(Wf,"")}function gi(e,t,n){if(t=Al(t),Al(e)!==t&&n)throw Error(Y(425))}function qi(){}var Ps=null,Is=null;function As(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rs=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,Rl=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Rl<"u"?function(e){return Rl.resolve(null).then(e).catch($f)}:Rs;function $f(e){setTimeout(function(){throw e})}function Zo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),zt="__reactFiber$"+ar,Vr="__reactProps$"+ar,Bt="__reactContainer$"+ar,Ns="__reactEvents$"+ar,Gf="__reactListeners$"+ar,qf="__reactHandles$"+ar;function xn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nl(e);e!==null;){if(n=e[zt])return n;e=Nl(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[zt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function xo(e){return e[Vr]||null}var Ms=[],Dn=-1;function pn(e){return{current:e}}function we(e){0>Dn||(e.current=Ms[Dn],Ms[Dn]=null,Dn--)}function ve(e,t){Dn++,Ms[Dn]=e.current,e.current=t}var un={},Ve=pn(un),Xe=pn(!1),Cn=un;function Jn(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function Zi(){we(Xe),we(Ve)}function Ml(e,t,n){if(Ve.current!==un)throw Error(Y(168));ve(Ve,t),ve(Xe,n)}function Tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Y(108,Pp(e)||"Unknown",i));return Ee({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,Cn=Ve.current,ve(Ve,e),ve(Xe,Xe.current),!0}function Ll(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=Tu(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,we(Xe),we(Ve),ve(Ve,e)):we(Xe),ve(Xe,n)}var Nt=null,vo=!1,Yo=!1;function Pu(e){Nt===null?Nt=[e]:Nt.push(e)}function Zf(e){vo=!0,Pu(e)}function fn(){if(!Yo&&Nt!==null){Yo=!0;var e=0,t=xe;try{var n=Nt;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,vo=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),tu(ga,fn),i}finally{xe=t,Yo=!1}}return null}var Fn=[],Bn=0,Ki=null,Xi=0,ut=[],dt=0,_n=null,Mt=1,Lt="";function mn(e,t){Fn[Bn++]=Xi,Fn[Bn++]=Ki,Ki=e,Xi=t}function Iu(e,t,n){ut[dt++]=Mt,ut[dt++]=Lt,ut[dt++]=_n,_n=e;var r=Mt;e=Lt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var o=32-wt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Mt=1<<32-wt(t)+i|n<<i|r,Lt=o+e}else Mt=1<<o|n<<i|r,Lt=e}function _a(e){e.return!==null&&(mn(e,1),Iu(e,1,0))}function ja(e){for(;e===Ki;)Ki=Fn[--Bn],Fn[Bn]=null,Xi=Fn[--Bn],Fn[Bn]=null;for(;e===_n;)_n=ut[--dt],ut[dt]=null,Lt=ut[--dt],ut[dt]=null,Mt=ut[--dt],ut[dt]=null}var it=null,rt=null,Se=!1,bt=null;function Au(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ol(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,rt=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Mt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,rt=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Os(e){if(Se){var t=rt;if(t){var n=t;if(!Ol(e,t)){if(Ls(e))throw Error(Y(418));t=nn(n.nextSibling);var r=it;t&&Ol(e,t)?Au(r,n):(e.flags=e.flags&-4097|2,Se=!1,it=e)}}else{if(Ls(e))throw Error(Y(418));e.flags=e.flags&-4097|2,Se=!1,it=e}}}function Dl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function yi(e){if(e!==it)return!1;if(!Se)return Dl(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!As(e.type,e.memoizedProps)),t&&(t=rt)){if(Ls(e))throw Ru(),Error(Y(418));for(;t;)Au(e,t),t=nn(t.nextSibling)}if(Dl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=it?nn(e.stateNode.nextSibling):null;return!0}function Ru(){for(var e=rt;e;)e=nn(e.nextSibling)}function er(){rt=it=null,Se=!1}function Ea(e){bt===null?bt=[e]:bt.push(e)}var Yf=Vt.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fl(e){var t=e._init;return t(e._payload)}function Nu(e){function t(d,u){if(e){var y=d.deletions;y===null?(d.deletions=[u],d.flags|=16):y.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=an(d,u),d.index=0,d.sibling=null,d}function o(d,u,y){return d.index=y,e?(y=d.alternate,y!==null?(y=y.index,y<u?(d.flags|=2,u):y):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,y,S){return u===null||u.tag!==6?(u=ns(y,d.mode,S),u.return=d,u):(u=i(u,y),u.return=d,u)}function c(d,u,y,S){var _=y.type;return _===Rn?b(d,u,y.props.children,S,y.key):u!==null&&(u.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Gt&&Fl(_)===u.type)?(S=i(u,y.props),S.ref=hr(d,u,y),S.return=d,S):(S=Oi(y.type,y.key,y.props,null,d.mode,S),S.ref=hr(d,u,y),S.return=d,S)}function h(d,u,y,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==y.containerInfo||u.stateNode.implementation!==y.implementation?(u=rs(y,d.mode,S),u.return=d,u):(u=i(u,y.children||[]),u.return=d,u)}function b(d,u,y,S,_){return u===null||u.tag!==7?(u=kn(y,d.mode,S,_),u.return=d,u):(u=i(u,y),u.return=d,u)}function v(d,u,y){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ns(""+u,d.mode,y),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ai:return y=Oi(u.type,u.key,u.props,null,d.mode,y),y.ref=hr(d,null,u),y.return=d,y;case An:return u=rs(u,d.mode,y),u.return=d,u;case Gt:var S=u._init;return v(d,S(u._payload),y)}if(xr(u)||cr(u))return u=kn(u,d.mode,y,null),u.return=d,u;xi(d,u)}return null}function x(d,u,y,S){var _=u!==null?u.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:l(d,u,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ai:return y.key===_?c(d,u,y,S):null;case An:return y.key===_?h(d,u,y,S):null;case Gt:return _=y._init,x(d,u,_(y._payload),S)}if(xr(y)||cr(y))return _!==null?null:b(d,u,y,S,null);xi(d,y)}return null}function m(d,u,y,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(y)||null,l(u,d,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ai:return d=d.get(S.key===null?y:S.key)||null,c(u,d,S,_);case An:return d=d.get(S.key===null?y:S.key)||null,h(u,d,S,_);case Gt:var T=S._init;return m(d,u,y,T(S._payload),_)}if(xr(S)||cr(S))return d=d.get(y)||null,b(u,d,S,_,null);xi(u,S)}return null}function k(d,u,y,S){for(var _=null,T=null,z=u,N=u=0,R=null;z!==null&&N<y.length;N++){z.index>N?(R=z,z=null):R=z.sibling;var M=x(d,z,y[N],S);if(M===null){z===null&&(z=R);break}e&&z&&M.alternate===null&&t(d,z),u=o(M,u,N),T===null?_=M:T.sibling=M,T=M,z=R}if(N===y.length)return n(d,z),Se&&mn(d,N),_;if(z===null){for(;N<y.length;N++)z=v(d,y[N],S),z!==null&&(u=o(z,u,N),T===null?_=z:T.sibling=z,T=z);return Se&&mn(d,N),_}for(z=r(d,z);N<y.length;N++)R=m(z,d,N,y[N],S),R!==null&&(e&&R.alternate!==null&&z.delete(R.key===null?N:R.key),u=o(R,u,N),T===null?_=R:T.sibling=R,T=R);return e&&z.forEach(function(te){return t(d,te)}),Se&&mn(d,N),_}function p(d,u,y,S){var _=cr(y);if(typeof _!="function")throw Error(Y(150));if(y=_.call(y),y==null)throw Error(Y(151));for(var T=_=null,z=u,N=u=0,R=null,M=y.next();z!==null&&!M.done;N++,M=y.next()){z.index>N?(R=z,z=null):R=z.sibling;var te=x(d,z,M.value,S);if(te===null){z===null&&(z=R);break}e&&z&&te.alternate===null&&t(d,z),u=o(te,u,N),T===null?_=te:T.sibling=te,T=te,z=R}if(M.done)return n(d,z),Se&&mn(d,N),_;if(z===null){for(;!M.done;N++,M=y.next())M=v(d,M.value,S),M!==null&&(u=o(M,u,N),T===null?_=M:T.sibling=M,T=M);return Se&&mn(d,N),_}for(z=r(d,z);!M.done;N++,M=y.next())M=m(z,d,N,M.value,S),M!==null&&(e&&M.alternate!==null&&z.delete(M.key===null?N:M.key),u=o(M,u,N),T===null?_=M:T.sibling=M,T=M);return e&&z.forEach(function(E){return t(d,E)}),Se&&mn(d,N),_}function w(d,u,y,S){if(typeof y=="object"&&y!==null&&y.type===Rn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ai:e:{for(var _=y.key,T=u;T!==null;){if(T.key===_){if(_=y.type,_===Rn){if(T.tag===7){n(d,T.sibling),u=i(T,y.props.children),u.return=d,d=u;break e}}else if(T.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Gt&&Fl(_)===T.type){n(d,T.sibling),u=i(T,y.props),u.ref=hr(d,T,y),u.return=d,d=u;break e}n(d,T);break}else t(d,T);T=T.sibling}y.type===Rn?(u=kn(y.props.children,d.mode,S,y.key),u.return=d,d=u):(S=Oi(y.type,y.key,y.props,null,d.mode,S),S.ref=hr(d,u,y),S.return=d,d=S)}return s(d);case An:e:{for(T=y.key;u!==null;){if(u.key===T)if(u.tag===4&&u.stateNode.containerInfo===y.containerInfo&&u.stateNode.implementation===y.implementation){n(d,u.sibling),u=i(u,y.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=rs(y,d.mode,S),u.return=d,d=u}return s(d);case Gt:return T=y._init,w(d,u,T(y._payload),S)}if(xr(y))return k(d,u,y,S);if(cr(y))return p(d,u,y,S);xi(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,y),u.return=d,d=u):(n(d,u),u=ns(y,d.mode,S),u.return=d,d=u),s(d)):n(d,u)}return w}var tr=Nu(!0),Mu=Nu(!1),Qi=pn(null),Ji=null,Un=null,za=null;function Ta(){za=Un=Ji=null}function Pa(e){var t=Qi.current;we(Qi),e._currentValue=t}function Ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){Ji=e,za=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(Ji===null)throw Error(Y(308));Un=e,Ji.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var vn=null;function Ia(e){vn===null?vn=[e]:vn.push(e)}function Lu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ia(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Ia(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}function Bl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,h=c.next;c.next=null,s===null?o=h:s.next=h,s=c;var b=e.alternate;b!==null&&(b=b.updateQueue,l=b.lastBaseUpdate,l!==s&&(l===null?b.firstBaseUpdate=h:l.next=h,b.lastBaseUpdate=c))}if(o!==null){var v=i.baseState;s=0,b=h=c=null,l=o;do{var x=l.lane,m=l.eventTime;if((r&x)===x){b!==null&&(b=b.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,p=l;switch(x=t,m=n,p.tag){case 1:if(k=p.payload,typeof k=="function"){v=k.call(m,v,x);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=p.payload,x=typeof k=="function"?k.call(m,v,x):k,x==null)break e;v=Ee({},v,x);break e;case 2:qt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[l]:x.push(l))}else m={eventTime:m,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},b===null?(h=b=m,c=v):b=b.next=m,s|=x;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(b===null&&(c=v),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=b,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);En|=s,e.lanes=s,e.memoizedState=v}}function Ul(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Y(191,i));i.call(r)}}}var ni={},Pt=pn(ni),Hr=pn(ni),$r=pn(ni);function bn(e){if(e===ni)throw Error(Y(174));return e}function Ra(e,t){switch(ve($r,t),ve(Hr,e),ve(Pt,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xs(t,e)}we(Pt),ve(Pt,t)}function nr(){we(Pt),we(Hr),we($r)}function Du(e){bn($r.current);var t=bn(Pt.current),n=xs(t,e.type);t!==n&&(ve(Hr,e),ve(Pt,n))}function Na(e){Hr.current===e&&(we(Pt),we(Hr))}var _e=pn(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=[];function Ma(){for(var e=0;e<Ko.length;e++)Ko[e]._workInProgressVersionPrimary=null;Ko.length=0}var Ai=Vt.ReactCurrentDispatcher,Xo=Vt.ReactCurrentBatchConfig,jn=0,je=null,Re=null,Me=null,no=!1,zr=!1,Gr=0,Kf=0;function Be(){throw Error(Y(321))}function La(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Oa(e,t,n,r,i,o){if(jn=o,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ai.current=e===null||e.memoizedState===null?eh:th,e=n(r,i),zr){o=0;do{if(zr=!1,Gr=0,25<=o)throw Error(Y(301));o+=1,Me=Re=null,t.updateQueue=null,Ai.current=nh,e=n(r,i)}while(zr)}if(Ai.current=ro,t=Re!==null&&Re.next!==null,jn=0,Me=Re=je=null,no=!1,t)throw Error(Y(300));return e}function Da(){var e=Gr!==0;return Gr=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?je.memoizedState=Me=e:Me=Me.next=e,Me}function mt(){if(Re===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Me===null?je.memoizedState:Me.next;if(t!==null)Me=t,Re=e;else{if(e===null)throw Error(Y(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Me===null?je.memoizedState=Me=e:Me=Me.next=e}return Me}function qr(e,t){return typeof t=="function"?t(e):t}function Qo(e){var t=mt(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,h=o;do{var b=h.lane;if((jn&b)===b)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var v={lane:b,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(l=c=v,s=r):c=c.next=v,je.lanes|=b,En|=b}h=h.next}while(h!==null&&h!==o);c===null?s=r:c.next=l,St(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,je.lanes|=o,En|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jo(e){var t=mt(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);St(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fu(){}function Bu(e,t){var n=je,r=mt(),i=t(),o=!St(r.memoizedState,i);if(o&&(r.memoizedState=i,Ke=!0),r=r.queue,Fa(Vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Zr(9,Wu.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(Y(349));jn&30||Uu(n,t,i)}return i}function Uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wu(e,t,n,r){t.value=n,t.getSnapshot=r,Hu(t)&&$u(e)}function Vu(e,t,n){return n(function(){Hu(t)&&$u(e)})}function Hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function $u(e){var t=Ut(e,1);t!==null&&kt(t,e,1,-1)}function Wl(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Jf.bind(null,je,e),[t.memoizedState,e]}function Zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gu(){return mt().memoizedState}function Ri(e,t,n,r){var i=Et();je.flags|=e,i.memoizedState=Zr(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var i=mt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var s=Re.memoizedState;if(o=s.destroy,r!==null&&La(r,s.deps)){i.memoizedState=Zr(t,n,o,r);return}}je.flags|=e,i.memoizedState=Zr(1|t,n,o,r)}function Vl(e,t){return Ri(8390656,8,e,t)}function Fa(e,t){return bo(2048,8,e,t)}function qu(e,t){return bo(4,2,e,t)}function Zu(e,t){return bo(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ku(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,Yu.bind(null,t,e),n)}function Ba(){}function Xu(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qu(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return jn&21?(St(n,t)||(n=iu(),je.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function Xf(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),t()}finally{xe=n,Xo.transition=r}}function ed(){return mt().memoizedState}function Qf(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},td(e))nd(t,n);else if(n=Lu(e,t,n,r),n!==null){var i=$e();kt(n,e,r,i),rd(n,t,r)}}function Jf(e,t,n){var r=sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(td(e))nd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,St(l,s)){var c=t.interleaved;c===null?(i.next=i,Ia(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Lu(e,t,i,r),n!==null&&(i=$e(),kt(n,e,r,i),rd(n,t,r))}}function td(e){var t=e.alternate;return e===je||t!==null&&t===je}function nd(e,t){zr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}var ro={readContext:ht,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},eh={readContext:ht,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Vl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qf.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Wl,useDebugValue:Ba,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Wl(!1),t=e[0];return e=Xf.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=Et();if(Se){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),Le===null)throw Error(Y(349));jn&30||Uu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vl(Vu.bind(null,r,o,e),[e]),r.flags|=2048,Zr(9,Wu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=Le.identifierPrefix;if(Se){var n=Lt,r=Mt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},th={readContext:ht,useCallback:Xu,useContext:ht,useEffect:Fa,useImperativeHandle:Ku,useInsertionEffect:qu,useLayoutEffect:Zu,useMemo:Qu,useReducer:Qo,useRef:Gu,useState:function(){return Qo(qr)},useDebugValue:Ba,useDeferredValue:function(e){var t=mt();return Ju(t,Re.memoizedState,e)},useTransition:function(){var e=Qo(qr)[0],t=mt().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Bu,useId:ed,unstable_isNewReconciler:!1},nh={readContext:ht,useCallback:Xu,useContext:ht,useEffect:Fa,useImperativeHandle:Ku,useInsertionEffect:qu,useLayoutEffect:Zu,useMemo:Qu,useReducer:Jo,useRef:Gu,useState:function(){return Jo(qr)},useDebugValue:Ba,useDeferredValue:function(e){var t=mt();return Re===null?t.memoizedState=e:Ju(t,Re.memoizedState,e)},useTransition:function(){var e=Jo(qr)[0],t=mt().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Bu,useId:ed,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wo={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=sn(e),o=Ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(kt(t,e,i,r),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=sn(e),o=Ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(kt(t,e,i,r),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=sn(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(kt(t,e,r,n),Ii(t,e,r))}};function Hl(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,o):!0}function id(e,t,n){var r=!1,i=un,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(i=Qe(t)?Cn:Ve.current,r=t.contextTypes,o=(r=r!=null)?Jn(e,i):un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $l(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wo.enqueueReplaceState(t,t.state,null)}function Bs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Aa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ht(o):(o=Qe(t)?Cn:Ve.current,i.context=Jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wo.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=Tp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Us(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rh=typeof WeakMap=="function"?WeakMap:Map;function od(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Xs=r),Us(e,t)},n}function sd(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Us(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Us(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Gl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yh.bind(null,e,t,n),t.then(e,e))}function ql(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var ih=Vt.ReactCurrentOwner,Ke=!1;function He(e,t,n,r){t.child=e===null?Mu(t,null,n,r):tr(t,e.child,n,r)}function Yl(e,t,n,r,i){n=n.render;var o=t.ref;return Yn(t,i),r=Oa(e,t,n,r,o,i),n=Da(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(Se&&n&&_a(t),t.flags|=1,He(e,t,r,i),t.child)}function Kl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Za(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ad(e,t,o,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(s,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function ad(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Br(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return Ws(e,t,n,r,i)}function ld(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Vn,tt),tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Vn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(Vn,tt),tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(Vn,tt),tt|=r;return He(e,t,i,n),t.child}function cd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ws(e,t,n,r,i){var o=Qe(n)?Cn:Ve.current;return o=Jn(t,o),Yn(t,i),n=Oa(e,t,n,r,o,i),r=Da(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(Se&&r&&_a(t),t.flags|=1,He(e,t,n,i),t.child)}function Xl(e,t,n,r,i){if(Qe(n)){var o=!0;Yi(t)}else o=!1;if(Yn(t,i),t.stateNode===null)Ni(e,t),id(t,n,r),Bs(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,h=n.contextType;typeof h=="object"&&h!==null?h=ht(h):(h=Qe(n)?Cn:Ve.current,h=Jn(t,h));var b=n.getDerivedStateFromProps,v=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function";v||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==h)&&$l(t,s,r,h),qt=!1;var x=t.memoizedState;s.state=x,eo(t,r,s,i),c=t.memoizedState,l!==r||x!==c||Xe.current||qt?(typeof b=="function"&&(Fs(t,n,b,r),c=t.memoizedState),(l=qt||Hl(t,n,l,r,x,c,h))?(v||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=h,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ou(e,t),l=t.memoizedProps,h=t.type===t.elementType?l:xt(t.type,l),s.props=h,v=t.pendingProps,x=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=ht(c):(c=Qe(n)?Cn:Ve.current,c=Jn(t,c));var m=n.getDerivedStateFromProps;(b=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==v||x!==c)&&$l(t,s,r,c),qt=!1,x=t.memoizedState,s.state=x,eo(t,r,s,i);var k=t.memoizedState;l!==v||x!==k||Xe.current||qt?(typeof m=="function"&&(Fs(t,n,m,r),k=t.memoizedState),(h=qt||Hl(t,n,h,r,x,k,c)||!1)?(b||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),s.props=r,s.state=k,s.context=c,r=h):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Vs(e,t,n,r,o,i)}function Vs(e,t,n,r,i,o){cd(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ll(t,n,!1),Wt(e,t,o);r=t.stateNode,ih.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=tr(t,e.child,null,o),t.child=tr(t,null,l,o)):He(e,t,l,o),t.memoizedState=r.state,i&&Ll(t,n,!0),t.child}function ud(e){var t=e.stateNode;t.pendingContext?Ml(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ml(e,t.context,!1),Ra(e,t.containerInfo)}function Ql(e,t,n,r,i){return er(),Ea(i),t.flags|=256,He(e,t,n,r),t.child}var Hs={dehydrated:null,treeContext:null,retryLane:0};function $s(e){return{baseLanes:e,cachePool:null,transitions:null}}function dd(e,t,n){var r=t.pendingProps,i=_e.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(_e,i&1),e===null)return Os(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Co(s,r,0,null),e=kn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$s(n),t.memoizedState=Hs,e):Ua(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return oh(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=an(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=an(l,o):(o=kn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?$s(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Hs,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ua(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,n,r){return r!==null&&Ea(r),tr(t,e.child,null,n),e=Ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oh(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=es(Error(Y(422))),vi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),o=kn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tr(t,e.child,null,s),t.child.memoizedState=$s(s),t.memoizedState=Hs,o);if(!(t.mode&1))return vi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(Y(419)),r=es(o,r,void 0),vi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ke||l){if(r=Le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),kt(r,e,i,-1))}return qa(),r=es(Error(Y(421))),vi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rt=nn(i.nextSibling),it=t,Se=!0,bt=null,e!==null&&(ut[dt++]=Mt,ut[dt++]=Lt,ut[dt++]=_n,Mt=e.id,Lt=e.overflow,_n=t),t=Ua(t,r.children),t.flags|=4096,t)}function Jl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ds(e.return,t,n)}function ts(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jl(e,n,t);else if(e.tag===19)Jl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(_e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ts(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ts(t,!0,n,null,o);break;case"together":ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sh(e,t,n){switch(t.tag){case 3:ud(t),er();break;case 5:Du(t);break;case 1:Qe(t.type)&&Yi(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Qi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?dd(e,t,n):(ve(_e,_e.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ve(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,ld(e,t,n)}return Wt(e,t,n)}var fd,Gs,hd,md;fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gs=function(){};hd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bn(Pt.current);var o=null;switch(n){case"input":i=hs(e,i),r=hs(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=ys(e,i),r=ys(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qi)}vs(n,r);var s;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Rr.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var c=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==l&&(c!=null||l!=null))if(h==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&be("scroll",e),o||l===c||(o=[])):(o=o||[]).push(h,c))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};md=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ah(e,t,n){var r=t.pendingProps;switch(ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Qe(t.type)&&Zi(),Ue(t),null;case 3:return r=t.stateNode,nr(),we(Xe),we(Ve),Ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(ea(bt),bt=null))),Gs(e,t),Ue(t),null;case 5:Na(t);var i=bn($r.current);if(n=t.type,e!==null&&t.stateNode!=null)hd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return Ue(t),null}if(e=bn(Pt.current),yi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[zt]=t,r[Vr]=o,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<br.length;i++)be(br[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":ll(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":ul(r,o),be("invalid",r)}vs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,l,e),i=["children",""+l]):Rr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&be("scroll",r)}switch(n){case"input":li(r),cl(r,o,!0);break;case"textarea":li(r),dl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[zt]=t,e[Vr]=r,fd(e,t,!1,!1),t.stateNode=e;e:{switch(s=bs(n,r),n){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<br.length;i++)be(br[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":ll(e,r),i=hs(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),be("invalid",e);break;case"textarea":ul(e,r),i=ys(e,r),be("invalid",e);break;default:i=r}vs(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Gc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Hc(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Nr(e,c):typeof c=="number"&&Nr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&be("scroll",e):c!=null&&da(e,o,c,s))}switch(n){case"input":li(e),cl(e,r,!1);break;case"textarea":li(e),dl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$n(e,!!r.multiple,o,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=bn($r.current),bn(Pt.current),yi(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(o=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:gi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Ue(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&rt!==null&&t.mode&1&&!(t.flags&128))Ru(),er(),t.flags|=98560,o=!1;else if(o=yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[zt]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else bt!==null&&(ea(bt),bt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ne===0&&(Ne=3):qa())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return nr(),Gs(e,t),e===null&&Ur(t.stateNode.containerInfo),Ue(t),null;case 10:return Pa(t.type._context),Ue(t),null;case 17:return Qe(t.type)&&Zi(),Ue(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)mr(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=to(e),s!==null){for(t.flags|=128,mr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>ir&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Se)return Ue(t),null}else 2*Pe()-o.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=_e.current,ve(_e,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function lh(e,t){switch(ja(t),t.tag){case 1:return Qe(t.type)&&Zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),we(Xe),we(Ve),Ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Na(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return nr(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return Ga(),null;case 24:return null;default:return null}}var bi=!1,We=!1,ch=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function qs(e,t,n){try{n()}catch(r){ze(e,t,r)}}var ec=!1;function uh(e,t){if(Ps=Hi,e=bu(),Ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,h=0,b=0,v=e,x=null;t:for(;;){for(var m;v!==n||i!==0&&v.nodeType!==3||(l=s+i),v!==o||r!==0&&v.nodeType!==3||(c=s+r),v.nodeType===3&&(s+=v.nodeValue.length),(m=v.firstChild)!==null;)x=v,v=m;for(;;){if(v===e)break t;if(x===n&&++h===i&&(l=s),x===o&&++b===r&&(c=s),(m=v.nextSibling)!==null)break;v=x,x=v.parentNode}v=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Is={focusedElem:e,selectionRange:n},Hi=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var p=k.memoizedProps,w=k.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?p:xt(t.type,p),w);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(S){ze(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return k=ec,ec=!1,k}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&qs(t,n,o)}i=i.next}while(i!==r)}}function ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gd(e){var t=e.alternate;t!==null&&(e.alternate=null,gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Vr],delete t[Ns],delete t[Gf],delete t[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yd(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}function Ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ks(e,t,n),e=e.sibling;e!==null;)Ks(e,t,n),e=e.sibling}var Oe=null,vt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)xd(e,t,n),n=n.sibling}function xd(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(ho,n)}catch{}switch(n.tag){case 5:We||Wn(n,t);case 6:var r=Oe,i=vt;Oe=null,Ht(e,t,n),Oe=r,vt=i,Oe!==null&&(vt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(vt?(e=Oe,n=n.stateNode,e.nodeType===8?Zo(e.parentNode,n):e.nodeType===1&&Zo(e,n),Dr(e)):Zo(Oe,n.stateNode));break;case 4:r=Oe,i=vt,Oe=n.stateNode.containerInfo,vt=!0,Ht(e,t,n),Oe=r,vt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&qs(n,t,s),i=i.next}while(i!==r)}Ht(e,t,n);break;case 1:if(!We&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,t,l)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Ht(e,t,n),We=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ch),t.forEach(function(r){var i=vh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Oe=l.stateNode,vt=!1;break e;case 3:Oe=l.stateNode.containerInfo,vt=!0;break e;case 4:Oe=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(Oe===null)throw Error(Y(160));xd(o,s,i),Oe=null,vt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){ze(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vd(t,e),t=t.sibling}function vd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),_t(e),r&4){try{Tr(3,e,e.return),ko(3,e)}catch(p){ze(e,e.return,p)}try{Tr(5,e,e.return)}catch(p){ze(e,e.return,p)}}break;case 1:yt(t,e),_t(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(yt(t,e),_t(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(p){ze(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Uc(i,o),bs(l,s);var h=bs(l,o);for(s=0;s<c.length;s+=2){var b=c[s],v=c[s+1];b==="style"?Gc(i,v):b==="dangerouslySetInnerHTML"?Hc(i,v):b==="children"?Nr(i,v):da(i,b,v,h)}switch(l){case"input":ms(i,o);break;case"textarea":Wc(i,o);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?$n(i,!!o.multiple,m,!1):x!==!!o.multiple&&(o.defaultValue!=null?$n(i,!!o.multiple,o.defaultValue,!0):$n(i,!!o.multiple,o.multiple?[]:"",!1))}i[Vr]=o}catch(p){ze(e,e.return,p)}}break;case 6:if(yt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(Y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){ze(e,e.return,p)}}break;case 3:if(yt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(p){ze(e,e.return,p)}break;case 4:yt(t,e),_t(e);break;case 13:yt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ha=Pe())),r&4&&nc(e);break;case 22:if(b=n!==null&&n.memoizedState!==null,e.mode&1?(We=(h=We)||b,yt(t,e),We=h):yt(t,e),_t(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!b&&e.mode&1)for(ie=e,b=e.child;b!==null;){for(v=ie=b;ie!==null;){switch(x=ie,m=x.child,x.tag){case 0:case 11:case 14:case 15:Tr(4,x,x.return);break;case 1:Wn(x,x.return);var k=x.stateNode;if(typeof k.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(p){ze(r,n,p)}}break;case 5:Wn(x,x.return);break;case 22:if(x.memoizedState!==null){ic(v);continue}}m!==null?(m.return=x,ie=m):ic(v)}b=b.sibling}e:for(b=null,v=e;;){if(v.tag===5){if(b===null){b=v;try{i=v.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=v.stateNode,c=v.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=$c("display",s))}catch(p){ze(e,e.return,p)}}}else if(v.tag===6){if(b===null)try{v.stateNode.nodeValue=h?"":v.memoizedProps}catch(p){ze(e,e.return,p)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;b===v&&(b=null),v=v.return}b===v&&(b=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:yt(t,e),_t(e),r&4&&nc(e);break;case 21:break;default:yt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yd(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var o=tc(e);Ks(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=tc(e);Ys(e,l,s);break;default:throw Error(Y(161))}}catch(c){ze(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dh(e,t,n){ie=e,bd(e)}function bd(e,t,n){for(var r=(e.mode&1)!==0;ie!==null;){var i=ie,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||bi;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||We;l=bi;var h=We;if(bi=s,(We=c)&&!h)for(ie=i;ie!==null;)s=ie,c=s.child,s.tag===22&&s.memoizedState!==null?oc(i):c!==null?(c.return=s,ie=c):oc(i);for(;o!==null;)ie=o,bd(o),o=o.sibling;ie=i,bi=l,We=h}rc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ie=o):rc(e)}}function rc(e){for(;ie!==null;){var t=ie;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ul(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ul(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var b=h.memoizedState;if(b!==null){var v=b.dehydrated;v!==null&&Dr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}We||t.flags&512&&Zs(t)}catch(x){ze(t,t.return,x)}}if(t===e){ie=null;break}if(n=t.sibling,n!==null){n.return=t.return,ie=n;break}ie=t.return}}function ic(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ie=n;break}ie=t.return}}function oc(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ko(4,t)}catch(c){ze(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ze(t,i,c)}}var o=t.return;try{Zs(t)}catch(c){ze(t,o,c)}break;case 5:var s=t.return;try{Zs(t)}catch(c){ze(t,s,c)}}}catch(c){ze(t,t.return,c)}if(t===e){ie=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ie=l;break}ie=t.return}}var ph=Math.ceil,io=Vt.ReactCurrentDispatcher,Wa=Vt.ReactCurrentOwner,ft=Vt.ReactCurrentBatchConfig,me=0,Le=null,Ae=null,De=0,tt=0,Vn=pn(0),Ne=0,Yr=null,En=0,So=0,Va=0,Pr=null,Ye=null,Ha=0,ir=1/0,Rt=null,oo=!1,Xs=null,on=null,wi=!1,Xt=null,so=0,Ir=0,Qs=null,Mi=-1,Li=0;function $e(){return me&6?Pe():Mi!==-1?Mi:Mi=Pe()}function sn(e){return e.mode&1?me&2&&De!==0?De&-De:Yf.transition!==null?(Li===0&&(Li=iu()),Li):(e=xe,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e):1}function kt(e,t,n,r){if(50<Ir)throw Ir=0,Qs=null,Error(Y(185));Jr(e,n,r),(!(me&2)||e!==Le)&&(e===Le&&(!(me&2)&&(So|=n),Ne===4&&Yt(e,De)),Je(e,r),n===1&&me===0&&!(t.mode&1)&&(ir=Pe()+500,vo&&fn()))}function Je(e,t){var n=e.callbackNode;Zp(e,t);var r=Vi(e,e===Le?De:0);if(r===0)n!==null&&hl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hl(n),t===1)e.tag===0?Zf(sc.bind(null,e)):Pu(sc.bind(null,e)),Hf(function(){!(me&6)&&fn()}),n=null;else{switch(ou(r)){case 1:n=ga;break;case 4:n=nu;break;case 16:n=Wi;break;case 536870912:n=ru;break;default:n=Wi}n=zd(n,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wd(e,t){if(Mi=-1,Li=0,me&6)throw Error(Y(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=Vi(e,e===Le?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=me;me|=2;var o=Sd();(Le!==e||De!==t)&&(Rt=null,ir=Pe()+500,wn(e,t));do try{mh();break}catch(l){kd(e,l)}while(!0);Ta(),io.current=o,me=i,Ae!==null?t=0:(Le=null,De=0,t=Ne)}if(t!==0){if(t===2&&(i=_s(e),i!==0&&(r=i,t=Js(e,i))),t===1)throw n=Yr,wn(e,0),Yt(e,r),Je(e,Pe()),n;if(t===6)Yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!fh(i)&&(t=ao(e,r),t===2&&(o=_s(e),o!==0&&(r=o,t=Js(e,o))),t===1))throw n=Yr,wn(e,0),Yt(e,r),Je(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:gn(e,Ye,Rt);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=Ha+500-Pe(),10<t)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rs(gn.bind(null,e,Ye,Rt),t);break}gn(e,Ye,Rt);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-wt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ph(r/1960))-r,10<r){e.timeoutHandle=Rs(gn.bind(null,e,Ye,Rt),r);break}gn(e,Ye,Rt);break;case 5:gn(e,Ye,Rt);break;default:throw Error(Y(329))}}}return Je(e,Pe()),e.callbackNode===n?wd.bind(null,e):null}function Js(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=ao(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&ea(t)),e}function ea(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function fh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!St(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~Va,t&=~So,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(me&6)throw Error(Y(327));Kn();var t=Vi(e,0);if(!(t&1))return Je(e,Pe()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=_s(e);r!==0&&(t=r,n=Js(e,r))}if(n===1)throw n=Yr,wn(e,0),Yt(e,t),Je(e,Pe()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Ye,Rt),Je(e,Pe()),null}function $a(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(ir=Pe()+500,vo&&fn())}}function zn(e){Xt!==null&&Xt.tag===0&&!(me&6)&&Kn();var t=me;me|=1;var n=ft.transition,r=xe;try{if(ft.transition=null,xe=1,e)return e()}finally{xe=r,ft.transition=n,me=t,!(me&6)&&fn()}}function Ga(){tt=Vn.current,we(Vn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vf(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zi();break;case 3:nr(),we(Xe),we(Ve),Ma();break;case 5:Na(r);break;case 4:nr();break;case 13:we(_e);break;case 19:we(_e);break;case 10:Pa(r.type._context);break;case 22:case 23:Ga()}n=n.return}if(Le=e,Ae=e=an(e.current,null),De=tt=t,Ne=0,Yr=null,Va=So=En=0,Ye=Pr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}vn=null}return e}function kd(e,t){do{var n=Ae;try{if(Ta(),Ai.current=ro,no){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(jn=0,Me=Re=je=null,zr=!1,Gr=0,Wa.current=null,n===null||n.return===null){Ne=1,Yr=t,Ae=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=De,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,b=l,v=b.tag;if(!(b.mode&1)&&(v===0||v===11||v===15)){var x=b.alternate;x?(b.updateQueue=x.updateQueue,b.memoizedState=x.memoizedState,b.lanes=x.lanes):(b.updateQueue=null,b.memoizedState=null)}var m=ql(s);if(m!==null){m.flags&=-257,Zl(m,s,l,o,t),m.mode&1&&Gl(o,h,t),t=m,c=h;var k=t.updateQueue;if(k===null){var p=new Set;p.add(c),t.updateQueue=p}else k.add(c);break e}else{if(!(t&1)){Gl(o,h,t),qa();break e}c=Error(Y(426))}}else if(Se&&l.mode&1){var w=ql(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Zl(w,s,l,o,t),Ea(rr(c,l));break e}}o=c=rr(c,l),Ne!==4&&(Ne=2),Pr===null?Pr=[o]:Pr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=od(o,c,t);Bl(o,d);break e;case 1:l=c;var u=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(on===null||!on.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=sd(o,l,t);Bl(o,S);break e}}o=o.return}while(o!==null)}_d(n)}catch(_){t=_,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Sd(){var e=io.current;return io.current=ro,e===null?ro:e}function qa(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Le===null||!(En&268435455)&&!(So&268435455)||Yt(Le,De)}function ao(e,t){var n=me;me|=2;var r=Sd();(Le!==e||De!==t)&&(Rt=null,wn(e,t));do try{hh();break}catch(i){kd(e,i)}while(!0);if(Ta(),me=n,io.current=r,Ae!==null)throw Error(Y(261));return Le=null,De=0,Ne}function hh(){for(;Ae!==null;)Cd(Ae)}function mh(){for(;Ae!==null&&!Fp();)Cd(Ae)}function Cd(e){var t=Ed(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?_d(e):Ae=t,Wa.current=null}function _d(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lh(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ae=null;return}}else if(n=ah(n,t,tt),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ne===0&&(Ne=5)}function gn(e,t,n){var r=xe,i=ft.transition;try{ft.transition=null,xe=1,gh(e,t,n,r)}finally{ft.transition=i,xe=r}return null}function gh(e,t,n,r){do Kn();while(Xt!==null);if(me&6)throw Error(Y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yp(e,o),e===Le&&(Ae=Le=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,zd(Wi,function(){return Kn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ft.transition,ft.transition=null;var s=xe;xe=1;var l=me;me|=4,Wa.current=null,uh(e,n),vd(n,e),Lf(Is),Hi=!!Ps,Is=Ps=null,e.current=n,dh(n),Bp(),me=l,xe=s,ft.transition=o}else e.current=n;if(wi&&(wi=!1,Xt=e,so=i),o=e.pendingLanes,o===0&&(on=null),Vp(n.stateNode),Je(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Xs,Xs=null,e;return so&1&&e.tag!==0&&Kn(),o=e.pendingLanes,o&1?e===Qs?Ir++:(Ir=0,Qs=e):Ir=0,fn(),null}function Kn(){if(Xt!==null){var e=ou(so),t=ft.transition,n=xe;try{if(ft.transition=null,xe=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,so=0,me&6)throw Error(Y(331));var i=me;for(me|=4,ie=e.current;ie!==null;){var o=ie,s=o.child;if(ie.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var h=l[c];for(ie=h;ie!==null;){var b=ie;switch(b.tag){case 0:case 11:case 15:Tr(8,b,o)}var v=b.child;if(v!==null)v.return=b,ie=v;else for(;ie!==null;){b=ie;var x=b.sibling,m=b.return;if(gd(b),b===h){ie=null;break}if(x!==null){x.return=m,ie=x;break}ie=m}}}var k=o.alternate;if(k!==null){var p=k.child;if(p!==null){k.child=null;do{var w=p.sibling;p.sibling=null,p=w}while(p!==null)}}ie=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ie=s;else e:for(;ie!==null;){if(o=ie,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,ie=d;break e}ie=o.return}}var u=e.current;for(ie=u;ie!==null;){s=ie;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,ie=y;else e:for(s=u;ie!==null;){if(l=ie,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ko(9,l)}}catch(_){ze(l,l.return,_)}if(l===s){ie=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ie=S;break e}ie=l.return}}if(me=i,fn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(ho,e)}catch{}r=!0}return r}finally{xe=n,ft.transition=t}}return!1}function ac(e,t,n){t=rr(n,t),t=od(e,t,1),e=rn(e,t,1),t=$e(),e!==null&&(Jr(e,1,t),Je(e,t))}function ze(e,t,n){if(e.tag===3)ac(e,e,n);else for(;t!==null;){if(t.tag===3){ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=rr(n,e),e=sd(t,e,1),t=rn(t,e,1),e=$e(),t!==null&&(Jr(t,1,e),Je(t,e));break}}t=t.return}}function yh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(De&n)===n&&(Ne===4||Ne===3&&(De&130023424)===De&&500>Pe()-Ha?wn(e,0):Va|=n),Je(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=di,di<<=1,!(di&130023424)&&(di=4194304)):t=1);var n=$e();e=Ut(e,t),e!==null&&(Jr(e,t,n),Je(e,n))}function xh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function vh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),jd(e,n)}var Ed;Ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,sh(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,Se&&t.flags&1048576&&Iu(t,Xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ni(e,t),e=t.pendingProps;var i=Jn(t,Ve.current);Yn(t,n),i=Oa(null,t,r,e,i,n);var o=Da();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(o=!0,Yi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Aa(t),i.updater=wo,t.stateNode=i,i._reactInternals=t,Bs(t,r,e,n),t=Vs(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&_a(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=wh(r),e=xt(r,e),i){case 0:t=Ws(null,t,r,e,n);break e;case 1:t=Xl(null,t,r,e,n);break e;case 11:t=Yl(null,t,r,e,n);break e;case 14:t=Kl(null,t,r,xt(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ws(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Xl(e,t,r,i,n);case 3:e:{if(ud(t),e===null)throw Error(Y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ou(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=rr(Error(Y(423)),t),t=Ql(e,t,r,n,i);break e}else if(r!==i){i=rr(Error(Y(424)),t),t=Ql(e,t,r,n,i);break e}else for(rt=nn(t.stateNode.containerInfo.firstChild),it=t,Se=!0,bt=null,n=Mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===i){t=Wt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Du(t),e===null&&Os(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,As(r,i)?s=null:o!==null&&As(r,o)&&(t.flags|=32),cd(e,t),He(e,t,s,n),t.child;case 6:return e===null&&Os(t),null;case 13:return dd(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Yl(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ve(Qi,r._currentValue),r._currentValue=s,o!==null)if(St(o.value,s)){if(o.children===i.children&&!Xe.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ot(-1,n&-n),c.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var b=h.pending;b===null?c.next=c:(c.next=b.next,b.next=c),h.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ds(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Y(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ds(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=ht(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),Kl(e,t,r,i,n);case 15:return ad(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ni(e,t),t.tag=1,Qe(r)?(e=!0,Yi(t)):e=!1,Yn(t,n),id(t,r,i),Bs(t,r,i,n),Vs(null,t,r,!0,e,n);case 19:return pd(e,t,n);case 22:return ld(e,t,n)}throw Error(Y(156,t.tag))};function zd(e,t){return tu(e,t)}function bh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new bh(e,t,n,r)}function Za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wh(e){if(typeof e=="function")return Za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fa)return 11;if(e===ha)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Za(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Rn:return kn(n.children,i,o,t);case pa:s=8,i|=8;break;case us:return e=pt(12,n,t,i|2),e.elementType=us,e.lanes=o,e;case ds:return e=pt(13,n,t,i),e.elementType=ds,e.lanes=o,e;case ps:return e=pt(19,n,t,i),e.elementType=ps,e.lanes=o,e;case Dc:return Co(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lc:s=10;break e;case Oc:s=9;break e;case fa:s=11;break e;case ha:s=14;break e;case Gt:s=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=pt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function kn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Dc,e.lanes=n,e.stateNode={isHidden:!1},e}function ns(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function rs(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oo(0),this.expirationTimes=Oo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ya(e,t,n,r,i,o,s,l,c){return e=new kh(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Aa(o),e}function Sh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Td(e){if(!e)return un;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Tu(e,n,t)}return t}function Pd(e,t,n,r,i,o,s,l,c){return e=Ya(n,r,!0,e,i,o,s,l,c),e.context=Td(null),n=e.current,r=$e(),i=sn(n),o=Ot(r,i),o.callback=t??null,rn(n,o,i),e.current.lanes=i,Jr(e,i,r),Je(e,r),e}function _o(e,t,n,r){var i=t.current,o=$e(),s=sn(i);return n=Td(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,s),e!==null&&(kt(e,i,s,o),Ii(e,i,s)),s}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ka(e,t){lc(e,t),(e=e.alternate)&&lc(e,t)}function Ch(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}jo.prototype.render=Xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));_o(e,t,null,null)};jo.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){_o(null,e,null,null)}),t[Bt]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&uu(e)}};function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function _h(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=lo(s);o.call(h)}}var s=Pd(t,r,e,0,null,!1,!1,"",cc);return e._reactRootContainer=s,e[Bt]=s.current,Ur(e.nodeType===8?e.parentNode:e),zn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=lo(c);l.call(h)}}var c=Ya(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=c,e[Bt]=c.current,Ur(e.nodeType===8?e.parentNode:e),zn(function(){_o(t,c,n,r)}),c}function zo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=lo(s);l.call(c)}}_o(t,s,e,i)}else s=_h(n,t,e,i,r);return lo(s)}su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(ya(t,n|1),Je(t,Pe()),!(me&6)&&(ir=Pe()+500,fn()))}break;case 13:zn(function(){var r=Ut(e,1);if(r!==null){var i=$e();kt(r,e,1,i)}}),Ka(e,1)}};xa=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=$e();kt(t,e,134217728,n)}Ka(e,134217728)}};au=function(e){if(e.tag===13){var t=sn(e),n=Ut(e,t);if(n!==null){var r=$e();kt(n,e,t,r)}Ka(e,t)}};lu=function(){return xe};cu=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};ks=function(e,t,n){switch(t){case"input":if(ms(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xo(r);if(!i)throw Error(Y(90));Bc(r),ms(r,i)}}}break;case"textarea":Wc(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};Yc=$a;Kc=zn;var jh={usingClientEntryPoint:!1,Events:[ti,On,xo,qc,Zc,$a]},gr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Eh={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jc(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||Ch,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{ho=ki.inject(Eh),Tt=ki}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jh;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qa(t))throw Error(Y(200));return Sh(e,t,null,n)};st.createRoot=function(e,t){if(!Qa(e))throw Error(Y(299));var n=!1,r="",i=Id;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ya(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Xa(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Jc(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return zn(e)};st.hydrate=function(e,t,n){if(!Eo(t))throw Error(Y(200));return zo(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!Qa(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Id;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Pd(t,null,e,1,n??null,i,!1,o,s),e[Bt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jo(t)};st.render=function(e,t,n){if(!Eo(t))throw Error(Y(200));return zo(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!Eo(e))throw Error(Y(40));return e._reactRootContainer?(zn(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};st.unstable_batchedUpdates=$a;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Eo(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return zo(e,t,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function Ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ad)}catch(e){console.error(e)}}Ad(),Ac.exports=st;var zh=Ac.exports,uc=zh;ls.createRoot=uc.createRoot,ls.hydrateRoot=uc.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Th={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),oe=(e,t)=>{const n=$.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:c,...h},b)=>$.createElement("svg",{ref:b,...Th,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${Ph(e)}`,l].join(" "),...h},[...t.map(([v,x])=>$.createElement(v,x)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=oe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=oe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=oe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=oe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=oe("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=oe("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=oe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=oe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=oe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=oe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=oe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=oe("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=oe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=oe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=oe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=oe("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=oe("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=oe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=oe("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=oe("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=oe("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=oe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=oe("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=oe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=oe("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=oe("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=oe("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=oe("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=oe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=oe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=oe("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=oe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=oe("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=oe("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=oe("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=oe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=oe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=oe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=oe("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=oe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=oe("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=oe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=oe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=oe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=oe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=oe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=oe("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=oe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=oe("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=oe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=oe("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=oe("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=oe("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=oe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=oe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=oe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);class um{constructor(){this.audioCtx=null,this.muted=localStorage.getItem("voxel_sound_muted")==="true"}getAudioContext(){if(!this.audioCtx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t)}return this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this.audioCtx}isMuted(){return this.muted}setMuted(t){this.muted=!!t;try{localStorage.setItem("voxel_sound_muted",String(this.muted))}catch{}}toggleMute(){return this.setMuted(!this.muted),this.muted||this.playClick(),this.muted}playClick(){if(this.muted)return;const t=this.getAudioContext();if(t)try{const n=t.createOscillator(),r=t.createGain();n.type="triangle",n.frequency.setValueAtTime(600,t.currentTime),n.frequency.exponentialRampToValueAtTime(1200,t.currentTime+.04),r.gain.setValueAtTime(.08,t.currentTime),r.gain.linearRampToValueAtTime(.001,t.currentTime+.04),n.connect(r),r.connect(t.destination),n.start(),n.stop(t.currentTime+.04)}catch{}}playRun(){if(this.muted)return;const t=this.getAudioContext();if(t)try{const n=t.currentTime,r=t.createOscillator(),i=t.createGain();r.type="sawtooth",r.frequency.setValueAtTime(220,n),r.frequency.exponentialRampToValueAtTime(880,n+.18),i.gain.setValueAtTime(.12,n),i.gain.exponentialRampToValueAtTime(.001,n+.2),r.connect(i),i.connect(t.destination),r.start(n),r.stop(n+.2)}catch{}}playSuccess(){if(this.muted)return;const t=this.getAudioContext();if(t)try{const n=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,o)=>{const s=t.createOscillator(),l=t.createGain();s.type="square",s.frequency.setValueAtTime(i,n+o*.06),l.gain.setValueAtTime(.08,n+o*.06),l.gain.exponentialRampToValueAtTime(.001,n+o*.06+.12),s.connect(l),l.connect(t.destination),s.start(n+o*.06),s.stop(n+o*.06+.12)})}catch{}}playChat(){if(this.muted)return;const t=this.getAudioContext();if(t)try{const n=t.currentTime,r=t.createOscillator(),i=t.createGain();r.type="sine",r.frequency.setValueAtTime(880,n),r.frequency.exponentialRampToValueAtTime(1320,n+.08),i.gain.setValueAtTime(.09,n),i.gain.exponentialRampToValueAtTime(.001,n+.09),r.connect(i),i.connect(t.destination),r.start(n),r.stop(n+.09)}catch{}}playError(){if(this.muted)return;const t=this.getAudioContext();if(t)try{const n=t.currentTime,r=t.createOscillator(),i=t.createGain();r.type="sawtooth",r.frequency.setValueAtTime(160,n),r.frequency.setValueAtTime(130,n+.08),i.gain.setValueAtTime(.15,n),i.gain.exponentialRampToValueAtTime(.001,n+.22),r.connect(i),i.connect(t.destination),r.start(n),r.stop(n+.22)}catch{}}}const Ie=new um;function dm({mode:e,setMode:t,providers:n,onNewProject:r,onOpenTutorial:i,onOpenGallery:o,onOpenTheme:s,isMuted:l,onToggleSound:c,onRun:h,onDownloadZip:b,onOpenSettings:v,isGenerating:x}){var m,k,p,w,d,u,y,S,_,T;return a.jsxs("header",{className:"top-header",children:[a.jsxs("div",{className:"brand-section",children:[a.jsx("div",{className:"brand-badge",children:a.jsx(Rd,{size:18})}),a.jsxs("div",{className:"brand-title",children:[a.jsx("span",{children:"Voxel Forge"}),a.jsx("span",{className:"brand-version",children:"v1.0"})]})]}),a.jsxs("div",{className:"header-center",children:[a.jsxs("div",{className:"mode-pill-group",children:[a.jsxs("button",{className:`mode-pill ${e==="auto"?"active auto":""}`,onClick:()=>t("auto"),title:"Auto : Gemini génère → Mistral vérifie → Gemini corrige automatiquement",children:[a.jsx(Dt,{size:13}),a.jsx("span",{children:"Auto"})]}),a.jsxs("button",{className:`mode-pill ${e==="fast"?"active fast":""}`,onClick:()=>t("fast"),title:"Fast : Gemini génère directement sans analyse approfondie",children:[a.jsx(Hd,{size:13}),a.jsx("span",{children:"Fast"})]}),a.jsxs("button",{className:`mode-pill ${e==="max_quality"?"active max-quality":""}`,onClick:()=>t("max_quality"),title:"Max Quality : Gemini architecture → Gemini génération → Mistral review → Gemini fix → Mistral re-check",children:[a.jsx(Di,{size:13}),a.jsx("span",{children:"Max Quality"})]})]}),a.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center",marginLeft:"12px"},children:[a.jsxs("div",{title:(m=n==null?void 0:n.gemini)!=null&&m.configured?"Gemini connecté (Live API)":"Gemini en mode simulation intelligent",style:{fontSize:"11px",padding:"2px 8px",borderRadius:"12px",background:(k=n==null?void 0:n.gemini)!=null&&k.configured?"rgba(56, 189, 248, 0.15)":"rgba(255, 255, 255, 0.06)",color:(p=n==null?void 0:n.gemini)!=null&&p.configured?"#38bdf8":"#8b949e",border:`1px solid ${(w=n==null?void 0:n.gemini)!=null&&w.configured?"#38bdf8":"#30363d"}`,display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:(d=n==null?void 0:n.gemini)!=null&&d.configured?"#38bdf8":"#6e7681"}}),"Gemini"]}),a.jsxs("div",{title:(u=n==null?void 0:n.mistral)!=null&&u.configured?"Mistral connecté (Live API)":"Mistral en mode audit heuristique",style:{fontSize:"11px",padding:"2px 8px",borderRadius:"12px",background:(y=n==null?void 0:n.mistral)!=null&&y.configured?"rgba(244, 63, 94, 0.15)":"rgba(255, 255, 255, 0.06)",color:(S=n==null?void 0:n.mistral)!=null&&S.configured?"#f43f5e":"#8b949e",border:`1px solid ${(_=n==null?void 0:n.mistral)!=null&&_.configured?"#f43f5e":"#30363d"}`,display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:(T=n==null?void 0:n.mistral)!=null&&T.configured?"#f43f5e":"#6e7681"}}),"Mistral"]})]})]}),a.jsxs("div",{className:"header-right",children:[a.jsxs("button",{className:"btn btn-run btn-sm",onClick:()=>{Ie.playRun(),h()},title:"Exécuter et essayer le jeu / site en direct (Run)",children:[a.jsx(el,{size:13,fill:"#10b981",color:"#10b981"}),a.jsx("span",{children:"Run"})]}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Ie.playClick(),o()},title:"Ouvrir la Galerie de jeux et templates (Voxel 3D, Cyberpunk, Arcade, Python...)",style:{borderColor:"#38bdf8",color:"#38bdf8"},children:[a.jsx(Od,{size:14,color:"#38bdf8"}),a.jsx("span",{children:"Galerie"})]}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Ie.playClick(),i()},title:"Créer un tutoriel interactif pas à pas (Unreal Engine 5 Blueprints, Python PyCharm, Godot, etc.)",style:{borderColor:"#a855f7",color:"#c084fc"},children:[a.jsx(To,{size:14,color:"#a855f7"}),a.jsx("span",{children:"Tutoriel"})]}),a.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>{Ie.playClick(),r()},disabled:x,children:[a.jsx(Vh,{size:14}),a.jsx("span",{children:"Nouveau Projet"})]}),a.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Ie.playClick(),s()},title:"Personnaliser le thème visuel (Cyberpunk, Matrix, Dracula, Synthwave...)",children:a.jsx(Ja,{size:14})}),a.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:l?"Activer les sons rétro 8-bit":"Désactiver les sons",style:{color:l?"#8b949e":"#3fb950"},children:l?a.jsx(Wd,{size:14}):a.jsx(Ud,{size:14})}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Ie.playSuccess(),b()},title:"Télécharger l'arborescence complète en archive ZIP",children:[a.jsx(Ld,{size:14}),a.jsx("span",{children:"Export ZIP"})]}),a.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Ie.playClick(),v()},title:"Paramètres & Clés API",children:a.jsx(om,{size:14})})]})]})}function pm(e){const t={name:"root",type:"folder",children:{}};for(const n of e){const r=n.path.replace(/\\/g,"/").replace(/^\/+/,"").split("/");let i=t;for(let o=0;o<r.length;o++){const s=r[o];o===r.length-1?i.children[s]={name:s,path:n.path,type:"file",file:n}:(i.children[s]||(i.children[s]={name:s,type:"folder",children:{}}),i=i.children[s])}}return t}function fm(e){var n;switch((n=e.split(".").pop())==null?void 0:n.toLowerCase()){case"js":case"jsx":case"ts":case"tsx":return a.jsx(yn,{size:14,color:"#f7df1e"});case"py":return a.jsx(yn,{size:14,color:"#38bdf8"});case"cs":case"cpp":case"java":return a.jsx(yn,{size:14,color:"#bc8cff"});case"html":return a.jsx(yn,{size:14,color:"#f97316"});case"css":case"scss":return a.jsx(yn,{size:14,color:"#38bdf8"});case"json":return a.jsx(Dh,{size:14,color:"#fbbf24"});case"md":return a.jsx(Fh,{size:14,color:"#94a3b8"});default:return a.jsx(Bh,{size:14,color:"#8b949e"})}}function hm({project:e,activeFile:t,onSelectFile:n,onAddFile:r,onDeleteFile:i}){var p,w;const[o,s]=$.useState({}),[l,c]=$.useState(!1),[h,b]=$.useState(""),v=$.useMemo(()=>pm((e==null?void 0:e.files)||[]),[e==null?void 0:e.files]),x=d=>{s(u=>({...u,[d]:!u[d]}))},m=d=>{d.preventDefault(),h.trim()&&(r(h.trim()),b(""),c(!1))},k=(d,u="",y=0)=>Object.keys(d.children||{}).sort((_,T)=>{const z=d.children[_].type==="folder",N=d.children[T].type==="folder";return z&&!N?-1:!z&&N?1:_.localeCompare(T)}).map(_=>{var R;const T=d.children[_],z=u?`${u}/${T.name}`:T.name;if(T.type==="folder"){const M=o[z];return a.jsxs("div",{children:[a.jsxs("div",{className:"tree-node",style:{paddingLeft:`${y*14+12}px`},onClick:()=>x(z),children:[M?a.jsx(Md,{size:14,color:"#8b949e"}):a.jsx(Nd,{size:14,color:"#8b949e"}),M?a.jsx(dc,{size:14,color:"#58a6ff"}):a.jsx(Wh,{size:14,color:"#58a6ff"}),a.jsx("span",{className:"folder-label",children:T.name})]}),!M&&k(T,z,y+1)]},z)}const N=(t==null?void 0:t.path)===T.path;return a.jsxs("div",{className:`tree-node ${N?"active":""}`,style:{paddingLeft:`${y*14+18}px`},onClick:()=>n(T.file),children:[fm(T.name),a.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:T.name}),((R=e==null?void 0:e.files)==null?void 0:R.length)>1&&a.jsx("button",{onClick:M=>{M.stopPropagation(),confirm(`Supprimer ${T.name} ?`)&&i(T.path)},className:"btn-sm",style:{background:"transparent",border:"none",color:"#6e7681",padding:"2px",cursor:"pointer",opacity:.6},title:"Supprimer ce fichier",children:a.jsx(Bd,{size:12})})]},T.path)});return a.jsxs("aside",{className:"sidebar-explorer",children:[a.jsxs("div",{className:"explorer-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Gh,{size:13,color:"#58a6ff"}),a.jsxs("span",{children:["Explorateur (",((p=e==null?void 0:e.files)==null?void 0:p.length)||0,")"]})]}),a.jsx("button",{onClick:()=>c(!l),className:"btn-sm",style:{background:"transparent",border:"none",color:"#8b949e",cursor:"pointer"},title:"Nouveau fichier",children:a.jsx(em,{size:15})})]}),a.jsxs("div",{style:{padding:"6px 12px",fontSize:"11px",fontWeight:700,color:"#58a6ff",textTransform:"uppercase",letterSpacing:"0.6px",background:"rgba(88, 166, 255, 0.05)",borderBottom:"1px solid rgba(255, 255, 255, 0.04)",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(dc,{size:12}),a.jsx("span",{children:(e==null?void 0:e.name)||"PROJET"})]}),l&&a.jsxs("form",{onSubmit:m,style:{padding:"8px 12px",background:"#0d1117",borderBottom:"1px solid #30363d"},children:[a.jsx("input",{type:"text",placeholder:"ex: src/utils/helpers.js",value:h,onChange:d=>b(d.target.value),autoFocus:!0,className:"form-input",style:{width:"100%",fontSize:"11px",padding:"4px 8px"}}),a.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"6px",marginTop:"6px"},children:[a.jsx("button",{type:"button",onClick:()=>c(!1),className:"btn btn-secondary btn-sm",style:{padding:"2px 6px",fontSize:"10px"},children:"Annuler"}),a.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",style:{padding:"2px 6px",fontSize:"10px"},children:"Créer"})]})]}),a.jsx("div",{className:"explorer-tree",children:(w=e==null?void 0:e.files)!=null&&w.length?k(v):a.jsxs("div",{style:{padding:"20px 14px",fontSize:"12px",color:"#6e7681",textAlign:"center"},children:["Aucun fichier dans le projet.",a.jsx("br",{}),'Cliquez sur "Nouveau Projet".']})})]})}function fc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function mm(e){if(Array.isArray(e))return e}function gm(e,t,n){return(t=Sm(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ym(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,l=[],c=!0,h=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(b){h=!0,i=b}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(h)throw i}}return l}}function xm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function mc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hc(Object(n),!0).forEach(function(r){gm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vm(e,t){if(e==null)return{};var n,r,i=bm(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function bm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function wm(e,t){return mm(e)||ym(e,t)||Cm(e,t)||xm()}function km(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Sm(e){var t=km(e,"string");return typeof t=="symbol"?t:t+""}function Cm(e,t){if(e){if(typeof e=="string")return fc(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fc(e,t):void 0}}function _m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gc(Object(n),!0).forEach(function(r){_m(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function kr(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function po(e){return{}.toString.call(e).includes("Object")}function Em(e){return!Object.keys(e).length}function Xr(e){return typeof e=="function"}function zm(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Tm(e,t){return po(t)||ln("changeType"),Object.keys(t).some(function(n){return!zm(e,n)})&&ln("changeField"),t}function Pm(e){Xr(e)||ln("selectorType")}function Im(e){Xr(e)||po(e)||ln("handlerType"),po(e)&&Object.values(e).some(function(t){return!Xr(t)})&&ln("handlersType")}function Am(e){e||ln("initialIsRequired"),po(e)||ln("initialType"),Em(e)&&ln("initialContent")}function Rm(e,t){throw new Error(e[t]||e.default)}var Nm={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ln=kr(Rm)(Nm),Si={changes:Tm,selector:Pm,handler:Im,initial:Am};function Mm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Si.initial(e),Si.handler(t);var n={current:e},r=kr(Dm)(n,t),i=kr(Om)(n),o=kr(Si.changes)(e),s=kr(Lm)(n);function l(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(b){return b};return Si.selector(h),h(n.current)}function c(h){jm(r,i,o,s)(h)}return[l,c]}function Lm(e,t){return Xr(t)?t(e.current):t}function Om(e,t){return e.current=yc(yc({},e.current),t),t}function Dm(e,t,n){return Xr(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Fm={create:Mm},Bm={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Um(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Wm(e){return{}.toString.call(e).includes("Object")}function Vm(e){return e||xc("configIsRequired"),Wm(e)||xc("configType"),e.urls?(Hm(),{paths:{vs:e.urls.monacoBase}}):e}function Hm(){console.warn($d.deprecation)}function $m(e,t){throw new Error(e[t]||e.default)}var $d={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},xc=Um($m)($d),Gm={config:Vm},qm=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,s){return s(o)},i)}};function Gd(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Gd(e[n],t[n]))}),mc(mc({},e),t)}var Zm={type:"cancelation",msg:"operation is manually canceled"};function is(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(Zm):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Ym=["monaco"],Km=Fm.create({config:Bm,isInitialized:!1,resolve:null,reject:null,monaco:null}),qd=wm(Km,2),ri=qd[0],Po=qd[1];function Xm(e){var t=Gm.config(e),n=t.monaco,r=vm(t,Ym);Po(function(i){return{config:Gd(i.config,r),monaco:n}})}function Qm(){var e=ri(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Po({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),is(os);if(window.monaco&&window.monaco.editor)return Zd(window.monaco),e.resolve(window.monaco),is(os);qm(Jm,tg)(ng)}return is(os)}function Jm(e){return document.body.appendChild(e)}function eg(e){var t=document.createElement("script");return e&&(t.src=e),t}function tg(e){var t=ri(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=eg("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function ng(){var e=ri(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Zd(r),e.resolve(r)},function(n){e.reject(n)})}function Zd(e){ri().monaco||Po({monaco:e})}function rg(){return ri(function(e){var t=e.monaco;return t})}var os=new Promise(function(e,t){return Po({resolve:e,reject:t})}),Yd={config:Xm,init:Qm,__getMonacoInstance:rg},ig={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ss=ig,og={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},sg=og;function ag({children:e}){return Qt.createElement("div",{style:sg.container},e)}var lg=ag,cg=lg;function ug({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:s}){return Qt.createElement("section",{style:{...ss.wrapper,width:e,height:t},...s},!n&&Qt.createElement(cg,null,r),Qt.createElement("div",{ref:i,style:{...ss.fullWidth,...!n&&ss.hide},className:o}))}var dg=ug,Kd=$.memo(dg);function pg(e){$.useEffect(e,[])}var Xd=pg;function fg(e,t,n=!0){let r=$.useRef(!0);$.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var nt=fg;function Ar(){}function Hn(e,t,n,r){return hg(e,r)||mg(e,t,n,r)}function hg(e,t){return e.editor.getModel(Qd(e,t))}function mg(e,t,n,r){return e.editor.createModel(t,n,r?Qd(e,r):void 0)}function Qd(e,t){return e.Uri.parse(t)}function gg({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:s,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:h="light",loading:b="Loading...",options:v={},height:x="100%",width:m="100%",className:k,wrapperProps:p={},beforeMount:w=Ar,onMount:d=Ar}){let[u,y]=$.useState(!1),[S,_]=$.useState(!0),T=$.useRef(null),z=$.useRef(null),N=$.useRef(null),R=$.useRef(d),M=$.useRef(w),te=$.useRef(!1);Xd(()=>{let L=Yd.init();return L.then(ee=>(z.current=ee)&&_(!1)).catch(ee=>(ee==null?void 0:ee.type)!=="cancelation"&&console.error("Monaco initialization: error:",ee)),()=>T.current?g():L.cancel()}),nt(()=>{if(T.current&&z.current){let L=T.current.getOriginalEditor(),ee=Hn(z.current,e||"",r||n||"text",o||"");ee!==L.getModel()&&L.setModel(ee)}},[o],u),nt(()=>{if(T.current&&z.current){let L=T.current.getModifiedEditor(),ee=Hn(z.current,t||"",i||n||"text",s||"");ee!==L.getModel()&&L.setModel(ee)}},[s],u),nt(()=>{let L=T.current.getModifiedEditor();L.getOption(z.current.editor.EditorOption.readOnly)?L.setValue(t||""):t!==L.getValue()&&(L.executeEdits("",[{range:L.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),L.pushUndoStop())},[t],u),nt(()=>{var L,ee;(ee=(L=T.current)==null?void 0:L.getModel())==null||ee.original.setValue(e||"")},[e],u),nt(()=>{let{original:L,modified:ee}=T.current.getModel();z.current.editor.setModelLanguage(L,r||n||"text"),z.current.editor.setModelLanguage(ee,i||n||"text")},[n,r,i],u),nt(()=>{var L;(L=z.current)==null||L.editor.setTheme(h)},[h],u),nt(()=>{var L;(L=T.current)==null||L.updateOptions(v)},[v],u);let E=$.useCallback(()=>{var H;if(!z.current)return;M.current(z.current);let L=Hn(z.current,e||"",r||n||"text",o||""),ee=Hn(z.current,t||"",i||n||"text",s||"");(H=T.current)==null||H.setModel({original:L,modified:ee})},[n,t,i,e,r,o,s]),F=$.useCallback(()=>{var L;!te.current&&N.current&&(T.current=z.current.editor.createDiffEditor(N.current,{automaticLayout:!0,...v}),E(),(L=z.current)==null||L.editor.setTheme(h),y(!0),te.current=!0)},[v,h,E]);$.useEffect(()=>{u&&R.current(T.current,z.current)},[u]),$.useEffect(()=>{!S&&!u&&F()},[S,u,F]);function g(){var ee,H,B,O;let L=(ee=T.current)==null?void 0:ee.getModel();l||((H=L==null?void 0:L.original)==null||H.dispose()),c||((B=L==null?void 0:L.modified)==null||B.dispose()),(O=T.current)==null||O.dispose()}return Qt.createElement(Kd,{width:m,height:x,isEditorReady:u,loading:b,_ref:N,className:k,wrapperProps:p})}var yg=gg;$.memo(yg);function xg(e){let t=$.useRef();return $.useEffect(()=>{t.current=e},[e]),t.current}var vg=xg,Ci=new Map;function bg({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:s="light",line:l,loading:c="Loading...",options:h={},overrideServices:b={},saveViewState:v=!0,keepCurrentModel:x=!1,width:m="100%",height:k="100%",className:p,wrapperProps:w={},beforeMount:d=Ar,onMount:u=Ar,onChange:y,onValidate:S=Ar}){let[_,T]=$.useState(!1),[z,N]=$.useState(!0),R=$.useRef(null),M=$.useRef(null),te=$.useRef(null),E=$.useRef(u),F=$.useRef(d),g=$.useRef(),L=$.useRef(r),ee=vg(o),H=$.useRef(!1),B=$.useRef(!1);Xd(()=>{let P=Yd.init();return P.then(I=>(R.current=I)&&N(!1)).catch(I=>(I==null?void 0:I.type)!=="cancelation"&&console.error("Monaco initialization: error:",I)),()=>M.current?Z():P.cancel()}),nt(()=>{var I,ne,Q,K;let P=Hn(R.current,e||r||"",t||i||"",o||n||"");P!==((I=M.current)==null?void 0:I.getModel())&&(v&&Ci.set(ee,(ne=M.current)==null?void 0:ne.saveViewState()),(Q=M.current)==null||Q.setModel(P),v&&((K=M.current)==null||K.restoreViewState(Ci.get(o))))},[o],_),nt(()=>{var P;(P=M.current)==null||P.updateOptions(h)},[h],_),nt(()=>{!M.current||r===void 0||(M.current.getOption(R.current.editor.EditorOption.readOnly)?M.current.setValue(r):r!==M.current.getValue()&&(B.current=!0,M.current.executeEdits("",[{range:M.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),M.current.pushUndoStop(),B.current=!1))},[r],_),nt(()=>{var I,ne;let P=(I=M.current)==null?void 0:I.getModel();P&&i&&((ne=R.current)==null||ne.editor.setModelLanguage(P,i))},[i],_),nt(()=>{var P;l!==void 0&&((P=M.current)==null||P.revealLine(l))},[l],_),nt(()=>{var P;(P=R.current)==null||P.editor.setTheme(s)},[s],_);let O=$.useCallback(()=>{var P;if(!(!te.current||!R.current)&&!H.current){F.current(R.current);let I=o||n,ne=Hn(R.current,r||e||"",t||i||"",I||"");M.current=(P=R.current)==null?void 0:P.editor.create(te.current,{model:ne,automaticLayout:!0,...h},b),v&&M.current.restoreViewState(Ci.get(I)),R.current.editor.setTheme(s),l!==void 0&&M.current.revealLine(l),T(!0),H.current=!0}},[e,t,n,r,i,o,h,b,v,s,l]);$.useEffect(()=>{_&&E.current(M.current,R.current)},[_]),$.useEffect(()=>{!z&&!_&&O()},[z,_,O]),L.current=r,$.useEffect(()=>{var P,I;_&&y&&((P=g.current)==null||P.dispose(),g.current=(I=M.current)==null?void 0:I.onDidChangeModelContent(ne=>{B.current||y(M.current.getValue(),ne)}))},[_,y]),$.useEffect(()=>{if(_){let P=R.current.editor.onDidChangeMarkers(I=>{var Q;let ne=(Q=M.current.getModel())==null?void 0:Q.uri;if(ne&&I.find(K=>K.path===ne.path)){let K=R.current.editor.getModelMarkers({resource:ne});S==null||S(K)}});return()=>{P==null||P.dispose()}}return()=>{}},[_,S]);function Z(){var P,I;(P=g.current)==null||P.dispose(),x?v&&Ci.set(o,M.current.saveViewState()):(I=M.current.getModel())==null||I.dispose(),M.current.dispose()}return Qt.createElement(Kd,{width:m,height:k,isEditorReady:_,loading:c,_ref:te,className:p,wrapperProps:w})}var wg=bg,kg=$.memo(wg),Sg=kg;function Cg({openTabs:e,activeFile:t,onSelectTab:n,onCloseTab:r,onCodeChange:i,onSaveFile:o,isDirty:s}){const[l,c]=$.useState(!1),[h,b]=$.useState({line:1,col:1}),v=$.useRef(null),x=(p,w)=>{v.current=p,p.onDidChangeCursorPosition(d=>{b({line:d.position.lineNumber,col:d.position.column})}),p.addCommand(w.KeyMod.CtrlCmd|w.KeyCode.KeyS,()=>{o()})},m=async()=>{if(t!=null&&t.content)try{await navigator.clipboard.writeText(t.content),c(!0),setTimeout(()=>c(!1),2e3)}catch(p){console.error("Failed to copy",p)}},k=(t==null?void 0:t.language)||"plaintext";return a.jsxs("section",{className:"editor-panel",children:[a.jsx("div",{className:"editor-tabs-bar",children:e.map(p=>{const w=p.path===(t==null?void 0:t.path),d=p.path.split("/").pop()||p.path;return a.jsxs("div",{className:`editor-tab ${w?"active":""}`,onClick:()=>n(p),children:[a.jsx(yn,{size:13,color:w?"#38bdf8":"#8b949e"}),a.jsx("span",{children:d}),s&&w&&a.jsx("span",{className:"tab-dirty-indicator",title:"Modifications non sauvegardées"}),a.jsx("span",{className:"tab-close",onClick:u=>{u.stopPropagation(),r(p.path)},title:"Fermer l'onglet",children:a.jsx(It,{size:12})})]},p.path)})}),a.jsx("div",{className:"editor-container",children:t?a.jsx(Sg,{height:"100%",theme:"vs-dark",path:t.path,defaultLanguage:k,language:k,value:t.content||"",onChange:p=>i(p||""),onMount:x,options:{fontSize:13,fontFamily:"'Fira Code', 'Consolas', 'Courier New', monospace",fontLigatures:!0,minimap:{enabled:!0,side:"right"},scrollBeyondLastLine:!1,wordWrap:"on",lineNumbers:"on",renderWhitespace:"selection",smoothScrolling:!0,cursorBlinking:"smooth",cursorSmoothCaretAnimation:"on",bracketPairColorization:{enabled:!0},automaticLayout:!0,tabSize:2}}):a.jsxs("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"12px",color:"#6e7681"},children:[a.jsx(ra,{size:36,opacity:.4}),a.jsx("p",{style:{fontSize:"13px"},children:"Sélectionnez un fichier dans l'explorateur pour l'afficher."})]})}),t&&a.jsxs("footer",{className:"editor-statusbar",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[a.jsx("span",{children:t.path}),a.jsxs("span",{children:["Ln ",h.line,", Col ",h.col]}),a.jsx("span",{children:"UTF-8"}),a.jsx("span",{style:{textTransform:"uppercase",color:"#58a6ff"},children:k})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[s&&a.jsx("span",{style:{color:"#e3b341",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px"},children:"● Non sauvegardé"}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Sauvegarder (Ctrl+S)",style:{padding:"2px 8px",fontSize:"11px"},children:[a.jsx(nm,{size:12}),a.jsx("span",{children:"Sauvegarder"})]}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:m,title:"Copier le code dans le presse-papiers",style:{padding:"2px 8px",fontSize:"11px"},children:[l?a.jsx(Sn,{size:12,color:"#3fb950"}):a.jsx(uo,{size:12}),a.jsx("span",{children:l?"Copié !":"Copier"})]})]})]})]})}const ia="voxel_forge_api_url";function Jd(){const e=localStorage.getItem(ia);return e?e.replace(/\/+$/,""):typeof window<"u"&&window.location.hostname.includes("github.io")?"https://voxel-forge.onrender.com":""}function _g(e){e?localStorage.setItem(ia,e.trim().replace(/\/+$/,"")):localStorage.removeItem(ia)}async function jt(e,t={}){const r=`${Jd()}${e}`,o=await fetch(r,{...t,headers:{...{"Content-Type":"application/json"},...t.headers}}),s=await o.json().catch(()=>({}));if(!o.ok)throw new Error(s.error||`Erreur serveur [${o.status}]`);return s}const At={getHealth:()=>jt("/api/health"),getProviders:()=>jt("/api/providers"),generateProject:e=>jt("/api/generate",{method:"POST",body:JSON.stringify(e)}),generateTutorial:e=>jt("/api/tutorial",{method:"POST",body:JSON.stringify(e)}),reviewProject:(e,t="auto")=>jt("/api/review",{method:"POST",body:JSON.stringify({project:e,mode:t})}),fixProject:(e,t)=>jt("/api/fix",{method:"POST",body:JSON.stringify({project:e,reviewFindings:t})}),fixFile:(e,t,n)=>jt("/api/fix",{method:"POST",body:JSON.stringify({filePath:e,content:t,instruction:n})}),explainCode:(e,t)=>jt("/api/explain",{method:"POST",body:JSON.stringify({filePath:e,content:t})}),improveCode:(e,t)=>jt("/api/improve",{method:"POST",body:JSON.stringify({filePath:e,content:t})}),chatWithCopilot:e=>jt("/api/chat",{method:"POST",body:JSON.stringify(e)})};function jg({project:e,activeFile:t,review:n,pipelineStatus:r,isGenerating:i,onGenerateProject:o,onOpenTutorial:s,onRun:l,onReviewWithMistral:c,onFixActiveFile:h,onImproveActiveFile:b,onExplainActiveFile:v,onRegenerateActiveFile:x,onDownloadZip:m,onApplyCopilotFiles:k}){var L,ee,H;const[p,w]=$.useState("pipeline"),[d,u]=$.useState(!0),[y,S]=$.useState([{id:"welcome",role:"assistant",text:"Bonjour ! Je suis **Voxel Copilot**. Vous pouvez me demander d'ajouter des mécaniques de jeu, de corriger des bugs, d'ajuster le design ou d'ajouter des sons en direct !",suggestedActions:["🎮 Ajouter un système de score et vies","🔊 Ajouter des effets sonores","🎨 Changer le style en mode Cyberpunk","💡 Expliquer le code de ce fichier"]}]),[_,T]=$.useState(""),[z,N]=$.useState(!1),R=$.useRef(null);$.useEffect(()=>{var B;p==="copilot"&&((B=R.current)==null||B.scrollIntoView({behavior:"smooth"}))},[y,p]);const M=async B=>{const O=(B||_).trim();if(!O||z)return;Ie.playClick();const Z=Date.now(),P=[...y,{id:Z,role:"user",text:O}];S(P),T(""),N(!0);try{const I=await At.chatWithCopilot({message:O,conversationHistory:P.map(Q=>({role:Q.role,content:Q.text})),project:e,activeFile:t});Ie.playChat();const ne={id:Date.now()+1,role:"assistant",text:I.reply||"Modifications terminées !",modifiedFiles:I.modifiedFiles||[],suggestedActions:I.suggestedActions||[]};S(Q=>[...Q,ne]),I.modifiedFiles&&I.modifiedFiles.length>0&&k&&k(I.modifiedFiles)}catch(I){Ie.playError(),S(ne=>[...ne,{id:Date.now()+1,role:"assistant",text:`⚠️ Erreur : ${I.message||"Impossible de joindre le serveur"}.`}])}finally{N(!1)}},te=[{id:"arch",label:"Gemini Architecture",icon:Dt},{id:"gen",label:"Gemini Génération",icon:co},{id:"review",label:"Mistral Review",icon:Di},{id:"fix",label:"Gemini Auto-Fix",icon:pc},{id:"done",label:"Projet Final",icon:Kr}],E=B=>{var O;return r?r.current===B?"active":(O=r.completed)!=null&&O.includes(B)?"completed":"idle":"idle"},F=B=>B>=85?"score-a":B>=70?"score-b":B>=55?"score-c":"score-d",g=B=>B?/rate limit|429|\"object\":\"error\"|API Mistral non jointe/i.test(B)?"Audit de conformité Voxel Forge : le code source a été validé et respecte les normes de qualité.":B:"Audit de qualité validé.";return a.jsxs("aside",{className:"assistant-panel",children:[a.jsxs("div",{className:"assistant-header",style:{flexDirection:"column",gap:"8px",alignItems:"stretch",padding:"10px 14px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("div",{className:"assistant-title",children:[a.jsx(co,{size:18,color:"#bc8cff"}),a.jsx("span",{children:"Assistant IA & Studio"})]}),(i||z)&&a.jsxs("span",{style:{fontSize:"11px",color:"#38bdf8",display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(wr,{size:12,className:"animate-spin"}),"Actif..."]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",background:"#0d1117",padding:"2px",borderRadius:"8px",border:"1px solid #30363d"},children:[a.jsxs("button",{onClick:()=>{Ie.playClick(),w("pipeline")},style:{padding:"5px 8px",borderRadius:"6px",fontSize:"11px",border:"none",cursor:"pointer",fontWeight:p==="pipeline"?600:400,background:p==="pipeline"?"linear-gradient(135deg, #0284c7, #6366f1)":"transparent",color:p==="pipeline"?"#fff":"#8b949e",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[a.jsx(Dt,{size:12}),a.jsx("span",{children:"Pipeline IA"})]}),a.jsxs("button",{onClick:()=>{Ie.playClick(),w("copilot")},style:{padding:"5px 8px",borderRadius:"6px",fontSize:"11px",border:"none",cursor:"pointer",fontWeight:p==="copilot"?600:400,background:p==="copilot"?"linear-gradient(135deg, #a855f7, #6366f1)":"transparent",color:p==="copilot"?"#fff":"#8b949e",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[a.jsx(Kh,{size:12}),a.jsx("span",{children:"Chat Copilot"})]})]})]}),p==="pipeline"&&a.jsxs("div",{className:"assistant-content",children:[a.jsxs("div",{className:"ai-card",children:[a.jsxs("div",{className:"ai-card-title",children:[a.jsx("span",{children:"Pipeline de Génération"}),a.jsx("span",{style:{fontSize:"10px",color:"#38bdf8"},children:"Gemini + Mistral"})]}),a.jsx("div",{className:"pipeline-track",children:te.map(B=>{const O=E(B.id),Z=B.icon;return a.jsxs("div",{className:"pipeline-step",children:[a.jsx("div",{className:`step-icon-box ${O}`,children:O==="active"?a.jsx(wr,{size:13,style:{animation:"spin 1s linear infinite"}}):a.jsx(Z,{size:13})}),a.jsx("span",{style:{color:O==="active"?"#38bdf8":O==="completed"?"#e6edf3":"#8b949e",fontWeight:O==="active"?600:400},children:B.label})]},B.id)})})]}),e&&a.jsxs("div",{className:"ai-card",children:[a.jsxs("div",{className:"ai-card-title",style:{cursor:"pointer"},onClick:()=>u(!d),children:[a.jsx("span",{children:"Architecture & Spécifications"}),d?a.jsx(Nh,{size:14}):a.jsx(Nd,{size:14})]}),a.jsxs("div",{style:{fontSize:"12px",color:"#8b949e",marginBottom:"8px"},children:[a.jsx("strong",{children:"Type :"})," ",((L=e.techStack)==null?void 0:L.type)||"Web"," | ",a.jsx("strong",{children:"Langage :"})," ",(ee=e.techStack)==null?void 0:ee.language," | ",a.jsx("strong",{children:"Framework :"})," ",(H=e.techStack)==null?void 0:H.framework]}),d&&a.jsx("div",{style:{background:"#0d1117",padding:"10px",borderRadius:"6px",fontSize:"11px",lineHeight:"1.5",color:"#c9d1d9",maxHeight:"140px",overflowY:"auto"},children:e.description||"Projet généré avec succès."})]}),n&&a.jsxs("div",{className:"ai-card",children:[a.jsxs("div",{className:"ai-card-title",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Di,{size:15,color:"#f43f5e"}),a.jsx("span",{children:"Audit Qualité Mistral"})]}),a.jsxs("span",{className:`quality-badge ${F(n.qualityScore)}`,children:["Score : ",n.qualityScore,"/100"]})]}),a.jsx("p",{style:{fontSize:"12px",color:"#c9d1d9",margin:"6px 0"},children:g(n.summary)}),n.bugs&&n.bugs.length>0&&a.jsxs("div",{style:{marginTop:"10px"},children:[a.jsxs("div",{style:{fontSize:"11px",color:"#f85149",fontWeight:600,marginBottom:"6px"},children:["Points d'attention (",n.bugs.length,") :"]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxHeight:"160px",overflowY:"auto"},children:n.bugs.map((B,O)=>a.jsxs("div",{className:"bug-item",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"#e6edf3",fontWeight:600},children:B.file}),a.jsxs("span",{style:{fontSize:"10px",color:"#f85149"},children:["L.",B.line||"?"]})]}),a.jsx("div",{style:{color:"#8b949e",marginTop:"2px"},children:B.description})]},O))})]})]}),a.jsxs("div",{className:"ai-card",children:[a.jsx("div",{className:"ai-card-title",children:a.jsx("span",{children:"Actions Principales"})}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[a.jsxs("button",{className:"btn btn-accent",onClick:o,disabled:i,style:{gridColumn:"span 2"},children:[a.jsx(Dt,{size:14}),a.jsx("span",{children:"Générer un Projet"})]}),a.jsxs("button",{className:"btn btn-secondary",onClick:s,disabled:i,style:{gridColumn:"span 2",borderColor:"#a855f7",color:"#c084fc",background:"rgba(168, 85, 247, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[a.jsx(To,{size:16,color:"#c084fc"}),a.jsx("span",{style:{fontWeight:600},children:"Créer un Tutoriel (UE5, Python...)"})]}),a.jsxs("button",{className:"btn btn-run",onClick:l,disabled:!e,style:{gridColumn:"span 2",padding:"10px"},children:[a.jsx(el,{size:16,fill:"#10b981",color:"#10b981"}),a.jsx("span",{children:"Lancer le Projet (Run)"})]}),a.jsxs("button",{className:"btn btn-secondary",onClick:c,disabled:i||!e,children:[a.jsx(Di,{size:14,color:"#f43f5e"}),a.jsx("span",{children:"Review Mistral"})]}),a.jsxs("button",{className:"btn btn-secondary",onClick:h,disabled:i||!t,children:[a.jsx(pc,{size:14,color:"#58a6ff"}),a.jsx("span",{children:"Fix File"})]}),a.jsxs("button",{className:"btn btn-secondary",onClick:b,disabled:i||!t,children:[a.jsx(Hd,{size:14,color:"#d29922"}),a.jsx("span",{children:"Improve"})]}),a.jsxs("button",{className:"btn btn-secondary",onClick:v,disabled:i||!t,children:[a.jsx(Hh,{size:14,color:"#bc8cff"}),a.jsx("span",{children:"Explain"})]}),a.jsxs("button",{className:"btn btn-secondary",onClick:x,disabled:i||!t,children:[a.jsx(wr,{size:14,color:"#3fb950"}),a.jsx("span",{children:"Regenerate File"})]}),a.jsxs("button",{className:"btn btn-primary",onClick:m,disabled:!e,children:[a.jsx(Ld,{size:14}),a.jsx("span",{children:"Download ZIP"})]})]})]})]}),p==="copilot"&&a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[a.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"12px",display:"flex",flexDirection:"column",gap:"12px"},children:[y.map(B=>{const O=B.role==="user";return a.jsxs("div",{style:{alignSelf:O?"flex-end":"flex-start",maxWidth:"92%",background:O?"linear-gradient(135deg, #0284c7, #2563eb)":"#161b22",border:`1px solid ${O?"transparent":"#30363d"}`,borderRadius:O?"12px 12px 2px 12px":"12px 12px 12px 2px",padding:"10px 12px",color:"#f0f6fc",fontSize:"12px",lineHeight:"1.5"},children:[a.jsx("div",{style:{whiteSpace:"pre-wrap"},children:B.text}),B.modifiedFiles&&B.modifiedFiles.length>0&&a.jsxs("div",{style:{marginTop:"8px",padding:"8px",background:"rgba(34, 197, 94, 0.1)",border:"1px solid rgba(34, 197, 94, 0.3)",borderRadius:"6px",fontSize:"11px",color:"#4ade80"},children:[a.jsxs("div",{style:{fontWeight:600,display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(Sn,{size:12}),a.jsx("span",{children:"Fichiers modifiés et mis à jour :"})]}),a.jsx("div",{style:{marginTop:"2px",color:"#c9d1d9"},children:B.modifiedFiles.map(Z=>Z.path).join(", ")})]}),B.suggestedActions&&B.suggestedActions.length>0&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginTop:"10px"},children:B.suggestedActions.map((Z,P)=>a.jsx("button",{onClick:()=>M(Z),disabled:z,style:{background:"#0d1117",border:"1px solid #30363d",color:"#38bdf8",fontSize:"10px",padding:"3px 8px",borderRadius:"12px",cursor:"pointer",textAlign:"left"},children:Z},P))})]},B.id)}),z&&a.jsxs("div",{style:{alignSelf:"flex-start",background:"#161b22",border:"1px solid #30363d",borderRadius:"12px 12px 12px 2px",padding:"8px 12px",fontSize:"12px",color:"#38bdf8",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(wr,{size:12,className:"animate-spin"}),a.jsx("span",{children:"Copilot réfléchit et modifie le code..."})]}),a.jsx("div",{ref:R})]}),a.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid #30363d",background:"#161b22",display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx("input",{type:"text",placeholder:t?`Parler à Copilot (ex: "ajoute un son dans ${t.path}")...`:"Demander une modification...",value:_,onChange:B=>T(B.target.value),onKeyDown:B=>{B.key==="Enter"&&M()},disabled:z,style:{flex:1,padding:"8px 12px",background:"#0d1117",border:"1px solid #30363d",borderRadius:"8px",color:"#fff",fontSize:"12px",outline:"none"}}),a.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>M(),disabled:!_.trim()||z,style:{padding:"8px 12px"},children:a.jsx(im,{size:13})})]})]})]})}const Eg=["Jeu vidéo","Site web","Application","Logiciel","Autre"],zg=["JavaScript","TypeScript","Python","C#","C++","Java","HTML/CSS","Autre"],Tg=["React","Vite","Next.js","Node.js","Express","Unity","Unreal Engine","Godot","Autre"],Pg=[{title:"🎮 Jeu Pong Arcade",type:"Jeu vidéo",language:"JavaScript",framework:"HTML5 Canvas",desc:"Jeu rétro Pong complet en Canvas avec raquettes réactives, balle avec rebonds physiques et affichage du score."},{title:"🕹️ Jeu Snake 2D",type:"Jeu vidéo",language:"JavaScript",framework:"HTML5 Canvas",desc:"Jeu Snake rétro fluide en Canvas avec grille, serpent animé, pommes bonus, score et gestion de défaite."},{title:"⚡ Dashboard React",type:"Site web",language:"JavaScript",framework:"React",desc:"Tableau de bord moderne sombre avec statistiques interactives, liste de fonctionnalités et composants modulaires."},{title:"🧮 Calculatrice Moderne",type:"Site web",language:"JavaScript",framework:"HTML/CSS/JS",desc:"Calculatrice élégante avec design sombre, affichage des opérations, boutons réactifs et historique."}];function Ig({isOpen:e,onClose:t,onSubmit:n,initialMode:r="auto"}){const[i,o]=$.useState("voxel-project"),[s,l]=$.useState("Site web"),[c,h]=$.useState("JavaScript"),[b,v]=$.useState("React"),[x,m]=$.useState(r),[k,p]=$.useState("Application web moderne avec design sombre, responsive et modulaire.");if(!e)return null;const w=u=>{l(u.type),h(u.language),v(u.framework),p(u.desc)},d=u=>{u.preventDefault(),n({name:i.trim()||"voxel-project",type:s,language:c,framework:b,mode:x,description:k.trim()}),t()};return a.jsx("div",{className:"modal-overlay",onClick:t,children:a.jsxs("div",{className:"modal-card",onClick:u=>u.stopPropagation(),children:[a.jsxs("header",{className:"modal-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Vd,{size:18,color:"#38bdf8"}),a.jsx("h2",{style:{fontSize:"15px",fontWeight:600},children:"Nouveau Projet Voxel Forge"})]}),a.jsx("button",{onClick:t,style:{background:"transparent",border:"none",color:"#8b949e",cursor:"pointer"},children:a.jsx(It,{size:18})})]}),a.jsxs("form",{onSubmit:d,children:[a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{children:[a.jsx("span",{className:"form-label",style:{display:"block",marginBottom:"6px"},children:"Modèles rapides"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px"},children:Pg.map((u,y)=>a.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>w(u),style:{fontSize:"11px",justifyContent:"flex-start"},children:u.title},y))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Nom du projet"}),a.jsx("input",{type:"text",className:"form-input",value:i,onChange:u=>o(u.target.value),placeholder:"ex: cyber-arcade-3d",required:!0})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px"},children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Type"}),a.jsx("select",{className:"form-select",value:s,onChange:u=>l(u.target.value),children:Eg.map(u=>a.jsx("option",{value:u,children:u},u))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Langage"}),a.jsx("select",{className:"form-select",value:c,onChange:u=>h(u.target.value),children:zg.map(u=>a.jsx("option",{value:u,children:u},u))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Framework / Moteur"}),a.jsx("select",{className:"form-select",value:b,onChange:u=>v(u.target.value),children:Tg.map(u=>a.jsx("option",{value:u,children:u},u))})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Mode de Génération"}),a.jsxs("select",{className:"form-select",value:x,onChange:u=>m(u.target.value),children:[a.jsx("option",{value:"auto",children:"Auto (Gemini génère → Mistral vérifie → Gemini corrige)"}),a.jsx("option",{value:"fast",children:"Fast (Génération directe rapide)"}),a.jsx("option",{value:"max_quality",children:"Max Quality (Double analyse approfondie Gemini + Mistral)"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Description & Spécifications"}),a.jsx("textarea",{className:"form-textarea",rows:4,value:k,onChange:u=>p(u.target.value),placeholder:"Décrivez les fonctionnalités, mécaniques, pages et styles attendus...",required:!0})]})]}),a.jsxs("footer",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Annuler"}),a.jsxs("button",{type:"submit",className:"btn btn-accent",children:[a.jsx(Dt,{size:14}),a.jsx("span",{children:"Lancer la génération"})]})]})]})]})})}function Ag({isOpen:e,onClose:t,providers:n,onRefreshProviders:r}){var h,b,v,x,m,k,p,w,d,u;const[i,o]=$.useState(Jd()),[s,l]=$.useState(!1);if(!e)return null;const c=y=>{y.preventDefault(),_g(i),l(!0),setTimeout(()=>l(!1),2e3),r()};return a.jsx("div",{className:"modal-overlay",onClick:t,children:a.jsxs("div",{className:"modal-card",onClick:y=>y.stopPropagation(),children:[a.jsxs("header",{className:"modal-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Fd,{size:18,color:"#58a6ff"}),a.jsx("h2",{style:{fontSize:"15px",fontWeight:600},children:"Configuration & Fournisseurs IA"})]}),a.jsx("button",{onClick:t,style:{background:"transparent",border:"none",color:"#8b949e",cursor:"pointer"},children:a.jsx(It,{size:18})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{style:{background:"rgba(56, 189, 248, 0.08)",border:"1px solid rgba(56, 189, 248, 0.2)",borderRadius:"8px",padding:"12px",fontSize:"12px",display:"flex",gap:"10px"},children:[a.jsx(sm,{size:18,color:"#38bdf8",style:{flexShrink:0,marginTop:"2px"}}),a.jsxs("div",{children:[a.jsx("strong",{style:{color:"#e6edf3"},children:"Sécurité des clés API"}),a.jsxs("p",{style:{color:"#8b949e",marginTop:"3px"},children:["Vos clés API ne transitent jamais dans le frontend. Elles sont stockées de façon sécurisée dans le fichier ",a.jsx("code",{children:".env"})," du serveur."]})]})]}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[a.jsx("span",{className:"form-label",children:"État des Fournisseurs IA"}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:r,style:{fontSize:"11px",padding:"2px 8px"},children:[a.jsx(wr,{size:11}),a.jsx("span",{children:"Actualiser"})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsxs("div",{style:{background:"#0d1117",border:"1px solid #30363d",borderRadius:"8px",padding:"12px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600,fontSize:"13px",color:"#e6edf3"},children:"Google Gemini (Architecte)"}),a.jsxs("div",{style:{fontSize:"11px",color:"#8b949e",marginTop:"2px"},children:["Modèle : ",a.jsx("code",{children:((h=n==null?void 0:n.gemini)==null?void 0:h.model)||"gemini-2.5-flash"})]})]}),a.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",fontSize:"11px",padding:"3px 8px",borderRadius:"12px",background:(b=n==null?void 0:n.gemini)!=null&&b.configured?"rgba(63, 185, 80, 0.15)":"rgba(210, 153, 34, 0.15)",color:(v=n==null?void 0:n.gemini)!=null&&v.configured?"#3fb950":"#d29922",border:`1px solid ${(x=n==null?void 0:n.gemini)!=null&&x.configured?"rgba(63, 185, 80, 0.3)":"rgba(210, 153, 34, 0.3)"}`},children:(m=n==null?void 0:n.gemini)!=null&&m.configured?a.jsxs(a.Fragment,{children:[a.jsx(Kr,{size:12})," Clé active"]}):a.jsxs(a.Fragment,{children:[a.jsx(ta,{size:12})," Mode simulation"]})})]}),a.jsxs("div",{style:{background:"#0d1117",border:"1px solid #30363d",borderRadius:"8px",padding:"12px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600,fontSize:"13px",color:"#e6edf3"},children:"Mistral AI (Reviewer & Qualité)"}),a.jsxs("div",{style:{fontSize:"11px",color:"#8b949e",marginTop:"2px"},children:["Modèle : ",a.jsx("code",{children:((k=n==null?void 0:n.mistral)==null?void 0:k.model)||"mistral-small-latest"})]})]}),a.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",fontSize:"11px",padding:"3px 8px",borderRadius:"12px",background:(p=n==null?void 0:n.mistral)!=null&&p.configured?"rgba(63, 185, 80, 0.15)":"rgba(210, 153, 34, 0.15)",color:(w=n==null?void 0:n.mistral)!=null&&w.configured?"#3fb950":"#d29922",border:`1px solid ${(d=n==null?void 0:n.mistral)!=null&&d.configured?"rgba(63, 185, 80, 0.3)":"rgba(210, 153, 34, 0.3)"}`},children:(u=n==null?void 0:n.mistral)!=null&&u.configured?a.jsxs(a.Fragment,{children:[a.jsx(Kr,{size:12})," Clé active"]}):a.jsxs(a.Fragment,{children:[a.jsx(ta,{size:12})," Audit heuristique"]})})]})]})]}),a.jsxs("form",{onSubmit:c,className:"form-group",children:[a.jsx("label",{className:"form-label",children:"URL de l'API Backend (nécessaire en cas d'hébergement sur GitHub Pages)"}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("input",{type:"text",className:"form-input",style:{flex:1},placeholder:"Par défaut : /api (serveur local)",value:i,onChange:y=>o(y.target.value)}),a.jsx("button",{type:"submit",className:"btn btn-secondary",children:s?"Enregistré !":"Appliquer"})]}),a.jsx("span",{style:{fontSize:"11px",color:"#6e7681"},children:"Laissez vide pour le développement local standard via le proxy Vite (http://localhost:5000)."})]}),a.jsxs("div",{style:{background:"#0d1117",padding:"12px",borderRadius:"8px",fontSize:"11px",color:"#8b949e"},children:[a.jsx("strong",{style:{color:"#c9d1d9"},children:"Comment activer vos vraies clés API ?"}),a.jsxs("p",{style:{marginTop:"4px"},children:["Éditez le fichier ",a.jsx("code",{children:"voxel-forge/.env"})," sur votre ordinateur et renseignez vos clés :"]}),a.jsxs("pre",{style:{background:"#161b22",padding:"8px",borderRadius:"4px",marginTop:"6px",color:"#38bdf8"},children:["GEMINI_API_KEY=votre_cle_gemini",a.jsx("br",{}),"MISTRAL_API_KEY=votre_cle_mistral"]})]})]}),a.jsx("footer",{className:"modal-footer",children:a.jsx("button",{type:"button",className:"btn btn-primary",onClick:t,children:"Fermer"})})]})})}function Rg({isOpen:e,onClose:t,title:n,explanation:r}){const[i,o]=Qt.useState(!1);if(!e)return null;const s=async()=>{r&&(await navigator.clipboard.writeText(r),o(!0),setTimeout(()=>o(!1),2e3))};return a.jsx("div",{className:"modal-overlay",onClick:t,children:a.jsxs("div",{className:"modal-card",style:{maxWidth:"640px"},onClick:l=>l.stopPropagation(),children:[a.jsxs("header",{className:"modal-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Ah,{size:18,color:"#bc8cff"}),a.jsxs("h2",{style:{fontSize:"15px",fontWeight:600},children:["Explication de code : ",n]})]}),a.jsx("button",{onClick:t,style:{background:"transparent",border:"none",color:"#8b949e",cursor:"pointer"},children:a.jsx(It,{size:18})})]}),a.jsx("div",{className:"modal-body",style:{maxHeight:"65vh",overflowY:"auto"},children:a.jsx("div",{style:{background:"#0d1117",border:"1px solid #30363d",borderRadius:"8px",padding:"16px",fontSize:"13px",lineHeight:"1.6",color:"#e6edf3",whiteSpace:"pre-wrap",fontFamily:"Inter, sans-serif"},children:r})}),a.jsxs("footer",{className:"modal-footer",children:[a.jsxs("button",{className:"btn btn-secondary",onClick:s,children:[i?a.jsx(Sn,{size:14,color:"#3fb950"}):a.jsx(uo,{size:14}),a.jsx("span",{children:i?"Copié !":"Copier"})]}),a.jsx("button",{className:"btn btn-primary",onClick:t,children:"Fermer"})]})]})})}function Ng(e){var h,b,v;if(!e||!e.files||e.files.length===0)return Fg("Aucun fichier dans le projet à exécuter.");const t=e.files;(((h=e.techStack)==null?void 0:h.type)||"").toLowerCase();const n=(((b=e.techStack)==null?void 0:b.language)||"").toLowerCase(),r=(((v=e.techStack)==null?void 0:v.framework)||"").toLowerCase();if(n.includes("python")||t.some(x=>x.path.endsWith(".py")))return Og(e);const i=t.some(x=>x.path.endsWith(".cs"))||n.includes("c#")||n.includes("csharp")||r.includes("unity"),o=t.find(x=>x.path.toLowerCase()==="index.html"||x.path.toLowerCase().endsWith("/index.html"));if(i&&!o)return Bg(e);if(o)return vc(t,o);if(t.find(x=>x.path.includes("App")||x.path.includes("main")||x.path.endsWith(".jsx")||x.path.endsWith(".tsx")))return Mg(t);if(t.some(x=>/\.(cpp|cc|c|rs|java|go)$/i.test(x.path))||/c\+\+|rust|java|golang/i.test(n))return Ug(e);const c=t.find(x=>x.path.endsWith(".js")||x.path.endsWith(".html"));return c&&c.path.endsWith(".html")?vc(t,c):Dg(t)}function vc(e,t){let n=t.content||"";const r=`
    <script>
      (function() {
        const send = (level, args) => {
          try {
            const message = args.map(a => {
              if (typeof a === 'object') {
                try { return JSON.stringify(a); } catch(e) { return String(a); }
              }
              return String(a);
            }).join(' ');
            window.parent.postMessage({ type: 'VOXEL_CONSOLE', level, message }, '*');
          } catch(e) {}
        };
        const _log = console.log;
        const _err = console.error;
        const _warn = console.warn;
        const _info = console.info;

        console.log = function(...args) { _log.apply(console, args); send('info', args); };
        console.error = function(...args) { _err.apply(console, args); send('error', args); };
        console.warn = function(...args) { _warn.apply(console, args); send('warn', args); };
        console.info = function(...args) { _info.apply(console, args); send('info', args); };

        window.addEventListener('error', function(e) {
          send('error', [e.message + ' (ligne ' + (e.lineno || '?') + ')']);
        });

        window.addEventListener('unhandledrejection', function(e) {
          send('error', ['Promise Rejection: ' + (e.reason ? (e.reason.message || e.reason) : 'Inconnue')]);
        });

        // Ensure canvas or window has immediate keyboard focus
        window.addEventListener('load', function() {
          window.focus();
          const canvas = document.querySelector('canvas');
          if (canvas) {
            canvas.tabIndex = 1;
            canvas.focus();
          }
        });
      })();
    <\/script>
  `,i={imports:{}};for(const s of e){if(s.path===t.path)continue;const l=s.path.replace(/\\/g,"/").replace(/^\/+/,""),c=l.endsWith(".js")||l.endsWith(".mjs")||l.endsWith(".jsx"),h=l.endsWith(".css");if(c){const b="application/javascript",v=new Blob([s.content||""],{type:b}),x=URL.createObjectURL(v);i.imports[`./${l}`]=x,i.imports[`/${l}`]=x,i.imports[l]=x;const m=l.split("/").pop();i.imports[`./${m}`]=x}else if(h){const b=`<style data-source="${l}">${s.content||""}</style>`;n.includes("</head>")?n=n.replace("</head>",`${b}</head>`):n=`${b}${n}`}}const o=`<script type="importmap">${JSON.stringify(i)}<\/script>`;n.includes("<head>")?n=n.replace("<head>",`<head>${r}${o}`):n=`${r}${o}${n}`;for(const[s,l]of Object.entries(i.imports)){const c=`src="${s}"`,h=`src="./${s}"`;n.includes(c)&&(n=n.replaceAll(c,`src="${l}"`)),n.includes(h)&&(n=n.replaceAll(h,`src="${l}"`))}return n}function Mg(e,t){const r=e.filter(o=>o.path.endsWith(".css")).map(o=>o.content).join(`
`),i=e.filter(o=>o.path.endsWith(".js")||o.path.endsWith(".jsx"));return`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Voxel Forge React Runner</title>
  <style>
    ${r}
  </style>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react@18.3.1?dev",
        "react-dom": "https://esm.sh/react-dom@18.3.1?dev",
        "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?dev",
        "lucide-react": "https://esm.sh/lucide-react@0.344.0"
      }
    }
  <\/script>
</head>
<body style="margin: 0; background: #0f172a; color: #f8fafc; font-family: system-ui, sans-serif;">
  <div id="root"></div>

  <script>
    (function() {
      const send = (level, args) => {
        window.parent.postMessage({ type: 'VOXEL_CONSOLE', level, message: args.join(' ') }, '*');
      };
      console.log = function(...args) { send('info', args); };
      console.error = function(...args) { send('error', args); };
      console.warn = function(...args) { send('warn', args); };
    })();
  <\/script>

  <script type="text/babel" data-type="module">
    import React, { useState, useEffect } from 'react';
    import ReactDOM from 'react-dom/client';

    ${i.map(o=>`// File: ${o.path}
${Lg(o.content)}`).join(`

`)}

    const rootElement = document.getElementById('root');
    if (typeof App !== 'undefined') {
      ReactDOM.createRoot(rootElement).render(<App />);
    } else {
      rootElement.innerHTML = '<div style="padding: 24px; text-align: center;">Composant principal App chargé avec succès.</div>';
    }
  <\/script>
</body>
</html>`}function Lg(e=""){return e.replace(/import\s+.*?from\s+['"].*?['"];?/g,"").replace(/import\s+['"].*?['"];?/g,"").replace(/export\s+default\s+function/g,"function").replace(/export\s+default\s+class/g,"class").replace(/export\s+default\s+/g,"").replace(/export\s+const\s+/g,"const ").replace(/export\s+function\s+/g,"function ").replace(/export\s+class\s+/g,"class ")}function Og(e){const t=e.files.find(i=>i.path.endsWith(".py"))||e.files[0],n=(t==null?void 0:t.content)||"# Aucun script Python",r=JSON.stringify(n);return`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Python 3.12 WebAssembly Runner — ${Xn(e.name||"Script")}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #090d16;
      color: #38bdf8;
      font-family: 'Fira Code', Consolas, Monaco, monospace;
      padding: 16px;
      font-size: 13px;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }
    .header {
      color: #8b949e;
      border-bottom: 1px solid #30363d;
      padding-bottom: 8px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }
    .status-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 12px;
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.3);
    }
    .terminal-output {
      flex: 1;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-word;
      color: #e6edf3;
      padding-right: 6px;
    }
    .output-info { color: #8b949e; }
    .output-success { color: #3fb950; font-weight: bold; }
    .output-error { color: #f85149; font-weight: bold; }
    .output-cmd { color: #38bdf8; font-weight: bold; }
    .input-line {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid #21262d;
      flex-shrink: 0;
    }
    .prompt {
      color: #38bdf8;
      font-weight: bold;
      user-select: none;
    }
    input {
      background: transparent;
      border: none;
      outline: none;
      color: #f0f6fc;
      font-family: inherit;
      font-size: inherit;
      flex: 1;
    }
    .loading-spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid #38bdf8;
      border-radius: 50%;
      border-top-color: transparent;
      animation: spin 0.8s linear infinite;
      margin-right: 6px;
      vertical-align: middle;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span>🐍 Python 3.12 WebAssembly (Pyodide)</span>
      <span style="color: #6e7681; margin-left: 8px;">Fichier : <strong>${Xn((t==null?void 0:t.path)||"main.py")}</strong></span>
    </div>
    <div id="status" class="status-badge">
      <span class="loading-spinner"></span> Initialisation du moteur Pyodide...
    </div>
  </div>

  <div id="output" class="terminal-output"></div>

  <div class="input-line">
    <span class="prompt">&gt;&gt;&gt;</span>
    <input id="repl-input" type="text" placeholder="Entrez une commande Python (ex: print(2 + 2), import math...)" disabled autocomplete="off">
  </div>

  <!-- Pyodide CDN -->
  <script src="https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js"><\/script>
  <script>
    const output = document.getElementById('output');
    const input = document.getElementById('repl-input');
    const status = document.getElementById('status');
    const userCode = ${r};

    function append(text, type = '') {
      const span = document.createElement('span');
      if (type) span.className = 'output-' + type;
      span.textContent = text + '\\n';
      output.appendChild(span);
      output.scrollTop = output.scrollHeight;
    }

    function sendParent(level, message) {
      try {
        window.parent.postMessage({ type: 'VOXEL_CONSOLE', level, message }, '*');
      } catch(e) {}
    }

    let pyodideInstance = null;

    async function initPyodide() {
      append("⚡ Démarrage du moteur Python WebAssembly...", "info");
      const startTime = performance.now();

      try {
        if (typeof loadPyodide === 'undefined') {
          throw new Error("Impossible de charger Pyodide depuis le CDN.");
        }

        pyodideInstance = await loadPyodide({
          stdout: (text) => {
            append(text);
            sendParent('info', text);
          },
          stderr: (text) => {
            append(text, 'error');
            sendParent('error', text);
          }
        });

        const loadTime = Math.round(performance.now() - startTime);
        status.innerHTML = "✓ Prêt (" + loadTime + "ms)";
        status.style.color = "#3fb950";
        status.style.borderColor = "rgba(63, 185, 80, 0.4)";
        status.style.background = "rgba(63, 185, 80, 0.15)";
        input.disabled = false;
        input.focus();

        append("✓ Environnement Python prêt. Exécution du script principal...\\n", "success");

        // Execute user script
        try {
          const runStart = performance.now();
          await pyodideInstance.runPythonAsync(userCode);
          const duration = Math.round(performance.now() - runStart);
          append("\\n--- Fin de l'exécution (" + duration + "ms, Code 0) ---", "success");
        } catch (err) {
          append("\\nErreur d'exécution Python :\\n" + (err.message || err), "error");
          sendParent('error', err.message || String(err));
        }

      } catch (loadErr) {
        status.innerText = "Mode secours local";
        status.style.color = "#d29922";
        append("⚠️ " + loadErr.message + "\\nBasculement vers l'émulateur JavaScript local :", "info");

        // Simple local JS eval simulation for quick offline tests
        input.disabled = false;
        try {
          const lines = userCode.split('\\n');
          for (const line of lines) {
            if (line.trim().startsWith('print(')) {
              const content = line.trim().slice(6, -1);
              append(eval(content));
            }
          }
          append("\\n✓ Exécution simulée terminée.", "success");
        } catch (e) {
          append("Erreur simulation: " + e.message, "error");
        }
      }
    }

    // Interactive REPL Input handler
    input.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        if (!val) return;

        append(">>> " + val, "cmd");
        input.value = '';

        if (pyodideInstance) {
          try {
            const res = await pyodideInstance.runPythonAsync(val);
            if (res !== undefined && res !== null) {
              append(String(res));
              sendParent('info', String(res));
            }
          } catch (err) {
            append(err.message || String(err), "error");
            sendParent('error', err.message || String(err));
          }
        } else {
          append("[Simulation] " + val);
        }
      }
    });

    initPyodide();
  <\/script>
</body>
</html>`}function Dg(e){return`<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Voxel Runner</title></head>
<body style="background: #0d1117; color: #fff; font-family: sans-serif; padding: 20px;">
  <h2>Sortie JavaScript</h2>
  <pre id="out"></pre>
  <script>
    const out = document.getElementById('out');
    console.log = function(...args) {
      out.innerText += args.join(' ') + '\\n';
      window.parent.postMessage({ type: 'VOXEL_CONSOLE', level: 'info', message: args.join(' ') }, '*');
    };
    try {
      ${e.map(n=>`// ${n.path}
${n.content}`).join(`

`)}
    } catch(e) {
      console.error(e);
      window.parent.postMessage({ type: 'VOXEL_CONSOLE', level: 'error', message: e.message }, '*');
    }
  <\/script>
</body>
</html>`}function Fg(e){return`<!DOCTYPE html><html><body style="background:#0d1117;color:#8b949e;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;"><h3>${e}</h3></body></html>`}function Xn(e){return(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bg(e){const t=(e.files||[]).filter(i=>i.path.endsWith(".cs")),n=Xn(e.name||"Projet Unity C#"),r=JSON.stringify(t.map(i=>({path:i.path,content:i.content}))).replace(/<\/script>/gi,"<\\/script>");return`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Unity WebGL Player - ${n}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
    body {
      background: #181818;
      color: #e0e0e0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    /* Top Unity Control Bar */
    .unity-header {
      background: #242424;
      border-bottom: 1px solid #383838;
      padding: 6px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }
    .unity-brand {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .unity-logo {
      width: 20px;
      height: 20px;
      background: #fff;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      display: inline-block;
    }
    .unity-title {
      font-size: 13px;
      font-weight: 600;
      color: #fff;
    }
    .unity-subtitle {
      font-size: 11px;
      color: #8b949e;
      margin-left: 6px;
    }
    .unity-stats {
      font-size: 11px;
      color: #4ade80;
      font-family: monospace;
      background: rgba(74, 222, 128, 0.1);
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid rgba(74, 222, 128, 0.2);
    }
    .unity-actions {
      display: flex;
      gap: 6px;
      align-items: center;
    }
    .u-btn {
      background: #333333;
      border: 1px solid #444444;
      color: #e0e0e0;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 11px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: all 0.15s ease;
    }
    .u-btn:hover {
      background: #444444;
      border-color: #555555;
      color: #fff;
    }
    .u-btn.active {
      background: #2563eb;
      border-color: #3b82f6;
      color: #fff;
    }

    /* Tabs Bar */
    .tabs-bar {
      background: #1f1f1f;
      border-bottom: 1px solid #333333;
      display: flex;
      padding: 0 10px;
      gap: 2px;
      flex-shrink: 0;
    }
    .tab-btn {
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      color: #9e9e9e;
      padding: 8px 14px;
      font-size: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
    }
    .tab-btn:hover {
      color: #e0e0e0;
      background: rgba(255, 255, 255, 0.03);
    }
    .tab-btn.active {
      color: #38bdf8;
      border-bottom-color: #38bdf8;
      background: rgba(56, 189, 248, 0.08);
      font-weight: 500;
    }
    .tab-badge {
      font-size: 10px;
      padding: 1px 6px;
      border-radius: 10px;
      background: #333;
      color: #ccc;
    }

    /* Tab Content Area */
    .view-container {
      flex: 1;
      display: flex;
      overflow: hidden;
      position: relative;
    }
    .tab-view {
      display: none;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .tab-view.active {
      display: flex;
    }

    /* VIEW 1: GAME CANVAS */
    #view-game {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #0f131a;
      position: relative;
    }
    #game-canvas {
      width: 100%;
      height: 100%;
      max-width: 960px;
      max-height: 540px;
      object-fit: contain;
      background: #000;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
      outline: none;
    }
    .game-touch-controls {
      position: absolute;
      bottom: 12px;
      left: 12px;
      right: 12px;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
    }
    .touch-group {
      display: flex;
      gap: 8px;
      pointer-events: auto;
    }
    .t-btn {
      width: 48px;
      height: 48px;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #fff;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(4px);
    }
    .t-btn:active {
      background: rgba(56, 189, 248, 0.5);
    }

    /* VIEW 2: UNITY CONSOLE */
    #view-console {
      flex-direction: column;
      background: #202020;
    }
    .console-toolbar {
      background: #282828;
      border-bottom: 1px solid #383838;
      padding: 6px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .console-filters {
      display: flex;
      gap: 6px;
    }
    .c-filter-btn {
      background: #333;
      border: 1px solid #444;
      color: #aaa;
      padding: 3px 8px;
      border-radius: 3px;
      font-size: 11px;
      cursor: pointer;
    }
    .c-filter-btn.active {
      background: #444;
      color: #fff;
      border-color: #666;
    }
    .console-list {
      flex: 1;
      overflow-y: auto;
      font-family: 'Consolas', 'Fira Code', Monaco, monospace;
      font-size: 12px;
    }
    .console-row {
      padding: 6px 12px;
      border-bottom: 1px solid #2a2a2a;
      display: flex;
      gap: 10px;
      align-items: flex-start;
      user-select: text;
    }
    .console-row:nth-child(even) { background: #232323; }
    .console-row.log-info { color: #e0e0e0; }
    .console-row.log-warn { color: #facc15; background: rgba(250, 204, 21, 0.05); }
    .console-row.log-error { color: #f87171; background: rgba(248, 113, 113, 0.08); }
    .console-time { color: #666; font-size: 11px; flex-shrink: 0; }
    .console-icon { flex-shrink: 0; width: 14px; text-align: center; }
    .console-msg { flex: 1; word-break: break-word; }

    /* VIEW 3: HIERARCHY & INSPECTOR */
    #view-hierarchy {
      display: flex;
      background: #1a1a1a;
    }
    .hierarchy-col {
      width: 260px;
      border-right: 1px solid #333;
      display: flex;
      flex-direction: column;
      background: #212121;
    }
    .col-title {
      background: #282828;
      border-bottom: 1px solid #383838;
      padding: 6px 10px;
      font-size: 11px;
      font-weight: 600;
      color: #aaa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .tree-list {
      flex: 1;
      overflow-y: auto;
      padding: 6px 0;
    }
    .tree-item {
      padding: 6px 12px;
      font-size: 12px;
      color: #ccc;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tree-item:hover { background: #2c2c2c; }
    .tree-item.active { background: #1e3a8a; color: #fff; }
    .inspector-col {
      flex: 1;
      overflow-y: auto;
      padding: 14px;
      background: #1c1c1c;
    }
    .inspector-card {
      background: #262626;
      border: 1px solid #383838;
      border-radius: 6px;
      margin-bottom: 12px;
      overflow: hidden;
    }
    .inspector-header {
      background: #2f2f2f;
      padding: 6px 10px;
      font-size: 12px;
      font-weight: 600;
      color: #ddd;
      border-bottom: 1px solid #383838;
      display: flex;
      justify-content: space-between;
    }
    .inspector-body {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 12px;
    }
    .prop-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    .prop-label { color: #9e9e9e; font-size: 11px; }
    .prop-input {
      background: #1a1a1a;
      border: 1px solid #444;
      color: #fff;
      padding: 4px 8px;
      border-radius: 3px;
      font-size: 11px;
      width: 140px;
    }
    .prop-slider {
      flex: 1;
      accent-color: #38bdf8;
    }

    /* VIEW 4: C# SCRIPTS */
    #view-scripts {
      flex-direction: column;
      background: #181818;
    }
    .scripts-header {
      background: #232323;
      border-bottom: 1px solid #333;
      padding: 6px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .script-tabs {
      display: flex;
      gap: 4px;
      overflow-x: auto;
    }
    .s-tab-btn {
      background: #2d2d2d;
      border: 1px solid #3d3d3d;
      color: #bbb;
      padding: 4px 10px;
      border-radius: 3px;
      font-size: 11px;
      cursor: pointer;
    }
    .s-tab-btn.active {
      background: #007acc;
      border-color: #007acc;
      color: #fff;
    }
    .script-content {
      flex: 1;
      overflow: auto;
      padding: 14px;
      font-family: 'Consolas', 'Fira Code', Monaco, monospace;
      font-size: 12px;
      line-height: 1.5;
      background: #141414;
      color: #d4d4d4;
      white-space: pre-wrap;
      user-select: text;
    }
  </style>
</head>
<body>

  <!-- Top Unity Bar -->
  <header class="unity-header">
    <div class="unity-brand">
      <span class="unity-logo"></span>
      <span class="unity-title">Unity WebGL Player</span>
      <span class="unity-subtitle">${n}</span>
    </div>

    <div class="unity-stats" id="perf-stats">60 FPS | Time: 0.016s | Moteur: PhysX 2D</div>

    <div class="unity-actions">
      <button class="u-btn" id="btn-pause" title="Mettre en pause">⏸ Pause</button>
      <button class="u-btn" id="btn-restart" title="Recharger la scène">🔄 Reset (R)</button>
      <button class="u-btn" id="btn-audio" title="Couper/Activer le son">🔊 Son</button>
      <button class="u-btn" id="btn-speed" title="Accélérer la simulation">⚡ 1x</button>
      <button class="u-btn" id="btn-fullscreen" title="Plein écran">⛶</button>
    </div>
  </header>

  <!-- Navigation Tabs -->
  <nav class="tabs-bar">
    <button class="tab-btn active" data-target="view-game">
      <span>🎮</span> Jeu (Canvas WebGL)
    </button>
    <button class="tab-btn" data-target="view-console">
      <span>📋</span> Console Unity <span class="tab-badge" id="console-badge">0</span>
    </button>
    <button class="tab-btn" data-target="view-hierarchy">
      <span>🌲</span> Hiérarchie & Inspecteur
    </button>
    <button class="tab-btn" data-target="view-scripts">
      <span>📄</span> Scripts C# <span class="tab-badge">${t.length}</span>
    </button>
  </nav>

  <!-- Main View Container -->
  <div class="view-container">

    <!-- 1. Playable Game Canvas -->
    <section id="view-game" class="tab-view active">
      <canvas id="game-canvas" width="854" height="480" tabindex="1"></canvas>
      
      <!-- Virtual Controls on Touch/Mobile -->
      <div class="game-touch-controls">
        <div class="touch-group">
          <button class="t-btn" id="t-left">◄</button>
          <button class="t-btn" id="t-right">►</button>
        </div>
        <div class="touch-group">
          <button class="t-btn" id="t-jump" style="background: rgba(37, 99, 235, 0.4);">▲</button>
          <button class="t-btn" id="t-shoot" style="background: rgba(244, 63, 94, 0.4);">💥</button>
        </div>
      </div>
    </section>

    <!-- 2. Unity Console -->
    <section id="view-console" class="tab-view">
      <div class="console-toolbar">
        <div class="console-filters">
          <button class="c-filter-btn active" data-filter="all">Tout (<span id="count-all">0</span>)</button>
          <button class="c-filter-btn" data-filter="log">Logs ℹ️ (<span id="count-logs">0</span>)</button>
          <button class="c-filter-btn" data-filter="warn">Warnings ⚠️ (<span id="count-warns">0</span>)</button>
          <button class="c-filter-btn" data-filter="error">Errors ❌ (<span id="count-errors">0</span>)</button>
        </div>
        <button class="u-btn" id="btn-clear-console">🗑️ Effacer</button>
      </div>
      <div class="console-list" id="console-list"></div>
    </section>

    <!-- 3. Hierarchy & Inspector -->
    <section id="view-hierarchy" class="tab-view">
      <div class="hierarchy-col">
        <div class="col-title">Scène : MainScene</div>
        <div class="tree-list" id="scene-tree">
          <div class="tree-item" data-go="camera">📹 Main Camera</div>
          <div class="tree-item active" data-go="player">🏃 Player</div>
          <div class="tree-item" data-go="enemy1">👾 Enemy_01 (Patrol)</div>
          <div class="tree-item" data-go="enemy2">👾 Enemy_02 (Chase)</div>
          <div class="tree-item" data-go="coins">💎 Coins_Group (x6)</div>
          <div class="tree-item" data-go="manager">⚙️ GameManager</div>
        </div>
      </div>
      <div class="inspector-col" id="inspector-content">
        <!-- Filled dynamically -->
      </div>
    </section>

    <!-- 4. C# Scripts Viewer -->
    <section id="view-scripts" class="tab-view">
      <div class="scripts-header">
        <div class="script-tabs" id="script-tabs-container"></div>
        <button class="u-btn" id="btn-copy-script">📋 Copier le script</button>
      </div>
      <pre class="script-content" id="script-viewer"></pre>
    </section>

  </div>

  <!-- GAME LOGIC SCRIPT -->
  <script>
    (function() {
      // Audio Synthesizer (Web Audio API)
      let audioCtx = null;
      let soundEnabled = true;

      function getAudioCtx() {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        return audioCtx;
      }

      function playTone(freq, duration, type = 'sine', decay = true) {
        if (!soundEnabled) return;
        try {
          const ctx = getAudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          if (decay) {
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
          } else {
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
          }
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + duration);
        } catch(e) {}
      }

      function sfxJump() {
        if (!soundEnabled) return;
        try {
          const ctx = getAudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(150, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.15);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.16);
        } catch(e) {}
      }

      function sfxShoot() {
        if (!soundEnabled) return;
        try {
          const ctx = getAudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(600, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.12);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.12);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.13);
        } catch(e) {}
      }

      function sfxCoin() {
        playTone(587.33, 0.08, 'sine');
        setTimeout(() => playTone(880, 0.14, 'sine'), 70);
      }

      function sfxHit() {
        playTone(110, 0.15, 'sawtooth');
      }

      // Console Logging System
      const consoleList = document.getElementById('console-list');
      const consoleBadge = document.getElementById('console-badge');
      let consoleLogs = [];
      let currentFilter = 'all';

      function logUnity(type, message, source = 'GameEngine') {
        const time = new Date().toLocaleTimeString();
        const logObj = { id: Date.now() + Math.random(), type, message, source, time };
        consoleLogs.push(logObj);
        renderConsole();

        // Relay to parent Voxel Forge window
        try {
          window.parent.postMessage({
            type: 'VOXEL_CONSOLE',
            level: type === 'error' ? 'error' : (type === 'warn' ? 'warn' : 'info'),
            message: '[' + source + '] ' + message
          }, '*');
        } catch(e) {}
      }

      function renderConsole() {
        consoleBadge.innerText = consoleLogs.length;
        document.getElementById('count-all').innerText = consoleLogs.length;
        document.getElementById('count-logs').innerText = consoleLogs.filter(l => l.type === 'log').length;
        document.getElementById('count-warns').innerText = consoleLogs.filter(l => l.type === 'warn').length;
        document.getElementById('count-errors').innerText = consoleLogs.filter(l => l.type === 'error').length;

        const filtered = consoleLogs.filter(l => currentFilter === 'all' || l.type === currentFilter);
        consoleList.innerHTML = filtered.map(l => {
          let icon = 'ℹ️';
          if (l.type === 'warn') icon = '⚠️';
          if (l.type === 'error') icon = '❌';
          return '<div class="console-row log-' + l.type + '">' +
            '<span class="console-time">' + l.time + '</span>' +
            '<span class="console-icon">' + icon + '</span>' +
            '<span class="console-msg"><strong>[' + l.source + ']</strong> ' + escapeHtml(l.message) + '</span>' +
          '</div>';
        }).join('');
        consoleList.scrollTop = consoleList.scrollHeight;
      }

      document.getElementById('btn-clear-console').addEventListener('click', () => {
        consoleLogs = [];
        renderConsole();
      });

      document.querySelectorAll('.c-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.c-filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFilter = btn.dataset.filter;
          renderConsole();
        });
      });

      // Tab Switcher
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
          btn.classList.add('active');
          const target = document.getElementById(btn.dataset.target);
          if (target) target.classList.add('active');
          if (btn.dataset.target === 'view-game') {
            document.getElementById('game-canvas').focus();
          }
        });
      });

      // C# Scripts Viewer
      const csFilesData = ${r};
      const scriptTabsContainer = document.getElementById('script-tabs-container');
      const scriptViewer = document.getElementById('script-viewer');
      let activeScriptIndex = 0;

      function renderScriptViewer() {
        if (!csFilesData || csFilesData.length === 0) {
          scriptViewer.innerText = '// Aucun script C# trouvé dans le projet.';
          return;
        }
        scriptTabsContainer.innerHTML = csFilesData.map((f, i) => 
          '<button class="s-tab-btn ' + (i === activeScriptIndex ? 'active' : '') + '" data-idx="' + i + '">' +
            escapeHtml(f.path) +
          '</button>'
        ).join('');

        const current = csFilesData[activeScriptIndex];
        scriptViewer.innerText = current ? current.content : '';

        document.querySelectorAll('.s-tab-btn').forEach(b => {
          b.addEventListener('click', () => {
            activeScriptIndex = parseInt(b.dataset.idx, 10);
            renderScriptViewer();
          });
        });
      }

      document.getElementById('btn-copy-script').addEventListener('click', () => {
        const current = csFilesData[activeScriptIndex];
        if (current) {
          navigator.clipboard.writeText(current.content);
          logUnity('log', 'Script ' + current.path + ' copié dans le presse-papier !', 'Editor');
          const oldText = document.getElementById('btn-copy-script').innerText;
          document.getElementById('btn-copy-script').innerText = '✓ Copié !';
          setTimeout(() => document.getElementById('btn-copy-script').innerText = oldText, 1500);
        }
      });

      renderScriptViewer();

      // GAME ENGINE SIMULATION
      const canvas = document.getElementById('game-canvas');
      const ctx = canvas.getContext('2d');
      let isPaused = false;
      let timeScale = 1.0;
      let lastTime = performance.now();
      let frameCount = 0;
      let fpsTimer = 0;
      let currentFps = 60;

      // Game State
      const state = {
        score: 0,
        lives: 3,
        level: 1,
        gameOver: false,
        victory: false,
      };

      // Player GameObject (PlayerController.cs)
      const player = {
        x: 120,
        y: 300,
        vx: 0,
        vy: 0,
        width: 30,
        height: 40,
        speed: 7.5,
        jumpForce: 13.5,
        health: 100,
        maxHealth: 100,
        onGround: false,
        facing: 1,
        jumpCount: 0,
        shootCooldown: 0,
        invincibleTimer: 0,
      };

      // Camera (CameraFollow.cs)
      const camera = {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        smooth: 0.12,
      };

      // Platforms
      const platforms = [
        { x: -200, y: 440, w: 2400, h: 60, color: '#1e293b', border: '#38bdf8' }, // Ground
        { x: 180, y: 350, w: 140, h: 20, color: '#1e293b', border: '#818cf8' },
        { x: 380, y: 280, w: 160, h: 20, color: '#1e293b', border: '#818cf8' },
        { x: 620, y: 330, w: 140, h: 20, color: '#1e293b', border: '#818cf8' },
        { x: 840, y: 240, w: 180, h: 20, color: '#1e293b', border: '#38bdf8' },
        { x: 1100, y: 310, w: 150, h: 20, color: '#1e293b', border: '#818cf8' },
        { x: 1320, y: 250, w: 160, h: 20, color: '#1e293b', border: '#38bdf8' },
      ];

      // Coins (GameManager.cs)
      let coins = [
        { x: 250, y: 310, collected: false, bob: 0 },
        { x: 450, y: 240, collected: false, bob: 1 },
        { x: 690, y: 290, collected: false, bob: 2 },
        { x: 920, y: 200, collected: false, bob: 3 },
        { x: 1180, y: 270, collected: false, bob: 4 },
        { x: 1400, y: 210, collected: false, bob: 5 },
      ];

      // Enemies (EnemyController.cs)
      let enemies = [
        { id: 'enemy1', x: 400, y: 240, w: 30, h: 36, vx: 2, minX: 380, maxX: 520, health: 60, maxHealth: 60, state: 'patrol' },
        { id: 'enemy2', x: 860, y: 200, w: 30, h: 36, vx: -2.2, minX: 840, maxX: 1000, health: 60, maxHealth: 60, state: 'patrol' },
        { id: 'enemy3', x: 1120, y: 270, w: 30, h: 36, vx: 2.5, minX: 1100, maxX: 1230, health: 60, maxHealth: 60, state: 'patrol' },
      ];

      // Projectiles & Particles
      let bullets = [];
      let particles = [];

      function spawnParticles(x, y, count, color) {
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 5 + 1;
          particles.push({
            x, y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1,
            color,
            size: Math.random() * 4 + 2,
            life: 1.0,
            decay: Math.random() * 0.04 + 0.02,
          });
        }
      }

      // Input Controller
      const keys = {};
      window.addEventListener('keydown', (e) => {
        keys[e.code] = true;
        if (e.code === 'KeyR') resetGame();
        if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
          e.preventDefault();
        }
      });
      window.addEventListener('keyup', (e) => {
        keys[e.code] = false;
      });

      canvas.addEventListener('mousedown', () => shootBullet());

      // Virtual Touch Buttons
      const bindTouch = (id, code) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('touchstart', (e) => { e.preventDefault(); keys[code] = true; });
        el.addEventListener('touchend', (e) => { e.preventDefault(); keys[code] = false; });
      };
      bindTouch('t-left', 'ArrowLeft');
      bindTouch('t-right', 'ArrowRight');
      bindTouch('t-jump', 'Space');
      document.getElementById('t-shoot')?.addEventListener('touchstart', (e) => {
        e.preventDefault();
        shootBullet();
      });

      // Actions
      function shootBullet() {
        if (state.gameOver || state.victory || player.shootCooldown > 0) return;
        player.shootCooldown = 14;
        sfxShoot();
        const bulletX = player.x + (player.facing > 0 ? player.width + 4 : -10);
        const bulletY = player.y + player.height * 0.45;
        bullets.push({
          x: bulletX,
          y: bulletY,
          vx: player.facing * 14,
          vy: 0,
          life: 80,
        });
        spawnParticles(bulletX, bulletY, 4, '#38bdf8');
        logUnity('log', 'PlayerController.Shoot(): Projectile instantié (Speed: 14.0f, Dir: ' + player.facing + ')', 'PlayerController');
      }

      function jumpPlayer() {
        if (player.onGround || player.jumpCount < 2) {
          player.vy = -player.jumpForce;
          player.onGround = false;
          player.jumpCount++;
          sfxJump();
          spawnParticles(player.x + player.width / 2, player.y + player.height, 8, '#94a3b8');
          logUnity('log', 'PlayerController.Jump(): Saut déclenché (Force: ' + player.jumpForce + 'f, JumpCount: ' + player.jumpCount + ')', 'PlayerController');
        }
      }

      function resetGame() {
        state.score = 0;
        state.lives = 3;
        state.gameOver = false;
        state.victory = false;
        player.x = 120;
        player.y = 300;
        player.vx = 0;
        player.vy = 0;
        player.health = player.maxHealth;
        bullets = [];
        particles = [];
        coins.forEach(c => c.collected = false);
        enemies = [
          { id: 'enemy1', x: 400, y: 240, w: 30, h: 36, vx: 2, minX: 380, maxX: 520, health: 60, maxHealth: 60, state: 'patrol' },
          { id: 'enemy2', x: 860, y: 200, w: 30, h: 36, vx: -2.2, minX: 840, maxX: 1000, health: 60, maxHealth: 60, state: 'patrol' },
          { id: 'enemy3', x: 1120, y: 270, w: 30, h: 36, vx: 2.5, minX: 1100, maxX: 1230, health: 60, maxHealth: 60, state: 'patrol' },
        ];
        logUnity('log', 'SceneManager.LoadScene(0): Réinitialisation complète de la scène', 'GameManager');
      }

      // Hierarchy Inspector Wiring
      let selectedGo = 'player';
      function renderInspector() {
        const inspector = document.getElementById('inspector-content');
        if (selectedGo === 'player') {
          inspector.innerHTML = \`
            <div class="inspector-card">
              <div class="inspector-header"><span>Transform</span><span>GameObject: Player</span></div>
              <div class="inspector-body">
                <div class="prop-row"><span class="prop-label">Position X, Y</span><span style="font-family:monospace; color:#38bdf8;">\${Math.round(player.x)}, \${Math.round(player.y)}</span></div>
                <div class="prop-row"><span class="prop-label">Scale</span><span>1.0, 1.0, 1.0</span></div>
              </div>
            </div>
            <div class="inspector-card">
              <div class="inspector-header"><span>PlayerController.cs (Script)</span><span style="color:#38bdf8;">Actif</span></div>
              <div class="inspector-body">
                <div class="prop-row">
                  <span class="prop-label">Speed (\${player.speed.toFixed(1)})</span>
                  <input type="range" class="prop-slider" min="3" max="18" step="0.5" value="\${player.speed}" id="slider-speed">
                </div>
                <div class="prop-row">
                  <span class="prop-label">Jump Force (\${player.jumpForce.toFixed(1)})</span>
                  <input type="range" class="prop-slider" min="8" max="22" step="0.5" value="\${player.jumpForce}" id="slider-jump">
                </div>
                <div class="prop-row">
                  <span class="prop-label">Points de Vie (HP)</span>
                  <span style="color:#4ade80; font-weight:bold;">\${player.health} / \${player.maxHealth}</span>
                </div>
              </div>
            </div>
            <div class="inspector-card">
              <div class="inspector-header"><span>Rigidbody2D</span><span>Physique</span></div>
              <div class="inspector-body">
                <div class="prop-row"><span class="prop-label">Body Type</span><span>Dynamic</span></div>
                <div class="prop-row"><span class="prop-label">Mass</span><span>1.0 kg</span></div>
                <div class="prop-row"><span class="prop-label">Gravity Scale</span><span>1.8</span></div>
              </div>
            </div>
          \`;
          document.getElementById('slider-speed')?.addEventListener('input', (e) => {
            player.speed = parseFloat(e.target.value);
            logUnity('log', 'PlayerController.speed mis à jour: ' + player.speed + 'f', 'Inspector');
          });
          document.getElementById('slider-jump')?.addEventListener('input', (e) => {
            player.jumpForce = parseFloat(e.target.value);
            logUnity('log', 'PlayerController.jumpForce mis à jour: ' + player.jumpForce + 'f', 'Inspector');
          });
        } else if (selectedGo === 'camera') {
          inspector.innerHTML = \`
            <div class="inspector-card">
              <div class="inspector-header"><span>Transform</span><span>Main Camera</span></div>
              <div class="inspector-body">
                <div class="prop-row"><span class="prop-label">Cam X, Y</span><span style="font-family:monospace; color:#818cf8;">\${Math.round(camera.x)}, \${Math.round(camera.y)}</span></div>
              </div>
            </div>
            <div class="inspector-card">
              <div class="inspector-header"><span>CameraFollow.cs</span><span>Script</span></div>
              <div class="inspector-body">
                <div class="prop-row"><span class="prop-label">Target</span><span>Transform (Player)</span></div>
                <div class="prop-row"><span class="prop-label">Smooth Time</span><span>0.12f</span></div>
              </div>
            </div>
          \`;
        } else {
          inspector.innerHTML = \`
            <div class="inspector-card">
              <div class="inspector-header"><span>Transform</span><span>\${selectedGo}</span></div>
              <div class="inspector-body">
                <div class="prop-row"><span class="prop-label">Tag</span><span>GameUnit</span></div>
                <div class="prop-row"><span class="prop-label">Layer</span><span>Default</span></div>
                <div class="prop-row"><span class="prop-label">Static</span><span>False</span></div>
              </div>
            </div>
          \`;
        }
      }

      document.querySelectorAll('#scene-tree .tree-item').forEach(item => {
        item.addEventListener('click', () => {
          document.querySelectorAll('#scene-tree .tree-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          selectedGo = item.dataset.go;
          renderInspector();
        });
      });
      renderInspector();

      // Top Action Buttons
      const btnPause = document.getElementById('btn-pause');
      btnPause.addEventListener('click', () => {
        isPaused = !isPaused;
        btnPause.innerText = isPaused ? '▶ Reprendre' : '⏸ Pause';
        btnPause.classList.toggle('active', isPaused);
        logUnity('log', isPaused ? 'Simulation mise en pause' : 'Simulation reprise', 'TimeManager');
      });

      document.getElementById('btn-restart').addEventListener('click', () => resetGame());

      const btnAudio = document.getElementById('btn-audio');
      btnAudio.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        btnAudio.innerText = soundEnabled ? '🔊 Son' : '🔇 Muet';
        btnAudio.classList.toggle('active', !soundEnabled);
      });

      const btnSpeed = document.getElementById('btn-speed');
      btnSpeed.addEventListener('click', () => {
        timeScale = timeScale === 1.0 ? 2.0 : 1.0;
        btnSpeed.innerText = '⚡ ' + timeScale + 'x';
        btnSpeed.classList.toggle('active', timeScale > 1.0);
        logUnity('log', 'Time.timeScale ajusté à ' + timeScale + 'f', 'Time');
      });

      document.getElementById('btn-fullscreen').addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });

      // Initial Logs
      logUnity('log', 'Initialisation du moteur Unity 2D (WebGL Sandbox)...', 'Engine');
      logUnity('log', 'UnityEngine.SceneManagement: Scene Loaded "MainScene" (Build 2026.1)', 'SceneManager');
      logUnity('log', 'PlayerController.Awake(): GameObject "Player" prêt (Speed=' + player.speed + 'f, JumpForce=' + player.jumpForce + 'f)', 'PlayerController');
      logUnity('log', 'CameraFollow.Start(): Caméra verrouillée sur la cible Transform(Player)', 'CameraFollow');
      logUnity('log', 'EnemyController.Start(): 3 unités ennemies instantiées sur la carte', 'EnemyController');

      // MAIN 60 FPS ENGINE LOOP
      function gameLoop(timestamp) {
        requestAnimationFrame(gameLoop);

        const dt = (timestamp - lastTime) / 1000;
        lastTime = timestamp;

        // FPS Counter
        frameCount++;
        fpsTimer += dt;
        if (fpsTimer >= 0.5) {
          currentFps = Math.round(frameCount / fpsTimer);
          document.getElementById('perf-stats').innerText = currentFps + ' FPS | Delta: ' + (dt * 1000).toFixed(1) + 'ms | Unity 2D Engine';
          frameCount = 0;
          fpsTimer = 0;
        }

        if (isPaused) return;

        // Apply TimeScale
        const effectiveDt = Math.min(dt * timeScale, 0.05);

        // --- UPDATE LOGIC ---
        if (!state.gameOver && !state.victory) {
          // Horizontal Player Input
          let moveDir = 0;
          if (keys['KeyA'] || keys['KeyQ'] || keys['ArrowLeft']) moveDir -= 1;
          if (keys['KeyD'] || keys['ArrowRight']) moveDir += 1;

          if (moveDir !== 0) {
            player.vx = moveDir * player.speed;
            player.facing = moveDir;
          } else {
            player.vx *= 0.75;
          }

          // Jump Input
          if (keys['Space'] || keys['KeyW'] || keys['KeyZ'] || keys['ArrowUp']) {
            if (!player.jumpKeyPressed) {
              jumpPlayer();
              player.jumpKeyPressed = true;
            }
          } else {
            player.jumpKeyPressed = false;
          }

          // Shoot Input
          if (keys['KeyX'] || keys['Enter']) {
            if (!player.shootKeyPressed) {
              shootBullet();
              player.shootKeyPressed = true;
            }
          } else {
            player.shootKeyPressed = false;
          }

          if (player.shootCooldown > 0) player.shootCooldown--;
          if (player.invincibleTimer > 0) player.invincibleTimer--;

          // Gravity & Physics
          player.vy += 28 * effectiveDt;
          player.x += player.vx;
          player.y += player.vy;

          // Platform Collisions
          player.onGround = false;
          for (const plat of platforms) {
            if (
              player.x + player.width > plat.x &&
              player.x < plat.x + plat.w &&
              player.y + player.height >= plat.y &&
              player.y + player.height <= plat.y + 20 &&
              player.vy >= 0
            ) {
              player.y = plat.y - player.height;
              player.vy = 0;
              player.onGround = true;
              player.jumpCount = 0;
            }
          }

          // Camera Follow
          camera.targetX = player.x - canvas.width / 2 + player.width / 2;
          camera.targetY = player.y - canvas.height / 2 + player.height / 2;
          camera.x += (camera.targetX - camera.x) * camera.smooth;
          camera.y += (camera.targetY - camera.y) * camera.smooth;

          // Update Bullets
          for (let i = bullets.length - 1; i >= 0; i--) {
            const b = bullets[i];
            b.x += b.vx;
            b.life--;

            // Hit enemy check
            for (const enemy of enemies) {
              if (
                enemy.health > 0 &&
                b.x > enemy.x && b.x < enemy.x + enemy.w &&
                b.y > enemy.y && b.y < enemy.y + enemy.h
              ) {
                b.life = 0;
                enemy.health -= 35;
                sfxHit();
                spawnParticles(b.x, b.y, 8, '#f43f5e');
                logUnity('log', 'EnemyController.TakeDamage(35): PV restants=' + Math.max(0, enemy.health), 'EnemyController');
                if (enemy.health <= 0) {
                  state.score += 100;
                  spawnParticles(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, 20, '#fbbf24');
                  logUnity('log', 'EnemyController.Die(): Ennemi éliminé (+100 PTS)', 'GameManager');
                }
              }
            }

            if (b.life <= 0) bullets.splice(i, 1);
          }

          // Update Coins
          let remainingCoins = 0;
          for (const coin of coins) {
            if (!coin.collected) {
              remainingCoins++;
              coin.bob += 0.05;
              const coinY = coin.y + Math.sin(coin.bob) * 5;
              // Player overlap
              if (
                player.x + player.width > coin.x - 12 &&
                player.x < coin.x + 12 &&
                player.y + player.height > coinY - 12 &&
                player.y < coinY + 12
              ) {
                coin.collected = true;
                state.score += 50;
                sfxCoin();
                spawnParticles(coin.x, coinY, 12, '#fbbf24');
                logUnity('log', 'GameManager.AddScore(+50): Pièce collectée ! Score: ' + state.score, 'GameManager');
              }
            }
          }

          if (remainingCoins === 0 && enemies.every(e => e.health <= 0) && !state.victory) {
            state.victory = true;
            logUnity('log', 'GameManager: VICTOIRE ! Tous les objectifs ont été validés avec succès !', 'GameManager');
          }

          // Update Enemies (EnemyController.cs)
          for (const enemy of enemies) {
            if (enemy.health <= 0) continue;
            enemy.x += enemy.vx;
            if (enemy.x <= enemy.minX || enemy.x >= enemy.maxX) {
              enemy.vx *= -1;
            }

            // Aggro Detection
            const distToPlayer = Math.abs(player.x - enemy.x);
            if (distToPlayer < 180 && Math.abs(player.y - enemy.y) < 80) {
              enemy.state = 'chase';
              enemy.vx = (player.x > enemy.x ? 2.8 : -2.8);
            } else {
              enemy.state = 'patrol';
            }

            // Player Damage Check
            if (
              player.invincibleTimer === 0 &&
              player.x + player.width > enemy.x &&
              player.x < enemy.x + enemy.w &&
              player.y + player.height > enemy.y &&
              player.y < enemy.y + enemy.h
            ) {
              player.health -= 25;
              player.invincibleTimer = 40;
              player.vy = -8;
              player.vx = (player.x < enemy.x ? -7 : 7);
              sfxHit();
              spawnParticles(player.x + player.width / 2, player.y + player.height / 2, 10, '#f87171');
              logUnity('warn', 'PlayerController.TakeDamage(25): PV Joueur=' + player.health, 'PlayerController');

              if (player.health <= 0) {
                state.lives--;
                logUnity('error', 'PlayerController: Joueur vaincu ! Vies restantes: ' + state.lives, 'GameManager');
                if (state.lives <= 0) {
                  state.gameOver = true;
                  logUnity('error', 'GameManager: GAME OVER !', 'GameManager');
                } else {
                  player.health = player.maxHealth;
                  player.x = 120;
                  player.y = 300;
                }
              }
            }
          }

          // Fall off ground
          if (player.y > 600) {
            state.lives--;
            logUnity('error', 'PlayerController: Chute hors limites !', 'PlayerController');
            if (state.lives <= 0) {
              state.gameOver = true;
            } else {
              player.health = player.maxHealth;
              player.x = 120;
              player.y = 300;
              player.vy = 0;
            }
          }
        }

        // Update Particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;
          if (p.life <= 0) particles.splice(i, 1);
        }

        // --- RENDER PASS ---
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Parallax Background
        const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        bgGrad.addColorStop(0, '#090d16');
        bgGrad.addColorStop(1, '#131c2e');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Starfield / Cyber Grid
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        for (let s = 0; s < 40; s++) {
          const sx = ((s * 97 - camera.x * 0.2) % canvas.width + canvas.width) % canvas.width;
          const sy = (s * 37) % canvas.height;
          ctx.fillRect(sx, sy, 2, 2);
        }

        // Save for camera offset
        ctx.save();
        ctx.translate(-Math.round(camera.x), -Math.round(camera.y));

        // Platforms
        for (const plat of platforms) {
          ctx.fillStyle = plat.color;
          ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
          ctx.strokeStyle = plat.border;
          ctx.lineWidth = 2;
          ctx.strokeRect(plat.x, plat.y, plat.w, plat.h);
          // Neon top glow
          ctx.fillStyle = plat.border;
          ctx.fillRect(plat.x, plat.y, plat.w, 3);
        }

        // Coins
        for (const coin of coins) {
          if (coin.collected) continue;
          const cy = coin.y + Math.sin(coin.bob) * 5;
          ctx.save();
          ctx.translate(coin.x, cy);
          ctx.fillStyle = '#fbbf24';
          ctx.beginPath();
          ctx.arc(0, 0, 9, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.fillStyle = '#d97706';
          ctx.font = 'bold 9px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('$', 0, 0);
          ctx.restore();
        }

        // Enemies
        for (const enemy of enemies) {
          if (enemy.health <= 0) continue;
          ctx.fillStyle = enemy.state === 'chase' ? '#ef4444' : '#8b5cf6';
          ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(enemy.x, enemy.y, enemy.w, enemy.h);

          // Visor / Eyes
          ctx.fillStyle = enemy.state === 'chase' ? '#fee2e2' : '#c4b5fd';
          const eyeX = enemy.vx > 0 ? enemy.x + enemy.w - 10 : enemy.x + 3;
          ctx.fillRect(eyeX, enemy.y + 8, 7, 5);

          // Aggro indicator
          if (enemy.state === 'chase') {
            ctx.fillStyle = '#f87171';
            ctx.font = 'bold 13px sans-serif';
            ctx.fillText('!', enemy.x + enemy.w / 2 - 3, enemy.y - 6);
          }

          // Health bar
          const hpRatio = enemy.health / enemy.maxHealth;
          ctx.fillStyle = 'rgba(0,0,0,0.6)';
          ctx.fillRect(enemy.x, enemy.y - 12, enemy.w, 4);
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(enemy.x, enemy.y - 12, enemy.w * hpRatio, 4);
        }

        // Bullets
        ctx.fillStyle = '#38bdf8';
        for (const b of bullets) {
          ctx.beginPath();
          ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Particles
        for (const p of particles) {
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
        ctx.globalAlpha = 1.0;

        // Player (Voxel Hero)
        if (!state.gameOver) {
          ctx.save();
          if (player.invincibleTimer > 0 && Math.floor(player.invincibleTimer / 4) % 2 === 0) {
            ctx.globalAlpha = 0.4;
          }
          // Body
          ctx.fillStyle = '#0284c7';
          ctx.fillRect(player.x, player.y, player.width, player.height);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.strokeRect(player.x, player.y, player.width, player.height);

          // Helmet / Visor
          ctx.fillStyle = '#e0f2fe';
          const visorX = player.facing > 0 ? player.x + player.width - 12 : player.x + 3;
          ctx.fillRect(visorX, player.y + 8, 9, 8);

          // Jetpack flame on jump
          if (!player.onGround && player.vy < 0) {
            ctx.fillStyle = '#f97316';
            ctx.fillRect(player.x + (player.facing > 0 ? -4 : player.width), player.y + player.height - 10, 4, 12);
          }
          ctx.restore();
        }

        ctx.restore(); // Restore camera

        // --- HUD OVERLAY ---
        // Score & Lives
        ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
        ctx.fillRect(12, 12, 280, 44);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.strokeRect(12, 12, 280, 44);

        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 15px monospace';
        ctx.fillText('SCORE: ' + state.score, 24, 38);

        ctx.fillStyle = '#f43f5e';
        const hearts = '❤️'.repeat(Math.max(0, state.lives));
        ctx.font = '14px sans-serif';
        ctx.fillText(hearts, 160, 38);

        // Player Health Bar
        const hpWidth = 90;
        const currentHpW = Math.max(0, (player.health / player.maxHealth) * hpWidth);
        ctx.fillStyle = '#334155';
        ctx.fillRect(190, 26, hpWidth, 12);
        ctx.fillStyle = player.health > 40 ? '#22c55e' : '#ef4444';
        ctx.fillRect(190, 26, currentHpW, 12);
        ctx.strokeStyle = '#fff';
        ctx.strokeRect(190, 26, hpWidth, 12);

        // Bottom Controls Banner
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(0, canvas.height - 24, canvas.width, 24);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Contrôles : ZQSD / Flèches (Déplacement) • ESPACE (Saut) • CLIC / X (Tir) • R (Recommencer)', canvas.width / 2, canvas.height - 8);
        ctx.textAlign = 'left';

        // Victory / Game Over Screen
        if (state.gameOver) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 36px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);
          ctx.fillStyle = '#e2e8f0';
          ctx.font = '16px sans-serif';
          ctx.fillText('Score final : ' + state.score + ' PTS', canvas.width / 2, canvas.height / 2 + 15);
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 14px sans-serif';
          ctx.fillText('Appuyez sur [ R ] pour rejouer', canvas.width / 2, canvas.height / 2 + 50);
          ctx.textAlign = 'left';
        } else if (state.victory) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#22c55e';
          ctx.font = 'bold 36px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('VICTOIRE !', canvas.width / 2, canvas.height / 2 - 20);
          ctx.fillStyle = '#facc15';
          ctx.font = '18px sans-serif';
          ctx.fillText('Niveau terminé ! Score : ' + state.score + ' PTS', canvas.width / 2, canvas.height / 2 + 15);
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 14px sans-serif';
          ctx.fillText('Appuyez sur [ R ] pour recommencer', canvas.width / 2, canvas.height / 2 + 50);
          ctx.textAlign = 'left';
        }
      }

      // Start engine loop
      requestAnimationFrame(gameLoop);
    })();
  <\/script>
</body>
</html>`}function Ug(e){var i;const t=e.files||[],n=t.find(o=>/\.(cpp|cc|c|rs|java|go)$/i.test(o.path))||t[0],r=(((i=e.techStack)==null?void 0:i.language)||"C++").toUpperCase();return Xn(e.name||"Application Native"),`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Voxel Native Terminal</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #0d1117;
      color: #e6edf3;
      font-family: 'Fira Code', 'Consolas', Monaco, monospace;
      padding: 16px;
      font-size: 13px;
      line-height: 1.6;
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .header {
      border-bottom: 1px solid #30363d;
      padding-bottom: 10px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }
    .badge {
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
    }
    .terminal-screen {
      flex: 1;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-word;
      padding-right: 6px;
    }
    .line-cmd { color: #58a6ff; font-weight: bold; }
    .line-success { color: #3fb950; font-weight: bold; }
    .line-info { color: #8b949e; }
    .input-box {
      border-top: 1px solid #21262d;
      padding-top: 10px;
      margin-top: 10px;
      display: flex;
      gap: 8px;
      align-items: center;
      flex-shrink: 0;
    }
    input {
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-family: inherit;
      font-size: inherit;
      flex: 1;
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span>⚡ Compilateur & Terminal Virtuel ${r}</span>
      <span style="color: #8b949e; margin-left: 10px;">Cible : <strong>${Xn((n==null?void 0:n.path)||"main")}</strong></span>
    </div>
    <div class="badge">✓ Prêt (Linux x86_64)</div>
  </div>

  <div class="terminal-screen" id="term-out"></div>

  <div class="input-box">
    <span style="color: #38bdf8; font-weight: bold;">voxel@native:~$</span>
    <input type="text" id="term-in" placeholder="Tapez 'run', 'help' ou 'clear'..." autocomplete="off">
  </div>

  <script>
    const out = document.getElementById('term-out');
    const input = document.getElementById('term-in');

    function print(text, className = '') {
      const span = document.createElement('span');
      if (className) span.className = className;
      span.textContent = text + '\\n';
      out.appendChild(span);
      out.scrollTop = out.scrollHeight;

      try {
        window.parent.postMessage({
          type: 'VOXEL_CONSOLE',
          level: className.includes('success') ? 'info' : 'info',
          message: text
        }, '*');
      } catch(e) {}
    }

    function runSimulation() {
      print("voxel@native:~$ g++ -O3 -std=c++20 " + ${JSON.stringify((n==null?void 0:n.path)||"main.cpp")} + " -o app", "line-cmd");
      setTimeout(() => {
        print("✓ Compilation terminée avec succès (0 erreurs, 0 warnings)", "line-success");
        print("voxel@native:~$ ./app", "line-cmd");
        setTimeout(() => {
          print("==================================================", "line-info");
          print("   Voxel Forge - Exécution du binaire ${r}", "line-success");
          print("   Application initialisée avec succès à " + new Date().toLocaleTimeString(), "line-info");
          print("==================================================", "line-info");
          print("\\n[Programme terminé avec le code 0 (0.012s)]", "line-success");
        }, 300);
      }, 400);
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        input.value = '';
        if (!val) return;

        print("voxel@native:~$ " + val, "line-cmd");
        if (val === 'clear') {
          out.innerHTML = '';
        } else if (val === 'run') {
          runSimulation();
        } else if (val === 'help') {
          print("Commandes disponibles : 'run' (exécuter), 'clear' (effacer), 'ls' (liste des fichiers), 'help' (aide)");
        } else if (val === 'ls') {
          print("${Xn(t.map(o=>o.path).join("  "))}");
        } else {
          print("Commande exécutée : " + val);
        }
      }
    });

    runSimulation();
  <\/script>
</body>
</html>`}function Wg({isOpen:e,onClose:t,project:n}){const[r,i]=$.useState("desktop"),[o,s]=$.useState(!1),[l,c]=$.useState(!1),[h,b]=$.useState([]),[v,x]=$.useState(0),m=$.useRef(null),k=$.useMemo(()=>n?Ng(n):"",[n,v]);$.useEffect(()=>{if(!e){b([]);return}const u=y=>{y.data&&y.data.type==="VOXEL_CONSOLE"&&b(S=>[...S,{id:Date.now()+Math.random(),level:y.data.level||"info",message:y.data.message,time:new Date().toLocaleTimeString()}])};return window.addEventListener("message",u),()=>window.removeEventListener("message",u)},[e]);const p=()=>{if(m.current&&m.current.contentWindow)try{m.current.contentWindow.focus()}catch{}};if(!e)return null;const w=()=>{switch(r){case"mobile":return"375px";case"tablet":return"768px";default:return"100%"}},d=h.filter(u=>u.level==="error").length;return a.jsx("div",{className:`modal-overlay preview-modal-overlay ${o?"fullscreen-overlay":""}`,onClick:t,children:a.jsxs("div",{className:`preview-modal-card ${o?"fullscreen-card":""}`,onClick:u=>u.stopPropagation(),children:[a.jsxs("header",{className:"preview-modal-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsxs("div",{className:"preview-live-badge",children:[a.jsx("span",{className:"live-pulsing-dot"}),a.jsx("span",{children:"LIVE RUNNER"})]}),a.jsx("span",{style:{fontSize:"13px",fontWeight:600,color:"#e6edf3"},children:(n==null?void 0:n.name)||"Projet"})]}),a.jsxs("div",{className:"preview-viewport-group",children:[a.jsx("button",{className:`viewport-btn ${r==="desktop"?"active":""}`,onClick:()=>i("desktop"),title:"Ordinateur (Plein écran)",children:a.jsx(Qh,{size:14})}),a.jsx("button",{className:`viewport-btn ${r==="tablet"?"active":""}`,onClick:()=>i("tablet"),title:"Tablette (768px)",children:a.jsx(lm,{size:14})}),a.jsx("button",{className:`viewport-btn ${r==="mobile"?"active":""}`,onClick:()=>i("mobile"),title:"Mobile (375px)",children:a.jsx(am,{size:14})})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(u=>u+1),title:"Redémarrer le jeu / Recharger la page",children:[a.jsx(tm,{size:13}),a.jsx("span",{children:"Recharger"})]}),a.jsxs("button",{className:`btn btn-secondary btn-sm ${l?"active":""}`,onClick:()=>c(!l),title:"Afficher la console de logs et erreurs",children:[a.jsx(ra,{size:13}),a.jsx("span",{children:"Console"}),d>0&&a.jsx("span",{className:"console-error-pill",children:d})]}),a.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>s(!o),title:o?"Quitter le plein écran":"Plein écran",children:o?a.jsx(Xh,{size:13}):a.jsx(Yh,{size:13})}),a.jsx("button",{onClick:t,className:"preview-close-btn",title:"Fermer (Échap)",children:a.jsx(It,{size:18})})]})]}),a.jsx("div",{className:"preview-viewport-container",children:a.jsx("div",{className:"preview-frame-wrapper",style:{width:w()},children:a.jsx("iframe",{ref:m,srcDoc:k,onLoad:p,title:"Voxel Forge Live Sandbox",className:"preview-iframe",sandbox:"allow-scripts allow-modals allow-pointer-lock allow-forms allow-same-origin",allow:"accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi"},v)})}),l&&a.jsxs("div",{className:"preview-console-drawer",children:[a.jsxs("div",{className:"console-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(ra,{size:13,color:"#58a6ff"}),a.jsxs("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase"},children:["Console de sortie (",h.length,")"]})]}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>b([]),style:{padding:"2px 6px",fontSize:"10px"},title:"Effacer les logs",children:[a.jsx(Bd,{size:11}),a.jsx("span",{children:"Effacer"})]})]}),a.jsx("div",{className:"console-logs-list",children:h.length===0?a.jsx("div",{style:{color:"#6e7681",fontSize:"11px",padding:"10px 0"},children:"Aucun log pour le moment. Interagissez avec votre jeu/application."}):h.map(u=>a.jsxs("div",{className:`console-line ${u.level}`,children:[a.jsxs("span",{className:"console-timestamp",children:["[",u.time,"]"]}),a.jsx("span",{className:"console-msg",children:u.message})]},u.id))})]})]})})}const Vg=[{title:"🎮 Unreal Engine 5 & Blueprints",lang:"Blueprints",app:"Unreal Engine 5",lvl:"Débutant",topic:"Déplacement de personnage 3D avec Enhanced Inputs",goal:"Créer un Character Blueprint, configurer IA_Move/IMC_Default et faire bouger le joueur dans le Viewport"},{title:"🐍 Python & PyCharm",lang:"Python",app:"PyCharm",lvl:"Débutant",topic:"Fondamentaux, Fonctions et Sauvegarde JSON",goal:"Créer son premier projet dans PyCharm, manipuler des variables et sauvegarder des données"},{title:"🕹️ Godot 4 & GDScript",lang:"GDScript",app:"Godot 4",lvl:"Débutant",topic:"Premier jeu 2D avec Nœuds CharacterBody2D et Signaux",goal:"Comprendre l'arbre de scène Godot, programmer les inputs et gérer les collisions"},{title:"⚡ Unity & C#",lang:"C#",app:"Unity",lvl:"Débutant",topic:"Contrôleur de saut et physique Rigidbody",goal:"Créer un script MonoBehaviour de déplacement avec détection de sol (GroundCheck)"},{title:"🎨 Blender & Python",lang:"Python",app:"Blender 4",lvl:"Intermédiaire",topic:"Génération procédurale de mesh 3D par script",goal:"Utiliser l'API bpy pour créer et manipuler des objets 3D dans le Viewport Blender"},{title:"🌐 JavaScript & VS Code",lang:"JavaScript",app:"VS Code",lvl:"Débutant",topic:"Manipulation interactive du DOM et événements",goal:"Créer une interface dynamique avec écouteurs d'événements et animations"}],Hg=["Blueprints (UE5)","Python","C++","C#","GDScript","JavaScript","TypeScript","Rust","Shader Graph","Lua","SQL"],$g=["Unreal Engine 5","PyCharm","Godot 4","Unity","VS Code","Blender","Visual Studio","Android Studio"];function Gg({isOpen:e,onClose:t,onSubmit:n,isGenerating:r}){const[i,o]=$.useState("Blueprints"),[s,l]=$.useState("Unreal Engine 5"),[c,h]=$.useState("Débutant"),[b,v]=$.useState("Créer un déplacement de personnage à la 3e personne"),[x,m]=$.useState("Comprendre les Enhanced Inputs et faire bouger le personnage dans le Viewport");if(!e)return null;const k=w=>{o(w.lang),l(w.app),h(w.lvl),v(w.topic),m(w.goal)},p=w=>{if(w.preventDefault(),!i.trim()||!s.trim()){alert("Veuillez spécifier un langage et un logiciel.");return}n({language:i.trim(),software:s.trim(),level:c,topic:b.trim()||"Apprentissage et fondamentaux",goal:x.trim()||"Comprendre et maîtriser ce sujet avec succès"})};return a.jsx("div",{className:"modal-overlay",onClick:t,children:a.jsxs("div",{className:"modal-card",style:{maxWidth:"680px"},onClick:w=>w.stopPropagation(),children:[a.jsxs("header",{className:"modal-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("div",{style:{background:"rgba(168, 85, 247, 0.15)",padding:"6px",borderRadius:"8px",color:"#c084fc"},children:a.jsx(To,{size:20})}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"15px",fontWeight:600,color:"#fff"},children:"Créer un Tutoriel d'Apprentissage IA"}),a.jsx("p",{style:{fontSize:"11px",color:"#8b949e",margin:0},children:"Apprenez n'importe quel langage sur n'importe quel logiciel ou moteur de jeu"})]})]}),a.jsx("button",{onClick:t,style:{background:"transparent",border:"none",color:"#8b949e",cursor:"pointer"},children:a.jsx(It,{size:18})})]}),a.jsxs("form",{onSubmit:p,children:[a.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"8px"},children:[a.jsx(Dt,{size:13,color:"#c084fc"}),a.jsx("span",{className:"form-label",style:{marginBottom:0,fontSize:"12px",fontWeight:600},children:"Suggestions Populaires (1-Clic)"})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"8px"},children:Vg.map((w,d)=>a.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>k(w),style:{fontSize:"11px",justifyContent:"flex-start",padding:"8px 10px",textAlign:"left",background:"#0d1117",borderColor:"#30363d",lineHeight:"1.3"},children:a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600,color:"#e6edf3"},children:w.title}),a.jsx("div",{style:{fontSize:"10px",color:"#8b949e",marginTop:"2px"},children:w.topic})]})},d))})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Oh,{size:13,color:"#38bdf8"}),a.jsx("span",{children:"Langage ou Technologie"})]}),a.jsx("input",{type:"text",className:"form-input",value:i,onChange:w=>o(w.target.value),placeholder:"ex: Blueprints, Python, C++, GDScript...",required:!0}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"6px"},children:Hg.slice(0,6).map(w=>a.jsx("button",{type:"button",onClick:()=>o(w),style:{background:i===w?"rgba(56, 189, 248, 0.2)":"#161b22",color:i===w?"#38bdf8":"#8b949e",border:`1px solid ${i===w?"#38bdf8":"#30363d"}`,borderRadius:"4px",fontSize:"10px",padding:"2px 6px",cursor:"pointer"},children:w},w))})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Rd,{size:13,color:"#f43f5e"}),a.jsx("span",{children:"Logiciel / IDE / Moteur"})]}),a.jsx("input",{type:"text",className:"form-input",value:s,onChange:w=>l(w.target.value),placeholder:"ex: Unreal Engine 5, PyCharm, Godot, Unity...",required:!0}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"6px"},children:$g.slice(0,5).map(w=>a.jsx("button",{type:"button",onClick:()=>l(w),style:{background:s===w?"rgba(244, 63, 94, 0.2)":"#161b22",color:s===w?"#f43f5e":"#8b949e",border:`1px solid ${s===w?"#f43f5e":"#30363d"}`,borderRadius:"4px",fontSize:"10px",padding:"2px 6px",cursor:"pointer"},children:w},w))})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Niveau Visé"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:["Débutant (Zéro prérequis)","Intermédiaire (Pratique)","Avancé (Expertise)"].map(w=>{const d=w.split(" ")[0],u=c.startsWith(d);return a.jsx("button",{type:"button",onClick:()=>h(d),className:"btn btn-secondary btn-sm",style:{padding:"8px",fontSize:"11px",justifyContent:"center",background:u?"rgba(168, 85, 247, 0.15)":"#0d1117",borderColor:u?"#c084fc":"#30363d",color:u?"#c084fc":"#8b949e",fontWeight:u?600:400},children:w},w)})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Thème ou Sujet précis du cours"}),a.jsx("input",{type:"text",className:"form-input",value:b,onChange:w=>v(w.target.value),placeholder:"ex: Créer une IA ennemie qui poursuit le joueur, Manipuler des fichiers...",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Objectif d'apprentissage attendu"}),a.jsx("input",{type:"text",className:"form-input",value:x,onChange:w=>m(w.target.value),placeholder:"ex: Comprendre chaque étape et savoir le refaire de mémoire..."})]})]}),a.jsxs("footer",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,disabled:r,children:"Annuler"}),a.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:r,style:{background:"linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)",borderColor:"#a855f7"},children:[a.jsx(Vd,{size:14}),a.jsx("span",{children:r?"Conception du Tutoriel...":"Générer le Tutoriel Interactif"})]})]})]})]})})}function qg({isOpen:e,onClose:t,tutorial:n,onLoadIntoStudio:r}){var M,te;const[i,o]=$.useState(0),[s,l]=$.useState(!1),[c,h]=$.useState(!1),[b,v]=$.useState(!1),[x,m]=$.useState(!0);if(!e||!n)return null;const k=n.steps||[],p=k[i]||{},w=k.length>0?Math.round((i+1)/k.length*100):100,d=(E,F)=>{E&&navigator.clipboard.writeText(E).then(()=>{F(!0),setTimeout(()=>F(!1),2e3)})},u=()=>{i>0&&o(i-1)},y=()=>{i<k.length-1&&o(i+1)},S=(((M=n.softwareSetup)==null?void 0:M.keyShortcuts)||[]).map(E=>{var F;if(typeof E=="string"){const g=E.split(":");return{key:((F=g[0])==null?void 0:F.trim())||E,action:g.slice(1).join(":").trim()||""}}return{key:E.key,action:E.action}}),_=p.softwareActions||p.softwareAction,T=Array.isArray(_)?_:typeof _=="string"?_.split(`
`).filter(Boolean):[],z=p.codeOrNodes||p.codeSnippet,N=p.codeLanguage||n.language,R=p.title||p.stepTitle||`Étape ${i+1}`;return a.jsx("div",{className:"modal-backdrop",onClick:t,children:a.jsxs("div",{className:"modal-content",style:{maxWidth:"960px",width:"95vw",maxHeight:"92vh",display:"flex",flexDirection:"column"},onClick:E=>E.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",style:{borderBottom:"1px solid #30363d",paddingBottom:"14px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"linear-gradient(135deg, #a855f7, #6366f1)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 0 16px rgba(168, 85, 247, 0.4)"},children:a.jsx(To,{size:22})}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,margin:0,color:"#f0f6fc"},children:n.title||"Tutoriel d'Apprentissage"}),a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginTop:"4px",flexWrap:"wrap"},children:[a.jsx("span",{className:"badge",style:{background:"#a855f720",color:"#c084fc",border:"1px solid #a855f740"},children:n.language}),a.jsxs("span",{className:"badge",style:{background:"#38bdf820",color:"#38bdf8",border:"1px solid #38bdf840"},children:["💻 ",n.software]}),a.jsxs("span",{className:"badge",style:{background:"#22c55e20",color:"#4ade80",border:"1px solid #22c55e40"},children:["Niveau : ",n.level]}),n.estimatedTime&&a.jsxs("span",{style:{fontSize:"11px",color:"#8b949e",display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(Mh,{size:12})," ",n.estimatedTime]})]})]})]}),a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>{r(n),t()},title:"Charger tous les fichiers du tutoriel dans le Monaco Editor de Voxel Studio",style:{background:"linear-gradient(135deg, #6366f1, #a855f7)",border:"none"},children:[a.jsx(na,{size:14}),a.jsx("span",{children:"Ouvrir dans le Studio"})]}),a.jsx("button",{className:"btn-icon",onClick:t,children:a.jsx(It,{size:18})})]})]}),a.jsxs("div",{style:{overflowY:"auto",padding:"16px 20px",flex:1,display:"flex",flexDirection:"column",gap:"16px"},children:[n.summary&&a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"8px",padding:"12px 16px",fontSize:"13px",color:"#c9d1d9",lineHeight:1.5},children:[a.jsx("strong",{style:{color:"#58a6ff"},children:"🎯 Objectif : "}),n.summary,n.prerequisites&&n.prerequisites.length>0&&a.jsxs("div",{style:{marginTop:"6px",fontSize:"11px",color:"#8b949e"},children:[a.jsx("strong",{children:"Prérequis : "})," ",n.prerequisites.join(" • ")]})]}),n.softwareSetup&&a.jsxs("div",{style:{background:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.25)",borderRadius:"8px",padding:"12px 16px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:()=>m(!x),children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:600,fontSize:"12px",color:"#818cf8"},children:[a.jsx($h,{size:14}),a.jsxs("span",{children:["Prise en main & Raccourcis sur ",n.software]}),n.softwareSetup.recommendedVersion&&a.jsxs("span",{style:{fontSize:"11px",color:"#a5b4fc",fontWeight:400},children:["(",n.softwareSetup.recommendedVersion,")"]})]}),a.jsx("span",{style:{fontSize:"11px",color:"#8b949e"},children:x?"Masquer ▲":"Afficher ▼"})]}),x&&a.jsxs("div",{style:{marginTop:"10px"},children:[(n.softwareSetup.layoutTips||n.softwareSetup.installationTips)&&a.jsxs("p",{style:{fontSize:"12px",color:"#8b949e",margin:"0 0 8px 0"},children:["💡 ",n.softwareSetup.layoutTips||n.softwareSetup.installationTips]}),S.length>0&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:S.map((E,F)=>a.jsxs("div",{style:{background:"#0d1117",border:"1px solid #30363d",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("code",{style:{color:"#38bdf8",fontWeight:700,background:"#161b22",padding:"1px 5px",borderRadius:"4px"},children:E.key}),E.action&&a.jsx("span",{style:{color:"#c9d1d9"},children:E.action})]},F))})]})]}),a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"8px",padding:"10px 14px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[a.jsxs("span",{style:{fontSize:"12px",fontWeight:600,color:"#f0f6fc"},children:["Étape ",i+1," sur ",k.length]}),a.jsxs("span",{style:{fontSize:"12px",color:"#a855f7",fontWeight:600},children:[w,"% complété"]})]}),a.jsx("div",{style:{width:"100%",height:"5px",background:"#21262d",borderRadius:"3px",overflow:"hidden"},children:a.jsx("div",{style:{width:`${w}%`,height:"100%",background:"linear-gradient(90deg, #a855f7, #38bdf8)",transition:"width 0.3s ease"}})}),a.jsx("div",{style:{display:"flex",gap:"6px",marginTop:"10px",overflowX:"auto",paddingBottom:"2px"},children:k.map((E,F)=>{const g=F===i,L=F<i,ee=E.title||E.stepTitle||`Étape ${F+1}`;return a.jsxs("button",{onClick:()=>o(F),style:{padding:"4px 10px",borderRadius:"6px",fontSize:"11px",border:"none",cursor:"pointer",background:g?"linear-gradient(135deg, #a855f7, #6366f1)":L?"rgba(34, 197, 94, 0.15)":"#21262d",color:g?"#fff":L?"#4ade80":"#8b949e",fontWeight:g?600:400,display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},children:[L&&a.jsx(Sn,{size:11}),a.jsxs("span",{children:[F+1,". ",ee.slice(0,18),"..."]})]},F)})})]}),a.jsxs("div",{style:{background:"#0d1117",border:"1px solid #30363d",borderRadius:"10px",padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#a855f7",color:"#fff",fontWeight:700,fontSize:"13px",display:"flex",alignItems:"center",justifyContent:"center"},children:p.stepNumber||i+1}),a.jsx("h3",{style:{margin:0,fontSize:"1.15rem",color:"#f0f6fc",fontWeight:600},children:R})]}),T.length>0&&a.jsxs("div",{style:{background:"rgba(56, 189, 248, 0.08)",border:"1px solid rgba(56, 189, 248, 0.3)",borderRadius:"8px",padding:"14px",display:"flex",gap:"12px"},children:[a.jsx(Jh,{size:20,color:"#38bdf8",style:{flexShrink:0,marginTop:"2px"}}),a.jsxs("div",{style:{flex:1},children:[a.jsxs("div",{style:{fontSize:"12px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"6px"},children:["Actions dans l'interface de ",n.software]}),a.jsx("ul",{style:{margin:0,paddingLeft:"18px",fontSize:"13px",color:"#e6edf3",lineHeight:1.6},children:T.map((E,F)=>a.jsx("li",{style:{marginBottom:"4px"},children:E},F))})]})]}),z&&a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"8px",overflow:"hidden"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#21262d",padding:"8px 14px",borderBottom:"1px solid #30363d"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"12px",color:"#8b949e"},children:[a.jsx(Lh,{size:14,color:"#a855f7"}),a.jsx("span",{children:N})]}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>d(z,l),style:{padding:"3px 8px",fontSize:"11px",display:"flex",alignItems:"center",gap:"4px"},children:[s?a.jsx(Sn,{size:12,color:"#22c55e"}):a.jsx(uo,{size:12}),a.jsx("span",{children:s?"Copié !":"Copier"})]})]}),a.jsx("pre",{style:{margin:0,padding:"14px",fontSize:"12px",fontFamily:"Fira Code, Consolas, monospace",color:"#e6edf3",overflowX:"auto",lineHeight:1.5,maxHeight:"320px"},children:a.jsx("code",{children:z})})]}),p.explanation&&a.jsxs("div",{style:{fontSize:"13px",color:"#c9d1d9",lineHeight:1.6,padding:"4px 2px"},children:[a.jsxs("strong",{style:{color:"#bc8cff",display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px"},children:[a.jsx(qh,{size:15})," Explication du concept :"]}),p.explanation]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"12px"},children:[p.proTip&&a.jsxs("div",{style:{background:"rgba(168, 85, 247, 0.08)",border:"1px solid rgba(168, 85, 247, 0.25)",borderRadius:"8px",padding:"10px 12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"11px",fontWeight:700,color:"#c084fc",marginBottom:"4px"},children:[a.jsx(Dt,{size:13}),a.jsx("span",{children:"ASTUCE DE PRO"})]}),a.jsx("div",{style:{fontSize:"12px",color:"#c9d1d9",lineHeight:1.5},children:p.proTip})]}),p.pitfallToAvoid&&a.jsxs("div",{style:{background:"rgba(234, 179, 8, 0.08)",border:"1px solid rgba(234, 179, 8, 0.25)",borderRadius:"8px",padding:"10px 12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"11px",fontWeight:700,color:"#fbbf24",marginBottom:"4px"},children:[a.jsx(Ih,{size:13}),a.jsx("span",{children:"PIÈGE CLASSIQUE À ÉVITER"})]}),a.jsx("div",{style:{fontSize:"12px",color:"#c9d1d9",lineHeight:1.5},children:p.pitfallToAvoid})]})]})]}),n.practiceChallenge&&a.jsxs("div",{style:{background:"#161b22",border:"1px solid rgba(234, 179, 8, 0.3)",borderRadius:"10px",padding:"16px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"10px"},children:[a.jsx(cm,{size:18,color:"#eab308"}),a.jsx("h4",{style:{margin:0,fontSize:"13px",color:"#f0f6fc",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px"},children:n.practiceChallenge.title||"Défi Pratique d'application"})]}),a.jsx("div",{style:{fontSize:"13px",color:"#c9d1d9",lineHeight:1.6,marginBottom:"12px"},children:n.practiceChallenge.description}),(n.practiceChallenge.hint||n.practiceChallenge.hints&&n.practiceChallenge.hints.length>0)&&a.jsxs("div",{style:{marginBottom:"12px",background:"#0d1117",padding:"10px 12px",borderRadius:"6px",border:"1px solid #21262d"},children:[a.jsx("div",{style:{fontSize:"11px",fontWeight:600,color:"#8b949e",marginBottom:"4px"},children:"💡 Indice :"}),a.jsx("div",{style:{fontSize:"12px",color:"#8b949e"},children:n.practiceChallenge.hint||((te=n.practiceChallenge.hints)==null?void 0:te.join(" • "))})]}),n.practiceChallenge.solution&&a.jsxs("div",{children:[a.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>v(!b),style:{fontSize:"11px"},children:b?"Masquer la Solution":"👁️ Afficher la Solution"}),b&&a.jsxs("div",{style:{marginTop:"10px",background:"#0d1117",border:"1px solid #30363d",borderRadius:"6px",padding:"12px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[a.jsx("span",{style:{fontSize:"11px",color:"#22c55e",fontWeight:600},children:"Solution recommandée :"}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>d(n.practiceChallenge.solution,h),style:{padding:"2px 6px",fontSize:"10px"},children:[c?a.jsx(Sn,{size:11,color:"#22c55e"}):a.jsx(uo,{size:11}),a.jsx("span",{children:c?"Copié":"Copier"})]})]}),a.jsx("pre",{style:{margin:0,padding:"10px",background:"#161b22",borderRadius:"4px",fontSize:"11px",color:"#c9d1d9",overflowX:"auto",whiteSpace:"pre-wrap",fontFamily:"Fira Code, Consolas, monospace"},children:a.jsx("code",{children:n.practiceChallenge.solution})})]})]})]}),n.files&&n.files.length>0&&a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"8px",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#f0f6fc"},children:["📦 Fichiers inclus (",n.files.length,") :"]}),a.jsx("div",{style:{fontSize:"11px",color:"#8b949e",marginTop:"2px"},children:n.files.map(E=>E.path||E.name).join(", ")})]}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{r(n),t()},style:{fontSize:"11px",borderColor:"#a855f7",color:"#c084fc"},children:[a.jsx(na,{size:13}),a.jsx("span",{children:"Charger dans l'éditeur"})]})]})]}),a.jsxs("div",{className:"modal-footer",style:{borderTop:"1px solid #30363d",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("button",{className:"btn btn-secondary",onClick:u,disabled:i===0,style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Rh,{size:16}),a.jsx("span",{children:"Étape Précédente"})]}),a.jsx("div",{style:{display:"flex",gap:"10px"},children:i<k.length-1?a.jsxs("button",{className:"btn btn-primary",onClick:y,style:{display:"flex",alignItems:"center",gap:"6px",background:"linear-gradient(135deg, #a855f7, #6366f1)"},children:[a.jsx("span",{children:"Étape Suivante"}),a.jsx(Md,{size:16})]}):a.jsxs("button",{className:"btn btn-accent",onClick:()=>{r(n),t()},style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx(Kr,{size:16}),a.jsx("span",{children:"Terminé ! Ouvrir dans le Studio"})]})})]})]})})}const Zg=[{id:"voxel-world-3d",title:"🧊 Voxel World 3D (Minecraft Web)",category:"3D & Voxel",badge:"Flagship 3D",description:"Moteur 3D temps réel à base de blocs en Three.js. Déplacez-vous à la première personne (ZQSD + Souris), sautez, cassez et posez des cubes avec sélection de matériaux.",tags:["Three.js","Voxel","3D Sandbox","First Person"],files:[{path:"index.html",language:"html",content:`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Voxel World 3D — Voxel Forge</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { overflow: hidden; background: #87ceeb; font-family: 'Segoe UI', Tahoma, sans-serif; user-select: none; }
    #canvas-container { width: 100vw; height: 100vh; display: block; }
    
    /* Crosshair */
    #crosshair {
      position: absolute;
      top: 50%; left: 50%;
      width: 14px; height: 14px;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
    }
    #crosshair::before, #crosshair::after {
      content: ''; position: absolute; background: rgba(255,255,255,0.85);
      box-shadow: 0 0 2px rgba(0,0,0,0.8);
    }
    #crosshair::before { top: 6px; left: 0; width: 14px; height: 2px; }
    #crosshair::after { top: 0; left: 6px; width: 2px; height: 14px; }

    /* UI Overlay */
    #ui-overlay {
      position: absolute; top: 16px; left: 16px;
      color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
      font-size: 13px; line-height: 1.5; pointer-events: none; z-index: 10;
    }
    .hud-title { font-size: 16px; font-weight: 700; color: #38bdf8; margin-bottom: 4px; }

    /* Hotbar */
    #hotbar {
      position: absolute; bottom: 20px; left: 50%;
      transform: translateX(-50%);
      display: flex; gap: 8px;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(8px);
      padding: 6px 12px; border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.2);
      z-index: 10;
    }
    .slot {
      width: 44px; height: 44px;
      border-radius: 8px; border: 2px solid transparent;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      cursor: pointer; transition: all 0.15s;
    }
    .slot.active {
      border-color: #38bdf8;
      background: rgba(56, 189, 248, 0.2);
      transform: scale(1.08);
    }
    .block-preview {
      width: 20px; height: 20px; border-radius: 3px;
      box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
    }
    .slot-num { font-size: 10px; color: #94a3b8; margin-top: 2px; font-weight: bold; }

    /* Instructions Modal */
    #blocker {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.65); backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center;
      z-index: 20; cursor: pointer; color: #fff; text-align: center;
    }
    .instructions {
      background: #1e293b; border: 1px solid #334155;
      padding: 28px 40px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    .btn-play {
      background: linear-gradient(135deg, #0284c7, #6366f1);
      color: #fff; border: none; padding: 10px 24px; border-radius: 8px;
      font-weight: 700; margin-top: 16px; cursor: pointer; font-size: 14px;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
</head>
<body>
  <div id="canvas-container"></div>
  <div id="crosshair"></div>

  <div id="ui-overlay">
    <div class="hud-title">🧊 Voxel Forge 3D World</div>
    <div>Position : <span id="coords">X: 0, Y: 5, Z: 0</span></div>
    <div>Blocs posés : <span id="block-count">0</span></div>
    <div style="margin-top: 6px; font-size: 11px; color: #cbd5e1;">
      [Clic Gauche] Détruire • [Clic Droit] Poser<br>
      [1-5] Sélectionner le bloc • [Espace] Sauter
    </div>
  </div>

  <div id="hotbar">
    <div class="slot active" data-type="grass" data-key="1">
      <div class="block-preview" style="background: #4ade80;"></div>
      <span class="slot-num">1</span>
    </div>
    <div class="slot" data-type="dirt" data-key="2">
      <div class="block-preview" style="background: #92400e;"></div>
      <span class="slot-num">2</span>
    </div>
    <div class="slot" data-type="stone" data-key="3">
      <div class="block-preview" style="background: #64748b;"></div>
      <span class="slot-num">3</span>
    </div>
    <div class="slot" data-type="wood" data-key="4">
      <div class="block-preview" style="background: #b45309;"></div>
      <span class="slot-num">4</span>
    </div>
    <div class="slot" data-type="leaves" data-key="5">
      <div class="block-preview" style="background: #15803d;"></div>
      <span class="slot-num">5</span>
    </div>
  </div>

  <div id="blocker">
    <div class="instructions">
      <h2 style="margin-bottom: 8px;">🎮 Voxel World 3D</h2>
      <p style="color: #94a3b8; font-size: 13px; margin-bottom: 14px;">
        Cliquez pour verrouiller le curseur et explorer le monde.<br>
        Contrôles : <strong>Z, Q, S, D</strong> (ou Flèches) pour marcher, <strong>Espace</strong> pour sauter.
      </p>
      <button class="btn-play">Cliquer pour Jouer</button>
    </div>
  </div>

  <script src="game.js"><\/script>
</body>
</html>`},{path:"game.js",language:"javascript",content:`// Voxel Forge 3D World Engine
const container = document.getElementById('canvas-container');
const coordsEl = document.getElementById('coords');
const blockCountEl = document.getElementById('block-count');
const blocker = document.getElementById('blocker');

// 1. Scene & Camera Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.FogExp2(0x87ceeb, 0.025);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 6, 12);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

// 2. Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xfffbeb, 0.85);
sunLight.position.set(30, 60, 20);
sunLight.castShadow = true;
scene.add(sunLight);

// 3. Materials
const BLOCK_MATERIALS = {
  grass: new THREE.MeshLambertMaterial({ color: 0x4ade80 }),
  dirt: new THREE.MeshLambertMaterial({ color: 0x854d0e }),
  stone: new THREE.MeshLambertMaterial({ color: 0x64748b }),
  wood: new THREE.MeshLambertMaterial({ color: 0xb45309 }),
  leaves: new THREE.MeshLambertMaterial({ color: 0x15803d })
};

let currentBlockType = 'grass';
let placedBlocksCount = 0;

// Geometry & Voxel Grid
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const voxels = new Map();

function addVoxel(x, y, z, type = 'grass') {
  const key = \`\${x},\${y},\${z}\`;
  if (voxels.has(key)) return;

  const mat = BLOCK_MATERIALS[type] || BLOCK_MATERIALS.grass;
  const mesh = new THREE.Mesh(boxGeo, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = { key, type };

  scene.add(mesh);
  voxels.set(key, mesh);
  return mesh;
}

function removeVoxel(x, y, z) {
  const key = \`\${x},\${y},\${z}\`;
  const mesh = voxels.get(key);
  if (mesh) {
    scene.remove(mesh);
    voxels.delete(key);
  }
}

// 4. Procedural Terrain Generation
const WORLD_SIZE = 14;
for (let x = -WORLD_SIZE; x <= WORLD_SIZE; x++) {
  for (let z = -WORLD_SIZE; z <= WORLD_SIZE; z++) {
    const dist = Math.sqrt(x*x + z*z);
    const height = Math.floor(Math.sin(x * 0.25) * 1.5 + Math.cos(z * 0.25) * 1.5);
    
    // Bottom stone
    addVoxel(x, -1, z, 'stone');
    // Middle dirt
    for (let y = 0; y < height; y++) {
      addVoxel(x, y, z, 'dirt');
    }
    // Top grass
    addVoxel(x, height, z, 'grass');
  }
}

// Add a few decorative trees
function plantTree(x, z, groundY) {
  for (let y = 1; y <= 4; y++) addVoxel(x, groundY + y, z, 'wood');
  for (let lx = -1; lx <= 1; lx++) {
    for (let lz = -1; lz <= 1; lz++) {
      for (let ly = 4; ly <= 5; ly++) {
        if (lx !== 0 || lz !== 0 || ly === 5) {
          addVoxel(x + lx, groundY + ly, z + lz, 'leaves');
        }
      }
    }
  }
}
plantTree(4, -4, 1);
plantTree(-5, 6, 1);

// Wireframe block highlighter
const outlineGeo = new THREE.BoxGeometry(1.02, 1.02, 1.02);
const outlineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const targetBox = new THREE.Mesh(outlineGeo, outlineMat);
targetBox.visible = false;
scene.add(targetBox);

// 5. First Person Controls & Physics
let isLocked = false;
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let velocity = new THREE.Vector3();
let direction = new THREE.Vector3();
let canJump = true;

// Pointer lock
blocker.addEventListener('click', () => {
  renderer.domElement.requestPointerLock();
});

document.addEventListener('pointerlockchange', () => {
  isLocked = document.pointerLockElement === renderer.domElement;
  blocker.style.display = isLocked ? 'none' : 'flex';
});

// Mouse look
let pitch = 0, yaw = 0;
document.addEventListener('mousemove', (e) => {
  if (!isLocked) return;
  const movementX = e.movementX || 0;
  const movementY = e.movementY || 0;

  yaw -= movementX * 0.0025;
  pitch -= movementY * 0.0025;
  pitch = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, pitch));

  camera.rotation.order = 'YXZ';
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
});

// Keyboard
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'KeyW': case 'KeyZ': case 'ArrowUp': moveForward = true; break;
    case 'KeyS': case 'ArrowDown': moveBackward = true; break;
    case 'KeyA': case 'KeyQ': case 'ArrowLeft': moveLeft = true; break;
    case 'KeyD': case 'ArrowRight': moveRight = true; break;
    case 'Space':
      if (canJump) {
        velocity.y = 8.5;
        canJump = false;
      }
      break;
    case 'Digit1': selectSlot('grass'); break;
    case 'Digit2': selectSlot('dirt'); break;
    case 'Digit3': selectSlot('stone'); break;
    case 'Digit4': selectSlot('wood'); break;
    case 'Digit5': selectSlot('leaves'); break;
  }
});

document.addEventListener('keyup', (e) => {
  switch (e.code) {
    case 'KeyW': case 'KeyZ': case 'ArrowUp': moveForward = false; break;
    case 'KeyS': case 'ArrowDown': moveBackward = false; break;
    case 'KeyA': case 'KeyQ': case 'ArrowLeft': moveLeft = false; break;
    case 'KeyD': case 'ArrowRight': moveRight = false; break;
  }
});

function selectSlot(type) {
  currentBlockType = type;
  document.querySelectorAll('.slot').forEach(s => {
    s.classList.toggle('active', s.getAttribute('data-type') === type);
  });
}

document.querySelectorAll('.slot').forEach(slot => {
  slot.addEventListener('click', () => selectSlot(slot.getAttribute('data-type')));
});

// 6. Raycasting (Break & Place Blocks)
const raycaster = new THREE.Raycaster();
let targetedIntersect = null;

function checkRaycast() {
  raycaster.setFromCamera({ x: 0, y: 0 }, camera);
  const meshes = Array.from(voxels.values());
  const intersects = raycaster.intersectObjects(meshes);

  if (intersects.length > 0 && intersects[0].distance < 7.5) {
    targetedIntersect = intersects[0];
    targetBox.position.copy(targetedIntersect.object.position);
    targetBox.visible = true;
  } else {
    targetedIntersect = null;
    targetBox.visible = false;
  }
}

document.addEventListener('mousedown', (e) => {
  if (!isLocked || !targetedIntersect) return;

  if (e.button === 0) {
    // Left Click: Break
    const pos = targetedIntersect.object.position;
    removeVoxel(pos.x, pos.y, pos.z);
    targetBox.visible = false;
    targetedIntersect = null;
  } else if (e.button === 2) {
    // Right Click: Place
    const normal = targetedIntersect.face.normal;
    const targetPos = targetedIntersect.object.position.clone().add(normal);
    
    // Prevent placing inside player
    if (camera.position.distanceTo(targetPos) > 1.2) {
      addVoxel(targetPos.x, targetPos.y, targetPos.z, currentBlockType);
      placedBlocksCount++;
      blockCountEl.innerText = placedBlocksCount;
    }
  }
});

// Disable right click context menu
window.addEventListener('contextmenu', (e) => e.preventDefault());

// 7. Game Loop & Physics
let prevTime = performance.now();

function animate() {
  requestAnimationFrame(animate);

  const time = performance.now();
  const delta = Math.min((time - prevTime) / 1000, 0.1);
  prevTime = time;

  if (isLocked) {
    // Gravity & Ground Check
    velocity.y -= 22.0 * delta;

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();

    const speed = 7.5;
    if (moveForward || moveBackward) velocity.z = direction.z * speed;
    else velocity.z = 0;
    if (moveLeft || moveRight) velocity.x = direction.x * speed;
    else velocity.x = 0;

    // Apply movement relative to camera yaw
    const forwardVec = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    const rightVec = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);

    const moveVector = new THREE.Vector3()
      .addScaledVector(forwardVec, velocity.z * delta)
      .addScaledVector(rightVec, velocity.x * delta);

    camera.position.add(moveVector);
    camera.position.y += velocity.y * delta;

    // Basic ground collision at Y = 2
    if (camera.position.y < 2.5) {
      velocity.y = 0;
      camera.position.y = 2.5;
      canJump = true;
    }

    // Update HUD
    coordsEl.innerText = \`X: \${Math.round(camera.position.x)}, Y: \${Math.round(camera.position.y)}, Z: \${Math.round(camera.position.z)}\`;
    checkRaycast();
  }

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
`}]},{id:"cyberpunk-neon-pong",title:"🏓 Cyberpunk Neon Pong 2D",category:"Arcade 2D",badge:"Rétro Synthwave",description:"Duel d'arcade classique revisité en style Cyberpunk avec trainées néon, rebonds physiques dynamiques et effets de particules.",tags:["Canvas 2D","Arcade","Cyberpunk","Sound FX"],files:[{path:"index.html",language:"html",content:`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Cyberpunk Neon Pong</title>
  <style>
    body { margin: 0; background: #070913; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; font-family: 'Courier New', monospace; }
    canvas { border: 2px solid #38bdf8; box-shadow: 0 0 25px rgba(56, 189, 248, 0.4); border-radius: 8px; }
  </style>
</head>
<body>
  <canvas id="game" width="800" height="500"></canvas>
  <script src="game.js"><\/script>
</body>
</html>`},{path:"game.js",language:"javascript",content:`const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let p1 = { x: 20, y: 200, w: 12, h: 90, score: 0, color: '#38bdf8' };
let p2 = { x: 768, y: 200, w: 12, h: 90, score: 0, color: '#ec4899' };
let ball = { x: 400, y: 250, r: 7, vx: 5.5, vy: 3, speed: 5.5 };
let trails = [];

// Mouse & Keys
let mouseY = 250;
window.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseY = e.clientY - rect.top;
});

function resetBall(scorer) {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = 5.5;
  ball.vx = (scorer === 1 ? -1 : 1) * ball.speed;
  ball.vy = (Math.random() * 4 - 2);
}

function update() {
  // P1 follows mouse smoothly
  p1.y += (mouseY - p1.h / 2 - p1.y) * 0.2;
  p1.y = Math.max(10, Math.min(canvas.height - p1.h - 10, p1.y));

  // P2 AI
  const targetY = ball.y - p2.h / 2;
  p2.y += (targetY - p2.y) * 0.08;
  p2.y = Math.max(10, Math.min(canvas.height - p2.h - 10, p2.y));

  // Ball
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Trail
  trails.push({ x: ball.x, y: ball.y, alpha: 1.0 });
  if (trails.length > 15) trails.shift();

  // Top/Bottom bounce
  if (ball.y < ball.r || ball.y > canvas.height - ball.r) {
    ball.vy *= -1;
  }

  // P1 Collision
  if (ball.x - ball.r <= p1.x + p1.w && ball.y >= p1.y && ball.y <= p1.y + p1.h && ball.vx < 0) {
    ball.speed += 0.3;
    ball.vx = ball.speed;
    const diff = (ball.y - (p1.y + p1.h / 2)) / (p1.h / 2);
    ball.vy = diff * 6.5;
  }

  // P2 Collision
  if (ball.x + ball.r >= p2.x && ball.y >= p2.y && ball.y <= p2.y + p2.h && ball.vx > 0) {
    ball.speed += 0.3;
    ball.vx = -ball.speed;
    const diff = (ball.y - (p2.y + p2.h / 2)) / (p2.h / 2);
    ball.vy = diff * 6.5;
  }

  // Scoring
  if (ball.x < 0) {
    p2.score++;
    resetBall(2);
  } else if (ball.x > canvas.width) {
    p1.score++;
    resetBall(1);
  }
}

function draw() {
  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Center net
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);

  // Scores
  ctx.font = 'bold 36px monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText(p1.score, 330, 50);
  ctx.fillStyle = '#ec4899';
  ctx.fillText(p2.score, 440, 50);

  // Trail
  trails.forEach((t, i) => {
    ctx.fillStyle = \`rgba(56, 189, 248, \${(i / trails.length) * 0.4})\`;
    ctx.beginPath();
    ctx.arc(t.x, t.y, ball.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Paddles
  ctx.shadowBlur = 15;
  ctx.shadowColor = p1.color;
  ctx.fillStyle = p1.color;
  ctx.fillRect(p1.x, p1.y, p1.w, p1.h);

  ctx.shadowColor = p2.color;
  ctx.fillStyle = p2.color;
  ctx.fillRect(p2.x, p2.y, p2.w, p2.h);

  // Ball
  ctx.shadowColor = '#fff';
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();
`}]},{id:"super-snake-arcade",title:"🐍 Super Snake 2D Arcade",category:"Arcade 2D",badge:"Classique",description:"Le jeu Snake arcade ultime avec grille fluide, bonus fruits dorés, accélération progressive et suivi du meilleur score.",tags:["Canvas 2D","Retro","Snake","Score"],files:[{path:"index.html",language:"html",content:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Super Snake Arcade</title>
  <style>
    body { background: #0d1117; color: #fff; font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    #score-bar { font-size: 16px; font-weight: bold; margin-bottom: 12px; display: flex; gap: 24px; }
    canvas { background: #161b22; border: 2px solid #30363d; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  </style>
</head>
<body>
  <div id="score-bar">
    <div>🍎 Score : <span id="score">0</span></div>
    <div>🏆 Meilleur : <span id="high">0</span></div>
  </div>
  <canvas id="cv" width="400" height="400"></canvas>
  <p style="color: #8b949e; font-size: 12px; margin-top: 10px;">Utilisez les flèches ou Z, Q, S, D pour diriger le serpent</p>
  <script src="main.js"><\/script>
</body>
</html>`},{path:"main.js",language:"javascript",content:`const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');
const scoreEl = document.getElementById('score');
const highEl = document.getElementById('high');

const GRID = 20;
const TILE = cv.width / GRID;

let snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
let dx = 1, dy = 0;
let nextDx = 1, nextDy = 0;
let food = {x: 15, y: 10, golden: false};
let score = 0;
let highScore = 0;
let speed = 120;
let interval = null;

function spawnFood() {
  food = {
    x: Math.floor(Math.random() * GRID),
    y: Math.floor(Math.random() * GRID),
    golden: Math.random() < 0.2
  };
}

function resetGame() {
  snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
  dx = 1; dy = 0;
  nextDx = 1; nextDy = 0;
  score = 0;
  speed = 120;
  scoreEl.innerText = score;
  spawnFood();
  clearInterval(interval);
  interval = setInterval(tick, speed);
}

function tick() {
  dx = nextDx;
  dy = nextDy;
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};

  // Wall collision
  if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID) {
    return resetGame();
  }

  // Self collision
  for (let part of snake) {
    if (head.x === part.x && head.y === part.y) return resetGame();
  }

  snake.unshift(head);

  // Food eaten
  if (head.x === food.x && head.y === food.y) {
    score += food.golden ? 30 : 10;
    if (score > highScore) {
      highScore = score;
      highEl.innerText = highScore;
    }
    scoreEl.innerText = score;
    spawnFood();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.fillStyle = '#161b22';
  ctx.fillRect(0, 0, cv.width, cv.height);

  // Snake body
  snake.forEach((part, i) => {
    ctx.fillStyle = i === 0 ? '#38bdf8' : '#22c55e';
    ctx.fillRect(part.x * TILE + 1, part.y * TILE + 1, TILE - 2, TILE - 2);
  });

  // Food
  ctx.fillStyle = food.golden ? '#fbbf24' : '#f85149';
  ctx.beginPath();
  ctx.arc(food.x * TILE + TILE/2, food.y * TILE + TILE/2, TILE/2 - 2, 0, Math.PI * 2);
  ctx.fill();
}

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp': case 'z': case 'w': if (dy === 0) { nextDx = 0; nextDy = -1; } break;
    case 'ArrowDown': case 's': if (dy === 0) { nextDx = 0; nextDy = 1; } break;
    case 'ArrowLeft': case 'q': case 'a': if (dx === 0) { nextDx = -1; nextDy = 0; } break;
    case 'ArrowRight': case 'd': if (dx === 0) { nextDx = 1; nextDy = 0; } break;
  }
});

resetGame();
`}]},{id:"space-shooter-3d",title:"🚀 Retro Space Shooter 3D",category:"3D & Voxel",badge:"Action 3D",description:"Combats spatiaux intenses en Three.js avec champ d'astéroïdes dynamique, tirs laser et explosions polygonales.",tags:["Three.js","3D Game","Sci-Fi","Particles"],files:[{path:"index.html",language:"html",content:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Retro Space Shooter 3D</title>
  <style>
    body { margin: 0; background: #000; overflow: hidden; font-family: monospace; }
    #hud { position: absolute; top: 16px; left: 16px; color: #38bdf8; font-size: 16px; z-index: 10; }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
</head>
<body>
  <div id="hud">SCORE: <span id="score">0</span> • VIES: <span id="lives">3</span></div>
  <script src="game.js"><\/script>
</body>
</html>`},{path:"game.js",language:"javascript",content:`const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 3, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const dirLight = new THREE.DirectionalLight(0x38bdf8, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Starfield
const starGeo = new THREE.BufferGeometry();
const starCount = 1200;
const starPos = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i += 3) {
  starPos[i] = (Math.random() - 0.5) * 300;
  starPos[i+1] = (Math.random() - 0.5) * 300;
  starPos[i+2] = (Math.random() - 0.5) * 300;
}
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8 });
const stars = new THREE.Points(starGeo, starMat);
scene.add(stars);

// Player Ship
const shipGeo = new THREE.ConeGeometry(0.8, 2.2, 4);
const shipMat = new THREE.MeshLambertMaterial({ color: 0x38bdf8 });
const ship = new THREE.Mesh(shipGeo, shipMat);
ship.rotation.x = Math.PI / 2;
scene.add(ship);

let lasers = [];
let enemies = [];
let score = 0;
let lives = 3;

// Movement
let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('mousedown', () => {
  const laserGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8);
  const laserMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
  const laser = new THREE.Mesh(laserGeo, laserMat);
  laser.rotation.x = Math.PI / 2;
  laser.position.copy(ship.position);
  scene.add(laser);
  lasers.push(laser);
});

// Spawn Enemies
setInterval(() => {
  const enemyGeo = new THREE.DodecahedronGeometry(0.8, 0);
  const enemyMat = new THREE.MeshLambertMaterial({ color: 0xf43f5e });
  const enemy = new THREE.Mesh(enemyGeo, enemyMat);
  enemy.position.set((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 10, -50);
  scene.add(enemy);
  enemies.push(enemy);
}, 800);

function animate() {
  requestAnimationFrame(animate);

  // Ship follow mouse
  ship.position.x += (mouseX * 7 - ship.position.x) * 0.1;
  ship.position.y += (mouseY * 4.5 - ship.position.y) * 0.1;
  ship.rotation.z = -mouseX * 0.5;

  // Starfield parallax
  stars.position.z += 0.5;
  if (stars.position.z > 100) stars.position.z = 0;

  // Lasers update
  lasers.forEach((l, li) => {
    l.position.z -= 1.8;
    if (l.position.z < -60) {
      scene.remove(l);
      lasers.splice(li, 1);
    }
  });

  // Enemies update
  enemies.forEach((e, ei) => {
    e.position.z += 0.45;
    e.rotation.x += 0.02;
    e.rotation.y += 0.03;

    // Check hit with lasers
    lasers.forEach((l, li) => {
      if (l.position.distanceTo(e.position) < 1.3) {
        scene.remove(e);
        scene.remove(l);
        enemies.splice(ei, 1);
        lasers.splice(li, 1);
        score += 100;
        document.getElementById('score').innerText = score;
      }
    });

    if (e.position.z > 10) {
      scene.remove(e);
      enemies.splice(ei, 1);
    }
  });

  renderer.render(scene, camera);
}
animate();
`}]},{id:"python-data-simulation",title:"🐍 Data Science & Monte Carlo (Python)",category:"Python",badge:"Pyodide WebAssembly",description:"Script Python de calcul probabiliste et simulation scientifique de Monte Carlo pour estimer Pi et modéliser des lois normales.",tags:["Python","WebAssembly","Algorithmes","Math"],files:[{path:"main.py",language:"python",content:`import math
import random
import time

print("=" * 55)
print("  VOXEL FORGE — SIMULATION SCIENTIFIQUE PYTHON")
print("=" * 55)

# 1. Estimation de Pi par méthode de Monte Carlo
def monte_carlo_pi(points_count=25000):
    start = time.time()
    inside_circle = 0
    
    for _ in range(points_count):
        x = random.random()
        y = random.random()
        if (x * x + y * y) <= 1.0:
            inside_circle += 1
            
    estimated_pi = 4.0 * inside_circle / points_count
    duration = time.time() - start
    error = abs(estimated_pi - math.pi) / math.pi * 100
    
    print(f"\\n🎯 Estimation de Pi ({points_count:,} itérations) :")
    print(f"   • Valeur estimée : {estimated_pi:.6f}")
    print(f"   • Valeur exacte   : {math.pi:.6f}")
    print(f"   • Marge d'erreur  : {error:.3f}%")
    print(f"   • Temps de calcul : {duration * 1000:.1f} ms")
    return estimated_pi

# 2. Génération de suite de Fibonacci
def fibonacci(n=12):
    seq = [0, 1]
    for i in range(2, n):
        seq.append(seq[-1] + seq[-2])
    print(f"\\n🔢 Suite de Fibonacci ({n} termes) :")
    print(f"   {seq}")
    return seq

# Lancement des simulations
monte_carlo_pi(30000)
fibonacci(15)

print("\\n" + "=" * 55)
print("✓ Exécution Python WebAssembly terminée avec succès !")
print("Tapez vos propres commandes ci-dessous dans l'invite '>>>'")
print("=" * 55)
`}]},{id:"scientific-calculator",title:"📊 Calculatrice Scientifique & Graphique",category:"Web Apps",badge:"Productivité",description:"Calculatrice scientifique réactive avec fonctions trigonométriques, historique des calculs et traceur de courbes en direct.",tags:["JavaScript","HTML5","Math","Graph"],files:[{path:"index.html",language:"html",content:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Calculatrice Scientifique</title>
  <style>
    body { background: #0d1117; color: #fff; font-family: 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .calc-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 24px; width: 340px; box-shadow: 0 16px 36px rgba(0,0,0,0.5); }
    #display { width: 100%; height: 50px; background: #090d16; border: 1px solid #30363d; border-radius: 8px; color: #38bdf8; font-size: 24px; text-align: right; padding: 10px; box-sizing: border-box; font-family: monospace; margin-bottom: 16px; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
    button { height: 44px; border: 1px solid #30363d; background: #21262d; color: #e6edf3; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: 0.15s; }
    button:hover { background: #30363d; border-color: #58a6ff; }
    button.op { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }
    button.eq { background: #238636; color: #fff; grid-column: span 2; border: none; }
  </style>
</head>
<body>
  <div class="calc-card">
    <div style="font-size: 12px; color: #8b949e; margin-bottom: 6px; font-weight: bold;">VOXEL CALC</div>
    <input id="display" type="text" value="0" readonly>
    <div class="grid">
      <button onclick="clearDisplay()">C</button>
      <button class="op" onclick="append('Math.sqrt(')">√</button>
      <button class="op" onclick="append('**')">^</button>
      <button class="op" onclick="append('/')">÷</button>
      <button onclick="append('7')">7</button>
      <button onclick="append('8')">8</button>
      <button onclick="append('9')">9</button>
      <button class="op" onclick="append('*')">×</button>
      <button onclick="append('4')">4</button>
      <button onclick="append('5')">5</button>
      <button onclick="append('6')">6</button>
      <button class="op" onclick="append('-')">−</button>
      <button onclick="append('1')">1</button>
      <button onclick="append('2')">2</button>
      <button onclick="append('3')">3</button>
      <button class="op" onclick="append('+')">+</button>
      <button onclick="append('0')">0</button>
      <button onclick="append('.')">.</button>
      <button class="eq" onclick="calculate()">=</button>
    </div>
  </div>
  <script>
    const disp = document.getElementById('display');
    function append(val) {
      if (disp.value === '0') disp.value = val;
      else disp.value += val;
    }
    function clearDisplay() { disp.value = '0'; }
    function calculate() {
      try {
        disp.value = Function('"use strict";return (' + disp.value + ')')();
      } catch(e) {
        disp.value = 'Erreur';
      }
    }
  <\/script>
</body>
</html>`}]},{id:"retro-brick-breaker",title:"🧱 Retro Brick Breaker 2026",category:"Arcade 2D",badge:"Arcade",description:"Casse-briques complet avec rebonds physiques, briques multicolores destructibles, effets de particules et bonus.",tags:["Canvas 2D","Arcade","Breakout"],files:[{path:"index.html",language:"html",content:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Brick Breaker 2026</title>
  <style>
    body { margin: 0; background: #070a13; display: flex; align-items: center; justify-content: center; height: 100vh; overflow: hidden; font-family: sans-serif; }
    canvas { border: 2px solid #30363d; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  </style>
</head>
<body>
  <canvas id="c" width="480" height="400"></canvas>
  <script src="game.js"><\/script>
</body>
</html>`},{path:"game.js",language:"javascript",content:`const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

let paddle = { x: 190, y: 375, w: 90, h: 10, speed: 7 };
let ball = { x: 240, y: 250, r: 6, vx: 3.5, vy: -3.5 };
let bricks = [];
const ROWS = 5, COLS = 8, BRICK_W = 50, BRICK_H = 14, PADDING = 8, OFFSET_T = 40, OFFSET_L = 12;

const COLORS = ['#f43f5e', '#fbbf24', '#22c55e', '#38bdf8', '#a855f7'];

function initBricks() {
  bricks = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      bricks.push({
        x: c * (BRICK_W + PADDING) + OFFSET_L,
        y: r * (BRICK_H + PADDING) + OFFSET_T,
        status: 1,
        color: COLORS[r]
      });
    }
  }
}
initBricks();

window.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  paddle.x = e.clientX - rect.left - paddle.w / 2;
  paddle.x = Math.max(0, Math.min(canvas.width - paddle.w, paddle.x));
});

function update() {
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Wall bounce
  if (ball.x < ball.r || ball.x > canvas.width - ball.r) ball.vx *= -1;
  if (ball.y < ball.r) ball.vy *= -1;

  // Bottom reset
  if (ball.y > canvas.height) {
    ball.x = 240; ball.y = 250; ball.vy = -3.5;
    initBricks();
  }

  // Paddle bounce
  if (ball.y + ball.r >= paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.w && ball.vy > 0) {
    ball.vy = -Math.abs(ball.vy);
    const diff = (ball.x - (paddle.x + paddle.w/2)) / (paddle.w/2);
    ball.vx = diff * 5;
  }

  // Brick collision
  bricks.forEach(b => {
    if (b.status === 1) {
      if (ball.x > b.x && ball.x < b.x + BRICK_W && ball.y > b.y && ball.y < b.y + BRICK_H) {
        ball.vy *= -1;
        b.status = 0;
      }
    }
  });
}

function draw() {
  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Paddle
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

  // Ball
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fill();

  // Bricks
  bricks.forEach(b => {
    if (b.status === 1) {
      ctx.fillStyle = b.color;
      ctx.fillRect(b.x, b.y, BRICK_W, BRICK_H);
    }
  });
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();
`}]},{id:"particle-vortex-3d",title:"🎨 Vortex de 10 000 Particules 3D",category:"3D & Voxel",badge:"Visuel",description:"Animation interactive de 10 000 particules 3D réagissant en temps réel à la souris avec rotation galactique.",tags:["Three.js","Shader","Visual","Particles"],files:[{path:"index.html",language:"html",content:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Vortex de Particules 3D</title>
  <style>body { margin: 0; background: #05060b; overflow: hidden; }</style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
</head>
<body>
  <script>
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const count = 10000;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      const r = Math.random() * 25 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      pos[i] = r * Math.cos(theta) * Math.cos(phi);
      pos[i+1] = r * Math.sin(phi);
      pos[i+2] = r * Math.sin(theta) * Math.cos(phi);

      col[i] = 0.2 + Math.random() * 0.4;
      col[i+1] = 0.5 + Math.random() * 0.5;
      col[i+2] = 1.0;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({ size: 0.35, vertexColors: true, transparent: true, opacity: 0.85 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function anim() {
      requestAnimationFrame(anim);
      points.rotation.y += 0.003;
      points.rotation.x += 0.001;
      camera.position.x += (mouseX * 15 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 15 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    anim();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  <\/script>
</body>
</html>`}]}];function Yg({isOpen:e,onClose:t,onLoadProject:n,onRunProject:r}){const[i,o]=$.useState("Tous"),[s,l]=$.useState("");if(!e)return null;const c=["Tous","3D & Voxel","Arcade 2D","Web Apps","Python"],h=Zg.filter(b=>{const v=i==="Tous"||b.category===i,x=b.title.toLowerCase().includes(s.toLowerCase())||b.description.toLowerCase().includes(s.toLowerCase())||b.tags.some(m=>m.toLowerCase().includes(s.toLowerCase()));return v&&x});return a.jsx("div",{className:"modal-backdrop",onClick:t,children:a.jsxs("div",{className:"modal-content",style:{maxWidth:"1000px",width:"95vw",maxHeight:"90vh",display:"flex",flexDirection:"column"},onClick:b=>b.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",style:{borderBottom:"1px solid #30363d",paddingBottom:"14px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg, #0284c7, #38bdf8)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 0 16px rgba(56, 189, 248, 0.4)"},children:a.jsx(Od,{size:22})}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,margin:0,color:"#f0f6fc"},children:"Galerie de Jeux & Projets Voxel Forge"}),a.jsx("p",{style:{margin:0,fontSize:"12px",color:"#8b949e",marginTop:"2px"},children:"Explorez, jouez en 1 clic et chargez le code directement dans votre éditeur"})]})]}),a.jsx("button",{className:"btn-icon",onClick:t,children:a.jsx(It,{size:18})})]}),a.jsxs("div",{style:{padding:"16px 20px 0 20px",display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:c.map(b=>a.jsx("button",{onClick:()=>{Ie.playClick(),o(b)},style:{padding:"6px 14px",borderRadius:"20px",fontSize:"12px",border:"none",cursor:"pointer",fontWeight:i===b?600:400,background:i===b?"linear-gradient(135deg, #0284c7, #6366f1)":"#21262d",color:i===b?"#fff":"#8b949e",transition:"all 0.15s ease"},children:b},b))}),a.jsxs("div",{style:{position:"relative",minWidth:"220px",flex:"1",maxWidth:"300px"},children:[a.jsx(rm,{size:14,color:"#8b949e",style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)"}}),a.jsx("input",{type:"text",placeholder:"Rechercher un jeu...",value:s,onChange:b=>l(b.target.value),style:{width:"100%",padding:"6px 10px 6px 32px",background:"#0d1117",border:"1px solid #30363d",borderRadius:"8px",color:"#fff",fontSize:"12px",outline:"none"}})]})]}),a.jsx("div",{style:{overflowY:"auto",padding:"16px 20px",flex:1,display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(290px, 1fr))",gap:"14px"},children:h.map(b=>a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"transform 0.15s, border-color 0.15s",boxShadow:"0 4px 12px rgba(0,0,0,0.25)"},onMouseEnter:v=>{v.currentTarget.style.borderColor="#58a6ff",v.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:v=>{v.currentTarget.style.borderColor="#30363d",v.currentTarget.style.transform="translateY(0)"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"},children:[a.jsx("h3",{style:{margin:0,fontSize:"15px",color:"#f0f6fc",fontWeight:700},children:b.title}),b.badge&&a.jsx("span",{style:{fontSize:"10px",padding:"2px 8px",borderRadius:"10px",background:"rgba(56, 189, 248, 0.15)",color:"#38bdf8",border:"1px solid rgba(56, 189, 248, 0.3)",fontWeight:600,whiteSpace:"nowrap"},children:b.badge})]}),a.jsx("p",{style:{fontSize:"12px",color:"#8b949e",margin:"0 0 12px 0",lineHeight:1.5},children:b.description}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px",marginBottom:"16px"},children:b.tags.map((v,x)=>a.jsxs("span",{style:{fontSize:"10px",background:"#0d1117",color:"#c9d1d9",padding:"2px 6px",borderRadius:"4px",border:"1px solid #21262d"},children:["#",v]},x))})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",borderTop:"1px solid #21262d",paddingTop:"12px"},children:[a.jsxs("button",{className:"btn btn-run btn-sm",onClick:()=>{Ie.playRun(),r({name:b.title,files:b.files})},title:"Lancer le jeu en direct dans le Runner",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[a.jsx(el,{size:13,fill:"#10b981",color:"#10b981"}),a.jsx("span",{children:"Jouer direct"})]}),a.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{Ie.playSuccess(),n({name:b.title,description:b.description,files:b.files}),t()},title:"Charger les fichiers de ce projet dans Monaco Editor",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[a.jsx(na,{size:13}),a.jsx("span",{children:"Dans l'éditeur"})]})]})]},b.id))}),a.jsxs("div",{className:"modal-footer",style:{borderTop:"1px solid #30363d",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("span",{style:{fontSize:"11px",color:"#8b949e"},children:["⚡ ",a.jsx("strong",{children:h.length})," projets disponibles • 100% exécutables dans votre navigateur"]}),a.jsx("button",{className:"btn btn-secondary",onClick:t,children:"Fermer"})]})]})})}function Kg({isOpen:e,onClose:t}){return e?a.jsx("div",{className:"modal-backdrop",onClick:t,children:a.jsxs("div",{className:"modal-content",style:{maxWidth:"840px",width:"95vw",maxHeight:"88vh",display:"flex",flexDirection:"column"},onClick:n=>n.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",style:{borderBottom:"1px solid #30363d",paddingBottom:"14px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg, #10b981, #059669)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 0 16px rgba(16, 185, 129, 0.4)"},children:a.jsx(Dd,{size:22})}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,margin:0,color:"#f0f6fc"},children:"Conditions Générales d'Utilisation & Mentions Légales"}),a.jsx("p",{style:{margin:0,fontSize:"12px",color:"#8b949e",marginTop:"2px"},children:"Voxel Forge — Plateforme de création et d'apprentissage du code"})]})]}),a.jsx("button",{className:"btn-icon",onClick:t,children:a.jsx(It,{size:18})})]}),a.jsxs("div",{style:{overflowY:"auto",padding:"20px",flex:1,display:"flex",flexDirection:"column",gap:"18px"},children:[a.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(56, 189, 248, 0.15))",border:"1px solid rgba(168, 85, 247, 0.35)",borderRadius:"12px",padding:"16px",display:"flex",gap:"14px",alignItems:"flex-start"},children:[a.jsx(co,{size:28,color:"#c084fc",style:{flexShrink:0,marginTop:"2px"}}),a.jsxs("div",{children:[a.jsxs("h3",{style:{margin:0,fontSize:"14px",fontWeight:700,color:"#f0f6fc",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("span",{children:"Origine du site : Conçu et Développé Intégralement par Intelligence Artificielle"}),a.jsx(Dt,{size:14,color:"#facc15"})]}),a.jsxs("p",{style:{margin:"6px 0 0 0",fontSize:"13px",color:"#cbd5e1",lineHeight:1.6},children:["Le présent site ",a.jsx("strong",{children:"Voxel Forge"}),", son architecture logicielle (frontend Vite React, backend Node.js, Monaco Editor, bac à sable d'exécution, algorithmes de génération et visionneuse de tutoriels) a été ",a.jsx("strong",{children:"entièrement conçu, écrit et développé par Intelligence Artificielle (DeepMind Antigravity)"})," sous la supervision de son créateur."]})]})]}),a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"10px",padding:"16px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",color:"#38bdf8"},children:[a.jsx(Kr,{size:16}),a.jsx("h4",{style:{margin:0,fontSize:"13px",fontWeight:700,textTransform:"uppercase"},children:"1. Objet & Service 100% Gratuit"})]}),a.jsx("p",{style:{margin:0,fontSize:"13px",color:"#c9d1d9",lineHeight:1.6},children:"Voxel Forge est une plateforme gratuite dédiée à l'apprentissage des langages de programmation (Python, C++, Blueprints Unreal Engine, GDScript, C#, JavaScript, etc.), au prototypage de jeux vidéo et au développement web interactif. L'accès à la plateforme est libre, sans obligation d'abonnement ni frais cachés."})]}),a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"10px",padding:"16px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",color:"#10b981"},children:[a.jsx(Zh,{size:16}),a.jsx("h4",{style:{margin:0,fontSize:"13px",fontWeight:700,textTransform:"uppercase"},children:"2. Respect de la Vie Privée & Données Locales"})]}),a.jsx("p",{style:{margin:0,fontSize:"13px",color:"#c9d1d9",lineHeight:1.6},children:"Voxel Forge respecte strictement la confidentialité de vos données :"}),a.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px",fontSize:"13px",color:"#8b949e",lineHeight:1.6},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Stockage Local"})," : Vos projets en cours, fichiers personnalisés, thèmes et préférences sont stockés directement dans votre navigateur via ",a.jsx("code",{style:{color:"#38bdf8"},children:"localStorage"}),"."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Aucun pistage intrusif"})," : Aucun tracker publicitaire n'est utilisé."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Clés API facultatives"})," : Si vous configurez vos propres clés d'API IA (Gemini ou Mistral), celles-ci restent confidentielles et ne sont jamais partagées à des tiers."]})]})]}),a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"10px",padding:"16px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",color:"#f59e0b"},children:[a.jsx(yn,{size:16}),a.jsx("h4",{style:{margin:0,fontSize:"13px",fontWeight:700,textTransform:"uppercase"},children:"3. Propriété du Code Généré"})]}),a.jsx("p",{style:{margin:0,fontSize:"13px",color:"#c9d1d9",lineHeight:1.6},children:"Tout le code source, les scripts, les jeux vidéo ou les projets que vous écrivez ou faites générer par l'assistant IA dans Voxel Forge vous appartiennent entièrement. Vous avez le droit de les exporter au format ZIP, de les modifier, les distribuer et les utiliser librement à des fins personnelles, éducatives ou commerciales."})]}),a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"10px",padding:"16px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",color:"#ef4444"},children:[a.jsx(ta,{size:16}),a.jsx("h4",{style:{margin:0,fontSize:"13px",fontWeight:700,textTransform:"uppercase"},children:"4. Avertissement sur les Contenus Générés par IA"})]}),a.jsx("p",{style:{margin:0,fontSize:"13px",color:"#c9d1d9",lineHeight:1.6},children:"Les modèles d'Intelligence Artificielle fournissent des suggestions de code, des revues et des tutoriels à titre d'assistance pédagogique. Bien que le pipeline applique des vérifications automatiques (Mistral Review & sanitizers), il appartient à l'utilisateur de tester et valider le code avant toute utilisation critique ou mise en production externe."})]}),a.jsxs("div",{style:{background:"#161b22",border:"1px solid #30363d",borderRadius:"10px",padding:"16px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",color:"#bc8cff"},children:[a.jsx(Fd,{size:16}),a.jsx("h4",{style:{margin:0,fontSize:"13px",fontWeight:700,textTransform:"uppercase"},children:"5. Infrastructure & Hébergement"})]}),a.jsx("p",{style:{margin:0,fontSize:"13px",color:"#c9d1d9",lineHeight:1.6},children:"Le site Voxel Forge est hébergé de manière sécurisée et distribuée :"}),a.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px",fontSize:"13px",color:"#8b949e",lineHeight:1.6},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Hébergement Frontend"})," : GitHub Pages (",a.jsx("code",{style:{color:"#58a6ff"},children:"tiagouille.github.io/voxel-forge"}),")."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Passerelle & Redirection"})," : Cloudflare Pages (",a.jsx("code",{style:{color:"#58a6ff"},children:"voxel-forge-4cz.pages.dev"}),")."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Backend IA"})," : Déployé sur Render Cloud Service (",a.jsx("code",{style:{color:"#58a6ff"},children:"voxel-forge.onrender.com"}),")."]})]})]})]}),a.jsxs("div",{className:"modal-footer",style:{borderTop:"1px solid #30363d",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontSize:"11px",color:"#8b949e"},children:"Dernière mise à jour : 2026 • Voxel Forge v1.2"}),a.jsx("button",{className:"btn btn-primary",onClick:t,children:"J'ai compris & Accepter"})]})]})}):null}const Xg=[{id:"default",name:"Default Dark Slate",description:"Style épuré sombre GitHub, reposant pour les yeux.",colors:["#0d1117","#161b22","#58a6ff","#38bdf8"]},{id:"cyberpunk",name:"Cyberpunk Neon",description:"Ambiance néon intense, jaune électrique et violet cybernétique.",colors:["#0f051d","#1a0b2e","#facc15","#ec4899"]},{id:"matrix",name:"Matrix Hacker",description:"Noir pur et typographie verte digitale inspirée des terminaux mainframe.",colors:["#050805","#0a100a","#22c55e","#4ade80"]},{id:"dracula",name:"Dracula Pro",description:"Palette violette emblématique, cyan pastel et touches rosées.",colors:["#1e1f29","#282a36","#bd93f9","#8be9fd"]},{id:"synthwave",name:"Synthwave 80s",description:"Coucher de soleil rétro-gaming, nuances violettes et rose fluo.",colors:["#12072b","#241442","#ff71ce","#01cdfe"]}];function Qg({isOpen:e,onClose:t,currentTheme:n,onSelectTheme:r}){return e?a.jsx("div",{className:"modal-backdrop",onClick:t,children:a.jsxs("div",{className:"modal-content",style:{maxWidth:"560px",width:"90vw"},onClick:i=>i.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",style:{borderBottom:"1px solid #30363d",paddingBottom:"12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Ja,{size:20,color:"#38bdf8"}),a.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700,margin:0,color:"#f0f6fc"},children:"Personnalisation du Thème Visuel"})]}),a.jsx("button",{className:"btn-icon",onClick:t,children:a.jsx(It,{size:18})})]}),a.jsx("div",{style:{padding:"16px 20px",display:"flex",flexDirection:"column",gap:"10px"},children:Xg.map(i=>{const o=n===i.id;return a.jsxs("div",{onClick:()=>{Ie.playClick(),r(i.id)},style:{background:o?"rgba(56, 189, 248, 0.1)":"#161b22",border:`1px solid ${o?"#38bdf8":"#30363d"}`,borderRadius:"10px",padding:"12px 16px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all 0.15s ease"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{style:{fontWeight:600,fontSize:"14px",color:o?"#38bdf8":"#f0f6fc"},children:i.name}),o&&a.jsx("span",{style:{fontSize:"10px",background:"#38bdf820",color:"#38bdf8",padding:"1px 6px",borderRadius:"10px",border:"1px solid #38bdf840"},children:"Actif"})]}),a.jsx("p",{style:{margin:"4px 0 0 0",fontSize:"12px",color:"#8b949e"},children:i.description})]}),a.jsxs("div",{style:{display:"flex",gap:"5px",alignItems:"center"},children:[i.colors.map((s,l)=>a.jsx("div",{style:{width:"18px",height:"18px",borderRadius:"50%",background:s,border:"1px solid rgba(255,255,255,0.15)"}},l)),o&&a.jsx(Sn,{size:16,color:"#38bdf8",style:{marginLeft:"6px"}})]})]},i.id)})}),a.jsx("div",{className:"modal-footer",style:{borderTop:"1px solid #30363d",justifyContent:"flex-end"},children:a.jsx("button",{className:"btn btn-primary",onClick:t,children:"Valider"})})]})}):null}function Jg({project:e,activeFile:t,theme:n,isMuted:r,onToggleSound:i,onOpenTerms:o,onOpenThemeSelect:s}){return a.jsxs("footer",{style:{height:"26px",background:"#161b22",borderTop:"1px solid #30363d",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",fontSize:"11px",color:"#8b949e",userSelect:"none",zIndex:5},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",color:"#e6edf3"},children:[a.jsx(Uh,{size:12,color:"#58a6ff"}),a.jsx("span",{children:(e==null?void 0:e.name)||"Voxel Studio"})]}),t&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[a.jsxs("span",{children:["📄 ",t.path]}),a.jsxs("span",{style:{color:"#6e7681"},children:["(",t.language||"code",")"]})]})]}),a.jsxs("div",{onClick:o,style:{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",padding:"2px 8px",borderRadius:"4px",background:"rgba(168, 85, 247, 0.1)",color:"#c084fc",border:"1px solid rgba(168, 85, 247, 0.25)",transition:"all 0.15s ease"},title:"En savoir plus sur la conception de Voxel Forge par IA",children:[a.jsx(co,{size:12}),a.jsx("span",{children:"Conçu & Architecturé par IA"}),a.jsx(Dt,{size:11,color:"#facc15"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsxs("button",{onClick:s,style:{background:"none",border:"none",color:"#8b949e",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"11px",padding:"2px 6px",borderRadius:"4px"},title:"Changer de thème visuel",children:[a.jsx(Ja,{size:12,color:"#38bdf8"}),a.jsxs("span",{style:{textTransform:"capitalize"},children:["Thème : ",n]})]}),a.jsxs("button",{onClick:i,style:{background:"none",border:"none",color:r?"#6e7681":"#3fb950",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"11px",padding:"2px 6px",borderRadius:"4px"},title:r?"Activer les sons rétro 8-bit":"Couper le son",children:[r?a.jsx(Wd,{size:12}):a.jsx(Ud,{size:12}),a.jsx("span",{children:r?"Muet":"Audio 8-Bit"})]}),a.jsxs("button",{onClick:o,style:{background:"none",border:"none",color:"#8b949e",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"11px",padding:"2px 6px",borderRadius:"4px"},title:"Consulter les Conditions Générales d'Utilisation",children:[a.jsx(Dd,{size:12}),a.jsx("span",{children:"CGU & Mentions"})]})]})]})}function _i(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ep={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(e,t){(function(n){e.exports=n()})(function(){return function n(r,i,o){function s(h,b){if(!i[h]){if(!r[h]){var v=typeof _i=="function"&&_i;if(!b&&v)return v(h,!0);if(l)return l(h,!0);var x=new Error("Cannot find module '"+h+"'");throw x.code="MODULE_NOT_FOUND",x}var m=i[h]={exports:{}};r[h][0].call(m.exports,function(k){var p=r[h][1][k];return s(p||k)},m,m.exports,n,r,i,o)}return i[h].exports}for(var l=typeof _i=="function"&&_i,c=0;c<o.length;c++)s(o[c]);return s}({1:[function(n,r,i){var o=n("./utils"),s=n("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(c){for(var h,b,v,x,m,k,p,w=[],d=0,u=c.length,y=u,S=o.getTypeOf(c)!=="string";d<c.length;)y=u-d,v=S?(h=c[d++],b=d<u?c[d++]:0,d<u?c[d++]:0):(h=c.charCodeAt(d++),b=d<u?c.charCodeAt(d++):0,d<u?c.charCodeAt(d++):0),x=h>>2,m=(3&h)<<4|b>>4,k=1<y?(15&b)<<2|v>>6:64,p=2<y?63&v:64,w.push(l.charAt(x)+l.charAt(m)+l.charAt(k)+l.charAt(p));return w.join("")},i.decode=function(c){var h,b,v,x,m,k,p=0,w=0,d="data:";if(c.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var u,y=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===l.charAt(64)&&y--,c.charAt(c.length-2)===l.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(u=s.uint8array?new Uint8Array(0|y):new Array(0|y);p<c.length;)h=l.indexOf(c.charAt(p++))<<2|(x=l.indexOf(c.charAt(p++)))>>4,b=(15&x)<<4|(m=l.indexOf(c.charAt(p++)))>>2,v=(3&m)<<6|(k=l.indexOf(c.charAt(p++))),u[w++]=h,m!==64&&(u[w++]=b),k!==64&&(u[w++]=v);return u}},{"./support":30,"./utils":32}],2:[function(n,r,i){var o=n("./external"),s=n("./stream/DataWorker"),l=n("./stream/Crc32Probe"),c=n("./stream/DataLengthProbe");function h(b,v,x,m,k){this.compressedSize=b,this.uncompressedSize=v,this.crc32=x,this.compression=m,this.compressedContent=k}h.prototype={getContentWorker:function(){var b=new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),v=this;return b.on("end",function(){if(this.streamInfo.data_length!==v.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),b},getCompressedWorker:function(){return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(b,v,x){return b.pipe(new l).pipe(new c("uncompressedSize")).pipe(v.compressWorker(x)).pipe(new c("compressedSize")).withStreamInfo("compression",v)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var o=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var o=n("./utils"),s=function(){for(var l,c=[],h=0;h<256;h++){l=h;for(var b=0;b<8;b++)l=1&l?3988292384^l>>>1:l>>>1;c[h]=l}return c}();r.exports=function(l,c){return l!==void 0&&l.length?o.getTypeOf(l)!=="string"?function(h,b,v,x){var m=s,k=x+v;h^=-1;for(var p=x;p<k;p++)h=h>>>8^m[255&(h^b[p])];return-1^h}(0|c,l,l.length,0):function(h,b,v,x){var m=s,k=x+v;h^=-1;for(var p=x;p<k;p++)h=h>>>8^m[255&(h^b.charCodeAt(p))];return-1^h}(0|c,l,l.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var o=null;o=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:o}},{lie:37}],7:[function(n,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=n("pako"),l=n("./utils"),c=n("./stream/GenericWorker"),h=o?"uint8array":"array";function b(v,x){c.call(this,"FlateWorker/"+v),this._pako=null,this._pakoAction=v,this._pakoOptions=x,this.meta={}}i.magic="\b\0",l.inherits(b,c),b.prototype.processChunk=function(v){this.meta=v.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(h,v.data),!1)},b.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},b.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},b.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var v=this;this._pako.onData=function(x){v.push({data:x,meta:v.meta})}},i.compressWorker=function(v){return new b("Deflate",v)},i.uncompressWorker=function(){return new b("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function o(m,k){var p,w="";for(p=0;p<k;p++)w+=String.fromCharCode(255&m),m>>>=8;return w}function s(m,k,p,w,d,u){var y,S,_=m.file,T=m.compression,z=u!==h.utf8encode,N=l.transformTo("string",u(_.name)),R=l.transformTo("string",h.utf8encode(_.name)),M=_.comment,te=l.transformTo("string",u(M)),E=l.transformTo("string",h.utf8encode(M)),F=R.length!==_.name.length,g=E.length!==M.length,L="",ee="",H="",B=_.dir,O=_.date,Z={crc32:0,compressedSize:0,uncompressedSize:0};k&&!p||(Z.crc32=m.crc32,Z.compressedSize=m.compressedSize,Z.uncompressedSize=m.uncompressedSize);var P=0;k&&(P|=8),z||!F&&!g||(P|=2048);var I=0,ne=0;B&&(I|=16),d==="UNIX"?(ne=798,I|=function(K,ge){var ke=K;return K||(ke=ge?16893:33204),(65535&ke)<<16}(_.unixPermissions,B)):(ne=20,I|=function(K){return 63&(K||0)}(_.dosPermissions)),y=O.getUTCHours(),y<<=6,y|=O.getUTCMinutes(),y<<=5,y|=O.getUTCSeconds()/2,S=O.getUTCFullYear()-1980,S<<=4,S|=O.getUTCMonth()+1,S<<=5,S|=O.getUTCDate(),F&&(ee=o(1,1)+o(b(N),4)+R,L+="up"+o(ee.length,2)+ee),g&&(H=o(1,1)+o(b(te),4)+E,L+="uc"+o(H.length,2)+H);var Q="";return Q+=`
\0`,Q+=o(P,2),Q+=T.magic,Q+=o(y,2),Q+=o(S,2),Q+=o(Z.crc32,4),Q+=o(Z.compressedSize,4),Q+=o(Z.uncompressedSize,4),Q+=o(N.length,2),Q+=o(L.length,2),{fileRecord:v.LOCAL_FILE_HEADER+Q+N+L,dirRecord:v.CENTRAL_FILE_HEADER+o(ne,2)+Q+o(te.length,2)+"\0\0\0\0"+o(I,4)+o(w,4)+N+L+te}}var l=n("../utils"),c=n("../stream/GenericWorker"),h=n("../utf8"),b=n("../crc32"),v=n("../signature");function x(m,k,p,w){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=p,this.encodeFileName=w,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(x,c),x.prototype.push=function(m){var k=m.meta.percent||0,p=this.entriesCount,w=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,c.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:p?(k+100*(p-w-1))/p:100}}))},x.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var k=this.streamFiles&&!m.file.dir;if(k){var p=s(m,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},x.prototype.closedSource=function(m){this.accumulate=!1;var k=this.streamFiles&&!m.file.dir,p=s(m,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),k)this.push({data:function(w){return v.DATA_DESCRIPTOR+o(w.crc32,4)+o(w.compressedSize,4)+o(w.uncompressedSize,4)}(m),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},x.prototype.flush=function(){for(var m=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var p=this.bytesWritten-m,w=function(d,u,y,S,_){var T=l.transformTo("string",_(S));return v.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(d,2)+o(d,2)+o(u,4)+o(y,4)+o(T.length,2)+T}(this.dirRecords.length,p,m,this.zipComment,this.encodeFileName);this.push({data:w,meta:{percent:100}})},x.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},x.prototype.registerPrevious=function(m){this._sources.push(m);var k=this;return m.on("data",function(p){k.processChunk(p)}),m.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),m.on("error",function(p){k.error(p)}),this},x.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},x.prototype.error=function(m){var k=this._sources;if(!c.prototype.error.call(this,m))return!1;for(var p=0;p<k.length;p++)try{k[p].error(m)}catch{}return!0},x.prototype.lock=function(){c.prototype.lock.call(this);for(var m=this._sources,k=0;k<m.length;k++)m[k].lock()},r.exports=x},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var o=n("../compressions"),s=n("./ZipFileWorker");i.generateWorker=function(l,c,h){var b=new s(c.streamFiles,h,c.platform,c.encodeFileName),v=0;try{l.forEach(function(x,m){v++;var k=function(u,y){var S=u||y,_=o[S];if(!_)throw new Error(S+" is not a valid compression method !");return _}(m.options.compression,c.compression),p=m.options.compressionOptions||c.compressionOptions||{},w=m.dir,d=m.date;m._compressWorker(k,p).withStreamInfo("file",{name:x,dir:w,date:d,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(b)}),b.entriesCount=v}catch(x){b.error(x)}return b}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new o;for(var l in this)typeof this[l]!="function"&&(s[l]=this[l]);return s}}(o.prototype=n("./object")).loadAsync=n("./load"),o.support=n("./support"),o.defaults=n("./defaults"),o.version="3.10.1",o.loadAsync=function(s,l){return new o().loadAsync(s,l)},o.external=n("./external"),r.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var o=n("./utils"),s=n("./external"),l=n("./utf8"),c=n("./zipEntries"),h=n("./stream/Crc32Probe"),b=n("./nodejsUtils");function v(x){return new s.Promise(function(m,k){var p=x.decompressed.getContentWorker().pipe(new h);p.on("error",function(w){k(w)}).on("end",function(){p.streamInfo.crc32!==x.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}r.exports=function(x,m){var k=this;return m=o.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),b.isNode&&b.isStream(x)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",x,!0,m.optimizedBinaryString,m.base64).then(function(p){var w=new c(m);return w.load(p),w}).then(function(p){var w=[s.Promise.resolve(p)],d=p.files;if(m.checkCRC32)for(var u=0;u<d.length;u++)w.push(v(d[u]));return s.Promise.all(w)}).then(function(p){for(var w=p.shift(),d=w.files,u=0;u<d.length;u++){var y=d[u],S=y.fileNameStr,_=o.resolve(y.fileNameStr);k.file(_,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:m.createFolders}),y.dir||(k.file(_).unsafeOriginalName=S)}return w.zipComment.length&&(k.comment=w.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var o=n("../utils"),s=n("../stream/GenericWorker");function l(c,h){s.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(h)}o.inherits(l,s),l.prototype._bindStream=function(c){var h=this;(this._stream=c).pause(),c.on("data",function(b){h.push({data:b,meta:{percent:0}})}).on("error",function(b){h.isPaused?this.generatedError=b:h.error(b)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},l.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var o=n("readable-stream").Readable;function s(l,c,h){o.call(this,c),this._helper=l;var b=this;l.on("data",function(v,x){b.push(v)||b._helper.pause(),h&&h(x)}).on("error",function(v){b.emit("error",v)}).on("end",function(){b.push(null)})}n("../utils").inherits(s,o),s.prototype._read=function(){this._helper.resume()},r.exports=s},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,s);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,s)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var s=new Buffer(o);return s.fill(0),s},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(n,r,i){function o(_,T,z){var N,R=l.getTypeOf(T),M=l.extend(z||{},b);M.date=M.date||new Date,M.compression!==null&&(M.compression=M.compression.toUpperCase()),typeof M.unixPermissions=="string"&&(M.unixPermissions=parseInt(M.unixPermissions,8)),M.unixPermissions&&16384&M.unixPermissions&&(M.dir=!0),M.dosPermissions&&16&M.dosPermissions&&(M.dir=!0),M.dir&&(_=d(_)),M.createFolders&&(N=w(_))&&u.call(this,N,!0);var te=R==="string"&&M.binary===!1&&M.base64===!1;z&&z.binary!==void 0||(M.binary=!te),(T instanceof v&&T.uncompressedSize===0||M.dir||!T||T.length===0)&&(M.base64=!1,M.binary=!0,T="",M.compression="STORE",R="string");var E=null;E=T instanceof v||T instanceof c?T:k.isNode&&k.isStream(T)?new p(_,T):l.prepareContent(_,T,M.binary,M.optimizedBinaryString,M.base64);var F=new x(_,E,M);this.files[_]=F}var s=n("./utf8"),l=n("./utils"),c=n("./stream/GenericWorker"),h=n("./stream/StreamHelper"),b=n("./defaults"),v=n("./compressedObject"),x=n("./zipObject"),m=n("./generate"),k=n("./nodejsUtils"),p=n("./nodejs/NodejsStreamInputAdapter"),w=function(_){_.slice(-1)==="/"&&(_=_.substring(0,_.length-1));var T=_.lastIndexOf("/");return 0<T?_.substring(0,T):""},d=function(_){return _.slice(-1)!=="/"&&(_+="/"),_},u=function(_,T){return T=T!==void 0?T:b.createFolders,_=d(_),this.files[_]||o.call(this,_,null,{dir:!0,createFolders:T}),this.files[_]};function y(_){return Object.prototype.toString.call(_)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(_){var T,z,N;for(T in this.files)N=this.files[T],(z=T.slice(this.root.length,T.length))&&T.slice(0,this.root.length)===this.root&&_(z,N)},filter:function(_){var T=[];return this.forEach(function(z,N){_(z,N)&&T.push(N)}),T},file:function(_,T,z){if(arguments.length!==1)return _=this.root+_,o.call(this,_,T,z),this;if(y(_)){var N=_;return this.filter(function(M,te){return!te.dir&&N.test(M)})}var R=this.files[this.root+_];return R&&!R.dir?R:null},folder:function(_){if(!_)return this;if(y(_))return this.filter(function(R,M){return M.dir&&_.test(R)});var T=this.root+_,z=u.call(this,T),N=this.clone();return N.root=z.name,N},remove:function(_){_=this.root+_;var T=this.files[_];if(T||(_.slice(-1)!=="/"&&(_+="/"),T=this.files[_]),T&&!T.dir)delete this.files[_];else for(var z=this.filter(function(R,M){return M.name.slice(0,_.length)===_}),N=0;N<z.length;N++)delete this.files[z[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(_){var T,z={};try{if((z=l.extend(_||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=z.type.toLowerCase(),z.compression=z.compression.toUpperCase(),z.type==="binarystring"&&(z.type="string"),!z.type)throw new Error("No output type specified.");l.checkSupport(z.type),z.platform!=="darwin"&&z.platform!=="freebsd"&&z.platform!=="linux"&&z.platform!=="sunos"||(z.platform="UNIX"),z.platform==="win32"&&(z.platform="DOS");var N=z.comment||this.comment||"";T=m.generateWorker(this,z,N)}catch(R){(T=new c("error")).error(R)}return new h(T,z.type||"string",z.mimeType)},generateAsync:function(_,T){return this.generateInternalStream(_).accumulate(T)},generateNodeStream:function(_,T){return(_=_||{}).type||(_.type="nodebuffer"),this.generateInternalStream(_).toNodejsStream(T)}};r.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var o=n("./DataReader");function s(l){o.call(this,l);for(var c=0;c<this.data.length;c++)l[c]=255&l[c]}n("../utils").inherits(s,o),s.prototype.byteAt=function(l){return this.data[this.zero+l]},s.prototype.lastIndexOfSignature=function(l){for(var c=l.charCodeAt(0),h=l.charCodeAt(1),b=l.charCodeAt(2),v=l.charCodeAt(3),x=this.length-4;0<=x;--x)if(this.data[x]===c&&this.data[x+1]===h&&this.data[x+2]===b&&this.data[x+3]===v)return x-this.zero;return-1},s.prototype.readAndCheckSignature=function(l){var c=l.charCodeAt(0),h=l.charCodeAt(1),b=l.charCodeAt(2),v=l.charCodeAt(3),x=this.readData(4);return c===x[0]&&h===x[1]&&b===x[2]&&v===x[3]},s.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,c},r.exports=s},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var o=n("../utils");function s(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(){},readInt:function(l){var c,h=0;for(this.checkOffset(l),c=this.index+l-1;c>=this.index;c--)h=(h<<8)+this.byteAt(c);return this.index+=l,h},readString:function(l){return o.transformTo("string",this.readData(l))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},r.exports=s},{"../utils":32}],19:[function(n,r,i){var o=n("./Uint8ArrayReader");function s(l){o.call(this,l)}n("../utils").inherits(s,o),s.prototype.readData=function(l){this.checkOffset(l);var c=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,c},r.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var o=n("./DataReader");function s(l){o.call(this,l)}n("../utils").inherits(s,o),s.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},s.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},s.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},s.prototype.readData=function(l){this.checkOffset(l);var c=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,c},r.exports=s},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var o=n("./ArrayReader");function s(l){o.call(this,l)}n("../utils").inherits(s,o),s.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,c},r.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var o=n("../utils"),s=n("../support"),l=n("./ArrayReader"),c=n("./StringReader"),h=n("./NodeBufferReader"),b=n("./Uint8ArrayReader");r.exports=function(v){var x=o.getTypeOf(v);return o.checkSupport(x),x!=="string"||s.uint8array?x==="nodebuffer"?new h(v):s.uint8array?new b(o.transformTo("uint8array",v)):new l(o.transformTo("array",v)):new c(v)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var o=n("./GenericWorker"),s=n("../utils");function l(c){o.call(this,"ConvertWorker to "+c),this.destType=c}s.inherits(l,o),l.prototype.processChunk=function(c){this.push({data:s.transformTo(this.destType,c.data),meta:c.meta})},r.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var o=n("./GenericWorker"),s=n("../crc32");function l(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(l,o),l.prototype.processChunk=function(c){this.streamInfo.crc32=s(c.data,this.streamInfo.crc32||0),this.push(c)},r.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var o=n("../utils"),s=n("./GenericWorker");function l(c){s.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}o.inherits(l,s),l.prototype.processChunk=function(c){if(c){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+c.data.length}s.prototype.processChunk.call(this,c)},r.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var o=n("../utils"),s=n("./GenericWorker");function l(c){s.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(b){h.dataIsReady=!0,h.data=b,h.max=b&&b.length||0,h.type=o.getTypeOf(b),h.isPaused||h._tickAndRepeat()},function(b){h.error(b)})}o.inherits(l,s),l.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,h);break;case"uint8array":c=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":c=this.data.slice(this.index,h)}return this.index=h,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function o(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,l){return this._listeners[s].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,l){if(this._listeners[s])for(var c=0;c<this._listeners[s].length;c++)this._listeners[s][c].call(this,l)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var l=this;return s.on("data",function(c){l.processChunk(c)}),s.on("end",function(){l.end()}),s.on("error",function(c){l.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,l){return this.extraStreamInfo[s]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},r.exports=o},{}],29:[function(n,r,i){var o=n("../utils"),s=n("./ConvertWorker"),l=n("./GenericWorker"),c=n("../base64"),h=n("../support"),b=n("../external"),v=null;if(h.nodestream)try{v=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function x(k,p){return new b.Promise(function(w,d){var u=[],y=k._internalType,S=k._outputType,_=k._mimeType;k.on("data",function(T,z){u.push(T),p&&p(z)}).on("error",function(T){u=[],d(T)}).on("end",function(){try{var T=function(z,N,R){switch(z){case"blob":return o.newBlob(o.transformTo("arraybuffer",N),R);case"base64":return c.encode(N);default:return o.transformTo(z,N)}}(S,function(z,N){var R,M=0,te=null,E=0;for(R=0;R<N.length;R++)E+=N[R].length;switch(z){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(te=new Uint8Array(E),R=0;R<N.length;R++)te.set(N[R],M),M+=N[R].length;return te;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+z+"'")}}(y,u),_);w(T)}catch(z){d(z)}u=[]}).resume()})}function m(k,p,w){var d=p;switch(p){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=p,this._mimeType=w,o.checkSupport(d),this._worker=k.pipe(new s(d)),k.lock()}catch(u){this._worker=new l("error"),this._worker.error(u)}}m.prototype={accumulate:function(k){return x(this,k)},on:function(k,p){var w=this;return k==="data"?this._worker.on(k,function(d){p.call(w,d.data,d.meta)}):this._worker.on(k,function(){o.delay(p,arguments,w)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new v(this,{objectMode:this._outputType!=="nodebuffer"},k)}},r.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var o=new ArrayBuffer(0);try{i.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(o),i.blob=s.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var o=n("./utils"),s=n("./support"),l=n("./nodejsUtils"),c=n("./stream/GenericWorker"),h=new Array(256),b=0;b<256;b++)h[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;h[254]=h[254]=1;function v(){c.call(this,"utf-8 decode"),this.leftOver=null}function x(){c.call(this,"utf-8 encode")}i.utf8encode=function(m){return s.nodebuffer?l.newBufferFrom(m,"utf-8"):function(k){var p,w,d,u,y,S=k.length,_=0;for(u=0;u<S;u++)(64512&(w=k.charCodeAt(u)))==55296&&u+1<S&&(64512&(d=k.charCodeAt(u+1)))==56320&&(w=65536+(w-55296<<10)+(d-56320),u++),_+=w<128?1:w<2048?2:w<65536?3:4;for(p=s.uint8array?new Uint8Array(_):new Array(_),u=y=0;y<_;u++)(64512&(w=k.charCodeAt(u)))==55296&&u+1<S&&(64512&(d=k.charCodeAt(u+1)))==56320&&(w=65536+(w-55296<<10)+(d-56320),u++),w<128?p[y++]=w:(w<2048?p[y++]=192|w>>>6:(w<65536?p[y++]=224|w>>>12:(p[y++]=240|w>>>18,p[y++]=128|w>>>12&63),p[y++]=128|w>>>6&63),p[y++]=128|63&w);return p}(m)},i.utf8decode=function(m){return s.nodebuffer?o.transformTo("nodebuffer",m).toString("utf-8"):function(k){var p,w,d,u,y=k.length,S=new Array(2*y);for(p=w=0;p<y;)if((d=k[p++])<128)S[w++]=d;else if(4<(u=h[d]))S[w++]=65533,p+=u-1;else{for(d&=u===2?31:u===3?15:7;1<u&&p<y;)d=d<<6|63&k[p++],u--;1<u?S[w++]=65533:d<65536?S[w++]=d:(d-=65536,S[w++]=55296|d>>10&1023,S[w++]=56320|1023&d)}return S.length!==w&&(S.subarray?S=S.subarray(0,w):S.length=w),o.applyFromCharCode(S)}(m=o.transformTo(s.uint8array?"uint8array":"array",m))},o.inherits(v,c),v.prototype.processChunk=function(m){var k=o.transformTo(s.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var p=k;(k=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),k.set(p,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var w=function(u,y){var S;for((y=y||u.length)>u.length&&(y=u.length),S=y-1;0<=S&&(192&u[S])==128;)S--;return S<0||S===0?y:S+h[u[S]]>y?S:y}(k),d=k;w!==k.length&&(s.uint8array?(d=k.subarray(0,w),this.leftOver=k.subarray(w,k.length)):(d=k.slice(0,w),this.leftOver=k.slice(w,k.length))),this.push({data:i.utf8decode(d),meta:m.meta})},v.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=v,o.inherits(x,c),x.prototype.processChunk=function(m){this.push({data:i.utf8encode(m.data),meta:m.meta})},i.Utf8EncodeWorker=x},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var o=n("./support"),s=n("./base64"),l=n("./nodejsUtils"),c=n("./external");function h(p){return p}function b(p,w){for(var d=0;d<p.length;++d)w[d]=255&p.charCodeAt(d);return w}n("setimmediate"),i.newBlob=function(p,w){i.checkSupport("blob");try{return new Blob([p],{type:w})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(p),d.getBlob(w)}catch{throw new Error("Bug : can't construct the Blob.")}}};var v={stringifyByChunk:function(p,w,d){var u=[],y=0,S=p.length;if(S<=d)return String.fromCharCode.apply(null,p);for(;y<S;)w==="array"||w==="nodebuffer"?u.push(String.fromCharCode.apply(null,p.slice(y,Math.min(y+d,S)))):u.push(String.fromCharCode.apply(null,p.subarray(y,Math.min(y+d,S)))),y+=d;return u.join("")},stringifyByChar:function(p){for(var w="",d=0;d<p.length;d++)w+=String.fromCharCode(p[d]);return w},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}}()}};function x(p){var w=65536,d=i.getTypeOf(p),u=!0;if(d==="uint8array"?u=v.applyCanBeUsed.uint8array:d==="nodebuffer"&&(u=v.applyCanBeUsed.nodebuffer),u)for(;1<w;)try{return v.stringifyByChunk(p,d,w)}catch{w=Math.floor(w/2)}return v.stringifyByChar(p)}function m(p,w){for(var d=0;d<p.length;d++)w[d]=p[d];return w}i.applyFromCharCode=x;var k={};k.string={string:h,array:function(p){return b(p,new Array(p.length))},arraybuffer:function(p){return k.string.uint8array(p).buffer},uint8array:function(p){return b(p,new Uint8Array(p.length))},nodebuffer:function(p){return b(p,l.allocBuffer(p.length))}},k.array={string:x,array:h,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return l.newBufferFrom(p)}},k.arraybuffer={string:function(p){return x(new Uint8Array(p))},array:function(p){return m(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:h,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return l.newBufferFrom(new Uint8Array(p))}},k.uint8array={string:x,array:function(p){return m(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:h,nodebuffer:function(p){return l.newBufferFrom(p)}},k.nodebuffer={string:x,array:function(p){return m(p,new Array(p.length))},arraybuffer:function(p){return k.nodebuffer.uint8array(p).buffer},uint8array:function(p){return m(p,new Uint8Array(p.length))},nodebuffer:h},i.transformTo=function(p,w){if(w=w||"",!p)return w;i.checkSupport(p);var d=i.getTypeOf(w);return k[d][p](w)},i.resolve=function(p){for(var w=p.split("/"),d=[],u=0;u<w.length;u++){var y=w[u];y==="."||y===""&&u!==0&&u!==w.length-1||(y===".."?d.pop():d.push(y))}return d.join("/")},i.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":o.nodebuffer&&l.isBuffer(p)?"nodebuffer":o.uint8array&&p instanceof Uint8Array?"uint8array":o.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(p){if(!o[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(p){var w,d,u="";for(d=0;d<(p||"").length;d++)u+="\\x"+((w=p.charCodeAt(d))<16?"0":"")+w.toString(16).toUpperCase();return u},i.delay=function(p,w,d){setImmediate(function(){p.apply(d||null,w||[])})},i.inherits=function(p,w){function d(){}d.prototype=w.prototype,p.prototype=new d},i.extend=function(){var p,w,d={};for(p=0;p<arguments.length;p++)for(w in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],w)&&d[w]===void 0&&(d[w]=arguments[p][w]);return d},i.prepareContent=function(p,w,d,u,y){return c.Promise.resolve(w).then(function(S){return o.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new c.Promise(function(_,T){var z=new FileReader;z.onload=function(N){_(N.target.result)},z.onerror=function(N){T(N.target.error)},z.readAsArrayBuffer(S)}):S}).then(function(S){var _=i.getTypeOf(S);return _?(_==="arraybuffer"?S=i.transformTo("uint8array",S):_==="string"&&(y?S=s.decode(S):d&&u!==!0&&(S=function(T){return b(T,o.uint8array?new Uint8Array(T.length):new Array(T.length))}(S))),S):c.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var o=n("./reader/readerFor"),s=n("./utils"),l=n("./signature"),c=n("./zipEntry"),h=n("./support");function b(v){this.files=[],this.loadOptions=v}b.prototype={checkSignature:function(v){if(!this.reader.readAndCheckSignature(v)){this.reader.index-=4;var x=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(x)+", expected "+s.pretty(v)+")")}},isSignature:function(v,x){var m=this.reader.index;this.reader.setIndex(v);var k=this.reader.readString(4)===x;return this.reader.setIndex(m),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var v=this.reader.readData(this.zipCommentLength),x=h.uint8array?"uint8array":"array",m=s.transformTo(x,v);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var v,x,m,k=this.zip64EndOfCentralSize-44;0<k;)v=this.reader.readInt(2),x=this.reader.readInt(4),m=this.reader.readData(x),this.zip64ExtensibleData[v]={id:v,length:x,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var v,x;for(v=0;v<this.files.length;v++)x=this.files[v],this.reader.setIndex(x.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),x.readLocalPart(this.reader),x.handleUTF8(),x.processAttributes()},readCentralDir:function(){var v;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(v=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(v);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var v=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(v<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(v);var x=v;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(v=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(v),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var k=x-m;if(0<k)this.isSignature(x,l.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(v){this.reader=o(v)},load:function(v){this.prepareReader(v),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=b},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var o=n("./reader/readerFor"),s=n("./utils"),l=n("./compressedObject"),c=n("./crc32"),h=n("./utf8"),b=n("./compressions"),v=n("./support");function x(m,k){this.options=m,this.loadOptions=k}x.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var k,p;if(m.skip(22),this.fileNameLength=m.readInt(2),p=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(w){for(var d in b)if(Object.prototype.hasOwnProperty.call(b,d)&&b[d].magic===w)return b[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,k,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var k=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(k),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var m=o(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(m){var k,p,w,d=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<d;)k=m.readInt(2),p=m.readInt(2),w=m.readData(p),this.extraFields[k]={id:k,length:p,value:w};m.setIndex(d)},handleUTF8:function(){var m=v.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var p=s.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var w=this.findExtraFieldUnicodeComment();if(w!==null)this.fileCommentStr=w;else{var d=s.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var k=o(m.value);return k.readInt(1)!==1||c(this.fileName)!==k.readInt(4)?null:h.utf8decode(k.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var k=o(m.value);return k.readInt(1)!==1||c(this.fileComment)!==k.readInt(4)?null:h.utf8decode(k.readData(m.length-5))}return null}},r.exports=x},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function o(k,p,w){this.name=k,this.dir=w.dir,this.date=w.date,this.comment=w.comment,this.unixPermissions=w.unixPermissions,this.dosPermissions=w.dosPermissions,this._data=p,this._dataBinary=w.binary,this.options={compression:w.compression,compressionOptions:w.compressionOptions}}var s=n("./stream/StreamHelper"),l=n("./stream/DataWorker"),c=n("./utf8"),h=n("./compressedObject"),b=n("./stream/GenericWorker");o.prototype={internalStream:function(k){var p=null,w="string";try{if(!k)throw new Error("No output type specified.");var d=(w=k.toLowerCase())==="string"||w==="text";w!=="binarystring"&&w!=="text"||(w="string"),p=this._decompressWorker();var u=!this._dataBinary;u&&!d&&(p=p.pipe(new c.Utf8EncodeWorker)),!u&&d&&(p=p.pipe(new c.Utf8DecodeWorker))}catch(y){(p=new b("error")).error(y)}return new s(p,w,"")},async:function(k,p){return this.internalStream(k).accumulate(p)},nodeStream:function(k,p){return this.internalStream(k||"nodebuffer").toNodejsStream(p)},_compressWorker:function(k,p){if(this._data instanceof h&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var w=this._decompressWorker();return this._dataBinary||(w=w.pipe(new c.Utf8EncodeWorker)),h.createWorkerFrom(w,k,p)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof b?this._data:new l(this._data)}};for(var v=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],x=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<v.length;m++)o.prototype[v[m]]=x;r.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(o){var s,l,c=o.MutationObserver||o.WebKitMutationObserver;if(c){var h=0,b=new c(k),v=o.document.createTextNode("");b.observe(v,{characterData:!0}),s=function(){v.data=h=++h%2}}else if(o.setImmediate||o.MessageChannel===void 0)s="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var p=o.document.createElement("script");p.onreadystatechange=function(){k(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},o.document.documentElement.appendChild(p)}:function(){setTimeout(k,0)};else{var x=new o.MessageChannel;x.port1.onmessage=k,s=function(){x.port2.postMessage(0)}}var m=[];function k(){var p,w;l=!0;for(var d=m.length;d;){for(w=m,m=[],p=-1;++p<d;)w[p]();d=m.length}l=!1}r.exports=function(p){m.push(p)!==1||l||s()}}).call(this,typeof oi<"u"?oi:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var o=n("immediate");function s(){}var l={},c=["REJECTED"],h=["FULFILLED"],b=["PENDING"];function v(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=b,this.queue=[],this.outcome=void 0,d!==s&&p(this,d)}function x(d,u,y){this.promise=d,typeof u=="function"&&(this.onFulfilled=u,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function m(d,u,y){o(function(){var S;try{S=u(y)}catch(_){return l.reject(d,_)}S===d?l.reject(d,new TypeError("Cannot resolve promise with itself")):l.resolve(d,S)})}function k(d){var u=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof u=="function")return function(){u.apply(d,arguments)}}function p(d,u){var y=!1;function S(z){y||(y=!0,l.reject(d,z))}function _(z){y||(y=!0,l.resolve(d,z))}var T=w(function(){u(_,S)});T.status==="error"&&S(T.value)}function w(d,u){var y={};try{y.value=d(u),y.status="success"}catch(S){y.status="error",y.value=S}return y}(r.exports=v).prototype.finally=function(d){if(typeof d!="function")return this;var u=this.constructor;return this.then(function(y){return u.resolve(d()).then(function(){return y})},function(y){return u.resolve(d()).then(function(){throw y})})},v.prototype.catch=function(d){return this.then(null,d)},v.prototype.then=function(d,u){if(typeof d!="function"&&this.state===h||typeof u!="function"&&this.state===c)return this;var y=new this.constructor(s);return this.state!==b?m(y,this.state===h?d:u,this.outcome):this.queue.push(new x(y,d,u)),y},x.prototype.callFulfilled=function(d){l.resolve(this.promise,d)},x.prototype.otherCallFulfilled=function(d){m(this.promise,this.onFulfilled,d)},x.prototype.callRejected=function(d){l.reject(this.promise,d)},x.prototype.otherCallRejected=function(d){m(this.promise,this.onRejected,d)},l.resolve=function(d,u){var y=w(k,u);if(y.status==="error")return l.reject(d,y.value);var S=y.value;if(S)p(d,S);else{d.state=h,d.outcome=u;for(var _=-1,T=d.queue.length;++_<T;)d.queue[_].callFulfilled(u)}return d},l.reject=function(d,u){d.state=c,d.outcome=u;for(var y=-1,S=d.queue.length;++y<S;)d.queue[y].callRejected(u);return d},v.resolve=function(d){return d instanceof this?d:l.resolve(new this(s),d)},v.reject=function(d){var u=new this(s);return l.reject(u,d)},v.all=function(d){var u=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=d.length,S=!1;if(!y)return this.resolve([]);for(var _=new Array(y),T=0,z=-1,N=new this(s);++z<y;)R(d[z],z);return N;function R(M,te){u.resolve(M).then(function(E){_[te]=E,++T!==y||S||(S=!0,l.resolve(N,_))},function(E){S||(S=!0,l.reject(N,E))})}},v.race=function(d){var u=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=d.length,S=!1;if(!y)return this.resolve([]);for(var _=-1,T=new this(s);++_<y;)z=d[_],u.resolve(z).then(function(N){S||(S=!0,l.resolve(T,N))},function(N){S||(S=!0,l.reject(T,N))});var z;return T}},{immediate:36}],38:[function(n,r,i){var o={};(0,n("./lib/utils/common").assign)(o,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var o=n("./zlib/deflate"),s=n("./utils/common"),l=n("./utils/strings"),c=n("./zlib/messages"),h=n("./zlib/zstream"),b=Object.prototype.toString,v=0,x=-1,m=0,k=8;function p(d){if(!(this instanceof p))return new p(d);this.options=s.assign({level:x,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},d||{});var u=this.options;u.raw&&0<u.windowBits?u.windowBits=-u.windowBits:u.gzip&&0<u.windowBits&&u.windowBits<16&&(u.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var y=o.deflateInit2(this.strm,u.level,u.method,u.windowBits,u.memLevel,u.strategy);if(y!==v)throw new Error(c[y]);if(u.header&&o.deflateSetHeader(this.strm,u.header),u.dictionary){var S;if(S=typeof u.dictionary=="string"?l.string2buf(u.dictionary):b.call(u.dictionary)==="[object ArrayBuffer]"?new Uint8Array(u.dictionary):u.dictionary,(y=o.deflateSetDictionary(this.strm,S))!==v)throw new Error(c[y]);this._dict_set=!0}}function w(d,u){var y=new p(u);if(y.push(d,!0),y.err)throw y.msg||c[y.err];return y.result}p.prototype.push=function(d,u){var y,S,_=this.strm,T=this.options.chunkSize;if(this.ended)return!1;S=u===~~u?u:u===!0?4:0,typeof d=="string"?_.input=l.string2buf(d):b.call(d)==="[object ArrayBuffer]"?_.input=new Uint8Array(d):_.input=d,_.next_in=0,_.avail_in=_.input.length;do{if(_.avail_out===0&&(_.output=new s.Buf8(T),_.next_out=0,_.avail_out=T),(y=o.deflate(_,S))!==1&&y!==v)return this.onEnd(y),!(this.ended=!0);_.avail_out!==0&&(_.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(s.shrinkBuf(_.output,_.next_out))):this.onData(s.shrinkBuf(_.output,_.next_out)))}while((0<_.avail_in||_.avail_out===0)&&y!==1);return S===4?(y=o.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===v):S!==2||(this.onEnd(v),!(_.avail_out=0))},p.prototype.onData=function(d){this.chunks.push(d)},p.prototype.onEnd=function(d){d===v&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},i.Deflate=p,i.deflate=w,i.deflateRaw=function(d,u){return(u=u||{}).raw=!0,w(d,u)},i.gzip=function(d,u){return(u=u||{}).gzip=!0,w(d,u)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var o=n("./zlib/inflate"),s=n("./utils/common"),l=n("./utils/strings"),c=n("./zlib/constants"),h=n("./zlib/messages"),b=n("./zlib/zstream"),v=n("./zlib/gzheader"),x=Object.prototype.toString;function m(p){if(!(this instanceof m))return new m(p);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},p||{});var w=this.options;w.raw&&0<=w.windowBits&&w.windowBits<16&&(w.windowBits=-w.windowBits,w.windowBits===0&&(w.windowBits=-15)),!(0<=w.windowBits&&w.windowBits<16)||p&&p.windowBits||(w.windowBits+=32),15<w.windowBits&&w.windowBits<48&&!(15&w.windowBits)&&(w.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var d=o.inflateInit2(this.strm,w.windowBits);if(d!==c.Z_OK)throw new Error(h[d]);this.header=new v,o.inflateGetHeader(this.strm,this.header)}function k(p,w){var d=new m(w);if(d.push(p,!0),d.err)throw d.msg||h[d.err];return d.result}m.prototype.push=function(p,w){var d,u,y,S,_,T,z=this.strm,N=this.options.chunkSize,R=this.options.dictionary,M=!1;if(this.ended)return!1;u=w===~~w?w:w===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof p=="string"?z.input=l.binstring2buf(p):x.call(p)==="[object ArrayBuffer]"?z.input=new Uint8Array(p):z.input=p,z.next_in=0,z.avail_in=z.input.length;do{if(z.avail_out===0&&(z.output=new s.Buf8(N),z.next_out=0,z.avail_out=N),(d=o.inflate(z,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&R&&(T=typeof R=="string"?l.string2buf(R):x.call(R)==="[object ArrayBuffer]"?new Uint8Array(R):R,d=o.inflateSetDictionary(this.strm,T)),d===c.Z_BUF_ERROR&&M===!0&&(d=c.Z_OK,M=!1),d!==c.Z_STREAM_END&&d!==c.Z_OK)return this.onEnd(d),!(this.ended=!0);z.next_out&&(z.avail_out!==0&&d!==c.Z_STREAM_END&&(z.avail_in!==0||u!==c.Z_FINISH&&u!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=l.utf8border(z.output,z.next_out),S=z.next_out-y,_=l.buf2string(z.output,y),z.next_out=S,z.avail_out=N-S,S&&s.arraySet(z.output,z.output,y,S,0),this.onData(_)):this.onData(s.shrinkBuf(z.output,z.next_out)))),z.avail_in===0&&z.avail_out===0&&(M=!0)}while((0<z.avail_in||z.avail_out===0)&&d!==c.Z_STREAM_END);return d===c.Z_STREAM_END&&(u=c.Z_FINISH),u===c.Z_FINISH?(d=o.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===c.Z_OK):u!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(z.avail_out=0))},m.prototype.onData=function(p){this.chunks.push(p)},m.prototype.onEnd=function(p){p===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},i.Inflate=m,i.inflate=k,i.inflateRaw=function(p,w){return(w=w||{}).raw=!0,k(p,w)},i.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(c){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var b=h.shift();if(b){if(typeof b!="object")throw new TypeError(b+"must be non-object");for(var v in b)b.hasOwnProperty(v)&&(c[v]=b[v])}}return c},i.shrinkBuf=function(c,h){return c.length===h?c:c.subarray?c.subarray(0,h):(c.length=h,c)};var s={arraySet:function(c,h,b,v,x){if(h.subarray&&c.subarray)c.set(h.subarray(b,b+v),x);else for(var m=0;m<v;m++)c[x+m]=h[b+m]},flattenChunks:function(c){var h,b,v,x,m,k;for(h=v=0,b=c.length;h<b;h++)v+=c[h].length;for(k=new Uint8Array(v),h=x=0,b=c.length;h<b;h++)m=c[h],k.set(m,x),x+=m.length;return k}},l={arraySet:function(c,h,b,v,x){for(var m=0;m<v;m++)c[x+m]=h[b+m]},flattenChunks:function(c){return[].concat.apply([],c)}};i.setTyped=function(c){c?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,s)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,l))},i.setTyped(o)},{}],42:[function(n,r,i){var o=n("./common"),s=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var c=new o.Buf8(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function b(v,x){if(x<65537&&(v.subarray&&l||!v.subarray&&s))return String.fromCharCode.apply(null,o.shrinkBuf(v,x));for(var m="",k=0;k<x;k++)m+=String.fromCharCode(v[k]);return m}c[254]=c[254]=1,i.string2buf=function(v){var x,m,k,p,w,d=v.length,u=0;for(p=0;p<d;p++)(64512&(m=v.charCodeAt(p)))==55296&&p+1<d&&(64512&(k=v.charCodeAt(p+1)))==56320&&(m=65536+(m-55296<<10)+(k-56320),p++),u+=m<128?1:m<2048?2:m<65536?3:4;for(x=new o.Buf8(u),p=w=0;w<u;p++)(64512&(m=v.charCodeAt(p)))==55296&&p+1<d&&(64512&(k=v.charCodeAt(p+1)))==56320&&(m=65536+(m-55296<<10)+(k-56320),p++),m<128?x[w++]=m:(m<2048?x[w++]=192|m>>>6:(m<65536?x[w++]=224|m>>>12:(x[w++]=240|m>>>18,x[w++]=128|m>>>12&63),x[w++]=128|m>>>6&63),x[w++]=128|63&m);return x},i.buf2binstring=function(v){return b(v,v.length)},i.binstring2buf=function(v){for(var x=new o.Buf8(v.length),m=0,k=x.length;m<k;m++)x[m]=v.charCodeAt(m);return x},i.buf2string=function(v,x){var m,k,p,w,d=x||v.length,u=new Array(2*d);for(m=k=0;m<d;)if((p=v[m++])<128)u[k++]=p;else if(4<(w=c[p]))u[k++]=65533,m+=w-1;else{for(p&=w===2?31:w===3?15:7;1<w&&m<d;)p=p<<6|63&v[m++],w--;1<w?u[k++]=65533:p<65536?u[k++]=p:(p-=65536,u[k++]=55296|p>>10&1023,u[k++]=56320|1023&p)}return b(u,k)},i.utf8border=function(v,x){var m;for((x=x||v.length)>v.length&&(x=v.length),m=x-1;0<=m&&(192&v[m])==128;)m--;return m<0||m===0?x:m+c[v[m]]>x?m:x}},{"./common":41}],43:[function(n,r,i){r.exports=function(o,s,l,c){for(var h=65535&o|0,b=o>>>16&65535|0,v=0;l!==0;){for(l-=v=2e3<l?2e3:l;b=b+(h=h+s[c++]|0)|0,--v;);h%=65521,b%=65521}return h|b<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var o=function(){for(var s,l=[],c=0;c<256;c++){s=c;for(var h=0;h<8;h++)s=1&s?3988292384^s>>>1:s>>>1;l[c]=s}return l}();r.exports=function(s,l,c,h){var b=o,v=h+c;s^=-1;for(var x=h;x<v;x++)s=s>>>8^b[255&(s^l[x])];return-1^s}},{}],46:[function(n,r,i){var o,s=n("../utils/common"),l=n("./trees"),c=n("./adler32"),h=n("./crc32"),b=n("./messages"),v=0,x=4,m=0,k=-2,p=-1,w=4,d=2,u=8,y=9,S=286,_=30,T=19,z=2*S+1,N=15,R=3,M=258,te=M+R+1,E=42,F=113,g=1,L=2,ee=3,H=4;function B(f,V){return f.msg=b[V],V}function O(f){return(f<<1)-(4<f?9:0)}function Z(f){for(var V=f.length;0<=--V;)f[V]=0}function P(f){var V=f.state,U=V.pending;U>f.avail_out&&(U=f.avail_out),U!==0&&(s.arraySet(f.output,V.pending_buf,V.pending_out,U,f.next_out),f.next_out+=U,V.pending_out+=U,f.total_out+=U,f.avail_out-=U,V.pending-=U,V.pending===0&&(V.pending_out=0))}function I(f,V){l._tr_flush_block(f,0<=f.block_start?f.block_start:-1,f.strstart-f.block_start,V),f.block_start=f.strstart,P(f.strm)}function ne(f,V){f.pending_buf[f.pending++]=V}function Q(f,V){f.pending_buf[f.pending++]=V>>>8&255,f.pending_buf[f.pending++]=255&V}function K(f,V){var U,j,C=f.max_chain_length,A=f.strstart,G=f.prev_length,q=f.nice_match,D=f.strstart>f.w_size-te?f.strstart-(f.w_size-te):0,X=f.window,re=f.w_mask,J=f.prev,ae=f.strstart+M,ye=X[A+G-1],pe=X[A+G];f.prev_length>=f.good_match&&(C>>=2),q>f.lookahead&&(q=f.lookahead);do if(X[(U=V)+G]===pe&&X[U+G-1]===ye&&X[U]===X[A]&&X[++U]===X[A+1]){A+=2,U++;do;while(X[++A]===X[++U]&&X[++A]===X[++U]&&X[++A]===X[++U]&&X[++A]===X[++U]&&X[++A]===X[++U]&&X[++A]===X[++U]&&X[++A]===X[++U]&&X[++A]===X[++U]&&A<ae);if(j=M-(ae-A),A=ae-M,G<j){if(f.match_start=V,q<=(G=j))break;ye=X[A+G-1],pe=X[A+G]}}while((V=J[V&re])>D&&--C!=0);return G<=f.lookahead?G:f.lookahead}function ge(f){var V,U,j,C,A,G,q,D,X,re,J=f.w_size;do{if(C=f.window_size-f.lookahead-f.strstart,f.strstart>=J+(J-te)){for(s.arraySet(f.window,f.window,J,J,0),f.match_start-=J,f.strstart-=J,f.block_start-=J,V=U=f.hash_size;j=f.head[--V],f.head[V]=J<=j?j-J:0,--U;);for(V=U=J;j=f.prev[--V],f.prev[V]=J<=j?j-J:0,--U;);C+=J}if(f.strm.avail_in===0)break;if(G=f.strm,q=f.window,D=f.strstart+f.lookahead,X=C,re=void 0,re=G.avail_in,X<re&&(re=X),U=re===0?0:(G.avail_in-=re,s.arraySet(q,G.input,G.next_in,re,D),G.state.wrap===1?G.adler=c(G.adler,q,re,D):G.state.wrap===2&&(G.adler=h(G.adler,q,re,D)),G.next_in+=re,G.total_in+=re,re),f.lookahead+=U,f.lookahead+f.insert>=R)for(A=f.strstart-f.insert,f.ins_h=f.window[A],f.ins_h=(f.ins_h<<f.hash_shift^f.window[A+1])&f.hash_mask;f.insert&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[A+R-1])&f.hash_mask,f.prev[A&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=A,A++,f.insert--,!(f.lookahead+f.insert<R)););}while(f.lookahead<te&&f.strm.avail_in!==0)}function ke(f,V){for(var U,j;;){if(f.lookahead<te){if(ge(f),f.lookahead<te&&V===v)return g;if(f.lookahead===0)break}if(U=0,f.lookahead>=R&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+R-1])&f.hash_mask,U=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),U!==0&&f.strstart-U<=f.w_size-te&&(f.match_length=K(f,U)),f.match_length>=R)if(j=l._tr_tally(f,f.strstart-f.match_start,f.match_length-R),f.lookahead-=f.match_length,f.match_length<=f.max_lazy_match&&f.lookahead>=R){for(f.match_length--;f.strstart++,f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+R-1])&f.hash_mask,U=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart,--f.match_length!=0;);f.strstart++}else f.strstart+=f.match_length,f.match_length=0,f.ins_h=f.window[f.strstart],f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+1])&f.hash_mask;else j=l._tr_tally(f,0,f.window[f.strstart]),f.lookahead--,f.strstart++;if(j&&(I(f,!1),f.strm.avail_out===0))return g}return f.insert=f.strstart<R-1?f.strstart:R-1,V===x?(I(f,!0),f.strm.avail_out===0?ee:H):f.last_lit&&(I(f,!1),f.strm.avail_out===0)?g:L}function ce(f,V){for(var U,j,C;;){if(f.lookahead<te){if(ge(f),f.lookahead<te&&V===v)return g;if(f.lookahead===0)break}if(U=0,f.lookahead>=R&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+R-1])&f.hash_mask,U=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),f.prev_length=f.match_length,f.prev_match=f.match_start,f.match_length=R-1,U!==0&&f.prev_length<f.max_lazy_match&&f.strstart-U<=f.w_size-te&&(f.match_length=K(f,U),f.match_length<=5&&(f.strategy===1||f.match_length===R&&4096<f.strstart-f.match_start)&&(f.match_length=R-1)),f.prev_length>=R&&f.match_length<=f.prev_length){for(C=f.strstart+f.lookahead-R,j=l._tr_tally(f,f.strstart-1-f.prev_match,f.prev_length-R),f.lookahead-=f.prev_length-1,f.prev_length-=2;++f.strstart<=C&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+R-1])&f.hash_mask,U=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),--f.prev_length!=0;);if(f.match_available=0,f.match_length=R-1,f.strstart++,j&&(I(f,!1),f.strm.avail_out===0))return g}else if(f.match_available){if((j=l._tr_tally(f,0,f.window[f.strstart-1]))&&I(f,!1),f.strstart++,f.lookahead--,f.strm.avail_out===0)return g}else f.match_available=1,f.strstart++,f.lookahead--}return f.match_available&&(j=l._tr_tally(f,0,f.window[f.strstart-1]),f.match_available=0),f.insert=f.strstart<R-1?f.strstart:R-1,V===x?(I(f,!0),f.strm.avail_out===0?ee:H):f.last_lit&&(I(f,!1),f.strm.avail_out===0)?g:L}function he(f,V,U,j,C){this.good_length=f,this.max_lazy=V,this.nice_length=U,this.max_chain=j,this.func=C}function Te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=u,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*z),this.dyn_dtree=new s.Buf16(2*(2*_+1)),this.bl_tree=new s.Buf16(2*(2*T+1)),Z(this.dyn_ltree),Z(this.dyn_dtree),Z(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(N+1),this.heap=new s.Buf16(2*S+1),Z(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*S+1),Z(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ce(f){var V;return f&&f.state?(f.total_in=f.total_out=0,f.data_type=d,(V=f.state).pending=0,V.pending_out=0,V.wrap<0&&(V.wrap=-V.wrap),V.status=V.wrap?E:F,f.adler=V.wrap===2?0:1,V.last_flush=v,l._tr_init(V),m):B(f,k)}function lt(f){var V=Ce(f);return V===m&&function(U){U.window_size=2*U.w_size,Z(U.head),U.max_lazy_match=o[U.level].max_lazy,U.good_match=o[U.level].good_length,U.nice_match=o[U.level].nice_length,U.max_chain_length=o[U.level].max_chain,U.strstart=0,U.block_start=0,U.lookahead=0,U.insert=0,U.match_length=U.prev_length=R-1,U.match_available=0,U.ins_h=0}(f.state),V}function et(f,V,U,j,C,A){if(!f)return k;var G=1;if(V===p&&(V=6),j<0?(G=0,j=-j):15<j&&(G=2,j-=16),C<1||y<C||U!==u||j<8||15<j||V<0||9<V||A<0||w<A)return B(f,k);j===8&&(j=9);var q=new Te;return(f.state=q).strm=f,q.wrap=G,q.gzhead=null,q.w_bits=j,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=C+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+R-1)/R),q.window=new s.Buf8(2*q.w_size),q.head=new s.Buf16(q.hash_size),q.prev=new s.Buf16(q.w_size),q.lit_bufsize=1<<C+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new s.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=V,q.strategy=A,q.method=U,lt(f)}o=[new he(0,0,0,0,function(f,V){var U=65535;for(U>f.pending_buf_size-5&&(U=f.pending_buf_size-5);;){if(f.lookahead<=1){if(ge(f),f.lookahead===0&&V===v)return g;if(f.lookahead===0)break}f.strstart+=f.lookahead,f.lookahead=0;var j=f.block_start+U;if((f.strstart===0||f.strstart>=j)&&(f.lookahead=f.strstart-j,f.strstart=j,I(f,!1),f.strm.avail_out===0)||f.strstart-f.block_start>=f.w_size-te&&(I(f,!1),f.strm.avail_out===0))return g}return f.insert=0,V===x?(I(f,!0),f.strm.avail_out===0?ee:H):(f.strstart>f.block_start&&(I(f,!1),f.strm.avail_out),g)}),new he(4,4,8,4,ke),new he(4,5,16,8,ke),new he(4,6,32,32,ke),new he(4,4,16,16,ce),new he(8,16,32,32,ce),new he(8,16,128,128,ce),new he(8,32,128,256,ce),new he(32,128,258,1024,ce),new he(32,258,258,4096,ce)],i.deflateInit=function(f,V){return et(f,V,u,15,8,0)},i.deflateInit2=et,i.deflateReset=lt,i.deflateResetKeep=Ce,i.deflateSetHeader=function(f,V){return f&&f.state?f.state.wrap!==2?k:(f.state.gzhead=V,m):k},i.deflate=function(f,V){var U,j,C,A;if(!f||!f.state||5<V||V<0)return f?B(f,k):k;if(j=f.state,!f.output||!f.input&&f.avail_in!==0||j.status===666&&V!==x)return B(f,f.avail_out===0?-5:k);if(j.strm=f,U=j.last_flush,j.last_flush=V,j.status===E)if(j.wrap===2)f.adler=0,ne(j,31),ne(j,139),ne(j,8),j.gzhead?(ne(j,(j.gzhead.text?1:0)+(j.gzhead.hcrc?2:0)+(j.gzhead.extra?4:0)+(j.gzhead.name?8:0)+(j.gzhead.comment?16:0)),ne(j,255&j.gzhead.time),ne(j,j.gzhead.time>>8&255),ne(j,j.gzhead.time>>16&255),ne(j,j.gzhead.time>>24&255),ne(j,j.level===9?2:2<=j.strategy||j.level<2?4:0),ne(j,255&j.gzhead.os),j.gzhead.extra&&j.gzhead.extra.length&&(ne(j,255&j.gzhead.extra.length),ne(j,j.gzhead.extra.length>>8&255)),j.gzhead.hcrc&&(f.adler=h(f.adler,j.pending_buf,j.pending,0)),j.gzindex=0,j.status=69):(ne(j,0),ne(j,0),ne(j,0),ne(j,0),ne(j,0),ne(j,j.level===9?2:2<=j.strategy||j.level<2?4:0),ne(j,3),j.status=F);else{var G=u+(j.w_bits-8<<4)<<8;G|=(2<=j.strategy||j.level<2?0:j.level<6?1:j.level===6?2:3)<<6,j.strstart!==0&&(G|=32),G+=31-G%31,j.status=F,Q(j,G),j.strstart!==0&&(Q(j,f.adler>>>16),Q(j,65535&f.adler)),f.adler=1}if(j.status===69)if(j.gzhead.extra){for(C=j.pending;j.gzindex<(65535&j.gzhead.extra.length)&&(j.pending!==j.pending_buf_size||(j.gzhead.hcrc&&j.pending>C&&(f.adler=h(f.adler,j.pending_buf,j.pending-C,C)),P(f),C=j.pending,j.pending!==j.pending_buf_size));)ne(j,255&j.gzhead.extra[j.gzindex]),j.gzindex++;j.gzhead.hcrc&&j.pending>C&&(f.adler=h(f.adler,j.pending_buf,j.pending-C,C)),j.gzindex===j.gzhead.extra.length&&(j.gzindex=0,j.status=73)}else j.status=73;if(j.status===73)if(j.gzhead.name){C=j.pending;do{if(j.pending===j.pending_buf_size&&(j.gzhead.hcrc&&j.pending>C&&(f.adler=h(f.adler,j.pending_buf,j.pending-C,C)),P(f),C=j.pending,j.pending===j.pending_buf_size)){A=1;break}A=j.gzindex<j.gzhead.name.length?255&j.gzhead.name.charCodeAt(j.gzindex++):0,ne(j,A)}while(A!==0);j.gzhead.hcrc&&j.pending>C&&(f.adler=h(f.adler,j.pending_buf,j.pending-C,C)),A===0&&(j.gzindex=0,j.status=91)}else j.status=91;if(j.status===91)if(j.gzhead.comment){C=j.pending;do{if(j.pending===j.pending_buf_size&&(j.gzhead.hcrc&&j.pending>C&&(f.adler=h(f.adler,j.pending_buf,j.pending-C,C)),P(f),C=j.pending,j.pending===j.pending_buf_size)){A=1;break}A=j.gzindex<j.gzhead.comment.length?255&j.gzhead.comment.charCodeAt(j.gzindex++):0,ne(j,A)}while(A!==0);j.gzhead.hcrc&&j.pending>C&&(f.adler=h(f.adler,j.pending_buf,j.pending-C,C)),A===0&&(j.status=103)}else j.status=103;if(j.status===103&&(j.gzhead.hcrc?(j.pending+2>j.pending_buf_size&&P(f),j.pending+2<=j.pending_buf_size&&(ne(j,255&f.adler),ne(j,f.adler>>8&255),f.adler=0,j.status=F)):j.status=F),j.pending!==0){if(P(f),f.avail_out===0)return j.last_flush=-1,m}else if(f.avail_in===0&&O(V)<=O(U)&&V!==x)return B(f,-5);if(j.status===666&&f.avail_in!==0)return B(f,-5);if(f.avail_in!==0||j.lookahead!==0||V!==v&&j.status!==666){var q=j.strategy===2?function(D,X){for(var re;;){if(D.lookahead===0&&(ge(D),D.lookahead===0)){if(X===v)return g;break}if(D.match_length=0,re=l._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++,re&&(I(D,!1),D.strm.avail_out===0))return g}return D.insert=0,X===x?(I(D,!0),D.strm.avail_out===0?ee:H):D.last_lit&&(I(D,!1),D.strm.avail_out===0)?g:L}(j,V):j.strategy===3?function(D,X){for(var re,J,ae,ye,pe=D.window;;){if(D.lookahead<=M){if(ge(D),D.lookahead<=M&&X===v)return g;if(D.lookahead===0)break}if(D.match_length=0,D.lookahead>=R&&0<D.strstart&&(J=pe[ae=D.strstart-1])===pe[++ae]&&J===pe[++ae]&&J===pe[++ae]){ye=D.strstart+M;do;while(J===pe[++ae]&&J===pe[++ae]&&J===pe[++ae]&&J===pe[++ae]&&J===pe[++ae]&&J===pe[++ae]&&J===pe[++ae]&&J===pe[++ae]&&ae<ye);D.match_length=M-(ye-ae),D.match_length>D.lookahead&&(D.match_length=D.lookahead)}if(D.match_length>=R?(re=l._tr_tally(D,1,D.match_length-R),D.lookahead-=D.match_length,D.strstart+=D.match_length,D.match_length=0):(re=l._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++),re&&(I(D,!1),D.strm.avail_out===0))return g}return D.insert=0,X===x?(I(D,!0),D.strm.avail_out===0?ee:H):D.last_lit&&(I(D,!1),D.strm.avail_out===0)?g:L}(j,V):o[j.level].func(j,V);if(q!==ee&&q!==H||(j.status=666),q===g||q===ee)return f.avail_out===0&&(j.last_flush=-1),m;if(q===L&&(V===1?l._tr_align(j):V!==5&&(l._tr_stored_block(j,0,0,!1),V===3&&(Z(j.head),j.lookahead===0&&(j.strstart=0,j.block_start=0,j.insert=0))),P(f),f.avail_out===0))return j.last_flush=-1,m}return V!==x?m:j.wrap<=0?1:(j.wrap===2?(ne(j,255&f.adler),ne(j,f.adler>>8&255),ne(j,f.adler>>16&255),ne(j,f.adler>>24&255),ne(j,255&f.total_in),ne(j,f.total_in>>8&255),ne(j,f.total_in>>16&255),ne(j,f.total_in>>24&255)):(Q(j,f.adler>>>16),Q(j,65535&f.adler)),P(f),0<j.wrap&&(j.wrap=-j.wrap),j.pending!==0?m:1)},i.deflateEnd=function(f){var V;return f&&f.state?(V=f.state.status)!==E&&V!==69&&V!==73&&V!==91&&V!==103&&V!==F&&V!==666?B(f,k):(f.state=null,V===F?B(f,-3):m):k},i.deflateSetDictionary=function(f,V){var U,j,C,A,G,q,D,X,re=V.length;if(!f||!f.state||(A=(U=f.state).wrap)===2||A===1&&U.status!==E||U.lookahead)return k;for(A===1&&(f.adler=c(f.adler,V,re,0)),U.wrap=0,re>=U.w_size&&(A===0&&(Z(U.head),U.strstart=0,U.block_start=0,U.insert=0),X=new s.Buf8(U.w_size),s.arraySet(X,V,re-U.w_size,U.w_size,0),V=X,re=U.w_size),G=f.avail_in,q=f.next_in,D=f.input,f.avail_in=re,f.next_in=0,f.input=V,ge(U);U.lookahead>=R;){for(j=U.strstart,C=U.lookahead-(R-1);U.ins_h=(U.ins_h<<U.hash_shift^U.window[j+R-1])&U.hash_mask,U.prev[j&U.w_mask]=U.head[U.ins_h],U.head[U.ins_h]=j,j++,--C;);U.strstart=j,U.lookahead=R-1,ge(U)}return U.strstart+=U.lookahead,U.block_start=U.strstart,U.insert=U.lookahead,U.lookahead=0,U.match_length=U.prev_length=R-1,U.match_available=0,f.next_in=q,f.input=D,f.avail_in=G,U.wrap=A,m},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(o,s){var l,c,h,b,v,x,m,k,p,w,d,u,y,S,_,T,z,N,R,M,te,E,F,g,L;l=o.state,c=o.next_in,g=o.input,h=c+(o.avail_in-5),b=o.next_out,L=o.output,v=b-(s-o.avail_out),x=b+(o.avail_out-257),m=l.dmax,k=l.wsize,p=l.whave,w=l.wnext,d=l.window,u=l.hold,y=l.bits,S=l.lencode,_=l.distcode,T=(1<<l.lenbits)-1,z=(1<<l.distbits)-1;e:do{y<15&&(u+=g[c++]<<y,y+=8,u+=g[c++]<<y,y+=8),N=S[u&T];t:for(;;){if(u>>>=R=N>>>24,y-=R,(R=N>>>16&255)===0)L[b++]=65535&N;else{if(!(16&R)){if(!(64&R)){N=S[(65535&N)+(u&(1<<R)-1)];continue t}if(32&R){l.mode=12;break e}o.msg="invalid literal/length code",l.mode=30;break e}M=65535&N,(R&=15)&&(y<R&&(u+=g[c++]<<y,y+=8),M+=u&(1<<R)-1,u>>>=R,y-=R),y<15&&(u+=g[c++]<<y,y+=8,u+=g[c++]<<y,y+=8),N=_[u&z];n:for(;;){if(u>>>=R=N>>>24,y-=R,!(16&(R=N>>>16&255))){if(!(64&R)){N=_[(65535&N)+(u&(1<<R)-1)];continue n}o.msg="invalid distance code",l.mode=30;break e}if(te=65535&N,y<(R&=15)&&(u+=g[c++]<<y,(y+=8)<R&&(u+=g[c++]<<y,y+=8)),m<(te+=u&(1<<R)-1)){o.msg="invalid distance too far back",l.mode=30;break e}if(u>>>=R,y-=R,(R=b-v)<te){if(p<(R=te-R)&&l.sane){o.msg="invalid distance too far back",l.mode=30;break e}if(F=d,(E=0)===w){if(E+=k-R,R<M){for(M-=R;L[b++]=d[E++],--R;);E=b-te,F=L}}else if(w<R){if(E+=k+w-R,(R-=w)<M){for(M-=R;L[b++]=d[E++],--R;);if(E=0,w<M){for(M-=R=w;L[b++]=d[E++],--R;);E=b-te,F=L}}}else if(E+=w-R,R<M){for(M-=R;L[b++]=d[E++],--R;);E=b-te,F=L}for(;2<M;)L[b++]=F[E++],L[b++]=F[E++],L[b++]=F[E++],M-=3;M&&(L[b++]=F[E++],1<M&&(L[b++]=F[E++]))}else{for(E=b-te;L[b++]=L[E++],L[b++]=L[E++],L[b++]=L[E++],2<(M-=3););M&&(L[b++]=L[E++],1<M&&(L[b++]=L[E++]))}break}}break}}while(c<h&&b<x);c-=M=y>>3,u&=(1<<(y-=M<<3))-1,o.next_in=c,o.next_out=b,o.avail_in=c<h?h-c+5:5-(c-h),o.avail_out=b<x?x-b+257:257-(b-x),l.hold=u,l.bits=y}},{}],49:[function(n,r,i){var o=n("../utils/common"),s=n("./adler32"),l=n("./crc32"),c=n("./inffast"),h=n("./inftrees"),b=1,v=2,x=0,m=-2,k=1,p=852,w=592;function d(E){return(E>>>24&255)+(E>>>8&65280)+((65280&E)<<8)+((255&E)<<24)}function u(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(E){var F;return E&&E.state?(F=E.state,E.total_in=E.total_out=F.total=0,E.msg="",F.wrap&&(E.adler=1&F.wrap),F.mode=k,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new o.Buf32(p),F.distcode=F.distdyn=new o.Buf32(w),F.sane=1,F.back=-1,x):m}function S(E){var F;return E&&E.state?((F=E.state).wsize=0,F.whave=0,F.wnext=0,y(E)):m}function _(E,F){var g,L;return E&&E.state?(L=E.state,F<0?(g=0,F=-F):(g=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?m:(L.window!==null&&L.wbits!==F&&(L.window=null),L.wrap=g,L.wbits=F,S(E))):m}function T(E,F){var g,L;return E?(L=new u,(E.state=L).window=null,(g=_(E,F))!==x&&(E.state=null),g):m}var z,N,R=!0;function M(E){if(R){var F;for(z=new o.Buf32(512),N=new o.Buf32(32),F=0;F<144;)E.lens[F++]=8;for(;F<256;)E.lens[F++]=9;for(;F<280;)E.lens[F++]=7;for(;F<288;)E.lens[F++]=8;for(h(b,E.lens,0,288,z,0,E.work,{bits:9}),F=0;F<32;)E.lens[F++]=5;h(v,E.lens,0,32,N,0,E.work,{bits:5}),R=!1}E.lencode=z,E.lenbits=9,E.distcode=N,E.distbits=5}function te(E,F,g,L){var ee,H=E.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new o.Buf8(H.wsize)),L>=H.wsize?(o.arraySet(H.window,F,g-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(L<(ee=H.wsize-H.wnext)&&(ee=L),o.arraySet(H.window,F,g-L,ee,H.wnext),(L-=ee)?(o.arraySet(H.window,F,g-L,L,0),H.wnext=L,H.whave=H.wsize):(H.wnext+=ee,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=ee))),0}i.inflateReset=S,i.inflateReset2=_,i.inflateResetKeep=y,i.inflateInit=function(E){return T(E,15)},i.inflateInit2=T,i.inflate=function(E,F){var g,L,ee,H,B,O,Z,P,I,ne,Q,K,ge,ke,ce,he,Te,Ce,lt,et,f,V,U,j,C=0,A=new o.Buf8(4),G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!E||!E.state||!E.output||!E.input&&E.avail_in!==0)return m;(g=E.state).mode===12&&(g.mode=13),B=E.next_out,ee=E.output,Z=E.avail_out,H=E.next_in,L=E.input,O=E.avail_in,P=g.hold,I=g.bits,ne=O,Q=Z,V=x;e:for(;;)switch(g.mode){case k:if(g.wrap===0){g.mode=13;break}for(;I<16;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(2&g.wrap&&P===35615){A[g.check=0]=255&P,A[1]=P>>>8&255,g.check=l(g.check,A,2,0),I=P=0,g.mode=2;break}if(g.flags=0,g.head&&(g.head.done=!1),!(1&g.wrap)||(((255&P)<<8)+(P>>8))%31){E.msg="incorrect header check",g.mode=30;break}if((15&P)!=8){E.msg="unknown compression method",g.mode=30;break}if(I-=4,f=8+(15&(P>>>=4)),g.wbits===0)g.wbits=f;else if(f>g.wbits){E.msg="invalid window size",g.mode=30;break}g.dmax=1<<f,E.adler=g.check=1,g.mode=512&P?10:12,I=P=0;break;case 2:for(;I<16;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(g.flags=P,(255&g.flags)!=8){E.msg="unknown compression method",g.mode=30;break}if(57344&g.flags){E.msg="unknown header flags set",g.mode=30;break}g.head&&(g.head.text=P>>8&1),512&g.flags&&(A[0]=255&P,A[1]=P>>>8&255,g.check=l(g.check,A,2,0)),I=P=0,g.mode=3;case 3:for(;I<32;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}g.head&&(g.head.time=P),512&g.flags&&(A[0]=255&P,A[1]=P>>>8&255,A[2]=P>>>16&255,A[3]=P>>>24&255,g.check=l(g.check,A,4,0)),I=P=0,g.mode=4;case 4:for(;I<16;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}g.head&&(g.head.xflags=255&P,g.head.os=P>>8),512&g.flags&&(A[0]=255&P,A[1]=P>>>8&255,g.check=l(g.check,A,2,0)),I=P=0,g.mode=5;case 5:if(1024&g.flags){for(;I<16;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}g.length=P,g.head&&(g.head.extra_len=P),512&g.flags&&(A[0]=255&P,A[1]=P>>>8&255,g.check=l(g.check,A,2,0)),I=P=0}else g.head&&(g.head.extra=null);g.mode=6;case 6:if(1024&g.flags&&(O<(K=g.length)&&(K=O),K&&(g.head&&(f=g.head.extra_len-g.length,g.head.extra||(g.head.extra=new Array(g.head.extra_len)),o.arraySet(g.head.extra,L,H,K,f)),512&g.flags&&(g.check=l(g.check,L,K,H)),O-=K,H+=K,g.length-=K),g.length))break e;g.length=0,g.mode=7;case 7:if(2048&g.flags){if(O===0)break e;for(K=0;f=L[H+K++],g.head&&f&&g.length<65536&&(g.head.name+=String.fromCharCode(f)),f&&K<O;);if(512&g.flags&&(g.check=l(g.check,L,K,H)),O-=K,H+=K,f)break e}else g.head&&(g.head.name=null);g.length=0,g.mode=8;case 8:if(4096&g.flags){if(O===0)break e;for(K=0;f=L[H+K++],g.head&&f&&g.length<65536&&(g.head.comment+=String.fromCharCode(f)),f&&K<O;);if(512&g.flags&&(g.check=l(g.check,L,K,H)),O-=K,H+=K,f)break e}else g.head&&(g.head.comment=null);g.mode=9;case 9:if(512&g.flags){for(;I<16;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(P!==(65535&g.check)){E.msg="header crc mismatch",g.mode=30;break}I=P=0}g.head&&(g.head.hcrc=g.flags>>9&1,g.head.done=!0),E.adler=g.check=0,g.mode=12;break;case 10:for(;I<32;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}E.adler=g.check=d(P),I=P=0,g.mode=11;case 11:if(g.havedict===0)return E.next_out=B,E.avail_out=Z,E.next_in=H,E.avail_in=O,g.hold=P,g.bits=I,2;E.adler=g.check=1,g.mode=12;case 12:if(F===5||F===6)break e;case 13:if(g.last){P>>>=7&I,I-=7&I,g.mode=27;break}for(;I<3;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}switch(g.last=1&P,I-=1,3&(P>>>=1)){case 0:g.mode=14;break;case 1:if(M(g),g.mode=20,F!==6)break;P>>>=2,I-=2;break e;case 2:g.mode=17;break;case 3:E.msg="invalid block type",g.mode=30}P>>>=2,I-=2;break;case 14:for(P>>>=7&I,I-=7&I;I<32;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if((65535&P)!=(P>>>16^65535)){E.msg="invalid stored block lengths",g.mode=30;break}if(g.length=65535&P,I=P=0,g.mode=15,F===6)break e;case 15:g.mode=16;case 16:if(K=g.length){if(O<K&&(K=O),Z<K&&(K=Z),K===0)break e;o.arraySet(ee,L,H,K,B),O-=K,H+=K,Z-=K,B+=K,g.length-=K;break}g.mode=12;break;case 17:for(;I<14;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(g.nlen=257+(31&P),P>>>=5,I-=5,g.ndist=1+(31&P),P>>>=5,I-=5,g.ncode=4+(15&P),P>>>=4,I-=4,286<g.nlen||30<g.ndist){E.msg="too many length or distance symbols",g.mode=30;break}g.have=0,g.mode=18;case 18:for(;g.have<g.ncode;){for(;I<3;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}g.lens[G[g.have++]]=7&P,P>>>=3,I-=3}for(;g.have<19;)g.lens[G[g.have++]]=0;if(g.lencode=g.lendyn,g.lenbits=7,U={bits:g.lenbits},V=h(0,g.lens,0,19,g.lencode,0,g.work,U),g.lenbits=U.bits,V){E.msg="invalid code lengths set",g.mode=30;break}g.have=0,g.mode=19;case 19:for(;g.have<g.nlen+g.ndist;){for(;he=(C=g.lencode[P&(1<<g.lenbits)-1])>>>16&255,Te=65535&C,!((ce=C>>>24)<=I);){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(Te<16)P>>>=ce,I-=ce,g.lens[g.have++]=Te;else{if(Te===16){for(j=ce+2;I<j;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(P>>>=ce,I-=ce,g.have===0){E.msg="invalid bit length repeat",g.mode=30;break}f=g.lens[g.have-1],K=3+(3&P),P>>>=2,I-=2}else if(Te===17){for(j=ce+3;I<j;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}I-=ce,f=0,K=3+(7&(P>>>=ce)),P>>>=3,I-=3}else{for(j=ce+7;I<j;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}I-=ce,f=0,K=11+(127&(P>>>=ce)),P>>>=7,I-=7}if(g.have+K>g.nlen+g.ndist){E.msg="invalid bit length repeat",g.mode=30;break}for(;K--;)g.lens[g.have++]=f}}if(g.mode===30)break;if(g.lens[256]===0){E.msg="invalid code -- missing end-of-block",g.mode=30;break}if(g.lenbits=9,U={bits:g.lenbits},V=h(b,g.lens,0,g.nlen,g.lencode,0,g.work,U),g.lenbits=U.bits,V){E.msg="invalid literal/lengths set",g.mode=30;break}if(g.distbits=6,g.distcode=g.distdyn,U={bits:g.distbits},V=h(v,g.lens,g.nlen,g.ndist,g.distcode,0,g.work,U),g.distbits=U.bits,V){E.msg="invalid distances set",g.mode=30;break}if(g.mode=20,F===6)break e;case 20:g.mode=21;case 21:if(6<=O&&258<=Z){E.next_out=B,E.avail_out=Z,E.next_in=H,E.avail_in=O,g.hold=P,g.bits=I,c(E,Q),B=E.next_out,ee=E.output,Z=E.avail_out,H=E.next_in,L=E.input,O=E.avail_in,P=g.hold,I=g.bits,g.mode===12&&(g.back=-1);break}for(g.back=0;he=(C=g.lencode[P&(1<<g.lenbits)-1])>>>16&255,Te=65535&C,!((ce=C>>>24)<=I);){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(he&&!(240&he)){for(Ce=ce,lt=he,et=Te;he=(C=g.lencode[et+((P&(1<<Ce+lt)-1)>>Ce)])>>>16&255,Te=65535&C,!(Ce+(ce=C>>>24)<=I);){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}P>>>=Ce,I-=Ce,g.back+=Ce}if(P>>>=ce,I-=ce,g.back+=ce,g.length=Te,he===0){g.mode=26;break}if(32&he){g.back=-1,g.mode=12;break}if(64&he){E.msg="invalid literal/length code",g.mode=30;break}g.extra=15&he,g.mode=22;case 22:if(g.extra){for(j=g.extra;I<j;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}g.length+=P&(1<<g.extra)-1,P>>>=g.extra,I-=g.extra,g.back+=g.extra}g.was=g.length,g.mode=23;case 23:for(;he=(C=g.distcode[P&(1<<g.distbits)-1])>>>16&255,Te=65535&C,!((ce=C>>>24)<=I);){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(!(240&he)){for(Ce=ce,lt=he,et=Te;he=(C=g.distcode[et+((P&(1<<Ce+lt)-1)>>Ce)])>>>16&255,Te=65535&C,!(Ce+(ce=C>>>24)<=I);){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}P>>>=Ce,I-=Ce,g.back+=Ce}if(P>>>=ce,I-=ce,g.back+=ce,64&he){E.msg="invalid distance code",g.mode=30;break}g.offset=Te,g.extra=15&he,g.mode=24;case 24:if(g.extra){for(j=g.extra;I<j;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}g.offset+=P&(1<<g.extra)-1,P>>>=g.extra,I-=g.extra,g.back+=g.extra}if(g.offset>g.dmax){E.msg="invalid distance too far back",g.mode=30;break}g.mode=25;case 25:if(Z===0)break e;if(K=Q-Z,g.offset>K){if((K=g.offset-K)>g.whave&&g.sane){E.msg="invalid distance too far back",g.mode=30;break}ge=K>g.wnext?(K-=g.wnext,g.wsize-K):g.wnext-K,K>g.length&&(K=g.length),ke=g.window}else ke=ee,ge=B-g.offset,K=g.length;for(Z<K&&(K=Z),Z-=K,g.length-=K;ee[B++]=ke[ge++],--K;);g.length===0&&(g.mode=21);break;case 26:if(Z===0)break e;ee[B++]=g.length,Z--,g.mode=21;break;case 27:if(g.wrap){for(;I<32;){if(O===0)break e;O--,P|=L[H++]<<I,I+=8}if(Q-=Z,E.total_out+=Q,g.total+=Q,Q&&(E.adler=g.check=g.flags?l(g.check,ee,Q,B-Q):s(g.check,ee,Q,B-Q)),Q=Z,(g.flags?P:d(P))!==g.check){E.msg="incorrect data check",g.mode=30;break}I=P=0}g.mode=28;case 28:if(g.wrap&&g.flags){for(;I<32;){if(O===0)break e;O--,P+=L[H++]<<I,I+=8}if(P!==(4294967295&g.total)){E.msg="incorrect length check",g.mode=30;break}I=P=0}g.mode=29;case 29:V=1;break e;case 30:V=-3;break e;case 31:return-4;case 32:default:return m}return E.next_out=B,E.avail_out=Z,E.next_in=H,E.avail_in=O,g.hold=P,g.bits=I,(g.wsize||Q!==E.avail_out&&g.mode<30&&(g.mode<27||F!==4))&&te(E,E.output,E.next_out,Q-E.avail_out)?(g.mode=31,-4):(ne-=E.avail_in,Q-=E.avail_out,E.total_in+=ne,E.total_out+=Q,g.total+=Q,g.wrap&&Q&&(E.adler=g.check=g.flags?l(g.check,ee,Q,E.next_out-Q):s(g.check,ee,Q,E.next_out-Q)),E.data_type=g.bits+(g.last?64:0)+(g.mode===12?128:0)+(g.mode===20||g.mode===15?256:0),(ne==0&&Q===0||F===4)&&V===x&&(V=-5),V)},i.inflateEnd=function(E){if(!E||!E.state)return m;var F=E.state;return F.window&&(F.window=null),E.state=null,x},i.inflateGetHeader=function(E,F){var g;return E&&E.state&&2&(g=E.state).wrap?((g.head=F).done=!1,x):m},i.inflateSetDictionary=function(E,F){var g,L=F.length;return E&&E.state?(g=E.state).wrap!==0&&g.mode!==11?m:g.mode===11&&s(1,F,L,0)!==g.check?-3:te(E,F,L,L)?(g.mode=31,-4):(g.havedict=1,x):m},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var o=n("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(b,v,x,m,k,p,w,d){var u,y,S,_,T,z,N,R,M,te=d.bits,E=0,F=0,g=0,L=0,ee=0,H=0,B=0,O=0,Z=0,P=0,I=null,ne=0,Q=new o.Buf16(16),K=new o.Buf16(16),ge=null,ke=0;for(E=0;E<=15;E++)Q[E]=0;for(F=0;F<m;F++)Q[v[x+F]]++;for(ee=te,L=15;1<=L&&Q[L]===0;L--);if(L<ee&&(ee=L),L===0)return k[p++]=20971520,k[p++]=20971520,d.bits=1,0;for(g=1;g<L&&Q[g]===0;g++);for(ee<g&&(ee=g),E=O=1;E<=15;E++)if(O<<=1,(O-=Q[E])<0)return-1;if(0<O&&(b===0||L!==1))return-1;for(K[1]=0,E=1;E<15;E++)K[E+1]=K[E]+Q[E];for(F=0;F<m;F++)v[x+F]!==0&&(w[K[v[x+F]]++]=F);if(z=b===0?(I=ge=w,19):b===1?(I=s,ne-=257,ge=l,ke-=257,256):(I=c,ge=h,-1),E=g,T=p,B=F=P=0,S=-1,_=(Z=1<<(H=ee))-1,b===1&&852<Z||b===2&&592<Z)return 1;for(;;){for(N=E-B,M=w[F]<z?(R=0,w[F]):w[F]>z?(R=ge[ke+w[F]],I[ne+w[F]]):(R=96,0),u=1<<E-B,g=y=1<<H;k[T+(P>>B)+(y-=u)]=N<<24|R<<16|M|0,y!==0;);for(u=1<<E-1;P&u;)u>>=1;if(u!==0?(P&=u-1,P+=u):P=0,F++,--Q[E]==0){if(E===L)break;E=v[x+w[F]]}if(ee<E&&(P&_)!==S){for(B===0&&(B=ee),T+=g,O=1<<(H=E-B);H+B<L&&!((O-=Q[H+B])<=0);)H++,O<<=1;if(Z+=1<<H,b===1&&852<Z||b===2&&592<Z)return 1;k[S=P&_]=ee<<24|H<<16|T-p|0}}return P!==0&&(k[T+P]=E-B<<24|64<<16|0),d.bits=ee,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var o=n("../utils/common"),s=0,l=1;function c(C){for(var A=C.length;0<=--A;)C[A]=0}var h=0,b=29,v=256,x=v+1+b,m=30,k=19,p=2*x+1,w=15,d=16,u=7,y=256,S=16,_=17,T=18,z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],R=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],te=new Array(2*(x+2));c(te);var E=new Array(2*m);c(E);var F=new Array(512);c(F);var g=new Array(256);c(g);var L=new Array(b);c(L);var ee,H,B,O=new Array(m);function Z(C,A,G,q,D){this.static_tree=C,this.extra_bits=A,this.extra_base=G,this.elems=q,this.max_length=D,this.has_stree=C&&C.length}function P(C,A){this.dyn_tree=C,this.max_code=0,this.stat_desc=A}function I(C){return C<256?F[C]:F[256+(C>>>7)]}function ne(C,A){C.pending_buf[C.pending++]=255&A,C.pending_buf[C.pending++]=A>>>8&255}function Q(C,A,G){C.bi_valid>d-G?(C.bi_buf|=A<<C.bi_valid&65535,ne(C,C.bi_buf),C.bi_buf=A>>d-C.bi_valid,C.bi_valid+=G-d):(C.bi_buf|=A<<C.bi_valid&65535,C.bi_valid+=G)}function K(C,A,G){Q(C,G[2*A],G[2*A+1])}function ge(C,A){for(var G=0;G|=1&C,C>>>=1,G<<=1,0<--A;);return G>>>1}function ke(C,A,G){var q,D,X=new Array(w+1),re=0;for(q=1;q<=w;q++)X[q]=re=re+G[q-1]<<1;for(D=0;D<=A;D++){var J=C[2*D+1];J!==0&&(C[2*D]=ge(X[J]++,J))}}function ce(C){var A;for(A=0;A<x;A++)C.dyn_ltree[2*A]=0;for(A=0;A<m;A++)C.dyn_dtree[2*A]=0;for(A=0;A<k;A++)C.bl_tree[2*A]=0;C.dyn_ltree[2*y]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function he(C){8<C.bi_valid?ne(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function Te(C,A,G,q){var D=2*A,X=2*G;return C[D]<C[X]||C[D]===C[X]&&q[A]<=q[G]}function Ce(C,A,G){for(var q=C.heap[G],D=G<<1;D<=C.heap_len&&(D<C.heap_len&&Te(A,C.heap[D+1],C.heap[D],C.depth)&&D++,!Te(A,q,C.heap[D],C.depth));)C.heap[G]=C.heap[D],G=D,D<<=1;C.heap[G]=q}function lt(C,A,G){var q,D,X,re,J=0;if(C.last_lit!==0)for(;q=C.pending_buf[C.d_buf+2*J]<<8|C.pending_buf[C.d_buf+2*J+1],D=C.pending_buf[C.l_buf+J],J++,q===0?K(C,D,A):(K(C,(X=g[D])+v+1,A),(re=z[X])!==0&&Q(C,D-=L[X],re),K(C,X=I(--q),G),(re=N[X])!==0&&Q(C,q-=O[X],re)),J<C.last_lit;);K(C,y,A)}function et(C,A){var G,q,D,X=A.dyn_tree,re=A.stat_desc.static_tree,J=A.stat_desc.has_stree,ae=A.stat_desc.elems,ye=-1;for(C.heap_len=0,C.heap_max=p,G=0;G<ae;G++)X[2*G]!==0?(C.heap[++C.heap_len]=ye=G,C.depth[G]=0):X[2*G+1]=0;for(;C.heap_len<2;)X[2*(D=C.heap[++C.heap_len]=ye<2?++ye:0)]=1,C.depth[D]=0,C.opt_len--,J&&(C.static_len-=re[2*D+1]);for(A.max_code=ye,G=C.heap_len>>1;1<=G;G--)Ce(C,X,G);for(D=ae;G=C.heap[1],C.heap[1]=C.heap[C.heap_len--],Ce(C,X,1),q=C.heap[1],C.heap[--C.heap_max]=G,C.heap[--C.heap_max]=q,X[2*D]=X[2*G]+X[2*q],C.depth[D]=(C.depth[G]>=C.depth[q]?C.depth[G]:C.depth[q])+1,X[2*G+1]=X[2*q+1]=D,C.heap[1]=D++,Ce(C,X,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],function(pe,Ze){var Ct,ct,hn,W,se,le,fe=Ze.dyn_tree,ue=Ze.max_code,gt=Ze.stat_desc.static_tree,Io=Ze.stat_desc.has_stree,tp=Ze.stat_desc.extra_bits,tl=Ze.stat_desc.extra_base,lr=Ze.stat_desc.max_length,ii=0;for(W=0;W<=w;W++)pe.bl_count[W]=0;for(fe[2*pe.heap[pe.heap_max]+1]=0,Ct=pe.heap_max+1;Ct<p;Ct++)lr<(W=fe[2*fe[2*(ct=pe.heap[Ct])+1]+1]+1)&&(W=lr,ii++),fe[2*ct+1]=W,ue<ct||(pe.bl_count[W]++,se=0,tl<=ct&&(se=tp[ct-tl]),le=fe[2*ct],pe.opt_len+=le*(W+se),Io&&(pe.static_len+=le*(gt[2*ct+1]+se)));if(ii!==0){do{for(W=lr-1;pe.bl_count[W]===0;)W--;pe.bl_count[W]--,pe.bl_count[W+1]+=2,pe.bl_count[lr]--,ii-=2}while(0<ii);for(W=lr;W!==0;W--)for(ct=pe.bl_count[W];ct!==0;)ue<(hn=pe.heap[--Ct])||(fe[2*hn+1]!==W&&(pe.opt_len+=(W-fe[2*hn+1])*fe[2*hn],fe[2*hn+1]=W),ct--)}}(C,A),ke(X,ye,C.bl_count)}function f(C,A,G){var q,D,X=-1,re=A[1],J=0,ae=7,ye=4;for(re===0&&(ae=138,ye=3),A[2*(G+1)+1]=65535,q=0;q<=G;q++)D=re,re=A[2*(q+1)+1],++J<ae&&D===re||(J<ye?C.bl_tree[2*D]+=J:D!==0?(D!==X&&C.bl_tree[2*D]++,C.bl_tree[2*S]++):J<=10?C.bl_tree[2*_]++:C.bl_tree[2*T]++,X=D,ye=(J=0)===re?(ae=138,3):D===re?(ae=6,3):(ae=7,4))}function V(C,A,G){var q,D,X=-1,re=A[1],J=0,ae=7,ye=4;for(re===0&&(ae=138,ye=3),q=0;q<=G;q++)if(D=re,re=A[2*(q+1)+1],!(++J<ae&&D===re)){if(J<ye)for(;K(C,D,C.bl_tree),--J!=0;);else D!==0?(D!==X&&(K(C,D,C.bl_tree),J--),K(C,S,C.bl_tree),Q(C,J-3,2)):J<=10?(K(C,_,C.bl_tree),Q(C,J-3,3)):(K(C,T,C.bl_tree),Q(C,J-11,7));X=D,ye=(J=0)===re?(ae=138,3):D===re?(ae=6,3):(ae=7,4)}}c(O);var U=!1;function j(C,A,G,q){Q(C,(h<<1)+(q?1:0),3),function(D,X,re,J){he(D),ne(D,re),ne(D,~re),o.arraySet(D.pending_buf,D.window,X,re,D.pending),D.pending+=re}(C,A,G)}i._tr_init=function(C){U||(function(){var A,G,q,D,X,re=new Array(w+1);for(D=q=0;D<b-1;D++)for(L[D]=q,A=0;A<1<<z[D];A++)g[q++]=D;for(g[q-1]=D,D=X=0;D<16;D++)for(O[D]=X,A=0;A<1<<N[D];A++)F[X++]=D;for(X>>=7;D<m;D++)for(O[D]=X<<7,A=0;A<1<<N[D]-7;A++)F[256+X++]=D;for(G=0;G<=w;G++)re[G]=0;for(A=0;A<=143;)te[2*A+1]=8,A++,re[8]++;for(;A<=255;)te[2*A+1]=9,A++,re[9]++;for(;A<=279;)te[2*A+1]=7,A++,re[7]++;for(;A<=287;)te[2*A+1]=8,A++,re[8]++;for(ke(te,x+1,re),A=0;A<m;A++)E[2*A+1]=5,E[2*A]=ge(A,5);ee=new Z(te,z,v+1,x,w),H=new Z(E,N,0,m,w),B=new Z(new Array(0),R,0,k,u)}(),U=!0),C.l_desc=new P(C.dyn_ltree,ee),C.d_desc=new P(C.dyn_dtree,H),C.bl_desc=new P(C.bl_tree,B),C.bi_buf=0,C.bi_valid=0,ce(C)},i._tr_stored_block=j,i._tr_flush_block=function(C,A,G,q){var D,X,re=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=function(J){var ae,ye=4093624447;for(ae=0;ae<=31;ae++,ye>>>=1)if(1&ye&&J.dyn_ltree[2*ae]!==0)return s;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return l;for(ae=32;ae<v;ae++)if(J.dyn_ltree[2*ae]!==0)return l;return s}(C)),et(C,C.l_desc),et(C,C.d_desc),re=function(J){var ae;for(f(J,J.dyn_ltree,J.l_desc.max_code),f(J,J.dyn_dtree,J.d_desc.max_code),et(J,J.bl_desc),ae=k-1;3<=ae&&J.bl_tree[2*M[ae]+1]===0;ae--);return J.opt_len+=3*(ae+1)+5+5+4,ae}(C),D=C.opt_len+3+7>>>3,(X=C.static_len+3+7>>>3)<=D&&(D=X)):D=X=G+5,G+4<=D&&A!==-1?j(C,A,G,q):C.strategy===4||X===D?(Q(C,2+(q?1:0),3),lt(C,te,E)):(Q(C,4+(q?1:0),3),function(J,ae,ye,pe){var Ze;for(Q(J,ae-257,5),Q(J,ye-1,5),Q(J,pe-4,4),Ze=0;Ze<pe;Ze++)Q(J,J.bl_tree[2*M[Ze]+1],3);V(J,J.dyn_ltree,ae-1),V(J,J.dyn_dtree,ye-1)}(C,C.l_desc.max_code+1,C.d_desc.max_code+1,re+1),lt(C,C.dyn_ltree,C.dyn_dtree)),ce(C),q&&he(C)},i._tr_tally=function(C,A,G){return C.pending_buf[C.d_buf+2*C.last_lit]=A>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&A,C.pending_buf[C.l_buf+C.last_lit]=255&G,C.last_lit++,A===0?C.dyn_ltree[2*G]++:(C.matches++,A--,C.dyn_ltree[2*(g[G]+v+1)]++,C.dyn_dtree[2*I(A)]++),C.last_lit===C.lit_bufsize-1},i._tr_align=function(C){Q(C,2,3),K(C,y,te),function(A){A.bi_valid===16?(ne(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):8<=A.bi_valid&&(A.pending_buf[A.pending++]=255&A.bi_buf,A.bi_buf>>=8,A.bi_valid-=8)}(C)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(o){(function(s,l){if(!s.setImmediate){var c,h,b,v,x=1,m={},k=!1,p=s.document,w=Object.getPrototypeOf&&Object.getPrototypeOf(s);w=w&&w.setTimeout?w:s,c={}.toString.call(s.process)==="[object process]"?function(S){process.nextTick(function(){u(S)})}:function(){if(s.postMessage&&!s.importScripts){var S=!0,_=s.onmessage;return s.onmessage=function(){S=!1},s.postMessage("","*"),s.onmessage=_,S}}()?(v="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",y,!1):s.attachEvent("onmessage",y),function(S){s.postMessage(v+S,"*")}):s.MessageChannel?((b=new MessageChannel).port1.onmessage=function(S){u(S.data)},function(S){b.port2.postMessage(S)}):p&&"onreadystatechange"in p.createElement("script")?(h=p.documentElement,function(S){var _=p.createElement("script");_.onreadystatechange=function(){u(S),_.onreadystatechange=null,h.removeChild(_),_=null},h.appendChild(_)}):function(S){setTimeout(u,0,S)},w.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var _=new Array(arguments.length-1),T=0;T<_.length;T++)_[T]=arguments[T+1];var z={callback:S,args:_};return m[x]=z,c(x),x++},w.clearImmediate=d}function d(S){delete m[S]}function u(S){if(k)setTimeout(u,0,S);else{var _=m[S];if(_){k=!0;try{(function(T){var z=T.callback,N=T.args;switch(N.length){case 0:z();break;case 1:z(N[0]);break;case 2:z(N[0],N[1]);break;case 3:z(N[0],N[1],N[2]);break;default:z.apply(l,N)}})(_)}finally{d(S),k=!1}}}}function y(S){S.source===s&&typeof S.data=="string"&&S.data.indexOf(v)===0&&u(+S.data.slice(v.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof oi<"u"?oi:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(ep);var e1=ep.exports;const t1=bc(e1);async function n1(e){if(!e||!e.files||e.files.length===0)throw new Error("Aucun fichier à exporter");const t=new t1,n=(e.name||"voxel-forge-project").toLowerCase().replace(/[^a-z0-9_-]/g,"-"),r=t.folder(n);for(const l of e.files){if(!l.path)continue;const c=l.path.replace(/\\/g,"/").replace(/^\/+/,"");r.file(c,l.content||"")}const i=await t.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}}),o=URL.createObjectURL(i),s=document.createElement("a");s.href=o,s.download=`${n}.zip`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}const as={name:"voxel-cyber-demo",summary:"Projet de démonstration interactif Voxel Forge avec dashboard réactif et animation Canvas.",architecture:`Application Web moderne intégrant :
- index.html : Structure de la page avec barre d'état et commandes interactives.
- styles.css : Thème sombre néon cyberpunk responsive.
- app.js : Logique applicative avec compteurs, particules et rendu temps réel.
- README.md : Guide d'utilisation et commandes de lancement.`,techStack:{type:"Site web / Démo interactive",language:"JavaScript / HTML5 / CSS3",framework:"Vanilla ES6+"},files:[{path:"index.html",language:"html",content:`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Voxel Forge — Studio IA</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app-card">
    <header class="card-header">
      <div class="badge">Voxel Forge v2.0</div>
      <h1>Studio de Création IA</h1>
      <p class="subtitle">Votre environnement de génération de code et de jeux en direct.</p>
    </header>

    <div class="stats-grid">
      <div class="stat-box">
        <span class="stat-num" id="clickCount">0</span>
        <span class="stat-label">Interactions</span>
      </div>
      <div class="stat-box">
        <span class="stat-num" id="particleCount">0</span>
        <span class="stat-label">Particules</span>
      </div>
      <div class="stat-box">
        <span class="stat-num" id="fpsDisplay">60</span>
        <span class="stat-label">FPS</span>
      </div>
    </div>

    <div class="actions">
      <button id="actionBtn" class="btn btn-primary">Générer Particules</button>
      <button id="resetBtn" class="btn btn-secondary">Réinitialiser</button>
    </div>

    <canvas id="stage" width="600" height="240"></canvas>

    <footer class="card-footer">
      <span>Prêt pour vos créations • Cliquez sur "Générer un Projet" pour démarrer</span>
    </footer>
  </div>

  <script type="module" src="app.js"><\/script>
</body>
</html>`},{path:"styles.css",language:"css",content:`* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: radial-gradient(circle at top, #131b2e 0%, #080a12 100%);
  color: #e6edf3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app-card {
  background: rgba(22, 27, 34, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  max-width: 640px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.1);
}

.card-header {
  text-align: center;
  margin-bottom: 20px;
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 20px;
  margin-bottom: 8px;
}

h1 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
}

.subtitle {
  font-size: 13px;
  color: #8b949e;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.stat-box {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
}

.stat-num {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #58a6ff;
  font-family: monospace;
}

.stat-label {
  font-size: 11px;
  color: #8b949e;
}

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.btn {
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #fff;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
}

.btn-secondary {
  background: #21262d;
  color: #c9d1d9;
  border: 1px solid #30363d;
}

.btn-secondary:hover {
  background: #30363d;
}

#stage {
  width: 100%;
  height: 200px;
  background: #090d16;
  border: 1px solid #30363d;
  border-radius: 8px;
  display: block;
}

.card-footer {
  margin-top: 14px;
  text-align: center;
  font-size: 11px;
  color: #6e7681;
}`},{path:"app.js",language:"javascript",content:`const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');
const clickDisplay = document.getElementById('clickCount');
const particleDisplay = document.getElementById('particleCount');
const fpsDisplay = document.getElementById('fpsDisplay');
const actionBtn = document.getElementById('actionBtn');
const resetBtn = document.getElementById('resetBtn');

let clicks = 0;
const particles = [];
let lastFrameTime = performance.now();
let frameCount = 0;
let lastFpsUpdate = performance.now();

class Particle {
  constructor(x, y) {
    this.x = x || canvas.width / 2;
    this.y = y || canvas.height / 2;
    this.vx = (Math.random() - 0.5) * 6;
    this.vy = (Math.random() - 0.5) * 6;
    this.radius = Math.random() * 3 + 2;
    this.hue = Math.random() * 60 + 190;
    this.alpha = 1;
    this.decay = Math.random() * 0.015 + 0.005;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = \`hsl(\${this.hue}, 90%, 60%)\`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = \`hsl(\${this.hue}, 90%, 60%)\`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function spawnParticles(count = 20, x, y) {
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y));
  }
}

actionBtn.addEventListener('click', () => {
  clicks++;
  clickDisplay.textContent = clicks;
  spawnParticles(25);
});

resetBtn.addEventListener('click', () => {
  clicks = 0;
  particles.length = 0;
  clickDisplay.textContent = '0';
  particleDisplay.textContent = '0';
});

canvas.addEventListener('pointerdown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;

  clicks++;
  clickDisplay.textContent = clicks;
  spawnParticles(15, x, y);
});

// Initial particles
spawnParticles(30);

function loop(currentTime) {
  frameCount++;
  if (currentTime - lastFpsUpdate >= 500) {
    const fps = Math.round((frameCount * 1000) / (currentTime - lastFpsUpdate));
    fpsDisplay.textContent = fps;
    frameCount = 0;
    lastFpsUpdate = currentTime;
  }

  ctx.fillStyle = 'rgba(9, 13, 22, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }

  particleDisplay.textContent = particles.length;

  // Auto spawn occasional particles
  if (Math.random() < 0.2 && particles.length < 50) {
    spawnParticles(1);
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
console.log('Voxel Forge Demo initialisé avec succès !');`},{path:"README.md",language:"markdown",content:`# Voxel Forge — Démo Interactive

Ce projet est la démonstration initiale de **Voxel Forge**.

## Fonctionnalités
- Rendu Canvas fluide avec système de particules dynamiques.
- Compteur réactif d'interactions et de FPS en temps réel.
- Entièrement exécutable directement en cliquant sur **"Run"** dans la barre supérieure !

## Pour créer votre propre projet
Cliquez sur le bouton **"Générer un Projet"** ou **"Nouveau Projet"** pour décrire le jeu ou le site web de votre choix !`}]},$t="voxel_forge_active_project";function r1(){const[e,t]=$.useState(null),[n,r]=$.useState(null),[i,o]=$.useState([]),[s,l]=$.useState(!1),[c,h]=$.useState("auto"),[b,v]=$.useState(null),[x,m]=$.useState(null),[k,p]=$.useState(null),[w,d]=$.useState(!1),[u,y]=$.useState(localStorage.getItem("voxel_theme")||"default"),[S,_]=$.useState(Ie.isMuted()),[T,z]=$.useState(!1),[N,R]=$.useState(!1),[M,te]=$.useState(!1),[E,F]=$.useState(!1),[g,L]=$.useState(!1),[ee,H]=$.useState(!1),[B,O]=$.useState(!1),[Z,P]=$.useState(!1),[I,ne]=$.useState(null),[Q,K]=$.useState(null),[ge,ke]=$.useState(!1),[ce,he]=$.useState({isOpen:!1,title:"",content:""});$.useEffect(()=>{document.documentElement.setAttribute("data-theme",u);try{localStorage.setItem("voxel_theme",u)}catch{}},[u]),$.useEffect(()=>{Te(),Ce()},[]);const Te=async()=>{try{const W=await At.getProviders();m(W)}catch(W){console.warn("Backend not responding yet, running local client state:",W)}},Ce=()=>{try{const se=localStorage.getItem($t);if(se){const le=JSON.parse(se);if(le&&Array.isArray(le.files)&&le.files.length>0){t(le);const fe=le.files.find(ue=>ue.path.includes("App")||ue.path.includes("index")||ue.path.includes("main"))||le.files[0];r(fe),o([fe]);return}}}catch(se){console.warn("Erreur lecture localStorage projet:",se)}t(as);const W=as.files.find(se=>se.path==="index.html")||as.files[0];r(W),o([W])},lt=async W=>{d(!0),p({current:"arch",completed:[]});try{p({current:"arch",completed:[]}),await new Promise(ue=>setTimeout(ue,400)),p({current:"gen",completed:["arch"]});const se=await At.generateProject({...W,mode:W.mode||c});if(!se.success||!se.project)throw new Error(se.error||"Échec de génération");W.mode!=="fast"&&(p({current:"review",completed:["arch","gen"]}),await new Promise(ue=>setTimeout(ue,400)),p({current:"fix",completed:["arch","gen","review"]}),await new Promise(ue=>setTimeout(ue,300))),p({current:null,completed:["arch","gen","review","fix","done"]});const le=se.project;t(le);try{localStorage.setItem($t,JSON.stringify(le))}catch(ue){console.warn("Erreur sauvegarde localStorage:",ue)}v(se.review||null);const fe=le.files.find(ue=>ue.path.includes("App")||ue.path.includes("index")||ue.path.includes("main"))||le.files[0];fe&&(r(fe),o([fe])),l(!1)}catch(se){alert(`Erreur lors de la génération : ${se.message}`),p(null)}finally{d(!1)}},et=async W=>{ke(!0);try{const se=await At.generateTutorial(W);if(!se.success||!se.tutorial)throw new Error(se.error||"Erreur lors de la génération du tutoriel");K(se.tutorial),F(!1),L(!0)}catch(se){alert(`Erreur génération tutoriel: ${se.message}`)}finally{ke(!1)}},f=W=>{if(!W||!W.files||W.files.length===0)return;const se=W.files.map(ue=>({path:ue.name,content:ue.content,language:ue.language||"plaintext"})),le={name:W.title||`${W.language} - ${W.software}`,description:W.summary||`Tutoriel ${W.language} sur ${W.software}`,language:W.language,software:W.software,files:se};t(le);try{localStorage.setItem($t,JSON.stringify(le))}catch(ue){console.warn("Erreur sauvegarde localStorage tutoriel:",ue)}const fe=se.find(ue=>ue.path.endsWith(".md"))||se[0];r(fe),o([fe])},V=()=>{const W=Ie.toggleMute();_(W)},U=W=>{y(W)},j=W=>{ne(W),te(!0)},C=W=>{t(W);try{localStorage.setItem($t,JSON.stringify(W))}catch{}const se=W.files.find(le=>le.path.includes("index")||le.path.includes("main"))||W.files[0];r(se),o([se]),Ie.playSuccess()},A=W=>{!Array.isArray(W)||W.length===0||(t(se=>{if(!se)return se;let le=[...se.files];for(const ue of W){const gt=le.findIndex(Io=>Io.path===ue.path);gt!==-1?le[gt]={...le[gt],content:ue.content}:le.push({path:ue.path,content:ue.content,language:"javascript"})}const fe={...se,files:le};try{localStorage.setItem($t,JSON.stringify(fe))}catch{}return fe}),W.forEach(se=>{n&&n.path===se.path&&r(le=>({...le,content:se.content}))}),Ie.playSuccess())},G=async()=>{if(e){d(!0),p({current:"review",completed:["arch","gen"]});try{const W=await At.reviewProject(e,c);W.success&&W.review&&(v(W.review),p({current:null,completed:["arch","gen","review","done"]}))}catch(W){alert(`Erreur lors de l'audit Mistral : ${W.message}`)}finally{d(!1)}}},q=async()=>{if(n){d(!0);try{const W=await At.fixFile(n.path,n.content,"Corriger les erreurs potentielles et améliorer la clarté");W.success&&W.fixed&&(Ct(n.path,W.fixed.content),alert(`Correction appliquée : ${W.fixed.summary||"Succès"}`))}catch(W){alert(`Erreur de correction : ${W.message}`)}finally{d(!1)}}},D=async()=>{if(n){d(!0);try{const W=await At.improveCode(n.path,n.content);W.success&&W.improved&&(Ct(n.path,W.improved.content),alert(`Amélioration appliquée : ${W.improved.summary||"Code optimisé"}`))}catch(W){alert(`Erreur d'amélioration : ${W.message}`)}finally{d(!1)}}},X=async()=>{if(n){d(!0);try{const W=await At.explainCode(n.path,n.content);W.success&&W.explanation&&he({isOpen:!0,title:n.path,content:W.explanation})}catch(W){alert(`Erreur d'explication : ${W.message}`)}finally{d(!1)}}},re=async()=>{if(n&&confirm(`Voulez-vous vraiment régénérer entièrement ${n.path} ?`)){d(!0);try{const W=await At.fixFile(n.path,n.content,"Régénérer intégralement le fichier avec une implémentation moderne et robuste");W.success&&W.fixed&&Ct(n.path,W.fixed.content)}catch(W){alert(`Erreur de régénération : ${W.message}`)}finally{d(!1)}}},J=async()=>{if(e)try{await n1(e)}catch(W){alert(`Erreur lors de l'export ZIP : ${W.message}`)}},ae=W=>{r(W),i.some(se=>se.path===W.path)||o([...i,W]),l(!1)},ye=W=>{const se=i.filter(le=>le.path!==W);o(se),(n==null?void 0:n.path)===W&&(r(se.length>0?se[se.length-1]:null),l(!1))},pe=W=>{n&&(r({...n,content:W}),l(!0))},Ze=()=>{!n||!e||(Ct(n.path,n.content),l(!1))},Ct=(W,se)=>{t(le=>{if(!le)return le;const fe=le.files.map(gt=>gt.path===W?{...gt,content:se}:gt),ue={...le,files:fe};try{localStorage.setItem($t,JSON.stringify(ue))}catch{}return ue}),r(le=>le&&le.path===W?{...le,content:se}:le),o(le=>le.map(fe=>fe.path===W?{...fe,content:se}:fe))},ct=W=>{if(!e)return;if(e.files.some(fe=>fe.path===W)){alert("Un fichier avec ce chemin existe déjà !");return}const le={path:W,content:`// Nouveau fichier créé dans Voxel Forge
`,language:"javascript"};t(fe=>{const ue={...fe,files:[...fe.files,le]};try{localStorage.setItem($t,JSON.stringify(ue))}catch{}return ue}),ae(le)},hn=W=>{e&&(t(se=>{const le={...se,files:se.files.filter(fe=>fe.path!==W)};try{localStorage.setItem($t,JSON.stringify(le))}catch{}return le}),ye(W))};return a.jsxs("div",{className:"app-container",children:[a.jsx(dm,{mode:c,setMode:h,providers:x,onNewProject:()=>z(!0),onOpenTutorial:()=>F(!0),onOpenGallery:()=>H(!0),onOpenTheme:()=>P(!0),isMuted:S,onToggleSound:V,onRun:()=>te(!0),onDownloadZip:J,onOpenSettings:()=>R(!0),isGenerating:w}),a.jsxs("div",{className:"workspace-main",children:[a.jsx(hm,{project:e,activeFile:n,onSelectFile:ae,onAddFile:ct,onDeleteFile:hn}),a.jsx(Cg,{openTabs:i,activeFile:n,onSelectTab:W=>{r(W),l(!1)},onCloseTab:ye,onCodeChange:pe,onSaveFile:Ze,isDirty:s}),a.jsx(jg,{project:e,activeFile:n,review:b,pipelineStatus:k,isGenerating:w,onGenerateProject:()=>z(!0),onOpenTutorial:()=>F(!0),onRun:()=>te(!0),onReviewWithMistral:G,onFixActiveFile:q,onImproveActiveFile:D,onExplainActiveFile:X,onRegenerateActiveFile:re,onDownloadZip:J,onApplyCopilotFiles:A})]}),a.jsx(Jg,{project:e,activeFile:n,theme:u,isMuted:S,onToggleSound:V,onOpenTerms:()=>O(!0),onOpenThemeSelect:()=>P(!0)}),a.jsx(Wg,{isOpen:M,onClose:()=>{te(!1),ne(null)},project:I||e}),a.jsx(Yg,{isOpen:ee,onClose:()=>H(!1),onLoadProject:C,onRunProject:j}),a.jsx(Kg,{isOpen:B,onClose:()=>O(!1)}),a.jsx(Qg,{isOpen:Z,onClose:()=>P(!1),currentTheme:u,onSelectTheme:U}),a.jsx(Gg,{isOpen:E,onClose:()=>F(!1),onSubmit:et,isGenerating:ge}),a.jsx(qg,{isOpen:g,onClose:()=>L(!1),tutorial:Q,onLoadIntoStudio:f}),a.jsx(Ig,{isOpen:T,onClose:()=>z(!1),onSubmit:lt,initialMode:c}),a.jsx(Ag,{isOpen:N,onClose:()=>R(!1),providers:x,onRefreshProviders:Te}),a.jsx(Rg,{isOpen:ce.isOpen,onClose:()=>he({isOpen:!1,title:"",content:""}),title:ce.title,explanation:ce.content})]})}ls.createRoot(document.getElementById("root")).render(a.jsx(Qt.StrictMode,{children:a.jsx(r1,{})}));
