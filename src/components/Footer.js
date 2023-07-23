import "../Styles.css";
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
}
 from 'mdb-react-ui-kit';

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <div className="footer">
    <footer><MDBFooter className=' text-center text-white ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    <MDBContainer className='p-1 pb-0'>
      <section className='mb-4'>
        <div className="center">
      <div>
      <a style= {{color: "#ffff"} }href="#!" role="button">
  <i class="fab fa-facebook fa-lg"></i>
</a>
      </div>
      <div>
      <a style={{color: "#ffff"} } href="#!" role="button">
  <i class="fab fa-google fa-lg"></i>
</a>
      </div>
      <div>
      <a style= {{color: "#ffff"} } href="#!" role="button">
  <i class="fab fa-instagram fa-lg"></i>
</a>
      </div>
      </div>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © {year} Copyright QuizWiz
    </div>
  </MDBFooter></footer>
  </div>
    
  );
}