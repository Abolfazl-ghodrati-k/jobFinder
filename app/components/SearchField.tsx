import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
  Theme,
  SelectChangeEvent,
  InputAdornment,
  Grid,
  Box
} from "@mui/material";
import { BusinessCenter, Room } from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => ({}));

type Job = {
  id: number;
  applicationType: string;
  salary: number;
  companyName: string;
  position: string;
  location: string;
};



const SearchField = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applicationType, setApplicationType] = useState<string>("");
  const [salary, setSalary] = useState<number[]>([0, 200000]);
  const [companyName, setCompanyName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSalaryChange = (event: Event, newValue: number | number[]) => {
    setSalary(newValue as number[]);
  };

  useEffect(() =>{
    const params = new URLSearchParams(window.location.search)
    setPosition(() => params.get('position')?? '')
    setLocation(() => params.get('location')?? '')
  })

  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "95%", maxWidth: "800px", margin: "0 auto" }}
    >
      {/* position */}
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          paddingTop: "0px !important",
        }}
      >
        <TextField
          label="Position"
          variant="outlined"
          margin="normal"
          value={position}
          size="small"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPosition(event.target.value)
          }
          sx={{ marginTop: "0px !important" }}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BusinessCenter />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      {/* location */}
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          paddingTop: "0px !important",
        }}
      >
        <TextField
          label="Location"
          variant="outlined"
          margin="normal"
          size="small"
          value={location}
          sx={{ marginTop: "0px !important" }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLocation(event.target.value)
          }
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Room />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      {/* application type */}
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          paddingTop: "0px !important",
        }}
      >
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="application-type-label">Application Type</InputLabel>
          <Select
            labelId="application-type-label"
            id="application-type"
            value={applicationType}
            onChange={(
              event: SelectChangeEvent<string>,
              child: React.ReactNode
            ) => setApplicationType(event.target.value as string)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Full-Time">Full-Time</MenuItem>
            <MenuItem value="Part-Time">Part-Time</MenuItem>
            <MenuItem value="Internship">Internship</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* company */}
      <Grid item xs={12} sm={4}>
        <TextField
          id="company-name"
          label="Company Name"
          value={companyName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCompanyName(e.target.value)
          }
          fullWidth
        />
      </Grid>

      {/* salary */}
      <Grid item xs={12} sm={4} maxWidth={"400px"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "between",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Typography>Salary Range</Typography>
          <Typography sx={{ fontSize: "12px", color: "gray" }}>
            {salary[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " $" +
              " - " +
              salary[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " $"}
          </Typography>
        </Box>
        <Slider
          value={salary}
          onChange={(event: Event, newValue: number | number[]) =>
            handleSalaryChange(event, newValue)
          }
          sx={{
            width: 300,
            color: "success.main",
          }}
          valueLabelDisplay="auto"
          min={0}
          max={200000}
        />
      </Grid>
    </Grid>
  );
};
export default SearchField;

// async function searchTable(applicationType, salaryRange, companyName, position, location) {
//   // Initialize the Supabase client and table name
//   const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
//   const table = 'your_table_name_here';

//   // Construct the query using Supabase's Query Builder
//   const query = supabase
//     .from(table)
//     .select('*')
//     .eq('applicationType', applicationType)
//     .gte('salary.min', salaryRange[0])
//     .lte('salary.max', salaryRange[1])
//     .eq('companyName', companyName)
//     .eq('position', position)
//     .eq('location', location);

//   // Execute the query and return the results
//   const { data, error } = await query;
//   if (error) {
//     console.error(error);
//     return [];
//   } else {
//     return data;
//   }
// }
