// https://leetcode.cn/problems/path-sum/
// 路径总和
// 判断二叉树中，从根节点到叶子节点中是否存在一条路径值等于目标值
// 存在，则返回true，不存在，则返回false
// 思想：从根节点开始，每当遇到一个节点的时候，从目标值里扣除节点值，一直到叶子节点
// 判断目标值是不是被扣完

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var hasPathSum = function(root, targetSum) {
  var helper = function (root, cur, sum) {
      if (root === null) return false;
      cur += root.val; // 每次计算当前节点层时已经统计到的数
      // 如果已经到了根节点，则开始比较数字和目标值是否相等
      if (root.left === null && root.right === null) {
          return cur === sum;
      }
      return helper(root.left, cur, sum) || helper(root.right, cur, sum);
  };
  return helper(root, 0, targetSum);
};