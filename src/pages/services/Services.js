import React from "react";
import ServiceHead from "./ServicesHead";
import { ServicesCounter } from "./ServicesCounter";
import { Box } from "@mui/material";
import ServicesProduct from "./ServicesProduct";
export const Services = () => {
  return (
    <>
      <Box bgcolor="#FAFAFA">
        <Box>
          <ServiceHead />
        </Box>
        <Box
          bgcolor="white"
        >
          <ServicesCounter />
        </Box>
        <Box
        >
        <ServicesProduct />
        </Box>
      </Box>
    </>
  );
};
