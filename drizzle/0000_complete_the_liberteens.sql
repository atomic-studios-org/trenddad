CREATE TABLE `countries` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256));

CREATE TABLE `products` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`collection` varchar(256));

CREATE UNIQUE INDEX `name_idx` ON `countries` (`name`);