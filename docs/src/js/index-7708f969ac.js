!function(t){var o={};function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=4)}({4:function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t.r(n);var i=function(){function t(){!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.nav=document.getElementsByClassName("nav"),this.events()}return o(t.prototype,[{key:"events",value:function(){window.addEventListener("scroll",this.hiddenMenu.bind(this)),window.addEventListener("scroll",this.fixedMenu.bind(this))}},{key:"hiddenMenu",value:function(){50<document.body.scrollTop||50<document.documentElement.scrollTop?this.nav[0].classList.add("nav--is-hidden"):this.nav[0].classList.remove("nav--is-hidden")}},{key:"fixedMenu",value:function(){300<document.body.scrollTop||300<document.documentElement.scrollTop?this.nav[0].classList.add("nav--is-fixed"):this.nav[0].classList.remove("nav--is-fixed")}}]),t}();function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function t(){!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.backToTopButton=document.getElementsByClassName("back-to-top"),this.events()}return s(t.prototype,[{key:"events",value:function(){window.addEventListener("scroll",this.scrollFunction.bind(this))}},{key:"scrollFunction",value:function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?this.backToTopButton[0].classList.remove("back-to-top--hidden"):this.backToTopButton[0].classList.add("back-to-top--hidden")}}]),t}();function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function t(){!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.menuIcon=document.getElementsByClassName("menu__button"),this.listItem=document.getElementsByClassName("menu__link"),this.modal=document.getElementsByClassName("modal"),this.events()}return l(t.prototype,[{key:"events",value:function(){var n=this;this.menuIcon[0].addEventListener("click",this.animateMenu.bind(this)),this.menuIcon[0].addEventListener("click",this.toggleModal.bind(this)),this.modal[0].addEventListener("click",function(e){e.target.classList.contains("modal__link")&&n.closeMenu()})}},{key:"animateMenu",value:function(){this.menuIcon[0].classList.toggle("open")}},{key:"toggleModal",value:function(){this.modal[0].classList.toggle("modal--is-open")}},{key:"closeMenu",value:function(){this.menuIcon[0].classList.remove("open"),this.modal[0].classList.remove("modal--is-open")}}]),t}();new i,new a,new r}});