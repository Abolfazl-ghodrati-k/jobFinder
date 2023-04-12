import { Box, Typography } from "@mui/material";

type Props = {
  completed: number;
};

function ProgressBar({ completed }: Props) {
  return (
    <Box sx={{ position: "relative", display: "flex", zIndex: 12 }}>
      <Box
        sx={{
          position: "absolute",
          left: -200,
          borderRadius: "10px",
          top: `calc(${100 - completed}% + ${completed == 0 ? ' -3px': completed >50 ? ' 3px' : ' -3px'})`,
          fontSize:".8rem",
          color:"#1ABC9C",
          zIndex: 10,
          width: "246px",
          "&::before": {
            content: '""',
            position: "absolute",
            height: "1px",
            right: 0,
            width: "50%",
            backgroundColor: "#1ABC9C",
          },
        }}
      >
        <Typography sx={{left:"5px", position:"absolute", top: "50%", transform: "translateY(-50%)"}}>{completed}% completed</Typography>
      </Box>
      <Box
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "3px solid #DDDDDD",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          zIndex: 11,
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: 100 - completed + "%",
            minWidth: "100%",
            backgroundColor: "white",
          }}
        ></Box>
        <Box
          sx={{
            height: completed + "%",
            minWidth: "100%",
            maxHeight: "100%",
            backgroundColor: "#1ABC9C",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default ProgressBar;
