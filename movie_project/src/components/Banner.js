import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState, useEffect } from "react";
import Banner_data from "./Banner_data";

function Banner() {
  const [mystery, setMystery] = useState([]);
  const loadMysteryMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?limit=1&genre=drama`
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
            medium_cover_image="https://static.wixstatic.com/media/cfe3a0_ff11eb8b5c644ccca71135ecd0066a61~mv2.jpg/v1/fill/w_640,h_522,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cfe3a0_ff11eb8b5c644ccca71135ecd0066a61~mv2.jpg"
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            background={movie.background_image}
            large_cover_image={movie.large_cover_image}
            yt_trailer_code={movie.yt_trailer_code}
          />
        </Grid>
      ))}
    </div>
  );
}
export default Banner;
