import React from 'react'
import {TabNavigator} from 'react-navigation'
import LocalSheet from './ListSheet'
import StoreSheet from './StoreSheet'
import {Button, SafeAreaView, ScrollView, Text, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import type {NavigationRoute} from "react-navigation/src/TypeDefinition";

const map = {
    "ios-add": 61698,
    "ios-add-circle": 61697,
    "ios-add-circle-outline": 61696,
    "ios-add-outline": 61698,
    "ios-alarm": 62408,
    "ios-alarm-outline": 62407,
    "ios-albums": 62410,
    "ios-albums-outline": 62409,
    "ios-alert": 61700,
    "ios-alert-outline": 61699,
    "ios-american-football": 61702,
    "ios-american-football-outline": 61701,
    "ios-analytics": 62414,
    "ios-analytics-outline": 62413,
    "ios-aperture": 61704,
    "ios-aperture-outline": 61703,
    "ios-apps": 61706,
    "ios-apps-outline": 61705,
    "ios-appstore": 61708,
    "ios-appstore-outline": 61707,
    "ios-archive": 61710,
    "ios-archive-outline": 61709,
    "ios-arrow-back": 62415,
    "ios-arrow-back-outline": 62415,
    "ios-arrow-down": 62416,
    "ios-arrow-down-outline": 62416,
    "ios-arrow-dropdown": 61712,
    "ios-arrow-dropdown-circle": 61711,
    "ios-arrow-dropdown-circle-outline": 61711,
    "ios-arrow-dropdown-outline": 61712,
    "ios-arrow-dropleft": 61714,
    "ios-arrow-dropleft-circle": 61713,
    "ios-arrow-dropleft-circle-outline": 61713,
    "ios-arrow-dropleft-outline": 61714,
    "ios-arrow-dropright": 61716,
    "ios-arrow-dropright-circle": 61715,
    "ios-arrow-dropright-circle-outline": 61715,
    "ios-arrow-dropright-outline": 61716,
    "ios-arrow-dropup": 61718,
    "ios-arrow-dropup-circle": 61717,
    "ios-arrow-dropup-circle-outline": 61717,
    "ios-arrow-dropup-outline": 61718,
    "ios-arrow-forward": 62417,
    "ios-arrow-forward-outline": 62417,
    "ios-arrow-round-back": 61719,
    "ios-arrow-round-back-outline": 61719,
    "ios-arrow-round-down": 61720,
    "ios-arrow-round-down-outline": 61720,
    "ios-arrow-round-forward": 61721,
    "ios-arrow-round-forward-outline": 61721,
    "ios-arrow-round-up": 61722,
    "ios-arrow-round-up-outline": 61722,
    "ios-arrow-up": 62424,
    "ios-arrow-up-outline": 62424,
    "ios-at": 62426,
    "ios-at-outline": 62425,
    "ios-attach": 61723,
    "ios-attach-outline": 61723,
    "ios-backspace": 61725,
    "ios-backspace-outline": 61724,
    "ios-barcode": 62428,
    "ios-barcode-outline": 62427,
    "ios-baseball": 62430,
    "ios-baseball-outline": 62429,
    "ios-basket": 61727,
    "ios-basket-outline": 61726,
    "ios-basketball": 62432,
    "ios-basketball-outline": 62431,
    "ios-battery-charging": 61728,
    "ios-battery-charging-outline": 61728,
    "ios-battery-dead": 61729,
    "ios-battery-dead-outline": 61729,
    "ios-battery-full": 61730,
    "ios-battery-full-outline": 61730,
    "ios-beaker": 61732,
    "ios-beaker-outline": 61731,
    "ios-beer": 61734,
    "ios-beer-outline": 61733,
    "ios-bicycle": 61735,
    "ios-bicycle-outline": 61735,
    "ios-bluetooth": 61736,
    "ios-bluetooth-outline": 61736,
    "ios-boat": 61738,
    "ios-boat-outline": 61737,
    "ios-body": 62436,
    "ios-body-outline": 62435,
    "ios-bonfire": 61740,
    "ios-bonfire-outline": 61739,
    "ios-book": 62440,
    "ios-book-outline": 62439,
    "ios-bookmark": 61742,
    "ios-bookmark-outline": 61741,
    "ios-bookmarks": 62442,
    "ios-bookmarks-outline": 62441,
    "ios-bowtie": 61744,
    "ios-bowtie-outline": 61743,
    "ios-briefcase": 62446,
    "ios-briefcase-outline": 62445,
    "ios-browsers": 62448,
    "ios-browsers-outline": 62447,
    "ios-brush": 61746,
    "ios-brush-outline": 61745,
    "ios-bug": 61748,
    "ios-bug-outline": 61747,
    "ios-build": 61750,
    "ios-build-outline": 61749,
    "ios-bulb": 61752,
    "ios-bulb-outline": 61751,
    "ios-bus": 61754,
    "ios-bus-outline": 61753,
    "ios-cafe": 61756,
    "ios-cafe-outline": 61755,
    "ios-calculator": 62450,
    "ios-calculator-outline": 62449,
    "ios-calendar": 62452,
    "ios-calendar-outline": 62451,
    "ios-call": 61758,
    "ios-call-outline": 61757,
    "ios-camera": 62454,
    "ios-camera-outline": 62453,
    "ios-car": 61760,
    "ios-car-outline": 61759,
    "ios-card": 61762,
    "ios-card-outline": 61761,
    "ios-cart": 62456,
    "ios-cart-outline": 62455,
    "ios-cash": 61764,
    "ios-cash-outline": 61763,
    "ios-chatboxes": 62458,
    "ios-chatboxes-outline": 62457,
    "ios-chatbubbles": 61766,
    "ios-chatbubbles-outline": 61765,
    "ios-checkbox": 61768,
    "ios-checkbox-outline": 61767,
    "ios-checkmark": 62463,
    "ios-checkmark-circle": 61770,
    "ios-checkmark-circle-outline": 61769,
    "ios-checkmark-outline": 62463,
    "ios-clipboard": 61772,
    "ios-clipboard-outline": 61771,
    "ios-clock": 62467,
    "ios-clock-outline": 62466,
    "ios-close": 62470,
    "ios-close-circle": 61774,
    "ios-close-circle-outline": 61773,
    "ios-close-outline": 62470,
    "ios-closed-captioning": 61776,
    "ios-closed-captioning-outline": 61775,
    "ios-cloud": 62476,
    "ios-cloud-circle": 61778,
    "ios-cloud-circle-outline": 61777,
    "ios-cloud-done": 61780,
    "ios-cloud-done-outline": 61779,
    "ios-cloud-download": 62472,
    "ios-cloud-download-outline": 62471,
    "ios-cloud-outline": 62473,
    "ios-cloud-upload": 62475,
    "ios-cloud-upload-outline": 62474,
    "ios-cloudy": 62480,
    "ios-cloudy-night": 62478,
    "ios-cloudy-night-outline": 62477,
    "ios-cloudy-outline": 62479,
    "ios-code": 61783,
    "ios-code-download": 61781,
    "ios-code-download-outline": 61781,
    "ios-code-outline": 61783,
    "ios-code-working": 61782,
    "ios-code-working-outline": 61782,
    "ios-cog": 62482,
    "ios-cog-outline": 62481,
    "ios-color-fill": 61785,
    "ios-color-fill-outline": 61784,
    "ios-color-filter": 62484,
    "ios-color-filter-outline": 62483,
    "ios-color-palette": 61787,
    "ios-color-palette-outline": 61786,
    "ios-color-wand": 62486,
    "ios-color-wand-outline": 62485,
    "ios-compass": 61789,
    "ios-compass-outline": 61788,
    "ios-construct": 61791,
    "ios-construct-outline": 61790,
    "ios-contact": 62490,
    "ios-contact-outline": 62489,
    "ios-contacts": 61793,
    "ios-contacts-outline": 61792,
    "ios-contract": 61794,
    "ios-contract-outline": 61794,
    "ios-contrast": 61795,
    "ios-contrast-outline": 61795,
    "ios-copy": 62492,
    "ios-copy-outline": 62491,
    "ios-create": 61797,
    "ios-create-outline": 61796,
    "ios-crop": 62494,
    "ios-crop-outline": 61798,
    "ios-cube": 61800,
    "ios-cube-outline": 61799,
    "ios-cut": 61802,
    "ios-cut-outline": 61801,
    "ios-desktop": 61804,
    "ios-desktop-outline": 61803,
    "ios-disc": 61806,
    "ios-disc-outline": 61805,
    "ios-document": 61808,
    "ios-document-outline": 61807,
    "ios-done-all": 61809,
    "ios-done-all-outline": 61809,
    "ios-download": 62496,
    "ios-download-outline": 62495,
    "ios-easel": 61811,
    "ios-easel-outline": 61810,
    "ios-egg": 61813,
    "ios-egg-outline": 61812,
    "ios-exit": 61815,
    "ios-exit-outline": 61814,
    "ios-expand": 61816,
    "ios-expand-outline": 61816,
    "ios-eye": 62501,
    "ios-eye-off": 61818,
    "ios-eye-off-outline": 61817,
    "ios-eye-outline": 62500,
    "ios-fastforward": 62503,
    "ios-fastforward-outline": 62502,
    "ios-female": 61819,
    "ios-female-outline": 61819,
    "ios-filing": 62505,
    "ios-filing-outline": 62504,
    "ios-film": 62507,
    "ios-film-outline": 62506,
    "ios-finger-print": 61820,
    "ios-finger-print-outline": 61820,
    "ios-flag": 62509,
    "ios-flag-outline": 62508,
    "ios-flame": 62511,
    "ios-flame-outline": 62510,
    "ios-flash": 61822,
    "ios-flash-outline": 61821,
    "ios-flask": 62513,
    "ios-flask-outline": 62512,
    "ios-flower": 62515,
    "ios-flower-outline": 62514,
    "ios-folder": 62517,
    "ios-folder-open": 61824,
    "ios-folder-open-outline": 61823,
    "ios-folder-outline": 62516,
    "ios-football": 62519,
    "ios-football-outline": 62518,
    "ios-funnel": 61826,
    "ios-funnel-outline": 61825,
    "ios-game-controller-a": 62521,
    "ios-game-controller-a-outline": 62520,
    "ios-game-controller-b": 62523,
    "ios-game-controller-b-outline": 62522,
    "ios-git-branch": 61827,
    "ios-git-branch-outline": 61827,
    "ios-git-commit": 61828,
    "ios-git-commit-outline": 61828,
    "ios-git-compare": 61829,
    "ios-git-compare-outline": 61829,
    "ios-git-merge": 61830,
    "ios-git-merge-outline": 61830,
    "ios-git-network": 61831,
    "ios-git-network-outline": 61831,
    "ios-git-pull-request": 61832,
    "ios-git-pull-request-outline": 61832,
    "ios-glasses": 62527,
    "ios-glasses-outline": 62526,
    "ios-globe": 61834,
    "ios-globe-outline": 61833,
    "ios-grid": 61836,
    "ios-grid-outline": 61835,
    "ios-hammer": 61838,
    "ios-hammer-outline": 61837,
    "ios-hand": 61840,
    "ios-hand-outline": 61839,
    "ios-happy": 61842,
    "ios-happy-outline": 61841,
    "ios-headset": 61844,
    "ios-headset-outline": 61843,
    "ios-heart": 62531,
    "ios-heart-outline": 62530,
    "ios-help": 62534,
    "ios-help-buoy": 61846,
    "ios-help-buoy-outline": 61845,
    "ios-help-circle": 61848,
    "ios-help-circle-outline": 61847,
    "ios-help-outline": 62534,
    "ios-home": 62536,
    "ios-home-outline": 62535,
    "ios-ice-cream": 61850,
    "ios-ice-cream-outline": 61849,
    "ios-image": 61852,
    "ios-image-outline": 61851,
    "ios-images": 61854,
    "ios-images-outline": 61853,
    "ios-infinite": 62538,
    "ios-infinite-outline": 62537,
    "ios-information": 62541,
    "ios-information-circle": 61856,
    "ios-information-circle-outline": 61855,
    "ios-information-outline": 62541,
    "ios-ionic": 61857,
    "ios-ionic-outline": 62542,
    "ios-ionitron": 61859,
    "ios-ionitron-outline": 61858,
    "ios-jet": 61861,
    "ios-jet-outline": 61860,
    "ios-key": 61863,
    "ios-key-outline": 61862,
    "ios-keypad": 62544,
    "ios-keypad-outline": 62543,
    "ios-laptop": 61864,
    "ios-laptop-outline": 61864,
    "ios-leaf": 61866,
    "ios-leaf-outline": 61865,
    "ios-link": 61994,
    "ios-link-outline": 61898,
    "ios-list": 62548,
    "ios-list-box": 61868,
    "ios-list-box-outline": 61867,
    "ios-list-outline": 62548,
    "ios-locate": 61870,
    "ios-locate-outline": 61869,
    "ios-lock": 61872,
    "ios-lock-outline": 61871,
    "ios-log-in": 61873,
    "ios-log-in-outline": 61873,
    "ios-log-out": 61874,
    "ios-log-out-outline": 61874,
    "ios-magnet": 61876,
    "ios-magnet-outline": 61875,
    "ios-mail": 61880,
    "ios-mail-open": 61878,
    "ios-mail-open-outline": 61877,
    "ios-mail-outline": 61879,
    "ios-male": 61881,
    "ios-male-outline": 61881,
    "ios-man": 61883,
    "ios-man-outline": 61882,
    "ios-map": 61885,
    "ios-map-outline": 61884,
    "ios-medal": 61887,
    "ios-medal-outline": 61886,
    "ios-medical": 62556,
    "ios-medical-outline": 62555,
    "ios-medkit": 62558,
    "ios-medkit-outline": 62557,
    "ios-megaphone": 61889,
    "ios-megaphone-outline": 61888,
    "ios-menu": 61891,
    "ios-menu-outline": 61890,
    "ios-mic": 62561,
    "ios-mic-off": 62559,
    "ios-mic-off-outline": 61892,
    "ios-mic-outline": 62560,
    "ios-microphone": 61894,
    "ios-microphone-outline": 61893,
    "ios-moon": 62568,
    "ios-moon-outline": 62567,
    "ios-more": 61896,
    "ios-more-outline": 61895,
    "ios-move": 61899,
    "ios-move-outline": 61899,
    "ios-musical-note": 62571,
    "ios-musical-note-outline": 61900,
    "ios-musical-notes": 62572,
    "ios-musical-notes-outline": 61901,
    "ios-navigate": 62574,
    "ios-navigate-outline": 62573,
    "ios-no-smoking": 61903,
    "ios-no-smoking-outline": 61902,
    "ios-notifications": 61907,
    "ios-notifications-off": 61905,
    "ios-notifications-off-outline": 61904,
    "ios-notifications-outline": 61906,
    "ios-nuclear": 61909,
    "ios-nuclear-outline": 61908,
    "ios-nutrition": 62576,
    "ios-nutrition-outline": 62575,
    "ios-open": 61911,
    "ios-open-outline": 61910,
    "ios-options": 61913,
    "ios-options-outline": 61912,
    "ios-outlet": 61915,
    "ios-outlet-outline": 61914,
    "ios-paper": 62578,
    "ios-paper-outline": 62577,
    "ios-paper-plane": 61917,
    "ios-paper-plane-outline": 61916,
    "ios-partly-sunny": 61919,
    "ios-partly-sunny-outline": 61918,
    "ios-pause": 62584,
    "ios-pause-outline": 62583,
    "ios-paw": 62586,
    "ios-paw-outline": 62585,
    "ios-people": 62588,
    "ios-people-outline": 62587,
    "ios-person": 62590,
    "ios-person-add": 61921,
    "ios-person-add-outline": 61920,
    "ios-person-outline": 62589,
    "ios-phone-landscape": 61922,
    "ios-phone-landscape-outline": 61922,
    "ios-phone-portrait": 61923,
    "ios-phone-portrait-outline": 61923,
    "ios-photos": 62594,
    "ios-photos-outline": 62593,
    "ios-pie": 62596,
    "ios-pie-outline": 62595,
    "ios-pin": 61925,
    "ios-pin-outline": 61924,
    "ios-pint": 62598,
    "ios-pint-outline": 62597,
    "ios-pizza": 61927,
    "ios-pizza-outline": 61926,
    "ios-plane": 61929,
    "ios-plane-outline": 61928,
    "ios-planet": 61931,
    "ios-planet-outline": 61930,
    "ios-play": 62600,
    "ios-play-outline": 62599,
    "ios-podium": 61933,
    "ios-podium-outline": 61932,
    "ios-power": 61935,
    "ios-power-outline": 61934,
    "ios-pricetag": 62605,
    "ios-pricetag-outline": 62604,
    "ios-pricetags": 62607,
    "ios-pricetags-outline": 62606,
    "ios-print": 61937,
    "ios-print-outline": 61936,
    "ios-pulse": 62611,
    "ios-pulse-outline": 61938,
    "ios-qr-scanner": 61939,
    "ios-qr-scanner-outline": 61939,
    "ios-quote": 61941,
    "ios-quote-outline": 61940,
    "ios-radio": 61945,
    "ios-radio-button-off": 61942,
    "ios-radio-button-off-outline": 61942,
    "ios-radio-button-on": 61943,
    "ios-radio-button-on-outline": 61943,
    "ios-radio-outline": 61944,
    "ios-rainy": 62613,
    "ios-rainy-outline": 62612,
    "ios-recording": 62615,
    "ios-recording-outline": 62614,
    "ios-redo": 62617,
    "ios-redo-outline": 62616,
    "ios-refresh": 62620,
    "ios-refresh-circle": 61990,
    "ios-refresh-circle-outline": 61988,
    "ios-refresh-outline": 62620,
    "ios-remove": 61948,
    "ios-remove-circle": 61947,
    "ios-remove-circle-outline": 61946,
    "ios-remove-outline": 61948,
    "ios-reorder": 61949,
    "ios-reorder-outline": 61949,
    "ios-repeat": 61950,
    "ios-repeat-outline": 61950,
    "ios-resize": 61951,
    "ios-resize-outline": 61951,
    "ios-restaurant": 61953,
    "ios-restaurant-outline": 61952,
    "ios-return-left": 61954,
    "ios-return-left-outline": 61954,
    "ios-return-right": 61955,
    "ios-return-right-outline": 61955,
    "ios-reverse-camera": 62623,
    "ios-reverse-camera-outline": 62622,
    "ios-rewind": 62625,
    "ios-rewind-outline": 62624,
    "ios-ribbon": 61957,
    "ios-ribbon-outline": 61956,
    "ios-rose": 62627,
    "ios-rose-outline": 62626,
    "ios-sad": 61959,
    "ios-sad-outline": 61958,
    "ios-school": 61961,
    "ios-school-outline": 61960,
    "ios-search": 62629,
    "ios-search-outline": 61962,
    "ios-send": 61964,
    "ios-send-outline": 61963,
    "ios-settings": 62631,
    "ios-settings-outline": 61965,
    "ios-share": 61969,
    "ios-share-alt": 61967,
    "ios-share-alt-outline": 61966,
    "ios-share-outline": 61968,
    "ios-shirt": 61971,
    "ios-shirt-outline": 61970,
    "ios-shuffle": 62633,
    "ios-shuffle-outline": 62633,
    "ios-skip-backward": 61973,
    "ios-skip-backward-outline": 61972,
    "ios-skip-forward": 61975,
    "ios-skip-forward-outline": 61974,
    "ios-snow": 61976,
    "ios-snow-outline": 61996,
    "ios-speedometer": 62640,
    "ios-speedometer-outline": 62639,
    "ios-square": 61978,
    "ios-square-outline": 61977,
    "ios-star": 62643,
    "ios-star-half": 62641,
    "ios-star-half-outline": 62641,
    "ios-star-outline": 62642,
    "ios-stats": 61980,
    "ios-stats-outline": 61979,
    "ios-stopwatch": 62645,
    "ios-stopwatch-outline": 62644,
    "ios-subway": 61982,
    "ios-subway-outline": 61981,
    "ios-sunny": 62647,
    "ios-sunny-outline": 62646,
    "ios-swap": 61983,
    "ios-swap-outline": 61983,
    "ios-switch": 61985,
    "ios-switch-outline": 61984,
    "ios-sync": 61986,
    "ios-sync-outline": 61986,
    "ios-tablet-landscape": 61987,
    "ios-tablet-landscape-outline": 61987,
    "ios-tablet-portrait": 62030,
    "ios-tablet-portrait-outline": 62030,
    "ios-tennisball": 62651,
    "ios-tennisball-outline": 62650,
    "ios-text": 62032,
    "ios-text-outline": 62031,
    "ios-thermometer": 62034,
    "ios-thermometer-outline": 62033,
    "ios-thumbs-down": 62036,
    "ios-thumbs-down-outline": 62035,
    "ios-thumbs-up": 62038,
    "ios-thumbs-up-outline": 62037,
    "ios-thunderstorm": 62653,
    "ios-thunderstorm-outline": 62652,
    "ios-time": 62655,
    "ios-time-outline": 62654,
    "ios-timer": 62657,
    "ios-timer-outline": 62656,
    "ios-train": 62040,
    "ios-train-outline": 62039,
    "ios-transgender": 62041,
    "ios-transgender-outline": 62041,
    "ios-trash": 62661,
    "ios-trash-outline": 62660,
    "ios-trending-down": 62042,
    "ios-trending-down-outline": 62042,
    "ios-trending-up": 62043,
    "ios-trending-up-outline": 62043,
    "ios-trophy": 62045,
    "ios-trophy-outline": 62044,
    "ios-umbrella": 62047,
    "ios-umbrella-outline": 62046,
    "ios-undo": 62663,
    "ios-undo-outline": 62662,
    "ios-unlock": 62049,
    "ios-unlock-outline": 62048,
    "ios-videocam": 62669,
    "ios-videocam-outline": 62668,
    "ios-volume-down": 62050,
    "ios-volume-down-outline": 62050,
    "ios-volume-mute": 62051,
    "ios-volume-mute-outline": 62051,
    "ios-volume-off": 62052,
    "ios-volume-off-outline": 62052,
    "ios-volume-up": 62053,
    "ios-volume-up-outline": 62053,
    "ios-walk": 62054,
    "ios-walk-outline": 62054,
    "ios-warning": 62056,
    "ios-warning-outline": 62055,
    "ios-watch": 62057,
    "ios-watch-outline": 62057,
    "ios-water": 62059,
    "ios-water-outline": 62058,
    "ios-wifi": 62061,
    "ios-wifi-outline": 62060,
    "ios-wine": 62063,
    "ios-wine-outline": 62062,
    "ios-woman": 62065,
    "ios-woman-outline": 62064,
    "logo-android": 61989,
    "logo-angular": 61991,
    "logo-apple": 61993,
    "logo-bitcoin": 61995,
    "logo-buffer": 61997,
    "logo-chrome": 61999,
    "logo-codepen": 62000,
    "logo-css3": 62001,
    "logo-designernews": 62002,
    "logo-dribbble": 62003,
    "logo-dropbox": 62004,
    "logo-euro": 62005,
    "logo-facebook": 62006,
    "logo-foursquare": 62007,
    "logo-freebsd-devil": 62008,
    "logo-github": 62009,
    "logo-google": 62010,
    "logo-googleplus": 62011,
    "logo-hackernews": 62012,
    "logo-html5": 62013,
    "logo-instagram": 62014,
    "logo-javascript": 62015,
    "logo-linkedin": 62016,
    "logo-markdown": 62017,
    "logo-nodejs": 62018,
    "logo-octocat": 62019,
    "logo-pinterest": 62020,
    "logo-playstation": 62021,
    "logo-python": 62022,
    "logo-reddit": 62023,
    "logo-rss": 62024,
    "logo-sass": 62025,
    "logo-skype": 62026,
    "logo-snapchat": 62027,
    "logo-steam": 62028,
    "logo-tumblr": 62029,
    "logo-tux": 62126,
    "logo-twitch": 62127,
    "logo-twitter": 62128,
    "logo-usd": 62129,
    "logo-vimeo": 62148,
    "logo-whatsapp": 62149,
    "logo-windows": 62255,
    "logo-wordpress": 62256,
    "logo-xbox": 62284,
    "logo-yahoo": 62285,
    "logo-yen": 62286,
    "logo-youtube": 62287,
    "md-add": 62067,
    "md-add-circle": 62066,
    "md-alarm": 62068,
    "md-albums": 62069,
    "md-alert": 62070,
    "md-american-football": 62071,
    "md-analytics": 62072,
    "md-aperture": 62073,
    "md-apps": 62074,
    "md-appstore": 62075,
    "md-archive": 62076,
    "md-arrow-back": 62077,
    "md-arrow-down": 62078,
    "md-arrow-dropdown": 62080,
    "md-arrow-dropdown-circle": 62079,
    "md-arrow-dropleft": 62082,
    "md-arrow-dropleft-circle": 62081,
    "md-arrow-dropright": 62084,
    "md-arrow-dropright-circle": 62083,
    "md-arrow-dropup": 62086,
    "md-arrow-dropup-circle": 62085,
    "md-arrow-forward": 62087,
    "md-arrow-round-back": 62088,
    "md-arrow-round-down": 62089,
    "md-arrow-round-forward": 62090,
    "md-arrow-round-up": 62091,
    "md-arrow-up": 62092,
    "md-at": 62093,
    "md-attach": 62094,
    "md-backspace": 62095,
    "md-barcode": 62096,
    "md-baseball": 62097,
    "md-basket": 62098,
    "md-basketball": 62099,
    "md-battery-charging": 62100,
    "md-battery-dead": 62101,
    "md-battery-full": 62102,
    "md-beaker": 62103,
    "md-beer": 62104,
    "md-bicycle": 62105,
    "md-bluetooth": 62106,
    "md-boat": 62107,
    "md-body": 62108,
    "md-bonfire": 62109,
    "md-book": 62110,
    "md-bookmark": 62111,
    "md-bookmarks": 62112,
    "md-bowtie": 62113,
    "md-briefcase": 62114,
    "md-browsers": 62115,
    "md-brush": 62116,
    "md-bug": 62117,
    "md-build": 62118,
    "md-bulb": 62119,
    "md-bus": 62120,
    "md-cafe": 62121,
    "md-calculator": 62122,
    "md-calendar": 62123,
    "md-call": 62124,
    "md-camera": 62125,
    "md-car": 62130,
    "md-card": 62131,
    "md-cart": 62132,
    "md-cash": 62133,
    "md-chatboxes": 62134,
    "md-chatbubbles": 62135,
    "md-checkbox": 62137,
    "md-checkbox-outline": 62136,
    "md-checkmark": 62140,
    "md-checkmark-circle": 62139,
    "md-checkmark-circle-outline": 62138,
    "md-clipboard": 62141,
    "md-clock": 62142,
    "md-close": 62144,
    "md-close-circle": 62143,
    "md-closed-captioning": 62145,
    "md-cloud": 62153,
    "md-cloud-circle": 62146,
    "md-cloud-done": 62147,
    "md-cloud-download": 62150,
    "md-cloud-outline": 62151,
    "md-cloud-upload": 62152,
    "md-cloudy": 62155,
    "md-cloudy-night": 62154,
    "md-code": 62158,
    "md-code-download": 62156,
    "md-code-working": 62157,
    "md-cog": 62159,
    "md-color-fill": 62160,
    "md-color-filter": 62161,
    "md-color-palette": 62162,
    "md-color-wand": 62163,
    "md-compass": 62164,
    "md-construct": 62165,
    "md-contact": 62166,
    "md-contacts": 62167,
    "md-contract": 62168,
    "md-contrast": 62169,
    "md-copy": 62170,
    "md-create": 62171,
    "md-crop": 62172,
    "md-cube": 62173,
    "md-cut": 62174,
    "md-desktop": 62175,
    "md-disc": 62176,
    "md-document": 62177,
    "md-done-all": 62178,
    "md-download": 62179,
    "md-easel": 62180,
    "md-egg": 62181,
    "md-exit": 62182,
    "md-expand": 62183,
    "md-eye": 62185,
    "md-eye-off": 62184,
    "md-fastforward": 62186,
    "md-female": 62187,
    "md-filing": 62188,
    "md-film": 62189,
    "md-finger-print": 62190,
    "md-flag": 62191,
    "md-flame": 62192,
    "md-flash": 62193,
    "md-flask": 62194,
    "md-flower": 62195,
    "md-folder": 62197,
    "md-folder-open": 62196,
    "md-football": 62198,
    "md-funnel": 62199,
    "md-game-controller-a": 62200,
    "md-game-controller-b": 62201,
    "md-git-branch": 62202,
    "md-git-commit": 62203,
    "md-git-compare": 62204,
    "md-git-merge": 62205,
    "md-git-network": 62206,
    "md-git-pull-request": 62207,
    "md-glasses": 62208,
    "md-globe": 62209,
    "md-grid": 62210,
    "md-hammer": 62211,
    "md-hand": 62212,
    "md-happy": 62213,
    "md-headset": 62214,
    "md-heart": 62216,
    "md-heart-outline": 62215,
    "md-help": 62219,
    "md-help-buoy": 62217,
    "md-help-circle": 62218,
    "md-home": 62220,
    "md-ice-cream": 62221,
    "md-image": 62222,
    "md-images": 62223,
    "md-infinite": 62224,
    "md-information": 62226,
    "md-information-circle": 62225,
    "md-ionic": 62227,
    "md-ionitron": 62228,
    "md-jet": 62229,
    "md-key": 62230,
    "md-keypad": 62231,
    "md-laptop": 62232,
    "md-leaf": 62233,
    "md-link": 61998,
    "md-list": 62235,
    "md-list-box": 62234,
    "md-locate": 62236,
    "md-lock": 62237,
    "md-log-in": 62238,
    "md-log-out": 62239,
    "md-magnet": 62240,
    "md-mail": 62242,
    "md-mail-open": 62241,
    "md-male": 62243,
    "md-man": 62244,
    "md-map": 62245,
    "md-medal": 62246,
    "md-medical": 62247,
    "md-medkit": 62248,
    "md-megaphone": 62249,
    "md-menu": 62250,
    "md-mic": 62252,
    "md-mic-off": 62251,
    "md-microphone": 62253,
    "md-moon": 62254,
    "md-more": 61897,
    "md-move": 62257,
    "md-musical-note": 62258,
    "md-musical-notes": 62259,
    "md-navigate": 62260,
    "md-no-smoking": 62261,
    "md-notifications": 62264,
    "md-notifications-off": 62262,
    "md-notifications-outline": 62263,
    "md-nuclear": 62265,
    "md-nutrition": 62266,
    "md-open": 62267,
    "md-options": 62268,
    "md-outlet": 62269,
    "md-paper": 62271,
    "md-paper-plane": 62270,
    "md-partly-sunny": 62272,
    "md-pause": 62273,
    "md-paw": 62274,
    "md-people": 62275,
    "md-person": 62277,
    "md-person-add": 62276,
    "md-phone-landscape": 62278,
    "md-phone-portrait": 62279,
    "md-photos": 62280,
    "md-pie": 62281,
    "md-pin": 62282,
    "md-pint": 62283,
    "md-pizza": 62292,
    "md-plane": 62293,
    "md-planet": 62294,
    "md-play": 62295,
    "md-podium": 62296,
    "md-power": 62297,
    "md-pricetag": 62298,
    "md-pricetags": 62299,
    "md-print": 62300,
    "md-pulse": 62301,
    "md-qr-scanner": 62302,
    "md-quote": 62303,
    "md-radio": 62306,
    "md-radio-button-off": 62304,
    "md-radio-button-on": 62305,
    "md-rainy": 62307,
    "md-recording": 62308,
    "md-redo": 62309,
    "md-refresh": 62310,
    "md-refresh-circle": 61992,
    "md-remove": 62312,
    "md-remove-circle": 62311,
    "md-reorder": 62313,
    "md-repeat": 62314,
    "md-resize": 62315,
    "md-restaurant": 62316,
    "md-return-left": 62317,
    "md-return-right": 62318,
    "md-reverse-camera": 62319,
    "md-rewind": 62320,
    "md-ribbon": 62321,
    "md-rose": 62322,
    "md-sad": 62323,
    "md-school": 62324,
    "md-search": 62325,
    "md-send": 62326,
    "md-settings": 62327,
    "md-share": 62329,
    "md-share-alt": 62328,
    "md-shirt": 62330,
    "md-shuffle": 62331,
    "md-skip-backward": 62332,
    "md-skip-forward": 62333,
    "md-snow": 62334,
    "md-speedometer": 62335,
    "md-square": 62337,
    "md-square-outline": 62336,
    "md-star": 62340,
    "md-star-half": 62338,
    "md-star-outline": 62339,
    "md-stats": 62341,
    "md-stopwatch": 62342,
    "md-subway": 62343,
    "md-sunny": 62344,
    "md-swap": 62345,
    "md-switch": 62346,
    "md-sync": 62347,
    "md-tablet-landscape": 62348,
    "md-tablet-portrait": 62349,
    "md-tennisball": 62350,
    "md-text": 62351,
    "md-thermometer": 62352,
    "md-thumbs-down": 62353,
    "md-thumbs-up": 62354,
    "md-thunderstorm": 62355,
    "md-time": 62356,
    "md-timer": 62357,
    "md-train": 62358,
    "md-transgender": 62359,
    "md-trash": 62360,
    "md-trending-down": 62361,
    "md-trending-up": 62362,
    "md-trophy": 62363,
    "md-umbrella": 62364,
    "md-undo": 62365,
    "md-unlock": 62366,
    "md-videocam": 62367,
    "md-volume-down": 62368,
    "md-volume-mute": 62369,
    "md-volume-off": 62370,
    "md-volume-up": 62371,
    "md-walk": 62372,
    "md-warning": 62373,
    "md-watch": 62374,
    "md-water": 62375,
    "md-wifi": 62376,
    "md-wine": 62377,
    "md-woman": 62378
};

const HomeScreen = ({navigation}) => (
    <ScrollView>
        {
            Object.keys(map).map((key) => {
                return (
                    <View key={key}
                          style={{
                              flex: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginLeft: 50,
                              marginRight: 50,
                          }}>
                        {/*<Ionicons size={40} name={key}/>*/}
                        {/*<Text>{key}</Text>*/}
                    </View>
                )
            })
        }
    </ScrollView>

);

// export default TabNavigator(
//     {
//         Sheet: {
//             screen: LocalSheet,
//
//         },
//         Store: {
//             screen: StoreSheet,
//         }
//     },
//     {
//         swipeEnabled: true,
//         animationEnabled: false,
//         lazy: true,
//     }
// );

export default HomeScreen

