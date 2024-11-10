//cacheonram: to reduce i/o on SSD and make better use of ram without the fuss of creating ramdisk, ENSURE RAM IS NOT THE BOTTLENECK BEFORE USAGE
user_pref("browser.cache.disk.enable",false);
user_pref("browser.cache.disk.capacity",0);
user_pref("browser.cache.memory.enable",true);
user_pref("browser.cache.memory.capacity",512000); //512MB, should change value < quater of all ram, otherwise is bloat and waste of ram
user_pref("browser.sessionhistory.max_total_viewers", 4);// sane No. of sessions stored per tab, to reduce cache accumulation

//scrolling for better visuals, only recommended for refresh rates 60Hz<#<75Hz,otherwise checkout smoothfox
user_pref("general.smoothScroll",true);
user_pref("general.smoothScroll.msdPhysics.enabled",true);

//privacy: remove extra pinging to servers for checking internet connectivity
user_pref("network.captive-portal-service.enabled",false);
//Additional tweaks
//Lv.1 Disable sessin restore, search suggestions
//Lv.2 Ublock origin installed + strict mode for Enhanced Tracking Protection, Clear browsing history on exit for those who don't bother login everytime, HTTPS only, DNS-over-HTTPS (1.1.1.1, Rethinkdns...)
//Lv.3 arkenfox user.js recommendations or directly use librewolf for max privcay


//rendering tweaks: hardware acceleration tweaks for power efficiency
user_pref("media.ffmpeg.vaapi.enabled",true);
user_pref("browser.preferences.defaultPerformanceSettings.enabled",false);
