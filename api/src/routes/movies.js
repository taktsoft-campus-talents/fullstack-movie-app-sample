import express from "express";
import { getMoviesWithActorsAndGenres } from "../controllers/getMoviesWithActorsAndGenres.js";

export const moviesRouter = express.Router().get("/", async (req, res) => {
  const movies = await getMoviesWithActorsAndGenres();
  res.json(movies);
});
