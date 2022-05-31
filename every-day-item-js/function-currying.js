// 函数柯里化编程题
// Done~~~
const sumFn = (...args) => {
  return args.reduce((a, b) => {
    return a + b;
  });
};

const sortFn = (...args) => {
  return args.sort((a, b) => a - b);
};

var currying = function (func) {
  const args = [];
  return function result(...rest) {
    if (rest.length === 0) {
      return func(...args);
    } else {
      args.push(...rest);
      return result;
    }
  };
};

currying(sumFn)(1)(2)(3)(); // 6
currying(sumFn)(1, 2)(3, 4)(5)(); // 15
currying(sumFn)(1)(2, 3, 4, 5)(6)(); // 21
currying(sortFn)(1)(3)(2)(6, 4)(5)();

// 函数柯里化
// 柯里化通常也称部分求值，其含义是给函数分步传递参数，
// 每次传递参数进行处理，并返回一个更具体的函数接受剩下的参数，
// 这中间可嵌套多层这样的接收部分参数函数，直至返回最后结果。
function add(x, y) {
  return x + y;
}
add(1, 2); // 3

function add(x) {
  return function (y) {
    return x + y;
  };
}
add(1)(2);

// 方法2：通过fn.length和已经获取到的传入参数进行比较
function curry(f, ...savedArgs) {
  return function () {
    const args = [...savedArgs, ...arguments];
    // 当实际接收的参数已经和函数的形参长度相等了，表示已经传递完了
    // f.length是函数的形参个数
    // 如果在ES6里，length指向的是第一个具有默认值的形参之前的形参个数
    if (args.length >= f.length) {
      return f(...args);
    }
    return curry(f, ...args);
  };
}

function add(a, b, c) {
  return a + b + c;
}

curry(add)(1)(2)(3);
curry(add)(1, 2)(3);
curry(add)(1)(2, 3);
curry(add)(1, 2, 3);

// 在ES6里，关于函数的length属性
function fn1 (a,b) {} // 因为 a, b 都没有默认值，length 的值为 2
function fn2 (a=1,b) {} // 因为 a 为“第一个具有默认值的形参”，而a的前面没有其它形参了，所以 length 为 0
function fn3 (a,b=1,c) {} // b为 “第一个具有默认值的形参”，前面还有a, length 值为 1
function fn4 (a,b,c=1) {} // length 值为 2
function fn5 (a,b=1,c,d=2) {} // length 值为 1 (第一个具有默认值的形参为b,前面只有a)
