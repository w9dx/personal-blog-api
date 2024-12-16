import express from "express";
import articlesRoutes from "./routes/articles.js";
import { config } from "dotenv";
import { closeDB, connectToDB } from "./database/db.js";
import cors from "cors";
import { Db } from "mongodb";
config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 80;

app.use(articlesRoutes);

/**
 * @type {Db}
 */
export let db;

process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  await closeDB();
  process.exit(0);
});

async function start() {
  db = await connectToDB();
  app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
  });
}

start();
