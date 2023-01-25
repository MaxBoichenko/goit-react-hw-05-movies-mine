import { Outlet } from 'react-router-dom';
import { getMovieDetails } from '../API/Api';

import { useParams, Link, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movieId || !movie) {
    return null;
  }

  return (
    <>
      <button type="button">
        <Link to={backLinkHref}>Go back</Link>
      </button>

      <section>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        </div>
        <div>
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average * 10} %</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </section>

      <section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>

      <Outlet />
    </>
  );
};
