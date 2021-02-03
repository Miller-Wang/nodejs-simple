const fs = require("fs");
const path = require("path");
const url = require("url");
const http = require("http");

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  let absPath = path.join(__dirname, pathname);
  // 1.判断有没有这个文件
  fs.stat(absPath, (err, stateObj) => {
    if (err) {
      res.statusCode = 404;
      res.end("not found");
      return;
    }
    // 如果是文件夹的，就找 index.html
    if (stateObj.isDirectory()) {
      absPath = path.join(absPath, "index.html");
    }
    console.log(absPath);
    fs.readFile(absPath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("read file error");
        return;
      }
      res.end(data);
    });
  });

  // res.end("sucess");
});

server.listen(4000, () => {
  console.log("服务开启在4000端口");
});
