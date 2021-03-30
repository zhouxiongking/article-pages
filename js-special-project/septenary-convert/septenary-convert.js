/**
 * 将十进制数转换为七进制数
 * @param {*} number 
 */
function convert (number) {
  let result = '';
  const rest = number % 7;
  result = rest.toString();
  while(number - number % 7) {
    number = (number - number % 7) / 7;
    result = (number % 7).toString() + result;
  }
  console.log(result);
  return result;
}

convert(7);
convert(2021);