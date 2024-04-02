import React from 'react'
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@emotion/react';


const ServiceHead = () => {
     const theme = useTheme()
    
  return (
    <Container maxWidth="lg">
      <Grid>
        <Grid item lg={9} xs={11} sx={{ py: { xs: 8, md: 13 } }}>
          <div className="heading">
            <Typography variant="div" fontWeight="bold">
              We design & build innovative products focused on{" "}
              <Typography variant="span" color={theme.palette.primary.main}>
                user’s needs
              </Typography>
            </Typography>
          </div>
          <div className="service_paragraph">
            <Typography>
              Together, we can transform your vision into a thriving business,
              be it through a Minimum Viable Product, UX/UI services, or scaling
              support for your company.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};


export default ServiceHead;
