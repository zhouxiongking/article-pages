// 参考文章：https://zhuanlan.zhihu.com/p/461945753
const lodash = function() {
  var root = global;
  var oldDash = root._;

  // 引发内存泄露的根源
  function noConflict() {
    if (root._ === this) {
      root._ = oldDash;
    }
    return this;
  }

  var runInContext = function runInContext(context) {
    function lodash() {}
    lodash.longStr = new Array(1000000).fill('*');
    
    return lodash;
  };

  var _ = runInContext();
  root._ = _;
};

setInterval(() => lodash.call(this), 200);

setInterval(() => {
  const { heapUsed } = process.memoryUsage();
  const used = heapUsed / 1024 / 1024;
  console.log('------', `${used.toFixed(2)}MB`);
}, 1000);

// 但是闭包对象是 fixedarray 链表，
// oldDash 并不是没引用到，
// 它正是被 noConflict 引用了所以会添加到闭包对象里，
// 这里没有被使用的是 noConflict 而非 oldDash。
// 所以看后面的对比测试，同样的代码把 noConflict 注释掉，则不会泄露。