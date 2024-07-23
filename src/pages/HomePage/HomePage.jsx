import { useEffect, useState } from 'react';
import axios from 'axios';
import { getMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies();
        //   console.log(data);
        setMovies(data);
        setLoading(false);
        toast.success('The request is successful, the data are loading)');
      } catch (error) {
        toast.error('Ooops, some error, refresh the page...');
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <Toaster />
    </div>
  );
}
