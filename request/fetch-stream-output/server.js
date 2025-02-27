/*
 * @Author: zhouxiongking zhouxiongking@163.com
 * @Date: 2025-02-21 13:20:10
 * @LastEditors: zhouxiongking zhouxiongking@163.com
 * @LastEditTime: 2025-02-21 13:44:22
 * @FilePath: /article-pages/request/fetch-stream-output/server.js
 * @Description: 
 */
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 返回一个首页
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.resolve(__dirname, 'index.html');
    fs.readFile(filePath, (_, data) => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(data);
    })
  }

  // 处理一个json请求，流式输出数据
  if (req.method === 'GET' && req.url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const filePath = path.resolve(__dirname, 'data.json');
    const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });
    stream.on('readable', () => {
      const interval = setInterval(() => {
        const bytes = stream.read(1);
        if (bytes) {
          res.write(bytes);
        } else {
          clearInterval(interval);
          res.end();
        }
      }, 4);
    });
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})