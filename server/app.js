// console.log("app-");

require("dotenv").config({ path: "./.env", debug: true });

const express = require("express");
var cors = require("cors");
const path = require("path");
const apiRouter = require("./routes/routes.js");
const { handleError } = require("./errorHandle/errorHandle.js");

const app = express();
app.use(cors());

app.use("*", (req, res, next) => {
  console.log("ori", req.headers.origin);
  next();
});

app.use("/api", apiRouter);

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/send", (req, res) => {
  res.json({ message: "Hello from server /send!" });
});

//add cors

/**
 * serve static files
 */

// if (process.env.NODE_ENV == "production") {
//   console.log("pathhhh prod--", path.join(__dirname, "../client/build"));
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "..", "client", "build", "index.html")
//     );
//   });
// } else {
//   console.log("pathhh dev--", path.join(__dirname, "../client/public"));
//   app.use(express.static(path.join(__dirname, "../client/public")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "..", "client", "public", "index.html")
//     );
//   });
// }

//seems to be not working after express.static
// app.get("/", (req, res) => {
//   console.log("inside / path", path.resolve(__dirname, "public", "index.html"));
//   res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });
//

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
