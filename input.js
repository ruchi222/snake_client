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
    process.stdout.write(`Hello ${key.toString()}`
    ); 
    if (key === 'w') {
        connection.write("Move: up")
    }
    if (key === 'a') {
        connection.write("Move: left")
    }
    if (key === 's') {
        connection.write("Move: down")
    }
    if (key === 'd') {
        connection.write("Move: right")
    }
    if (key === '\u0003') {
      process.exit();
    };
    if (key === 'r') {
        connection.write("Say: Hello There!")
    }
    if (key === 'u') {
        connection.write("Say: Heyyy!")
    }
    if (key === 'c') {
        connection.write("Say: Good Job!")
    }
    if (key === 'h') {
        connection.write("Say: Connected!")
    }
  };
  process.stdin.on("data", handleUserInput);
  module.exports = { setupInput };