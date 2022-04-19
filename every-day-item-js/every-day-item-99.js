// https://blog.csdn.net/katherine5980/article/details/114882308
// 实现一个函数，判断一组数字是否连续。当出现连续数字的时候以‘-’输出

// const arr = [ 2, 3, 4, 7, 8, 9, 10, 13, 15 ]
// 期望结果：['2-4', '7-10', 13, 15]

function merge(arr) {
  let temp = arr.reduce((accu, current) => {
    if (accu.length <= 0) {
      accu.push([current]);
    } else {
      const prev = accu[accu.length - 1];
      if (prev[prev.length - 1] === current - 1) {
        accu[accu.length - 1].push(current);
      } else {
        accu.push([current]);
      }
    }
    return accu;
  }, [])
  return temp.map(item => item.length > 1 ? item[0] + "-" + item[item.length - 1] : item[0])
}
