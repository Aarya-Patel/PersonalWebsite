import React from "react";
import { Fade } from "react-awesome-reveal";
import PropTypes from "prop-types";
import "./WorkCardStyle.css";

const WorkCard = ({ image, title, description, ghLink, siteLink }) => {
  return (
    <Fade>
      <div className="card">
        <div className="picture-wrapper">
          <img
            src={require(`../../../assets/${image}`)}
            alt=""
            href="work-image"
          />
        </div>
        <div className="caption-wrapper">
          <h3 className="caption-title">{title}</h3>
          <p className="work-description">{description}</p>
          <a className="btn-github" src={ghLink} href="gh-link">
            View in Github
          </a>
        </div>
      </div>
    </Fade>
  );
};

WorkCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  ghLink: PropTypes.string,
  siteLink: PropTypes.string,
};

export default WorkCard;
