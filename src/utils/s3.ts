import {S3Client} from "@aws-sdk/client-s3";

export class S3Service {
  private client: S3Client;

  constructor() {
    this.client = new S3Client({
      region: process.env.AWS_PROD_BUCKET_REGION!,
      credentials: {
        accessKeyId: process.env.AWS_PROD_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_PROD_SECRET_KEY!,
      },
    });
  }

  getClient() {
    return this.client;
  }
}

export const s3Service = new S3Service();
