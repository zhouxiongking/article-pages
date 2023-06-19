// 1. 只能在代码快内访问
{
  let a = 10;
  var b = 5;
}
a; // ReferenceError: a is not defined
b; // 5，可以正常访问

// 2. 循环的索引适合使用let
for (var i = 0; i < 5; i++) {}
var i;
console.log(i);

for (let i = 0; i < 5; i++) {}
console.log(i);
