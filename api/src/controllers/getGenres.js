import knex from "../db/knex.js";

export async function getGenres() {
  const genres = await knex("genres").select("*");
  console.debug(genres);
  return genres;
}
