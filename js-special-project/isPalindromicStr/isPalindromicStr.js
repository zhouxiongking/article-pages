/**
 * 将字符串从前往后，以及从后往前逐个进行比较，如果比较到
 * 中间位，字符都是一样的，那么就是回文字符串，否则就不是
 * @param {*} str 
 */
function isPalindromicStr1(str) {
  if (!str.length) return true;
  str = str.toLowerCase().split('');
  var start = 0;
  var end = str.length - 1;
  while(start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

var str1 = 'abcdcba';
var str2 = 'abcfeba';
console.log(isPalindromicStr1(str1));
console.log(isPalindromicStr1(str2));


/**
 * 将字符串从前往后，以及从后往前逐个进行比较，如果比较到
 * 中间位，字符都是一样的，那么就是回文字符串，否则就不是
 * 使用递归的方式
 * @param {*} str 
 */
function isPalindromicStr2(str) {
  if (str.length <= 1) return true;
  str = str.toLowerCase();
  var startValue = str[0];
  var endValue = str[str.length - 1];
  if (startValue === endValue) {
    return isPalindromicStr2(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

var str1 = 'abcdcba';
var str2 = 'abcfeba';
console.log(isPalindromicStr2(str1));
console.log(isPalindromicStr2(str2));

/**
 * 将字符串进行逆序处理
 * @param {*} str 
 */
function isPalindromicStr3(str) {
  str = str.toLowerCase();
  var reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

var str1 = 'abcdcba';
var str2 = 'abcfeba';
console.log(isPalindromicStr3(str1));
console.log(isPalindromicStr3(str2));
