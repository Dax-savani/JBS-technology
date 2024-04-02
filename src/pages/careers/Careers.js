import React from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import { Box } from "@mui/material";
import { CareerCards } from "./CareerCards";

export const Careers = () => {
  return (
    <>
      <Box bgcolor="#FAFAFA">
        <Box bgcolor={"white"}>
          <TitleAnimation title="Openings" />
        </Box>
        <Box>
          <CareerCards />
        </Box>
      </Box>
    </>
  );
};
