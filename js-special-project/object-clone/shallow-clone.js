// 浅克隆1：简单的引用复制
// 主要思想：遍历对象的最外层属性，把属性值复制到另一个对象中
function shallowClone1(origin) {
  var result = {};
  for (var key in origin) {
    // 判断属性是否是自身的
    if (origin.hasOwnProperty(key)) {
      result[key] = origin[key];
    }
  }
  return result;
}
var origin = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 'name'
  },
};
var result1 = shallowClone1(origin);

// 浅克隆2：Object.assign()
var result2 = Object.assign({}, origin);