import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function CEOBox({ image, name, position }) {
  const theme = useTheme();
  return (
    <Card >
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontSize: "19px", fontWeight: "600", lineHeight: "36px" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color={theme.palette.gray}>{position}</Typography>
      </CardContent>
    </Card>
  );
}

export default CEOBox;
