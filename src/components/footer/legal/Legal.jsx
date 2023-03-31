import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const cardContainer = {
  width: "150px",
  height: "240px",
  background: "black",
  marginLeft: { xs: "10px" },
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

const cardDescription = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: { xs: "12px", md: "16px" },
  lineHeight: { xs: "18px", md: "24px" },
  color: "#FFFFFF",
  textDecoration: "none",
};

export const Legal = () => {
  return (
    <Card sx={cardContainer}>
      <Typography
        sx={cardTitle}
        color="text.secondary"
        gutterBottom
        variant="h2"
      >
        Legal
      </Typography>

      <Typography
        sx={cardDescription}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Privacy Policy
      </Typography>

      <Typography
        sx={cardDescription}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Terms & Services
      </Typography>

      <Typography
        sx={cardDescription}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Terms of Use
      </Typography>
      <Typography
        sx={cardDescription}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Refund Policy
      </Typography>
    </Card>
  );
};
