import React from 'react'
import '../Styles.css';

export default function Card() {
  return (
    <div className='trivia'>
      <div class="card">
  <div class="first-content">
    <span>Sports Trivia</span>
  </div>
  <div class="second-content">
<span>Do you have what it takes to master all fields of sports?</span>
  </div>
</div>
<div class="card">
  <div class="first-content">
    <span>General Trivia</span>
  </div>
  <div class="second-content">
<span>Can u handle the generality of general trivia?</span>
  </div>
</div>
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

    </div>
  )
}
