(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(4),o=n.n(c),r=(n(15),n(5)),d=n(6),l=n(8),s=n(7),u=n(9),p=n(1),m=n(2),h=[{candidate:"Barack Obama",selected:!1},{candidate:"George Bush",selected:!1},{candidate:"Hillary Clinton",selected:!1},{candidate:"Bernie Sanders",selected:!1},{candidate:"Marco Rubio",selected:!1},{candidate:"George Washington",selected:!1},{candidate:"John Adams",selected:!1},{candidate:"Abraham Lincoln",selected:!1},{candidate:"Franklin D. Roosevelt",selected:!1},{candidate:"Ron Swanson",selected:!1}],b={width:"250px",margin:"0 auto"},f={width:"100%",padding:"8px 0",textAlign:"center",backgroundColor:"#d8d8d8",fontWeight:"bold",cursor:"pointer",borderRadius:"3px"},g=Object(m.a)({},f,{margin:"10px 0",padding:0,textAlign:"left"}),k={display:"inline-block",marginRight:"8px",padding:"8px",backgroundColor:"#2c5c6c",color:"white",borderRadius:"3px 0 0 3px"},v={focus:"none"},w=Object(m.a)({},f,{marginTop:"20px",backgroundColor:"#00b06f",color:"white"}),x=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=e.target,i=a.value,c=a.previousValue,o=a.id,r=Object(p.a)(Object(p.a)(n)),d=r.container.current,l=r.state,s=l.options,u=l.ranks,m=d.querySelectorAll("select"),h=c&&"skip"!==c;if(h){var b=s.findIndex(function(e){return e.candidate===c});s[b].selected=!1}if("skip"!==i){var f=s.findIndex(function(e){return e.candidate===i});s[f].selected=!0,h||u.push({})}else if(h){var g=o.slice(-1);m.forEach(function(e){e.id.slice(-1)>g&&u.pop()})}t.previousValue=i,n.setState({options:s,ranks:u})},n.handleSubmit=function(){n.setState({submitted:!n.state.submitted})},n.state={ranks:[h[0]],options:h,submitted:!1},n.container=Object(a.createRef)(),n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:{textAlign:"center"}},"Rank your favorite candidates"),i.a.createElement("form",{ref:this.container,style:b},this.state.ranks.map(function(t,n){return i.a.createElement("div",{key:n,style:g},i.a.createElement("label",{style:k,htmlFor:"menu-".concat(n)},n+1),i.a.createElement("select",{id:"menu-".concat(n),style:v,onChange:e.handleChange},i.a.createElement("option",{defaultValue:!0,value:"skip"},"Select an option (or skip)"),e.state.options.map(function(e,t){return i.a.createElement("option",{key:"".concat(e.candidate,"-").concat(t),value:e.candidate,disabled:e.selected},e.candidate)})))}),i.a.createElement("div",{onClick:this.handleSubmit,style:w},this.state.submitted?"Nice!":"Submit")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.900a9000.chunk.js.map