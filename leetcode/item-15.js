// https://leetcode.cn/problems/merge-two-sorted-lists/
// 合并两个有序链表
// 思想：通过一个pre指针，动态获取next值，执行list1或者list2
// 然后更新list1和list2位置，然后更新pre位置
// 直到list1或者list2为null
// 然后pre.next指向list1或者list2剩余的部分