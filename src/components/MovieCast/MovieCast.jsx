import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myApiKey, getMovieCastById } from '../../movies-api';
import axios from 'axios';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        myApiKey;
        axios.defaults.headers.common['Authorization'] = `Bearer ${myApiKey}`;
        const res = await getMovieCastById(movieId);
        console.log(res.cast);
        setCast(res.cast);
      } catch (error) {
        console.log(
          `Sorry bro, we didn't find anything matching your request: ${error}`
        );
      }
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
