import { user } from './../../drizzle/schema';
import db from "../../drizzle/db";
import {eq, and} from "drizzle-orm"

const fetchUsers = cachedFunction(async (email: string) => {
  const userData = await db.select().from(user).where(eq(user.email, email))
  return userData;
},{
  maxAge: 60 * 60,
  name: 'userRequest',
  swr: true,
  staleMaxAge: 60 * 60,
  getKey: (email: string) => email
}) 
  


export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'public,max-age=86400;'); // 1 day
  const { email } = await readBody(event);
  const data = await fetchUsers(email);

  return { data: data };
});
