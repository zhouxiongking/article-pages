// 1. 什么是对象
// 无序属性的集合，属性值可以为基本类型或者引用类型
// 键值对
var obj = {
  name: 'kingx'
};
// 2. 对象属性
// 2.1 数据属性
/**
 * 1. [[Configurable]] - 是否能删除，并且能重新定义，默认为true
 * 2. [[Enumerable]] - 可以枚举，for...in，默认为true
 * 3. [[Writable]] - 可修改，默认值为true
 * 4. [[Value]] - 真实值 
 */
var obj = {
  name: 'kingx'
};
Object.defineProperty(obj, 'name', {
  writable: false,
});
obj.name = 'kingx2';
console.log(obj.name);
var obj = {
  name: 'kingx',
  age: 12,
};
for (const key in obj) {
  console.log(key);
}

//
var obj = {
  name: 'kingx',
  age: 12,
};
Object.defineProperty(obj, 'age', {
  enumerable: false,
  configurable: false,
});
for (const key in obj) {
  console.log(key);
}

// 2.2 访问器属性
/**
 * 1. [[Configurable]] - 是否能删除，并且能重新定义，默认为true
 * 2. [[Enumerable]] - 可以枚举，for...in，默认为true
 * 3. [[Get]] 读取属性时调用的函数
 * 4. [[Set]] 写入属性时调用的函数
 */
// _age: 私有属性
// age: obj.age
var person = {
  _age: 10
};
Object.defineProperty(person, 'age', {
  get: function() {
    return this._age;
  },
  set: function(newValue) {
    if (newValue < 10) {
      return;
    }
    this._age = newValue;
    console.log('新赋值生效');
  }
});
// person.age;
// person.age = 5; // 失效
// person.age = 15 // 有效
person.age = 5;
person.age = 15;

