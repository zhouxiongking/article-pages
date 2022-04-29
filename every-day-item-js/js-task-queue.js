// https://blog.csdn.net/qq_37820580/article/details/111247432
// Done~~~
// JavaScript设计任务队列，控制请求最大并发数
// 场景: 前端页面中需要同时发送20个请求，但是服务端有限制，
//      需要前端控制并发数，保证最多只能同时发送10个请求
// 要求:
//  1. 最多同时执行的任务数为10个
//  2. 当前任务执行完成后，释放队列空间，自动执行下一个任务
//  3. 所有任务添加到任务队列后，自动开始执行任务
function createTask(i) {
  return () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 2000);
    });
  };
}

class TaskQueue {
  constructor() {
    this.max = 10;
    this.taskList = [];
    setTimeout(() => {
      this.run();
    });
  }
  addTask(task) {
    this.taskList.push(task);
  }
  run() {
    const length = this.taskList.length;
    if (!length) {
      return;
    }
    const min = Math.min(this.max, length);
    for (let i = 0; i < min; i++) {
      // 开始占用一个任务的空间
      this.max--;
      const task = this.taskList.shift();
      task().then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        // 释放一个任务空间
        this.max++;
        this.run();
      });
    }
  }
}

const taskQueue = new TaskQueue();
for (let i = 0; i < 32; i++) {
  const task = createTask(i);
  taskQueue.addTask(task);
}

