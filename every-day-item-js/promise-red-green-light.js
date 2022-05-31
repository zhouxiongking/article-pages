// Promise实现一个红绿灯
function timer(color, timer) {
  return new Promise((resolve, reject) => {
    console.log(color);
    setTimeout(() => {
      resolve();
    }, timer * 1000);
  });
}

async function light() {
  await timer('green', 2);
  await timer('yellow', 3);
  await timer('red', 5);
  await light();
}

light();
