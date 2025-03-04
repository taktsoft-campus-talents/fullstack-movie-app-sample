import express from "express";
import { saveRating } from "../controllers/saveRating.js";

export const ratingRouter = express.Router();

ratingRouter.post("/", async (req, res) => {
  const movieId = req.body.movieId;
  const rating = req.body.stars;
  if (!movieId || !rating) {
    res.status(400).json({ error: "movieId and rating are required" });
    return;
  }
  const result = await saveRating(movieId, rating);
  res.json({ success: result });
});
