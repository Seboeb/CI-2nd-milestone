!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({1:function(e,t,n){"use strict";function o(e){return e?e.map&&e.coords?new google.maps.Marker({map:e.map,position:e.coords,icon:"./src/img/icons/map-marker-small.png"}):"addMarker arguments incomplete. Check for map and coords.":"No options found for addMarker."}n.d(t,"a",function(){return o})},11:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(3);describe("Add markers test",function(){it("function should return no options found error",function(){expect(Object(o.a)()).toBe("No options found for addMarker.")}),it("function should return incomplete arguments",function(){expect(Object(o.a)({test:"in complete options"})).toBe("addMarker arguments incomplete. Check for map and coords.")})}),describe("Google maps autocomplete",function(){it("function should return no arguments found",function(){expect(Object(r.a)()).toBe("No input arguments found.")})})},3:function(e,t,n){"use strict";function o(e){if(!e)return"No input arguments found.";var t=document.getElementById("city"),n=document.getElementById("address_dep"),o=new google.maps.places.Autocomplete(t);new google.maps.places.Autocomplete(n);return o.bindTo("bounds",e),o.setFields(["address_components","geometry","icon","name"]),o}n.d(t,"a",function(){return o})}});