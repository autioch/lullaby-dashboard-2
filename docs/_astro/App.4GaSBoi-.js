import{r as $o,g as Mu,R as Fu,a as de}from"./index.CL6X04yg.js";/* empty css                       */var Sr={exports:{}},$e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi;function Uu(){if(Oi)return $e;Oi=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(r,i,o){var u=null;if(o!==void 0&&(u=""+o),i.key!==void 0&&(u=""+i.key),"key"in i){o={};for(var c in i)c!=="key"&&(o[c]=i[c])}else o=i;return i=o.ref,{$$typeof:n,type:r,key:u,ref:i!==void 0?i:null,props:o}}return $e.Fragment=t,$e.jsx=e,$e.jsxs=e,$e}var Li;function Bu(){return Li||(Li=1,Sr.exports=Uu()),Sr.exports}var x=Bu();function ju({failureInfo:n}){return x.jsx("div",{className:"loader loader--error",children:x.jsxs("div",{className:"loader__panel",children:[x.jsx("h1",{className:"loader__heading",children:"Unable to load the dashboard"}),x.jsx("p",{className:"loader__message",children:"The application could not complete startup. Please refresh the page and try again."}),x.jsxs("div",{className:"loader__error",children:[x.jsx("strong",{children:"Error during:"})," ",n.step,x.jsx("br",{}),x.jsx("strong",{children:"Message:"})," ",n.message]}),x.jsxs("div",{className:"loader__debug",children:[x.jsx("strong",{children:"Debug details"}),x.jsx("pre",{children:`step: ${n.step}
message: ${n.message}
stack:
${n.stack??"(no stack available)"}`})]})]})})}const qu={},Mi=n=>{let t;const e=new Set,r=(_,w)=>{const R=typeof _=="function"?_(t):_;if(!Object.is(R,t)){const C=t;t=w??(typeof R!="object"||R===null)?R:Object.assign({},t,R),e.forEach(V=>V(t,C))}},i=()=>t,d={setState:r,getState:i,getInitialState:()=>f,subscribe:_=>(e.add(_),()=>e.delete(_)),destroy:()=>{(qu?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),e.clear()}},f=t=n(r,i,d);return d},$u=n=>n?Mi(n):Mi;var Cr={exports:{}},Pr={},br={exports:{}},Vr={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi;function zu(){if(Fi)return Vr;Fi=1;var n=$o();function t(w,R){return w===R&&(w!==0||1/w===1/R)||w!==w&&R!==R}var e=typeof Object.is=="function"?Object.is:t,r=n.useState,i=n.useEffect,o=n.useLayoutEffect,u=n.useDebugValue;function c(w,R){var C=R(),V=r({inst:{value:C,getSnapshot:R}}),k=V[0].inst,D=V[1];return o(function(){k.value=C,k.getSnapshot=R,d(k)&&D({inst:k})},[w,C,R]),i(function(){return d(k)&&D({inst:k}),w(function(){d(k)&&D({inst:k})})},[w]),u(C),C}function d(w){var R=w.getSnapshot;w=w.value;try{var C=R();return!e(w,C)}catch{return!0}}function f(w,R){return R()}var _=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:c;return Vr.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:_,Vr}var Ui;function Ku(){return Ui||(Ui=1,br.exports=zu()),br.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bi;function Gu(){if(Bi)return Pr;Bi=1;var n=$o(),t=Ku();function e(f,_){return f===_&&(f!==0||1/f===1/_)||f!==f&&_!==_}var r=typeof Object.is=="function"?Object.is:e,i=t.useSyncExternalStore,o=n.useRef,u=n.useEffect,c=n.useMemo,d=n.useDebugValue;return Pr.useSyncExternalStoreWithSelector=function(f,_,w,R,C){var V=o(null);if(V.current===null){var k={hasValue:!1,value:null};V.current=k}else k=V.current;V=c(function(){function Y(G){if(!Q){if(Q=!0,K=G,G=R(G),C!==void 0&&k.hasValue){var E=k.value;if(C(E,G))return X=E}return X=G}if(E=X,r(K,G))return E;var p=R(G);return C!==void 0&&C(E,p)?(K=G,E):(K=G,X=p)}var Q=!1,K,X,It=w===void 0?null:w;return[function(){return Y(_())},It===null?void 0:function(){return Y(It())}]},[_,w,R,C]);var D=i(f,V[0],V[1]);return u(function(){k.hasValue=!0,k.value=D},[D]),d(D),D},Pr}var ji;function Hu(){return ji||(ji=1,Cr.exports=Gu()),Cr.exports}var Qu=Hu();const Wu=Mu(Qu),zo={},{useDebugValue:Yu}=Fu,{useSyncExternalStoreWithSelector:Xu}=Wu;let qi=!1;const Ju=n=>n;function Zu(n,t=Ju,e){(zo?"production":void 0)!=="production"&&e&&!qi&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),qi=!0);const r=Xu(n.subscribe,n.getState,n.getServerState||n.getInitialState,t,e);return Yu(r),r}const $i=n=>{(zo?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof n=="function"?$u(n):n,e=(r,i)=>Zu(t,r,i);return Object.assign(e,t),e},Ko=n=>n?$i(n):$i;var zi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},tl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],c=n[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,c=u?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,w=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,C=f&63;d||(C=64,u||(R=64)),r.push(e[_],e[w],e[R],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Go(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):tl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||w==null)throw new el;const R=o<<2|c>>4;if(r.push(R),f!==64){const C=c<<4&240|f>>2;if(r.push(C),w!==64){const V=f<<6&192|w;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class el extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nl=function(n){const t=Go(n);return Ho.encodeByteArray(t,!0)},Fn=function(n){return nl(n).replace(/\./g,"")},rl=function(n){try{return Ho.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=()=>sl().__FIREBASE_DEFAULTS__,ol=()=>{if(typeof process>"u"||typeof zi>"u")return;const n=zi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},al=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&rl(n[1]);return t&&JSON.parse(t)},us=()=>{try{return il()||ol()||al()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ul=n=>{var t,e;return(e=(t=us())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ll=n=>{const t=ul(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Qo=()=>{var n;return(n=us())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fn(JSON.stringify(e)),Fn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fl(){var n;const t=(n=us())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pl(){return!fl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function gl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="FirebaseError";class Ie extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=_l,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo.prototype.create)}}class Wo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?yl(o,r):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new Ie(i,c,r)}}function yl(n,t){return n.replace(El,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const El=/\{\$([^}]+)}/g;function Br(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(Ki(o)&&Ki(u)){if(!Br(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ki(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new cl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wl(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Il(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Il(n){return n===Yt?void 0:n}function wl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Tl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Rl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Sl=j.INFO,Cl={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Pl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Cl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yo{constructor(t){this.name=t,this._logLevel=Sl,this._logHandler=Pl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const bl=(n,t)=>t.some(e=>n instanceof e);let Gi,Hi;function Vl(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dl(){return Hi||(Hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xo=new WeakMap,jr=new WeakMap,Jo=new WeakMap,Dr=new WeakMap,ls=new WeakMap;function Nl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(jt(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Xo.set(e,n)}).catch(()=>{}),ls.set(t,n),t}function kl(n){if(jr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});jr.set(n,t)}let qr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return jr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Jo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function xl(n){qr=n(qr)}function Ol(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Nr(this),t,...e);return Jo.set(r,t.sort?t.sort():[t]),jt(r)}:Dl().includes(n)?function(...t){return n.apply(Nr(this),t),jt(Xo.get(this))}:function(...t){return jt(n.apply(Nr(this),t))}}function Ll(n){return typeof n=="function"?Ol(n):(n instanceof IDBTransaction&&kl(n),bl(n,Vl())?new Proxy(n,qr):n)}function jt(n){if(n instanceof IDBRequest)return Nl(n);if(Dr.has(n))return Dr.get(n);const t=Ll(n);return t!==n&&(Dr.set(n,t),ls.set(t,n)),t}const Nr=n=>ls.get(n);function Ml(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),c=jt(u);return r&&u.addEventListener("upgradeneeded",d=>{r(jt(u.result),d.oldVersion,d.newVersion,jt(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Fl=["get","getKey","getAll","getAllKeys","count"],Ul=["put","add","delete","clear"],kr=new Map;function Qi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Ul.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fl.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&d.done]))[0]};return kr.set(t,o),o}xl(n=>({...n,get:(t,e,r)=>Qi(t,e)||n.get(t,e,r),has:(t,e)=>!!Qi(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(jl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function jl(n){const t=n.getComponent();return t?.type==="VERSION"}const $r="@firebase/app",Wi="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Yo("@firebase/app"),ql="@firebase/app-compat",$l="@firebase/analytics-compat",zl="@firebase/analytics",Kl="@firebase/app-check-compat",Gl="@firebase/app-check",Hl="@firebase/auth",Ql="@firebase/auth-compat",Wl="@firebase/database",Yl="@firebase/data-connect",Xl="@firebase/database-compat",Jl="@firebase/functions",Zl="@firebase/functions-compat",tc="@firebase/installations",ec="@firebase/installations-compat",nc="@firebase/messaging",rc="@firebase/messaging-compat",sc="@firebase/performance",ic="@firebase/performance-compat",oc="@firebase/remote-config",ac="@firebase/remote-config-compat",uc="@firebase/storage",lc="@firebase/storage-compat",cc="@firebase/firestore",hc="@firebase/vertexai-preview",dc="@firebase/firestore-compat",fc="firebase",pc="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]",mc={[$r]:"fire-core",[ql]:"fire-core-compat",[zl]:"fire-analytics",[$l]:"fire-analytics-compat",[Gl]:"fire-app-check",[Kl]:"fire-app-check-compat",[Hl]:"fire-auth",[Ql]:"fire-auth-compat",[Wl]:"fire-rtdb",[Yl]:"fire-data-connect",[Xl]:"fire-rtdb-compat",[Jl]:"fire-fn",[Zl]:"fire-fn-compat",[tc]:"fire-iid",[ec]:"fire-iid-compat",[nc]:"fire-fcm",[rc]:"fire-fcm-compat",[sc]:"fire-perf",[ic]:"fire-perf-compat",[oc]:"fire-rc",[ac]:"fire-rc-compat",[uc]:"fire-gcs",[lc]:"fire-gcs-compat",[cc]:"fire-fst",[dc]:"fire-fst-compat",[hc]:"fire-vertex","fire-js":"fire-js",[fc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Map,gc=new Map,Kr=new Map;function Yi(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Un(n){const t=n.name;if(Kr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Kr.set(t,n);for(const e of tn.values())Yi(e,n);for(const e of gc.values())Yi(e,n);return!0}function _c(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Wo("app","Firebase",yc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=pc;function Zo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(e||(e=Qo()),!e)throw qt.create("no-options");const o=tn.get(i);if(o){if(Br(e,o.options)&&Br(r,o.config))return o;throw qt.create("duplicate-app",{appName:i})}const u=new Al(i);for(const d of Kr.values())u.addComponent(d);const c=new Ec(e,r,u);return tn.set(i,c),c}function Tc(n=zr){const t=tn.get(n);if(!t&&n===zr&&Qo())return Zo();if(!t)throw qt.create("no-app",{appName:n});return t}function Ic(){return Array.from(tn.values())}function fe(n,t,e){var r;let i=(r=mc[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}Un(new Ze(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="firebase-heartbeat-database",Ac=1,en="firebase-heartbeat-store";let xr=null;function ta(){return xr||(xr=Ml(wc,Ac,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(en)}catch(e){console.warn(e)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),xr}async function Rc(n){try{const e=(await ta()).transaction(en),r=await e.objectStore(en).get(ea(n));return await e.done,r}catch(t){if(t instanceof Ie)kt.warn(t.message);else{const e=qt.create("idb-get",{originalErrorMessage:t?.message});kt.warn(e.message)}}}async function Xi(n,t){try{const r=(await ta()).transaction(en,"readwrite");await r.objectStore(en).put(t,ea(n)),await r.done}catch(e){if(e instanceof Ie)kt.warn(e.message);else{const r=qt.create("idb-set",{originalErrorMessage:e?.message});kt.warn(r.message)}}}function ea(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=1024,Cc=720*60*60*1e3;class Pc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Vc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ji();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Cc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ji(),{heartbeatsToSend:r,unsentEntries:i}=bc(this._heartbeatsCache.heartbeats),o=Fn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function Ji(){return new Date().toISOString().substring(0,10)}function bc(n,t=Sc){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Zi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Zi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Vc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?gl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Rc(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Zi(n){return Fn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n){Un(new Ze("platform-logger",t=>new Bl(t),"PRIVATE")),Un(new Ze("heartbeat",t=>new Pc(t),"PRIVATE")),fe($r,Wi,n),fe($r,Wi,"esm2017"),fe("fire-js","")}Dc("");var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,na;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function g(){}g.prototype=p.prototype,E.D=p.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(y,v,I){for(var m=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)m[bt-2]=arguments[bt];return p.prototype[v].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(v=0;16>v;++v)y[v]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=E.g[0],g=E.g[1],v=E.g[2];var I=E.g[3],m=p+(I^g&(v^I))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(v^p&(g^v))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=v+(g^I&(p^g))+y[2]+606105819&4294967295,v=I+(m<<17&4294967295|m>>>15),m=g+(p^v&(I^p))+y[3]+3250441966&4294967295,g=v+(m<<22&4294967295|m>>>10),m=p+(I^g&(v^I))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(v^p&(g^v))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=v+(g^I&(p^g))+y[6]+2821735955&4294967295,v=I+(m<<17&4294967295|m>>>15),m=g+(p^v&(I^p))+y[7]+4249261313&4294967295,g=v+(m<<22&4294967295|m>>>10),m=p+(I^g&(v^I))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(v^p&(g^v))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=v+(g^I&(p^g))+y[10]+4294925233&4294967295,v=I+(m<<17&4294967295|m>>>15),m=g+(p^v&(I^p))+y[11]+2304563134&4294967295,g=v+(m<<22&4294967295|m>>>10),m=p+(I^g&(v^I))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(v^p&(g^v))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=v+(g^I&(p^g))+y[14]+2792965006&4294967295,v=I+(m<<17&4294967295|m>>>15),m=g+(p^v&(I^p))+y[15]+1236535329&4294967295,g=v+(m<<22&4294967295|m>>>10),m=p+(v^I&(g^v))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^v&(p^g))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=v+(p^g&(I^p))+y[11]+643717713&4294967295,v=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(v^I))+y[0]+3921069994&4294967295,g=v+(m<<20&4294967295|m>>>12),m=p+(v^I&(g^v))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^v&(p^g))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=v+(p^g&(I^p))+y[15]+3634488961&4294967295,v=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(v^I))+y[4]+3889429448&4294967295,g=v+(m<<20&4294967295|m>>>12),m=p+(v^I&(g^v))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^v&(p^g))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=v+(p^g&(I^p))+y[3]+4107603335&4294967295,v=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(v^I))+y[8]+1163531501&4294967295,g=v+(m<<20&4294967295|m>>>12),m=p+(v^I&(g^v))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^v&(p^g))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=v+(p^g&(I^p))+y[7]+1735328473&4294967295,v=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(v^I))+y[12]+2368359562&4294967295,g=v+(m<<20&4294967295|m>>>12),m=p+(g^v^I)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^v)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=v+(I^p^g)+y[11]+1839030562&4294967295,v=I+(m<<16&4294967295|m>>>16),m=g+(v^I^p)+y[14]+4259657740&4294967295,g=v+(m<<23&4294967295|m>>>9),m=p+(g^v^I)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^v)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=v+(I^p^g)+y[7]+4139469664&4294967295,v=I+(m<<16&4294967295|m>>>16),m=g+(v^I^p)+y[10]+3200236656&4294967295,g=v+(m<<23&4294967295|m>>>9),m=p+(g^v^I)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^v)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=v+(I^p^g)+y[3]+3572445317&4294967295,v=I+(m<<16&4294967295|m>>>16),m=g+(v^I^p)+y[6]+76029189&4294967295,g=v+(m<<23&4294967295|m>>>9),m=p+(g^v^I)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^v)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=v+(I^p^g)+y[15]+530742520&4294967295,v=I+(m<<16&4294967295|m>>>16),m=g+(v^I^p)+y[2]+3299628645&4294967295,g=v+(m<<23&4294967295|m>>>9),m=p+(v^(g|~I))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~v))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=v+(p^(I|~g))+y[14]+2878612391&4294967295,v=I+(m<<15&4294967295|m>>>17),m=g+(I^(v|~p))+y[5]+4237533241&4294967295,g=v+(m<<21&4294967295|m>>>11),m=p+(v^(g|~I))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~v))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=v+(p^(I|~g))+y[10]+4293915773&4294967295,v=I+(m<<15&4294967295|m>>>17),m=g+(I^(v|~p))+y[1]+2240044497&4294967295,g=v+(m<<21&4294967295|m>>>11),m=p+(v^(g|~I))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~v))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=v+(p^(I|~g))+y[6]+2734768916&4294967295,v=I+(m<<15&4294967295|m>>>17),m=g+(I^(v|~p))+y[13]+1309151649&4294967295,g=v+(m<<21&4294967295|m>>>11),m=p+(v^(g|~I))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~v))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=v+(p^(I|~g))+y[2]+718787259&4294967295,v=I+(m<<15&4294967295|m>>>17),m=g+(I^(v|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var g=p-this.blockSize,y=this.B,v=this.h,I=0;I<p;){if(v==0)for(;I<=g;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(y[v++]=E.charCodeAt(I++),v==this.blockSize){i(this,y),v=0;break}}else for(;I<p;)if(y[v++]=E[I++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var g=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=g&255,g/=256;for(this.u(E),E=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)E[g++]=this.g[p]>>>y&255;return E};function o(E,p){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=p(E)}function u(E,p){this.h=p;for(var g=[],y=!0,v=E.length-1;0<=v;v--){var I=E[v]|0;y&&I==p||(g[v]=I,y=!1)}this.g=g}var c={};function d(E){return-128<=E&&128>E?o(E,function(p){return new u([p|0],0>p?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return D(f(-E));for(var p=[],g=1,y=0;E>=g;y++)p[y]=E/g|0,g*=4294967296;return new u(p,0)}function _(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(_(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=w,v=0;v<E.length;v+=8){var I=Math.min(8,E.length-v),m=parseInt(E.substring(v,v+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var w=d(0),R=d(1),C=d(16777216);n=u.prototype,n.m=function(){if(k(this))return-D(this).m();for(var E=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(k(this))return"-"+D(this).toString(E);for(var p=f(Math.pow(E,6)),g=this,y="";;){var v=X(g,p).g;g=Y(g,v.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=v,V(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=Y(this,E),k(E)?-1:V(E)?0:1};function D(E){for(var p=E.g.length,g=[],y=0;y<p;y++)g[y]=~E.g[y];return new u(g,~E.h).add(R)}n.abs=function(){return k(this)?D(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],y=0,v=0;v<=p;v++){var I=y+(this.i(v)&65535)+(E.i(v)&65535),m=(I>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=m>>>16,I&=65535,m&=65535,g[v]=m<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function Y(E,p){return E.add(D(p))}n.j=function(E){if(V(this)||V(E))return w;if(k(this))return k(E)?D(this).j(D(E)):D(D(this).j(E));if(k(E))return D(this.j(D(E)));if(0>this.l(C)&&0>E.l(C))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var I=this.i(y)>>>16,m=this.i(y)&65535,bt=E.i(v)>>>16,Se=E.i(v)&65535;g[2*y+2*v]+=m*Se,Q(g,2*y+2*v),g[2*y+2*v+1]+=I*Se,Q(g,2*y+2*v+1),g[2*y+2*v+1]+=m*bt,Q(g,2*y+2*v+1),g[2*y+2*v+2]+=I*bt,Q(g,2*y+2*v+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new u(g,0)};function Q(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function K(E,p){this.g=E,this.h=p}function X(E,p){if(V(p))throw Error("division by zero");if(V(E))return new K(w,w);if(k(E))return p=X(D(E),p),new K(D(p.g),D(p.h));if(k(p))return p=X(E,D(p)),new K(D(p.g),p.h);if(30<E.g.length){if(k(E)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=p;0>=y.l(E);)g=It(g),y=It(y);var v=G(g,1),I=G(y,1);for(y=G(y,2),g=G(g,2);!V(y);){var m=I.add(y);0>=m.l(E)&&(v=v.add(g),I=m),y=G(y,1),g=G(g,1)}return p=Y(E,v.j(p)),new K(v,p)}for(v=w;0<=E.l(p);){for(g=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),m=I.j(p);k(m)||0<m.l(E);)g-=y,I=f(g),m=I.j(p);V(I)&&(I=R),v=v.add(I),E=Y(E,m)}return new K(v,E)}n.A=function(E){return X(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&E.i(y);return new u(g,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|E.i(y);return new u(g,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^E.i(y);return new u(g,this.h^E.h)};function It(E){for(var p=E.g.length+1,g=[],y=0;y<p;y++)g[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(g,E.h)}function G(E,p){var g=p>>5;p%=32;for(var y=E.g.length-g,v=[],I=0;I<y;I++)v[I]=0<p?E.i(I+g)>>>p|E.i(I+g+1)<<32-p:E.i(I+g);return new u(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,na=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Zt=u}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});var Dn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,Ge,sa,On,Gr,ia,oa,aa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dn=="object"&&Dn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in l))break t;l=l[T]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,T={next:function(){if(!h&&l<s.length){var A=l++;return{value:a(A,s[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function w(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,R.apply(null,arguments)}function C(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function V(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,T,A){for(var P=Array(arguments.length-2),H=2;H<arguments.length;H++)P[H-2]=arguments[H];return a.prototype[T].apply(h,P)}}function k(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const T=s.length||0,A=h.length||0;s.length=T+A;for(let P=0;P<A;P++)s[T+P]=h[P]}else s.push(h)}}class Y{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function Q(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function X(s){return X[" "](s),s}X[" "]=function(){};var It=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function G(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(l in h)s[l]=h[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function v(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function m(){var s=nr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class bt{constructor(){this.h=this.g=null}add(a,l){const h=Se.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Se=new Y(()=>new nu,s=>s.reset());class nu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Pe=!1,nr=new bt,Os=()=>{const s=c.Promise.resolve(void 0);Ce=()=>{s.then(ru)}};var ru=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(l){I(l)}var a=Se;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Pe=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var su=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s})();function be(s,a){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(It){t:{try{X(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:iu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&be.aa.h.call(this)}}V(be,ct);var iu={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),ou=0;function au(s,a,l,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=T,this.key=++ou,this.da=this.fa=!1}function fn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,a,l,h,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var P=sr(s,a,h,T);return-1<P?(a=s[P],l||(a.fa=!1)):(a=new au(a,this.src,A,!!h,T),a.fa=l,s.push(a)),a};function rr(s,a){var l=a.type;if(l in s.g){var h=s.g[l],T=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(h,T,1),A&&(fn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function sr(s,a,l,h){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return T}return-1}var ir="closure_lm_"+(1e6*Math.random()|0),or={};function Ls(s,a,l,h,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Ls(s,a[A],l,h,T);return null}return l=Us(l),s&&s[dn]?s.K(a,l,f(h)?!!h.capture:!1,T):uu(s,a,l,!1,h,T)}function uu(s,a,l,h,T,A){if(!a)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,H=ur(s);if(H||(s[ir]=H=new pn(s)),l=H.add(a,l,h,P,A),l.proxy)return l;if(h=lu(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)su||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent(Fs(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function lu(){function s(l){return a.call(s.src,s.listener,l)}const a=cu;return s}function Ms(s,a,l,h,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ms(s,a[A],l,h,T);else h=f(h)?!!h.capture:!!h,l=Us(l),s&&s[dn]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],l=sr(A,l,h,T),-1<l&&(fn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=ur(s))&&(a=s.g[a.toString()],s=-1,a&&(s=sr(a,l,h,T)),(l=-1<s?a[s]:null)&&ar(l))}function ar(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[dn])rr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(Fs(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=ur(a))?(rr(l,s),l.h==0&&(l.src=null,a[ir]=null)):fn(s)}}}function Fs(s){return s in or?or[s]:or[s]="on"+s}function cu(s,a){if(s.da)s=!0;else{a=new be(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&ar(s),s=l.call(h,a)}return s}function ur(s){return s=s[ir],s instanceof pn?s:null}var lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(s){return typeof s=="function"?s:(s[lr]||(s[lr]=function(a){return s.handleEvent(a)}),s[lr])}function ht(){Ot.call(this),this.i=new pn(this),this.M=this,this.F=null}V(ht,Ot),ht.prototype[dn]=!0,ht.prototype.removeEventListener=function(s,a,l,h){Ms(this,s,a,l,h)};function _t(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ct(a,s);else if(a instanceof ct)a.target=a.target||s;else{var T=a;a=new ct(h,s),y(a,T)}if(T=!0,l)for(var A=l.length-1;0<=A;A--){var P=a.g=l[A];T=mn(P,h,!0,a)&&T}if(P=a.g=s,T=mn(P,h,!0,a)&&T,T=mn(P,h,!1,a)&&T,l)for(A=0;A<l.length;A++)P=a.g=l[A],T=mn(P,h,!1,a)&&T}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)fn(l[h]);delete s.g[a],s.h--}}this.F=null},ht.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},ht.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function mn(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var P=a[A];if(P&&!P.da&&P.capture==l){var H=P.listener,ot=P.ha||P.src;P.fa&&rr(s.i,P),T=H.call(ot,h)!==!1&&T}}return T&&!h.defaultPrevented}function Bs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function js(s){s.g=Bs(()=>{s.g=null,s.i&&(s.i=!1,js(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class hu extends Ot{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:js(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(s){Ot.call(this),this.h=s,this.g={}}V(Ve,Ot);var qs=[];function $s(s){G(s.g,function(a,l){this.g.hasOwnProperty(l)&&ar(a)},s),s.g={}}Ve.prototype.N=function(){Ve.aa.N.call(this),$s(this)},Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cr=c.JSON.stringify,du=c.JSON.parse,fu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function hr(){}hr.prototype.h=null;function zs(s){return s.h||(s.h=s.i())}function Ks(){}var De={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dr(){ct.call(this,"d")}V(dr,ct);function fr(){ct.call(this,"c")}V(fr,ct);var Gt={},Gs=null;function gn(){return Gs=Gs||new ht}Gt.La="serverreachability";function Hs(s){ct.call(this,Gt.La,s)}V(Hs,ct);function Ne(s){const a=gn();_t(a,new Hs(a))}Gt.STAT_EVENT="statevent";function Qs(s,a){ct.call(this,Gt.STAT_EVENT,s),this.stat=a}V(Qs,ct);function yt(s){const a=gn();_t(a,new Qs(a,s))}Gt.Ma="timingevent";function Ws(s,a){ct.call(this,Gt.Ma,s),this.size=a}V(Ws,ct);function ke(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function xe(){this.g=!0}xe.prototype.xa=function(){this.g=!1};function pu(s,a,l,h,T,A){s.info(function(){if(s.g)if(A)for(var P="",H=A.split("&"),ot=0;ot<H.length;ot++){var $=H[ot].split("=");if(1<$.length){var dt=$[0];$=$[1];var ft=dt.split("_");P=2<=ft.length&&ft[1]=="type"?P+(dt+"="+$+"&"):P+(dt+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+l+`
`+P})}function mu(s,a,l,h,T,A,P){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+l+`
`+A+" "+P})}function ie(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+_u(s,l)+(h?" "+h:"")})}function gu(s,a){s.info(function(){return"TIMEOUT: "+a})}xe.prototype.info=function(){};function _u(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return cr(l)}catch{return a}}var _n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ys={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function yn(){}V(yn,hr),yn.prototype.g=function(){return new XMLHttpRequest},yn.prototype.i=function(){return{}},pr=new yn;function Lt(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new Ve(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xs}function Xs(){this.i=null,this.g="",this.h=!1}var Js={},mr={};function gr(s,a,l){s.L=1,s.v=In(Vt(a)),s.m=l,s.P=!0,Zs(s,null)}function Zs(s,a){s.F=Date.now(),En(s),s.A=Vt(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),fi(l.i,"t",h),s.C=0,l=s.j.J,s.h=new Xs,s.g=Di(s.j,l?a:null,!s.m),0<s.O&&(s.M=new hu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(qs[0]=T.toString()),T=qs);for(var A=0;A<T.length;A++){var P=Ls(l,T[A],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ne(),pu(s.i,s.u,s.A,s.l,s.R,s.m)}Lt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Dt(s)==3?a.j():this.Y(s)},Lt.prototype.Y=function(s){try{if(s==this.g)t:{const ft=Dt(this.g);var a=this.g.Ba();const ue=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||vi(this.g)))){this.J||ft!=4||a==7||(a==8||0>=ue?Ne(3):Ne(2)),_r(this);var l=this.g.Z();this.X=l;e:if(ti(this)){var h=vi(this.g);s="";var T=h.length,A=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Oe(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(A&&a==T-1)});h.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=l==200,mu(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var H,ot=this.g;if((H=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(H)){var $=H;break e}}$=null}if(l=$)ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yr(this,l);else{this.o=!1,this.s=3,yt(12),Ht(this),Oe(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<P.length;)if(At=yu(this,P),At==mr){ft==4&&(this.s=4,yt(14),l=!1),ie(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Js){this.s=4,yt(15),ie(this.i,this.l,P,"[Invalid Chunk]"),l=!1;break}else ie(this.i,this.l,At,null),yr(this,At);if(ti(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||P.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)ie(this.i,this.l,P,"[Invalid Chunked Response]"),Ht(this),Oe(this);else if(0<P.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Ar(dt),dt.M=!0,yt(11))}}else ie(this.i,this.l,P,null),yr(this,P);ft==4&&Ht(this),this.o&&!this.J&&(ft==4?Ci(this.j,this):(this.o=!1,En(this)))}else Ou(this.g),l==400&&0<P.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Ht(this),Oe(this)}}}catch{}finally{}};function ti(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function yu(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?mr:(l=Number(a.substring(l,h)),isNaN(l)?Js:(h+=1,h+l>a.length?mr:(a=a.slice(h,h+l),s.C=h+l,a)))}Lt.prototype.cancel=function(){this.J=!0,Ht(this)};function En(s){s.S=Date.now()+s.I,ei(s,s.I)}function ei(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ke(R(s.ba,s),a)}function _r(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Lt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(gu(this.i,this.A),this.L!=2&&(Ne(),yt(17)),Ht(this),this.s=2,Oe(this)):ei(this,this.S-s)};function Oe(s){s.j.G==0||s.J||Ci(s.j,s)}function Ht(s){_r(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,$s(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function yr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Er(l.h,s))){if(!s.K&&Er(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Pn(l),Sn(l);else break t;wr(l),yt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=ke(R(l.Za,l),6e3));if(1>=si(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Wt(l,11)}else if((s.K||l.g==s)&&Pn(l),!Q(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const dt=$[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=$[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const ue=$[5];ue!=null&&typeof ue=="number"&&0<ue&&(h=1.5*ue,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const At=s.g;if(At){const Vn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vn){var A=h.h;A.g||Vn.indexOf("spdy")==-1&&Vn.indexOf("quic")==-1&&Vn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(vr(A,A.h),A.h=null))}if(h.D){const Rr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Rr&&(h.ya=Rr,W(h.I,h.D,Rr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var P=s;if(h.qa=Vi(h,h.J?h.ia:null,h.W),P.K){ii(h.h,P);var H=P,ot=h.L;ot&&(H.I=ot),H.B&&(_r(H),En(H)),h.g=P}else Ri(h);0<l.i.length&&Cn(l)}else $[0]!="stop"&&$[0]!="close"||Wt(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Wt(l,7):Ir(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Ne(4)}catch{}}var Eu=class{constructor(s,a){this.g=s,this.map=a}};function ni(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ri(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function si(s){return s.h?1:s.g?s.g.size:0}function Er(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function vr(s,a){s.g?s.g.add(a):s.h=a}function ii(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ni.prototype.cancel=function(){if(this.i=oi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function oi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return k(s.i)}function vu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function Tu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function ai(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Tu(s),h=vu(s),T=h.length,A=0;A<T;A++)a.call(void 0,h[A],l&&l[A],s)}var ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Iu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),T=null;if(0<=h){var A=s[l].substring(0,h);T=s[l].substring(h+1)}else A=s[l];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Qt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Qt){this.h=s.h,vn(this,s.j),this.o=s.o,this.g=s.g,Tn(this,s.s),this.l=s.l;var a=s.i,l=new Fe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),li(this,l),this.m=s.m}else s&&(a=String(s).match(ui))?(this.h=!1,vn(this,a[1]||"",!0),this.o=Le(a[2]||""),this.g=Le(a[3]||"",!0),Tn(this,a[4]),this.l=Le(a[5]||"",!0),li(this,a[6]||"",!0),this.m=Le(a[7]||"")):(this.h=!1,this.i=new Fe(null,this.h))}Qt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Me(a,ci,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Me(a,ci,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Me(l,l.charAt(0)=="/"?Ru:Au,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Me(l,Cu)),s.join("")};function Vt(s){return new Qt(s)}function vn(s,a,l){s.j=l?Le(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Tn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function li(s,a,l){a instanceof Fe?(s.i=a,Pu(s.i,s.h)):(l||(a=Me(a,Su)),s.i=new Fe(a,s.h))}function W(s,a,l){s.i.set(a,l)}function In(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Le(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Me(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,wu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function wu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ci=/[#\/\?@]/g,Au=/[#\?:]/g,Ru=/[#\?]/g,Su=/[#\?@]/g,Cu=/#/g;function Fe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Mt(s){s.g||(s.g=new Map,s.h=0,s.i&&Iu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Fe.prototype,n.add=function(s,a){Mt(this),this.i=null,s=oe(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function hi(s,a){Mt(s),a=oe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function di(s,a){return Mt(s),a=oe(s,a),s.g.has(a)}n.forEach=function(s,a){Mt(this),this.g.forEach(function(l,h){l.forEach(function(T){s.call(a,T,h,this)},this)},this)},n.na=function(){Mt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const T=s[h];for(let A=0;A<T.length;A++)l.push(a[h])}return l},n.V=function(s){Mt(this);let a=[];if(typeof s=="string")di(this,s)&&(a=a.concat(this.g.get(oe(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},n.set=function(s,a){return Mt(this),this.i=null,s=oe(this,s),di(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function fi(s,a,l){hi(s,a),0<l.length&&(s.i=null,s.g.set(oe(s,a),k(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),P=this.V(h);for(h=0;h<P.length;h++){var T=A;P[h]!==""&&(T+="="+encodeURIComponent(String(P[h]))),s.push(T)}}return this.i=s.join("&")};function oe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Pu(s,a){a&&!s.j&&(Mt(s),s.i=null,s.g.forEach(function(l,h){var T=h.toLowerCase();h!=T&&(hi(this,h),fi(this,T,l))},s)),s.j=a}function bu(s,a){const l=new xe;if(c.Image){const h=new Image;h.onload=C(Ft,l,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Ft,l,"TestLoadImage: error",!1,a,h),h.onabort=C(Ft,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Ft,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Vu(s,a){const l=new xe,h=new AbortController,T=setTimeout(()=>{h.abort(),Ft(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(A=>{clearTimeout(T),A.ok?Ft(l,"TestPingServer: ok",!0,a):Ft(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ft(l,"TestPingServer: error",!1,a)})}function Ft(s,a,l,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(l)}catch{}}function Du(){this.g=new fu}function Nu(s,a,l){const h=l||"";try{ai(s,function(T,A){let P=T;f(T)&&(P=cr(T)),a.push(h+A+"="+encodeURIComponent(P))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function wn(s){this.l=s.Ub||null,this.j=s.eb||!1}V(wn,hr),wn.prototype.g=function(){return new An(this.l,this.j)},wn.prototype.i=(function(s){return function(){return s}})({});function An(s,a){ht.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(An,ht),n=An.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Be(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function pi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ue(this):Be(this),this.readyState==3&&pi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ue(this))},n.Qa=function(s){this.g&&(this.response=s,Ue(this))},n.ga=function(){this.g&&Ue(this)};function Ue(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Be(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Be(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(An.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function mi(s){let a="";return G(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Tr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=mi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function J(s){ht.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(J,ht);var ku=/^https?$/i,xu=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?zs(this.o):zs(pr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){gi(this,A);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)l.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(xu,a,void 0))||h||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of l)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ei(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){gi(this,A)}};function gi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,_i(s),Rn(s)}function _i(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),Rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?yi(this):this.bb())},n.bb=function(){yi(this)};function yi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Dt(s)!=4||s.Z()!=2)){if(s.u&&Dt(s)==4)Bs(s.Ea,0,s);else if(_t(s,"readystatechange"),Dt(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=P===0){var T=String(s.D).match(ui)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!ku.test(T?T.toLowerCase():"")}l=h}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var A=2<Dt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",_i(s)}}finally{Rn(s)}}}}function Rn(s,a){if(s.g){Ei(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=h}catch{}}}function Ei(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Dt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),du(a)}};function vi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ou(s){const a={};s=(s.g&&2<=Dt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(Q(s[h]))continue;var l=v(s[h]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[T]||[];a[T]=A,A.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function je(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ti(s){this.Aa=0,this.i=[],this.j=new xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=je("baseRetryDelayMs",5e3,s),this.cb=je("retryDelaySeedMs",1e4,s),this.Wa=je("forwardChannelMaxRetries",2,s),this.wa=je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ni(s&&s.concurrentRequestLimit),this.Da=new Du,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ti.prototype,n.la=8,n.G=1,n.connect=function(s,a,l,h){yt(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=Vi(this,null,this.W),Cn(this)};function Ir(s){if(Ii(s),s.G==3){var a=s.U++,l=Vt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),qe(s,l),a=new Lt(s,s.j,a),a.L=2,a.v=In(Vt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Di(a.j,null),a.g.ea(a.v)),a.F=Date.now(),En(a)}bi(s)}function Sn(s){s.g&&(Ar(s),s.g.cancel(),s.g=null)}function Ii(s){Sn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Pn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Cn(s){if(!ri(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ce||Os(),Pe||(Ce(),Pe=!0),nr.add(a,s),s.B=0}}function Lu(s,a){return si(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ke(R(s.Ga,s,a),Pi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Lt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ai(this,T,a),l=Vt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),qe(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(mi(A)))+"&"+a:this.m&&Tr(l,this.m,A)),vr(this.h,T),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),T.T=!0,gr(T,l,null)):gr(T,l,a),this.G=2}}else this.G==3&&(s?wi(this,s):this.i.length==0||ri(this.h)||wi(this))};function wi(s,a){var l;a?l=a.l:l=s.U++;const h=Vt(s.I);W(h,"SID",s.K),W(h,"RID",l),W(h,"AID",s.T),qe(s,h),s.m&&s.o&&Tr(h,s.m,s.o),l=new Lt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ai(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),vr(s.h,l),gr(l,h,a)}function qe(s,a){s.H&&G(s.H,function(l,h){W(a,h,l)}),s.l&&ai({},function(l,h){W(a,h,l)})}function Ai(s,a,l){l=Math.min(s.i.length,l);var h=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const P=["count="+l];A==-1?0<l?(A=T[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let H=!0;for(let ot=0;ot<l;ot++){let $=T[ot].g;const dt=T[ot].map;if($-=A,0>$)A=Math.max(0,T[ot].g-100),H=!1;else try{Nu(dt,P,"req"+$+"_")}catch{h&&h(dt)}}if(H){h=P.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function Ri(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ce||Os(),Pe||(Ce(),Pe=!0),nr.add(a,s),s.v=0}}function wr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ke(R(s.Fa,s),Pi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Si(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ke(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Sn(this),Si(this))};function Ar(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Si(s){s.g=new Lt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Vt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),qe(s,a),s.m&&s.o&&Tr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=In(Vt(a)),l.m=null,l.P=!0,Zs(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Sn(this),wr(this),yt(19))};function Pn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ci(s,a){var l=null;if(s.g==a){Pn(s),Ar(s),s.g=null;var h=2}else if(Er(s.h,a))l=a.D,ii(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;h=gn(),_t(h,new Ws(h,l)),Cn(s)}else Ri(s);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&Lu(s,a)||h==2&&wr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),T){case 1:Wt(s,5);break;case 4:Wt(s,10);break;case 3:Wt(s,6);break;default:Wt(s,2)}}}function Pi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function Wt(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),h=s.Xa;const T=!h;h=new Qt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vn(h,"https"),In(h),T?bu(h.toString(),l):Vu(h.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),bi(s),Ii(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function bi(s){if(s.G=0,s.ka=[],s.l){const a=oi(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function Vi(s,a,l){var h=l instanceof Qt?Vt(l):new Qt(l);if(h.g!="")a&&(h.g=a+"."+h.g),Tn(h,h.s);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new Qt(null);h&&vn(A,h),a&&(A.g=a),T&&Tn(A,T),l&&(A.l=l),h=A}return l=s.D,a=s.ya,l&&a&&W(h,l,a),W(h,"VER",s.la),qe(s,h),h}function Di(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new wn({eb:l})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ni(){}n=Ni.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bn(){}bn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){ht.call(this),this.g=new Ti(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!Q(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!Q(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ae(this)}V(Tt,ht),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Ir(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=cr(s),s=l);a.i.push(new Eu(a.Ya++,s)),a.G==3&&Cn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Ir(this.g),delete this.g,Tt.aa.N.call(this)};function ki(s){dr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}V(ki,dr);function xi(){fr.call(this),this.status=1}V(xi,fr);function ae(s){this.g=s}V(ae,Ni),ae.prototype.ua=function(){_t(this.g,"a")},ae.prototype.ta=function(s){_t(this.g,new ki(s))},ae.prototype.sa=function(s){_t(this.g,new xi)},ae.prototype.ra=function(){_t(this.g,"b")},bn.prototype.createWebChannel=bn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,aa=function(){return new bn},oa=function(){return gn()},ia=Gt,Gr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_n.NO_ERROR=0,_n.TIMEOUT=8,_n.HTTP_ERROR=6,On=_n,Ys.COMPLETE="complete",sa=Ys,Ks.EventType=De,De.OPEN="a",De.CLOSE="b",De.ERROR="c",De.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ge=Ks,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ra=J}).apply(typeof Dn<"u"?Dn:typeof self<"u"?self:typeof window<"u"?window:{});const eo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Yo("@firebase/firestore");function ze(){return ne.logLevel}function N(n,...t){if(ne.logLevel<=j.DEBUG){const e=t.map(cs);ne.debug(`Firestore (${we}): ${n}`,...e)}}function xt(n,...t){if(ne.logLevel<=j.ERROR){const e=t.map(cs);ne.error(`Firestore (${we}): ${n}`,...e)}}function ge(n,...t){if(ne.logLevel<=j.WARN){const e=t.map(cs);ne.warn(`Firestore (${we}): ${n}`,...e)}}function cs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+n;throw xt(t),new Error(t)}function tt(n,t){n||F()}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ie{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(mt.UNAUTHENTICATED)))}shutdown(){}}class kc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class xc{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){tt(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new te;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new te,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const d=o;t.enqueueRetryable((async()=>{await d.promise,await i(this.currentUser)}))},c=d=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((d=>c(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new te)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new ua(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new mt(t)}}class Oc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Lc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Oc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Mc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){tt(this.o===void 0);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(tt(typeof e.token=="string"),this.R=e.token,new Mc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Uc(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function _e(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new vt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new vt(0,0))}static max(){return new M(new vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(),r===void 0?r=t.length-e:r>t.length-e&&F(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return nn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nn?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Z extends nn{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new Z(e)}static emptyPath(){return new Z([])}}const Bc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends nn{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return Bc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new O(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(r+=c,i++):(o(),i++)}if(o(),u)throw new O(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(Z.fromString(t))}static fromName(t){return new L(Z.fromString(t).popFirst(5))}static empty(){return new L(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new Z(t.slice()))}}function jc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new vt(e+1,0):new vt(e,r));return new $t(i,L.empty(),t)}function qc(n){return new $t(n.readTime,n.key,-1)}class $t{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new $t(M.min(),L.empty(),-1)}static max(){return new $t(M.max(),L.empty(),-1)}}function $c(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==zc)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let i=0,o=0,u=!1;t.forEach((c=>{++i,c.next((()=>{++o,u&&o===i&&e()}),(d=>r(d)))})),u=!0,o===i&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((i=>i?S.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,i)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next((_=>{u[f]=_,++c,c===o&&r(u)}),(_=>i(_)))}}))}static doWhile(t,e){return new S(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function Gc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function un(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ds.oe=-1;function Gn(n){return n==null}function Hr(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Hn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Hc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nn(this.root,t,this.comparator,!0)}}class Nn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(t){return new ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new ut(Et.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _e(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ca("Invalid base64 string: "+o):o}})(t);return new lt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Qc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(tt(!!n),typeof n=="string"){let t=0;const e=Qc.exec(n);if(tt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ps(n){const t=n.mapValue.fields.__previous_value__;return fs(t)?ps(t):t}function rn(n){const t=zt(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e,r,i,o,u,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}class sn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={mapValue:{}};function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fs(n)?4:Xc(n)?9007199254740991:Yc(n)?10:11:F()}function Ct(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return rn(n).isEqual(rn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=zt(i.timestampValue),c=zt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return re(i.bytesValue).isEqual(re(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=et(i.doubleValue),c=et(o.doubleValue);return u===c?Hr(u)===Hr(c):isNaN(u)&&isNaN(c)}return!1})(n,t);case 9:return _e(n.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(no(u)!==no(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!Ct(u[d],c[d])))return!1;return!0})(n,t);default:return F()}}function on(n,t){return(n.values||[]).find((e=>Ct(e,t)))!==void 0}function ye(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const c=et(o.integerValue||o.doubleValue),d=et(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1})(n,t);case 3:return so(n.timestampValue,t.timestampValue);case 4:return so(rn(n),rn(t));case 5:return z(n.stringValue,t.stringValue);case 6:return(function(o,u){const c=re(o),d=re(u);return c.compareTo(d)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const c=o.split("/"),d=u.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=z(c[f],d[f]);if(_!==0)return _}return z(c.length,d.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const c=z(et(o.latitude),et(u.latitude));return c!==0?c:z(et(o.longitude),et(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return io(n.arrayValue,t.arrayValue);case 10:return(function(o,u){var c,d,f,_;const w=o.fields||{},R=u.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,V=(d=R.value)===null||d===void 0?void 0:d.arrayValue,k=z(((f=C?.values)===null||f===void 0?void 0:f.length)||0,((_=V?.values)===null||_===void 0?void 0:_.length)||0);return k!==0?k:io(C,V)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===kn.mapValue&&u===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(u===kn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const R=z(d[w],_[w]);if(R!==0)return R;const C=ye(c[d[w]],f[_[w]]);if(C!==0)return C}return z(d.length,_.length)})(n.mapValue,t.mapValue);default:throw F()}}function so(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=zt(n),r=zt(t),i=z(e.seconds,r.seconds);return i!==0?i:z(e.nanos,r.nanos)}function io(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=ye(e[i],r[i]);if(o)return o}return z(e.length,r.length)}function Ee(n){return Qr(n)}function Qr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=zt(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return re(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return L.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Qr(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${Qr(e.fields[u])}`;return i+"}"})(n.mapValue):F()}function Wr(n){return!!n&&"integerValue"in n}function ms(n){return!!n&&"arrayValue"in n}function oo(n){return!!n&&"nullValue"in n}function ao(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Or(n){return!!n&&"mapValue"in n}function Yc(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function We(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Hn(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=We(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=We(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Xc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Or(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=We(e)}setAll(t){let e=Et.emptyPath(),r={},i=[];t.forEach(((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=c.popLast()}u?r[c.lastSegment()]=We(u):i.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Or(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Or(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Hn(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new Rt(We(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,i,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,M.min(),M.min(),M.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new gt(t,1,e,M.min(),r,i,0)}static newNoDocument(t,e){return new gt(t,2,e,M.min(),M.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,M.min(),M.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e){this.position=t,this.inclusive=e}}function uo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(u.referenceValue),e.key):r=ye(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function lo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ct(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Jc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{}class st extends ha{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new th(t,e,r):e==="array-contains"?new rh(t,r):e==="in"?new sh(t,r):e==="not-in"?new ih(t,r):e==="array-contains-any"?new oh(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new eh(t,r):new nh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends ha{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Pt(t,e)}matches(t){return da(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function da(n){return n.op==="and"}function fa(n){return Zc(n)&&da(n)}function Zc(n){for(const t of n.filters)if(t instanceof Pt)return!1;return!0}function Yr(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+Ee(n.value);if(fa(n))return n.filters.map((t=>Yr(t))).join(",");{const t=n.filters.map((e=>Yr(e))).join(",");return`${n.op}(${t})`}}function pa(n,t){return n instanceof st?(function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Ct(r.value,i.value)})(n,t):n instanceof Pt?(function(r,i){return i instanceof Pt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,u,c)=>o&&pa(u,i.filters[c])),!0):!1})(n,t):void F()}function ma(n){return n instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ee(e.value)}`})(n):n instanceof Pt?(function(e){return e.op.toString()+" {"+e.getFilters().map(ma).join(" ,")+"}"})(n):"Filter"}class th extends st{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class eh extends st{constructor(t,e){super(t,"in",e),this.keys=ga("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class nh extends st{constructor(t,e){super(t,"not-in",e),this.keys=ga("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ga(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>L.fromName(r.referenceValue)))}class rh extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ms(e)&&on(e.arrayValue,this.value)}}class sh extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&on(this.value.arrayValue,e)}}class ih extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!on(this.value.arrayValue,e)}}class oh extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ms(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>on(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e=null,r=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function co(n,t=null,e=[],r=[],i=null,o=null,u=null){return new ah(n,t,e,r,i,o,u)}function gs(n){const t=B(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Yr(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Gn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Ee(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Ee(r))).join(",")),t.ue=e}return t.ue}function _s(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Jc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!pa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!lo(n.startAt,t.startAt)&&lo(n.endAt,t.endAt)}function Xr(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e=null,r=[],i=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uh(n,t,e,r,i,o,u,c){return new Qn(n,t,e,r,i,o,u,c)}function ys(n){return new Qn(n)}function ho(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lh(n){return n.collectionGroup!==null}function Ye(n){const t=B(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ut(Et.comparator);return u.filters.forEach((d=>{d.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new jn(o,r))})),e.has(Et.keyField().canonicalString())||t.ce.push(new jn(Et.keyField(),r))}return t.ce}function St(n){const t=B(n);return t.le||(t.le=ch(t,Ye(n))),t.le}function ch(n,t){if(n.limitType==="F")return co(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new jn(i.field,o)}));const e=n.endAt?new Bn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bn(n.startAt.position,n.startAt.inclusive):null;return co(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Jr(n,t,e){return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Wn(n,t){return _s(St(n),St(t))&&n.limitType===t.limitType}function _a(n){return`${gs(St(n))}|lt:${n.limitType}`}function le(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>ma(i))).join(", ")}]`),Gn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Ee(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Ee(i))).join(",")),`Target(${r})`})(St(n))}; limitType=${n.limitType})`}function Yn(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of Ye(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(u,c,d){const f=uo(u,c,d);return u.inclusive?f<=0:f<0})(r.startAt,Ye(r),i)||r.endAt&&!(function(u,c,d){const f=uo(u,c,d);return u.inclusive?f>=0:f>0})(r.endAt,Ye(r),i))})(n,t)}function hh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ya(n){return(t,e)=>{let r=!1;for(const i of Ye(n)){const o=dh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function dh(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):(function(o,u,c){const d=u.data.field(o),f=c.data.field(o);return d!==null&&f!==null?ye(d,f):F()})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Hn(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Hc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new nt(L.comparator);function Kt(){return fh}const Ea=new nt(L.comparator);function He(...n){let t=Ea;for(const e of n)t=t.insert(e.key,e);return t}function ph(n){let t=Ea;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Jt(){return Xe()}function va(){return Xe()}function Xe(){return new Ae((n=>n.toString()),((n,t)=>n.isEqual(t)))}const mh=new ut(L.comparator);function q(...n){let t=mh;for(const e of n)t=t.add(e);return t}const gh=new ut(z);function _h(){return gh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hr(t)?"-0":t}}function Eh(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this._=void 0}}function vh(n,t,e){return n instanceof Zr?(function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&fs(o)&&(o=ps(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}})(e,t):n instanceof qn?Ta(n,t):n instanceof $n?Ia(n,t):(function(i,o){const u=Ih(i,o),c=fo(u)+fo(i.Pe);return Wr(u)&&Wr(i.Pe)?Eh(c):yh(i.serializer,c)})(n,t)}function Th(n,t,e){return n instanceof qn?Ta(n,t):n instanceof $n?Ia(n,t):e}function Ih(n,t){return n instanceof ts?(function(r){return Wr(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Zr extends Xn{}class qn extends Xn{constructor(t){super(),this.elements=t}}function Ta(n,t){const e=wa(t);for(const r of n.elements)e.some((i=>Ct(i,r)))||e.push(r);return{arrayValue:{values:e}}}class $n extends Xn{constructor(t){super(),this.elements=t}}function Ia(n,t){let e=wa(t);for(const r of n.elements)e=e.filter((i=>!Ct(i,r)));return{arrayValue:{values:e}}}class ts extends Xn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function fo(n){return et(n.integerValue||n.doubleValue)}function wa(n){return ms(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wh(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof qn&&i instanceof qn||r instanceof $n&&i instanceof $n?_e(r.elements,i.elements,Ct):r instanceof ts&&i instanceof ts?Ct(r.Pe,i.Pe):r instanceof Zr&&i instanceof Zr})(n.transform,t.transform)}class ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ee}static exists(t){return new ee(void 0,t)}static updateTime(t){return new ee(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Es{}function Aa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Rh(n.key,ee.none()):new vs(n.key,n.data,ee.none());{const e=n.data,r=Rt.empty();let i=new ut(Et.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new Jn(n.key,r,new Ut(i.toArray()),ee.none())}}function Ah(n,t,e){n instanceof vs?(function(i,o,u){const c=i.value.clone(),d=mo(i.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()})(n,t,e):n instanceof Jn?(function(i,o,u){if(!Ln(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=mo(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Ra(i)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function Je(n,t,e,r){return n instanceof vs?(function(o,u,c,d){if(!Ln(o.precondition,u))return c;const f=o.value.clone(),_=go(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof Jn?(function(o,u,c,d){if(!Ln(o.precondition,u))return c;const f=go(o.fieldTransforms,d,u),_=u.data;return _.setAll(Ra(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w=>w.field)))})(n,t,e,r):(function(o,u,c){return Ln(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c})(n,t,e)}function po(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_e(r,i,((o,u)=>wh(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class vs extends Es{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jn extends Es{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ra(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function mo(n,t,e){const r=new Map;tt(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,c=t.data.field(o.field);r.set(o.field,Th(u,c,e[i]))}return r}function go(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,vh(o,u,t))}return r}class Rh extends Es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Ah(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Je(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Je(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=va();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const d=Aa(u,c);d!==null&&r.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(M.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&_e(this.mutations,t.mutations,((e,r)=>po(e,r)))&&_e(this.baseMutations,t.baseMutations,((e,r)=>po(e,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,U;function Sa(n){if(n===void 0)return xt("GRPC error has no .code"),b.UNKNOWN;switch(n){case rt.OK:return b.OK;case rt.CANCELLED:return b.CANCELLED;case rt.UNKNOWN:return b.UNKNOWN;case rt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case rt.INTERNAL:return b.INTERNAL;case rt.UNAVAILABLE:return b.UNAVAILABLE;case rt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case rt.NOT_FOUND:return b.NOT_FOUND;case rt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case rt.ABORTED:return b.ABORTED;case rt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case rt.DATA_LOSS:return b.DATA_LOSS;default:return F()}}(U=rt||(rt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=new Zt([4294967295,4294967295],0);function _o(n){const t=bh().encode(n),e=new na;return e.update(t),new Uint8Array(e.digest())}function yo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zt([e,r],0),new Zt([i,o],0)]}class Ts{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Qe(`Invalid padding: ${e}`);if(r<0)throw new Qe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Qe(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Qe(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Zt.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Zt.fromNumber(r)));return i.compare(Vh)===1&&(i=new Zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=_o(t),[r,i]=yo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ts(o,i,e);return r.forEach((c=>u.insert(c))),u}insert(t){if(this.Ie===0)return;const e=_o(t),[r,i]=yo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Qe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Zn(M.min(),i,new nt(z),Kt(),q())}}class ln{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ln(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Ca{constructor(t,e){this.targetId=t,this.me=e}}class Pa{constructor(t,e,r=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Eo{constructor(){this.fe=0,this.ge=To(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),r=q();return this.ge.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:F()}})),new ln(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=To()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dh{constructor(t){this.Le=t,this.Be=new Map,this.ke=Kt(),this.qe=vo(),this.Qe=new nt(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:F()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((r,i)=>{this.ze(i)&&e(i)}))}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Xr(o))if(r===0){const u=new L(o.path);this.Ue(e,u,gt.newNoDocument(u,M.min()))}else tt(r===1);else{const u=this.Ye(e);if(u!==r){const c=this.Ze(t),d=c?this.Xe(c,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=re(r).toUint8Array()}catch(d){if(d instanceof ca)return ge("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new Ts(u,i,o)}catch(d){return ge(d instanceof Qe?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)})),i}rt(t){const e=new Map;this.Be.forEach(((o,u)=>{const c=this.Je(u);if(c){if(o.current&&Xr(c.target)){const d=new L(c.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,gt.newNoDocument(d,t))}o.be&&(e.set(u,o.ve()),o.Ce())}}));let r=q();this.qe.forEach(((o,u)=>{let c=!0;u.forEachWhile((d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.ke.forEach(((o,u)=>u.setReadTime(t)));const i=new Zn(t,e,this.Qe,this.ke,r);return this.ke=Kt(),this.qe=vo(),this.Qe=new nt(z),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Eo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Eo),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function vo(){return new nt(L.comparator)}function To(){return new nt(L.comparator)}const Nh={asc:"ASCENDING",desc:"DESCENDING"},kh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xh={and:"AND",or:"OR"};class Oh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function es(n,t){return n.useProto3Json||Gn(t)?t:{value:t}}function Lh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function pe(n){return tt(!!n),M.fromTimestamp((function(e){const r=zt(e);return new vt(r.seconds,r.nanos)})(n))}function Fh(n,t){return ns(n,t).canonicalString()}function ns(n,t){const e=(function(i){return new Z(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function ba(n){const t=Z.fromString(n);return tt(xa(t)),t}function Lr(n,t){const e=ba(t);if(e.get(1)!==n.databaseId.projectId)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(Da(e))}function Va(n,t){return Fh(n.databaseId,t)}function Uh(n){const t=ba(n);return t.length===4?Z.emptyPath():Da(t)}function Io(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Da(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Bh(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:F()})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,_){return f.useProto3Json?(tt(_===void 0||typeof _=="string"),lt.fromBase64String(_||"")):(tt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),lt.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&(function(f){const _=f.code===void 0?b.UNKNOWN:Sa(f.code);return new O(_,f.message||"")})(u);e=new Pa(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lr(n,r.document.name),o=pe(r.document.updateTime),u=r.document.createTime?pe(r.document.createTime):M.min(),c=new Rt({mapValue:{fields:r.document.fields}}),d=gt.newFoundDocument(i,o,u,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Mn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Lr(n,r.document),o=r.readTime?pe(r.readTime):M.min(),u=gt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Mn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Lr(n,r.document),o=r.removedTargetIds||[];e=new Mn([],o,i,null)}else{if(!("filter"in t))return F();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new Ph(i,o),c=r.targetId;e=new Ca(c,u)}}return e}function jh(n,t){return{documents:[Va(n,t.path)]}}function qh(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Va(n,i);const o=(function(f){if(f.length!==0)return ka(Pt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(f){if(f.length!==0)return f.map((_=>(function(R){return{field:ce(R.field),direction:Kh(R.dir)}})(_)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=es(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{_t:e,parent:i}}function $h(n){let t=Uh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){tt(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(w){const R=Na(w);return R instanceof Pt&&fa(R)?R.getFilters():[R]})(e.where));let u=[];e.orderBy&&(u=(function(w){return w.map((R=>(function(V){return new jn(he(V.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(R)))})(e.orderBy));let c=null;e.limit&&(c=(function(w){let R;return R=typeof w=="object"?w.value:w,Gn(R)?null:R})(e.limit));let d=null;e.startAt&&(d=(function(w){const R=!!w.before,C=w.values||[];return new Bn(C,R)})(e.startAt));let f=null;return e.endAt&&(f=(function(w){const R=!w.before,C=w.values||[];return new Bn(C,R)})(e.endAt)),uh(t,i,u,o,c,"F",d,f)}function zh(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Na(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=he(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=he(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=he(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=he(e.unaryFilter.field);return st.create(u,"!=",{nullValue:"NULL_VALUE"});default:return F()}})(n):n.fieldFilter!==void 0?(function(e){return st.create(he(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Pt.create(e.compositeFilter.filters.map((r=>Na(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}})(e.compositeFilter.op))})(n):F()}function Kh(n){return Nh[n]}function Gh(n){return kh[n]}function Hh(n){return xh[n]}function ce(n){return{fieldPath:n.canonicalString()}}function he(n){return Et.fromServerFormat(n.fieldPath)}function ka(n){return n instanceof st?(function(e){if(e.op==="=="){if(ao(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NAN"}};if(oo(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ao(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NOT_NAN"}};if(oo(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ce(e.field),op:Gh(e.op),value:e.value}}})(n):n instanceof Pt?(function(e){const r=e.getFilters().map((i=>ka(i)));return r.length===1?r[0]:{compositeFilter:{op:Hh(e.op),filters:r}}})(n):F()}function xa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,r,i,o=M.min(),u=M.min(),c=lt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.ct=t}}function Wh(n){const t=$h({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.un=new Xh}addToCollectionParentIndex(t,e){return this.un.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve($t.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve($t.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Xh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ut(Z.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ut(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ve(0)}static kn(){return new ve(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.changes=new Ae((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&Je(r.mutation,i,Ut.empty(),vt.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=q()){const i=Jt();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let u=He();return o.forEach(((c,d)=>{u=u.insert(c,d.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=Jt();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,q())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,c)=>{e.set(u,c)}))}))}computeViews(t,e,r,i){let o=Kt();const u=Xe(),c=(function(){return Xe()})();return e.forEach(((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof Jn)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),Je(_.mutation,f,_.mutation.getFieldMask(),vt.now())):u.set(f.key,Ut.empty())})),this.recalculateAndSaveOverlays(t,o).next((d=>(d.forEach(((f,_)=>u.set(f,_))),e.forEach(((f,_)=>{var w;return c.set(f,new Zh(_,(w=u.get(f))!==null&&w!==void 0?w:null))})),c)))}recalculateAndSaveOverlays(t,e){const r=Xe();let i=new nt(((u,c)=>u-c)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const c of u)c.keys().forEach((d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Ut.empty();_=c.applyToLocalView(f,_),r.set(d,_);const w=(i.get(c.batchId)||q()).add(d);i=i.insert(c.batchId,w)}))})).next((()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,w=va();_.forEach((R=>{if(!o.has(R)){const C=Aa(e.get(R),r.get(R));C!==null&&w.set(R,C),o=o.add(R)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return S.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(u){return L.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(Jt());let c=-1,d=o;return u.next((f=>S.forEach(f,((_,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(t,_).next((R=>{d=d.insert(_,R)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,d,f,q()))).next((_=>({batchId:c,changes:ph(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next((r=>{let i=He();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=He();return this.indexManager.getCollectionParents(t,o).next((c=>S.forEach(c,(d=>{const f=(function(w,R){return new Qn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next((_=>{_.forEach(((w,R)=>{u=u.insert(w,R)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((u=>{o.forEach(((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))}));let c=He();return u.forEach(((d,f)=>{const _=o.get(d);_!==void 0&&Je(_.mutation,f,Ut.empty(),vt.now()),Yn(e,f)&&(c=c.insert(d,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return S.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:pe(i.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,(function(i){return{name:i.name,query:Wh(i.bundledQuery),readTime:pe(i.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.overlays=new nt(L.comparator),this.Ir=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Jt();return S.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.ht(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=Jt(),o=e.length+1,u=new L(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new nt(((f,_)=>f-_));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Jt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=Jt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((f,_)=>c.set(f,_))),!(c.size()>=i)););return S.resolve(c)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Ch(e,r));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.Tr=new ut(it.Er),this.dr=new ut(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Vr(new it(t,e))}mr(t,e){t.forEach((r=>this.removeReference(r,e)))}gr(t){const e=new L(new Z([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.dr.forEachInRange([r,i],(u=>{this.Vr(u),o.push(u.key)})),o}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new L(new Z([])),r=new it(e,t),i=new it(e,t+1);let o=q();return this.dr.forEachInRange([r,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new it(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return L.comparator(t.key,e.key)||z(t.wr,e.wr)}static Ar(t,e){return z(t.wr,e.wr)||L.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(it.Er)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Sh(o,e,r,i);this.mutationQueue.push(u);for(const c of i)this.br=this.br.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],(u=>{const c=this.Dr(u.wr);o.push(c)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut(z);return e.forEach((i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],(c=>{r=r.add(c.wr)}))})),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const u=new it(new L(o),0);let c=new ut(z);return this.br.forEachWhile((d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.wr)),!0)}),u),S.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach((r=>{const i=this.Dr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){tt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(e.mutations,(i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.br=r}))}On(t){}containsKey(t,e){const r=new it(e,0),i=this.br.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t){this.Mr=t,this.docs=(function(){return new nt(L.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=Kt();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Kt();const u=e.path,c=new L(u.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||$c(qc(_),r)<=0||(i.has(_.key)||Yn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){F()}Or(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new od(this)}getSize(t){return S.resolve(this.size)}}class od extends Jh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t){this.persistence=t,this.Nr=new Ae((e=>gs(e)),_s),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Is,this.targetCount=0,this.kr=ve.Bn()}forEachTarget(t,e){return this.Nr.forEach(((r,i)=>e(i))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),S.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ve(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Kn(e),S.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach(((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)})),S.waitFor(o).next((()=>i))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ds(0),this.Kr=!1,this.Kr=!0,this.$r=new rd,this.referenceDelegate=t(this),this.Ur=new ad(this),this.indexManager=new Yh,this.remoteDocumentCache=(function(i){return new id(i)})((r=>this.referenceDelegate.Wr(r))),this.serializer=new Qh(e),this.Gr=new ed(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new sd(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new ld(this.Qr.next());return this.referenceDelegate.zr(),r(i).next((o=>this.referenceDelegate.jr(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Hr(t,e){return S.or(Object.values(this.qr).map((r=>()=>r.containsKey(t,e))))}}class ld extends Kc{constructor(t){super(),this.currentSequenceNumber=t}}class ws{constructor(t){this.persistence=t,this.Jr=new Is,this.Yr=null}static Zr(t){return new ws(t)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),S.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((i=>this.Xr.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.Xr.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,(r=>{const i=L.fromPath(r);return this.ei(t,i).next((o=>{o||e.removeEntry(i,M.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return S.or([()=>S.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new As(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return pl()?8:Gc(dl())>0?6:4})()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.Zi(t,e,i,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new cd;return this.Xi(t,e,u).next((c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)}))})).next((()=>o.result))}es(t,e,r,i){return r.documentReadCount<this.ji?(ze()<=j.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",le(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(ze()<=j.DEBUG&&N("QueryEngine","Query:",le(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ze()<=j.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",le(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):S.resolve())}Yi(t,e){if(ho(e))return S.resolve(null);let r=St(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Jr(e,null,"F"),r=St(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=q(...o);return this.Ji.getDocuments(t,u).next((c=>this.indexManager.getMinOffset(t,r).next((d=>{const f=this.ts(e,c);return this.ns(e,f,u,d.readTime)?this.Yi(t,Jr(e,null,"F")):this.rs(t,f,e,d)}))))})))))}Zi(t,e,r,i){return ho(e)||i.isEqual(M.min())?S.resolve(null):this.Ji.getDocuments(t,r).next((o=>{const u=this.ts(e,o);return this.ns(e,u,r,i)?S.resolve(null):(ze()<=j.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),le(e)),this.rs(t,u,e,jc(i,-1)).next((c=>c)))}))}ts(t,e){let r=new ut(ya(t));return e.forEach(((i,o)=>{Yn(t,o)&&(r=r.add(o))})),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return ze()<=j.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",le(e)),this.Ji.getDocumentsMatchingQuery(t,e,$t.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new nt(z),this._s=new Ae((o=>gs(o)),_s),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new td(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function fd(n,t,e,r){return new dd(n,t,e,r)}async function Oa(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],c=[];let d=q();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next((f=>({hs:f,removedBatchIds:u,addedBatchIds:c})))}))}))}function La(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function pd(n,t){const e=B(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach(((_,w)=>{const R=i.get(w);if(!R)return;c.push(e.Ur.removeMatchingKeys(o,_.removedDocuments,w).next((()=>e.Ur.addMatchingKeys(o,_.addedDocuments,w))));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?C=C.withResumeToken(lt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,r)),i=i.insert(w,C),(function(k,D,Y){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(R,C,_)&&c.push(e.Ur.updateTargetData(o,C))}));let d=Kt(),f=q();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),c.push(md(o,u,t.documentUpdates).next((_=>{d=_.Ps,f=_.Is}))),!r.isEqual(M.min())){const _=e.Ur.getLastRemoteSnapshotVersion(o).next((w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(_)}return S.waitFor(c).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,d,f))).next((()=>d))})).then((o=>(e.os=i,o)))}function md(n,t,e){let r=q(),i=q();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let u=Kt();return e.forEach(((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(M.min())?(t.removeEntry(c,d.readTime),u=u.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(c,d)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)})),{Ps:u,Is:i}}))}function gd(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Ur.getTargetData(r,t).next((o=>o?(i=o,S.resolve(i)):e.Ur.allocateTargetId(r).next((u=>(i=new Bt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r}))}async function rs(n,t,e){const r=B(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!un(u))throw u;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function wo(n,t,e){const r=B(n);let i=M.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(d,f,_){const w=B(d),R=w._s.get(_);return R!==void 0?S.resolve(w.os.get(R)):w.Ur.getTargetData(f,_)})(r,u,St(t)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(u,c.targetId).next((d=>{o=d}))})).next((()=>r.ss.getDocumentsMatchingQuery(u,t,e?i:M.min(),e?o:q()))).next((c=>(_d(r,hh(t),c),{documents:c,Ts:o})))))}function _d(n,t,e){let r=n.us.get(t)||M.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.us.set(t,r)}class Ao{constructor(){this.activeTargetIds=_h()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yd{constructor(){this.so=new Ao,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ao,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn=null;function Mr(){return xn===null?xn=(function(){return 268435456+Math.round(2147483648*Math.random())})():xn++,"0x"+xn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Id extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,u){const c=Mr(),d=this.xo(e,r.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${c}:`,d,i);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,d,f,i).then((_=>(N("RestConnection",`Received RPC '${e}' ${c}: `,_),_)),(_=>{throw ge("RestConnection",`RPC '${e}' ${c} failed with error: `,_,"url: ",d,"request:",i),_}))}Lo(e,r,i,o,u,c){return this.Mo(e,r,i,o,u)}Oo(e,r,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+we})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((o,u)=>e[u]=o)),i&&i.headers.forEach(((o,u)=>e[u]=o))}xo(e,r){const i=vd[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=Mr();return new Promise(((u,c)=>{const d=new ra;d.setWithCredentials(!0),d.listenOnce(sa.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case On.NO_ERROR:const _=d.getResponseJson();N(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case On.TIMEOUT:N(pt,`RPC '${t}' ${o} timed out`),c(new O(b.DEADLINE_EXCEEDED,"Request time out"));break;case On.HTTP_ERROR:const w=d.getStatus();if(N(pt,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R?.error;if(C&&C.status&&C.message){const V=(function(D){const Y=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(Y)>=0?Y:b.UNKNOWN})(C.status);c(new O(V,C.message))}else c(new O(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new O(b.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{N(pt,`RPC '${t}' ${o} completed.`)}}));const f=JSON.stringify(i);N(pt,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,r,15)}))}Bo(t,e,r){const i=Mr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=aa(),c=oa(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");N(pt,`Creating RPC '${t}' stream ${i}: ${_}`,d);const w=u.createWebChannel(_,d);let R=!1,C=!1;const V=new Td({Io:D=>{C?N(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(N(pt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),N(pt,`RPC '${t}' stream ${i} sending:`,D),w.send(D))},To:()=>w.close()}),k=(D,Y,Q)=>{D.listen(Y,(K=>{try{Q(K)}catch(X){setTimeout((()=>{throw X}),0)}}))};return k(w,Ge.EventType.OPEN,(()=>{C||(N(pt,`RPC '${t}' stream ${i} transport opened.`),V.yo())})),k(w,Ge.EventType.CLOSE,(()=>{C||(C=!0,N(pt,`RPC '${t}' stream ${i} transport closed`),V.So())})),k(w,Ge.EventType.ERROR,(D=>{C||(C=!0,ge(pt,`RPC '${t}' stream ${i} transport errored:`,D),V.So(new O(b.UNAVAILABLE,"The operation could not be completed")))})),k(w,Ge.EventType.MESSAGE,(D=>{var Y;if(!C){const Q=D.data[0];tt(!!Q);const K=Q,X=K.error||((Y=K[0])===null||Y===void 0?void 0:Y.error);if(X){N(pt,`RPC '${t}' stream ${i} received error:`,X);const It=X.status;let G=(function(g){const y=rt[g];if(y!==void 0)return Sa(y)})(It),E=X.message;G===void 0&&(G=b.INTERNAL,E="Unknown error status: "+It+" with message "+X.message),C=!0,V.So(new O(G,E)),w.close()}else N(pt,`RPC '${t}' stream ${i} received:`,Q),V.bo(Q)}})),k(c,ia.STAT_EVENT,(D=>{D.stat===Gr.PROXY?N(pt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Gr.NOPROXY&&N(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{V.wo()}),0),V}}function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n){return new Oh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,e,r,i,o,u,c,d){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fa(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(xt(e.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.Yo===e&&this.P_(r,i)}),(r=>{t((()=>{const i=new O(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)}))}))}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{r((()=>this.listener.Eo()))})),this.stream.Ro((()=>{r((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((i=>{r((()=>this.I_(i)))})),this.stream.onMessage((i=>{r((()=>++this.e_==1?this.E_(i):this.onNext(i)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ad extends wd{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Bh(this.serializer,t),r=(function(o){if(!("targetChange"in o))return M.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?M.min():u.readTime?pe(u.readTime):M.min()})(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Io(this.serializer),e.addTarget=(function(o,u){let c;const d=u.target;if(c=Xr(d)?{documents:jh(o,d)}:{query:qh(o,d)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Mh(o,u.resumeToken);const f=es(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(M.min())>0){c.readTime=Lh(o,u.snapshotVersion.toTimestamp());const f=es(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,t);const r=zh(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Io(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Mo(t,ns(e,r),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(b.UNKNOWN,o.toString())}))}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Lo(t,ns(e,r),i,u,c,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(b.UNKNOWN,u.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Sd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xt(e),this.D_=!1):N("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o((u=>{r.enqueueAndForget((async()=>{hn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await(async function(d){const f=B(d);f.L_.add(4),await cn(f),f.q_.set("Unknown"),f.L_.delete(4),await tr(f)})(this))}))})),this.q_=new Sd(r,i)}}async function tr(n){if(hn(n))for(const t of n.B_)await t(!0)}async function cn(n){for(const t of n.B_)await t(!1)}function Ua(n,t){const e=B(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ps(e)?Cs(e):Re(e).r_()&&Ss(e,t))}function Rs(n,t){const e=B(n),r=Re(e);e.N_.delete(t),r.r_()&&Ba(e,t),e.N_.size===0&&(r.r_()?r.o_():hn(e)&&e.q_.set("Unknown"))}function Ss(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Re(n).A_(t)}function Ba(n,t){n.Q_.xe(t),Re(n).R_(t)}function Cs(n){n.Q_=new Dh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Re(n).start(),n.q_.v_()}function Ps(n){return hn(n)&&!Re(n).n_()&&n.N_.size>0}function hn(n){return B(n).L_.size===0}function ja(n){n.Q_=void 0}async function Pd(n){n.q_.set("Online")}async function bd(n){n.N_.forEach(((t,e)=>{Ss(n,t)}))}async function Vd(n,t){ja(n),Ps(n)?(n.q_.M_(t),Cs(n)):n.q_.set("Unknown")}async function Dd(n,t,e){if(n.q_.set("Online"),t instanceof Pa&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.N_.delete(c),i.Q_.removeTarget(c))})(n,t)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await So(n,r)}else if(t instanceof Mn?n.Q_.Ke(t):t instanceof Ca?n.Q_.He(t):n.Q_.We(t),!e.isEqual(M.min()))try{const r=await La(n.localStore);e.compareTo(r)>=0&&await(function(o,u){const c=o.Q_.rt(u);return c.targetChanges.forEach(((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.N_.get(f);_&&o.N_.set(f,_.withResumeToken(d.resumeToken,u))}})),c.targetMismatches.forEach(((d,f)=>{const _=o.N_.get(d);if(!_)return;o.N_.set(d,_.withResumeToken(lt.EMPTY_BYTE_STRING,_.snapshotVersion)),Ba(o,d);const w=new Bt(_.target,d,f,_.sequenceNumber);Ss(o,w)})),o.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await So(n,r)}}async function So(n,t,e){if(!un(t))throw t;n.L_.add(1),await cn(n),n.q_.set("Offline"),e||(e=()=>La(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await tr(n)}))}async function Co(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=hn(e);e.L_.add(3),await cn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await tr(e)}async function Nd(n,t){const e=B(n);t?(e.L_.delete(2),await tr(e)):t||(e.L_.add(2),await cn(e),e.q_.set("Unknown"))}function Re(n){return n.K_||(n.K_=(function(e,r,i){const o=B(e);return o.w_(),new Ad(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Eo:Pd.bind(null,n),Ro:bd.bind(null,n),mo:Vd.bind(null,n),d_:Dd.bind(null,n)}),n.B_.push((async t=>{t?(n.K_.s_(),Ps(n)?Cs(n):n.q_.set("Unknown")):(await n.K_.stop(),ja(n))}))),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,c=new bs(t,e,u,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qa(n,t){if(xt("AsyncQueue",`${t}: ${n}`),un(n))return new O(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=He(),this.sortedSet=new nt(this.comparator)}static emptySet(t){return new me(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new me;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.W_=new nt(L.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):F():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Te{constructor(t,e,r,i,o,u,c,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach((c=>{u.push({type:0,doc:c})})),new Te(t,e,me.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class xd{constructor(){this.queries=bo(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=B(e),o=i.queries;i.queries=bo(),o.forEach(((u,c)=>{for(const d of c.j_)d.onError(r)}))})(this,new O(b.ABORTED,"Firestore shutting down"))}}function bo(){return new Ae((n=>_a(n)),Wn)}async function Od(n,t){const e=B(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new kd,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=qa(u,`Initialization of query '${le(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Vs(e)}async function Ld(n,t){const e=B(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Md(n,t){const e=B(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.j_)c.X_(i)&&(r=!0);u.z_=i}}r&&Vs(e)}function Fd(n,t,e){const r=B(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function Vs(n){n.Y_.forEach((t=>{t.next()}))}var ss,Vo;(Vo=ss||(ss={})).ea="default",Vo.Cache="cache";class Ud{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Te(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Te.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ss.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.key=t}}class za{constructor(t){this.key=t}}class Bd{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=ya(t),this.Ra=new me(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Po,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,w)=>{const R=i.get(_),C=Yn(this.query,w)?w:null,V=!!R&&this.mutatedKeys.has(R.key),k=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;R&&C?R.data.isEqual(C.data)?V!==k&&(r.track({type:3,doc:C}),D=!0):this.ga(R,C)||(r.track({type:2,doc:C}),D=!0,(d&&this.Aa(C,d)>0||f&&this.Aa(C,f)<0)&&(c=!0)):!R&&C?(r.track({type:0,doc:C}),D=!0):R&&!C&&(r.track({type:1,doc:R}),D=!0,(d||f)&&(c=!0)),D&&(C?(u=u.add(C),o=k?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ra:u,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort(((_,w)=>(function(C,V){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return k(C)-k(V)})(_.type,w.type)||this.Aa(_.doc,w.doc))),this.pa(r),i=i!=null&&i;const c=e&&!i?this.ya():[],d=this.da.size===0&&this.current&&!i?1:0,f=d!==this.Ea;return this.Ea=d,u.length!==0||f?{snapshot:new Te(this.query,t.Ra,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Po,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach((r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))}));const e=[];return t.forEach((r=>{this.da.has(r)||e.push(new za(r))})),this.da.forEach((r=>{t.has(r)||e.push(new $a(r))})),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Te.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class jd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class qd{constructor(t){this.key=t,this.va=!1}}class $d{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Ae((c=>_a(c)),Wn),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(L.comparator),this.Na=new Map,this.La=new Is,this.Ba={},this.ka=new Map,this.qa=ve.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function zd(n,t,e=!0){const r=Wa(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Ka(r,t,e,!0),i}async function Kd(n,t){const e=Wa(n);await Ka(e,t,!0,!1)}async function Ka(n,t,e,r){const i=await gd(n.localStore,St(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Gd(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&Ua(n.remoteStore,i),c}async function Gd(n,t,e,r,i){n.Ka=(w,R,C)=>(async function(k,D,Y,Q){let K=D.view.ma(Y);K.ns&&(K=await wo(k.localStore,D.query,!1).then((({documents:E})=>D.view.ma(E,K))));const X=Q&&Q.targetChanges.get(D.targetId),It=Q&&Q.targetMismatches.get(D.targetId)!=null,G=D.view.applyChanges(K,k.isPrimaryClient,X,It);return No(k,D.targetId,G.wa),G.snapshot})(n,w,R,C);const o=await wo(n.localStore,t,!0),u=new Bd(t,o.Ts),c=u.ma(o.documents),d=ln.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(c,n.isPrimaryClient,d);No(n,e,f.wa);const _=new jd(t,e,u);return n.Fa.set(t,_),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Hd(n,t,e){const r=B(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter((u=>!Wn(u,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Rs(r.remoteStore,i.targetId),is(r,i.targetId)})).catch(hs)):(is(r,i.targetId),await rs(r.localStore,i.targetId,!0))}async function Qd(n,t){const e=B(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Rs(e.remoteStore,r.targetId))}async function Ga(n,t){const e=B(n);try{const r=await pd(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Na.get(o);u&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.va=!0:i.modifiedDocuments.size>0?tt(u.va):i.removedDocuments.size>0&&(tt(u.va),u.va=!1))})),await Qa(e,r,t)}catch(r){await hs(r)}}function Do(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach(((o,u)=>{const c=u.view.Z_(t);c.snapshot&&i.push(c.snapshot)})),(function(u,c){const d=B(u);d.onlineState=c;let f=!1;d.queries.forEach(((_,w)=>{for(const R of w.j_)R.Z_(c)&&(f=!0)})),f&&Vs(d)})(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Wd(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let u=new nt(L.comparator);u=u.insert(o,gt.newNoDocument(o,M.min()));const c=q().add(o),d=new Zn(M.min(),new Map,new nt(z),u,c);await Ga(r,d),r.Oa=r.Oa.remove(o),r.Na.delete(t),Ds(r)}else await rs(r.localStore,t,!1).then((()=>is(r,t,e))).catch(hs)}function is(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach((r=>{n.La.containsKey(r)||Ha(n,r)}))}function Ha(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Rs(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ds(n))}function No(n,t,e){for(const r of e)r instanceof $a?(n.La.addReference(r.key,t),Yd(n,r)):r instanceof za?(N("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Ha(n,r.key)):F()}function Yd(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(N("SyncEngine","New document in limbo: "+e),n.xa.add(r),Ds(n))}function Ds(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new L(Z.fromString(t)),r=n.qa.next();n.Na.set(r,new qd(e)),n.Oa=n.Oa.insert(e,r),Ua(n.remoteStore,new Bt(St(ys(e.path)),r,"TargetPurposeLimboResolution",ds.oe))}}async function Qa(n,t,e){const r=B(n),i=[],o=[],u=[];r.Fa.isEmpty()||(r.Fa.forEach(((c,d)=>{u.push(r.Ka(d,t,e).then((f=>{var _;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(_=e?.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){i.push(f);const w=As.Wi(d.targetId,f);o.push(w)}})))})),await Promise.all(u),r.Ca.d_(i),await(async function(d,f){const _=B(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>S.forEach(f,(R=>S.forEach(R.$i,(C=>_.persistence.referenceDelegate.addReference(w,R.targetId,C))).next((()=>S.forEach(R.Ui,(C=>_.persistence.referenceDelegate.removeReference(w,R.targetId,C)))))))))}catch(w){if(!un(w))throw w;N("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const C=_.os.get(R),V=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(V);_.os=_.os.insert(R,k)}}})(r.localStore,o))}async function Xd(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const r=await Oa(e.localStore,t);e.currentUser=t,(function(o,u){o.ka.forEach((c=>{c.forEach((d=>{d.reject(new O(b.CANCELLED,u))}))})),o.ka.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Qa(e,r.hs)}}function Jd(n,t){const e=B(n),r=e.Na.get(t);if(r&&r.va)return q().add(r.key);{let i=q();const o=e.Ma.get(t);if(!o)return i;for(const u of o){const c=e.Fa.get(u);i=i.unionWith(c.view.Va)}return i}}function Wa(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ga.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Wd.bind(null,t),t.Ca.d_=Md.bind(null,t.eventManager),t.Ca.$a=Fd.bind(null,t.eventManager),t}class zn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ma(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return fd(this.persistence,new hd,t.initialUser,this.serializer)}Ga(t){return new ud(ws.Zr,this.serializer)}Wa(t){return new yd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zn.provider={build:()=>new zn};class os{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Do(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xd.bind(null,this.syncEngine),await Nd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new xd})()}createDatastore(t){const e=Ma(t.databaseInfo.databaseId),r=(function(o){return new Id(o)})(t.databaseInfo);return(function(o,u,c,d){return new Rd(o,u,c,d)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,u,c){return new Cd(r,i,o,u,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Do(this.syncEngine,e,0)),(function(){return Ro.D()?new Ro:new Ed})())}createSyncEngine(t,e){return(function(i,o,u,c,d,f,_){const w=new $d(i,o,u,c,d,f);return _&&(w.Qa=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=B(i);N("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await cn(o),o.k_.shutdown(),o.q_.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}os.provider={build:()=>new os};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):xt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=la.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{N("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(N("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=qa(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ur(n,t){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Oa(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function ko(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ef(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Co(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Co(t.remoteStore,i))),n._onlineComponents=t}async function ef(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ur(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;ge("Error using user provided cache. Falling back to memory cache: "+e),await Ur(n,new zn)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Ur(n,new zn);return n._offlineComponents}async function nf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await ko(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await ko(n,new os))),n._onlineComponents}async function rf(n){const t=await nf(n),e=t.eventManager;return e.onListen=zd.bind(null,t.syncEngine),e.onUnlisten=Hd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Kd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Qd.bind(null,t.syncEngine),e}function sf(n,t,e={}){const r=new te;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,c,d,f){const _=new Zd({next:R=>{_.Za(),u.enqueueAndForget((()=>Ld(o,w)));const C=R.docs.has(c);!C&&R.fromCache?f.reject(new O(b.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&R.fromCache&&d&&d.source==="server"?f.reject(new O(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new Ud(ys(c.path),_,{includeMetadataChanges:!0,_a:!0});return Od(o,w)})(await rf(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n,t,e){if(!e)throw new O(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function af(n,t,e,r){if(t===!0&&r===!0)throw new O(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Oo(n){if(!L.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F()}function as(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=uf(n);throw new O(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}af("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ya((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ns{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lo(t),t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Nc;switch(r.type){case"firstParty":return new Lc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=xo.get(e);r&&(N("ComponentProvider","Removing Datastore"),xo.delete(e),r.terminate())})(this),Promise.resolve()}}function lf(n,t,e,r={}){var i;const o=(n=as(n,Ns))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&ge("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=mt.MOCK_USER;else{c=hl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new O(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new mt(f)}n._authCredentials=new kc(new ua(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ks(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class an extends ks{constructor(t,e,r){super(t,e,ys(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new L(t))}withConverter(t){return new an(this.firestore,t,this._path)}}function cf(n,t,...e){if(n=vl(n),arguments.length===1&&(t=la.newId()),of("doc","path",t),n instanceof Ns){const r=Z.fromString(t,...e);return Oo(r),new Nt(n,null,new L(r))}{if(!(n instanceof Nt||n instanceof an))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Oo(r),new Nt(n.firestore,n instanceof an?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fa(this,"async_queue_retry"),this.Vu=()=>{const r=Fr();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Fr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new te;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!un(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((r=>{this.Eu=r,this.du=!1;const i=(function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c})(r);throw xt("INTERNAL UNHANDLED ERROR: ",i),r})).then((r=>(this.du=!1,r))))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=bs.createAndSchedule(this,t,e,r,(o=>this.yu(o)));return this.Tu.push(i),i}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Xa extends Ns{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Mo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Mo(t),this._firestoreClient=void 0,await t}}}function Fo(n,t){const e=typeof n=="object"?n:Tc(),r=typeof n=="string"?n:"(default)",i=_c(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ll("firestore");o&&lf(i,...o)}return i}function hf(n){if(n._terminated)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||df(n),n._firestoreClient}function df(n){var t,e,r;const i=n._freezeSettings(),o=(function(c,d,f,_){return new Wc(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ya(_.experimentalLongPollingOptions),_.useFetchStreams)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new tf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const d=c?._online.build();return{_offline:c?._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kn(lt.fromBase64String(t))}catch(e){throw new O(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Kn(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}}const mf=new RegExp("[~\\*/\\[\\]]");function gf(n,t,e){if(t.search(mf)>=0)throw Uo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Ja(...t.split("."))._internalPath}catch{throw Uo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Uo(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new O(b.INVALID_ARGUMENT,o+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _f(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(tu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class _f extends Za{data(){return super.data()}}function tu(n,t){return typeof t=="string"?gf(n,t):t instanceof Ja?t._internalPath:t._delegate._internalPath}class yf{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Hn(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((u=>et(u.doubleValue)));return new pf(o)}convertGeoPoint(t){return new ff(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ps(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(rn(t));default:return null}}convertTimestamp(t){const e=zt(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);tt(xa(r));const i=new sn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(e)||xt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eu extends Za{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(tu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class vf extends eu{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n){n=as(n,Nt);const t=as(n.firestore,Xa);return sf(hf(t),n._key).then((e=>wf(t,n,e)))}class If extends yf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}function wf(n,t,e){const r=e.docs.get(t._key),i=new If(n);return new eu(n,i,t._key,r,new Ef(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){we=i})(vc),Un(new Ze("firestore",((r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new Xa(new xc(r.getProvider("auth-internal")),new Fc(r.getProvider("app-check-internal")),(function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(f.options.projectId,_)})(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),fe(eo,"4.7.3",t),fe(eo,"4.7.3","esm2017")})();var Af="firebase",Rf="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe(Af,Rf,"app");const Xt={apiKey:"AIzaSyDb0C_yeAMVI-O0wkMzeXmsGoc0MIua6v8",authDomain:"lullaby-dashboard.firebaseapp.com",projectId:"lullaby-dashboard",storageBucket:"lullaby-dashboard.firebasestorage.app",messagingSenderId:"960750423784",appId:"1:960750423784:web:027368a1188967d2ce435d"};function Sf(){return!!(Xt.apiKey&&Xt.authDomain&&Xt.projectId&&Xt.storageBucket&&Xt.messagingSenderId&&Xt.appId)}if(!Sf())throw new Error("Missing required Firebase environment variables. Please set PUBLIC_FIREBASE_API_KEY, PUBLIC_FIREBASE_AUTH_DOMAIN, PUBLIC_FIREBASE_PROJECT_ID, PUBLIC_FIREBASE_STORAGE_BUCKET, PUBLIC_FIREBASE_MESSAGING_SENDER_ID, and PUBLIC_FIREBASE_APP_ID.");const Cf=Ic().length?Fo():Fo(Zo(Xt)),xs="lullaby-dashboard-state",er=typeof window<"u";function Pf(n){if(!n||typeof n!="object"||Array.isArray(n))return;const t=n;if(typeof t.selectedIndex!="number"||typeof t.checkedKeys!="object"||t.checkedKeys===null||Array.isArray(t.checkedKeys)||typeof t.listExpiryTimestamps!="object"||t.listExpiryTimestamps===null||Array.isArray(t.listExpiryTimestamps))return;const e=Object.fromEntries(Object.entries(t.checkedKeys).filter(([,i])=>typeof i=="boolean")),r=Object.fromEntries(Object.entries(t.listExpiryTimestamps).filter(([,i])=>typeof i=="number"));return{checkedKeys:e,listExpiryTimestamps:r,selectedIndex:t.selectedIndex}}function bf(){if(er)try{const n=window.localStorage.getItem(xs);if(!n)return;const t=JSON.parse(n);return Pf(t)}catch{return}}function Vf(n,t){const e=Date.now(),r={},i={};for(const[o,u]of Object.entries(n.checkedKeys)){const[c]=o.split("-",2),d=t.find(_=>_.id===c),f=n.listExpiryTimestamps[c];!d?.retentionHours||typeof f!="number"||e>=f||(r[o]=u,i[c]=f)}return{checkedKeys:r,listExpiryTimestamps:i,selectedIndex:n.selectedIndex}}function Bo(n){if(er)try{window.localStorage.setItem(xs,JSON.stringify(n))}catch{}}function Df(){if(er)try{window.localStorage.removeItem(xs)}catch{}}const wt=Ko((n,t)=>({lists:[],selectedIndex:0,checkedKeys:{},listExpiryTimestamps:{},setLists(e){n(r=>({...r,lists:e}))},setSelectedIndex(e){return n(r=>{const i={...r,selectedIndex:e};return Bo({checkedKeys:r.checkedKeys,listExpiryTimestamps:r.listExpiryTimestamps,selectedIndex:e}),i})},toggleItem(e){return n(r=>{const[i]=e.split("-",2),o=r.lists.find(d=>d.id===i),u={...r.checkedKeys,[e]:!r.checkedKeys[e]},c=o?.retentionHours?{...r.listExpiryTimestamps,[i]:Date.now()+o.retentionHours*60*60*1e3}:r.listExpiryTimestamps;return Bo({checkedKeys:u,listExpiryTimestamps:c,selectedIndex:r.selectedIndex}),{checkedKeys:u,listExpiryTimestamps:c}})},hydrateState(){if(!er)return;const e=bf();if(!e)return;const r=Vf(e,t().lists);n(i=>({...i,selectedIndex:r.selectedIndex,checkedKeys:r.checkedKeys,listExpiryTimestamps:r.listExpiryTimestamps}))},resetState(){Df(),n({selectedIndex:0,checkedKeys:{},listExpiryTimestamps:{}})}})),Nf=[{id:"loadConfiguration",label:"Loading configuration",status:"pending"},{id:"hydrateState",label:"Restoring saved state",status:"pending"},{id:"finalize",label:"Finalizing startup",status:"pending"}],Ke=Ko((n,t)=>({steps:Nf,failureInfo:null,isReady:!1,startupStarted:!1,updateStepStatus(e,r){n(i=>({steps:i.steps.map(o=>o.id===e?{...o,status:r}:o)}))},setFailureInfo(e){n({failureInfo:e})},setReady(e){n({isReady:e})},setStartupStarted(e){n({startupStarted:e})},async initialize(){if(t().startupStarted)return;n({startupStarted:!0});const e=wt.getState();let r="loadConfiguration";try{t().updateStepStatus(r,"inProgress");const i=await Tf(cf(Cf,"dashboard","configuration"));if(!i.exists())throw new Error("Firebase configuration document not found");const o=i.data();if(!o||!Array.isArray(o.savedLists))throw new Error("Firebase configuration is missing savedLists");e.setLists(o.savedLists),t().updateStepStatus(r,"complete"),r="hydrateState",t().updateStepStatus(r,"inProgress"),e.hydrateState(),t().updateStepStatus(r,"complete"),r="finalize",t().updateStepStatus(r,"inProgress"),await new Promise(u=>setTimeout(u,120)),t().updateStepStatus(r,"complete"),t().setReady(!0)}catch(i){const o=i instanceof Error?i.message:String(i),u=i instanceof Error?i.stack:void 0;t().updateStepStatus(r,"failed"),t().setFailureInfo({step:r,message:o,stack:u})}}}));function kf({children:n}){const t=Ke(u=>u.steps),e=Ke(u=>u.failureInfo),r=Ke(u=>u.isReady),i=Ke(u=>u.startupStarted),o=Ke(u=>u.initialize);return de.useEffect(()=>{i||o()},[o,i]),e?x.jsx(ju,{failureInfo:e}):r?x.jsx(x.Fragment,{children:n}):x.jsx("div",{className:"loader",children:x.jsxs("div",{className:"loader__panel",children:[x.jsx("h1",{className:"loader__heading",children:"Starting dashboard"}),x.jsx("p",{className:"loader__message",children:"Please wait while we load your configuration and restore saved progress."}),x.jsx("ol",{className:"loader__list",children:t.map(u=>x.jsxs("li",{className:`loader__item loader__item--${u.status}`,children:[x.jsx("span",{className:`loader__item-status loader__item-status--${u.status}`,"aria-hidden":"true",children:u.status==="complete"?"✓":u.status==="failed"?"✕":""}),x.jsx("span",{children:u.label})]},u.id))})]})})}function jo(n){return n.toString().padStart(2,"0")}function qo(){const n=new Date;return`${jo(n.getHours())}:${jo(n.getMinutes())}`}function xf(){const[n,t]=de.useState(qo());return de.useEffect(()=>{const e=setInterval(()=>{t(qo())},1e3);return()=>clearInterval(e)},[]),x.jsx("span",{children:n})}function Of({videoUrl:n}){const t=n?`${n}&autoplay=1`:"";return x.jsx("iframe",{className:"video-embed__iframe",src:t,title:"YouTube video player",frameBorder:"0",allow:"autoplay; fullscreen; encrypted-media; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}function Lf({list:n}){const t=wt(r=>r.checkedKeys),e=wt(r=>r.toggleItem);return x.jsx(x.Fragment,{children:n.groups.map(r=>r.items?.length?x.jsx("div",{className:"todo-list",children:x.jsx("ul",{className:"todo-list__group",children:r.items.map(i=>{const o=`${n.id}-${r.id}-${i.id}`,u=!!t[o];return x.jsx("li",{className:`todo-list__item${u?" todo-list__item--checked":""}`,style:{color:i.color},onClick:()=>e(o),children:x.jsx("span",{className:"todo-list__item-text",children:i.name})},o)})})},r.id):null)})}function Mf(){const n=wt(i=>i.lists),t=wt(i=>i.selectedIndex),e=wt(i=>i.setSelectedIndex),r=i=>{e(Number(i.target.value))};return x.jsx("div",{className:"list-selector",children:x.jsx("select",{className:"list-selector__select",value:t,onChange:r,children:n.map((i,o)=>x.jsx("option",{value:o,children:i.label},i.id??o))})})}function Ff(){const n=wt(c=>c.selectedIndex),t=wt(c=>c.lists),e=wt(c=>c.checkedKeys),[r,i]=de.useState(!1),[o,u]=de.useState(null);return de.useEffect(()=>{if(typeof window>"u")return;(async()=>{try{const d=document.querySelector("link[rel=stylesheet]")?.href??null,f=Array.from(document.styleSheets).map(w=>w.href?w.href:"(inline or unavailable)");let _=!1;if(d)try{_=(await fetch(d,{method:"HEAD"})).ok}catch{_=!1}u({url:window.location.href,pathname:window.location.pathname,origin:window.location.origin,stylesheetHref:d,stylesheetLoaded:_,stylesheetUrls:f,userAgent:window.navigator.userAgent,selectedIndex:n,listCount:t.length,checkedItemCount:Object.keys(e).length})}catch(d){u({url:window.location.href,pathname:window.location.pathname,origin:window.location.origin,stylesheetHref:null,stylesheetLoaded:!1,stylesheetUrls:[],userAgent:window.navigator.userAgent,selectedIndex:n,listCount:t.length,checkedItemCount:Object.keys(e).length,error:d instanceof Error?d.message:String(d)})}})()},[n,t.length,e]),x.jsxs(x.Fragment,{children:[x.jsx("button",{type:"button",onClick:()=>i(c=>!c),className:"debug-overlay__button",children:"Debug"}),r&&x.jsxs("div",{className:"debug-overlay__panel",children:[x.jsxs("div",{className:"debug-overlay__header",children:[x.jsx("strong",{children:"Debug info"}),x.jsx("button",{type:"button",onClick:()=>i(!1),className:"debug-overlay__close",children:"Close"})]}),x.jsx("pre",{className:"debug-overlay__content",children:o?`URL: ${o.url}
Pathname: ${o.pathname}
Origin: ${o.origin}
Stylesheet href: ${o.stylesheetHref??"(none)"}
Stylesheet loaded: ${o.stylesheetLoaded?"yes":"no"}
Stylesheets:
  - ${o.stylesheetUrls.join(`
  - `)}
User agent: ${o.userAgent}
Selected index: ${o.selectedIndex}
List count: ${o.listCount}
Checked items: ${o.checkedItemCount}
`+(o.error?`Error: ${o.error}
`:""):"Collecting debug info..."})]})]})}function Uf(){const n=wt(o=>o.selectedIndex),t=wt(o=>o.lists),e=wt(o=>o.resetState),r=t[n]??null,i=r?.bgColor?{backgroundColor:r.bgColor}:void 0;return x.jsxs(x.Fragment,{children:[x.jsxs("article",{className:"app",style:i,children:[x.jsx("section",{className:"app__content",children:r?x.jsx(Lf,{list:r}):x.jsx("div",{className:"app__no-list",children:"No list selected"})}),x.jsxs("div",{className:"app__sidebar",children:[x.jsx("figure",{className:"app__video",children:x.jsx(Of,{videoUrl:r?.youtubeUrl})}),x.jsx("section",{className:"app__clock",children:x.jsx(xf,{})}),x.jsxs("section",{className:"app__selector",children:[x.jsx(Mf,{}),x.jsx("button",{type:"button",className:"app__reset-button",onClick:e,children:"Reset"})]})]})]}),x.jsx(Ff,{})]})}function Kf(){return x.jsx(kf,{children:x.jsx(Uf,{})})}export{Kf as default};
