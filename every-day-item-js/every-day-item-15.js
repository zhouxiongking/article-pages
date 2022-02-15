// setTimeout 第三个参数
// Done~~~~
// 1.场景 for setTimeout i
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, j * 1000);
  })(i);
}

for (var i = 0; i < 5; i++) {
  setTimeout(function(j) {
    console.log(j);
  }, i * 1000, i);
}

// 2. 将函数作为第三个参数
var a = 0;
setTimeout(function() {
  console.log('第二次a = ', a);
}, 5000, setTimeout(function() {
  console.log('第一次a= ', a);
  a++;
}, 1000));
