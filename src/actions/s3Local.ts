import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

/* type SignedURLResponse = Promise<
  { failure?: undefined; success: { url: string } }
  | { failure: string; success?: undefined }
>
export async function getSignedURL(): SignedURLResponse {
  if (!session) {
    return { failure: "not authenticated" }
  }

  return {success: {url: ""}}
}
 */

//* use next-safe-action with zod instead of smw's code above

const s3Client = new S3Client({
	region: process.env.AWS_BUCKET_REGION!,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	},
});

export async function getSignedURL(): SignedURLResponse {
	if (!session) {
		return { failure: "not authenticated" };
	}

	const putObjectCommand = new PutObjectCommand({
		Bucket: process.env.AWS_BUCKET_NAME!,
		Key: "test-file",
	});

	const url = await getSignedUrl(
		s3Client,
		putObjectCommand,
		{ expiresIn: 60 } // 60 seconds
	);

	return { success: { url } };
}
