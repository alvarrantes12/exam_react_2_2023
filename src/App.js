import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import CreateCountries from './pages/CreateCountry';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' exact element={<CreateCountries />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;