import * as dotenv from "dotenv";
dotenv.config({ path: "./environment/config.env", debug: true });

import S3 from "aws-sdk/clients/s3";

// export const s3Uploadsv2 = async (mulfile) => {
export const s3Uploadsv2 = async () => {
  const s3 = new S3();

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: "uploads/hello",
    Body: "hello-world",
  };
  return await s3.upload(param).promise(); //callback based, turn it into promise by using .promise()
};

// 18:17
// 18:24
