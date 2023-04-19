// const insertManyResult = await collection.insertMany(recipes);

import { recipes } from "../data.js";
import { myColl } from "./exportCollection.js";

const insertManyResult = await myColl.insertMany(recipes);

console.log("insert result=", insertManyResult);
