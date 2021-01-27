/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fb02195e88639ce78578f34f4ea201a7"
  },
  {
    "url": "about/index.html",
    "revision": "b4e41835505dc2c39dab8ad01ee31dd5"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "e27fc0680286e75d342b9047a6dbe4d8"
  },
  {
    "url": "assets/css/0.styles.0c4463c2.css",
    "revision": "f77df4eca1dde83c1477df436e7e787e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1fce3b4c.js",
    "revision": "688a18e5095f7021595e04e4e9298836"
  },
  {
    "url": "assets/js/11.edc42c6b.js",
    "revision": "86514a9a42f8c7e8962f526c4fa6eeb9"
  },
  {
    "url": "assets/js/12.a274e9a9.js",
    "revision": "9aaba4322696195da528602b5eb55531"
  },
  {
    "url": "assets/js/13.46edabe3.js",
    "revision": "44849ab6e6295327f42a5678d0bd236a"
  },
  {
    "url": "assets/js/14.ad34bd8f.js",
    "revision": "2918dd7b89e33211247c23d394e139e7"
  },
  {
    "url": "assets/js/15.1c768d38.js",
    "revision": "5584da67a066fc8e11c04115d2ec296f"
  },
  {
    "url": "assets/js/16.8814a26b.js",
    "revision": "f974bca1ce7117e3059c6817ca320598"
  },
  {
    "url": "assets/js/17.ffdce01e.js",
    "revision": "7bb343c240360726065b8254340b9ac5"
  },
  {
    "url": "assets/js/18.dd12d508.js",
    "revision": "1e0628c76e31c77ac50d81f09eb9f5af"
  },
  {
    "url": "assets/js/19.3e8e4114.js",
    "revision": "44b4f65f6ab1a13f201c23429c64ea23"
  },
  {
    "url": "assets/js/2.4e42a02a.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.d21982f4.js",
    "revision": "f8dd81678e36d26f263c990e66692df0"
  },
  {
    "url": "assets/js/21.1d601dac.js",
    "revision": "a918494d7b09992c24fd8b2a0d44ae58"
  },
  {
    "url": "assets/js/22.4a3ba178.js",
    "revision": "c3bdc618dd27910217b5755e0c0ce2e4"
  },
  {
    "url": "assets/js/23.0521cfd4.js",
    "revision": "8a864531dc212a4d4367cd6b1fada5de"
  },
  {
    "url": "assets/js/24.16c4f68c.js",
    "revision": "e855446af185ad2b873f3fcf2a870eea"
  },
  {
    "url": "assets/js/25.2bfa119e.js",
    "revision": "5b2d2f6d11e566ed448c05bbdbb26b89"
  },
  {
    "url": "assets/js/26.5490fd0e.js",
    "revision": "33e5d9c34cd2b4c21e4533bae86abbd3"
  },
  {
    "url": "assets/js/27.3699bd1c.js",
    "revision": "c40ef5c199d643c2da9fa84f6e7d66d0"
  },
  {
    "url": "assets/js/28.93ccb26d.js",
    "revision": "e0493be54867030bc8731c3304002b17"
  },
  {
    "url": "assets/js/29.e26cab88.js",
    "revision": "9784e9d1dcd804c53475fd2f66c6d50a"
  },
  {
    "url": "assets/js/3.6ca462bb.js",
    "revision": "d3ce94bf8de970ad56fab0cfc0d86a03"
  },
  {
    "url": "assets/js/30.5395d4f6.js",
    "revision": "b1bd8b337376dc4b5525abd068437d18"
  },
  {
    "url": "assets/js/31.56d5797e.js",
    "revision": "47eedcd4da868db6c91049910fa444c8"
  },
  {
    "url": "assets/js/32.e8cb88e7.js",
    "revision": "6d19de3b975c683ebb5ab12bcd70454c"
  },
  {
    "url": "assets/js/33.f4505c12.js",
    "revision": "303416fecbe340985967802b84f5bec1"
  },
  {
    "url": "assets/js/34.43e1c26a.js",
    "revision": "5d4064d202284a178f214559c20decd2"
  },
  {
    "url": "assets/js/35.77b53bd0.js",
    "revision": "fa6a88577a6a0c5d46b60407ccf723b4"
  },
  {
    "url": "assets/js/36.73c464bf.js",
    "revision": "7615cc55b8b34e0ca289c519e090fe99"
  },
  {
    "url": "assets/js/37.009f8e23.js",
    "revision": "2bfb28877632524048162bd8b0711396"
  },
  {
    "url": "assets/js/38.2766a67a.js",
    "revision": "63b1c78a2ca5367bc57fe9d146c385b2"
  },
  {
    "url": "assets/js/39.adfe4f8f.js",
    "revision": "314f41741a141288414d70913f1abd26"
  },
  {
    "url": "assets/js/4.ddcb6ce2.js",
    "revision": "f4487b2b8265cd0b19abeac449f796c1"
  },
  {
    "url": "assets/js/40.52f87468.js",
    "revision": "a5267fe3354c192727119194fcff70cd"
  },
  {
    "url": "assets/js/41.74c48781.js",
    "revision": "861bd87113b4997c7a5109e5c269eae5"
  },
  {
    "url": "assets/js/42.5b2436e1.js",
    "revision": "7a3d49f7ddbf2faf453af9588c0f5bc0"
  },
  {
    "url": "assets/js/43.acea9a9e.js",
    "revision": "2a7090cafd008914d9f4ef9ab2045b95"
  },
  {
    "url": "assets/js/44.05d50a39.js",
    "revision": "cf55adb7295daef817855b397fa22fc1"
  },
  {
    "url": "assets/js/45.6a7d9122.js",
    "revision": "b853643bcb3cc1bf2bad169a509555ec"
  },
  {
    "url": "assets/js/46.5ddec0c0.js",
    "revision": "f95ca812909db360542f0a69bb55e915"
  },
  {
    "url": "assets/js/47.7846ff6c.js",
    "revision": "ef0d39ad723a0759026ac4551bbfd6a0"
  },
  {
    "url": "assets/js/48.f2b45ee8.js",
    "revision": "103923b1799b1cb54915d51905d3532e"
  },
  {
    "url": "assets/js/49.ef9ee211.js",
    "revision": "9b77bee88a56df3b09814d346e208b5f"
  },
  {
    "url": "assets/js/5.91065d62.js",
    "revision": "d3732dae7a4531bc698c8690abf48d89"
  },
  {
    "url": "assets/js/50.6c5fd422.js",
    "revision": "979832665402af342bc2ab83b84ef873"
  },
  {
    "url": "assets/js/51.17c142fd.js",
    "revision": "6b59fc4e92cda19ec391e50792d4a4e8"
  },
  {
    "url": "assets/js/52.3775c9af.js",
    "revision": "fa5fdb286de3465562cb332bec62ca28"
  },
  {
    "url": "assets/js/53.6694aa1c.js",
    "revision": "7c4d0975f6c8e810862641de1d8ea7d3"
  },
  {
    "url": "assets/js/54.02634025.js",
    "revision": "4235fbcbbf31d63c625799ba7a63d7ef"
  },
  {
    "url": "assets/js/55.dd77b141.js",
    "revision": "79c3a6aca63b20282f56c1d0170add0f"
  },
  {
    "url": "assets/js/56.4deefad0.js",
    "revision": "0c5b31c9bb5a3e876ed63e6b813d0fbc"
  },
  {
    "url": "assets/js/57.c8628a35.js",
    "revision": "ebd344963ced44205ce443468d2363a2"
  },
  {
    "url": "assets/js/58.baa436e2.js",
    "revision": "9a26c4b91dacb409218b640ddf5ec327"
  },
  {
    "url": "assets/js/59.31071afa.js",
    "revision": "fdaf4d7622bf762c6432f9576b9b293f"
  },
  {
    "url": "assets/js/6.19174fec.js",
    "revision": "f44fb6053a8d4de381b63299cade2066"
  },
  {
    "url": "assets/js/60.7e3aac9a.js",
    "revision": "d1a1ab6cfb282db034eaddaddc5a2970"
  },
  {
    "url": "assets/js/61.30ded1b0.js",
    "revision": "0ef422aa5ab407dff1fc1c0152db1a4e"
  },
  {
    "url": "assets/js/62.4b43b357.js",
    "revision": "f874dd027de0bd6ca1af86df1d5e23be"
  },
  {
    "url": "assets/js/63.0161daf2.js",
    "revision": "9fe7bc647d19124e2ce7534d8809d7df"
  },
  {
    "url": "assets/js/64.7d1d8cee.js",
    "revision": "a67b5a090785ce1bc38b4f22c133b3d7"
  },
  {
    "url": "assets/js/65.b2f07650.js",
    "revision": "ca281600031953c401d2085ec9289449"
  },
  {
    "url": "assets/js/66.d21d99d9.js",
    "revision": "5fd55f5c0346ea3767655b194400505f"
  },
  {
    "url": "assets/js/7.07d81dbc.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.b3174f9c.js",
    "revision": "59243d6c6103e623ab10231929015d7b"
  },
  {
    "url": "assets/js/9.c200f19a.js",
    "revision": "c991605250d6f9422699eff1cac1584d"
  },
  {
    "url": "assets/js/app.33973c41.js",
    "revision": "671d32d1015ec41f6635c4137e2ae605"
  },
  {
    "url": "css3/css3.html",
    "revision": "b4d9f528d0645a043fd7daf104a9385d"
  },
  {
    "url": "ES6/babel编译.html",
    "revision": "7657853ec4d716fecbb40c6ffa8fb960"
  },
  {
    "url": "ES6/class类.html",
    "revision": "ca0fb8e2324f012dfc721b5ef241cce9"
  },
  {
    "url": "ES6/let&&const.html",
    "revision": "b9da1f2bf9b608ee91bad1bbe8ba59dd"
  },
  {
    "url": "ES6/map.html",
    "revision": "bf6d1235d8809ea4d0323de427973135"
  },
  {
    "url": "ES6/Promise.html",
    "revision": "79e91c27692f03a5cca9c6fa0c157d32"
  },
  {
    "url": "ES6/rest.html",
    "revision": "04b063d1fdce58df45f805ed202f7fc9"
  },
  {
    "url": "ES6/set.html",
    "revision": "9b6634b95029dd80cef050ed61a0938f"
  },
  {
    "url": "ES6/webpack编译.html",
    "revision": "067ab9dc7ec15ff7c3ebcd0f7419b43e"
  },
  {
    "url": "ES6/字符串扩展.html",
    "revision": "6279e39b8ba846b6852b70d83547fa3c"
  },
  {
    "url": "ES6/对象扩展.html",
    "revision": "1b179fa25c441d7313e5e4ff0e28999d"
  },
  {
    "url": "ES6/数值扩展.html",
    "revision": "92082de02da6efde17a086fac41cf336"
  },
  {
    "url": "ES6/模块化.html",
    "revision": "e80a8314da6e05acb528b82dbdeba40f"
  },
  {
    "url": "ES6/箭头函数.html",
    "revision": "ba8c7402092a6a0660dcda3eace51ae8"
  },
  {
    "url": "ES6/解构赋值.html",
    "revision": "287908647c91a28f42442216589b891b"
  },
  {
    "url": "ES6/起步.html",
    "revision": "4d517c3e50d0b66a0fb10193257ba3be"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1437578e46e173bd9ce22938c5dc32bd"
  },
  {
    "url": "flex/flex.html",
    "revision": "d758f31b8116c3f91436080d420593d1"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "cca39abf22280ff4e887edfeec1daf6b"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "d08cbe2651824fe17bb0337e43db1859"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "0f6f608cbf97d00aeba2c8074fb49987"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "f0e4e87353ca723c8476d3c6f708c89f"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "da49417621c7ed2d40fd370200fdad05"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "7999a7ec354851ab19e83bf9f656763f"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "3be4378e5bf8ef97e7540cb752c65d0a"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "d007ed24371f5ee4ed5a5c2a3cccdea4"
  },
  {
    "url": "index.html",
    "revision": "562401e75a636b195db532b879bc090c"
  },
  {
    "url": "javascript/Date对象&&定时器.html",
    "revision": "ab4798282cbd4a68a2768b53805dd55f"
  },
  {
    "url": "javascript/Dom继承树.html",
    "revision": "06cf14ca78ed8a17d85d65d45628a9ab"
  },
  {
    "url": "javascript/DOM起步.html",
    "revision": "2e0856944baf7f052ba564ddb3e12208"
  },
  {
    "url": "javascript/index.html",
    "revision": "b47f11e474972db014e66cfc99cc3b88"
  },
  {
    "url": "javascript/json异步加载.html",
    "revision": "591085fed4b8978005aea789db708662"
  },
  {
    "url": "javascript/this.html",
    "revision": "17309bb6e986ff4fd89b51da10d13003"
  },
  {
    "url": "javascript/trycatch.html",
    "revision": "38d0065a463807a434c4adf805a6c9a5"
  },
  {
    "url": "javascript/typeof类型转换.html",
    "revision": "089f340bea84f33a283e9801e221a273"
  },
  {
    "url": "javascript/主流浏览器.html",
    "revision": "8911c24f9fffefa4764a1350b4886c65"
  },
  {
    "url": "javascript/事件.html",
    "revision": "9d4a5bc79651dc879d800423ba6214c4"
  },
  {
    "url": "javascript/作用域.html",
    "revision": "6384ae64f5072e1db4edfc1fb916aa4f"
  },
  {
    "url": "javascript/克隆&&数组.html",
    "revision": "f8f25108861e9b81d8296e14f49d1822"
  },
  {
    "url": "javascript/函数.html",
    "revision": "df1800f3d22bc95d0f19d2f076c0d85a"
  },
  {
    "url": "javascript/函数小练习.html",
    "revision": "9ce1cfaf70d425a6acdfa7f61e91f99e"
  },
  {
    "url": "javascript/原型原型链.html",
    "revision": "96c9cb92820b92336220ef5cab44766e"
  },
  {
    "url": "javascript/变量.html",
    "revision": "bc84666e1f7b56cbd593167311885ef6"
  },
  {
    "url": "javascript/对象包装类.html",
    "revision": "aa602bb21fa37687989a6312016f0787"
  },
  {
    "url": "javascript/总结复习篇.html",
    "revision": "8b832fbce4482e05966b86e7fe55c02d"
  },
  {
    "url": "javascript/数组对象.html",
    "revision": "5478142791ee715fe39d4a7af6090868"
  },
  {
    "url": "javascript/条件语句循环语句.html",
    "revision": "3a23805fc9a2e6b74d244fc58b259ed4"
  },
  {
    "url": "javascript/正则表达式.html",
    "revision": "1ecac0f9a566498ef64226acbb68f81f"
  },
  {
    "url": "javascript/立即执行函数.html",
    "revision": "b7ed79eba4028bb01ef946e829ccb83b"
  },
  {
    "url": "javascript/继承模式对象枚举.html",
    "revision": "f88659be43705f08a16f9208ec30678a"
  },
  {
    "url": "javascript/获取窗口尺寸.html",
    "revision": "6cb062509276ffdf266c9f76213fc494"
  },
  {
    "url": "javascript/运算操作符.html",
    "revision": "5f2a6f7c7798cb28b0dc1f37742d7160"
  },
  {
    "url": "javascript/运算符小练习.html",
    "revision": "e03f3534beb14498bacb10a47d8e3da5"
  },
  {
    "url": "javascript/选择器&&节点树.html",
    "revision": "f23b5be81139e62f7f1a421a7064694c"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "fd6e8c47897d4c69324c9408d4b4b9ce"
  },
  {
    "url": "javascript/预编译.html",
    "revision": "31fdc7ab978e944d4f30f9ce4f949b65"
  },
  {
    "url": "jQuery/jQuery.html",
    "revision": "966d00d81a8924ff38b9fdfa0ec3271a"
  },
  {
    "url": "less/less.html",
    "revision": "625859abfe2822a726bcda3f3fe7755d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "mei.png",
    "revision": "54c9dcad48aff68e5ee6dac5e790cdbf"
  },
  {
    "url": "mine/index.html",
    "revision": "cb3d8fc169d665a00c9505c217b62c69"
  },
  {
    "url": "react/react.html",
    "revision": "bc9c6d76196728dfbef6c9d3ad2b24e9"
  },
  {
    "url": "react/redux.html",
    "revision": "5e0fd34e6bb1d26ef3e95b0ed83b70c2"
  },
  {
    "url": "rem/rem.html",
    "revision": "ebff08721a2c8eaeb2fe1ae98c1746bc"
  },
  {
    "url": "vue/Vue.js.html",
    "revision": "6c5d4d6d42cfcdf3354426e54cfbc329"
  },
  {
    "url": "vue/VueRouter.html",
    "revision": "1040666bbd31580aec52958554ed8a12"
  },
  {
    "url": "vue/Vuex.html",
    "revision": "110ea8f27dd2029a9179bd7b2c6859af"
  },
  {
    "url": "百分比/百分比.html",
    "revision": "1acf7fa99eaea2d5aa5f0ebcea60ed38"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
