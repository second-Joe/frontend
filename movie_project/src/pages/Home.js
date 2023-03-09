import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Movie from "../components/Movie";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
      <Grid
        container spacing={2}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item xs={12}
        >
          <h4>Horror</h4>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={horrorLeft}
            disabled={horrorPage === 1}>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        {horror.map((movie) => (
          < Grid item xs key={movie.id} style={{ margin: '0px 4px' }}>
            <Movie
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              style={{ transform: 'scale(2.0)' }}
            />
          </Grid>
        ))}
        <Grid item xs={1}>
          <IconButton onClick={horrorRight} disabled={horrorPage === 5}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div >
  );
}
export default Home;
