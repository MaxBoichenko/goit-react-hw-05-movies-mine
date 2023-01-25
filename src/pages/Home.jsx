import { getTrending } from '../API/Api';
import { Link, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getTrending().then(data => setMovies(data.results));
  }, []);

  return (
    <ul>
      {movies.length > 0
        ? movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })
        : null}
    </ul>
  );
};
