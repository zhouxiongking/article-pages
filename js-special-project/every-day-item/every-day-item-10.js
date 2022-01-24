// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/155
// Done~~~
function Foo() {
  // 类变量a
  Foo.a = function() {
    console.log(1); // 覆盖外层的输出4的方法
  };
  // 实例变量a -> 每个实例都独有一份
  this.a = function() {
    console.log(2);
  };
}
// 实例变量a -> 所有实例共享一份
Foo.prototype.a = function() {
  console.log(3);
};
// 类变量a
Foo.a = function() {
  console.log(4);
};

Foo.a(); // 16 -> a // 4 -> 方法体还没有执行
let obj = new Foo(); // 
obj.a(); // 2 // 变量的查找过程，实例本身(this绑定) -> 原型链去找（prototype属性）-> undefined
Foo.a(); // 1
