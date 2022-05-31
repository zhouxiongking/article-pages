// 手撕new运算符
// 作用：生成一个构造函数的实例
function defineNew() {
  let obj = {};
  // 取出构造方法
  const Constructor = Array.prototype.shift.call(arguments);
  // const F = function() {};
  // F.prototype = Constructor.prototype;
  // obj = new F();
  obj = Object.create(Constructor.prototype);
  // 改变this的指向
  Constructor.call(obj, ...arguments);
  return obj;
}

function Animal(name) {
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
};

const animal = defineNew(Animal, 'Dog');
console.log(animal.getName());


