import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import LandingPage from 'pages/LandingPage/LandingPage.tsx';
import MainPage from 'pages/MainPage';
import CheckNote from 'pages/CheckNotePage/CheckNote.tsx';
import CheckNoteTitle from 'pages/CheckNotePage/CheckNoteTitle';
import MyNote from 'pages/MyNotePage/MyNote.tsx';
import MyBeforeNote from 'pages/MyNotePage/MyBeforeNote';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/main' element={<CheckNote/>}/>
        {/* <Route path='/checknote' element={<CheckNote/>}/> */}
        <Route path='/checknotetitle' element={<CheckNoteTitle/>}></Route>
        <Route path='/mynote' element={<MyNote/>}></Route>
        <Route path='/mybeforenote' element={<MyBeforeNote/>}></Route>
      </Routes>
    </div>
  );
}

export default App;