// LRU cache -> 缓存淘汰策略
// key-value 存储
// 限制key数量
// key 1 2 3, 4进入，先淘汰1
// get和put都算最近访问过
// put更新

// 1:1
// 2:2
// 3:3

// 4:4
// get(2)
// 5:5  // 245
// put(2)
// 6:6 // 256

class LRUCache {
  constructor(size) {
    this.size = size;
    this.list = [];
    this.map = new Map();
  }
  get(key) {
    const index = this.list.findIndex((item) => item === key);
    if (index < 0) {
      return;
    }
    this.list.splice(index, 1);
    this.list.push(key);
    return this.map.get(key);
  }
  put(key, value) {
    const index = this.list.findIndex((item) => item === key);
    if (index < 0) {
      if (this.list.length < this.size) {
        this.list.push(key);
      } else {
        console.log(this.map);
        console.log(this.list[0]);
        console.log(typeof this.list[0]);
        const t = this.map.delete(this.list[0]);
        console.log(t);
        console.log(this.map);
        this.list.shift();
        this.list.push(key);
      }
    } else {
      this.list.splice(index, 1);
      this.list.push(key);
    }
    this.map[key] = value;
  }
  toString() {
    console.log(this.map);
  }
}
// [1,2]
const lru = new LRUCache(3);
lru.put("1", 1); // {1: 1}
// console.log(lru);
lru.put("2", 2); // {1: 1, 2: 2}
// console.log(lru);
lru.put("3", 3); // {1: 1, 2: 2, 3: 3}
// console.log(lru);
lru.put("4", 4); //{2: 2, 3: 3, 4:4}
// console.log(lru);
// console.log(lru.get(1));
// console.log("=========");
// lru.get(2); // {2: 2, 3: 3, 4:4}
// lru.put(5, 5); // {2: 2, 4:4, 5:5}
// console.log("-------");
// console.log(lru);
// console.log(lru.get(3));

// lru.put(2, 2.1); // {2: 2.1, 4:4, 5:5}
// console.log(lru);
// lru.put(6, 6); // {2: 2.1, 5:5, 6:6}
// console.log(lru);
// console.log(lru.get(4));
