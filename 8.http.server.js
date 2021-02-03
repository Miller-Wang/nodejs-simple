const http = require("http");

// js 是单线程 node 也是单线程的
let server = http.createServer((req, res) => {
  res.end(`{"code": 0}`);
});

//端口号来监听请求
server.listen(3100, () => {
  console.log("server start");
});
