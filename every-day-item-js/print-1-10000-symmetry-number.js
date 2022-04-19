// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/131
// Done~~~~
// 打印出 1 - 10000 之间的所有对称数
// 例如 121、1331 98189
// 方法1：x === 逆序之后的数进行比较
// 1441  1441
// 1.1 构造出一个数组 1-10000
// 1.2 过滤出x === 逆序之后的数进行比较  
[...Array(10000).keys()].map((v, i) => i + 1);
Array.from({ length: 10000 }, (v, i) => i + 1);

function filterFn(v) {
  const reverseNumber = Number(v.toString().split('').reverse().join(''));
  return v === reverseNumber;
}

[...Array(10000).keys()]
  .map((v, i) => i + 1)
  .filter(filterFn);  // 198

Array.from({ length: 10000 }, (v, i) => i + 1)
.filter(filterFn);

// 方法2：直接观察对称数的特点
// 1 1-9 
// 2 11 22 33 ...99
// 3 101 202 909  111 212 313 919 121 222...323
// 4 1001  2002 1111 1221 
const result = [];
for (let i = 1;i < 10; i++) {
  result.push(i);  // 1-9
  result.push(i * 11); // 11-99
  for (let j = 0; j < 10; j++) {
    result.push(i * 101 + j * 10); // 101-909 111 - 999
    result.push(i * 1001 + j * 110); // 1001-1991 2002- 2992 9009-9999
  }
}
console.log(result); // 198
