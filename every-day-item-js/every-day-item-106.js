// 假设你本地没有加法计算能力，现在给你提供一个远程加法计算功能，
// 请实现 add 方法，使用远程计算能力算出结果。假设并发数无限制。
// 要求：考虑时间复杂度

/**
 * @param a number
 * @param b number
 * @return number
 **/
async function remoteAdd(a, b) {
  //注意参数只能有2个，这部分不需要改动
  const time = Math.ceil(Math.random() * 100);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, time);
  });
}

async function add(...args) {
  // todo，需要实现的部分
}

async function test() {
  const res1 = await add(1, 2);
  console.log(res1); // 3
  const res2 = await add(1, 2, 3, 5);
  console.log(res2); // 11
}
