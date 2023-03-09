import "../components/OutputMovieGenres"
import OutputMovieGenres from "../components/OutputMovieGenres";

const Home = () => {
  const genres = ["horror", "romance", "comedy", "action"];

  return (
    <div>
      {genres.map((genre) => (
        <OutputMovieGenres key={genre} genre={genre} />
      ))}
    </div>
  );
}

export default Home;