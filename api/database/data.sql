INSERT INTO genres (name) VALUES
('Action'),
('Drama'),
('Sci-Fi'),
('Comedy'),
('Horror');

INSERT INTO movies (movieTitle, genre_id, rating) VALUES
('Inception', 3, 0),           -- Sci-Fi
('Titanic', 2, 0),             -- Drama
('The Dark Knight', 1, 0),     -- Action
('The Matrix', 3, 0),          -- Sci-Fi
('It', 5, 0);                  -- Horror

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