import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Conditions from './pages/Conditions';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Invest from './pages/Invest';
import About from './pages/About';
import Question from './pages/Question';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/invest' exact element={<Invest/>}/>
        <Route path='/question' exact element={<Question/>}/>
      </Routes>
    </Router>
  );
}

export default App;
