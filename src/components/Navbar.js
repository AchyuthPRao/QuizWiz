import React from 'react'
import quizWiz from '../images/quizWiz.png';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className="">
      <nav className="navbar ">
  <div className="list">
    <Link className="navbar-brand" to="/">
        <div className="logoParent">
      <img  src={quizWiz} alt="" width="80" height="50" className="d-inline-block align-text-top"/>
      <div className="logo">
        QuizWiz
      </div>
      </div>
    </Link>
    <div className="list">
        <div>
          <Link className="elem" aria-current="page" to="/">Home</Link>
        </div>
        <div >
          <Link className="elem" to="/about">About</Link>
        </div>
      </div>
      </div>
</nav>
    </div>
  )
}
