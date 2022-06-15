import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import Home from './pages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/signin' element={<SigninPage exact/>} />
        </Routes>
  </BrowserRouter>

);




