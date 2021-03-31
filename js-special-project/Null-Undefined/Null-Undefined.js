var a;
console.log(a);

var obj = {};
console.log(obj.name);

function foo() {}
console.log(foo());

function foo2(p1, p2) {
  console.log(p2);
}
foo2(1);

/*---------------- */
var obj = null;
function foo3() {
  return {};
}
obj = foo3();


