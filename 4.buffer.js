// Buffer 创建后不可更改
const b1 = Buffer.from("hello");
console.log(b1);

// 中文 1=3字节
const b2 = Buffer.from("你好", "utf8");
console.log(b2);

console.log(b2.toString());
console.log(b2.toString("hex"));
// base64 编码 会比原来大1/3
console.log(b2.toString("base64"));

const b3 = Buffer.alloc(10);
console.log(b3.toString("hex"));

// // 拼接
const b4 = Buffer.concat([b1, b2]);
console.log(b4.toString());
