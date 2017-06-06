/**
 * 将数值四舍五入(保留2位小数)后格式化成金额形式
 *
 * @param num 数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.45'
 * @type String
 */
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    // 判断正负数
    sign = (num == (num = Math.abs(num)));
    // 小数位的舍入
    num = Math.floor(num * 100 + 0.50000000001);
    // 小数位
    cents = num % 100;
    num = Math.floor(num / 100).toString();

    if (cents < 10)
        cents = "0" + cents;

    // 拼接整数位
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));

    // 返回结果，拼接小数位
    return (((sign) ? '' : '-') + num + '.' + cents);
}


/*
 * 参数说明：
 * s：要格式化的数字
 * n：保留几位小数
 */
function fmoney(s, n) {

    n = n > 0 && n <= 20 ? n : 2;
    // 转化为float类型数据,四舍五入
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    // 通过小数点分割,并逆序
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];

    var t = "";

    // 拼接整数位
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    // 整数位逆序后,拼接小数位
    return t.split("").reverse().join("") + "." + r;
}

// 测试
fmoney(9.7, 2); // 9.70
fmoney('12345.675910', 3); // 12,345.676




/**
 * 参数说明：
 * number：要格式化的数字
 * decimals：保留几位小数
 * dec_point：小数点符号
 * thousands_sep：千分位符号
 * roundtag:舍入参数，默认 "ceil" 向上取, "floor"向下取, "round" 四舍五入
 */
function number_format(number, decimals, dec_point, thousands_sep, roundtag) {

    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    roundtag = roundtag || "ceil";  // "ceil", "floor", "round"

    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',

        s = (prec ? toFixedFix(n, prec, roundtag) : '' + Math.floor(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

/**
 * 根据参数进行取整
 * @param n, 转化的数字
 * @param prec, 保留小数位数
 * @param roundtag, 向上,向下,四舍五入
 * @returns {string}
 */
function toFixedFix(n, prec, roundtag) {
    var s = n.toString();
    var sArr = s.split(".");
    var m = 0;
    try {
        m += sArr[1].length;
    }
    catch (e) {
    }

    if (prec > m) {
        return s;
    } else {
        sArr[1] = Math[roundtag](Number(sArr[1]) / Math.pow(10, m - prec));
        return sArr.join('.');
    }
}

console.log(number_format(3.7, 2, ".", ",")); //"3.70"
console.log(number_format(3, 0, ".", ","));  //"3"
console.log(number_format(9.00, 2, ".", ",")); //"9.00"
console.log(number_format(39.715001, 2, ".", ",", "floor")); //"39.71"
console.log(number_format(9.7, 2, ".", ",")); //"9.70"
console.log(number_format(39.7, 2, ".", ",")); //"39.70"
console.log(number_format(9.70001, 2, ".", ",")); //"9.71"
console.log(number_format(39.70001, 2, ".", ",")); //"39.71"

