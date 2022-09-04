// 数组对象匹配的方法
// Done~~~
// 说明：一个数组，元素都是对象类型，
//      想要通过属性匹配获取满足条件的值

const data = [
  {
    name: '小明',
    score: 76
  },
  {
    name: '小红',
    score: 81
  },
  {
    name: '小强',
    score: 92
  },
  {
    name: '小刚',
    score: 100
  },
  {
    name: '小丽',
    score: 64
  },
  {
    name: '小兵',
    score: 52
  },
  {
    name: '小张',
    score: 75
  },
  {
    name: '小赵',
    score: 94
  },
  {
    name: '小李',
    score: 82
  },
  {
    name: '小吴',
    score: 56
  },
];

// 满分100，及格线60分
// 1. 全班同学是不是都及格了？
// every
const result1 = data.every((item, index, array) => {
  return item.score >= 60;
});
console.log('result1:', result1);

// 2. 全班同学的及格率是多少？
// 及格人数 / 总人数
const pass = data.filter(item => {
  return item.score >= 60;
});
const result2 = pass.length / data.length;
console.log('result2:', result2);

// 3. 没有及格的学生的名字都有哪些？
const unpass = data.filter(item => {
  return item.score < 60;
});
const result3 = unpass.map(item => {
  return item.name;
});
console.log('result3:', result3);

// 4. 有没有满分的同学？
// some
const result4 = data.some(item => {
  return item.score === 100;
});
console.log('result4:', result4);

// 5. 有满分的话，这个同学的名字是什么？
// find
const person = data.find(item => {
  return item.score === 100;
});
console.log('result5:', person.name);

// 6. 找到名字为“小强”的同学，查下他的分数是多少？
const person2 = data.find(item => {
  return item.name === '小强';
});
console.log('result6:', person2.score);

// 
console.log(person2);
person2.name = '小强2';
console.log(data);

