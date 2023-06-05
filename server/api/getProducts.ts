import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";
import { eq, and, not, or } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { cartItems } = await readBody(event);

  const product = await db.select().from(products);

  return { data: product };
});
