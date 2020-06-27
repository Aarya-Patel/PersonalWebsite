import React from "react";
import PropTypes from "prop-types";
import "./ExperienceCardStyle.css";
import { Fade } from "react-awesome-reveal";

const ExperienceCard = ({ image, title, positionDate, location, text }) => {
  return (
    <Fade>
      <div className="experience-wrapper">
        <img
          alt=""
          className="experience-pic"
          src={require(`../../../assets/${image}`)}
        />
        <div className="experience-text">
          <h2 className="exp-title">{title}</h2>
          <h3 className="exp-position">{positionDate}</h3>
          <p className="exp-location">{location}</p>
          <p className="exp-text">{text}</p>
        </div>
      </div>
    </Fade>
  );
};

ExperienceCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  positionDate: PropTypes.string,
  location: PropTypes.string,
  text: PropTypes.string,
};

export default ExperienceCard;
