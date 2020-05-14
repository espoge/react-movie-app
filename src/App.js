import React from 'react';
import MovieController from './components/MovieController'
import {MoviesProvider} from './components/MoviesContext'

import { BrowserRouter as Router} from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <MoviesProvider>
    <Router>
      <Nav />
      <MovieController />
    </Router>
    </MoviesProvider>
  );
}

export default App;
