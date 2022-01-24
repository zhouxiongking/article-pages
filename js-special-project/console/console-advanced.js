// 1. 清空控制台
console.clear();
clear();

// 2. 不同类型信息的命令
console.log(1);
console.info(2);
console.warn(3); // 黄色
console.error(4); // 红色

// 3. 占位符
// %d %i 整数 %f 浮点数 %s 字符串  %c
console.log("%c ", "background: url(https://zmallcdn.oss-cn-beijing.aliyuncs.com/images/mall/mobile-recommend-two.jpeg) no-repeat center;padding-left:80px;padding-bottom: 80px;")

// 4. 信息分组
console.group('分组1');
console.log(1.1);
console.log(1.2);
console.log(1.3);
console.groupEnd('分组1');

// 5. 计时功能
const start = new Date().getTime();
// 
const end = new Date().getTime();
console.log(end - start); // 

// 6. 快捷方式 - 最近一次执行结果
$_

// 7. 快捷方式 - $0 - $4 最近的5次获取到的dom元素

// 8. 快捷方式 - copy复制内容到剪贴板

