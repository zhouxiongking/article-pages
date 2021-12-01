// 属性的访问方式
// .
var obj = {
  name: 'kingx'
};
obj.name;
// []
obj['name'] //

// 1. 点操作符是静态的 [] 是可以接收动态值的
var obj = {};
obj.name = '张三';
var myName = 'name';
console.log(obj.myName); // undefined
console.log(obj[myName]); // obj.name -> 张三
// 2. 点操作符不能访问数字的属性 [] 可以的
var obj = {};
obj.1 = '2'; // 
obj[1] = '3';

var obj = {
  1: '4'
};
console.log(obj.1); // 
console.log(obj[1]); 

// 3. 导致语法错误的字符，不能使用. []
'my age' 'my-age'
var obj = {
  'my-age': 14
};
obj.my-age;
obj['my-age'];
