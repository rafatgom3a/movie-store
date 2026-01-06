import { useEffect, useState } from "react";
import { tmdb } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdb.get("/movie/popular").then(res => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
