import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { useTheme } from "@emotion/react";

const MainCources = () => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Box p={5}>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: "600", fontSize: "35px" }}
            >
              What we do?
            </Typography>
            <Typography variant="body1" my={2}>
              We help entrepreneurs and business leaders build and launch
              innovative custom software solutions to the market across a range
              of verticals & industries. We can help you turn your vision into a
              successful product together, whether it’s in the form of a Minimum
              Viable Product, UX/UI services, full product custom software
              development or help to scale your company.
            </Typography>
          </Box>
          <Grid container>
            <Grid item md={3} p={1}>
              <Box
                sx={{
                  border: `3px dashed ${theme.palette.primary.main}`,
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    bgcolor: `${theme.palette.primary.light}`,
                    marginBottom: 2,
                  }}
                >
                  <CodeOffIcon />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  sx={{ marginY: "5px" }}
                >
                  Web Development
                </Typography>
                <Typography variant="body2">
                  From simple brochure sites to powerful web applications, we
                  craft digital experiences that engage, convert, and grow your
                  business.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} p={1}>
              <Box
                sx={{
                  border: `3px dashed ${theme.palette.primary.main}`,
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    bgcolor: `${theme.palette.primary.light}`,
                    marginBottom: 2,
                  }}
                >
                  <CodeOffIcon />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  sx={{ marginY: "5px" }}
                >
                  Web Development
                </Typography>
                <Typography variant="body2">
                  From simple brochure sites to powerful web applications, we
                  craft digital experiences that engage, convert, and grow your
                  business.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} p={1}>
              <Box
                sx={{
                  border: `3px dashed ${theme.palette.primary.main}`,
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    bgcolor: `${theme.palette.primary.light}`,
                    marginBottom: 2,
                  }}
                >
                  <CodeOffIcon />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  sx={{ marginY: "5px" }}
                >
                  Web Development
                </Typography>
                <Typography variant="body2">
                  From simple brochure sites to powerful web applications, we
                  craft digital experiences that engage, convert, and grow your
                  business.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} p={1}>
              <Box
                sx={{
                  border: `3px dashed ${theme.palette.primary.main}`,
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    bgcolor: `${theme.palette.primary.light}`,
                    marginBottom: 2,
                  }}
                >
                  <CodeOffIcon />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  sx={{ marginY: "5px" }}
                >
                  Web Development
                </Typography>
                <Typography variant="body2">
                  From simple brochure sites to powerful web applications, we
                  craft digital experiences that engage, convert, and grow your
                  business.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default MainCources;
