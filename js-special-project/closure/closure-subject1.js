function foo(a, b) {
  console.log(b);
  return {
    foo: function(c) {
      return foo(c, a);
    }
  }
}
var z = foo(0).foo(1); z.foo(2); z.foo(3);
// a:0 b: undefined -> undefined
// x1 -> { foo: fn } a-> 0
// x1.foo(1) c:1 a: 0 -> a: 1 b: 0 -> 0
// z -> { foo: fn } a: 1
// z.foo(2) c: 2 a: 1 -> a: 2 b: 1 -> 1
// z.foo(3) c: 3 a: 1 -> a: 3 b: 1 -> 1


var y = foo(0).foo(1).foo(2).foo(3);
// a:0 b: undefined -> undefined
// x1 -> { foo: fn } a-> 0
// x1.foo(1) c:1 a: 0 -> a: 1 b: 0 -> 0
// x2 -> { foo: fn } a: 1
// x2.foo(2) c: 2 a: 1 -> a: 2 b: 1 -> 1
// x3 -> { foo: fn } a: 2
// x3.foo(3) c: 3 a: 2 -> a: 3 b: 2 -> 2

var x = foo(0); x.foo(1); x.foo(2); x.foo(3);
// a:0 b: undefined  -> undefined
// x -> {foo: fn} 
// x.foo(1) c: 1 a: 0 -> a: 1 b: 0 -> 0
// x.foo(2) c: 2 a: 0 -> a: 2 b: 0 -> 0
// x.foo(3) c: 3 a: 0 -> a: 3 b: 0 -> 0


// 1. 搞清楚三个foo分别指向什么
// 1-> foo全局函数  2-> 对象的一个属性 3-> 和第一个foo相同
