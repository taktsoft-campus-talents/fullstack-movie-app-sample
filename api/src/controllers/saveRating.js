import knex from "../db/knex.js";

export async function saveRating(movieId, rating) {
  const result = await knex("movies").where({ id: movieId }).update({
    rating,
  });
  console.debug("result:", result);
  return result === 1;
}
