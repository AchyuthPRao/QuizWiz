import React from 'react'
import '../Styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card() {

  return (
    
        <div className='trivia'>
        <Link to = "/questions">
        <div class="card">
        <div class="first-content">
        <span>Sports Trivia</span>
        </div>
        <div class="second-content">
        <span>Do you have what it takes to master all fields of sports?</span>
        </div>
        </div>
        </Link>
        <Link to = "/questions1">
        <div class="card">
        <div class="first-content">
        <div >General Trivia</div>
        </div>
        <div class="second-content">
        <span>Can u handle the generality of general trivia?</span>
        </div>
        </div>
        </Link>
        <Link to = "/questions2">
        <div class="card">
        <div class="first-content">
        <span>Coding Quiz</span>
        </div>
        <div class="second-content">
        <span>
        printf("how many can you solve?");
        </span>
        </div>
        </div>
        </Link>
        </div>
        
        
  );
}
