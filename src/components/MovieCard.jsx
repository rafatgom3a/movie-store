import { useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, Bookmark } from "lucide-react";

import { FavoritesContext } from "../context/FavoritesContext";
import { WatchlistContext } from "../context/WatchlistContext";

export default function MovieCard({ movie, genreName }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(FavoritesContext);

  const { addToWatchlist, removeFromWatchlist, isInWatchlist } =
    useContext(WatchlistContext);

  const favorite = isFavorite(movie.id);
  const watchlist = isInWatchlist(movie.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition overflow-hidden">
      
      <Link to={`/movie/${movie.id}`} className="block relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[350px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white text-lg font-bold text-center px-3">
            {movie.title}
          </h3>
        </div>
      </Link>

      <div className="p-3 space-y-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {genreName}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            ⭐ {movie.vote_average}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() =>
                favorite
                  ? removeFromFavorites(movie.id)
                  : addToFavorites(movie)
              }
              className={`p-2 rounded-full transition
                ${
                  favorite
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-red-500"
                }`}
              title="Add to Favorites"
            >
              <Heart size={16} />
            </button>

            <button
              onClick={() =>
                watchlist
                  ? removeFromWatchlist(movie.id)
                  : addToWatchlist(movie)
              }
              className={`p-2 rounded-full transition
                ${
                  watchlist
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-yellow-500"
                }`}
              title="Add to Watchlist"
            >
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
