// Done~~~
// for循环和splice的坑
// 具体描述：在对一个数组执行for循环时，
// 删除数组的元素，会存在什么问题？
const arr = ['a', 'a', 'a', 'd', 'e', 'f'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'a') {
    arr.splice(i, 1); // 'a'
    i--;
  }
}
// 索引问题
// arr => ['a', 'a', 'd', 'e', 'f']
// i = 1
// arr => ['a', 'd', 'e', 'f']
// 第一个解法：i--;
// 第二个解法：采用倒序,未处理的元素相对顺序没有变化
const arr = ['a', 'a', 'a', 'd', 'e', 'f'];
for (let i = arr.length - 1; i >= 0; i--) {
  // i = 2 // arr = ['a', 'a', 'd', 'e', 'f'];
  // i = 1 arr = ['a', 'd', 'e', 'f'];
  // i = 0 arr = ['d', 'e', 'f'];
  if (arr[i] === 'a') {
    arr.splice(i, 1); // 'a'
  }
}

// for...in
const arr = ['a', 'a', 'a', 'd', 'e', 'f'];
for (let index in arr) {
  console.log(index);
  if (arr[index] === 'a') {
    arr.splice(index, 1);
    index--; // 仍然会有问题
    // index = 1; index-- -> 0
  }
}

const arr = ['a', 'a', 'a', 'd', 'e', 'f'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'a') {
    arr.splice(i, 1); // 'a'
    i--;
  }
}
 
// forEach同样不可行 
const arr = ['a', 'a', 'a', 'd', 'e', 'f'];
arr.forEach((item, i) => {
  if (item === 'a') {
    arr.splice(i, 1);
    i--;
  }
});