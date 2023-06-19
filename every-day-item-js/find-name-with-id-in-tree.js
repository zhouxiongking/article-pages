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

/**
 * 方法1：递归思想：每次从最外层对象开始寻找，
 *  如果当前对象id已经匹配，则直接返回对应的name值
 *  如果当前对象id不匹配，并且存在children的情况下，去查找children中的值
 *  如果在children中找到则直接返回
 *  如果遍历完所有的值都没有找到，则输出"未找到"
 * 类似于：深度遍历
 */
function find(data, id) {
  for (let i = 0; i < data.length; i++) {
    const target = data[i];
    if (target.id === id) {
      return target.name;
    } else {
      if (target.children?.length) {
        const res = find(target.children, id);
        if (res !== "未找到") {
          return res;
        }
      }
    }
  }
  return "未找到";
}

/**
 * 方法2：while循环思想
 *  结束条件是：数组长度为空
 *  每次取数组的第一个值，与目标id进行判断
 *    如果相等，则直接返回
 *    如果不相等，则将children添加到数组中
 *  注意：因为会改变原数组的值，所以每次调用find方法之前，
 *       需要对data进行深拷贝
 */
// function find(data, id) {
//   let arr = [...data]; // JSON.parse(JSON.stringify(data));
//   while (arr.length) {
//     const target = arr.shift();
//     if (target.id === id) {
//       return target.name;
//     }
//     target.children = target.children || [];
//     arr = [...arr, ...target.children];
//   }
//   return "未找到";
// }

const r1 = find(data, "1000"); // => '深圳'
const r2 = find(data, "2001"); // => '越秀区'
const r3 = find(data, "1012"); // => '粤海街道'
const r4 = find(data, "2011"); // => '人民公园'
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
