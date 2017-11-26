/**
 * 方法1
 * @description 对Date的扩展，将 Date 转化为指定格式的String
 *  月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *  年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @param fmt
 * @example  (new Date()).format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *           (new Date()).format("yyyy-M-d H:m:s.S")      ==> 2006-7-2 8:9:4.18
 * @returns {*}
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

var d = new Date();

console.log(d.format('yyyy-MM-dd HH:mm:ss.S')); // 2017-11-26 14:46:13.894
console.log(d.format('yyyy-MM-dd'));  // 2017-11-26
console.log(d.format('yyyy-MM-dd q HH:mm:ss'));  // 2017-11-26 4 14:46:13

/**
 * 方法2
 *  对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
    可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
    Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE HH:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE HH:mm:ss") ==> 2009-03-10 星期二 08:09:04
 */
Date.prototype.pattern = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    var week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

var d = new Date();
// 2017-11-26 日 15:01:44
console.log(d.pattern('yyyy-MM-dd E HH:mm:ss'));
// 2017-11-26 周日 15:01:44
console.log(d.pattern('yyyy-MM-dd EE HH:mm:ss'));
// 2017-11-26 4 星期日 15:01:22
console.log(d.pattern('yyyy-MM-dd q EEE HH:mm:ss'));


/**
 * 方法3
 * @param pattern
 * @returns {XML|void|string|*}
 */
Date.prototype.format = function (pattern) {
    function zeroize(num) {
        return num < 10 ? "0" + num : num;
    }
    var pattern = pattern;    //    YYYY-MM-DD 或 MM-DD-YYYY 或 YYYY-MM-DD , HH : mm : ss
    var dateObj = {
        "y": this.getFullYear(),
        "M": zeroize(this.getMonth() + 1),
        "d": zeroize(this.getDate()),
        "H": zeroize(this.getHours()),
        "m": zeroize(this.getMinutes()),
        "s": zeroize(this.getSeconds())
    };
    return pattern.replace(/yyyy|MM|dd|HH|mm|ss/g, function (match) {
        switch (match) {
            case "yyyy" :
                return dateObj.y;
            case "MM" :
                return dateObj.M;
            case "dd" :
                return dateObj.d;
            case "HH" :
                return dateObj.H;
            case "mm" :
                return dateObj.m;
            case "ss" :
                return dateObj.s;
        }
    });
};

var d = new Date();
// 2017-11-26 15:50:00
console.log(d.format('yyyy-MM-dd HH:mm:ss'));
// 2017-11-26
console.log(d.format('yyyy-MM-dd'));
// 2017-11-26 15:50
console.log(d.format('yyyy-MM-dd HH:mm'));

