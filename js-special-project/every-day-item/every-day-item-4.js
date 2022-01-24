// https://github.com/lgwebdream/FE-Interview/issues/41
// https://www.ecma-international.org/wp-content/uploads/ECMA-262_1st_edition_june_1997.pdf
// Done~~~~
var a = [0];
if (a) {
  console.log(a == true);
} else {
  console.log(a);
}
// 变量的隐式转换 === '0' === 0
// a -> Boolean
// Boolean([0]) -> true
// Boolean('') Boolean(0) Boolean(NaN) Boolean(null) -> false 
// [0] == true
// 1. 一边是布尔类型值，转换成数值类型进行比较
// 2. 一边是字符串，转换成数值类型进行比较
// 3. 一边是对象，将对象转换成原始值
//    3.1 valueOf()
//    3.2 toString()
//    3.3 TypeError异常
// 4. null和undefined，相等的
// 5. NaN，返回为false  NaN == NaN

// [0].valueOf() -> [0] 不是一个原始值
// [0].toString() -> [0].join() -> [0].join(',') -> '0'
// '0' == true
// '0' -> 0  true -> 1
// 0 == 1 -> false