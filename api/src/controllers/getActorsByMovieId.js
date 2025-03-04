import knex from "../db/knex.js";

export async function getActorsByMovieId(id) {
  const actors = await knex("actors")
    .select("actors.id", "actors.actorname")
    .join("movie_actors", "actors.id", "movie_actors.actor_id")
    .where({ "movie_actors.movie_id": id });
  console.debug(actors);
  return actors;
}
