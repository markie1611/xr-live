(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,a,t){e.exports=t(228)},150:function(e,a,t){},154:function(e,a,t){},228:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(15),l=t.n(r),i=(t(150),t(12)),c=t(32),s=t.n(c),u=t(64),p=t(119),m=t(120),d=t(138),h=t(121),b=t(139),f=t(301),E=t(295),v=t(42),y=t.n(v),g=t(136),w=(t(154),t(135)),O=Object(w.a)({palette:{type:"dark",primary:{main:"#fbc308"},secondary:{main:"#c0392b"}},typography:{useNextVariants:!0,fontFamily:'"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif'}}),C=t(230),k=t(294),S=t(78),j=function(e){return{root:{backgroundColor:"#000",position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex"},progress:{flexGrow:1},appMenuDialogTitleRoot:{padding:"16px 10px 16px 18px"},fab:{position:"absolute",bottom:e.spacing(1.5),left:"50%",marginLeft:-26,color:e.palette.common.white,backgroundColor:e.palette.common.black,"&:hover":{backgroundColor:S.a[900]}},snackbar:{bottom:90},fill:{flex:1},qrcodeContainer:{backgroundColor:e.palette.common.white,padding:e.spacing(1),textAlign:"center"},linkBackground:{marginTop:e.spacing(2),marginBottom:e.spacing(2),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),backgroundColor:S.a[900]},playerAppBar:{backgroundColor:"rgba(0,0,0,0.85)",opacity:0,"&:hover":{opacity:1}},playerAppBarTitle:{flexGrow:1,color:e.palette.common.white},playerAppBarMenuButton:{color:e.palette.common.white}}},A=t(16),D=t(50),x=t(54),N=t(265),P=t(266),T=t(43),L=t(302),R=t(262),W=t(268),M=t(296),J=t(259),F=t(260),B=t(261),V=t(297),z=t(263),H=t(264);function I(e){e.appOptions;var a=e.open,t=e.handleDialogAction,r=(e.allData,Object(i.a)(e,["appOptions","open","handleDialogAction","allData"]),Object(n.useState)(!1)),l=Object(A.a)(r,2),c=l[0],s=l[1];return o.a.createElement(M.a,{maxWidth:"xs",fullWidth:!0,open:a,onClose:function(){s(!1),t({action:"close"})()}},o.a.createElement(J.a,{disableTypography:!0},o.a.createElement(T.a,{noWrap:!0},"\u96b1\u85cf\u76f4\u64ad Hide Source")),o.a.createElement(F.a,null,o.a.createElement(B.a,{control:o.a.createElement(V.a,{checked:c,onChange:function(e){s(e.target.checked)}}),label:o.a.createElement(n.Fragment,null,o.a.createElement(T.a,{noWrap:!0},"\u96b1\u85cf\u9019\u500b\u5a92\u9ad4\u7684\u6240\u6709\u76f4\u64ad"),o.a.createElement(T.a,{noWrap:!0},"Hide all livestream from this source"))})),o.a.createElement(z.a,null,o.a.createElement(H.a,{onClick:t({action:"close"}),color:"inherit"},"\u53d6\u6d88 Cancel"),o.a.createElement(H.a,{onClick:t(c?{action:"hideSource"}:{action:"hideLivestream"}),color:"primary"},"\u78ba\u8a8d Confirm")))}var _=Object(C.a)(j);function Q(e){var a=e.player,t=e.appOptions,r=e.handlePlayerToolbarAction,l=Object(i.a)(e,["player","appOptions","handlePlayerToolbarAction"]),c=_(l),s=Object(n.useState)(!1),u=Object(A.a)(s,2),p=u[0],m=u[1];return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"player-app-bar-container"},o.a.createElement(N.a,{position:"sticky",classes:{root:c.playerAppBar}},o.a.createElement(P.a,{variant:"dense"},o.a.createElement(T.a,{variant:"caption",color:"inherit",className:c.playerAppBarTitle},a.title),o.a.createElement(L.a,{title:"Reload","aria-label":"Reload"},o.a.createElement(R.a,{classes:{root:c.playerAppBarMenuButton},color:"inherit",onClick:r({action:"reload"})},o.a.createElement(W.a,null,"sync")))))),o.a.createElement(I,{open:p,handleDialogAction:function(e){var a=e.action;Object(i.a)(e,["action"]);return function(){if("close"!==a)return"hideLivestream"===a?(r({action:"hideLivestream"})(),void m(!1)):"hideSource"===a?(r({action:"hideSource"})(),void m(!1)):void 0;m(!1)}},appOptions:t}))}var q="https://www.facebook.com/plugins/video.php?href={id}";function U(e){var a=e.player,t=e.containerWidth,r=e.containerHeight,l=e.appOptions,c=Object(i.a)(e,["player","containerWidth","containerHeight","appOptions"]),s=Object(n.useState)({width:-1,height:-1}),u=Object(A.a)(s,2),p=u[0],m=u[1],d=Object(n.useState)(!1),h=Object(A.a)(d,2),b=h[0],f=h[1];Object(n.useEffect)(function(){if(b){var e=setTimeout(function(){f(!1)},2e3);return function(){return clearTimeout(e)}}},[b]);var E=function(e){var t=e.action;Object(i.a)(e,["action"]);return function(){"reload"!==t?"hideLivestream"!==t?"hideSource"!==t||c.handlePlayerToolbarAction({action:t,source:a.source})():c.handlePlayerToolbarAction({action:t,live:a.source})():f(!0)}},v=p.width,y=p.height;return o.a.createElement(D.a,{bounds:!0,onResize:function(e){(Math.abs(e.bounds.height-p.height)>30||Math.abs(e.bounds.width-p.width)>30)&&m(e.bounds)}},function(e){var n=e.measureRef;return o.a.createElement("div",{ref:n,className:"playerContainer",style:{width:t+"%",height:r+"%"}},o.a.createElement("div",{className:"player facebook"},o.a.createElement(Q,{player:a,appOptions:l,handlePlayerToolbarAction:E}),!b&&o.a.createElement("iframe",{src:encodeURI(q.replace("{id}",a.videoSrc))+"&height="+parseInt(y)+"&width="+parseInt(v),title:a.videoTitle,frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"autoplay; encrypted-media",allowFullScreen:!x.isMobile||x.isMobile&&!x.isAndroid})))})}function G(e){var a=e.player,t=e.containerWidth,n=e.containerHeight;return o.a.createElement("div",{className:"playerContainer",style:{width:t+"%",height:n+"%"}},o.a.createElement("div",{className:"player"},o.a.createElement("iframe",{src:a.videoSrc,title:a.videoTitle,frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"autoplay; encrypted-media",allowFullScreen:!0})))}var $=1.5,K=1.05,X=.95,Y=X,Z=1.7,ee=.85,ae=Z,te=ee,ne=1.25,oe=.9,re=1.2,le=1.8,ie=.55,ce=re,se=le;function ue(e){var a=e.data,t=e.appOptions,r=e.handlePlayerToolbarAction,l=(Object(i.a)(e,["data","appOptions","handlePlayerToolbarAction"]),Object(n.useState)({width:-1,height:-1})),c=Object(A.a)(l,2),s=c[0],u=c[1];if(!a)return null;var p=s.width,m=s.height,d=a.length,h=1,b=1;d>24?p/m<ce?d>27?(h=3,b=10):(h=3,b=9):p/m<se?(h=4,b=7):(h=5,b=5):d>20?p/m<ie?(h=2,b=d/2):p/m<ce?d>21?(h=3,b=8):(h=3,b=7):p/m<se?(h=4,b=6):(h=6,b=4):d>18?p/m<ie?(h=2,b=10):p/m<ce?(h=3,b=7):p/m<se?(h=4,b=5):(h=5,b=4):d>16?p/m<oe?(h=2,b=9):p/m<re?(h=3,b=6):p/m<le?(h=4,b=5):(h=5,b=4):d>15?p/m<te?(h=2,b=8):p/m<ne?(h=3,b=6):(h=4,b=4):d>12?p/m<ee?d>14?(h=2,b=8):(h=2,b=7):p/m<ae?d>14?(h=3,b=5):(h=3,b=4):(h=4,b=4):d>9?p/m<Y?d>10?(h=2,b=6):(h=2,b=5):p/m<Z?(h=3,b=4):(h=4,b=3):d>6?p/m<X?d>8?(h=2,b=5):(h=2,b=4):(h=3,b=3):d>4?p/m<X?(h=2,b=3):(h=3,b=2):d>2?p/m<K?(h=1,b=d):(h=2,b=2):d>1?p/m<$?(h=1,b=2):(h=2,b=1):(h=1,b=1);var f=100/h,E=100/b;return o.a.createElement(D.a,{bounds:!0,onResize:function(e){u(e.bounds)}},function(e){var n=e.measureRef;return o.a.createElement("div",{ref:n,className:"playerList"},a.map(function(e,a){var n=e.type,l=Object(i.a)(e,["type"]),c={player:l,appOptions:t,handlePlayerToolbarAction:r,containerWidth:f,containerHeight:E};switch(n){case"facebook":return o.a.createElement(U,Object.assign({key:l.video},c));default:return o.a.createElement(G,Object.assign({key:l.video},c))}}))})}var pe=t(300),me=Object(C.a)(j);function de(e){var a=e.preloadReady,t=e.handleNewDataDialogResult,n=Object(i.a)(e,["preloadReady","handleNewDataDialogResult"]),r=me(n);return o.a.createElement(pe.a,{ClickAwayListenerProps:{onClickAway:function(){}},className:r.snackbar,open:a,onClose:t({confirmed:!1}),anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"New Live(s) Found \u627e\u5230\u65b0\u76f4\u64ad",action:[o.a.createElement(H.a,{key:"watch",color:"secondary",onClick:t({confirmed:!0})},"Watch Now \u7acb\u5373\u6536\u770b"),o.a.createElement(R.a,{key:"close",color:"inherit",onClick:t({confirmed:!1})},o.a.createElement(W.a,null,"close"))]})}var he=t(29),be=t(271),fe=t(288),Ee=t(298),ve=t(269),ye=t(285),ge=t(286),we=t(291),Oe=t(289),Ce=t(290),ke=t(292),Se=t(293),je=t(126),Ae=t.n(je),De=t(127),xe=t(270),Ne=t(140),Pe=t(299),Te=t(272),Le=t(273),Re=t(274),We=t(275),Me=t(276),Je=t(277),Fe=t(278),Be=t(279),Ve=t(280),ze=t(281),He=t(282),Ie=t(283),_e=Object(C.a)(j);function Qe(e){var a=e.open,t=e.handleDialogAction,r=Object(i.a)(e,["open","handleDialogAction"]),l=_e(r),c=Object(n.useState)({width:-1,height:-1}),s=Object(A.a)(c,2),u=s[0],p=s[1],m=Object(n.useState)(!1),d=Object(A.a)(m,2),h=d[0],b=d[1];return o.a.createElement(n.Fragment,null,o.a.createElement(D.a,{bounds:!0,onResize:function(e){p(e.bounds)}},function(e){var n=e.measureRef;return o.a.createElement(M.a,{maxWidth:"xs",fullWidth:!0,open:a,onClose:t({action:"close"})},o.a.createElement(J.a,{disableTypography:!0},o.a.createElement(T.a,{noWrap:!0},"\u5206\u4eab\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0"),o.a.createElement(T.a,{noWrap:!0},"Share NCE Lives")),o.a.createElement(ve.a,null),o.a.createElement(F.a,{ref:n},o.a.createElement(xe.a,{classes:{root:l.qrcodeContainer}},o.a.createElement(Ae.a,{size:u.width-144<u.height-24?u.width-144:u.height-24,value:window.location.href,logo:"./apple-touch-icon.png"})),o.a.createElement(Ne.a,{square:!0,classes:{root:l.linkBackground}},o.a.createElement(be.a,{container:!0,spacing:1,alignItems:"center"},o.a.createElement(be.a,{item:!0},o.a.createElement(W.a,null,"link")),o.a.createElement(be.a,{item:!0,classes:{item:l.fill}},o.a.createElement(Pe.a,{fullWidth:!0,readOnly:!0,value:window.location.href}))))),o.a.createElement(ve.a,null),o.a.createElement(F.a,null,o.a.createElement(be.a,{container:!0,spacing:1},o.a.createElement(be.a,{item:!0},o.a.createElement(Te.a,{url:window.location.href},o.a.createElement(Le.a,{size:32,round:!0}))),o.a.createElement(be.a,{item:!0},o.a.createElement(Re.a,{url:window.location.href},o.a.createElement(We.a,{size:32,round:!0}))),o.a.createElement(be.a,{item:!0},o.a.createElement(Me.a,{url:window.location.href},o.a.createElement(Je.a,{size:32,round:!0}))),o.a.createElement(be.a,{item:!0},o.a.createElement(Fe.a,{url:window.location.href},o.a.createElement(Be.a,{size:32,round:!0}))),o.a.createElement(be.a,{item:!0},o.a.createElement(Ve.a,{url:window.location.href},o.a.createElement(ze.a,{size:32,round:!0}))),o.a.createElement(be.a,{item:!0},o.a.createElement(He.a,{url:window.location.href},o.a.createElement(Ie.a,{size:32,round:!0}))))),o.a.createElement(ve.a,null),o.a.createElement(z.a,null,o.a.createElement(H.a,{onClick:t({action:"close"}),color:"inherit"},"\u95dc\u9589 Close"),o.a.createElement(De.CopyToClipboard,{text:window.location.href,onCopy:function(){return b(!0)}},o.a.createElement(H.a,{color:"secondary"},"\u8907\u88fd\u9023\u7d50 Copy Link"))))}),o.a.createElement(pe.a,{className:l.snackbar,anchorOrigin:{vertical:"bottom",horizontal:"center"},open:h,autoHideDuration:3e3,onClose:function(){b(!1)},message:o.a.createElement("span",null,"\u5df2\u5c07\u9023\u7d50\u8907\u88fd\u5728\u526a\u8cbc\u7c3f Link is copied into clipboard")}))}var qe=t(284),Ue=t(303);function Ge(e){var a=e.open,t=e.handleDialogAction,r=e.appOptions,l=(Object(i.a)(e,["open","handleDialogAction","appOptions"]),Object(n.useState)(null)),c=Object(A.a)(l,2),s=c[0],u=c[1];return o.a.createElement(M.a,{maxWidth:"xs",open:a,onClose:t({action:"close"})},o.a.createElement(J.a,{disableTypography:!0},o.a.createElement(T.a,{noWrap:!0},"\u66f4\u6539\u76f4\u64ad\u4e0a\u9650"),o.a.createElement(T.a,{noWrap:!0},"Change Maximum of Livestream")),o.a.createElement(F.a,{dividers:!0},o.a.createElement(qe.a,null,"\u8acb\u6ce8\u610f\uff01\u6578\u64da\u6d41\u91cf\u53d6\u6c7a\u65bc\u60a8\u6536\u770b\u76f4\u64ad\u7684\u6578\u91cf\u3002 ",o.a.createElement("br",null),"Please note that your data usage will increase according to the number of livestreams playing."),o.a.createElement(Ue.a,{defaultValue:parseInt(r.visibleCount),getAriaValueText:function(e){return e},"aria-labelledby":"discrete-slider-small-steps",step:1,marks:[{value:4,label:"4"},{value:6,label:"6"},{value:9,label:"9"},{value:12,label:"12"},{value:16,label:"16"},{value:20,label:"20"},{value:25,label:"25"}],min:1,max:25,valueLabelDisplay:"auto",onChangeCommitted:function(e,a){u(a)}})),o.a.createElement(z.a,null,o.a.createElement(H.a,{onClick:t({action:"changeVisibleCount",newValue:s}),color:"primary"},"\u5132\u5b58 Save")))}var $e=t(137),Ke=t(287),Xe=t(134);function Ye(e){var a=e.appOptions,t=e.open,r=e.handleDialogAction,l=e.allData,c=(Object(i.a)(e,["appOptions","open","handleDialogAction","allData"]),Object(n.useState)(a.customPlaylist?JSON.parse(a.customPlaylist):[])),s=Object(A.a)(c,2),u=s[0],p=s[1],m=function(e){return function(){var a=u.indexOf(e),t=Object($e.a)(u);-1===a?t.push(e):t.splice(a,1),p(t)}};return o.a.createElement(M.a,{maxWidth:"xs",fullWidth:!0,open:t,onClose:function(){p(a.customPlaylist?JSON.parse(a.customPlaylist):[]),r({action:"close"})()}},o.a.createElement(J.a,{disableTypography:!0},o.a.createElement(T.a,{noWrap:!0},"\u81ea\u8a02\u76f4\u64ad\u983b\u9053"),o.a.createElement(T.a,{noWrap:!0},"Custom Livestreams Playlist")),o.a.createElement(ye.a,{style:{maxHeight:"100%",overflow:"auto"}},l.map(function(e){var a=e.type,t=Object(i.a)(e,["type"]);return o.a.createElement(ge.a,{key:t.video,dense:!0,button:!0,onClick:m(t.video)},o.a.createElement(Ke.a,null,o.a.createElement(fe.a,null,o.a.createElement(Xe.SocialIcon,{network:a,fgColor:"#FFFFFF"}))),o.a.createElement(Oe.a,{primary:t.videoTitle,secondary:t.sourceTitle}),o.a.createElement(Ce.a,null,o.a.createElement(V.a,{edge:"start",checked:-1!==u.indexOf(t.video),onChange:m(t.video),disableRipple:!0})))})),o.a.createElement(z.a,null,o.a.createElement(H.a,{onClick:function(){p([])},color:"inherit"},"\u6e05\u7a7a\u9078\u9805 Clear Options"),o.a.createElement(H.a,{onClick:r({action:"updateCustomPlaylist",newValue:u}),color:"primary"},"\u78ba\u8a8d Confirm")))}var Ze=Object(C.a)(j);function ea(e){var a=e.open,t=e.handleAppMenuAction,r=e.appOptions,l=e.allData,c=Object(i.a)(e,["open","handleAppMenuAction","appOptions","allData"]),s=Ze(c),u=Object(he.a)(),p=Object(n.useState)(!1),m=Object(A.a)(p,2),d=m[0],h=m[1],b=Object(n.useState)(!1),f=Object(A.a)(b,2),E=f[0],v=f[1],y=Object(n.useState)(!1),g=Object(A.a)(y,2),w=g[0],O=g[1],C={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen};return o.a.createElement(n.Fragment,null,o.a.createElement(M.a,{open:a,maxWidth:"xs",fullWidth:!0,onClose:t({action:"close"})},o.a.createElement(J.a,{disableTypography:!0,classes:{root:s.appMenuDialogTitleRoot}},o.a.createElement(be.a,{container:!0,spacing:2,justify:"space-between"},o.a.createElement(be.a,{item:!0},o.a.createElement(be.a,{container:!0,spacing:2,justify:"space-between",alignItems:"center"},o.a.createElement(be.a,{item:!0},o.a.createElement(fe.a,{src:"./apple-touch-icon.png"})),o.a.createElement(be.a,{item:!0},o.a.createElement(T.a,{noWrap:!0},"\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0"),o.a.createElement(T.a,{noWrap:!0},"No China Extradition Live")))),o.a.createElement(Ee.a,{only:"xs"},o.a.createElement(be.a,{item:!0},o.a.createElement(R.a,{onClick:function(){h(!0)}},o.a.createElement(W.a,null,"share")))))),o.a.createElement(ve.a,null),o.a.createElement(ye.a,{component:"nav","aria-label":"Main mailbox folders"},o.a.createElement(Ee.a,{smUp:!0},o.a.createElement(ge.a,{button:!0,onClick:function(){h(!0)}},o.a.createElement(we.a,null,o.a.createElement(W.a,null,"share")),o.a.createElement(Oe.a,{primary:"\u5206\u4eab\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0",secondary:"Share NCE Lives"}))),o.a.createElement(ge.a,{button:!0,onClick:t({action:"checkSource"})},o.a.createElement(we.a,null,o.a.createElement(W.a,null,"sync")),o.a.createElement(Oe.a,{primary:"\u6aa2\u67e5\u65b0\u76f4\u64ad\u4f86\u6e90",secondary:"Check for New Livestreams"})),!(r&&r.customPlaylist)&&o.a.createElement(ge.a,{button:!0,onClick:function(){v(!0)}},o.a.createElement(we.a,null,o.a.createElement(W.a,null,"view_module")),o.a.createElement(Oe.a,{primary:"\u66f4\u6539\u76f4\u64ad\u4e0a\u9650",secondary:"Change Maximum of Livestreams"})),o.a.createElement(ge.a,{button:!0,onClick:function(){O(!0)}},o.a.createElement(we.a,null,o.a.createElement(W.a,null,"subscriptions")),o.a.createElement(Oe.a,{primary:"\u81ea\u8a02\u76f4\u64ad\u983b\u9053",secondary:"Custom Livestreams Playlist"}),r&&r.customPlaylist&&o.a.createElement(Ce.a,null,o.a.createElement(W.a,null,"check_circle"))),o.a.createElement(ge.a,{button:!0,onClick:t({action:"popupWindow"})},o.a.createElement(we.a,null,o.a.createElement(W.a,null,"open_in_new")),x.isMobile?o.a.createElement(Oe.a,{primary:"\u5728\u700f\u89bd\u5668\u958b\u5553\u76f4\u64ad\u53f0",secondary:"Open NCE Lives in Browser"}):o.a.createElement(Oe.a,{primary:"\u5f48\u51fa\u65b0\u8996\u7a97",secondary:"Popup New Window"})))),o.a.createElement(Qe,{open:d,handleDialogAction:function(e){var a=e.action;return function(){"close"===a&&h(!1)}}}),o.a.createElement(Ge,{open:E,handleDialogAction:function(e){var a=e.action,n=e.newValue;return function(){"close"===a&&v(!1),"changeVisibleCount"===a&&(t({action:"changeVisibleCount",newValue:n||r.visibleCount})(),v(!1))}},appOptions:r}),o.a.createElement(Ye,{open:w,handleDialogAction:function(e){var a=e.action,n=e.newValue;return function(){"close"===a&&O(!1),"updateCustomPlaylist"===a&&(t({action:"updateCustomPlaylist",newValue:n||[]})(),O(!1))}},allData:l,appOptions:r}),o.a.createElement(ke.a,{in:!0,timeout:C,style:{transitionDelay:"".concat(C.exit,"ms")},unmountOnExit:!0},o.a.createElement(Se.a,{className:s.fab,color:"inherit",onClick:t({action:"open"})},o.a.createElement(W.a,null,"menu"))))}var aa=Object(C.a)(j);function ta(e){var a=e.data,t=e.loading,n=e.appOptions,r=e.allData,l=e.preloadReady,c=e.preloadData,s=e.handleNewDataDialogResult,u=e.handlePlayerToolbarAction,p=e.showAppMenu,m=e.handleAppMenuAction,d=Object(i.a)(e,["data","loading","appOptions","allData","preloadReady","preloadData","handleNewDataDialogResult","handlePlayerToolbarAction","showAppMenu","handleAppMenuAction"]),h=aa(d),b={preloadReady:l,preloadData:c,handleNewDataDialogResult:s},f={open:p,handleAppMenuAction:m,appOptions:n,allData:r};return o.a.createElement("div",{className:h.root},t?o.a.createElement("div",{className:h.progress},o.a.createElement(k.a,null)):o.a.createElement(ue,{data:a,handlePlayerToolbarAction:u,appOptions:n}),o.a.createElement(de,b),o.a.createElement(ea,f))}var na=Object(g.a)(),oa="https://markie1611.github.io/xr-live-datasrc/current.json",ra=function(e){function a(){var e;return Object(p.a)(this,a),(e=Object(d.a)(this,Object(h.a)(a).call(this))).showAppMenu=function(){e.setState({showAppMenu:!0})},e.refresh=Object(u.a)(s.a.mark(function a(){var t,n,o,r,l,i,c,u,p,m,d,h;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.setState({loading:!0}),a.prev=1,a.next=4,fetch(oa+"?time="+new Date);case 4:return t=a.sent,a.next=7,t.json();case 7:n=a.sent,o=n.config,r=n.current,l=o.defaultVisibleCount,i=l,c=r,u=[],p=[],e.options&&e.options.visibleCount?i=e.options.visibleCount:(e.options.visibleCount=i,e.options&&e.options.customPlaylist&&(i=e.options.customPlaylist.length)),m=[],e.options&&e.options.customPlaylist&&(m=JSON.parse(e.options.customPlaylist)),d=[],e.options&&e.options.hideLivestream&&(d=JSON.parse(e.options.hideLivestream)),h=[],e.options&&e.options.hideSource&&(h=JSON.parse(e.options.hideSource)),c.forEach(function(e){m.length>0?m.includes(e.video)&&u.push(e):u.length<i&&(d.includes(e.video)||h.includes(e.source)||u.push(e)),p.push(e)}),e.setState({loading:!1,data:u,allData:p}),a.next=29;break;case 25:a.prev=25,a.t0=a.catch(1),console.log("refresh error",a.t0),e.setState({loading:!1,data:[],allData:[]});case 29:case"end":return a.stop()}},a,null,[[1,25]])})),e.autoCheckSource=function(){e.cancelAutoCheckSourceJob(),e.autoCheckSourceJob=setInterval(Object(u.a)(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.checkSource();case 2:case"end":return a.stop()}},a)})),3e4)},e.cancelAutoCheckSourceJob=function(){e.autoCheckSourceJob&&clearInterval(e.autoCheckSourceJob)},e.checkSource=Object(u.a)(s.a.mark(function a(){var t,n,o,r,l,c,u,p,m,d,h,b,f,E,v,y;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.state,n=t.data,!t.preloadReady&&!e.preloadFetching){a.next=3;break}return a.abrupt("return");case 3:return a.prev=3,e.preloadFetching=!0,a.next=7,fetch(oa+"?time="+new Date);case 7:return o=a.sent,a.next=10,o.json();case 10:r=a.sent,l=r.config,c=r.current,u=l.defaultVisibleCount,p=u,m=c,e.options&&e.options.visibleCount?p=e.options.visibleCount:e.options.visibleCount=p,d=[],h=[],b=[],e.options&&e.options.customPlaylist&&(b=JSON.parse(e.options.customPlaylist)),f=[],e.options&&e.options.hideLivestream&&(f=JSON.parse(e.options.hideLivestream)),E=[],e.options&&e.options.hideSource&&(E=JSON.parse(e.options.hideSource)),m.forEach(function(e){b.length>0?b.includes(e.video)&&d.push(e):d.length<p&&(f.includes(e.video)||E.includes(e.source)||d.push(e)),h.push(e)}),n.sourceTitle,n.title,v=Object(i.a)(n,["sourceTitle","title"]),d.sourceTitle,d.title,y=Object(i.a)(d,["sourceTitle","title"]),JSON.stringify(v)!==JSON.stringify(y)?e.setState({preloadReady:!0,preloadData:d,allData:h}):e.setState({allData:h}),a.next=34;break;case 30:a.prev=30,a.t0=a.catch(3),console.log("checkSource error",a.t0),e.setState({preloadReady:!1,preloadData:[]});case 34:e.preloadFetching=!1;case 35:case"end":return a.stop()}},a,null,[[3,30]])})),e.handleNewDataDialogResult=function(a){var t=a.confirmed;return function(){t?e.setState({data:e.state.preloadData,preloadReady:!1,preloadData:[]}):(e.cancelAutoCheckSourceJob(),e.setState({preloadReady:!1,preloadData:[]}))}},e.handleAppMenuAction=function(a){var t=a.action,n=a.newValue;return function(){if("close"!==t){if("open"!==t)return"changeVisibleCount"===t?(e.options.visibleCount=n,na.push({search:"?visibleCount="+n}),e.refresh(),void e.setState({showAppMenu:!1})):"checkSource"===t?(e.setState({showAppMenu:!1}),e.checkSource(),void e.autoCheckSource()):"updateCustomPlaylist"===t?(e.options.customPlaylist=n,na.push({search:n.length>0?"?customPlaylist="+JSON.stringify(n):"?visibleCount="+e.options.visibleCount}),void e.setState({showAppMenu:!1})):void("popupWindow"!==t||window.open(document.location.href,"_blank","fullscreen=yes,directories=no,location=no,toolbar=no,scrollbars=no,menubar=no"));e.setState({showAppMenu:!0})}else e.setState({showAppMenu:!1})}},e.handlePlayerToolbarAction=function(e){var a=e.action,t=Object(i.a)(e,["action"]);return function(){if("hideLivestream"===a){var e=y.a.parse(na.location.search,{ignoreQueryPrefix:!0}),n=[];return e.hideLivestream&&(n=JSON.parse(e.hideLivestream)||[]),void(n.includes(t.live)||(n.push(t.live),e.hideLivestream=JSON.stringify(n),na.push({search:y.a.stringify(e)})))}if("hideSource"===a){var o=y.a.parse(na.location.search,{ignoreQueryPrefix:!0}),r=[];return o.hideSource&&(r=JSON.parse(o.hideSource)||[]),void(r.includes(t.live)||(r.push(t.live),o.hideLivestream=JSON.stringify(r),na.push({search:y.a.stringify(o)})))}}},e.state={loading:!1,data:[],preloadReady:!1,preloadData:[],showAppMenu:!1,allData:[]},e.preloadFetching=!1,e.options=y.a.parse(na.location.search,{ignoreQueryPrefix:!0}),e.unlistenHistory=na.listen(function(){var a=y.a.parse(na.location.search,{ignoreQueryPrefix:!0});e.options&&(a.visibleCount===e.options.visibleCount&&a.customPlaylist===e.options.customPlaylist&&a.hideLivestream===e.options.hideLivestream||(e.options.visibleCount=a.visibleCount,e.options.customPlaylist=a.customPlaylist,e.options.hideLivestream=a.hideLivestream,e.refresh()))}),e}return Object(b.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.refresh(),this.autoCheckSource();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.cancelAutoCheckSourceJob(),this.unlistenHistory()}},{key:"render",value:function(){return o.a.createElement(f.a,{theme:O},o.a.createElement(E.a,null),o.a.createElement(ta,Object.assign({},this.state,{appOptions:this.options,handleNewDataDialogResult:this.handleNewDataDialogResult,handleAppMenuAction:this.handleAppMenuAction,handlePlayerToolbarAction:this.handlePlayerToolbarAction})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(ra,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,1,2]]]);