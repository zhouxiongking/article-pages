// 用0-9之间不同的三个数构成一个三位数，共可以得到多少个数？
// 120 110
// 百位  9 1-9
// 十位  9 只需要与百位不同即可
// 个位  8 需要与百位和十位不同即可
// 9 * 9 * 8 = 648
let count = 0;
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === i) continue;
    for (let k = 0; k < 10; k++) {
      if (k !== i && k !== j) {
        count++;
      }
    }
  }
}
console.log(count);
