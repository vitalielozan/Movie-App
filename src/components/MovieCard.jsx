import React, { useState, useEffect } from "react";
import { useMovieContext } from "../hooks/useFavoriteContext.js";
import { FiHeart } from "react-icons/fi";

function MovieCard({ movie }) {
  const { isFavorite, toggleFavorite } = useMovieContext();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie.id));
  }, [movie.id, isFavorite]);

  const handleToggle = () => {
    toggleFavorite(movie);
    setFavorite((prev) => !prev);
  };

  return (
    <div className="card w-72 overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-base-100">
      <figure className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-80 w-full object-cover"
        />
        <button
          title="Favorites"
          onClick={handleToggle}
          className={`btn btn-outline btn-primary absolute right-2 top-2 rounded-full bg-white/70 p-2 text-primary backdrop-blur-sm transition-transform hover:scale-105 dark:bg-black/40 ${
            favorite ? "btn btn-outline btn-error" : ""
          }`}
        >
          <FiHeart className="h-5 w-5" />
        </button>
      </figure>
      <div className="card-body px-4 py-3">
        <h2 className="card-title text-lg font-semibold text-gray-800 dark:text-gray-100">
          {movie.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
