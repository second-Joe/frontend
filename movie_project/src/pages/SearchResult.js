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
      await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${search}`)
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
            {movies.movie_count == 0 ? (
              <>검색결과가 존재하지 않습니다!</>
            ) : (
              movies.movies.map((movies) => (
                <Grid xs={3}>
                  <Movie
                    key={movies.yt_trailer_code}
                    medium_cover_image={movies.medium_cover_image}
                    // title={movies.title}
                    // summary={movies.summary}
                    // genres={movies.genres}
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
