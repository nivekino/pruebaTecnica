import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { HomePage } from "../Pages/HomePage";
import FavoritePage from "../Pages/FavoritePage";
import MovieDetails from "../Pages/MovieDetails";


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="details/:imdbID" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default AppRouter;
