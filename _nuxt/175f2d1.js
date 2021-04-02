(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{810:function(e,t,r){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.aesDecrypt=t.aesEncrypt=t.getValidSecret=t.decodeHex=t.remove0x=void 0;var o=r(83),c=n(r(169));function f(e){return e.startsWith("0x")||e.startsWith("0X")?e.slice(2):e}t.remove0x=f,t.decodeHex=function(t){return e.from(f(t),"hex")},t.getValidSecret=function(){var e;do{e=o.randomBytes(32)}while(!c.default.privateKeyVerify(e));return e},t.aesEncrypt=function(t,r){var n=o.randomBytes(16),c=o.createCipheriv("aes-256-gcm",t,n),f=e.concat([c.update(r),c.final()]),l=c.getAuthTag();return e.concat([n,l,f])},t.aesDecrypt=function(t,r){var n=r.slice(0,16),c=r.slice(16,32),f=r.slice(32),l=o.createDecipheriv("aes-256-gcm",t,n);return l.setAuthTag(c),e.concat([l.update(f),l.final()])}}).call(this,r(7).Buffer)},811:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.utils=t.PublicKey=t.PrivateKey=t.decrypt=t.encrypt=void 0;var n=r(812),o=r(810);t.encrypt=function(t,r){var c=new n.PrivateKey,f=t instanceof e?new n.PublicKey(t):n.PublicKey.fromHex(t),l=c.encapsulate(f),d=o.aesEncrypt(l,r);return e.concat([c.publicKey.uncompressed,d])},t.decrypt=function(t,r){var c=t instanceof e?new n.PrivateKey(t):n.PrivateKey.fromHex(t),f=new n.PublicKey(r.slice(0,65)),l=r.slice(65),d=f.decapsulate(c);return o.aesDecrypt(d,l)};var c=r(812);Object.defineProperty(t,"PrivateKey",{enumerable:!0,get:function(){return c.PrivateKey}}),Object.defineProperty(t,"PublicKey",{enumerable:!0,get:function(){return c.PublicKey}}),t.utils={aesDecrypt:o.aesDecrypt,aesEncrypt:o.aesEncrypt,decodeHex:o.decodeHex,getValidSecret:o.getValidSecret,remove0x:o.remove0x}}).call(this,r(7).Buffer)},812:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PublicKey=t.PrivateKey=void 0;var o=r(818);Object.defineProperty(t,"PrivateKey",{enumerable:!0,get:function(){return n(o).default}});var c=r(814);Object.defineProperty(t,"PublicKey",{enumerable:!0,get:function(){return n(c).default}})},813:function(e,t,r){"use strict";(function(t){const{createHash:n,createHmac:o}=r(83),c={},f=e=>{switch(e){case"sha256":return 32;case"sha512":return 64;case"sha224":return 28;case"sha384":return 48;case"sha3-256":return 32;case"sha3-512":return 64;case"sha3-224":return 28;case"sha3-384":return 48;case"blake2s256":return 32;case"blake2b512":return 64;case"sha1":return 20;case"md5":return 16;default:{let t=c[e];return void 0===t&&(t=n(e).digest().length,c[e]=t),t}}},l=(e,r,n,c)=>{const f=t.isBuffer(n)?n:t.from(n),l=c&&c.length?t.from(c):t.alloc(r,0);return o(e,l).update(f).digest()},d=(e,r,n,c,f)=>{const l=t.from(f||""),d=l.length,m=Math.ceil(c/r);if(m>255)throw new Error(`OKM length ${c} is too long for ${e} hash`);const h=t.alloc(r*m+d+1);for(let t=1,c=0,f=0;t<=m;++t)l.copy(h,f),h[f+d]=t,o(e,n).update(h.slice(c,f+d+1)).digest().copy(h,f),c=f,f+=r;return h.slice(0,c)};function m(e,t,{salt:r="",info:n="",hash:o="SHA-256"}={}){o=o.toLowerCase().replace("-","");const c=f(o),m=l(o,c,e,r);return d(o,c,m,t,n)}Object.defineProperties(m,{hash_length:{configurable:!1,enumerable:!1,writable:!1,value:f},extract:{configurable:!1,enumerable:!1,writable:!1,value:l},expand:{configurable:!1,enumerable:!1,writable:!1,value:d}}),e.exports=m}).call(this,r(7).Buffer)},814:function(e,t,r){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(813)),c=n(r(169)),f=r(810),l=function(){function t(t){this.uncompressed=e.from(c.default.publicKeyConvert(t,!1)),this.compressed=e.from(c.default.publicKeyConvert(t,!0))}return t.fromHex=function(r){var n=f.decodeHex(r);if(64===n.length){var o=e.from([4]);return new t(e.concat([o,n]))}return new t(n)},t.prototype.toHex=function(e){return void 0===e&&(e=!0),e?this.compressed.toString("hex"):this.uncompressed.toString("hex")},t.prototype.decapsulate=function(t){var r=e.concat([this.uncompressed,t.multiply(this)]);return o.default(r,32,{hash:"SHA-256"})},t.prototype.equals=function(e){return this.uncompressed.equals(e.uncompressed)},t}();t.default=l}).call(this,r(7).Buffer)},816:function(e,t,r){(function(t){const n=r(244),o=r(83),c="aes-256-ctr";e.exports={encrypt:function(data,e){if((Array.isArray(data)||data instanceof Uint8Array)&&(data=t.from(data)),!t.isBuffer(data))throw new TypeError("Expected Buffer");if((Array.isArray(e)||e instanceof Uint8Array)&&(e=t.from(e)),!t.isBuffer(e))throw new TypeError("Expected Buffer");const r=n.sha384(e),f=o.createCipheriv(c,r.slice(0,32),r.slice(32,48)),l=f.update(data);return t.concat([l,f.final()])},decrypt:function(data,e){if((Array.isArray(data)||data instanceof Uint8Array)&&(data=t.from(data)),!t.isBuffer(data))throw new TypeError("Expected Buffer");if((Array.isArray(e)||e instanceof Uint8Array)&&(e=t.from(e)),!t.isBuffer(e))throw new TypeError("Expected Buffer");const r=n.sha384(e),f=o.createDecipheriv(c,r.slice(0,32),r.slice(32,48)),l=f.update(data);return t.concat([l,f.final()])}}}).call(this,r(7).Buffer)},817:function(e,t,r){(function(t){const n=r(84).ec,o=r(811).encrypt,c=r(811).decrypt,f=new n("secp256k1"),l=function(e,t){return o(t,e)},d=function(e,t){return c(t,e)},m=function(e,r){const n=f.keyFromPrivate(r);return t.from(n.sign(e).toDER())},h=function(e,t,r){return f.keyFromPublic(r).verify(e,t)};e.exports={encrypt:l,decrypt:d,sign:m,verify:h,encryptWithPublicKey:l,decryptWithPrivateKey:d,signByPrivateKey:m,verifySignatureWithPublicKey:h}}).call(this,r(7).Buffer)},818:function(e,t,r){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(813)),c=n(r(169)),f=r(810),l=n(r(814)),d=function(){function t(t){if(this.secret=t||f.getValidSecret(),!c.default.privateKeyVerify(this.secret))throw new Error("Invalid private key");this.publicKey=new l.default(e.from(c.default.publicKeyCreate(this.secret)))}return t.fromHex=function(e){return new t(f.decodeHex(e))},t.prototype.toHex=function(){return"0x"+this.secret.toString("hex")},t.prototype.encapsulate=function(t){var r=e.concat([this.publicKey.uncompressed,this.multiply(t)]);return o.default(r,32,{hash:"SHA-256"})},t.prototype.multiply=function(t){return e.from(c.default.publicKeyTweakMul(t.compressed,this.secret,!1))},t.prototype.equals=function(e){return this.secret.equals(e.secret)},t}();t.default=d}).call(this,r(7).Buffer)},820:function(e,t,r){"use strict";(function(e){r(51),r(18),r(38),r(39);var n=r(170),o=r.n(n),c=r(40),f=r.n(c),l=r(816),d=r.n(l),m=r(168),h=r.n(m),y=r(817),v=r.n(y),D=r(36);t.a={name:"decodes",layout:"indigoWaveClear",components:{VueAvatar:D.a},head:function(){return{title:this.$t("nav.Messenger")}},data:function(){return{base32:h.a,fromData:"",fromDataSig:e.from(""),fromDataPublicKey:e.from(""),fromDataAddress:"",fromDataDecrypted:e.from(""),fromDataError:""}},watch:{fromData:function(){this.fromData||(this.fromDataError="")}},computed:{bufFromDataDecoded:function(){if(this.fromData)try{var t=h.a.decode(this.fromData);return this.fromDataError="",t}catch(e){this.fromDataError="[Base32 Decode Error] "+e.message}return e.from("")},bufFromDataKey:function(){return this.bufFromDataDecoded.length>0?this.bufFromDataDecoded.slice(0,20):e.from("")},bufFromDataBodyEncrypted:function(){return this.bufFromDataKey.length>0?this.bufFromDataDecoded.slice(20):e.from("")},bufFromDataBody:function(){return this.bufFromDataBodyEncrypted.length>0?d.a.decrypt(this.bufFromDataBodyEncrypted,this.bufFromDataKey):e.from("")},intFromDataSigLength:function(){if(this.bufFromDataKey.length>0)try{var e=this.bufFromDataBody.slice(0,1).toString("hex"),t=parseInt(e,16);return this.fromDataError="",t}catch(e){this.fromDataError="[Parse Error] Cannot parse signature length: "+e.message}return 0},bufFromDataSig:function(){if(this.intFromDataSigLength>0)try{var t=this.bufFromDataBody.slice(1,1+this.intFromDataSigLength);return this.fromDataError="",t}catch(e){this.fromDataError="[Slice Error] Cannot parse signature: "+e.message}return e.from("")},bufFromDataPublicKey:function(){if(this.bufFromDataBody.length>0)try{var t=this.bufFromDataBody.slice(1+this.intFromDataSigLength,1+this.intFromDataSigLength+33);return this.fromDataError="",t}catch(e){this.fromDataError="[Slice Error] Cannot parse sender's Public Key body: "+e.message}return e.from("")},strFromDataPublicKey:function(){if(33===this.bufFromDataPublicKey.length)try{var e=o.a.toVPub(this.bufFromDataPublicKey);return this.fromDataError="",e}catch(e){this.fromDataError="[Public Key Error] Cannot convert sender's Public Key: "+e.message}return""},boolFromDataSigVerified:function(){if(this.bufFromDataPublicKey.length>0)try{var e=v.a.verify(this.bufFromDataKey,this.bufFromDataSig,this.bufFromDataPublicKey);return this.fromDataError="",e}catch(e){this.fromDataError="[Verify Signature Error] "+e.message}return!1},strFromDataSig:function(){if(this.boolFromDataSigVerified>0)try{var t=h.a.encode(this.bufFromDataSig);return this.fromDataError="",t}catch(e){this.fromDataError="[Encode Error] Cannot encode the signature of the message: "+e.message}return e.from("")},strFromDataAddress:function(){if(33===this.bufFromDataPublicKey.length)try{var e=f.a.fromPublicKey(this.bufFromDataPublicKey);return this.fromDataError="",e}catch(e){this.fromDataError="[Address Error] Cannot convert sender's Address: "+e.message}return""},bufFromDataOriginalData:function(){if(this.bufFromDataBody.length>0)try{var t=this.bufFromDataBody.slice(1+this.intFromDataSigLength+33);return this.fromDataError="",t}catch(e){this.fromDataError="[Slice Error] Cannot parse original message body: "+e.message}return e.from("")}}}}).call(this,r(7).Buffer)},827:function(e,t,r){var content=r(839);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("735c02b2",content,!0,{sourceMap:!1})},838:function(e,t,r){"use strict";r(827)},839:function(e,t,r){var n=r(24)((function(i){return i[1]}));n.push([e.i,".decode[data-v-797883b0]{\n  background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from:#f3faf7;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(243, 250, 247, 0));\n  --tw-gradient-to:#7edce2;\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}",""]),e.exports=n},875:function(e,t,r){"use strict";r.r(t);var n=r(820).a,o=(r(838),r(3)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resp-wide pb-12"},[r("article",{staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[r("h1",[e._v("\n      "+e._s(e.$t("nav.Messenger_Decode"))+"\n    ")]),e._v(" "),r("p",[e._v("\n      "+e._s(e.$t("messenger.You_can_decode_and_verify__"))+"\n    ")])]),e._v(" "),r("div",{staticClass:"my-6 border-t"}),e._v(" "),r("div",{staticClass:"decode mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 lg:py-10 px-2 sm:px-4"},[r("h2",{staticClass:"font-bold text-2xl text-gray-700 text-center"},[e._v("\n      "+e._s(e.$t("messenger.Decrypt__Verify_A_Message"))+"\n    ")]),e._v(" "),r("div",{staticClass:"w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0"},[r("div",{staticClass:"w-full",class:{error:e.fromData&&e.fromDataError}},[r("label",{staticClass:"text-sm",attrs:{for:"from_message"}},[e._v("\n          "+e._s(e.$t("messenger.From_encode_data"))+"\n        ")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.fromData,expression:"fromData"}],staticClass:"textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none",attrs:{id:"from_message",rows:"10",placeholder:e.$t("messenger.Input_the_encoded_data__")},domProps:{value:e.fromData},on:{input:function(t){t.target.composing||(e.fromData=t.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.fromDataError,expression:"fromDataError"}],staticClass:"ml-2 font-bold text-red-700"},[e._v("\n          "+e._s(e.fromDataError)+"\n        ")])]),e._v(" "),e.bufFromDataOriginalData.length>0?r("div",{staticClass:"w-full"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.boolFromDataSigVerified,expression:"boolFromDataSigVerified"}],staticClass:"pt-6 pb-2 break-all"},[r("div",{staticClass:"w-14 h-14 mx-auto bg-white rounded-md shadow-md"},[r("vue-avatar",{attrs:{value:e.strFromDataAddress}})],1),e._v(" "),r("div",{staticClass:"mt-4 mx-auto"},[r("div",{staticClass:"text-sm text-gray-500 text-center"},[e._v("\n              "+e._s(e.strFromDataAddress)+"\n            ")]),e._v(" "),r("div",{staticClass:"py-4 px-6 font-bold text-gray-700 break-all"},[e._v("\n              "+e._s(e.bufFromDataOriginalData.toString())+"\n            ")])])])]):e._e()]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.boolFromDataSigVerified,expression:"boolFromDataSigVerified"}],staticClass:"mt-10 lg:mt-4 px-4 flex text-green-600 space-x-4 font-mono"},[r("fa",{staticClass:"text-3xl",attrs:{icon:["fas","signature"]}}),e._v(" "),r("div",[r("div",[e._v("\n          "+e._s(e.$t("messenger.Signature_Verification_Passed_"))+"\n        ")]),e._v(" "),r("div",{staticClass:"mt-1 text-xs md:text-sm break-all"},[e._v("\n          "+e._s(e.strFromDataSig)+"\n        ")])])],1)])])}),[],!1,null,"797883b0",null);t.default=component.exports}}]);