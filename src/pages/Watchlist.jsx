import { useContext } from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";

import MovieCard from "../components/MovieCard";
import { WatchlistContext } from "../context/WatchlistContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Watchlist() {
  const { watchlist } = useContext(WatchlistContext);
  const { dark } = useContext(ThemeContext);

  if (watchlist.length === 0) {
    return (
      <div
        className={`w-full min-h-screen flex flex-col items-center justify-center gap-6 p-4 ${
          dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"
        }`}
      >
        <Bookmark size={64} className="text-blue-500" />
        <h2 className="text-2xl font-bold text-center">Your watchlist is empty</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
          Save movies to your watchlist to see them here. Start exploring and add some movies to watch later!
        </p>
        <Link
          to="/movies"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`w-full min-h-screen px-4 sm:px-6 lg:px-8 py-20 ${
        dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
          Your Watchlist
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {watchlist.map((movie) => (
            <div key={movie.id} className="transform transition-transform duration-300 hover:scale-105">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
