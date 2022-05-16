// 编写一个 JavaScript 函数 getSearchParams()
// 它的用途是把一个url query字符串解析为一个对象，
// 如果某个值是一个json，也需要把它解析为一个对象，如：

function getSearchParams() {}

const url =
  'https://test.com/demo?name=kingx&from=home&job=frontend&extraInfo=%7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D';
const params = getSearchParams(url);

// params结果为:
result = {
  name: 'kingx',
  from: 'home',
  job: 'frontend',
  extraInfo: { a: 'b', c: 'd' },
};
