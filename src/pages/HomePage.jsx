import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import MotionDiv from "../components/MotionDiv.jsx";
import { getPopularMovies } from "../services/api.js";
import SearchBar from "../components/SearchBar.jsx";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies.results);
      } catch (error) {
        console.log(error);
        setError("Error to fetching movies..");
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      loadPopularMovies();
    }, 1000);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center py-20">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );

  if (error)
    return (
      <div className="py-10 text-center text-red-500">
        Error loading product.
      </div>
    );

  return (
    <div className="space-y-12">
      <SearchBar />
      <MotionDiv>
        <div className="grid gap-6 px-4 py-8 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}

export default HomePage;
