const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

app.use(async (ctx) => {
  if (ctx.path === '/api/get') {
    const { username, password } = ctx.request.query;
    ctx.status = 200;
    ctx.body = `收到提交的信息, 用户名：${username}, 密码:${password}`
  }

  if (ctx.path === '/api/post') {
    const { username, password } = ctx.request.body;
    ctx.status = 200;
    ctx.body = {
      message: '请求已收到',
      username,
      password
    }
  }

  if (ctx.path === '/') {
    ctx.status = 200;
    ctx.body = 'Hello, Koa!';
  }
})

const port = 3000;
app.listen(port, () => {
  console.log(`服务器启动完成, http://localhost:${port}`)
})