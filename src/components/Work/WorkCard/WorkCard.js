import React from "react";
import { Fade } from "react-awesome-reveal";
import PropTypes from "prop-types";
import "./WorkCardStyle.css";

const WorkCard = ({ image, title, description, ghLink, siteLink }) => {
  return (
    <Fade triggerOnce>
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
          {ghLink ? (
            <a
              className="btn-work"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          ) : (
            ""
          )}

          {siteLink ? (
            <a
              className="btn-work"
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          ) : (
            ""
          )}
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
