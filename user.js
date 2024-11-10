//cacheonram: to reduce i/o on ssd and make better use of ram without the fuss of creating ramdisk
user_pref("browser.cache.disk.enable",false);
user_pref("browser.cache.disk.capacity",0);
user_pref("browser.cache.memory.enable",true);
user_pref("browser.cache.memory.capacity",512000); //512MB, can change value < half of all ram, otherwise is bloat and waste of ram
user_pref("browser.sessionhistory.max_total_viewers", 4);// sane No. of sessions stored per tab

//scrolling
user_pref("general.smoothScroll",true);
user_pref("general.smoothScroll.msdPhysics.enabled",true);

//privacy
user_pref("network.captive-portal-service.enabled",false);

//rendering
user_pref("media.ffmpeg.vaapi.enabled",true);
user_pref("browser.preferences.defaultPerformanceSettings.enabled",false);
