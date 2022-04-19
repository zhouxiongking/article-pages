// Object和Map的区别

// 1. 构造方式
// Object
const obj = {
  'a': '1',
  'b': '2'
};

// Map
const map = new Map([
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
obj2[arr1] = 'arr'; // { 'a': 1, '1,2': 'arr }

// Map
const map2 = new Map();
map2.set('a', 1);
map2.set(arr1, 'arr'); // {'a' => 1, Array(2) => 'arr'}

// 3. 键的顺序
// Object：key是无序的，对于大于等于0的整数，会按照大小进行排序，其他值按照定义的顺序
const obj3 = {
  2: 2,
  '1': 1,
  0: 0
};

// Map：key是有序的，按照插入的顺序进行输出
const map3 = new Map();
map3.set(2, 2);
map3.set(1, 1);

// 4. 键值对size
// Object：只能手动计算，通过Object.keys()方法或者通过for...in循环统计
// Map：直接通过size属性访问

// 5. 键值对的访问

// 6. 迭代器

// 7. JSON序列化

// 8. 应用场景