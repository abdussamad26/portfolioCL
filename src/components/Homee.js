import React from 'react'
import './Homee.css';
import Typewriter from 'typewriter-effect';

function Home(props) {
  return (
    <div>
        <section>
            <div className='container home'>
                <div className='row'>
                  <div className='col-lg-12 d-flex justify-content-center'>
                    <img style={{width:"110px"}} className='pt-5' src='lap-logo.png'></img>
                  </div>
                  <h4 className='text-center pt-3 fw-bold fs-2'>Abdus Samad</h4>
                  <div className='text-center text-uppercase fs-4 pt-1'>
                  <Typewriter
                    options={{
                      strings: ['Hello', 'Im Abdus Samad','Front-End Developer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  </div>
                  <div className='d-flex justify-content-center mt-3'>
                  <div class="toggleWrapper">
                      <input onClick={props.toggleMode} type="checkbox" id="toggle"/>
                      <label for="toggle" class="toggle">
                      </label>
                  </div>
                  </div>
                 
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home