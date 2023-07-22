import React from 'react'
import './App.css';
import './Styles.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Footer from './components/Footer.js';
import Card from './components/Card';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path ="/about" element={<About/>}></Route>
        <Route exact path ="/" element={<Card />}></Route>
      </Routes>
      
      
  </BrowserRouter>
  <Footer />
  </>
  );
}

export default App;
