import React from "react";
import { useState, useEffect } from "react";
const MovieCard = ({ movie }) => {
  const handleImageerror = () => {
    return (e.target.src = "images/default.jpg");
  };

  const getRating = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 6 && rating < 8) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div className="movies-grid">
      <div key={movie.id} className="movie-card">
        <img
          src={`/images/${movie.image}`}
          alt={movie.title}
          onError={handleImageerror}
        />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-genre">{movie.genre}</p>
          <p className={`movie-card-rating ${getRating(movie.rating)}`}>
            {movie.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
