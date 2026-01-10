import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

export default function NotFound() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center gap-6 p-4 ${
        dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <h1 className="text-7xl font-extrabold">404</h1>

      <p className="text-xl opacity-80">
        Page Not Found
      </p>

      <Link
        to="/"
        className="px-6 py-2 rounded-lg font-medium transition
          bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
