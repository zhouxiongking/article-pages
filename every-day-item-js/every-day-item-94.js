// 实现 find 方法，根据 id 查找 data 树中的任意一项
const data = [
  {
    id: '1000',
    name: '深圳',
    children: [
      {
        id: '1001',
        name: '宝安',
        children: []
      },
      {
        id: '1002',
        name: '南山',
        children: [
        	{
            id: '1012',
            name: '粤海街道',
            children: [
              {
                id: '1112',
                name: '阿里中心',
                children: []
              },
              {
                id: '1212',
                name: '深圳湾人才公园',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2000',
    name: '广州',
    children: [
      {
        id: '2001',
        name: '越秀区',
        children: [
          {
            id: '2011',
            name: '人民公园'
          }
        ]
      },
      {
        id: '2002',
        name: '天河区',
        children: []
      }
    ]
  }
];
// find(data, '1000') // => '深圳'
// find(data, '2001') // => '越秀区'
// find(data, '1012') // => '粤海街道'
// find(data, '1112') // => '阿里中心'
// find(data, '1222') // => '未找到'

// while循环实现
// https://blog.csdn.net/qianyuge/article/details/123936425

// 递归实现
// https://zhangyi520.blog.csdn.net/article/details/116601055?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_antiscanv2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_antiscanv2&utm_relevant_index=2