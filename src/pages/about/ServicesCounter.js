import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
export const ServicesCounter = () => {
  const theme = useTheme();
  const [counterState, setCounterstate] = useState(true);
  const isContainerLarge = useMediaQuery("(min-width: 300px)");
  return (
    <>
      <Container>
        <ScrollTrigger
          onEnter={() => setCounterstate(true)}
          onExit={() => setCounterstate(false)}
        >
          <Grid
            container
            sx={{ margin: "20px 0px" }}
            // sx={{ py: { xs: 5, md: 5 }, flexWrap: "wrap" }}
          >
            <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
              xs={4}
            >
              <Box sx={{ fontSize: { xs: "32px", sm: "48px" } }}>
                {counterState && (
                  <CountUp start={0} end={80} duration={1}></CountUp>
                )}
                <Typography variant="span" color={theme.palette.primary.main}>
                  +
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: 1,
                  fontSize: { sm: "12px", xs: "11px" },
                  lineHeight: "15px",
                }}
              >
                completed <Box>projects</Box>
              </Box>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
              xs={4}
            >
              <Box sx={{ fontSize: { xs: "32px", sm: "48px" } }}>
                <CountUp start={0} end={40} duration={1}></CountUp>
                <Typography variant="span" color={theme.palette.primary.main}>
                  +
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: 1,
                  fontSize: { sm: "12px", xs: "11px" },
                  lineHeight: "15px",
                }}
              >
                in-house <Box>specialists</Box>
              </Box>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
              xs={4}
            >
              <Box sx={{ fontSize: { xs: "32px", sm: "48px" } }}>
                <CountUp
                  start={0}
                  end={4.9}
                  decimals={1}
                  duration={1}
                ></CountUp>
                <Typography variant="span" color={theme.palette.primary.main}>
                  +
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 1, fontSize: "12px", lineHeight: "15px" }}>
                our Clutch<Box>score</Box>
              </Box>
            </Grid>
          </Grid>
        </ScrollTrigger>
      </Container>
    </>
  );
};
