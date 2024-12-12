import express from "express";
import articlesRoutes from "./routes/articles.js";
import { connectToDatabase } from "./utils.js";
const app = express();
app.use(express.json());

app.use(articlesRoutes);
export let db;

async function start() {
  db = await connectToDatabase();
  app.listen(80, function () {
    console.log("Server is running on port 80");
  });
}

start();
