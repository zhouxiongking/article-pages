// https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/
// 将有序数组转换为二叉搜索树
// 二叉搜索树（Binary Search Tree），简称BST
// 任何一颗子树都保持“左-中-右”节点是“小-中-大”的结构
// 这种结构可以用来快速查找数据
// 思想：有序数组的中间值作为根节点，其余的数分别在平衡搜索二叉树的左子树和右子树中，
// 左子树和右子树也分别是平衡二叉树，可以递归处理。