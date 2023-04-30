// console.log("routes- routes");

const express = require("express");
const apiRouter = express.Router();
const { home, apiHome } = require("../controller/homeController");
const { insertOne, insertMany } = require("../controller/insertController");
const { deleteAllData } = require("../controller/deleteController");
const { findAll } = require("../controller/readController");
const { updateMany } = require("../controller/updateController");

apiRouter.route("/").get(apiHome);

apiRouter.route("/home").get(home);

//create
apiRouter.route("/insert/one").get(insertOne);
apiRouter.route("/insert/many").get(insertMany);

//read (find)
apiRouter.route("/find/all").get(findAll);
// // apiRouter.route("/find/data/id").find(findById);

//update
apiRouter.route("/update/many").get(updateMany);
// apiRouter.route("/update/data/id").update(updateById);

//delete
apiRouter.route("/delete/all/data").delete(deleteAllData);
// apiRouter.route("/delete/data/id").delete(deleteById);

module.exports = apiRouter;

// console.dir(module, { depth: null });
