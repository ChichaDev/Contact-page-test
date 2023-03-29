import * as React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#000000",
      contrastText: "#fff",
    },
    black: {
      main: "#212121",
    },
  },
});

const formContainer = {
  width: { md: "655px", xs: "90%" },
  height: { md: "655px", xs: "600px" },
  display: { md: "flex", xs: "flex" },
  justifyContent: { md: "space-between", xs: "flex-start" },
  alignItems: "center",
  flexDirection: "column",
  marginLeft: { md: "20px", xs: "5%" },
  marginRight: "20px",
  marginTop: "10px",
};
const textFieldBox = {
  "& > :not(style)": {
    m: 1,
    width: { md: "278px", xs: "95%" },
    marginLeft: { md: "30px", xs: "3%" },
    marginTop: { md: "30px" },
  },
};
const radioGroupContainer = {
  width: { md: "595px", xs: "90%" },
  height: { md: "55px", xs: "60px" },
  marginLeft: { md: "10px", xs: "-5%" },
  marginTop: { md: "70px" },
};
const radioGroup = {
  display: "flex",
  flexDirection: "row",
  gap: "1px",
  width: { md: "610px", xs: "90%" },
};
const emailTextField = {
  width: { md: 595, xs: "98%" },
  maxWidth: "100%",
  marginTop: { md: "50px", xs: "90px" },
};
const btnContainer = {
  width: { md: "595px", xs: "100%" },
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: { md: "flex-end", xs: "center" },
  marginTop: { xs: "10px" },
  marginBottom: { md: "150px" },
};
const btn = { width: { xs: "260px" } };

// the form is implemented as a separate entity,
// the use of Material UI for advanced features of working with the form (validation, interactivity, configurations),
// moving styles into variables for better code readability
export const ContactForm = () => {
  return (
    <section>
      <ThemeProvider theme={theme}>
        <Box sx={formContainer}>
          <Box component="form" sx={textFieldBox} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              color="black"
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              color="black"
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              color="black"
            />
            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              color="black"
            />
          </Box>

          <Box sx={radioGroupContainer}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Select Subject?
              </FormLabel>

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={radioGroup}
              >
                <FormControlLabel
                  value="General Inquiry 2"
                  control={<Radio size="small" color="black" />}
                  label="General Inquiry "
                />

                <FormControlLabel
                  value="General Inquiry 3"
                  control={<Radio size="small" color="black" />}
                  label="General Inquiry"
                />
                <FormControlLabel
                  value="General Inquiry 4"
                  control={<Radio size="small" color="black" />}
                  label="General Inquiry"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box sx={emailTextField}>
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder="Write your message"
              multiline
              fullWidth
              color="black"
            />
          </Box>

          <Box sx={btnContainer}>
            <Button color="neutral" variant="contained" sx={btn}>
              Send Message
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </section>
  );
};
