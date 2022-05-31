import React from 'react'
import '../CSS/Primes.css';


function Prime() {
  return (
    <body>
    <main>
      <div class="card-basic">
        <div class="card-header header-basic">
          <h1>Basic</h1>
        </div>
        <div class="card-body">
          <p><h2>₹99 / mo</h2></p>
          <div class="card-element-hidden-basic">
            <ul class="card-element-container">
             
              <li class="card-element">Discount on Products</li>
              <li class="card-element">Faster Refunds</li>
              <li class="card-element"><br></br> </li>
              <li class="card-element"> <br></br></li>
            </ul>
            <button class="btn btn-basic">Order now</button>
          </div>
        </div>
      </div>
      
      <div class="card-standard">
        <div class="card-header header-standard">
          <h1>Standard</h1>
        </div>
        <div class="card-body">
          <p><h2>₹199/ mo</h2></p>
          <div class="card-element-hidden-standard">
            <ul class="card-element-container">
            <li class="card-element">Free Delivery</li>
              <li class="card-element">Order Priority</li>
              <li class="card-element">Discount on Products</li>
              <li class="card-element"><br></br> </li>
            </ul>
            <button class="btn btn-standard">Order now</button>
          </div>
        </div>
      </div>
      <div class="card-premium">
        <div class="card-header header-premium">
          <h1>Premium</h1>
        </div>
        <div class="card-body">
          <p><h2>₹299/mo</h2></p>
          <div class="card-element-hidden-premium">
            <ul class="card-element-container">
            <li class="card-element">Free Delivery</li>
              <li class="card-element">Order Priority</li>
              <li class="card-element">Discount on Products</li>
              <li class="card-element">Faster Refunds</li>
            </ul>
            <button class="btn btn-premium">Order now</button>
          </div>
        </div>
      </div>
    </main>
  </body>
  )
}

export default Prime