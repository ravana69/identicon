"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["signup"],{59753(a,b,c){function d(){if(!(this instanceof d))return new d;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}c.d(b,{f:()=>B,on:()=>A});var e,f=window.document.documentElement,g=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector;d.prototype.matchesSelector=function(a,b){return g.call(a,b)},d.prototype.querySelectorAll=function(a,b){return b.querySelectorAll(a)},d.prototype.indexes=[];var h=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"ID",selector:function(a){var b;if(b=a.match(h))return b[0].slice(1)},element:function(a){if(a.id)return[a.id]}});var i=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"CLASS",selector:function(a){var b;if(b=a.match(i))return b[0].slice(1)},element:function(a){var b=a.className;if(b){if("string"==typeof b)return b.split(/\s/);if("object"==typeof b&&"baseVal"in b)return b.baseVal.split(/\s/)}}});var j=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"TAG",selector:function(a){var b;if(b=a.match(j))return b[0].toUpperCase()},element:function(a){return[a.nodeName.toUpperCase()]}}),d.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},e="function"==typeof window.Map?window.Map:function(){function a(){this.map={}}return a.prototype.get=function(a){return this.map[a+" "]},a.prototype.set=function(a,b){this.map[a+" "]=b},a}();var k=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function l(a,b){var c,d,e,f,g,h,i=(a=a.slice(0).concat(a.default)).length,j=b,l=[];do if(k.exec(""),(e=k.exec(j))&&(j=e[3],e[2]||!j)){for(c=0;c<i;c++)if(g=(h=a[c]).selector(e[1])){for(d=l.length,f=!1;d--;)if(l[d].index===h&&l[d].key===g){f=!0;break}f||l.push({index:h,key:g});break}}while(e)return l}function m(a,b){var c,d,e;for(c=0,d=a.length;c<d;c++)if(e=a[c],b.isPrototypeOf(e))return e}function n(a,b){return a.id-b.id}d.prototype.logDefaultIndexUsed=function(){},d.prototype.add=function(a,b){var c,d,f,g,h,i,j,k,n=this.activeIndexes,o=this.selectors,p=this.selectorObjects;if("string"==typeof a){for(d=0,p[(c={id:this.uid++,selector:a,data:b}).id]=c,j=l(this.indexes,a);d<j.length;d++)g=(k=j[d]).key,f=k.index,h=m(n,f),h||((h=Object.create(f)).map=new e,n.push(h)),f===this.indexes.default&&this.logDefaultIndexUsed(c),i=h.map.get(g),i||(i=[],h.map.set(g,i)),i.push(c);this.size++,o.push(a)}},d.prototype.remove=function(a,b){if("string"==typeof a){var c,d,e,f,g,h,i,j,k=this.activeIndexes,m=this.selectors=[],n=this.selectorObjects,o={},p=1===arguments.length;for(e=0,c=l(this.indexes,a);e<c.length;e++)for(d=c[e],f=k.length;f--;)if(h=k[f],d.index.isPrototypeOf(h)){if(i=h.map.get(d.key))for(g=i.length;g--;)(j=i[g]).selector===a&&(p||j.data===b)&&(i.splice(g,1),o[j.id]=!0);break}for(e in o)delete n[e],this.size--;for(e in n)m.push(n[e].selector)}},d.prototype.queryAll=function(a){if(!this.selectors.length)return[];var b,c,d,e,f,g,h,i,j={},k=[],l=this.querySelectorAll(this.selectors.join(", "),a);for(b=0,d=l.length;b<d;b++)for(c=0,f=l[b],e=(g=this.matches(f)).length;c<e;c++)j[(i=g[c]).id]?h=j[i.id]:(h={id:i.id,selector:i.selector,data:i.data,elements:[]},j[i.id]=h,k.push(h)),h.elements.push(f);return k.sort(n)},d.prototype.matches=function(a){if(!a)return[];var b,c,d,e,f,g,h,i,j,k,l,m=this.activeIndexes,o={},p=[];for(b=0,e=m.length;b<e;b++)if(i=(h=m[b]).element(a)){for(c=0,f=i.length;c<f;c++)if(j=h.map.get(i[c]))for(d=0,g=j.length;d<g;d++)!o[l=(k=j[d]).id]&&this.matchesSelector(a,k.selector)&&(o[l]=!0,p.push(k))}return p.sort(n)};var o={},p={},q=new WeakMap,r=new WeakMap,s=new WeakMap,t=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function u(a,b,c){var d=a[b];return a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)},a}function v(){q.set(this,!0)}function w(){q.set(this,!0),r.set(this,!0)}function x(){return s.get(this)||null}function y(a,b){t&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:b||t.get})}function z(a){if(function(a){try{return a.eventPhase,!0}catch(b){return!1}}(a)){var b=(1===a.eventPhase?p:o)[a.type];if(b){var c=function(a,b,c){var d=[],e=b;do{if(1!==e.nodeType)break;var f=a.matches(e);if(f.length){var g={node:e,observers:f};c?d.unshift(g):d.push(g)}}while(e=e.parentElement)return d}(b,a.target,1===a.eventPhase);if(c.length){u(a,"stopPropagation",v),u(a,"stopImmediatePropagation",w),y(a,x);for(var d=0,e=c.length;d<e&&!q.get(a);d++){var f=c[d];s.set(a,f.node);for(var g=0,h=f.observers.length;g<h&&!r.get(a);g++)f.observers[g].data.call(f.node,a)}s.delete(a),y(a)}}}}function A(a,b,c){var e=arguments.length>3&& void 0!==arguments[3]?arguments[3]:{},f=!!e.capture,g=f?p:o,h=g[a];h||(h=new d,g[a]=h,document.addEventListener(a,z,f)),h.add(b,c)}function B(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:!0,detail:c}))}},54679(a,b,c){c.d(b,{H:()=>f,v:()=>e});var d=c(59753);function e(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!1)}function f(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!0)}(0,d.on)("deprecatedAjaxError","[data-remote]",function(a){let b=a.detail,{error:c,text:d}=b;a.currentTarget===a.target&&"abort"!==c&&"canceled"!==c&&(/<html/.test(d)?(e(),a.stopImmediatePropagation()):setTimeout(function(){!a.defaultPrevented&&e()},0))}),(0,d.on)("deprecatedAjaxSend","[data-remote]",function(){f()}),(0,d.on)("click",".js-ajax-error-dismiss",function(){f()})},81775(a,b,c){c.d(b,{G:()=>i});var d=c(254),e=c(64463),f=c(59753);function g(a){let b=a.getAttribute("data-required-value"),c=a.getAttribute("data-required-value-prefix");if(a.value===b)a.setCustomValidity("");else{let d=b;c&&(d=c+d),a.setCustomValidity(d)}}(0,d.q6)("[data-required-value]",function(a){let b=a.currentTarget;g(b)}),(0,f.on)("change","[data-required-value]",function(a){let b=a.currentTarget;g(b),i(b.form)}),(0,d.q6)("[data-required-trimmed]",function(a){let b=a.currentTarget;""===b.value.trim()?b.setCustomValidity(b.getAttribute("data-required-trimmed")):b.setCustomValidity("")}),(0,f.on)("change","[data-required-trimmed]",function(a){let b=a.currentTarget;""===b.value.trim()?b.setCustomValidity(b.getAttribute("data-required-trimmed")):b.setCustomValidity(""),i(b.form)}),(0,d.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",a=>{let b=a.checkValidity();function c(){let c=a.checkValidity();c!==b&&a.form&&i(a.form),b=c}a.addEventListener("input",c),a.addEventListener("blur",function b(){a.removeEventListener("input",c),a.removeEventListener("blur",b)})});let h=new WeakMap;function i(a){let b=a.checkValidity();for(let c of a.querySelectorAll("button[data-disable-invalid]"))c.disabled=!b}(0,e.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(a){let b=a.form;if(b){var c;c=b,h.get(c)||(c.addEventListener("change",()=>i(c)),h.set(c,!0)),a.disabled=!b.checkValidity()}}}),(0,e.N7)("input[data-required-change], textarea[data-required-change]",function(a){let b=a,c="radio"===b.type&&b.form?b.form.elements.namedItem(b.name).value:null;function d(a){let d=b.form;if(a&&"radio"===b.type&&d&&c)for(let e of d.elements.namedItem(b.name))e instanceof HTMLInputElement&&e.setCustomValidity(b.value===c?"unchanged":"");else b.setCustomValidity(b.value===(c||b.defaultValue)?"unchanged":"")}b.addEventListener("input",d),b.addEventListener("change",d),d(),b.form&&i(b.form)}),document.addEventListener("reset",function(a){if(a.target instanceof HTMLFormElement){let b=a.target;setTimeout(()=>i(b))}})},54650(a,b,c){c.d(b,{Bt:()=>h,DN:()=>k,KL:()=>n,Se:()=>j,qC:()=>o,sw:()=>l});var d=c(59753),e=c(76177),f=c(54679);function g(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:c}))}function h(a,b){b&&(i(a,b),(0,e.j)(b)),g(a,"submit",!0)&&a.submit()}function i(a,b){if(!(a instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(b instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==b.type)throw TypeError("The specified element is not a submit button.");if(!a||a!==b.form)throw Error("The specified element is not owned by the form element.")}function j(a,b){if("boolean"==typeof b){if(a instanceof HTMLInputElement)a.checked=b;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===a.type)throw TypeError("checkbox can't be set to string value");a.value=b}g(a,"change",!1)}function k(a,b){for(let c in b){let d=b[c],e=a.elements.namedItem(c);e instanceof HTMLInputElement?e.value=d:e instanceof HTMLTextAreaElement&&(e.value=d)}}function l(a){if(!(a instanceof HTMLElement))return!1;let b=a.nodeName.toLowerCase(),c=(a.getAttribute("type")||"").toLowerCase();return"select"===b||"textarea"===b||"input"===b&&"submit"!==c&&"reset"!==c||a.isContentEditable}function m(a){return new URLSearchParams(a)}function n(a,b){let c=new URLSearchParams(a.search),d=m(b);for(let[e,f]of d)c.append(e,f);return c.toString()}function o(a){return m(new FormData(a)).toString()}(0,d.on)("click",".js-remote-submit-button",async function(a){let b=a.currentTarget,c=b.form;a.preventDefault();let d;try{d=await fetch(c.action,{method:c.method,body:new FormData(c),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}d&&!d.ok&&(0,f.v)()})},254(a,b,c){c.d(b,{ZG:()=>h,q6:()=>j,w4:()=>i});var d=c(8439);let e=!1,f=new d.Z;function g(a){let b=a.target;if(b instanceof HTMLElement&&b.nodeType!==Node.DOCUMENT_NODE)for(let c of f.matches(b))c.data.call(null,b)}function h(a,b){e||(e=!0,document.addEventListener("focus",g,!0)),f.add(a,b),document.activeElement instanceof HTMLElement&&document.activeElement.matches(a)&&b(document.activeElement)}function i(a,b,c){function d(b){let e=b.currentTarget;e&&(e.removeEventListener(a,c),e.removeEventListener("blur",d))}h(b,function(b){b.addEventListener(a,c),b.addEventListener("blur",d)})}function j(a,b){function c(a){let{currentTarget:d}=a;d&&(d.removeEventListener("input",b),d.removeEventListener("blur",c))}h(a,function(a){a.addEventListener("input",b),a.addEventListener("blur",c)})}},76177(a,b,c){function d(a){let b=a.closest("form");if(!(b instanceof HTMLFormElement))return;let c=e(b);if(a.name){let d=a.matches("input[type=submit]")?"Submit":"",f=a.value||d;c||((c=document.createElement("input")).type="hidden",c.classList.add("js-submit-button-value"),b.prepend(c)),c.name=a.name,c.value=f}else c&&c.remove()}function e(a){let b=a.querySelector("input.js-submit-button-value");return b instanceof HTMLInputElement?b:null}c.d(b,{j:()=>d,u:()=>e})},89845(a,b,c){var d=c(54650),e=c(64463),f=c(59753),g=c(254),h=c(81775);function i(){let a=document.querySelector(".js-password-with-confirmation"),b=document.querySelector(".js-password-confirm");b.value!==a.value?j(b):k(b)}function j(a){let b=a.closest(".js-form-group");b.classList.add("errored");let c=a.getAttribute("data-validity-message");if(c){a.setCustomValidity(c);let d=a.closest("form");(0,h.G)(d)}let e=b.querySelector(".error"),f=a.getAttribute("data-error-message");if(!e&&f){let g=document.createElement("dd");g.classList.add("error"),g.textContent=f,b.appendChild(g)}}function k(a){let b=a.closest(".js-form-group");a.setCustomValidity(""),b.classList.remove("errored");let c=a.closest("form");(0,h.G)(c);let d=b.querySelector(".error");d&&b.removeChild(d)}(0,g.w4)("keyup",".js-password-confirm",i),(0,g.w4)("keyup",".js-password-with-confirmation",()=>{let a=document.querySelector(".js-password-confirm");""!==a.value&&i()}),(0,e.N7)(".js-suggested-usernames-container",function(a){let b=a.querySelectorAll(".js-suggested-username"),c=document.querySelector(".js-signup-form");if(c&&0!==b.length)for(let d of b)c.appendChild(d)}),(0,e.N7)(".js-octocaptcha-parent",function(a){let b=a.querySelector(".js-octocaptcha-spinner"),c=a.querySelector(".js-octocaptcha-success"),d=a.querySelector(".js-octocaptcha-token"),e=a.querySelector(".js-octocaptcha-form-submit"),f=a.querySelector(".js-octocaptcha-frame"),g=d.getAttribute("data-octocaptcha-url"),h=d.getAttribute("data-octocaptcha-timeout"),i=h?parseInt(h):3e4,j=!1,k=()=>{j||(j=!0,b.classList.add("d-none"),c.classList.remove("d-none"),e.disabled=!1,e.hidden=!1)},l=(a,c)=>{j||(j=!0,b.classList.add("d-none"),f.classList.remove("v-hidden"),f.style.height=`${a}px`,f.style.width=`${c}px`,f.contentWindow?.postMessage({event:"captcha-loaded-ack"},g||""))},m=()=>{if(j)return;let b=document.createElement("input");b.type="hidden",b.id="error_loading_captcha",b.name="error_loading_captcha",b.value="1",a.appendChild(b),d.required=!1,k()},n=()=>{e.hidden=!1,a.checkValidity()&&(e.disabled=!1)};setTimeout(m,i),f.addEventListener("error",m),window.addEventListener("message",a=>{if(a.origin!==g)return;let b=a.data&&a.data.event;if("captcha-loaded"===b){let c=a.data.height||380,e=a.data.width||654;l(c,e)}else"captcha-complete"===b?(d.value=a.data.sessionToken,n()):"captcha-suppressed"===b&&k()})}),(0,e.N7)(".js-plan-choice:checked",{add(a){let b=a.closest(".plan-row");b&&b.classList.add("selected")},remove(a){let b=a.closest(".plan-row");b&&b.classList.remove("selected")}}),(0,e.N7)("input.js-form-checked-trigger:checked",{constructor:HTMLInputElement,add(a){let b=a.closest(".js-form-checked-container"),c=b.querySelector(".js-form-checked-target");c.hidden=!1},remove(a){let b=a.closest(".js-form-checked-container"),c=b.querySelector(".js-form-checked-target"),e=c.querySelector("input");(0,d.Se)(e,!1),c.hidden=!0}}),(0,e.N7)(".js-form-radio-button-container",function(a){let b=a.querySelectorAll('.js-form-radio-button-item input[type="radio"]');for(let c of b)c.hidden=!0}),(0,e.N7)('.js-form-radio-button-item input[type="radio"]:checked',{constructor:HTMLInputElement,add(a){let b=a.closest(".js-form-radio-button-item");a.setAttribute("data-checked","checked"),b.classList.add("color-border-accent-emphasis")},remove(a){let b=a.closest(".js-form-radio-button-item");a.removeAttribute("data-checked"),b.classList.remove("color-border-accent-emphasis")}}),(0,f.on)("click",'.js-form-radio-uncheckable input[type="radio"]',a=>{let b=a.currentTarget;"checked"===b.getAttribute("data-checked")?(0,d.Se)(b,!1):(0,d.Se)(b,!0)}),(0,e.N7)('.js-form-radio-button-required input[type="radio"]:checked',{constructor:HTMLInputElement,add(a){(function a(b){let c=b.closest("form")?.querySelector("button");c.disabled=!1})(a)}})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js"],()=>b(89845));var c=a.O()}])
//# sourceMappingURL=signup-5c42e212f200.js.map