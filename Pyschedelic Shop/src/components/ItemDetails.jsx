import React, { Component } from "react";
import { Link } from "react-router-dom";


const ItemDetails = ({ item, match, category }) => (
  <div className="itemDetails--container windows--neon">
    <h2 className="text--color1">
      {item.brand} {item.model}
    </h2>
    <img 
      className="product--image"
      src={`${process.env.PUBLIC_URL}/images/${item.image}`} />
    <p className="product--text">
      {item.text}
    </p>
    <p className="text--color1">
      ${item.price}
    </p>
    <Link to={`/shop/${category}`}>
      <button>Back</button>
    </Link>
  </div>
);


export default ItemDetails;
