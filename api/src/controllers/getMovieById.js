import knex from "../db/knex.js";

export async function getMovieById(id) {
  const movie = await knex("movies")
    .select("movies.id", "movies.movietitle as title", "genres.name as genre")
    .join("genres", "movies.genre_id", "genres.id")
    .where({ "movies.id": id });
  console.debug(movie);
  return movie;
}
