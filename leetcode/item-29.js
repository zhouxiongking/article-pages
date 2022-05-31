// https://leetcode.cn/problems/longest-palindromic-substring/
// 最长回文字符串
// 动态规划 -> dp[i][j]
// s[i, j]表示字符串i到j位是否构成一个回文字符串
// dp[i, j] = dp[i + 1][j - 1] ^ s[i] === s[j];
var longestPalindrome = function (s) {
  const n = s.length;
  if (n < 2) {
    return s;
  }
  let begin = 0;
  const dp = Array.from({ length: n }).map((v) => new Array(n).fill(0));
  let max = 1;
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  for (let l = 2; l <= n; l++) {
    for (let i = 0; i < n; i++) {
      let j = l + i - 1;
      if (j >= n) {
        break;
      }
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && l > max) {
        max = l;
        begin = i;
      }
    }
  }
  return s.substr(begin, max);
};

console.log(longestPalindrome('aacabdkacaa'));
