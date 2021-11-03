function Person(name) {
  this.name = name;
}
var p = new Person("kingx");
console.log(p.name); // this -> p

// 普通的函数
Person("kingx2");
console.log(window.name); // this -> window

// this指向函数的调用者
// 1. 指向全局对象window, 函数执行的时候，
var value = 10;
var obj = {
  value: 100,
  method: function () {
    var foo = function () {
      console.log(this.value); // 10
      console.log(this); // this -> window
    };
    foo(); // a.foo()
    return this.value;
  },
};
obj.method();

// 2. 指向所属的对象
var c = obj.method(); // this -> obj
console.log(c); // 100

// 3. this指向对象的实例
var number = 10;
function Person() {
  // 全局变量number覆写
  number = 20;
  // 增加实例变量
  this.number = 30;
}
Person.prototype.getNumber = function () {
  return this.number;
};
var p = new Person(); // this -> p
console.log(p.getNumber()); // 30

// 4. this与call apply bind
var o1 = {
  number: 1,
  getNumber: function (num) {
    return this.number + num;
  },
};
var o2 = {
  number: 2,
};
o1.getNumber(2); // this -> o1 1 + 2 = 3
o1.getNumber.call(o2, 2); // this -> o2 2 + 2 = 4
o1.getNumber.apply(o2, [2]); // this -> o2 2 + 2 = 4
var fn = o1.getNumber.bind(o2);
fn(2); // this -> o2 2 + 2 = 4

// call与this，继承
// 父类
function Animal(name) {
  this.name = name;
  this.age = 10;
}
// 子类
function Cat(name) {
  Animal.call(this, name);
  this.catName = "cat";
}
var cat = new Cat("Tom");
console.log(cat);

// 5. 箭头函数中的this
// var fn = function() {}
// var fn = () => {}
// 为什么会需要使用箭头函数
// 对象，函数，在函数体内执行局部函数
// 1. 使用临时变量缓存this
var circle = {
  radius: 10,
  outerDiameter: function() {
    var _this = this;
    var innerDiameter = function () {
      console.log(2 * _this.radius);
    };
    innerDiameter();
  },
};
circle.outerDiameter();
// 2. bind提前绑定this
var circle = {
  radius: 10,
  outerDiameter: function() {
    var innerDiameter = function () {
      console.log(2 * this.radius);
    };
    innerDiameter = innerDiameter.bind(this);
    innerDiameter();
  },
};
circle.outerDiameter();
// 箭头函数 本身不具备this，在函数创建时外面作用空间的this
var circle = {
  radius: 10,
  outerDiameter: function() {
    var innerDiameter = () => {
      console.log(2 * this.radius);
    };
    innerDiameter();
  },
};
circle.outerDiameter();


// 箭头函数与this-代码段1
var a = "outer";

let obj = {
  a: "inner",
  foo: () => {
    console.log(this.a); // this -> window
  },
};

obj.foo(); 

// 箭头函数与this-代码段2
class Foo {
  print = () => {
    console.log(this.x);
  };

  constructor() {
    this.x = 1;
  }
}
let foo = new Foo(); // 生成foo实例的时候，print已经创建完成
foo.print.call({ x: 2 }); 
// call改变方法执行的主体
// 箭头函数中的this是不能内call apply去改变

// 箭头函数与this-代码段3
function printThis() {
  let print = () => console.log(this);

  print();
}
printThis.call([1]); // this -> [1]
printThis.call([2]); // this -> [2]

