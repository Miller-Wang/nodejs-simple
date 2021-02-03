const express = require("express");

const staticApp = express();
const app = express();

staticApp.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ abc: "abc" });
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

staticApp.listen(4100, () => {
  console.log("静态服务监听在4100端口");
});
