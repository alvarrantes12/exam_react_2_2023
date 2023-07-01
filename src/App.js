import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';
import CreateCountry from './pages/CreateCountry';
import Navbar from './components/SidebarData/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' exact element={<CreateCountry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
