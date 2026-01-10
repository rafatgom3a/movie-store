import { useContext, useEffect, useState } from "react";
import { tmdb } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import { ThemeContext } from "../context/ThemeContext";

const filters = [
  { key: "popular", label: "Popular" },
  { key: "top_rated", label: "Top Rated" },
  { key: "upcoming", label: "Upcoming" },
];

export default function Movies() {
  const { dark } = useContext(ThemeContext);

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filter, setFilter] = useState("popular");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Fetch genres */
  useEffect(() => {
    tmdb.get("/genre/movie/list")
      .then(res => setGenres(res.data.genres))
      .catch(() => {});
  }, []);

  /* Fetch movies */
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let endpoint = `/movie/${filter}`;
        let params = { page };

        if (selectedGenre) {
          endpoint = "/discover/movie";
          params = {
            page,
            with_genres: selectedGenre,
            sort_by: "popularity.desc",
          };
        }

        const res = await tmdb.get(endpoint, { params });
        setMovies(res.data.results);
        setTotalPages(Math.min(res.data.total_pages, 500));
      } catch {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [filter, selectedGenre, page]);

  const resetPage = () => setPage(1);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${dark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-black"}`}>
        Loading movies...
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
    <div className={`w-full min-h-screen px-6 py-20 ${dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"}`}>

      {/* Filters Bar */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col lg:flex-row gap-6 justify-between items-center">

        <div className="flex gap-2">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => {
                setFilter(f.key);
                setSelectedGenre("");
                resetPage();
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${filter === f.key && !selectedGenre
                  ? "bg-indigo-600 text-white"
                  : dark
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : "bg-zinc-200 hover:bg-zinc-300"}
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Genre Filter */}
        <select
          value={selectedGenre}
          onChange={(e) => {
            setSelectedGenre(e.target.value);
            resetPage();
          }}
          className={`px-4 py-2 rounded-md border outline-none
            ${dark
              ? "bg-zinc-900 border-zinc-700 text-white"
              : "bg-white border-zinc-300 text-black"}
          `}
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      {/* Movies Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movies.map(movie => {
          const genre = genres.find(g => g.id === movie.genre_ids[0]);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              genreName={genre?.name}
            />
          );
        })}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center items-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
          className={`px-5 py-2 rounded-md font-medium transition
            ${page === 1
              ? "opacity-40 cursor-not-allowed"
              : dark
              ? "bg-zinc-800 hover:bg-zinc-700"
              : "bg-zinc-200 hover:bg-zinc-300"}
          `}
        >
          Previous
        </button>

        <span className="text-sm font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(prev => prev + 1)}
          className={`px-5 py-2 rounded-md font-medium transition
            ${page === totalPages
              ? "opacity-40 cursor-not-allowed"
              : dark
              ? "bg-zinc-800 hover:bg-zinc-700"
              : "bg-zinc-200 hover:bg-zinc-300"}
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
