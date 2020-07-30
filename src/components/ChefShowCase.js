import React from "react";
import "../css/ChefShowCase.css";

function ChefShowCase({ img, name, role }) {
  return (
    <div className="shef-show-case">
      <img src={img} />
      <h3>{name}</h3>
      <h6>{role}</h6>
      <div id="social-icons">
        <i className="fa fa-twitter"></i>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-google-plus"></i>
        <i className="fa fa-instagram"></i>
      </div>
    </div>
  );
}

export default ChefShowCase;
