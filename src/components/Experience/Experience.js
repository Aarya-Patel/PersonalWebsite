import React from "react";
import { Fade } from "react-reveal";
import ExperienceCard from "./ExperienceCard/ExperienceCard.js";
import "./ExperienceStyles.css";

const experienceData = [
  {
    image: "baps.jpg",
    title: "BAPS",
    positionDate: "Youth Coordinator, Sept 2018 - Present",
    location: "Toronto, ON",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Na ipsum voluptatem nihil iusto fugiat ratione delectus hic quia, qui maxime quisquam eaque, amet ea distinctio reiciendis voluptates tempora architecto laborum!",
  },
  {
    image: "wonderland.png",
    title: "Canada's Wonderland",
    positionDate: "Lifeguard, Mar 2018 - Aug 2018",
    location: "Vaughan, ON",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Na ipsum voluptatem nihil iusto fugiat ratione delectus hic quia, qui maxime quisquam eaque, amet ea distinctio reiciendis voluptates tempora architecto laborum!",
  },
  {
    image: "toronto.jpg",
    title: "City of Toronto",
    positionDate: "Youth Summer Camp Volunteer, July 2017 - Aug 2017",
    location: "Toronto, ON",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Na ipsum voluptatem nihil iusto fugiat ratione delectus hic quia, qui maxime quisquam eaque, amet ea distinctio reiciendis voluptates tempora architecto laborum!",
  },
  {
    image: "uoft.jpg",
    title: "University of Toronto",
    positionDate: "B.S. in Computer Science, Sept 2019 - May 2023",
    location: "Toronto, ON",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Na ipsum voluptatem nihil iusto fugiat ratione delectus hic quia, qui maxime quisquam eaque, amet ea distinctio reiciendis voluptates tempora architecto laborum!",
  },
];

export default () => {
  return (
    <section id="#experiences" className="experiences">
      <Fade>
        <h1 className="title">Just some things I do</h1>
      </Fade>
      {experienceData.map((data, index) => {
        return <ExperienceCard {...data} key={index} />;
      })}
    </section>
  );
};
