import "../components/OutputMovieGenres";
import OutputMovieGenres from "../components/OutputMovieGenres";
import Banner from "../components/Banner";

const Home = () => {
  const genres = ["horror", "romance", "comedy", "action"];

  return (
    <div style={{ marginTop: "100px" }}>
      <Banner />
      {genres.map((genre) => (
        <OutputMovieGenres key={genre} genre={genre} />
      ))}
    </div>
  );
};

export default Home;
