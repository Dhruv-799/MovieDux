import { useState, useEffect } from "react";
import "./styles.css";
import "./App.css";
import MovieGrid from "./MovieGrid/MovieGrid";
import Header from "./assets/Header/Header";
import Watchlist from "./assets/Watchlist/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const[watchlist,setWatchlist]=useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

const togglewatchlist = (movieId) =>{
  setWatchlist( prev => prev.includes(movieId)? prev.filter(id=> id !== movieId):[...prev , movieId])
}

  return (
    <div>
      <Header />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MovieGrid movies={movies} watchlist={watchlist} togglewatchlist={togglewatchlist} />} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} movies={movies} togglewatchlist={togglewatchlist} />} />
        </Routes>
      </Router>

      <footer className="footer">
        <p>&copy; 2026 MovieDux. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
