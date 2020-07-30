import React from "react";
import "../css/SectionHadding.css";

function SectionHadding({ hadding, color = "#383733" }) {
  return (
    <div className="section-hadding-container">
      <span className="lines">
        <div></div>
        <div></div>
      </span>
      <h1 style={{ color: color }}>{hadding}</h1>
      <span className="lines">
        <div></div>
        <div></div>
      </span>
    </div>
  );
}

export default SectionHadding;
