import { MongoClient, ServerApiVersion } from "mongodb";
// import { DB_NAME, DB_URL } from "../environment/exportEnv.js";

import * as dotenv from "dotenv";
dotenv.config({ path: "../environment/config.env", debug: true });
// dotenv.config({ path: "../config.env", debug: true });

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

/**Create a MongoClient with a MongoClientOptions object to set the Stable API version */
//options
let options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// The MongoClient is the object that references the connection to our
// datastore (Atlas, for example)
const client = new MongoClient(DB_URL, options);

// The connect() method does not attempt a connection; instead it instructs
// the driver to connect using the settings provided when a connection
// is required.
const conn = await client.connect();
// console.dir(conn, { depth: null }); //when this is logged, "replicaSet" field comes

// Provide the name of the database and collection you want to use.
// If the database and/or collection do not exist, the driver and Atlas
// will create them automatically when you first write data.
const dbName = DB_NAME;

// Create references to the database and collection in order to run
// operations on them.
export const database = client.db(dbName);
// export const database = new MongoClient(DB_URL, options).connect().db(dbName); //connect is not a function

// const collection = database.collection(collectionName);

console.log(`MongoDB connected-`, database);

// export async function connectDB(DB_URL, DB_NAME) {
//   //options
//   let options = {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   };
//   try {
//     const client = new MongoClient(DB_URL, options);
//     const conn = await client.connect(); //(ok, this maybe because of await) but if i remove this , then "db connected" print on top .. ?
//     const dbName = DB_NAME;
//     const database = client.db(dbName);
//     console.log(`DB connected-`); //when i removed "database" from console log, see the order in terminal, it printed "db conntd" at the bottom, why ?
//     // return database
//   } catch (error) {
//     console.log("error=");
//     console.log(error);
//   }
// }
