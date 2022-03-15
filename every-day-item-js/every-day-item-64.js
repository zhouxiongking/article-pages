// 计算对象的层数
const obj = {
  a: 'a',
  b: {
    c: {
      d: 'd',
      e: 'e'
    }
  },
  f: {
    g: {
      h: {
        i: 'i',
      }
    },
  }
};

function getLevel(obj) {
  let num = 1;
  const fn = (obj, level) => {
    level = level || 0;
    if (typeof obj === 'object' && obj !== null) {
      Object.values(obj).forEach(v => {
        if (typeof v === 'object' && v !== null) {
          fn(v, level + 1);
        } else {
          num = level + 1 > num ? level + 1 : num;
        }
      });
    } else {
      num = level > num ? level : num;
    }
  };
  fn(obj);
  return num;
}