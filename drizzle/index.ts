import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import db from "./db";

// this will automatically run needed migrations on the database
await migrate(db, { migrationsFolder: "~/drizzle/migrations" });
