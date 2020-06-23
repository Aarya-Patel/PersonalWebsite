import React from "react";
import NavBar from "../NavBar/NavBar.js";
import ContentContainer from "../ContentContainer/ContentContainer.js";
import Hero from "../Hero/Hero.js";
import Profile from "../Profile/Profile.js";
import Experience from "../Experience/Experience.js";
import Work from "../Work/Work.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";
import SvgTop from "../Svg/SvgTop.js";
import SvgBottom from "../Svg/SvgBottom.js";
import "./MediaQueries.css";
import "./OverallStyles.css";

export default () => {
  return (
    <div className="main-container">
      <NavBar />
      <ContentContainer>
        <Hero />
        <Profile />
        <SvgTop />
        <Experience />
        <SvgBottom />
        <Work />
        <SvgTop />
        <Contact />
        <Footer />
      </ContentContainer>
    </div>
  );
};
