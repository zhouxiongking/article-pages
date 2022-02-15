// 大数相加

function maxSum(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('传入参数不是字符串');
  }
  let arr1 = str1.split('').reverse();
  let arr2 = str2.split('').reverse();

  let Len = Math.max(arr1.length, arr2.length);
  let flag = 0;
  let res = [];

  for (let i = 0; i < Len; i++) {
    arr1[i] = Number(arr1[i]) || 0;
    arr2[i] = Number(arr2[i]) || 0;
    let sum = arr1[i] + arr2[i] + flag;
    if (sum >= 10) {
      flag = 1;
      sum = sum % 10;
    } else {
      flag = 0;
    }
    res.push(sum);
    if (i === Len - 1 && flag) {
      res.push(flag);
    }
  }
  return res.reverse().join('');
}
