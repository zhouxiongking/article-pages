/**
 * 多重循环，如何终止循环​
 */

// 找出“第一个爱吃芒果“的人
const arr = [
  {
    name: '张三',
    fruit: ['苹果', '香蕉']
  },
  {
    name: '李四',
    fruit: ['梨', '芒果']
  },
  {
    name: '王五',
    fruit: ['樱桃', '西瓜']
  },
  {
    name: '赵六',
    fruit: ['菠萝', '芒果']
  }
];

// let personName;
// for(let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].fruit.length; j++) {
//     const fruit = arr[i].fruit;
//     if (fruit[j] === '芒果') {
//       personName = arr[i].name;
//       console.log('第一个爱吃芒果是:', personName);
//       throw new Error('找到了, 结束');
//     }
//   }
// }
// console.log('外层输出');
// console.log('第一个爱吃芒果是:', personName);

// let personName;
// loop1:
// for(let i = 0; i < arr.length; i++) {
//   loop2:
//   for (let j = 0; j < arr[i].fruit.length; j++) {
//     const fruit = arr[i].fruit;
//     if (fruit[j] === '芒果') {
//       personName = arr[i].name;
//       console.log('第一个爱吃芒果是:', personName);
//       break loop1;
//     }
//   }
// }
// console.log('外层输出');
// console.log('第一个爱吃芒果是:', personName);

loop1:
for(let i = 0; i < arr.length; i++) {
  arr[i].fruit.forEach(item => {
    if (item === '芒果') {
      personName = arr[i].name;
      console.log('第一个爱吃芒果是:', personName);
      break loop1;
    }
  });
}
console.log('外层输出');
console.log('第一个爱吃芒果是:', personName);