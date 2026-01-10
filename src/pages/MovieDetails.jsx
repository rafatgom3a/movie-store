import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Bookmark } from "lucide-react";

import { tmdb } from "../api/tmdb";
import { ThemeContext } from "../context/ThemeContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { WatchlistContext } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";

export default function MovieDetails() {
  const { id } = useParams();
  const { dark } = useContext(ThemeContext);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { watchlist, addToWatchlist, removeFromWatchlist } =
    useContext(WatchlistContext);

  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isFavorite = favorites.some((m) => m.id === movie?.id);
  const isWatchlisted = watchlist.some((m) => m.id === movie?.id);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const movieRes = await tmdb.get(`/movie/${id}`);
        setMovie(movieRes.data);

        const similarRes = await tmdb.get(`/movie/${id}/similar`);
        setSimilar(similarRes.data.results);
      } catch {
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${dark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-black"}`}>
        Loading movie details...
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${dark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-black"}`}>
        {error}
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen ${dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"}`}>
      
      {/* Cover */}
      <div
        className="w-full h-[420px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            {movie.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-10">

          {/* Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-xl shadow-lg"
          />

          {/* Details Card */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Overview</h2>
              <p className={`${dark ? "text-zinc-300" : "text-zinc-700"} leading-relaxed`}>
                {movie.overview}
              </p>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><span className="font-semibold">Release:</span> {movie.release_date}</p>
              <p><span className="font-semibold">Runtime:</span> {movie.runtime} min</p>
              <p><span className="font-semibold">Rating:</span> ⭐ {movie.vote_average}</p>
              <p><span className="font-semibold">Language:</span> {movie.original_language.toUpperCase()}</p>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className={`px-3 py-1 rounded-full text-sm ${
                    dark ? "bg-zinc-800" : "bg-zinc-200"
                  }`}
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() =>
                  isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie)
                }
                className={`flex items-center gap-2 px-5 py-2 rounded-md font-medium transition
                  ${isFavorite
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : dark
                    ? "bg-zinc-800 hover:bg-zinc-700"
                    : "bg-zinc-200 hover:bg-zinc-300"}
                `}
              >
                <Heart size={18} />
                {isFavorite ? "Remove Favorite" : "Add to Favorites"}
              </button>

              <button
                onClick={() =>
                  isWatchlisted
                    ? removeFromWatchlist(movie.id)
                    : addToWatchlist(movie)
                }
                className={`flex items-center gap-2 px-5 py-2 rounded-md font-medium transition
                  ${isWatchlisted
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : dark
                    ? "bg-zinc-800 hover:bg-zinc-700"
                    : "bg-zinc-200 hover:bg-zinc-300"}
                `}
              >
                <Bookmark size={18} />
                {isWatchlisted ? "Remove Watchlist" : "Add to Watchlist"}
              </button>
            </div>
          </div>
        </div>

        {/* Similar Movies */}
        {similar.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {similar.slice(0, 10).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
