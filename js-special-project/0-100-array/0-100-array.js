// 1. fill
var arr1 = new Array(100)
  .fill(0)
  .map((i, index) => index + 1);
// 2. Array.from
var arr2 = Array.from(Array(100), (i, index) => index + 1);
// 3.扩展运算符...
var arr3 = [...Array(100).keys()].map((i, index) => index + 1);