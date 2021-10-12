// 实现好评功能
'★'
'☆'
// repeat
function fn(number) {
  return ['★'.repeat(number), '☆'.repeat(5 - number)].join('');
}
var r1 = fn(3);
var r2 = fn(5);

// 
function fn2(number) {
  return '★★★★★☆☆☆☆☆'.slice(5 - number, 10 - number);
}
var r3 = fn2(3);
var r4 = fn2(5);

