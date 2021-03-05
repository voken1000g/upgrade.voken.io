(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6,7,8,9,12,14,17,19],{210:function(t,e,n){"use strict";n.r(e);var r={name:"TxInfo",props:["status","hash","confirmation","message"],computed:{fast:function(){return this.$store.state.fast},txInfoClassArr:function(){var t=["tx-info"];return 0===this.status?t.push("tx-info-pending"):1===this.status?t.push("tx-info-confirming"):2===this.status?t.push("tx-info-success"):this.status>2&&t.push("tx-info-error"),t},statusDisplay:function(){return 0===this.status?"Pending...":1===this.status?"Confirming... "+this.confirmation+" blocks":2===this.status?"Success > "+this.confirmation+" blocks":this.status>2?"Error":void 0},hashDisplay:function(){return this.hash?this.hash:"..."}}},o=(n(214),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:"number"==typeof t.status&&t.status>=0,expression:"typeof status === 'number' && status >= 0"}],staticClass:"space-x-2",class:t.txInfoClassArr},[r("div",{staticClass:"w-1/4 flex items-center justify-center"},[0===t.status?r("img",{staticClass:"w-20 h-20",attrs:{src:n(212),alt:"spinner"}}):t._e(),t._v(" "),1===t.status?r("img",{staticClass:"w-20 h-20",attrs:{src:n(213),alt:"spinner"}}):2===t.status?r("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","check-square"]}}):t.status>2?r("fa",{staticClass:"mx-5 fa-3x",attrs:{icon:["fas","times-circle"]}}):t._e()],1),t._v(" "),r("div",{staticClass:"w-full pt-3 pb-4"},[r("div",{staticClass:"tx-title"},[t._v("\n      "+t._s(t.statusDisplay)+"\n    ")]),t._v(" "),t.hash?r("div",{staticClass:"tx-hash"},[t._v("\n      "+t._s(t.hash)+"\n    ")]):t._e(),t._v(" "),t.message?r("div",{staticClass:"tx-message"},[t._v("\n      "+t._s(t.message)+"\n    ")]):t._e()])])}),[],!1,null,"550e5e06",null);e.default=component.exports},211:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("4e95739c",content,!0,{sourceMap:!1})},212:function(t,e,n){t.exports=n.p+"img/spinner-gray.a51bfce.svg"},213:function(t,e,n){t.exports=n.p+"img/spinner-blue.f7f11e6.svg"},214:function(t,e,n){"use strict";n(211)},215:function(t,e,n){var r=n(44)(!1);r.push([t.i,".tx-info[data-v-550e5e06]{display:flex;align-items:center;padding-left:.5rem;padding-right:1.25rem;border-radius:.5rem;text-align:left}.tx-info-pending[data-v-550e5e06]{--bg-opacity:1;background-color:#252f3f;background-color:rgba(37,47,63,var(--bg-opacity));--text-opacity:1;color:#f9fafb;color:rgba(249,250,251,var(--text-opacity))}.tx-info-confirming[data-v-550e5e06]{--bg-opacity:1;background-color:#1a56db;background-color:rgba(26,86,219,var(--bg-opacity));--text-opacity:1;color:#ebf5ff;color:rgba(235,245,255,var(--text-opacity))}.tx-info-success[data-v-550e5e06]{--bg-opacity:1;background-color:#046c4e;background-color:rgba(4,108,78,var(--bg-opacity));--text-opacity:1;color:#f3faf7;color:rgba(243,250,247,var(--text-opacity))}.tx-info-error[data-v-550e5e06]{--bg-opacity:1;background-color:#c81e1e;background-color:rgba(200,30,30,var(--bg-opacity));--text-opacity:1;color:#fdf2f2;color:rgba(253,242,242,var(--text-opacity))}.tx-title[data-v-550e5e06]{font-weight:700;font-size:1.25rem}.tx-hash[data-v-550e5e06]{margin-top:.25rem;word-break:break-all}.tx-message[data-v-550e5e06]{margin-top:.5rem;padding-top:.5rem;border-top-width:1px;--border-opacity:1;border-color:#d2d6dc;border-color:rgba(210,214,220,var(--border-opacity));font-size:.875rem;word-break:break-all}",""]),t.exports=r},216:function(t,e,n){"use strict";n.r(e);var r=n(105),o={name:"UpgradeProcess",data:function(){return{fn:r.a}},computed:{vokenUpgradedCap:function(){return"21000000000000000"}}},c=n(17),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-md font-mono text-white text-center pointer-events-none"},[n("div",{staticClass:"font-sans font-hairline text-lg"},[t._v("\n    Upgrade Progress\n  ")]),t._v(" "),n("div",{staticClass:"mt-6"},[n("div",{staticClass:"font-bold"},[n("span",{staticClass:"text-4xl"},[t._v(t._s(t.$store.state.status.processInPercent.toFixed(2)))]),n("span",{staticClass:"text-2xl"},[t._v("%")])]),t._v(" "),n("div",[t._v("\n      completed\n    ")])]),t._v(" "),n("div",{staticClass:"mt-10 text-sm text-pink-100"},[t._v("\n    Totally 21,000,000 VokenTB for upgrade\n  ")])])}),[],!1,null,"124d9912",null);e.default=component.exports},217:function(t,e,n){"use strict";n.r(e);var r={name:"DeadlineCountdown"},o=n(17),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.notForTheAddress?t._e():n("div",{staticClass:"mt-8 py-6 font-mono text-center text-gray-600"},[n("div",{staticClass:"text-xl"},[t._v("\n    "+t._s(t.$t("The_deadline_for_apply_is"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4"},[t._v("\n    "+t._s(this.$moment(1e3*t.$store.state.status.deadline))+"\n  ")]),t._v(" "),t.$moment(1e3*t.$store.state.status.deadline).diff((new Date).getTime(),"days")<30?n("div",{staticClass:"mt-2"},[t._v("\n    "+t._s(t.$store.state.deadlineCountdown.d)+" days\n    "+t._s(t.$store.state.deadlineCountdown.hh)+":"+t._s(t.$store.state.deadlineCountdown.mm)+":"+t._s(t.$store.state.deadlineCountdown.ss)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,n){"use strict";n.r(e);var r={name:"NotForTheAddress",computed:{notForTheAddress:function(){return 0===this.$store.state.accountStatus.v1ResaleAppliedTimestamp&&0===this.$store.state.accountStatus.v1UpgradeAppliedTimestamp&&0===this.$store.state.accountStatus.v2ResaleAppliedTimestamp&&0===this.$store.state.accountStatus.v2UpgradeAppliedTimestamp&&this.$store.state.accountStatus.v1Balance.eq(0)&&this.$store.state.accountStatus.v2Balance.eq(0)}}},o=n(17),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-12 py-6 px-4 bg-gray-700 text-center"},[n("div",{staticClass:"text-lg text-white"},[t._v("\n    This program does not work for your address\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 text-sm text-gray-300"},[t._v("\n    "+t._s(t.$store.state.account)+"\n  ")])])}),[],!1,null,"c5f41cd8",null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);n(15);var r=n(4),o=n(105),c={name:"V1ResaleStatus",components:{TxInfo:n(210).default},data:function(){return{fn:o.a,showBtn:!0,txStatus:-1,txHash:null,txConfirmation:0,txMessage:null}},computed:{v1Balance:function(){return o.a.amountDisplay(this.$store.state.accountStatus.v1Balance,6)},v1USDQuota:function(){return o.a.amountDisplay(this.$store.state.v1ResaleStatus.usdQuota,6)},v1USDAudit:function(){return o.a.amountDisplay(this.$store.state.v1ResaleStatus.usdAudit,6)},v1USDClaimed:function(){return o.a.amountDisplay(this.$store.state.v1ResaleStatus.usdClaimed,6)},totalResaleUSD:function(){return o.a.amountDisplay(this.$store.state.status.usdAudit,6)},resaleUSDPOT:function(){return this.$store.state.v1ResaleStatus.usdAudit.div(this.$store.state.status.usdAudit).multipliedBy(100).toFixed(6)}},methods:{claimV1USD:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.showBtn=!1,t.txStatus=0,t.txMessage=null,t.$store.state.upgradeContract().methods.claimV1USD().send({from:t.$store.state.account}).on("transactionHash",t.onTransactionHash).on("receipt",t.onReceipt).on("confirmation",t.onConfirmation).on("error",t.onError);case 4:case"end":return e.stop()}}),e)})))()},onTransactionHash:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txStatus=0,e.txHash=t;case 2:case"end":return n.stop()}}),n)})))()},onReceipt:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txMessage=null,t.status?e.txStatus=1:e.txStatus=3;case 2:case"end":return n.stop()}}),n)})))()},onConfirmation:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.txStatus<3&&t<16)){n.next=19;break}if(!(t<6)){n.next=5;break}e.txStatus=1,n.next=18;break;case 5:if(!(t>=6&&t<10)){n.next=9;break}e.txStatus=2,n.next=18;break;case 9:return e.txStatus=2,n.next=12,e.$store.state.dApp.getSummary();case 12:return n.next=14,e.$store.state.dApp.getStatus();case 14:return n.next=16,e.$store.state.dApp.getV1ResaleStatus();case 16:return n.next=18,e.$store.state.dApp.getV1UpgradeStatus();case 18:e.txConfirmation=t;case 19:case"end":return n.stop()}}),n)})))()},onError:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txStatus=3,e.txMessage=t.message,e.showBtn=!0;case 3:case"end":return n.stop()}}),n)})))()}}},l=n(17),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8 py-6 px-4 bg-gray-50 text-center"},[n("div",{staticClass:"pi"},[t._v("\n    "+t._s(t.$moment(1e3*t.$store.state.v1ResaleStatus.timestamp).fromNow())+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("you_ve_successfully_applied_for_resale"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v1Balance))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("Voken1.0")])]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("to_get"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-2 font-bold text-2xl text-gray-800"},[t._v("\n    $"+t._s(t.v1USDAudit.toFixed(6))+" USD\n  ")]),t._v(" "),n("div",{staticClass:"pi"},[t._v("\n    "+t._s(t.$t("_higher_than_the_audited_cost_"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-8 pi"},[t._v("\n    "+t._s(t.$t("proportion_of_the_total_resale"))+" $"+t._s(t.totalResaleUSD)+" USD\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[t._v("\n    "+t._s(t.resaleUSDPOT)+"%\n  ")]),t._v(" "),t.v1USDClaimed.gt(0)||t.v1USDQuota.gt(0)||t.txStatus>=0?n("div",{staticClass:"mt-12 border-t border-gray-300"},[t.v1USDClaimed.gt(0)?n("div",[n("div",{staticClass:"mt-4 pi"},[t._v("\n        "+t._s(t.$t("you_ve_already_claimed"))+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v1USDClaimed.toFixed(6)))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("USD")])])]):t._e(),t._v(" "),t.v1USDQuota.gt(0)?n("div",[n("div",{staticClass:"mt-4 pi"},[t._v("\n        "+t._s(t.$t("now_you_can"))+"\n      ")]),t._v(" "),t.showBtn?n("button",{staticClass:"mt-6 btn text-lg",on:{click:t.claimV1USD}},[t._v("\n        "+t._s(t.$t("Claim"))+" "+t._s(t.v1USDQuota)+" USD\n      ")]):t._e()]):t._e(),t._v(" "),n("tx-info",{staticClass:"mt-6 mx-6",attrs:{status:t.txStatus,hash:t.txHash,confirmation:t.txConfirmation,message:t.txMessage}})],1):n("div",[n("div",{staticClass:"mt-4 pt-6 pi border-t"},[t._v("\n      "+t._s(t.$t("You_could_claim_ETH_during_the_VokenTB_sale_progress"))+"\n    ")])])])}),[],!1,null,"aa87a0ca",null);e.default=component.exports;installComponents(component,{TxInfo:n(210).default})},220:function(t,e,n){"use strict";n.r(e);var r=n(105),o={name:"V1UpgradeStatus",computed:{v1Balance:function(){return r.a.amountDisplay(this.$store.state.accountStatus.v1Balance,6)},v1WeiAudit:function(){return r.a.amountDisplay(this.$store.state.v1UpgradeStatus.weiAudit,18)},v1EtherUSDPrice:function(){return r.a.amountDisplay(this.$store.state.v1UpgradeStatus.etherUSDPrice,6,3)},v1VokenUSDPrice:function(){return r.a.amountDisplay(this.$store.state.v1UpgradeStatus.vokenUSDPrice,6,3)},v1USDUpgrade:function(){return r.a.amountDisplay(this.$store.state.v1UpgradeStatus.weiAudit.multipliedBy(this.$store.state.v1UpgradeStatus.etherUSDPrice).div(Math.pow(10,18)),6,3)},v1Claim:function(){return r.a.amountDisplay(this.$store.state.v1UpgradeStatus.claim,9,3)},v1Bonus:function(){return r.a.amountDisplay(this.$store.state.v1UpgradeStatus.bonus,9,3)},v1Total:function(){return r.a.amountDisplay(this.$store.state.v1UpgradeStatus.claim.plus(this.$store.state.v1UpgradeStatus.bonus),9,3)},v1POT35B:function(){return r.a.amountDisplay(this.$store.state.accountStatus.v1Balance,6).div(350*Math.pow(10,9)).multipliedBy(100).toFixed(6)},vokenTbPOT210M:function(){return this.$store.state.v1UpgradeStatus.claim.plus(this.$store.state.v1UpgradeStatus.bonus).div(Math.pow(10,9)).div(210*Math.pow(10,4)).toFixed(6)}}},c=n(17),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8 py-6 px-4 bg-gray-50 text-center"},[n("div",{staticClass:"pi"},[t._v("\n    "+t._s(t.$moment(1e3*t.$store.state.v1UpgradeStatus.timestamp).fromNow())+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("you_ve_successfully_upgraded"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v1Balance))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("Voken1.0")])]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("POT35B"))+"\n  ")]),t._v(" "),n("div",{staticClass:"pv"},[t._v("\n    "+t._s(t.v1POT35B)+"%\n  ")]),t._v(" "),n("div",{staticClass:"-mt-1 pr-4 pi text-right"},[t._v("\n    "+t._s(t.$t("previous"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("upgraded_for"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v1WeiAudit))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("ETH")])]),t._v(" "),n("div",{staticClass:"-mt-1 pr-4 pi text-right"},[t._v("\n    "+t._s(t.$t("audited_cost"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("upgraded_at"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v1EtherUSDPrice))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("USD/ETH")])]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("received"))+" $"+t._s(t.v1EtherUSDPrice)+" x "+t._s(t.v1WeiAudit)+" / "+t._s(t.v1VokenUSDPrice)+" =\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v1Claim))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("VokenTB")])]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("word_and"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v1Bonus))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("VokenTB")])]),t._v(" "),n("div",{staticClass:"-mt-1 pr-4 pi text-right"},[t._v("\n    "+t._s(t.$t("as_bonuses"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("Totally"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-2 font-bold text-2xl text-gray-800"},[t._v("\n    "+t._s(t.v1Total)+" VokenTB\n  ")]),t._v(" "),n("div",{staticClass:"mt-12 border-t border-gray-300"}),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    >>> "+t._s(t.$t("new_POT21M"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[t._v("\n    "+t._s(t.vokenTbPOT210M)+"%\n  ")])])}),[],!1,null,"46b1c816",null);e.default=component.exports},221:function(t,e,n){"use strict";n.r(e);n(15);var r=n(4),o=n(105),c={name:"V2ResaleStatus",components:{TxInfo:n(210).default},data:function(){return{fn:o.a,showBtn:!0,txStatus:-1,txHash:null,txConfirmation:0,txMessage:null}},computed:{v2Balance:function(){return o.a.amountDisplay(this.$store.state.accountStatus.v2Balance,6)},v2USDQuota:function(){return o.a.amountDisplay(this.$store.state.v2ResaleStatus.usdQuota,6)},v2USDAudit:function(){return o.a.amountDisplay(this.$store.state.v2ResaleStatus.usdAudit,6)},v2USDClaimed:function(){return o.a.amountDisplay(this.$store.state.v2ResaleStatus.usdClaimed,6)},totalResaleUSD:function(){return o.a.amountDisplay(this.$store.state.status.usdAudit,6)},resaleUSDPOT:function(){return this.$store.state.v2ResaleStatus.usdAudit.div(this.$store.state.status.usdAudit).multipliedBy(100).toFixed(6)}},methods:{claimV2USD:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.showBtn=!1,t.txStatus=0,t.txMessage=null,t.$store.state.upgradeContract().methods.claimV2USD().send({from:t.$store.state.account}).on("transactionHash",t.onTransactionHash).on("receipt",t.onReceipt).on("confirmation",t.onConfirmation).on("error",t.onError);case 4:case"end":return e.stop()}}),e)})))()},onTransactionHash:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txStatus=0,e.txHash=t;case 2:case"end":return n.stop()}}),n)})))()},onReceipt:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txMessage=null,t.status?e.txStatus=1:e.txStatus=3;case 2:case"end":return n.stop()}}),n)})))()},onConfirmation:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.txStatus<3&&t<16)){n.next=19;break}if(!(t<6)){n.next=5;break}e.txStatus=1,n.next=18;break;case 5:if(!(t>=6&&t<10)){n.next=9;break}e.txStatus=2,n.next=18;break;case 9:return e.txStatus=2,n.next=12,e.$store.state.dApp.getSummary();case 12:return n.next=14,e.$store.state.dApp.getStatus();case 14:return n.next=16,e.$store.state.dApp.getV2ResaleStatus();case 16:return n.next=18,e.$store.state.dApp.getV2UpgradeStatus();case 18:e.txConfirmation=t;case 19:case"end":return n.stop()}}),n)})))()},onError:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.txStatus=3,e.txMessage=t.message,e.showBtn=!0;case 3:case"end":return n.stop()}}),n)})))()}}},l=n(17),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8 py-6 px-4 bg-indigo-100 text-center"},[n("div",{staticClass:"pi"},[t._v("\n    "+t._s(t.$moment(1e3*t.$store.state.v2ResaleStatus.timestamp).fromNow())+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("you_ve_successfully_applied_for_resale"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v2Balance))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("Voken2.0")])]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("to_get"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-2 font-bold text-2xl text-indigo-800"},[t._v("\n    $"+t._s(t.v2USDAudit.toFixed(6))+" USD\n  ")]),t._v(" "),n("div",{staticClass:"pi"},[t._v("\n    "+t._s(t.$t("_higher_than_the_audited_cost_"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-8 pi"},[t._v("\n    "+t._s(t.$t("proportion_of_the_total_resale"))+" $"+t._s(t.totalResaleUSD)+" USD\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[t._v("\n    "+t._s(t.resaleUSDPOT)+"%\n  ")]),t._v(" "),t.v2USDClaimed.gt(0)||t.v2USDQuota.gt(0)||t.txStatus>=0?n("div",{staticClass:"mt-12 border-t border-gray-300"},[t.v2USDClaimed.gt(0)?n("div",[n("div",{staticClass:"mt-4 pi"},[t._v("\n        "+t._s(t.$t("you_ve_already_claimed"))+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v2USDClaimed.toFixed(6)))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("USD")])])]):t._e(),t._v(" "),t.v2USDQuota.gt(0)?n("div",[n("div",{staticClass:"mt-4 pi"},[t._v("\n        "+t._s(t.$t("now_you_can"))+"\n      ")]),t._v(" "),t.showBtn?n("button",{staticClass:"mt-6 btn text-lg",on:{click:t.claimV2USD}},[t._v("\n        "+t._s(t.$t("Claim"))+" "+t._s(t.v2USDQuota)+" USD\n      ")]):t._e()]):t._e(),t._v(" "),n("tx-info",{staticClass:"mt-6 mx-6",attrs:{status:t.txStatus,hash:t.txHash,confirmation:t.txConfirmation,message:t.txMessage}})],1):n("div",[n("div",{staticClass:"mt-4 pt-6 pi border-t"},[t._v("\n      "+t._s(t.$t("You_could_claim_ETH_during_the_VokenTB_sale_progress"))+"\n    ")])])])}),[],!1,null,"68d2a7b9",null);e.default=component.exports;installComponents(component,{TxInfo:n(210).default})},222:function(t,e,n){"use strict";n.r(e);var r=n(105),o={name:"V2UpgradeStatus",computed:{v2Balance:function(){return r.a.amountDisplay(this.$store.state.accountStatus.v2Balance,6)},v2POT35B:function(){return this.v2Balance.div(35*Math.pow(10,7)).toFixed(6)},v2WeiAudit:function(){return r.a.amountDisplay(this.$store.state.v2UpgradeStatus.weiAudit,18)},v2EtherUSDPrice:function(){return r.a.amountDisplay(this.$store.state.v2UpgradeStatus.etherUSDPrice,6,3)},v2VokenUSDPrice:function(){return r.a.amountDisplay(this.$store.state.v2UpgradeStatus.vokenUSDPrice,6,3)},v2USDUpgrade:function(){return r.a.amountDisplay(this.$store.state.v2UpgradeStatus.weiAudit.multipliedBy(this.$store.state.v2UpgradeStatus.etherUSDPrice).div(Math.pow(10,18)),6,3)},v2Claim:function(){return r.a.amountDisplay(this.$store.state.v2UpgradeStatus.claim,9,3)},v2Bonus:function(){return r.a.amountDisplay(this.$store.state.v2UpgradeStatus.bonus,9,3)},v2Total:function(){return r.a.amountDisplay(this.$store.state.v2UpgradeStatus.claim.plus(this.$store.state.v2UpgradeStatus.bonus),9,3)},vokenTbPOT210M:function(){return this.$store.state.v2UpgradeStatus.claim.plus(this.$store.state.v2UpgradeStatus.bonus).div(Math.pow(10,9)).div(210*Math.pow(10,4)).toFixed(6)}}},c=n(17),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8 py-6 px-4 bg-indigo-100 text-center"},[n("div",{staticClass:"pi"},[t._v("\n    "+t._s(t.$moment(1e3*t.$store.state.v2UpgradeStatus.timestamp).fromNow())+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("you_ve_successfully_upgraded"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v2Balance))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("Voken2.0")])]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("POT35B"))+"\n  ")]),t._v(" "),n("div",{staticClass:"pv"},[t._v("\n    "+t._s(t.v2POT35B)+"%\n  ")]),t._v(" "),n("div",{staticClass:"-mt-1 pr-4 pi text-right"},[t._v("\n    "+t._s(t.$t("previous"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("upgraded_for"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v2WeiAudit))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("ETH")])]),t._v(" "),n("div",{staticClass:"-mt-1 pr-4 pi text-right"},[t._v("\n    "+t._s(t.$t("audited_cost"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("upgraded_at"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v2EtherUSDPrice))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("USD/ETH")])]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("received"))+" $"+t._s(t.v2EtherUSDPrice)+" x "+t._s(t.v2WeiAudit)+" / "+t._s(t.v2VokenUSDPrice)+" =\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v2Claim))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("VokenTB")])]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("word_and"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[n("span",[t._v(t._s(t.v2Bonus))]),t._v(" "),n("span",{staticClass:"text-lg"},[t._v("VokenTB")])]),t._v(" "),n("div",{staticClass:"-mt-1 pr-4 pi text-right"},[t._v("\n    "+t._s(t.$t("as_bonuses"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    "+t._s(t.$t("Totally"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-2 font-bold text-2xl text-indigo-800"},[t._v("\n    "+t._s(t.v2Total)+" VokenTB\n  ")]),t._v(" "),n("div",{staticClass:"mt-12 border-t border-indigo-300"}),t._v(" "),n("div",{staticClass:"mt-4 pi"},[t._v("\n    >>> "+t._s(t.$t("new_POT21M"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-1 pv"},[t._v("\n    "+t._s(t.vokenTbPOT210M)+"%\n  ")])])}),[],!1,null,"56e38cb6",null);e.default=component.exports},227:function(t,e,n){var content=n(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("2041dded",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";n(227)},241:function(t,e,n){var r=n(44)(!1);r.push([t.i,".portal-card[data-v-764061f2]{margin-top:2rem;margin-left:1rem;margin-right:1rem;display:flex;justify-content:center;align-items:center;padding:3rem 1.5rem;border-width:1px;border-color:transparent;border-radius:.375rem;line-height:1.5rem;font-weight:700;font-size:1.5rem;--text-opacity:1;color:#f0f5ff;color:rgba(240,245,255,var(--text-opacity));@qpply transition duration-150 ease-in-out}.portal-card[data-v-764061f2]:hover{background-image:linear-gradient(to bottom right,var(--gradient-color-stops));--gradient-from-color:#6875f5;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(104,117,245,0));--gradient-to-color:#5850ec;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.portal-card[data-v-764061f2]:focus{outline:2px solid transparent;outline-offset:2px;--border-opacity:1;border-color:#5850ec;border-color:rgba(88,80,236,var(--border-opacity))}.portal-card[data-v-764061f2]:active{--bg-opacity:1;background-color:#5850ec;background-color:rgba(88,80,236,var(--bg-opacity))}.a-info[data-v-764061f2]{padding-bottom:.5rem;padding-left:.5rem;padding-right:.5rem;--text-opacity:1;color:#3f83f8;color:rgba(63,131,248,var(--text-opacity))}.a-info[data-v-764061f2]:hover{border-bottom-width:1px;--border-opacity:1;border-color:#1c64f2;border-color:rgba(28,100,242,var(--border-opacity));--text-opacity:1;color:#1c64f2;color:rgba(28,100,242,var(--text-opacity))}",""]),t.exports=r},247:function(t,e,n){"use strict";n.r(e);n(15);var r,o=n(4),c=n(105),l=n(219),v=n(220),d=n(221),_=n(222),m=n(217),f=n(218),x={name:"index",layout:"dapp",components:{UpgradeProcess:n(216).default,NotForTheAddress:f.default,DeadlineCountdown:m.default,V2UpgradeStatus:_.default,V2ResaleStatus:d.default,V1UpgradeStatus:v.default,V1ResaleStatus:l.default},mounted:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.state.dApp.getV1ResaleStatus();case 2:return t.next=4,this.$store.state.dApp.getV1UpgradeStatus();case 4:return t.next=6,this.$store.state.dApp.getV2ResaleStatus();case 6:return t.next=8,this.$store.state.dApp.getV2UpgradeStatus();case 8:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),computed:{showV1Portal:function(){return 0===this.$store.state.accountStatus.v1ResaleAppliedTimestamp&&0===this.$store.state.accountStatus.v1UpgradeAppliedTimestamp&&this.$store.state.accountStatus.v1Balance.gt(0)},showV2Portal:function(){return 0===this.$store.state.accountStatus.v2ResaleAppliedTimestamp&&0===this.$store.state.accountStatus.v2UpgradeAppliedTimestamp&&this.$store.state.accountStatus.v2Balance.gt(0)},v1Balance:function(){return c.a.amountDisplay(this.$store.state.accountStatus.v1Balance,6)},v2Balance:function(){return c.a.amountDisplay(this.$store.state.accountStatus.v2Balance,6)}}},h=(n(240),n(17)),component=Object(h.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-12"},[n("div",{staticClass:"px-4"},[n("h1",{staticClass:"font-light text-3xl text-gray-700 text-center tracking-tight"},[t._v("\n      Voken "+t._s(t.$t("Resale_or_Update_Program"))+"\n    ")]),t._v(" "),n("div",{staticClass:"mt-3 font-mono text-xs text-gray-500 text-center break-all"},[t._v("\n      "+t._s(t.$store.state.upgradeContractAdds)+"\n    ")])]),t._v(" "),t.$store.state.account?n("div",{staticClass:"mt-12"},[t.showV1Portal||t.showV2Portal?n("deadline-countdown"):t._e(),t._v(" "),n("upgrade-process",{staticClass:"mx-4"}),t._v(" "),t.$store.state.notForTheAddress?n("not-for-the-address",{staticClass:"mx-4"}):t._e(),t._v(" "),t.$store.state.accountStatus.v1ResaleAppliedTimestamp>0?n("div",[n("v1-resale-status",{staticClass:"mx-4"})],1):t._e(),t._v(" "),t.$store.state.accountStatus.v1UpgradeAppliedTimestamp>0?n("div",[n("v1-upgrade-status",{staticClass:"mx-4"})],1):t._e(),t._v(" "),t.showV1Portal?n("div",[n("nuxt-link",{staticClass:"portal-card bg-gradient-to-br from-gray-600 to-gray-700",attrs:{to:t.localePath("/v1")}},[t._v("\n        "+t._s(t.$t("Portal"))+" for Voken1.0\n      ")])],1):t._e(),t._v(" "),t.$store.state.accountStatus.v2ResaleAppliedTimestamp>0?n("div",[n("v2-resale-status",{staticClass:"mx-4"})],1):t._e(),t._v(" "),t.$store.state.accountStatus.v2UpgradeAppliedTimestamp>0?n("div",[n("v2-upgrade-status",{staticClass:"mx-4"})],1):t._e(),t._v(" "),t.showV2Portal?n("div",[n("nuxt-link",{staticClass:"portal-card bg-gradient-to-br from-indigo-600 to-indigo-700",attrs:{to:t.localePath("/v2")}},[t._v("\n        "+t._s(t.$t("Portal"))+" for Voken2.0\n      ")])],1):t._e(),t._v(" "),t.showV1Portal||t.showV2Portal?n("div",{staticClass:"mt-6 font-mono text-sm text-center"},[n("a",{staticClass:"a-info",attrs:{target:"_blank",href:t.$t("learn_upgrade.href")}},[n("fa",{attrs:{icon:["fas","info-circle"]}}),t._v("\n        "+t._s(t.$t("learn_upgrade.text"))+"\n      ")],1)]):t._e()],1):t._e()])}),[],!1,null,"764061f2",null);e.default=component.exports;installComponents(component,{DeadlineCountdown:n(217).default,UpgradeProcess:n(216).default,NotForTheAddress:n(218).default})}}]);