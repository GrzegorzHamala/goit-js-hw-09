parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GyVV":[function(require,module,exports) {
const e=document.querySelector(".form");function t(e,t){return Math.random()>.3?Promise.resolve({position:e,delay:t}):Promise.reject({position:e,delay:t})}function o({delay:e,step:o,amount:n}){for(let r=1;r<=n;r++)t(r,e).then(({position:e,delay:t})=>{setTimeout(()=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)},t)}).catch(({position:e,delay:t})=>{setTimeout(()=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)},t)}),e+=o}function n(e){e.preventDefault();const{elements:{delay:t,step:n,amount:r}}=e.currentTarget;o({delay:Number(t.value),step:Number(n.value),amount:Number(r.value)}),e.currentTarget.reset()}e.addEventListener("submit",n);
},{}]},{},["GyVV"], null)
//# sourceMappingURL=/goit-js-hw-09/03-promises.d8e7e18e.js.map