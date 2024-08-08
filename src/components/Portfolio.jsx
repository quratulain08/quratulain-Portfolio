import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "TindDog App 🎉",
    description:
      "Using HTML, CSS, and Bootstrap, I built a website for dogs showcasing my skills in designing and developing a responsive and user-friendly website.",
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
      "Along with my mates, we developed a game which is controlled by hand gestures using Python, MediaPipe, and OpenCV.",
    url: "https://github.com/mahrukh-dev/HandGestureCarGame",
  },
  {
    title: "DivineGlow-React",
    description: "By using React, I developed a simple eCommerce website.",
    url: "https://github.com/quratulain08/Ecommerce-web-React",
  },
  {
    title: "BookStore Website",
    description: " I have integrated dynamic database  of books with seamless user interface.Using swiper and flowbite to design elements.It enables users to edit and manage books by using mern",
url: "https://github.com/quratulain08/Mern-Bookstore",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <style>
        {`
          .portfolio-section {
            padding: 2rem;
            background-color: #f9f9f9;
          }

          .portfolio-section h2 {
            text-align: center;
            margin-bottom: 2rem;
            font-size: 2rem;
            color: #333;
          }

          .portfolio-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 2rem;
            align-items: start;
          }

          .portfolio-image {
            max-width: 100%;
            align-self: center;
          }

          .portfolio-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }

          .portfolio-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .portfolio-box {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            transition: transform 0.3s;
          }

          .portfolio-box:hover {
            transform: translateY(-5px);
          }

          .portfolio-box h3 {
            margin: 0 0 0.5rem 0;
            color: #333;
            font-size: 1.25rem;
          }

          .portfolio-box p {
            font-size: 0.875rem;
            color: #555;
          }

          .portfolio-box a {
            text-decoration: none;
            color: inherit;
          }

          @media (max-width: 1024px) {
            .portfolio-content {
              grid-template-columns: 1fr;
            }
            
            .portfolio-image {
              grid-column: 1 / -1;
              width: 100%;
            }
          }

          @media (max-width: 768px) {
            .portfolio-container {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 480px) {
            .portfolio-section {
              padding: 1rem;
            }

            .portfolio-box p {
              font-size: 0.75rem;
            }

            .portfolio-image img {
              border-radius: 4px;
            }
          }
        `}
      </style>
      <h2>Portfolio</h2>
      <div className="portfolio-content">
        <div className="portfolio-image">
          <img src={image} alt={imageAltText} />
        </div>
        <div className="portfolio-container">
          {projectList.map((project) => (
            <div className="portfolio-box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
              </a>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
