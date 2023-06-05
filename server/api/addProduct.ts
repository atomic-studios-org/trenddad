import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";
const addProduct = async (name: string) => {
  const response = await db.insert(products).values({ name: name });
  return response;
};

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);
  try {
    await addProduct(name);
  } catch (error) {
    return new Error(
      "Oops, failed to add data to the application, please check your internet connection."
    );
  }

  return event.node.res.end();
});
