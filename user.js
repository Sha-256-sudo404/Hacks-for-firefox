//cacheonram
user_pref("browser.cache.disk.enable",false);
user_pref("browser.cache.disk.capacity",0);
user_pref("browser.cache.memory.enable",true);
user_pref("browser.sessionhistory.max_total_viewers", 3);
user_pref("browser.cache.memory.capacity",512000);
user_pref("browser.sessionstore.resume_from_crash",false);
user_pref("browser.cache.check_doc_frequency", 0);
user_pref("browser.sessionstore.interval",600000);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);

//scrolling
user_pref("general.smoothScroll",true);
user_pref("general.smoothScroll.msdPhysics.enabled",true);

//privacy
user_pref("network.captive-portal-service.enabled",false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("network.http.referer.XOriginTrimmingPolicy",2);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("dom.disable_window_move_resize", true);
user_pref("network.IDN_show_punycode", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);

//rendering
user_pref("media.ffmpeg.vaapi.enabled",true);
user_pref("layers.mlgpu.enabled", true);
user_pref("network.early-hints.enabled", true);
user_pref("network.early-hints.preconnect.enabled", true);
user_pref("network.fetchpriority.enabled", true);
user_pref("content.notify.interval", 100000);
user_pref("nglayout.initialpaint.delay", 50);
user_pref("nglayout.initialpaint.delay_in_oopif", 50);
user_pref("dom.ipc.processCount.webIsolated", 1);
user_pref("dom.ipc.processPrelaunch.fission.number", 2);
user_pref("dom.script_loader.bytecode_cache.enabled",true);
user_pref("dom.script_loader.bytecode_cache.strategy",-2);
user_pref("network.http.rcwn.enabled", false);
user_pref("browser.cache.jsbc_compression_level", 3);
