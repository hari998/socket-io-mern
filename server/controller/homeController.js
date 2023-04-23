console.log("controller- homeController");

const { recipes } = require("../data");
const { getDb } = require("../database/connect");

module.exports = {
  home: async function home(req, res) {
    try {
      let response = { result: "hello from controller" };
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  },
  insertData: async function insertData(req, res, next) {
    try {
      /**get connection instance */
      let database = getDb();
      // console.log("db_conn", database);

      /**enter collection name into mongodb instance */
      const myColl = database.collection("myColl");
      // // console.log("myColl", myColl);

      /**execute operation using db method */
      let insertManyResult = await myColl.insertMany(recipes);

      // /**in one line (same thing as above but in one line) starts here */
      // let insertManyResult = await database
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
