import React from "react";
import { useState } from "react";
import MovieCard from "../assets/Moviecard/MovieCard";

const MovieGrid = ({ movies, watchlist, togglewatchlist }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [genre, setGenre] = useState("All genres");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchMovie(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesSearchMovie = (movie, searchMovie) => {
    return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
  };

  const matchesGenres = (movie, genres) => {
    return (
      genres === "All genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const movieFilter = movies.filter(
    (movie) =>
      matchesGenres(movie, genre) &&
      matchesSearchMovie(movie, searchMovie) &&
      matchesRating(movie, rating),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchMovie}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {movieFilter.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            togglewatchlist={togglewatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
