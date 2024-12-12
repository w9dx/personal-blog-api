import { Router } from "express";
import {
  addComments,
  getArticleByName,
  updateVote,
} from "../database/article.js";

const articleRoutes = Router();

articleRoutes.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  const article = await getArticleByName(name);
  res.json(article);
});

articleRoutes.post("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  const article = await updateVote(name);
  res.json(article);
});

articleRoutes.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const article = await addComments(name, { postedBy, text });
  res.json(article);
});

export default articleRoutes;