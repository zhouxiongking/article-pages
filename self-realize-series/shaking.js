// 防抖函数
function shaking(fn, delay = 200) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn is not a function');
  }
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.call(this, ...args);
      }, delay);
    }
  }
}