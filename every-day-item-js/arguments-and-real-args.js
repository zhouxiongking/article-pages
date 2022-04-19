// arguments和实参的关系
/**
 * 严格模式和非严格模式
 * 'use strict'
 * 严格模式：arguments和实参是不会相互影响的
 * 非严格模式下：arguments和实参是会相互影响的
 * https://github.com/lgwebdream/FE-Interview/issues/38
 * Done~~~~
 */
function side(arr) {
  // arr的变化不会影响到abc
  // 非严格模式下：arr -> 1, 1, 10
  arr[0] = arr[2];
  // arr -> 10, 1, 10
}
// c有初始值，ES6解构，严格模式
function fn(a, b, c) {
  // c -> 1
  c = 10;
  side(arguments);
  // 严格模式下：a -> 1, b -> 1 c -> 10
  // 非严格模式下：a -> 10, b -> 1, c -> 10
  return a + b + c;
}
fn(1, 1, 1); // 12, 21
