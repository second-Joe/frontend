import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Movie from "../components/Movie";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OutputMovieGenres = ({ genre }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadMovies(page);
    }, [page]);

    const moveLeft = () => {
        setPage((prevPage) => prevPage - 1);
    };
    const moveRight = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const loadMovies = async (page) => {
        const movieData = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?limit=5&genre=${genre}&minimum_rating=8&page=${page}`)
        ).json();
        setMovies(movieData.data.movies);
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
                <Grid item xs={12}>
                    <h4>{genre}</h4>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={moveLeft} disabled={page === 1}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </Grid>
                {movies.map((movie) => (
                    <Grid item xs key={movie.id} style={{ margin: '0px 4px' }}>
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
                    <IconButton onClick={moveRight} disabled={page === 5}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <br />
        </div>
    );
}

export default OutputMovieGenres;