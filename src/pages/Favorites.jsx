import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { FavoritesContext } from "../context/FavoritesContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const { dark } = useContext(ThemeContext);

  if (favorites.length === 0) {
    return (
      <div
        className={`w-full min-h-screen flex flex-col items-center justify-center gap-4 ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-xl font-semibold">No favorites yet ❤️</h2>

        <p className="text-gray-500 dark:text-gray-300 text-center">
          Add movies to your favorites to see them here.
        </p>

        <Link
          to="/movies"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`w-full min-h-screen px-6 py-20 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Your Favorites</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
