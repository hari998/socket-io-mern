import * as dotenv from "dotenv";
dotenv.config({ path: "./config.env", debug: true });

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;

export const DB_URL = process.env.DB_URL;
export const DB_NAME = process.env.DB_NAME;
