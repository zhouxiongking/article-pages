// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/331
// Done~~~~
// 实现一个 normalize 函数
// 能将输入的特定的字符串转化为特定的结构化数据 
/**
 * 示例一: 'abc'
    --> {
          value: 'abc'
        }
   示例二：'[abc[bcd[def]]]'
    --> {
          value: 'abc', 
          children: {
            value: 'bcd', 
              children: {value: 'def'}
          }
        }
 */
// 1. 提取关键字符串 
// 2. 构建树状结构 {}
'[abc[bcd[def]]]'.split(/[\[\]]/g).filter(v => v);
'[abc[bcd[def]]]'.split(/[\[\]]/g).filter(Boolean);
'[abc[bcd[def]]]'.match(/\w+/g);
var normalize = (str) => {
  var arr = str.split(/[\[\]]/g).filter(v => v);
  let result = {};
  let obj = result;
  while(key = arr.shift()) {
    obj.value = key;
    if (!arr.length) break;
    obj.children = {};
    obj = obj.children;
  }
  return result;
};
normalize('[abc[bcd[def]]]');

// 方法2： reduce
var normalize = (str) => {
  var arr = str.split(/[\[\]]/g).filter(v => v);
  var result = {};
  arr.reduce((pre, cur, index, self) => {
    pre.value = cur;
    if (index !== self.length - 1) {
      // pre.children = {};
      // return pre.children;
      return (pre.children = {});
    }
  }, result);
  return result;
};
normalize('[abc[bcd[def]]]');
