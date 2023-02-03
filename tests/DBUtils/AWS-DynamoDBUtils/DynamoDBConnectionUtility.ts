import * as AWS from "@aws-sdk/client-s3";
const client = new AWS.S3({ region: "REGION" });


let params
// async/await.
try {
  const data = await client.abortMultipartUpload(params);
  console.log("chk processed data AWS---->", data);
  // process data.
} catch (error) {
  // error handling.
  console.log("chk error aws connection---->", error);
}