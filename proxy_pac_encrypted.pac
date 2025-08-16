
// ==== PAC File مشفر AES + Obfuscation ====
if (typeof CryptoJS === 'undefined') {
    importScript("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js");
}

var encryptedPAC = CryptoJS.AES.encrypt('\nfunction FindProxyForURL(url, host) {\n    var directSites = ["localhost","127.0.0.1","*.example.com"];\n    var blocked = ["*.google-analytics.com","*.facebook.com","*.doubleclick.net","*.hotjar.com","*.mixpanel.com"];\n    for (var i=0;i<directSites.length;i++){if(shExpMatch(host,directSites[i])) return "DIRECT";}\n    for (var j=0;j<blocked.length;j++){if(shExpMatch(host,blocked[j])) return "DIRECT";}\n    return "PROXY 213.186.179.25:8000";\n}\n', "Zz@123#aA@990$Qq").toString();

function decryptPAC(key) {
    try {
        var decrypted = CryptoJS.AES.decrypt(encryptedPAC, key).toString(CryptoJS.enc.Utf8);
        if (!decrypted) throw "فشل فك التشفير. المفتاح غير صحيح.";
        return decrypted;
    } catch (e) {
        alert(e);
        return "DIRECT";
    }
}

function FindProxyForURL(url, host) {
    var key = prompt("ادخل مفتاح التثبيت للفك:");
    var pacCode = decryptPAC(key);
    return eval(pacCode);
}
