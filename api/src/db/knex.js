import knex from "knex";

const host = process.env.DB_HOST || "localhost";
const user = process.env.DB_USER || "sascha";
const password = process.env.DB_PASSWORD || "";
const database = process.env.DB_NAME || "movies";

export default knex({
  client: "pg",
  connection: { host, user, password, database },
});
