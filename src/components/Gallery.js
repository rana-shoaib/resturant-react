import React from "react";
import SectionHadding from "../components/SectionHadding";
import "../css/Gallery.css";
import galleryImages from "../helpers/galley-images";

function Gallery() {
  return (
    <div id="gallery">
      <SectionHadding hadding="gallery" color="#ffffff" />
      <div id="gallery-grid">
        {galleryImages.map((src, index) => {
          return (
            <div className="images" key={index}>
              <img src={src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
