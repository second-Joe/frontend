import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Movie from "../components/Movie";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OutputMovieGenres = ({ genre }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        loadMovies(page);
    }, [page]);

    const moveLeft = () => {
        setPage((prevPage) => {
            return prevPage === 1 ? prevPage + 4 : prevPage - 1;
        });
    };
    const moveRight = () => {
        setPage((prevPage) => {
            return prevPage === 5 ? prevPage - 4 : prevPage + 1;
        });
    };

    const loadMovies = async (page) => {
        const movieData = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?limit=5&genre=${genre}&minimum_rating=8&page=${page}`)
        ).json();
        setLoading(false);
        setMovies(movieData.data.movies);
    };

    return (<div>
        {loading ?
            (<div> <h1>&nbsp;</h1></div >) :
            (<div>
                <h2
                    style={{
                        marginTop: "0px",
                        justifyContent: "center",
                        marginLeft: "8.5%",
                        color: "white",
                        fontSize: "1.5em",
                    }}>genre : {genre}</h2>
                <Grid
                    container spacing={2}
                    style={{

                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid
                        style={{
                            justifyContent: "space-between",
                            display: "flex"
                        }}
                        item xs={1}>
                        <IconButton
                            onClick={moveLeft}
                            style={{
                                width: "30px",
                                height: "60px"

                            }}>
                            <ArrowBackIosIcon
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    color: "red",
                                    scale: "4.0",
                                    marginLeft: "80px",
                                }} />
                        </IconButton>
                    </Grid>
                    {movies.map((movie) => (
                        <Grid item xs key={movie.id} >
                            <Movie
                                id={movie.id}
                                medium_cover_image={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                                style={{ transform: 'scale(1.0)' }}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={1}>
                        <IconButton onClick={moveRight}>
                            <ArrowForwardIosIcon
                                style={{
                                    color: "red",
                                    scale: "4.0",
                                    marginLeft: "40px",
                                }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>)
        }
    </div>
    );
}

export default OutputMovieGenres;