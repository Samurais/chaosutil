/* format string value with arguments */
String.prototype.format = String.prototype.f = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

/* if a string ends with a given suffix */
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

/* if a string starts with a given prefix */
String.prototype.startsWith = function(str) {
    return this.indexOf(str) === 0;
};

window.isMobile = {
    ua: (function() {
        return navigator.userAgent.toLowerCase();
    })(),
    Wechat: function() {
        return /micromessenger/i.test(this.ua);
    },
    Android: function() {
        return /android/i.test(this.ua);
    },
    BlackBerry: function() {
        return /blackberry/i.test(this.ua);
    },
    iOS: function() {
        return /iphone|ipad|ipod/i.test(this.ua);
    },
    Windows: function() {
        return /IEMobile/i.test(this.ua);
    },
    Macintosh: function(){
        return /macintosh/i.test(this.ua);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};
