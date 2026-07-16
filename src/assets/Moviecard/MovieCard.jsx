import React from "react";
import { useState, useEffect } from "react";
const MovieCard = ({ movie, isWatchlisted, togglewatchlist }) => {
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
          <div>
            <span className="movie-card-genre">{movie.genre}</span>
            <span className={`movie-card-rating ${getRating(movie.rating)}`}>
              {movie.rating}
            </span>
          </div>
          {/* Watchlist Toggle logic */}
          <label className="switch">
            <input type="checkbox" checked={isWatchlisted} onChange={() => togglewatchlist(movie.id)} />
            <span className="slider">
              <span className="slider-label">
                {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
