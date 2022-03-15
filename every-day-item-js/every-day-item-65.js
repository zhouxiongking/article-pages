// 计算localStorage的容量
// Done~~~

// 1. 设计容量为10kb的字符串
// 2. 清空原有的localStorage
// 3. 通过定时器往localStorage里存储数据，直到抛出异常
// 4. 在catch语句里计算总容量值

const str2 = '0123456789';
const target = new Array(1024).fill(str2).join('');

localStorage.clear();
let temp = '';

const computed = () => {
  return new Promise(resolve => {
    const timer = setInterval(() => {
      try {
        localStorage.setItem('temp', temp);
      } catch (error) {
        resolve(temp.length / 1024);
        clearInterval(timer);
        localStorage.clear();
      }
      temp += target;
    }, 0);
  });
};

(async () => {
  const result = await computed();
  console.log(`存储容量为: ${result}kb`);
})();