const connect = require("./client.js");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
setupInput();

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  };
  if (key === 'up') {

  };
};
stdin.on("data", handleUserInput);
console.log("Connecting ...");

connect();