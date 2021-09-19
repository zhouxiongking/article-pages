// 一个拥有许多变量和绑定这些变量执行上下文环境的表达式
// 通常是一个函数
function fn() {
  var max = 10;
  return function (x) {
    if (x < max) {
      console.log(x);
    }
  }
}
var f1 = fn();
f1(9);

// setTimeout for [...]
var arr = ['one', 'two', 'three'];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i]);
  }, i * 1000);
}
// for i = 0;             for i = 1               for i = 2               for i = 3
// setTimeout(0) arr[i] setTimeout(1000) arr[i]  setTimeout(2000) arr[i] 
// arr[3] undefined
var arr = ['one', 'two', 'three'];
for (var i = 0; i < arr.length; i++) {
  (function(index){
    setTimeout(function() {
      console.log(arr[index]);
    }, index * 1000);
  })(i);
}

// for i = 0;             for i = 1               for i = 2               for i = 3
// setTimeout(0) arr[0] setTimeout(1000) arr[1]  setTimeout(2000) arr[2] 