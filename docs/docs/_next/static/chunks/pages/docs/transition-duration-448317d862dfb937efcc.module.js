(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[164],{"8C7G":function(n,a,e){"use strict";e.d(a,"a",(function(){return p}));var t=e("q1tI"),s=e.n(t),o=e("98BF"),i=e("Zb5r"),c=e("AOjV"),r=s.a.createElement;function p(n){var{plugin:a,name:e}=n,t=o.defaultConfig.variants[a]||["responsive"];e=e||a.replace(/([a-z])([A-Z])/g,(n,a,e)=>"".concat(a," ").concat(e.toLowerCase()));var p=["responsive","hover","focus","active","group-hover"].filter(n=>!t.includes(n)).slice(0,2);return r(s.a.Fragment,null,r("p",null,"By default, ",t.length?"only ".concat(Object(i.a)(t)):"no"," variants are generated for ",e," utilities."),r("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",r("code",null,a)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(i.a)(p)," variants:"),r(c.a,{path:"variants",before:"// ...",remove:{[a]:t},add:{[a]:[...t,...p]}}))}},D2oq:function(n,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transitionDuration",[["duration",["transitionDuration"]]])};var t,s=(t=e("y2+P"))&&t.__esModule?t:{default:t}},Q03H:function(n,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-duration",function(){return e("h/3C")}])},"h/3C":function(n,a,e){"use strict";e.r(a),e.d(a,"Layout",(function(){return j})),e.d(a,"classes",(function(){return O})),e.d(a,"meta",(function(){return h})),e.d(a,"tableOfContents",(function(){return k})),e.d(a,"default",(function(){return w}));var t=e("wx14"),s=e("Ff2n"),o=e("q1tI"),i=e.n(o),c=e("7ljp"),r=e("YFqc"),p=e.n(r),l=e("tc9R"),u=e("pOT7"),d=e("vRWG"),m=e("I6Nb"),b=e("D2oq"),g=e.n(b),f=e("8C7G"),v=e("wH44"),j=(i.a.createElement,d.DocumentationLayout),O={plugin:g()},h={title:"Transition Duration",description:"Utilities for controlling the duration of CSS transitions.",featureVersion:"v1.2.0+"},k=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Duration values",slug:"duration-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],N={Layout:j,classes:O,meta:h,tableOfContents:k},y=m.ContentsLayout;function w(n){var{components:a}=n,e=Object(s.a)(n,["components"]);return Object(c.a)(y,Object(t.a)({},N,e,{components:a,mdxType:"MDXLayout"}),Object(c.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"duration-{amount}")," utilities to control an element's transition-duration."),Object(c.a)(u.a,{preview:'\n  <button class="transition duration-150 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n  <button class="transition duration-300 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n  <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition duration-150 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition duration-700 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"bg-white flex justify-around items-center p-4 py-12"}),Object(c.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control an element's transition-duration at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-duration utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:duration-500")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"duration-500")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"duration-values",toc:!0},"Duration values"),Object(c.a)("p",null,"By default Tailwind provides eight general purpose transition-duration utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"transitionDuration")," section of your Tailwind theme config."),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionDuration: {\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '0': '0ms',\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '2000': '2000ms',\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(f.a,{plugin:"transitionDuration",name:"transition-duration",mdxType:"Variants"}),Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(v.a,{plugin:"transitionDuration",name:"transition-duration",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=N},pOT7:function(n,a,e){"use strict";e.d(a,"a",(function(){return c}));var t=e("q1tI"),s=e.n(t),o=e("iuhU"),i=s.a.createElement;function c(n){var{preview:a,snippet:e,previewClassName:t}=n;return i("div",{className:"relative overflow-hidden mb-8"},i("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:a}}),i("div",{className:"rounded-b-lg bg-gray-800"},i("pre",{className:"scrollbar-none m-0 p-0 language-html"},i("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:e}}))))}}},[["Q03H",0,2,1,3,4,7]]]);