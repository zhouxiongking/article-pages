// https://leetcode.cn/problems/climbing-stairs/
// 爬楼梯的方式
// 思想：动态规划
// 到达n阶时，可能是从n-1阶向上走1阶来的，也可能是从n-2阶走2阶来的
// dp[n] = dp[n - 1] + dp[n - 2]