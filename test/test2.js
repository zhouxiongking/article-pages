function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, Math.floor(Math.random() * 1000));
}

async function request(a, b) {
  return new Promise((resolve) => {
    asyncAdd(a, b, (error, value) => {
      resolve(value);
    });
  });
}

async function sum(...args) {
  const count =
    args.length % 2 === 0 ? args.length / 2 : Math.floor(args.length / 2) + 1;
  const result = [];
  for (let i = 0; i < count; i++) {
    const startIndex = 2 * i; // 0 2
    const endIndex = 2 * i + 1; // 1 3
    const a = args[startIndex];
    const b = args[endIndex];
    if (a !== undefined && b !== undefined) {
      const v = await request(a, b);
      result.push(v);
    } else {
      result.push(a);
    }
  }
  if (result.length === 1) {
    return result[0];
  } else {
    return await sum(...result);
  }
}

(async () => {
  const result1 = await sum(1, 4, 6, 9, 2, 4);
  const result2 = await sum(3, 4, 9, 2, 5, 3, 2, 1, 7);
  const result3 = await sum(1, 6, 0, 5);
  console.log([result1, result2, result3]); // [26, 36, 12]
})();
