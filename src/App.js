import React from "react";
import axios from "axios";
import "./App.css";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [genres, setGenres] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  const getMovies = () => {
    axios
      .get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating}`)
      .then((response) => {
        setMovies(response.data.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getMovies();
  });
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseClick = () => {
    setSelectedMovie(null);
  };
  return (
    <main className="app-container">
      <h2>장르</h2>
      <div
        className="movie-grid"
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onThrottleDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              className="movie_image"
              src={movie.medium_cover_image}
              alt={movie.title}
            />
            <div className="movie-overlay">
              <div className="movie-title">{movie.title}</div>
            </div>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="modal-image"
              src={selectedMovie.large_cover_image}
              alt={selectedMovie.title}
            />
            <div className="modal-details">
              <h2 className="modal-title">{selectedMovie.title}</h2>
              <p className="modal-summary">{selectedMovie.summary}</p>
              <button className="close-button" onClick={handleCloseClick}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
export default App;
