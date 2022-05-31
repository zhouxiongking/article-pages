// 快速排序
function quickSort(arr, begin, end) {
  if (begin > end) return;
  let tmp = arr[begin];
  let i = begin;
  let j = end;
  while(i !== j) {
    while(arr[j] >= tmp && j > i) {
      j--;
    }
    arr[i] = arr[j];
    while(arr[i] <= tmp && j > i) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = tmp;
  quickSort(arr, begin, i - 1);
  quickSort(arr, i + 1, end);
}

const arr = [4, 2, 3, 8, 5, 6, 1];
quickSort(arr, 0, arr.length - 1);
console.log(arr);