exports.id=1498,exports.ids=[1498],exports.modules={31498:(e,t,a)=>{"use strict";a.r(t),a.d(t,{NewChat:()=>NewChat});var s,n,r,l,i=a(30784),c=a(9885),h=a(52925),o=a(72306),m=a(40714),d=a(72439),_=a.n(d),k=a(98142);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}let left=function(e){return k.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:16,height:16,fill:"none"},e),s||(s=k.createElement("defs",null,k.createElement("path",{id:"left_svg__a",d:"M0 0h16v16H0z"}))),k.createElement("g",null,n||(n=k.createElement("mask",{id:"left_svg__b",fill:"#fff"},k.createElement("use",{xlinkHref:"#left_svg__a"}))),k.createElement("g",{mask:"url(#left_svg__b)"},k.createElement("path",{style:{stroke:"#333",strokeWidth:1.3333333333333333,strokeOpacity:1,strokeDasharray:"0 0"},d:"M4 8 0 4l4-4",transform:"translate(6.333 4)"}))))};function lightning_extends(){return(lightning_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}let lightning=function(e){return k.createElement("svg",lightning_extends({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:16,height:16,fill:"none"},e),k.createElement("g",null,r||(r=k.createElement("mask",{id:"lightning_svg__b",fill:"#fff"},k.createElement("use",{xlinkHref:"#lightning_svg__a"}))),k.createElement("g",{mask:"url(#lightning_svg__b)"},k.createElement("path",{style:{fill:"#333",opacity:1},d:"M2.248 8.852a.665.665 0 0 1-.172-.828l3.67-7a.664.664 0 0 1 .59-.357h6a.662.662 0 0 1 .634.46.669.669 0 0 1-.11.618l-2.822 3.592h3.629a.661.661 0 0 1 .605.387.663.663 0 0 1-.116.732l-8 8.66a.664.664 0 0 1-.893.078.66.66 0 0 1-.257-.441.66.66 0 0 1 .016-.26L6.472 9H2.666a.657.657 0 0 1-.42-.148zm1.52-1.185h3.569a.665.665 0 0 1 .644.836l-.986 3.74 5.148-5.573H8.667a.665.665 0 0 1-.63-.885.662.662 0 0 1 .105-.194L10.965 2H6.74z"}))),l||(l=k.createElement("defs",null,k.createElement("path",{id:"lightning_svg__a",d:"M0 0h16v16H0z"}))))};var w=a(32168),g=a(5666),u=a(65687),f=a(11030),x=a(6333),p=a(16789),v=a(46353),j=a(70137),N=a(44483);function MaskItem(e){return(0,i.jsxs)("div",{className:_().mask,onClick:e.onClick,children:[i.jsx(p.MaskAvatar,{mask:e.mask}),i.jsx("div",{className:_()["mask-name"]+" one-line",children:e.mask.name})]})}function NewChat(){let e=(0,x.aK)(),t=(0,u.Zy)(),a=t.getAll(),s=function(e){let[t,a]=(0,c.useState)([]);return(0,c.useEffect)(()=>{let computeGroup=()=>{let t=document.getElementById(h.ym.AppBody);if(!t||0===e.length)return;let s=t.getBoundingClientRect(),n=s.width,r=.6*s.height,randomMask=()=>e[Math.floor(Math.random()*e.length)],l=0,nextMask=()=>e[l++%e.length],i=Math.ceil(n/120),c=Array(Math.ceil(r/50)).fill(0).map((e,t)=>Array(i).fill(0).map((e,t)=>t<1||t>i-2?randomMask():nextMask()));a(c)};return computeGroup(),window.addEventListener("resize",computeGroup),()=>window.removeEventListener("resize",computeGroup)},[]),t}(a),n=(0,g.useNavigate)(),r=(0,x.MG)(),l=(0,c.useRef)(null),{state:d}=(0,g.useLocation)(),startChat=t=>{setTimeout(()=>{e.newSession(t),n(h.y$.Chat)},10)};return(0,v.YZ)({mask:e=>{try{let a=t.get(e)??N.$n.get(e);startChat(a??void 0)}catch{console.error("[New Chat] failed to create chat from mask id=",e)}}}),(0,c.useEffect)(()=>{l.current&&(l.current.scrollLeft=(l.current.scrollWidth-l.current.clientWidth)/2)},[s]),(0,i.jsxs)("div",{className:_()["new-chat"],children:[(0,i.jsxs)("div",{className:_()["mask-header"],children:[i.jsx(o.h,{icon:i.jsx(left,{}),text:f.ZP.NewChat.Return,onClick:()=>n(h.y$.Home)}),!d?.fromHome&&i.jsx(o.h,{text:f.ZP.NewChat.NotShow,onClick:async()=>{await (0,j.i0)(f.ZP.NewChat.ConfirmNoShow)&&(startChat(),r.update(e=>e.dontShowMaskSplashScreen=!0))}})]}),(0,i.jsxs)("div",{className:_()["mask-cards"],children:[i.jsx("div",{className:_()["mask-card"],children:i.jsx(m.eL,{avatar:"1f606",size:24})}),i.jsx("div",{className:_()["mask-card"],children:i.jsx(m.eL,{avatar:"1f916",size:24})}),i.jsx("div",{className:_()["mask-card"],children:i.jsx(m.eL,{avatar:"1f479",size:24})})]}),i.jsx("div",{className:_().title,children:f.ZP.NewChat.Title}),i.jsx("div",{className:_()["sub-title"],children:f.ZP.NewChat.SubTitle}),(0,i.jsxs)("div",{className:_().actions,children:[i.jsx(o.h,{text:f.ZP.NewChat.More,onClick:()=>n(h.y$.Masks),icon:i.jsx(w.Z,{}),bordered:!0,shadow:!0}),i.jsx(o.h,{text:f.ZP.NewChat.Skip,onClick:()=>startChat(),icon:i.jsx(lightning,{}),type:"primary",shadow:!0,className:_().skip})]}),i.jsx("div",{className:_().masks,ref:l,children:s.map((e,t)=>i.jsx("div",{className:_()["mask-row"],children:e.map((e,t)=>i.jsx(MaskItem,{mask:e,onClick:()=>startChat(e)},t))},t))})]})}},72439:e=>{e.exports={"new-chat":"new-chat_new-chat__63RF3","mask-header":"new-chat_mask-header__nBwht","slide-in-from-top":"new-chat_slide-in-from-top__kKaCc","mask-cards":"new-chat_mask-cards__W1FzL","slide-in":"new-chat_slide-in__VIaHY","mask-card":"new-chat_mask-card__EXvr1",title:"new-chat_title__lfHL6","sub-title":"new-chat_sub-title__qYtID",actions:"new-chat_actions__ntcag",skip:"new-chat_skip__js1_N",masks:"new-chat_masks__ArNS9","mask-row":"new-chat_mask-row__ZRTfV",mask:"new-chat_mask__P5aBk","mask-name":"new-chat_mask-name__AytPM"}}};