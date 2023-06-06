import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";
import {eq} from "drizzle-orm"
const deleteProduct = async (name: string) => {
  const response = await db.delete(products).where(eq(products.name, name));
  return response;
};

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);
  try {
    await deleteProduct(name);
  } catch (error) {
    console.log(error)
  }

  return event.node.res.end();
});
