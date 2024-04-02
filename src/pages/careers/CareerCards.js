import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/Careers/Group.png";
import { useNavigate } from "react-router-dom";

export const CareerCards = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  const data = [
    {
      image: img1,
      heading: "React.js Developer",
      descripition1: "Experience: 2 ",
      descripition2: "No of Openings: 1 ",
      descripition3: "Location: Surat, Gujarat.",
    },
    {
      image: img1,
      heading: "React.js Developer",
      descripition1: "Experience: 2 ",
      descripition2: "No of Openings: 1 ",
      descripition3: "Location: Surat, Gujarat.",
    },
    {
      image: img1,
      heading: "React.js Developer",
      descripition1: "Experience: 2 ",
      descripition2: "No of Openings: 1 ",
      descripition3: "Location: Surat, Gujarat.",
    },
    {
      image: img1,
      heading: "React.js Developer",
      descripition1: "Experience: 2 ",
      descripition2: "No of Openings: 1 ",
      descripition3: "Location: Surat, Gujarat.",
    },
    {
      image: img1,
      heading: "React.js Developer",
      descripition1: "Experience: 2 ",
      descripition2: "No of Openings: 1 ",
      descripition3: "Location: Surat, Gujarat.",
    },
    {
      image: img1,
      heading: "React.js Developer",
      descripition1: "Experience: 2 ",
      descripition2: "No of Openings: 1 ",
      descripition3: "Location: Surat, Gujarat.",
    },
  ];
  return (
    <>
      <Container >
        <Grid
          container
          spacing={3}
          alignItems={"center"}
          justifyContent={"center"}
          marginY={4}
        >
          {data.map((data) => (
            <Grid item md={4} sm={6} xs={12} onClick={() => navigate("/career_carddata")}>
              <Box
                bgcolor="white"
                sx={{
                  padding: "25px 15px",
                  borderRadius: "15px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ height: "79px", width: "79px", padding: "10px" }}>
                  <img src={data.image} alt="dg" />
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <h3>{data.heading}</h3>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "8px",
                    color: `${theme.palette.gray}`,
                    fontSize: "12px",
                  }}
                >
                 {data.descripition1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: `${theme.palette.gray}`,
                    fontSize: "12px",
                  }}
                >
                 {data.descripition2}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: `${theme.palette.gray}`,
                    fontSize: "12px",
                  }}
                >
                 {data.descripition3}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
