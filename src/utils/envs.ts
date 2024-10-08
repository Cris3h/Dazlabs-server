import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI || '';
export const NODE_ENV = process.env.NODE_ENV;
export const DEPLOY_SERVER_URL = process.env.DEPLOY_SERVER_URL;