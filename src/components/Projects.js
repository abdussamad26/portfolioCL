import React from 'react'
import './Projects.css';

function Projects() {
  return (
    <div>
        <section className='pb-5'>
            <div className='container pt-4'>
                <div className='row pt-5'>
                    <h3 className='text-center pb-5'>Projects</h3>
                    <div className='col-lg-3 py-3 d-flex justify-content-center align-items-center'>
                      <div className='box'>
                      <div class="card cardsum">
                          <div class="imgBx">
                              <img className='border' src="ecom-logo.png" alt="images"/>
                          </div>
                          <div class="details">
                              <h2>Ecommerce-Chairy<br/><span><a className='ms-4' href='https://asamad-chairy-ecommerce.netlify.app'>View Project</a></span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 py-3 d-flex justify-content-center align-items-center'>
                      <div className='box'>
                      <div class="card cardsum">
                          <div class="imgBx">
                              <img className='border' src="stack-img" alt="images"/>
                          </div>
                          <div class="details">
                              <h2>Stack-Web<br/><span><a className='ms-4' href='https://asamad-stack.netlify.app'>View Project</a></span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 py-3 d-flex justify-content-center align-items-center'>
                      <div className='box'>
                      <div class="card cardsum">
                          <div class="imgBx">
                              <img className='border' src="seedkaro-img.jpg" alt="images"/>
                          </div>
                          <div class="details">
                              <h2>SEED karo<br/><span><a className='ms-4' href='https://asamad-seedkaro.netlify.app'>View Project</a></span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 py-3 d-flex justify-content-center align-items-center'>
                      <div className='box'>
                      <div class="card cardsum">
                          <div class="imgBx">
                              <img className='border' src="webflix-img.png" alt="images"/>
                          </div>
                          <div class="details">
                              <h2>Webflix<br/><span><a className='ms-4' href=''>View Project</a></span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects