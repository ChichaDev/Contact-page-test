import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

import { ReachUs } from "./reachUs/ReachUs";
import { Company } from "./company/Company";
import { Legal } from "./legal/Legal";
import { QuickLinks } from "./quickLinks/QuickLinks";
import { Subscribe } from "../subscribe/Subscribe";

import {
  footerWrap,
  footerLogo,
  dividerFooter,
  footerContentWrap,
  boxReachAndCOmpany,
  boxLegalQuick,
} from "./FooterStyles";

// The footer is implemented according to the classic flex model,
// division and grouping into blocks,
// reusable entities that are collected together in one flexible container
export const Footer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={{ xs: "sm", md: "xl" }} disableGutters="true">
        <Box sx={footerWrap}>
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={footerLogo}
          >
            Logo Here
          </Typography>

          <Divider
            variant="middle"
            orientation="vertical"
            style={{ background: "white" }}
            sx={dividerFooter}
          />

          <React.Fragment>
            <CssBaseline />
            <Container fixed maxWidth={{ xs: "sm", md: "lg" }}>
              <Box sx={footerContentWrap}>
                <Box sx={boxReachAndCOmpany}>
                  <ReachUs />
                  <Company />
                </Box>

                <Box sx={boxLegalQuick}>
                  <Legal />
                  <QuickLinks />
                </Box>

                <Subscribe />
              </Box>
            </Container>
          </React.Fragment>
        </Box>
      </Container>
    </React.Fragment>
  );
};
