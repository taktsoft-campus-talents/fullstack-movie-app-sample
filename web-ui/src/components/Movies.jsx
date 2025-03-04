import { useState, useEffect } from "react";
import { Rating } from "./Rating";
import { DisplayChildren } from "./DisplayChildren";

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(-1);
  const [actors, setActors] = useState(null);
  const [loadingActors, setLoadingActors] = useState(true);
  const [errorActors, setErrorActors] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [errorGenres, setErrorGenres] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(-1);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch("/api/movies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
    async function fetchGenres() {
      try {
        const response = await fetch("/api/genres");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        setErrorGenres(error);
      } finally {
        setLoadingGenres(false);
      }
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (selectedMovieId > -1) {
          const response = await fetch(`/api/actors/${selectedMovieId}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setActors(data);
        }
      } catch (error) {
        setErrorActors(error);
      } finally {
        setLoadingActors(false);
      }
    }
    fetchData();
  }, [selectedMovieId]);

  function handleMovieClick(movieId) {
    setSelectedMovieId(movieId);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loadingActors) {
    return <p>Loading actors...</p>;
  }

  if (errorActors) {
    return <p>Error: {errorActors.message}</p>;
  }

  if (loadingGenres) {
    return <p>Loading genres...</p>;
  }

  if (errorGenres) {
    return <p>Error: {errorGenres.message}</p>;
  }

  const actorsDisplay = actors
    ? actors.map((actor) => actor.actorname).join(", ")
    : "";

  const filteredMovies =
    selectedGenre >= 0
      ? movies.filter((movie) => movie.genre_id == selectedGenre)
      : movies;

  return (
    <div>
      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value={"-1"}>All genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie) => (
          <li
            key={movie.id}
            onClick={() => handleMovieClick(movie.id)}
            style={{ cursor: "pointer" }}
          >
            <strong>{movie.title}</strong> ({movie.genre})
          </li>
        ))}
      </ul>
      <DisplayChildren condition={!!actors}>
        <p>Actors: {actorsDisplay}</p>
      </DisplayChildren>
      <DisplayChildren condition={selectedMovieId >= 0}>
        <Rating movieId={selectedMovieId} />
      </DisplayChildren>
    </div>
  );
}
