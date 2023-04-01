/* eslint-disable array-callback-return */
import { useEffect, useState, useLayoutEffect } from "react";
import Movie from "../components/Movie";
import Grid from "@mui/material/Grid";
import axios from "axios";

const FavMovieList = () => {
  const [movies, setMovies] = useState([]);

  const [ischecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log("1번");
    axios
      .get("/favmovie/select")
      .then((res) => {
        setMovies(res.data);
        setIsChecked(res.data?.length ? true : false);
        console.log("Resget ", res.data);
        console.log("Res.data ", movies);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div>
      {ischecked ? (
        <div
          style={{
            marginLeft: "30px",
            marginTop: "100px",
            color: "white",
            fontSize: "2.4em",
            position: "fixed",
          }}
        >
          찜목록이 없습니다...
        </div>
      ) : (
        <div style={{ marginTop: "100px" }}>
          <Grid container spacing={2}>
            {movies.map((movie) => {
              <Grid item xs={2} key={movie.movie_title}>
                <Movie
                  id={movie.movie_title}
                  title={movie.movie_title}
                  summary={movie.summary}
                  medium_cover_image={movie.movie_image}
                />
              </Grid>;
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default FavMovieList;
