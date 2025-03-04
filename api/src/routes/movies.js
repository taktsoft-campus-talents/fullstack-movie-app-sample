import express from "express";
import { getMoviesWithGenreAndActors } from "../controllers/getMoviesWithGenreAndActors.js";
import { getAllMovies } from "../controllers/getAllMovies.js";
import { getMovieById } from "../controllers/getMovieById.js";

export const moviesRouter = express.Router();

moviesRouter.get("/", async (_, res) => {
  const movies = await getAllMovies();
  res.json(movies);
});

moviesRouter.get("/with-genre-and-actors", async (_, res) => {
  const movies = await getMoviesWithGenreAndActors();
  res.json(movies);
});

moviesRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({ error: "No id provided" });
  }
  const movie = await getMovieById(id);
  res.json(movie);
});
