(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{LVae:function(t,e,s){"use strict";var i=s("MX0m"),a=s.n(i),n=s("q1tI"),o=s.n(n).a.createElement;e.a=function(t){var e=t.menu,s=t.handleClick,i=Object(n.useState)(0),r=i[0],c=i[1],l=Object(n.useState)(!1),d=l[0],m=l[1],x=Object(n.useState)(36),p=x[0],y=x[1],g=Object(n.useRef)(),_=function(t){m(g.current.getBoundingClientRect().top<=0),y(36+Math.max((document.body.offsetWidth-1364)/2,0))},f=function(t){y(36+Math.max((document.body.offsetWidth-1364)/2,0))};return Object(n.useEffect)((function(){return y(36+Math.max((document.body.offsetWidth-1364)/2,0)),window.addEventListener("resize",f),window.addEventListener("scroll",_),function(){window.removeEventListener("resize",f),window.removeEventListener("scroll",_)}}),[]),o("div",{className:a.a.dynamic([["359071814",[p-36,p]]])},o("div",{onClick:function(){var t=document.getElementById("app");t&&t.scrollIntoView({behavior:"smooth"})},className:a.a.dynamic([["359071814",[p-36,p]]])+" move-top"},"korean"===e[0]?o("img",{src:"../static/ic_top_w.png",className:a.a.dynamic([["359071814",[p-36,p]]])}):o("img",{src:"../static/ic_top_b.png",className:a.a.dynamic([["359071814",[p-36,p]]])})),o("div",{ref:g,className:a.a.dynamic([["359071814",[p-36,p]]])+" "+("box "+d||!1)},o("ul",{className:a.a.dynamic([["359071814",[p-36,p]]])},e.map((function(t,e){return o("li",{key:"m"+e,onClick:function(){c(e),s&&s(e)},className:a.a.dynamic([["359071814",[p-36,p]]])+" "+(r==e||"")},t)})))),o(a.a,{id:"359071814",dynamic:[p-36,p]},[".move-top.__jsx-style-dynamic-selector{position:fixed;right:".concat(p-36,"px;bottom:240px;z-index:99;width:70px;}"),".box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}",".box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0;right:".concat(p,"px;z-index:3;}"),"ul.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;}","ul.__jsx-style-dynamic-selector{position:absolute;right:36px;}","li.__jsx-style-dynamic-selector{cursor:pointer;font-size:23px;font-weight:bold;height:44px;line-height:40px;padding:0 18px;min-width:80px;border:3px solid #000;background:#fff;display:inline-block;text-align:center;margin-left:-3px;}","li.true.__jsx-style-dynamic-selector{background:#FF7575;}","@media only screen and (max-width:960px){.move-top.__jsx-style-dynamic-selector{position:fixed;right:0px;bottom:120px;z-index:99;width:32px;}.box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0px;right:20px;z-index:1;}ul.__jsx-style-dynamic-selector{right:20px;}li.__jsx-style-dynamic-selector{font-size:11px;height:22px;line-height:20px;padding:0 9px;border:2px solid #000;min-width:38px;}}"]))}},MB59:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/store",function(){return s("zrn3")}])},zrn3:function(t,e,s){"use strict";s.r(e);var i=s("MX0m"),a=s.n(i),n=s("q1tI"),o=s.n(n),r=s("LVae"),c=o.a.createElement;function l(t){var e=t.data,s=Object(n.useState)(0),i=s[0],o=s[1],r=Object(n.useState)(0),l=r[0],d=r[1];return c("div",{className:a.a.dynamic([["1455917361",[l]]])+" slider"},c("div",{onClick:function(){var t=i-1;t<0&&(t=e.length-1),o(t),d(-100*t)},className:a.a.dynamic([["1455917361",[l]]])+" bt-arrow left"},c("div",{className:a.a.dynamic([["1455917361",[l]]])+" arrow "})),c("div",{onClick:function(){var t=i+1;t>=e.length&&(t=0),o(t),d(-100*t)},className:a.a.dynamic([["1455917361",[l]]])+" bt-arrow right"},c("div",{className:a.a.dynamic([["1455917361",[l]]])+" arrow "})),c("div",{className:a.a.dynamic([["1455917361",[l]]])+" slider-wrap"},e&&e.map((function(t,e){return c("div",{key:"slide"+e,style:{left:100*e+"%"},className:a.a.dynamic([["1455917361",[l]]])+" slide"},c("img",{src:t,className:a.a.dynamic([["1455917361",[l]]])}))}))),c(a.a,{id:"1455917361",dynamic:[l]},[".bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-50px;width:100px;height:100px;padding:20px;}",".bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:60px;height:60px;border-top:2px solid #FF7575;}",".bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}",".bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:2px solid #FF7575;}",".bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}",".bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:2px solid #FF7575;}",".slider.__jsx-style-dynamic-selector{margin:36px;position:relative;overflow:hidden;}","img.__jsx-style-dynamic-selector{vertical-align:top;}",".slide.__jsx-style-dynamic-selector{position:absolute;top:0;width:100%;z-index:1;}",".slide.__jsx-style-dynamic-selector:first-child{position:static;}",".slider-wrap.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 0.6s ease;-webkit-transition:transform 0.6s ease;transition:transform 0.6s ease;-webkit-transform:translateX(".concat(l,"%);-ms-transform:translateX(").concat(l,"%);transform:translateX(").concat(l,"%);}"),"@media only screen and (max-width:960px){.slider.__jsx-style-dynamic-selector{margin:18px;}.bt-arrow.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:50%;z-index:9;margin-top:-20px;width:40px;height:40px;padding:10px;}.bt-arrow.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:20px;height:20px;border-top:1px solid #FF7575;}.bt-arrow.left.__jsx-style-dynamic-selector{left:1%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.bt-arrow.left.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-left:1px solid #FF7575;}.bt-arrow.right.__jsx-style-dynamic-selector{right:1%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.bt-arrow.right.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{border-right:1px solid #FF7575;}}"]))}s.d(e,"default",(function(){return m}));var d=o.a.createElement;function m(){return d("div",{className:"jsx-2110358048"},d(r.a,{menu:["gangnam","hongik uni.","IFC mall"],handleClick:function(t){var e=document.getElementsByTagName("section")[t];e&&e.scrollIntoView({behavior:"smooth"})}}),d("div",{className:"jsx-2110358048"},d("section",{className:"jsx-2110358048"},d("div",{className:"jsx-2110358048 title"},"\uc6d0\uc564 \uac15\ub0a8\uc810"),d("div",{className:"jsx-2110358048 desc"},"\uc11c\uc6b8\uc2dc \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c 4\uae38 6, \uc13c\ud2b8\ub7f4 \ud478\ub974\uc9c0\uc624\uc2dc\ud2f0  \uc9c0\ud558 1\uce35 121\ud638",d("br",{className:"jsx-2110358048"}),"02. 538. 8972",d("br",{className:"jsx-2110358048"}),"\uc601\uc5c5\uc2dc\uac04 : 11:30~22:00"),d("img",{src:"../static/store_gangnam.jpg",className:"jsx-2110358048 map"}),d(l,{data:["../static/gangnam1.jpg","../static/gangnam2.jpg","../static/gangnam3.jpg","../static/gangnam4.jpg"]})),d("section",{className:"jsx-2110358048"},d("div",{className:"jsx-2110358048 title"},"\uc6d0\uc564 \ud64d\ub300\uc810"),d("div",{className:"jsx-2110358048 desc temp"},"\uc624\ud508\uc608\uc815")),d("section",{className:"jsx-2110358048"},d("div",{className:"jsx-2110358048 title"},"\uc6d0\uc564 IFC\ubab0\uc810"),d("div",{className:"jsx-2110358048 desc temp"},"\uc624\ud508\uc608\uc815"))),d(a.a,{id:"2110358048"},[".title.jsx-2110358048{color:#FF7575;font-weight:bold;font-size:22px;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;padding:36px 30px 12px;}",".desc.jsx-2110358048{font-size:20px;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;padding:0 30px;}",".desc.temp.jsx-2110358048::after{content:'';display:block;background:#fff;height:300px;}","img.jsx-2110358048{vertical-align:top;}","section.jsx-2110358048{text-align:left;}",".map.jsx-2110358048{width:680px;max-width:100%;}","@media only screen and (max-width:960px){.title.jsx-2110358048{font-size:13px;padding:20px 20px 6px;}.desc.jsx-2110358048{font-size:11px;padding:0 20px;}}"]))}}},[["MB59",0,1,2]]]);