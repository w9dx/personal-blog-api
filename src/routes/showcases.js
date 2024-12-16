import { Router } from "express";

export const showcasesRoute = Router();

showcasesRoute.get("/api/showcases", async (req, res) => {
  const showcases = await showcasesApi.getAll();
  res.json(showcases);
});
