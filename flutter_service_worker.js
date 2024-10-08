'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3653d824eb747c0012faf3a55ee545f5",
"version.json": "9f9cbb400ca9e5d449968d9b44c421d2",
"index.html": "26a3ed46ae3e2c7efcd1c4b47aec6bd3",
"/": "26a3ed46ae3e2c7efcd1c4b47aec6bd3",
"main.dart.js": "da59911093816d464827a22f75db0fb5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "88d5a340f32c26313f598a8f2aed6b0e",
"assets/images/news.png": "b19518b46eee26a382aece272a1c81b5",
"assets/images/slider.png": "3a9cec0f7172077d4818946e782fb799",
"assets/images/dashboard.png": "61c3c34ccbf94c208e48b03af7ae9ce8",
"assets/images/logo11.png": "fd55bbfc684fa831a125bc3a786b2bbb",
"assets/images/ipo5.png": "a2482b38fedc0fb080261acb34e489b1",
"assets/images/ipo7.png": "149f68f8860e2277f9fb2950436859c9",
"assets/images/deals.png": "3223e98edb3c577f7b0a6a384f6e800e",
"assets/images/ipo6.png": "9ec06cc7691df75eaabee04bd2d880ef",
"assets/images/times1.png": "89b51a33b5f7d1a518ecd397a040e085",
"assets/images/idea5.png": "d8dc14e8c87db7e7a4bf914e454f24f7",
"assets/images/logo8.png": "05e5a6f30d3456854840b4db30b12443",
"assets/images/sme3.png": "e130e5831febdb689f4ffd4a0e29194f",
"assets/images/slider6.png": "0ced3f1ecef3d5b9a0dd33c962ede6c5",
"assets/images/query5.png": "e8a96b7f8fcff9f82a88959c048e57b2",
"assets/images/slider5.png": "5c76844e14bd3bda4d3bc407ba72a590",
"assets/images/sme5.png": "479de5a8aa5b8bc6a95f4b01f24b5f5d",
"assets/images/idea1.png": "91dfad52f90472ec8ffd943a3e7d9f3e",
"assets/images/times4.png": "98cee457c2190c91d113fdbe3f175276",
"assets/images/query6.png": "3784725006ea6e4644e1a64765daa9c5",
"assets/images/sme4.png": "790459f8103245440b7d84b79e33e6b4",
"assets/images/times.png": "a058ffb9e57eb0c21b11147562eb1ec2",
"assets/images/notification5.png": "42f4db39673aa05a605ae2fa8248167a",
"assets/images/logo.png": "b5095599649e1043769b8d69c8df00ff",
"assets/images/notification6.png": "56c7775610550acbf82204af1e2805e0",
"assets/images/dashboard6.png": "e5573caeb6d6c95b7eab92612e69dec9",
"assets/images/news6.png": "44b90dda1144ed6921ddac4463b6a4d7",
"assets/images/bg1.jpg": "c48a1421dbde006d7d3296db44369cfc",
"assets/images/dashboard7.png": "4a41d63f4202b26b11b5c74b4f11c53a",
"assets/images/dashboard5.png": "c1dcb56a8a1367ab8fb75130241e89bd",
"assets/images/news5.png": "d627af2e32e287a34959b3b1570012f5",
"assets/images/idea.png": "a5df3abd0048e4627a4375fbf4ee7073",
"assets/images/query.png": "56dfe16435f3a227cb3eee30d6618f7f",
"assets/images/notification.png": "18a2495ca85b1349d0b23c25f8042a28",
"assets/images/deals6.png": "9c40cb433c082a8dc461e9663b230b9a",
"assets/images/deals5.png": "7f6b4915bcc28979a87f0cc5e3330dcb",
"assets/images/bg.jpg": "e3a42d3a6ee44340f55c469d07fca7a2",
"assets/AssetManifest.json": "3111df6fb74201b5c3ba0e249a322fca",
"assets/NOTICES": "c0ce1e0e1add2ec702afe6bbf44703e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7a949d8c4c360003c177da3c1730d31e",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4526ba2337a056ed664c9cdfdb128cb4",
"assets/fonts/MaterialIcons-Regular.otf": "0d88d70471638b82826c20724768b760",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
