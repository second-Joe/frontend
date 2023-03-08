import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Grid from "@mui/material/Grid"; // Grid version 1

// 길주 대폭 수정
const SearchResult = ({ search }) => {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  console.log(search);
  const searchMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${search}`)
    ).json();
    setMovies(json.data);
    setLoding(false);
    console.log("json ====", json);
  };
  useEffect(() => {
    searchMovies();
  }, [search]);
  return (
    <div>
      {loading ? (
        <div style={{ marginTop: "100px", height: "1000px" }}>Searching...</div>
      ) : (
        <div style={{ marginTop: "100px", height: "1000px" }}>
          <Grid container spacing={2}>
            {movies.movie_count === 0 ? (
              <div>검색결과가 존재하지 않습니다!</div>
            ) : (
              movies.movies.map((movie) => (
                <Grid item xs={2} key={movie.id}>
                  <Movie
                    id={movie.id}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </div>
      )}
    </div>
    // <div>
    //   <div style={{ marginTop: "100px", height: "1000px" }}>SEARCH RESULT</div>
    // </div>
  );
};

export default SearchResult;
