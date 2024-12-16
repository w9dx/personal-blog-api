export type Article = {
  name: string;
  title: string;
  content: string[];
  comments: ArticleComment[];
  upvotes: number;
};

export type ArticleComment = {
  postedBy: string;
  commentText: string;
};
