/**
 * 判断回文字符串
 */
// 算法1
function isPalindromicStr1(str) {
    // 空字符则直接返回true
    if (!str.length) {
        return true;
    }
    // 统一转换成小写，同时转换成数组
    str = str.toLowerCase().split('');
    var start = 0, end = str.length - 1;
    // 通过while循环判断正序和倒序的字母
    while(start < end) {
        // 如果相等则更改比较的索引
        if(str[start] === str[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}

var str1 = 'abcdcba';
var str2 = 'abcedba';

isPalindromicStr1(str1);  // true
isPalindromicStr1(str2);  // false


// 算法2
function isPalindromicStr2(str) {
    // 字符串处理完成,则返回true
    if(!str.length) {
        return true;
    }
    // 字符串统一转换成小写
    str = str.toLowerCase();
    let end = str.length - 1;
    // 当首字符和尾字符不同,则直接返回false
    if(str[0] !== str[end]) {
        return false;
    }
    // 删掉字符串首尾字符,进行递归处理
    return isPalindromicStr2(str.slice(1, end));
}

var str1 = 'abcdcba';
var str2 = 'abcedba';

isPalindromicStr2(str1);  // true
isPalindromicStr2(str2);  // false

// 算法3
function isPalindromicStr3(str) {
    // 字符串统一转换成小写
    str = str.toLowerCase();
    // 将字符串转换成数组
    var arr = str.split('');
    // 将数组逆序并转换成字符串
    var reverseStr = arr.reverse().join('');
    return str === reverseStr;
}

var str1 = 'abcdcba';
var str2 = 'abcedba';

isPalindromicStr3(str1);  // true
isPalindromicStr3(str2);  // false

