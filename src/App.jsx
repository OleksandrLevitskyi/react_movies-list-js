import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/index';

const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);

export default App;
