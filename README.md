# 第一节

## Nodejs 介绍？

- 官网：http://nodejs.org/
- 提供一个让 js 可以运行在服务端的一个运行时
- Node 的底层是采用 c++ 编写
- node 他又基于 js 核心 （ecmascript） 系统级的 api 文件操作，网络编程 实现自己的 web 服务
- node 是 commonjs 规范的实现

## Node 特点

- 事件驱动 node 的 api 是基于事件的 异步的
- Node 采用的是单线程 进程（主线程） node 可以开启多个进程
- node 适用于处理 i/o 密集型（文件读写）
- 不适合 cpu 密集型，需要大量计算的业务场景

## 应用场景

- 前后端分离，整合后端接口，做中间层
- 写一些工具库 webpack, cli

## Node 核心模块

- global-全局对象
- fs-文件读写
- http-网络服务
- url-url 处理
- events-事件处理
- buffer-数据流
- path-路径处理

## 基于 Node 核心模块实现一个静态文件 web 服务

```javascript
const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const mime = require("mime");

function notFound(res) {
  res.statusCode = 404;
  res.end("Not Found");
}

let server = http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url, true);
  const absPath = path.join(__dirname, pathname);

  // 我要先检测这个路径是不是目录 如果是目录默认查找index.html ,如果是文件直接返回
  fs.stat(absPath, function (err, statObj) {
    if (err) return notFound(res);

    if (statObj.isFile()) {
      fs.readFile(absPath, function (err, data) {
        if (err) return notFound(res);

        res.setHeader("Content-Type", mime.getType(absPath) + ";charset=utf-8");
        res.end(data);
      });
    } else {
      // 先看是否有index.html 如果有我就返回
      fs.readFile(path.join(absPath, "index.html"), function (err, data) {
        if (err) return notFound(res);

        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(data);
      });
    }
  });
});
server.listen(3000);
```

## express 框架介绍

- 官网：https://www.expressjs.com.cn/

### express 简单使用

```javascript
// express 是一个函数
let express = require("./express");
// 通过express执行产生一个应用
let app = express();

// 当请求到来时 路径和方法一致会触发对应的函数
// req,res 都是原生的node中的req和res
app.get("/hello", function (req, res) {
  res.end("hello");
});
app.listen(3000);
```

### express 静态文件服务

```javascript
app.use(express.static("public"));
```

### app.route(path)

```javascript
app
  .route("/events")
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
  })
  .get(function (req, res, next) {
    res.json({});
  })
  .post(function (req, res, next) {
    // maybe add a new event...
  });
```

# 第二节

## Koa

## koa 与 express 对比

## egg-企业级开发框架

## 项目部署
