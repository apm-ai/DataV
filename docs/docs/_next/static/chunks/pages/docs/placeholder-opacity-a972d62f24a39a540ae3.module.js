(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[138],{"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),p=n("Zb5r"),o=n("AOjV"),l=s.a.createElement;function r(e){var{plugin:a,name:n}=e,t=c.defaultConfig.variants[a]||["responsive"];n=n||a.replace(/([a-z])([A-Z])/g,(e,a,n)=>"".concat(a," ").concat(n.toLowerCase()));var r=["responsive","hover","focus","active","group-hover"].filter(e=>!t.includes(e)).slice(0,2);return l(s.a.Fragment,null,l("p",null,"By default, ",t.length?"only ".concat(Object(p.a)(t)):"no"," variants are generated for ",n," utilities."),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,a)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(r)," variants:"),l(o.a,{path:"variants",before:"// ...",remove:{[a]:t},add:{[a]:[...t,...r]}}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return u}));var t=n("q1tI"),s=n.n(t),c=n("Btb4"),p=n.n(c),o=n("AI3G"),l=n("iuhU"),r=s.a.createElement;function i(e){var{edits:a,indent:n="",type:s="inserted"}=e;return r("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((e,c)=>r(t.Fragment,{key:c},r("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,function(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)?e:"'".concat(e,"'")}(e),":"," ",p()(a[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(e,a)=>"[".concat(a.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((e,a)=>"".concat(0===a?"":"+ "+n).concat(e)).join("\n"),",\n")))}function u(e){var{path:a,add:n,remove:s,before:c,after:p}=e;return a="string"===typeof a?a.split("."):a,r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",a.map((e,a)=>r(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,": ","{\n")),c&&Object(o.a)(c).map(e=>"".concat("  ".repeat(a.length+2)).concat(e,"\n"))),s&&r(i,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),n&&r(i,{edits:n,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},p&&Object(o.a)(p).map(e=>"".concat("  ".repeat(a.length+2)).concat(e,"\n")),a.map((e,n)=>r(t.Fragment,{key:n},"  ","  ".repeat(a.length-n),"}\n")),"  }")))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),s=n("p+I8"),c=n("GAX2").default;e.exports=(e,a,n)=>{const p=[];return function e(a,n,o){let l;(n=n||{}).indent=n.indent||"\t",o=o||"",l=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+n.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const t="["+l.newLine+a.map((t,s)=>{const c=a.length-1===s?l.newLine:","+l.newLineOrSpace;let p=e(t,n,o+n.indent);return n.transform&&(p=n.transform(a,s,p)),l.indent+p+c}).join("")+l.pad+"]";return p.pop(),r(t)}if(s(a)){let t=Object.keys(a).concat(c(a));if(n.filter&&(t=t.filter(e=>n.filter(a,e))),0===t.length)return"{}";p.push(a);const s="{"+l.newLine+t.map((s,c)=>{const p=t.length-1===c?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof s,i=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||i?s:e(s,n);let d=e(a[s],n,o+n.indent);return n.transform&&(d=n.transform(a,s,d)),l.indent+String(u)+": "+d+p}).join("")+l.pad+"}";return p.pop(),r(s)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},GKlt:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/placeholder-opacity",function(){return n("Y2PY")}])},Y2PY:function(e,a,n){"use strict";n.r(a),n.d(a,"Layout",(function(){return j})),n.d(a,"classes",(function(){return h})),n.d(a,"meta",(function(){return k})),n.d(a,"tableOfContents",(function(){return y})),n.d(a,"default",(function(){return x}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),l=n("YFqc"),r=n.n(l),i=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),b=n("vXwd"),g=n.n(b),f=n("8C7G"),O=n("wH44"),j=(p.a.createElement,d.DocumentationLayout),h={plugin:g(),transformSelector:e=>e.split("::")[0]},k={title:"Placeholder Opacity",description:"Utilities for controlling the opacity of an element's placeholder color.",featureVersion:"v1.4.0+"},y=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],N={Layout:j,classes:h,meta:k,tableOfContents:y},v=m.ContentsLayout;function x(e){var{components:a}=e,n=Object(s.a)(e,["components"]);return Object(o.a)(v,Object(t.a)({},N,n,{components:a,mdxType:"MDXLayout"}),Object(o.a)(i.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the opacity of an element's placeholder color using the ",Object(o.a)("inlineCode",{parentName:"p"},".placeholder-opacity-{amount}")," utilities."),Object(o.a)(u.a,{preview:'\n  <div class="space-y-4">\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-75 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-25 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-0 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-100 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-75 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-50 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-25 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>placeholder-gray-500 placeholder-opacity-0 ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(i.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control an element's placeholder color opacity at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing placeholder color opacity utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:placeholder-opacity-50")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"placeholder-opacity-50")," utility at only medium screen sizes and above."),Object(o.a)("pre",{className:"language-html"},Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-500",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"placeholder"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"jane@example.com",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(i.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"To customize the opacity values for all opacity-related utilities at once, use the ",Object(o.a)("inlineCode",{parentName:"p"},"opacity")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," theme configuration:"),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       opacity: {\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '10': '0.1',\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '20': '0.2',\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '95': '0.95',\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)("p",null,"If you want to customize only the placeholder opacity utilities, use the ",Object(o.a)("inlineCode",{parentName:"p"},"placeholderOpacity")," section:"),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       placeholderOpacity: {\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '10': '0.1',\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '20': '0.2',\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '95': '0.95',\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(r.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(i.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(f.a,{plugin:"placeholderOpacity",mdxType:"Variants"}),Object(o.a)(i.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(O.a,{plugin:"placeholderOpacity",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=N},YuTi:function(e,a){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce((a,n,t)=>0===t?n:t===e.length-1?"".concat(a," and ").concat(n):"".concat(a,", ").concat(n),"")}n.d(a,"a",(function(){return t}))},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,n){"use strict";n.d(a,"a",(function(){return o}));var t=n("q1tI"),s=n.n(t),c=n("iuhU"),p=s.a.createElement;function o(e){var{preview:a,snippet:n,previewClassName:t}=e;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(c.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:a}}),p("div",{className:"rounded-b-lg bg-gray-800"},p("pre",{className:"scrollbar-none m-0 p-0 language-html"},p("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:n}}))))}},vXwd:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,e:a,theme:n,variants:t,target:c}){if("ie11"===c("placeholderOpacity"))return;e(s.default.fromPairs(s.default.map(n("placeholderOpacity"),(e,n)=>[`.${a(`placeholder-opacity-${n}`)}::placeholder`,{"--placeholder-opacity":e}])),t("placeholderOpacity"))}};var t,s=(t=n("LvDl"))&&t.__esModule?t:{default:t}},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n("rePB"),s=n("q1tI"),c=n.n(s),p=n("AOjV"),o=n("AI3G"),l=n("Zb5r"),r=c.a.createElement;function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e){var{plugin:a,name:n}=e,t=Object(o.a)(a);return n=n||a.replace(/([a-z])([A-Z])/g,(e,a,n)=>"".concat(a," ").concat(n.toLowerCase())),r(c.a.Fragment,null,r("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(t.map(e=>"<code>".concat(e,"</code>")))}})," ",t.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(p.a,{path:"corePlugins",before:"// ...",add:t.reduce((e,a)=>u(u({},e),{},{[a]:!1}),{})}))}},yLpj:function(e,a){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}e.exports=n}},[["GKlt",0,2,5,1,3,4]]]);