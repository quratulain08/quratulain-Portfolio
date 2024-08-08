import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a Computer Science student studying at Air University, Islamabad. I enjoy building dynamic and responsive websites and applications.";

const skillsList = [
  "Web development",
  "User experience",
  "HTML/CSS/JavaScript",
  "MERN",
  "Mobile user interfaces",
  "Database management",
];

const detailOrQuote =
  "I am passionate about developing efficient and scalable web applications. By leveraging my web development skills, I aim to create seamless and engaging user experiences.";

const About = () => {
  return (
    <section className="about-section" id="about">
      <style>
        {`
          .about-section {
            position: relative;
            padding: 2rem;
            text-align: center;
          }

          .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            opacity: 0.3;
          }

          .about-content {
            background-color: white;
            width: 60%;
            max-width: 800px;
            padding: 4rem;
            margin: 3rem auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .about-content h2 {
            margin-bottom: 1rem;
            font-size: 2rem;
          }

          .about-content p.large {
            font-size: 1.2rem;
            margin-bottom: 2rem;
          }

          .about-content hr {
            border: none;
            border-top: 1px solid #eee;
            margin: 2rem 0;
          }

          .skills-list {
            text-align: left;
            columns: 2;
            font-size: 1rem;
            margin: 2rem 3rem;
            column-gap: 3rem;
          }

          .skills-list li {
            margin-bottom: 0.5rem;
          }

          @media (max-width: 768px) {
            .about-content {
              width: 80%;
              padding: 2rem;
            }

            .about-content h2 {
              font-size: 1.75rem;
            }

            .skills-list {
              columns: 1;
              margin: 1rem 0;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            .about-content {
              width: 90%;
              padding: 1.5rem;
            }

            .about-content h2 {
              font-size: 1.5rem;
            }

            .about-content p.large {
              font-size: 1rem;
            }

            .skills-list {
              font-size: 0.85rem;
              margin: 1rem 0;
            }
          }
        `}
      </style>
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-content">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
