// 实现 find 函数，支持链式调用 API
// 如下代码所示，请实现 find 函数

const data = [
  { userId: 8, title: 'title1' },
  { userId: 11, title: 'other' },
  { userId: 15, title: null },
  { userId: 19, title: 'title2' },
];

/* 查找数组中，符合 where 条件的数据，并根据 orderBy 指定的条件进行排序 */
const result = find(data)
  .where({
    title: /\d$/, // 这里意思是过滤出数组中，满足title字段中符合正则 /\d$/ 的项
  })
  .orderBy('userId', 'desc'); // 这里的意思是对数组中的项按照 userId 进行倒序排列

console.log(result.value); // 返回 [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
