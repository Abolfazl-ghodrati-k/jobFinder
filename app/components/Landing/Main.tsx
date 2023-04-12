import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Box, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import JobsList from "./JobsList";
import SearchForm from "./SearchForm";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

const JobFinderLayout: React.FC = () => {
  const theme = useTheme()
  const classes = useStyles(theme);

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <JobsList />
        </Grid>
        <Grid item xs={12} md={6}>
          <SearchForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobFinderLayout;
