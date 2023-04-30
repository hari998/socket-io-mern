// console.log("controller- insertController");
const fs = require("fs");

const { recipes } = require("../data");
const { getDb } = require("../database/connect");

module.exports = {
  insertOne: async function insertOne(req, res, next) {
    try {
      const recipes = { title: "Dangal", rating: "Not Rated" };

      let db = getDb();

      const myColl = db.collection("myColl");

      let insertOneResult = await myColl.insertOne(recipes);

      let result = insertOneResult;
      res.status(200).json({ result });
    } catch (error) {
      next(error);
    }
  },
  insertMany: async function insertMany(req, res, next) {
    try {
      /**get connection instance */
      let db = getDb();
      // console.log("db_conn", db);

      /**enter collection name into mongodb instance */
      const myColl = db.collection("myColl");
      // // console.log("myColl", myColl);

      /**execute operation using db method */
      const recipes = [
        { title: "Dangal", rating: "Not Rated" },
        { title: "The Boss Baby", rating: "PG" },
      ];

      // let insertManyResult = await myColl.insertMany(recipes); //MongoBulkWriteError: E11000
      let insertManyResult = await myColl.insertMany(recipes);

      /**
       * node starts here
       */

      // let str = JSON.stringify(insertManyResult);

      // const file = fs.createWriteStream("./controller/file.js"); //it creates at root of project
      // file.write(`//nodejs is js runtime,
      // let resp = ${str}`);

      /**
       * node ends here
       */

      // /**in one line (same thing as above but in one line) starts here */
      // let insertManyResult = await db
      //   .collection("myColl")
      //   .insertMany(recipes);
      // /**in online line ends here */

      let result = insertManyResult;
      res.status(200).json({ result });
    } catch (error) {
      next(error);
    }
  },
};
