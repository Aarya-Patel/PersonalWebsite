import React from "react";
import "./ProfileStyles.css";
import { Fade } from "react-reveal";
import profilePic from "../../assets/profile.jpg";

export default () => {
  return (
    <Fade>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae
            et earum perspiciatis adipisci quisquam, ipsum placeat tenetur
            laudantium consectetur. Magnam ex perferendis doloremque obcaecati
            excepturi molestias. Cumque, suscipit perferendis?
          </p>
        </div>
      </section>
    </Fade>
  );
};
