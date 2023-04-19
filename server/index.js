import express from "express";
// import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
// import { PORT, NODE_ENV } from "./environment/exportEnv.js";

import * as dotenv from "dotenv";
dotenv.config({ path: "./environment/config.env", debug: true });
// import { connectDB } from "./database/connect.js";

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

// connectDB();
// connectDB(DB_URL, DB_NAME);
// await connectDB(DB_URL, DB_NAME);

const app = express();

app.get("/root", (req, res) => {
  res.send("hello from server root");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/send", (req, res) => {
  res.json({ message: "Hello from server /send!" });
});

/**
 *  __dirname doesnt work in ESM, so using path.resolve
 */
// app.use(express.static(path.resolve("../client/build/index.html")));
// console.log("path===", path.resolve("../client/build/index.html"));

// app.get("/", (req, res) => {
//   // res.sendFile(path.resolve("..", "client", "build", "index.html"));
//   res.sendFile(path.resolve("../client/build/index.html"));
// });

// app.listen(3000); // will not work here, as it creates a new server
// app.listen(PORT, () => {
//   console.log(`Running on PORT ${PORT}`);
// });

const httpServer = createServer(app);

const options = {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
  connectionStateRecovery: {
    // the backup duration of the sessions and the packets
    maxDisconnectionDuration: 2 * 60 * 1000,
    // whether to skip middlewares upon successful recovery
    skipMiddlewares: true,
  },
};

const io = new Server(httpServer, options);

io.on("connection", (socket) => {
  console.log(`connected--`, socket.id, socket.data);
  //
});

// io.on("socket:send", (data) => {
//   // io.emit("socket:receive", `hello ${data} from server`);
//   console.log("data in socket:send", data);
// });

// io.emit("socket:receive", (data) => {
//   // io.emit("socket:receive", `hello ${data} from server`);
//   console.log("data in socket:receive", data);
// });
console.log("node env:", NODE_ENV);

httpServer.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
