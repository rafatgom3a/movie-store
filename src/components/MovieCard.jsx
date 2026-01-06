export default function MovieCard({ movie }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-t-lg"
      />
      <div className="p-3">
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-sm text-gray-500">
          ⭐ {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
