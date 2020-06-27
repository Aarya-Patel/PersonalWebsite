import React from "react";
import resume from "../../assets/AaryaPatel-Resume.pdf";
import "./HeroStyles.css";

export default () => {
  return (
    <section className="hero-box">
      <canvas width="100vw" height="100vh"></canvas>
      <div className="hero-content">
        <h3 className="hero-text">
          Hello! I'm <span className="accent">Aarya</span>.
        </h3>
        <h3 className="hero-text">
          Aspiring <span className="accent">Software Developer</span>
          <br />
          located in Toronto, ON.
        </h3>
        <p className="hero-text-caption">
          Experienced working on front-end web applications.
        </p>
        <a
          className="resume"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
};
