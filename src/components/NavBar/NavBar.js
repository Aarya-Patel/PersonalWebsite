import React from "react";
import { Link } from "react-scroll";
import "./NavBarStyles.css";

export default () => {
  return (
    <nav className="nav-container">
      <span className="logo-name">Aarya Patel</span>
      <Link smooth to="#profile" className="nav-item">
        Profile
      </Link>
      <Link smooth to="#experiences" className="nav-item">
        Experience
      </Link>
      <Link smooth to="#work" className="nav-item">
        Work
      </Link>
      <Link smooth to="#contact" className="nav-item">
        Contact
      </Link>
    </nav>
  );
};
