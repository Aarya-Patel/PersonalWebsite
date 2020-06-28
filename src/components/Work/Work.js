import React from "react";
import WorkCard from "./WorkCard/WorkCard.js";
import { Fade } from "react-awesome-reveal";
import "./WorkStyle.css";

const workData = [
  {
    image: "rapstrack.png",
    title: "RapsTrack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun accusantium minus sed fuga perspiciatis eligendi. Ad, ab pariatur possimus cumque, magnam modi error dolorum cupiditate eius, odio ullam quos autem.",
    ghLink: "https://github.com/Aarya-Patel/RapsTrack",
    siteLink: "",
  },
  {
    image: "reminder.png",
    title: "Reminder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun accusantium minus sed fuga perspiciatis eligendi. Ad, ab pariatur possimus cumque, magnam modi error dolorum cupiditate eius, odio ullam quos autem.",
    ghLink: "",
    siteLink: "https://aarya-patel.github.io/Reminder/",
  },
  {
    image: "nasa_apod.png",
    title: "Nasa APOD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun accusantium minus sed fuga perspiciatis eligendi. Ad, ab pariatur possimus cumque, magnam modi error dolorum cupiditate eius, odio ullam quos autem.",
    ghLink: "",
    siteLink: "https://aarya-patel.github.io/NasaAPOD/",
  },
  {
    image: "calender.png",
    title: "Calender",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun accusantium minus sed fuga perspiciatis eligendi. Ad, ab pariatur possimus cumque, magnam modi error dolorum cupiditate eius, odio ullam quos autem.",
    ghLink: "https://github.com/Aarya-Patel/Calender",
    siteLink: "",
  },
];

export default () => {
  return (
    <section id="#work" className="work">
      <Fade triggerOnce>
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
