exports.id=9395,exports.ids=[9395],exports.modules={99395:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Settings:()=>Settings});var n=s(30784),i=s(9885),r=s(24602),o=s.n(r);s(30841);var a=s(32263),l=s(26989),c=s(81482),d=s(17382),u=s(9127),p=s(32168),m=s(70137),h=s(87140),g=s(72306),x=s(6333),j=s(11030),S=s(27223),v=s(52925),b=s(7297),C=s(39727),P=s(59923),_=s(5666),T=s(40714),k=s(46743),Z=s(99715),f=s(48228);let w=(0,Z.Ue)()((0,f.tJ)((e,t)=>({webDavConfig:{server:"",username:"",password:""},lastSyncTime:0,update(s){let n={...t().webDavConfig};s(n),e({webDavConfig:n})},async check(){try{let e=await fetch(this.path(""),{method:"PROFIND",headers:this.headers()});return 207===e.status}catch(e){return console.error("[Sync] ",e),!1}},path(e){let s=t().webDavConfig.server;return s.endsWith("/")||(s+="/"),e.startsWith("/")&&(e=e.slice(1)),s+e},headers(){let e=btoa([t().webDavConfig.username,t().webDavConfig.password].join(":"));return{Authorization:`Basic ${e}`}}}),{name:v.KJ.Sync,version:1}));var y=s(48350);function EditPromptModal(e){let t=(0,b.f)(),s=t.get(e.id);return s?n.jsx("div",{className:"modal-mask",children:n.jsx(m.u_,{title:j.ZP.Settings.Prompt.EditModal.Title,onClose:e.onClose,actions:[n.jsx(g.h,{onClick:e.onClose,text:j.ZP.UI.Confirm,bordered:!0},"")],children:(0,n.jsxs)("div",{className:o()["edit-prompt-modal"],children:[n.jsx("input",{type:"text",value:s.title,readOnly:!s.isUser,className:o()["edit-prompt-title"],onInput:s=>t.update(e.id,e=>e.title=s.currentTarget.value)}),n.jsx(m.II,{value:s.content,readOnly:!s.isUser,className:o()["edit-prompt-content"],rows:10,onInput:s=>t.update(e.id,e=>e.content=s.currentTarget.value)})]})})}):null}function UserPromptModal(e){let t=(0,b.f)(),s=t.getUserPrompts(),r=b.o.builtinPrompts,l=s.concat(r),[h,x]=(0,i.useState)(""),[v,C]=(0,i.useState)([]),P=h.length>0?v:l,[_,T]=(0,i.useState)();return(0,i.useEffect)(()=>{if(h.length>0){let e=b.o.search(h);C(e)}else C([])},[h]),(0,n.jsxs)("div",{className:"modal-mask",children:[n.jsx(m.u_,{title:j.ZP.Settings.Prompt.Modal.Title,onClose:()=>e.onClose?.(),actions:[n.jsx(g.h,{onClick:()=>t.add({id:(0,y.x0)(),createdAt:Date.now(),title:"Empty Prompt",content:"Empty Prompt Content"}),icon:n.jsx(a.Z,{}),bordered:!0,text:j.ZP.Settings.Prompt.Modal.Add},"add")],children:(0,n.jsxs)("div",{className:o()["user-prompt-modal"],children:[n.jsx("input",{type:"text",className:o()["user-prompt-search"],placeholder:j.ZP.Settings.Prompt.Modal.Search,value:h,onInput:e=>x(e.currentTarget.value)}),n.jsx("div",{className:o()["user-prompt-list"],children:P.map((e,s)=>(0,n.jsxs)("div",{className:o()["user-prompt-item"],children:[(0,n.jsxs)("div",{className:o()["user-prompt-header"],children:[n.jsx("div",{className:o()["user-prompt-title"],children:e.title}),n.jsx("div",{className:o()["user-prompt-content"]+" one-line",children:e.content})]}),(0,n.jsxs)("div",{className:o()["user-prompt-buttons"],children:[e.isUser&&n.jsx(g.h,{icon:n.jsx(d.Z,{}),className:o()["user-prompt-button"],onClick:()=>t.remove(e.id)}),e.isUser?n.jsx(g.h,{icon:n.jsx(u.Z,{}),className:o()["user-prompt-button"],onClick:()=>T(e.id)}):n.jsx(g.h,{icon:n.jsx(p.Z,{}),className:o()["user-prompt-button"],onClick:()=>T(e.id)}),n.jsx(g.h,{icon:n.jsx(c.Z,{}),className:o()["user-prompt-button"],onClick:()=>(0,S.vQ)(e.content)})]})]},e.id??e.title))})]})}),void 0!==_&&n.jsx(EditPromptModal,{id:_,onClose:()=>T(void 0)})]})}function DangerItems(){let e=(0,x.aK)(),t=(0,x.MG)();return(0,n.jsxs)(m.aV,{children:[n.jsx(m.HC,{title:j.ZP.Settings.Danger.Reset.Title,subTitle:j.ZP.Settings.Danger.Reset.SubTitle,children:n.jsx(g.h,{text:j.ZP.Settings.Danger.Reset.Action,onClick:async()=>{await (0,m.i0)(j.ZP.Settings.Danger.Reset.Confirm)&&t.reset()},type:"danger"})}),n.jsx(m.HC,{title:j.ZP.Settings.Danger.Clear.Title,subTitle:j.ZP.Settings.Danger.Clear.SubTitle,children:n.jsx(g.h,{text:j.ZP.Settings.Danger.Clear.Action,onClick:async()=>{await (0,m.i0)(j.ZP.Settings.Danger.Clear.Confirm)&&e.clearAllData()},type:"danger"})})]})}function SyncItems(){let e=w();return e.webDavConfig,null}function Settings(){let e=(0,_.useNavigate)(),[t,s]=(0,i.useState)(!1),r=(0,x.MG)(),a=r.update,c=(0,x.u2)(),[d,p]=(0,i.useState)(!1);c.formatVersion(c.version),c.formatVersion(c.remoteVersion),k.Z()?.isApp?v.cr:v.Cs,c.used,c.subscription;let[S,Z]=(0,i.useState)(!1),f=(0,x._X)(),w=(0,i.useMemo)(()=>f.enabledAccessControl(),[]),y=(0,b.f)(),N=b.o.count.builtin,D=y.getUserPrompts().length??0,[M,A]=(0,i.useState)(!1),H=f.isAuthorized();(0,i.useEffect)(()=>{(function(e=!1){p(!0),c.getLatestVersion(e).then(()=>{p(!1)}),console.log("[Update] local version ",c.version),console.log("[Update] remote version ",c.remoteVersion)})(),H&&function(e=!1){f.hideBalanceQuery||(Z(!0),c.updateUsage(e).finally(()=>{Z(!1)}))}()},[]),(0,i.useEffect)(()=>{let keydownEvent=t=>{"Escape"===t.key&&e(v.y$.Home)};return document.addEventListener("keydown",keydownEvent),()=>{document.removeEventListener("keydown",keydownEvent)}},[]);let E=(0,i.useMemo)(()=>(0,k.Z)(),[]),U=w&&!E?.isApp;return(0,n.jsxs)(C.S,{children:[(0,n.jsxs)("div",{className:"window-header","data-tauri-drag-region":!0,children:[(0,n.jsxs)("div",{className:"window-header-title",children:[n.jsx("div",{className:"window-header-main-title",children:j.ZP.Settings.Title}),n.jsx("div",{className:"window-header-sub-title",children:j.ZP.Settings.SubTitle})]}),(0,n.jsxs)("div",{className:"window-actions",children:[n.jsx("div",{className:"window-action-button"}),n.jsx("div",{className:"window-action-button"}),n.jsx("div",{className:"window-action-button",children:n.jsx(g.h,{icon:n.jsx(l.Z,{}),onClick:()=>e(v.y$.Home),bordered:!0})})]})]}),(0,n.jsxs)("div",{className:o().settings,children:[(0,n.jsxs)(m.aV,{children:[n.jsx(m.HC,{title:j.ZP.Settings.Avatar,children:n.jsx(m.J2,{onClose:()=>s(!1),content:n.jsx(T.aR,{onEmojiClick:e=>{a(t=>t.avatar=e),s(!1)}}),open:t,children:n.jsx("div",{className:o().avatar,onClick:()=>s(!0),children:n.jsx(T.qE,{avatar:r.avatar})})})}),n.jsx(m.HC,{title:j.ZP.Settings.SendKey,children:n.jsx(m.Ph,{value:r.submitKey,onChange:e=>{a(t=>t.submitKey=e.target.value)},children:Object.values(x.mQ).map(e=>n.jsx("option",{value:e,children:e},e))})}),n.jsx(m.HC,{title:j.ZP.Settings.Theme,children:n.jsx(m.Ph,{value:r.theme,onChange:e=>{a(t=>t.theme=e.target.value)},children:Object.values(x.Q2).map(e=>n.jsx("option",{value:e,children:e},e))})}),n.jsx(m.HC,{title:j.ZP.Settings.FontSize.Title,subTitle:j.ZP.Settings.FontSize.SubTitle,children:n.jsx(P.O,{title:`${r.fontSize??14}px`,value:r.fontSize,min:"12",max:"18",step:"1",onChange:e=>a(t=>t.fontSize=Number.parseInt(e.currentTarget.value))})}),n.jsx(m.HC,{title:j.ZP.Settings.AutoGenerateTitle.Title,subTitle:j.ZP.Settings.AutoGenerateTitle.SubTitle,children:n.jsx("input",{type:"checkbox",checked:r.enableAutoGenerateTitle,onChange:e=>a(t=>t.enableAutoGenerateTitle=e.currentTarget.checked)})}),n.jsx(m.HC,{title:j.ZP.Settings.SendPreviewBubble.Title,subTitle:j.ZP.Settings.SendPreviewBubble.SubTitle,children:n.jsx("input",{type:"checkbox",checked:r.sendPreviewBubble,onChange:e=>a(t=>t.sendPreviewBubble=e.currentTarget.checked)})})]}),(0,n.jsxs)(m.aV,{children:[n.jsx(m.HC,{title:j.ZP.Settings.Mask.Splash.Title,subTitle:j.ZP.Settings.Mask.Splash.SubTitle,children:n.jsx("input",{type:"checkbox",checked:!r.dontShowMaskSplashScreen,onChange:e=>a(t=>t.dontShowMaskSplashScreen=!e.currentTarget.checked)})}),n.jsx(m.HC,{title:j.ZP.Settings.Mask.Builtin.Title,subTitle:j.ZP.Settings.Mask.Builtin.SubTitle,children:n.jsx("input",{type:"checkbox",checked:r.hideBuiltinMasks,onChange:e=>a(t=>t.hideBuiltinMasks=e.currentTarget.checked)})})]}),(0,n.jsxs)(m.aV,{children:[n.jsx(m.HC,{title:j.ZP.Settings.Prompt.Disable.Title,subTitle:j.ZP.Settings.Prompt.Disable.SubTitle,children:n.jsx("input",{type:"checkbox",checked:r.disablePromptHint,onChange:e=>a(t=>t.disablePromptHint=e.currentTarget.checked)})}),n.jsx(m.HC,{title:j.ZP.Settings.Prompt.List,subTitle:j.ZP.Settings.Prompt.ListCount(N,D),children:n.jsx(g.h,{icon:n.jsx(u.Z,{}),text:j.ZP.Settings.Prompt.Edit,onClick:()=>A(!0)})})]}),n.jsx(m.aV,{children:U?n.jsx(m.HC,{title:j.ZP.Settings.AccessCode.Title,subTitle:j.ZP.Settings.AccessCode.SubTitle,children:n.jsx(m.WU,{value:f.accessCode,type:"text",placeholder:j.ZP.Settings.AccessCode.Placeholder,onChange:e=>{f.updateCode(e.currentTarget.value)}})}):n.jsx(n.Fragment,{})}),n.jsx(SyncItems,{}),n.jsx(m.aV,{children:n.jsx(h.j,{modelConfig:r.modelConfig,updateConfig:e=>{let t={...r.modelConfig};e(t),r.update(e=>e.modelConfig=t)}})}),M&&n.jsx(UserPromptModal,{onClose:()=>A(!1)}),n.jsx(DangerItems,{})]})]})}},24602:e=>{e.exports={settings:"settings_settings__427bK",avatar:"settings_avatar__jO3Wv","edit-prompt-modal":"settings_edit-prompt-modal__iP1gi","edit-prompt-title":"settings_edit-prompt-title__mq8os","edit-prompt-content":"settings_edit-prompt-content__9i9Y_","user-prompt-modal":"settings_user-prompt-modal__YWssH","user-prompt-search":"settings_user-prompt-search__kskD_","user-prompt-list":"settings_user-prompt-list__BrWRy","user-prompt-item":"settings_user-prompt-item__kh_6Q","user-prompt-header":"settings_user-prompt-header__MBMAf","user-prompt-title":"settings_user-prompt-title__BpRs1","user-prompt-content":"settings_user-prompt-content__CxL3R","user-prompt-buttons":"settings_user-prompt-buttons__y5Hf_","user-prompt-button":"settings_user-prompt-button__efhSx"}}};