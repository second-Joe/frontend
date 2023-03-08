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

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url({movie.background_image})`,
          backgroundPosition: "center center",
        }}
      ></header>
      <main className="app-container">
        <h2>장르</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                className="movie_image"
                src={movie.medium_cover_image}
                alt={movie.title}
              />
              <div className="movie-title">{movie.title}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
export default App;
