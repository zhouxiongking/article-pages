// https://leetcode.cn/problems/path-sum-ii/
// 路径总和
// 判断二叉树中，给你二叉树的根节点 root 和一个整数目标和 targetSum ，
// 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]


// 思想：深度优先搜索，枚举每条从根节点到叶子结点的路径
// 当遍历到叶子节点时，此时路径和恰好等于目标值时，则找到一条满足条件的路径

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  var result = []; // 最终返回的满足条件的结果
  var path = []; // 满足条件的路径值

  var findPath = function(root, targetSum) {
      if (root === null) {
          return;
      }
      path.push(root.val);
      // 每经过一层树节点，将目标值减去当前节点值，看看剩余的值
      // 如果已经到达了叶子节点，并且目标值剩余0，表示存在一条路径，保存至结果中
      targetSum -= root.val;
      if(root.left === null && root.right === null && targetSum === 0) {
          const copyPath = JSON.parse(JSON.stringify(path));
          result.push(copyPath);
      }
      findPath(root.left, targetSum);
      findPath(root.right, targetSum);
      path.pop();
  };

  findPath(root, targetSum);
  return result;
};