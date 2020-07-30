import React from "react";
import "../css/Menu.css";
import SectionHadding from "./SectionHadding";
import FoodItem from "./FoodItem";
import foodImages from "../helpers/food-imges";

function Menu() {
  return (
    <>
      <SectionHadding hadding="our menu" />
      <div id="menu">
        {foodImages.map((img, i) => {
          return <FoodItem img={img} key={i} />;
        })}
      </div>
    </>
  );
}

export default Menu;
