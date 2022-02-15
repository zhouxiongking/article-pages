let a = 0, b = 1, c = b.value?.v;
a ||= 10;
b &&= 2;
c ??= 5;
console.log(a + b + c);