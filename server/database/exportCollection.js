import { database } from "./connect.js";

//const collection = database.collection(DB_COLL);     //syntax

export const myColl = database.collection("myColl");
