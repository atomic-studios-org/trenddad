import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";
import { eq, and, not, or } from "drizzle-orm";
export default defineEventHandler(async (event) => {
  const {cartItems}= await readBody(event)
  if(cartItems.length !== 0){
  try {
    let allProducts = []
    for(let i = 0; i <cartItems.length; i++)
    allProducts.push(await db
      .select()
      .from(products)
      .where(eq(products.id, cartItems[i])))
      // .orderBy(products.popularity)
      // .limit(10)
      // .where(or(eq(products.name, "Rudy"), eq(products.popularity, "known")));

    return { data: allProducts };
  } catch (error) {
    return new Error(
      "Oops, failed to get the data, please check your internet connection."
    );
  }
}else{
  const product = await db
    .select()
    .from(products)
    
  return {data: product}
}
});
