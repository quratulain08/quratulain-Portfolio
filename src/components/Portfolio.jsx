/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TindDog App 🎉",
    description:
      "Using HTML,CSS and Bootstrap, I built website for dogs showcasing my skills in designing and developing a responsive and user-friendly website.",
    url: "https://github.com/quratulain08/Tindog",
  },
  {
    title: "Glowcare-SkinCare Website",
    description:
      "As part of our Full Stack Web Development Course, I teamed up with my colleagues to build a website leveraging the MERN (MongoDB, Express, React, Node.js) technology stack, showcasing our skills in full-stack development.",
    url: "https://github.com/mahrukh-dev/glow-care-mern",
  },
  {
    title: "Hand Gesture Controlled Game",
    description:
      "along with my mates we have developed a game which is controlled by hand gestures by using Python, Media pipe and OpenCv. ",
    url: "https://github.com/mahrukh-dev/HandGestureCarGame",
  },
  {
    title: "DivineGlow-React",
    description:
      "By using React I have developed a simple Ecommerce website.",
    url: "https://github.com/quratulain08/Ecommerce-web-React",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;