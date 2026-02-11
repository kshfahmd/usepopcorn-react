import { useState, useEffect } from "react";
const KEY = "b1c17f1bc2be1f65619c774ea488b5ae";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}
`,
            { signal: controller.signal },
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response == "False") throw new Error(data.Error);
          const normalized = data.results.map((movie) => ({
            imdbID: String(movie.id), // fake id, but works for React keys
            Title: movie.title,
            Year: movie.release_date?.split("-")[0] ?? "N/A",
            Poster: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image",
          }));
          setMovies(normalized);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
     
      fetchMovies();
      return () => {
        controller.abort();
      };
    },
    [query],
  );
  return { movies, isLoading, error };
}
