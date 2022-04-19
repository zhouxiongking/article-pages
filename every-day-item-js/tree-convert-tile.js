// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/206
// Done~~~
// 将树状结构转换为属性平铺的结构
const entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd',
      },
    },
    d: {
      ee: 'adee',
    },
    f: 'af',
  },
};
// 要求转换成如下对象
const output = {
  'a.b.c.dd': 'abcdd',
  'a.d.ee': 'adee',
  'a.f': 'af',
};

// 方法1：递归
// 每次处理一层结构，通过判断属性的值是否是对象来确定递归是否结束
// - 如果是对象，表示没有结束，递归调用
// - 如果不是对象，表示到递归的最后一层，确定属性值
function flatObj(obj, preKey = '', result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = `${preKey}${key}`;
      if (typeof obj[key] === 'object') {
        flatObj(obj[key], `${newKey}.`, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

// 方法2：while循环-队列
// 使用Object.entries()方法，处理原始对象
// 使用队列存储每一层的值，直到队列中的值处理完毕
function flatObj2(obj) {
  const queue = Object.entries(obj);
  const result = {};
  while(queue.length) {
    const [key, value] = queue.pop();
    if (typeof value === 'object') {
      for (const [k, v] of Object.entries(value)) {
        if (typeof v === 'object') {
          queue.push([`${key}.${k}`, v]);
        } else {
          result[`${key}.${k}`] = v;
        }
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}



