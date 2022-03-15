var a = 10;
var obj = {
  a: 99,
  f: test
};
function test() {
  console.log(a);
  a = 100;
  console.log(this.a);
  var a;
  console.log(a);
}
obj.f();
