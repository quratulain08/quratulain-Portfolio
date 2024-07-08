

import React from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

import "./App.css";


const siteProps = {
  name: "I am QuratUlAin",
  title: "Front-end Developer & Web Designer",
  email: "anniebangash497@gmail.com",
  gitHub: "quratulain08",
  instagram: "_.annieeexbb",
  linkedIn: "qurat-ul-ain-bangash-6b77b524a",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;