console.log("routes- routes");

const express = require("express");
const apiRouter = express.Router();
const { home, insertData } = require("../controller/homeController");

apiRouter.route("/home").get(home);
apiRouter.route("/insert/data").get(insertData);

module.exports = apiRouter;

// console.dir(module, { depth: null });
