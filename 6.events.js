let EventEmitter = require("events");

class MyEvent extends EventEmitter {}

const e = new MyEvent();

e.on("add", num => {
  console.log("add", num);
});

e.emit("add", 12, 12, 122);
e.emit("add", 1);

e.once("min", () => {
  console.log("once");
});

e.emit("min");
e.emit("min");
e.emit("min");
