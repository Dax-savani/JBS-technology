import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export const TitleAnimation = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Box align="center">
        <Box sx={{ fontSize: "35px", fontWeight: "600" }}>{title}</Box>
        <Box sx={{ marginTop: "10px" }}>
          <Box
            sx={{
              height: "3px",
              width: "100px",
              backgroundColor: "#b3dbff",
              position: "relative",
            }}
          >
            <Typography
              className="bradcrumb"
              bgcolor={theme.palette.primary.main}
            ></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
