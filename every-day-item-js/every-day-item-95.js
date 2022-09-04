// https://blog.csdn.net/weixin_43402140/article/details/121696795
// 根据id递归找到树结构符合的值并计算得到完整链路

const data2 = [
  {
    id: "1000",
    name: "深圳",
    children: [
      {
        id: "1001",
        name: "宝安",
        children: [],
      },
      {
        id: "1002",
        name: "南山",
        children: [
          {
            id: "1012",
            name: "粤海街道",
            children: [
              {
                id: "1112",
                name: "阿里中心",
                children: [],
              },
              {
                id: "1212",
                name: "深圳湾人才公园",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2000",
    name: "广州",
    children: [
      {
        id: "2001",
        name: "越秀区",
        children: [
          {
            id: "2011",
            name: "人民公园",
          },
        ],
      },
      {
        id: "2002",
        name: "天河区",
        children: [],
      },
    ],
  },
];

// 实现 find 方法，根据 id 查找 data 树中的任意一项
const data = [
  {
    id: "1000",
    name: "深圳",
    children: [
      {
        id: "1001",
        name: "宝安",
        children: [],
      },
      {
        id: "1002",
        name: "南山",
        children: [
          {
            id: "1012",
            name: "粤海街道",
            children: [
              {
                id: "1112",
                name: "登良",
                children: [],
              },
              {
                id: "1212",
                name: "深圳湾人才公园",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2000",
    name: "广州",
    children: [
      {
        id: "2001",
        name: "越秀区",
        children: [
          {
            id: "2011",
            name: "人民公园",
          },
        ],
      },
      {
        id: "2002",
        name: "天河区",
        children: [],
      },
    ],
  },
];

function find(data, id) {
  let arr = JSON.parse(JSON.stringify(data));
  while (arr.length) {
    let temp = arr.shift();
    if (temp.id === id) return temp.name;
    temp.children = temp.children || [];
    arr = [...arr, ...temp.children];
  }
  return null;
}

const r1 = find(data, "1000"); // => '深圳'
const r2 = find(data, "2001"); // => '越秀区'
const r3 = find(data, "1012"); // => '粤海街道'
const r4 = find(data, "1112"); // => '阿里中心'
const r5 = find(data, "1222"); // => '未找到'
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);

// while循环实现
// https://blog.csdn.net/qianyuge/article/details/123936425

// 递归实现
// https://zhangyi520.blog.csdn.net/article/details/116601055?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_antiscanv2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_antiscanv2&utm_relevant_index=2
