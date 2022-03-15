// 编程题：大数相加
// Done~~~
// 6453234253452432 + 7326362323251323

// 整数 -> 字符串 -> 数组
// 数组每一位元素进行相加 + 进位 >= 10 取个位，进位 = 1
// 数组每一位元素进行相加 + 进位 < 10 取个位，进位 = 0
// 最后一位，仍然有进位，进位添加到结果里
function bigNumberSum(str1, str2) {
  const arr1 = str1.split('').reverse();
  const arr2 = str2.split('').reverse();

  const length = Math.max(arr1.length, arr2.length);
  const result = [];
  let flag = 0;
  for (let i = 0; i < length; i++) {
    const num1 = Number(arr1[i]) || 0;
    const num2 = Number(arr2[i]) || 0;
    let sum = num1 + num2 + flag;
    if (sum >= 10) {
      // 5 + 6 + 1 = 12 -> 2 12 % 10 = 2
      sum = sum % 10;
      flag = 1;
    } else {
      flag = 0;
    }
    result.push(sum);
    if (i === length - 1 && flag) {
      result.push(flag);
    }
  }
  return result.reverse().join('');
}
bigNumberSum('6453234253452432', '7326362323251323');
