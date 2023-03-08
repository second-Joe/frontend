import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import Grid from '@mui/material/Grid';

function MovieDetail({ title, src, description, genres, url, rating }) {
  return (
    <div>
      <ButtonGroup>
        {' '}
        <Button variant='outlined'>
          <Link to='/'>Back to the Movie List</Link>
        </Button>
        <Button>
          <a href={url} target='_blank'>
            Go to the movie website
          </a>
        </Button>
      </ButtonGroup>
      <Grid container>
        <Grid item xs='8'>
          <h1>{title}</h1>
          <h4>description</h4>
          <p>{description}</p>
          <h4>Movie Rating: {rating}</h4>
          <div>
            <h4>genres</h4>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>{' '}
        </Grid>{' '}
        <Grid item xs='4'>
          <img src={src} alt={title} />
        </Grid>{' '}
      </Grid>
    </div>
  );
}

export default MovieDetail;
