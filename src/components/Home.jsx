import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/mw.jpeg";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="home-section">
      <style>
        {`
          .home-section {
            position: relative;
            background-color: #f0f0f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 100vh;
            padding: 2rem;
            box-sizing: border-box;
            overflow: hidden;
          }

          .text-container {
            z-index: 1;
            color: #333;
            max-width: 40%;
          }

          .profile-image {
            width: 400px;
            height: 400px;
            border-radius: 50%;
            object-fit: cover;
            z-index: 0;
          }

          .arrow-container {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
          }

          .arrow-icon {
            height: 3rem;
            width: 3rem;
          }

          @media (max-width: 1024px) {
            .profile-image {
              width: 300px;
              height: 300px;
            }
          }

          @media (max-width: 768px) {
            .home-section {
              flex-direction: column;
              text-align: center;
              justify-content: center;
            }

            .text-container {
              max-width: 80%;
              margin-bottom: 2rem;
            }

            .profile-image {
              width: 250px;
              height: 250px;
            }
          }

          @media (max-width: 480px) {
            .text-container {
              font-size: 0.9rem;
            }

            .profile-image {
              width: 200px;
              height: 200px;
            }

            .arrow-icon {
              height: 2.5rem;
              width: 2.5rem;
            }
          }
        `}
      </style>
      <div className="text-container">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <img className="profile-image" src={image} alt={imageAltText} />
      <div className="arrow-container">
        <img src={arrowSvg} className="arrow-icon" alt="Scroll down" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
