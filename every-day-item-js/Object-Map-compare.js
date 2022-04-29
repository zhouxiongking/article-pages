// Object和Map的区别

// 1. 构造方式
// Object
// 对象字面量
const obj = {
  'a': '1',
  'b': '2'
};
// 构造方法
const o = new Object();

const o2 = Object.create();

// Map
// 构造方法
const m = new Map();
const m2 = new Map([
  ['a', '1'],
  ['b', '2']
]);

// 2. 键的类型
// Object：键类型必须是String或者Symbol，如果非String类型，会进行数据类型转换
// Map: 可以是任意类型，包括对象，数组，函数等，不会进行类型转换

// Object
const obj2 = {
  a: 1,
};
const arr1 = [1, 2];
obj2[arr1] = 'arr';  // { 'a': 1, '1,2': 'arr }

// Map
const map2 = new Map();
map2.set('a', 1);
map2.set('2', '2');
map2.set(2, 2);
map2.set(arr1, 'arr');   // {'a' => 1, Array(2) => 'arr'}

// 3. 键的顺序
// Object：key是无序的
// 1.对于大于等于0的整数，会按照大小进行排序，对于小数和负数会当做字符串处理
// 2.对于String类型，按照定义的顺序进行输出
// 3.对于Symbol类型，会直接过滤掉，不会进行输出
//   如果想要输出Symbol类型属性，通过Object.getOwnPropertySymbols()方法
const obj3 = {
  2: 2,
  '1': 1,
  'b': 'b',
  1.1: 1.1,
  0: 0,
  'a': 'a',
  [Symbol('s1')]: 's2',
  [Symbol('s2')]: 's1',
};
Object.keys(obj3); // ['0', '1', '2', 'b', 'a']

// Map：key是有序的，按照插入的顺序进行输出
const map3 = new Map();
map3.set(2, 2);
map3.set('1', 1);
map3.set('b', 'b');
map3.set(0, 0);
map3.set('a', 'a');
map3.set(Symbol('s1'), 's1');

for (let key of map3.keys()) {
  console.log(key);
}

// 4. 键值对size
// Object：只能手动计算，通过Object.keys()方法或者通过for...in循环统计
const obj4 = {
  2: 2,
  '1': 1,
  'b': 'b',
};
Object.keys(obj4).length; // 3
// Map：直接通过size属性访问
const map4 = new Map();
map4.set(2, 2);
map4.set('1', 1);
map4.set('b', 'b');
map4.size; // 3


// 5. 键值对的访问
// Object类型
// 添加或者修改属性，通过点或者中括号的形式
const obj5 = {};
obj5.name = 'zhangsan';
obj5[Symbol('s5')] = 's5';

// 判断属性是否存在
obj5.name === undefined;
obj5['name'] === undefined;

// 删除属性，通过delete关键字
delete obj5.name;

// Map类型
// 添加和修改key-value
const map5 = new Map();
map5.set('name', 'zhangsan');
map5.set(Symbol('s5'), 's5');

// 判断属性是否存在
map5.has('name'); // true
map5.has('age'); // false

// 取值
map5.get('name'); // zhangsan

// 删除键值对
map5.delete('name');

// 获取所有的属性名
map5.keys();

// 清空map
map5.clear();


// 6. 迭代器 - for...of
// Object本身不具有Iterator特性，默认情况下不能使用for...of进行遍历
const obj6 = {
  name: 'zhangsan',
  age: 14,
};
for(let key of obj6) {} // Uncaught TypeError: obj6 is not iterable

// Map结构的keys()，values()，entries()方法返回值都具有Iterator特性
const map6 = new Map([
  ['name', 'zhangsan'],
  ['age', 14]
]);
for(let [key, value] of map6.entries()) {
  console.log(key, value);
}
// name zhangsan
// age 14

// 7. JSON序列化
// Object可以通过JSON.stringify()进行序列化操作
const obj7 = {
  name: 'zhangsan',
  age: 14,
};
JSON.stringify(obj7); // '{"name":"zhangsan","age":14}'

// Map不能直接进行序列化操作
const map7 = new Map([
  ['name', 'zhangsan'],
  ['age', 14]
]);
JSON.stringify(map7);   // '{}'
// 可以借助于Array.from()先转换为数组，再进行序列化
JSON.stringify(Array.from(map7)); // '[["name","zhangsan"],["age",14]]'

// 8. 应用场景
// Object类型适用的场景
// 1. 需要对数据进行JSON序列化，并通过HTTP请求进行传递时

// Map类型适用场景
// 1. 存储任意类型数据
// 2. 频繁对Map进行增删等操作
// 3. 需要对遍历进行迭代操作