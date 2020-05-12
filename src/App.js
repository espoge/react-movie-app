import React from 'react';
import MovieController from './components/MovieController'
import { BrowserRouter as Router} from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <Nav />
      <MovieController />
    </Router>
  );
}

export default App;
