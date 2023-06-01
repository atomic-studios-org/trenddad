import { cities } from "../../drizzle/schema";
import db from "../../drizzle/db";

//for serverless functions on the edge, we define all our logic above our event handler
//for coldstarts, we can already execute funtions
// to make it even better:

// Create the variable outside the handler so it
// "survives" across function invocations
// let allUsers = {};
export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);
  try {
    await db.insert(cities).values({ name: name, popularity: "known" });
  } catch (error) {
    console.log("data was not inserted into the database");
  }

  return {};
});
