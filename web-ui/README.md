# Task: Movie App Development (Full Stack)

The task is to create a full-stack movie application, developing both the server and client side. The project will be structured as a **monorepository**. The client should be generated using **Vite**, and the server should be set up manually. The goal is to fetch and display movies from a database and optionally allow adding new movies.

## Step 1: Monorepository Setup

1. Create a monorepository to contain both the **client** and **server**.
2. Inside the monorepo, create the **client** using:
   ```sh
   npm create vite@latest
   ```
3. Manually create the **server** directory.

## Step 2: Server Setup

1. Navigate to the `server` folder and initialize a Node.js project:
   _(Note: Running `npm init -y` will create a `package.json` file, but you can skip this step and directly install dependencies, as `npm install` will automatically generate `package.json`.)_
   ```sh
   npm init -y
   ```
2. Install necessary dependencies:
   ```sh
   npm install express knex pg cors dotenv
   ```
3. (Optional) Modify `package.json` to use ES modules:
   ```json
   "type": "module"
   ```
4. Set up the folder structure:
   - **routes/** (Define API endpoints)
   - **controllers/** (Logic for handling requests)
   - **db/** (Database connection setup)
5. Connect the server to a **PostgreSQL database** using Knex.

## Step 3: GitHub Integration

You can set up **GitHub** for version control by either:

- Cloning an existing repository.
- Running `git init` in the project directory and pushing it to a new GitHub repository.

## Step 4: Client Setup

1. Remove all **pre-made styling** in the Vite-generated client.
2. Plan and define necessary **pages and components** (e.g., Movie List, Movie Details, Add Movie).

## Step 5: Basic API Implementation

1. Create a **GET route** in the server to return a list of movies. Each movie should have properties such as:
   - `title`
   - `description`
   - `release_date`
   - `rating`
2. Implement the database query in the controller.
3. Feel free to test your solution with Postman or ThunderClient.

## Step 6: Fetch Data in Client

1. Write a **fetch request** in the client to retrieve the movie list from the server.
2. Display the movies using **React components**.

## Bonus Task

- Implement rating system (user can see it by GET route and give a rate to the movie by POST route)
- Implement filtering by genre

## Note

You may use your **old movie project** as the client instead of creating a new one.
