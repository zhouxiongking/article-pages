const a = [2, 10, 3, 35, 5, 11, 10, 11, 20, 110, 3, 0];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) < 0) {
    b.push(a[i]);
  }
}

b = b.sort((a, b) => {
  return a > b ? -1 : 0;
});
var c = [];
var sign = -1;
var d = [];
for (var i = 0; i < b.length; i++) {
  const newSign = Number(b[i] / 10);
  if (sign !== newSign) {
    sign = newSign;
    if (d.length > 0) {
      c.push(d);
    }
    d = [];
    d.push(b[i]);
  } else {
    d.push(b[i]);
  }
}
c.push(d);
console.log(c);
