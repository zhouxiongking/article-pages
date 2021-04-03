/**
 * 1 字符串处理成数组，调用sort排序，再处理成字符串
 * 2 设置一个正则
 * 3 依次去判断与maxCount去做比较，如果比maxCount大，就更新maxCount，
 *   否则就不做处理
 * @param {*} str 
 */
function getMaxCount(str) {
  var maxCount = 0;
  var maxCountChar = '';
  str = str.split('').sort().join('');
  var arr = str.match(/(\w)\1+/g);
  for (var i = 0; i < arr.length; i++) {
    // 字符出现的次数
    var length = arr[i].length;
    if (length > maxCount) {
      maxCount = length;
      maxCountChar = arr[i][0];
    }
  }
  return '出现次数最多的字符为：' + maxCountChar + ', 出现的次数为：' + maxCount;
}

var str = 'hellojavascripthellohtmlhellocss';
console.log(getMaxCount(str));