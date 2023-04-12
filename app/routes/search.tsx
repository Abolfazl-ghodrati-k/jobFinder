import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Job } from "~/components/Landing/JobsList";
import withLayout from "~/HOC/withLayout";
import SearchField from "~/components/SearchField";

const JobList = () => {
  const [foundJobs, setfoundJobs] = useState<Job[] | null>(null);

  const renderJobItem = useCallback(
    (job: Job) => (
      <ListItem
        key={job.id}
        component={Link}
        to={`/job/${job.id}`}
        sx={{
          boxShadow: 1,
          borderRadius: 2,
          mb: 2,
          "&:hover": {
            boxShadow: 5,
          },
        }}
      >
        <ListItemText primary={job.title} secondary={job.company} />
      </ListItem>
    ),
    []
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <Typography
        variant="h5"
        textAlign={"left"}
        width={"70%"}
        marginBottom={5}
      >
        Search for Jobs
      </Typography>
      <SearchField />
      <List sx={{ width: "100%", maxWidth: "800px", mt: 2 }}>
        {foundJobs?.map(renderJobItem)}
      </List>
    </Box>
  );
};

export default withLayout(JobList);
