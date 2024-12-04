//cacheonram

user_pref("browser.cache.disk.enable",false);
user_pref("browser.cache.disk.capacity",0);
user_pref("browser.cache.memory.enable",true);
user_pref("browser.cache.memory.capacity",512000);
//above four are to disable disk cache so as to reduce disk i/o and enable larger cache on ram
user_pref("browser.sessionhistory.max_total_viewers", 3);
//limit sessionhistory for tabs, set to any resonable number of tabs
user_pref("dom.script_loader.bytecode_cache.enabled",true);
user_pref("dom.script_loader.bytecode_cache.strategy",-2);
//caching strategy revamped for less consumption of memory bandwidth
user_pref("network.http.rcwn.enabled", false);
user_pref("browser.sessionstore.resume_from_crash",false);
//reduce disk i/o by disabling session restore and retrieving from disk cache
user_pref("browser.cache.jsbc_compression_level", 6);
//run speedometer 3.0 a few times to determine value is most appropriate for your config, larger numbers require more cpu usage but less memory bandwidth. The aim is achieve better responsiveness
user_pref("browser.cache.check_doc_frequency", 0);
//reduce polling for cache to reduce unnecessary i/o when cached browsing data is deleted on quit for my setup

//scrolling

user_pref("general.smoothScroll",true);
user_pref("general.smoothScroll.msdPhysics.enabled",true);
//tweaked for smooth scrolling on my overclocked 67Hz thinkpad monitor. Look up smoothfox from Betterfox for more configs

//privacy

user_pref("network.captive-portal-service.enabled",false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.disablePrefetch", true);
//Reduce proactive prefetch unless specified by website script and save bandwidth to reduce network activity

//rendering

user_pref("media.ffmpeg.vaapi.enabled",true);
//hardware rendering/acceleration via vaapi for linux
user_pref("network.early-hints.enabled", true);
user_pref("network.early-hints.preconnect.enabled", true);
user_pref("network.fetchpriority.enabled", true);
//Setting the above three are usages of experimental configs to improve rendering when possible
user_pref("content.notify.interval", 100000); //in microseconds
user_pref("nglayout.initialpaint.delay", 50); // in ms
user_pref("nglayout.initialpaint.delay_in_oopif", 75); //in ms
//Setting the above three cut down the load time effectively on my setup: my uneducated guess is that setting these as multiples of motherboard bus speed period (100Hz) help cut down latency for being in sync with the hardware processing rate.
user_pref("dom.ipc.processCount.webIsolated", 3);
user_pref("dom.ipc.processPrelaunch.fission.number", 3);
//reduced number of cpu threads for efficient processing, your setup might benefit from larger or smaller number of threads
