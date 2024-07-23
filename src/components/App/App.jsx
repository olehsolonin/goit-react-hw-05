/* eslint-disable no-unused-vars */
import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';
import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';
// import HomePage from '../../pages/HomePage/HomePage';
// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
// import MovieCast from '../MovieCast/MovieCast';
// import MovieReviews from '../MovieReviews/MovieReviews';

const makeNavLinkClass = ({ isActive }) => {
  //   console.log(isActive);
  return clsx(css.link, isActive && css.active);
};

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

export default function App() {
  return (
    <div className={css.container}>
      <h1>React Router</h1>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="Cast" element={<MovieCast />}></Route>
            <Route path="Reviews" element={<MovieReviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
