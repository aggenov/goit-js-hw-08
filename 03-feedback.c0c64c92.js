function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=f||c||Function("return this")(),l=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var r,o,i,a,u,f,c=0,s=!1,l=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(j,t),s?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||l&&e-c>=i}function j(){var e=v();if(T(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return l?m(n,i-(e-c)):n}(e))}function O(e){return u=void 0,g&&r?b(e):(r=o=void 0,a)}function S(){var e=v(),n=T(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(l)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(s=!!n.leading,i=(l="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},S.flush=function(){return void 0===u?a:O(v())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},h=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},T=e=>{try{const t=localStorage.removeItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},j=document.querySelector(".feedback-form");j.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({email:t.value,message:n.value}),e.currentTarget.reset(),T("feedback-form-state")})),function(){const e=h("feedback-form-state");e&&(j.email.value=e.email,j.message.value=e.message)}();const O=e(t)((e=>{const{name:t,value:n}=e.target;let r=h("feedback-form-state");r=r||{},r[t]=n,b("feedback-form-state",r)}),500);j.addEventListener("input",O);
//# sourceMappingURL=03-feedback.c0c64c92.js.map