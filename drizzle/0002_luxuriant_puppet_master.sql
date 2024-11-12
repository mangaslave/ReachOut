ALTER TABLE `application_history` RENAME TO `client_applications`;--> statement-breakpoint
ALTER TABLE `client_applications` RENAME COLUMN "application_history_id" TO "client_application_id";--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_client_applications` (
	`client_application_id` integer PRIMARY KEY NOT NULL,
	`application_status_id` integer,
	`date` text DEFAULT CURRENT_TIMESTAMP,
	`job_posting_id` integer,
	`user_id` integer,
	FOREIGN KEY (`application_status_id`) REFERENCES `application_status`(`application_status_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`job_posting_id`) REFERENCES `job_postings`(`job_posting_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_client_applications`("client_application_id", "application_status_id", "date", "job_posting_id", "user_id") SELECT "client_application_id", "application_status_id", "date", "job_posting_id", "user_id" FROM `client_applications`;--> statement-breakpoint
DROP TABLE `client_applications`;--> statement-breakpoint
ALTER TABLE `__new_client_applications` RENAME TO `client_applications`;--> statement-breakpoint
PRAGMA foreign_keys=ON;