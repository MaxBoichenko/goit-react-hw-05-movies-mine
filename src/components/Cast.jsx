import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../API/Api';

const Cast = () => {
  const [cast, setCast] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  if (!cast) return;

  return (
    <ul>
      {cast.length > 0 ? (
        cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : 'https://st2.depositphotos.com/1531183/5706/v/600/depositphotos_57064855-stock-illustration-unknown-person-silhouette-whith-red.jpg'
                }
                alt={actor.name}
                width="200px"
              />
              <span>{actor.name}</span>
            </li>
          );
        })
      ) : (
        <li>Нет каста </li>
      )}
    </ul>
  );
};
export default Cast;
