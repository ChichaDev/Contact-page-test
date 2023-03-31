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

import {
  formContainer,
  textFieldBox,
  radioGroupContainer,
  radioGroup,
  emailTextField,
  btnContainer,
  btn,
} from "./ContactFormStyles";

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
