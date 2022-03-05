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
import WriteMessage from 'pages/WriteMessage';
import axios from 'axios';

const instance = axios.create({
  baseURL: "http://52.79.242.117:3000/", // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});
const token = localStorage.getItem('token');
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/write' element={<WriteMessage/>}/>
      </Routes>
    </div>
  );
}

export default App;