!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t){function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".header__title--js");document.querySelector(".action--js").addEventListener("click",(function(){var e=document.querySelector(".header__title--js");"Strona Domowa"===e.innerHTML?e.innerHTML="Witaj Drogi Odwiedzający, nazywam się Adriana.":e.innerHTML="Strona Domowa"}));var o=document.querySelector(".change__color--js");o.addEventListener("mouseover",(function(){o.style.setProperty("background","#F8FCDA")}));o.addEventListener("mouseleave",(function(){o.style.setProperty("background","")})),fetch("https://api.github.com/users/adriana-capinska/repos").then((function(e){return e.json()})).then((function(e){var t,r=n(e);try{for(r.s();!(t=r.n()).done;){var o=t.value,a=o.name,i=o.html_url,c=document.querySelector(".list--js"),u=c.innerHTML+"<li> ".concat(a,' <a href="').concat(i,'" title="link do repozytorium ').concat(a,' na githabie"> link do githuba </a></li>');c.innerHTML=u,console.log("".concat(a," ").concat(i))}}catch(e){r.e(e)}finally{r.f()}})).catch((function(e){console.log("erorr")}));var a=document.querySelector(".game__rock"),i=document.querySelector(".game__paper"),c=document.querySelector(".game__scissors"),u="",l="",f=["kamień","papier","nożyce"],s=function(){l=f[Math.floor(3*Math.random())],u===l?alert("remis"):u===f[0]&&l===f[2]||u===f[1]&&l===f[0]||u===f[2]&&l===f[1]?alert("wygrałeś!!"):alert("przegrałeś!!")};a.addEventListener("click",(function(){u="kamień",s(),console.log(u,l)})),i.addEventListener("click",(function(){u="papier",s(),console.log(u,l)})),c.addEventListener("click",(function(){u="nożyce",s(),console.log(u,l)}))}});