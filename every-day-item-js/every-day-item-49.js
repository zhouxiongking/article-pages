// https://www.wenjiangs.com/doc/chunk
// 将数组分割成指定大小的小数组

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );