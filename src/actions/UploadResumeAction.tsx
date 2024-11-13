"use server";
import {db} from "@/db";
import {clients as clientsTable} from "@/db/schema";
import dotenv from "dotenv";
import {eq} from "drizzle-orm";

dotenv.config();

// const s3 = new S3Client({
//     credentials: {
//         accessKeyId: process.env.AWS_LOCAL_ACCESS_KEY,
//        secretAccessKey: process.env.AWS_LOCAL_SECRET_KEY
//     },
//      region: process.env.AWS_LOCAL_BUCKET_REGION
// })

export default async function UploadResumeAction({
  name,
  file,
  clientId,
}: {
  name: string;
  file: File | undefined;
  clientId: number;
}) {
  if (file?.type !== "pdf") {
    return {success: false, message: "File must be a pdf"};
  }

  const computeSHA256 = async (file: File) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  };

  const checksum = await computeSHA256(file);

  const params = {
    Bucket: process.env.AWS_LOCAL_BUCKET_NAME,
    Key: name,
    contentSize: file.size,
    ChecksumSHA256: checksum,
    body: file,
    ContentType: "application/pdf",
  };

  try {
    // const command = new PutObjectCommand(params);

    // const url = await getSignedUrl(s3, command, {expiresIn: 60});

    // await fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": file.type,
    //   },
    //   body: file,
    // });

    //const resumeLinkToDB = await db.update(clientsTable).set({resumeUrl: url}).where(eq(clientsTable.clientId, clientId)).returning({resumeUrl: clientsTable.resumeUrl});
    return {
      success: true,
      message: `Resume for client was updated.`,
      //@ts-ignore
      url: resumeLinkToDB.resumeUrl ? resumeLinkToDB.resumeUrl : "",
    };
  } catch (err) {
    console.log(err);
    return {sucess: false, message: `Error saving resume to database: ${err}`};
  }
}
