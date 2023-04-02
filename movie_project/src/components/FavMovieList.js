/* eslint-disable array-callback-return */
import { useEffect, useState, useLayoutEffect } from "react";
import Movie from "../components/Movie";
import Grid from "@mui/material/Grid";
import axios from "axios";

const FavMovieList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // const [ischecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log("1번");

    axios
      .get("/favmovie/select")
      .then((res) => {
        setMovies([...res.data]);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [movies]);

  return (
    <div>
      {loading ? (
        <div
          style={{
            marginLeft: "30px",
            marginTop: "100px",
            color: "white",
            fontSize: "2.4em",
            position: "fixed",
          }}
        >
          loading...
        </div>
      ) : (
        <div>
          {movies.length ? (
            <div style={{ marginTop: "100px" }}>
              <Grid container spacing={2}>
                {movies.map((movie) => (
                  <Grid item xs={2} key={movie.movie_num}>
                    <Movie
                      id={movie.movie_num}
                      title={movie.movie_title}
                      summary={movie.movie_summary}
                      medium_cover_image={movie.movie_image}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : (
            <div
              style={{
                marginLeft: "30px",
                marginTop: "100px",
                color: "white",
                fontSize: "2.4em",
                position: "fixed",
              }}
            >
              찜목록이 없습니다.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FavMovieList;
