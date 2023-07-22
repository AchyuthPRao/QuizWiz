import React from 'react'
import '../Styles.css'


export default function About() {
  return (
    <div>
      <div className="accordion container my-3 mx-auto p-3" id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button x" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Why Us?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show abody" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We are the best out there.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item aitem">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed x" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       We keep it simple
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse abody" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
        <strong>No unnecessary ads.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item aitem">
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed x" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Who are we?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse abody" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
        <strong>achyuthprao123@gmail.com,and others</strong> 
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
