// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
// 删除链表中的重复元素
// 思想：设定temp指针，初始值为head，动态与next值进行比较
// 如果相等则tmp.next = next.next;
// 如果不等，则更新tmp = tmp.next;