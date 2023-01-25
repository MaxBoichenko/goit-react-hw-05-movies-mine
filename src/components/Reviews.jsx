import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../API/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (!reviews) return;

  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        : 'Отзывов нет '}
    </ul>
  );
};

export default Reviews;
