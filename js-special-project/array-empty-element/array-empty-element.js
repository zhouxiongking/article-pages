// 数组中的empty
var a = Array(5);
a.map(i => {
  console.log(i);
  return i;
});

a.forEach(i => {
  console.log(i);
});

for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// indexOf 
a.indexOf(undefined);

// 空位，不是一个数据类型
// undefined,具体的数据类型，占有内存空间的
