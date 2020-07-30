import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  const [showingNavBar, setShowingNavBar] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  const toggleNavBar = () => {
    setShowingNavBar(!showingNavBar);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    });
  }, []);
  return (
    <div className={`nav-bar-container`} id={stickyNav ? "sticky-nav" : ""}>
      <div className="logo-container">
        <Link to="/">Mehwish</Link>
      </div>

      <ul
        style={showingNavBar ? { display: "flex" } : {}}
        onClick={toggleNavBar}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#menu">menu</a>
        </li>

        <li>
          <a href="#gallery">gallery</a>
        </li>

        <li>
          <a href="#contact">contact us</a>
        </li>
      </ul>

      <div
        id="toggle-nav-button"
        onClick={toggleNavBar}
        className={showingNavBar ? "open" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
