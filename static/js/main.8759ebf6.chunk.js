(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,a,t){e.exports=t(318)},188:function(e,a,t){},195:function(e,a,t){},318:function(e,a,t){"use strict";t.r(a);var n,i=t(0),r=t.n(i),o=t(21),c=t.n(o),l=(t(188),t(15)),s=t(391),u=t(385),p=t(176),d=(t(195),t(38)),m=t(14),h=t(101),b=t(53),v=t(175),f=t(160),E=t(20),g=t(11),O=t(76),y=t.n(O),j=t(95),C=Object(j.createActions)({initApp:["appOptions"],initAppSuccess:null,initAppFail:["error"],checkNewAppOptions:["newOptions"],checkNewAppOptionsSuccess:null,checkNewAppOptionsFail:["error"],setNewAppOptions:["newOptions"],refresh:null,refreshSuccess:["newData"],refreshFail:["error"],checkSource:null,checkSourceAndCloseAppMenu:null,checkSourceSuccess:["newData"],checkSourceFail:["error"],openAppMenu:null,closeAppMenu:null,handleNewDataDialogResult:["confirmed"],openShareDialog:null,closeShareDialog:["closeAppMenu"],openChangeVisibleCountDialog:null,closeChangeVisibleCountDialog:["closeAppMenu"],changeVisibleCount:["newCount"],openCustomPlaylistDialog:null,closeCustomPlaylistDialog:["closeAppMenu"],updateCustomPlaylist:["newValue"],openMaintainHiddenLivestreamDialog:null,closeMaintainHiddenLivestreamDialog:["closeAppMenu"],updateHiddenLivestream:["newValue"],openHideLivestreamDialog:["player"],closeHideLivestreamDialog:null,hideVideo:["video"],hideMedia:["media"]},{prefix:"app"}),w=C.Types,x=C.Creators,L=y()({initializing:!1,errorInitializing:null,loading:!1,showLives:[],preloadFetching:!1,preloadReady:!1,preloadData:[],openAppMenu:!1,allLives:[],media:[],sources:[],appOptions:{visibleCount:4,customPlaylist:[],hideVideos:[],hideMedia:[]},preloadIgnore:!1,openShareDialog:!1,openChangeVisibleCountDialog:!1,openCustomPlaylistDialog:!1,openMaintainHiddenLivestreamDialog:!1,openHideLivestreamDialog:!1,hideLivestreamDialogData:null}),A=(n={},Object(E.a)(n,w.INIT_APP,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{initializing:!0})}),Object(E.a)(n,w.INIT_APP_SUCCESS,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{initializing:L.initializing,errorInitializing:L.errorInitializing})}),Object(E.a)(n,w.INIT_APP_FAIL,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.error;Object(g.a)(a,["error"]);return Object(m.a)({},e,{initializing:L.initializing,errorInitializing:t})}),Object(E.a)(n,w.SET_NEW_APP_OPTIONS,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.newOptions,n=(Object(g.a)(a,["newOptions"]),t.visibleCount),i=t.customPlaylist,r=t.hideVideos,o=t.hideMedia;return Object(m.a)({},e,{appOptions:{visibleCount:n||L.appOptions.visibleCount,customPlaylist:i||L.appOptions.customPlaylist,hideVideos:r||L.appOptions.hideVideos,hideMedia:o||L.appOptions.hideMedia}})}),Object(E.a)(n,w.REFRESH,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{loading:!0})}),Object(E.a)(n,w.REFRESH_SUCCESS,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.newData;Object(g.a)(a,["newData"]);return Object(m.a)({},e,{loading:L.loading,preloadReady:L.preloadReady,preloadData:L.preloadData,allLives:t.allLives,showLives:t.showLives,sources:t.sources,media:t.media})}),Object(E.a)(n,w.REFRESH_FAIL,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{loading:L.loading})}),Object(E.a)(n,w.CHECK_SOURCE,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{preloadFetching:!0})}),Object(E.a)(n,w.CHECK_SOURCE_AND_CLOSE_APP_MENU,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{preloadFetching:!0})}),Object(E.a)(n,w.CHECK_SOURCE_SUCCESS,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.newData;Object(g.a)(a,["newData"]);return JSON.stringify(e.showLives.map(function(e){e.videoTitle;return Object(g.a)(e,["videoTitle"])}))!==JSON.stringify(t.showLives.map(function(e){e.videoTitle;return Object(g.a)(e,["videoTitle"])}))?Object(m.a)({},e,{preloadFetching:L.preloadFetching,preloadReady:!0,preloadData:t.showLives,allLives:t.allLives,sources:t.sources,media:t.media}):Object(m.a)({},e,{preloadFetching:L.preloadFetching,allLives:t.allLives})}),Object(E.a)(n,w.CHECK_SOURCE_FAIL,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;a.error,Object(g.a)(a,["error"]);return Object(m.a)({},e,{preloadFetching:L.preloadFetching})}),Object(E.a)(n,w.OPEN_APP_MENU,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{openAppMenu:!0})}),Object(E.a)(n,w.CLOSE_APP_MENU,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{openAppMenu:!1})}),Object(E.a)(n,w.HANDLE_NEW_DATA_DIALOG_RESULT,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.confirmed;Object(g.a)(a,["confirmed"]);return Object(m.a)({},e,{showLives:t?e.preloadData:e.showLives,preloadReady:L.preloadReady,preloadData:L.preloadData,preloadIgnore:!t||L.preloadIgnore})}),Object(E.a)(n,w.OPEN_SHARE_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{openShareDialog:!0})}),Object(E.a)(n,w.CLOSE_SHARE_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.closeAppMenu,n=void 0!==t&&t;Object(g.a)(a,["closeAppMenu"]);return Object(m.a)({},e,{openShareDialog:!1,openAppMenu:!n&&e.openAppMenu})}),Object(E.a)(n,w.OPEN_CHANGE_VISIBLE_COUNT_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{openChangeVisibleCountDialog:!0})}),Object(E.a)(n,w.CLOSE_CHANGE_VISIBLE_COUNT_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.closeAppMenu,n=void 0!==t&&t;Object(g.a)(a,["closeAppMenu"]);return Object(m.a)({},e,{openChangeVisibleCountDialog:!1,openAppMenu:!n&&e.openAppMenu})}),Object(E.a)(n,w.OPEN_CUSTOM_PLAYLIST_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{openCustomPlaylistDialog:!0})}),Object(E.a)(n,w.CLOSE_CUSTOM_PLAYLIST_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.closeAppMenu,n=void 0!==t&&t;Object(g.a)(a,["closeAppMenu"]);return Object(m.a)({},e,{openCustomPlaylistDialog:!1,openAppMenu:!n&&e.openAppMenu})}),Object(E.a)(n,w.OPEN_MAINTAIN_HIDDEN_LIVESTREAM_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{openMaintainHiddenLivestreamDialog:!0})}),Object(E.a)(n,w.CLOSE_MAINTAIN_HIDDEN_LIVESTREAM_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.closeAppMenu,n=void 0!==t&&t;Object(g.a)(a,["closeAppMenu"]);return Object(m.a)({},e,{openMaintainHiddenLivestreamDialog:!1,openAppMenu:!n&&e.openAppMenu})}),Object(E.a)(n,w.OPEN_HIDE_LIVESTREAM_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,t=a.player;Object(g.a)(a,["player"]);return Object(m.a)({},e,{openHideLivestreamDialog:!0,hideLivestreamDialogData:t})}),Object(E.a)(n,w.CLOSE_HIDE_LIVESTREAM_DIALOG,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return Object(m.a)({},e,{openHideLivestreamDialog:!1,hideLivestreamDialogData:L.hideLivestreamDialogData})}),n),S={app:Object(j.createReducer)(L,A)},D=t(18),k=t.n(D),M=t(9),_=t(79),N=t.n(_),P=k.a.mark(J),I=k.a.mark(K),V=k.a.mark(q),H=k.a.mark(Y),T=k.a.mark($),R=k.a.mark(Q),F=k.a.mark(X),W=k.a.mark(Z),B=k.a.mark(ee),z=k.a.mark(ae),U=k.a.mark(te),G="https://raw.githubusercontent.com/markie1611/xr-live-datasrc/master/current.json";function J(e){var a;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.appOptions,Object(g.a)(e,["appOptions"]),t.prev=1,t.next=4,Object(M.b)(q,a);case 4:return t.next=6,Object(M.b)(Y);case 6:return t.next=8,Object(M.c)(x.initAppSuccess());case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(1),t.next=14,Object(M.c)(x.initAppFail(t.t0.message));case 14:case"end":return t.stop()}},P,null,[[1,10]])}function K(e){var a,t,n;return k.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=e.newOptions,i.prev=1,i.next=4,Object(M.d)();case 4:if(t=i.sent,n=t.app.appOptions,a.visibleCount===n.visibleCount&&a.customPlaylist===n.customPlaylist&&a.hideVideos===n.hideVideos&&a.hideMedia===n.hideMedia){i.next=11;break}return i.next=9,Object(M.b)(q,a);case 9:return i.next=11,Object(M.b)(Y);case 11:return i.next=13,Object(M.c)(x.checkNewAppOptionsSuccess());case 13:i.next=19;break;case 15:return i.prev=15,i.t0=i.catch(1),i.next=19,Object(M.c)(x.checkNewAppOptionsFail(i.t0.message));case 19:case"end":return i.stop()}},I,null,[[1,15]])}function q(e){var a,t=arguments;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.length>1&&void 0!==t[1]&&t[1]&&(a={visibleCount:e.visibleCount,customPlaylist:JSON.stringify(e.customPlaylist),hideMedia:JSON.stringify(e.hideMedia),hideVideos:JSON.stringify(e.hideVideos)},0===e.customPlaylist.length&&delete a.customPlaylist,0===e.hideMedia.length&&delete a.hideMedia,0===e.hideVideos.length&&delete a.hideVideos,Aa.push({search:N.a.stringify(a)})),n.next=4,Object(M.c)(x.setNewAppOptions(e));case 4:case"end":return n.stop()}},V)}function Y(e){var a,t,n,i,r,o,c,l,s,u,p,d,m,h;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.d)();case 3:return a=e.sent,t=a.app.appOptions,e.next=7,fetch(G+"?time="+new Date);case 7:return n=e.sent,e.next=10,n.json();case 10:return i=e.sent,r=i.config,o=i.current,c=i.sources,l=i.media,s=r.defaultVisibleCount,u=s,t.visibleCount&&(u=t.visibleCount),p=[],d=[],m=t.hideVideos,h=t.hideMedia,o.forEach(function(e){t.customPlaylist.length>0?t.customPlaylist.includes(e.video)&&p.push(e):p.length<u&&(m.includes(e.video)||h.includes(e.media)||p.push(e)),d.push(e)}),e.next=22,Object(M.c)(x.refreshSuccess({allLives:d,showLives:p,sources:c,media:l}));case 22:e.next=29;break;case 24:return e.prev=24,e.t0=e.catch(0),console.error("refresh",e.t0),e.next=29,Object(M.c)(x.refreshFail(e.t0.message));case 29:case"end":return e.stop()}},H,null,[[0,24]])}function $(e){var a,t,n,i,r,o,c,l,s,u,p,d,m,h;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.d)();case 3:return a=e.sent,t=a.app.appOptions,e.next=7,fetch(G+"?time="+new Date);case 7:return n=e.sent,e.next=10,n.json();case 10:return i=e.sent,r=i.config,o=i.current,c=i.sources,l=i.media,s=r.defaultVisibleCount,u=s,t.visibleCount&&(u=t.visibleCount),p=[],d=[],m=t.hideVideos,h=t.hideMedia,o.forEach(function(e){t.customPlaylist.length>0?t.customPlaylist.includes(e.video)&&p.push(e):p.length<u&&(m.includes(e.video)||h.includes(e.media)||p.push(e)),d.push(e)}),e.next=22,Object(M.c)(x.checkSourceSuccess({defaultVisibleCount:s,allLives:d,showLives:p,sources:c,media:l}));case 22:e.next=29;break;case 24:return e.prev=24,e.t0=e.catch(0),console.error("checkSource",e.t0),e.next=29,Object(M.c)(x.checkSourceFail(e.t0.message));case 29:case"end":return e.stop()}},T,null,[[0,24]])}function Q(e){return k.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(M.b)($,e);case 2:return a.next=4,Object(M.c)(x.closeAppMenu());case 4:case"end":return a.stop()}},R)}function X(e){var a,t,n;return k.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=e.newCount,i.next=3,Object(M.d)();case 3:return t=i.sent,n=t.app.appOptions,i.next=7,Object(M.b)(q,Object(m.a)({},n,{visibleCount:a}),!0);case 7:return i.next=9,Object(M.c)(x.closeChangeVisibleCountDialog(!0));case 9:case"end":return i.stop()}},F)}function Z(e){var a,t,n;return k.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=e.newValue,i.next=3,Object(M.d)();case 3:return t=i.sent,n=t.app.appOptions,i.next=7,Object(M.b)(q,Object(m.a)({},n,{customPlaylist:a}),!0);case 7:return i.next=9,Object(M.c)(x.closeCustomPlaylistDialog(!0));case 9:case"end":return i.stop()}},W)}function ee(e){var a,t,n;return k.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=e.newValue,i.next=3,Object(M.d)();case 3:return t=i.sent,n=t.app.appOptions,i.next=7,Object(M.b)(q,Object(m.a)({},n,{hideVideos:a.hiddenVideos,hideMedia:a.hiddenMedia}),!0);case 7:return i.next=9,Object(M.c)(x.closeMaintainHiddenLivestreamDialog(!0));case 9:case"end":return i.stop()}},B)}function ae(e){var a,t,n,i;return k.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.video,r.next=3,Object(M.d)();case 3:return t=r.sent,n=t.app.appOptions,i=n.hideVideos,r.next=8,Object(M.b)(q,Object(m.a)({},n,{hideVideos:[].concat(Object(d.a)(i),[a])}),!0);case 8:return r.next=10,Object(M.c)(x.closeHideLivestreamDialog());case 10:case"end":return r.stop()}},z)}function te(e){var a,t,n,i;return k.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.media,r.next=3,Object(M.d)();case 3:return t=r.sent,n=t.app.appOptions,i=n.hideMedia,r.next=8,Object(M.b)(q,Object(m.a)({},n,{hideMedia:[].concat(Object(d.a)(i),[a])}),!0);case 8:return r.next=10,Object(M.c)(x.closeHideLivestreamDialog());case 10:case"end":return r.stop()}},U)}var ne=k.a.mark(ie);function ie(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([Object(M.e)(w.INIT_APP,J),Object(M.e)(w.CHECK_NEW_APP_OPTIONS,K),Object(M.e)(w.REFRESH,Y),Object(M.e)(w.CHECK_SOURCE,$),Object(M.e)(w.CHECK_SOURCE_AND_CLOSE_APP_MENU,Q),Object(M.e)(w.CHANGE_VISIBLE_COUNT,X),Object(M.e)(w.UPDATE_CUSTOM_PLAYLIST,Z),Object(M.e)(w.HIDE_VIDEO,ae),Object(M.e)(w.HIDE_MEDIA,te),Object(M.e)(w.UPDATE_HIDDEN_LIVESTREAM,ee)]);case 2:case"end":return e.stop()}},ne)}var re=Object(v.a)(),oe=Object(h.combineReducers)(Object(m.a)({},S,{routing:h.routerReducer})),ce=(Object(f.createLogger)({stateTransformer:h.stateTransformer}),[re]);var le=t(174),se=Object(le.a)({palette:{type:"dark",primary:{main:"#fbc308"},secondary:{main:"#c0392b"}},typography:{useNextVariants:!0,fontFamily:'"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif'}}),ue=t(161),pe=t(384),de=t(25),me=t(66),he=t(69),be=t(5),ve=t(345),fe=t(347),Ee=t(56),ge=t(392),Oe=t(350),ye=t(351),je=t(163),Ce=t(102),we=Object(je.a)(function(e){return{root:{backgroundColor:"#000",position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex"},progress:{flexGrow:1},appMenuDialogTitleRoot:{padding:"16px 10px 16px 18px"},fab:{position:"absolute",bottom:e.spacing(1.5),left:"50%",marginLeft:-26,opacity:.25,"&:hover":{opacity:1}},snackbar:{bottom:90},fill:{flex:1},qrcodeContainer:{backgroundColor:e.palette.common.white,padding:e.spacing(1),textAlign:"center"},linkBackground:{marginTop:e.spacing(2),marginBottom:e.spacing(2),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),backgroundColor:Ce.a[900]},playerAppBar:{backgroundColor:"rgba(0,0,0,0.85)",opacity:0,"&:hover":{opacity:1}},playerAppBarTitle:{flexGrow:1,color:e.palette.common.white},playerAppBarMenuButton:{color:e.palette.common.white},dialogCenterActions:{justifyContent:"center"},shareButton:{marginTop:e.spacing(1)},shareButtonIcon:{marginRight:e.spacing(1)},badge:{padding:e.spacing(0,2)},playerList:{display:"flex",flexGrow:1,flexShrink:1,flexBasis:"auto",flexWrap:"wrap",flexDirection:"row"},playerContainer:{position:"relative",maxWidth:"100%",maxHeight:"100%","&:hover $playerAppBar":{opacity:1}},player:{position:"relative",height:"100%",display:"flex",justifyContent:"center",flexDirection:"column","& $playerAppBarContainer":{position:"absolute",left:0,right:0,top:0},"& iframe":{flex:1},"&:before":{content:"",display:"block"}},playerAppBarContainer:{}}}),xe=function(e){var a=e.player,t=e.setReloading,n=Object(g.a)(e,["player","setReloading"]),o=we(n),c=Object(l.b)(),s=Object(l.c)(function(e){return e.app});return r.a.createElement(i.Fragment,null,r.a.createElement("div",{className:o.playerAppBarContainer},r.a.createElement(ve.a,{position:"sticky",classes:{root:o.playerAppBar}},r.a.createElement(fe.a,{variant:"dense"},r.a.createElement(Ee.a,{variant:"caption",color:"inherit",className:o.playerAppBarTitle},a.videoTitle),r.a.createElement(ge.a,{title:"\u91cd\u65b0\u6574\u7406\u64ad\u653e\u5668 Reload Player","aria-label":"\u91cd\u65b0\u6574\u7406\u64ad\u653e\u5668 Reload Player"},r.a.createElement(Oe.a,{classes:{root:o.playerAppBarMenuButton},color:"inherit",onClick:function(e){var a=e.action;Object(g.a)(e,["action"]);return function(){"reload"!==a||t(!0)}}({action:"reload"})},r.a.createElement(ye.a,null,"sync"))),!s.appOptions.customPlaylist.length>0&&r.a.createElement(ge.a,{title:"\u96b1\u85cf\u64ad\u653e\u5668 Hide Player","aria-label":"\u96b1\u85cf\u64ad\u653e\u5668 Hide Player"},r.a.createElement(Oe.a,{classes:{root:o.playerAppBarMenuButton},color:"inherit",onClick:function(){c(x.openHideLivestreamDialog(a))}},r.a.createElement(ye.a,null,"remove_from_queue")))))))},Le=function(e){var a=e.player,t=e.containerWidth,n=e.containerHeight,o=Object(g.a)(e,["player","containerWidth","containerHeight"]),c=we(o),l=Object(i.useState)({width:-1,height:-1}),s=Object(de.a)(l,2),u=s[0],p=s[1],d=Object(i.useState)(!1),m=Object(de.a)(d,2),h=m[0],b=m[1];Object(i.useEffect)(function(){if(h){var e=setTimeout(function(){b(!1)},2e3);return function(){return clearTimeout(e)}}},[h]);var v=u.width,f=u.height;return r.a.createElement(me.a,{bounds:!0,onResize:function(e){(Math.abs(e.bounds.height-u.height)>30||Math.abs(e.bounds.width-u.width)>30)&&p(e.bounds)}},function(e){var i=e.measureRef;return r.a.createElement("div",{ref:i,className:c.playerContainer,style:{width:t+"%",height:n+"%"}},r.a.createElement("div",{className:Object(be.a)(c.player,"facebook")},r.a.createElement(xe,{player:a,setReloading:b}),!h&&r.a.createElement("iframe",{src:encodeURI("https://www.facebook.com/plugins/video.php?href={id}".replace("{id}",a.videoSrc))+"&height="+parseInt(f)+"&width="+parseInt(v),title:a.videoTitle,frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"autoplay; encrypted-media",allowFullScreen:!he.isMobile||he.isMobile&&!he.isAndroid})))})},Ae=function(e){var a=e.player,t=e.containerWidth,n=e.containerHeight,i=Object(g.a)(e,["player","containerWidth","containerHeight"]),o=we(i);return r.a.createElement("div",{className:o.playerContainer,style:{width:t+"%",height:n+"%"}},r.a.createElement("div",{className:o.player},r.a.createElement("iframe",{src:a.videoSrc,title:a.videoTitle,frameBorder:"0",scrolling:"no",allowtransparency:"true",allow:"autoplay; encrypted-media",allowFullScreen:!0})))},Se=function(e){var a=we(e),t=Object(l.c)(function(e){return e.app}),n=Object(i.useState)({width:-1,height:-1}),o=Object(de.a)(n,2),c=o[0],s=o[1];if(!t.showLives)return null;var u=c.width,p=c.height,d=t.showLives.length,m=1,h=1;d>24?u/p<1.2?d>27?(m=3,h=10):(m=3,h=9):u/p<1.8?(m=4,h=7):(m=5,h=5):d>20?u/p<.55?(m=2,h=d/2):u/p<1.2?d>21?(m=3,h=8):(m=3,h=7):u/p<1.8?(m=4,h=6):(m=6,h=4):d>18?u/p<.55?(m=2,h=10):u/p<1.2?(m=3,h=7):u/p<1.8?(m=4,h=5):(m=5,h=4):d>16?u/p<.9?(m=2,h=9):u/p<1.2?(m=3,h=6):u/p<1.8?(m=4,h=5):(m=5,h=4):d>15?u/p<.85?(m=2,h=8):u/p<1.25?(m=3,h=6):(m=4,h=4):d>12?u/p<.85?d>14?(m=2,h=8):(m=2,h=7):u/p<1.7?d>14?(m=3,h=5):(m=3,h=4):(m=4,h=4):d>9?u/p<.95?d>10?(m=2,h=6):(m=2,h=5):u/p<1.7?(m=3,h=4):(m=4,h=3):d>6?u/p<.95?d>8?(m=2,h=5):(m=2,h=4):(m=3,h=3):d>4?u/p<.95?(m=2,h=3):(m=3,h=2):d>2?u/p<1.05?(m=1,h=d):(m=2,h=2):d>1?u/p<1.5?(m=1,h=2):(m=2,h=1):(m=1,h=1);var b=100/m,v=100/h;return r.a.createElement(me.a,{bounds:!0,onResize:function(e){s(e.bounds)}},function(e){var n=e.measureRef;return r.a.createElement("div",{ref:n,className:a.playerList},t.showLives.map(function(e,a){var t=e.type,n=Object(g.a)(e,["type"]),i={player:n,containerWidth:b,containerHeight:v};switch(t){case"facebook":return r.a.createElement(Le,Object.assign({key:n.video},i));default:return r.a.createElement(Ae,Object.assign({key:n.video},i))}}))})},De=t(390),ke=t(352),Me=function(e){var a=we(e),t=Object(l.b)(),n=Object(l.c)(function(e){return e.app}),i=function(e){var a=e.confirmed;return function(){t(x.handleNewDataDialogResult(a))}};return r.a.createElement(De.a,{ClickAwayListenerProps:{onClickAway:function(){}},className:a.snackbar,open:n.preloadReady,onClose:i({confirmed:!1}),anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"New Live(s) Found ",action:[r.a.createElement(ke.a,{key:"watch",color:"secondary",onClick:i({confirmed:!0})},"Watch Now "),r.a.createElement(Oe.a,{key:"close",color:"inherit",onClick:i({confirmed:!1})},r.a.createElement(ye.a,null,"close"))]})},_e=t(24),Ne=t(386),Pe=t(353),Ie=t(379),Ve=t(374),He=t(388),Te=t(354),Re=t(371),Fe=t(372),We=t(380),Be=t(375),ze=t(376),Ue=t(381),Ge=t(382),Je=t(363),Ke=t(166),qe=t.n(Ke),Ye=t(167),$e=t(355),Qe=t(356),Xe=t(357),Ze=t(358),ea=t(359),aa=t(360),ta=t(361),na=t(362),ia=t(364),ra=t(365),oa=t(366),ca=t(367),la=t(368),sa=t(369),ua=function(e){var a=we(e),t=Object(l.b)(),n=Object(l.c)(function(e){return e.app}),o=Object(i.useState)({width:-1,height:-1}),c=Object(de.a)(o,2),s=c[0],u=c[1],p=Object(i.useState)(!1),d=Object(de.a)(p,2),m=d[0],h=d[1],b=function(e){var a=e.action;return function(){"close"===a&&t(x.closeShareDialog())}};return r.a.createElement(i.Fragment,null,r.a.createElement(me.a,{bounds:!0,onResize:function(e){u(e.bounds)}},function(e){var t=e.measureRef;return r.a.createElement(Ne.a,{maxWidth:"xs",fullWidth:!0,open:n.openShareDialog,onClose:b({action:"close"})},r.a.createElement(Pe.a,{disableTypography:!0},r.a.createElement(Ee.a,{noWrap:!0},""),r.a.createElement(Ee.a,{noWrap:!0},"Share XR Live")),r.a.createElement(Te.a,null),r.a.createElement($e.a,{ref:t},r.a.createElement(Qe.a,{classes:{root:a.qrcodeContainer}},r.a.createElement(qe.a,{size:s.width-144<s.height-24?s.width-144:s.height-24,value:window.location.href,logo:"./apple-touch-icon.png"})),r.a.createElement(Ye.CopyToClipboard,{text:window.location.href,onCopy:function(){return h(!0)}},r.a.createElement(ke.a,{fullWidth:!0,classes:{root:a.shareButton},size:"small",color:"primary"},r.a.createElement(ye.a,{classes:{root:a.shareButtonIcon}},"file_copy"),"Copy Link \u8907\u5236\u9023\u7d50"))),r.a.createElement(Te.a,null),r.a.createElement(Xe.a,{classes:{root:a.dialogCenterActions}},r.a.createElement(Ze.a,{url:window.location.href},r.a.createElement(ea.a,{size:32,round:!0})),r.a.createElement(aa.a,{url:window.location.href},r.a.createElement(ta.a,{size:32,round:!0})),r.a.createElement(na.a,{url:window.location.href},r.a.createElement(Je.a,{size:32,round:!0})),r.a.createElement(ia.a,{url:window.location.href},r.a.createElement(ra.a,{size:32,round:!0})),r.a.createElement(oa.a,{url:window.location.href},r.a.createElement(ca.a,{size:32,round:!0})),r.a.createElement(la.a,{url:window.location.href},r.a.createElement(sa.a,{size:32,round:!0}))))}),r.a.createElement(De.a,{className:a.snackbar,anchorOrigin:{vertical:"bottom",horizontal:"center"},open:m,autoHideDuration:3e3,onClose:function(){h(!1)},message:r.a.createElement("span",null,"Link is copied into clipboard")}))},pa=t(370),da=t(393),ma=function(e){var a=Object(l.b)(),t=Object(l.c)(function(e){return e.app}),n=Object(i.useState)(null),o=Object(de.a)(n,2),c=o[0],s=o[1],u=function(e){var t=e.action,n=e.newValue;return function(){"close"!==t?"changeVisibleCount"!==t||a(x.changeVisibleCount(n)):a(x.closeChangeVisibleCountDialog())}};return r.a.createElement(Ne.a,{maxWidth:"xs",open:t.openChangeVisibleCountDialog,onClose:u({action:"close"})},r.a.createElement(Pe.a,{disableTypography:!0},r.a.createElement(Ee.a,{noWrap:!0},"Maximum Videos"),r.a.createElement(Ee.a,{noWrap:!0},"Change Maximum of Livestream")),r.a.createElement($e.a,{dividers:!0},r.a.createElement(pa.a,null,"Warning!!",r.a.createElement("br",null),"Please note that your data usage will increase after you selected to watch more livestreams."),r.a.createElement(da.a,{defaultValue:parseInt(t.appOptions.visibleCount),getAriaValueText:function(e){return e},"aria-labelledby":"discrete-slider-small-steps",step:1,marks:[{value:4,label:"4"},{value:6,label:"6"},{value:9,label:"9"},{value:12,label:"12"},{value:16,label:"16"},{value:20,label:"20"},{value:25,label:"25"}],min:1,max:25,valueLabelDisplay:"auto",onChangeCommitted:function(e,a){s(a)}})),r.a.createElement(Xe.a,null,r.a.createElement(ke.a,{onClick:u({action:"changeVisibleCount",newValue:c}),color:"primary"}," Save")))},ha=t(373),ba=t(389),va=t(100),fa=function(e){var a=Object(l.b)(),t=Object(l.c)(function(e){return e.app}),n=Object(i.useState)(t.appOptions.customPlaylist),o=Object(de.a)(n,2),c=o[0],s=o[1],u=function(e){return function(){var a=c.indexOf(e),t=Object(d.a)(c);-1===a?t.push(e):t.splice(a,1),s(t)}},p=function(e){var t=e.action,n=e.newValue;return function(){"close"!==t?"updateCustomPlaylist"!==t||a(x.updateCustomPlaylist(n)):a(x.closeCustomPlaylistDialog())}};return r.a.createElement(Ne.a,{maxWidth:"xs",fullWidth:!0,open:t.openCustomPlaylistDialog,onClose:function(){s(t.appOptions.customPlaylist),p({action:"close"})()}},r.a.createElement(Pe.a,{disableTypography:!0},r.a.createElement(Ee.a,{noWrap:!0},"Custom List"),r.a.createElement(Ee.a,{noWrap:!0},"Custom Livestreams Playlist")),r.a.createElement(Re.a,{style:{maxHeight:"100%",overflow:"auto"}},t.allLives.map(function(e){var a=e.type,t=Object(g.a)(e,["type"]);return r.a.createElement(Fe.a,{key:t.video,dense:!0,button:!0,onClick:u(t.video)},r.a.createElement(ha.a,null,r.a.createElement(Ve.a,null,r.a.createElement(va.SocialIcon,{network:a,fgColor:"#FFFFFF"}))),r.a.createElement(Be.a,{primary:t.videoTitle,secondary:t.mediaTitle}),r.a.createElement(ze.a,null,r.a.createElement(ba.a,{edge:"start",checked:-1!==c.indexOf(t.video),onChange:u(t.video),disableRipple:!0})))})),r.a.createElement(Xe.a,null,r.a.createElement(ke.a,{onClick:function(){s([])},color:"inherit"},"Clear Options"),r.a.createElement(ke.a,{onClick:p({action:"updateCustomPlaylist",newValue:c}),color:"primary"}," Confirm")))},Ea=t(387),ga=t(377),Oa=t(378),ya=function(e){var a=we(e),t=Object(l.b)(),n=Object(l.c)(function(e){return e.app}),o=Object(i.useState)([]),c=Object(de.a)(o,2),s=c[0],u=c[1],p=Object(i.useState)([]),m=Object(de.a)(p,2),h=m[0],b=m[1],v=Object(i.useState)(0),f=Object(de.a)(v,2),E=f[0],O=f[1],y=function(e){return function(){var a=s.indexOf(e),t=Object(d.a)(s);-1===a?t.push(e):t.splice(a,1),u(t)}},j=function(e){return function(){var a=h.indexOf(e),t=Object(d.a)(h);-1===a?t.push(e):t.splice(a,1),b(t)}},C=[],w=n.appOptions.hideVideos;n.allLives.forEach(function(e){w.includes(e.video)&&C.push(e)});var L=[];n.appOptions.hideMedia.forEach(function(e){n.media[e]&&L.push(n.media[e])});var A=function(e){var a=e.action,n=Object(g.a)(e,["action"]);return function(){if("close"!==a)if("resumeHiddenLivestream"!==a);else{if(0===n.resumeVideos.length&&0===n.resumeMedia.length)return void t(x.closeMaintainHiddenLivestreamDialog());var e=[].concat(C),i=[].concat(L);n.resumeVideos.forEach(function(a){e=e.filter(function(e){return e.video!==a})});var r=e.map(function(e){return e.video});n.resumeMedia.forEach(function(e){i=i.filter(function(a){return a.media!==e})});var o=i.map(function(e){return e.media});t(x.updateHiddenLivestream({hiddenVideos:r,hiddenMedia:o}))}else t(x.closeMaintainHiddenLivestreamDialog())}};return r.a.createElement(Ne.a,{maxWidth:"xs",fullWidth:!0,open:n.openMaintainHiddenLivestreamDialog,onClose:function(){u([]),b([]),A({action:"close"})()}},r.a.createElement(Pe.a,{disableTypography:!0},r.a.createElement(Ee.a,{noWrap:!0},""),r.a.createElement(Ee.a,{noWrap:!0},"Resume Hidden Livestreams")),r.a.createElement(Ea.a,{variant:"fullWidth",value:E,onChange:function(e,a){O(a)}},r.a.createElement(ga.a,{label:r.a.createElement(Oa.a,{color:"primary",className:a.badge,badgeContent:C.length},"Live")}),r.a.createElement(ga.a,{label:r.a.createElement(Oa.a,{color:"primary",className:a.badge,badgeContent:L.length},"Media")})),r.a.createElement(Re.a,{hidden:0!==E,style:{maxHeight:"100%",overflow:"auto"}},C.map(function(e){var a=e.type,t=Object(g.a)(e,["type"]);return r.a.createElement(Fe.a,{key:t.video,dense:!0,button:!0,onClick:y(t.video)},r.a.createElement(ha.a,null,r.a.createElement(Ve.a,null,r.a.createElement(va.SocialIcon,{network:a,fgColor:"#FFFFFF"}))),r.a.createElement(Be.a,{primary:t.videoTitle,secondary:t.mediaTitle}),r.a.createElement(ze.a,null,-1!==s.indexOf(t.video)?r.a.createElement(Ie.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(Ie.a,{item:!0},r.a.createElement(He.a,{only:"xs"},r.a.createElement(Ee.a,{variant:"caption",color:"primary",onClick:y(t.video)},"Visbile"))),r.a.createElement(Ie.a,{item:!0},r.a.createElement(ye.a,{color:"primary",onClick:y(t.video)},"visibility"))):r.a.createElement(Ie.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(Ie.a,{item:!0},r.a.createElement(He.a,{only:"xs"},r.a.createElement(Ee.a,{variant:"caption",onClick:y(t.video)},"Hidden"))),r.a.createElement(Ie.a,{item:!0,onClick:y(t.video)},r.a.createElement(ye.a,null,"visibility_off")))))})),r.a.createElement(Re.a,{hidden:1!==E,style:{maxHeight:"100%",overflow:"auto"}},L.map(function(e){return r.a.createElement(Fe.a,{key:e.media,dense:!0,button:!0,onClick:j(e.media)},r.a.createElement(Be.a,{primary:e.mediaTitle}),r.a.createElement(ze.a,null,-1!==h.indexOf(e.media)?r.a.createElement(Ie.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(Ie.a,{item:!0},r.a.createElement(Ee.a,{variant:"caption",color:"primary",onClick:j(e.media)},"Visbile")),r.a.createElement(Ie.a,{item:!0},r.a.createElement(ye.a,{color:"primary",onClick:j(e.media)},"visibility"))):r.a.createElement(Ie.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(Ie.a,{item:!0},r.a.createElement(Ee.a,{variant:"caption",onClick:j(e.media)},"Hidden")),r.a.createElement(Ie.a,{item:!0,onClick:j(e.media)},r.a.createElement(ye.a,null,"visibility_off")))))})),r.a.createElement(Xe.a,null,r.a.createElement(ke.a,{onClick:A({action:"resumeHiddenLivestream",resumeVideos:s,resumeMedia:h}),color:"primary"}," Confirm")))},ja=function(e){var a=we(e),t=Object(_e.a)(),n=Object(l.b)(),o=Object(l.c)(function(e){return e.app}),c={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},s=function(e){var a=e.action;e.newValue,Object(g.a)(e,["action","newValue"]);return function(){"close"!==a?"open"!==a?"checkSource"!==a?"popupWindow"!==a||window.open(document.location.href,"_blank","fullscreen=yes,directories=no,location=no,toolbar=no,scrollbars=no,menubar=no"):n(x.checkSourceAndCloseAppMenu()):n(x.openAppMenu()):n(x.closeAppMenu())}},u=[],p=o.appOptions.customPlaylist;o.allLives.forEach(function(e){p.includes(e.video)&&u.push(e)});var d=[],m=o.appOptions.hideVideos;o.allLives.forEach(function(e){m.includes(e.video)&&d.push(e)});var h=[];return o.appOptions.hideMedia.forEach(function(e){o.media[e]&&h.push(o.media[e])}),r.a.createElement(i.Fragment,null,r.a.createElement(Ne.a,{open:o.openAppMenu,maxWidth:"xs",fullWidth:!0,onClose:s({action:"close"})},r.a.createElement(Pe.a,{disableTypography:!0,classes:{root:a.appMenuDialogTitleRoot}},r.a.createElement(Ie.a,{container:!0,justify:"space-between"},r.a.createElement(Ie.a,{item:!0,xs:12,sm:9},r.a.createElement(Ie.a,{container:!0,spacing:2,justify:"space-between",alignItems:"center"},r.a.createElement(Ie.a,{item:!0,xs:2},r.a.createElement(Ve.a,{src:"./apple-touch-icon.png"})),r.a.createElement(Ie.a,{item:!0,xs:10},r.a.createElement(Ee.a,{noWrap:!0},""),r.a.createElement(Ee.a,{noWrap:!0},"Extinction Rebellion Live")))),r.a.createElement(He.a,{only:"xs"},r.a.createElement(Ie.a,{item:!0,sm:1.5},r.a.createElement(ge.a,{title:"Our Telegram Channel","aria-label":"Our Telegram Channel"},r.a.createElement(Oe.a,{onClick:function(){window.open("https://t.me/xr_live","_blank")}},r.a.createElement(Je.a,{size:26,round:!0,iconBgStyle:{display:"none"}})))),r.a.createElement(Ie.a,{item:!0,sm:1.5},r.a.createElement(ge.a,{title:"Share XR Live","aria-label":"Share XR Live"},r.a.createElement(Oe.a,{onClick:function(){n(x.openShareDialog())}},r.a.createElement(ye.a,null,"share"))))))),r.a.createElement(Te.a,null),r.a.createElement(Re.a,{component:"nav","aria-label":"Main mailbox folders"},r.a.createElement(He.a,{smUp:!0},r.a.createElement(Fe.a,{button:!0,onClick:function(){window.open("https://t.me/ncelive","_blank")}},r.a.createElement(We.a,null,r.a.createElement(Je.a,{size:32,round:!0,iconBgStyle:{display:"none"}})),r.a.createElement(Be.a,{primary:"Telegram - ",secondary:"Our Telegram Channel"})),r.a.createElement(Fe.a,{button:!0,onClick:function(){n(x.openShareDialog())}},r.a.createElement(We.a,null,r.a.createElement(ye.a,null,"share")),r.a.createElement(Be.a,{primary:"Share",secondary:"Share XR Live"}))),r.a.createElement(Fe.a,{button:!0,onClick:s({action:"checkSource"})},r.a.createElement(We.a,null,r.a.createElement(ye.a,null,"sync")),r.a.createElement(Be.a,{primary:"Refresh",secondary:"Check for New Livestreams"})),0===u.length&&r.a.createElement(Fe.a,{button:!0,onClick:function(){n(x.openChangeVisibleCountDialog())}},r.a.createElement(We.a,null,r.a.createElement(ye.a,null,"view_module")),r.a.createElement(Be.a,{primary:"Maximum Videos",secondary:"Change Maximum of Livestreams"})),(d.length>0||h.length>0)&&r.a.createElement(Fe.a,{button:!0,onClick:function(){n(x.openMaintainHiddenLivestreamDialog())}},r.a.createElement(We.a,null,r.a.createElement(ye.a,null,"visibility_off")),r.a.createElement(Be.a,{primary:"Resume",secondary:"Resume Hidden Livestreams"})),r.a.createElement(Fe.a,{button:!0,onClick:function(){n(x.openCustomPlaylistDialog())}},r.a.createElement(We.a,null,r.a.createElement(ye.a,null,"subscriptions")),r.a.createElement(Be.a,{primary:"Custom List",secondary:"Custom Livestreams Playlist"}),u.length>0&&r.a.createElement(ze.a,null,r.a.createElement(ye.a,null,"check_circle"))),r.a.createElement(Fe.a,{button:!0,onClick:s({action:"popupWindow"})},r.a.createElement(We.a,null,r.a.createElement(ye.a,null,"open_in_new")),he.isMobile?r.a.createElement(Be.a,{primary:"Open in Browser",secondary:"Open XR Live in Browser"}):r.a.createElement(Be.a,{primary:"Open In New Window",secondary:"Popup New Window"})))),r.a.createElement(ua,null),r.a.createElement(ma,null),r.a.createElement(fa,null),r.a.createElement(ya,null),r.a.createElement(Ue.a,{in:!0,timeout:c,style:{transitionDelay:"".concat(c.exit,"ms")},unmountOnExit:!0},r.a.createElement(Ge.a,{classes:{root:a.fab},style:{backgroundColor:"#212121",color:"#FFF"},onClick:s({action:"open"})},r.a.createElement(ye.a,null,"menu"))))},Ca=t(383),wa=function(e){var a=Object(l.b)(),t=Object(l.c)(function(e){return e.app}),n=t.hideLivestreamDialogData,o=Object(i.useState)(!1),c=Object(de.a)(o,2),s=c[0],u=c[1],p=function(e){var t=e.action;Object(g.a)(e,["action"]);return function(){"close"!==t?"hideVideo"!==t?"hideMedia"!==t||a(x.hideMedia(n.media)):a(x.hideVideo(n.video)):a(x.closeHideLivestreamDialog())}};return r.a.createElement(Ne.a,{maxWidth:"xs",fullWidth:!0,open:t.openHideLivestreamDialog,onClose:function(){u(!1),p({action:"close"})()}},r.a.createElement(Pe.a,{disableTypography:!0},r.a.createElement(Ee.a,{noWrap:!0}," Hide Livestream")),r.a.createElement($e.a,null,r.a.createElement(Ca.a,{control:r.a.createElement(ba.a,{checked:s,onChange:function(e){u(e.target.checked)}}),label:r.a.createElement(i.Fragment,null,r.a.createElement(Ee.a,null,"Hide Videos From Source"),r.a.createElement(Ee.a,null,"Hide all livestreams from this media"))})),r.a.createElement(Xe.a,null,r.a.createElement(ke.a,{onClick:p({action:"close"}),color:"inherit"}," Cancel"),r.a.createElement(ke.a,{onClick:p(s?{action:"hideMedia"}:{action:"hideVideo"}),color:"primary"}," Confirm")))},xa=function(e){var a=we(e),t=Object(l.c)(function(e){return e.app});return r.a.createElement("div",{className:a.root},t.loading?r.a.createElement("div",{className:a.progress},r.a.createElement(pe.a,null)):r.a.createElement(Se,null),r.a.createElement(Me,null),r.a.createElement(wa,null),r.a.createElement(ja,null))},La=function(e){var a=e.history,t=(Object(g.a)(e,["history"]),Object(l.b)()),n=Object(l.c)(function(e){return e.app});return Object(i.useEffect)(function(){var e=N.a.parse(a.location.search,{ignoreQueryPrefix:!0}),n=e.visibleCount,i=e.customPlaylist,r=e.hideVideos,o=e.hideMedia,c={};n&&(c.visibleCount=n);try{i&&(c.customPlaylist=JSON.parse(i))}catch(l){}try{r&&(c.hideVideos=JSON.parse(r))}catch(l){}try{o&&(c.hideMedia=JSON.parse(o))}catch(l){}t(x.initApp(c))},[a,t]),Object(i.useEffect)(function(){var e=a.listen(function(){var e=N.a.parse(a.location.search,{ignoreQueryPrefix:!0}),n=e.visibleCount,i=e.customPlaylist,r=e.hideVideos,o=e.hideMedia,c={};n&&(c.visibleCount=n);try{i&&(c.customPlaylist=JSON.parse(i))}catch(l){}try{r&&(c.hideVideos=JSON.parse(r))}catch(l){}try{o&&(c.hideMedia=JSON.parse(o))}catch(l){}t(x.checkNewAppOptions(c))});return function(){e()}},[a,t]),Object(i.useEffect)(function(){if(!n.preloadIgnore){var e=setInterval(Object(ue.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preloadFetching){e.next=3;break}return e.next=3,t(x.checkSource());case 3:case"end":return e.stop()}},e)})),3e4);return function(){clearInterval(e)}}},[t,n.preloadFetching,n.preloadIgnore]),r.a.createElement(xa,null)},Aa=Object(p.a)(),Sa=function(){var e=Object(b.d)(oe,b.a.apply(void 0,Object(d.a)(ce)));return re.run(ie),e}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(e){return r.a.createElement(l.a,{store:Sa},r.a.createElement(s.a,{theme:se},r.a.createElement(u.a,null),r.a.createElement(La,{history:Aa})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[183,1,2]]]);