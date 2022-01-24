(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[26],{1662:function(e,t,n){"use strict";n.r(t);var c,i,r,o=n(7),a=n(1),l=n(6),s=n(2),d=n(44),u=n(103),b=n(13),j=n(440),p=n(5),h=n(49),x=n(854),O=n(0),f=["header","config"],v=function(e){var t=e.header,n=e.config,c=Object(h.a)(e,f);return Object(O.jsx)(s.q,Object(p.a)(Object(p.a)({maxWidth:"888px"},c),{},{children:Object(O.jsxs)(s.A,{children:[Object(O.jsx)(s.D,{children:Object(O.jsx)(s.gb,{scale:"lg",color:"secondary",children:t})}),Object(O.jsx)(s.B,{children:n.map((function(e,t,n){var c=e.title,i=e.description,r=n.length;return Object(O.jsx)(x.a,{id:c,mb:t+1===r?"":"24px",title:c,children:i.map((function(e){return Object(O.jsx)(s.Ic,{color:"textSubtle",as:"p",children:e},e)}))},c)}))})]})}))},m=n(861),g=n(229),F=n(99),k=n(107),C=n(915),w=n(311),y=n.n(w),N=n(827),P=n(865),B=n(893),I=function(){var e=Object(b.b)().t,t=Object(N.f)(),n=y()(t,(function(e){return e.totalVolumeBNB?parseFloat(e.totalVolumeBNB):0}),"desc");return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(s.eb,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(O.jsx)(s.gb,{as:"h3",scale:"lg",children:e("Hot Collections")}),Object(O.jsx)(s.v,{as:u.a,to:"".concat(F.a,"/collections/"),variant:"secondary",scale:"sm",endIcon:Object(O.jsx)(s.P,{color:"primary",width:"24px"}),children:e("View All")})]}),Object(O.jsx)(s.fb,{gridGap:"16px",gridTemplateColumns:["1fr","1fr","repeat(2, 1fr)","repeat(3, 1fr)"],mb:"64px",children:n.slice(0,6).map((function(t){return Object(O.jsx)(P.c,{bgSrc:t.banner.small,avatarSrc:t.avatar,collectionName:t.name,url:"".concat(F.a,"/collections/").concat(t.address),children:Object(O.jsxs)(s.eb,{alignItems:"center",children:[Object(O.jsx)(s.Ic,{fontSize:"12px",color:"textSubtle",children:e("Volume")}),Object(O.jsx)(B.a,{amount:t.totalVolumeBNB?parseFloat(t.totalVolumeBNB):0})]})},t.address)}))})]})},D=n(3),T=n.n(D),A=n(11),L=n(9),S=n(78),V=n(864),U=function(){var e=Object(b.b)().t,t=function(){var e=Object(a.useState)(null),t=Object(L.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(A.a)(T.a.mark((function e(){var t,n,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.m)(16);case 2:return t=e.sent,e.next=5,Object(S.t)(t.map((function(e){return{collectionAddress:e.collection.id,tokenId:e.tokenId}})));case 5:n=e.sent,i=t.map((function(e){var t=n.find((function(t){return t.tokenId===e.tokenId}));return t?Object(p.a)(Object(p.a)({},t),{},{marketData:e}):null})).filter(Boolean),c(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),n}();return Object(O.jsxs)("div",{children:[Object(O.jsxs)(s.eb,{justifyContent:"space-between",alignItems:"center",mb:"26px",children:[Object(O.jsx)(s.gb,{children:e("Newest Arrivals")}),Object(O.jsx)(s.v,{as:u.a,to:"".concat(F.a,"/activity/"),variant:"secondary",scale:"sm",endIcon:Object(O.jsx)(s.P,{color:"primary"}),children:e("View All")})]}),t?Object(O.jsx)(s.fb,{gridRowGap:"24px",gridColumnGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"],children:t.map((function(e){var t,n=!(e.collectionAddress.toLowerCase()===F.b.toLowerCase())&&(null===(t=e.marketData)||void 0===t?void 0:t.isTradable)?parseFloat(e.marketData.currentAskPrice):void 0;return Object(O.jsx)(P.b,{nft:e,currentAskPrice:n},e.collectionAddress+e.tokenId)}))}):Object(O.jsx)(V.a,{numItems:8})]})},M=function(e){return[{title:e("I sold an NFT, where\u2019s my BNB?"),description:[e("Trades are settled in WBNB, which is a wrapped version of BNB used on Binance Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BNB."),e("You can instantly swap your WBNB for BNB with no trading fees on PancakeSwap.")]},{title:e("When can I trade other NFT Collections?"),description:[e("Soon! The current NFT Market is a basic version (phase 1), with early access to trading PancakeSwap NFTs only."),e("Other collections will be coming soon. We\u2019ll make an announcement soon about the launch of the V2 Market.")]},{title:e("How can I list my NFT collection on the Market?"),description:[e("In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed."),e("We are now accepting applications from NFT collection owners seeking to list their collections. Please apply here: https://docs.pancakeswap.finance/contact-us/nft-market-applications")]},{title:e("What are the fees?"),description:[e("100% of all platform fees taken by PancakeSwap from sales are used to buy back and BURN CAKE tokens in our weekly CAKE burns."),e("Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns.")]}]},W=Object(l.e)(s.q)(c||(c=Object(o.a)(["\n  background: ",";\n"])),(function(e){return e.theme.colors.gradients.cardHeader})),q=Object(l.e)(j.a)(i||(i=Object(o.a)(["\n  margin-bottom: -40px;\n  padding-bottom: 40px;\n"]))),E=Object(l.e)(s.eb)(r||(r=Object(o.a)(["\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  & div:nth-child(1) {\n    order: 1;\n  }\n  & div:nth-child(2) {\n    order: 0;\n    margin-bottom: 32px;\n    align-self: end;\n  }\n  "," {\n    flex-direction: row;\n    & div:nth-child(1) {\n      order: 0;\n    }\n    & div:nth-child(2) {\n      order: 1;\n      margin-bottom: 0;\n      align-self: auto;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}));t.default=function(){var e=Object(b.b)().t,t=Object(d.c)().account,n=Object(k.a)().theme;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.a,{}),Object(O.jsx)(q,{children:Object(O.jsxs)(E,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(s.gb,{as:"h1",scale:"xxl",color:"secondary",mb:"24px",children:e("NFT Market")}),Object(O.jsx)(s.gb,{scale:"lg",color:"text",children:e("Buy and Sell NFTs on Binance Smart Chain")}),t&&Object(O.jsx)(s.v,{as:u.a,to:"".concat(F.a,"/profile/").concat(t.toLowerCase()),mt:"32px",children:e("Manage/Sell")})]}),Object(O.jsx)(C.a,{})]})}),Object(O.jsxs)(m.a,{innerProps:{style:{margin:"0",width:"100%"}},background:n.colors.background,index:1,concaveDivider:!0,dividerPosition:"top",children:[Object(O.jsx)(I,{}),Object(O.jsx)(U,{})]}),Object(O.jsx)(W,{p:"64px 0",children:Object(O.jsx)(v,{header:e("FAQs"),config:M(e),m:"auto"})})]})}},854:function(e,t,n){"use strict";var c,i,r,o=n(5),a=n(9),l=n(49),s=n(7),d=n(1),u=n(6),b=n(2),j=n(13),p=n(0),h=["title","children"],x=Object(u.e)(b.eb)(c||(c=Object(s.a)(["\n  cursor: pointer;\n"]))),O=Object(u.e)(b.eb)(i||(i=Object(s.a)(["\n  button {\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]))),f=Object(u.e)(b.eb)(r||(r=Object(s.a)(["\n  overflow: hidden;\n  height: ",";\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.isExpanded?"100%":"0px"}),(function(e){return e.isExpanded?"16px":"0px"}),(function(e){return e.theme.colors.inputSecondary}));t.a=function(e){var t=e.title,n=e.children,c=Object(l.a)(e,h),i=Object(j.b)().t,r=Object(d.useState)(!1),s=Object(a.a)(r,2),u=s[0],v=s[1];return Object(p.jsxs)(x,Object(o.a)(Object(o.a)({},c),{},{flexDirection:"column",onClick:function(){return v(!u)},children:[Object(p.jsxs)(b.eb,{justifyContent:"space-between",alignItems:"center",pb:"16px",children:[Object(p.jsx)(b.Ic,{fontWeight:"bold",children:t}),Object(p.jsx)(O,{children:Object(p.jsx)(b.cb,{expanded:u,onClick:function(){return v(!u)},children:i(u?"Hide":"Details")})})]}),Object(p.jsx)(f,{isExpanded:u,flexDirection:"column",children:n})]}))}},861:function(e,t,n){"use strict";var c,i,r,o,a,l,s,d=n(5),u=n(49),b=n(7),j=(n(1),n(6)),p=n(2),h=n(305),x=n(0),O=function(e,t,n){return Object(j.d)(c||(c=Object(b.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(",");\n\n  background: ",";\n\n  & svg {\n    display: block;\n  }\n"])),t,(function(){return e.isDark?(null===n||void 0===n?void 0:n.dark)||(null===n||void 0===n?void 0:n.light)||e.colors.background:(null===n||void 0===n?void 0:n.light)||e.colors.background}))},f=Object(j.e)(p.q)(i||(i=Object(b.a)(["\n  ","\n  transform: ",";\n"])),(function(e){var t=e.theme,n=e.clipPath,c=e.clipFill;return O(t,n,c)}),(function(e){return"#bottomConcaveCurve"===e.clipPath?"translate(0, -13px)":"translate(0, 1px)"})),v=Object(j.e)(p.q)(r||(r=Object(b.a)(["\n  ","\n  transform: ",";\n"])),(function(e){var t=e.theme,n=e.clipPath,c=e.clipFill;return O(t,n,c)}),(function(e){return"#bottomConvexCurve"===e.clipPath?"translate(0, -13px)":"translate(0, -1px)"})),m=function(e){var t=e.clipFill;return Object(x.jsx)(v,{clipFill:t,clipPath:"#topConvexCurve",children:Object(x.jsx)("svg",{width:"0",height:"0",children:Object(x.jsx)("defs",{children:Object(x.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(x.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},g=function(e){var t=e.clipFill;return Object(x.jsx)(v,{clipFill:t,clipPath:"#bottomConvexCurve",children:Object(x.jsx)("svg",{width:"0",height:"0",children:Object(x.jsx)("defs",{children:Object(x.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(x.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},F=function(e){var t=e.clipFill;return Object(x.jsx)(f,{clipFill:t,clipPath:"#topConcaveCurve",children:Object(x.jsx)("svg",{width:"0",height:"0",children:Object(x.jsx)("defs",{children:Object(x.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(x.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},k=function(e){var t=e.clipFill;return Object(x.jsx)(f,{clipFill:t,clipPath:"#bottomConcaveCurve",children:Object(x.jsx)("svg",{width:"0",height:"0",children:Object(x.jsx)("defs",{children:Object(x.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(x.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})},C=j.e.div(o||(o=Object(b.a)(["\n  background: ",";\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])),(function(e){var t=e.theme,n=e.dividerFill;return t.isDark?(null===n||void 0===n?void 0:n.dark)||(null===n||void 0===n?void 0:n.light)||"none":(null===n||void 0===n?void 0:n.light)||(null===n||void 0===n?void 0:n.dark)||"none"}),(function(e){return e.index})),w=j.e.div(a||(a=Object(b.a)(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),(function(e){return e.index+1})),y=function(e){var t=e.index,n=e.dividerPosition,c=e.dividerComponent,i=e.concave,r=e.clipFill,o=e.dividerFill,a="top"===n&&!i,l="bottom"===n&&!i,s="top"===n&&i,d="bottom"===n&&i;return Object(x.jsxs)(C,{index:t,dividerFill:o,children:[c&&Object(x.jsx)(w,{index:t,children:c}),Object(x.jsxs)(x.Fragment,{children:[s&&Object(x.jsx)(F,{clipFill:r}),d&&Object(x.jsx)(k,{clipFill:r})]}),Object(x.jsxs)(x.Fragment,{children:[a&&Object(x.jsx)(m,{clipFill:r}),l&&Object(x.jsx)(g,{clipFill:r})]})]})},N=["children","background","svgFill","index","dividerComponent","dividerPosition","hasCurvedDivider","concaveDivider","clipFill","dividerFill","containerProps","innerProps"],P=Object(j.e)(p.eb)(l||(l=Object(b.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n  background: ",";\n  padding: ",";\n"])),(function(e){return e.index-1}),(function(e){var t=e.background,n=e.theme;return t||n.colors.background}),(function(e){return(0,e.getPadding)()})),B=Object(j.e)(h.a)(s||(s=Object(b.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}));t.a=function(e){var t=e.children,n=e.background,c=e.svgFill,i=e.index,r=void 0===i?1:i,o=e.dividerComponent,a=e.dividerPosition,l=void 0===a?"bottom":a,s=e.hasCurvedDivider,b=void 0===s||s,j=e.concaveDivider,h=void 0!==j&&j,O=e.clipFill,f=e.dividerFill,v=e.containerProps,m=e.innerProps,g=Object(u.a)(e,N);return Object(x.jsxs)(p.q,Object(d.a)(Object(d.a)({},v),{},{children:[b&&"top"===l&&Object(x.jsx)(y,{svgFill:c,index:r,concave:h,dividerPosition:l,dividerComponent:o,clipFill:O,dividerFill:f}),Object(x.jsx)(P,Object(d.a)(Object(d.a)({background:n,index:r,getPadding:function(){return b?"bottom"===l?"48px 0 14px":"top"===l?"14px 0 48px":"48px 0":"48px 0"}},g),{},{children:Object(x.jsx)(B,Object(d.a)(Object(d.a)({},m),{},{children:t}))})),b&&"bottom"===l&&Object(x.jsx)(y,{svgFill:c,index:r,concave:h,dividerPosition:l,dividerComponent:o,clipFill:O,dividerFill:f})]}))}},864:function(e,t,n){"use strict";var c=n(49),i=n(5),r=(n(1),n(2)),o=n(437),a=n.n(o),l=n(0),s=["numItems"],d=function(e){return Object(l.jsxs)(r.q,Object(i.a)(Object(i.a)({},e),{},{children:[Object(l.jsx)(r.nc,{height:"258px",mb:"8px"}),Object(l.jsx)(r.nc,{width:"30%",mb:"4px"}),Object(l.jsx)(r.nc,{width:"45%",mb:"16px"}),Object(l.jsx)(r.nc,{})]}))};t.a=function(e){var t=e.numItems,n=void 0===t?12:t,o=Object(c.a)(e,s);return Object(l.jsx)(r.fb,Object(i.a)(Object(i.a)({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},o),{},{children:a()(n).map((function(e){return Object(l.jsx)(d,{},e)}))}))}},866:function(e,t,n){"use strict";var c,i,r,o=n(3),a=n.n(o),l=n(11),s=n(5),d=n(9),u=n(49),b=n(7),j=n(1),p=n(2),h=n(6),x=n(35),O=n(13),f=n(237),v=n(0),m=["onValidAddress","onAddressClick"];!function(e){e[e.NOT_VALID=0]="NOT_VALID",e[e.FOUND=1]="FOUND",e[e.NOT_FOUND=2]="NOT_FOUND"}(r||(r={}));var g=h.e.div(c||(c=Object(b.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.radii.default}),(function(e){return e.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),F=Object(h.e)(p.Ic)(i||(i=Object(b.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),k={isFetching:!1,resultFound:r.NOT_VALID,value:""},C=function(){return Promise.resolve(!0)};t.a=function(e){var t=e.onValidAddress,n=void 0===t?C:t,c=e.onAddressClick,i=Object(u.a)(e,m),o=Object(j.useState)(k),b=Object(d.a)(o,2),h=b[0],w=b[1],y=Object(O.b)().t,N=h.isFetching,P=h.resultFound,B=h.value;return Object(j.useEffect)((function(){!1!==Object(x.j)(B)?function(){var e=Object(l.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w((function(e){return Object(s.a)(Object(s.a)({},e),{},{isFetching:!0})})),e.next=4,n(B);case 4:t=e.sent,w((function(e){return Object(s.a)(Object(s.a)({},e),{},{isFetching:!1,resultFound:t?r.FOUND:r.NOT_FOUND})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w((function(e){return Object(s.a)(Object(s.a)({},e),{},{isFetching:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()():w((function(e){return Object(s.a)(Object(s.a)({},e),{},{resultFound:r.NOT_VALID})}))}),[B,n,w]),Object(v.jsxs)(p.q,Object(s.a)(Object(s.a)({position:"relative"},i),{},{children:[Object(v.jsx)(p.nb,{placeholder:y("Search %subject%",{subject:y("Address").toLowerCase()}),value:h.value,onChange:function(e){var t=e.target.value;w((function(e){return Object(s.a)(Object(s.a)({},e),{},{value:t})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),N&&Object(v.jsx)(p.q,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(v.jsx)(f.a,{})}),Object(v.jsx)(g,{isOpen:P!==r.NOT_VALID,children:P===r.FOUND?Object(v.jsx)(F,{onClick:function(){w(k),c(h.value)},children:h.value}):Object(v.jsx)(p.Ic,{px:"16px",fontWeight:"bold",children:y("No results found.")})})]}))}},915:function(e,t,n){"use strict";var c=n(5),i=(n(1),n(87)),r=n(866),o=n(99),a=n(0);t.a=function(e){var t=Object(i.g)();return Object(a.jsx)(r.a,Object(c.a)({onAddressClick:function(e){t.push("".concat(o.a,"/profile/").concat(e))}},e))}}}]);
//# sourceMappingURL=26.0ac6c70b.chunk.js.map