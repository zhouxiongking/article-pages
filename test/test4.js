const sessionList = [
  {
    id: 1,
    type: "group",
    session: 1,
    result: 1,
  },
  {
    id: 2,
    type: "group",
    session: 2,
    result: 1,
  },
  {
    id: 3,
    type: "group",
    session: 3,
    result: 1,
  },
  {
    id: 4,
    type: "1/8",
    session: 4,
    result: 1,
  },
  {
    id: 5,
    type: "1/8",
    session: 5,
    result: 1,
  },
  {
    id: 6,
    type: "1/2",
    session: 6,
    result: 1,
  },
];
const guessList = [
  {
    id: 1,
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    session: 1,
    guess: 1,
  },
  {
    id: 2,
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    session: 2,
    guess: 0,
  },
  {
    id: 3,
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    session: 3,
    guess: 1,
  },
  {
    id: 4,
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    session: 4,
    guess: -1,
  },
  {
    id: 5,
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    session: 5,
    guess: 1,
  },
  {
    id: 6,
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    session: 6,
    guess: -1,
  },
  {
    id: 7,
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    session: 1,
    guess: 1,
  },
  {
    id: 8,
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    session: 2,
    guess: 1,
  },
  {
    id: 9,
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    session: 3,
    guess: -1,
  },
  {
    id: 10,
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    session: 4,
    guess: -1,
  },
  {
    id: 11,
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    session: 5,
    guess: 1,
  },
  {
    id: 12,
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    session: 6,
    guess: 1,
  },
];

const data = [
  {
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    type: "group",
    session: 1,
    guess: 1,
    result: 1,
  },
  {
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    type: "group",
    session: 2,
    guess: 0,
    result: 1,
  },
  {
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    type: "group",
    session: 3,
    guess: -1,
    result: 1,
  },
  {
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    type: "1/8",
    session: 4,
    guess: 0,
    result: 1,
  },
  {
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    type: "1/8",
    session: 5,
    guess: -1,
    result: 1,
  },
  {
    username: "周雄",
    useremail: "zhouxiong.zx@bytedance.com",
    type: "1/4",
    session: 6,
    guess: 1,
    result: 1,
  },
  {
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    type: "group",
    session: 1,
    guess: 1,
    result: 1,
  },
  {
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    type: "group",
    session: 2,
    guess: 1,
    result: 1,
  },
  {
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    type: "group",
    session: 3,
    guess: -1,
    result: 1,
  },
  {
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    type: "1/8",
    session: 4,
    guess: -1,
    result: 1,
  },
  {
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    type: "1/8",
    session: 5,
    guess: 1,
    result: 1,
  },
  {
    username: "张巍烨",
    useremail: "zhangweiye.lynn@bytedance.com",
    type: "1/4",
    session: 6,
    guess: 1,
    result: 1,
  },
];

// 根据原始数据计算出个人竞猜榜单
function analysis(data) {
  const map = {};
  for (let item of data) {
    const { username, useremail, type, guess, result } = item;
    const score = guess === result ? 1 : 0;
    if (map[useremail]) {
      const origin = map[useremail];
      origin[type] = origin[type] || 0;
      origin[type] += score;
      origin.total += score;
    } else {
      const obj = {
        username,
        useremail,
        [type]: score,
        total: score,
      };
      map[useremail] = obj;
    }
  }
  let result = [];
  Object.keys(map).forEach((key) => {
    result.push(map[key]);
  });
  result = result
    .sort((a, b) => b.total - a.total)
    .map((item, index) => {
      return {
        ...item,
        group: item.group || 0,
        "1/8": item["1/8"] || 0,
        "1/4": item["1/4"] || 0,
        "1/2": item["1/2"] || 0,
        final: item.final || 0,
        rank: index + 1,
      };
    });
  return result;
}

const result = analysis(data);
console.log("result:", result);

// 根据原始数据计算出球队支持榜单
