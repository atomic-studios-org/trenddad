import { user } from "../../drizzle/schema";
import db from "../../drizzle/db";
import {eq, and} from "drizzle-orm"

const createUser = async (id: string, name: string, email: string, zipcode: string, street: string, number: string, country: string) => {
    const isAlreadyInDb = await db.select().from(user).where(and(eq(user.email, email), eq(user.name, name)))
    console.log(isAlreadyInDb)
    if(isAlreadyInDb.length === 0){
        console.log("creating user")
       await db.insert(user).values({ id: id, name: name, email: email, zipcode: zipcode, street:street, number: number, country: country });
    }else{
        await db.update(user).set({ zipcode: zipcode, street:street, number: number, country: country})
    }
 
};

export default defineEventHandler(async (event) => {
    const { id, name, email, zipcode,street,number, country } = await readBody(event);
    try {
      await createUser(id, name, email, zipcode,street,number, country );
    } catch (error) {
      console.log(error)
    }
  
    return {data: true}
  });