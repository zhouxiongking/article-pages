/**
 * 1 使用字符串的replace()方法
 * @param {*} str 
 */
function getMaxCount(str) {
  var maxCount = 0;
  var maxCountChar = '';
  while(str) {
    var length = str.length;
    var char = str.charAt(0);
    var reg = new RegExp(char, 'g');
    str = str.replace(reg, '');
    var restLength = str.length;
    var charCount = length - restLength;
    if (charCount > maxCount) {
      maxCount = charCount;
      maxCountChar = char;
    }
  }
  return '出现次数最多的字符为：' + maxCountChar + ', 出现的次数为：' + maxCount;
}