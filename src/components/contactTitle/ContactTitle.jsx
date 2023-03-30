import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

export const ContactTitle = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "white",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: "20px",
          }}
        >
          <Card
            sx={{
              width: "370px",
              marginLeft: "2px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "60px",
                  color: "#000000",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  textAlign: "center",
                }}
                gutterBottom
              >
                Contact Us
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "#717171",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  textAlign: "center",
                }}
              >
                Any question or remarks? Just write us a message!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
};
