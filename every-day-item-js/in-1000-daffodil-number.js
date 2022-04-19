// 输出1000以内的水仙花数
// Done~~~

// 水仙花数: 三位数，每位上的数字的3次幂之和等于该数本身

// 153 = 1^3 + 5^3 + 3^3 = 1 + 125 +27

/**
 * 方法1: 遍历100-1000之间的数n
 *  取出每个数的百位，十位，个位，计算各位的三次幂的和 = m
 *  m与n进行比较，相等则进行输出
 */
for (let n = 100; n < 1000; n++) {
  // 123 / 100 = 1.23 => 1
  const a = Math.floor(n / 100);
  // 123 % 100 = 23 / 10 = 2.3 
  const b = Math.floor(n % 100 / 10);
  // 123 % 100 = 23 % 10 = 3
  const c = n % 100 % 10;
  const m = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
  if (m === n) {
    console.log(n);
  }
}

console.log('--------------');

/**
 * 方法2: 从百位，十位，个位出发，每位通过一个循环
 *  计算出每位数的三次幂的和 = m
 *  通过百位，十位，个位计算出当前数的值 = n
 *  m与n进行比较，相等则进行输出
 */
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      const m = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
      const n = i * 100 + j * 10 + k;
      if (m === n) {
        console.log(n);
      }
    }
  }
}
