import db from "../../drizzle/db";
import { blogs } from "../../drizzle/schema";
import {eq} from "drizzle-orm"

export default defineEventHandler(async (event) => {
    const blog = await readBody(event)

    const currentBlog = await db
    .select()
    .from(blogs)
    .where(eq(blogs.title, blog.title));

    const allBlogs = await db.select().from(blogs);
    
    return {
        blog: currentBlog[0],
        blogs: allBlogs 
    }
})