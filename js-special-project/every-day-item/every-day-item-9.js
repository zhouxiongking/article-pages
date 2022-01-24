// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/153
// Done~~~
/**
 * 整数逆序输出  
 * 输入 int 型，返回整数逆序后的字符串。
 * 如：输入整型 1234，返回字符串“4321”。
 * 要求:
 *   必须使用递归函数调用，
 *   不能用全局变量，
 *   输入函数必须只有一个参数传入,
 *   必须返回字符串。
 */
// var n = 1234;
// n.toString().split('').reverse().join('');
// 方法1：使用字符串的API
// 1. int型数字 -> string
// 2. 长度只有一位 -> 结束，返回数字的字符串表示形式
// 3. 中间处理过程：截取字符串的最后一位，然后重复调用递归函数
function reverseNumber(n) {
  const str = n + '';
  if (str.length === 1) {
    return str;
  } else {
    const length = str.length;
    return str.substring(length - 1) + reverseNumber(str.substring(0, length - 1));
  }
}
const result1 = reverseNumber(1234);
const result2 = reverseNumber(89034);

// 方法2：数学思想
// 1. 结束条件：数字只有一位数，输出字符串形式
// Math.floor(n / 10) === 0
// 2. 处理过程：n % 10 取余数 + 递归调用
// 1234 % 10 = 4
function reverseNumber2(n) {
  const num = Math.floor(n / 10);
  if (!num) {
    return n.toString();
  } else {
    return (n % 10).toString() + reverseNumber2(num);
  }
}
// 1234 123.4 123
const result3 = reverseNumber2(7436234);
const result4 = reverseNumber2(7364208);
