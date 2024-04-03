import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import group from "../../assets/images/home-image/4.png";
import smallLogo from "../../assets/images/home-image/Group 370.png";

const WhyUs = () => {
  return (
    <Container maxWidth="lg">
      <Box py={5}>
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: "600", fontSize: "35px", marginBottom: "30px" }}
          >
            Why Choose Us?
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item container spacing={3}>
            <Grid
              item
              container
              direction={{ xs: "row", md: "column" }}
              xs={12}
              md={4}
              spacing={3}
              order={{ xs: 2, md: 1 }}
            >
              <Grid
                item
                sm={6}
                md={4}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Paper component={Box} p={3} borderRadius="3">
                  <Box>
                    <img
                      src={smallLogo}
                      alt="small logo"
                      style={{ width: "30px" }}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={600}>
                    Innovative Solutions
                  </Typography>
                  <Typography variant="body2">
                    Stay ahead with forward-thinking solutions, embracing the
                    latest technology for your business in the digital
                    landscape.
                  </Typography>
                </Paper>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Paper component={Box} p={3} borderRadius="3">
                  <Box>
                    <img
                      src={smallLogo}
                      alt="small logo"
                      style={{ width: "30px" }}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={600}>
                    Innovative Solutions
                  </Typography>
                  <Typography variant="body2">
                    Stay ahead with forward-thinking solutions, embracing the
                    latest technology for your business in the digital
                    landscape.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
              order={{ xs: 1, md: 2 }}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  height: "432px",
                  width: "68%",
                }}
              >
                <img src={group} alt="group" />
              </Box>
            </Grid>
          </Grid>
          <Grid item container spacing={3}>
            <Grid
              item
              sm={6}
              md={4}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Paper component={Box} p={3} borderRadius="3">
                <Box>
                  <img
                    src={smallLogo}
                    alt="small logo"
                    style={{ width: "30px" }}
                  />
                </Box>
                <Typography variant="h6" fontWeight={600}>
                  Innovative Solutions
                </Typography>
                <Typography variant="body2">
                  Stay ahead with forward-thinking solutions, embracing the
                  latest technology for your business in the digital landscape.
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Paper component={Box} p={3} borderRadius="3">
                <Box>
                  <img
                    src={smallLogo}
                    alt="small logo"
                    style={{ width: "30px" }}
                  />
                </Box>
                <Typography variant="h6" fontWeight={600}>
                  Innovative Solutions
                </Typography>
                <Typography variant="body2">
                  Stay ahead with forward-thinking solutions, embracing the
                  latest technology for your business in the digital landscape.
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Paper component={Box} p={3} borderRadius="3">
                <Box>
                  <img
                    src={smallLogo}
                    alt="small logo"
                    style={{ width: "30px" }}
                  />
                </Box>
                <Typography variant="h6" fontWeight={600}>
                  Innovative Solutions
                </Typography>
                <Typography variant="body2">
                  Stay ahead with forward-thinking solutions, embracing the
                  latest technology for your business in the digital landscape.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
