"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"scoped",title:"11. Scoped \u9759\u6001\u7c7b",sidebar_label:"11. Scoped \u9759\u6001\u7c7b"},i=void 0,c={unversionedId:"global/scoped",id:"global/scoped",title:"11. Scoped \u9759\u6001\u7c7b",description:"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",source:"@site/docs/global/scoped.mdx",sourceDirName:"global",slug:"/global/scoped",permalink:"/docs/global/scoped",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/scoped.mdx",tags:[],version:"current",lastUpdatedBy:"\u6c34\u871c\u6843",lastUpdatedAt:1663687356,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"scoped",title:"11. Scoped \u9759\u6001\u7c7b",sidebar_label:"11. Scoped \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"10. JSON \u9759\u6001\u7c7b",permalink:"/docs/global/json"},next:{title:"12. SpareTime \u9759\u6001\u7c7b",permalink:"/docs/global/sparetime"}},p={},s=[{value:"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",id:"111-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",level:2},{value:"11.2 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",id:"112-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",level:2},{value:"11.3 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\uff08\u5e26\u8fd4\u56de\u503c\uff09",id:"113-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\u5e26\u8fd4\u56de\u503c",level:2},{value:"11.4 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\uff08\u5e26\u8fd4\u56de\u503c\uff09",id:"114-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\u5e26\u8fd4\u56de\u503c",level:2}],l={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"111-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4"},"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u540c\u6b65\nScoped.Create((factory, scope) => {\n     var services = scope.ServiceProvider;\n});\n\n// \u5f02\u6b65\nawait Scoped.CreateAsync(async (factory, scope) => {\n     var services = scope.ServiceProvider;\n     await _calcService.GetAsync();\n     // ...\n})\n")),(0,a.kt)("admonition",{title:"\u6570\u636e\u5e93\u64cd\u4f5c\u6ce8\u610f",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f5c\u7528\u57df\u4e2d\u5bf9",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u6709\u4efb\u4f55\u53d8\u66f4\u64cd\u4f5c"),"\uff0c\u9700\u624b\u52a8\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216\u5e26 ",(0,a.kt)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u65b9\u6cd5\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Scoped.CreateUow(handler)")," \u4ee3\u66ff\u3002")),(0,a.kt)("h2",{id:"112-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df"},"11.2 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u540c\u6b65\nScoped.CreateUow((factory, scope) => {\n     var services = scope.ServiceProvider;\n});\n\n// \u5f02\u6b65\nawait Scope.CreateUowAsync(async (factory, scope) => {\n     var services = scope.ServiceProvider;\n     await _calcService.GetAsync();\n     // ...\n});\n")),(0,a.kt)("p",null,"\u6b64\u65b9\u6cd5\u5c06\u5728\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u81ea\u52a8\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"SaveChanges()")),(0,a.kt)("h2",{id:"113-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\u5e26\u8fd4\u56de\u503c"},"11.3 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\uff08\u5e26\u8fd4\u56de\u503c\uff09"),(0,a.kt)("admonition",{title:"\u79fb\u9664\u58f0\u660e",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion v2.18+")," \u7248\u672c\u79fb\u9664\u5e26\u8fd4\u56de\u503c\u7684\u4f5c\u7528\u57df\uff08\u8be5\u65b9\u6cd5\u5c5e\u4e8e\u591a\u4f59\u64cd\u4f5c\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1}",showLineNumbers:!0,"":!0,"{1}":!0},'var obj = Scoped.CreateRef<string>((factory, scope) => {\n     var services = scope.ServiceProvider;\n     return "\u8fd4\u56de\u503c";\n});\n')),(0,a.kt)("h2",{id:"114-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\u5e26\u8fd4\u56de\u503c"},"11.4 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\uff08\u5e26\u8fd4\u56de\u503c\uff09"),(0,a.kt)("admonition",{title:"\u79fb\u9664\u58f0\u660e",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion v2.18+")," \u7248\u672c\u79fb\u9664\u5e26\u8fd4\u56de\u503c\u7684\u4f5c\u7528\u57df\uff08\u8be5\u65b9\u6cd5\u5c5e\u4e8e\u591a\u4f59\u64cd\u4f5c\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var obj = Scoped.CreateUowRef<string>((factory, scope) => {\n     var services = scope.ServiceProvider;\n     return "\u8fd4\u56de\u503c";\n});\n')))}u.isMDXComponent=!0}}]);