import { useContext } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Film } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { dark } = useContext(ThemeContext);

  return (
    <footer className={`${dark? "bg-zinc-900 text-zinc-400": "bg-zinc-100 text-zinc-500"} border-t`}>
      <div className="w-full max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
                    <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className={`${dark? "bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent": "text-current"}`}>
            🎬
          </span>
          MovieStore
        </Link>
          </div>

          <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
            Discover popular, trending, and upcoming movies.
            Build your watchlist and favorites in one place.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold mb-2">Navigation</h3>
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/movies" className="hover:text-indigo-400">Movies</Link>
          <Link to="/favorites" className="hover:text-indigo-400">Favorites</Link>
          <Link to="/watchlist" className="hover:text-indigo-400">Watchlist</Link>
          <Link to="/about" className="hover:text-indigo-400">About</Link>
        </nav>

        {/* Legal */}
        <nav className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold mb-2">Legal</h3>
          <Link to="#" className="hover:text-indigo-400">Terms of Service</Link>
          <Link to="#" className="hover:text-indigo-400">Privacy Policy</Link>
        </nav>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Connect</h3>

          <div className="flex items-center space-x-4 mb-4">
            <a href="#" className="hover:text-indigo-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-indigo-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-indigo-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-indigo-400"><Linkedin size={20} /></a>
          </div>

          <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
            Follow us for movie updates and recommendations.
          </p>
        </div>
      </div>

      <div className={`border-t ${dark ? "border-gray-700" : "border-gray-200"}`}>
        <div className={`max-w-7xl mx-auto px-6 py-4 text-center text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>
          © {new Date().getFullYear()} MovieStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

