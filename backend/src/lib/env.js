import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
  quiet: true,
});

export const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
  PISTON_API_URL: process.env.PISTON_API_URL,
  PISTON_API_KEY: process.env.PISTON_API_KEY,
  CLIENT_URL: process.env.CLIENT_URL,
};
