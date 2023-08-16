import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  collection: varchar("collection", { length: 256 }),
  image: varchar("image", { length: 256 }),
  price: integer("price"),
  description: varchar("description", { length: 256 }),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey().unique(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
  zipcode: varchar("zipcode", { length: 256 }),
  street: varchar("street", { length: 256 }),
  number: varchar("number", { length: 256 }),
  country: varchar("country", { length: 256 }),
});

export const emailconfirmation = pgTable("emailconfirmation", {
  id: serial("id").primaryKey().unique(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
  confirmed: boolean("confirmed"),
  code: varchar("code", { length: 256 }),
});

export const emailReferences = pgTable("emaileferences", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }),
});
