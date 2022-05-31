// https://leetcode.cn/problems/SLwz0R/
// 删除链表的倒数第 n 个结点
// 思想：双指针
// p1指针向前移动n位，然后p1，p2同时向前移动，
// 当p1到达尾部时，p2的next就是要删除的节点
// 核心：p2.next = p2.next.next;
