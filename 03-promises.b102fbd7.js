function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var u=r("7Y9D8");function i(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}const l={formRef:document.querySelector(".form"),delayRef:document.querySelector('input[name="delay"]'),stepRef:document.querySelector('input[name="step"]'),amountRef:document.querySelector('input[name="amount"]'),submitRef:document.querySelector('button[type="submit"]')};l.formRef.addEventListener("submit",(t=>{t.preventDefault();const o=Number(l.delayRef.value),n=Number(l.amountRef.value),r=Number(l.stepRef.value);for(let t=0;t<n;t++)i(t,o+t*r).then((({position:t,delay:o})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.b102fbd7.js.map
