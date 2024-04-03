import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../assets/images/home-image/3c.png";
import { useTheme } from "@emotion/react";

const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Grid
            container
            alignItems="center"
            sx={{
              alignItems: "center",
              paddingInline: 10,
              height: "auto",
            }}
          >
            <Grid item md={6}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "25px", fontWeight: "400" }}
                  gutterBottom
                >
                  Luxury in Every Line of Code
                </Typography>

                <Typography
                  variant="h1"
                  sx={{ fontSize: "35px", fontWeight: "500" }}
                  gutterBottom
                >
                  Where Vision Meets <br /> Virtuality:
                  <Typography
                    variant="h1"
                    sx={{
                      color: `${theme.palette.primary.main}`,
                      fontSize: "35px",
                      display: "inline",
                      fontWeight: "500",
                    }}
                  >
                    Your IT Frontier
                  </Typography>
                </Typography>
                <Typography variant="subtitle2">
                  Crafting digital opulence, JBS TECHNOLOGY is the epitome of
                  tech sophistication, delivering bespoke IT solutions that
                  redefine luxury in every line of code. Take advantage of the
                  pinnacle of innovation to elevate your company, where
                  creativity and technology come together to achieve digital
                  excellence.
                </Typography>
                <Box sx={{ marginY: 2 }}>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 4, padding: 1 }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: 4, marginX: 2 }}
                  >
                    See Portfolio
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} display="flex" justifyContent="center">
              <Box sx={{ width: { sm: "65%", md: "100%" } }}>
                <img src={heroImage} alt="hero" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Hero;