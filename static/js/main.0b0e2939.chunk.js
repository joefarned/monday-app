(this["webpackJsonpmonday-integration-quickstart-app"]=this["webpackJsonpmonday-integration-quickstart-app"]||[]).push([[0],{17:function(t,e,n){t.exports=n(45)},22:function(t,e,n){},23:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),i=n(10),a=n.n(i),c=(n(22),n(11)),r=n(12),d=n(16),l=n(15),u=(n(23),n(13)),m=n.n(u),g=(n(39),n(14)),h=n.n(g),p=m()(),f=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).getContext=function(t){var e=t.data,n=e.boardIds||[e.boardId];o.state=n},o.state={settings:{},context:{},boards:[],words:[],itemIds:!1},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){p.listen("settings",this.getSettings),p.listen("context",this.getContext),p.listen("itemIds",this.getItemIds)}},{key:"componentDidMount",value:function(){p.listen("settings",this.getSettings),p.listen("context",this.getContext),p.listen("itemIds",this.getItemIds)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h.a,{title:"Hello Monday Apps!",text:this.state.boardIds,type:"success"}))}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0b0e2939.chunk.js.map