// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// 无重复最长子串
// 滑动窗口
// 左右两个指针，使用Set存储最大子串包含的字符
// 左指针右移的时候，说明遇到了右边的字符有重复的情况，直接从Set中删除一个值
// 右指针右移的时候，说明右边还没有重复的字符，直接添加到Set中
// 左右指针中间的长度，即每一轮遍历中产生的最大子串长度
// 一轮循环结束后，确定max值，进行更新，直到所有左指针移动完成
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let max = 0;
  let p1 = 0;
  let p2 = -1;
  const set = new Set();
  while (p1 < n) {
    if (p1 !== 0) {
      set.delete(s[p1 - 1]);
    }
    while (p2 < n - 1) {
      const char = s[p2 + 1];
      if (!set.has(char)) {
        set.add(char);
        p2++;
      } else {
        break;
      }
    }
    max = Math.max(max, p2 - p1 + 1);
    console.log(set);
    p1++;
  }
  return max;
};

console.log(lengthOfLongestSubstring('pwwkew'));
