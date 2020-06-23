import React from "react";
import WorkCard from "./WorkCard/WorkCard.js";
import { Fade } from "react-reveal";
import "./WorkStyle.css";

const workData = [
  {
    image: "uoft.jpg",
    title: "RapsTrack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun accusantium minus sed fuga perspiciatis eligendi. Ad, ab pariatur possimus cumque, magnam modi error dolorum cupiditate eius, odio ullam quos autem.",
    ghLink: "",
    siteLink: "",
  },
  {
    image: "uoft.jpg",
    title: "Reminder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun accusantium minus sed fuga perspiciatis eligendi. Ad, ab pariatur possimus cumque, magnam modi error dolorum cupiditate eius, odio ullam quos autem.",
    ghLink: "",
    siteLink: "",
  },
  {
    image: "uoft.jpg",
    title: "Nasa APOD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun accusantium minus sed fuga perspiciatis eligendi. Ad, ab pariatur possimus cumque, magnam modi error dolorum cupiditate eius, odio ullam quos autem.",
    ghLink: "",
    siteLink: "",
  },
  {
    image: "uoft.jpg",
    title: "Calender",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun accusantium minus sed fuga perspiciatis eligendi. Ad, ab pariatur possimus cumque, magnam modi error dolorum cupiditate eius, odio ullam quos autem.",
    ghLink: "",
    siteLink: "",
  },
];

export default () => {
  return (
    <section id="#work" className="work">
      <Fade>
        <h1 className="title">This is my work</h1>
      </Fade>

      <div className="cards-container">
        {workData.map((data, index) => (
          <WorkCard {...data} key={index} />
        ))}
      </div>
    </section>
  );
};
