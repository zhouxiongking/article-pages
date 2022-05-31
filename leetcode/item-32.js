// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
// 电话号码的字母组合
// 思想：递归
// 基于上一次的处理结果，补充当前轮的处理结果
var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let result = [];
  const helper = function (str, map, result) {
    if (!str) return;
    const char = str[0];
    const charArr = map[char];
    if (!result.length) {
      let i = 0;
      while(i < charArr.length) {
        result[i] = charArr[i++];
      }
    } else {
      const length = result.length;
      const cpRes = JSON.parse(JSON.stringify(result));
      for (let i = 0; i < charArr.length; i++) {
        for (let j = 0; j < length; j++) {
          const index = i * length + j;
          result[index] = `${cpRes[j] || ''}${charArr[i]}`;
        }
      }
    }
    if (str.length > 0) {
      helper(str.slice(1), map, result);
    }
  };
  helper(digits, map, result);
  return result;
};

console.log(letterCombinations('23'));
