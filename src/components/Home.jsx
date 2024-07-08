

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";


import image from "../images/mw.jpeg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", backgroundColor: "#f0f0f0" }}>
      <div style={{ 
        position: "absolute", 
        top: "7rem", 
        left: "3rem", 
        width: "17rem", 
        zIndex: 1, 
        color: "#333" 
      }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <img 
        src={image} 
        alt={imageAltText} 
        style={{ 
          position: "absolute", 
          top: "7rem", 
          right: "3rem", 
          width: "500px", 
          height: "500px", 
          borderRadius: "50%", 
          objectFit: "cover", 
          zIndex: 0 
        }} 
      />
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Scroll down" />
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
