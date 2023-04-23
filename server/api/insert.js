console.log("api - insert");

import { myProject } from "../database/exportCollection.js";

async function input() {
  try {
    const insertManyResult = await myProject.insertMany(recipes);
    console.log(
      `${insertManyResult.insertedCount} documents successfully inserted.\n`
    );
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
}

input();
