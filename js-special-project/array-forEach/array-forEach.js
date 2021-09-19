// 1.for循环
var arr = [1, 3, 5, 7, 9];
for (var i = 0; i < arr.length; i++) {
  if (i === 2) {
    continue;
  }
  console.log(arr[i]);
}
// 2.forEach
arr.forEach(function(currentValue, index, arr) {
  console.log(this);
}, thisValue);
arr.forEach(function(currentValue) {
  console.log(currentValue);
});
// 2.1 不支持break和continue语句
arr.forEach(function(currentValue, index) {
  if (index === 2) {
    continue;
  }
  console.log(currentValue);
});
// 2.2 可以使用return语句，实现break
arr.forEach(function(currentValue, index) {
  if (index > 2) {
    return;
  }
  console.log(currentValue);
});
// 2.2 every方法，实现break
arr.every(function(currentValue, index) {
  if (index > 2) {
    return false;
  }
  console.log(currentValue);
  return true;
});

// 2.3 some方法实现continue
arr.some(function (currentValue, index) {
  if (index === 2) {
    return;
  }
  console.log(currentValue);
});