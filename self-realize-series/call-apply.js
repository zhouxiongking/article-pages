// 手撕call和apply
/**
 * call作用
 * 1. 改变this的指向，指向传入的参数
 * 2. 函数本身得到执行
 */
Function.prototype.myCall = function(context) {
  if (!context) {
    context = typeof window == undefined ? global : window;
  }
  if (typeof context !== undefined && typeof context !== 'function' && typeof context !== 'object') {
    context = Object(context);
  }
  // 取出参数
  const args = [...arguments].slice(1);
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

function getName() {
  return this.name;
}

const t = { name: 'kingx1' };
const res = getName.myCall(t);
console.log(res);

