import React, { useEffect, useState } from 'react';
import truee from '/EveryOne-Sec&Any/Shape.svg';
const imgFOOQ = '/EveryOne-Sec&Any/OvalTOP.svg';
import More from '/EveryOne-Sec&Any/More Icon.svg';

import { FaRegComment } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";
import vito from '/EveryOne-Sec&Any/Oval.svg';

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import './check.css';
const Check = () => {
    const[Big,SetBig]=useState([])
useEffect(function(){
fetch('/public/Check.json')
.then(function(res){
    return res.json()

})
.then(function(BigData){
SetBig(BigData)


})
},[])


const[isred,Setisred]=useState({})
function ChangeColor(returnID){
  let Now={...isred}
  if(Now[returnID]){
    Now[returnID]=false

  }else{
    Now[returnID]=true

  }
  Setisred(Now)
 
}
const[tele,Settele]=useState({})
function Telegram(id){
  let Objective={...tele}
  if(Objective[id]){

Objective[id]=false
  }else{
    Objective[id]=true
  }
  Settele(Objective)

}



  return (
    <section id='Check-Out' className='mt-5 container'>
        <div className="text-center">
        <h3>Check out @foodieland on Instagram</h3>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore<br /> magna aliqut enim ad minim </p>
        </div>
        <div className="row p-5" >
            {Big.map(function(product,index){
                return(
                    <div className="col-lg-3 col-sm-12 col-md-6 mt-4" key={index} id="WOW">
                    <div className="TopObj">
                      <img src={imgFOOQ} alt="" className="profile-img" />
                      <div className="text-and-icon">
                        <div className="" id="SHOWW">
                          <span>Foodieland.</span>
                          <img src={truee} alt="" className="truee-icon" />
                        </div>
                        <small>Tokyo, Japan</small>
                      </div>
                      <div className="actions">
                        <img src={More} alt="" className="action-icon" />
                      </div>
                    </div>
                    <div className="post-content">
                      
                      <img src={product.image} alt="post" className="post-image" />
                      <div className="ICONS-past ">
                      <div className="start-icons">
                      {
  isred[product.id] ? (
    <FaHeart
      onClick={function () {
        ChangeColor(product.id);
    
      }}
          id="NIN"
    />
  ) : (
    <FaRegHeart
      onClick={function () {
        ChangeColor(product.id);
      }}
    />
  )
}
{
  tele[product.id] ? (
    <BiLogoTelegram
      onClick={function () {
        Telegram(product.id);
      }}
       className="Second"
    />
  ) : (
    <PiTelegramLogoDuotone
      onClick={function () {
        Telegram(product.id);
      }}
     
    />
  )
}


                      <FaRegComment />
                   
                      </div>
                      <div className="">
                      <IoBookmarkOutline />
                      </div>
                      </div>
                <div className="NOWOW">
                  
<img src={vito} alt="" />

                <p className="post-text">
                        Liked by <b>create_love</b> and <b>44,958</b>
                      </p>
                </div>
                      <p className="post-caption">
                        Foodieland: True vegetarian dishes need to have certain vitamins for these people.
                      </p>
                      <p className="post-date">September 19</p>
                    </div>
                  </div>
                  





                )

            })}




        </div>
    </section>
  )
}

export default Check