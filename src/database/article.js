import { ReturnDocument } from "mongodb";
import { db } from "../server.js";

export const getArticleByName = async (articleName) => {
  const article = await db
    .collection("articles")
    .findOne({ name: articleName });
  return article;
};

export const getAll = async () => {
  const articles = await db.collection("articles").find().toArray();
  return articles;
};

export const createArticle = async ({ name, content, title }) => {
  const newArticle = {
    name,
    content,
    title,
    upvotes: 0,
    comments: [],
  };
  const createdArticle = await db.collection("articles").insertOne(newArticle);
  return createdArticle;
};

export const updateVote = async (articleName) => {
  const updatedArticle = db
    .collection("articles")
    .findOneAndUpdate(
      { name: articleName },
      { $inc: { upvotes: 1 } },
      { returnDocument: ReturnDocument.AFTER }
    );
  return updatedArticle;
};

export const addComments = async (articleName, { postedBy, text }) => {
  const updatedArticle = await db
    .collection("articles")
    .findOneAndUpdate(
      { name: articleName },
      { $push: { comments: { postedBy, text } } },
      { returnDocument: ReturnDocument.AFTER }
    );
  return updatedArticle;
};
