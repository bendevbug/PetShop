import React from 'react';
import { Header } from './components/Header/Header';
import { InformationArea } from './components/InformationArea/InformationArea';
import { MenuBar } from './components/MenuBar/MenuBar';
import { Products } from './components/Products/Products';
import { Container } from './global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/index'
import { Login } from '../src/pages/LoginPage/index'

export function App() {
  return (

    <>
    <Container/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </Router>
    </>
  );
}


