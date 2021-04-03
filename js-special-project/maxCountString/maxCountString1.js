/**
 * key-value  key: 出现的字符，value：字符的次数
 * @param {*} str 
 */
function getMaxCount(str) {
  var json = {};
  for (var i = 0; i < str.length; i++) {
    // 假如获取的字符在json里面，次数就+1，否则就新增一个key，value是1
    if (!json[str.charAt(i)]) {
      json[str.charAt(i)] = 1;
    } else {
      json[str.charAt(i)]++;
    }
  }
  // 获取出现次数最多的字符，以及出现的次数
  var maxCountChar = '';
  var maxCount = 0;
  for (var key in json) {
    if (json[key] > maxCount) {
      maxCount = json[key];
      maxCountChar = key;
    }
  }
  // 最终输出结果
  return '出现次数最多的字符为：' + maxCountChar + ', 出现的次数为：' + maxCount;
}

var str = 'hellojavascripthellohtmlhellocss';
console.log(getMaxCount(str));