import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import withLayout from "~/HOC/withLayout";
import withAuth, { AuthProps } from "~/HOC/withAuth";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const theme = createTheme();

function LoginPage({ signIn, signUp }: AuthProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const formikRef = useRef(null);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      const onSignup = JSON.parse(localStorage.getItem("ONSIGNUP")!);
      setIsSignup(onSignup);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const SigninSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleToggle = () => {
    localStorage.setItem("ONSIGNUP", JSON.stringify(!isSignup));
    setIsSignup((prev) => !prev);
    seterror("");
    formikRef.current?.resetForm();
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems={{ xs: "start", sm: "center" }}
      height={{ xs: "auto", sm: "89vh" }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={10}>
          <Box p={4} textAlign="center">
            <Box mb={2}>
              {isSignup ? (
                <PersonAddOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <LockOutlinedIcon color="primary" fontSize="large" />
              )}
            </Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {isSignup ? "Sign Up" : "Login"}
            </Typography>
            <Box mt={2}>
              <Formik
                innerRef={formikRef}
                initialValues={{
                  fullName: "",
                  password: "",
                  email: "",
                }}
                validationSchema={isSignup ? SignupSchema : SigninSchema}
                onSubmit={async (values) => {
                  setloading(true);
                  if (isSignup) {
                    const error = await signUp(values);
                    setloading(false);
                    seterror(error ? error : "");
                  } else {
                    const error = await signIn(values);
                    setloading(false);
                    seterror(error ? error : "");
                  }
                }}
              >
                {({ errors, touched, handleChange, values }) => (
                  <Grid container component={Form} spacing={2}>
                    {isSignup && (
                      <Grid item xs={12}>
                        <TextField
                          value={values?.fullName}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            handleChange(e);
                            seterror("");
                          }}
                          error={touched?.fullName && Boolean(errors?.fullName)}
                          helperText={touched?.fullName && errors?.fullName}
                          label="Full Name"
                          name="fullName"
                          fullWidth
                        />
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <TextField
                        value={values?.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          handleChange(e);
                          seterror("");
                        }}
                        error={touched?.email && Boolean(errors?.email)}
                        helperText={touched?.email && errors?.email}
                        label="Email Address"
                        name="email"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value={values?.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          handleChange(e);
                          seterror("");
                        }}
                        error={touched?.password && Boolean(errors?.password)}
                        helperText={touched?.password && errors?.password}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleShowPassword}>
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        type="submit"
                      >
                        {isSignup ? "Sign Up" : "Login"}
                      </Button>
                    </Grid>
                    {error ? (
                      <Grid item xs={12} sx={{ color: "red" }}>
                        {error}
                      </Grid>
                    ) : null}
                  </Grid>
                )}
              </Formik>
            </Box>
            <Box mt={2}>
              <Button color="secondary" onClick={handleToggle}>
                {isSignup
                  ? "Already have an account? Login"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

LoginPage.displayName = "login_page";

export default withLayout(withAuth(LoginPage));
