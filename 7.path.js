const path = require("path");

// 如果需要拼接/ 必须采用join resolve会回到根目录下
// let r = path.join(__dirname, "a", "b", "c", "/");

// 拼接  join 可以拼接/
// let r1 = path.resolve(__dirname, "a", "b", "c", "/"); // 解析出绝对路径
let ext = path.extname("a.min.js");
let basename = path.basename("a.min.js", ".js");
// console.log(ext, basename);

console.log(basename);
