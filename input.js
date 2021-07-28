let connection;

// Setup interface to handle user input from stdin

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

  
  const handleUserInput = function (key) {
    // your code here
    if (key === '\u0003') {
      process.exit();
    };
    if (key === 'up') {
  
    };
  };
  process.stdin.on("data", handleUserInput);
  module.exports = { setupInput };