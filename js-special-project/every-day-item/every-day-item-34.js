// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/212
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
