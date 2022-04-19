// https://blog.csdn.net/weixin_36706903/article/details/108534778
// 多个数组的交集
//
const intersection = function (...args) {
  if (args.length === 0) {
    return [];
  }
  if (args.length === 1) {
    return args[0];
  }
  return [
    ...new Set(
      args.reduce((acc, cur) => {
        return acc.filter((item) => cur.includes(item));
      })
    ),
  ];
};
