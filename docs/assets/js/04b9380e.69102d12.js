(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{206:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return t?a.a.createElement(m,b(b({ref:n},s),{},{components:t})):a.a.createElement(m,b({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=u;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),i=(t(0),t(206)),c=t(10),b={id:"event-bus",title:"22. \u4e8b\u4ef6\u603b\u7ebf",sidebar_label:"22. \u4e8b\u4ef6\u603b\u7ebf"},o={unversionedId:"event-bus",id:"event-bus",isDocsHomePage:!1,title:"22. \u4e8b\u4ef6\u603b\u7ebf",description:"22.1 \u4ec0\u4e48\u662f\u4e8b\u4ef6\u603b\u7ebf",source:"@site/docs/event-bus.mdx",sourceDirName:".",slug:"/event-bus",permalink:"/docs/event-bus",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/event-bus.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1617870501,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"22. \u4e8b\u4ef6\u603b\u7ebf",frontMatter:{id:"event-bus",title:"22. \u4e8b\u4ef6\u603b\u7ebf",sidebar_label:"22. \u4e8b\u4ef6\u603b\u7ebf"},sidebar:"docs",previous:{title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316",permalink:"/docs/local-language"},next:{title:"23. JSON \u5e8f\u5217\u5316",permalink:"/docs/json-serialization"}},s=[{value:"22.1 \u4ec0\u4e48\u662f\u4e8b\u4ef6\u603b\u7ebf",id:"221-\u4ec0\u4e48\u662f\u4e8b\u4ef6\u603b\u7ebf",children:[]},{value:"22.2 <code>MessageCenter</code> \u6d88\u606f\u4e2d\u5fc3",id:"222-messagecenter-\u6d88\u606f\u4e2d\u5fc3",children:[{value:"22.2.1 \u6ce8\u518c <code>\u8f7b\u91cf\u7ea7\u4e8b\u4ef6\u603b\u7ebf\u670d\u52a1</code>",id:"2221-\u6ce8\u518c-\u8f7b\u91cf\u7ea7\u4e8b\u4ef6\u603b\u7ebf\u670d\u52a1",children:[]},{value:"22.2.2 \u5b9a\u4e49\u8ba2\u9605\u5904\u7406\u7a0b\u5e8f",id:"2222-\u5b9a\u4e49\u8ba2\u9605\u5904\u7406\u7a0b\u5e8f",children:[]},{value:"22.2.3 \u53d1\u5e03\u6d88\u606f",id:"2223-\u53d1\u5e03\u6d88\u606f",children:[]},{value:"22.2.4 \u76f4\u63a5\u8ba2\u9605\u6d88\u606f",id:"2224-\u76f4\u63a5\u8ba2\u9605\u6d88\u606f",children:[]}]},{value:"22.3 \u5173\u4e8e\u4f9d\u8d56\u6ce8\u5165",id:"223-\u5173\u4e8e\u4f9d\u8d56\u6ce8\u5165",children:[]},{value:"22.4 <code>MediatR</code> \u5e93",id:"224-mediatr-\u5e93",children:[{value:"22.4.1 <code>MediatR</code> \u4f7f\u7528\u6587\u6863",id:"2241-mediatr-\u4f7f\u7528\u6587\u6863",children:[]}]},{value:"22.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"225-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"221-\u4ec0\u4e48\u662f\u4e8b\u4ef6\u603b\u7ebf"},"22.1 \u4ec0\u4e48\u662f\u4e8b\u4ef6\u603b\u7ebf"),Object(i.b)("p",null,"\u4e8b\u4ef6\u603b\u7ebf\u662f\u5bf9\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f\u7684\u4e00\u79cd\u5b9e\u73b0\u3002\u5b83\u662f\u4e00\u79cd\u96c6\u4e2d\u5f0f\u4e8b\u4ef6\u5904\u7406\u673a\u5236\uff0c\u5141\u8bb8\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e4b\u95f4\u8fdb\u884c\u5f7c\u6b64\u901a\u4fe1\u800c\u53c8\u4e0d\u9700\u8981\u76f8\u4e92\u4f9d\u8d56\uff0c\u8fbe\u5230\u4e00\u79cd\u89e3\u8026\u7684\u76ee\u7684\u3002"),Object(i.b)("p",null,"\u6211\u4eec\u6765\u770b\u770b\u4e8b\u4ef6\u603b\u7ebf\u7684\u5904\u7406\u6d41\u7a0b\uff1a"),Object(i.b)("img",{src:Object(c.a)("img/event1.png")}),Object(i.b)("h2",{id:"222-messagecenter-\u6d88\u606f\u4e2d\u5fc3"},"22.2 ",Object(i.b)("inlineCode",{parentName:"h2"},"MessageCenter")," \u6d88\u606f\u4e2d\u5fc3"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5b9e\u73b0\u4e86\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u603b\u7ebf\u5b9e\u73b0\u673a\u5236\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"MessageCenter"),"\uff08\u6d88\u606f\u4e2d\u5fc3\uff09\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"MessageCenter")," \u91c7\u7528\u5b57\u7b26\u4e32\u6d88\u606f\u673a\u5236\u8fdb\u884c\u5e7f\u64ad\uff0c \u53ef\u4ee5\u5728\u7edd\u5927\u591a\u6570\u4e2d\u5c0f\u578b\u9879\u76ee\u4e2d\u53d1\u6325\u4f5c\u7528\uff0c\u7f3a\u70b9\u662f\u6d88\u606f\u5904\u7406\u662f\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u5b8c\u6210\u5e76\u4e14\u6d88\u606f\u4e0d\u652f\u6301\u5206\u5e03\u5f0f\u5b58\u50a8\u3002"),Object(i.b)("p",null,"\u53e6\u5916\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"MessageCenter")," \u652f\u6301\u5355\u64ad\u3001\u591a\u64ad\u53d1\u5e03\u53ca\u591a\u8ba2\u9605\u3002\u5982\u56fe\u6240\u793a\uff1a"),Object(i.b)("img",{src:Object(c.a)("img/event2.png")}),Object(i.b)("h3",{id:"2221-\u6ce8\u518c-\u8f7b\u91cf\u7ea7\u4e8b\u4ef6\u603b\u7ebf\u670d\u52a1"},"22.2.1 \u6ce8\u518c ",Object(i.b)("inlineCode",{parentName:"h3"},"\u8f7b\u91cf\u7ea7\u4e8b\u4ef6\u603b\u7ebf\u670d\u52a1")),Object(i.b)("p",null,"\u5982\u679c\u60f3\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"MessageCenter")," \u8f7b\u91cf\u7ea7\u4e8b\u4ef6\u603b\u7ebf\uff0c\u53ea\u9700\u8981\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6ce8\u518c\u670d\u52a1\u5373\u53ef\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs",metastring:"{3}","{3}":!0},"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddSimpleEventBus();\n}\n")),Object(i.b)("h3",{id:"2222-\u5b9a\u4e49\u8ba2\u9605\u5904\u7406\u7a0b\u5e8f"},"22.2.2 \u5b9a\u4e49\u8ba2\u9605\u5904\u7406\u7a0b\u5e8f"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MessageCenter")," \u662f\u6839\u636e ",Object(i.b)("inlineCode",{parentName:"p"},"MesseageId")," \u6d88\u606f Id \u6765\u89e6\u53d1\u5bf9\u5e94\u7684\u5904\u7406\u7a0b\u5e8f\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5b9a\u4e49 ",Object(i.b)("inlineCode",{parentName:"p"},"\u8ba2\u9605\u5904\u7406\u7a0b\u5e8f\u7c7b"),"\uff0c\u8be5\u7c7b\u9700\u5b9e\u73b0 ",Object(i.b)("inlineCode",{parentName:"p"},"ISubscribeHandler")," \u63a5\u53e3\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs",metastring:"{1,4-5,11-13}","{1,4-5,11-13}":!0},'public class UserChangeSubscribeHandler : ISubscribeHandler\n{\n    // \u5b9a\u4e49\u4e00\u6761\u6d88\u606f\n    [SubscribeMessage("create:user")]\n    public void CreateUser(string eventId, object payload)\n    {\n        Console.WriteLine("\u6211\u662f"+eventId);\n    }\n\n    // \u591a\u6761\u6d88\u606f\u5171\u7528\u540c\u4e00\u4e2a\u5904\u7406\u7a0b\u5e8f\n    [SubscribeMessage("delete:user")]\n    [SubscribeMessage("remove:user")]\n    public void RemoveUser(string eventId, object payload)\n    {\n        Console.WriteLine("\u6211\u662f"+eventId);\n    }\n}\n')),Object(i.b)("h3",{id:"2223-\u53d1\u5e03\u6d88\u606f"},"22.2.3 \u53d1\u5e03\u6d88\u606f"),Object(i.b)("p",null,"\u5b9a\u4e49\u597d\u8ba2\u9605\u5904\u7406\u7a0b\u5e8f\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u7a0b\u5e8f\u4efb\u4f55\u5730\u65b9\u8fdb\u884c\u5e7f\u64ad\u6d88\u606f\uff0c\u4e8b\u4ef6\u603b\u7ebf\u4f1a\u81ea\u52a8\u6839\u636e ",Object(i.b)("inlineCode",{parentName:"p"},"\u6d88\u606f Id")," \u89e6\u53d1\u5bf9\u5e94\u7684\u5904\u7406\u7a0b\u5e8f\u65b9\u6cd5\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'MessageCenter.Send("create:user", new User {}); // => \u6253\u5370\uff1a\u6211\u662fcreate:user\n\nMessageCenter.Send("delete:user", new User {}); // => \u6253\u5370\uff1a\u6211\u662fdelete:user\nMessageCenter.Send("remove:user", new User {}); // => \u6253\u5370\uff1a\u6211\u662fremove:user\n')),Object(i.b)("h3",{id:"2224-\u76f4\u63a5\u8ba2\u9605\u6d88\u606f"},"22.2.4 \u76f4\u63a5\u8ba2\u9605\u6d88\u606f"),Object(i.b)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa ",Object(i.b)("inlineCode",{parentName:"p"},"ISubscribeHandler")," \u7684\u6d3e\u751f\u7c7b\u8fdb\u884c\u76f8\u5173\u914d\u7f6e\u624d\u80fd\u5b9e\u73b0\u8ba2\u9605\u5904\u7406\u3002"),Object(i.b)("p",null,"\u5728\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u53ea\u9700\u8981\u8ba2\u9605\u4e00\u6b21\u5373\u53ef\u3002\u6240\u4ee5\uff0c\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u4e3a\u4e86\u66f4\u7b80\u4fbf\u7684\u8ba2\u9605\u6d88\u606f\uff0c\u4e5f\u63d0\u4f9b\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"MessageCenter.Subscribe<T>")," \u9759\u6001\u65b9\u6cd5\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'MessageCenter.Subscribe<User>("create:user", (i,p) => {\n    // do something\u3002\u3002\u3002\n});\n')),Object(i.b)("h2",{id:"223-\u5173\u4e8e\u4f9d\u8d56\u6ce8\u5165"},"22.3 \u5173\u4e8e\u4f9d\u8d56\u6ce8\u5165"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u4e8b\u4ef6\u603b\u7ebf\u662f\u4e0d\u652f\u6301\u6784\u9020\u51fd\u6570\u6ce8\u5165\u7684\uff0c\u800c\u4e14\u6784\u9020\u51fd\u6570\u4e5f\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u3002\u6240\u4ee5\u9700\u8981\u7528\u5230\u670d\u52a1\uff0c\u5e94\u8be5\u901a\u8fc7\u9759\u6001\u7c7b\u89e3\u6790\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"App.GetService<xx>()")," \u6216 ",Object(i.b)("inlineCode",{parentName:"p"},"Db.GetRepository<XX>()"),"\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs",metastring:"{5,13}","{5,13}":!0},'public class UserChangeSubscribeHandler : ISubscribeHandler\n{\n    public UserChangeSubscribeHandler()\n    {\n        // \u4e0d\u652f\u6301\u8fd9\u91cc\u89e3\u6790\u670d\u52a1\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\n    }\n\n    // \u5b9a\u4e49\u4e00\u6761\u6d88\u606f\n    [SubscribeMessage("create:user")]\n    public void CreateUser(string eventId, object payload)\n    {\n        // \u8fd9\u91cc\u89e3\u6790\u670d\u52a1\n        var repository = Db.GetRepository<Person>();\n    }\n}\n')),Object(i.b)("h2",{id:"224-mediatr-\u5e93"},"22.4 ",Object(i.b)("inlineCode",{parentName:"h2"},"MediatR")," \u5e93"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u9ed8\u8ba4\u53ea\u5b9e\u73b0\u4e86\u8f7b\u91cf\u7ea7\u7684\u4e8b\u4ef6\u603b\u7ebf\u673a\u5236\uff0c\u53ef\u80fd\u8fd8\u8fdc\u8fdc\u672a\u8fbe\u5230\u5927\u578b\u9879\u76ee\u548c\u9ad8\u5e76\u53d1\u6570\u636e\u7684\u5904\u7406\u9700\u6c42\u3002"),Object(i.b)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u63a8\u8350\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"MediatR")," \u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5e93\u8fdb\u884c\u5904\u7406\uff0cGithub \u5730\u5740\uff1a",Object(i.b)("a",{parentName:"p",href:"https://github.com/jbogard/MediatR"},"https://github.com/jbogard/MediatR")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MediatR")," \u662f\u975e\u5e38\u4f18\u79c0\u7684\u4e8b\u4ef6\u603b\u7ebf\u5e93\uff0c\u652f\u6301\u5355\u64ad\u3001\u591a\u64ad\u3001\u6d88\u606f\u901a\u77e5\u63a8\u9001\u3001\u667a\u80fd\u8c03\u5ea6\u7b49\u64cd\u4f5c\uff0c\u975e\u5e38\u5c0f\u5de7\u3002"),Object(i.b)("h3",{id:"2241-mediatr-\u4f7f\u7528\u6587\u6863"},"22.4.1 ",Object(i.b)("inlineCode",{parentName:"h3"},"MediatR")," \u4f7f\u7528\u6587\u6863"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/jbogard/MediatR/wiki"},"https://github.com/jbogard/MediatR/wiki")),Object(i.b)("h2",{id:"225-\u53cd\u9988\u4e0e\u5efa\u8bae"},"22.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}d.isMDXComponent=!0}}]);