import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_W4xhrqgpKi1v@ep-flat-dawn-a5plzbyu.us-east-2.aws.neon.tech/AI-Study-Material-Gen?sslmode=require",
  },
});
