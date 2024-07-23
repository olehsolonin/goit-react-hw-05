import {
  useParams,
  NavLink,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { myApiKey, getMoviesById } from '../../movies-api';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  //   console.log(movieId);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        myApiKey;
        axios.defaults.headers.common['Authorization'] = `Bearer ${myApiKey}`;
        const res = await getMoviesById(movieId);
        //   console.log(typeof res);
        setMovie(res);
        setGenres(res.genres);
        setLoading(false);
        toast.success('The request is successful)');
      } catch (error) {
        toast.error(`Ooops, some ${error}`);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  const renderGenres = genres => {
    return genres.map(genre => <p key={genre.id}>{genre.name}</p>);
  };

  const backLinkURL = useRef(location.state?.from ?? '/movies');

  return (
    <div>
      <Link to={backLinkURL.current}>Go Back</Link>
      <h1>
        {movie.original_title}({movie.release_date})
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}
`}
        alt={movie.title}
      />
      <p>User Score: {movie.vote_average * 10}%</p>
      <h2>Overview:</h2>
      <p>{movie.overview}</p>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <Toaster />
      <div>{renderGenres(genres)}</div>
      <ul>
        <li>
          <NavLink to="Cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="Reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
