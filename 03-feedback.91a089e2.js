function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var r,o,i,u,a,f,c=0,l=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function w(e){return c=e,a=setTimeout(S,t),l?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function S(){var e=p();if(j(e))return T(e);a=setTimeout(S,function(e){var n=t-(e-f);return d?v(n,i-(e-c)):n}(e))}function T(e){return a=void 0,g&&r?b(e):(r=o=void 0,u)}function h(){var e=p(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return w(f);if(d)return a=setTimeout(S,t),b(f)}return void 0===a&&(a=setTimeout(S,t)),u}return t=y(t)||0,m(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},h.flush=function(){return void 0===a?u:T(p())},h}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),w={};b.addEventListener("input",e(t)((function(e){const{name:t,value:n}=e.target;w[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),b.addEventListener("submit",(e=>{e.preventDefault(),e.currentTarget.reset(),console.log(w),localStorage.clear()})),window.addEventListener("load",(e=>{const t=JSON.parse(localStorage.getItem("feedback-form-state")),n=document.querySelector("input"),r=document.querySelector("textarea");null!==t&&(n.value=t.email,r.value=t.message)}));
//# sourceMappingURL=03-feedback.91a089e2.js.map
