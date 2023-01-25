const baseName = 'https://api.themoviedb.org/3';
const key = '2db21389930b520d8ed134be7fb3bbe4';

export const getTrending = (period = 'day') => {
  return fetch(`${baseName}/trending/movie/${period}?api_key=${key}`).then(
    response => response.json()
  );
};

export const getSearchMovies = (query, includeAdult = false, page = 1) => {
  return fetch(
    `${baseName}/search/movie/?api_key=${key}&page=${page}&include_adult=${includeAdult}&query=${query}`
  ).then(response => response.json());
};

export const getMovieDetails = movieId => {
  return fetch(`${baseName}/movie/${movieId}?api_key=${key}`).then(response =>
    response.json()
  );
};

export const getMovieCredits = movieId => {
  return fetch(`${baseName}/movie/${movieId}/credits?api_key=${key}`).then(
    response => response.json()
  );
};

export const getMovieReviews = (movieId, page = 1) => {
  return fetch(
    `${baseName}/movie/${movieId}/reviews?api_key=${key}&page=${page}`
  ).then(response => response.json());
};
