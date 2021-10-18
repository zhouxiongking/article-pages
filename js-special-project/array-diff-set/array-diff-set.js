// 框里有编号为1-10的小球，每次随机取出一个，操作9次
// 框里剩余的球编号是多少
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 7
// 方法1 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 0, 3, 4, 5, 6, 7, 8, 9, 10]
// [1, 0, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 0, 3, 4, 5, 0, 7, 8, 9, 10]
// [0, 0, 0, 0, 5, 0, 0, 0, 0, 0]
function fn1() {
  var arr = Array(10).fill(0).map((v, i) => i + 1);
  var randomArr = [];
  while(randomArr.length !== 9) {
    var n = Math.floor(Math.random() * 10 + 1);
    if (randomArr.indexOf(n) === -1) {
      randomArr.push(n);
      arr.splice(n - 1, 1, 0);
    }
  }
  return arr.filter(i => i)[0];
}
fn1();

// 方法2:  /
// [1, 0, 1, 1, 1, 1, 1, 1, 1, 1]
function fn2() {
  var arr = Array(10).fill(0);
  var randomArr = [];
  while(randomArr.length !== 9) {
    var n = Math.floor(Math.random() * 10 + 1);
    if (randomArr.indexOf(n) === -1) {
      randomArr.push(n);
      arr[n - 1] = 1;
    }
  }
  return arr.indexOf(0) + 1;
}
fn2();

// 方法3：1-10求和 9个随机数求和，两个和相减，
function fn3() {
  var arr = Array(10).fill(0).map((v, i) => i + 1);
  var total = arr.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  var sum = 0;
  var randomArr = [];
  while(randomArr.length !== 9) {
    var n = Math.floor(Math.random() * 10 + 1);
    if (randomArr.indexOf(n) === -1) {
      randomArr.push(n);
      sum += n;
    }
  }
  return total - sum;
}

var a;

console.log('a1:', a); // undefined
if (true) {
  function a () {}
  a = 5;
  console.log('a2:', a);  // 
}
console.log('a3:', a); // 

