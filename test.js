const express = require("express");

const staticApp = express();

staticApp.use(express.static("public"));

const app = express();

app.get("/", (req, res) => {
  console.log("有请求进来");
  res.json({ code: 0, msg: "请求成功" });
});

app
  .route("/api")
  .get(function (req, res) {
    res.json({ code: 0, msg: "获取数据" });
  })
  .post(function (req, res) {
    res.json({ code: 0, msg: "新增数据" });
  })
  .delete(function (req, res) {
    res.json({ code: 0, msg: "删除数据" });
  });

app.listen(4000, () => {
  console.log("监听在4000端口");
});

staticApp.listen(5000, () => {});
