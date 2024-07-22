import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myApiKey, getMovieReviews } from '../../movies-api';
import axios from 'axios';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        myApiKey;
        axios.defaults.headers.common['Authorization'] = `Bearer ${myApiKey}`;
        const res = await getMovieReviews(movieId);
        console.log(res);
        setReviews(res);
      } catch (error) {
        console.log(
          `Sorry bro, we didn't find anything matching your request: ${error}`
        );
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
