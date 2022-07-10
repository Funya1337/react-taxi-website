import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Conditions from './pages/Conditions';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/conditions' exact element={<Conditions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
