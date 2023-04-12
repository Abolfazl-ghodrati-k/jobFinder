import React, { useState } from "react";
import { Button, TextField, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { useNavigate } from "@remix-run/react";

const CustomInput = styled(TextField)({
  width: "100%",
  marginBottom: "1rem",
  "& label.Mui-focused": {
    color: "darkgreen",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "brown",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderBottom: "1px solid black",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
    "& .MuiButton-root": {
      margin: theme.spacing(1),
    },
  },
  textField: {
    height: "20px !important",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiInputLabel-outlined": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-input": {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
}));

const SearchForm: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const navigate = useNavigate()
  const [position, setposition] = useState("")
  const [location, setlocation] = useState("")
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?position=${position}&location=${location}`)
  };
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      
          <CustomInput
            value={position}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setposition(e.target.value)}
            label="Search by position"
            variant="filled"
          />
          <CustomInput
           value={location}
           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setlocation(e.target.value)}
            label="Search by location"
            variant="outlined"
          />
      
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
};

const countries = [
  { label: "Afghanistan" },
  { label: "Iran" },
  { label: "Germany" },
  { label: "Kirekhar" },
  { label: "kosegav" },
  { label: "USA" },
  { label: "Russia" },
];

export default SearchForm;
