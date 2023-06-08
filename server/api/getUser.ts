import { user } from './../../drizzle/schema';
import db from "../../drizzle/db";
import {eq, and} from "drizzle-orm"
const fetchUsers = async (name: string, email: string) => {
  const userData = await db.select().from(user).where(and(eq(user.name, name), eq(user.email, email)))
  return userData;
};

export default defineEventHandler(async (event) => {
  const { name, email } = await readBody(event);
  const data = await fetchUsers(name, email);

  return { data: data };
});
