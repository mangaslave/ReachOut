import { z } from "zod";

export const fileUploadSchema = z.object({
	file: z
		.instanceof(File)
		.refine((file) => file.size <= 5 * 1024 * 1024, {
			message: "File size must be less than 5MB",
		})
		.refine((file) => ["application/pdf"].includes(file.type), {
			message: "File type must be a PDF",
		}),
});

export type FileUploadSchema = z.infer<typeof fileUploadSchema>;

export const uploadResponseSchema = z.object({
	url: z.string().url(),
	key: z.string(),
	filename: z.string(),
	size: z.number(),
	contentType: z.string(),
	uploadedAt: z.date(),
});

export type UploadResponse = z.infer<typeof uploadResponseSchema>;

export const deleteSchema = z.object({
	key: z.string(),
});

export const presignedUrlSchema = z.object({
	key: z.string(),
	expiresIn: z.number().min(1).max(604800).default(3600), // 1 hour default, max 1 week
});
