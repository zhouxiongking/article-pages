// Done~~~
[3, 2, 1].reduce(Math.pow); // 9
// m -> 3 n -> 2 Math.pow(3, 2) -> 9
// m -> 9 n -> 1 Math.pow(9, 1) -> 9

[3].reduce(Math.pow); // [3] -> 3 Math.pow不执行

[].reduce(Math.pow, 3); // 3 -> 3 Math.pow不执行

[].reduce(Math.pow);

// Math.pow(m, n) -> m ^ n
// reduce
[].reduce((preValue, curValue, index, array) => {
  // initValue 传递 
  // preValue -> initValue
  // curValue -> array[0]
  // initValue 没有传递 
  // preValue -> array[0]
  // curValue -> array[1]
}, initValue);

// 1. 如果数组为空且没有提供initialValue，会抛出TypeError 。
// 2. 如果数组仅有一个元素（无论位置如何）并且没有提供initialValue
// 3. 有提供initialValue但是数组为空，
//    那么此唯一值将被返回并且callback不会被执行。

