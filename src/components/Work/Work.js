import React from "react";
import WorkCard from "./WorkCard/WorkCard.js";
import { Fade } from "react-awesome-reveal";
import "./WorkStyle.css";

const workData = [
  {
    image: "covid19tracker.png",
    title: "Covid-19 Tracker",
    description:
      "Built a Covid-19 Tracker web application that displays data fetched from third party APIs. Created an informative dashboard to better interpret different data using Chart.js and Material UI.",
    ghLink: "https://github.com/Aarya-Patel/Covid19Tracker",
    siteLink: "https://aarya-patel.github.io/Covid19Tracker/",
    accentedWords: ["Chart.js", "Material UI."],
  },
  {
    image: "reminder.png",
    title: "Reminder",
    description:
      "Built a Reminder App from scratch entirely with React and optimized for desktop and mobile views. Added functionality such as: completing tasks, starring, deleting and filtering through the use of state. Also utilized local storage to store tasks to allow for continued use after closing the browser.",
    ghLink: "https://github.com/Aarya-Patel/Reminder",
    siteLink: "https://aarya-patel.github.io/Reminder/",
    accentedWords: ["React", "local", "storage"],
  },
  {
    image: "rapstrack.png",
    title: "RapsTrack",
    description:
      "RapsTrack is a web application that allows Toronto Raptors fans to keep up with the team. " +
      "I created a webscraper using Python & BeautifulSoup to scrape relevant data and stored it as JSON which allowed for features like searching and filtering. " +
      "I developed the front-end and server-side using Node.js and Express.js.",
    ghLink: "https://github.com/Aarya-Patel/RapsTrack",
    siteLink: "",
    accentedWords: ["Python", "BeautifulSoup", "Node.js", "Express.js."],
  },
  {
    image: "nasa_apod.png",
    title: "Nasa APOD",
    description:
      "Incorporated NASA's Astronomy Picture of the Day (APOD) API to create a web application that allows user to learn more about the universe. " +
      "Used React to build the application and optimized it for desktop and mobile views. " +
      "Facilitated user API requests using the fetch API and using that data to update specific components.",
    ghLink: "https://github.com/Aarya-Patel/NasaAPOD",
    siteLink: "https://aarya-patel.github.io/NasaAPOD/",
    accentedWords: ["React", "API", "requests", "fetch"],
  },
  {
    image: "calender.png",
    title: "Calender",
    description:
      "My team worked on a calender application created using Java. Focused on writing sustainable code by implementing various software design patterns. Incoporated MySQL to store user information to allow for continued use after exiting the app. " +
      "Implemented multithreading to alert notifications synonymously.",
    ghLink: "https://github.com/Aarya-Patel/Calender",
    siteLink: "",
    accentedWords: ["Java.", "MySQL", "multithreading"],
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
