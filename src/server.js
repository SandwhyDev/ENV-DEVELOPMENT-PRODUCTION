import express from "express";
import cors from "cors";
import path from "path";
import env from "dotenv";

// Tentukan file env berdasarkan NODE_ENV
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

env.config({
  path: envFile,
});

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

//MIDDLEWARE
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

//ROUTES
//app.use('/api', routes)

//LISTENER
app.listen(PORT, "0.0.0.0", () => {
  console.log(`
    SERVER RUNNING TO PORT ${PORT} AND ${DB_URL}
    `);
});
