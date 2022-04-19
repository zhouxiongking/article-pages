// Done~~~
var a = 10;
var obj = {
  a: 99,
  f: test,
};
// 1. 变量提升
// 2. this
function test() {
  console.log(a);
  a = 100;
  console.log(this.a);
  var a;
  console.log(a);
}
obj.f();
test(); // this -> window -> 10

function test() {
  var a;
  console.log(a); // undefined
  a = 100; //
  console.log(this.a); // this -> obj -> 99
  console.log(a); // 100
}
