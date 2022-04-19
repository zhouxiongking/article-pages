// 多个异步函数如何同步执行？
// Done~~~
// 要求：
//  异步函数之间有关联关系，
//  前一个异步函数的输出作为后一个异步函数的输入

const add = x => x + 5;
const multiply = (x) => x * 5;
const subtraction = x => x - 5;
const division = x => x / 5;
const pipeFunctions = (...fns) => {
  // reduce
  return fns.reduce((preFn, curFn) => {
    return (...args) => {
      const res = preFn(...args);
      return curFn(res);
    };
  });
};
const targetFn = pipeFunctions(
  add, // 10
  multiply, // 50
  subtraction, // 45
  division // 9
);
targetFn(5);



// 异步
const asyncFn = (v) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(v);
    }, Math.random() * 1000);
  });
};

const add2 = async x => await asyncFn(x + 5);
const multiply2 = async (x) => await asyncFn(x * 5);
const subtraction2 = async x => await asyncFn(x - 5);
const division2 = async x => await asyncFn(x / 5);
const pipeFunctions2 = (...fns) => {
  return fns.reduce((preFn, curFn) => {
    return async(...args) => {
      const res = await preFn(...args);
      return curFn(res);
    };
  });
};
const targetFn2 = pipeFunctions2(
  add2,
  multiply2,
  subtraction2,
  division2,
);
// 如果直接使用node命令执行该文件，这里会保存，因为node环境下不能使用async/await关键字
// 需要使用babel进行编译
await targetFn2(5); // 9

const asyncFn2 = (v) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(v);
    }, Math.random() * 1000);
  });
};
