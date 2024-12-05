import { AzureKeyCredential, DocumentAnalysisClient } from "@azure/ai-form-recognizer";

  // set `<your-key>` and `<your-endpoint>` variables with the values from the Azure portal.
      
      console.log("key", key);
      console.log("endpoint", endpoint);
// sample document
    const resumeS3Url = "https://reachout-local.s3.us-east-1.amazonaws.com/uploads/kp_07e97ee93e1946b49176f01d02949c38/2024-11-20T06:01:33.088Z-resume.pdf";

    async function analyzeResume() {
        const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
        const poller = await client.beginAnalyzeDocumentFromUrl("prebuilt-document", resumeS3Url);
        const result = await poller.pollUntilDone();

        console.log("result", result)
      
        if (!result) {
          console.error("No analysis result found.");
          return;
        }
      
        console.log("\n--- Key-Value Pairs ---");
        if (result.keyValuePairs?.length) {
          for (const kvp of result.keyValuePairs) {
            console.log(`Key: ${kvp.key?.content || "N/A"}, Value: ${kvp.value?.content || "N/A"}`);
          }
        } else {
          console.log("No key-value pairs found.");
        }
      
        console.log("\n--- Extracted Tables ---");
        if (result.tables?.length) {
          for (const table of result.tables) {
            console.log(`Table with ${table.rowCount} rows and ${table.columnCount} columns:`);
            for (const cell of table.cells) {
              console.log(`  [Row ${cell.rowIndex}, Column ${cell.columnIndex}]: ${cell.content}`);
            }
          }
        } else {
          console.log("No tables found.");
        }
      
        console.log("\n--- Extracted Lines of Text ---");
        if (result.content) {
          console.log(result.content);
        } else {
          console.log("No text content found.");
        }
      }
      
      analyzeResume().catch((error) => {
        console.error("An error occurred:", error);
        process.exit(1);
      });