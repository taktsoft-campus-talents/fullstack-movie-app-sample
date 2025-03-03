import knex from "../db/knex.js";

export async function getMoviesWithActorsAndGenres() {
  const movie = await knex("movies")
    .select(
      "movies.movietitle as title",
      "actors.actorname as actor",
      "genres.name as genre"
    )
    .join("movie_actors", "movie_id", "actor_id")
    .join("actors", "actor_id", "actors.id")
    .join("genres", "genre_id", "genres.id");
  return movie;
}
