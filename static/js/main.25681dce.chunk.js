(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(4),r=n.n(i),o=(n(14),n(2)),c=n(5),h=n(6),m=n(1),l=n(8),u=n(7),b=(n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={session:1500,break:300,formattedTime:"25:00",running:!1,sessionOn:!0,content:"Session",sessionLength:1500,breakLength:300,newSession:!0,startLabel:"Start"},s.startTime=s.startTime.bind(Object(m.a)(s)),s.startStopIt=s.startStopIt.bind(Object(m.a)(s)),s.resetTime=s.resetTime.bind(Object(m.a)(s)),s.formatTime=s.formatTime.bind(Object(m.a)(s)),s.changeLength=s.changeLength.bind(Object(m.a)(s)),s.play=s.play.bind(Object(m.a)(s)),s.interval=void 0,s.beepLink="https://freesound.org/data/previews/174/174027_3242494-lq.mp3",s}return Object(h.a)(n,[{key:"play",value:function(){document.getElementById("beep").play()}},{key:"startTime",value:function(){var e=this,t=this.state.sessionOn?this.state.session:this.state.break,n=this.state.sessionOn?"Break":"Session",s=!this.state.sessionOn;if(t>0){t-=1;var a=this.formatTime(t);this.setState((function(e,n){var s;return s={},Object(o.a)(s,e.sessionOn?"session":"break",t),Object(o.a)(s,"formattedTime",a),Object(o.a)(s,"newSession",!1),s}))}else 0==t&&(this.play(),this.setState((function(t,a){return{session:t.sessionLength,break:t.breakLength,formattedTime:t.sessionOn?e.formatTime(t.break):e.formatTime(t.session),sessionOn:s,content:n}})))}},{key:"startStopIt",value:function(){var e=this;this.state.running?this.setState({running:!1,startLabel:"Start"},(function(){clearInterval(e.interval)})):this.setState({running:!0,startLabel:"Stop"},(function(){e.interval=setInterval(e.startTime,1e3)}))}},{key:"resetTime",value:function(){var e=this;document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0,this.setState((function(e,t){return{session:1500,break:300,formattedTime:"25:00",running:!1,sessionOn:!0,content:"Session",sessionLength:1500,breakLength:300,newSession:!0,startLabel:"Start"}}),(function(){clearInterval(e.interval)}))}},{key:"changeLength",value:function(e){var t=this;"break-decrement"==e.target.id&&this.state.breakLength>60?this.setState((function(e,t){return{breakLength:e.breakLength-60}})):"break-increment"==e.target.id&&this.state.breakLength<3600?this.setState((function(e,t){return{breakLength:e.breakLength+60}})):"session-decrement"==e.target.id&&this.state.sessionLength>60?this.setState((function(e,t){return{sessionLength:e.sessionLength-60}}),(function(){t.state.newSession&&t.setState((function(e,n){return{session:e.sessionLength,formattedTime:t.formatTime(e.sessionLength)}}))})):"session-increment"==e.target.id&&this.state.sessionLength<3600&&this.setState((function(e,t){return{sessionLength:e.sessionLength+60}}),(function(){t.state.newSession&&t.setState((function(e,n){return{session:e.sessionLength,formattedTime:t.formatTime(e.sessionLength)}}))}))}},{key:"formatTime",value:function(e){var t=Math.floor(e/60),n=e%60;return t<10&&(t="0".concat(t)),n<10&&(n="0".concat(n)),"".concat(t,":").concat(n)}},{key:"render",value:function(){return a.a.createElement("div",{id:"pomodoro"},a.a.createElement("div",{id:"header"},"POMODORO CLOCK"),a.a.createElement("div",{id:"break-label"},"Break Length"),a.a.createElement("div",{id:"break-length"},Math.floor(this.state.breakLength/60)," min"),a.a.createElement("div",{id:"session-label"},"Session Length"),a.a.createElement("div",{id:"session-length"},Math.floor(this.state.sessionLength/60)," min"),a.a.createElement("button",{className:"button",id:"break-increment",onClick:this.changeLength},"Increase Break"),a.a.createElement("button",{className:"button",id:"break-decrement",onClick:this.changeLength},"Decrease Break"),a.a.createElement("button",{className:"button",id:"session-increment",onClick:this.changeLength},"Increase Session"),a.a.createElement("button",{className:"button",id:"session-decrement",onClick:this.changeLength},"Decrease Session"),a.a.createElement("div",{id:"timer-label"},this.state.content),a.a.createElement("div",{id:"time-left"},this.state.formattedTime,a.a.createElement("audio",{id:"beep"},a.a.createElement("source",{src:this.beepLink}))),a.a.createElement("button",{className:"button",id:"start_stop",onClick:this.startStopIt},this.state.startLabel),a.a.createElement("button",{className:"button",id:"reset",onClick:this.resetTime},"Reset"))}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.25681dce.chunk.js.map