import React from "react";
import Herosection from "./Herosection";
import "./../../assets/styles/about.css";
import MoreAbout from "./MoreAbout";
import Ceo from "./Ceo";
import IntroduceSection from "./IntroduceSection";

function About() {
  return (
    <>
      <Herosection />
      <MoreAbout />
      <IntroduceSection />
      <Ceo />
    </>
  );
}

export default About;
