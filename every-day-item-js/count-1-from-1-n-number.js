// 统计 1 ~ n 整数中出现 1 的次数
// 1 - 10 [1, 10] => 2
// 1 - 20 [1 10 11 12 13 14...19] => 12

/**
 * 整体思想: 以字符串的形式进行遍历
 * 方法1: 将数字转换为字符串，使用正则匹配其中出现的1的数量
 * 方法2: 将数字转换为字符串，再转换成数组，
 *        通过filter方法过滤出为1的值
 */
function findOne(n) {
  return Array.from({ length: n })
    .map((v, i) => i + 1)
    .reduce((pre, cur) => {
      // const curCount = String(cur).match(/1/g)?.length || 0;
      const curCount = String(cur).split('').filter(i => i === '1').length;
      return pre + curCount;
    }, 0);
}

/**
 * 方法3: 以数学的方式寻找其中的规律
 *  222
 *  个位产生1 -> 1,11,21,31...221 => 23
 *  十位产生1 -> 10-19 110-119 210-219 => 30
 *  百位产生1 -> 100 - 199 => 100
 *  153
 * 
 *  数值 => 按高位 + 当前位 + 低位 进行拆分
 *  n为当前位，个位取1，十位取2，百位取3
 *  t为当前位的值
 *  x为目标值 x = 1
 *  1. t > x  => (高位 + 1) * 10 ^ (n - 1)
 *  2. t == x => 高位 * 10 ^ (n - 1) + 低位 + 1
 *  3. t < x  => 高位 * 10 ^ (n - 1)
 * 
 *  2333 -> 按高位 + 当前位 + 低位 进行拆分
 *  高位   当前位  低位
 *  233   3(个位)  0    有233个10  (233 + 1) * 1 = 234
 *   23   3(十位)  3    有23个100  (23 + 1) * 10 = 240
 *    2   3(百位)  33   有2个1000  (2 + 1) * 100 = 300
 *    0   2(千位)  333  有0个10000 (0 + 1) * 1000 = 1000
 *  总共: 234 + 240 + 300 + 1000 = 1774
 */
function getOne2(n, x) {
  let factor = 1; // 10^0 10^1 10^2
  let count = 0;
  let next = parseInt(n / factor);
  while(next !== 0) {
    // n = 2333 next = 2333 factor = 1
    // lower = 0
    // n = 2333 next = 233 factor = 10
    // lower = 3
    let lower = n - next * factor;
    // next = 2333 cur = 3 -> 个位的3
    // next = 233 cur = 3 -> 十位的3
    let cur = next % 10;
    // n = 2333 high = 233
    // n = 2333 high = 23
    let high = parseInt(n / (factor * 10));
    if (cur > x) {
      count += (high + 1) * factor;
    } else if (cur === x) {
      count += (high * factor + lower + 1);
    } else {
      count += high * factor;
    }
    factor *= 10;
    // next = 2333 233 23 2 0
    next = parseInt(n / factor);
  }

  return count;
}
