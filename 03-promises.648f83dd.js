!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var u=r("6JpON");function i(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}var a={formRef:document.querySelector(".form"),delayRef:document.querySelector('input[name="delay"]'),stepRef:document.querySelector('input[name="step"]'),amountRef:document.querySelector('input[name="amount"]'),submitRef:document.querySelector('button[type="submit"]')};a.formRef.addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(a.delayRef.value),o=Number(a.amountRef.value),r=Number(a.stepRef.value),f=0;f<o;f++)i(f,n+f*r).then((function(t){var n=t.position,o=t.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.648f83dd.js.map
