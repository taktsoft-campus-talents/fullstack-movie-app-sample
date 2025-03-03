import knex from "../db/knex.js";

export async function getMoviesWithActorsAndGenres() {
  const movies = await knex("movies")
    .select(
      "movies.id as id",
      "movies.movietitle as title",
      "genres.name as genre",
      knex.raw("JSON_AGG(actors.actorName) as actors")
    )
    .join("genres", "movies.genre_id", "genres.id")
    .leftJoin("movie_actors", "movies.id", "movie_actors.movie_id")
    .leftJoin("actors", "movie_actors.actor_id", "actors.id")
    .groupBy("movies.id", "movies.movietitle", "genres.name");
  console.log(movies);
  return movies;
}
