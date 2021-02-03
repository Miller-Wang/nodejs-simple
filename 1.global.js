// 1.global上属性是全局的，不需要引入
console.log(Object.keys(global));

global.a = 1000;
console.log(a);

console.log(__dirname);

console.log(__filename);
