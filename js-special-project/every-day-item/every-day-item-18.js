// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/387
// Done~~~~
/**
 * 实现 Promise.retry，重试异步函数
 * 异步函数执行成功后 resolve 结果，
 * 失败后重试，尝试超过一定次数才真正的 reject
 */
// 1. 异步函数 Promise和setTimeout
// 2. Promise.retry 重试Promise
function fn() {
  const n = Math.random(); // 0-1
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0.7) {
        resolve(n);
      } else {
        reject(n);
      }
    }, 1000);
  });
}
Promise.retry = (fn, times) => {
  new Promise(async (resolve, reject) => {
    while(times--) {
      try {
        const res = await fn();
        console.log('执行成功，得到的结果是:', res);
        resolve(res);
        break;
      } catch(error) {
        console.log('执行失败一次，得到的结果是:', error);
        if (!times) {
          reject(error);
        }
      }
    }
  }).catch(() => {
    console.log('全部此时尝试完成，仍然失败');
  });
};
Promise.retry(fn, 3);
