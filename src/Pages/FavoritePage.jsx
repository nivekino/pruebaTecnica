import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleFavoriteChange = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  };

  useEffect(() => {
    window.addEventListener("storage", handleFavoriteChange);
    return () => {
      window.removeEventListener("storage", handleFavoriteChange);
    };
  }, []);

  return (
    <div>
      <h1 className="txt-title-page">Mis Favoritos</h1>
      <div className="container contaier-movies">
        {favorites.length === 0 ? (
          <p className="txt-ind">No has seleccionado aun.</p>
        ) : (
          favorites.map((favorite) => (
            <MovieCard key={favorite.imdbID} movie={favorite} />
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
