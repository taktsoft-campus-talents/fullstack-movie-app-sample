import knex from "../db/knex.js";

// export async function getMoviesWithGenreAndActors() {
//   const movies = await knex.raw(`
//       SELECT movies.movieTitle as title,
//           genres.name as genre,
//           COALESCE(
//               (SELECT json_agg(actors.actorName)
//               FROM movie_actors
//               JOIN actors ON movie_actors.actor_id = actors.id
//               WHERE movie_actors.movie_id = movies.id),
//               '[]'
//           ) as actors
//       FROM movies
//       JOIN genres ON movies.genre_id = genres.id
//   `);
//   console.log(movies.rows);
//   return movies.rows;
// }

export async function getMoviesWithGenreAndActors() {
  const movies = await knex("movies")
    .select(
      "movies.id as id",
      "movies.movietitle as title",
      "genres.name as genre",
      knex.raw("JSON_AGG(actors.actorname) as actors")
    )
    .join("genres", "movies.genre_id", "genres.id")
    .leftJoin("movie_actors", "movies.id", "movie_actors.movie_id")
    .leftJoin("actors", "movie_actors.actor_id", "actors.id")
    .groupBy("movies.id", "movies.movietitle", "genres.name");
  console.log(movies);
  return movies;
}
