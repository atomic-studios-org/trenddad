import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";

const fetchProduct = async () => {
  const product = await db.select().from(products);
  return product;
};

export default defineEventHandler(async (event) => {
  const product = await fetchProduct();

  return { data: product };
});
