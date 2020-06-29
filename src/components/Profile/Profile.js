import React from "react";
import "./ProfileStyles.css";
import { Fade } from "react-awesome-reveal";
import profilePic from "../../assets/profile.jpg";

export default () => {
  return (
    <Fade triggerOnce>
      <section id="#profile" className="profile">
        <h1 className="title greeting">Hey, I'm Aarya Patel!</h1>
        <div className="profile-flexbox">
          <div id="profile-picture-wrapper">
            <img
              id="profile-picture"
              src={profilePic}
              alt=""
              href="Aarya Patel"
            />
          </div>
          <div className="profile-text">
            <p>
              I am currently a Computer Science Specialist student at the
              University of Toronto with a passion for web-development. On a
              weekly basis, you can find me: working on personal projects,
              cooking meals, preparing for other responsibilities or playing
              video games.
            </p>
            <p>
              I'm an aspiring young software developer who loves to build
              visually appealing web applications. I am experienced in front-end
              web development mainly using frameworks like React. My curiousity
              is the driving factor that pushes me to explore the vast field of
              web-development by focusing on learning and refining my skills.
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
};
