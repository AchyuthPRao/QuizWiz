import React from 'react'
import './App.css';
import './Styles.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path ="/about" element={<About/>}></Route>
      </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
