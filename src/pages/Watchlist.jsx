import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { ThemeContext } from "../context/ThemeContext";

export default function Watchlist() {
  const { dark } = useContext(ThemeContext);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  }, []);

  if (watchlist.length === 0) {
    return (
      <div className={`w-full min-h-screen flex flex-col items-center justify-center ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
        <h2 className="text-xl font-semibold">Your watchlist is empty 🎬</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-300">
          Save movies to watch later.
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen px-6 py-20 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className="text-4xl font-bold mb-6 text-center">Watchlist</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {watchlist.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
