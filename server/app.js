console.log("app-");

require("dotenv").config({ path: "./.env", debug: true });

//db
// get driver connection
// const { connectToServer } = require("./database/connect.js");
//db

const express = require("express");
const apiRouter = require("./routes/routes.js");
const { handleError } = require("./errorHandle/errorHandle.js");

const app = express();

app.use("/api", apiRouter);

app.get("/root", (req, res) => {
  res.json({ message: "hello from server root" });
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

app.use(handleError);

app.use("*", (req, res) => {
  res.status(200).json({ message: "route not found!" });
});

// // app.listen(3000); // will not work here, as it creates a new server
// app.listen(process.env.PORT, () => {
//   // perform a database connection when server starts
//   connectToServer();
//   console.log(`Running on PORT ${process.env.PORT}`);
// });

module.exports = app;
