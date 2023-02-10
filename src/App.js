import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Index from './Component/Index';

function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element = {<Index />} />
            <Route path='/contact' element = {<Contact/>}  />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
