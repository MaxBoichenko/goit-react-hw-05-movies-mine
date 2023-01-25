import { Route, Routes, Navigate } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Layout } from 'pages/Layout';
import { Movies } from 'pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../components/Cast';
import { Reviews } from '../components/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

/* <Route path="*" element={<Navigate to="/" replace />} /> */
