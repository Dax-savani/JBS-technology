import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ServicesCounter } from "./ServicesCounter";
import { useTheme } from "@emotion/react";

function MoreAbout() {
  const theme = useTheme();
  return (
    <>
      <div className="MoreAboutSection">
        <Container>
          <ServicesCounter />
          <Grid
            container
            spacing={2}
            sx={{
              margin: "10px 0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              className="boxs"
              item
              sx={{
                borderRadius: "15px",
                margin: "10px 0px",
              }}
            >
              <div>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Our History
                </Typography>
                <Typography
                  sx={{ margin: "10px 0px" }}
                  color={theme.palette.gray}
                >
                  We have been a creative and competitive web developing company
                  since 2019 and been delivering great results and projects
                  while matching the asked deadlines of the project. Started
                  with the team of 2 to 10+ we're growing continuously.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              className="boxs"
              sx={{
                borderRadius: "15px",
                margin: "10px 0px",
              }}
            >
              <div>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Our Mission
                </Typography>
                <Typography
                  sx={{ margin: "10px 0px" }}
                  color={theme.palette.gray}
                >
                  Our mission is to provide and create the projects as per ones
                  vision with the utmost code quality forged with Passion and
                  Hard work.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              className="boxs"
              sx={{
                borderRadius: "15px",
                margin: "10px 0px",
              }}
            >
              <div>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Who We Are
                </Typography>
                <Typography
                  sx={{ margin: "10px 0px" }}
                  color={theme.palette.gray}
                >
                  An entrepreneur firm with clear vision and passion for the a
                  greater success for the company and the clients.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default MoreAbout;
