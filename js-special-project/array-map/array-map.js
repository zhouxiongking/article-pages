// 1. 返回一个数组，每个元素都是经过函数处理
// 后的返回结果
var arr = [1, 2, 3];
arr.map(function (currentValue, index, arr) {

}, thisValue);
// 2. 不会对原来的数组值有影响
var arr = [1, 2, 3];
arr.map(function(currentValue) {
  const result = currentValue * currentValue;
  // return result;
});
// 3. 字符串去调用map方法
// 3.1 借助call
var str = 'hello javascript';
var fn = function(currentValue) {
  return currentValue.charCodeAt(0);
};
Array.prototype.map.call(str, fn);
// 4. map和parseInt
var arr = ['0', '1', '2'];
// arr.map(parseInt);
var fn = function(currentValue) {
  return parseInt(currentValue, 10);
}
arr.map(fn);

parseInt('0', 0);  // 0
parseInt('1', 1);  // NaN radix 2-36
parseInt('2', 2);  // 0 1 NaN
