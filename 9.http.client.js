const http = require("http");

http.get("http://localhost:3100", res => {
  let rawData = "";
  res.on("data", chunk => {
    rawData += chunk;
  });
  res.on("end", () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log("parsedData", parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
});

// let options = {
//   port:3100,
//   hostname:'localhost',
//   pathname:'/?a=1',
//   method:'post'
// }

// http.request(options, function (res) {
//   // res 就是可读流
//   let arr = [];
//   res.on("data", function (chunk) {
//     arr.push(chunk);
//   });
//   res.on("end", function () {
//     response.end(Buffer.concat(arr).toString() + "world");
//   });
// });
