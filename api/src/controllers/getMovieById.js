import knex from "../db/knex.js";

export async function getMovieById(id) {
  const movie = await knex("movies")
    .select(
      "movies.id",
      "movies.movietitle as title",
      "genres.name as genre",
      "movies.rating as rating"
    )
    .join("genres", "movies.genre_id", "genres.id")
    .where({ "movies.id": id })
    .first();
  console.debug(movie);
  return movie;
}
