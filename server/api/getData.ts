import { cities } from "../../drizzle/schema";
import db from "../../drizzle/db";
import { error } from "console";

//for serverless functions on the edge, we define all our logic above our event handler
//for coldstarts, we can already execute funtions
// to make it even better:

// Create the variable outside the handler so it
// "survives" across function invocations
// let allUsers = {};
export default defineEventHandler(async (event) => {
  try {
    const allUsers = await db.select().from(cities);
    return { data: allUsers };
  } catch (error) {
    return new Error("eee");
  }
});
