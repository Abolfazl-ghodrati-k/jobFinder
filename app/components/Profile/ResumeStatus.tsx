import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

function ResumeStatus() {
  const [percentage, setpercentage] = React.useState(100);
  return (
    <Box sx={{ border: "1px solid #D0D0D0" }}>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          padding: "10px",
          backgroundColor: "#F9F9F9",
        }}
      >
        <Typography>Your Resume Status</Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box sx={{ padding: "10px" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "grid",
              placeItems: "end",
              marginTop: 3,
            }}
          >
            <ProgressBar completed={percentage} />
          </Box>
          <Button
            sx={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "rgb(26,188,156)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgb(26,178,146)",
                boxShadow: "0px 0px 5px 2px rgba(76, 175, 80, 0.5)",
              },
              marginTop:3
            }}
          >
            complete resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ResumeStatus;
