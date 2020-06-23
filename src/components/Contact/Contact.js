import React from "react";
import { Fade } from "react-reveal";
import "./ContactStyle.css";

export default () => {
  return (
    <Fade>
      <section id="#contact" className="contact">
        <h1 className="title">Contact</h1>
        <p className="contact-greet">
          Let's connect. If you wish to grab a hold of me, I prefer messaging me
          on LinkedIn.
        </p>
        <ul className="link-flexbox">
          <li className="link link-linkedin">
            <img
              src={require("../../assets/linkedin.jpg")}
              alt=""
              href="linkedin"
            />
          </li>
          <li className="link link-github">
            <img
              src={require("../../assets/GitHub-Mark1.png")}
              alt=""
              href="github"
            />
          </li>
          <li className="link link-email">
            <img src={require("../../assets/gmail.png")} alt="" href="gmail" />
          </li>
        </ul>
      </section>
    </Fade>
  );
};
