const { getDb } = require("../database/connect");

module.exports = {
  updateMany: async function updateMany(req, res, next) {
    try {
      let db = getDb();
      const myColl = db.collection("myColl");

      let queryObj = {};
      let updateObj = { $set: { active: true } };
      let updateResp = await myColl.updateMany(queryObj, updateObj);
      let response = updateResp;
      res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  },
};
