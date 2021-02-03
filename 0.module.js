// Node中的模块加载
// 模块化 1.可以帮我们解决命名冲突的问题 (每个文件外面都会包装一个函数)  2.高内聚低耦合

// 在文件执行的过程中默认 这个文件会被加一层函数
// 通过函数的参数进行传入我们在文件中可以直接访问

// 通过读取文件内容 将内容包装到一个自执行函数中，默认返回module.exports做为函数的结果
// let a = `function (exports, require, module, __filename, __dirname) {
//     let a = 1
//     module.exports = 'hello';
//     return module.exports;
// }(exports, require, module, xxxx, xxx)`

// node 中的模块可以分为三类
// 1.核心模块/内置模块 fs http path 不需要安装 引入的时候不需要增加相对路径、绝对路径
// 2.第三方模块 require('co') 需要安装，别人写的
// 3.自定义模块 需要通过绝对路径或者相对路径进行引入

const fs = require("fs");
const path = require("path");

//4.第三方模块，要先安装，查找顺序 本级目录 -> 上级目录 。。。->到根目录

const a = require("a");
console.log(a);

//node中默认不支持es6模块  可以用babel-node来支持
// require 区别于 import 是动态的
if (true) {
  const fs = require("fs");
}

// 模块的循环引用
// http://nodejs.cn/api/modules.html#modules_cycles
