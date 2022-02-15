// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/39
// Done~~~
/**
 * 有规律的合并两个数组
 * [A1, A2, A3, B1, B2, C1, C2, C3, D1, D2]-数组1
 * [A, B, C, D]-数组2
 * 合并为 [A1, A2, A3, A, B1, B2, B, C1, C2, C3, C, D1, D2, D]
 */
// 方法1：遍历数组2，使用数组2中的元素作为正则，匹配数组1
// 记录索引位，在对应的位置插入数组的2的元素
function combineArr(arr1, arr2) {
  let result = arr1;
  let currentIndex = 0;
  for (let i = 0; i < arr2.length; i++) {
    const reg = new RegExp(arr2[i]);
    while(currentIndex < result.length) {
      currentIndex++;
      if (!reg.test(arr1[currentIndex])) {
        result.splice(currentIndex, 0, arr2[i]);
        break;
      }
    }
  }
  return result;
}
const arr1 = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2', 'C3', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];
combineArr(arr1, arr2);

// 方法2：遍历数组1，
function combineArr2(arr1, arr2) {
  const result = [];
  let j = 0;
  let ele = arr2[j];
  for (let i = 0; i < arr1.length; i++) {
    if (ele === arr1[i].charAt(0)) {
      result.push(arr1[i]);
    } else {
      result.push(ele);
      result.push(arr1[i]);
      ++j;
      ele = arr2[j];
    }
    if (i === arr1.length - 1) {
      result.push(ele);
    }
  }
  return result;
}
const arr1 = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2', 'C3', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];
combineArr2(arr1, arr2);