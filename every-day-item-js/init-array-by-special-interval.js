// 以特定的间隔，初始化特定范围的数字数组
// Done~~~
// 间隔为2，1 - 9之间的数组 [1, 3, 5, 7, 9]
// 间隔为3，1 - 10之间的数组 [1, 4, 7, 10]
function fn (end, start = 0, step = 1) {
  const length = Math.ceil((end - start + 1) / step);
  return Array.from({ length }).map((v, i) => {
    return start + i * step;
  });
}
const fn = (end, start = 0, step = 1) => 
  Array.from({ length: Math.ceil((end - start + 1) / step) }).map((v, i) => start + i * step);
const result1 = fn(9, 1, 2);
const result2 = fn(10, 1, 3);
console.log(result1);
console.log(result2);
