CREATE TABLE IF NOT EXISTS "emailconfirmation" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256),
	"password" varchar(256),
	"confirmed" boolean,
	"code" varchar(256),
	CONSTRAINT "emailconfirmation_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"collection" varchar(256),
	"image" varchar(256),
	"price" integer,
	"description" varchar(256)
);
