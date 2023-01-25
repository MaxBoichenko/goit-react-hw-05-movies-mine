import { useState, useEffect } from 'react';

import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { getSearchMovies } from '../../src/API/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    getSearchMovies(query)
      .then(data =>
        setMovies(() => {
          return data.results ? data.results : [];
        })
      )
      .catch(er => console.log(er));
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();

    const trimQuery = e.target.elements.queryInput.value.trim();

    if (!trimQuery) return;

    setSearchParams(trimQuery !== '' ? { query: trimQuery } : {});
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="queryInput" defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      <section>
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
      </section>
    </>
  );
};

export default Movies;
