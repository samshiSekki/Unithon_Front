import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import LandingPage from 'pages/LandingPage/LandingPage.tsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
