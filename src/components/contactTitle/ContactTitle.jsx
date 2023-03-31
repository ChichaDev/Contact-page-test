import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import {
  boxWrapper,
  cardStyle,
  titleStyle,
  subTitleStyle,
} from "./ContactTitleStyles";

export const ContactTitle = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={boxWrapper}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography sx={titleStyle} gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={subTitleStyle}>
                Any question or remarks? Just write us a message!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
};
