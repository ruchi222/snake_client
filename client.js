const net = require("net");

const connect = function () {
    const conn = net.createConnection({
      host: '135.23.223.133', // IP address here,
      port: 50542 // PORT number here,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("connect", () => {
        conn.write("Name: Ruchi")
        conn.write("Move: up")
        conn.write("Move: down")
        conn.write("Move: left")
        conn.write("Move: right")
      // code that does something when the connection is first established
      console.log("Connected!")
    });
    conn.on("data", (data) => {
        console.log("data")
        console.log(data)
    })
    return conn;
  };

module.exports = { connect };