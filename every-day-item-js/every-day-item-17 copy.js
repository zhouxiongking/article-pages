// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/296
// 将'10000000000'形式的字符串，以每3位进行分隔展示'10,000,000,000',多种实现方式
// https://wenku.baidu.com/view/75359a39a46e58fafab069dc5022aaea998f41a5.html
// https://blog.csdn.net/weixin_43106777/article/details/117565012

/**
 * 方法1：原字符串分割，得到新数组
 * 1. 字符串处理成数组，每次取出最后一位，放入新的数组中
 * 2. 每取出三位数字，则添加一个分隔符
 * 3. 特殊判断首位字符，如果刚好满三个，则不再添加分隔符
 * 4. 将得到的新数组转换成字符串
 */
function splitString1(str, splitNumber = 3, separator = ',') {
  const result = [];
  const strArr = str.split('');
  let count = 0;
  let length = str.length;
  while (length--) {
    result.unshift(strArr.pop());
    count++;
    if (count === splitNumber && length > 0) {
      result.unshift(separator);
      count = 0;
    }
  }
  return result.join('');
}

const result11 = splitString1('100000');
const result12 = splitString1('10000000');
const result13 = splitString1('100000000000');
console.log('result11:', result11);
console.log('result12:', result12);
console.log('result13:', result13);

/**
 * 方法2：双索引法
 * 1. 将字符串处理成数组，并且翻转，从低位往高位处理
 * 2. 定义2个索引，一个指向数组处理的下标，一个表示已经处理的位数，满3重置
 * 3. 判断，如果下表移动3位，则调用splice方法插入一个分隔符
 * 4. 数组再翻转，转换成字符串，得到结果
 */
function splitString2(str, splitNumber = 3, separator = ',') {
  const strArr = str.split('').reverse();
  let index = 0;
  let count = 0;
  while (index < strArr.length) {
    index++;
    count++;
    if (count === splitNumber && index < strArr.length - 1) {
      strArr.splice(index, 0, separator);
      index++;
      count = 0;
    }
  }
  return strArr.reverse().join('');
}

const result21 = splitString2('100000');
const result22 = splitString2('10000000');
const result23 = splitString2('100000000000');
console.log('result21:', result21);
console.log('result22:', result22);
console.log('result23:', result23);


/**
 * 方法3：借助数组reduce方法
 * 1. 将字符串处理成数组，并翻转
 * 2. 调用reduce方法，拼接当前值与之前的字符串
 * 3. 如果索引是3的倍数，则再拼接一个分隔符
 */
function splitString3(str, splitNumber = 3, separator = ',') {
  const strArr = str.split('').reverse();
  return strArr.reduce((pre, cur, index) => {
    if ((index + 1) % splitNumber === 0 && index < strArr.length - 1) {
      return separator + cur + pre;
    } else {
      return cur + pre;
    }
  });
}

const result31 = splitString3('100000');
const result32 = splitString3('10000000');
const result33 = splitString3('100000000000');
console.log('result31:', result31);
console.log('result32:', result32);
console.log('result33:', result33);

/**
 * 方法4：正则表达式
 * https://juejin.cn/post/6844903609029623815?from=search-suggest
 */
function splitString4(str, splitNumber = 3, separator = ',') {
  // const reg = /\B(?=(\d{3})+(?!\d))/g;
  const reg = new RegExp(`\\B(?=(\\d{3})+(?!\\d))`, 'g')
  return str.replace(reg, separator);
}
const result41 = splitString4('100000');
const result42 = splitString4('10000000');
const result43 = splitString4('100000000000');
console.log('result41:', result41);
console.log('result42:', result42);
console.log('result43:', result43);

/**
 * 方法5：toLocalString
 * 缺陷，不能自定义分隔的位数和分隔符
 */
function splitString5(str, splitNumber = 3, separator = ',') {
  return Number(str).toLocaleString();
}

const result51 = splitString5('100000');
const result52 = splitString5('10000000');
const result53 = splitString5('100000000000');
console.log('result51:', result51);
console.log('result52:', result52);
console.log('result53:', result53);