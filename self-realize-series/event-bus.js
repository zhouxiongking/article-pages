// EventBus
// 主要是考察手写发布订阅模式
class EventBus {
  constructor() {
    this.eventPool = {};
  }
  on(eventName, callback) {
    if (!this.eventPool[eventName]) {
      this.eventPool[eventName] = [callback];
    } else {
      this.eventPool.push(callback);
    }
  }
  off(eventName) {
    if (eventName) {
      delete this.eventPool[eventName];
    }
  }
  emit(eventName, data) {
    const list = this.eventPool[eventName] || [];
    list.forEach(item => {
      item(data);
    });
  }
};

const bus = new EventBus();
function fn1(data) {
  console.log('fn1执行:', data);
}
function fn2(data) {
  console.log('fn2执行:', data);
}
function fn3(data) {
  console.log('fn3执行:', data);
}
bus.on('e1', fn1);
bus.on('e2', fn2);
bus.on('e3', fn3);

bus.emit('e1', {name: 1});
