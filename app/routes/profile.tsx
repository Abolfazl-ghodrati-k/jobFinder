import * as React from "react";
import {
  Grid,
  Typography,
  Box,
  Divider,
  Button,
  InputLabel,
  FormHelperText,
  TextField,
} from "@mui/material";
import withLayout from "~/HOC/withLayout";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/styles";
import ResumeStatus from "~/components/Profile/ResumeStatus";
import JobsList from "~/components/Landing/JobsList";

const WrapperBox = styled(Box)(({ theme }) => ({
  border: "1px solid gray",
  borderRadius: "4px",
  padding: "20px",
  backgroundColor: "white",
  "> *": {
    padding: "30px",
    backgroundColor: "#F5F5F5",
    marginBottom: "1rem",
    borderRadius: "5px",
  },
  ":nth-last-child": {
    marginBottom: 0,
  },
}));

const InputBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const CustomTextField = styled(TextField)(() => ({
  backgroundColor: "white",
}));

function UserProfile() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [currentPass, setCurrentPass] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [newPassRepeat, setNewPassRepeat] = React.useState("");
  const theme = useTheme();
  return (
    <Grid
      id="wrapper"
      width={"100%"}
      height={"100%"}
      justifyContent={"space-between"}
      maxWidth="lg"
      margin="2rem auto"
      spacing={2}
      container
    >
      <Grid
        item
        alignContent={"start"}
        justifyContent={"start"}
        xs={12}
        md={8}
      >
        <Typography
          sx={{ marginBottom: "15px", fontSize: "1.2rem", color: "gray" }}
        >
          User Profile Setting
        </Typography>
        <Box
          component={"form"}
          onSubmit={() => {
            console.log("submited");
          }}
        >
          <WrapperBox>
            <Box>
              <Typography
                sx={{
                  marginBottom: 1,
                  fontSize: { xs: ".9rem", sm: "1rem" },
                  color: "black",
                }}
              >
                change email address
              </Typography>
              <Divider />
              <InputBox component={"div"}>
                <InputLabel
                  sx={{
                    marginTop: { xs: 1, sm: 2 },
                    fontSize: { xs: ".7rem", sm: ".9rem" },
                    marginBottom: 1,
                  }}
                >
                  Email address
                </InputLabel>
                <CustomTextField
                  variant="outlined"
                  sx={{ maxWidth: { md: "45%" } }}
                  size="small"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                  }}
                />
                <FormHelperText
                  sx={{
                    marginTop: 2,
                    fontSize: { xs: ".7rem", sm: ".9rem" },
                  }}
                >
                  This is your email, you can change it
                </FormHelperText>
              </InputBox>
            </Box>
            <Box>
              <Typography
                sx={{
                  marginBottom: 1,
                  fontSize: { xs: ".9rem", sm: "1rem" },
                  color: "black",
                }}
              >
                personal information
              </Typography>
              <Divider />
              <InputBox component={"div"}>
                <InputLabel
                  sx={{
                    marginTop: { xs: 1, sm: 2 },
                    fontSize: { xs: ".7rem", sm: ".9rem" },
                    marginBottom: 1,
                  }}
                >
                  first name and last name
                </InputLabel>
                <CustomTextField
                  variant="outlined"
                  size="small"
                  sx={{ maxWidth: { md: "45%" } }}
                  placeholder="felan o felani hastam"
                  value={name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                  }}
                />
                {/* <FormHelperText sx={{ marginTop: 2, fontSize: {xs:".7rem", sm:".9rem"} }}>
                This is your email, you can change it
              </FormHelperText> */}
              </InputBox>
            </Box>
            <Box>
              <Typography
                sx={{
                  marginBottom: 1,
                  fontSize: { xs: ".9rem", sm: "1rem" },
                  color: "black",
                }}
              >
                change password
              </Typography>
              <Divider />
              <InputBox component={"div"} sx={{ marginBottom: "1rem" }}>
                <InputLabel
                  sx={{
                    marginTop: 3,
                    fontSize: { xs: ".7rem", sm: ".9rem" },
                    marginBottom: 1,
                  }}
                >
                  current password
                </InputLabel>
                <CustomTextField
                  variant="outlined"
                  size="small"
                  placeholder="email@gmail.com"
                  sx={{ maxWidth: { md: "45%" } }}
                  value={currentPass}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCurrentPass(event.target.value);
                  }}
                />
                {/* <FormHelperText sx={{ marginTop: 2, fontSize: {xs:".7rem", sm:".9rem"} }}>
                This is your email, you can change it
              </FormHelperText> */}
              </InputBox>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item xs={12} md={6}>
                  <InputBox component={"div"}>
                    <InputLabel
                      sx={{
                        marginTop: { xs: 1, sm: 2 },
                        fontSize: { xs: ".7rem", sm: ".9rem" },
                        marginBottom: 1,
                      }}
                    >
                      new password
                    </InputLabel>
                    <CustomTextField
                      variant="outlined"
                      size="small"
                      sx={{ maxWidth: { md: "90%" } }}
                      placeholder="new password"
                      value={email}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setEmail(event.target.value);
                      }}
                    />
                    {/* <FormHelperText sx={{ marginTop: 2, fontSize: ".7rem" }}>
                This is your email, you can change it
              </FormHelperText> */}
                  </InputBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputBox component={"div"}>
                    <InputLabel
                      sx={{
                        marginTop: { xs: 2, sm: 3, md: 2 },
                        fontSize: { xs: ".7rem", sm: ".9rem" },
                        marginBottom: 1,
                      }}
                    >
                      confirm new password
                    </InputLabel>
                    <CustomTextField
                      variant="outlined"
                      size="small"
                      sx={{ maxWidth: { md: "90%" } }}
                      placeholder="new Password repeat"
                      value={newPassRepeat}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setNewPassRepeat(event.target.value);
                      }}
                    />
                    {/* <FormHelperText sx={{ marginTop: 2, fontSize: ".7rem" }}>
                This is your email, you can change it
              </FormHelperText> */}
                  </InputBox>
                </Grid>
              </Grid>
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
              }}
            >
              save the changes
            </Button>
          </WrapperBox>
        </Box>
      </Grid>
      <Grid xs={12} item md={4} sx={{display:"flex", flexDirection: "column",gap:"15px"}}>
        <ResumeStatus />
        <JobsList />
      </Grid>
    </Grid>
  );
}

export default withLayout(UserProfile);
