(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[33],{1698:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(44),i=n(70),o=n(825),s=n(434),l=n(438),u=n(228),j=n(10),b=n(2),a=n(13),d=n(436),O=n(102),x=n(0),f=function(){var e=Object(a.b)().t;return Object(x.jsx)(b.q,{mb:"24px",children:Object(x.jsxs)(b.r,{children:[Object(x.jsx)(O.a,{to:"/",children:e("Home")}),Object(x.jsx)(O.a,{to:"/prediction",children:e("Prediction")}),Object(x.jsx)(b.Ic,{children:e("Leaderboard")})]})})},h=function(){var e=Object(a.b)().t;return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)(b.gb,{as:"h1",scale:"xxl",color:"secondary",children:e("Leaderboard")})]})},p=n(473),m=n(487),g=n(311),v=n(474);var B,w,S,y,I,k,N,W,C,A,D=n(75),F=n(304),L=n(5),R=n(49),q=n(9),T=n(8),z=n(6),P=n(35),G=n(305),K=n(161),V=n(106),E=n(230),U=n(89),_=["children"],H=["amount","textPrefix","textColor"],M=function(e){var t=e.children,n=Object(R.a)(e,_);return Object(x.jsx)(b.eb,Object(L.a)(Object(L.a)({alignItems:"center",justifyContent:"space-between"},n),{},{children:t}))},Q=function(e){var t=e.amount,n=e.textPrefix,c=void 0===n?"":n,r=e.textColor,i=void 0===r?"text":r,o=Object(R.a)(e,H),s=Object(E.b)(),l=Object(U.d)(s,Math.abs(t));return t?Object(x.jsxs)(b.eb,Object(L.a)(Object(L.a)({flexDirection:"column",alignItems:"flex-end"},o),{},{children:[Object(x.jsx)(b.Ic,{fontWeight:"bold",color:i,children:"".concat(c).concat(t.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6}))}),Object(x.jsx)(b.Ic,{fontSize:"12px",color:"textSubtle",lineHeight:1,children:"~$".concat(l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]})):null},Y=function(e){var t=e.amount,n=Object(a.b)().t;return Object(x.jsxs)(M,{mb:"4px",children:[Object(x.jsx)(b.Ic,{fontSize:"12px",color:"textSubtle",children:n("Net Winnings (BNB)")}),Object(x.jsx)(Q,{amount:t,textPrefix:t>0?"+":"",textColor:t>0?"success":"failure"})]})},J=n(3),$=n.n(J),X=n(11),Z=n(435),ee=n.n(Z),te=n(310),ne=n.n(te),ce=n(46),re=z.e.div(B||(B=Object(T.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  height: 32px;\n  min-width: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n"])),(function(e){var t=e.theme,n=e.bgColor;return t.colors[n]})),ie=z.e.div(w||(w=Object(T.a)(["\n  color: #fff;\n  display: none;\n  text-transform: uppercase;\n\n  "," {\n    display: block;\n    margin-left: 4px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),oe=function(e){var t=e.position,n=Object(a.b)().t,c=t===ce.a.BULL,r=c?"success":"failure",i=c?Object(x.jsx)(b.i,{width:"24px",color:"white"}):Object(x.jsx)(b.d,{width:"24px",color:"white"});return Object(x.jsxs)(re,{bgColor:r,children:[i,Object(x.jsx)(ie,{children:n(c?"Up":"Down")})]})},se=function(e){var t=e.numberOfBets,n=void 0===t?5:t,r=e.account,i=Object(c.useState)(!1),o=Object(q.a)(i,2),s=o[0],l=o[1],u=Object(c.useState)([]),j=Object(q.a)(u,2),d=j[0],O=j[1],f=Object(a.b)().t,h=ne()(d,["round.epoch"],["desc"]);return Object(c.useEffect)((function(){(function(){var e=Object(X.a)($.a.mark((function e(){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,Object(D.e)({user:r.toLowerCase()},n);case 4:t=e.sent,O(t.map(D.t));case 6:return e.prev=6,l(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}})()()}),[r,n,l,O]),Object(x.jsxs)(b.Ec,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Kc,{children:f("Round")}),Object(x.jsx)(b.Kc,{children:f("Direction")}),Object(x.jsx)(b.Kc,{textAlign:"right",children:f("Winnings (BNB)")})]})}),Object(x.jsx)("tbody",{children:s?ee()(n).map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Gc,{children:Object(x.jsx)(b.nc,{width:"80px"})}),Object(x.jsx)(b.Gc,{children:Object(x.jsx)(b.nc,{width:"60px",height:"32px"})}),Object(x.jsx)(b.Gc,{children:Object(x.jsx)(b.nc,{width:"80px"})})]},e)})):h.map((function(e){var t=e.position===e.round.position;return Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Gc,{textAlign:"center",fontWeight:"bold",children:e.round.epoch.toLocaleString()}),Object(x.jsx)(b.Gc,{textAlign:"center",children:Object(x.jsx)(oe,{position:e.position})}),Object(x.jsx)(b.Gc,{textAlign:"right",children:Object(x.jsx)(Q,{amount:t?e.claimedNetBNB:e.amount,textPrefix:t?"+":"-",textColor:t?"success":"failure"})})]},e.id)}))})]})},le=function(e){var t=e.account,n=Object(a.b)().t,r=Object(c.useState)(!1),i=Object(q.a)(r,2),o=i[0],s=i[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(b.eb,{alignItems:"center",justifyContent:"space-between",px:"24px",py:"32px",borderBottom:"1px solid",borderColor:"cardBorder",style:{cursor:"pointer"},onClick:function(){return s(!o)},children:[Object(x.jsx)(b.Ic,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",children:n("Last %num% Bets",{num:5})}),o?Object(x.jsx)(b.N,{}):Object(x.jsx)(b.Q,{})]}),o&&Object(x.jsx)(se,{account:t})]})},ue=function(e){var t=e.account,n=Object(a.b)().t;return Object(x.jsxs)(b.q,{p:"24px",children:[Object(x.jsx)(b.Ic,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",mb:"16px",children:n("Last %num% Bets",{num:5})}),Object(x.jsx)(b.A,{children:Object(x.jsx)(se,{account:t})})]})},je=Object(z.e)(b.vb)(S||(S=Object(T.a)(["\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),be=function(e){var t,n,c,r,i,s=e.account,l=e.onDismiss,u=e.onBeforeDismiss,d=Object(a.b)().t,O=Object(V.a)().theme,f=Object(o.v)(),h=s||f,p=Object(o.t)(h),m=Object(G.c)(h),g=Object(o.p)()===j.b.Fetching,v=Object(b.nd)().isDesktop;return Object(x.jsxs)(b.Nb,{minWidth:"320px",children:[Object(x.jsxs)(b.Ob,{background:O.colors.gradients.bubblegum,children:[Object(x.jsxs)(b.eb,{alignItems:"center",style:{flex:1},children:[Object(x.jsx)(b.q,{width:["64px",null,null,null,null,null,"96px"],mr:"16px",children:Object(x.jsx)(b.dc,{src:null===(t=m.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail,height:96,width:96})}),Object(x.jsxs)(b.q,{children:[m.username&&Object(x.jsx)(b.gb,{scale:"lg",mb:"8px",children:m.username}),Object(x.jsx)(je,{href:Object(P.e)(h,"address"),children:Object(K.a)(h)})]})]}),Object(x.jsx)(b.jb,{variant:"text",onClick:function(){u&&u(),l()},"aria-label":"Close the dialog",children:Object(x.jsx)(b.S,{color:"text",width:"24px"})})]}),null===p?Object(x.jsx)(b.Ic,{p:"32px",textAlign:"center",fontWeight:"bold",children:d("No results found.")}):Object(x.jsxs)(b.q,{maxHeight:["500px",null,null,null,null,null,"none"],overflowY:"auto",children:[Object(x.jsxs)(b.fb,{gridTemplateColumns:["1fr",null,null,null,null,null,"repeat(4, 1fr)"],gridGap:"16px",p:"24px",borderBottom:"1px solid",borderColor:"cardBorder",children:[Object(x.jsxs)(b.q,{children:[Object(x.jsx)(b.Ic,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Net Winnings")}),g?Object(x.jsx)(b.nc,{}):Object(x.jsx)(Q,{amount:null===p||void 0===p?void 0:p.netBNB,textPrefix:(null===p||void 0===p?void 0:p.netBNB)>0?"+":"",textColor:(null===p||void 0===p?void 0:p.netBNB)>0?"success":"failure",alignItems:"flex-end"})]}),Object(x.jsxs)(b.q,{children:[Object(x.jsx)(b.Ic,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Win Rate")}),g?Object(x.jsx)(b.nc,{}):Object(x.jsx)(b.Ic,{fontWeight:"bold",children:"".concat(null===p||void 0===p||null===(c=p.winRate)||void 0===c?void 0:c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsxs)(b.q,{children:[Object(x.jsx)(b.Ic,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Won")}),g?Object(x.jsx)(b.nc,{}):Object(x.jsx)(b.Ic,{fontWeight:"bold",children:null===p||void 0===p||null===(r=p.totalBetsClaimed)||void 0===r?void 0:r.toLocaleString()})]}),Object(x.jsxs)(b.q,{children:[Object(x.jsx)(b.Ic,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Played")}),g?Object(x.jsx)(b.nc,{}):Object(x.jsx)(b.Ic,{fontWeight:"bold",children:null===p||void 0===p||null===(i=p.totalBets)||void 0===i?void 0:i.toLocaleString()})]})]}),v?Object(x.jsx)(ue,{account:h}):Object(x.jsx)(le,{account:h})]})]})},ae=["user"],de=Object(z.e)(b.q)(y||(y=Object(T.a)(["\n  order: 2;\n  margin-left: 8px;\n\n  "," {\n    order: 1;\n    margin-left: 0;\n    margin-right: 8px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Oe=Object(z.e)(b.q)(I||(I=Object(T.a)(["\n  order: 1;\n\n  "," {\n    order: 2;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),xe=function(e){var t,n,c=e.user,r=Object(R.a)(e,ae),i=Object(a.b)().t,o=Object(G.c)(c.id),s=Object(b.od)(Object(x.jsx)(be,{account:c.id})),l=Object(q.a)(s,1)[0];return Object(x.jsxs)(b.vc,{component:Object(x.jsxs)(b.eb,Object(L.a)(Object(L.a)({alignItems:"center"},r),{},{children:[Object(x.jsxs)(Oe,{children:[Object(x.jsx)(b.Ic,{color:"primary",fontWeight:"bold",children:o.username||Object(K.a)(c.id)})," "]}),Object(x.jsx)(de,{width:["32px",null,null,null,null,"40px"],height:["32px",null,null,null,null,"40px"],children:Object(x.jsx)(b.dc,{src:null===(t=o.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail,height:40,width:40})})]})),options:{placement:"bottom-start"},children:[Object(x.jsx)(b.wc,{onClick:l,children:i("View Stats")}),Object(x.jsx)(b.wc,{as:b.ub,href:Object(P.e)(c.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})},fe=["rank","user"],he=function(e){var t=e.rank,n=e.user,c=Object(R.a)(e,fe);return Object(x.jsxs)("tr",Object(L.a)(Object(L.a)({},c),{},{children:[t?Object(x.jsx)(b.Gc,{children:Object(x.jsx)(b.Ic,{textAlign:"center",fontWeight:"bold",color:"secondary",children:"#".concat(t)})}):Object(x.jsx)(b.Gc,{}),Object(x.jsx)(b.Gc,{children:Object(x.jsx)(xe,{user:n})}),Object(x.jsx)(b.Gc,{children:Object(x.jsx)(Q,{amount:n.netBNB,textPrefix:n.netBNB>0?"+":"",textColor:n.netBNB>0?"success":"failure"})}),Object(x.jsx)(b.Gc,{textAlign:"center",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")}),Object(x.jsx)(b.Gc,{textAlign:"center",children:Object(x.jsx)("strong",{children:n.totalBetsClaimed.toLocaleString()})}),Object(x.jsx)(b.Gc,{textAlign:"center",children:n.totalBets.toLocaleString()})]}))},pe=function(e){var t=e.results,n=Object(a.b)().t;return Object(x.jsx)(F.a,{mb:"24px",children:Object(x.jsx)(b.A,{children:Object(x.jsxs)(b.Ec,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Kc,{width:"60px",children:"\xa0"}),Object(x.jsx)(b.Kc,{textAlign:"left",children:n("User")}),Object(x.jsx)(b.Kc,{textAlign:"right",children:n("Net Winnings (BNB)")}),Object(x.jsx)(b.Kc,{children:n("Win Rate")}),Object(x.jsx)(b.Kc,{children:n("Rounds Won")}),Object(x.jsx)(b.Kc,{children:n("Rounds Played")})]})}),Object(x.jsx)("tbody",{children:t.map((function(e,t){return Object(x.jsx)(he,{rank:t+4,user:e},e.id)}))})]})})})},me=Object(z.e)(b.q)(k||(k=Object(T.a)(["\n  background-color: ",";\n  border-bottom: 1px solid ",";\n\n  &:first-child {\n    border-top: 1px solid ",";\n  }\n"])),(function(e){return e.theme.card.background}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.cardBorder})),ge=function(e){var t=e.rank,n=e.user,c=Object(a.b)().t;return Object(x.jsxs)(me,{p:"16px",children:[Object(x.jsxs)(M,{mb:"16px",children:[t?Object(x.jsx)(b.Ic,{fontWeight:"bold",color:"secondary",children:"#".concat(t)}):Object(x.jsx)("div",{}),Object(x.jsx)(xe,{user:n})]}),Object(x.jsxs)(M,{mb:"4px",children:[Object(x.jsx)(b.Ic,{fontSize:"12px",color:"textSubtle",children:c("Win Rate")}),Object(x.jsx)(b.Ic,{fontWeight:"bold",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsx)(Y,{amount:n.netBNB}),Object(x.jsxs)(M,{children:[Object(x.jsx)(b.Ic,{fontSize:"12px",color:"textSubtle",children:c("Rounds Won")}),Object(x.jsx)(b.Ic,{fontWeight:"bold",children:"".concat(n.totalBetsClaimed.toLocaleString(),"/").concat(n.totalBets.toLocaleString())})]})]})},ve=function(e){var t=e.results;return Object(x.jsx)(b.q,{mb:"24px",children:t.map((function(e,t){return Object(x.jsx)(ge,{rank:t+4,user:e},e.id)}))})},Be=Object(z.e)(b.rb)(N||(N=Object(T.a)(["\n  transform: rotate(30deg);\n"]))),we=Object(z.e)(b.sb)(W||(W=Object(T.a)(["\n  transform: rotate(-30deg);\n"]))),Se=function(e){var t,n,c=e.rank,r=e.user,i=Object(a.b)().t,o=function(e){return 3===e?"bronze":2===e?"silver":"gold"}(c),s=Object(G.c)(r.id),l=Object(b.od)(Object(x.jsx)(be,{account:r.id})),u=Object(q.a)(l,1)[0];return Object(x.jsx)(b.A,{ribbon:Object(x.jsx)(b.E,{variantColor:o,text:"#".concat(c),ribbonPosition:"left"}),children:Object(x.jsxs)(b.B,{p:"24px",children:[Object(x.jsx)(b.eb,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"24px",children:Object(x.jsxs)(b.vc,{component:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(b.eb,{mb:"4px",children:[Object(x.jsx)(Be,{color:o,width:"32px"}),Object(x.jsx)(b.q,{width:["40px",null,null,"64px"],height:["40px",null,null,"64px"],children:Object(x.jsx)(b.dc,{src:null===(t=s.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail,height:64,width:64})}),Object(x.jsx)(we,{color:o,width:"32px"})]}),Object(x.jsx)(b.Ic,{color:"primary",fontWeight:"bold",textAlign:"center",children:s.username||Object(K.a)(r.id)})]}),options:{placement:"bottom"},children:[Object(x.jsx)(b.wc,{onClick:u,children:i("View Stats")}),Object(x.jsx)(b.wc,{as:b.ub,href:Object(P.e)(r.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})}),Object(x.jsxs)(M,{mb:"4px",children:[Object(x.jsx)(b.Ic,{fontSize:"12px",color:"textSubtle",children:i("Win Rate")}),Object(x.jsx)(b.Ic,{fontWeight:"bold",children:"".concat(r.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsx)(Y,{amount:r.netBNB}),Object(x.jsxs)(M,{children:[Object(x.jsx)(b.Ic,{fontSize:"12px",color:"textSubtle",children:i("Rounds Won")}),Object(x.jsx)(b.Ic,{fontWeight:"bold",children:"".concat(r.totalBetsClaimed.toLocaleString(),"/").concat(r.totalBets.toLocaleString())})]})]})})},ye=function(){var e,t=Object(b.nd)().isDesktop,n=Object(a.b)().t,c=Object(o.q)(),r=(e=c,Object(p.a)(e)||Object(m.a)(e)||Object(g.a)(e)||Object(v.a)()),l=r[0],u=r[1],d=r[2],O=r.slice(3),f=Object(o.p)()===j.b.Fetching,h=Object(o.r)(),B=Object(o.o)(),w=Object(i.b)();return Object(x.jsxs)(b.q,{children:[Object(x.jsx)(F.a,{mb:"16px",children:Object(x.jsxs)(b.fb,{gridGap:["16px",null,null,null,null,"24px"],gridTemplateColumns:["1fr",null,null,null,null,"repeat(3, 1fr)"],children:[Object(x.jsx)(Se,{rank:1,user:l}),Object(x.jsx)(Se,{rank:2,user:u}),Object(x.jsx)(Se,{rank:3,user:d})]})}),t?Object(x.jsx)(pe,{results:O}):Object(x.jsx)(ve,{results:O}),Object(x.jsx)(b.eb,{mb:"40px",justifyContent:"center",children:B&&Object(x.jsx)(b.v,{variant:"secondary",isLoading:f,endIcon:f?Object(x.jsx)(b.j,{spin:!0,color:"currentColor"}):void 0,onClick:function(){w(Object(s.i)(h+D.a))},children:n(f?"Loading...":"View More")})})]})},Ie=n(175),ke=function(){var e=Object(r.c)().account,t=Object(a.b)().t,n=Object(i.b)(),l=Object(o.t)(e),u=Object(b.nd)().isDesktop;return Object(c.useEffect)((function(){e&&(n(Object(Ie.d)(e)),n(Object(s.b)(e)))}),[e,n]),e&&l?Object(x.jsxs)(F.a,{mb:"48px",children:[Object(x.jsx)(b.gb,{as:"h2",scale:"md",color:"secondary",mb:"16px",children:t("My Rankings")}),u?Object(x.jsx)(b.A,{isActive:!0,children:Object(x.jsxs)(b.Ec,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(b.Kc,{width:"60px",children:"\xa0"}),Object(x.jsx)(b.Kc,{textAlign:"left",children:"\xa0"}),Object(x.jsx)(b.Kc,{textAlign:"right",children:t("Net Winnings (BNB)")}),Object(x.jsx)(b.Kc,{textAlign:"center",children:t("Win Rate")}),Object(x.jsx)(b.Kc,{children:t("Rounds Won")}),Object(x.jsx)(b.Kc,{children:t("Rounds Played")})]})}),Object(x.jsx)("tbody",{children:Object(x.jsx)(he,{user:l})})]})}):Object(x.jsx)(b.A,{isActive:!0,children:Object(x.jsx)(ge,{user:l})})]}):null},Ne=n(447),We=n(853),Ce=function(){var e=Object(i.b)(),t=Object(b.od)(Object(x.jsx)(be,{onBeforeDismiss:function(){e(Object(s.q)(null))}})),n=Object(q.a)(t,1)[0],r=Object(c.useCallback)(function(){var t=Object(X.a)($.a.mark((function t(n){var c,r;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(s.b)(n));case 2:return r=t.sent,t.abrupt("return",void 0!==(null===(c=r.payload)||void 0===c?void 0:c.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),o=function(){var t=Object(X.a)($.a.mark((function t(c){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(s.q)(c));case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)(We.a,{onAddressClick:o,onValidAddress:r})},Ae=Object(z.e)(b.q)(C||(C=Object(T.a)(["\n  margin-bottom: 8px;\n  order: 1;\n  width: 100%;\n\n  "," {\n    margin-bottom: 0;\n    order: 2;\n    width: 320px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),De=Object(z.e)(b.q)(A||(A=Object(T.a)(["\n  order: 2;\n  width: 100%;\n\n  "," {\n    order: 1;\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Fe=function(){var e=Object(a.b)().t,t=Object(i.b)(),n=[{label:e("Net Winnings"),value:"netBNB"},{label:e("Total BNB"),value:"totalBNB"},{label:e("Rounds Played"),value:"totalBets"},{label:e("Win Rate"),value:"winRate"}];return Object(x.jsxs)(F.a,{py:"32px",children:[Object(x.jsx)(b.Ic,{textTransform:"uppercase",fontSize:"12px",color:"textSubtle",fontWeight:"bold",mb:"4px",children:e("Rank By")}),Object(x.jsxs)(b.eb,{flexDirection:["column",null,null,null,null,"row"],alignItems:["start",null,null,null,null,"center"],justifyContent:["start",null,null,null,null,"space-between"],children:[Object(x.jsx)(De,{children:Object(x.jsx)(Ne.a,{options:n,onOptionChange:function(e){t(Object(s.p)({orderBy:e.value}))}})}),Object(x.jsx)(Ae,{children:Object(x.jsx)(Ce,{})})]})]})};t.default=function(){var e=Object(o.p)(),t=Object(o.n)(),n=Object(r.c)().account,b=Object(i.b)();return Object(c.useEffect)((function(){b(Object(s.h)({filters:t}))}),[n,t,b]),e===j.b.Idle?Object(x.jsx)(l.a,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{}),Object(x.jsx)(h,{}),Object(x.jsx)(Fe,{}),Object(x.jsx)(ke,{}),Object(x.jsx)(ye,{})]})}},825:function(e,t,n){"use strict";n.d(t,"w",(function(){return O})),n.d(t,"a",(function(){return x})),n.d(t,"k",(function(){return f})),n.d(t,"f",(function(){return h})),n.d(t,"y",(function(){return p})),n.d(t,"x",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"j",(function(){return v})),n.d(t,"u",(function(){return B})),n.d(t,"i",(function(){return w})),n.d(t,"g",(function(){return S})),n.d(t,"d",(function(){return y})),n.d(t,"s",(function(){return I})),n.d(t,"b",(function(){return k})),n.d(t,"l",(function(){return N})),n.d(t,"h",(function(){return W})),n.d(t,"m",(function(){return C})),n.d(t,"e",(function(){return A})),n.d(t,"p",(function(){return D})),n.d(t,"q",(function(){return F})),n.d(t,"n",(function(){return L})),n.d(t,"r",(function(){return R})),n.d(t,"o",(function(){return q})),n.d(t,"t",(function(){return T})),n.d(t,"v",(function(){return z}));var c=n(17),r=n(5),i=n(1),o=n(19),s=n(59),l=n(84),u=n(35),j=n(70),b=n(75),a=n(434),d=function(){var e=Object(o.d)((function(e){return e.predictions.rounds}));return Object.keys(e).reduce((function(t,n){return Object(r.a)(Object(r.a)({},t),{},Object(c.a)({},n,Object(b.r)(e[n])))}),{})},O=function(){var e=d();return Object(l.orderBy)(Object.values(e),["epoch"],["asc"])},x=function(e,t){var n=Object(o.d)((function(e){return e.predictions.ledgers}));return n[e]&&n[e][t]?Object(b.r)(n[e][t]):null},f=function(e){return Object(o.d)((function(e){return e.predictions.claimableStatuses}))[e]||!1},h=function(){return Object(o.d)((function(e){var t=Object(l.minBy)(Object.values(e.predictions.rounds),"epoch");return null===t||void 0===t?void 0:t.epoch}))},p=function(){return Object(o.d)((function(e){return e.predictions.isHistoryPaneOpen}))},m=function(){return Object(o.d)((function(e){return e.predictions.isChartPaneOpen}))},g=function(){return Object(o.d)((function(e){return e.predictions.currentEpoch}))},v=function(){return Object(o.d)((function(e){return e.predictions.intervalSeconds}))},B=function(){return Object(o.d)((function(e){return e.predictions.status}))},w=function(){return Object(o.d)((function(e){return e.predictions.historyFilter}))},S=function(){return Object(o.d)((function(e){return e.predictions.hasHistoryLoaded}))},y=function(){return Object(o.d)((function(e){return e.predictions.currentHistoryPage}))},I=function(){var e=Object(o.d)((function(e){return e.predictions.minBetAmount}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(e)}),[e])},k=function(){return Object(o.d)((function(e){return e.predictions.bufferSeconds}))},N=function(){return Object(o.d)((function(e){return e.predictions.isFetchingHistory}))},W=function(){return Object(o.d)((function(e){return e.predictions.history}))},C=function(){var e=Object(o.d)((function(e){return e.predictions.lastOraclePrice}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(e)}),[e])},A=function(){var e=function(){var e=g();return d()[e]}(),t=v();return e.lockTimestamp?e.lockTimestamp:e.startTimestamp+t},D=function(){return Object(o.d)((function(e){return e.predictions.leaderboard.loadingState}))},F=function(){return Object(o.d)((function(e){return e.predictions.leaderboard.results}))},L=function(){return Object(o.d)((function(e){return e.predictions.leaderboard.filters}))},R=function(){return Object(o.d)((function(e){return e.predictions.leaderboard.skip}))},q=function(){return Object(o.d)((function(e){return e.predictions.leaderboard.hasMoreResults}))},T=function(e){var t=function(e){return Object(o.d)((function(t){return t.predictions.leaderboard.addressResults[e]}))}(e),n=Object(j.b)();return Object(i.useEffect)((function(){var c=Object(u.j)(e);!t&&null!==t&&c&&n(Object(a.b)(e))}),[n,e,t]),t},z=function(){return Object(o.d)((function(e){return e.predictions.leaderboard.selectedAddress}))}},853:function(e,t,n){"use strict";var c,r,i,o=n(3),s=n.n(o),l=n(11),u=n(5),j=n(9),b=n(49),a=n(8),d=n(1),O=n(2),x=n(6),f=n(35),h=n(13),p=n(235),m=n(0),g=["onValidAddress","onAddressClick"];!function(e){e[e.NOT_VALID=0]="NOT_VALID",e[e.FOUND=1]="FOUND",e[e.NOT_FOUND=2]="NOT_FOUND"}(i||(i={}));var v=x.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.radii.default}),(function(e){return e.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),B=Object(x.e)(O.Ic)(r||(r=Object(a.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),w={isFetching:!1,resultFound:i.NOT_VALID,value:""},S=function(){return Promise.resolve(!0)};t.a=function(e){var t=e.onValidAddress,n=void 0===t?S:t,c=e.onAddressClick,r=Object(b.a)(e,g),o=Object(d.useState)(w),a=Object(j.a)(o,2),x=a[0],y=a[1],I=Object(h.b)().t,k=x.isFetching,N=x.resultFound,W=x.value;return Object(d.useEffect)((function(){!1!==Object(f.j)(W)?function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y((function(e){return Object(u.a)(Object(u.a)({},e),{},{isFetching:!0})})),e.next=4,n(W);case 4:t=e.sent,y((function(e){return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1,resultFound:t?i.FOUND:i.NOT_FOUND})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y((function(e){return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()():y((function(e){return Object(u.a)(Object(u.a)({},e),{},{resultFound:i.NOT_VALID})}))}),[W,n,y]),Object(m.jsxs)(O.q,Object(u.a)(Object(u.a)({position:"relative"},r),{},{children:[Object(m.jsx)(O.nb,{placeholder:I("Search %subject%",{subject:I("Address").toLowerCase()}),value:x.value,onChange:function(e){var t=e.target.value;y((function(e){return Object(u.a)(Object(u.a)({},e),{},{value:t})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),k&&Object(m.jsx)(O.q,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(m.jsx)(p.a,{})}),Object(m.jsx)(v,{isOpen:N!==i.NOT_VALID,children:N===i.FOUND?Object(m.jsx)(B,{onClick:function(){y(w),c(x.value)},children:x.value}):Object(m.jsx)(O.Ic,{px:"16px",fontWeight:"bold",children:I("No results found.")})})]}))}}}]);
//# sourceMappingURL=33.449300cd.chunk.js.map