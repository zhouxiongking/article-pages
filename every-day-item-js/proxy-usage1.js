// https://juejin.cn/post/7081655211097325599
/**
  add[1][2][3] + 4 // 10
  add[10][20] + 30 // 60
  add[1000][2000][3000] + 4000 // 10000
 */
// ES6 Proxy
const source = { sum: 0 };
const add = new Proxy(source, {
  get: function (target, property, receiver) {
    // 遇到 + 的操作，会触发隐士类型转换，Symbol.toPrimitive
    if (property === Symbol.toPrimitive) {
      // 将之前计算过的所有的和进行返回，用于后续运算
      const tmp = target.sum;
      // 清空之前的值，不影响后续代理器的访问
      target.sum = 0;
      // Symbol.toPrimitive是函数内部属性，所以需要返回一个函数
      return () => tmp;
    } else {
      // 简单的属性访问，直接累加
      target.sum += Number(property);
      return receiver;
    }
  },
});

const r1 = add[1][2][3] + 4;
const r2 = add[10][20] + 30;
const r3 = add[1000][2000][3000] + 4000;
console.log(r1);
console.log(r2);
console.log(r3);
