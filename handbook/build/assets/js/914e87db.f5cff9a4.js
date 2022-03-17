"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[988],{831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={id:"scoped",title:"11. Scoped \u9759\u6001\u7c7b",sidebar_label:"11. Scoped \u9759\u6001\u7c7b"},p=void 0,l={unversionedId:"global/scoped",id:"global/scoped",title:"11. Scoped \u9759\u6001\u7c7b",description:"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",source:"@site/docs/global/scoped.mdx",sourceDirName:"global",slug:"/global/scoped",permalink:"/furion/docs/global/scoped",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/global/scoped.mdx",tags:[],version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1629112836,formattedLastUpdatedAt:"8/16/2021",frontMatter:{id:"scoped",title:"11. Scoped \u9759\u6001\u7c7b",sidebar_label:"11. Scoped \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"10. JSON \u9759\u6001\u7c7b",permalink:"/furion/docs/global/json"},next:{title:"12. SpareTime \u9759\u6001\u7c7b",permalink:"/furion/docs/global/sparetime"}},s={},d=[{value:"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",id:"111-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",level:2},{value:"11.2 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",id:"112-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",level:2},{value:"11.3 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\uff08\u5e26\u8fd4\u56de\u503c\uff09",id:"113-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\u5e26\u8fd4\u56de\u503c",level:2},{value:"11.4 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\uff08\u5e26\u8fd4\u56de\u503c\uff09",id:"114-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\u5e26\u8fd4\u56de\u503c",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"111-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4"},"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1}","{1}":!0},"Scoped.Create((factory, scope) => {\n     var services = scope.ServiceProvider;\n});\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6570\u636e\u5e93\u64cd\u4f5c\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4f5c\u7528\u57df\u4e2d\u5bf9",(0,o.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u6709\u4efb\u4f55\u53d8\u66f4\u64cd\u4f5c"),"\uff0c\u9700\u624b\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216\u5e26 ",(0,o.kt)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u65b9\u6cd5\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Scoped.CreateUow(handler)")," \u4ee3\u66ff\u3002"))),(0,o.kt)("h2",{id:"112-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df"},"11.2 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"Scoped.CreateUow((factory, scope) => {\n     var services = scope.ServiceProvider;\n});\n")),(0,o.kt)("p",null,"\u6b64\u65b9\u6cd5\u5c06\u5728\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u81ea\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges()")),(0,o.kt)("h2",{id:"113-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\u5e26\u8fd4\u56de\u503c"},"11.3 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\uff08\u5e26\u8fd4\u56de\u503c\uff09"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u79fb\u9664\u58f0\u660e")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion v2.18+")," \u7248\u672c\u79fb\u9664\u5e26\u8fd4\u56de\u503c\u7684\u4f5c\u7528\u57df\uff08\u8be5\u65b9\u6cd5\u5c5e\u4e8e\u591a\u4f59\u64cd\u4f5c\uff09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1}","{1}":!0},'var obj = Scoped.CreateRef<string>((factory, scope) => {\n     var services = scope.ServiceProvider;\n     return "\u8fd4\u56de\u503c";\n});\n')),(0,o.kt)("h2",{id:"114-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\u5e26\u8fd4\u56de\u503c"},"11.4 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\uff08\u5e26\u8fd4\u56de\u503c\uff09"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u79fb\u9664\u58f0\u660e")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion v2.18+")," \u7248\u672c\u79fb\u9664\u5e26\u8fd4\u56de\u503c\u7684\u4f5c\u7528\u57df\uff08\u8be5\u65b9\u6cd5\u5c5e\u4e8e\u591a\u4f59\u64cd\u4f5c\uff09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var obj = Scoped.CreateUowRef<string>((factory, scope) => {\n     var services = scope.ServiceProvider;\n     return "\u8fd4\u56de\u503c";\n});\n')))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,v=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);