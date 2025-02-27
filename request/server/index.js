const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// 创建一个 Koa 实例
const app = new Koa();
// 使用 koa-bodyparser 中间件来解析请求体
app.use(bodyParser());

app.use((ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');

  if (ctx.path === '/api/get') {
    const { username, password } = ctx.request.query;
    ctx.status = 200;
    ctx.body = `你提交的信息是：${username} ${password}`;
  }
  if (ctx.path === '/api/post') {
    const { username, password } = ctx.request.body;
    ctx.status = 200;
    // 设置响应体内容
    ctx.body = {
      message: 'post请求已接收',
      username: username,
      password: password
    };
  }
  if (ctx.path === '/') {
    ctx.status = 200;
    ctx.body = 'Hello, Koa!';
  }
});

// 启动服务器，监听 3000 端口
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

