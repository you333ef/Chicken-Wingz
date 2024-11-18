import React from 'react'
import './cate.css'
import one from './assets/images/CATE/Breakfast.svg'
import two from './assets/images/CATE/Chocolate.svg'
import three from './assets/images/CATE/Dessert.svg'
import four from './assets/images/CATE/Lunch.svg'
import five from './assets/images/CATE/Meat.svg'
import six from './assets/images/CATE/Vegan.svg'
const CATEGORY = () => {
  return (
    <div className="container mt-5">
   <div className="flexWeKeda p-5"> <h2 className="mb-4 text-start" id='CategoriesName'>Categories</h2>
   <button className="btn btn-light  py-2" id='All'>View All Categories</button></div>
    <div className="row g-3 mt-3">
      {/* Item 1 */}
      <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
        <img src={one} alt="Breakfast" className="img-fluid" />
      </div>
      {/* Item 2 */}
      <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
        <img src={two} alt="Chocolate" className="img-fluid" />
      </div>
      {/* Item 3 */}
      <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
        <img src={three} alt="Dessert" className="img-fluid" />
      </div>
      {/* Item 4 */}
      <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
        <img src={four} alt="Lunch" className="img-fluid" />
      </div>
      {/* Item 5 */}
      <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
        <img src={five} alt="Meat" className="img-fluid" />
      </div>
      {/* Item 6 */}
      <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
        <img src={six} alt="Vegan" className="img-fluid" />
      </div>
    </div>
    <div className="mt-4 text-end">
   
    </div>
  </div>
  )
}

export default CATEGORY