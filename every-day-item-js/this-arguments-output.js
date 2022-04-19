// 阿里面试题
// Done~~~
// this -> 函数的调用者
// arguments -> 函数实际传递的参数
var length = 1;
function fn() {
  console.log(this.length);
}
var obj = {
  length: 100,
  action: function(callback) {
    // 输出1
    callback(); // this -> window -> 1
    // 输出2
    // arguments -> [fn, 1, 2, 3, 4]
    // this -> 5
    arguments[0](); // arguments 
    // 输出3
    var foo = arguments[0];
    foo(); // this -> window -> 1
    // 输出4
    this.foo2 = arguments[0];
    this.foo2(); // this -> obj -> 100
  }
};
var arr1 = [1, 2, 3, 4];
obj.action(fn, ...arr1);

// 引题
var length = 1;
function foo() {
  console.log(this.length);
};
var arr2 = [foo, 2, 3];
arr2[0](); // foo this -> arr2 -> 3 

var f1 = arr2[0];
f1(); // this -> window -> 1
