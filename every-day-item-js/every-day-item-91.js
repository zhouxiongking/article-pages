// https://juejin.cn/post/7081655211097325599
/**
  add[1][2][3] + 4 // 10
  add[10][20] + 30 // 60
  add[1000][2000][3000] + 4000 // 10000
 */
const add = new Proxy({ sum: 0 }, {
  get(target, property, receiver) {
    if (property === Symbol.toPrimitive) {
      const tmp = target.sum;
      target.sum = 0;
      return () => tmp;
    }
    target.sum += Number(property);
    return receiver;
  }
});
add[1][2][3] + 4;



// const foo = function(...args) {}  // 要求实现函数体
// foo(1, 2, 3); // 6
// foo(1)(2, 3); // 6
// foo(1)(2)(3)(4); // 10

function argsSum(args) {
  return args.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
}

const foo = (...args1) => {
  const sum1 = argsSum(args1);
  const fn = (...args2) => {
    let sum2 = argsSum(args2);
    return foo(sum1 + sum2);
  };
  fn.toString = function() {
    return sum1;
  };
  return fn;
};
