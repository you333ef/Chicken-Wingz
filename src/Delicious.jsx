import React from 'react'
import './delly.css';
const Delicious = () => {
  return (
    <div className="newsletter-section container mt-5 ">
      <div className="">
        <h2 id='inbox'>Deliciousness to your inbox</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
         <p id='part-hidden'> incididunt ut labore et dolore magna aliqua enim ad minim.</p>
        </p>
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Your email address..."
            aria-label="Email Address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Delicious