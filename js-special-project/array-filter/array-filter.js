// 1. 返回一个新的数组，过滤每个元素符合条的值
// 
var arr = [1, 2, 3, 4, 5];
arr.filter(function(currentValue, index, arr) {

}, thisValue);
// 2. 过滤奇数值
var arr = [1, 2, 3, 4, 5];
arr.filter(function(currentValue) {
  var result = currentValue % 2 !== 0;
  return result;
});
// 3. filter 数组去重
var arr = [1, 3, 4, 1, 5, 6, 3];
arr.filter(function(current, index, self) {
  var newIndex = self.indexOf(current);
  return newIndex === index;
});
// 1 0 0  => 1
// 3 1 1  => 3
// 4 2 2  => 4
// 1 0 3  !=> 1 不输出
// 3 1 6  !=> 3 不输出 

// 4. filter 过滤数组中的素数值
// 4.1 判断素数的方法
// 4.2 通过filter调用方法
var isPrime = function(number) {
  if (number === 2) {
    return true;
  }
  var square = Math.sqrt(number);
  for (var i = 2; i <= square; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
var arr = [];
for (var j = 2; j <= 100; j++) {
  arr.push(j);
}
arr.filter(isPrime);
