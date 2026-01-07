import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`w-full min-h-screen px-6 py-20 ${
        dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About MovieStore</h1>

        <p className={`${dark ? "text-gray-300" : "text-gray-700"} text-lg mb-6`}>
          Welcome to <span className="font-semibold">MovieStore</span> — your go-to
          platform for discovering movies from around the world. Our goal is to
          make exploring, tracking, and enjoying movies simple, fast, and fun.
        </p>

        <p className={`${dark ? "text-gray-300" : "text-gray-700"} text-lg mb-6`}>
          Since our launch in 2024, MovieStore has been built with a passion for
          cinema and modern web technologies. Whether you're looking for trending
          movies, upcoming releases, or timeless classics, we bring everything
          together in one place.
        </p>

        <p className={`${dark ? "text-gray-300" : "text-gray-700"} text-lg`}>
          Create your personal watchlist, save your favorite movies, and explore
          new titles anytime. MovieStore is constantly evolving to deliver a
          smooth, engaging, and enjoyable movie discovery experience.
        </p>
      </div>
    </div>
  );
}
