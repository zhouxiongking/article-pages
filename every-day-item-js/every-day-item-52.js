// https://www.wenjiangs.com/doc/initializearraywithrange
// 初始化特定范围的数字数组
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start);