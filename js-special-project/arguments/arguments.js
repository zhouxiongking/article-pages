// 函数参数
// 1.形参，接收函数在调用的时候传入的具体参数值
// 2.实参，调用的时候传入的具体值
// 区别。
// 1.
function fn1() {
  var param = 'hello';
  fn2(param);
}

function fn2(arg) {
  console.log(arg);
  console.log(param);
}
fn1();

// 2. 强类型语言，数量、数据类型、顺序。
function fn(str, num) {

}
fn([], '');

// 3.实参和形参做改变
// 3.1 实参是基本类型的值，
var arg = 1;
function fn(param) {
  console.log(param);
  param = 2;
}
fn(arg);
console.log(arg);

// 3.2 实参是引用类型，实参和形参将会指向同一个内存地址
var arg2 = { name: 'kingx' };
function fn2(param) {
  param.name = 'kingx2';
  param = {}; // 改变了形参的指向
}
fn2(arg2);
console.log(arg2);

// 1.函数可以不定义形参，函数体内可以通过arguments这个变量来获取
// 2.函数参数个数，数据类型不一定要相同

