import express from "express";
import articlesRoutes from "./routes/articles.js";
import { connectToDatabase } from "./utils.js";
import { config } from "dotenv";
import cors from "cors";
config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 80;

app.use(articlesRoutes);
export let db;

async function start() {
  db = await connectToDatabase();
  app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
  });
}

start();
