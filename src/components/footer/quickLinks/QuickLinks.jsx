import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const cardContainer = {
  width: "150px",
  height: "240px",
  background: "black",
  marginRight: { xs: "-30px" },
  display: "flex",
  flexDirection: "column",
  justifyContent: {
    xs: "space-evenly",
    md: "space-between",
  },
};

const cardTitle = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#FFFFFF",
};

const cardDescriptions = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: { xs: "12px", md: "16px" },
  lineHeight: { xs: "18px", md: "24px" },
  color: "#FFFFFF",
  textDecoration: "none",
};

export const QuickLinks = () => {
  return (
    <Card sx={cardContainer}>
      <Typography
        sx={cardTitle}
        color="text.secondary"
        gutterBottom
        variant="h2"
      >
        Quick Links
      </Typography>

      <Typography
        sx={cardDescriptions}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Keybox
      </Typography>

      <Typography
        sx={cardDescriptions}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Downloads
      </Typography>
      <Typography
        sx={cardDescriptions}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Forum
      </Typography>
    </Card>
  );
};
