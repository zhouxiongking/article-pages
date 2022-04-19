// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/212
// Done~~~
// 平铺属性的数据结构转换为树状数据结构
var entry = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae",
};

// 要求转换成如下对象
var output = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};

// 方法1: 双重循环
// 1. 按key的维度通过循环进行处理，
//    每个key对应的逻辑在一个循环体里执行完，得到中间态的结果
// 2. 定义结果变量result，通过循环，时刻改变这个result值
// 3. 外层循环：entry有多少个key，则循环多少次
// 4. 内层循环：将每个key使用.进行分割，处理成一个数组，进行循环
// 5. 在内层循环中，设置临时变量tmp表示的是当前属性对应的值-> {} 或者前面设置好的对象值{k: v}
//    - 如果还没到最后一层，则设置tmp[k] = {}
//    - 如果到了最后一层，则设置tmp[k] = v
// 6. 返回result
// {"a.b.c.dd": "abcdd"} => {a: {b: {c: {dd: 'abcdd'}}}}
function map(entry) {
  const result = {};
  for (const key in entry) {
    const value = entry[key];
    // a.b.c.dd [a, b, c, dd]
    const keyMap = key.split(".");
    if (!result[keyMap[0]]) {
      result[keyMap[0]] = {};
    }
    let tmp = result[keyMap[0]];
    for (let i = 1; i < keyMap.length; i++) {
      if (!tmp[keyMap[i]]) {
        if (i === keyMap.length - 1) {
          tmp[keyMap[i]] = value;
        } else {
          tmp[keyMap[i]] = {};
        }
      }
      tmp = tmp[keyMap[i]];
    }
  }
  return result;
}

// 方法2: 递归
// 1. 遍历对象，对传入的对象自身的属性进行处理
//    如果属性中包含点(.)，就将最后一个子键取出，构成一个对象
// 2. 如果遍历后的对象key中仍然包含点(.)，则递归该操作
// {"a.b.c.dd": "abcdd"}
// => {"a.b.cc": {"dd": "abcdd"}}
// => {"a.b": {"cc": {"dd": "abcdd"}}}
// => {"a": {"b": {"cc": {"dd": "abcdd"}}}}
function map2(entry) {
  for (const key in entry) {
    getNest(key);
  }
  function getNest(key) {
    const lastIndex = key.lastIndexOf(".");
    const value = entry[key];
    if (lastIndex !== -1) {
      delete entry[key];
      const preKey = key.substring(0, lastIndex);
      const restKey = key.substring(lastIndex + 1);
      if (!entry[preKey]) {
        entry[preKey] = { [restKey]: value };
      } else {
        entry[preKey][restKey] = value;
      }
      if (/./.test(preKey)) {
        getNest(preKey);
      }
    }
  }

  return entry;
}

// 方法3: 和方法2是同样的思想，在key的.处理上，直接使用split方法转换成数组
function build(entry) {
  let ans = {};
  Object.keys(entry).map((path) => {
    let cur = ans;
    let val = entry[path];
    let nodes = path.split(".");
    nodes.map((key, index) => {
      if (index == nodes.length - 1) {
        cur[key] = val;
      } else {
        if (!(key in cur)) cur[key] = {};
        cur = cur[key];
      }
    });
  });
  return ans;
}
