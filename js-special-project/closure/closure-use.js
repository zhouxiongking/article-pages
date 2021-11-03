// 1. 值缓存
var cachedBox = (function() {
  // 缓存的容器
  var cache = {};
  return {
    searchBox: function(id) {
      if (id in cache) {
        return '查找到的结果是：' + cache[id];
      }
      var result = dealFn(id);
      cache[id] = result;
      return '查找到的结果是：' + result;
    }
  };
})();

function dealFn(id) {
  console.log('这是一段耗时的操作');
  return id;
}

// 2. 封装 栈：先进后出  123 -> 321
var stack = (function() {
  var arr = [];
  return {
    push: function(value) {
      arr.push(value);
    },
    pop: function() {
      return arr.pop();
    },
    length: function() {
      return arr.length;
    }
  }
})();
stack.push(1);
stack.push(2);
console.log(stack.length());
