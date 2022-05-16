// 遍历对象的方法
// 1. for...in
// 获取对象自身的可枚举属性 + 原型链上的可枚举属性
// 不包含Symbol属性


// 原型属性
const obj = Object.create({
  bar: 'bar',
});
// 对象自身可枚举属性
obj.foo = 'foo';
// 对象自身不可枚举属性
Object.defineProperty(obj, 'name', {
  enumerable: false,
  value: 'kingx'
});
// Symbol属性
obj[Symbol('age')] = 'age';
for (let key in obj) {
  console.log(key, obj[key]);
}
console.log('1------------');
// 过滤原型链上的属性：hasOwnProperty方法
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

console.log('2-------------');

// 2. Object.keys() -> ES5新增
// 获取对象自身可枚举属性，会过滤掉原型链上的属性
// 不包含Symbol属性
Object.keys(obj).forEach(i => {
  console.log(i, obj[i]);
});

console.log('3---------------');

// 3. Object.getOwnPropertyNames() -> ES5新增
// 获取对象自身的属性名，包括不可枚举的属性
// 不包含Symbol属性
Object.getOwnPropertyNames(obj).forEach(i => {
  console.log(i, obj[i]);
});

console.log('4-----------');

// 4. Object.getOwnPropertySymbols() -> ES6
// 获取对象自身的Symbol属性
// 原型属性
const obj = Object.create({
  bar: 'bar',
  [Symbol('s1')]: 's1'
});
// 对象自身可枚举属性
obj.foo = 'foo';
// 对象自身不可枚举属性
Object.defineProperty(obj, 'name', {
  enumerable: false,
  value: 'kingx'
});
// Symbol属性
obj[Symbol('age')] = 'age';
Object.getOwnPropertySymbols(obj).forEach(i => {
  console.log(i, obj[i]);
});

console.log('5---------------');

// 5. Reflect.ownKeys() -> ES6
// 获取对象自身的所有属性名，包括不可枚举 + Symbol属性
Reflect.ownKeys(obj).forEach(i => {
  console.log(i, obj[i]);
});

const a = [0, 0];
const b = Array.from({ length: 3 }).fill().map(i => a);

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  return this.name;
};
const p = new Person('zhangsan');
for (let key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key, p[key]);
  }
}

// Class中的所有方法都是不可枚举的
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const p2 = new Person('zhangsan');
for (let key in p2) {
  console.log(key, p2[key]);
}

// 如何判断属性是否可枚举-方法1
const obj = Object.create({
  bar: 'bar'
});
// 对象自身可枚举属性
obj.foo = 'foo';
// 对象自身不可枚举属性
Object.defineProperty(obj, 'name', {
  enumerable: false,
  value: 'kingx'
});
obj.propertyIsEnumerable('foo');  // true
obj.propertyIsEnumerable('name'); // false