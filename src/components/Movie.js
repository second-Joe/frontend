// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, coverImg }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        {' '}
        <h2>{title}</h2>{' '}
      </Link>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
    </div>
  );
}

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
export default Movie;
