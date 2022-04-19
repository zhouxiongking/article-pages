// JS求素数
// Done~~~
// 1. 什么是素数?
// 质数：除了1和自身以外，不能被其他数整除
// 2 3 5 7 11
// 4 9

// 2. JS求素数的几种方法
// 方法1：2 - n 遍历进行除法运算
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  for(let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// 方法2：2 - (n / 2)
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  for(let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// 方法3：排除偶数
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for(let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// 方法4：2 - n的平方根
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 1 - 100
const result = [];
for (let j = 1; j <= 100; j++) {
  if (isPrime(j)) {
    result.push(j);
  }
}
console.log(result);

