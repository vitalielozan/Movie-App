import React, { useState, useEffect } from "react";
import { MovieContext } from "./context.js";

function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === movie.id);
      return exists
        ? prev.filter((fav) => fav.id !== movie.id)
        : [...prev, movie];
    });
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <MovieContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
