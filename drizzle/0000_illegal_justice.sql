CREATE TABLE `account_types` (
	`account_type_id` integer PRIMARY KEY NOT NULL,
	`account_type` text NOT NULL,
	`company_id` integer,
	FOREIGN KEY (`company_id`) REFERENCES `companies`(`company_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `application_history` (
	`application_history_id` integer PRIMARY KEY NOT NULL,
	`application_status_id` integer,
	`date` text DEFAULT CURRENT_TIMESTAMP,
	`job_posting_id` integer,
	`user_id` integer,
	FOREIGN KEY (`application_status_id`) REFERENCES `application_status`(`application_status_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`job_posting_id`) REFERENCES `job_postings`(`job_posting_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `application_status` (
	`application_status_id` integer PRIMARY KEY NOT NULL,
	`application_status` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `client_profiles` (
	`client_profile_id` integer PRIMARY KEY NOT NULL,
	`education` text,
	`record` text,
	`referral` text,
	`work_experience` text
);
--> statement-breakpoint
CREATE TABLE `clients` (
	`client_id` integer PRIMARY KEY NOT NULL,
	`status_id` integer,
	`last_online` text DEFAULT (current_timestamp) NOT NULL,
	`phone_number` text,
	`address` text,
	`resume_url` text,
	`user_id` integer,
	`client_profile_id` integer,
	FOREIGN KEY (`status_id`) REFERENCES `status`(`status_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`client_profile_id`) REFERENCES `client_profiles`(`client_profile_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `companies` (
	`company_id` integer PRIMARY KEY NOT NULL,
	`company_name` text NOT NULL,
	`logo_url` text
);
--> statement-breakpoint
CREATE TABLE `job_postings` (
	`job_posting_id` integer PRIMARY KEY NOT NULL,
	`date_posted` text DEFAULT CURRENT_TIMESTAMP,
	`description` text,
	`required_skills` text,
	`job_type_id` integer,
	`company_id` integer,
	FOREIGN KEY (`job_type_id`) REFERENCES `job_types`(`job_type_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`company_id`) REFERENCES `companies`(`company_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `job_types` (
	`job_type_id` integer PRIMARY KEY NOT NULL,
	`job_type` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `skill_client` (
	`skill_client_id` integer PRIMARY KEY NOT NULL,
	`skill_id` integer,
	`client_profile_id` integer,
	FOREIGN KEY (`skill_id`) REFERENCES `skills`(`skill_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`client_profile_id`) REFERENCES `client_profiles`(`client_profile_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `skills` (
	`skill_id` integer PRIMARY KEY NOT NULL,
	`skill` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `status` (
	`status_id` integer PRIMARY KEY NOT NULL,
	`status` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`user_id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`account_type_id` integer,
	FOREIGN KEY (`account_type_id`) REFERENCES `account_types`(`account_type_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);