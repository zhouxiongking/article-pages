// 函数柯里化
// const foo = function(...args) {}

// foo(1, 2, 3) == 6; // true
// foo(1)(2, 3) == 6; // true
// foo(1)(2)(3)(4) == 10; // true

function argsSum(args) {
  return args.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
}

const foo = (...args1) => {
  const sum1 = argsSum(args1);
  const fn = (...args2) => {
    const sum2 = argsSum(args2);
    return foo(sum1 + sum2);
  };
  // 核心内容
  fn.toString = () => {
    return sum1;
  };
  return fn;
};
console.log(foo(1, 2, 3) == 6); // true
console.log(foo(1)(2, 3) == 6); // true
console.log(foo(1)(2)(3)(4) == 10); // true
