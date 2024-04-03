import React, { useEffect, useState } from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useParams } from "react-router-dom";
import { data } from "./CareerCards";


export const CareerCardData = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [careerData,setCareerData]= useState({})

  useEffect(() => {
      const singleData = data.find((val) => val.id == id);
      if (singleData && singleData.heading) {
        setCareerData(singleData);
      }   
  },[careerData])
  return (
    <>
      <Box paddingY={9}>
        <TitleAnimation title={careerData.heading} />
      </Box>

      <Container>
        <Breadcrumbs>
          <Link underline="none" href="" color={theme.palette.gray}>
            Career
          </Link>
          <Link underline="none" href="">
            {careerData.heading}
          </Link>
        </Breadcrumbs>

        <Grid
          container
          xl={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid md={4} padding={2}>
            <img src={careerData.image} alt="react" style={{ objectFit: "unset" }} />
          </Grid>
          <Grid
            md={8}
            fontSize={14}
            color={theme.palette.black.main}
            sx={{padding :{ md :"15px"}}}
          >
            <Typography variant="p">
              We are looking for a skilled react.js developer to join our
              front-end development team. In this role, you will be responsible
              for developing and implementing user interface components using
              React.js concepts and workflows such as Redux, Flux, and Webpack.
              You will also be responsible for profiling and improving front-end
              performance and documenting our front-end codebase.
            </Typography>
            <Box marginY={2}>
              <Typography variant="p">
                To ensure success as a react.js developer, you should have
                in-depth knowledge of JavaScript and React concepts, excellent
                front-end coding skills, and a good understanding of progressive
                web applications. Ultimately, a top-class react.js developer
                should be able to design and build modern user interface
                components to enhance application performance.
              </Typography>
            </Box>

            <Typography variant="ul" lineHeight={2}>
              <li style={{ listStyle: "unset" }}>
                <Typography
                  variant="strong"
                  sx={{ fontSize: "14px", fontWeight: "bolder" }}
                >
                  Experience :
                </Typography>
                <Typography variant="p"> 1 years</Typography>
              </li>
              <li style={{ listStyle: "unset" }}>
                <Typography
                  variant="strong"
                  sx={{ fontSize: "14px", fontWeight: "bolder" }}
                >
                  Openings :
                </Typography>
                <Typography variant="p"> 2</Typography>
              </li>
              <li style={{ listStyle: "unset" }}>
                <Typography
                  variant="strong"
                  sx={{ fontSize: "14px", fontWeight: "bolder" }}
                >
                  Location :
                </Typography>
                <Typography variant="p"> Surat, Gujarat.</Typography>
              </li>

              <Typography variant="h6" marginY={1} marginLeft={2}>
                Responsibilities :
              </Typography>
              <li style={{ listStyle: "unset" }}>
                <Typography variant="p">
                  Meeting with the development team to discuss user interface
                  ideas and applications.
                </Typography>
              </li>
            </Typography>
          </Grid>
        </Grid>

        <Box>
          <Typography variant="ul" fontSize={14} lineHeight={2}>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Reviewing application requirements and interface designs.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Identifying web-based user interactions.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Developing and implementing highly responsive user interface
                components using react concepts.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Writing application interface codes using JavaScript following
                react.js workflows.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Troubleshooting interface software and debugging application
                codes.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Developing and implementing front-end architecture to support
                user interface concepts.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Monitoring and improving front-end performance.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Documenting application changes and developing updates.
              </Typography>
            </li>
            <Typography variant="h6" marginY={1}>
              Requirements :
            </Typography>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Bachelor’s degree in computer science, information technology,
                or a similar field.
              </Typography>
            </li>

            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Previous experience working as a react.js developer.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                In-depth knowledge of JavaScript, CSS, HTML, and front-end
                languages.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Knowledge of REACT tools including React.js, Webpack, Enzyme,
                Redux, and Flux.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Experience with user interface design.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Knowledge of performance testing frameworks including Mocha and
                Jest.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Experience with browser-based debugging and performance testing
                software.
              </Typography>
            </li>
            <li style={{ listStyle: "unset" }}>
              <Typography variant="p">
                Excellent troubleshooting skills.
              </Typography>
            </li>
          </Typography>
        </Box>
      </Container>
    </>
  );
};
