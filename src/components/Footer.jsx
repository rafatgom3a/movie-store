import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Film } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-t border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Film className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">MovieStore</span>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
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

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Follow us for movie updates and recommendations.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} MovieStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
