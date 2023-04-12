import React from "react";
import { Typography } from "@mui/material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FolderIcon from "@mui/icons-material/Folder";

 export interface Job {
  id: number;
  title: string;
  company: string;
}

const dummyJobs: Job[] = [
  {
    id: 1,
    title: "Front-end Developer",
    company: "Acme Inc.",
  },
  {
    id: 2,
    title: "Back-end Developer",
    company: "XYZ Corp.",
  },
  {
    id: 3,
    title: "Full-stack Developer",
    company: "FooBar LLC",
  },
  {
    id: 4,
    title: "Full-stack Developer",
    company: "FooBar LLC",
  },
  {
    id: 5,
    title: "Full-stack Developer",
    company: "FooBar LLC",
  },
];

export const useAnimationStyle = makeStyles({
  landingjobs: {
    position: "relative",
    zIndex: 1,
    borderRadius: 10,
    maxHeight: "350px",
    overflow: 'hidden',
    padding: "2rem",
    "&::before": {
      content: '""',
      position: "absolute",
      zIndex: -2,
      left: "-50%",
      top: "-50%",
      width: "200%",
      height: "200%",
      backgroundColor: "#399953",
      backgroundRepeat: "no-repeat",
      backgroundSize: "50% 50%, 50% 50%",
      backgroundPosition: "0 0, 100% 0, 100% 100%, 0 100%",
      backgroundImage:
        "linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5)",
      animation: "$rotate 3s linear infinite",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      zIndex: -1,
      left: 6,
      top: 6,
      width: "calc(100% - 12px)",
      height: "calc(100% - 12px)",
      background: "white",
      borderRadius: 5,
    },
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(1turn)",
    },
  },
  "@keyframes opacityChange": {
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0.5,
    },
  },
  jobscontainer: {
    borderLeft: '1px solid orange',
    overflowY: 'scroll',
    maxHeight: '330px',
  }
});

const JobsList: React.FC = () => {
  const classes = useAnimationStyle();
  return (
    <Box className={classes.landingjobs}>
      <Typography variant="h5" component="h2" gutterBottom>
      Immediate recruiment
      </Typography>
      <Box component={"div"} className={classes.jobscontainer}>
        {dummyJobs.map((job) => (
          <List key={job.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={"Secondary text"}
              />
            </ListItem>
          </List>
        ))}
      </Box>
    </Box>
  );
};

export default JobsList;
