import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';

// Import Components Here
import Header from './layout/header/Header';
import Home from './layout/home/Home';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
