function reDupItem(arr) {
  arr.sort((a, b) => a - b);
  let map = new Map();
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    let count = map.get(arr[i]) || 0;
    map.set(arr[i], ++count);
  }
  for (let item of map.keys()) {
    if (map.get(item) === 1) {
      res.push(item);
    }
  }
  console.log(map);
  return res;
}
console.log(reDupItem([1, 5, 3, 2, 4, 2, 5, 3, 3, 8, "3", "5", "0"]));
