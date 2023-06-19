// https://blog.csdn.net/AstroSadmummy/article/details/122382961
// 链式调用函数的方式，进行加减乘除运算
// 你的代码

/**
 * 1. 使用Class定义的类，接收参数的话，需要定义构造方法
 * 2. 链式调用的方法是实例方法
 * 3. 链式调用时需要返回this
 * 4. 比较会涉及到隐式类型转换，要自定义toString方法
 */
class MyCalculator {
  constructor(value) {
    this.value = value;
  }
  add(v) {
    this.value += v;
    return this;
  }
  minus(v) {
    this.value -= v;
    return this;
  }
  multi(v) {
    this.value *= v;
    return this;
  }
  div(v) {
    this.value /= v;
    return this;
  }
  toString() {
    return this.value;
  }
}

// 测试代码请勿修改
const calculator = new MyCalculator(121);
if (calculator.add(1).minus(2).multi(3).div(4) == 90) {
  console.log("恭喜，回答正确");
}
