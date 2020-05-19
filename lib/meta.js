// <meta name='application-name' content='PWA App' />
// <meta name='apple-mobile-web-app-capable' content='yes' />
// <meta name='apple-mobile-web-app-status-bar-style' content='default' />
// <meta name='apple-mobile-web-app-title' content='PWA App' />
// <meta name='description' content='Best PWA App in the world' />
// <meta name='format-detection' content='telephone=no' />
// <meta name='mobile-web-app-capable' content='yes' />
// <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
// <meta name='msapplication-TileColor' content='#2B5797' />
// <meta name='msapplication-tap-highlight' content='no' />
// <meta name='theme-color' content='#000000' />
// <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

// <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
// <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
// <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
// <link rel='manifest' href='/static/manifest.json' />
// <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
// <link rel='shortcut icon' href='/static/icons/favicon.ico' />
// <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

// <meta name='twitter:card' content='summary' />
// <meta name='twitter:url' content='https://yourdomain.com' />
// <meta name='twitter:title' content='PWA App' />
// <meta name='twitter:description' content='Best PWA App in the world' />
// <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
// <meta name='twitter:creator' content='@DavidWShadow' />
// <meta property='og:type' content='website' />
// <meta property='og:title' content='PWA App' />
// <meta property='og:description' content='Best PWA App in the world' />
// <meta property='og:site_name' content='PWA App' />
// <meta property='og:url' content='https://yourdomain.com' />
// <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />

// {
//   "name": "PWA App",
//   "short_name": "App",
//   "icons": [
//     {
//       "src": "/static/icons/android-chrome-192x192.png",
//       "sizes": "192x192",
//       "type": "image/png"
//     },
//     {
//       "src": "/static/icons/android-chrome-384x384.png",
//       "sizes": "384x384",
//       "type": "image/png"
//     },
//     {
//       "src": "/static/icons/icon-512x512.png",
//       "sizes": "512x512",
//       "type": "image/png"
//     }
//   ],
//   "theme_color": "#FFFFFF",
//   "background_color": "#FFFFFF",
//   "start_url": "/",
//   "display": "standalone",
//   "orientation": "portrait"
// }

// // // Perf
// // 1.) First, the browser sends the request to the server to get page files.
// // 2.) Page files are sent to our device.
// // 3.) Then the browser needs to render the web page.
// // 4.) Once the web page is rendered, onload/load event is triggered.
// // 5.) The user views the page.
// // 6.) The onload/onunload event happens when the user closes the web page.

// // let page_load_time = performance_data.loadEventEnd - performance_data.navigationStart;
// // let request_response_time = performance_data.responseEnd - performance_data.requestStart;
// // let render_time = performance_data.domComplete - performance_data.domLoading;

// // // Do this on load (Both up and down)
// // t_page_opened = new Date();
// // window.addEventListener("beforeunload", leftWebSite);
// // function leftWebSite() {
// //     const t_page_closed = new Date();

// //     const data = JSON.stringify({
// //         "page_opened": t_page_opened,
// //         "page_closed": t_page_closed
// //     });
// //     post_data(data, "define_URL");
// // }

// // // why the user left
// // Browser tab/window closing: detected via beforeunload. Solved.
// // internal or external link: detectable via onclick event
// // internet connection lost:
// // 	connection reestablished during page view: no issue
// // 	user revisits a page in the future: fetch view data from user browser localStorage if the user didn't clean it
// // 	the user never comes back to our site: data lost
// // page refresh: can be detected with the help of localStorage
// // page left via history back, forward button: using pagehide event, since page JS won't be re-loaded and beforeunload event won't be triggered.

// // // Where from the user come thru
// // utm_source	Identifies which site sent the traffic, and is a required parameter.	utm_source=Google
// // utm_medium	Identifies what type of link was used, such as cost per click or email.	utm_medium=cpc
// // utm_campaign	Identifies a specific product promotion or strategic campaign.	utm_campaign=spring_sale
// // utm_term	Identifies search terms.	utm_term=running+shoes
// // utm_content	Identifies what specifically was clicked to bring the user to the site, such as a banner ad or a text link. It is often used for A/B testing and content-targeted ads.	utm_content=logolink or utm_content=textlink

// // ip

// // scroll_level

// // // What Happened
// // Log: visit
// // 	(href,
// // 	document.referrer,
// // 	screen{w,h},avail{w,h},
// // 	navigator.userAgent,
// // 	navigator.language
// // 	time_zone_offset = Intl.DateTimeFormat().resolvedOptions().timeZone,
// // 	time,
// // 	window.performance.timing)
// // Log: visit_time
// // Log: clicked_links: {
// // 	clientX,
// // 	clientY,
// // 	time
// // }
// // Log: every 10s in 2min then 30s in 30m then 1m afterwards (visible, )
// // Log:

// // events visit, interact, endvisit
// let data = {}

// // Get data from lokostorage or assign a new one
// try {
// 	if (localStorage.getItem("metauid")) data.metauid = localStorage.getItem("metauid");
// 	else { data.metauid = (Math.random()*Math.random()).toString().substring(2); localStorage.setItem("metauid", data.metauid) }
// } catch(e) {}

// save_data = (key, value, post = true) => {
// 	let combined = { ...JSON.parse(localStorage.getItem("meta_conf")||""), { [key]: value} }
// 	localStorage.setItem("meta_conf", JSON.stringify(combined));
// 	localStorage.setItem("meta_mod", { ...JSON.parse(localStorage.getItem("meta_mod")||""), { [key]: Date.now()} })
// }

// on_visit = (fn) => {
// 	(window||global||globalThis||this).addEventListener("load", () => fn());
// }

// // onVISIT
// on_visit(() => {
// // utm headers = location.searchparams(utm, source, medium, campaign, term, content)
// let searchpars = new URLSearchParams(location.search)
// for(utm in ["source","medium","campaign","term","content"]) save_data("utm_"+utm, searchpars.get("utm_"+utm));
// // ip = waiting?
// // href = location.href
// save_data("href", location.href)
// // referer = document.referer (provide some way to parse this, such as search results)
// save_data("referrer", document.referrer)
// save_data("opener", window.opener)
// // useragent = navigator.userAgent
// save_data("useragent", navigator.userAgent)
// // lang = navigator.userAgent
// save_data
// // time_zone_offset = Intl.DateTimeFormat().resolvedOptions().timeZone
// // time = Date.now()
// // timing = window.performance.timing
// // page_load_time = timing.loadEventEnd - timing.navigationStart;
// // request_response_time = timing.responseEnd - timing.requestStart;
// // render_time = timing.domComplete - timing.domLoading;
// // dns_lookup_time = timing.domainLookupEnd - timing.domainLookupStart
// //

// /*screen = {
// 	real: {
// 		w: screen.width,
// 		h: screen.height,
// 	},
// 	avail: {
// 		w: screen.availWidth,
// 		h: screen.availHeight,
// 	}
// }*/
// /* types
// 300- small mobiles and watches
// 600- mobile
// 800- tabs
// 1100- laptop
// 1100+ large laptop and desktop
// */
// })

// // onINTERACT scroll
// // later scroll_pos = {x: scrollX, y: scrollY}
