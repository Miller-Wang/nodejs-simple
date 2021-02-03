const fs = require("fs");
const path = require("path");
// fs fileSystem 文件系统 可以帮我们操作文件 目录....
// path.resolve path.join

const absPath = path.resolve(__dirname, "note.md");
// 同步Api
const data = fs.readFileSync(absPath);

// console.log(data.toString());

// node api 约定 error first
// fs.readFile(absPath, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// });

const newFile = path.resolve(__dirname, "test.txt");
// flag  a-追加  w-默认写入
fs.writeFile(newFile, "hello world", { flag: "w" }, (err, data) => {
  if (!err) {
    console.log("写入成功");
  }
});

// fs.appendFile 等价于上面
