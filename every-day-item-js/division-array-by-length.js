// https://www.wenjiangs.com/doc/chunk
// Done~~~~
// 将数组分割成指定大小的小数组

// [1, 2, 3, 4, 5, 6, 7] // Math.ceil(7 / 2) = 4
//      => [[1, 2], [3, 4], [5, 6], [7]]
// [1, 2, 3, 4, 5, 6, 7] // Math.ceil(7 / 3) = 3
//      => [[1, 2, 3], [4, 5, 6], [7]]
function chunkArr(arr, size) {
  const result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
}
const arr = [1, 2, 3, 4, 5, 6, 7];
// chunkArr(arr, 2);

function chunkArr2(arr, size) {
  const length = Math.ceil(arr.length / size);
  return Array.from({ length }, (v, i) => {
    return arr.slice(i * size, (i + 1) * size);
  }); // 0, 2 -> 2, 4
}

const chunkArr3 = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, (i + 1) * size));
