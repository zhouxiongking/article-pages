// https://leetcode.cn/problems/intersection-of-two-linked-lists/
// 相交链表
// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点

// 思想1：哈希集合
// 将headA所有节点存储在哈希集合中，遍历headB，查看是否在哈希集合中出现过
// 如果出现过，则该节点是为目标节点
// 否则返回null

// 思想2：双指针
// pA指向headA，pB指向headB，每次同时向后移动一位
// 如果headA结束，pA指向headB
// 如果headB结束，pB指向headA
// 继续遍历，当pA和pB同时为null，或者两者指向同一个节点时，则表示该节点是相交的节点
