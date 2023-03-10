import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState, useEffect } from "react";
import Banner_data from "./Banner_data";

function Banner() {
  const [mystery, setMystery] = useState([]);
  const loadMysteryMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?limit=1&genre=mystery`
    );
    const data = await response.json();
    setMystery(data.data.movies);
  };
  useEffect(() => {
    loadMysteryMovies();
  }, []);

  return (
    <div>
      {mystery.map((movie) => (
        <Grid item xs={2} key={movie.id}>
          <Banner_data
            id={movie.id}
            medium_cover_image={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            background={movie.background_image}
            large_cover_image={movie.large_cover_image}
          />
        </Grid>
      ))}
    </div>
  );
}
export default Banner;
