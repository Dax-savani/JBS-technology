import React from "react";
import { BradeCrumbs } from "./BradeCrumbs";
import { Box } from "@mui/material";
import { CareerCards } from "./CareerCards";

export const Careers = () => {
  return (
    <>
      <Box bgcolor="#FAFAFA">
        <Box bgcolor={"white"}>
          <BradeCrumbs />
        </Box>
        <Box>
          <CareerCards />
        </Box>
      </Box>
    </>
  );
};
