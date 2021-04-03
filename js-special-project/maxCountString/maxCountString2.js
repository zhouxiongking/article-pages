/**
 * 1 字符串处理成一个数组，调用sort()排序，再转变成字符串
 * 2 便利每个字符，调用lastIndexOf()方法
 * 3 与最大的次数maxCount进行比较，如果比maxCount大，就更新maxCount
 *   否则，继续
 * @param {*} str 
 */
function getMaxCount(str) {
  var maxCount = 0;
  var maxCountChar = '';
  str = str.split('').sort().join('');
  for (var i = 0, j = str.length; i < j; i++) {
    var char = str.charAt(i);
    var charCount = str.lastIndexOf(char) - i + 1;
    if (charCount > maxCount) {
      maxCount = charCount;
      maxCountChar = char;
    }
    i = str.lastIndexOf(char);
  }
  return '出现次数最多的字符为：' + maxCountChar + ', 出现的次数为：' + maxCount;
}

var str = 'hellojavascripthellohtmlhellocss';
console.log(getMaxCount(str));