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

  useEffect(() => {
    async function fetchData() {
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
    fetchData();
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

  const actorsDisplay = actors
    ? actors.map((actor) => actor.actorname).join(", ")
    : "";

  return (
    <div>
      <ul>
        {movies.map((movie) => (
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
