// 实现一个深层对象属性访问
// 可以通过 fn(data, 'a/b/c') 获取到 data.a.b.c 的值为1
const fn = (data, attr) => {};
const data = {
  a: { 
    b: { 
      c: 1, 
      d: 2 
    }
  }
};