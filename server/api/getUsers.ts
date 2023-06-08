import { user } from "../../drizzle/schema";
import db from "../../drizzle/db";

const fetchUsers = async () => {
  const users = await db.select().from(user);
  return users;
};

export default defineEventHandler(async (event) => {
  const data = await fetchUsers();

  return { data: data };
});
