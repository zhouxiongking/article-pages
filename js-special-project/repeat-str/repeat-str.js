// 重复字符串
// abc 3 => abcabcabc 

// 使用递归
function repeat1(target, n) {
  if (n === 1) {
    return target;
  }
  return [].concat([target], repeat1(target, n - 1)).join('');
}
// [].concat(['abc']);  // [abc]
// ['abc'].concat(['abc']) //[abc, abc]
var r1 = repeat1('abc', 4);

// join()
function repeat2(target, n) {
  return Array(n + 1).join(target);
}
var r2 = repeat2('abc', 4);

// 
function repeat3(target, n) {
  return Array.prototype.join.call(
    { length: n + 1 }, target
  );
}
var r3 = repeat3('abc', 4);
