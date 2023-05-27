import React, { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";
import axios from "axios";
import MovieList from "../components/MovieList";

export const HomePage = () => {
  return (
    <>
      <h1 className="txt-title-page">Peliculas recomendadas</h1>
      <MovieList />
    </>
  );
};
