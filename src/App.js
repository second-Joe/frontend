import React from "react";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [genres, setGenres] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
    <>
      {/* <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url({movie.background_image})`,
          backgroundPosition: "center center",
        }}
      ></header> */}
      <main className="app-container">
        <h2>장르</h2>
        <div className="movie-grid">
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
    </>
  );
};
export default App;
