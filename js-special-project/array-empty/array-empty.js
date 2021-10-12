// 
var a = [1, 2, 3, 4];
// splice 1:索引  2：长度 3...n: 插入
function emptyArr(arr) {
  return arr.splice(0, arr.length);
}
var ra = emptyArr(a);

// 方法2： 直接置空=> 
a = [];
var b = [1, 2, 3, 4];
var c = b;
b = [];
console.log(c);

// 方法3：length = 0;
var d = [1, 2, 3, 4];
var e = d;
d.length = 0;