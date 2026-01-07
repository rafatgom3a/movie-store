import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`w-full min-h-screen px-6 py-20 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">About MovieStore</h1>
        <p className={`${dark ? "text-gray-300" : "text-gray-700"} text-lg`}>
          MovieStore is a modern movies web application built with React.js and Tailwind CSS. 
          It integrates with the TMDB API to provide users with a seamless experience 
          to discover, search, and manage movies.
        </p>

        <div className="mt-6 space-y-2">
          <p>🎬 Browse popular, trending, and upcoming movies</p>
          <p>❤️ Save favorites and create a personal watchlist</p>
          <p>⭐ Rate movies locally</p>
          <p>🌙 Switch between dark and light mode</p>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Built for learning, practice, and portfolio purposes.
        </p>
      </div>
    </div>
  );
}
