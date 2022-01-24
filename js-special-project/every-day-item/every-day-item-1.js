/**
 * 写一个MySetInterval(fn, a, b, n)，
 * 每次间隔a，a+b，a+2b，a+nb的时间
 * 执行fn函数，执行n次后，自动关闭定时器
 * https://github.com/lgwebdream/FE-Interview/issues/7
 * Done~~~~
 */
function MySetInterval(fn, a, b, n) {
  this.fn = fn;
  this.a = a;
  this.b = b;
  this.n = n;
  this.count = 0;
  this.timeout = null;
}
MySetInterval.prototype.start = function() {
  const time = this.a + this.count * this.b;
  this.timeout = setTimeout(() => {
    this.fn();
    this.count++;
    this.start();
    console.log(time);
  }, time);
  if (this.count > this.n) {
    console.log('关闭定时器');
    clearTimeout(this.timeout);
  }
};

const fn = () => { console.log('123'); };
var my = new MySetInterval(fn, 1000, 2000, 3);
my.start();



// fn -> console.log('123');
// a -> 1000
// b -> 2000
// n = 3;
// 1000 123
// 3000 123
// 5000 123
// 7000 123


