DROP TABLE IF EXISTS movie_actors;
DROP TABLE IF EXISTS actors;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS genres;

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    movieTitle VARCHAR(255) NOT NULL,
    genre_id INT NOT NULL,
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);

CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    actorName VARCHAR(255) NOT NULL
);

CREATE TABLE movie_actors (
    movie_id INT,
    actor_id INT,
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (actor_id) REFERENCES actors(id),
    PRIMARY KEY (movie_id, actor_id)
);

INSERT INTO genres (name) VALUES
('Action'),
('Drama'),
('Sci-Fi'),
('Comedy'),
('Horror');

INSERT INTO movies (movieTitle, genre_id) VALUES
('Inception', 3),           -- Sci-Fi
('Titanic', 2),             -- Drama
('The Dark Knight', 1),     -- Action
('The Matrix', 3),          -- Sci-Fi
('It', 5);                  -- Horror

INSERT INTO actors (actorName) VALUES
('Leonardo DiCaprio'),
('Kate Winslet'),
('Keanu Reeves'),
('Christian Bale'),
('Bill Skarsgård');

INSERT INTO movie_actors (movie_id, actor_id) VALUES
(1, 1),  -- Inception - Leonardo DiCaprio
(2, 1),  -- Titanic - Leonardo DiCaprio
(2, 2),  -- Titanic - Kate Winslet
(3, 4),  -- The Dark Knight - Christian Bale
(4, 3),  -- The Matrix - Keanu Reeves
(5, 5);  -- It - Bill Skarsgård