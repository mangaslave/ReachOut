"use server";
import {actionClient} from "@/lib/safe-action";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {s3Service} from "@/utils/s3";
import {PutObjectCommand, DeleteObjectCommand, GetObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import {fileUploadSchema, deleteSchema, presignedUrlSchema} from "@/lib/validations";

export const uploadFile = actionClient.schema(fileUploadSchema).action(async ({parsedInput: {file}}) => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    // throw new Error("Unauthorized: Please log in");
    return {
      url: null,
      error: "Unauthorized: Please log in",
    };
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const timestamp = new Date().toISOString();
    const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const key = `uploads/${user.id}/${timestamp}-${sanitizedFilename}`;

    await s3Service.getClient().send(
      new PutObjectCommand({
        Bucket: process.env.AWS_PROD_BUCKET_NAME!,
        Key: key,
        Body: buffer,
        ContentType: file.type,
        Metadata: {
          userId: user.id,
          originalFilename: file.name,
          uploadedAt: timestamp,
        },
      })
    );

    return {
      url: `https://${process.env.AWS_PROD_BUCKET_NAME}.s3.${process.env.AWS_PROD_BUCKET_REGION}.amazonaws.com/${key}`,
      key,
      filename: sanitizedFilename,
      size: file.size,
      contentType: file.type,
      uploadedAt: new Date(),
    };
  } catch (error) {
    console.error("S3 Upload Error: ", error);
    return {
      url: null,
      error: "Failed to upload file to S3",
    };
    // throw new Error("Failed to upload file to S3");
  }
});

export const deleteFile = actionClient.schema(deleteSchema).action(async ({parsedInput: {key}}) => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Unauthorized: Please log in");
  }

  if (!key.includes(`uploads/${user.id}/`)) {
    throw new Error("Unauthorized: You can't delete this file");
  }

  try {
    await s3Service.getClient().send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: key,
      })
    );

    return {success: true, message: "File deleted successfully"};
  } catch (error) {
    console.error("S3 Delete Error:", error);
    throw new Error("Failed to delete file from S3");
  }
});

export const getPresignedUrl = actionClient
  .schema(presignedUrlSchema)
  .action(async ({parsedInput: {key, expiresIn}}) => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user) {
      return {
        url: null,
        error: "Unauthorized: Please log in",
      };
      // throw new Error("Unauthorized: Please log in");
    }

    try {
      const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: key,
      });

      const url = await getSignedUrl(s3Service.getClient(), command, {
        expiresIn,
      });

      return {url};
    } catch (error) {
      console.error("Presigned URL Error:", error);
      return {
        url: null,
        error: "Unauthorized: Please log in",
      };
      // throw new Error("Failed to generate presigned URL");
    }
  });
