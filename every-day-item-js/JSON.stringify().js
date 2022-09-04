// JSON.stringify()

// 作用：将JavaScript对象类型转换位JSON字符串

// 1. JSON.stringify()的作用
const obj1 = {
  name: "前端周老师",
  like: ["篮球", "羽毛球"],
  year: 2022,
};
// console.log(JSON.stringify(obj1));

// 2. 特殊的属性会怎么处理？
// 函数类型属性 -> 忽略，不处理
// 原型属性 -> 忽略，不处理
// RegExp属性 -> 空对象{}
// undefined -> 忽略，不处理
// null -> null
// NaN、Infinity 和 -Infinity -> null
// Date -> string
const obj11 = {
  name: "前端周老师",
  like: ["篮球", "羽毛球"],
  year: 2022,
  fn: function () {},
  reg: new RegExp(),
  u: undefined,
  n: null,
  a: NaN,
  b: Infinity,
  c: -Infinity,
  d: new Date(),
};
// console.log(JSON.stringify(obj11));

function Person(name) {
  this.name = name;
}
Person.prototype.age = 1;

const p = new Person("前端周老师");
// console.log(p);
// console.log(p.age);
// console.log(JSON.stringify(p));

// 3. 第二个参数的妙用
const obj2 = {
  name: "前端周老师",
  like: ["篮球", "羽毛球"],
  year: 2022,
  address: "深圳",
};
// 第二个参数是数组
// console.log(JSON.stringify(obj2, ['name', 'address']));

// 第二个参数是函数
// 将学生的分数按照S-A-B-C-D级别划分
const students = [
  {
    name: "张三",
    score: 100, // S
  },
  {
    name: "李四",
    score: 60, // D
  },
  {
    name: "王五",
    score: 90, // A
  },
];
function parse(key, value) {
  if (key === "score") {
    if (value === 100) {
      return "S";
    } else if (value >= 90) {
      return "A";
    } else if (value >= 80) {
      return "B";
    } else if (value >= 70) {
      return "C";
    } else if (value >= 60) {
      return "D";
    } else {
      return "E";
    }
  }
  return value;
}
// console.log(JSON.stringify(students, parse));

// 4. 第三个参数的妙用
const obj3 = {
  name: "前端周老师",
  like: ["篮球", "羽毛球"],
  year: 2022,
  address: "深圳",
};
// console.log(JSON.stringify(obj3, null, 4));

// 5. 如果自定义JSON序列化
const obj4 = {
  name: "前端周老师",
  like: ["篮球", "羽毛球"],
  year: 2022,
  address: "深圳",
  toJSON: function () {
    return this.name + "," + this.like;
  },
};
// console.log(JSON.stringify(obj4));

// 6. 使用场景
// 1. 配合localStorage使用
// const obj99 = {
//   name: '前端周老师'
// };
// window.localStorage.setItem('obj', JSON.stringify(obj99));
// const objStr = window.localStorage.getItem('obj');
// const obj911 = JSON.parse(objStr);
// console.log(obj911);

// 2. 对象拷贝
const obj5 = {
  name: "前端周老师",
  like: ["篮球", "羽毛球"],
  year: 2022,
  address: {
    name: "深圳",
    postcode: "518000",
  },
};
const obj51 = JSON.parse(JSON.stringify(obj5));
// console.log(obj51);
// obj51.address.name = '北京';
// console.log(obj5.address);

// 循环引用
const c = {
  name: "1",
};
c.c = c;
JSON.stringify(c);
