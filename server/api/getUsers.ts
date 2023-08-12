import { user } from "../../drizzle/schema";
import db from "../../drizzle/db";

const fetchhides = async () => {
  const hides = await db.select().from(user);
  return hides;
};

export default defineEventHandler(async (event) => {
  const data = await fetchhides();

  return { data: data };
});
