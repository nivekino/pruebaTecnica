import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=4cfc7abc&i=${imdbID}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movieDetails) {
    return;
  }

  return (
    <div className="movie-container">
      <h1 className="txt-title-page">Detalles de {movieDetails.Title}</h1>
      <div className="movie-details">
        <img src={movieDetails.Poster} alt="" className="details-img" />
        <div className="details-content">
          <h2 className="details-title">{movieDetails.Title}</h2>
          <p>Tipo: {movieDetails.Type}</p>
          <p>Actores: {movieDetails.Actors}</p>
          <p>Director: {movieDetails.Director}</p>
          <p>País: {movieDetails.Country}</p>
          <p>Fecha de estreno: {movieDetails.Released}</p>
          <p>Rating: {movieDetails.Rated}</p>
          <p>Plot: {movieDetails.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
