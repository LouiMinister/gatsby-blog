(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/d1K":function(e,t,a){"use strict";a("91GP");var n=a("Rwg6"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),i=a("IP2g"),c=a("KSab"),m=a("Y7J9"),s=(a("rmcW"),c.config.friends),u=void 0===s?[]:s,f=function(){return l.a.createElement("div",{className:"category"},l.a.createElement("p",null,"카테고리"),u.map((function(e){return l.a.createElement(m.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},p=(a("qfuT"),function(e){var t=e.posts;return l.a.createElement("div",{className:"latest-post"},l.a.createElement("p",null,"최근 글"),t.map((function(e){var t=e.node;return l.a.createElement(o.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),d=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return l.a.createElement("div",{className:"d-none d-lg-block information my-2"},l.a.createElement("hr",null),l.a.createElement("p",null,"총 포스팅:  ",t),l.a.createElement("hr",null),l.a.createElement(p,{posts:a}),l.a.createElement("hr",null),l.a.createElement(f,null))});d.defaultProps={posts:[]};var g=d,E=(a("YX5f"),c.config.wordings),h=void 0===E?[]:E,b=c.config.githubUsername,y=(c.config.zhihuUsername,c.config.email),v=c.config.iconUrl,w=c.config.about,k=c.config.facebook,N=function(e){var t=e.href,a=e.icon;return l.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},l.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},l.a.createElement(i.a,{icon:a})))},P=function(e){var t=e.totalCount,a=e.latestPosts;return l.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},l.a.createElement("div",{className:"about-me"},l.a.createElement(o.Link,{to:w,href:w,className:"name"},l.a.createElement("img",{className:"avatar",src:v,alt:"Calpa"}),l.a.createElement("h4",null,"LouiMinister")),l.a.createElement("p",{className:"mb-1"},h[0]),l.a.createElement("p",{className:"mb-1"},h[1]),l.a.createElement(N,{href:"https://github.com/"+b,icon:["fab","github"]}),l.a.createElement(N,{href:"mailto:"+y,icon:["far","envelope"]}),k&&l.a.createElement(N,{href:"https://www.facebook.com/"+k+"/",icon:["fab","facebook"]}),l.a.createElement(g,{totalCount:t,posts:a})))};P.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return l.a.createElement(o.StaticQuery,{query:"1307080370",render:function(e){return l.a.createElement(P,Object.assign({},e.all,e.limited))},data:n})}},Jz1z:function(e,t,a){"use strict";a("f3/d");var n=a("q1tI"),r=a.n(n),l=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)};l.defaultProps={count:""},t.a=l},Rwg6:function(e){e.exports=JSON.parse('{"data":{"all":{"totalCount":4},"limited":{"latestPosts":[{"node":{"id":"868883a8-7a45-5c88-a6bc-e9dd9e12d1ef","fields":{"slug":"/2019-2-15-firstposting"},"frontmatter":{"id":"2019-2-15-firstposting","title":"첫 포스팅","url":"/2019-2-15-firstposting","date":"2020-02-15T17:26:00.125Z","tags":["etc"],"description":"첫 포스팅 테스팅","headerImage":null}}},{"node":{"id":"59246b6e-d05e-5053-826c-e197d8d06f24","fields":{"slug":"/2019/05/17/README"},"frontmatter":{"id":"README","title":"gatsby-starter-calpa-blog README","url":"/2019/05/17/README","date":"2019-05-17T03:48:03.125Z","tags":["閱讀"],"description":"關於這個 Starter","headerImage":"https://i.imgur.com/mich3dS.jpg"}}},{"node":{"id":"2e04630b-0e06-5a60-800c-5a1af77f091f","fields":{"slug":"/2018/05/01/about-calpa-liu/"},"frontmatter":{"id":"c192eaba9fefc632acf87ed636593475","title":"關於作者","url":"/2018/05/01/about-calpa-liu/","date":"2018-05-01T03:48:03.125Z","tags":["閱讀"],"description":"你好，歡迎來到我的博客。我是 Calpa，一個喜歡寫技術文章的前端程序員。","headerImage":"https://i.imgur.com/mich3dS.jpg"}}},{"node":{"id":"165ea9ee-ea4e-5d3f-89e3-634c1cf2c0a4","fields":{"slug":"/guestbook"},"frontmatter":{"id":"https://calpa.me/guestbook/","title":"留言簿","url":"/guestbook","date":"2017-01-01T03:48:03.125Z","tags":["閱讀"],"description":"","headerImage":null}}}]}}}')},enK5:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("XfO3"),a("HEwt"),a("Vd3H");var n=a("q1tI"),r=a.n(n),l=a("/d1K"),o=a("Jz1z"),i=a("wtQ5");t.default=function(e){var t=e.data.allMarkdownRemark,a={};t.edges.forEach((function(e){e.node.frontmatter.tags.forEach((function(e){a[e]?a[e]+=1:a[e]=1}))}));var n=Array.from(Object.keys(a)).sort((function(e,t){return a[t]-a[e]}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement(l.a,null),r.a.createElement("div",{className:"col order-2"},n.map((function(e){return r.a.createElement(o.a,{name:e,key:e,count:a[e]})})))),r.a.createElement(i.a,{title:"標籤",url:"/tags/",siteTitleAlt:"Calpa's Blog",isPost:!1,description:"Tags Page",image:"https://i.imgur.com/M795H8A.jpg"}))};var c="3215885689"},wtQ5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TJpk"),o=a.n(l),i=a("KSab"),c=a.n(i),m=function(e){var t=e.url,a=e.title,n=e.description,l=e.image,i=(e.siteTitleAlt,e.isPost);return r.a.createElement(o.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:l}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,l=e.image,o=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:l}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:l},description:o}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),i?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:l}),r.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:c.a.twitter_username?c.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:l}))};m.defaultProps={title:c.a.title},t.a=m}}]);
//# sourceMappingURL=component---src-pages-tags-js-9cd3680ace27391ed323.js.map