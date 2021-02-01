var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  // console.log("a user connected", socket.id);
  // io.emit("user", socket.id);
  socket.on("user", (nickname) => {
    console.log("user: " + nickname);
    io.emit("user", nickname);
  })
  socket.on("chat message", (message) => {
    console.log(message.nickname + ": " + message.text)
    io.emit("chat message", message);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});

// keep a log