import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isMovieFavorite = favorites.some(
      (fav) => fav.imdbID === movie.imdbID
    );
    setIsFavorite(isMovieFavorite);
  }, [movie.imdbID]);

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
    saveToFavorites();
  };

  const saveToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="card">
      <Link to={`details/${movie.imdbID}`} className="card-link">
        <img src={movie.Poster} alt="" className="card-img" />
      </Link>
      <div className="card-content">
        <h3 className="card-title">{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
        <div className="flex-fav">
          <p className="">Agregar a favoritos: </p>
          <button
            className={isFavorite ? "btn-fav-remove" : "btn-fav"}
            onClick={toggleFavorite}
          >
            <i
              className={
                isFavorite
                  ? "fa-regular fa-heart favorite-icon-remove"
                  : "fa-regular fa-heart favorite-icon"
              }
            ></i>
            {isFavorite ? "" : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
