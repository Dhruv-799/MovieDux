import { useState } from "react";
import "./styles.css";
import "./App.css";
import MovieGrid from "./MovieGrid/MovieGrid";
import Header from "./assets/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="container">
        <MovieGrid />
      </div>
      <footer className="footer">
        <p>&copy; 2026 MovieDux. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
