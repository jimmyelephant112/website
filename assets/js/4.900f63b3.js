(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(t,e,i){var n=i(23),r=i(18);t.exports=function(t){return function(e,i){var s,a,o=String(r(e)),l=n(i),c=o.length;return l<0||l>=c?t?"":void 0:(s=o.charCodeAt(l))<55296||s>56319||l+1===c||(a=o.charCodeAt(l+1))<56320||a>57343?t?o.charAt(l):s:t?o.slice(l,l+2):a-56320+(s-55296<<10)+65536}}},105:function(t,e,i){var n=i(19),r=i(63)("toStringTag"),s="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,i,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?i:s?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},106:function(t,e,i){"use strict";var n=i(79);i(33)({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},150:function(t,e,i){},360:function(t,e,i){"use strict";var n=i(150);i.n(n).a},373:function(t,e,i){"use strict";i.r(e);i(99),i(92),i(73);var n={en:"English",nl:"Nederlands",zh:"中文",vi:"Tiếng Việt",pl:"Polski",pt:"Português",ru:"Русский",jp:"日本語",fr:"Français",de:"Deutsch",el:"Ελληνικά",es:"Español",hi:"हिंदी",fa:"فارسی",ko:"한국어",ro:"Română",uk:"Українська",no:"Norwegian"},r={data:function(){return{}},props:{profile:Object,titleVisible:Boolean},computed:{workHtml:function(){var t=this.profile.work,e="";return t.orgUrl?(e+='<a href="'+t.orgUrl+'" target="_blank" rel="noopener noreferrer">',t.org?e+=t.org:this.minimizeLink(t.orgUrl),e+="</a>"):t.org&&(e+=t.org),t.role&&(e=e.length>0?t.role+" @ "+e:t.role),e},textDistance:function(){var t=this.profile.distanceInKm||0;return this.$root.useMiles?roundDistance(kmToMi(t))+" miles":roundDistance(t)+" km"},languageListHtml:function(){return this.profile.languages?this.profile.languages.map((function(t,e){return n[t]})).join(" "):""},hasSocialLinks:function(){return this.profile.github||this.profile.twitter||this.profile.codepen||this.profile.linkedin}},methods:{minimizeLink:function(t){return t.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"").replace(/^mailto:/,"")},githubUrl:function(t,e){return e&&e.url?e.url:e&&-1!==e.indexOf("/")?"https://github.com/"+e.replace(/\/\*$/,""):"https://github.com/"+t+"/"+(e||"")}}},s=(i(360),i(1)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fluer md:flex pt-8"},[i("div",{staticClass:"avatar rounded-full p-6"},[t.profile.imageUrl?i("img",{staticClass:"rounded-full",attrs:{src:t.profile.imageUrl,alt:t.profile.name,width:"80",height:"80"}}):t.profile.github?i("img",{staticClass:"rounded-full",attrs:{src:"https://github.com/"+t.profile.github+".png",alt:t.profile.name,width:"80",height:"80"}}):t.profile.twitter?i("img",{staticClass:"rounded-full",attrs:{src:"https://avatars.io/twitter/"+t.profile.twitter,alt:t.profile.name,width:"80",height:"80"}}):t._e()]),t._v(" "),i("div",{staticClass:"profile team-font pt-6 text-sm leading-loose"},[i("h3",{staticClass:"text-lg",attrs:{"data-official-title":t.profile.title}},[t._v("\n      "+t._s(t.profile.name)+"\n      "),t.profile.title&&t.titleVisible?i("sup",{domProps:{innerHTML:t._s(t.profile.title)}}):t._e()]),t._v(" "),i("dl",[t.profile.reposOfficial?[i("div",{staticClass:"container"},[i("dt",{staticClass:"team-core-font inline-block"},[t._v("Core focus")]),t._v(" "),i("ul",{staticClass:"inline-block"},t._l(t.profile.reposOfficial,(function(e){return i("li",{staticClass:"inline-block text-sm text-blue-500 pl-2"},[i("a",{attrs:{href:t.githubUrl("fluejs",e),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.name||e))])])})),0)])]:t._e(),t._v(" "),t.profile.github&&t.profile.reposPersonal?[i("dt",[t._v("Ecosystem")]),t._v(" "),i("dd",[i("ul",t._l(t.profile.reposPersonal,(function(e){return i("li",[i("a",{attrs:{href:t.githubUrl(t.profile.github,e),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.name||e))])])})),0)])]:t._e(),t._v(" "),t.profile.work?[t._m(0),t._v(" "),i("div",{staticClass:"container pb-1"},[i("img",{staticClass:"inline w-4 h-auto pt-1",attrs:{src:"https://image.flaticon.com/icons/png/512/86/86081.png"}}),t._v(" "),i("div",{staticClass:"inline pl-2",domProps:{innerHTML:t._s(t.workHtml)}})])]:t._e(),t._v(" "),t.profile.distanceInKm?i("span",{staticClass:"distance"},[t._m(1),t._v(" "),i("dd",[t._v("\n          About\n          "),t.profile.distanceInKm<=150?i("span",{staticClass:"user-match",attrs:{title:t.profile.name+" is close enough to commute to your location."}},[t._v(t._s(t.textDistance)+" away")]):[t._v(t._s(t.textDistance)+" away")],t._v("\n          in "+t._s(t.profile.city)+"\n        ")],2)]):t.profile.city?[t._m(2),t._v(" "),i("div",{staticClass:"container pb-0"},[i("img",{staticClass:"inline w-4 h-auto",attrs:{src:"https://image.flaticon.com/icons/png/512/67/67347.png"}}),t._v(" "),i("div",{staticClass:"inline pl-2"},[t._v("\n            "+t._s(t.profile.city)+"\n          ")])])]:t._e(),t._v(" "),t.profile.languages?[t._m(3),t._v(" "),i("div",{staticClass:"container inline-flex py-1"},[i("img",{staticClass:"w-4 h-auto pt-1 pb-2",attrs:{src:"https://image.flaticon.com/icons/png/512/115/115809.png"}}),t._v(" "),i("div",{staticClass:"pl-3",domProps:{innerHTML:t._s(t.languageListHtml)}})])]:t._e(),t._v(" "),t.profile.links?[t._m(4),t._v(" "),i("div",{staticClass:"container pb-2 inline-flex"},[i("img",{staticClass:"w-4 h-auto py-1 pb-4",attrs:{src:"https://image.flaticon.com/icons/png/512/126/126481.png"}}),t._v(" "),t._l(t.profile.links,(function(e){return i("div",{staticClass:"pl-3"},[i("a",{attrs:{href:e,target:"_blank"}},[t._v(t._s(t.minimizeLink(e)))])])}))],2)]:t._e(),t._v(" "),t.hasSocialLinks?i("footer",{staticClass:"social"},[i("div",{staticClass:"inline-flex"},[t.profile.github?i("a",{staticClass:"github flex-1",attrs:{href:t.githubUrl(t.profile.github)}},[i("img",{staticClass:"w-6 h-auto",attrs:{src:"https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"}}),t._v(" "),i("i",{staticClass:"fa fa-github"}),t._v(" "),i("span",{staticClass:"sr-only"},[t._v("Github")])]):t._e(),t._v(" "),t.profile.twitter?i("a",{staticClass:"twitter flex-1 pl-2",attrs:{href:"https://twitter.com/"+t.profile.twitter}},[i("img",{staticClass:"w-6 h-auto",attrs:{src:"https://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png"}}),t._v(" "),i("i",{staticClass:"fa fa-twitter"}),t._v(" "),i("span",{staticClass:"sr-only"},[t._v("Twitter")])]):t._e(),t._v(" "),t.profile.codepen?i("a",{staticClass:"codepen flex-1 pl-2",attrs:{href:"https://codepen.io/"+t.profile.codepen}},[i("img",{staticClass:"w-6 h-auto",attrs:{src:"https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-32-512.png"}}),t._v(" "),i("i",{staticClass:"fa fa-codepen"}),t._v(" "),i("span",{staticClass:"sr-only"},[t._v("CodePen")])]):t._e(),t._v(" "),t.profile.linkedin?i("a",{staticClass:"linkedin flex-1 pl-2",attrs:{href:"https://www.linkedin.com/in/"+t.profile.linkedin}},[i("img",{staticClass:"w-6 h-auto",attrs:{src:"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/linkedin-512.png"}}),t._v(" "),i("i",{staticClass:"fa fa-linkedin"}),t._v(" "),i("span",{staticClass:"sr-only"},[t._v("LinkedIn")])]):t._e()])]):t._e()],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-briefcase"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Work")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-map-marker"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Distance")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-map-marker"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("City")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-globe"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Languages")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fa fa-link"}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Links")])])}],!1,null,"20375d52",null);e.default=a.exports},63:function(t,e,i){var n=i(22)("wks"),r=i(21),s=i(2).Symbol,a="function"==typeof s;(t.exports=function(t){return n[t]||(n[t]=a&&s[t]||(a?s:r)("Symbol."+t))}).store=n},64:function(t,e,i){var n=i(18);t.exports=function(t){return Object(n(t))}},65:function(t,e,i){"use strict";var n=i(5);t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},69:function(t,e,i){var n=i(24),r=i(38),s=i(64),a=i(34),o=i(89);t.exports=function(t,e){var i=1==t,l=2==t,c=3==t,u=4==t,f=6==t,p=5==t||f,v=e||o;return function(e,o,h){for(var d,g,_=s(e),m=r(_),x=n(o,h,3),b=a(m.length),C=0,w=i?v(e,b):l?v(e,0):void 0;b>C;C++)if((p||C in m)&&(g=x(d=m[C],C,_),t))if(i)w[C]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return C;case 2:w.push(d)}else if(u)return!1;return f?-1:c||u?u:w}}},72:function(t,e,i){var n=i(19);t.exports=Array.isArray||function(t){return"Array"==n(t)}},73:function(t,e,i){"use strict";var n=i(33),r=i(69)(1);n(n.P+n.F*!i(65)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},79:function(t,e,i){"use strict";var n,r,s=i(96),a=RegExp.prototype.exec,o=String.prototype.replace,l=a,c=(n=/a/,r=/b*/g,a.call(n,"a"),a.call(r,"a"),0!==n.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function(t){var e,i,n,r,l=this;return u&&(i=new RegExp("^"+l.source+"$(?!\\s)",s.call(l))),c&&(e=l.lastIndex),n=a.call(l,t),c&&n&&(l.lastIndex=l.global?n.index+n[0].length:e),u&&n&&n.length>1&&o.call(n[0],i,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(n[r]=void 0)})),n}),t.exports=l},85:function(t,e,i){"use strict";var n=i(104)(!0);t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},86:function(t,e,i){"use strict";var n=i(105),r=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"==typeof i){var s=i.call(t,e);if("object"!=typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},87:function(t,e,i){"use strict";i(106);var n=i(20),r=i(17),s=i(5),a=i(18),o=i(63),l=i(79),c=o("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var p=o(t),v=!s((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=v?!s((function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[c]=function(){return i}),i[p](""),!e})):void 0;if(!v||!h||"replace"===t&&!u||"split"===t&&!f){var d=/./[p],g=i(a,p,""[t],(function(t,e,i,n,r){return e.exec===l?v&&!r?{done:!0,value:d.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}})),_=g[0],m=g[1];n(String.prototype,t,_),r(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},89:function(t,e,i){var n=i(90);t.exports=function(t,e){return new(n(t))(e)}},90:function(t,e,i){var n=i(4),r=i(72),s=i(63)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},92:function(t,e,i){"use strict";var n=i(6),r=i(64),s=i(34),a=i(23),o=i(85),l=i(86),c=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;i(87)("replace",2,(function(t,e,i,h){return[function(n,r){var s=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,s,r):i.call(String(s),n,r)},function(t,e){var r=h(i,t,this,e);if(r.done)return r.value;var f=n(t),p=String(this),v="function"==typeof e;v||(e=String(e));var g=f.global;if(g){var _=f.unicode;f.lastIndex=0}for(var m=[];;){var x=l(f,p);if(null===x)break;if(m.push(x),!g)break;""===String(x[0])&&(f.lastIndex=o(p,s(f.lastIndex),_))}for(var b,C="",w=0,y=0;y<m.length;y++){x=m[y];for(var k=String(x[0]),E=c(u(a(x.index),p.length),0),$=[],A=1;A<x.length;A++)$.push(void 0===(b=x[A])?b:String(b));var S=x.groups;if(v){var L=[k].concat($,E,p);void 0!==S&&L.push(S);var O=String(e.apply(void 0,L))}else O=d(k,p,E,$,S,e);E>=w&&(C+=p.slice(w,E)+O,w=E+k.length)}return C+p.slice(w)}];function d(t,e,n,s,a,o){var l=n+t.length,c=s.length,u=v;return void 0!==a&&(a=r(a),u=p),i.call(o,u,(function(i,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":o=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return i;if(u>c){var p=f(u/10);return 0===p?i:p<=c?void 0===s[p-1]?r.charAt(1):s[p-1]+r.charAt(1):i}o=s[u-1]}return void 0===o?"":o}))}}))},96:function(t,e,i){"use strict";var n=i(6);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},99:function(t,e,i){"use strict";var n=i(33),r=i(36)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(a||!i(65)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:r(this,t,arguments[1])}})}}]);