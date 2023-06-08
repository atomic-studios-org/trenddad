CREATE TABLE `user` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`email` varchar(256),
	`zipcode` varchar(256),
	`street` varchar(256),
	`number` varchar(256),
	`country` varchar(256));
