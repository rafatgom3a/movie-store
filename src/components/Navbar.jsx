import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`${dark ? "bg-zinc-900 text-amber-400 border-b-2 border-amber-500" : "bg-white text-zinc-900 shadow-md"} fixed w-full top-0 left-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className={`${dark? "bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent": "text-current"}`}>
            🎬
          </span>
          MovieStore
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link className={`font-medium ${isActive("/") ? "underline underline-offset-4 decoration-2" : ""}`} to="/">Home</Link>
          <Link className={`font-medium ${isActive("/movies") ? "underline underline-offset-4 decoration-2" : ""}`} to="/movies">Movies</Link>
          <Link className={`font-medium ${isActive("/favorites") ? "underline underline-offset-4 decoration-2" : ""}`} to="/favorites">Favorites</Link>
          <Link className={`font-medium ${isActive("/watchlist") ? "underline underline-offset-4 decoration-2" : ""}`} to="/watchlist">Watchlist</Link>
          <Link className={`font-medium ${isActive("/about") ? "underline underline-offset-4 decoration-2" : ""}`} to="/about">About</Link>
          <button
            onClick={() => setDark(!dark)}
            className="hover:text-indigo-400"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu & Theme */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setDark(!dark)}
            className="hover:text-indigo-400"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg ">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} md:hidden px-4 pb-4 space-y-3`}>
          <Link onClick={() => setMenuOpen(false)} className={`block hover:text-indigo-400 ${isActive("/") ? "underline underline-offset-4 decoration-2" : ""}`} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} className={`block hover:text-indigo-400 ${isActive("/movies") ? "underline underline-offset-4 decoration-2" : ""}`} to="/movies">Movies</Link>
          <Link onClick={() => setMenuOpen(false)} className={`block hover:text-indigo-400 ${isActive("/favorites") ? "underline underline-offset-4 decoration-2" : ""}`} to="/favorites">Favorites</Link>
          <Link onClick={() => setMenuOpen(false)} className={`block hover:text-indigo-400 ${isActive("/watchlist") ? "underline underline-offset-4 decoration-2" : ""}`} to="/watchlist">Watchlist</Link>
          <Link onClick={() => setMenuOpen(false)} className={`block hover:text-indigo-400 ${isActive("/about") ? "underline underline-offset-4 decoration-2" : ""}`} to="/about">About</Link>
        </div>
      )}
    </nav>
  );
}
