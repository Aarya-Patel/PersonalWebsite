import React from "react";
import "./ContentContainerStyles.css";
import PropTypes from "prop-types";

const ContentContainer = ({ children }) => {
  return <div className="content-container">{children}</div>;
};

ContentContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ContentContainer;
