import { useContext, useEffect, useState } from "react";
import { tmdb } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import { ThemeContext } from "../context/ThemeContext";

export default function Movies() {
  const { dark } = useContext(ThemeContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await tmdb.get("/movie/popular");
        setMovies(res.data.results);
      } catch (err) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className={`w-full min-h-screen flex justify-center items-center ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
        <p className="animate-pulse">Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full min-h-screen flex justify-center items-center ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
        {error}
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen px-6 py-20 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
