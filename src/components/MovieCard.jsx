import React from "react";

const MovieCard = ({ props }) => {

  const { movie } = props;

  return (
    <div className="card">
      <img src={movie.Poster} alt="" className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{movie.Title}</h3>
        <p>
          <small className="small-txt">Year: {movie.Year}</small>
        </p>
        <p>
          <small className="small-txt">Type: {movie.Type}</small>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
