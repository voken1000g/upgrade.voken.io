(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{633:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(9),n(35),n(313)),c=n.n(o),l=n(616),m=n(618),_={name:"onboard",components:{VueQr:c.a},data:function(){return{locationHref:location.href}},computed:{browser:function(){return Object(m.a)()},metaMaskOnBoardReady:function(){return"chrome"===this.browser.name||"firefox"===this.browser.name}},methods:{getMetaMask:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(new l.a).startOnboarding();case 2:case"end":return t.stop()}}),t)})))()}}},w=n(2),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resp-wide pb-72"},[n("div",{staticClass:"resp-mt mx-auto max-w-xl text-center"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n      "+t._s(t.$t("web3.Welcome_Onboard"))+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-4 sm:mt-6 lg:mt-10 px-2 sm:px-4 lg:px-6 leading-8 text-lg text-cool-gray-600 text-center"},[t._v("\n      "+t._s(t.$t("web3.Please_scan__"))+"\n      "),t.metaMaskOnBoardReady?n("span",[t._v("\n        "+t._s(t.$t("web3.or_install__Metamask__"))+"\n        "+t._s(t.browser.name.slice(0,1).toUpperCase()+t.browser.name.slice(1).toLowerCase())+"\n        "+t._s(t.$t("web3.browser"))+"\n      ")]):n("span",[t._v("\n        "+t._s(t.$t("web3.or_visit_from__"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"resp-mt flex items-center justify-center"},[n("div",{staticClass:"w-1/2"},[n("vue-qr",{staticClass:"border-cool-gray-300 border",attrs:{text:t.locationHref,size:640,margin:32,colorDark:"#27303f"}})],1)]),t._v(" "),n("div",{staticClass:"resp-mt mx-auto max-w-lg"},[t.metaMaskOnBoardReady?n("button",{staticClass:"w-full btn btn-pink justify-center py-3 text-lg",on:{click:t.getMetaMask}},[t._v("\n        "+t._s(t.$t("web3.Install"))+" MetaMask "+t._s(t.$t("web3.Extension"))+"\n      ")]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);