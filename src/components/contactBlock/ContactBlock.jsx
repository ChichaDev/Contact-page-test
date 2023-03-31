import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { ArrowSend } from "../arrowSend/ArrowSend";
import { ContactForm } from "../contactForm/ContatctForm";
import { ContactInfo } from "../contactInfo/ContactInfo";

import { contactInfo, contactFormStyles } from "./ContactBlockStyles";

// component declarative approach to further share responsibilities between components
export const ContactBlock = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={false} maxWidth="lg">
        <Box sx={contactInfo}>
          <ContactInfo />
          <Box sx={contactFormStyles}>
            <ContactForm />
            <ArrowSend />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
