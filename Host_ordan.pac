function FindProxyForURL(url, host) {
    // قائمة نطاقات لعبة PUBG Mobile (موسع + تجنيد + بحث + دخول)
    var pubgDomains = [
        "*.pubgmobile.com",      // النطاق الرسمي
        "*.igamecj.com",         // سيرفرات اللعبة
        "*.tencentgames.com",    // Tencent
        "*.qcloudcdn.com",       // CDN Tencent Cloud
        "*.proximabeta.com",     // Proxima Beta
        "*.pubgmobile.kr",       // النسخة الكورية
        "*.pubgmobile.tw",       // النسخة التايوانية
        "*.pubgm.qq.com",        // النسخة الصينية
        "*.gcloud.qq.com",       // خدمات GCloud
        "*.tencent-cloud.net",   // Tencent Cloud
        "*.wegame.com",          // WeGame
        "*.aws.amazon.com",      // Amazon AWS (بعض السيرفرات)
        "*.akamaized.net",       // Akamai CDN
        "*.qcloud.com",          // Tencent Cloud
        "*.gamecdn.qq.com",      // CDN خاص
        "*.cdn.pubg.com",        // تحديثات
        "*.playpubgmobile.com",  // روابط رسمية
        "*.pubgmobile-light.com",// نسخة لايت
        "*.auth.pubgmobile.com",   // تسجيل الدخول
        "*.match.pubgmobile.com",  // البحث عن مباريات
        "*.api.pubgmobile.com",    // API (دعوات - تجنيد - Matchmaking)
        "*.gateway.pubgmobile.com",// بوابة الدخول
        "*.lobby.pubgmobile.com",  // إدارة اللوبي
        "*.cloudmatch.pubgmobile.com", // سيرفرات بحث سحابية
        "*.recruit.pubgmobile.com" // التجنيد والدعوات
    ];

    // إذا كان الموقع ضمن قائمة PUBG → مرّره عبر البروكسي
    for (var i = 0; i < pubgDomains.length; i++) {
        if (shExpMatch(host, pubgDomains[i])) {
            return "PROXY 213.186.179.25:8000";
        }
    }

    // باقي المواقع → اتصال مباشر بدون بروكسي
    return "DIRECT";
}
