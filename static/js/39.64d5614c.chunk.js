"use strict";(globalThis.webpackChunklightning_tunnel=globalThis.webpackChunklightning_tunnel||[]).push([[39,609],{60980:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(15190);const n={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},r={devnet:{...n,node:"https://api.devnet.solana.com",sntrAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",sntrPoolAddress:"3EUPL7YQLbU6DNU5LZeQeHPXTf1MigJ2yASXA9rH5Ku4",swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"},testnet:{...n,node:"https://api.testnet.solana.com",sntrAddress:"",sntrPoolAddress:"",swapAddress:"",taxmanAddress:""},mainnet:{...n,node:"https://sentre.genesysgo.net",sntrAddress:"SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M",sntrPoolAddress:"Aa3WZX7Xunfebp2MuAcz9CNw8TYTDL7mVrmb11rjyVm6",swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e"}};const d="lightning_tunnel",i={[d]:{url:"https://github.com/DescartesNetwork/sen-lightning-tunnel/index.js",appId:d,name:"Lightning Tunnel",author:{name:"Sentre",email:"hi@sentre.io"},tags:"solana,dapps,utility".split(",").map((e=>e.trim())),description:"A sample project for Sentre developers",verified:!1}},o={development:{defaultAppId:d,extra:i,senreg:"https://descartesnetwork.github.io/senreg/register.json"},staging:{defaultAppId:d,extra:i,senreg:"https://descartesnetwork.github.io/senreg/register.json"},production:{defaultAppId:d,extra:{},senreg:"https://descartesnetwork.github.io/senreg/register.json"}},l={devnet:{baseURL:"https://stat-dev.sentre.io"},testnet:{baseURL:"https://stat-dev.sentre.io"},mainnet:{baseURL:"https://stat.sentre.io"}},c={sol:r[a.ef],register:o[a.OB],stat:l[a.ef]}},80039:(e,t,s)=>{s.r(t),s.d(t,{AccountProvider:()=>x,MintProvider:()=>U,PoolProvider:()=>f,UIProvider:()=>l,WalletProvider:()=>b,useAccount:()=>P,useMint:()=>N,usePool:()=>y,useUI:()=>h,useWallet:()=>k,withAccount:()=>j,withMint:()=>V,withPool:()=>w,withUI:()=>u,withWallet:()=>v});var a=s(92950),n=s(99019),r=s(87358),d=s(87482),i=s(45263);const o=(0,a.createContext)({}),l=e=>{let{children:t,appId:s,style:l={},antd:c=!1}=e;const u=(0,r.u5)(),{ui:h}=(0,r.Qy)((e=>e)),p=(0,a.useCallback)((async function(){return await u((0,d.AY)(...arguments)).unwrap()}),[u]),f=(0,a.useMemo)((()=>({ui:h,setBackground:p})),[h,p]),g=c?{getPopupContainer:()=>document.getElementById(s),..."object"===typeof c?c:{}}:void 0;return(0,i.jsx)(o.Provider,{value:f,children:(0,i.jsx)("section",{id:s,style:{height:"100%",backgroundColor:"transparent",...l},children:g?(0,i.jsx)(n.ConfigProvider,{...g,children:t}):t})})},c=e=>{let{children:t}=e;return(0,i.jsx)(o.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},u=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,i.jsx)(c,{children:(0,i.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,i.jsx)(t,{...e,ref:s})))},h=()=>(0,a.useContext)(o),p=(0,a.createContext)({}),f=e=>{let{children:t}=e;const{pools:s}=(0,r.Qy)((e=>e)),n=(0,a.useMemo)((()=>({pools:s})),[s]);return(0,i.jsx)(p.Provider,{value:n,children:t})},g=e=>{let{children:t}=e;return(0,i.jsx)(p.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},w=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,i.jsx)(g,{children:(0,i.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,i.jsx)(t,{...e,ref:s})))},y=()=>(0,a.useContext)(p),m=(0,a.createContext)({}),b=e=>{let{children:t}=e;const{wallet:s}=(0,r.Qy)((e=>e)),n=(0,a.useMemo)((()=>({wallet:s})),[s]);return(0,i.jsx)(m.Provider,{value:n,children:t})},A=e=>{let{children:t}=e;return(0,i.jsx)(m.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},v=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,i.jsx)(A,{children:(0,i.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,i.jsx)(t,{...e,ref:s})))},k=()=>(0,a.useContext)(m),C=(0,a.createContext)({}),x=e=>{let{children:t}=e;const{accounts:s}=(0,r.Qy)((e=>e)),n=(0,a.useMemo)((()=>({accounts:s})),[s]);return(0,i.jsx)(C.Provider,{value:n,children:t})},I=e=>{let{children:t}=e;return(0,i.jsx)(C.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},j=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,i.jsx)(I,{children:(0,i.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,i.jsx)(t,{...e,ref:s})))},P=()=>(0,a.useContext)(C);var S=s(95418),T=s(33015),E=s(94757),Z=s.n(E),R=s(67845),M=s(15190);const O=e=>({symbol:"SOL",name:"Solana",address:"11111111111111111111111111111111",decimals:9,chainId:e,extensions:{coingeckoId:"solana"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"}),L=e=>({symbol:"SNTR",name:"Sentre",address:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",decimals:9,chainId:e,extensions:{coingeckoId:"sentre"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png"}),D=[O(103),L(103),{symbol:"wBTC",name:"Wrapped Bitcoin",address:"8jk4eJymMfNZV9mkRNxJEt2VJ3pRvdJvD5FE94GXGBPM",decimals:9,chainId:103,extensions:{coingeckoId:"bitcoin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png"},{symbol:"wETH",name:"Ethereum",address:"27hdcZv7RtuMp75vupThR3T4KLsL61t476eosMdoec4c",decimals:9,chainId:103,extensions:{coingeckoId:"ethereum"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png"},{symbol:"UNI",name:"Uniswap",address:"FVZFSXu3yn17YdcxLD72TFDUqkdE5xZvcW18EUpRQEbe",decimals:9,chainId:103,extensions:{coingeckoId:"uniswap"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3MVa4e32PaKmPxYUQ6n8vFkWtCma68Ld7e7fTktWDueQ/logo.png"},{symbol:"USDC",name:"USD Coin",address:"2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj",decimals:9,chainId:103,extensions:{coingeckoId:"usd-coin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"}];const W=new class{constructor(){var e=this;this.tokenMap=void 0,this.engine=void 0,this.chainId=void 0,this.cluster=void 0,this.loading=void 0,this.queue=void 0,this._init=async()=>this.tokenMap.size&&this.engine?[this.tokenMap,this.engine]:new Promise((async e=>{if(this.loading)return this.queue.push(e);this.loading=!0;let t=await(await(new R.DK).resolve()).filterByChainId(this.chainId).getList();for("devnet"===this.cluster&&(t=t.concat(D)),t="testnet"===this.cluster?t.concat([L(102),O(102)]):t.concat([O(101)]),t.forEach((e=>this.tokenMap.set(e.address,e))),this.engine=Z()((function(){this.ref("address"),this.field("symbol"),this.field("name"),t.forEach((e=>this.add(e)))})),e([this.tokenMap,this.engine]);this.queue.length;)this.queue.shift()([this.tokenMap,this.engine]);this.loading=!1})),this.all=async()=>{const[e]=await this._init();return Array.from(e.values())},this.findByAddress=async e=>{const[t]=await this._init();return t.get(e)},this.find=async function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const[a,n]=await e._init();let r=[];return t?(n.search(t).forEach((e=>{let{ref:t}=e;if(r.findIndex((e=>{let{address:s}=e;return s===t}))<0){const e=a.get(t);e&&r.push(e)}})),r.slice(0,s)):[]},this.tokenMap=new Map,this.engine=void 0,this.chainId=M.Bv,this.cluster=M.ef,this.loading=!1,this.queue=[],this._init()}},B=(0,a.createContext)({}),U=e=>{let{children:t}=e;const s=(0,r.u5)(),{mints:n,pools:d}=(0,r.Qy)((e=>e)),o=(0,a.useCallback)((async function(){return await s((0,T.ih)(...arguments)).unwrap()}),[s]),l=(0,a.useCallback)((async e=>{var t;if(!S.account.isAddress(e))throw new Error("Invalid mint address");const s=await W.findByAddress(e);if(null!==s&&void 0!==s&&s.decimals)return s.decimals;if(Object.values(d).findIndex((t=>{let{mint_lpt:s}=t;return s===e}))>=0)return 9;const a=await o({address:e});if(null!==(t=a[e])&&void 0!==t&&t.decimals)return a[e].decimals;throw new Error("Cannot find mint decimals")}),[o,d]),c=(0,a.useMemo)((()=>({mints:n,getMint:o,getDecimals:l,tokenProvider:W})),[n,o,l]);return(0,i.jsx)(B.Provider,{value:c,children:t})},q=e=>{let{children:t}=e;return(0,i.jsx)(B.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},V=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,i.jsx)(q,{children:(0,i.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,i.jsx)(t,{...e,ref:s})))},N=()=>(0,a.useContext)(B)},65090:(e,t,s)=>{s.d(t,{ZP:()=>c});var a=s(19289),n=s(95418);const r="accounts",d=(0,a.createAsyncThunk)(`${r}/getAccounts`,(async e=>{let{owner:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid owner/wallet address");const{splt:s}=window.sentre,a=n.account.fromAddress(t),{value:r}=await s.connection.getTokenAccountsByOwner(a,{programId:s.spltProgramId});let d={};return r.forEach((e=>{let{pubkey:t,account:{data:a}}=e;const n=t.toBase58(),r=s.parseAccountData(a);return d[n]=r})),d})),i=(0,a.createAsyncThunk)(`${r}/getAccount`,(async(e,t)=>{let{address:s}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid account address");const{accounts:{[s]:r}}=a();if(r)return{[s]:r};const{splt:d}=window.sentre;return{[s]:await d.getAccountData(s)}})),o=(0,a.createAsyncThunk)(`${r}/upsetAccount`,(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),l=(0,a.createAsyncThunk)(`${r}/deleteAccount`,(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),c=(0,a.createSlice)({name:r,initialState:{},reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},5105:(e,t,s)=>{s.d(t,{ZP:()=>c});var a=s(19289),n=s(95418),r=s(3007);const d="flags",i=(0,a.createAsyncThunk)("flags/loadVisited",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const d=new r.Z(a).createInstance("sentre");return{visited:await d.getItem("visited")||!1}})),o=(0,a.createAsyncThunk)("flags/updateVisited",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const d=new r.Z(a).createInstance("sentre");return await d.setItem("visited",e),{visited:e}})),l=(0,a.createAsyncThunk)("flags/updateLoading",(async e=>({loading:e}))),c=(0,a.createSlice)({name:d,initialState:{visited:!0,loading:!0},reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87358:(e,t,s)=>{s.d(t,{u5:()=>w,Qy:()=>y});var a=s(55754),n=s(19289),r=s(70103),d=s(85912),i=s(87482),o=s(5105),l=s(58851),c=s(21028),u=s(65090),h=s(33015),p=s(92871),f=s(33361),g=s(51865);(0,a.createStoreHook)(r.RootContext);const w=(0,a.createDispatchHook)(r.RootContext),y=(0,a.createSelectorHook)(r.RootContext);(0,n.configureStore)({middleware:e=>e(d.h),devTools:(0,d.$)("sentre"),reducer:{ui:i.ZP,flags:o.ZP,page:l.ZP,wallet:c.ZP,accounts:u.ZP,mints:h.ZP,pools:p.ZP,search:f.ZP,walkthrough:g.ZP}})},33015:(e,t,s)=>{s.d(t,{ih:()=>d,ZP:()=>l});var a=s(19289),n=s(95418);const r="mints",d=(0,a.createAsyncThunk)("mints/getMint",(async(e,t)=>{let{address:s,force:a=!1}=e,{getState:r}=t;if(!n.account.isAddress(s))throw new Error("Invalid mint address");if(!a){const{accounts:{[s]:e}}=r();if(e)return{[s]:e}}const{splt:d}=window.sentre;return{[s]:await d.getMintData(s)}})),i=(0,a.createAsyncThunk)("mints/upsetMint",(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),o=(0,a.createAsyncThunk)("mints/deleteMint",(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),l=(0,a.createSlice)({name:r,initialState:{},reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},58851:(e,t,s)=>{s.d(t,{ZP:()=>m});var a=s(19289),n=s(95418),r=s(3007),d=s(60980);const{register:{senreg:i,extra:o}}=d.Z,l=(e,t)=>t&&Array.isArray(t)?t.filter((t=>e[t])):[],c="page",u={register:{},appIds:[]},h=(0,a.createAsyncThunk)("page/loadRegister",(async()=>({register:{...await(async()=>{try{const e=await fetch(i);return await e.json()}catch(e){return{}}})(),...o}}))),p=(0,a.createAsyncThunk)("page/installManifest",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:r,register:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(r.includes(e.appId))throw new Error("Cannot run sandbox for an installed application.");const i=[...r];i.push(e.appId);const o={...d};return o[e.appId]=e,{appIds:i,register:o}})),f=(0,a.createAsyncThunk)("page/loadPage",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{register:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");const i=new r.Z(a).createInstance("sentre");return{appIds:l(d,await i.getItem("appIds")||u.appIds)}})),g=(0,a.createAsyncThunk)("page/updatePage",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{register:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");e=l(d,e);const i=new r.Z(a).createInstance("sentre");return await i.setItem("appIds",e),{appIds:e}})),w=(0,a.createAsyncThunk)("page/installApp",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(d.includes(e))return{};const i=[...d];i.push(e);const o=new r.Z(a).createInstance("sentre");return await o.setItem("appIds",i),{appIds:i}})),y=(0,a.createAsyncThunk)("page/uninstallApp",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(!d.includes(e))return{};const i=d.filter((t=>t!==e)),o=new r.Z(a),l=o.createInstance("sentre");return await l.setItem("appIds",i),await o.dropInstance(e),{appIds:i}})),m=(0,a.createSlice)({name:c,initialState:u,reducers:{},extraReducers:e=>{e.addCase(h.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(p.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(f.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(g.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(w.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(y.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},92871:(e,t,s)=>{s.d(t,{ZP:()=>u});var a=s(19289),n=s(95418),r=s(60980);const{sol:{taxmanAddress:d}}=r.Z,i="pools",o=(0,a.createAsyncThunk)("pools/getPools",(async()=>{const{swap:e}=window.sentre,t=await e.connection.getProgramAccounts(e.swapProgramId,{filters:[{dataSize:257},{memcmp:{bytes:d,offset:65}}]});let s={};return t.forEach((t=>{let{pubkey:a,account:{data:n}}=t;const r=a.toBase58(),d=e.parsePoolData(n);s[r]=d})),s})),l=(0,a.createAsyncThunk)("pools/getPool",(async(e,t)=>{let{address:s}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid pool address");const{pools:{[s]:r}}=a();if(r)return{[s]:r};const{swap:d}=window.sentre;return{[s]:await d.getPoolData(s)}})),c=(0,a.createAsyncThunk)("pools/upsetPool",(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid pool address");if(!s)throw new Error("Data is empty");return{[t]:s}})),u=(0,a.createSlice)({name:i,initialState:{},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},33361:(e,t,s)=>{s.d(t,{ZP:()=>l});var a=s(19289);const n="search",r=(0,a.createAsyncThunk)("search/setVisible",(async e=>({visible:e}))),d=(0,a.createAsyncThunk)("search/setValue",(async e=>({value:e}))),i=(0,a.createAsyncThunk)("search/setLoading",(async e=>({loading:e}))),o=(0,a.createAsyncThunk)("search/setDisabled",(async e=>({disabled:e}))),l=(0,a.createSlice)({name:n,initialState:{visible:!1,value:"",loading:!1,disabled:!1},reducers:{},extraReducers:e=>{e.addCase(r.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87482:(e,t,s)=>{s.d(t,{AY:()=>u,ZP:()=>h});var a=s(19289);const n=()=>{const e=window.innerWidth;return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"lg":e<1400?"xl":"xxl"},r="ui",d={theme:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",width:window.innerWidth,infix:n(),touchable:"ontouchstart"in window||navigator.maxTouchPoints>0,visibleActionCenter:!1,visibleInstaller:!1,background:{light:"",dark:""}},i=(0,a.createAsyncThunk)("ui/setTheme",(async e=>({theme:e}))),o=(0,a.createAsyncThunk)("ui/resize",(async()=>({width:window.innerWidth,infix:n()}))),l=(0,a.createAsyncThunk)("ui/setVisibleActionCenter",(async e=>({visibleActionCenter:e}))),c=(0,a.createAsyncThunk)("ui/setVisibleInstaller",(async e=>({visibleInstaller:e}))),u=(0,a.createAsyncThunk)("ui/setBackground",(async e=>({background:e}))),h=(0,a.createSlice)({name:r,initialState:d,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},51865:(e,t,s)=>{s.d(t,{ZP:()=>o});var a=s(19289);let n;!function(e){e[e.Default=0]="Default",e[e.NewComer=1]="NewComer"}(n||(n={}));const r="walkthrough",d={type:n.Default,run:!1,step:0},i=(0,a.createAsyncThunk)(`${r}/setWalkthrough`,(async e=>({...e}))),o=(0,a.createSlice)({name:r,initialState:d,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},21028:(e,t,s)=>{s.d(t,{ZP:()=>f});var a=s(19289),n=s(95418),r=s(60980);const d=async e=>{const{sol:{node:t,spltAddress:s,splataAddress:a,swapAddress:d}}=r.Z;window.sentre={wallet:e,lamports:new n.Lamports(t),splt:new n.SPLT(s,a,t),swap:new n.Swap(d,s,a,t)}},i="wallet",o={visible:!1,address:"",lamports:BigInt(0)},l=(0,a.createAsyncThunk)("wallet/openWallet",(async()=>({visible:!0}))),c=(0,a.createAsyncThunk)("wallet/closeWallet",(async()=>({visible:!1}))),u=(0,a.createAsyncThunk)("wallet/connectWallet",(async e=>{if(!e)throw new Error("Invalid wallet instance");await d(e);const t=await e.getAddress(),s=await window.sentre.lamports.getLamports(t);return{address:t,lamports:BigInt(s),visible:!1}})),h=(0,a.createAsyncThunk)("wallet/updateWallet",(async e=>{let{lamports:t}=e;return{lamports:t}})),p=(0,a.createAsyncThunk)("wallet/disconnectWallet",(async()=>{await(async()=>{var e;null!==(e=window.sentre)&&void 0!==e&&e.wallet&&window.sentre.wallet.disconnect(),await d(void 0)})(),window.location.reload()})),f=(0,a.createSlice)({name:i,initialState:o,reducers:{},extraReducers:e=>{e.addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(h.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(p.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer}}]);
//# sourceMappingURL=39.64d5614c.chunk.js.map