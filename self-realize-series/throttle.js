// 节流函数
function throttle(fn, interval = 200) {
  // 标志位，表示是否可执行
  let flag = false;
  return function(...args) {
    if (!flag) {
      // 有一次执行后置为true，后面连续的执行会终止
      flag = true;
      setTimeout(() => {
        // 直到时间间隔结束后，置为false，后续的点击就可以执行
        flag = false;
        fn.call(this, ...args);
      }, interval);
    }
  };
}
