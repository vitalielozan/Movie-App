import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { searchMovies } from "../services/api.js";
import MotionDiv from "../components/MotionDiv.jsx";
import MovieCard from "../components/MovieCard.jsx";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const [seachMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSearchMovie = async () => {
      try {
        const searchMovie = await searchMovies(query);
        setSearchMovies(searchMovie.results);
      } catch (error) {
        console.log(error);
        setError("Error to searching movies...");
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      loadSearchMovie();
    }, 1000);
  }, [query]);

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
    <div className="p-4">
      <div className="flex flex-col">
        <h2 className="mb-4 text-center text-xl font-semibold">
          Result for: <span className="text-blue-600">"{query}"</span>
        </h2>

        <MotionDiv>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {seachMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

export default SearchPage;
