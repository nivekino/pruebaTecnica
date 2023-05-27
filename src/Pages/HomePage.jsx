import React, { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";

export const HomePage = () => {
  const { movies, setMovies } = useContext(MovieContext);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=4cfc7abc&s={batman}`
      );
      const moviesData = response.data.Search;

      console.log(moviesData);
      setMovies(moviesData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="container contaier-movies">
        {/* {{movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}} */}
      </div>
    </>
  );
};