JSON.parse('[1,2,3,true]');         // Array [1, 2, 3, true]
// console.log(JSON.parse('{"name": "小明", "age": 14}'));   // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45

var jsonStr = '{"name":"kingx","age":15,"address": "北京市","interest":["basketball","football"],"children":[{"name":"kingx2","age":20}],"email":"zhouxgking@163.com"}';

// var result = JSON.parse(jsonStr, function (key, value) {
//     if (key === 'name') {
//         return value + '同学';
//     }
//     if (key === 'age') {
//         return value * 2;
//     }
//     return value;
// });

// console.log(result);
// Object {name: '小明同学', age: 28}

var a = {
    name: 'kingx同学',
    age: 30,
    address: '北京市',
    interest: ['basketball', 'football'],
    children: [{
        name: 'kingx2同学',
        age: 40
    }],
    email: 'zhouxiongking@163.com'
};

// console.log(JSON.stringify(a));

var json1 = '{"name":"kingx"}'; // 这个是正确的JSON格式

var json2 = "{\"name\":\"kingx\"}"; // 这个也是正确的JSON格式

var json3 = '{name:"kingx"}'; // 这个是错误的JSON格式，因为属性名没有用双引号包裹

var json4 = "{'name':'kingx'}";//这个也是错误的JSON格式，属性名用双引号包裹，而它用了单引号

// console.log(JSON.parse(json1));
// console.log(JSON.parse(json2));
// console.log(JSON.parse(json3));
console.log(JSON.parse(json4));
