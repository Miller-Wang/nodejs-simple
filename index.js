const fs = require("fs");
const url = require("url");
const http = require("http");
// const mime = require("mine");
const path = require("path");

let server = http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url, true);
  let absPath = path.join(__dirname, pathname);
  console.log("absPath", absPath);
  // 检测这个路径存不存在
  fs.stat(absPath, function (err, stateObj) {
    if (err) {
      res.statusCode = 404;
      res.end("not Found");
      return;
    }
    if (stateObj.isFile()) {
      // 读取文件并返回
      fs.readFile(absPath, function (err, data) {
        if (err) return res.end("file read error");
        res.end(data);
      });
      // res.end("is file");
      return;
    }

    // 访问的是目录，就找index.html文件
    fs.readFile(path.join(absPath, "index.html"), function (err, data) {
      if (err) return res.end("file read error");
      res.end(data);
    });
  });
});

server.listen(4000);
