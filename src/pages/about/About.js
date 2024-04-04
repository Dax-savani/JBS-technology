import React from "react";
import Herosection from "./Herosection";
import "./../../assets/styles/about.css";
import MoreAbout from "./MoreAbout";
import Ceo from "./Ceo";
import { Box } from "@mui/material";

function About() {
  return (
    <>
        <Herosection />
        <MoreAbout />
        <Ceo />
    </>
  );
}

export default About;
