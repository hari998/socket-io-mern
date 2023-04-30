// console.log("server-");

const app = require("./app");
const { createServer } = require("node:http");
const { connectToServer } = require("./database/connect.js");

const { Server } = require("socket.io");

const httpServer = createServer(app);

/**@Socketio starts */

const options = {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    // // allowedHeaders: ["my-custom-header"],
    // credentials: true,
  },
  // connectionStateRecovery: {
  //   // the backup duration of the sessions and the packets
  //   maxDisconnectionDuration: 2 * 60 * 1000,
  //   // whether to skip middlewares upon successful recovery
  //   skipMiddlewares: true,
  // },
};

const io = new Server(httpServer, options);
// const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log(`User connected--`, socket.id, socket.data);

  socket.on("send_message", (data) => {
    // console.log("data--", data);
    socket.broadcast.emit("receive_message", data); //data sent from frontend
  });
  socket.to
});

// io.on("socket:send", (data) => {
//   // io.emit("socket:receive", `hello ${data} from server`);
//   console.log("data in socket:send", data);
// });

// io.emit("socket:receive", (data) => {
//   // io.emit("socket:receive", `hello ${data} from server`);
//   console.log("data in socket:receive", data);
// });

/**@Socketio ends */

const PORT = process.env.PORT;

httpServer.listen(PORT, async () => {
  try {
    console.log(`Running on PORT ${PORT}`);
    // perform a database connection when server starts
    console.log(`connecting to Db`);
    // await connectToServer();
  } catch (error) {
    console.log(error);
  }
});
