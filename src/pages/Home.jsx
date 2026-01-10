import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Flame, Tv, Download, Telescope, Users } from "lucide-react";

import { tmdb } from "../api/tmdb";
import { ThemeContext } from "../context/ThemeContext";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const { dark } = useContext(ThemeContext);

  const [hero, setHero] = useState(null);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const trendingRes = await tmdb.get("/trending/movie/week");
        setHero(trendingRes.data.results[0]);
        setTrending(trendingRes.data.results.slice(1, 11));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeData();
  }, []);

  if (loading) {
    return (
      <div className={`w-full min-h-screen flex items-center justify-center ${dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"}`}>
        Loading...
      </div>
    );
  }

  return (
    <div className={`${dark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"}`}>

      {/* HERO */}
      {hero && (
        <section
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${hero.backdrop_path})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="relative z-10 h-full flex items-center px-6 md:px-16">
            <div className="max-w-xl">
              <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">{hero.title}</h1>
              <p className="text-gray-300 mb-6 line-clamp-3">{hero.overview}</p>
              <Link
                to={`/movie/${hero.id}`}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                <Play size={20} /> Play
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* TRENDING NOW */}
      <section className="px-6 md:px-12 py-12">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="text-red-500" />
          <h2 className="text-2xl font-bold">Trending Now</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {trending.map((movie) => (
            <div key={movie.id} className="min-w-[160px] md:min-w-[200px]">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </section>

      {/* MORE REASONS TO JOIN */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">More Reasons to Join</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            title="Enjoy on your TV"
            desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            icon={<Tv size={48} className="text-pink-500/80" />}
          />
          <FeatureCard
            title="Download your shows to watch offline"
            desc="Save your favorites easily and always have something to watch."
            icon={<Download size={48} className="text-pink-500/80" />}
          />
          <FeatureCard
            title="Watch everywhere"
            desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            icon={<Telescope size={48} className="text-red-500/80" />}
          />
          <FeatureCard
            title="Create profiles for kids"
            desc="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
            icon={<Users size={48} className="text-pink-400/80" />}
          />
        </div>
      </section>
    </div>
  );
}

/* FEATURE CARD */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="relative min-h-[280px] flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#1a1625] to-[#2d1b3d] border border-white/5 shadow-xl overflow-hidden">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{title}</h3>
        <p className="text-gray-400 text-[15px] leading-relaxed">{desc}</p>
      </div>
      
      {/* Decorative Icon at Bottom Right */}
      <div className="absolute bottom-4 right-4 opacity-80">
        {icon}
      </div>
    </div>
  );
}