const fs = require("fs");
// Promise.resolve().then(() => {
//   console.log("p");
// });

// process.nextTick(() => {
//   console.log("n1");
// });

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// setImmediate(() => {
//   console.log("setImmediate");
// });

// const fs = require("fs");
// node中实现的微任务，优先级比Promise要高
// nextTick 和 promise的微任务是两个队列，会先清空nextTick队列

// Promise.resolve().then(() => {
//   console.log(3);
// });
// process.nextTick(() => {
//   console.log(1);
//   process.nextTick(() => {
//     console.log(2);
//   });
// });

// setImmediate 是宏任务，比setTimeOut优先级高
// setImmediate(() => {
//   console.log("setImmediate");
// });

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

fs.readFile("./package.json", "utf8", () => {
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate");
  });
});

// setImmediate(() => {
//   console.log("s1");
//   Promise.resolve().then(() => {
//     console.log("p1");
//   });
// });

// setImmediate(() => {
//   console.log("s2");
//   setImmediate(() => {
//     console.log("s3");
//     Promise.resolve().then(() => {
//       console.log("p3");
//     });
//   });

//   Promise.resolve().then(() => {
//     console.log("p2");
//   });

//   process.nextTick(() => {
//     console.log("n1");
//   });
// });

// global.a = 100;
// console.log(a);
