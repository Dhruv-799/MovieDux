import React from "react";
import "../../styles.css";
import MovieCard from "../Moviecard/MovieCard";
const Watchlist = ({ movies, watchlist, togglewatchlist }) => {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchlisted={true}
              togglewatchlist={togglewatchlist}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Watchlist;
