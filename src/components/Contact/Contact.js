import React from "react";
import { Fade } from "react-awesome-reveal";
import "./ContactStyle.css";

export default () => {
  return (
    <section id="#contact" className="contact">
      <Fade triggerOnce>
        <h1 className="title">Contact</h1>
        <p className="contact-greet">
          Let's connect. If you wish to grab a hold of me, I prefer messaging me
          on LinkedIn. <br />
          You can also email me at{" "}
          <span className="accent">aarya.patel06@gmail.com</span> or give me a
          call at <span className="accent">647-569-5400</span>.
        </p>
        <ul className="link-flexbox">
          <li className="link link-linkedin">
            <a
              href="https://www.linkedin.com/in/aarya-patel-50b12614a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="link-img"
                src={require("../../assets/linkedin.jpg")}
                alt=""
                href="linkedin"
              />
            </a>
          </li>
          <li className="link link-github">
            <a
              href="https://github.com/Aarya-Patel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="link-img"
                src={require("../../assets/GitHub-Mark1.png")}
                alt=""
                href="github"
              />
            </a>
          </li>
          {/* <li className="link link-email">
            <img
              className="link-img"
              src={require("../../assets/gmail.png")}
              alt=""
              href="gmail"
            />
          </li> */}
        </ul>
      </Fade>
    </section>
  );
};
