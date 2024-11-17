import React from "react";
import "./hadder.css";
import Hot from './assets/images/Header/image 14.svg'
import Character from "./assets/images/Header/charater.svg";
import { FaUtensils } from "react-icons/fa";
import { BsFillStopwatchFill } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import padge from './assets/images/Header/Badge.svg'



const Header = () => {
  return (
 <div className="container mt-5">
  <img src={padge} alt=""  id="PADGEE"/>
<div className="row rowwww">
<div className="col-lg-6 order-2 order-lg-1 col-sm-12 left-YASTA p-4 rounded text-section "> 
        <button id="Fdahya"> 
          <img src={Hot} alt="Hot" />Hot Recipes 
        </button> 
        <div className="jopPADEG">
        <img src={padge} alt=""  id="OOPLIGATION"/>
        </div>
      
        <h1 id="delicious"> 
          Spicy delicious 
          <br /> 
          chicken wings 
        </h1> 
        <p id="Lorem"> 
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqut enim ad minim. 
        </p> 
        <div className="SQLP d-flex mt-3"> 
          <button className="btn time-btn"> 
            <BsFillStopwatchFill /> <span id="span">30 Minutes</span> 
          </button> 
          <button className="btn category-btn"> 
            <FaUtensils /> 
            <span id="span"> Chicken</span> 
          </button> 
        </div> 
        <div className="rowWeKEDA d-flex justify-content-between align-items-center mt-4"> 
          <div className="CharacterInfo d-flex align-items-center"> 
            <img src={Character} alt="Author" className="me-3 rounded-circle" /> 
            <div> 
              <p className="mb-0" id="JohnName"> 
                John Smith 
              </p> 
              <small>15 March 2022</small> 
            </div> 
          </div> 
          <button className="btn view-recipes"> 
            View Recipes<IoPlay /> 
          </button> 
        </div> 
      </div>
      <div className="col-lg-6 order-lg-2  order-2col-sm-12 right-YASTA p-4 rounded text-section ">
      </div>




</div>
 </div>
  
  
  );
};

export default Header;
