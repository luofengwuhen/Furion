"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6521],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),c=r,v=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return t?a.createElement(v,i(i({ref:n},p),{},{components:t})):a.createElement(v,i({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},204:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],l={id:"dbcontext-audit",title:"9.22 \u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"9.22 \u5ba1\u8ba1\u65e5\u5fd7 (Audit)"},s=void 0,u={unversionedId:"dbcontext-audit",id:"dbcontext-audit",title:"9.22 \u5ba1\u8ba1\u65e5\u5fd7",description:"9.22.1 \u5ba1\u8ba1\u65e5\u5fd7",source:"@site/docs/dbcontext-audit.mdx",sourceDirName:".",slug:"/dbcontext-audit",permalink:"/docs/dbcontext-audit",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-audit.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1658977221,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{id:"dbcontext-audit",title:"9.22 \u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"9.22 \u5ba1\u8ba1\u65e5\u5fd7 (Audit)"},sidebar:"docs",previous:{title:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e",permalink:"/docs/dbcontext-seed-data"},next:{title:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",permalink:"/docs/dbcontext-filter"}},p={},d=[{value:"9.22.1 \u5ba1\u8ba1\u65e5\u5fd7",id:"9221-\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"9.22.2 \u5173\u4e8e <code>SaveChanges</code> \u4e8b\u4ef6",id:"9222-\u5173\u4e8e-savechanges-\u4e8b\u4ef6",level:2},{value:"9.22.3 \u5982\u4f55\u5b9e\u73b0",id:"9223-\u5982\u4f55\u5b9e\u73b0",level:2},{value:"9.22.3.1 \u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7",id:"92231-\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7",level:3},{value:"9.22.3.2 \u6267\u884c <code>sql</code> \u5ba1\u8ba1\u65e5\u5fd7",id:"92232-\u6267\u884c-sql-\u5ba1\u8ba1\u65e5\u5fd7",level:3},{value:"9.22.3.3 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",id:"92233-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",level:3},{value:"9.22.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9224-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"9221-\u5ba1\u8ba1\u65e5\u5fd7"},"9.22.1 \u5ba1\u8ba1\u65e5\u5fd7"),(0,o.kt)("p",null,"\u5728\u4e00\u4e2a\u4f01\u4e1a\u5e94\u7528\u7cfb\u7edf\u4e2d\uff0c\u7528\u6237\u5bf9\u7cfb\u7edf\u6240\u6709\u7684\u64cd\u4f5c\u5305\u62ec\u8bf7\u6c42\u3001\u6570\u636e\u5e93\u64cd\u4f5c\u7b49\u7b49\u90fd\u5e94\u8be5\u8bb0\u5f55\u8d77\u6765\uff0c\u90a3\u4e48\u8fd9\u4e9b\u65e5\u5fd7\u6211\u4eec\u79f0\u4e3a\u64cd\u4f5c\u65e5\u5fd7\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u5ba1\u8ba1\u65e5\u5fd7\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u901a\u5e38\u6765\u8bf4\uff0c\u6211\u4eec\u5ba1\u8ba1\u65e5\u5fd7\u66f4\u591a\u6307\u7684\u662f\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u8bb0\u5f55"),"\u3002"),(0,o.kt)("p",null,"\u5ba1\u8ba1\u65e5\u5fd7\u4e00\u822c\u4f1a\u8bb0\u5f55\u4ee5\u4e0b\u4e09\u4e2a\u64cd\u4f5c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u65b0\u589e\u64cd\u4f5c"),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u65b0\u589e\u4e86\u4ec0\u4e48\u6570\u636e"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u66f4\u65b0\u64cd\u4f5c"),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u7684\u54ea\u4e9b\u6570\u636e\u505a\u4e86\u66f4\u6539\uff0c\u8bb0\u5f55\u66f4\u6539\u524d\u7684\u503c\u548c\u66f4\u6539\u540e\u7684\u503c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u5220\u9664\u64cd\u4f5c"),"\uff1a\u8bb0\u5f55\u67d0\u67d0\u4eba\u5728\u67d0\u67d0\u65f6\u95f4\u5bf9\u54ea\u4e2a\u8868\u5220\u9664\u4e86\u4ec0\u4e48\u6570\u636e")),(0,o.kt)("h2",{id:"9222-\u5173\u4e8e-savechanges-\u4e8b\u4ef6"},"9.22.2 \u5173\u4e8e ",(0,o.kt)("inlineCode",{parentName:"h2"},"SaveChanges")," \u4e8b\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u4e3a\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDbContext")," \u5b50\u7c7b\u90fd\u63d0\u4f9b\u4e86\u4e09\u4e2a\u53ef\u91cd\u5199\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u5206\u522b\u7531\u4e09\u4e2a\u4e8b\u4ef6\u89e6\u53d1\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u4e4b\u524d SavingChanges \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"li"},"void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)")," \u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u4e4b\u540e SavedChanges \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"li"},"void SavedChangesEvent(SaveChangesCompletedEventData eventData, int result)")," \u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u5931\u8d25 SaveChangesFailed \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"li"},"void SaveChangesFailedEvent(DbContextErrorEventData eventData)")," \u65b9\u6cd5")),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e09\u4e2a\u4e8b\u4ef6\u6211\u4eec\u5c31\u53ef\u4ee5\u6355\u83b7\u6240\u6709\u66f4\u6539\u7684\u5b9e\u4f53\u7136\u540e\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u3002"),(0,o.kt)("h2",{id:"9223-\u5982\u4f55\u5b9e\u73b0"},"9.22.3 \u5982\u4f55\u5b9e\u73b0"),(0,o.kt)("h3",{id:"92231-\u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7"},"9.22.3.1 \u6570\u636e\u5e93\u5ba1\u8ba1\u65e5\u5fd7"),(0,o.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDbContext")," \u5b50\u7c7b\u4e2d\u91cd\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"SavingChanges")," \u4e8b\u4ef6\u5bf9\u5e94\u65b9\u6cd5\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {23}",showLineNumbers:!0,"":!0,"{23}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Infrastructure;\nusing System;\nusing System.Linq;\nusing System.Security.AccessControl;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class FurionDbContext : AppDbContext<FurionDbContext>\n    {\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\n        {\n        }\n\n        /// <summary>\n        /// \u91cd\u5199\u4fdd\u5b58\u4e4b\u524d\u4e8b\u4ef6\n        /// </summary>\n        /// <param name="sender"></param>\n        /// <param name="e"></param>\n        protected override void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)\n        {\n            // \u83b7\u53d6\u5f53\u524d\u4e8b\u4ef6\u5bf9\u5e94\u4e0a\u4e0b\u6587\n            var dbContext = eventData.Context;\n\n            // \u5f3a\u5236\u91cd\u65b0\u68c0\u67e5\u4e00\u8fb9\u5b9e\u4f53\u66f4\u6539\u4fe1\u606f\n            // dbContext.ChangeTracker.DetectChanges();\n\n            // \u83b7\u53d6\u6240\u6709\u66f4\u6539\uff0c\u5220\u9664\uff0c\u65b0\u589e\u7684\u5b9e\u4f53\uff0c\u4f46\u6392\u9664\u5ba1\u8ba1\u5b9e\u4f53\uff08\u907f\u514d\u6b7b\u5faa\u73af\uff09\n            var entities = dbContext.ChangeTracker.Entries()\n                .Where(u => u.Entity.GetType() != typeof(Audit) && (u.State == EntityState.Modified || u.State == EntityState.Deleted || u.State == EntityState.Added))\n                .ToList();\n\n            // \u901a\u8fc7\u8bf7\u6c42\u4e2d\u83b7\u53d6\u5f53\u524d\u64cd\u4f5c\u4eba\n            var userId = App.GetService<IHttpContextAccessor>().HttpContext.Items["UserId"];\n\n            // \u83b7\u53d6\u6240\u6709\u5df2\u66f4\u6539\u7684\u5b9e\u4f53\n            foreach (var entity in entities)\n            {\n                // \u83b7\u53d6\u5b9e\u4f53\u7c7b\u578b\n                var entityType = entity.Entity.GetType();\n\n                // \u83b7\u53d6\u6240\u6709\u5b9e\u4f53\u6709\u6548\u5c5e\u6027\uff0c\u6392\u9664 [NotMapper] \u5c5e\u6027\n                var props = entity.OriginalValues.Properties;\n\n                // \u83b7\u53d6\u5b9e\u4f53\u5f53\u524d\uff08\u73b0\u5728\uff09\u7684\u503c\n                var currentValues = entity.CurrentValues;\n\n                // \u83b7\u53d6\u6570\u636e\u5e93\u4e2d\u5b9e\u4f53\u7684\u503c\n                var databaseValues = entity.GetDatabaseValues();\n\n                // \u904d\u5386\u6240\u6709\u5c5e\u6027\n                foreach (var prop in props)\n                {\n                    // \u83b7\u53d6\u5c5e\u6027\u540d\n                    var propName = prop.Name;\n\n                    // \u83b7\u53d6\u73b0\u5728\u7684\u5b9e\u4f53\u503c\n                    var newValue = currentValues[propName];\n\n                    object oldValue = null;\n                    // \u5982\u679c\u662f\u65b0\u589e\u6570\u636e\uff0c\u5219 databaseValues \u4e3a\u7a7a\uff0c\u6240\u4ee5\u9700\u8981\u5224\u65ad\u4e00\u4e0b\n                    if (databaseValues != null)\n                    {\n                        oldValue = databaseValues[propName];\n                    }\n\n                    // \u63d2\u5165\u5ba1\u8ba1\u65e5\u5fd7\u8868\uff0cAudit \u662f\u4f60\u81ea\u5b9a\u4e49\u7684\u5b9e\u4f53\n                    dbContext.Set<Audit>().Add(new Audit\n                    {\n                        Table = entityType.Name,    // \u8868\u540d\n                        Column = propName,  // \u66f4\u65b0\u7684\u5217\n                        NewValue = newValue,    // \u65b0\u503c\n                        OldValue = oldValue,    // \u65e7\u503c\n                        CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\n                        UserId = userId,    // \u64cd\u4f5c\u4eba\n                        Operate = entity.State.ToString()  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\n                    });\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5bf9\u6027\u80fd\u6709\u6240\u8981\u6c42\uff0c\u90a3\u4e48\u5efa\u8bae\u5ba1\u8ba1\u65e5\u5fd7\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u7ec4\u4ef6")," \u5199\u5165\u6570\u636e\u5e93\uff0c\u5982\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Nlog\u3001Log4Net")," \u8fd9\u4e9b\u7b49\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u63d2\u5165\u5ba1\u8ba1\u65e5\u5fd7\u8868\ndbContext.Set<Audit>().Add(new Audit\n{\n    Table = entityType.Name,    // \u8868\u540d\n    Column = propName,  // \u66f4\u65b0\u7684\u5217\n    newValue = newValue,    // \u65b0\u503c\n    OldValue = oldValue,    // \u65e7\u503c\n    CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\n    UserId = userId,    // \u64cd\u4f5c\u4eba\n    Operate = entity.State.ToString()  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\n});\n")),(0,o.kt)("p",{parentName:"admonition"},"\u66ff\u6362\u4e3a\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"logger.Information(JsonConvert.SerializeObject(new Audit\n{\n    Table = entityType.Name,    // \u8868\u540d\n    Column = propName,  // \u66f4\u65b0\u7684\u5217\n    newValue = newValue,    // \u65b0\u503c\n    OldValue = oldValue,    // \u65e7\u503c\n    CreatedTime = DateTime.Now, // \u64cd\u4f5c\u65f6\u95f4\n    UserId = userId,    // \u64cd\u4f5c\u4eba\n    Operate = entity.State.ToString()  // \u64cd\u4f5c\u65b9\u5f0f\uff1a\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\n}));\n"))),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5bf9\u6570\u636e\u5e93\u6240\u6709\u7684\u65b0\u589e\u3001\u66f4\u65b0\u3001\u5220\u9664\u8fdb\u884c\u76d1\u63a7\u4e86\u3002"),(0,o.kt)("h3",{id:"92232-\u6267\u884c-sql-\u5ba1\u8ba1\u65e5\u5fd7"},"9.22.3.2 \u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"h3"},"sql")," \u5ba1\u8ba1\u65e5\u5fd7"),(0,o.kt)("p",null,"\u4e3b\u8981\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"DbCommandInterceptor")," \u62e6\u622a\u5b9e\u73b0\uff0c\u5177\u4f53\u4f7f\u7528\u53ef\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"./dbcontext-Interceptor#92422-dbcommandinterceptor"},"\u6570\u636e\u5e93\u62e6\u622a\u5668 - DbCommandInterceptor"),"\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {11}",showLineNumbers:!0,"":!0,"{11}":!0},"using Microsoft.EntityFrameworkCore.Diagnostics;\nusing System.Data.Common;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace Furion.Web.Core\n{\n    /// <summary>\n    /// \u6267\u884c sql \u5ba1\u8ba1\n    /// </summary>\n    public sealed class SqlCommandAuditInterceptor : DbCommandInterceptor\n    {\n        public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<int> result)\n        {\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u8bed\u53e5\n            var sql = command.CommandText;\n\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u7c7b\u578b\uff0c\u662f sql \u8bed\u53e5\uff0c\u8fd8\u662f\u5b58\u50a8\u8fc7\u7a0b\uff0c\u8fd8\u662f\u5176\u4ed6\n            var type = command.CommandType;\n\n            // \u83b7\u53d6 sql \u4f20\u9012\u7684\u547d\u4ee4\u53c2\u6570\n            var parameters = command.Parameters;\n\n            // \u5199\u65e5\u5fd7~~~~\n\n            return base.NonQueryExecuting(command, eventData, result);\n        }\n\n        public override ValueTask<InterceptionResult<int>> NonQueryExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\n        {\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u8bed\u53e5\n            var sql = command.CommandText;\n\n            // \u83b7\u53d6\u6267\u884c\u7684 sql \u7c7b\u578b\uff0c\u662f sql \u8bed\u53e5\uff0c\u8fd8\u662f\u5b58\u50a8\u8fc7\u7a0b\uff0c\u8fd8\u662f\u5176\u4ed6\n            var type = command.CommandType;\n\n            // \u83b7\u53d6 sql \u4f20\u9012\u7684\u547d\u4ee4\u53c2\u6570\n            var parameters = command.Parameters;\n\n            // \u5199\u65e5\u5fd7~~~~\n\n            return base.NonQueryExecutingAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u5176\u4ed6 override\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u5ba1\u8ba1\u65e5\u5fd7")),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u5728\u6ce8\u518c\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors")," \u53c2\u6570\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// services.AddDb \u4e00\u6837\nservices.AddDbPool<FurionDbContext>(interceptors: new IInterceptor[] {\n    new SqlCommandAuditInterceptor()\n});\n")),(0,o.kt)("h3",{id:"92233-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"},"9.22.3.3 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"),(0,o.kt)("admonition",{title:"\u5173\u4e8e\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u9700\u5b9e\u73b0\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\u53ef\u67e5\u9605 \u3010",(0,o.kt)("a",{parentName:"p",href:"/docs/audit"},"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\u7ae0\u8282"),"\u3011")),(0,o.kt)("h2",{id:"9224-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.22.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);