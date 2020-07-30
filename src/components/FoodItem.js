import React from "react";
import "../css/FoodItem.css";

function FoodItem({ img }) {
  return (
    <div className="food-item">
      <div id="left">
        <img src={img} />
      </div>
      <div id="right">
        <div id="name">
          <h2>Grilled Beef with potatoes</h2>
          <h5>$25</h5>
        </div>
        <div id="ingredients">
          <h2>Meat, Potatoes, Rice, Tomatoe</h2>
        </div>
        <button id="order-btn">order now</button>
      </div>
    </div>
  );
}

export default FoodItem;
