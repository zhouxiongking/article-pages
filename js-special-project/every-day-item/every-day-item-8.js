// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/132
// Done~~~
// 算法题「移动零」
// 给定一个数组 arr，编写一个函数
//   将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
/**
 *  示例:
    输入: [0, 1, 0, 3, 12]
    输出: [1, 3, 12, 0, 0]
    // 说明:
    //   必须在原数组上操作，不能使用额外的数组。
 */
// 方法1：过滤出里面不为0的元素，然后去拼接剩下的为0的元素
function moveZero(arr) {
  // 新数组
  const notZeroArr = arr.filter(i => i);
  const length = arr.length - notZeroArr.length;
  return notZeroArr.concat(...Array(length).fill(0));
}
const arr = [0, 1, 0, 3, 12];
const result1 = moveZero(arr);

// 方法2：遍历数组，然后遇到0的时候，将0删除，然后在数组的末尾添加一个0
// [0, 1, 0, 3, 12]
// [1, 0, 3, 12, 0]
// [1, 3, 12, 0, 0]

// [0, 1, 0, 3, 12]   i = 1 -> 1
// [1, 0, 3, 12] i = 0 -> 1
function moveZero2(arr) {
  let j = 0;
  for (let i = 0; i < arr.length - j; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
      j++;
      // 非常重要的一步
      i--; // splice会以前处理过的数字的索引（正序）
    }
  }
  return arr;
}
const arr2 = [0, 1, 0, 3, 12];
const result2 = moveZero2(arr2);

// 方法3：遍历数组，维护索引值index
// 遇到0，index++
// 遇到非0的数，非零的数与第一个0进行顺序替换
// [0, 1, 0, 3, 12]  index = 1
// [1, 0, 0, 3, 12]  index = 1;
// [1, 0, 0, 3, 12]  index = 2;
// [1, 3, 0, 0, 12]  index = 2;
// [1, 3, 12, 0, 0]  index = 2;
function moveZero3(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      index++;
    } else if (index !== 0) {
      // [1, 3, 12, 0, 0]
      arr[i - index] = arr[i];
      arr[i] = 0;
    }
  }
  return arr;
}
const arr3 = [0, 1, 0, 3, 12];
const result3 = moveZero3(arr3);
