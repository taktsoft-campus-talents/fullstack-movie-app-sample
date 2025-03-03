import express from "express";
import { getMoviesWithGenreAndActors } from "../controllers/getMoviesWithGenreAndActors.js";

export const moviesRouter = express.Router().get("/", async (req, res) => {
  const movies = await getMoviesWithGenreAndActors();
  res.json(movies);
});
