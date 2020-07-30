import React from "react";
import "../css/About.css";

function About() {
  return (
    <div id="about">
      <div className="inner">
        <div id="left">
          <h1 className="hadding">The History</h1>
          <article>
            The <span className="inline-hadding">History of Kitchens</span> and
            Cooks gives further intimation on Mr Boulanger usual menu, stating
            confidently that "Boulanger served salted poultry and fresh eggs,
            all presented without a tablecloth on small marble tables". Numerous
            commentators have also referred to the supposed restaurant owner's
            eccentric habit of touting for custom outside his establishment,
            dressed in aristocratic fashion and brandishing a sword
            <br />
            <br /> According to Miss Spang, there is not a shred of evidence for
            any of it. She said: These legends just get passed on by hearsay and
            then spiral out of control. Her interest in Boulanger dates back to
            a history of food seminar in Paris in the mid-1990s
          </article>
        </div>
        <div id="right">
          <img
            src="http://jellydemos.com/html/elixir/images/about03.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="inner">
        <div id="left">
          <img
            src="http://jellydemos.com/html/elixir/images/about04.jpg"
            alt=""
          />
        </div>
        <div id="right">
          <article>
            The <span className="inline-hadding">History of Kitchens</span> and
            Cooks gives further intimation on Mr Boulanger usual menu, stating
            confidently that "Boulanger served salted poultry and fresh eggs,
            all presented without a tablecloth on small marble tables". Numerous
            commentators have also referred to the supposed restaurant owner's
            eccentric habit of touting for custom outside his establishment,
            dressed in aristocratic fashion and brandishing a sword
            <br />
            <br /> According to Miss Spang, there is not a shred of evidence for
            any of it. She said: These legends just get passed on by hearsay and
            then spiral out of control. Her interest in Boulanger dates back to
            a history of food seminar in Paris in the mid-1990s
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
