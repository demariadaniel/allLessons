import React, { Component } from "react";

const Cart =({className})=>(
  <div className={`cart windows--neon ${className}`}>
    <h3 className="text--color1">
      Cart
    </h3>
    <p className="text--colorD">
      Subtotal: $<span className="text--color1">0</span>
    </p>
  </div>
)

export default Cart;