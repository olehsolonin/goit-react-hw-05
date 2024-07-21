import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { myApiKey } from '../../movies-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        myApiKey;
        axios.defaults.headers.common['Authorization'] = `Bearer ${myApiKey}`;
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${movieId}`
        );
        setMovie(res);
      } catch (error) {
        console.loh(
          `Sorry bro, we didn't find anything matching your request: ${error}`
        );
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details - {movieId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, saepe
        ratione facilis rerum velit exercitationem ad quas dolorum eaque,
        voluptatum illum iure nihil harum ipsam?
      </p>
    </div>
  );
}
