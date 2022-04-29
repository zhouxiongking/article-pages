// 实现一个深层对象属性访问
// 可以通过 fn(data, 'a/b/c') 
// 获取到 data.a.b.c 的值为1
const data = {
  a: {
    b: {
      c: 1,
      d: 2
    }
  }
};

/**
 * while循环
 * 通过判断attr中是否包含/，表示是否已经处理到了最后一层
 * 在while循环体内动态更新data和attr值，
 * data更新内一层的对象值
 * attr截取第一个/后的值
 * 
 * 第一轮:
 * data -> {a: {b: {c}}}
 * attr -> a/b/c
 * 第二轮:
 * data -> {b: {c}}
 * attr -> b/c
 * 第三轮:
 * data -> {c}
 * attr -> c -> 1
 * 结束
 */
// const fn = (data, attr) => {
//   let temp = data;
//   while(attr.includes('/')) {
//     const arr = attr.split('/');
//     const cur = arr[0];
//     temp = temp[cur];
//     attr = arr.slice(1).join('/');
//   }
//   return temp[attr];
// };
const fn = (data, attr) => {
  if (!attr.includes('/')) {
    return data[attr];
  } else {
    const arr = attr.split('/');
    const cur = arr[0];
    const curAttr = arr.slice(1).join('/');
    return fn(data[cur], curAttr);
  }
};

const result1 = fn(data, 'a/b');
const result2 = fn(data, 'a/b/c');
const result3 = fn(data, 'a/b/d');
console.log('result1: ', result1);
console.log('result2: ', result2);
console.log('result3: ', result3);
