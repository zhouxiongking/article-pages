// https://github.com/xiaoyu2er/blog/issues/1
// Done~~~
// JavaScript中的 稀疏数组 和 密集数组

// 密集数组: 占据连续的内存空间，数组元素之间紧密相连，不存在间隙
const arr1 = [1, 2, 3]; 
// 稀疏数组: 数组元素之间存在间隙
const arr2 = [1, 2, 3];
arr2[8] = 8;
arr2.forEach(i => console.log(typeof i));

// 不能进行过滤
const res1 = arr2.filter(i => i === undefined); 
// 不能进行map处理
const res2 = arr2.map(i => typeof i);

// 得到稀疏数组
const arr4 = new Array(3);
// 得到密集数组
const arr5 = Array.apply(null, Array(3));
const arr6 = Array.from({ length: 3 }, () => {});
// 1 - 10
Array.from({ length: 10 }).map((x, i) => i + 1);
Array.apply(null, Array(10)).map((x, i) => i + 1);