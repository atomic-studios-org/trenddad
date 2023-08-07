import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  collection: varchar("collection", {length: 256}),
  image: varchar("image", {length: 256}),
  price: integer("price"),
  description: varchar("description", {length: 256})
});

export const user = pgTable("user", {
  id: varchar("id", { length: 256 }),
  name: varchar("name", { length: 256 }),
  email: varchar("email", {length: 256}),
  zipcode: varchar("zipcode", {length: 256}),
   street: varchar("street", {length: 256}),
   number: varchar("number", {length: 256}),
   country: varchar("country", {length: 256}),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }),
});

