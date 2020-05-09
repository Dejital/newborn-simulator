(this["webpackJsonpnewborn-parent"]=this["webpackJsonpnewborn-parent"]||[]).push([[0],{131:function(e,t,a){e.exports=a(256)},136:function(e,t,a){},137:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),i=(a(136),a(39)),o=a(16),u=(a(137),a(265)),s=a(257),m=a(266),d=a(268),b=a(269),h={h1:{paddingTop:"3em"},input:{marginBottom:"0.5em",overflow:"hidden",width:"100%"},button:{marginBottom:"0.5em"}},g=function(e){return l.a.createElement(u.a,{style:h.input,label:"Weight",value:"".concat(Math.round(10*e.weight)/10," oz")})},E=function(e){return l.a.createElement(u.a,{style:h.input,label:"Age",value:"".concat(Math.round(100*e.hours)/100," hrs")})},p=function(e){return l.a.createElement(u.a,{style:h.input,label:"Stamina",value:f(e.stamina)})};function f(e){return e>30?"Active":e>10?"Growing tired":"Exhausted"}var O=function(e){return l.a.createElement(s.a,{style:h.button,onClick:e.onClick,loading:e.loading,color:(t=e.diaperFullness,t>70?"brown":t>30?"yellow":null),disabled:e.disabled},function(e){return e>70?"\ud83d\udca9Change Diaper":"\ud83e\uddf7Change Diaper"}(e.diaperFullness));var t},j=function(e){return l.a.createElement(s.a,{style:h.button,disabled:e.disabled,onClick:e.onClick},"\u23f0",e.isSleeping?"Wake":"Sleep")},y=function(e){return l.a.createElement(m.a,null,l.a.createElement(d.a,{as:"h3"},"History"),l.a.createElement("p",null,"\ud83e\udd5bOunces fed: ",Math.round(100*e.analytics.ouncesFed)/100),l.a.createElement("p",null,"\ud83d\uddd1\ufe0fDiapers changed: ",e.analytics.diapersChanged),l.a.createElement("p",null,"\u2696\ufe0f\ufe0fWeight gained: ",Math.round(100*e.analytics.weight)/100," oz"))},v="\ud83d\udeccCrib",S="\ud83d\udc76Held";function C(e){return e>80?"\ud83d\ude0aHappy":e>50?"\ud83d\ude17OK":e>25?"\ud83d\ude14Fussy":e>10?"\ud83d\ude21Angry":"\ud83e\udd2cExtreme"}function F(e){var t=e.weight,a=e.age,n=e.place,r=e.analytics,c=e.mood,i=e.diaperFullness,o=e.hunger,f=e.stamina,F=e.onBreastFeed,w=e.onBottleFeed,M=e.onHoldBaby,B=e.onCrib,k=e.onChangeDiaper,D=e.onSleep,H=e.isBreastFeeding,x=e.isBottleFeeding,T=e.isChangingDiaper,A=e.isSleeping;return l.a.createElement(m.a,null,l.a.createElement(d.a,{style:h.h1,textAlign:"left",as:"h1"},"\ud83d\udc76 Newborn Sim",l.a.createElement(d.a.Subheader,null,"Simulating the parenting process for a newborn baby."),l.a.createElement("br",null)),l.a.createElement(b.a,{columns:3,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(d.a,{as:"h3"},"Status"),l.a.createElement(d.a,{as:"h4"},"Baby"),l.a.createElement(u.a,{style:h.input,label:c<=25?{content:"Feeling",color:"red"}:{content:"Feeling"},value:C(c),error:c<=25}),l.a.createElement("br",null),l.a.createElement(g,{weight:t}),l.a.createElement("br",null),l.a.createElement(E,{hours:a}),l.a.createElement(d.a,{as:"h4"},"Parent"),l.a.createElement(p,{stamina:f})),l.a.createElement(b.a.Column,null,l.a.createElement(d.a,{as:"h3"},"Actions"),l.a.createElement(d.a,{as:"h4"},"Feeding"),l.a.createElement(s.a,{style:h.button,onClick:F,loading:H,disabled:H||x||T||A||0===f},"\ud83e\udd31Breast Feed"),l.a.createElement(s.a,{style:h.button,onClick:w,loading:x,disabled:H||x||T||A||0===f},"\ud83c\udf7cBottle Feed"),l.a.createElement("br",null),l.a.createElement(d.a,{as:"h4"},"Diapers"),l.a.createElement(O,{onClick:k,loading:T,diaperFullness:i,disabled:H||x||T||A||0===f}),l.a.createElement("br",null),l.a.createElement(d.a,{as:"h4"},"Placement"),l.a.createElement(s.a,{onClick:M,attached:"left",toggle:!0,active:n==S,disabled:A||0===f},"\ud83d\udc76Hold Baby"),l.a.createElement(s.a,{onClick:B,attached:"right",toggle:!0,active:n==v,disabled:A||0===f},v),l.a.createElement("br",null),l.a.createElement(d.a,{as:"h4"},"Parent"),l.a.createElement(j,{onClick:D,isSleeping:A,disabled:n===S})),l.a.createElement(b.a.Column,null,l.a.createElement(y,{analytics:r}),l.a.createElement("br",null),l.a.createElement(m.a,{style:{display:"none"}},l.a.createElement(d.a,{as:"h3"},"Debug"),l.a.createElement("p",null,"Mood: ",c),l.a.createElement("p",null,"Diaper: ",i),l.a.createElement("p",null,"Hunger: ",o)))))}var w=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(100),u=Object(o.a)(c,2),s=u[0],m=u[1],d=Object(n.useState)(v),b=Object(o.a)(d,2),h=b[0],g=b[1],E=Object(n.useState)(0),p=Object(o.a)(E,2),f=p[0],O=p[1],j=Object(n.useState)(.5),y=Object(o.a)(j,2),C=y[0],w=y[1],M=Object(n.useState)(!1),B=Object(o.a)(M,2),k=B[0],D=B[1],H=Object(n.useState)(!1),x=Object(o.a)(H,2),T=x[0],A=x[1],W=Object(n.useState)(!1),P=Object(o.a)(W,2),z=P[0],J=P[1],G=Object(n.useState)(70),I=Object(o.a)(G,2),K=I[0],N=I[1],$=Object(n.useState)(0),q=Object(o.a)($,2),L=q[0],Q=q[1],R=Object(n.useState)(10),U=Object(o.a)(R,2),V=U[0],X=U[1],Y=Object(n.useState)(80),Z=Object(o.a)(Y,2),_=Z[0],ee=Z[1],te=Object(n.useState)(!1),ae=Object(o.a)(te,2),ne=ae[0],le=ae[1],re=Object(n.useState)({ouncesFed:0,diapersChanged:0,weight:0}),ce=Object(o.a)(re,2),ie=ce[0],oe=ce[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){if(r(a+.2),!k&&f<C){var e=C*(C/10);O(Math.min(f+e,C))}var t,n=1;if(h===S&&(n+=2),L>70&&!z?n-=5:L>30&&!z&&(n-=2),V>50&&!T&&!T&&(n-=5),N(Math.max(Math.min(100,K+n),0)),!z&&L<100&&Math.random()<10/120){var l=(t=101,Math.floor(Math.random()*Math.floor(t)));Q(Math.min(100,l+L))}!k&&!T&&V<100&&X(Math.min(100,V+5));var c=100/(h===S?14:18)*.2;ee(Math.max(_-c,0)),0===_&&(g(v),le(!0)),w(1.01*C);var o=1.1/120;V>90?o=-1*o/2:V>70&&(o=0),m(s+o),oe(Object(i.a)({},ie,{weight:o}))}),1e3);return function(){return clearTimeout(e)}})),l.a.createElement("div",null,l.a.createElement(F,{weight:s,age:a,place:h,analytics:ie,mood:K,diaperFullness:L,hunger:V,stamina:_,onBreastFeed:function(){return function(){D(!0);var e=f;setTimeout((function(){O(f-e),oe(Object(i.a)({},ie,{ouncesFed:ie.ouncesFed+e})),w(1.05*C),N(Math.min(K+25,100)),X(0),D(!1),ee(_-1)}),2e3)}()},onBottleFeed:function(){return function(){A(!0);setTimeout((function(){oe(Object(i.a)({},ie,{ouncesFed:ie.ouncesFed+1})),A(!1),N(Math.min(K+25,100)),X(0),ee(_-1)}),2e3)}()},onChangeDiaper:function(){return J(!0),void setTimeout((function(){oe(Object(i.a)({},ie,{diapersChanged:ie.diapersChanged+1})),Q(0),N(Math.min(K+L/4,100)),J(!1),ee(_-1)}),2e3)},onHoldBaby:function(){return g(S)},onCrib:function(){return g(v)},onSleep:function(){le(!ne)},isBreastFeeding:k,isBottleFeeding:T,isChangingDiaper:z,isSleeping:ne}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.115b539a.chunk.js.map