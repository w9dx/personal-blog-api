import { ReturnDocument } from "mongodb";
import { db } from "../server.js";

export const getArticleByName = async (articleName) => {
  const article = await db
    .collection("articles")
    .findOne({ name: articleName });
  return article;
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
