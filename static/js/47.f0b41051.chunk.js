(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[47],{1656:function(e,t,c){"use strict";c.r(t),c.d(t,"ITEMS_PER_PAGE",(function(){return f})),c.d(t,"PageButtons",(function(){return k})),c.d(t,"Arrow",(function(){return v}));var n,r,s=c(9),i=c(7),l=c(1),o=c(2),a=c(6),j=c(103),b=c(827),u=c(13),d=c(229),O=c(440),x=c(99),h=c(0),f=10,m="totalVolumeBNB",p="numberTokensListed",g="totalSupply",k=a.e.div(n||(n=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n"]))),v=a.e.div(r||(r=Object(i.a)(["\n  color: ",";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.default=function(){var e=Object(u.b)().t,t=Object(b.f)(),c=Object(o.nd)().isMobile,n=Object(l.useState)(null),r=Object(s.a)(n,2),i=r[0],a=r[1],y=Object(l.useState)(!1),C=Object(s.a)(y,2),S=C[0],F=C[1],w=Object(l.useState)(1),A=Object(s.a)(w,2),B=A[0],E=A[1],P=Object(l.useState)(1),G=Object(s.a)(P,2),I=G[0],D=G[1];Object(l.useEffect)((function(){setTimeout((function(){window.scroll({top:0,left:0,behavior:"smooth"})}),50)}),[B]),Object(l.useEffect)((function(){var e=1,c=t?Object.values(t):[];c.length%f===0&&(e=0),D(Math.floor(c.length/f)+e)}),[t]);var K=Object(l.useMemo)((function(){return(t?Object.values(t):[]).sort((function(e,t){return i&&e&&t?parseFloat(e[i])>parseFloat(t[i])?1*(S?-1:1):-1*(S?-1:1):-1})).slice(f*(B-1),B*f)}),[B,t,S,i]),M=Object(l.useCallback)((function(e){a(e),F(i!==e||!S)}),[S,i]),T=Object(l.useCallback)((function(e){return i===e?S?"\u2193":"\u2191":""}),[S,i]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O.a,{children:Object(h.jsx)(o.gb,{as:"h1",scale:"xxl",color:"secondary",children:e("Collections")})}),Object(h.jsx)(d.b,{children:Object(h.jsxs)(o.A,{children:[Object(h.jsxs)(o.Ec,{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)(o.Kc,{textAlign:"left",children:e("Collection")}),Object(h.jsxs)(o.Kc,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return M(m)},children:[e("Volume"),T(m)]}),!c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(o.Kc,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return M(p)},children:[e("Items"),T(p)]}),Object(h.jsxs)(o.Kc,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return M(g)},children:[e("Supply"),T(g)]})]})]})}),Object(h.jsx)("tbody",{children:K.map((function(e){var t=e.totalVolumeBNB?parseFloat(e.totalVolumeBNB).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0";return Object(h.jsxs)("tr",{children:[Object(h.jsx)(o.Gc,{children:Object(h.jsx)(j.a,{to:"".concat(x.a,"/collections/").concat(e.address),children:Object(h.jsxs)(o.eb,{alignItems:"center",children:[Object(h.jsx)(o.dc,{src:e.avatar,width:48,height:48,mr:"16px"}),e.name]})})}),Object(h.jsx)(o.Gc,{children:Object(h.jsxs)(o.eb,{alignItems:"center",children:[t,Object(h.jsx)(o.o,{ml:"8px"})]})}),!c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.Gc,{children:e.numberTokensListed}),Object(h.jsx)(o.Gc,{children:e.totalSupply})]})]},e.address)}))})]}),Object(h.jsxs)(k,{children:[Object(h.jsx)(v,{onClick:function(){E(1===B?B:B-1)},children:Object(h.jsx)(o.c,{color:1===B?"textDisabled":"primary"})}),Object(h.jsx)(o.Ic,{children:e("Page %page% of %maxPage%",{page:B,maxPage:I})}),Object(h.jsx)(v,{onClick:function(){E(B===I?B:B+1)},children:Object(h.jsx)(o.f,{color:B===I?"textDisabled":"primary"})})]})]})})]})}}}]);
//# sourceMappingURL=47.f0b41051.chunk.js.map