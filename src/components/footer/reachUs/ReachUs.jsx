import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

import PhoneCall from "../../../assets/img/bxs_phone-call.png";
import Location from "../../../assets/img/Vector.png";
import Email from "../../../assets/img/ic_sharp-email.png";

import {
  cardContainer,
  cardContent,
  cardTitle,
  cardItemContainer,
  cardAvatar,
  cardItemDescription,
} from "./ReachUsStyles";

export const ReachUs = () => {
  return (
    <Card sx={cardContainer}>
      <CardContent sx={cardContent}>
        <Typography
          sx={cardTitle}
          color="text.secondary"
          gutterBottom
          variant="h2"
        >
          Reach us
        </Typography>

        <Card sx={cardItemContainer}>
          <Avatar alt="Phone call" src={PhoneCall} sx={cardAvatar} />
          <Typography
            variant="h5"
            component="a"
            href="10123456789"
            sx={cardItemDescription}
          >
            +1012 3456 789
          </Typography>
        </Card>

        <Card sx={cardItemContainer}>
          <Avatar alt="Email" src={Email} sx={cardAvatar} />

          <Typography
            variant="h5"
            color="text.secondary"
            component="a"
            href="demo@gmail.com"
            sx={cardItemDescription}
          >
            demo@gmail.com
          </Typography>
        </Card>

        <Card sx={cardItemContainer}>
          <Avatar alt="Location" src={Location} sx={cardAvatar} />
          <Typography variant="h5" component="a" sx={cardItemDescription}>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </Typography>
        </Card>
      </CardContent>
    </Card>
  );
};
