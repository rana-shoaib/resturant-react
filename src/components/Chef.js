import React from "react";
import "../css/Chef.css";
import SectionHadding from "./SectionHadding";
import ChefShowCase from "./ChefShowCase";
import chefInfo from "../helpers/chef-info";

function Chef() {
  return (
    <div>
      <SectionHadding hadding="Our Master Chef" />
      <div id="chef-grid">
        {chefInfo.map((chef, index) => {
          return (
            <ChefShowCase
              img={chef.img}
              name={chef.name}
              role={chef.role}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chef;
