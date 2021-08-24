var a = [4, 6, 2, 8];
a.reduce(function(
  accumulator, 
  currentValue,
  currentIndex,
  array
) {
  console.log(
    accumulator, 
    currentValue, 
    currentIndex,
    array
  );
}, {});

// 数组元素求和的方法
var b = [1, 7, 8, 3, 6];
b.reduce(function(pre, cur) {
  var result = pre + cur;
  return result;
}, 0);

// 计算过程
// pre: 0 cur: 1 result: 1
// pre: 1 cur: 7 result: 8
// pre: 8 cur: 8 result: 16

// 统计数组中的元素出现的次数
/**
 * 会用key-value存储
 * key：数组中的不重复的元素
 * value：元素出现的次数
 */
function keywordCount(arr) {
  var result = arr.reduce(function(pre, cur) {
    if (!pre[cur]) {
      pre[cur] = 1;
    } else {
      pre[cur]++;
    }
    return pre;
  }, {});
  console.log(result);
}

var c = [1, 2, 3, 2, 2, 5, 1];
keywordCount(c);