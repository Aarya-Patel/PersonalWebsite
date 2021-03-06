import React from "react";
import { Fade } from "react-awesome-reveal";
import ExperienceCard from "./ExperienceCard/ExperienceCard.js";
import "./ExperienceStyles.css";

const experienceData = [
  {
    image: "icube.jpg",
    title: "ICUBE UTM",
    positionDate: "Web Developer, Sept 2020 - Present",
    location: "Mississuaga, ON",
    text:
      "Over the course of 4 months, I have been working as a part-time web developer at ICUBE UTM. I collaborate with various clients and UI\\UX designers to lay out the implementation of web pages and plugins. I primarily use HTML, CSS and PHP alongside WordPress to help create webpages, publish different endpoints and manage the client’s website.",
  },
  {
    image: "baps.jpg",
    title: "BAPS",
    positionDate: "Youth Coordinator, Sept 2018 - Present",
    location: "Toronto, ON",
    text:
      "On a weekly basis, BAPS hosts several sessions centerd around a wide range of youths to help connect them to their religious roots. Myself alongside fellow coordinators formulate a catered schedule to empower youths by delivering creative presentations and leading engaging activities. " +
      "I helped foster a sense of community by creating an environment of inclusivity and learning through interacting with the youth.",
  },
  {
    image: "wonderland.png",
    title: "Canada's Wonderland",
    positionDate: "Lifeguard, Mar 2018 - Aug 2018",
    location: "Vaughan, ON",
    text:
      "My team and I ensured that the park's daily operations were up and running as efficiently and smoothly as possible. " +
      "I helped prioritize guest safety by working alongside crew members to safely operate and manage commodities. " +
      "I learned how to work in a team environment and how to respond quickly to any given scenario through following protocols.",
  },
  {
    image: "toronto.jpg",
    title: "City of Toronto",
    positionDate: "Youth Summer Camp Volunteer, July 2017 - Aug 2017",
    location: "Toronto, ON",
    text:
      "Worked alongside camp counsellors to help organize and maintain daily camp activities. " +
      "Responsible for leading activities in an engaging manner that captivated the children’s attention. " +
      "Promoted a safe environment optimal for entertainment through supervision.",
  },
  {
    image: "uoft.jpg",
    title: "University of Toronto",
    positionDate: "B.S. in Computer Science, Sept 2019 - May 2023",
    location: "Toronto, ON",
    text:
      "University of Toronto presents an atmosphere of innovation and diversity of opportunity. " +
      "The culture at UofT has and continues to push me to expand and challenge me to become a better individual. " +
      "Relevant Coursework include: Software Design (Java), Intro to Computer Science (Python), Reasoning for Computer Science.",
  },
];

export default () => {
  return (
    <section id="#experiences" className="experiences">
      <Fade triggerOnce>
        <h1 className="title">Just some things I do</h1>
      </Fade>
      {experienceData.map((data, index) => {
        return <ExperienceCard {...data} key={index} />;
      })}
    </section>
  );
};
