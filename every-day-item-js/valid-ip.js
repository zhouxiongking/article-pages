// Done~~~
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，
// 返回所有可能的有效 IP 地址
// 这些地址可以通过在 s 中插入 '.' 来形成。

// 输入：s = '25525511135'
// 输出：['255.255.11.135', '255.255.111.35']

// 有效 IP 地址 正好由四个整数 10 010
//（每个整数位于 0 到 255 之间组成，且不能含有前导 0），
// 整数之间用 '.' 分隔。

// 例如：'0.1.2.201' 和 '192.168.1.1' 是 有效 IP 地址，
// 但是 '0.011.255.245'、'192.168.1.312' 和 '192.168.1' 是 无效 IP 地址。

/**
 * 方法1：将给定的字符串划分成四段，假设每段的长度为a,b,c,d
 * a + b + c + d = str.length
 * [0, a) [a, a + b), [a + b, a + b + c), [a + b + c, a + b + c + d)
 * 得到每段的值，判断值是否合法，如果四段值全部合法，则是一个合法的IP
 */
function resolveIp(str) {
  const result = [];
  if (str.length < 4 && str.length > 12) {
    return result;
  }
  for (let a = 1; a < 4; a++) {
    for (let b = 1; b < 4; b++) {
      for (let c = 1; c < 4; c++) {
        const d = str.length - a - b - c;
        if (d >= 1 && d <= 3) {
          const one = str.substring(0, a);
          const two = str.substring(a, a + b);
          const three = str.substring(a + b, a + b + c);
          const four = str.substring(a + b + c);
          if (isValid(one) && isValid(two) && isValid(three) && isValid(four)) {
            result.push(`${one}.${two}.${three}.${four}`);
          }
        }
      }
    }
  }
  return result;
}

function isValid(str) {
  // 1. 值等于0的时候，长度为1  0 00
  const one = +str === 0 && str.length === 1;
  // 2. 值大于0的时候，第一个字符不能是0
  const two = +str > 0 && str.charAt(0) !== '0';
  // 3. 值 <= 255
  const three = +str <= 255;
  return (one || two) && three;
}

const result1 = resolveIp('25525511135');
const result2 = resolveIp('11101');
console.log('result1: ', result1);
console.log('result2: ', result2);

/**
 * 方法2：递归处理的方法，
 * 每次处理得到其中一个ip段，最后递归结束时得到一个完整的ip
 */
function resolveIp2(str) {
  const result = [];
  if (str.length < 4 || str.length > 12) {
    return result;
  }
  /**
   * 递归处理方法
   * @param {*} str : 剩余待处理字符串，会动态进行截取，直到长度为0
   * @param {*} count : 当前ip段数，从1开始，如果已经完成了4段分割，并且字符串全部截取完成，则代表处理完成
   * @param {*} out : 每轮处理输出的ip值，中间轮，需要添加'.'，最后一轮，不需要添加'.'
   * @param {*} result : 最终结果，在递归中，动态更新结果值
   */
  function resolve(str, count, out, result) {
    if (count === 5) {
      if (!str.length) {
        result.push(out);
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        if (str.length < i) break;
        const v = str.substr(0, i);
        if (!isValid(v)) break;
        // 11.12.
        const newOut = out + v + (count === 4 ? '' : '.');
        resolve(str.substr(i), count + 1, newOut, result);
      }
    }
  }
  resolve(str, 1, '', result);
  return result;
}

const result3 = resolveIp2('25525511135');
const result4 = resolveIp2('11101');
console.log('result3: ', result3);
console.log('result4: ', result4);