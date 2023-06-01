import { cities } from "../../drizzle/schema";
import db from "../../drizzle/db";
import { eq, and, not, or } from "drizzle-orm";
export default defineEventHandler(async (event) => {
  try {
    const allUsers = await db
      .select()
      .from(cities)
      .orderBy(cities.popularity)
      .limit(10)
      .where(or(eq(cities.name, "Rudy"), eq(cities.popularity, "known")));

    return { data: allUsers };
  } catch (error) {
    return new Error(
      "Oops, failed to get the data, please check your internet connection."
    );
  }
});
