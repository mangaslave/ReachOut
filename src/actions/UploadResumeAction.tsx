"use server";
import {db} from "@/db";
import {clients as clientsTable} from "@/db/schema";
import dotenv from "dotenv";
import {eq} from "drizzle-orm";
import {uploadFile} from "./s3-actions";

dotenv.config();

export default async function UploadResumeAction({file, clientId}: {file: File | undefined; clientId: number}) {
  console.log(file);
  console.log(clientId);
  if (file?.type !== "application/pdf") {
    return {success: false, message: "File must be a pdf"};
  }

  try {
    const resume = await uploadFile({file: file});
    console.log(resume);
    if (resume?.data) {
      const resumeLinkToDB = await db
        .update(clientsTable)
        .set({resumeUrl: resume.data.url})
        .where(eq(clientsTable.clientId, clientId))
        .returning({resumeUrl: clientsTable.resumeUrl});
      console.log(resumeLinkToDB);
      console.log("success");
      return {
        success: true,
        message: `Resume for client was updated.`,
        url: resumeLinkToDB[0].resumeUrl ? resumeLinkToDB[0].resumeUrl : "",
        name: resume.data.filename ? resume.data.filename : "",
      };
    } else {
      console.log("Error saving resume to database");
      return {
        success: false,
        message: "Error saving resume to database",
      };
    }
  } catch (err) {
    console.log(err);
    return {success: false, message: `Error saving resume to database: ${err}`};
  }
}
