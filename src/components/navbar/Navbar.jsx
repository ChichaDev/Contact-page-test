import { ReactComponent as CartLogo } from "../../assets/img/cart.svg";
import { ReactComponent as ProfileLogo } from "../../assets/img/profile.svg";
// import { ReactComponent as ProfileMobile } from "../../assets/img/profile-mobile.svg";
import ProfileMob from "../../assets/img/profile-mobile.svg";
import { ReactComponent as MenuClosed } from "../../assets/img/ci_menu-alt-01.svg";
import { ReactComponent as MenuOpen } from "../../assets/img/open-menu.svg";

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

import {
  appBarStyles,
  laptopLogo,
  laptopNavMenu,
  laptopMenuItem,
  laptopBoxUser,
  laptopCartAndProfile,
  mobileLogo,
  mobileBurger,
  burgerMenuProps,
  mobileMenu,
  mobileCartAndProfile,
} from "./NavbarStyles";

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
    <AppBar position="static" sx={appBarStyles}>
      <Container maxWidth="xl">
        {/* Laptop Logo */}
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={laptopLogo}
          >
            Logo Here
          </Typography>

          {/* Laptop nav menu */}
          <Box sx={laptopNavMenu}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={laptopMenuItem}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Laptop cart and profile */}
          <Box sx={laptopBoxUser}>
            <Tooltip title="Profile">
              <IconButton sx={laptopCartAndProfile}>
                <ProfileLogo />
              </IconButton>
            </Tooltip>

            <Tooltip title="Cart">
              <IconButton sx={laptopCartAndProfile}>
                <CartLogo />
              </IconButton>
            </Tooltip>
          </Box>

          {/* mobile Logo Here*/}
          <Typography variant="h5" noWrap component="a" href="" sx={mobileLogo}>
            Logo Here
          </Typography>

          {/* Mobile burger menu*/}
          <Box sx={mobileBurger}>
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
              PaperProps={burgerMenuProps}
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
              sx={mobileMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

              {/* mobile Cart and Profile */}
              <Tooltip title="Profile">
                <Avatar
                  alt="Profile"
                  src={ProfileMob}
                  sx={mobileCartAndProfile}
                />
              </Tooltip>
              <Tooltip title="Cart">
                <IconButton sx={mobileCartAndProfile}>
                  <CartLogo />
                </IconButton>
              </Tooltip>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
