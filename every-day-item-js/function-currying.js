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
  }
};

currying(sumFn)(1)(2)(3)();  // 6
currying(sumFn)(1, 2)(3, 4)(5)(); // 15
currying(sumFn)(1)(2, 3, 4, 5)(6)();  // 21
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
