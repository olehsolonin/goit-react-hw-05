import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByRequest, myApiKey } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import axios from 'axios';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  //   console.log(searchParams.get('query'));

  const handleSubmit = event => {
    event.preventDefault();
    const clearQuery = event.target.elements.query.value.trim(); // Виправлено доступ до елементу форми
    console.log(clearQuery);
    if (clearQuery) {
      setQuery(clearQuery);
      setSearchParams({ query: clearQuery });
    }
    event.target.reset();
  };

  useEffect(() => {
    const getMovieSearch = async () => {
      const queryParam = searchParams.get('query');

      if (queryParam === '' || queryParam === null) return;
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${myApiKey}`;
        const res = await getMovieByRequest(queryParam);
        setData(res);
        console.log(res);
        console.log(queryParam);
      } catch (error) {
        console.log(
          `Sorry bro, we didn't find anything matching your request: ${error}`
        );
      }
    };
    getMovieSearch();
  }, [query, searchParams]);

  return (
    <div>
      <h1>Movies:{query}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {data.length > 0 && <MovieList movies={data} />}
    </div>
  );
}
