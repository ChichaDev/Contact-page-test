import { ReactComponent as CartLogo } from "../../assets/img/cart.svg";
import { ReactComponent as ProfileLogo } from "../../assets/img/profile.svg";
import { ReactComponent as ProfileMobile } from "../../assets/img/profile-mobile.svg";
import { ReactComponent as MenuClosed } from "../../assets/img/ci_menu-alt-01.svg";
import { ReactComponent as MenuOpen } from "../../assets/img/open-menu.svg";
// import DownArrow from "../../assets/img/down-arrow.svg";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

export const Navbar = () => {
  const pages = ["Home", "Features", "Blog", "Shop", "About", "Contact"];

  const [anchorElNav, setAnchorElNav] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="xl">
        {/* Laptop Logo */}
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "24px",
              color: "black",
              textDecoration: "none",
              lineHeight: "29px",
            }}
          >
            Logo Here
          </Typography>

          {/* mobile Logo Here*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: 800,
              fontStyle: "normal",
              lineHeight: "22px",
              color: "black",
              textDecoration: "none",
            }}
          >
            Logo Here
          </Typography>

          {/* Mobile burger menu*/}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              marginLeft: "190px",
              color: "black",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {anchorElNav ? <MenuOpen /> : <MenuClosed />}
            </IconButton>

            <Menu
              PaperProps={{
                style: {
                  height: "350px",
                  width: "150px",
                  marginLeft: "20px",
                  marginTop: "4px",
                  position: "fixed",
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

              <Tooltip title="Profile">
                <IconButton
                  sx={{
                    p: 0,
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "31px",
                    height: "31px",
                    marginLeft: "20px",
                  }}
                >
                  <ProfileMobile />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cart">
                <IconButton
                  sx={{
                    p: 0,
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "31px",
                    height: "31px",
                    marginLeft: "20px",
                  }}
                >
                  <CartLogo />
                </IconButton>
              </Tooltip>
            </Menu>
          </Box>

          {/* Laptop nav menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "500px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#1F1F1F",
                  display: "block",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Laptop cart and profile */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "40px",
              flexGrow: 0,
              marginRight: "50px",
            }}
          >
            <Tooltip title="Profile">
              <IconButton
                sx={{
                  p: 0,
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "31px",
                  height: "31px",
                }}
              >
                <ProfileLogo />
              </IconButton>
            </Tooltip>

            <Tooltip title="Cart">
              <IconButton
                sx={{
                  p: 0,
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "31px",
                  height: "31px",
                }}
              >
                <CartLogo />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
