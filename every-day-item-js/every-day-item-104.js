// https://blog.csdn.net/weixin_30709809/article/details/99894868
// javascript实现deepEqual和shallowEqual

// 对比两个参数(可能是数组、对象、数字、字符串)
// 如果完全相同，则返回true
// 如果不相同，则返回false

function deepEqual(a, b) {
  // TODO: 实现对比方案
}

deepEqual(1, 1); // => true
deepEqual(1, 2); // => false
deepEqual(1, "1"); // => false
deepEqual([1, 2], [1, 2]); // => true
deepEqual([1, { a: 1, b: 2 }], [1, { a: 1, b: 2 }]); // => true
deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // => true
deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }); // => false
deepEqual({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] }); // => true
