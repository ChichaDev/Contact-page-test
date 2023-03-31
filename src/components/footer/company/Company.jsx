import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const cardContainer = {
  width: "150px",
  height: "220px",
  background: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: {
    xs: "space-evenly",
    md: "space-between",
  },
  marginLeft: { xs: "40px" },
};

const cardTitle = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#FFFFFF",
};

const cardList = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: { xs: "12px", md: "16px" },
  lineHeight: { xs: "18px", md: "24px" },
  color: "#FFFFFF",
  textDecoration: "none",
};

export const Company = () => {
  return (
    <Card sx={cardContainer}>
      <Typography
        sx={cardTitle}
        color="text.secondary"
        gutterBottom
        variant="h2"
      >
        Company
      </Typography>

      <Typography
        sx={cardList}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        About
      </Typography>

      <Typography
        sx={cardList}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Contact
      </Typography>

      <Typography
        sx={cardList}
        color="text.secondary"
        gutterBottom
        variant="h2"
        component="a"
        href=""
      >
        Blogs
      </Typography>
    </Card>
  );
};
