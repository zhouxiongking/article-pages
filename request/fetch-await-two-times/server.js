/*
 * @Author: zhouxiongking zhouxiongking@163.com
 * @Date: 2025-02-19 10:23:05
 * @LastEditors: zhouxiongking zhouxiongking@163.com
 * @LastEditTime: 2025-02-21 13:18:45
 * @FilePath: /article-pages/request/fetch-await-two-times/server.js
 * @Description: 
 */
const http = require("http")
const fs = require("fs")
const path = require("path")

/**
 * 一个简易的服务器，返回一个网页，
 * 或者以流的形式将json文件发送给客户端。
 */
const server = http.createServer((req, res) => {
  // 根路径请求，返回一个html文件
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, "index.html")
    fs.readFile(filePath, (_, data) => {
      res.writeHead(200, { "Content-Type": "text/html" })
      res.end(data)
    })

    return
  }

  // 请求一个json文件，以流的形式发送给客户端（控制速度）
  if (req.method === "GET" && req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" })

    // 读取当前目录下的data.json文件
    const filePath = path.join(__dirname, "data.json")
    const stream = fs.createReadStream(filePath, { encoding: "utf8" })

    stream.on("readable", function () {
      // 每2ms读取一个字符，然后发送给客户端
      const interval = setInterval(() => {
        const chunk = stream.read(1)
        if (chunk !== null) {
          res.write(chunk)
        } else {
          clearInterval(interval)
          res.end()
        }
      }, 2)
    })

    return
  }

  // 404，返回Not Found
  res.writeHead(404, { "Content-Type": "text/plain" })
  res.end("Not Found")
})

const PORT = 3001
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})