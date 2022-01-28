// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/63
// Done~~~
/**
 * 实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒，
 * 可从 Promise、Generator、Async/Await 等角度实现
 */
const sleep = {
  sleepInPromise: function (time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });
  },
  sleepInGenerator: function*(time) {
    yield new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });
  }
};

const targetFn = function() {
  console.log('一秒后执行');
};
// Promise测试
// sleep.sleepInPromise(1000).then(targetFn);
// Generator测试
// sleep.sleepInGenerator(1000).next().value.then(targetFn);
// Async/Await测试
async function testAsync(time) {
  await sleep.sleepInPromise(time);
  targetFn();
}
// testAsync(1000);
// 使用ES5的写法
setTimeout(targetFn, 1000);