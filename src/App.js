import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SectionHadding from "./components/SectionHadding";
import Gallery from "./components/Gallery";
import ContactUS from "./components/ContactUs";
import Chef from "./components/Chef";
import Menu from "./components/Menu";
import bgImages from "./helpers/background-imges";
import Footer from "./components/Footer";

function App() {
  const [currentHaderImage, setCurrentHaderImage] = useState(bgImages[0]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentHaderImage(bgImages[Math.floor(Math.random() * 4)]);
  //     console.log(bgImages[Math.floor(Math.random() * 4)]);
  //   }, 4000);
  // }, []);
  return (
    <>
      <header>
        <div
          className="home-hader-container"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))," +
              "url(" +
              currentHaderImage +
              ")",
          }}
        >
          <NavBar />
          <div id="inner">
            <div className="hader-logo-container">
              <img
                src="http://jellydemos.com/html/elixir/images/logo_intro.png"
                alt=""
              ></img>
            </div>
            <div id="tag-line-container">
              <h1 id="hader-tag-line">Elixir exclusively food</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <SectionHadding hadding="About" />
        <About />
        <Gallery />
        <Menu />
        <Chef />
        <SectionHadding hadding="Contact" />
        <ContactUS />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
