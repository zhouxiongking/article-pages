// 用来遍历属性
// 1. 遍历对象
function Foo() {
  this.name = 'kingx';
  this.age = 20;
}

Foo.prototype.getName = function() {
  return this.name;
};

var foo = new Foo();
for (var inkey in foo) {
  if (foo.hasOwnProperty(inkey)) {
    console.log(inkey);
  }
 
}

for (var ofkey of foo) {
  console.log(ofkey);
}

// for...of用来遍历具有iterator接口的数据结构
// set map arguments NodeList

// 2. 遍历数组
var arr = ['one', 'two', 'three'];
for (var arrInKey in arr) {
  console.log(arrInKey);
}
// for in 会输出索引值，
// for of 会输出数组每一位的值
var arr = ['one', 'two', 'three'];
for (var arrOfKey of arr) {
  console.log(arrOfKey);
}

// 3. forEach 不能使用break continue
// for in和for of是可以使用的
var arr = ['one', 'two', 'three'];
for (var arrOfKey of arr) {
  console.log(arrOfKey);
  if (arrOfKey === 'two') {
    break;
  }
}

// 4. for of 遍历对象 Object.keys
var foo = new Foo();
for (var objKey of Object.keys(foo)) {
  console.log(objKey);
}

// 5. arguments NodeList
function foo2() {
  for(var argKey of arguments) {
    console.log(argKey);
  }
}
foo2(1, 2, 3);

// 6. 不能遍历到Symbol属性
var as = Symbol('a');
var bs = Symbol('b');
var obj = {
  [as]: 'as',
  [bs]: 'bs',
  name: 'kingx',
  age: 30
};

for (var objInkey in obj) {
  console.log(objInkey);
}

var symbolKeys = Object.getOwnPropertySymbols(obj);
for (var key2 of symbolKeys) {
  console.log(key2);
}

// for in 主要是遍历对象
// for of 遍历具有iterator接口的数据结构