import React from "react";
import "../css/Contact.css";

function ContactUs() {
  return (
    <div id="contact">
      <div id="inner">
        <div id="left">
          <input placeholder="name" />
          <input placeholder="email" />
          <input placeholder="subject" />
        </div>
        <div id="right">
          <textarea placeholder="message" />
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default ContactUs;
