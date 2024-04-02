import { Box } from "@mui/material";
import React from "react";
import { TitleAnimation } from "../TitleAnimation";

const MileStone = () => {
  return (
    <>
      <Box align="center" sx={{ margin: "auto" }}>
        <TitleAnimation title="Milestones Achieved So Far" />
        {/* <Typography variant="h5">Milestones Achieved So Far</Typography>
        <Box
          sx={{
            width: "100px",
            height: "1px",
            backgroundColor: "red",
            position: "relative",
            marginY: "10px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              backgroundColor: "red",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
            }}
            className="fg"
          ></Box>
        </Box> */}
      </Box>
    </>
  );
};

export default MileStone;
