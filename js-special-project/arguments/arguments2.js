// 1.函数外部是无法访问的
function foo() {
  console.log(typeof arguments);
}

foo();

// 2.可以通过索引进行访问
function sum (num1, num2) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

sum(1, 2);

// 3.由实参决定的
// 3.1 arguments的length值在调用时就已经确定，不会随着
//     函数的执行而改变
// 3.2 指定的形参在传递了实参的情况下，arguments和形参
//     值保持相同，并且可以互相改变
// 3.3 没有传递实参的情况下，返回undefined
// 3.4 指定了一个形参，没有传递实参的情况下，arguments
//     和形参不能互相改变
function foo(a, b, c) {
  // 3.1
  console.log(arguments.length);
  // arguments[2] = 3;
  console.log(arguments.length);
  // 3.2
  b = 12;
  console.log(arguments[1]);
  // 3.3 
  console.log(c);
  // arguments[2] = 3;
  console.log(c);
  // 3.4 
  c = 13;
  console.log(arguments[2]);
}

foo(1, 2);

// 4.特殊的arguments.callee属性
function fn () {
  console.log(arguments.callee === fn);
}
fn();

function create() {
  return function (n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * arguments.callee(n - 1);
    }
  }
}
var result = create()(5);
console.log(result);