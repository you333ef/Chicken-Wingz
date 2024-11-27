import React, { useState,useEffect } from 'react'
import { FaStopwatch } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";

import './smpl.css'
const Simple = () => {
const[data,Setdata]=useState([])
useEffect(function(){
fetch('/Simple.json')
.then(function(res){
  return res.json()

})
.then(function(data){
  Setdata(data)
})
},[])
const[cart,SetCart]=useState([])
useEffect(function(){
  let MeMo=JSON.parse(window.localStorage.getItem('ToCart'))||[]
  SetCart(MeMo)

},[]);

function HandleCart(recipe){
  var outLiter=[...cart,recipe]
  SetCart(outLiter)
  window.localStorage.setItem('ToCart',JSON.stringify(outLiter))
  console.log(outLiter)
}










  return (
    <div className='container mt-5' id='Simple_Continer'>
<h3 className='text-center p-1' id='SMPLE_TITLE'>Simple and tasty recipes</h3>
<p className='text-center' id='SIMPLE-LOREM'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </p>
<div className="row">
  {data.map(function(recipe, index){
return (
  <div key={index} className="col-lg-4 col-6 col-md-6 col-sm-6 mb-4 mt-5" id='SHOFT'>
    <div className="card h-10">
      <div className="COWYEZ">
        <img src={recipe.src}  className="card-img-top" />
        <div
          className=""
          id='CART-ICON'
          style={{ cursor: "pointer" }}
        >
<FaCartShopping onClick={function(){HandleCart(recipe)}} />
</div>
      </div>    
      <div className="card-body d-flex flex-column">
        <h5 className="card-title " id='smple_title'>{recipe.title}</h5>
        <div className="d-flex justify-content-between align-items-center mt-auto">        
          <div id='Tawqeet'>
          <FaStopwatch  id='wqt'/>
            <span>30 Minutes</span>
          </div>         
          <div className="d-flex align-items-center" id='iconYarateFloos'>
          <FaCoins  id='icon_coins'/>
            <span id='price_dollars'> <span id='dollar-Allama'>$</span>{recipe.price}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);





  })}


</div>
    </div>
  )
}

export default Simple