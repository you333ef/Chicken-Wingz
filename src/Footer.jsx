import React from 'react'
import './footer.css'


const Footer = () => {

  return (
    <footer className="footer-section mt-5 ">
    <div className="container">
      <div className="row " id='islogo'>
        
        <div className="col-lg-6 col-md-6 col-sm-12 mb-1">
          <h4 className="A5oyaa-logo">Foodieland.</h4>
          <p className="A5oyaa-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
       
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-md-end justify-content-sm-start">
          <ul className="A5oyaa-nav list-unstyled d-flex mb-0 text-center m-auto"id='A5oyaa-nav'>
            <li className="mx-2">
              <a href="#recipes" className="text-dark text-decoration-none">
                Recipes
              </a>
            </li>
            <li className="mx-2">
              <a href="#blog" className="text-dark text-decoration-none">
                Blog
              </a>
            </li>
            <li className="mx-2">
              <a href="#contact" className="text-dark text-decoration-none">
                Contact
              </a>
            </li>
            <li className="mx-2">
              <a href="#about" className="text-dark text-decoration-none">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      
      <div className="row " id='Alyaaa'>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className="A5oyaa-copyright mb-0">
            © 2020 Flowbase. Powered by <span className="text-danger">Webflow</span>
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-md-end justify-content-sm-start">
          <ul className="A5oyaa-social list-unstyled d-flex   mb-0" id='conicons'>
            <li className="mx-2">
              <a href="#facebook" className="text-dark">
              <span className="fab fa-facebook"></span>
              </a>
            </li>
            <li className="mx-2">
              <a href="#twitter" className="text-dark">
              <span className="fab fa-twitter"></span>
             
              </a>
            </li>
            <li className="mx-2">
              <a href="#instagram" className="text-dark">
              <span className="fab fa-instagram"></span>
               
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer