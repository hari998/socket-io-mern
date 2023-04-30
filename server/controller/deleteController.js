// console.log("controller- deleteController");

const { getDb } = require("../database/connect");

module.exports = {
  deleteAllData: async function home(req, res) {
    try {
      let database = getDb();
      const myColl = database.collection("myColl");

      let deleteManyResult = await myColl.deleteMany({});

      let result = deleteManyResult;
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
    }
  },
};
