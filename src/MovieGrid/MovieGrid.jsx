import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../assets/Moviecard/MovieCard";

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchMovie(e.target.value);
  };

  const movieFilter = movies.filter(
    movie => movie.title.toLowerCase().includes(searchMovie.toLowerCase()),
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
      <div className="movies-grid">
        {movieFilter.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
