// 循环打印红黄绿
// Done~~~

// 红灯3秒后变成绿灯
// 绿灯5秒后变成黄灯
// 黄灯2秒后变成红灯

// function red() {
//   return new Promise((resolve) => {
//     console.log('当前是红灯, 3秒后变成绿灯');
//     setTimeout(() => {
//       const greenPromise = green();
//       resolve(greenPromise)
//     }, 3000);
//   });
// }

// function green() {
//   return new Promise((resolve) => {
//     console.log('当前是绿灯, 5秒后变成黄灯');
//     setTimeout(() => {
//       const yellowPromise = yellow()
//       resolve(yellowPromise);
//     }, 5000)
//   })
// }

// function yellow() {
//   return new Promise((resolve) => {
//     console.log('当前是黄灯, 2秒后变成红灯');
//     setTimeout(() => {
//       const redPromise = red();
//       resolve(redPromise);
//     }, 2000);
//   })
// }

// red();

// 优化
function timer (color, delay, next) {
  return new Promise((resolve) => {
    console.log(`当前是${color}灯, ${delay}秒后变成${next}灯`);
    setTimeout(() => {
      resolve();
    }, delay * 1000);
  });
}

async function light() {
  await timer('红', 3, '绿');
  await timer('绿', 5, '黄');
  await timer('黄', 2, '红');
  await light();
}

light();
 