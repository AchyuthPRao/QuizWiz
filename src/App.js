import React from 'react'
import './App.css';
import './Styles.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Footer from './components/Footer.js';
import Card from './components/Card';
import Questions from './components/Questions';
import Questions1 from './components/Questions1';
import Questions2 from './components/Questions2';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path ="/about" element={<About/>}></Route>
        <Route exact path ="/" element={<Card />}></Route>
        <Route exact path ="/questions" element={<Questions />}></Route>
        <Route exact path ="/questions1" element={<Questions1 />}></Route>
        <Route exact path ="/questions2" element={<Questions2 />}></Route>
      </Routes>
  {/* <Questions /> */}
  </BrowserRouter>
  <Footer />
 
  </>
  );
}

export default App;
