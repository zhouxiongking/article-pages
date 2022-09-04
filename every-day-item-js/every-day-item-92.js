// https://blog.csdn.net/yimawujiang/article/details/88638899
// 函数的链式调用
/**
 * 主要思想：
 * 1. 利用数组存储所有访问过的函数
 * 2. 需要通过Proxy来控制，在访问到函数名时，push到数组中
 * 3. 当访问到do属性时，调用链结束，依次执行数组中的所有函数
 */
var pipe = function (value) {
  let fnStack = [];
  return new Proxy(
    {},
    {
      get: function (target, property, receiver) {
        if (property === "do") {
          const result = fnStack.reduce((pre, curFn) => {
            return curFn(pre);
          }, value);
          return result;
        } else {
          fnStack.push(window[property]);
          return receiver;
        }
      },
    }
  );
};

var add = (n) => n + 2;
var sub = (n) => n - 2;
var double = (n) => n * 2;
var pow = (n) => Math.pow(n, n);

var res1 = pipe(2).double.pow.do; // 256 = 2 * 2 = 4 4 ^ 4 = 256
var res2 = pipe(4).add.double.do; // 12 = (4 + 2) * 2
var res3 = pipe(6).sub.add.double.do; // 12 = (6 - 2 + 2) * 2
console.log(res1);
console.log(res2);
console.log(res3);
