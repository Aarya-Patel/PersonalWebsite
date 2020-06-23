import React from "react";
import logo from "../../logo.svg";
import "./FooterStyle.css";

export default () => {
  return (
    <section className="footer">
      <p>
        designed & developed by Aarya Patel with{" "}
        <img src={logo} alt="" href="react logo" />
      </p>
    </section>
  );
};
