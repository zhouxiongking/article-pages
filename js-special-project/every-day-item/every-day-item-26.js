// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/96
// 某公司 1 到 12 月份的销售额存在一个对象里面 


// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/63

fn = () => {
  console.log('一秒后执行');
};

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

console.log('开始');
sleep(1000).then(fn);

async function output() {
  console.log('开始');
  await sleep(1000);
  fn();
}

output();

function* sleepGenerator(time) {
  yield new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
sleepGenerator(1000).next().value.then(fn);

function sleep(time) {
  const start = Date.now();
  let end;
  while (true) {
    end = Date.now();
    if (end - start > time) break;
  }
}
sleep(1000);
fn()