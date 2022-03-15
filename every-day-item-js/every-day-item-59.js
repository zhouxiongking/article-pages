// 阿里面试题1
var length = 1;
function fn() {
  console.log(this.length);
}
var obj = {
  length: 100,
  action: function(callback) {
    // 输出1
    callback();
    // 输出2
    arguments[0]();  // arguments => [fn, 1, 2, 3, 4]
    // 输出3
    var foo = arguments[0];
    foo();
    // 输出4
    this.foo2 = arguments[0];
    this.foo2();
  }
};
const arr = [1, 2, 3, 4];
obj.action(fn, ...arr);

// 引题
var length = 1;
function foo() {
  console.log(this.length);
};
var arr = [fn, 2, 3];
arr[0](); // 3

var f1 = arr[0];
f1(); // 1
