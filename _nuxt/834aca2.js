(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{204:function(t,e,r){"use strict";r.r(e);var n={name:"TxInfo",props:["status","hash","confirmation","message"],computed:{fast:function(){return this.$store.state.fast},txInfoClassArr:function(){var t=["tx-info"];return 0===this.status?t.push("tx-info-pending"):1===this.status?t.push("tx-info-confirming"):2===this.status?t.push("tx-info-success"):this.status>2&&t.push("tx-info-error"),t},statusDisplay:function(){return 0===this.status?"Pending...":1===this.status?"Confirming... "+this.confirmation+" blocks":2===this.status?"Success > "+this.confirmation+" blocks":this.status>2?"Error":void 0},hashDisplay:function(){return this.hash?this.hash:"..."}}},o=(r(208),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:"number"==typeof t.status&&t.status>=0,expression:"typeof status === 'number' && status >= 0"}],staticClass:"space-x-2",class:t.txInfoClassArr},[n("div",{staticClass:"w-1/4 flex items-center justify-center"},[0===t.status?n("img",{staticClass:"w-20 h-20",attrs:{src:r(206),alt:"spinner"}}):t._e(),t._v(" "),1===t.status?n("img",{staticClass:"w-20 h-20",attrs:{src:r(207),alt:"spinner"}}):2===t.status?n("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","check-square"]}}):t.status>2?n("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","times-circle"]}}):t._e()],1),t._v(" "),n("div",{staticClass:"w-full pt-3 pb-4"},[n("div",{staticClass:"tx-title"},[t._v("\n      "+t._s(t.statusDisplay)+"\n    ")]),t._v(" "),t.hash?n("div",{staticClass:"tx-hash"},[t._v("\n      "+t._s(t.hash)+"\n    ")]):t._e(),t._v(" "),t.message?n("div",{staticClass:"tx-message"},[t._v("\n      "+t._s(t.message)+"\n    ")]):t._e()])])}),[],!1,null,"550e5e06",null);e.default=component.exports},205:function(t,e,r){var content=r(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("4e95739c",content,!0,{sourceMap:!1})},206:function(t,e,r){t.exports=r.p+"img/spinner-gray.a51bfce.svg"},207:function(t,e,r){t.exports=r.p+"img/spinner-blue.f7f11e6.svg"},208:function(t,e,r){"use strict";r(205)},209:function(t,e,r){var n=r(45)(!1);n.push([t.i,".tx-info[data-v-550e5e06]{display:flex;align-items:center;padding-left:.5rem;padding-right:1.25rem;border-radius:.5rem;text-align:left}.tx-info-pending[data-v-550e5e06]{--bg-opacity:1;background-color:#252f3f;background-color:rgba(37,47,63,var(--bg-opacity));--text-opacity:1;color:#f9fafb;color:rgba(249,250,251,var(--text-opacity))}.tx-info-confirming[data-v-550e5e06]{--bg-opacity:1;background-color:#1a56db;background-color:rgba(26,86,219,var(--bg-opacity));--text-opacity:1;color:#ebf5ff;color:rgba(235,245,255,var(--text-opacity))}.tx-info-success[data-v-550e5e06]{--bg-opacity:1;background-color:#046c4e;background-color:rgba(4,108,78,var(--bg-opacity));--text-opacity:1;color:#f3faf7;color:rgba(243,250,247,var(--text-opacity))}.tx-info-error[data-v-550e5e06]{--bg-opacity:1;background-color:#c81e1e;background-color:rgba(200,30,30,var(--bg-opacity));--text-opacity:1;color:#fdf2f2;color:rgba(253,242,242,var(--text-opacity))}.tx-title[data-v-550e5e06]{font-weight:700;font-size:1.25rem}.tx-hash[data-v-550e5e06]{margin-top:.25rem;word-break:break-all}.tx-message[data-v-550e5e06]{margin-top:.5rem;padding-top:.5rem;border-top-width:1px;--border-opacity:1;border-color:#d2d6dc;border-color:rgba(210,214,220,var(--border-opacity));font-size:.875rem;word-break:break-all}",""]),t.exports=n},224:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(13),r(109)),c={name:"V1Resale",components:{TxInfo:r(204).default},data:function(){return{fn:o.a,showBtn:!0,txStatus:-1,txHash:null,txConfirmation:0,txMessage:null}},computed:{resaleEtherUSDPrice:function(){return o.a.amountDisplay(this.$store.state.status.resaleEtherUSDPrice,6)},v1WeiAudit:function(){return o.a.amountDisplay(this.$store.state.v1UpgradeStatus.weiAudit,18)},v1USDResale:function(){return o.a.amountDisplay(this.$store.state.v1UpgradeStatus.weiAudit.multipliedBy(this.$store.state.status.resaleEtherUSDPrice).div(Math.pow(10,18)),6,3)}},methods:{applyV1Resale:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showBtn=!1,t.txStatus=0,t.txMessage=null,e.next=5,t.$store.state.upgradeContract().methods.applyV1Resale().send({from:t.$store.state.account}).on("transactionHash",t.onTransactionHash).on("receipt",t.onReceipt).on("confirmation",t.onConfirmation).on("error",t.onError);case 5:case"end":return e.stop()}}),e)})))()},onTransactionHash:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.txStatus=0,e.txHash=t;case 2:case"end":return r.stop()}}),r)})))()},onReceipt:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.txMessage=null,t.status?e.txStatus=1:e.txStatus=3;case 2:case"end":return r.stop()}}),r)})))()},onConfirmation:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e.txStatus<3&&t<16)){r.next=17;break}if(!(t<6)){r.next=5;break}e.txStatus=1,r.next=16;break;case 5:if(!(t>=6&&t<10)){r.next=9;break}e.txStatus=2,r.next=16;break;case 9:return e.txStatus=2,r.next=12,e.$store.state.dApp.getStatus();case 12:return r.next=14,e.$store.state.dApp.getAccountStatus();case 14:return r.next=16,e.$store.state.dApp.getV1ResaleStatus();case 16:e.txConfirmation=t;case 17:case"end":return r.stop()}}),r)})))()},onError:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.txStatus=3,e.txMessage=t.message,e.showBtn=!0;case 3:case"end":return r.stop()}}),r)})))()}}},l=r(16),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mt-8 px-2 font-sans font-bold text-xl text-gray-800 text-left"},[t._v("\n    "+t._s(t.$t("Option1"))+" "+t._s(t.$t("Apply4resale"))+"\n  ")]),t._v(" "),r("div",{staticClass:"mt-2 py-1 px-4 bg-gray-300 rounded-t-md text-gray-500 text-right"},[t._v("\n    1 ETH = "+t._s(t.resaleEtherUSDPrice)+" USD "+t._s(t.$t("_Fixed_"))+"\n  ")]),t._v(" "),r("div",{staticClass:"py-6 bg-gray-100"},[r("div",{staticClass:"pi"},[t._v("\n      "+t._s(t.$t("The_price_of_ETH_was"))+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-2 pi"},[t._v("\n      "+t._s(t.$t("if_you_take_this_option_to_apply_for_resale"))+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-2 pi"},[t._v("\n      "+t._s(t.$t("it_will_be_priced_at"))+" "+t._s(t.resaleEtherUSDPrice)+" USD "+t._s(t.$t("_higher_"))+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-2 pi"},[t._v("\n      "+t._s(t.$t("so_you_can_get"))+" $"+t._s(t.resaleEtherUSDPrice)+" x "+t._s(t.v1WeiAudit)+" =\n    ")]),t._v(" "),r("div",{staticClass:"mt-2 font-bold text-2xl text-gray-800"},[t._v("\n      $"+t._s(t.v1USDResale)+" USD\n    ")]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"mt-6 btn text-lg",on:{click:t.applyV1Resale}},[t._v("\n      "+t._s(t.$t("Apply4Resale"))+"\n    ")]),t._v(" "),r("tx-info",{staticClass:"mt-6 mx-6",attrs:{status:t.txStatus,hash:t.txHash,confirmation:t.txConfirmation,message:t.txMessage}}),t._v(" "),r("div",{staticClass:"mt-6 pi"},[t._v("\n      "+t._s(t.$t("then_you_could_claim_USD_during_the_VokenTB_sale_progress"))+"\n    ")])],1)])}),[],!1,null,"2d91269d",null);e.default=component.exports;installComponents(component,{TxInfo:r(204).default})}}]);