import knex from "../db/knex.js";

export async function getAllMovies() {
  const movies = await knex("movies")
    .select(
      "movies.id",
      "movies.movietitle as title",
      "genres.name as genre",
      "genres.id as genre_id",
      "movies.rating as rating"
    )
    .join("genres", "movies.genre_id", "genres.id");
  console.debug(movies);
  return movies;
}
