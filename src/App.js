import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import LandingPage from 'pages/LandingPage/LandingPage.tsx';
import MainPage from 'pages/MainPage';
import WriteMessage from 'pages/WriteMessage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/write' element={<WriteMessage/>}/>
      </Routes>
    </div>
  );
}

export default App;
