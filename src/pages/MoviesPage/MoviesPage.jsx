import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByRequest, myApiKey } from '../../movies-api';
import axios from 'axios';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    const clearQuery = event.target.elements.query.value.trim(); // Виправлено доступ до елементу форми
    console.log(clearQuery);
    if (clearQuery) {
      setQuery(clearQuery);
      setSearchParams({ params: clearQuery });
      console.log(searchParams);
    }
    //  event.target.reset();
  };

  useEffect(() => {
    const queryParam = searchParams.get('params');
    if (queryParam) {
      // setQuery(queryParam);
      console.log(searchParams);
    }

    const getMovieSearch = async queryParam => {
      if (!queryParam || queryParam.trim() === '') return;
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${myApiKey}`;
        const res = await getMovieByRequest(queryParam);
        setData(res);
        console.log(res);
      } catch (error) {
        console.log(
          `Sorry bro, we didn't find anything matching your request: ${error}`
        );
      }
    };
    getMovieSearch();
  }, [searchParams]);

  return (
    <div>
      <h1>Movies:{query}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
