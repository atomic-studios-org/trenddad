import { cities } from "../../drizzle/schema";
import db from "../../drizzle/db";

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);
  try {
    await db.insert(cities).values({ name: name, popularity: "known" });
  } catch (error) {
    return new Error(
      "Oops, failed to add data to the application, please check your internet connection."
    );
  }

  return {};
});
