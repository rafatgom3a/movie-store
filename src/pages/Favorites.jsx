import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { ThemeContext } from "../context/ThemeContext";

export default function Favorites() {
  const { dark } = useContext(ThemeContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className={`w-full min-h-screen flex flex-col items-center justify-center ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
        <h2 className="text-xl font-semibold">No favorites yet ❤️</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-300">
          Add movies to your favorites to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen px-6 py-20 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className="text-4xl font-bold mb-6 text-center">Your Favorites</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
