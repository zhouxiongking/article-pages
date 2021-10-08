// 1234.5678  -> 1,234.567,8 
// 1. 处理成整数和小数部分
// 2. 整数 逆序 -> reduceRight
// 1234 4321 1,234,
// 3. 小数 reduce
// 5678 567,8 0 % 3 ,567,8 567,8
// 4. 拼接
function thousandNum(number = 0) {
  const arr = (+number).toString().split('.');
  const intNum = arr[0];
  const floatNum = arr[1];

  const getInt = (nums) => {
    return nums.split('').reverse().reduceRight((t, v, i) => {
      return t + (i % 3 ? v : `${v},`);
    }, '').replace(/^,|,$/g, '');
  };

  const getFloat = (nums) => {
    return nums.split('').reduce((t, v, i) => {
      return t + ((i + 1) % 3 ? v : `${v},`);
    }, '').replace(/^,|,$/g, '');
  };

  return arr.length > 1 ? `${getInt(intNum)}.${getFloat(floatNum)}` : `${getInt(intNum)}`;
}