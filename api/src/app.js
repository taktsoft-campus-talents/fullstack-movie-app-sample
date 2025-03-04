import express, { json } from "express";
import { moviesRouter } from "./routes/movies.js";
import { actorsRouter } from "./routes/actors.js";
import { ratingRouter } from "./routes/rating.js";

const app = express();

app.use(json());

app.use((req, _, next) => {
  console.debug(`${req.method} ${req.url}`);
  next();
});

app.use("/api/movies", moviesRouter);
app.use("/api/actors", actorsRouter);
app.use("/api/rating", ratingRouter);

app.use((_, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
