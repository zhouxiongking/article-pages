/*-----------------单向链表start---------------------*/
// 链表节点
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// 链表
class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    // 追加元素
    append(element) {
        const node = new Node(element);
        let current = null;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    // 任意位置插入元素
    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element);
            let current = this.head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                this.head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        return false;
    }

    // 移除指定位置元素
    removeAt(position) {

        // 检查越界值
        if (position > -1 && position < this.length) {
            let current = this.head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }
        return null;
    }

    // 寻找元素下标
    findIndex(element) {
        let current = this.head;
        let index = -1;
        while (current) {
            if (element === current.element) {
                return index + 1;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    // 删除指定元素
    remove(element) {
        const index = this.findIndex(element);
        return this.removeAt(index);
    }

    isEmpty() {
        return !this.length;
    }

    size() {
        return this.length;
    }

    // 转为字符串
    toString() {
        let current = this.head;
        let string = '';
        while (current) {
            string += ` ${current.element}`;
            current = current.next;
        }
        return string;
    }
}

// 测试
const linkedList = new LinkedList();

console.log(linkedList.toString());
linkedList.append(2);
linkedList.append(6);
linkedList.append(24);
linkedList.append(152);

linkedList.insert(3, 18);
console.log(linkedList.toString());
console.log(linkedList.findIndex(24));

linkedList.remove(24);
console.log(linkedList.toString());

/*-----------------单向链表end---------------------*/

