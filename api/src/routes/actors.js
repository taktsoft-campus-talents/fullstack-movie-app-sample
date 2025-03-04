import express from "express";
import { getActorsByMovieId } from "../controllers/getActorsByMovieId.js";

export const actorsRouter = express.Router();

actorsRouter.get("/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  if (!movieId) {
    res.status(400).json({ error: "No id provided" });
  }
  const actors = await getActorsByMovieId(movieId);
  res.json(actors);
});
