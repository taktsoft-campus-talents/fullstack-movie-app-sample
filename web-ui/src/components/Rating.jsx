import { useEffect, useState } from "react";

export function Rating({ movieId }) {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/movies/${movieId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRating(data.rating);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [movieId]);

  async function handleStarClick(stars) {
    setRating(stars);
    try {
      const response = await fetch("/api/rating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stars, movieId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      setError(error);
    }
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ cursor: "pointer" }}
        >
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
