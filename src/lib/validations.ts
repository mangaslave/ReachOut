import {z} from "zod";

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

export const validEmail = z.string().email();

const phoneRegex = new RegExp(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);

export const validPhoneNumber = z.string().regex(phoneRegex, "Invalid Number!");

const schema = z.object({
  name: z.string().min(2, {message: "Name must be more than 1 character long"}),
  email: z.string().email({message: "Invalid email"}).min(7, {message: "Invalid email"}),
  message: z.string().min(11, {message: "Message must be longer than 10 characters"}),
});

export default function validateEmailContent(name: string, email: string, message: string) {
  try {
    schema.parse({name, email, message});
    return {success: true};
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {success: false, error: error.errors[0].message};
    }
    return {success: false, error: "Validation error"};
  }
}
