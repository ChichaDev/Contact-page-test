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

import PhoneCall from "../../assets/img/bxs_phone-call.png";
import Location from "../../assets/img/Vector.png";
import Email from "../../assets/img/ic_sharp-email.png";

import { height, ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

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

export const Footer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={{ xs: "sm", md: "xl" }} disableGutters="true">
        <Box
          sx={{
            bgcolor: "#000000",
            height: { xs: "832px", md: "479px" },
            marginTop: "50px",
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "36px",
              color: "#FFFFFF",
              textDecoration: "none",
              lineHeight: "44px",
              marginTop: { xs: "10px", md: "80px" },
            }}
          >
            Logo Here
          </Typography>

          {/* Divider в футере */}
          <Divider
            variant="middle"
            orientation="vertical"
            style={{ background: "white" }}
            sx={{ height: "1px", width: "81%" }}
          />

          {/* контейнер для навигации и формы в футере */}
          <React.Fragment>
            <CssBaseline />
            <Container fixed maxWidth={{ xs: "sm", md: "lg" }}>
              <Box
                sx={{
                  height: { xs: "714px", md: "244px" },
                  marginBottom: { xs: "35px", md: "66px" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },

                  justifyContent: { xs: "center" },
                  alignItems: { xs: "center" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",

                    width: { xs: "350px", md: "500px" },
                    height: { md: "240px" },
                  }}
                >
                  {/* Reach Us */}
                  <Card
                    sx={{
                      width: "340px",
                      height: "240px",
                      background: "black",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "24px",
                          color: "#FFFFFF",
                        }}
                        color="text.secondary"
                        gutterBottom
                        variant="h2"
                      >
                        Reach us
                      </Typography>

                      <Card
                        sx={{
                          background: "black",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "15px",
                        }}
                      >
                        <Avatar
                          alt="Phone call"
                          src={PhoneCall}
                          sx={{
                            p: 0,
                            width: { xs: "16px", md: "31px" },
                            height: { xs: "16px", md: "31px" },
                          }}
                        />
                        <Typography
                          variant="h5"
                          component="a"
                          href="10123456789"
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: { xs: "12px", md: "16px" },
                            lineHeight: "24px",
                            color: "#FFFFFF",
                            textDecoration: "none",
                          }}
                        >
                          +1012 3456 789
                        </Typography>
                      </Card>

                      <Card
                        sx={{
                          background: "black",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "15px",
                        }}
                      >
                        <Avatar
                          alt="Email"
                          src={Email}
                          sx={{
                            p: 0,
                            width: { xs: "16px", md: "31px" },
                            height: { xs: "16px", md: "31px" },
                          }}
                        />

                        <Typography
                          variant="h5"
                          color="text.secondary"
                          component="a"
                          href="demo@gmail.com"
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: { xs: "12px", md: "16px" },
                            lineHeight: "24px",
                            color: "#FFFFFF",
                            textDecoration: "none",
                          }}
                        >
                          demo@gmail.com
                        </Typography>
                      </Card>

                      <Card
                        sx={{
                          background: "black",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "15px",
                        }}
                      >
                        <Avatar
                          alt="Location"
                          src={Location}
                          sx={{
                            p: 0,
                            width: { xs: "16px", md: "31px" },
                            height: { xs: "16px", md: "31px" },
                          }}
                        />
                        <Typography
                          variant="h5"
                          component="a"
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: { xs: "12px", md: "16px" },
                            lineHeight: "24px",
                            color: "#FFFFFF",
                          }}
                        >
                          132 Dartmouth Street Boston, Massachusetts 02156
                          United States
                        </Typography>
                      </Card>
                    </CardContent>
                  </Card>

                  {/* Company */}
                  <Card
                    sx={{
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
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#FFFFFF",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                    >
                      Company
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      About
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Contact
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Blogs
                    </Typography>
                  </Card>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "space-between",
                      md: "space-between",
                    },
                    flexDirection: "row",
                    width: { xs: "310px", md: "300px" },
                    height: { md: "240px" },
                  }}
                >
                  {/* Legal */}
                  <Card
                    sx={{
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
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#FFFFFF",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                    >
                      Legal
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Privacy Policy
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Terms & Services
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Terms of Use
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Refund Policy
                    </Typography>
                  </Card>
                  {/* Quick Links */}
                  <Card
                    sx={{
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
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#FFFFFF",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                    >
                      Quick Links
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Keybox
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Downloads
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "16px" },
                        lineHeight: { xs: "18px", md: "24px" },
                        color: "#FFFFFF",
                        textDecoration: "none",
                      }}
                      color="text.secondary"
                      gutterBottom
                      variant="h2"
                      component="a"
                      href=""
                    >
                      Forum
                    </Typography>
                  </Card>
                </Box>

                {/* Input subscribe form */}
                <Box
                  sx={{
                    width: { xs: "350px", md: "300px" },
                    height: "200px",
                    background: "#131313",
                    borderRadius: "10px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    marginTop: { xs: "25px", md: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "26px",
                      color: "#FFFFFF",
                    }}
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
                      sx={{
                        background: "#1E1E1E",
                        borderRadius: "4px",
                        width: { xs: "300px" },
                      }}
                    />
                    <ThemeProvider theme={theme}>
                      <Button
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "12px",
                          lineHeight: "18px",
                          color: "#FFFFFF",
                          textTransform: "none",
                          width: { xs: "150px" },
                        }}
                        variant="contained"
                        type="submit"
                        color="neutral"
                      >
                        Subscribe
                      </Button>
                    </ThemeProvider>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "18px",
                      color: "#FFFFFF",
                      opacity: 0.5,
                    }}
                    color="text.secondary"
                    gutterBottom
                    variant="h3"
                  >
                    *Will send you weekly updates for your better tool
                    management.
                  </Typography>
                </Box>
              </Box>
            </Container>
          </React.Fragment>
        </Box>
      </Container>
    </React.Fragment>
  );
};
