// console.log("database- connect");

const { MongoClient, ServerApiVersion } = require("mongodb");

const dbName = process.env.DB_NAME;
const Db = process.env.ATLAS_URI;

//options
let options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};
const client = new MongoClient(Db, options);

let _conn;

module.exports = {
  connectToServer: async function connectToServer() {
    try {
      // console.log("inside---");

      /**using promise start here */
      // // Connect to database
      // client
      //   .connect()
      //   .then((conn) => {
      //     console.log("Connected Successfully!", conn);

      //     // //Close the database connection
      //     // console.log("Exiting..");
      //     // client.close();
      //   })
      //   .catch((error) => console.log("Failed to connect!", error));
      /**using promise ends here */

      /**using await start here */
      let conn = await client.connect();
      // console.log("Connected Successfully!", conn);

      _conn = conn.db(dbName); //gives connection instance with database name otherwise "admin" db will be connected
      console.log("Db Connected!");

      // //Close the database connection
      // console.log("Exiting..");
      // client.close();

      /**using await ends here */
    } catch (error) {
      console.log(error);
    }
  },

  getDb: function getDb() {
    //this returns connection instance created in above "connectToServer" fxn
    return _conn;
  },
};

// module.exports.connectToServer();
