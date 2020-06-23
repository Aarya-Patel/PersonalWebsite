import React from "react";
import { ReactComponent as SvgLeft } from "../../assets/svgleft.svg";
import { ReactComponent as SvgRight } from "../../assets/svgright.svg";
import "./SvgStyle.css";

export default () => {
  return (
    <div className="svg-wrapper">
      <SvgLeft className="top-polygon left" />
      <SvgRight className="top-polygon right" />
    </div>
  );
};
