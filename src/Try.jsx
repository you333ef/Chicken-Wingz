import React, { useEffect, useState } from 'react'
import './try.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";

     

const Try = () => {
const[Base,SetBase]=useState([])
useEffect(function(){
fetch('/public/Try.json')
.then(function(res){
  return res.json()
})
.then(function(DATATrY){
SetBase(DATATrY)
})

},[]);
let [Ento,SetEnto]=useState([])
useEffect(function(){
  let AUHA=JSON.parse(localStorage.getItem('TRY'))||[]
  SetEnto(AUHA)
              },[])
function Entry(Montag){
  let auto=[...Ento,Montag]
  SetEnto(auto)
  window.localStorage.setItem('TRY',JSON.stringify(auto))
  console.log(Ento)
  

}






  return (
    <div className='container mt-5'>
<div className="SROUQ container">
  <h2>Try this delicious recipe
  to make your day</h2>
  <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
</div>
<div className="row mt-4">
  {Base.map((product, index) => (
    <div key={index} className="col-lg-3  col-md-6 col-sm-12 mb-4 mt-5" id="SHOFT">
      <div className="card KOKOKO" id='SWEFT' >
        <div className="COWYEZ">
          {/* تأكد من أن مصدر الصورة صالح */}
          <img src={product.img} alt={product.title} className="card-img-top" />
          <div
            className=""
            id="CART-ICON"
            style={{ cursor: "pointer" }}
          >
            <FaCartShopping onClick={function(){
                                  Entry(product)
            }} />
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" id="smple_title">{product.title}</h5>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div id="Tawqeet">
              {/* تأكد من استيراد أيقونة FaStopwatch */}
              <FaStopwatch id="wqt" />
              <span>30 Minutes</span>
            </div>
            <div className="d-flex align-items-center" id="iconYarateFloos">
              {/* تأكد من استيراد أيقونة FaCoins */}
              <FaCoins id="icon_coins" />
              <span id="price_dollars">
                <span id="dollar-Allama">$</span>{product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



    </div>

  )
}

export default Try