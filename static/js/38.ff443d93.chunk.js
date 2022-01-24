(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[38],{1679:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c,o,i=n(9),r=n(7),j=n(1),a=n(4),l=n(2),d=n(6),s=n(13),b=n(137),O=n(38),x=n(63),u=n(458),p=n(26),h=n(544),g=n(132),f=n(21),I=n(45),v=n(128),y=n(986),m=n(203),T=n(285),N=n(286),k=n(318),E=n(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var S=Object(d.e)(l.v)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(f.a)().account,n=Object(s.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),d=r[0],A=r[1],C=Object(j.useState)(a.d),w=Object(i.a)(C,2),K=w[0],q=w[1],B=Object(j.useState)(null),L=Object(i.a)(B,2),X=L[0],D=L[1],J=Object(g.b)(null!==K&&void 0!==K?K:void 0,null!==X&&void 0!==X?X:void 0),M=Object(i.a)(J,2),P=M[0],F=M[1],G=Object(I.j)();Object(j.useEffect)((function(){F&&G(F)}),[F,G]);var R=P===g.a.NOT_EXISTS||Boolean(P===g.a.EXISTS&&F&&a.e.equal(F.reserve0.raw,a.e.BigInt(0))&&a.e.equal(F.reserve1.raw,a.e.BigInt(0))),V=Object(v.d)(null!==t&&void 0!==t?t:void 0,null===F||void 0===F?void 0:F.liquidityToken),W=Boolean(V&&a.e.greaterThan(V.raw,a.e.BigInt(0))),Y=Object(j.useCallback)((function(e){d===o.TOKEN0?q(e):D(e)}),[d]),_=Object(E.jsx)(b.b,{padding:"45px 10px",children:Object(E.jsx)(l.Ic,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),z=Object(l.od)(Object(E.jsx)(h.a,{onCurrencySelect:Y,showCommonBases:!0,selectedCurrency:null!==(e=d===o.TOKEN0?X:K)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(z,1)[0];return Object(E.jsx)(k.a,{children:Object(E.jsxs)(N.a,{children:[Object(E.jsx)(N.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(E.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(E.jsx)(S,{endIcon:Object(E.jsx)(l.N,{}),onClick:function(){H(),A(o.TOKEN0)},children:K?Object(E.jsxs)(p.d,{children:[Object(E.jsx)(x.a,{currency:K}),Object(E.jsx)(l.Ic,{ml:"8px",children:K.symbol})]}):Object(E.jsx)(l.Ic,{ml:"8px",children:n("Select a Token")})}),Object(E.jsx)(O.b,{children:Object(E.jsx)(l.a,{})}),Object(E.jsx)(S,{endIcon:Object(E.jsx)(l.N,{}),onClick:function(){H(),A(o.TOKEN1)},children:X?Object(E.jsxs)(p.d,{children:[Object(E.jsx)(x.a,{currency:X}),Object(E.jsx)(l.Ic,{ml:"8px",children:X.symbol})]}):Object(E.jsx)(l.Ic,{as:p.d,children:n("Select a Token")})}),W&&Object(E.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(E.jsx)(l.Ic,{textAlign:"center",children:n("Pool Found!")}),Object(E.jsx)(y.a,{to:"/pool",children:Object(E.jsx)(l.Ic,{textAlign:"center",children:n("Manage this pool.")})})]}),K&&X?P===g.a.EXISTS?W&&F?Object(E.jsx)(u.a,{pair:F}):Object(E.jsx)(b.b,{padding:"45px 10px",children:Object(E.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(E.jsx)(l.Ic,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(E.jsx)(y.a,{to:"/add/".concat(Object(m.a)(K),"/").concat(Object(m.a)(X)),children:Object(E.jsx)(l.Ic,{textAlign:"center",children:n("Add Liquidity")})})]})}):R?Object(E.jsx)(b.b,{padding:"45px 10px",children:Object(E.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(E.jsx)(l.Ic,{textAlign:"center",children:n("No pool found.")}),Object(E.jsx)(y.a,{to:"/add/".concat(Object(m.a)(K),"/").concat(Object(m.a)(X)),children:n("Create pool.")})]})}):P===g.a.INVALID?Object(E.jsx)(b.b,{padding:"45px 10px",children:Object(E.jsx)(O.a,{gap:"sm",justify:"center",children:Object(E.jsx)(l.Ic,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):P===g.a.LOADING?Object(E.jsx)(b.b,{padding:"45px 10px",children:Object(E.jsx)(O.a,{gap:"sm",justify:"center",children:Object(E.jsxs)(l.Ic,{textAlign:"center",children:[n("Loading"),Object(E.jsx)(T.a,{})]})})}):null:_]})]})})}},986:function(e,t,n){"use strict";var c,o=n(7),i=n(103),r=n(6),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=38.ff443d93.chunk.js.map