import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`
        w-full min-h-screen px-6 py-20
        ${dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"}
      `}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to MovieStore
        </h1>

        <p className={`${dark ? "text-gray-300" : "text-gray-700"} text-xl`}>
          Discover popular, trending, and upcoming movies.
          Browse movies, add them to your favorites, and build your watchlist.
        </p>
      </div>
    </div>
  );
}
