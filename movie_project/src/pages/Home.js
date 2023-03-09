import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Movie from "../components/Movie";

const Home = () => {
  const [horror, setHorror] = useState([]);
  const [horrorPage, setHorrorPage] = useState(1);
  useEffect(() => {
    loadHorrorMovies(horrorPage);
  }, [horrorPage]);
  const horrorLeft = () => {
    setHorrorPage((prevPage) => prevPage - 1);
  };
  const horrorRight = () => {
    setHorrorPage((prevPage) => prevPage + 1);
  };
  const loadHorrorMovies = async (page) => {
    const HorrorData = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=5&genre=horror&minimum_rating=8&page=${page}`)
    ).json();
    setHorror(HorrorData.data.movies);
  };



  return (
    <div style={{ marginTop: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Horror</h2>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={horrorLeft} disabled={horrorPage === 1}>
            이전
          </Button>
        </Grid>
        {horror.map((movie) => (
          <Grid item xs key={movie.id} style={{ margin: '0px 4px' }}>
            <Movie
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          </Grid>
        ))}
        <Grid item xs={2}>
          <Button onClick={horrorRight} disabled={horror.length < 5}>
            다음
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;
