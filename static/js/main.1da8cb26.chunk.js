(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=n(9),i=n(3),l=(n(29),n(6)),u=n(7),h=n(11),d=n(8),b=n(10),m=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"bg-light-green dib br4 pa1 ma1 grow ba shadow-5 hover-bg-green"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=180x180")}),a.a.createElement("div",null,a.a.createElement("h3",{className:" tc"}," ",t,"  "),a.a.createElement("p",{className:" tc"}," ",n)))},E=function(e){var t=e.robot;return a.a.createElement("div",{className:"hover-bc-red"},t.map(function(e,n){return a.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},p=function(e){e.searchfield;var t=e.searchchange;return a.a.createElement("div",{className:"pa2 ma3 "},a.a.createElement("input",{className:" tc pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robot Here",onChange:t}))},f=(n(30),function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"2px solid black",height:"800px"}},e.children)}),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooooops. Thats bad"):this.props.children}}]),t}(r.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.afterSearch,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null," Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"   Robo Friends    "),a.a.createElement(p,{searchchange:n}),a.a.createElement(f,null,a.a.createElement(g,null,a.a.createElement(E,{robot:c}))))}}]),t}(r.Component),O=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{afterSearch:function(t){return e((n=t.target.value,console.log(n),{type:"CHANGE_SEARCH_FIELD",payload:n}));var n},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);var R={searchField:""},y={isPending:!1,robots:[],error:""},S=n(18),j=n(19),w=Object(S.createLogger)(),_=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t.type),t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(i.d)(_,Object(i.a)(j.a,w));c.a.render(a.a.createElement(s.a,{store:C},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.1da8cb26.chunk.js.map