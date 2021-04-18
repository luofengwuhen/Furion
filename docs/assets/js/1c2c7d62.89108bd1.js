(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{206:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),c=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),b=t,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return r?o.a.createElement(f,a(a({ref:n},l),{},{components:r})):o.a.createElement(f,a({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=b;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return c}));var t=r(3),o=r(7),i=(r(0),r(206)),s={id:"linqexpression",title:"5. LinqExpression \u9759\u6001\u7c7b",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b"},a={unversionedId:"global/linqexpression",id:"global/linqexpression",isDocsHomePage:!1,title:"5. LinqExpression \u9759\u6001\u7c7b",description:"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",source:"@site/docs/global/linqexpression.mdx",sourceDirName:"global",slug:"/global/linqexpression",permalink:"/docs/global/linqexpression",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/linqexpression.mdx",version:"current",lastUpdatedBy:"\u82df\u5229\u56fd",lastUpdatedAt:1617873907,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b",frontMatter:{id:"linqexpression",title:"5. LinqExpression \u9759\u6001\u7c7b",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"4. Oops \u9759\u6001\u7c7b",permalink:"/docs/global/oops"},next:{title:"6. Http \u9759\u6001\u7c7b",permalink:"/docs/global/shttp"}},p=[{value:"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",id:"51-\u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",children:[]},{value:"5.2 \u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f",id:"52-\u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f",children:[]}],l={toc:p};function c(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"51-\u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f"},"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"var expression = LinqExpression.Create<T>(u => u.Id == 1);\nvar expression2 = LinqExpression.Create<T>((u,i) => u.Id == 1 && i > 0);\n")),Object(i.b)("h2",{id:"52-\u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f"},"5.2 \u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"// \u521b\u5efa\u4e00\u4e2a\u521d\u59cb\u5316\u7684\u8868\u8fbe\u5f0f\nvar expression = LinqExpression.And();\nvar expression2 = LinqExpression.IndexAnd();\nvar expression3 = LinqExpression.Or();\nvar expression4 = LinqExpression.IndexOr();\n\n// \u62fc\u63a5\u8868\u8fbe\u5f0f\nvar expression5 = expression.And(expression2);\nvar expression6 = expression.AndIf(age > 18, expression2);\nvar expression7 = expression.Or(expression2);\nvar expression8 = expression.OrIf(age > 18, expression2);\n\n// \u83b7\u53d6\u8868\u8fbe\u5f0f\u5c5e\u6027\u540d\nvar properyName = expression.GetExpressionPropertyName(u => u.Name);    // Name\n")))}c.isMDXComponent=!0}}]);