import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";

export default defineEventHandler(async (event) => {
  
  const { name } = await readBody(event);
  try {
    await db.insert(products).values({ name: name });
  } catch (error) {
    return new Error(
      "Oops, failed to add data to the application, please check your internet connection."
    );
  }

  return event.node.res.end()
});
