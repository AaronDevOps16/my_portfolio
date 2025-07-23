'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4ea2abbc1a69c047418f251d2364219f",
"assets/AssetManifest.bin.json": "af5b5277cd950862d36c745b57780ab0",
"assets/AssetManifest.json": "3ecb04f3fe7611ba019c34ff31b2281a",
"assets/assets/images/avatar.jpg": "888e74b3c88b38aa6c25f7ee3552668c",
"assets/assets/images/coffee/coffee_pos1.png": "a74b0eb72be68d8508e73986a2b09559",
"assets/assets/images/coffee/coffee_pos2.png": "9b3be1cded18c7d533b95edcdd1a2602",
"assets/assets/images/coffee/coffee_pos3.png": "4f43965458e89bcb8ae0b6f7e362e64b",
"assets/assets/images/coffee/coffee_pos4.png": "8bb430bd1038662a539d31ffaf5ed5fd",
"assets/assets/images/coffee/coffee_pos5.jpeg": "299dcae6dc71d10d02cf8745c0f33643",
"assets/assets/images/e_learning/learn1.jpg": "3b5e0949184811dea1b5288495c4944d",
"assets/assets/images/e_learning/learn10.jpg": "157113178bdcd4428095303ac88acd7c",
"assets/assets/images/e_learning/learn2.jpg": "24c37484fac9efeb1ae58c4d51613ce1",
"assets/assets/images/e_learning/learn3.jpg": "defd033cad2cdd5c12da2963adb51d05",
"assets/assets/images/e_learning/learn4.jpg": "e24f4c0c531f3c5b25c2a07b7e7c159d",
"assets/assets/images/e_learning/learn5.jpg": "1e84d0f59ac4be7db1b79e58a6935245",
"assets/assets/images/e_learning/learn6.jpg": "8459d2abda4835de5dd72558e48e4d1c",
"assets/assets/images/e_learning/learn7.jpg": "80db7e6fe95e8c38c1b1cd63c986bc0f",
"assets/assets/images/e_learning/learn8.jpg": "aac5725afebca5b38efac17eaf0f6506",
"assets/assets/images/e_learning/learn9.jpg": "2ceaa98b8a0d35f6d3878b9fd3fa0c15",
"assets/assets/images/folktales/folktales1.jpg": "054d1c8c94f3dc8b7d95d1270a574cf0",
"assets/assets/images/folktales/folktales10.jpg": "776ec2ab49c6a3ef11e0930e7fca9097",
"assets/assets/images/folktales/folktales11.jpg": "dfd39225eacaaec0e5bbeeb213419513",
"assets/assets/images/folktales/folktales12.jpg": "b74a7074aa9ca4840db7d3b9b17bf453",
"assets/assets/images/folktales/folktales2.jpg": "26c04c37313cc03e54caa90e6c6e8fb4",
"assets/assets/images/folktales/folktales3.jpg": "d69f82cb8939920a829463c8f37b76a9",
"assets/assets/images/folktales/folktales4.jpg": "299cf6d597344da66a38ddc262d9f404",
"assets/assets/images/folktales/folktales5.jpg": "668a843264169f57ca8d7672bbead764",
"assets/assets/images/folktales/folktales6.jpg": "04938586f1eabd9279865c22f8c81536",
"assets/assets/images/folktales/folktales7.jpg": "07e393d9c5de2ad91394e01123dd8d10",
"assets/assets/images/folktales/folktales8.jpg": "ab4b865eaf34d1e793710d6d6565abf5",
"assets/assets/images/folktales/folktales9.jpg": "e158d02e68dbb049161d9a4b8e02dffb",
"assets/assets/images/hospital/hospital1.jpg": "f6b788382f7b4a172fc2bd08c918a594",
"assets/assets/images/hospital/hospital2.jpg": "90fb6ab9c42941e9e01e470b7e1436ea",
"assets/assets/images/hospital/hospital3.jpg": "14f3091158fd931b8dc1f4d369127bcd",
"assets/assets/images/hospital/hospital4.jpg": "c4f010d5525f9711f51c6eb21464b3b0",
"assets/assets/images/hospital/hospital5.jpg": "cdd0c1e6480dbe96c7ea4f03821320ca",
"assets/assets/images/hospital/hospital6.jpg": "9aa49804f5a7df3eb465fa2342fe015b",
"assets/assets/images/hospital/hospital7.jpg": "bddad45117cdf0be92494514a2abf82e",
"assets/assets/images/hospital/hospital8.jpg": "dc53aa211bc0d14197cd1f834c3df913",
"assets/assets/images/hospital/hospital9.jpg": "8fbbee7875744a748669a3d0f2a244fe",
"assets/assets/images/pig/pig1.jpg": "8f7612859fd4855969371699f85cd81b",
"assets/assets/images/pig/pig2.jpg": "3e1964f469ca45d82c13e0a7a2a669eb",
"assets/assets/images/pig/pig3.jpg": "dcc7cecc88eb312f7e58a74f832452e9",
"assets/assets/images/pig/pig4.jpg": "bf751693cda2b218e01526a1abe63303",
"assets/assets/images/pig/pig5.jpg": "cae192d3453e505c26a4d237f7e298b3",
"assets/assets/images/pig/pig6.jpg": "fced537eda2ac7d7c6f9ed7136b10857",
"assets/assets/images/pig/pig7.jpg": "ef83671dd26c0ae3263e7427e8b9824b",
"assets/assets/images/profile.jpg": "64e7802b494b0d3e93a4cf07742c1008",
"assets/assets/images/profile2.jpg": "72e59b65eeaddebb36f9873cf4b6684d",
"assets/assets/images/tech_stack/canva_logo.jpg": "08216d28c477834f93081795a9c64ae9",
"assets/assets/images/tech_stack/capcut_logo.jpg": "53671109fba520c8210aba28a1d9a8b7",
"assets/assets/images/tech_stack/firebase.png": "d5c79b19b926ca37487d292097e0140f",
"assets/assets/images/tech_stack/java_logo.jpg": "9ff8dcb036310c0edda68b16d427a3ee",
"assets/assets/images/tech_stack/postman_logo.jpg": "6662732e21f6b9e769816f44b4b1ae4b",
"assets/assets/images/tech_stack/python_logo.jpg": "851c614e5656c52722522666c7eaa433",
"assets/assets/images/tech_stack/sql_logo.jpg": "c3d320f1e51490c0ab3e9c0f354c4d40",
"assets/assets/images/tech_stack/xml_logo.jpg": "a0b74bed78b51c3f17ef2d4ed32def88",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "af9d76f8601c4fdded952715c083ff59",
"assets/NOTICES": "75f8ae6a3837c6d5e63e1c10a0dfe476",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e86dd21e2585eb631e361d4ded129d8b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "56edc0d194a26934121e223924df46bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d352da1bcb72c6c5868f9704df0b99b",
"/": "4d352da1bcb72c6c5868f9704df0b99b",
"main.dart.js": "0c7c6ec5ba204d87be5b4240173d7991",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
