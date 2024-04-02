import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const BradeCrumbs = () => {
    const theme = useTheme()
  return (
    <>
      <Container>
        <Box
          paddingY={9}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box sx={{ fontSize: "35px", fontWeight: "600" }}>Openings</Box>
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
      </Container>
    </>
  );
};
