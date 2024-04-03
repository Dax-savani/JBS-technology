import React from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import { Box } from "@mui/material";
import { CareerCards } from "./CareerCards";
import { CareerCardData } from "./CareerCardData";
import { useTheme } from "@emotion/react";

export const Careers = () => {
  const theme = useTheme()
  return (
    <>
      <Box bgcolor={theme.palette.backgroundLiteGrey}>
        <Box bgcolor={"white"} paddingY={9}>
          <TitleAnimation title="Openings" />
        </Box>
        <Box>
          <CareerCards />
        </Box>
        {/* <Box>
        <CareerCardData />
        </Box> */}
      </Box>
    </>
  );
};
