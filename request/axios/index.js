// axios 接收完整的配置
function f1() {
  const url = 'https://echo.apifox.com/get';
  axios({
    method: 'GET',
    url,
  })
}
// f1();

// axios.get
function f2() {
  const url = 'https://echo.apifox.com/get';
  const headers = {
    token: 'kingx-token'
  }
  // 第一种参数结构：键值对
  const params = {
    name: 'kingx'
  }
  // 第二种结构 URLSearchParams
  const searchParams = new URLSearchParams();
  searchParams.append('pwd', '123456');
  axios.get(url, {
    headers,
    params: searchParams
  });
}

// f2();

// post方法的调用
function f3() {
  const url = 'https://echo.apifox.com/post';
  const data = {
    name: 'kingx2'
  }
  const headers = {
    token: 'kingx-token2'
  }
  axios.post(url, data, {
    headers,
    timeout: 10
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log('error:', error);
  });
}
// f3();

// 全局性的配置
function f4() {
  const instance = axios.create();
  instance.defaults.baseURL = 'https://echo.apifox.com';
  instance.defaults.timeout = 10;
  instance.get('/get');
}
// f4();

function f5() {
  const url = 'https://echo.apifox.com/get';
  axios.defaults.headers['token'] = 'kingx-token1';

  const instance = axios.create();
  // instance.defaults.headers['token'] = 'kingx-token2';

  instance.get(url, {
    // headers: {
    //   token: 'kingx-token3'
    // }
  });
}
// f5();

function f6() {
  const url = 'https://echo.apifox.com/get';
  axios.defaults.headers['token'] = 'kingx-token1';

  const instance = axios.create();
  // instance.defaults.headers['token'] = 'kingx-token2';

  instance.get(url, {
    params: {
      name: 'kingx1'
    }
  }).then((response) => {
    if (response.status === 200) {
      console.log(response.data);
    }
  });
}

// f6();

// 拦截器
function f7() {
  const url = 'https://echo.apifox.com/post';
  axios.interceptors.request.use((request) => {
    console.log('全局请求拦截器执行');
    request.headers['token'] = 'kingx-token7';
    return request;
  }, (error) => {
    console.log('error:', error);
    return Promise.reject(error);
  });
  axios.post(url);

  const instannce = axios.create();
  instannce.interceptors.request.use((request) => {
    console.log('实例请求拦截器执行');
    request.headers['token'] = 'kingx-token8';
    return request;
  });
  // instannce.post(url);
}
// f7();


function f8() {
  const url = 'https://echo.apifox.com/post';
  axios.interceptors.response.use((response) => {
    console.log('全局响应拦截器执行');
    if (response.status === 200) {
      return response.data;
    }
  }, (error) => {
    console.log('error:', error);
    return Promise.reject(error);
  });
  axios.post(url).then((response) => {
    console.log('response:', response);
  });
}
// f8();

function f9() {
  const url = 'https://echo.apifox.com/status/200,401,403,404,500';
  const interceptors1 = axios.interceptors.response.use((response) => {
    return response.data;
  }, (error) => {
    const code = error.response.status;
    switch (code) {
      case 401:
        console.log('未授权');
        break;
      case 403:
        console.log('拒绝访问');
        break;
      case 404:
        console.log('资源未找到');
        break;
      case 500:
        console.log('服务端异常');
        break;
      default:
        console.log('未知错误');

    }
    return Promise.reject(error);
  });
  axios.interceptors.response.eject(interceptors1);
  axios.post(url).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log('error:', error);
  });
}
// f9();

function f10() {
  const url = 'https://echo.apifox.com/post';
  axios.interceptors.request.use((request) => {
    console.log('请求拦截器1执行');
    return request;
  }, (error) => {
    console.log('error:', error);
    return Promise.reject(error);
  });
  axios.interceptors.request.use((request) => {
    console.log('请求拦截器2执行');
    return request;
  }, (error) => {
    console.log('error:', error);
    return Promise.reject(error);
  });
  axios.post(url).then((response) => {
    console.log('response:', response);
  });
}
// f10();

function f11() {
  const url = 'https://echo.apifox.com/post';
  axios.interceptors.response.use((request) => {
    console.log('响应拦截器1执行');
    return request;
  }, (error) => {
    console.log('error:', error);
    return Promise.reject(error);
  });
  axios.interceptors.response.use((request) => {
    console.log('响应拦截器2执行');
    return request;
  }, (error) => {
    console.log('error:', error);
    return Promise.reject(error);
  });
  axios.post(url).then((response) => {
    console.log('response:', response);
  });
}
// f11();

function f12() {
  const instance = axios.create();
  const url = 'https://echo.apifox.com/post';
  instance.post(url,
    {
      name: 'kingx3'
    },
    {
      headers: {
        token: 'king-token2',
        "Content-Type": 'application/json'
      },
      params: {
        name: 'kingx2'
      },
      transformRequest: [(data, headers) => {
        console.log('data:', data);
        console.log('headers:', headers);
        data.age = '20';
        headers.token2 = 'kingx-token3';
        return JSON.stringify(data);
      }]
    }).then((response) => {
      console.log('response:', response);
    })
}

// f12();

function f13() {
  const instance = axios.create();
  const url = 'https://echo.apifox.com/post';
  instance.post(url,
    {
      name: 'kingx3'
    },
    {
      headers: {
        token: 'king-token2',
        "Content-Type": 'application/json'
      },
      params: {
        name: 'kingx2'
      },
      transformResponse: [(data) => {
        console.log(typeof data);
        console.log('transformResponse:', data);
        const obj = JSON.parse(data);
        obj.address = 'shenzhen';
        return obj;
      }]
    }).then((response) => {
      console.log('response:', response);
    })
}

// f13();

// 拦截器和转换函数执行优先级
function f14() {
  const instance = axios.create();
  const url = 'https://echo.apifox.com/post';
  instance.interceptors.request.use((data) => {
    console.log('请求拦截器执行');
    return data;
  });
  instance.interceptors.response.use((data) => {
    console.log('响应拦截器执行');
    return data;
  });
  instance.post(url,
    {},
    {
      transformResponse: [(data) => {
        console.log('响应转换函数执行');
        return data;
      }],
      transformRequest: [(data) => {
        console.log('请求转换函数执行');
        return data;
      }]
    }).then((response) => {
      console.log('response:', response);
    })
}

// f14();

/**
 * 设想这样一种场景：在页面初始化的时候，需要同时发送三个请求
 * 1. 用户列表请求
 * 2. 文章列表请求
 * 3. 文章评论列表请求
 * 3个请求都完成后，再去组装需要的数据结构，做页面渲染
 */
function f15() {
  // const userRequest = generateRequest({ key: 'user' });
  // const articleRequest = generateRequest({ key: 'article' });
  axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    console.log('interceptor error:', error);
    return Promise.reject(error);
  });

  const userRequest = axios.get('https://echo.apifox.com/get2');
  const articleRequest = axios.get('https://echo.apifox.com/post');
  const commentRequest = generateRequest({ key: 'comment' });

  axios
    .all([userRequest, articleRequest, commentRequest])
    .then(axios.spread((userResp, articleResp, commentResp) => {
      const mergedData = {
        userList: userResp.data,
        articleList: articleResp.data,
        commentList: commentResp.data
      };
      console.log('mergedData:', mergedData);
    }))
    .catch((error) => {
      console.log('error: ', error);
    })
}

function generateRequest(data) {
  const url = 'https://echo.apifox.com/get';
  return axios.get(url, { params: data });
}

// f15();

/**
 * 在一个页面内部并发3个请求，但是只在第一个请求前触发loading效果，
 * 等三个请求均得到正确响应后，loading效果消失。
 * 如果中间某个接口异常，loading效果立即消失。
 */






/**
 * 实现思路：
 * 
 * 1. loading的触发通过请求拦截器实现，维护一个全局变量，
 *    仅当变量值为0时，触发loading，且变量值+1
 * 2. loading的消失通过响应拦截器实现，每次执行到一个响应拦截器，
 *    变量值-1，当变量值为0时，loading消失
 * 3. 在响应拦截器捕获的异常中，如果进入后，直接将变量置为0，loading立即消失
 * 4. 通过axios.all()并行发送请求，通过axios.spread()合并结果
 */

let reqNum = 0;
function fn16() {
  const url = 'https://echo.apifox.com/get';
  axios.interceptors.request.use((config) => {
    console.log('请求开始发送:', reqNum);
    if (reqNum === 0) {
      console.log('loading 开始');
    }
    reqNum++;
    return config;
  });
  axios.interceptors.response.use((response) => {
    reqNum--;
    console.log('请求获取响应:', reqNum);
    if (reqNum === 0) {
      console.log('loading 结束');
    }
    return response;
  }, (error) => {
    reqNum = 0;
    console.log('loading 结束');
    return Promise.reject(error);
  });

  const req1 = axios.get(url);
  const req2 = axios.get('https://echo.apifox.com/get2');
  const req3 = axios.get(url);

  axios
    .all([req1, req2, req3])
    .then(axios.spread((res1, res2, res3) => {
      const mergedData = {
        data1: res1.data,
        data2: res2.data,
        data3: res3.data,
      };
      console.log('mergedData:', mergedData);
    }))
    .catch((error) => {
      console.log('error:', error);
    });
}

fn16();





