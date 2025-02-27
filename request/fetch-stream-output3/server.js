const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.resolve(__dirname, 'index.html');
    fs.readFile(filePath, (_, data) => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(data);
    })
  }
  if (req.method === 'GET' && req.url === '/json') {
    res.writeHead(200, { 'Content-type': 'application/json' });
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
    })
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})