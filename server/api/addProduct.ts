import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";
const addProduct = async (name: string, collection: string, image: string) => {
  const response = await db.insert(products).values({ name: name, collection: collection, image: image });
  return response;
};

export default defineEventHandler(async (event) => {
  const { name, collection, image } = await readBody(event);
  try {
    await addProduct(name, collection, image);
  } catch (error) {
    console.log(error)
  }

  return event.node.res.end();
});
