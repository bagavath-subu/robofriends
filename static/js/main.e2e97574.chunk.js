(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(19)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(7),i=t.n(r),c=(t(14),t(1)),s=t(2),l=t(4),u=t(3),h=t(5),d=(t(15),t(16),function(e){var n="https://robohash.org/".concat(e.id);return o.a.createElement("div",{className:"ma3 ba b--silver navy br2 fl grow"},o.a.createElement("img",{src:n,alt:"broken"}),o.a.createElement("p",null,e.id))}),f=(t(17),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"SearchArea bb b--black"},o.a.createElement("input",{className:"br3",placeholder:"Search here",type:"text"}))}}]),n}(a.Component)),m=["Bagavath","Shanmuga","Sarvan","Sujai","Sivaram","Yk","Vj","Surthee","Vignesh","Shiva","thiv","suthan"],b=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){for(var e=[],n=0;n<m.length;n++)e.push(o.a.createElement(d,{id:m[n]}));return o.a.createElement("div",null,o.a.createElement("h1",{style:{"margin-top":"0px","margin-bottom":"0px"}},"Robot Friends"),o.a.createElement(f,{searchChange:this.onSearchChange}),o.a.createElement("div",{className:"App-header"},e),o.a.createElement("div",{className:"add"},o.a.createElement("input",{placeholder:"Enter Name",type:"text",className:"br3"}),o.a.createElement("button",{className:"ma2 mh4 f6 link dim br2 ph3 pv2 mb2 dib white bg-black "},"ADD")))}}]),n}(a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(18);i.a.render(o.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/robofriends","/service-worker.js");p?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):v(n,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.e2e97574.chunk.js.map