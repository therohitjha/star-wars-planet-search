(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),u=a.n(c),s=a(8),o=a(7),l=(a(26),a(11)),i=a(5),m=a(10),p=a.n(m),f=a(13);var b=function(e){var t=e.displayPlanet,a=e.searchPlanet,n=e.handleSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"Search The Planet...",value:a,onChange:function(e){return n(e)},className:"input-box mb",autoFocus:!0}),t&&t.map((function(e){return parseInt(e.population)<=1e4||"unknown"===e.population?r.a.createElement("h4",{key:e.name},e.name):r.a.createElement("h1",{key:e.name},e.name)})))};function h(){var e=Object(n.useContext)(d).user,t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],u=a[1],s=Object(n.useState)(""),l=Object(o.a)(s,2),m=l[0],h=l[1],v=Object(n.useState)(),g=Object(o.a)(v,2),k=g[0],x=g[1],E=Object(n.useState)(0),j=Object(o.a)(E,2),O=j[0],y=j[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://swapi.co/api/planets",{mode:"no-cors"});case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,a.results;case 9:n=e.sent,u(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()();var e=setInterval((function(){y(0)}),6e4);return function(){return clearInterval(e)}}),[]);var w=function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.target.value,h(n),!("Luke Skywalker"===e.name&&O<=15)){t.next=20;break}if(y(O+1),!n){t.next=17;break}return t.prev=5,t.next=8,c.filter((function(e){return e.name.toLowerCase().includes(n)}));case 8:r=t.sent,x(r),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0);case 15:t.next=18;break;case 17:x("");case 18:t.next=22;break;case 20:x(""),alert("Search Limit Exceeded, Please Wait...");case 22:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,e.isLogged?r.a.createElement(b,{displayPlanet:k,searchPlanet:m,handleSearch:w}):r.a.createElement(i.a,{to:"/login"}))}function v(){var e=Object(n.useContext)(d),t=e.user,a=e.handleForm,c=e.setUser;return r.a.createElement(r.a.Fragment,null,t.isLogged?r.a.createElement(i.a,{to:"/"}):r.a.createElement("form",{onSubmit:function(e){return a(e)},className:"form"},t.err&&r.a.createElement("h4",{style:{color:"red"}},t.err),r.a.createElement("input",{type:"text",defaultValue:t.name,className:"input-box",onChange:function(e){return c(Object(s.a)({},t,{name:e.target.value}))},required:!0}),r.a.createElement("input",{type:"text",defaultValue:t.pass,className:"input-box",onChange:function(e){return c(Object(s.a)({},t,{pass:e.target.value}))},required:!0}),r.a.createElement("input",{type:"submit",value:"Log In",className:"btn"})))}var d=Object(n.createContext)();u.a.render(r.a.createElement((function(){var e=Object(n.useState)({name:"Luke Skywalker",pass:"19BBY",isLogged:!1,err:""}),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(l.a,{basename:"/"},r.a.createElement(d.Provider,{value:{user:a,handleForm:function(e){e.preventDefault(),"Luke Skywalker"!==a.name||"19BBY"!==a.pass?c((function(e){return Object(s.a)({},e,{err:"Wrong Username & Password"})})):"Luke Skywalker"===a.name&&"19BBY"===a.pass&&c((function(e){return Object(s.a)({},e,{isLogged:!0})}))},setUser:c}},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:h}),r.a.createElement(i.b,{exact:!0,path:"/login",component:v}))))}),null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.88ecf947.chunk.js.map