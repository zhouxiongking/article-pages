// 函数式编程
const add = n => n + 1;
const double = n => n * 2;

function compose(...args) {
  return function (x) {
    return args.reduceRight((v, f) => {
      return f(v);
    }, x)
  }
}

const fn = compose(add, double);
const r1 = fn(1);
console.log(r1);