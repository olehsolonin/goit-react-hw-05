/* eslint-disable no-unused-vars */
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './App.module.css';
import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const makeNavLinkClass = ({ isActive }) => {
  //   console.log(isActive);
  return clsx(css.link, isActive && css.active);
};

export default function App() {
  return (
    <div className={css.container}>
      <h1>React Router</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="Cast" element={}></Route>
          <Route path="Reviews" element={}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}
