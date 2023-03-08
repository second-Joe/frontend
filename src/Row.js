// import React from "react";
// import axios from "axios";
// import "./App.css";
// import { useState, useEffect } from "react";

// const Row = ({ setGenres }) => {
//   const [genres, setGenres] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const getMovies = () => {
//     axios
//       .get(`https://yts.mx/api/v2/list_movies.json?genres=${genres}`)
//       .then((response) => {
//         setMovies(response.data.data.movies);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//     getMovies();
//   });
//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie);
//   };

//   const handleCloseClick = () => {
//     setSelectedMovie(null);
//   };
//   return (
//     <main className="app-container">
//       <h2>장르</h2>
//       <div className="movie-grid">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="movie-item"
//             onClick={() => handleMovieClick(movie)}
//           >
//             <img
//               className="movie_image"
//               src={movie.medium_cover_image}
//               alt={movie.title}
//             />
//             <div className="movie-overlay">
//               <div className="movie-title">{movie.title}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };
// export default Row;
