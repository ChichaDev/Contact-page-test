import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { height, ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

import {
  subscribeContainer,
  subscribeTitle,
  subscribeTextField,
  subscribeBtn,
  subscribeSubTitle,
} from "./SubscribeStyles";

// moved to a separate entity for reuse
export const Subscribe = () => {
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

  return (
    <Box sx={subscribeContainer}>
      <Typography
        sx={subscribeTitle}
        color="text.secondary"
        gutterBottom
        variant="h2"
      >
        Join Our Newsletter
      </Typography>
      {/* input */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "20ch",
          },
        }}
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Your email address"
          variant="outlined"
          sx={subscribeTextField}
        />
        <ThemeProvider theme={theme}>
          <Button
            sx={subscribeBtn}
            variant="contained"
            type="submit"
            color="neutral"
          >
            Subscribe
          </Button>
        </ThemeProvider>
      </Box>

      <Typography
        sx={subscribeSubTitle}
        color="text.secondary"
        gutterBottom
        variant="h3"
      >
        *Will send you weekly updates for your better tool management.
      </Typography>
    </Box>
  );
};
