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
  const [mystery, setMystery] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [romance, setRomance] = useState([]);
  const [action, setAction] = useState([]);
  const loadHorrorMovies = async (page) => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=5&genre=horror&minimum_rating=7&page=${page}`);
    const data = await response.json();
    setHorror(data.data.movies);
  };
  //   setHorror(horror.data);
  //   const mystery = await (
  //     await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=mystery`)
  //   ).json();
  //   setMystery(mystery.data);
  //   const animation = await (
  //     await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=animation`)
  //   ).json();
  //   setAnimation(animation.data);
  //   const comedy = await (
  //     await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=comedy`)
  //   ).json();
  //   setComedy(comedy.data);
  //   const romance = await (
  //     await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=romance`)
  //   ).json();
  //   setRomance(romance.data);
  //   const action = await (
  //     await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=action`)
  //   ).json();
  //   setAction(action.data);
  // }


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
