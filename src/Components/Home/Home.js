import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <div className='container' id='home_container'>
        <h4>WELCOME:</h4>
        <ul>
          <li>Web App to view the Mentor's and Student's details.</li>
          <li>assign Student's to different Mentor's.</li>
          <li>
            replace Multiple Student's Mentor by filtering and assigning them to
            the required Mentor.
          </li>
          <li>get started Add Mentor first to proceed.</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
