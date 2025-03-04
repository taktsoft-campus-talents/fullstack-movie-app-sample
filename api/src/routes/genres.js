import express from "express";
import { getGenres } from "../controllers/getGenres.js";

export const genresRouter = express.Router();
genresRouter.get("/", async (req, res) => {
  const genres = await getGenres();
  res.json(genres);
});
