// 遍历对象的方法
// 1. for...in
// 获取对象自身的可枚举属性 + 原型链上的可枚举属性
// 不包含Symbol属性
const obj1 = Object.create({
  bar: 'bar'
});
obj1.foo = 'foo';
Object.defineProperty(obj1, 'name', {
  enumerable: false,
  value: 'kingx'
});
obj1[Symbol('age')] = 'age';
console.log(obj1);
for (let key in obj1) {
  console.log(key, obj1[key]);
}
console.log('1------------');
// 过滤原型链上的属性：hasOwnProperty方法
for (let key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    console.log(key, obj1[key]);
  }
}

console.log('2-------------');

// 2. Object.keys() -> ES5新增
// 获取对象自身可枚举属性，会过滤掉原型链上的属性
// 不包含Symbol属性
Object.keys(obj1).forEach(i => {
  console.log(i, obj1[i]);
});

console.log('3---------------');

// 3. Object.getOwnPropertyNames() -> ES5新增
// 获取对象自身的属性名，包括不可枚举的属性
// 不包含Symbol属性
Object.getOwnPropertyNames(obj1).forEach(i => {
  console.log(i, obj1[i]);
});

console.log('4-----------');

// 4. Object.getOwnPropertySymbols() -> ES6
// 获取对象自身的Symbol属性
Object.getOwnPropertySymbols(obj1).forEach(i => {
  console.log(i, obj1[i]);
});

console.log('5---------------');

// 5. Reflect.ownKeys() -> ES6
// 获取对象自身的所有属性名，包括不可枚举 + Symbol属性
Reflect.ownKeys(obj1).forEach(i => {
  console.log(i, obj1[i]);
});
