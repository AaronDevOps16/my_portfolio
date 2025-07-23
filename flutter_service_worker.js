'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
".git/config": "8c7030df4fe4c3530374ef093a15adca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "50ff0e61a1122f2896a914d2331d2530",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "738a92070db3bd2bccf7dbff46d9000f",
".git/logs/refs/heads/master": "738a92070db3bd2bccf7dbff46d9000f",
".git/logs/refs/remotes/origin/gh-pages": "cecb03dc0236d9823db7cd38e6cb0035",
".git/objects/03/ed370eedfcd03950c89368abb59dec061ab24c": "657c393474b3d5ef891f2fef4224434a",
".git/objects/0e/553c77262f19cac9301e93fcc9f98c0ed4c6d3": "b386e93e482d1bc064820d73467b7e8a",
".git/objects/16/f6218be742646dd8436500de80132eea2a4678": "963cb043482fd9a2c47abe385db1541a",
".git/objects/17/49a81a60e2f7d5f1f3dffebd080f3a107a9780": "d4daa0ee4b9c27c7fa903cdf832949de",
".git/objects/18/72f3a607a07279fd8c6e3dc5c30b29b4d6ca56": "241d56f1e47ac30b9f5af1a4f1d3d6bb",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/95216cf63ab4034610d5db0974a54426cd3c0a": "94246696daa9fbe70df9799004c607c5",
".git/objects/1c/64b776b9728006f7f9e825b686024ef1727b0a": "8a42ca3efb896dcdf146f6ac952bb411",
".git/objects/22/3e27f3087b835618882804b85efb9be50e1fa6": "4c504892f15c1f3d2fe8657ef982439f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/6b23ed0eb0d4c467b10e3337479ee302b9d912": "9b463feb09f51d4743cc24f38a8b66e7",
".git/objects/28/b0a5ea60b1a7e8735e240ed2d90edb1f7b40a7": "d8df2beb6384f230b91150581841dad3",
".git/objects/29/69f32d24baba32dab39dd59db513219721f49d": "70e18719173f93320ae66a652c8b5842",
".git/objects/2a/42fe0f3fd0c99d59b1f6bcb29649401fcef927": "b1ddfa7b6d6a9abbeb3c87b335e1be0f",
".git/objects/2c/e5946ede64385758654a603b486ade6e018abc": "1c63b4e790059e46908de4d096b46a38",
".git/objects/2d/3348bb7b0ddee31dc9c8703df13b7d8e839bdc": "b4cc5277bf9d3175262a3e9098b6fd13",
".git/objects/2e/bc0f9b45a6ef3a464e414366a41a705ee8e034": "0ff267ec80253a5f59666dc23c2ebe4e",
".git/objects/2f/92274526a0f875645e787b548e48060ab317d8": "aeb7ee04ef75e98ddd5d4285c9a8ecf4",
".git/objects/32/435230d9c05370c9279268b2dcbe161669883e": "fe641411b36391983cc7b3b083e09194",
".git/objects/33/08897e3969e964e4fa888ecb11f478a349ed1f": "f7b100a8bc7ba0b70abb770549b1f792",
".git/objects/33/d1b157f1593188552514440bfa385774fd90f5": "71fc18518be3219f2e5e508744ccf6ce",
".git/objects/35/5cde9e9924b5a0de87433e22168ca5eb265d65": "86e3ca7564fd3763535c22c28b96cb8a",
".git/objects/35/ad06729ee1840b23a948c9ca0c82ee4c47823b": "85351a04d18e528e25b05b452f029e8e",
".git/objects/3e/1e643ef21d2124b61bdae5cfa10e9641475514": "c9378da8fa24f5a26f23fe409f8e0070",
".git/objects/3e/2473cdebdcb2c742eebe47b54a70af151c4589": "794dcb7b33b9999b4ac7ab8559ece3fe",
".git/objects/3f/70b0dd435b75a8a1641e5cc98703f3b409ca0c": "d3424c668b0dd7c9fa5de3281ceb9e10",
".git/objects/40/6faa841fd2e0b6cce36bee90a456ada4c0c180": "6ac0e7609702cb8cc5a0f14621c6be02",
".git/objects/41/646eeb27ec1efe650ecac5fa1a9f1b028376e0": "15c9c95cdeb3b36c3c5c5405c1846f25",
".git/objects/41/7bd9ec37cf9a30a2fb4c8b279e60d12271ceed": "b76f8ae797b487d45a65db4a607c8e71",
".git/objects/46/fe1f0a335cc36f03f87c1c49aaf6c802a7cb41": "3d9918afde7879538bed7ee09905225a",
".git/objects/48/dc02bb61a7c876246ad646d966c92ee81c2181": "0838367411654efbc8a8fda1b9c095ff",
".git/objects/48/ff86273cf24a8dfe5eb5bd1630f2b4fb501294": "550f6571fc98a525118ab6f4fa361d10",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/5f7578710f0f55f7612bf30f7772c419c3c49f": "3437c3431cffc85376f0a406136217f2",
".git/objects/51/e9a8b3d60d57e699f59f9b295239d4a4b777c9": "4706bbdebe7f45b0ca1e1bd660e57d4e",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/58/ab9743cb9990a54e180b94b65ca9dd3e1651e0": "03d9ee6c74dcdcd79d102b8407da9d28",
".git/objects/58/ac5ac686a8be1c7f1d8624321e5462d9aa714a": "332388ffea9b79ce885b48147036b32a",
".git/objects/59/a6eefb9bb6c4f1c83cf24dfafafabbb07bcb91": "36ef670a244fe717d8b2987d1cf689a3",
".git/objects/5a/4ca25482c240433d09b1794068f133664edfa0": "ce35b51091cb7a3f1014bc1add1b4b8c",
".git/objects/5a/d452f4129d5c18b6a581c7843ae18341e3081d": "4e78497ff5aa97880bda75e69e894d07",
".git/objects/5c/04006d2bae17d7d379b00a0519c8a96741da32": "fb52cf64b87da17e11d28f170c5962f6",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/6758a5416b6f673cf1239a971f63da4c56b5b2": "e6ce5043ad2c657d85015d6a89792140",
".git/objects/60/eba2c68fbb4717a4a77f2dee7381e288dd5d53": "9fef84de7b024fcff323f8def899e653",
".git/objects/63/b50bd459a161f422e3ad924298407efe8a5b7d": "450848f99d70ec5e31635f39009ebf25",
".git/objects/69/cf1ceb192f835b9f9ac87ea9c524894b53e371": "329ed80e65a6d856a484ac9b2e46d050",
".git/objects/6a/93216ff9a1fd10f19098cc003c74c18580e801": "143021aae82d4c38e9956fc27add7daf",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/ce46f098fa79464c9c3eb6e366a6e9502c2ac5": "145a729451ef823562ac5e2b85ba2f14",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/1fd5f1dcf4d3d2f00a1ba7827b0c50c3fdbf13": "5263af04aa1ad19bffab983a7027d722",
".git/objects/74/7b352f87a17a82c37da1bff46696c302ce31f5": "4a838ba626bae80734e35b7608f2caa3",
".git/objects/77/de91c929a7ed194c0544b9c6cdb413735833b6": "f0d1a819baa6e17a70316f74d43d67f6",
".git/objects/79/d61b64cb7d4349eefcd99d901f04855c13af4c": "a0c197411c5402cc0c4564bc55377aa7",
".git/objects/7d/d74b81497a79c43af043ec36bc80372532a801": "88de77e50c14d22cdda36872cc2fce01",
".git/objects/80/17baf19d08635a1474fb39a9f85a9825b4f5f6": "34dfe4d25a1fdc6e95555823ed0429a1",
".git/objects/85/2931c3c87339c140e223368155dd10f6b9274c": "3ce4effff5b25a831e51855fac37f9bd",
".git/objects/85/ce96bad8677f9ab36db55a8f9610014baae4b6": "06fdfdf16a3ffa66dd18aa9d528a85f2",
".git/objects/85/eb8f934733a489d413a3f3e0311e07d729f0b4": "9a398c9bf039c0287ee7e2992239e65f",
".git/objects/86/e5c0f08986ed39da7851e2cb0d88b3477e2f8c": "5059cc3426b27d57603535de6e130bd6",
".git/objects/87/cf7f4f3de4f6a80d340589772adf2346ac9d65": "8e2b6eaccd08ee1bf4473eb36dc74ea4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/91/3793558a39f119385c5a795f2aed13de89d973": "009b7774b50f98e048364a8371e9866f",
".git/objects/97/beeb042bdd11201e6a0b9cbf714fcf23382bb3": "239ef1310714bd88aa21818e2265f619",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/fae22e8d10c0eb4a382356c381c4b783126932": "89062640e9d28189712ab4e83c9a2582",
".git/objects/a0/98456e1bcfd2a8662aad56d64dd4540ab0e549": "b507543e8239745d36fe25f16fd218ed",
".git/objects/a4/1326b6e0ab501a03b644156e8cad2f2e10521f": "9cba6a108a671b12df7cb775564671d4",
".git/objects/a4/f81199f249038c3f37d5be9f062d0d7c63a7a4": "4ba492c9239e4b5cb9ee1f8351dbbb1c",
".git/objects/a6/7842be9bc66f1da72201cb679462458ef07e5c": "d5b68bd66f104fdbed0c47a9a6126fa1",
".git/objects/ae/6a1d039e96b9aefc6dccb564579f757c582945": "b9c2ed7b992a44ef52f2022e780180c6",
".git/objects/ae/6d45b4e0bf310ce4c95540a50bc85dd6e7e7bb": "749bf4c591011dd4d7e77301678f3cef",
".git/objects/b0/63d3ab887ba2a1d7318601b55857c18f06c7fe": "cafbceb769e590db3df56dae8235fbae",
".git/objects/b3/ae69303534c284879567c256d6d655b27228e8": "e1b46f5e26088a1a217f8ee9ffd5d6b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/5831b1adb39942ecef7e118a54a4a819f3d216": "4d29fefe31bea5bb3b4dc7775699f6f0",
".git/objects/c4/254bbd6aa770acf59fff4d26ecb1afafdd13ec": "5d774cc4630a03d86895f4d085c1197a",
".git/objects/c7/ad036eea75bff36656e47c7b3b1086f2f07ca8": "6f4936b17a328d065befa3ce3e9e6edc",
".git/objects/c7/c341acff7b2f27daac51ada982aeb0b2d92ebd": "cf7ddabfb283b23047e4bea689813389",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d1/5c0680d7950e055cab2a7beb97350b64adcec0": "3760e518c2a5e251d5204173267a08ff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/785e009ba65366f0b9bf54149485fd37dc12a4": "4ca16204b78c0acdca72b89882e09053",
".git/objects/d4/ff89139e42d6508e34d450f78d7641a56e743a": "6c5fc5b418cc577b7f0a0cca7b9500bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/7e6ca7473bd7f8bd7eb220e5e0b38830f3cc06": "00e04688dee43fc3160ebc3c3bbe9662",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/c1edd3407bbb2b899e48dfc9e3934919aff239": "484dd6c81667697e7bf9c9240cfd69ea",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/afec7eaa064fcbffb29b6d670959ac61d92cc1": "fa1b3ff2b0b50e33f3210c18847cb0c7",
".git/objects/ee/6bf9649fcd810ddf431fe4ea237964ddddfe88": "692141c008c831800b174d61b85f0a40",
".git/objects/ef/3a5759fc0be80941faec162966bb464ee5aaba": "a7724c4ef35e412338bd5412d8bb4815",
".git/objects/f1/34a9a0146fbfed1f01382f25e9328bd08ea04e": "54a5b0f749c3d30e7f6779355b81b691",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/35ece39a785bbea2189deaa6d5137af790b417": "fafd5164829578f55f4b85db026ef70d",
".git/objects/fd/f671ec9f414476522f85aadc4d9190f68f13eb": "e008c30d6e3af6feec77463bede00863",
".git/refs/heads/master": "cada1ee00e477b662a4aa0b63cd7c708",
".git/refs/remotes/origin/gh-pages": "cada1ee00e477b662a4aa0b63cd7c708",
"assets/AssetManifest.bin": "4ea2abbc1a69c047418f251d2364219f",
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
"flutter_bootstrap.js": "a53e473daac43b4d8555a4060f131d55",
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
