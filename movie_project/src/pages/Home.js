import { display } from "@mui/system";
import "../components/OutputMovieGenres"
import OutputMovieGenres from "../components/OutputMovieGenres";

const Home = () => {
  const genres = ["horror", "romance", "comedy", "action"];

  return (
    <div style={{
      marginTop: "80px",
    }}>
      {genres.map((genre) => (
        <OutputMovieGenres key={genre} genre={genre} />
      ))}
    </div>
  );
}

export default Home;