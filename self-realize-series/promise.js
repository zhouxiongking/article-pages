// 手撕Promise

function Promise(executor) {
  let _this = this;
  this.state = 'pending';
  this.value = undefined;
  this.reason = '';
  this.onFulFilled = [];
  this.onRejected = [];
  function resolve(value) {
    if (_this.state === 'pending') {
      _this.state = 'fulfilled';
      _this.onFulFilled.forEach(fn => fn(value));
    }
  }
  function reject(reason) {
    if (_this.state === 'pending') {
      _this.state = 'rejected';
      _this.onRejected.forEach(fn => fn(reason));
    }
  }
  executor(resolve, reject);
}

Promise.prototype.then = function(onFulFilled, onRejected) {
  if (this.state === 'fulfilled') {
    typeof onFulFilled === 'function' && onFulFilled(this.value);
  }
  if (this.state === 'rejected') {
    typeof onRejected === 'function' && onRejected(this.reason);
  }
  if (this.state === 'pending') {
    typeof onFulFilled === 'function' && this.onFulFilled.push(onFulFilled);
    typeof onRejected === 'function' && this.onRejected.push(onRejected);
  }
};