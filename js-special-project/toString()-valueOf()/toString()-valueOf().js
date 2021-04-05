/**
 * toString
 * 把一个引用类型的值转换为字符串的形式表示
 * Object
 * 
 * valueOf
 * 返回最适合引用类型的原始值
 * 
 * 场景1：想要将引用类型转换为String
 *  - 定义了toString()，优先调用toString()，原始值转换成字符串表示
 *  - 定义了valueOf(),会再调用valueOf()，原始值转换成字符串表示
 *  - 抛出一个异常
 */

 var a = [];
 a.toString = function() {
  console.log('执行了toString');
  return [];
 };

 a.valueOf = function () {
  console.log('执行了valueOf');
  return [];
 }
 console.log(String(a));

 /**
  * 场景2：引用类型转换为Number类型
  * - 优先调用valueOf(),去返回值，转换为数值类型
  * - 再调用toString()，
  * - 抛出一个类型转换异常
  */
 var a = [];
 a.toString = function() {
  console.log('执行了toString');
  return [];
 };

 a.valueOf = function () {
  console.log('执行了valueOf');
  return [];
 }
 console.log(Number(a));

 // 练习
 var obj = {
   i: 10,
   toString: function() {
    console.log('执行了toString');
    return this.i;
   },
   valueOf: function() {
    console.log('执行了valueOf');
    return this.i;
   }
 };

 +obj;  // 执行了valueOf
 '' + obj; // 执行了valueOf，结果为"10"
 obj == '10'; // 执行了valueOf,结果为true