// import "./ContactBlock.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { ArrowSend } from "../arrowSend/ArrowSend";
import { ContactForm } from "../contactForm/ContatctForm";
import { ContactInfo } from "../contactInfo/ContactInfo";

// component declarative approach to further share responsibilities between components
export const ContactBlock = () => {
  return (
    // <ContactInfo />
    // <ContactForm />
    // <ArrowSend />

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            borderRadius: "10px",
            height: { xs: "1050px", md: "667px" },
            marginTop: "20px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <ContactInfo />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <ContactForm />
            <ArrowSend />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
