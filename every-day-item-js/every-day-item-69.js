// https://blog.csdn.net/weixin_48200589/article/details/118580531
// 输入
const input = [
  {
    province: '广东省',
    city: '广州市',
    district: '天河区',
  },
  {
    province: '广东省',
    city: '广州市',
    district: '白云区',
  },
  {
    province: '广东省',
    city: '东莞市',
    district: '常平镇',
  },
  {
    province: '湖北省',
    city: '武汉市',
    district: '武昌区',
  },
];
// 输出
const output = [
  {
    name: '广东省',
    children: [
      {
        name: '广州市',
        children: [{ name: '天河区' }, { name: '白云区' }],
      },
      {
        name: '东莞市',
        children: [{ name: '常平镇' }],
      },
    ],
  },
];

const keys = ['province', 'city', 'district'];
function transObject(tableData, keys) {
  let hashTable = {}, res = [];
  for( let i = 0; i < tableData.length; i++ ) {
    if(!hashTable[tableData[i][keys[0]]]) {
      let len = res.push({
        value: tableData[i][keys[0]],
        children: []
      });
      // 在这里要保存key对应的数组序号,不然还要涉及到查找
      hashTable[tableData[i][keys[0]]] = { $$pos: len - 1 };
    }
    if(!hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]]) {
      let len = res[hashTable[tableData[i][keys[0]]].$$pos].children.push({
        value: tableData[i][keys[1]],
        children: []
      });
      hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]] = { $$pos: len - 1 };
    }
    res[hashTable[tableData[i][keys[0]]].$$pos].children[hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]].$$pos].children.push({
      value: tableData[i][keys[2]]
    });
    console.log(res);
  }
  console.log(hashTable);
  return res;
}
