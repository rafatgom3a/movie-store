import { useContext } from "react";
import { Heart, Bookmark } from "lucide-react";
import { FavoritesContext } from "../context/FavoritesContext";
import { WatchlistContext } from "../context/WatchlistContext";

export default function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesContext);
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useContext(WatchlistContext);

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  const handleWatchlistClick = () => {
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-t-lg"
      />
      <div className="p-3">
        <h3 className="font-bold">{movie.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            ⭐ {movie.vote_average}
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleFavoriteClick}
              className={`p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${isFavorite(movie.id) ? "text-red-500" : ""}`}
            >
              <Heart size={18} />
            </button>
            <button
              onClick={handleWatchlistClick}
              className={`p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${isInWatchlist(movie.id) ? "text-yellow-500" : ""}`}
            >
              <Bookmark size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
