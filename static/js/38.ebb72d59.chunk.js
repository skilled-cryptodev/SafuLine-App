(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[38],{1709:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var i=n(28),c=n(3),a=n.n(c),r=n(11),o=n(17),l=n(9),s=n(8),d=n(1),u=n(6),b=n(7),j=n(4),v=n(2),O=n(72),x=n(13),m=n(38),p=n(225),h=n(255),C=n(455),I=n(285),f=n(26),y=n(119),R=n(137),E=n(63),g=n(40),T=n(21),U=n(66),w=n(47),Y=n(342),N=n(131),_=n(989),k=n(35),S=n(201);var B=n(67),P=n(81),A=n(284),D=n(19),L=n(132),q=n(292),Q=n(123),V=n(128),z=n(406);function M(){return Object(D.d)((function(e){return e.burn}))}var F,H=n(45),W=n(317),G=n(0),J=u.e.div(F||(F=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function K(e){var t,n,c,s,u,F,K,X,Z,$,ee,te,ne,ie,ce,ae,re,oe,le,se,de,ue=e.history,be=e.match.params,je=be.currencyIdA,ve=be.currencyIdB,Oe=null!==(t=Object(U.c)(je))&&void 0!==t?t:void 0,xe=null!==(n=Object(U.c)(ve))&&void 0!==n?n:void 0,me=Object(T.a)(),pe=me.account,he=me.chainId,Ce=me.library,Ie=Object(d.useMemo)((function(){return[Object(B.b)(Oe,he),Object(B.b)(xe,he)]}),[Oe,xe,he]),fe=Object(l.a)(Ie,2),ye=fe[0],Re=fe[1],Ee=Object(x.b)().t,ge=Object(H.g)(),Te=M(),Ue=Te.independentField,we=Te.typedValue,Ye=function(e,t){var n,i,c,a,r,s=Object(T.a)(),d=s.account,u=s.chainId,b=M(),v=b.independentField,O=b.typedValue,m=Object(x.b)().t,p=Object(L.b)(e,t),h=Object(l.a)(p,2)[1],C=Object(V.e)(null!==d&&void 0!==d?d:void 0,[null===h||void 0===h?void 0:h.liquidityToken]),I=null===C||void 0===C?void 0:C[null!==(n=null===h||void 0===h||null===(i=h.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],f=[Object(B.b)(e,u),Object(B.b)(t,u)],y=f[0],R=f[1],E=(c={},Object(o.a)(c,z.a.CURRENCY_A,y),Object(o.a)(c,z.a.CURRENCY_B,R),Object(o.a)(c,z.a.LIQUIDITY,null===h||void 0===h?void 0:h.liquidityToken),c),g=Object(q.a)(null===h||void 0===h?void 0:h.liquidityToken),U=h&&g&&I&&y&&j.e.greaterThanOrEqual(g.raw,I.raw)?new j.k(y,h.getLiquidityValue(y,g,I,!1).raw):void 0,w=h&&g&&I&&R&&j.e.greaterThanOrEqual(g.raw,I.raw)?new j.k(R,h.getLiquidityValue(R,g,I,!1).raw):void 0,Y=(a={},Object(o.a)(a,z.a.CURRENCY_A,U),Object(o.a)(a,z.a.CURRENCY_B,w),a),N=new j.g("0","100");if(v===z.a.LIQUIDITY_PERCENT)N=new j.g(O,"100");else if(v===z.a.LIQUIDITY){if(null===h||void 0===h?void 0:h.liquidityToken){var _=Object(Q.a)(O,h.liquidityToken);_&&I&&!_.greaterThan(I)&&(N=new j.g(_.raw,I.raw))}}else if(E[v]){var k=Object(Q.a)(O,E[v]),S=Y[v];k&&S&&!k.greaterThan(S)&&(N=new j.g(k.raw,S.raw))}var P,A,D=(r={},Object(o.a)(r,z.a.LIQUIDITY_PERCENT,N),Object(o.a)(r,z.a.LIQUIDITY,I&&N&&N.greaterThan("0")?new j.k(I.token,N.multiply(I.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_A,y&&N&&N.greaterThan("0")&&U?new j.k(y,N.multiply(U.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_B,R&&N&&N.greaterThan("0")&&w?new j.k(R,N.multiply(w.raw).quotient):void 0),r);return d||(P=m("Connect Wallet")),D[z.a.LIQUIDITY]&&D[z.a.CURRENCY_A]&&D[z.a.CURRENCY_B]||(P=null!==(A=P)&&void 0!==A?A:m("Enter an amount")),{pair:h,parsedAmounts:D,error:P}}(null!==Oe&&void 0!==Oe?Oe:void 0,null!==xe&&void 0!==xe?xe:void 0),Ne=Ye.pair,_e=Ye.parsedAmounts,ke=Ye.error,Se=function(){var e=Object(D.c)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(z.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,Be=!ke,Pe=Object(d.useState)(!1),Ae=Object(l.a)(Pe,2),De=Ae[0],Le=Ae[1],qe=Object(d.useState)(!1),Qe=Object(l.a)(qe,2),Ve=Qe[0],ze=Qe[1],Me=Object(d.useState)(""),Fe=Object(l.a)(Me,2),He=Fe[0],We=Fe[1],Ge=Object(Y.a)(),Je=Object(H.x)(),Ke=Object(l.a)(Je,1)[0],Xe=(Z={},Object(o.a)(Z,z.a.LIQUIDITY_PERCENT,_e[z.a.LIQUIDITY_PERCENT].equalTo("0")?"0":_e[z.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":_e[z.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,z.a.LIQUIDITY,Ue===z.a.LIQUIDITY?we:null!==(c=null===(s=_e[z.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==c?c:""),Object(o.a)(Z,z.a.CURRENCY_A,Ue===z.a.CURRENCY_A?we:null!==(u=null===(F=_e[z.a.CURRENCY_A])||void 0===F?void 0:F.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,z.a.CURRENCY_B,Ue===z.a.CURRENCY_B?we:null!==(K=null===(X=_e[z.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==K?K:""),Z),Ze=null===($=_e[z.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new j.g("1")),$e=Object(w.r)(null===Ne||void 0===Ne||null===(ee=Ne.liquidityToken)||void 0===ee?void 0:ee.address),et=Object(d.useState)(null),tt=Object(l.a)(et,2),nt=tt[0],it=tt[1],ct=Object(P.b)(_e[z.a.LIQUIDITY],g.t),at=Object(l.a)(ct,2),rt=at[0],ot=at[1];function lt(){return(lt=Object(r.a)(a.a.mark((function e(){var t,n,i,c,r,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($e&&Ne&&Ce&&Ge){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=_e[z.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,$e.nonces(pe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c={name:"Pancake LPs",version:"1",chainId:he,verifyingContract:Ne.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:pe,spender:g.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Ge.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:c,primaryType:"Permit",message:o}),Ce.send("eth_signTypedData_v4",[pe,l]).then(b.splitSignature).then((function(e){it({v:e.v,r:e.r,s:e.s,deadline:Ge.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&ot()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var st=Object(d.useCallback)((function(e,t){return it(null),Se(e,t)}),[Se]),dt=Object(d.useCallback)((function(e){return st(z.a.LIQUIDITY,e)}),[st]),ut=Object(d.useCallback)((function(e){return st(z.a.CURRENCY_A,e)}),[st]),bt=Object(d.useCallback)((function(e){return st(z.a.CURRENCY_B,e)}),[st]),jt=Object(N.d)();function vt(){return Ot.apply(this,arguments)}function Ot(){return(Ot=Object(r.a)(a.a.mark((function e(){var t,n,c,r,l,s,d,u,b,v,x,m,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(he&&Ce&&pe&&Ge){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=_e[z.a.CURRENCY_A],c=_e[z.a.CURRENCY_B],n&&c){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.i)(he,Ce,pe),t={},Object(o.a)(t,z.a.CURRENCY_A,Object(k.c)(n,Ke)[0]),Object(o.a)(t,z.a.CURRENCY_B,Object(k.c)(c,Ke)[0]),l=t,Oe&&xe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=_e[z.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=xe===j.d,u=Oe===j.d||d,ye&&Re){e.next=16;break}throw new Error("could not wrap");case 16:if(rt!==P.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],v=[d?ye.address:Re.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),pe,Ge.toHexString()]):(b=["removeLiquidity"],v=[ye.address,Re.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),pe,Ge.toHexString()]),e.next=25;break;case 20:if(null===nt){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],v=[d?ye.address:Re.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),pe,nt.deadline,!1,nt.v,nt.r,nt.s]):(b=["removeLiquidityWithPermit"],v=[ye.address,Re.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),pe,nt.deadline,!1,nt.v,nt.r,nt.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(v)).then(k.b).catch((function(t){console.error("estimateGas failed",e,v,t)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return O.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],h=x[m],ze(!0),e.next=38,r[p].apply(r,Object(i.a)(v).concat([{gasLimit:h,gasPrice:ge}])).then((function(e){var t,n;ze(!1),jt(e,{summary:"Remove ".concat(null===(t=_e[z.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol," and ").concat(null===(n=_e[z.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===xe||void 0===xe?void 0:xe.symbol)}),We(e.hash)})).catch((function(e){ze(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xt(){var e,t;return Object(G.jsxs)(m.a,{gap:"md",children:[Object(G.jsxs)(f.b,{align:"flex-end",children:[Object(G.jsx)(v.Ic,{fontSize:"24px",children:null===(e=_e[z.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(f.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:Oe,size:"24px"}),Object(G.jsx)(v.Ic,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(G.jsx)(f.c,{children:Object(G.jsx)(v.a,{width:"16px"})}),Object(G.jsxs)(f.b,{align:"flex-end",children:[Object(G.jsx)(v.Ic,{fontSize:"24px",children:null===(t=_e[z.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(G.jsxs)(f.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:xe,size:"24px"}),Object(G.jsx)(v.Ic,{fontSize:"24px",ml:"10px",children:null===xe||void 0===xe?void 0:xe.symbol})]})]}),Object(G.jsx)(v.Ic,{small:!0,textAlign:"left",pt:"12px",children:Ee("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Ke/100})})]})}function mt(){var e,t,n;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(f.b,{children:[Object(G.jsx)(v.Ic,{children:Ee("%assetA%/%assetB% Burned",{assetA:null!==(e=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==t?t:""})}),Object(G.jsxs)(f.c,{children:[Object(G.jsx)(E.b,{currency0:Oe,currency1:xe,margin:!0}),Object(G.jsx)(v.Ic,{children:null===(n=_e[z.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ne&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(f.b,{children:[Object(G.jsx)(v.Ic,{children:Ee("Price")}),Object(G.jsxs)(v.Ic,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?Ne.priceOf(ye).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]}),Object(G.jsxs)(f.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(v.Ic,{children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," = ",Re?Ne.priceOf(Re).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]})]}),Object(G.jsx)(v.v,{disabled:!(rt===P.a.APPROVED||null!==nt),onClick:vt,children:Ee("Confirm")})]})}var pt=Ee("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=_e[z.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==ie?ie:"",amountB:null!==(ce=null===(ae=_e[z.a.CURRENCY_B])||void 0===ae?void 0:ae.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(re=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==re?re:""}),ht=Object(d.useCallback)((function(e){st(z.a.LIQUIDITY_PERCENT,e.toString())}),[st]),Ct=Oe===j.d||xe===j.d,It=Boolean(he&&(Oe&&Object(j.o)(j.n[he],Oe)||xe&&Object(j.o)(j.n[he],xe))),ft=Object(d.useCallback)((function(e){ve&&Object(S.a)(e)===ve?ue.push("/remove/".concat(Object(S.a)(e),"/").concat(je)):ue.push("/remove/".concat(Object(S.a)(e),"/").concat(ve))}),[je,ve,ue]),yt=Object(d.useCallback)((function(e){je&&Object(S.a)(e)===je?ue.push("/remove/".concat(ve,"/").concat(Object(S.a)(e))):ue.push("/remove/".concat(je,"/").concat(Object(S.a)(e)))}),[je,ve,ue]),Rt=Object(d.useCallback)((function(){it(null),He&&st(z.a.LIQUIDITY_PERCENT,"0"),We("")}),[st,He]),Et=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),c=Object(l.a)(i,2),a=c[0],r=c[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[a,s]}(Number.parseInt(_e[z.a.LIQUIDITY_PERCENT].toFixed(0)),ht),gt=Object(l.a)(Et,2),Tt=gt[0],Ut=gt[1],wt=Object(v.od)(Object(G.jsx)(p.c,{title:Ee("You will receive"),customOnDismiss:Rt,attemptingTxn:Ve,hash:He||"",content:function(){return Object(G.jsx)(p.a,{topContent:xt,bottomContent:mt})},pendingText:pt}),!0,!0,"removeLiquidityModal"),Yt=Object(l.a)(wt,1)[0];return Object(G.jsxs)(W.a,{children:[Object(G.jsxs)(I.a,{children:[Object(G.jsx)(I.b,{backTo:"/pool",title:Ee("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==le?le:""}),subtitle:Ee("To receive %assetA% and %assetB%",{assetA:null!==(se=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==se?se:"",assetB:null!==(de=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==de?de:""}),noConfig:!0}),Object(G.jsxs)(v.B,{children:[Object(G.jsxs)(m.a,{gap:"20px",children:[Object(G.jsxs)(f.b,{children:[Object(G.jsx)(v.Ic,{children:Ee("Amount")}),Object(G.jsx)(v.v,{variant:"text",scale:"sm",onClick:function(){return Le(!De)},children:Ee(De?"Simple":"Detailed")})]}),!De&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(v.Ic,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Xe[z.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(v.oc,{name:"lp-amount",min:0,max:100,value:Tt,onValueChanged:function(e){return Ut(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(v.eb,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(v.v,{variant:"tertiary",scale:"sm",onClick:function(){return st(z.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(v.v,{variant:"tertiary",scale:"sm",onClick:function(){return st(z.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(v.v,{variant:"tertiary",scale:"sm",onClick:function(){return st(z.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(v.v,{variant:"tertiary",scale:"sm",onClick:function(){return st(z.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!De&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.b,{children:Object(G.jsx)(v.d,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(m.a,{gap:"10px",children:[Object(G.jsx)(v.Ic,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ee("You will receive")}),Object(G.jsxs)(R.c,{children:[Object(G.jsxs)(v.eb,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(v.eb,{children:[Object(G.jsx)(E.a,{currency:Oe}),Object(G.jsx)(v.Ic,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(G.jsx)(v.Ic,{small:!0,children:Xe[z.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(v.eb,{justifyContent:"space-between",children:[Object(G.jsxs)(v.eb,{children:[Object(G.jsx)(E.a,{currency:xe}),Object(G.jsx)(v.Ic,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===xe||void 0===xe?void 0:xe.symbol})]}),Object(G.jsx)(v.Ic,{small:!0,children:Xe[z.a.CURRENCY_B]||"-"})]}),he&&(It||Ct)?Object(G.jsx)(f.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:Ct?Object(G.jsx)(_.a,{to:"/remove/".concat(Oe===j.d?j.n[he].address:je,"/").concat(xe===j.d?j.n[he].address:ve),children:Ee("Receive WBNB")}):It?Object(G.jsx)(_.a,{to:"/remove/".concat(Oe&&Object(j.o)(Oe,j.n[he])?"BNB":je,"/").concat(xe&&Object(j.o)(xe,j.n[he])?"BNB":ve),children:Ee("Receive BNB")}):null}):null]})]})]}),De&&Object(G.jsxs)(v.q,{my:"16px",children:[Object(G.jsx)(h.a,{value:Xe[z.a.LIQUIDITY],onUserInput:dt,onMax:function(){st(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,disableCurrencySelect:!0,currency:null===Ne||void 0===Ne?void 0:Ne.liquidityToken,pair:Ne,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(m.b,{children:Object(G.jsx)(v.d,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Xe[z.a.CURRENCY_A],onUserInput:ut,onMax:function(){return st(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:Oe,label:Ee("Output"),onCurrencySelect:ft,id:"remove-liquidity-tokena"}),Object(G.jsx)(m.b,{children:Object(G.jsx)(v.a,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Xe[z.a.CURRENCY_B],onUserInput:bt,onMax:function(){return st(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:xe,label:Ee("Output"),onCurrencySelect:yt,id:"remove-liquidity-tokenb"})]}),Ne&&Object(G.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(v.Ic,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ee("Prices")}),Object(G.jsxs)(R.c,{children:[Object(G.jsxs)(v.eb,{justifyContent:"space-between",children:[Object(G.jsxs)(v.Ic,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(G.jsxs)(v.Ic,{small:!0,children:[ye?Ne.priceOf(ye).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]}),Object(G.jsxs)(v.eb,{justifyContent:"space-between",children:[Object(G.jsxs)(v.Ic,{small:!0,color:"textSubtle",children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," ="]}),Object(G.jsxs)(v.Ic,{small:!0,children:[Re?Ne.priceOf(Re).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]})]})]}),Object(G.jsx)(v.q,{position:"relative",mt:"16px",children:pe?Object(G.jsxs)(f.b,{children:[Object(G.jsx)(v.v,{variant:rt===P.a.APPROVED||null!==nt?"success":"primary",onClick:function(){return lt.apply(this,arguments)},disabled:rt!==P.a.NOT_APPROVED||null!==nt,width:"100%",mr:"0.5rem",children:rt===P.a.PENDING?Object(G.jsx)(A.a,{children:Ee("Enabling")}):rt===P.a.APPROVED||null!==nt?Ee("Enabled"):Ee("Enable")}),Object(G.jsx)(v.v,{variant:!Be&&_e[z.a.CURRENCY_A]&&_e[z.a.CURRENCY_B]?"danger":"primary",onClick:function(){Yt()},width:"100%",disabled:!Be||null===nt&&rt!==P.a.APPROVED,children:ke||Ee("Remove")})]}):Object(G.jsx)(y.a,{})})]})]}),Ne?Object(G.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(C.a,{showUnwrapped:It,pair:Ne})}):null]})}},989:function(e,t,n){"use strict";var i,c=n(8),a=n(102),r=n(6),o=Object(r.e)(a.a)(i||(i=Object(c.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);
//# sourceMappingURL=38.ebb72d59.chunk.js.map