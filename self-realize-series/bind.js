// 手撕bind
/**
 * 用法：
 * 1. 返回一个绑定了this的函数，函数并没有执行，需要手动执行
 * 2. bind可以绑定this，传递参数
 * 3. 如果bind绑定后的函数被new了，此时this指向发生改变，this指向当前函数的实例
 * 4. 构造函数上的属性和方法，每个实例都有
 */
Function.prototype.myBind = function (context) {
  let that = this;
  // 取出bind方法调用时传入的参数
  let args1 = Array.prototype.slice.call(arguments, 1);
  // 返回的新函数
  let bindFn = function () {
    // 取出返回的新函数调用时传入的参数
    let args2 = Array.prototype.slice.call(arguments);
    return that.call(
      this instanceof bindFn ? this : context,
      args1.concat(args2)
    );
  };
  // 修改this指向，产生继承关系
  let fn = function () {};
  fn.prototype = this.prototype;
  bindFn.prototype = new fn();
  return bindFn;
};

var value = "v in window";
function func() {
  arguments = [].splice.call(arguments, 0); //这一句是把参数转成数组，因为arguments不是数组，输出的时候容易观察
  console.log(arguments);
  console.log(this.value);
}
var obj = {
  value: "v in obj",
};
var newFunc = func.myBind(obj, 1, 2, 3);
newFunc(4, 5, 6);
