import React from 'react';
import './every.css';
import EveryImg from '../public/EveryOne-Sec&Any/EveryOne.svg';

const EveryOne = () => {
  return (
    <section id='EveryOne' className='mt-5 container'>
      <div className="row align-items-center">
        {/* النص والقسم اليساري */}
        <div className="col-lg-6 order-2 order-lg-1 col-md-12 col-sm-12 text-lg-start" id='NosKalam'>
          <h2>Everyone can be a<br />chef in their own kitchen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <button className="btn ">Learn More</button>
        </div>

        {/* صورة الشيف */}
        <div className="col-lg-6 col-md-12 order-1 order-lg-2 col-sm-12 text-center mt-4 mt-lg-0">
          <img src={EveryImg} alt="Chef Illustration" className="img-fluid EveryImg" />
        </div>
      </div>
    </section>
  );
};

export default EveryOne;
