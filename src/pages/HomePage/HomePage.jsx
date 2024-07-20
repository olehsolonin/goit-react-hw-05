import { useEffect, useState } from 'react';
import axios from 'axios';
import { getMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
