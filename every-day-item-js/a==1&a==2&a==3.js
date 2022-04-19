if (a == 1 && a == 2 && a == 3) {
  console.log('Are you kidding me?');
}

/**
 * 方法1: 使用with语句: 扩展语句的作用域链
 * with的语法
   with (expression) {
     statement
   }
   将expression对象添加到作用域链的顶部
   如果statement中有某个未使用命名空间的变量，
   跟作用域链中的某个属性同名，则这个变量指向这个属性值
*/
let i = 1;
with({
  get a() {
    return i++;
  }
}) {
  if (a == 1 && a == 2 && a == 3) {
    console.log('Are you kidding me?');
  }
}

/**
 * 方法2: == 隐式转换
 *  1. 将左右两边的值转换为相同的数据类型
 *  2. 转换后的值，进行值比较
 * 
 * 题目中是a == 1的比较，总共会有以下几种情况
 *  1. a为字符串类型，'1' == 1 // true
 *  2. a为布尔类型，true == 1 // true
 *  3. a为对象类型，通过转换机制，转换为1
 * 
 * 核心：对象类型转换为原始类型，处理逻辑：
 *  1. 调用[Symbol.toPrimitive]，转换成功则结束，否则执行2
 *  2. 调用valueOf，转换成功则结束，否则执行3
 *  3. 调用toString，转换成功则结束，否则执行4
 *  4. 如果都没有转换成原始类型，则抛出异常
 */
// let a = {
//   i: 1,
//   // [Symbol.toPrimitive]() {
//   //   return this.i++;
//   // }
//   // valueOf() {
//   //   return this.i++;
//   // }
//   toString() {
//     return this.i++;
//   }
// };
// if (a == 1 && a == 2 && a == 3) {
//   console.log('Are you kidding me?');
// }

/**
 * 方法3：在方法2的基础上，记住数组类型的隐式转换来处理
 * 数组类型转换为基本类型时，会调用toString方法，
 * toString会调用join方法
 */
let a = [1, 2, 3];
// a.toString -> a.join
a.join = a.shift;
// a -> 1 a -> 2 a -> 3
if (a == 1 && a == 2 && a == 3) {
  console.log('Are you kidding me?');
}

/**
 * 方法4：数据劫持-Object.defineProperty
 * 每次访问一个对象的属性时，经过自定义的处理函数，让返回的结果值+1
 */
let j = 1;
Object.defineProperty(window, 'a', {
  get() {
    return j++;
  }
});
if (a == 1 && a == 2 && a == 3) {
  console.log('Are you kidding me?');
}

/**
 * 方法5：方法劫持-Proxy
 * new Proxy(target, handler);
 */
const a = new Proxy({ x: 1 }, {
  get(target) {
    return () => target.x++;
  }
});
if (a == 1 && a == 2 && a == 3) {
  console.log('Are you kidding me?');
}


// 隐藏字符
const ifﾠ = () => !0;
let a = 0;
ifﾠ(a == 1 && a == 2 && a == 3) 
{
  console.log('Are you kidding me?');
}