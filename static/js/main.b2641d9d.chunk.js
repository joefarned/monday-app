(this["webpackJsonpmonday-integration-quickstart-app"]=this["webpackJsonpmonday-integration-quickstart-app"]||[]).push([[0],{16:function(t,n,e){t.exports=e(45)},21:function(t,n,e){},22:function(t,n,e){},45:function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),r=e(10),i=e.n(r),s=(e(21),e(11)),c=e(12),d=e(15),u=e(14),l=(e(22),e(13)),m=e.n(l),b=(e(38),e(39),m()()),p=function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(t){var a;return Object(s.a)(this,e),(a=n.call(this,t)).state={settings:{},context:{},boards:[],words:[],itemIds:!1},a}return Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;b.listen("context",(function(n){t.setState({context:n.data}),console.log(n.data),b.api("query ($boardIds: [Int]) { boards (ids:$boardIds) { groups { title items { name } } } }",{variables:{boardIds:t.state.context.boardIds}}).then((function(n){t.setState({boardData:n.data.boards})}))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},JSON.stringify(this.state.boardData))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b2641d9d.chunk.js.map