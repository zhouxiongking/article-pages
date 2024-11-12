/**
 * 场景：一个页面内的多个模块，会用到同一个接口，导致进入页面时
 * 会发送多个相同的请求
 * 
 * 解决方案：接口缓存
 */
let cache = {};
async function myRequest(url, params) {
  const key = url + JSON.stringify(params);
  const checkRes = checkPromise(key);
  if (checkRes) {
    return checkRes;
  }
  const request = axios.get(url, { params });
  cache[key] = request;
  console.log('没有检测到缓存，这是新发送的请求');
  return request;
}


function checkPromise(key) {
  if (cache[key]) {
    console.log('检测到缓存，直接拿缓存的请求');
    return cache[key];
  }
  return null;
}

// 5秒后自动清理
setInterval(() => {
  cache = {};
}, 5000);

async function exec() {
  const url = 'https://echo.apifox.com/get';
  const params1 = { name: 'kingx1' };
  const params2 = { name: 'kingx2' };
  const params3 = { name: 'kingx3' };
  const params4 = { name: 'kingx1' };
  const params5 = { name: 'kingx2' };
  const params6 = { name: 'kingx3' };

  await handleRequest(url, params1);
  await handleRequest(url, params2);
  await handleRequest(url, params3);
  await handleRequest(url, params4);
  await handleRequest(url, params5);
  await handleRequest(url, params6);
}

async function handleRequest(url, params) {
  const res = await myRequest(url, params);
  console.log('请求的响应:', res.data);
  await sleepOneSecond();
}

async function sleepOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  })
}

exec();