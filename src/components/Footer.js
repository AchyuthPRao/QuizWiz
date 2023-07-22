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
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <button outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </button>

        <button outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </button>

        <button outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </button>
        <button outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </button>

        <button outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </button>

        <button outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='github' />
        </button>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © {year} Copyright QuizWiz
    </div>
  </MDBFooter></footer>
  </div>
    
  );
}