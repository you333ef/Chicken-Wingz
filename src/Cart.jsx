import React, { useEffect, useState } from 'react';
import './cart.css';
import { FaSackDollar } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBinLine } from "react-icons/ri";



const Cart = () => {
  const [cont, setcont] = useState([]);

  const [simplawieen, Setsimplawieen] = useState([]);

  useEffect(() => {
    const SimpleAPI = JSON.parse(localStorage.getItem('ToCart')) || [];
    const TRYAPI = JSON.parse(localStorage.getItem('TRY')) || [];
    const MIX = [...SimpleAPI, ...TRYAPI];

    Setsimplawieen(MIX);
    setcont(
      MIX.map(function () {
        return 1;
      })
    );
  
   
  }, []);
  function DeleteElement(index){
    const EDIT=[...simplawieen]
    EDIT.splice(index,1)
    Setsimplawieen(EDIT)

    
        }

function increment(index){
  const Koll=[...cont]
  Koll[index]= Koll[index]+1
  setcont(Koll)

}
function Decrement(index){
  const Koll=[...cont]
  if( Koll[index]>1){
    Koll[index]= Koll[index]-1
    setcont(Koll)
  }
 

}
function calculateTotal() {
  let total = 0; 
  for (let i = 0; i < simplawieen.length; i++) {
    total += simplawieen[i].price * cont[i];
  }
  return total; 
}
const notify = function () {
  toast.success("Your order was successful and will arrive within 24 hours.");
};
const DELL = function () {
  toast.error("The product will be deleted.");

};
  return (
    <div className='containetr container mt-5'>
      <div className="row">
        {/* القسم الأيسر */}
        <div className="col-lg-8">
        
          {simplawieen.length > 0 ? (
            simplawieen.map((producct, index) => (
              <div className="cart-item" key={index}>
                <img src={producct.src} alt={producct.title} className="product-image" />
                <div className="product-details">
                  <h4>{producct.title.slice(0,15)}...</h4>
                  <p>€{producct.price *cont[index]}</p>
                </div>
                <div className="product-quantity">
                  <button className="quantity-btn" onClick={function(){
                    Decrement(index)
                  }} >-</button>
                  <input type="number" value={cont[index]} className="quantity-input"  />
                  <button className="quantity-btn"onClick={function(){
                    increment(index)
                  }} >+</button>
                </div>
                <button className="remove-item" onClick={function(){
                   DeleteElement(index)
                   DELL()
                }}><RiDeleteBinLine />
</button>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

        {/* القسم الأيمن */}
        <div className="col-lg-4">
          <div className="order-summary">
            <h3>Summary</h3>
            <p>Items: {simplawieen.length}</p>
            <div className="shipping">
              <label htmlFor="shipping">Shipping</label>
              <select id="shipping" className="shipping-select">
                <option>Standard Delivery -€5.00</option>
                <option>Standard Delivery -€6.00</option>
                <option>Standard Delivery -€7.00</option>

              </select>
            </div>
            <div className="discount-code">
              <input type="text" placeholder="Enter your code" className="discount-input" />
              <button className="discount-btn">→</button>
            </div>
            <div className="FLOOS_YAPA">
            <p>Total Price: {calculateTotal()}
            </p>
            <FaSackDollar id='FaSackDollar' />
            </div>
            
            <button className="checkout-btn"onClick={notify}>CHECKOUT</button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
