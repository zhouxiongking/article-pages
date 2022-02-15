// 代码段1
var a = 1;
var b = function a(x) {
  x && a(--x);
}
console.log(typeof a);

// 代码段2
console.log(a); 
var a = 1;
console.log(a);    
function a() { console.log(2); }
console.log(a);
var a = 3;
console.log(a);    
function a() { console.log(3); }
a();
console.log(a);
