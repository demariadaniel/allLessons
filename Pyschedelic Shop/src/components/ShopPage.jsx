import React, { Component } from "react";
import { Link } from "react-router-dom";

const ShopPage = ({ inventory, match, category }) => (
  <div>
    <h3 className="text--color1">
      {category}
    </h3>
    <div class="shopPage--container transparent">
      {inventory.map((item, i) => (
        <Link to={`${match.url}/${i}`}>
          <div class="windows--neon product--window">
            <img 
              className={"product--image__preview"}
              src={`${process.env.PUBLIC_URL}/images/${item.image}`} 
              />
            <p>
              {item.brand} {item.model}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default ShopPage;
