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
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-100 shadow-md transition-transform hover:scale-[1.01] hover:shadow-lg dark:bg-base-100">
      <div className="group relative h-80">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <button
          title="Favorites"
          onClick={handleToggle}
          className={`btn btn-outline btn-primary absolute right-2 top-2 z-10 rounded-full bg-white/70 p-2 text-primary backdrop-blur-sm transition-transform hover:scale-110 dark:bg-black/40 ${
            favorite ? "btn btn-outline btn-error" : ""
          }`}
        >
          <FiHeart className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col space-y-2 p-4">
        <h2 className="card-title line-clamp-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
          {movie.title}
        </h2>
        <p className="text-md line-clamp-4 text-justify text-gray-800 dark:text-gray-200">
          {movie.overview}
        </p>
        <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{movie.release_date?.split("-")[0]}</span>
          <span>Rating: {movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
