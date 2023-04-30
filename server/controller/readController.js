const { getDb } = require("../database/connect");

module.exports = {
  findAll: async function findAll(req, res) {
    try {
      let db = getDb();
      const myColl = db.collection("myColl");
      let findResp = await myColl.find().toArray();
      let response = findResp;
      res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  },
};
