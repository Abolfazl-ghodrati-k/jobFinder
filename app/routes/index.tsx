import { Button, Container, Grid, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Main from "../components/Landing/Main";
import { useTheme, Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import withLayout from "~/HOC/withLayout";
import withAuth, { AuthProps } from "~/HOC/withAuth";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  logo: {
    maxWidth: "100%",
    height: "auto",
  },
  banner: {
    padding: theme.spacing(8),
    backgroundImage: "url(https://source.unsplash.com/random/1600x900)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    textAlign: "center",
  },
  bannerTitle: {
    fontWeight: 700,
    backgroundColor:"white !important",
    marginBottom: theme.spacing(2),
    color: "black",
  },
  bannerSubtitle: {
    marginBottom: theme.spacing(4),
    color: "black",
  },
  bannerButton: {
    marginTop: theme.spacing(2),
  },
  services: {
    padding: theme.spacing(8),
    backgroundColor: theme.palette.common.white,
  },
  serviceTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  serviceCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  serviceIcon: {
    fontSize: 56,
    marginBottom: theme.spacing(2),
  },
  serviceSubtitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  serviceDescription: {
    marginBottom: theme.spacing(2),
  },
  serviceButton: {
    marginTop: "auto",
  },
  footer: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.common.white,
    borderTop: `1px solid ${grey[300]}`,
  },
}));


function LandingPage({ supabase, args, signIn, signUp, signOut }: AuthProps) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box maxWidth={"lg"} margin={"2rem auto 0"}>
      <div className={classes.root}>
        <section className={classes.banner}>
          <Box maxWidth="lg">
            <Typography variant="h3" className={classes.bannerTitle}>
              Your next job is here
            </Typography>
            <Typography variant="h5" className={classes.bannerSubtitle}>
              Search for your dream job and apply today
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.bannerButton}
            >
              Get started
            </Button>
          </Box>
        </section>

        <Main />

        <section className={classes.services}>
          <Container maxWidth="lg">
            <Typography variant="h4" className={classes.serviceTitle}>
              Our Services
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <div className={classes.serviceCard}>
                  <Typography variant="h5" className={classes.serviceSubtitle}>
                    Job Listings
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.serviceDescription}
                  >
                    Browse through thousands of job listings to find your
                    perfect match
                  </Typography>
                  <Button variant="outlined" className={classes.serviceButton}>
                    View Details
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.serviceCard}>
                  <Typography variant="h5" className={classes.serviceSubtitle}>
                    Resume Builder
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.serviceDescription}
                  >
                    Create a professional resume that showcases your skills and
                    experience
                  </Typography>
                  <Button variant="outlined" className={classes.serviceButton}>
                    Details
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.serviceCard}>
                  <Typography variant="h5" className={classes.serviceSubtitle}>
                    Application Tracker
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.serviceDescription}
                  >
                    Keep track of your job applications and stay organized
                    throughout the hiring process
                  </Typography>
                  <Button variant="outlined" className={classes.serviceButton}>
                    Details
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

        <footer className={classes.footer}>
          <Container maxWidth="lg">
            <Typography variant="body2" color="textSecondary" align="center">
              © 2023 JobFinder, Inc. All rights reserved.
            </Typography>
          </Container>
        </footer>
      </div>
    </Box>
  );
}

export default withLayout(withAuth(LandingPage));
